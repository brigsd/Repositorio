/**
 * Tipos para exercícios de reescrita de registro — Unidade A.2.
 *
 * Separado de tipos.ts porque o modelo é fundamentalmente diferente:
 * não há gabarito único. A avaliação é feita por rubrica via IA.
 */

export interface ExemplarRegistro {
  informal: string;
  formal: string;
}

/**
 * ExercicioReescrita — dois subtipos:
 *
 * "identificacao_registro": múltipla escolha (qual versão é formal?)
 *   — avaliação local, sem IA
 *
 * "reescrita_registro": aluno transforma texto informal em formal
 *   — avaliação via IA com rubrica
 */
export interface ExercicioReescrita {
  slug: string;
  tipo: "identificacao_registro" | "reescrita_registro";
  contexto: string;   // Badge exibido: "E-mail para o chefe", etc.
  enunciado: string;

  // identificacao_registro ─────────────────────────────────────────
  opcoes?: [string, string];        // [opção A, opção B]
  gabarito?: string;                // A opção correta (string exata de opcoes)
  feedbackAcerto?: string;
  feedbackErro?: [string, string];  // [socrático, direto]

  // reescrita_registro ─────────────────────────────────────────────
  textoInformal?: string;           // Texto que o aluno deve reescrever
  exemploPar?: ExemplarRegistro;    // Modelo visível ANTES e DURANTE a prática
  rubrica?: string[];               // Critérios que a IA avalia
  tiposErroValidos?: string[];      // Lista fechada — reduz alucinação da IA
}
