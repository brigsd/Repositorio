/**
 * modelo-aluno.ts
 *
 * Monta o "modelo de aluno" que a IA recebe em cada chamada.
 * É o coração da personalização: sem isso, a IA é genérica.
 *
 * Baseado em pesquisa de Intelligent Tutoring Systems (CMU/Harvard 2024):
 * a IA precisa de um modelo mental do aluno para adaptar modo, tom e exemplos.
 */

import { and, desc, eq, gte } from "drizzle-orm";
import { db } from "@/db";
import { alunos, tentativas, progresso, eventos, sessoes } from "@/db/schema";

// ============================================================================
// Tipos
// ============================================================================

export type ContextoPessoal =
  | "mecanico"
  | "soldador"
  | "construcao"
  | "vendas"
  | "cuidados"
  | "domestico"
  | "outro";

export type NivelConfianca = "alta" | "media" | "baixa";

export type ModoIA =
  | "socratico"      // Aluno explorando — IA pergunta, não responde
  | "scaffolding"    // Aluno com dificuldade — IA dá pista parcial
  | "direta"         // Aluno travado (2+ erros) — IA explica claramente
  | "celebracao";    // Aluno acertou algo difícil — IA reconhece especificamente

export interface ModeloAluno {
  nome: string;
  contextoPessoal: ContextoPessoal;
  nivelAtual: "A" | "B" | "C";
  unidadeAtual: number;

  // Padrões de erro detectados nas últimas 20 tentativas
  errosFrequentes: Record<string, number>;

  // Taxa de acerto geral (últimas 20 tentativas)
  taxaAcerto: number;

  // Quantas vezes errou NESTE exercício específico (decide o modo da IA)
  errosExercicioAtual: number;

  // Velocidade de aprendizado
  velocidade: "rapida" | "moderada" | "lenta";

  // Engajamento
  diasSemEstudar: number;
  sessoesNaSemana: number;

  // Confiança auto-percebida + observada
  confiancaObservada: NivelConfianca;

  // Modo recomendado para esta interação
  modoRecomendado: ModoIA;
}

// ============================================================================
// Função principal: monta o modelo do aluno a partir do banco
// ============================================================================

