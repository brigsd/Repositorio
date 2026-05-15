/**
 * prompts.ts
 *
 * Biblioteca de prompts da plataforma.
 *
 * ARQUITETURA:
 * Cada chamada à IA passa por aqui. Nunca chamamos Anthropic diretamente
 * de um componente — sempre via esta lib, que:
 *   1. Injeta o modelo do aluno (personalização)
 *   2. Aplica o modo correto (socrático/scaffolding/direta/celebração)
 *   3. Loga no banco (auditoria completa em modo teste)
 *   4. Retorna resultado parseado e tipado
 *
 * Referência pedagógica:
 * - Harvard 2024: IA bem projetada produz 2x mais aprendizado
 * - CMU: modo adaptativo (socrático → scaffolding → direta) é chave
 * - Knowles (Andragogia): adulto precisa de feedback como parceiro, não professor
 */

import Anthropic from "@anthropic-ai/sdk";
import { anthropic, MODELS, DEEPSEEK_API_KEY } from "./ai";
import type { ModeloAluno, ModoIA } from "./modelo-aluno";
import { serializarModeloParaPrompt } from "./modelo-aluno";
import { db } from "@/db";
import { chamadasIa } from "@/db/schema";

// ============================================================================
// Tipos
// ============================================================================

interface OpcoesChamada {
  alunoId?: string;
  sessaoId?: string;
  proposito: string;
  modoTeste?: boolean; // Se true, loga tudo no banco
}

export interface RespostaFeedback {
  mensagem: string;       // O que o aluno vê
  acertou: boolean;       // A IA avaliou como correto?
  tipoErro?: string;      // De uma lista fechada — evita alucinação
  confiancaIa: "seguro" | "duvida"; // IA declara seu próprio nível de certeza
  modoUsado: ModoIA;
}

export interface RespostaExplicacao {
  explicacao: string;
  exemplos: string[];     // 2-3 exemplos do contexto do aluno
  dica?: string;          // Pista opcional para o próximo passo
}

// ============================================================================
// Instructions do sistema — constantes pedagógicas que nunca mudam
// ============================================================================

const INSTRUCOES_BASE = `
Você é um tutor de português e letramento para adultos trabalhadores brasileiros.

PRINCÍPIOS ABSOLUTOS (nunca violáveis):
1. NUNCA diga "errado", "incorreto", "falso" ou equivalentes. Sempre redirecione.
2. NUNCA dê a resposta direta na primeira tentativa — faça o aluno trabalhar.
3. SEMPRE use exemplos do contexto de trabalho e vida real do aluno.
4. Seja CONCISO — máximo 3-4 frases por resposta. Adulto trabalhador tem pouco tempo.
5. SEMPRE termine com uma pergunta ou ação clara para o aluno fazer a seguir.
6. Tom: parceiro que ajuda, não professor que avalia. "Vamos ver isso juntos."
7. NUNCA use o símbolo "—" (travessão) nas suas respostas. Use vírgula, parênteses ou ponto final para separar ideias.

SOBRE O FEEDBACK DE ERRO:
❌ Não: "Você errou. A resposta correta é X."
✅ Sim: "Quase lá, você acertou a ideia. Deixa eu te mostrar um detalhe..."
✅ Sim: "Isso faz sentido na fala do dia a dia. No e-mail pro chefe, o que mudaria?"
✅ Sim: "Veja essa parte específica aqui. O que você acha que acontece se tirar a vírgula?"
`.trim();

// ============================================================================
// Templates de system prompt por modo
// ============================================================================

