/**
 * Tipos para exercícios de pontuação — Unidade A.4.
 *
 * Dois subtipos:
 *
 * "identificar_pontuacao": múltipla escolha (qual versão está bem pontuada?)
 *   — avaliação local, sem IA
 *
 * "reconstrucao_pontuacao": aluno recebe texto sem pontuação e deve inserir
 *   os sinais corretos. Texto pré-preenchido no textarea (Sweller/Bandura).
 *   — avaliação via IA com rubrica
 */

export interface ExercicioPontuacao {
  slug: string;
  tipo: "identificar_pontuacao" | "reconstrucao_pontuacao";
  contexto: string;   // Badge exibido: "Aviso ao time", "E-mail para cliente"
  enunciado: string;

  // identificar_pontuacao ─────────────────────────────────────────
  opcoes?: [string, string];        // [opção A, opção B]
  gabarito?: string;                // A opção correta
  feedbackAcerto?: string;
  feedbackErro?: [string, string, string];  // [socrático, pista, direto]

  // reconstrucao_pontuacao ────────────────────────────────────────
  textoSemPontuacao?: string;       // Texto "cru" que aparece no textarea
  textoPontuado?: string;           // Gabarito (referência para a IA)
  sinalFoco?: string;               // Qual sinal é o foco principal
  rubrica?: string[];               // Critérios que a IA avalia
  tiposErroValidos?: string[];      // Lista fechada de tipos de erro
}
