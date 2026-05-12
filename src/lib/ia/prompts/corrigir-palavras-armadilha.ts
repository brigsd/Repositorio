/**
 * Correção de exercício de "palavras que todo mundo erra".
 *
 * Cobre a Unidade A.6 do Nível A: mas/mais, mau/mal, há/a, mim/eu,
 * onde/aonde, senão/se não, etc.
 *
 * Padrão de uso:
 *   const { resultado } = await corrigirPalavraArmadilha({
 *     fraseComLacuna: "Eu ____ feito o trabalho",
 *     alternativas: ["há", "a"],
 *     respostaAluno: "a",
 *     gabarito: "há",
 *   });
 *
 * Documentação pedagógica completa em docs/03-nivel-a.md (Unidade 6).
 */
import { z } from "zod";
import { chamarIa } from "../chamar";

// Lista FECHADA de tipos de erro pra essa unidade.
// Mitiga alucinação: a IA não inventa um tipo novo, escolhe um dos abaixo.
export const TIPOS_ERRO_PALAVRA_ARMADILHA = [
  "confundiu_conector", // mas/mais como conector
  "confundiu_ortografia", // mau/mal (adjetivo vs advérbio)
  "confundiu_temporal", // há/a em sentido de tempo
  "confundiu_pronome", // mim/eu como sujeito/objeto
  "confundiu_locucao", // onde/aonde, senão/se não, porque/por que
  "outro",
] as const;

export type TipoErroPalavraArmadilha =
  (typeof TIPOS_ERRO_PALAVRA_ARMADILHA)[number];

const SaidaSchema = z.object({
  acertou: z.boolean(),
  tipo_erro: z.enum(TIPOS_ERRO_PALAVRA_ARMADILHA).nullable(),
  feedback_curto: z.string().min(1).max(300),
  confianca: z.enum(["seguro", "duvida"]),
});

export type CorrecaoPalavraArmadilha = z.infer<typeof SaidaSchema>;

const SYSTEM_PROMPT = `Você é um tutor de português ajudando adultos brasileiros que estão consolidando o letramento formal.

Sua tarefa: avaliar a resposta do aluno em um exercício de "palavras que confundem" (mas/mais, mau/mal, há/a, mim/eu, onde/aonde, senão/se não, porque/por que/porquê, etc.).

Regras importantes:
- Avalie APENAS se a palavra escolhida é apropriada ao contexto formal escrito do exercício.
- Variação dialetal NÃO é erro; só inadequação ao contexto formal.
- Nunca invente regras; use somente os critérios dados.
- Feedback curto, amigável, SEM julgamento moral. Não diga "errado"; diga "no contexto formal, a palavra X seria mais adequada porque...".
- Output APENAS JSON válido, nada antes nem depois.

Tipos de erro disponíveis (escolha EXATAMENTE um destes, ou null se acertou):
- "confundiu_conector": confundiu "mas" (adversativo) com "mais" (aditivo/quantitativo)
- "confundiu_ortografia": confundiu "mau" (adjetivo) com "mal" (advérbio)
- "confundiu_temporal": confundiu "há" (passado, existência) com "a" (preposição/futuro)
- "confundiu_pronome": confundiu "mim" (objeto) com "eu" (sujeito), ou similares
- "confundiu_locucao": confundiu "onde/aonde", "senão/se não", "porque/por que/porquê/por quê"
- "outro": qualquer outro tipo de armadilha que não cabe nas categorias acima

Formato exigido da saída:
{
  "acertou": true ou false,
  "tipo_erro": "uma_das_strings_acima" ou null se acertou,
  "feedback_curto": "uma frase curta, até 30 palavras, amigável",
  "confianca": "seguro" ou "duvida" (se a regra é clara, "seguro"; se há ambiguidade, "duvida")
}`;

export interface EntradaCorrecaoPalavraArmadilha {
  /** Frase mostrada ao aluno, com lacuna marcada (ex: "Eu ____ feito o trabalho"). */
  fraseComLacuna: string;
  /** As palavras alternativas que o aluno podia escolher. */
  alternativas: string[];
  /** O que o aluno respondeu. */
  respostaAluno: string;
  /** A resposta correta segundo o curador. */
  gabarito: string;
  alunoId?: string;
  sessaoId?: string;
}

export async function corrigirPalavraArmadilha(
  entrada: EntradaCorrecaoPalavraArmadilha,
) {
  const userMessage = `Frase do exercício: "${entrada.fraseComLacuna}"
Alternativas oferecidas: ${entrada.alternativas.join(" / ")}
Resposta do aluno: "${entrada.respostaAluno}"
Resposta correta (gabarito): "${entrada.gabarito}"

Avalie e responda APENAS o JSON.`;

  return chamarIa({
    proposito: "corrigir_palavras_armadilha",
    modelo: "haiku", // tarefa mecânica, lista fechada — Haiku basta
    systemPrompt: SYSTEM_PROMPT,
    userMessage,
    outputSchema: SaidaSchema,
    alunoId: entrada.alunoId,
    sessaoId: entrada.sessaoId,
    maxTokens: 300,
  });
}