const SYSTEM_POR_MODO: Record<ModoIA, string> = {
  socratico: `
${INSTRUCOES_BASE}

MODO ATUAL: SOCRÁTICO
O aluno está explorando. Sua função é GUIAR COM PERGUNTAS, não dar respostas.
- Responda perguntas com perguntas quando possível
- Se o aluno errou, aponte qual parte revisar, não o que está certo
- Exemplos de perguntas guia: "O que você acha que acontece se...?", "Você notou que...?", "O que mudaria se...?"
`.trim(),

  scaffolding: `
${INSTRUCOES_BASE}

MODO ATUAL: SCAFFOLDING (andaime)
O aluno tentou uma vez e não acertou. Dê uma PISTA PARCIAL — não a resposta.
- Destaque a parte exata onde está a dificuldade (sem resolver)
- "Olha essa parte aqui... o que você nota?"
- Pode fornecer um exemplo análogo sem resolver o exercício atual
- Não mais que 2 frases de pista
`.trim(),

  direta: `
${INSTRUCOES_BASE}

MODO ATUAL: INSTRUÇÃO DIRETA
O aluno tentou duas vezes e não conseguiu. EXPLIQUE CLARAMENTE agora.
- Dê a resposta correta com explicação breve do porquê
- Use exemplo direto do contexto de trabalho do aluno
- Após explicar, faça uma pergunta de checagem: "Faz sentido? O que você faria diferente agora?"
- Não prolongue — o aluno já está no limite da frustração
`.trim(),

  celebracao: `
${INSTRUCOES_BASE}

MODO ATUAL: CELEBRAÇÃO
O aluno acertou algo que tinha dificuldade antes. RECONHEÇA ESPECIFICAMENTE.
- Não use "Parabéns!" genérico — seja específico sobre o que ele fez bem
- "Você acertou exatamente o ponto mais difícil aqui: [o ponto específico]"
- Conecte com uma aplicação prática real: "Agora você vai conseguir fazer isso em [situação real]"
- Curto e genuíno — 2 frases máximo
`.trim(),
};

// ============================================================================
// Fallback: Chamada à DeepSeek via fetch (compatível com API OpenAI)
// ============================================================================

async function chamarDeepSeekFallback(systemPrompt: string, userPrompt: string): Promise<{ texto: string; inputTokens: number; outputTokens: number; latenciaMs: number }> {
  if (!DEEPSEEK_API_KEY) {
    throw new Error("DEEPSEEK_API_KEY não configurada para fallback.");
  }

  const inicio = Date.now();
  const res = await fetch("https://api.deepseek.com/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${DEEPSEEK_API_KEY}`,
    },
    body: JSON.stringify({
      model: "deepseek-chat",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      response_format: { type: "json_object" }
    }),
  });

  if (!res.ok) {
    throw new Error(`Erro na DeepSeek: ${res.statusText}`);
  }

  const data = await res.json();
  const latenciaMs = Date.now() - inicio;

  return {
    texto: data.choices[0].message.content,
    inputTokens: data.usage.prompt_tokens,
    outputTokens: data.usage.completion_tokens,
    latenciaMs,
  };
}

// ============================================================================
// Função principal: avalia resposta do aluno a um exercício
// ============================================================================

