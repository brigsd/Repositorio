/**
 * curriculo/a10-projeto.ts
 *
 * Currículo curado da Unidade A.10 — "Projeto Integrador do Nível A"
 *
 * Princípios pedagógicos (super pacote — 2026-05-15):
 *
 * 1. TRANSFERÊNCIA AUTÊNTICA (Wiggins & McTighe, UbD):
 *    Tarefa-meta = escrever uma mensagem de trabalho completa sem
 *    scaffolding. Rubrica visível antes da tarefa (Knowles: adultos
 *    precisam ver o critério antecipado).
 *
 * 2. PRÁTICA INTERCALADA COMPLETA (Kornell & Bjork 2008; Roediger):
 *    Todos os 9 tópicos do Nível A misturados. Pesos maiores para
 *    A.7/A.8/A.9 (mais recentes e mais difíceis).
 *
 * 3. FECHAMENTO + AUTOEFICÁCIA (Zeigarnik; Bandura):
 *    Unidade nomeada como conquista, não como teste. Feedback celebra
 *    o domínio, a tela final nomeia as habilidades adquiridas.
 *
 * 4. SEM ARMADILHAS NOVAS: unidade de revisão pura.
 *    tiposExercicio lista os dois formatos usados: lacuna_unica
 *    (preenchimento) e identificar_erro (reconhecimento).
 */

import type { UnidadeCurriculo } from "./tipos";

