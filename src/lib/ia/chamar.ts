/**
 * Chamada base para a IA.
 *
 * Encapsula:
 * - Chamada à API Anthropic
 * - Parsing de saída JSON com validação Zod
 * - Cálculo de custo
 * - Registro em `chamadas_ia` para auditoria
 *
 * Toda chamada da plataforma à IA deve passar por aqui, NUNCA chamar
 * `anthropic.messages.create` direto. Isso garante telemetria consistente.
 */
import { z } from "zod";
import { anthropic, MODELS, type ModelName } from "@/lib/ai";
import { db, schema } from "@/db";

export interface ChamarIaOptions<TOutput> {
  /** Identificador curto e estável da tarefa. Ex: "corrigir_palavras_armadilha". */
  proposito: string;
  modelo: ModelName;
  systemPrompt: string;
  userMessage: string;
  /** Schema Zod que valida a saída JSON da IA. */
  outputSchema: z.ZodType<TOutput>;
  maxTokens?: number;
  alunoId?: string;
  sessaoId?: string;
}

export interface ChamarIaResult<TOutput> {
  resultado: TOutput;
  metadados: {
    tokensInput: number;
    tokensOutput: number;
    latenciaMs: number;
    custoUsd: string;
    confianca: "seguro" | "duvida" | null;
  };
}

/**
 * Preço por 1M de tokens (USD), aproximado.
 * Sonnet 4.6: $3 input / $15 output
 * Haiku 4.5:  $1 input / $5  output
 */
const PRECOS_POR_MTOK = {
  sonnet: { input: 3.0, output: 15.0 },
  haiku: { input: 1.0, output: 5.0 },
} as const;

export async function chamarIa<TOutput>(
  opts: ChamarIaOptions<TOutput>,
): Promise<ChamarIaResult<TOutput>> {
  const inicio = Date.now();

  const response = await anthropic.messages.create({
    model: MODELS[opts.modelo],
    max_tokens: opts.maxTokens ?? 1024,
    system: opts.systemPrompt,
    messages: [{ role: "user", content: opts.userMessage }],
  });

  const latenciaMs = Date.now() - inicio;

  // Concatena todos os blocos de texto da resposta
  const textoBruto = response.content
    .filter((block): block is Anthropic.TextBlock => block.type === "text")
    .map((block) => block.text)
    .join("\n");

  // Tenta extrair o primeiro objeto JSON do texto (a IA pode ter explicado antes)
  const parsed = extrairJson(textoBruto);
  const validacao = opts.outputSchema.safeParse(parsed);

  if (!validacao.success) {
    throw new Error(
      `Saída da IA não bate com o schema esperado para "${opts.proposito}".\n` +
        `Erros: ${validacao.error.message}\n` +
        `Resposta bruta: ${textoBruto.slice(0, 500)}`,
    );
  }

  const tokensInput = response.usage.input_tokens;
  const tokensOutput = response.usage.output_tokens;
  const custoUsd = calcularCusto(opts.modelo, tokensInput, tokensOutput);
  const confianca = extrairConfianca(parsed);

  // Loga em chamadas_ia (auditoria — usado mais no modo teste, mas sempre grava)
  await db.insert(schema.chamadasIa).values({
    alunoId: opts.alunoId,
    sessaoId: opts.sessaoId,
    proposito: opts.proposito,
    modelo: MODELS[opts.modelo],
    promptCompleto: {
      system: opts.systemPrompt,
      user: opts.userMessage,
    },
    resposta: textoBruto,
    tokensInput,
    tokensOutput,
    latenciaMs,
    custoUsd,
    confiancaIa: confianca,
  });

  return {
    resultado: validacao.data,
    metadados: { tokensInput, tokensOutput, latenciaMs, custoUsd, confianca },
  };
}

function extrairJson(texto: string): unknown {
  // Procura o primeiro `{` e o último `}` balanceado
  const inicio = texto.indexOf("{");
  const fim = texto.lastIndexOf("}");
  if (inicio === -1 || fim === -1 || fim < inicio) {
    throw new Error(`Resposta da IA não contém JSON: ${texto.slice(0, 200)}`);
  }
  const candidato = texto.slice(inicio, fim + 1);
  try {
    return JSON.parse(candidato);
  } catch (err) {
    throw new Error(
      `JSON inválido na resposta da IA: ${(err as Error).message}\n` +
        `Tentou parsear: ${candidato.slice(0, 200)}`,
    );
  }
}

function calcularCusto(
  modelo: ModelName,
  tokensInput: number,
  tokensOutput: number,
): string {
  const preco = PRECOS_POR_MTOK[modelo];
  const custo =
    (tokensInput / 1_000_000) * preco.input +
    (tokensOutput / 1_000_000) * preco.output;
  return custo.toFixed(6);
}

function extrairConfianca(parsed: unknown): "seguro" | "duvida" | null {
  if (typeof parsed !== "object" || parsed === null) return null;
  const valor = (parsed as Record<string, unknown>).confianca;
  return valor === "seguro" || valor === "duvida" ? valor : null;
}

// Re-import de tipo necessário para o filter type guard acima
import type Anthropic from "@anthropic-ai/sdk";