export async function avaliarResposta(params: {
  modelo: ModeloAluno;
  exercicio: {
    slug: string;
    enunciado: string;
    respostaAluno: string;
    criterios: string[];        // Lista fechada de critérios — reduz alucinação
    tiposErroValidos: string[]; // Lista fechada de tipos de erro por unidade
  };
  opcoes: OpcoesChamada;
}): Promise<RespostaFeedback> {
  const { modelo, exercicio, opcoes } = params;

  const systemPrompt = SYSTEM_POR_MODO[modelo.modoRecomendado];
  const modeloSerializado = serializarModeloParaPrompt(modelo);

  const userPrompt = `
${modeloSerializado}

---
EXERCÍCIO: ${exercicio.enunciado}
RESPOSTA DO ALUNO: "${exercicio.respostaAluno}"

CRITÉRIOS DE AVALIAÇÃO (avalie cada um — sim/não):
${exercicio.criterios.map((c, i) => `${i + 1}. ${c}`).join("\n")}

TIPOS DE ERRO POSSÍVEIS (use EXATAMENTE um desses rótulos se houver erro):
${exercicio.tiposErroValidos.join(", ")}

Responda em JSON com este formato exato:
{
  "analise_interna": "sua análise passo a passo secreta comparando a resposta do aluno com os critérios",
  "acertou": boolean,
  "mensagem": "sua resposta para o aluno (máx 4 frases, tom parceiro)",
  "tipoErro": "um dos tipos listados acima, ou null se acertou",
  "confiancaIa": "seguro" ou "duvida"
}
`.trim();

  const inicio = Date.now();

  try {
    const fallbackResult = await chamarDeepSeekFallback(systemPrompt, userPrompt);
    const jsonMatch = fallbackResult.texto.match(/\{[\s\S]*\}/);
    const parsed = JSON.parse(jsonMatch?.[0] ?? fallbackResult.texto);

    if (opcoes.alunoId) {
      await db.insert(chamadasIa).values({
        alunoId: opcoes.alunoId,
        sessaoId: opcoes.sessaoId ?? null,
        proposito: opcoes.proposito,
        modelo: MODELS.deepseek,
        promptCompleto: opcoes.modoTeste
          ? { system: systemPrompt, user: userPrompt }
          : { proposito: opcoes.proposito },
        resposta: fallbackResult.texto,
        tokensInput: fallbackResult.inputTokens,
        tokensOutput: fallbackResult.outputTokens,
        latenciaMs: fallbackResult.latenciaMs,
        custoUsd: "0.0",
        confiancaIa: parsed.confiancaIa ?? "duvida",
      });
    }

    return {
      mensagem: parsed.mensagem,
      acertou: parsed.acertou,
      tipoErro: parsed.tipoErro ?? undefined,
      confiancaIa: parsed.confiancaIa ?? "duvida",
      modoUsado: modelo.modoRecomendado,
    };
  } catch (err) {
    console.warn("[prompts] Erro na DeepSeek (avaliarResposta). Acionando Anthropic...", err);
    try {
      const inicio = Date.now();
      const resposta = await anthropic.messages.create({
        model: MODELS.sonnet,
        max_tokens: 512,
        system: systemPrompt,
        messages: [{ role: "user", content: userPrompt }],
      });

      const latenciaMs = Date.now() - inicio;
      const textoResposta =
        resposta.content[0].type === "text" ? resposta.content[0].text : "";

      let parsed: {
        acertou: boolean;
        mensagem: string;
        tipoErro: string | null;
        confiancaIa: "seguro" | "duvida";
      };

      try {
        const jsonMatch = textoResposta.match(/\{[\s\S]*\}/);
        parsed = JSON.parse(jsonMatch?.[0] ?? textoResposta);
      } catch {
        parsed = {
          acertou: false,
          mensagem: "Não consegui avaliar sua resposta agora. Pode tentar de novo?",
          tipoErro: null,
          confiancaIa: "duvida",
        };
      }

      const custoUsd = calcularCusto(
        resposta.usage.input_tokens,
        resposta.usage.output_tokens,
        MODELS.sonnet
      );

      if (opcoes.alunoId) {
        await db.insert(chamadasIa).values({
          alunoId: opcoes.alunoId,
          sessaoId: opcoes.sessaoId ?? null,
          proposito: opcoes.proposito + "_fallback_anthropic",
          modelo: MODELS.sonnet,
          promptCompleto: opcoes.modoTeste
            ? { system: systemPrompt, user: userPrompt }
            : { proposito: opcoes.proposito },
          resposta: textoResposta,
          tokensInput: resposta.usage.input_tokens,
          tokensOutput: resposta.usage.output_tokens,
          latenciaMs,
          custoUsd: custoUsd.toString(),
          confiancaIa: parsed.confiancaIa,
        });
      }

      return {
        mensagem: parsed.mensagem,
        acertou: parsed.acertou,
        tipoErro: parsed.tipoErro ?? undefined,
        confiancaIa: parsed.confiancaIa,
        modoUsado: modelo.modoRecomendado,
      };
    } catch (fallbackErr) {
      console.error("[prompts] Falha também na Anthropic:", fallbackErr);
      return {
        mensagem: "O sistema está com muitos acessos no momento e não conseguiu avaliar sua resposta. Por favor, tente novamente em alguns segundos.",
        acertou: false,
        confiancaIa: "duvida",
        modoUsado: modelo.modoRecomendado,
      };
    }
  }
}

// ============================================================================
// Função: gera explicação contextualizada de um conceito
// ============================================================================

