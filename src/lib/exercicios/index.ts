/**
 * Registro central de exercícios por slug de unidade.
 *
 * Para adicionar uma nova unidade:
 * 1. Crie o arquivo em src/lib/exercicios/ (ex: a7-concordancia.ts)
 * 2. Importe e registre aqui
 * 3. Adicione o slug ao UNIDADES_ATIVAS em src/app/page.tsx
 */

import type { ExercicioGerado } from "./tipos";
import type { ExercicioReescrita } from "./tipos-reescrita";
import { EXERCICIOS_A5 } from "./a5-acentos";
import { EXERCICIOS_A6 } from "./a6-palavras";
import { EXERCICIOS_A2 } from "./a2-registros";

export type { ExercicioGerado };
export type { ExercicioReescrita };

const REGISTRO: Record<string, ExercicioGerado[]> = {
  "a-5-acentos": EXERCICIOS_A5,
  "a-6-palavras-armadilha": EXERCICIOS_A6,
};

// Unidades com exercícios de reescrita (avaliação por IA)
const REGISTRO_REESCRITA: Record<string, ExercicioReescrita[]> = {
  "a-2-registros": EXERCICIOS_A2,
};

/**
 * Retorna os exercícios de uma unidade pelo slug.
 * Retorna null se a unidade não tem exercícios cadastrados.
 */
export function obterExercicios(slug: string): ExercicioGerado[] | null {
  return REGISTRO[slug] ?? null;
}

/**
 * Retorna exercícios de reescrita (avaliação por IA) pelo slug.
 * Retorna null se a unidade não usa esse formato.
 */
export function obterExerciciosReescrita(slug: string): ExercicioReescrita[] | null {
  return REGISTRO_REESCRITA[slug] ?? null;
}

/**
 * Retorna os slugs de todas as unidades com exercícios prontos.
 */
export function unidadesComExercicios(): string[] {
  return [...Object.keys(REGISTRO), ...Object.keys(REGISTRO_REESCRITA)];
}
