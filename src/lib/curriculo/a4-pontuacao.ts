/**
 * Currículo curado da Unidade A.4 — "Os outros sinais"
 *
 * Sinais cobertos: ponto final, dois-pontos, ponto-e-vírgula, travessão.
 *
 * Princípios pedagógicos (super pacote — 2026-05-14):
 * - Harvard/Text Reconstruction: pontuação como ferramenta de sentido, não regra
 * - Sweller (CLT): scaffolding — começar com frases curtas, ir para parágrafos
 * - Bandura: texto pré-preenchido no textarea (evitar "página em branco")
 * - Nielsen (NNg): Progressive Disclosure na página de entrada
 *
 * Abordagem: explícito-indutiva híbrida (DeKeyser).
 * O corpo apresenta o princípio geral ("pontuação é a respiração do texto").
 * O exemploPrático mostra a consequência concreta.
 */

import type { CurriculoUnidade } from "./tipos";

export const A4_PONTUACAO: CurriculoUnidade = {
  slug: "a-4-outros-sinais",

  ancoraPropósito: {
    corpo:
      "Você já sabe onde colocar uma vírgula (unidade anterior). Agora vamos aos outros sinais: o ponto final, os dois-pontos, o ponto-e-vírgula e o travessão.\n\nCada um tem uma função diferente. O ponto final encerra uma ideia. Os dois-pontos abrem uma explicação ou lista. O ponto-e-vírgula conecta duas ideias que poderiam ser frases separadas, mas que fazem mais sentido juntas. O travessão destaca uma informação, como um comentário à parte.\n\nQuando você domina esses sinais, seu texto ganha clareza. Quem lê entende exatamente o que você quis dizer, na ordem que você quis dizer.",

    exemploPrático:
      "Marcelo trabalha como auxiliar administrativo e precisou mandar um aviso para toda a equipe sobre a mudança de horário do almoço.\n\nEle escreveu assim: \"aviso a partir de segunda o almoço será das 12h às 13h quem preferir pode almoçar das 13h às 14h o refeitório fecha às 14h30\"\n\nO chefe leu e perguntou: \"Então o refeitório fecha às 14h ou às 14h30? E quem escolher o segundo horário tem 30 minutos ou uma hora?\"\n\nMarcelo quis dizer uma coisa, mas sem pontuação o texto virou uma massa de palavras que cada pessoa lê de um jeito.\n\nCom pontuação: \"Aviso: a partir de segunda, o almoço será das 12h às 13h. Quem preferir, pode almoçar das 13h às 14h. O refeitório fecha às 14h30.\"\n\nAgora o aviso tem estrutura. Cada ideia termina com ponto. Os dois-pontos abrem o assunto. Não sobra dúvida.",
  },

  armadilhas: [
    {
      id: "ponto_final",
      titulo: "Ponto final",
      textoAncora:
        "O ponto final encerra uma ideia completa. Ele diz ao leitor: \"Pare, respire, essa parte acabou.\"\n\nSem ponto final, o texto vira uma frase só, sem começo nem fim. Quem lê perde o fôlego e o fio da meada.",
      exemplosCertos: [
        "A reunião foi produtiva. Definimos os próximos passos.",
        "O prazo é sexta. Não será possível prorrogar.",
      ],
      exemplosErrados: [
        "A reunião foi produtiva definimos os próximos passos",
        "O prazo é sexta não será possível prorrogar",
      ],
      tiposErro: ["ponto_ausente", "ponto_no_lugar_errado"],
    },
    {
      id: "dois_pontos",
      titulo: "Dois-pontos",
      textoAncora:
        "Os dois-pontos anunciam o que vem a seguir: uma explicação, uma lista ou um esclarecimento.\n\nEles funcionam como um convite: \"Preste atenção no que vem agora.\" Sem eles, o leitor não sabe se a frase continua ou se é uma nova ideia.",
      exemplosCertos: [
        "Trouxe três itens: caneta, caderno e borracha.",
        "O motivo é simples: o estoque acabou.",
      ],
      exemplosErrados: [
        "Trouxe três itens caneta caderno e borracha.",
        "O motivo é simples o estoque acabou.",
      ],
      tiposErro: ["dois_pontos_ausente", "dois_pontos_desnecessario"],
    },
    {
      id: "ponto_e_virgula",
      titulo: "Ponto-e-vírgula",
      textoAncora:
        "O ponto-e-vírgula conecta duas ideias que poderiam ser frases separadas, mas que ganham força juntas.\n\nEle é uma pausa maior que a vírgula e menor que o ponto. Use quando as duas partes se complementam, mas cada uma tem sentido completo sozinha.",
      exemplosCertos: [
        "O relatório ficou pronto; a revisão será amanhã.",
        "Chegamos cedo; a sala ainda estava fechada.",
      ],
      exemplosErrados: [
        "O relatório ficou pronto a revisão será amanhã.",
        "Chegamos cedo a sala ainda estava fechada.",
      ],
      tiposErro: ["ponto_e_virgula_ausente", "ponto_e_virgula_incorreto"],
    },
    {
      id: "travessao",
      titulo: "Travessão",
      textoAncora:
        "O travessão destaca uma informação extra dentro da frase, como um comentário à parte ou uma explicação que você quer que o leitor note.\n\nEle funciona como um parêntese mais forte: chama a atenção em vez de esconder. Use para inserir um detalhe importante sem criar uma frase nova.",
      exemplosCertos: [
        "O projeto — que levou três meses — foi aprovado.",
        "A entrega será amanhã — se o fornecedor confirmar.",
      ],
      exemplosErrados: [
        "O projeto que levou três meses foi aprovado.",
        "A entrega será amanhã se o fornecedor confirmar.",
      ],
      tiposErro: ["travessao_ausente", "travessao_incorreto"],
    },
  ],
};