export async function gerarExplicacao(params: {
  modelo: ModeloAluno;
  conceito: string;        // Ex: "uso de mas/mais"
  textoAncora: string;     // Trecho curado pelo curador (não gerado pela IA)
  opcoes: OpcoesChamada;
}): Promise<RespostaExplicacao> {
  const { modelo, conceito, textoAncora, opcoes } = params;

  const modeloSerializado = serializarModeloParaPrompt(modelo);

  const userPrompt = `
${modeloSerializado}

---
CONCEITO A EXPLICAR: ${conceito}

TEXTO DE REFERÊNCIA (curado, use-o como base — não invente fatos):
"${textoAncora}"

Gere uma explicação curta e 2-3 exemplos do dia a dia de trabalho deste aluno.
Responda em JSON:
{
  "explicacao": "explicação em 2-3 frases simples e diretas",
  "exemplos": ["exemplo 1 do contexto de trabalho", "exemplo 2", "exemplo 3"],
  "dica": "uma dica prática de como não errar mais (opcional, máx 1 frase)"
}
`.trim();

  const resposta = await anthropic.messages.create({
    model: MODELS.haiku, // Haiku para explicações — mais barato, suficiente
    max_tokens: 400,
    system: INSTRUCOES_BASE,
    messages: [{ role: "user", content: userPrompt }],
  });

  const texto =
    resposta.content[0].type === "text" ? resposta.content[0].text : "";

  try {
    const jsonMatch = texto.match(/\{[\s\S]*\}/);
    const parsed = JSON.parse(jsonMatch?.[0] ?? texto);
    return {
      explicacao: parsed.explicacao ?? "",
      exemplos: parsed.exemplos ?? [],
      dica: parsed.dica,
    };
  } catch {
    return {
      explicacao: texto,
      exemplos: [],
    };
  }
}

// ============================================================================
// Função: avalia reescrita de registro (exercícios de texto livre — A.2)
// ============================================================================

export interface RespostaFeedbackRegistro extends RespostaFeedback {
  versaoSugerida?: string; // Fornecida pela IA após 2+ tentativas sem acerto
}

