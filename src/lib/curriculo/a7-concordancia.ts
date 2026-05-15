/**
 * curriculo/a7-concordancia.ts
 *
 * Currículo curado da Unidade A.7 — "Concordância Verbal"
 *
 * Princípios pedagógicos (super pacote — 2026-05-15):
 *
 * 1. CONTRASTE em contexto real (ERIC/Harvard):
 *    análise contrastiva supera memorização de regras para adultos.
 *
 * 2. SCAFFOLDING + INTERLEAVING (Bjork/Rohrer):
 *    Fase 1 (nós + -mos, blocked) → Fase 2 (sujeito plural, blocked)
 *    → Fase 3 (interleaved) força discriminação entre os dois casos.
 *
 * 3. MASTERY FIRST (Bandura autoeficácia):
 *    casos fáceis e explícitos antes dos que têm palavra-atratora;
 *    feedback no efeito comunicativo, nunca na pessoa.
 *
 * 4. RECOGNITION > RECALL (Nielsen Norman):
 *    lacuna_unica com 2 opções reduz carga cognitiva ao mínimo.
 */

import type { UnidadeCurriculo } from "./tipos";

export const A7_CONCORDANCIA: UnidadeCurriculo = {
  slug: "a-7-concordancia-verbal",
  titulo: "O verbo combina com quem faz a ação",
  nivel: "A",
  numero: 7,
  duracaoEstimadaMin: 25,

  ancoraPropósito: {
    titulo: "Por que isso importa?",
    corpo: `Você já faz concordância verbal o tempo todo, mesmo sem nunca ter ouvido esse nome. Quando você fala "eu vou", "eles foram", você está combinando o verbo com quem faz a ação. Seu ouvido já sabe muita coisa. Isso já está dentro de você.

O problema é que, na escrita, o olho às vezes trai. Numa frase mais comprida, a pessoa começa de um jeito e o verbo escorrega no meio do caminho. Quando você fala, a frase sai de uma vez só e ninguém repara. Quando você escreve, a frase fica parada na tela, e é justamente aí que o deslize aparece e fica registrado para quem vai ler.

Antes de tudo, uma coisa importante: não estamos dizendo que o jeito que você fala está errado. Falar "nós vai", "nós foi" é o jeito de muita gente, funciona, todo mundo na sua roda entende na hora e está tudo certo. O que esta unidade faz é colocar mais uma ferramenta na sua mão, a forma que a escrita formal espera numa mensagem de trabalho, num documento, num recado para quem manda. É uma habilidade que você ganha de presente, não um conserto do seu jeito de falar.

Com isso em mente, esta unidade trabalha dois momentos em que essa diferença mais aparece na escrita. O primeiro é o "nós": na escrita formal, ele pede aquele finalzinho "-mos" no verbo, "nós vamos", "nós fizemos". O segundo é o sujeito no plural: quando são várias coisas ou várias pessoas, o verbo precisa ir junto, no plural também, "os documentos chegaram".`,
    exemploPrático: `Exemplo prático:

Rosana é auxiliar administrativa de uma construtora pequena. No fim da tarde, o dono pediu por mensagem um resumo do dia. Ela escreveu rápido, pelo celular, antes de sair.

Primeiro escreveu: "Boa tarde. Nós fechou o levantamento e os materiais chegaram hoje de manhã." Era exatamente o jeito que ela falaria em voz alta, e qualquer pessoa entenderia na hora. Mas ela releu e lembrou que o dono ia ler aquilo com calma, num momento sério, e que era uma mensagem de trabalho.

Então mudou só o finalzinho de um verbo: "Boa tarde. Nós fechamos o levantamento e os materiais chegaram hoje de manhã." A mesma informação, o mesmo esforço, a mesma Rosana. "Nós fechamos" com o "-mos", "os materiais chegaram" no plural, cada verbo combinando com quem faz a ação.

A lição da Rosana é simples: o conteúdo era o mesmo nas duas mensagens, e o jeito de falar dela não tem nada de errado. O que mudou foi a imagem dela como profissional naquele texto mais sério. E mudou por causa de um pedacinho de palavra.`,
  },

  curiosidade: `Tem uma curiosidade boa nesse finalzinho "-mos". Ele é bem velho, vem lá do latim, a língua de onde o português nasceu, e atravessou mais de mil anos quase sem mudar. É um sobrevivente. E ele faz um trabalho silencioso e esperto: é só por causa dele que, na escrita, dá para saber na hora se foi uma pessoa ou um grupo. "Ele foi" e "nós fomos" contam quase a mesma coisa, mas é aquele pedacinho no fim que avisa quem fez. Uma marca pequena, antiga, fazendo uma diferença grande até hoje.`,

  armadilhas: [
    {
      id: "nos_mos",
      titulo: "Nós vamos (não nós vai)",
      textoAncora:
        'Falar "nós vai", "nós foi", "nós fez" é coisa que muita gente faz pelo Brasil inteiro, no trabalho, em casa, na conversa com os amigos. Todo mundo entende na hora e a conversa flui sem nenhum problema. Aqui a gente está olhando uma coisa diferente: como a escrita formal pede essa mesma frase, naquela mensagem para quem manda, no documento, no recado mais sério. Nesse jeito de escrever, quando o sujeito é "nós", o verbo ganha um pedacinho no fim: "nós vamos", "nós fomos", "nós fizemos", "nós precisamos". É só esse finalzinho "-mos" que muda. O sentido é o mesmo, o que muda é a roupa que a palavra veste para esse tipo de texto.',
      exemplosCertos: [
        "Nós vamos resolver isso hoje.",
        "Nós fizemos o relatório antes do prazo.",
        "Nós precisamos de mais um dia.",
      ],
      exemplosErrados: [
        "Nós vai resolver isso hoje.",
        "Nós fez o relatório antes do prazo.",
      ],
      tiposErro: ["nos_sem_mos"],
    },
    {
      id: "sujeito_plural",
      titulo: "Os documentos chegaram (não chegou)",
      textoAncora:
        "Quando o sujeito está no plural, ou seja, são várias coisas ou várias pessoas, o verbo vai junto, também no plural. Em frases curtas isso é fácil de sentir. O escorregão costuma acontecer quando o sujeito está no plural mas alguma palavra perto dele está no singular e puxa o verbo para o singular. Volte sempre a quem está fazendo a ação: se são vários, o verbo é plural.",
      exemplosCertos: [
        "Os documentos chegaram pela manhã.",
        "As pessoas querem uma resposta.",
        "Os clientes ligaram duas vezes.",
      ],
      exemplosErrados: [
        "Os documentos chegou pela manhã.",
        "As pessoas quer uma resposta.",
      ],
      tiposErro: ["plural_com_singular"],
    },
  ],

  preAfericao: [
    {
      slug: "pre-con-nos-mos",
      enunciado: 'Qual frase a escrita formal pede?',
      opcoes: ["Nós vamos resolver hoje.", "Nós vai resolver hoje."],
      gabarito: "Nós vamos resolver hoje.",
      conceito: "nos_mos",
    },
    {
      slug: "pre-con-plural",
      enunciado: 'Qual frase está correta?',
      opcoes: ["Os documentos chegaram.", "Os documentos chegou."],
      gabarito: "Os documentos chegaram.",
      conceito: "sujeito_plural",
    },
    {
      slug: "pre-con-misto",
      enunciado: 'Qual frase combina o verbo corretamente com o sujeito?',
      opcoes: ["As notas estão conferidas.", "As notas está conferidas."],
      gabarito: "As notas estão conferidas.",
      conceito: "sujeito_plural",
    },
  ],

  tiposExercicio: [
    {
      tipo: "lacuna_unica",
      descricao: "Escolha a forma do verbo que combina com o sujeito da frase",
      criterios: [
        'Reconheceu que "nós" pede o "-mos" no verbo na escrita formal',
        "Reconheceu que sujeito no plural pede verbo no plural",
      ],
    },
  ],

  projetoIntegrador: {
    enunciado: `Escreva duas mensagens curtas (2 a 3 frases cada) como se fosse enviar ao seu chefe ou supervisor:
1. Uma mensagem usando "nós" para falar de algo que você e um colega fizeram ou vão fazer.
2. Uma mensagem informando que vários itens, documentos ou pessoas fizeram alguma coisa.
Use o contexto que quiser: trabalho, escola dos filhos, compras, vizinhança.`,
    rubrica: [
      '"Nós" usado com o "-mos" no verbo (nós vamos, nós fizemos)',
      "Sujeito no plural combinado com verbo no plural",
      "Sentido claro para quem lê",
    ],
  },

  posAfericao: [
    {
      slug: "pos-con-nos-mos",
      enunciado: 'Qual frase a escrita formal pede?',
      opcoes: ["Nós fomos os primeiros a chegar.", "Nós foi os primeiros a chegar."],
      gabarito: "Nós fomos os primeiros a chegar.",
      conceito: "nos_mos",
    },
    {
      slug: "pos-con-plural",
      enunciado: 'Qual frase combina o verbo com o sujeito corretamente?',
      opcoes: ["Os pedidos foram enviados.", "Os pedidos foi enviados."],
      gabarito: "Os pedidos foram enviados.",
      conceito: "sujeito_plural",
    },
    {
      slug: "pos-con-misto",
      enunciado: 'Qual frase está com o verbo no lugar certo?',
      opcoes: ["As pessoas que ligaram querem resposta.", "As pessoas que ligaram quer resposta."],
      gabarito: "As pessoas que ligaram querem resposta.",
      conceito: "sujeito_plural",
    },
  ],

  perguntasRevisao: [
    {
      slug: "rev-con-a",
      enunciado: 'Na escrita formal, qual forma se usa: "nós vamos" ou "nós vai"? Por quê?',
      gabarito: 'Falar "nós vai" é o jeito de muita gente e todo mundo entende, está tudo certo na conversa. Já a escrita formal pede o finalzinho "-mos" quando o sujeito é "nós": "nós vamos". É só esse pedacinho no fim do verbo que muda.',
      conceito: "nos_mos",
    },
    {
      slug: "rev-con-b",
      enunciado: 'Como saber se o verbo deve ir para o plural?',
      gabarito: "Olhe quem faz a ação (o sujeito). Se o sujeito está no plural, os dois, ou as várias coisas/pessoas, o verbo vai junto no plural.",
      conceito: "sujeito_plural",
    },
  ],
};
