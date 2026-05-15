/**
 * curriculo/a8-concordancia-nominal.ts
 *
 * Currículo curado da Unidade A.8 — "Concordância Nominal Essencial"
 *
 * Princípios pedagógicos (super pacote — 2026-05-15):
 *
 * 1. BASE SOCIOLINGUÍSTICA (Scherre 1988, UFRJ; Naro & Scherre 2007):
 *    Na fala vernácula, o artigo retém o plural (~99,7% dos casos);
 *    substantivo e adjetivo mostram marcação variável. "Os livro novo"
 *    é sistemático, não erro aleatório. Ensino parte desse ponto.
 *
 * 2. UMA COISA POR VEZ (Sweller, CLT):
 *    Concordância de número e de gênero não são ensinadas juntas.
 *    Esta unidade cobre só o número (plural) no SN nominal.
 *
 * 3. SCAFFOLDING + INTERLEAVING (Bjork/Rohrer; Hwang 2025):
 *    Fase 1 (substantivo, blocked) → Fase 2 (adjetivo, blocked)
 *    → Fase 3 (interleaved) força discriminação entre os dois casos.
 *
 * 4. LABOV / BANDURA (autoeficácia + bidialetismo):
 *    Forma vernácula validada ("os documento" é entendida, legítima).
 *    Escrita formal apresentada como repertório adicional, não correção.
 */

import type { UnidadeCurriculo } from "./tipos";