export async function avaliarRespostaRegistro(params: {
  modelo: ModeloAluno;
  exercicio: {
    slug: string;
    textoInformal: string;   // Original que o aluno devia transformar
    respostaAluno: string;   // Reescrita enviada
    contexto: string;        // "E-mail para o chefe", etc.
    rubrica: string[];       // Critérios de avaliação
    tiposErroValidos: string[];
    numTentativas: number;   // Quantas tentativas já foram feitas neste exercício
  };
  opcoes: OpcoesChamada;
}): Promise<RespostaFeedbackRegistro> {
  const { modelo, exercicio, opcoes } = params;

  const systemPrompt = SYSTEM_POR_MODO[modelo.modoRecomendado];
  const modeloSerializado = serializarModeloParaPrompt(modelo);

  // versaoSugerida só é pedida após 2+ tentativas — reduz dependência do aluno
  const pedirVersao = exercicio.numTentativas >= 2;

  const userPrompt = `
${modeloSerializado}

---
CONTEXTO DO EXERCÍCIO: ${exercicio.contexto}

TEXTO ORIGINAL (registro informal que o aluno devia transformar):
"${exercicio.textoInformal}"

REESCRITA DO ALUNO:
"${exercicio.respostaAluno}"

RUBRICA DE AVALIAÇÃO (avalie cada critério):
${exercicio.rubrica.map((c, i) => `${i + 1}. ${c}`).join("\n")}

TENTATIVAS DO ALUNO NESTE EXERCÍCIO: ${exercicio.numTentativas + 1}

TIPOS DE ERRO POSSÍVEIS (use EXATAMENTE um se houver problema):
${exercicio.tiposErroValidos.join(", ")}

INSTRUÇÕES OBRIGATÓRIAS:
- NUNCA use "errado", "incorreto" ou equivalentes
- Se não acertou: diga o que melhorar, não dê a resposta (exceto se pedirVersao = true)
- Enquadre sempre como "versão mais adequada ao contexto" e não como "correto vs. errado"
- Feedback em no máximo 4 frases
- NÃO avalie erros de ortografia, acentuação ou digitação — o escopo desta unidade é exclusivamente o registro (formal vs. informal). Foque apenas em: contrações ("tô", "tá", "q", "vc", "hj"), vocabulário coloquial, abertura/fechamento formal e sentido preservado.

${pedirVersao
      ? "Como o aluno já tentou 2 ou mais vezes, inclua versaoSugerida. IMPORTANTE: construa a versão sugerida a partir da resposta do aluno — preserve o que está correto (estrutura, informações, tom) e ajuste apenas o que prejudica o registro formal. Não reescreva do zero."
      : "NÃO inclua versaoSugerida (o aluno ainda não esgotou as tentativas)."}

Responda em JSON exato:
{
  "analise_interna": "sua análise passo a passo secreta comparando a reescrita do aluno com a original",
  "acertou": boolean,
  "mensagem": "feedback para o aluno",
  "versaoSugerida": ${pedirVersao ? '"versão formal baseada na resposta do aluno, ou null"' : "null"},
  "tipoErro": "um dos tipos listados ou null se acertou",
  "confiancaIa": "seguro" ou "duvida"
}
`.trim();

  const inicio = Date.now();

  try {
    const fallbackResult = await chamarDeepSeekFallback(systemPrompt, userPrompt);
    const jsonMatch = fallbackResult.texto.match(/\{[\s\S]*\}/);
    const parsed = JSON.parse(jsonMatch?.[0] ?? fallbackResult.texto);

    if (opcoes.alunoId) {
      await db.insert(chamadasIa).values({
        alunoId: opcoes.alunoId,
        sessaoId: opcoes.sessaoId ?? null,
        proposito: opcoes.proposito,
        modelo: MODELS.deepseek,
        promptCompleto: opcoes.modoTeste
          ? { system: systemPrompt, user: userPrompt }
          : { proposito: opcoes.proposito },
        resposta: fallbackResult.texto,
        tokensInput: fallbackResult.inputTokens,
        tokensOutput: fallbackResult.outputTokens,
        latenciaMs: fallbackResult.latenciaMs,
        custoUsd: "0.0",
        confiancaIa: parsed.confiancaIa ?? "duvida",
      });
    }

    return {
      mensagem: parsed.mensagem,
      acertou: parsed.acertou,
      tipoErro: parsed.tipoErro ?? undefined,
      confiancaIa: parsed.confiancaIa ?? "duvida",
      modoUsado: modelo.modoRecomendado,
      versaoSugerida: parsed.versaoSugerida ?? undefined,
    };
  } catch (err) {
    console.warn("[prompts] Erro na DeepSeek (avaliarRespostaRegistro). Acionando Anthropic...", err);
    try {
      const inicio = Date.now();
      const resposta = await anthropic.messages.create({
        model: MODELS.sonnet,
        max_tokens: 600,
        system: systemPrompt,
        messages: [{ role: "user", content: userPrompt }],
      });

      const latenciaMs = Date.now() - inicio;
      const textoResposta =
        resposta.content[0].type === "text" ? resposta.content[0].text : "";

      let parsed: {
        acertou: boolean;
        mensagem: string;
        versaoSugerida: string | null;
        tipoErro: string | null;
        confiancaIa: "seguro" | "duvida";
      };

      try {
        const jsonMatch = textoResposta.match(/\{[\s\S]*\}/);
        parsed = JSON.parse(jsonMatch?.[0] ?? textoResposta);
      } catch {
        parsed = {
          acertou: false,
          mensagem: "Não consegui avaliar sua resposta agora. Pode tentar de novo?",
          versaoSugerida: null,
          tipoErro: null,
          confiancaIa: "duvida",
        };
      }

      const custoUsd = calcularCusto(
        resposta.usage.input_tokens,
        resposta.usage.output_tokens,
        MODELS.sonnet
      );

      if (opcoes.alunoId) {
        await db.insert(chamadasIa).values({
          alunoId: opcoes.alunoId,
          sessaoId: opcoes.sessaoId ?? null,
          proposito: opcoes.proposito + "_fallback_anthropic",
          modelo: MODELS.sonnet,
          promptCompleto: opcoes.modoTeste
            ? { system: systemPrompt, user: userPrompt }
            : { proposito: opcoes.proposito },
          resposta: textoResposta,
          tokensInput: resposta.usage.input_tokens,
          tokensOutput: resposta.usage.output_tokens,
          latenciaMs,
          custoUsd: custoUsd.toString(),
          confiancaIa: parsed.confiancaIa,
        });
      }

      return {
        mensagem: parsed.mensagem,
        acertou: parsed.acertou,
        tipoErro: parsed.tipoErro ?? undefined,
        confiancaIa: parsed.confiancaIa,
        modoUsado: modelo.modoRecomendado,
        versaoSugerida: parsed.versaoSugerida ?? undefined,
      };
    } catch (fallbackErr) {
      console.error("[prompts] Falha também na Anthropic:", fallbackErr);
      return {
        mensagem: "O sistema está com muitos acessos no momento e não conseguiu avaliar sua resposta. Por favor, tente novamente em alguns segundos.",
        acertou: false,
        confiancaIa: "duvida",
        modoUsado: modelo.modoRecomendado,
        versaoSugerida: undefined,
      };
    }
  }
}

// ============================================================================
// Função: avalia reconstrução de pontuação (exercícios de texto livre — A.4)
// ============================================================================