export async function construirModeloAluno(
  alunoId: string,
  exercicioSlug: string,
  unidadeId: string
): Promise<ModeloAluno> {
  // 1. Dados base do aluno
  const [aluno] = await db
    .select()
    .from(alunos)
    .where(eq(alunos.id, alunoId))
    .limit(1);

  if (!aluno) throw new Error(`Aluno ${alunoId} não encontrado`);

  // 2. Últimas 20 tentativas para calcular taxa de acerto e erros frequentes
  const ultimasTentativas = await db
    .select()
    .from(tentativas)
    .where(eq(tentativas.alunoId, alunoId))
    .orderBy(desc(tentativas.criadoEm))
    .limit(20);

  const totalTentativas = ultimasTentativas.length;
  const totalAcertos = ultimasTentativas.filter((t) => t.acertou).length;
  const taxaAcerto =
    totalTentativas > 0 ? totalAcertos / totalTentativas : 0.5;

  // Erros frequentes agrupados por tipo
  const errosFrequentes: Record<string, number> = {};
  for (const t of ultimasTentativas) {
    if (!t.acertou && t.tipoErro) {
      errosFrequentes[t.tipoErro] = (errosFrequentes[t.tipoErro] ?? 0) + 1;
    }
  }

  // 3. Quantas vezes errou NESTE exercício específico (determina o modo da IA)
  const errosNesteExercicio = ultimasTentativas.filter(
    (t) => t.exercicio === exercicioSlug && !t.acertou
  ).length;

  // 4. Dados de sessão para engajamento
  const seteDiasAtras = new Date();
  seteDiasAtras.setDate(seteDiasAtras.getDate() - 7);

  const sessoesRecentes = await db
    .select()
    .from(sessoes)
    .where(
      and(
        eq(sessoes.alunoId, alunoId),
        gte(sessoes.iniciadaEm, seteDiasAtras)
      )
    );

  const ultimaSessao = sessoesRecentes[0];
  const diasSemEstudar = ultimaSessao
    ? Math.floor(
        (Date.now() - ultimaSessao.iniciadaEm.getTime()) / (1000 * 60 * 60 * 24)
      )
    : 999;

  // 5. Progresso na unidade atual
  const [progressoUnidade] = await db
    .select()
    .from(progresso)
    .where(
      and(
        eq(progresso.alunoId, alunoId),
        eq(progresso.unidadeId, unidadeId)
      )
    )
    .limit(1);

  // TODO: puxar do diagnóstico real quando houver tabela de diagnóstico linkada
  const nivelAtual: "A" | "B" | "C" = "A";

  // 6. Velocidade de aprendizado (tempo médio por tentativa)
  const tentativasComTempo = ultimasTentativas.filter(
    (t) => t.tempoSegundos !== null && t.tempoSegundos !== undefined
  );
  const tempoMedio =
    tentativasComTempo.length > 0
      ? tentativasComTempo.reduce((acc, t) => acc + (t.tempoSegundos ?? 0), 0) /
        tentativasComTempo.length
      : 60;

  const velocidade =
    tempoMedio < 30
      ? "rapida"
      : tempoMedio < 90
      ? "moderada"
      : "lenta";

  // 7. Confiança observada (baseada em taxa de acerto + padrão de abandono)
  const confiancaObservada: NivelConfianca =
    taxaAcerto >= 0.75 ? "alta" : taxaAcerto >= 0.5 ? "media" : "baixa";

  // 8. Modo recomendado (coração do sistema adaptativo)
  //    Lógica baseada em pesquisa Harvard/CMU 2024:
  //    - 0 erros no exercício atual → socrático (aluno está explorando)
  //    - 1 erro → scaffolding (dá pista, não resposta)
  //    - 2+ erros → instrução direta (frustração destrói motivação adulta)
  //    - Acertou algo com taxa histórica < 50% → celebração
  const modoRecomendado: ModoIA =
    errosNesteExercicio === 0
      ? "socratico"
      : errosNesteExercicio === 1
      ? "scaffolding"
      : "direta";

  // Extrai contexto pessoal do perfil (via atributos extras no futuro)
  // Por ora, usa valor padrão — será expandido no onboarding
  const contextoPessoal: ContextoPessoal = "outro";

  return {
    nome: aluno.nome,
    contextoPessoal,
    nivelAtual,
    unidadeAtual: 6, // TODO: puxar do progresso real
    errosFrequentes,
    taxaAcerto,
    errosExercicioAtual: errosNesteExercicio,
    velocidade,
    diasSemEstudar,
    sessoesNaSemana: sessoesRecentes.length,
    confiancaObservada,
    modoRecomendado,
  };
}

// ============================================================================
// Serializa o modelo para injetar no system prompt
// Formato compacto mas rico — cada linha tem intenção pedagógica
// ============================================================================

export function serializarModeloParaPrompt(m: ModeloAluno): string {
  const errosTop = Object.entries(m.errosFrequentes)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3)
    .map(([tipo, n]) => `${tipo} (${n}x)`)
    .join(", ");

  const contextoExemplos: Record<ContextoPessoal, string> = {
    mecanico: "mecânico de veículos",
    soldador: "soldador",
    construcao: "trabalhador da construção civil",
    vendas: "vendedor",
    cuidados: "cuidador/enfermagem",
    domestico: "trabalhador doméstico",
    outro: "trabalhador",
  };

  return `
PERFIL DO ALUNO:
- Nome: ${m.nome}
- Ocupação: ${contextoExemplos[m.contextoPessoal]}
- Nível atual: ${m.nivelAtual}, Unidade ${m.unidadeAtual}
- Taxa de acerto recente: ${Math.round(m.taxaAcerto * 100)}%
- Erros mais frequentes: ${errosTop || "nenhum padrão identificado ainda"}
- Confiança observada: ${m.confiancaObservada}
- Dias sem estudar: ${m.diasSemEstudar === 999 ? "primeira sessão" : m.diasSemEstudar}
- Velocidade de aprendizado: ${m.velocidade}

MODO DE INTERAÇÃO AGORA: ${m.modoRecomendado.toUpperCase()}
Erros neste exercício específico: ${m.errosExercicioAtual}
`.trim();
}
