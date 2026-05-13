import type { UnidadeCurriculo } from "./tipos";

export const A1_TRAILER: UnidadeCurriculo = {
  slug: "a-1-trailer",
  titulo: "Trailer do Nível A",
  nivel: "A",
  numero: 1,
  duracaoEstimadaMin: 0,

  ancoraPropósito: {
    titulo: "Antes de começar",
    corpo: `Como você já manda mensagens e resolve os problemas do dia a dia pelo celular, a intenção do Nível A não é ensinar ninguém a escrever do zero.\n\nNosso objetivo é garantir que você tenha total controle das palavras nas horas em que um erro bobo pode acabar fechando portas.`,
    exemploPrático: "",
  },

  cenas: [
    {
      contexto: "Currículo",
      historia: `Juliana enviou um currículo para uma vaga de assistente administrativo onde ela tinha exatamente a experiência que a empresa procurava. Ela montou o documento com carinho, mas acabou deixando passar um "houveram mudanças" no meio do texto, além de esquecer o acento em duas palavras importantes.`,
      consequencia: `O telefone não tocou. Como o recrutador tinha mais de 40 currículos na mesa para avaliar, ele usou os pequenos erros de português para eliminar candidatos logo de cara, e a Juliana perdeu a chance sem nunca descobrir o verdadeiro motivo.`,
    },
    {
      contexto: "E-mail pro chefe",
      historia: `Carlos precisava pedir uma folga e mandou uma mensagem rápida dizendo "chefe, to precisando sair mais cedo hj pra resolver uma coisa, pode ser?". O chefe respondeu apenas com um "ok", liberando a saída do funcionário sem fazer nenhum alarde.`,
      consequencia: `O problema é que o chefe comentou com a supervisora que o Carlos não sabia se comunicar de forma profissional. Alguns meses depois, quando surgiu uma vaga para liderar a equipe, o Carlos ficou de fora da promoção e não entendeu o porquê.`,
    },
    {
      contexto: "Contrato",
      historia: `Marcos fechou um serviço grande de pintura e recebeu o contrato por e-mail. Como estava na correria, ele passou o olho rápido e assinou o documento sem notar que uma vírgula colocada em um lugar estranho mudava quem deveria pagar pelos materiais de construção.`,
      consequencia: `Na hora do acerto de contas, o cliente abriu o papel e mostrou que a responsabilidade da compra tinha caído toda no colo do pintor. Por causa de um sinal de pontuação, o Marcos tirou dinheiro do próprio bolso e ficou no prejuízo.`,
    },
  ],

  mensagemFinal: `Já que a base você já tem, nosso combinado aqui é afiar a sua escrita para que ela funcione a seu favor nos momentos mais decisivos.`,

  preAfericao: [],
  tiposExercicio: [],
  projetoIntegrador: { enunciado: "", rubrica: [] },
  posAfericao: [],
  perguntasRevisao: [],
};