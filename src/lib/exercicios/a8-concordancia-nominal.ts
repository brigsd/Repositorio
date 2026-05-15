/**
 * Exercícios da Unidade A.8 — Concordância Nominal Essencial
 *
 * Estrutura (Bjork/Rohrer + Hwang 2025):
 * Fase 1 (a8-ex01 a a8-ex06): substantivo_plural, blocked
 * Fase 2 (a8-ex07 a a8-ex12): adjetivo_plural, blocked
 * Fase 3 (a8-ex13 a a8-ex16): interleaved
 */

import type { ExercicioGerado } from "./tipos";

export const EXERCICIOS_A8: ExercicioGerado[] = [
  // ─── Fase 1: substantivo_plural (blocked) ───────────────────────────────

  {
    slug: "a8-ex01",
    tipo: "lacuna_unica",
    enunciado: 'Complete: "Os ___ estão sobre a mesa."',
    opcoes: ["relatório", "relatórios"],
    gabarito: "relatórios",
    armadilhaId: "substantivo_plural",
    feedbackAcerto:
      'Certo. **"relatórios"** vai para o plural porque "os" já avisou que são vários.\n\nNa conversa do dia a dia, é comum ouvir "os relatório" e todo mundo entende perfeitamente. Na escrita formal, o substantivo acompanha o "os" e vai para o plural também.\n\nMacete: escreveu "os" ou "as"? A palavra que vem depois também pede o plural.',
    feedbackErro: [
      'Quantas coisas estão sobre a mesa?',
      '"Os" indica mais de um. O substantivo que vem depois precisa ir junto para o plural.',
      'A escrita formal pede **"os relatórios"**: quando o artigo é "os", o substantivo também vai para o plural.',
    ],
  },
  {
    slug: "a8-ex02",
    tipo: "lacuna_unica",
    enunciado: 'Complete: "As ___ do mês foram enviadas."',
    opcoes: ["reunião", "reuniões"],
    gabarito: "reuniões",
    armadilhaId: "substantivo_plural",
    feedbackAcerto:
      'Certo. **"reuniões"** combina com "as" porque são várias.\n\nFalar "as reunião" é o jeito de muita gente e funciona na conversa. Na escrita formal, o artigo e o substantivo vão juntos para o plural.\n\nMacete: "as" pede plural, então a palavra que vem depois também vai para o plural.',
    feedbackErro: [
      'Quantas reuniões foram enviadas?',
      '"As" indica mais de uma. O substantivo precisa acompanhar.',
      'A escrita formal pede **"as reuniões"**: quando o artigo é "as", o substantivo também vai para o plural.',
    ],
  },
  {
    slug: "a8-ex03",
    tipo: "lacuna_unica",
    enunciado: 'Complete: "Os ___ precisam de assinatura."',
    opcoes: ["formulário", "formulários"],
    gabarito: "formulários",
    armadilhaId: "substantivo_plural",
    feedbackAcerto:
      'Certo. **"formulários"** vai junto com "os" porque são vários.\n\nNa fala rápida, "os formulário" é entendido sem problema. Na escrita formal, o "os" puxa o substantivo para o plural.\n\nLembre: o artigo e o substantivo usam o mesmo uniforme na escrita formal.',
    feedbackErro: [
      'Quantos formulários precisam de assinatura?',
      '"Os" diz que são vários. O substantivo precisa ir junto para o plural.',
      'A escrita formal pede **"os formulários"**: o substantivo acompanha o artigo no plural.',
    ],
  },
  {
    slug: "a8-ex04",
    tipo: "lacuna_unica",
    enunciado: 'Complete: "As ___ foram conferidas antes do fechamento."',
    opcoes: ["nota", "notas"],
    gabarito: "notas",
    armadilhaId: "substantivo_plural",
    feedbackAcerto:
      'Certo. **"notas"** combina com "as" porque são várias.\n\nNa conversa, "as nota" é ouvido o tempo todo. Na escrita formal, o artigo e o substantivo andam juntos no plural.\n\nMacete: "as" pede plural, "notas" vai junto.',
    feedbackErro: [
      'Quantas notas foram conferidas?',
      '"As" indica mais de uma. O substantivo precisa ir para o plural também.',
      'A escrita formal pede **"as notas"**: quando o artigo é "as", o substantivo também vai para o plural.',
    ],
  },
  {
    slug: "a8-ex05",
    tipo: "lacuna_unica",
    enunciado: 'Complete: "Os ___ estão arquivados."',
    opcoes: ["documento", "documentos"],
    gabarito: "documentos",
    armadilhaId: "substantivo_plural",
    feedbackAcerto:
      'Certo. **"documentos"** acompanha o "os" no plural.\n\nNa fala do dia a dia, "os documento" circula e é entendido. Na escrita formal, o substantivo vai junto com o artigo no plural.\n\nLembre: "os" pede plural no substantivo que vem depois.',
    feedbackErro: [
      'Quantos documentos estão arquivados?',
      '"Os" indica mais de um. O substantivo precisa levar o "-s" também.',
      'A escrita formal pede **"os documentos"**: o substantivo vai para o plural junto com o artigo.',
    ],
  },
  {
    slug: "a8-ex06",
    tipo: "lacuna_unica",
    enunciado: 'Complete: "As ___ chegaram hoje de manhã."',
    opcoes: ["mensagem", "mensagens"],
    gabarito: "mensagens",
    armadilhaId: "substantivo_plural",
    feedbackAcerto:
      'Certo. **"mensagens"** combina com "as" porque são várias.\n\nFalar "as mensagem" é o jeito natural de muita gente. Na escrita formal, "as" e o substantivo vão juntos para o plural.\n\nMacete: "as" pede plural, então "mensagens" vai junto.',
    feedbackErro: [
      'Quantas mensagens chegaram?',
      '"As" indica mais de uma. O substantivo precisa ir para o plural também.',
      'A escrita formal pede **"as mensagens"**: o substantivo acompanha o artigo no plural.',
    ],
  },

  // ─── Fase 2: adjetivo_plural (blocked) ──────────────────────────────────

  {
    slug: "a8-ex07",
    tipo: "lacuna_unica",
    enunciado: 'Complete: "Os pedidos chegaram ___."',
    opcoes: ["incompleto", "incompletos"],
    gabarito: "incompletos",
    armadilhaId: "adjetivo_plural",
    feedbackAcerto:
      'Certo. **"incompletos"** acompanha "os pedidos" porque o adjetivo também vai para o plural.\n\nNa conversa, "os pedidos incompleto" é ouvido e entendido sem problema. Na escrita formal, o adjetivo faz parte do grupo e usa o mesmo plural.\n\nLembre: o adjetivo veste o mesmo uniforme do substantivo que descreve.',
    feedbackErro: [
      'Quantos pedidos chegaram? E o que chegou junto com eles?',
      '"Os pedidos" está no plural. O adjetivo que descreve eles precisa ir junto para o plural.',
      'A escrita formal pede **"incompletos"**: quando o substantivo está no plural, o adjetivo também vai.',
    ],
  },
  {
    slug: "a8-ex08",
    tipo: "lacuna_unica",
    enunciado: 'Complete: "As reuniões foram ___."',
    opcoes: ["produtiva", "produtivas"],
    gabarito: "produtivas",
    armadilhaId: "adjetivo_plural",
    feedbackAcerto:
      'Certo. **"produtivas"** acompanha "as reuniões" no plural.\n\nNa fala, "as reuniões produtiva" é entendido. Na escrita formal, o adjetivo vai junto com o substantivo no plural.\n\nMacete: o substantivo está no plural? O adjetivo vai junto.',
    feedbackErro: [
      'Quantas reuniões foram produtivas?',
      '"As reuniões" está no plural. O adjetivo que descreve precisa acompanhar.',
      'A escrita formal pede **"produtivas"**: o adjetivo segue o substantivo no plural.',
    ],
  },
  {
    slug: "a8-ex09",
    tipo: "lacuna_unica",
    enunciado: 'Complete: "Os arquivos estão ___."',
    opcoes: ["organizado", "organizados"],
    gabarito: "organizados",
    armadilhaId: "adjetivo_plural",
    feedbackAcerto:
      'Certo. **"organizados"** combina com "os arquivos" no plural.\n\nFalar "os arquivos organizado" é comum e compreensível. Na escrita formal, o adjetivo vai junto com o substantivo no plural.\n\nLembre: o adjetivo faz parte do grupo e usa o mesmo plural do substantivo.',
    feedbackErro: [
      'Quantos arquivos estão organizados?',
      '"Os arquivos" está no plural. O adjetivo precisa ir junto para o plural também.',
      'A escrita formal pede **"organizados"**: o adjetivo acompanha o substantivo no plural.',
    ],
  },
  {
    slug: "a8-ex10",
    tipo: "lacuna_unica",
    enunciado: 'Complete: "As notas estão ___."',
    opcoes: ["conferida", "conferidas"],
    gabarito: "conferidas",
    armadilhaId: "adjetivo_plural",
    feedbackAcerto:
      'Certo. **"conferidas"** acompanha "as notas" no plural.\n\nNa conversa, "as notas conferida" funciona e é entendido. Na escrita formal, o adjetivo vai junto com o substantivo no plural.\n\nMacete: "as notas" está no plural? Então "conferidas" também vai.',
    feedbackErro: [
      'Quantas notas estão conferidas?',
      '"As notas" está no plural. O adjetivo precisa acompanhar.',
      'A escrita formal pede **"conferidas"**: o adjetivo segue o substantivo no plural.',
    ],
  },
  {
    slug: "a8-ex11",
    tipo: "lacuna_unica",
    enunciado: 'Complete: "Os documentos chegaram ___."',
    opcoes: ["atrasado", "atrasados"],
    gabarito: "atrasados",
    armadilhaId: "adjetivo_plural",
    feedbackAcerto:
      'Certo. **"atrasados"** combina com "os documentos" no plural.\n\nNa fala do dia a dia, "os documentos atrasado" circula e é entendido. Na escrita formal, o adjetivo faz parte do grupo e vai para o plural junto com o substantivo.\n\nLembre: o adjetivo usa o mesmo uniforme do substantivo.',
    feedbackErro: [
      'Quantos documentos chegaram atrasados?',
      '"Os documentos" está no plural. O adjetivo que descreve eles também precisa ir para o plural.',
      'A escrita formal pede **"atrasados"**: quando o substantivo está no plural, o adjetivo acompanha.',
    ],
  },
  {
    slug: "a8-ex12",
    tipo: "lacuna_unica",
    enunciado: 'Complete: "As entregas foram ___."',
    opcoes: ["confirmada", "confirmadas"],
    gabarito: "confirmadas",
    armadilhaId: "adjetivo_plural",
    feedbackAcerto:
      'Certo. **"confirmadas"** acompanha "as entregas" no plural.\n\nFalar "as entregas confirmada" é o jeito de muita gente. Na escrita formal, o adjetivo vai junto com o substantivo no plural.\n\nMacete: o substantivo está no plural? O adjetivo vai junto.',
    feedbackErro: [
      'Quantas entregas foram confirmadas?',
      '"As entregas" está no plural. O adjetivo precisa acompanhar no plural também.',
      'A escrita formal pede **"confirmadas"**: o adjetivo segue o substantivo no plural.',
    ],
  },

  // ─── Fase 3: interleaved ─────────────────────────────────────────────────

  {
    slug: "a8-ex13",
    tipo: "lacuna_unica",
    enunciado: 'Complete: "As ___ precisam de revisão."',
    opcoes: ["cópia", "cópias"],
    gabarito: "cópias",
    armadilhaId: "substantivo_plural",
    feedbackAcerto:
      'Certo. **"cópias"** vai para o plural porque "as" avisou que são várias.\n\nNa conversa, "as cópia" é entendido. Na escrita formal, o artigo e o substantivo vão juntos para o plural.\n\nLembre: "as" pede plural no substantivo que vem depois.',
    feedbackErro: [
      'Quantas cópias precisam de revisão?',
      '"As" indica mais de uma. O substantivo precisa ir junto para o plural.',
      'A escrita formal pede **"as cópias"**: o substantivo acompanha o artigo no plural.',
    ],
  },
  {
    slug: "a8-ex14",
    tipo: "lacuna_unica",
    enunciado: 'Complete: "Os formulários estão ___."',
    opcoes: ["preenchido", "preenchidos"],
    gabarito: "preenchidos",
    armadilhaId: "adjetivo_plural",
    feedbackAcerto:
      'Certo. **"preenchidos"** acompanha "os formulários" no plural.\n\nNa fala, "os formulários preenchido" é ouvido e compreendido. Na escrita formal, o adjetivo vai junto com o substantivo no plural.\n\nLembre: o adjetivo faz parte do grupo e usa o mesmo plural.',
    feedbackErro: [
      'Quantos formulários estão preenchidos?',
      '"Os formulários" está no plural. O adjetivo precisa acompanhar.',
      'A escrita formal pede **"preenchidos"**: o adjetivo segue o substantivo no plural.',
    ],
  },
  {
    slug: "a8-ex15",
    tipo: "lacuna_unica",
    enunciado: 'Complete: "Os ___ foram aprovados."',
    opcoes: ["projeto", "projetos"],
    gabarito: "projetos",
    armadilhaId: "substantivo_plural",
    feedbackAcerto:
      'Certo. **"projetos"** vai para o plural porque "os" indica mais de um.\n\nNa conversa, "os projeto" é usado e entendido. Na escrita formal, o "os" puxa o substantivo para o plural junto com ele.\n\nMacete: escreveu "os"? O substantivo que vem depois também pede o plural.',
    feedbackErro: [
      'Quantos projetos foram aprovados?',
      '"Os" indica mais de um. O substantivo precisa ir para o plural também.',
      'A escrita formal pede **"os projetos"**: o substantivo acompanha o artigo no plural.',
    ],
  },
  {
    slug: "a8-ex16",
    tipo: "lacuna_unica",
    enunciado: 'Complete: "As datas ficaram ___."',
    opcoes: ["marcada", "marcadas"],
    gabarito: "marcadas",
    armadilhaId: "adjetivo_plural",
    feedbackAcerto:
      'Certo. **"marcadas"** acompanha "as datas" no plural.\n\nNa fala, "as datas marcada" funciona e é entendido. Na escrita formal, o adjetivo vai junto com o substantivo no plural.\n\nLembre: o plural é uma característica do grupo inteiro. O adjetivo usa o mesmo uniforme.',
    feedbackErro: [
      'Quantas datas ficaram marcadas?',
      '"As datas" está no plural. O adjetivo que descreve precisa acompanhar.',
      'A escrita formal pede **"marcadas"**: o adjetivo segue o substantivo no plural.',
    ],
  },
];
