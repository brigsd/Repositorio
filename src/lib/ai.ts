import Anthropic from "@anthropic-ai/sdk";

if (!process.env.ANTHROPIC_API_KEY) {
  throw new Error("ANTHROPIC_API_KEY não está definida. Veja .env.example.");
}

export const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Modelos disponíveis no projeto.
// Sonnet 4.6: tarefas de raciocínio (correção de redação, classificação fina)
// Haiku 4.5:  tarefas mecânicas (lacunas, tutor de dúvidas simples)
export const MODELS = {
  sonnet: "claude-sonnet-4-6",
  haiku: "claude-haiku-4-5-20251001",
} as const;

export type ModelName = keyof typeof MODELS;
