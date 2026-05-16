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
import type { ExercicioPontuacao } from "./tipos-pontuacao";
import { EXERCICIOS_A3 } from "./a3-virgula";
import { EXERCICIOS_A5 } from "./a5-acentos";
import { EXERCICIOS_A6 } from "./a6-palavras";
import { EXERCICIOS_A2 } from "./a2-registros";
import { EXERCICIOS_A4 } from "./a4-pontuacao";
import { EXERCICIOS_A7 } from "./a7-concordancia";
import { EXERCICIOS_A8 } from "./a8-concordancia-nominal";
import { EXERCICIOS_A9 } from "./a9-regencia";
import { EXERCICIOS_A10 } from "./a10-projeto";
import { EXERCICIOS_B1 } from "./b1-tipologias";
import { EXERCICIOS_B2 } from "./b2-ideia-principal";
import { EXERCICIOS_B3 } from "./b3-inferencia";

export type { ExercicioGerado };
export type { ExercicioReescrita };
export type { ExercicioPontuacao };

const REGISTRO: Record<string, ExercicioGerado[]> = {
  "a-3-virgula": EXERCICIOS_A3,
  "a-5-acentos": EXERCICIOS_A5,
  "a-6-palavras-armadilha": EXERCICIOS_A6,
  "a-7-concordancia-verbal": EXERCICIOS_A7,
  "a-8-concordancia-nominal": EXERCICIOS_A8,
  "a-9-regencia": EXERCICIOS_A9,
  "a-10-projeto": EXERCICIOS_A10,
  "b-1-tipologias": EXERCICIOS_B1,
  "b-2-ideia-principal": EXERCICIOS_B2,
  "b-3-inferencia": EXERCICIOS_B3,
};

const REGISTRO_REESCRITA: Record<string, ExercicioReescrita[]> = {
  "a-2-registros": EXERCICIOS_A2,
};

// Unidades com exercícios de pontuação (identificação + reconstrução com IA)
const REGISTRO_PONTUACAO: Record<string, ExercicioPontuacao[]> = {
  "a-4-outros-sinais": EXERCICIOS_A4,
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
 * Retorna exercícios de pontuação pelo slug.
 * Retorna null se a unidade não usa esse formato.
 */
export function obterExerciciosPontuacao(slug: string): ExercicioPontuacao[] | null {
  return REGISTRO_PONTUACAO[slug] ?? null;
}

/**
 * Retorna os slugs de todas as unidades com exercícios prontos.
 */
export function unidadesComExercicios(): string[] {
  return [...Object.keys(REGISTRO), ...Object.keys(REGISTRO_REESCRITA), ...Object.keys(REGISTRO_PONTUACAO)];
}
