/**
 * Tipos compartilhados para exercícios interativos de todas as unidades.
 *
 * Cada unidade exporta um array de ExercicioGerado.
 * O ExercicioClient recebe esse array como prop e renderiza.
 */

export interface ExercicioGerado {
  slug: string;
  tipo: "lacuna_unica" | "identificar_erro";
  enunciado: string;
  opcoes?: string[];
  gabarito: string;
  armadilhaId: string;
  // Feedback curado — explica o PORQUÊ, não só certo/errado
  // Formatação: **negrito** para palavras-chave, \n para quebra de parágrafo
  // Ordem dos parágrafos: papel → contraste → dica (ver docs/12)
  feedbackAcerto: string;
  feedbackErro: [string, string, string]; // [socrático, pista, explicação direta]
}