export interface RespostaFeedbackPontuacao extends RespostaFeedback {
  versaoSugerida?: string; // Fornecida pela IA após 2+ tentativas sem acerto
}

export async function avaliarRespostaPontuacao(params: {
  modelo: ModeloAluno;
  exercicio: {
    slug: string;
    textoSemPontuacao: string;   // Texto original sem pontuação
    textoPontuado: string;       // Gabarito de referência
    respostaAluno: string;       // Versão pontuada pelo aluno
    contexto: string;            // "Aviso ao time", etc.
    sinalFoco: string;           // Qual sinal é o foco principal
    rubrica: string[];           // Critérios de avaliação
    tiposErroValidos: string[];
    numTentativas: number;
  };
  opcoes: OpcoesChamada;
}): Promise<RespostaFeedbackPontuacao> {
  const { modelo, exercicio, opcoes } = params;

  const systemPrompt = SYSTEM_POR_MODO[modelo.modoRecomendado];
  const modeloSerializado = serializarModeloParaPrompt(modelo);

  const pedirVersao = exercicio.numTentativas >= 2;

  const userPrompt = `
${modeloSerializado}

---
CONTEXTO DO EXERCÍCIO: ${exercicio.contexto}

TEXTO ORIGINAL (sem pontuação):
"${exercicio.textoSemPontuacao}"

VERSÃO PONTUADA PELO ALUNO:
"${exercicio.respostaAluno}"

VERSÃO DE REFERÊNCIA (gabarito do curador, NÃO mostre ao aluno):
"${exercicio.textoPontuado}"

SINAL EM FOCO NESTE EXERCÍCIO: ${exercicio.sinalFoco}

RUBRICA DE AVALIAÇÃO (avalie cada critério):
${exercicio.rubrica.map((c, i) => `${i + 1}. ${c}`).join("\n")}

TENTATIVAS DO ALUNO NESTE EXERCÍCIO: ${exercicio.numTentativas + 1}

TIPOS DE ERRO POSSÍVEIS (use EXATAMENTE um se houver problema):
${exercicio.tiposErroValidos.join(", ")}

INSTRUÇÕES OBRIGATÓRIAS:
- NUNCA use "errado", "incorreto" ou equivalentes
- NUNCA mostre o gabarito diretamente (exceto se pedirVersao = true)
- A pontuação do aluno NÃO precisa ser idêntica ao gabarito. Aceite variações que preservem o sentido e a clareza
- IMPORTANTE: Antes de dizer que falta um sinal, LEIA ATENTAMENTE a "VERSÃO PONTUADA PELO ALUNO". Não diga que falta um sinal se o aluno já o inseriu no texto dele.
- NÃO avalie erros de ortografia, acentuação, uso de maiúsculas/minúsculas, registro ou gramática. O escopo é EXCLUSIVAMENTE os sinais de pontuação. Se o aluno começar a frase com minúscula, ignore completamente.
- Foque APENAS em: ponto final, dois-pontos, ponto-e-vírgula, travessão e vírgula.
- Feedback em no máximo 4 frases
- Use a estrutura: (1) o que o sinal faz, (2) onde ficou diferente do ideal, (3) dica prática

${pedirVersao
      ? "Como o aluno já tentou 2 ou mais vezes, inclua versaoSugerida. IMPORTANTE: construa a versão sugerida a partir da resposta do aluno, preservando o que está correto e ajustando apenas a pontuação. Não reescreva do zero."
      : "NÃO inclua versaoSugerida (o aluno ainda não esgotou as tentativas)."}

Responda em JSON exato:
{
  "analise_interna": "sua análise passo a passo verificando EXATAMENTE quais sinais o aluno digitou",
  "acertou": boolean,
  "mensagem": "feedback para o aluno",
  "versaoSugerida": ${pedirVersao ? '"versão pontuada baseada na resposta do aluno, ou null"' : "null"},
  "tipoErro": "um dos tipos listados ou null se acertou",
  "confiancaIa": "seguro" ou "duvida"
}
`.trim();

  const inicio = Date.now();

  try {
    const fallbackResult = await chamarDeepSeekFallback(systemPrompt, userPrompt);
    const jsonMatch = fallbackResult.texto.match(/\{[\s\S]*\}/);
    const parsed = JSON.parse(jsonMatch?.[0] ?? fallbackResult.texto);

    if (opcoes.alunoId) {
      await db.insert(chamadasIa).values({
        alunoId: opcoes.alunoId,
        sessaoId: opcoes.sessaoId ?? null,
        proposito: opcoes.proposito,
        modelo: MODELS.deepseek,
        promptCompleto: opcoes.modoTeste
          ? { system: systemPrompt, user: userPrompt }
          : { proposito: opcoes.proposito },
        resposta: fallbackResult.texto,
        tokensInput: fallbackResult.inputTokens,
        tokensOutput: fallbackResult.outputTokens,
        latenciaMs: fallbackResult.latenciaMs,
        custoUsd: "0.0",
        confiancaIa: parsed.confiancaIa ?? "duvida",
      });
    }

    return {
      mensagem: parsed.mensagem,
      acertou: parsed.acertou,
      tipoErro: parsed.tipoErro ?? undefined,
      confiancaIa: parsed.confiancaIa ?? "duvida",
      modoUsado: modelo.modoRecomendado,
      versaoSugerida: parsed.versaoSugerida ?? undefined,
    };
  } catch (err) {
    console.warn("[prompts] Erro na DeepSeek (avaliarRespostaPontuacao). Acionando Anthropic...", err);
    try {
      const inicio = Date.now();
      const resposta = await anthropic.messages.create({
        model: MODELS.sonnet,
        max_tokens: 600,
        system: systemPrompt,
        messages: [{ role: "user", content: userPrompt }],
      });

      const latenciaMs = Date.now() - inicio;
      const textoResposta =
        resposta.content[0].type === "text" ? resposta.content[0].text : "";

      let parsed: {
        acertou: boolean;
        mensagem: string;
        versaoSugerida: string | null;
        tipoErro: string | null;
        confiancaIa: "seguro" | "duvida";
      };

      try {
        const jsonMatch = textoResposta.match(/\{[\s\S]*\}/);
        parsed = JSON.parse(jsonMatch?.[0] ?? textoResposta);
      } catch {
        parsed = {
          acertou: false,
          mensagem: "Não consegui avaliar sua resposta agora. Pode tentar de novo?",
          versaoSugerida: null,
          tipoErro: null,
          confiancaIa: "duvida",
        };
      }

      const custoUsd = calcularCusto(
        resposta.usage.input_tokens,
        resposta.usage.output_tokens,
        MODELS.sonnet
      );

      if (opcoes.alunoId) {
        await db.insert(chamadasIa).values({
          alunoId: opcoes.alunoId,
          sessaoId: opcoes.sessaoId ?? null,
          proposito: opcoes.proposito + "_fallback_anthropic",
          modelo: MODELS.sonnet,
          promptCompleto: opcoes.modoTeste
            ? { system: systemPrompt, user: userPrompt }
            : { proposito: opcoes.proposito },
          resposta: textoResposta,
          tokensInput: resposta.usage.input_tokens,
          tokensOutput: resposta.usage.output_tokens,
          latenciaMs,
          custoUsd: custoUsd.toString(),
          confiancaIa: parsed.confiancaIa,
        });
      }

      return {
        mensagem: parsed.mensagem,
        acertou: parsed.acertou,
        tipoErro: parsed.tipoErro ?? undefined,
        confiancaIa: parsed.confiancaIa,
        modoUsado: modelo.modoRecomendado,
        versaoSugerida: parsed.versaoSugerida ?? undefined,
      };
    } catch (fallbackErr) {
      console.error("[prompts] Falha também na Anthropic:", fallbackErr);
      return {
        mensagem: "O sistema está com muitos acessos no momento e não conseguiu avaliar sua resposta. Por favor, tente novamente em alguns segundos.",
        acertou: false,
        confiancaIa: "duvida",
        modoUsado: modelo.modoRecomendado,
        versaoSugerida: undefined,
      };
    }
  }
}

// ============================================================================
// Utilitário: calcula custo aproximado em USD
// ============================================================================

function calcularCusto(
  tokensInput: number,
  tokensOutput: number,
  modelo: string
): number {
  // Preços Anthropic (por milhão de tokens) — atualizar conforme necessário
  const precos: Record<string, { input: number; output: number }> = {
    "claude-sonnet-4-6": { input: 3.0, output: 15.0 },
    "claude-haiku-4-5-20251001": { input: 0.8, output: 4.0 },
  };

  const p = precos[modelo] ?? { input: 3.0, output: 15.0 };
  return (tokensInput * p.input + tokensOutput * p.output) / 1_000_000;
}