export const A8_CONCORDANCIA_NOMINAL: UnidadeCurriculo = {
  slug: "a-8-concordancia-nominal",
  titulo: "Concordância nominal essencial",
  nivel: "A",
  numero: 8,
  duracaoEstimadaMin: 25,

  ancoraPropósito: {
    titulo: "Por que isso importa?",
    corpo: `Quando você fala "os documentos" ou "as reuniões", você já está fazendo concordância nominal. Seu ouvido sabe. Já está dentro de você.

O que acontece é que na conversa, especialmente quando a fala é rápida, o sinal de plural costuma aparecer uma vez só, logo no começo: você fala "os documento" e todo mundo entende, porque o "os" já avisou que são vários. Isso é o jeito natural de muita gente falar pelo Brasil inteiro, funciona, e não tem nada de errado.

Na escrita formal, o combinado é diferente. Quando você escreve "os", a palavra que vem depois também vai para o plural: "os documentos". E quando tem uma palavra que descreve, ela também acompanha: "os documentos atrasados". É como se o plural fosse uma equipe. Na escrita formal, todo mundo usa o uniforme.

Essa unidade trabalha dois momentos em que isso aparece na escrita de trabalho. O primeiro é o substantivo: quando o artigo é "os" ou "as", o nome das coisas também vai para o plural. O segundo é o adjetivo: quando você descreve essas coisas, a descrição também acompanha.`,
    exemploPrático: `Exemplo prático:

Jorge trabalha na recepção de uma clínica pequena. No fim do dia, ele precisa mandar um resumo por e-mail para a coordenadora.

Ele escreveu primeiro: "Os formulário incompleto ficou na minha mesa." Do jeito falado, qualquer pessoa entenderia. Mas ele releu, lembrou que era um e-mail formal e pensou: "os" pede plural, então "formulários". E "incompleto" está descrevendo os formulários, então vai junto: "incompletos".

Mandou: "Os formulários incompletos ficaram na minha mesa." A mesma informação, o mesmo Jorge, o mesmo e-mail. O que mudou foi a imagem dele no texto: alguém que cuida dos detalhes até no fim do dia.`,
  },

  curiosidade: `Pesquisadores da UFRJ que estudaram como o brasileiro fala descobriram uma coisa curiosa: na conversa do dia a dia, o plural quase sempre aparece no começo do grupo de palavras, naquele "os" ou "as". Depois, o cérebro economiza e não precisa repetir o sinal em cada palavra. É uma estratégia inteligente do idioma falado. A escrita formal pede um caminho diferente: quer ver o plural em todos os elementos do grupo, não só no primeiro. Não porque a fala está errada, mas porque a escrita tem um código próprio, como uniforme em dia de apresentação.`,

  armadilhas: [
    {
      id: "substantivo_plural",
      titulo: 'Os relatórios (não os relatório)',
      textoAncora:
        'Quando você usa "os" ou "as" no começo de um grupo de palavras, você já está dizendo que são vários ou várias. Na escrita formal, esse sinal não fica só no artigo: o substantivo que vem depois também precisa ir para o plural. "Os documento" vira "os documentos". "As reunião" vira "as reuniões".\n\nNa conversa, muita gente fala "os formulário", "as mensagem" e todo mundo entende perfeitamente. Aqui a gente está olhando como a escrita formal pede essa mesma frase, num e-mail de trabalho, num documento, numa mensagem para quem manda. Nesses textos, o "os" puxa o substantivo para o plural junto com ele.',
      exemplosCertos: [
        "Os documentos estão prontos.",
        "As reuniões foram canceladas.",
        "Os formulários precisam de assinatura.",
      ],
      exemplosErrados: [
        "Os documento estão prontos.",
        "As reunião foram canceladas.",
      ],
      tiposErro: ["substantivo_sem_plural"],
    },
    {
      id: "adjetivo_plural",
      titulo: 'Os documentos atrasados (não atrasado)',
      textoAncora:
        'Quando tem uma palavra que descreve (o adjetivo), ela também faz parte do grupo e vai junto para o plural. Se o substantivo está no plural, o adjetivo que o acompanha também vai. "Os documentos atrasado" vira "os documentos atrasados". "As reuniões importante" vira "as reuniões importantes".\n\nPense assim: o plural é uma característica do grupo inteiro, não só da palavra principal. Na escrita formal, cada elemento do grupo leva a mesma marca. Na conversa, muita gente deixa o adjetivo no singular e todo mundo entende. Na escrita de trabalho, o combinado é que todos os elementos do grupo indiquem o plural juntos.',
      exemplosCertos: [
        "Os pedidos chegaram incompletos.",
        "As reuniões foram produtivas.",
        "Os arquivos estão organizados.",
      ],
      exemplosErrados: [
        "Os pedidos chegaram incompleto.",
        "As reuniões foram produtiva.",
      ],
      tiposErro: ["adjetivo_sem_plural"],
    },
  ],

  preAfericao: [
    {
      slug: "pre-nom-substantivo",
      enunciado: "Qual frase a escrita formal pede?",
      opcoes: ["Os formulários estão prontos.", "Os formulário estão prontos."],
      gabarito: "Os formulários estão prontos.",
      conceito: "substantivo_plural",
    },
    {
      slug: "pre-nom-adjetivo",
      enunciado: "Qual frase está correta?",
      opcoes: [
        "As reuniões foram produtivas.",
        "As reuniões foram produtiva.",
      ],
      gabarito: "As reuniões foram produtivas.",
      conceito: "adjetivo_plural",
    },
    {
      slug: "pre-nom-misto",
      enunciado: "Qual frase combina todos os elementos corretamente?",
      opcoes: [
        "Os pedidos chegaram incompletos.",
        "Os pedido chegou incompleto.",
      ],
      gabarito: "Os pedidos chegaram incompletos.",
      conceito: "adjetivo_plural",
    },
  ],

  tiposExercicio: [
    {
      tipo: "lacuna_unica",
      descricao: "Escolha a forma que combina com o grupo de palavras da frase",
      criterios: [
        'Reconheceu que "os/as" pede o substantivo no plural',
        "Reconheceu que o adjetivo também vai para o plural quando o substantivo está no plural",
      ],
    },
  ],

  projetoIntegrador: {
    enunciado: `Escreva duas mensagens curtas (2 a 3 frases cada) como se fosse enviar ao seu chefe ou supervisor:
1. Uma mensagem dizendo que vários itens, documentos ou objetos estão prontos, chegaram ou precisam de algo.
2. Uma mensagem descrevendo esses itens com uma qualidade ou situação (use um adjetivo).
Use o contexto que quiser: trabalho, escola dos filhos, compras, vizinhança.`,
    rubrica: [
      "Artigo no plural combinado com substantivo no plural",
      "Adjetivo no plural combinando com o substantivo",
      "Sentido claro para quem lê",
    ],
  },

  posAfericao: [
    {
      slug: "pos-nom-substantivo",
      enunciado: "Qual frase a escrita formal pede?",
      opcoes: [
        "Os documentos precisam de assinatura.",
        "Os documento precisa de assinatura.",
      ],
      gabarito: "Os documentos precisam de assinatura.",
      conceito: "substantivo_plural",
    },
    {
      slug: "pos-nom-adjetivo",
      enunciado: "Qual frase está com o adjetivo no lugar certo?",
      opcoes: ["As notas estão conferidas.", "As notas estão conferida."],
      gabarito: "As notas estão conferidas.",
      conceito: "adjetivo_plural",
    },
    {
      slug: "pos-nom-misto",
      enunciado: "Qual frase combina todos os elementos corretamente?",
      opcoes: ["Os projetos foram aprovados.", "Os projeto foi aprovado."],
      gabarito: "Os projetos foram aprovados.",
      conceito: "adjetivo_plural",
    },
  ],

  perguntasRevisao: [
    {
      slug: "rev-nom-a",
      enunciado: 'Quando o artigo é "os" ou "as", o que acontece com o substantivo na escrita formal?',
      gabarito:
        'Na conversa, muita gente fala "os documento" e todo mundo entende, está tudo certo. Já na escrita formal, quando o artigo é "os" ou "as", o substantivo também vai para o plural: "os documentos", "as reuniões". O "os" ou "as" puxa o substantivo junto.',
      conceito: "substantivo_plural",
    },
    {
      slug: "rev-nom-b",
      enunciado: "Quando há um adjetivo descrevendo um substantivo no plural, o que acontece com o adjetivo?",
      gabarito:
        'O adjetivo acompanha o substantivo e também vai para o plural. Se o substantivo está no plural, o adjetivo que o descreve também vai: "os documentos atrasados", "as reuniões produtivas". O plural é uma característica do grupo inteiro.',
      conceito: "adjetivo_plural",
    },
  ],
};
