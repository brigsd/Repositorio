import type { UnidadeCurriculo } from "./tipos";

export const A1_TRAILER: UnidadeCurriculo = {
  slug: "a-1-trailer",
  titulo: "Trailer do Nível A",
  nivel: "A",
  numero: 1,
  duracaoEstimadaMin: 0,

  ancoraPropósito: {
    titulo: "Antes de começar",
    corpo: `Você já escreve. Já manda mensagem, já resolve situação no texto, já se comunica. O Nível A não vai te ensinar a escrever do zero.\n\nVai te dar controle sobre o que você já faz — pra hora que importa de verdade.`,
    exemploPrático: "",
  },

  cenas: [
    {
      contexto: "Currículo",
      historia: `Juliana mandou currículo para uma vaga de assistente administrativo. Tinha a experiência certa, o perfil certo. Escreveu com cuidado — mas deixou "houveram mudanças" no lugar de "houve mudanças" e errou o acento em duas palavras.`,
      consequencia: `O recrutador não chamou. Com 40 currículos na pilha, os com erros foram os primeiros a sair. Juliana nunca soube o motivo.`,
    },
    {
      contexto: "E-mail pro chefe",
      historia: `Carlos precisava pedir uma folga. Mandou: "chefe, to precisando sair mais cedo hj pra resolver uma coisa, pode ser?". O chefe respondeu que sim, sem problema.`,
      consequencia: `Mas comentou com a supervisora: "esse aí não sabe se comunicar". Carlos nunca ficou sabendo — e não entendeu por que foi preterido na promoção alguns meses depois.`,
    },
    {
      contexto: "Contrato",
      historia: `Marcos fechou um serviço de pintura e recebeu o contrato por e-mail. Tinha uma cláusula com uma vírgula num lugar que mudava quem era responsável pelo material. Ele leu rápido e assinou.`,
      consequencia: `Na hora de cobrar, o cliente abriu o contrato e mostrou a cláusula. O sentido era diferente do que Marcos havia entendido. Ficou no prejuízo.`,
    },
  ],

  mensagemFinal: `Você já sabe escrever. Aqui vamos afiar pra hora que importa.`,

  preAfericao: [],
  tiposExercicio: [],
  projetoIntegrador: { enunciado: "", rubrica: [] },
  posAfericao: [],
  perguntasRevisao: [],
};
