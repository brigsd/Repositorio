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
 *    Fase 1 (a_gente, blocked) → Fase 2 (sujeito plural, blocked)
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
  slug: "a-7-concordancia",
  titulo: "O verbo combina com quem faz a ação",
  nivel: "A",
  numero: 7,
  duracaoEstimadaMin: 25,

  ancoraPropósito: {
    titulo: "Por que isso importa?",
    corpo: `Você já faz concordância verbal o tempo todo, mesmo sem nunca ter ouvido esse nome. Quando você fala "eu vou", "eles foram", "a gente chegou", você está combinando o verbo com quem faz a ação. Seu ouvido já sabe o que soa natural. Ninguém diz "eu vamos" nem "ele foram". Isso já está dentro de você.

O problema é que, na escrita, o olho às vezes trai. Numa frase mais comprida, a pessoa começa certo e o verbo escorrega para o singular no meio do caminho. Quando você fala, a frase sai de uma vez só e o erro raramente acontece. Quando você escreve, a frase fica parada na tela, e é justamente aí que o deslize aparece e fica registrado para quem vai ler.

Esta unidade trabalha dois momentos em que esse escorregão é mais comum. O primeiro é o "a gente": na escrita formal, ele pede verbo no singular, mesmo quando você está falando de um grupo. O segundo é o sujeito no plural: quando são várias coisas ou várias pessoas, o verbo precisa ir junto, no plural também.`,
    exemploPrático: `Exemplo prático:

Rosana é auxiliar administrativa de uma construtora pequena. No fim da tarde, o dono pediu por mensagem um resumo do dia. Ela escreveu rápido, pelo celular, antes de sair.

Primeiro escreveu: "Boa tarde. A gente terminou o levantamento e os material chegou hoje de manhã." Ela releu e sentiu que tinha algo ali. O texto passava uma impressão de pressa, de coisa feita sem atenção, e ela sabia que o dono ia ler aquilo com calma depois.

Então corrigiu: "Boa tarde. A gente terminou o levantamento e os materiais chegaram hoje de manhã." A mesma informação, o mesmo esforço, mas agora o texto passava cuidado. "A gente terminou" no singular, "os materiais chegaram" no plural, cada verbo combinando com quem faz a ação.

A lição da Rosana é simples: o conteúdo era o mesmo nas duas mensagens. O que mudou foi a imagem dela como profissional. E mudou só por causa de duas combinações de verbo.`,
  },

  curiosidade: `Tem uma curiosidade boa no "a gente". Faz muito tempo que os brasileiros começaram a usar essa expressão no lugar de "nós" na conversa do dia a dia. Ela nasceu de algo bem concreto: "a gente" era literalmente "a gente daqui", "o povo", um grupo de pessoas. Com o tempo, foi virando um jeito de dizer "nós" sem soar tão formal. Mas, mesmo significando um grupo, ela continuou se comportando na frase como uma coisa só, do mesmo jeito que "a turma" ou "a equipe". Por isso, na escrita formal, ela ainda pede o verbo no singular, como se fosse "ele" ou "ela", e não "eles".`,

  armadilhas: [
    {
      id: "a_gente_singular",
      titulo: "A gente vai (não vão)",
      textoAncora:
        'Quando você diz "a gente", está falando de um grupo, e por isso a tentação é colocar o verbo no plural. Mas, na escrita formal, "a gente" funciona como "ele" ou "ela": é tratado como singular. Você quer dizer "nós", mas o verbo combina com a forma da expressão, não com a quantidade de pessoas. Por isso é "a gente vai", "a gente fez", "a gente quer", sempre no singular.',
      exemplosCertos: [
        "A gente vai resolver isso hoje.",
        "A gente fez o relatório antes do prazo.",
        "A gente já falou com o cliente.",
      ],
      exemplosErrados: [
        "A gente vão resolver isso hoje.",
        "A gente fizemos o relatório antes do prazo.",
      ],
      tiposErro: ["a_gente_com_plural"],
    },
    {
      id: "sujeito_plural",
      titulo: "Os documentos chegaram (não chegou)",
      textoAncora:
        "Quando o sujeito está no plural, ou seja, são várias coisas ou várias pessoas, o verbo vai junto, também no plural. Em frases curtas isso é fácil de sentir. O escorregão costuma acontecer quando o sujeito está no plural mas alguma palavra perto dele está no singular e puxa o verbo para o lado errado. Volte sempre a quem está fazendo a ação: se são vários, o verbo é plural.",
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
      slug: "pre-con-a-gente",
      enunciado: 'Qual frase está correta na escrita formal?',
      opcoes: ["A gente vai entregar amanhã.", "A gente vão entregar amanhã."],
      gabarito: "A gente vai entregar amanhã.",
      conceito: "a_gente_singular",
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
        'Reconheceu que "a gente" pede verbo no singular',
        "Reconheceu que sujeito no plural pede verbo no plural",
      ],
    },
  ],

  projetoIntegrador: {
    enunciado: `Escreva duas mensagens curtas (2 a 3 frases cada) como se fosse enviar ao seu chefe ou supervisor:
1. Uma mensagem usando "a gente" para falar de algo que você e um colega fizeram ou vão fazer.
2. Uma mensagem informando que vários itens, documentos ou pessoas fizeram alguma coisa.
Use o contexto que quiser: trabalho, escola dos filhos, compras, vizinhança.`,
    rubrica: [
      '"A gente" usado com verbo no singular',
      "Sujeito no plural combinado com verbo no plural",
      "Sentido claro para quem lê",
    ],
  },

  posAfericao: [
    {
      slug: "pos-con-a-gente",
      enunciado: 'Qual frase está correta na escrita formal?',
      opcoes: ["A gente conseguiu terminar a tempo.", "A gente conseguimos terminar a tempo."],
      gabarito: "A gente conseguiu terminar a tempo.",
      conceito: "a_gente_singular",
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
      enunciado: 'Por que "a gente vai" está certo e "a gente vão" está errado na escrita formal?',
      gabarito: '"A gente" funciona como "ele" ou "ela" na frase, mesmo significando "nós". Por isso o verbo fica no singular.',
      conceito: "a_gente_singular",
    },
    {
      slug: "rev-con-b",
      enunciado: 'Como saber se o verbo deve ir para o plural?',
      gabarito: "Olhe quem faz a ação (o sujeito). Se o sujeito está no plural, os dois, ou as várias coisas/pessoas, o verbo vai junto no plural.",
      conceito: "sujeito_plural",
    },
  ],
};