export const A10_PROJETO: UnidadeCurriculo = {
  slug: "a-10-projeto",
  titulo: "Projeto integrador do nível A",
  nivel: "A",
  numero: 10,
  duracaoEstimadaMin: 30,

  ancoraPropósito: {
    titulo: "Você chegou à última unidade do Nível A",
    corpo: `Você passou por nove unidades de escrita: jeito formal de escrever, vírgula, pontuação, acentos, palavras que enganam, concordância verbal, concordância nominal e regência. Não é pouco coisa.

Esta unidade não apresenta nada novo. Ela é um campo de prática final: você vai encontrar os mesmos desafios de sempre, mas todos misturados, do jeito que eles aparecem de verdade numa mensagem de trabalho. Porque na vida real nenhum texto pede só uma habilidade. Num parágrafo só podem aparecer uma vírgula, um acento, uma concordância e uma regência ao mesmo tempo.

No fim, tem uma tarefa maior: escrever uma mensagem de trabalho completa com tudo que você aprendeu. Não é um teste. É uma demonstração, para você mesmo, do que você já sabe fazer.`,
    exemploPrático: `Exemplo prático:

Carla é auxiliar de RH de uma construtora. Ao final do dia, ela manda um resumo para a coordenadora:

"Bom dia. Fui à reunião de admissão cedo, os candidatos chegaram ao setor no horário e nós finalizamos as entrevistas no prazo. Os documentos necessários já estão organizados na minha mesa."

Cada pedaço daquela mensagem passou por uma habilidade do Nível A: 'fui à reunião' e 'chegaram ao setor' são regência, 'nós finalizamos' é concordância verbal, 'os candidatos' e 'os documentos' são concordância nominal, 'necessários' e 'já' levam acento. Tudo junto, numa mensagem real.

Depois de nove unidades, Carla já sabe checar exatamente esses pontos antes de mandar. E você também sabe.`,
  },

  curiosidade: `Pesquisas sobre como as pessoas aprendem mostram que misturar habilidades diferentes num mesmo exercício consolida a memória melhor do que praticar cada coisa separada. O efeito tem nome: prática intercalada. O que pode parecer mais difícil do que rever uma habilidade por vez é na verdade mais eficiente, porque o cérebro precisa identificar qual ferramenta usar antes de usá-la. Cada vez que você identifica corretamente, aquela habilidade se consolida um pouco mais. Esta última unidade foi desenhada exatamente assim.`,

  preAfericao: [
    {
      slug: "pre-proj-regencia",
      enunciado: "Qual frase a escrita formal de trabalho pede?",
      opcoes: ["Fui à reunião de admissão.", "Fui na reunião de admissão."],
      gabarito: "Fui à reunião de admissão.",
      conceito: "ir_a",
    },
    {
      slug: "pre-proj-verbal",
      enunciado: "Qual frase combina o verbo com o sujeito corretamente?",
      opcoes: [
        "Nós terminamos o trabalho hoje.",
        "Nós terminou o trabalho hoje.",
      ],
      gabarito: "Nós terminamos o trabalho hoje.",
      conceito: "nos_mos",
    },
    {
      slug: "pre-proj-nominal",
      enunciado: "Qual frase está correta?",
      opcoes: [
        "Os contratos estão assinados.",
        "Os contrato estão assinados.",
      ],
      gabarito: "Os contratos estão assinados.",
      conceito: "substantivo_plural",
    },
  ],

  tiposExercicio: [
    {
      tipo: "lacuna_unica",
      descricao:
        "Preencha a lacuna com a forma correta (concordância, regência, palavras)",
      criterios: [
        "Aplica concordância verbal e nominal na escrita formal",
        "Aplica regência com verbos de movimento",
        "Distingue palavras parecidas (mas/mais, por que/porque)",
        "Reconhece acentos obrigatórios na escrita formal",
      ],
    },
    {
      tipo: "identificar_erro",
      descricao:
        "Escolha a versão correta entre duas frases completas (vírgula, pontuação, registro)",
      criterios: [
        "Reconhece o registro formal de trabalho",
        "Reconhece o uso correto da vírgula em enumeração",
        "Reconhece o sinal de pontuação correto no final da frase",
      ],
    },
  ],

  projetoIntegrador: {
    enunciado: `Escreva uma mensagem de trabalho completa (5 a 7 frases) para o seu supervisor ou chefe, descrevendo como foi o seu dia ou o que aconteceu no seu turno. A mensagem deve incluir:
1. Dizer que você foi ou chegou a algum lugar (um setor, uma reunião, um cliente, um depósito).
2. Mencionar o que você e um colega fizeram juntos.
3. Descrever documentos, materiais ou itens que chegaram, foram enviados ou precisam de algo.
Use o contexto que quiser: seu trabalho atual, um trabalho anterior, ou um trabalho que você gostaria de ter.`,
    rubrica: [
      "Registro formal: sem gírias ou abreviações de conversa",
      "Verbos de ir e chegar ligados ao lugar com 'a/ao/à'",
      '"Nós" usado com o "-mos" no verbo (nós fizemos, nós fomos)',
      "Substantivos no plural quando o artigo é 'os' ou 'as'",
      "Adjetivos no plural quando o substantivo que descrevem está no plural",
      "Sentido claro para quem lê",
    ],
  },

  posAfericao: [
    {
      slug: "pos-proj-palavras",
      enunciado: "Qual frase usa a palavra correta?",
      opcoes: [
        "Tentei avisar, mas não consegui.",
        "Tentei avisar, mais não consegui.",
      ],
      gabarito: "Tentei avisar, mas não consegui.",
      conceito: "mas_mais",
    },
    {
      slug: "pos-proj-regencia",
      enunciado: "Qual frase a escrita formal pede?",
      opcoes: [
        "Cheguei ao depósito às oito.",
        "Cheguei no depósito às oito.",
      ],
      gabarito: "Cheguei ao depósito às oito.",
      conceito: "chegar_a",
    },
    {
      slug: "pos-proj-sujeito",
      enunciado: "Qual frase combina o verbo com o sujeito corretamente?",
      opcoes: ["Os pedidos foram enviados.", "Os pedidos foi enviados."],
      gabarito: "Os pedidos foram enviados.",
      conceito: "sujeito_plural",
    },
  ],

  perguntasRevisao: [
    {
      slug: "rev-proj-nominal",
      enunciado:
        "Na escrita formal, o que acontece com o substantivo e o adjetivo quando o artigo é 'os' ou 'as'?",
      gabarito:
        "Quando o artigo é 'os' ou 'as', o substantivo e o adjetivo também vão para o plural: 'os documentos atrasados', 'as reuniões produtivas'. Na conversa, muita gente mantém o singular e todo mundo entende. Na escrita formal, o grupo inteiro vai junto para o plural.",
      conceito: "substantivo_plural",
    },
    {
      slug: "rev-proj-regencia",
      enunciado:
        "Com verbos de ir e chegar, o que a escrita formal usa para ligar o verbo ao lugar?",
      gabarito:
        "A escrita formal usa 'a' para ligar verbos de movimento ao lugar: 'vou à reunião', 'vou ao banco', 'cheguei ao escritório', 'cheguei à empresa'. Na conversa, o jeito de todo mundo é 'vou na/no', 'cheguei na/no', e está certo assim. Na escrita formal, o costume é o 'a/ao/à'.",
      conceito: "ir_a",
    },
  ],
};
