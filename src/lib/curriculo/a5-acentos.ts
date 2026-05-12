import type { UnidadeCurriculo } from "./tipos";

export const A5_ACENTOS: UnidadeCurriculo = {
  slug: "a-5-acentos",
  titulo: "Acentos que mudam tudo",
  nivel: "A",
  numero: 5,
  duracaoEstimadaMin: 0, // não exibido — ver docs/11-decisoes-design.md

  ancoraPropósito: {
    titulo: "Por que isso importa?",
    corpo: `Alguns acentos parecem detalhe, mas mudam completamente o sentido da frase. "Ela sabia a resposta" é diferente de "ela era sábia". "Ele pode ir agora" é diferente de "ontem ele não pôde". Em e-mail formal, currículo ou mensagem pro chefe, esse tipo de troca passa uma impressão de descuido — mesmo que o resto do texto esteja perfeito.`,
    exemploPrático: `Uma candidata enviou um e-mail ao RH dizendo "Fico a sua disposição para qualquer duvida". O acento faltando em "dúvida" não mudou o sentido, mas o recrutador riscou mentalmente: "não sabe escrever direito". Ela tinha a qualificação. O detalhe custou a entrevista.`,
  },

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
