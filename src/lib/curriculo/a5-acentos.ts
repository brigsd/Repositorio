import type { UnidadeCurriculo } from "./tipos";

export const A5_ACENTOS: UnidadeCurriculo = {
  slug: "a-5-acentos",
  titulo: "Acentos que mudam tudo",
  nivel: "A",
  numero: 5,
  duracaoEstimadaMin: 0, // não exibido — ver docs/11-decisoes-design.md

  ancoraPropósito: {
    titulo: "Por que isso importa?",
    corpo: `Esses acentos não são apenas detalhes de ortografia — eles mudam o sentido da frase inteira.\n\nEm mensagens de trabalho, relatórios ou no atendimento a clientes, a falta de um simples acento pode transformar o sentido da frase e até mesmo causar problemas.`,
    exemploPrático: `Um mecânico terminou de avaliar um motor e mandou mensagem para o dono do veículo: "A peça danificada e a bomba de óleo". \n\nSem o acento, o "e" virou uma soma. O cliente respondeu confuso: "Entendi que a bomba de óleo tá com problema, mas qual seria essa outra 'peça danificada' que você falou?". Na verdade, o mecânico queria afirmar: "A peça danificada **é** a bomba de óleo". A falta do acento fez o cliente achar que o carro tinha dois defeitos em vez de um.`,
  },

  curiosidade: `Existe um pássaro chamado **sabiá** que se parece com as duas palavras desta unidade, mas é diferente: o acento dele fica no final (**sabiá**), não no começo (**sábia**) nem em lugar nenhum (**sabia**). Três palavras quase iguais, três significados completamente diferentes.`,

  armadilhas: [
    {
      id: "esta_esta",
      titulo: "está / esta",
      textoAncora: `**Está** com acento é ação ou estado — algo que acontece agora. **Esta** sem acento aponta para algo próximo.\nTeste: tenta trocar por "encontra-se". Se funcionar, é **está** com acento.`,
      exemplosCertos: ["A sala está reservada.", "Esta pasta é a correta."],
      exemplosErrados: ["A sala esta reservada.", "Está pasta é a correta."],
      tiposErro: ["acento_omitido", "acento_incorreto"],
    },
    {
      id: "pode_pode",
      titulo: "pôde / pode",
      textoAncora: `**Pôde** com acento é passado — já aconteceu. **Pode** sem acento é presente ou possibilidade.\nTeste: se tem palavra de passado na frase (ontem, semana passada), é **pôde**.`,
      exemplosCertos: ["Ontem ele não pôde ir.", "Hoje ele pode ir."],
      exemplosErrados: ["Ontem ele não pode ir.", "Hoje ele pôde ir."],
      tiposErro: ["confusao_tempo_verbal", "acento_omitido"],
    },
    {
      id: "sabia_sabia",
      titulo: "sábia / sabia",
      textoAncora: `**Sábia** com acento descreve uma qualidade — alguém sábio. **Sabia** sem acento é ação — o ato de saber.\nTeste: tenta trocar por "inteligente". Se funcionar, é **sábia** com acento.`,
      exemplosCertos: ["Foi uma decisão sábia.", "Ela sabia a resposta."],
      exemplosErrados: ["Foi uma decisão sabia.", "Ela sábia a resposta."],
      tiposErro: ["confusao_qualidade_acao", "acento_omitido"],
    },
    {
      id: "duvida_duvida",
      titulo: "dúvida / duvida",
      textoAncora: `**Dúvida** com acento é uma coisa — o sentimento que você tem. **Duvida** sem acento é ação — o ato de duvidar.\nTeste: tenta trocar por "questão". Se funcionar, é **dúvida** com acento.`,
      exemplosCertos: ["Tenho uma dúvida.", "Ele duvida de tudo."],
      exemplosErrados: ["Tenho uma duvida.", "Ele dúvida de tudo."],
      tiposErro: ["confusao_substantivo_verbo", "acento_omitido"],
    },
    {
      id: "e_e",
      titulo: "é / e",
      textoAncora: `**É** com acento vem do verbo ser. **E** sem acento junta duas coisas.\nTeste: tenta trocar por "significa". Se funcionar, é **é** com acento.`,
      exemplosCertos: ["Isso é prioridade.", "O café e o pão."],
      exemplosErrados: ["Isso e prioridade.", "O café é o pão estão prontos."],
      tiposErro: ["acento_omitido", "confusao_verbo_conjuncao"],
    },
    {
      id: "da_da",
      titulo: "dá / da",
      textoAncora: `**Dá** com acento vem do verbo dar — indica ação ou possibilidade. **Da** sem acento liga palavras (preposição "de" + artigo "a").\nTeste: tenta trocar por "consegue". Se funcionar, é **dá** com acento.`,
      exemplosCertos: ["Ela dá atenção aos detalhes.", "A chave da porta."],
      exemplosErrados: ["Ela da atenção aos detalhes.", "A chave dá porta."],
      tiposErro: ["acento_omitido", "confusao_verbo_preposicao"],
    },
  ],

  tiposExercicio: [],
  preAfericao: [],
  posAfericao: [],
  perguntasRevisao: [],
  projetoIntegrador: {
    enunciado: "",
    rubrica: [],
  },
};
