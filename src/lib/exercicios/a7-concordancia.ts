/**
 * Exercícios curados da Unidade A.7 — "O verbo combina com quem faz a ação"
 *
 * Estrutura (super pacote — 2026-05-15):
 *
 * Fase 1 (Ex 1–6, blocked): armadilha nos_mos
 *   "nós" sem -mos (fala, legítimo) vs com -mos (escrita formal).
 *   Base factual: Naro & Scherre — variação real de 1ª pessoa do plural.
 *
 * Fase 2 (Ex 7–12, blocked): armadilha sujeito_plural
 *   Mesmo padrão. Ex 11/12 introduzem palavra atratora singular perto do verbo.
 *
 * Fase 3 (Ex 13–16, interleaved): alternando as duas armadilhas.
 *   Bjork/Rohrer: forçar discriminação entre casos consolida retenção.
 *
 * Feedback: Papel → Contraste → Dica (docs/12).
 * Sem "errado/incorreto" em nenhum texto (Bandura — autoeficácia).
 */

import type { ExercicioGerado } from "./tipos";

export const EXERCICIOS_A7: ExercicioGerado[] = [

  // ─── Fase 1: nos_mos (Ex 1–6, blocked) ───────────────────────────────────

  {
    slug: "a7-ex1",
    tipo: "lacuna_unica",
    enunciado:
      'Você está mandando uma mensagem para o chefe sobre o serviço de hoje. Complete: "Nós ___ terminar tudo antes das cinco."',
    opcoes: ["vamos", "vai"],
    gabarito: "vamos",
    armadilhaId: "nos_mos",
    feedbackAcerto:
      'O finalzinho **vamos** mostra na escrita que somos nós, mais de uma pessoa. É essa marca no fim do verbo que a escrita formal espera quando o sujeito é "nós".\n\nDizer "nós vai" é o jeito de muita gente e todo mundo entende numa boa. Numa mensagem de trabalho como essa, a escrita formal pede a forma com "-mos".\n\nMacete: se dá para trocar por "eu vou", é uma pessoa só. Se é "nós", a escrita formal pede o "-mos" no fim: "vamos".',
    feedbackErro: [
      'Quantas pessoas vão terminar o serviço: você sozinho ou vocês? Qual das duas formas mostra na escrita que são mais de um?',
      'Numa mensagem de trabalho, quando o sujeito é "nós", o verbo costuma ganhar o finalzinho "-mos". Olhe as duas opções: qual delas tem esse pedacinho no fim?',
      'A escrita formal pede **"vamos"**. Quando o sujeito é "nós", o verbo leva o "-mos" no fim: "Nós vamos terminar tudo antes das cinco."',
    ],
  },

  {
    slug: "a7-ex2",
    tipo: "lacuna_unica",
    enunciado:
      'Você combinou uma tarefa com um colega e está confirmando por escrito. Complete: "Nós ___ ao depósito de manhã e voltamos logo."',
    opcoes: ["fomos", "foi"],
    gabarito: "fomos",
    armadilhaId: "nos_mos",
    feedbackAcerto:
      'O finalzinho **fomos** marca na escrita que foram vocês dois, mais de uma pessoa. É essa marca que a escrita formal espera com o sujeito "nós".\n\n"Nós foi" é o jeito de falar de muita gente e funciona bem na conversa. Num recado de trabalho, a escrita formal pede a forma com "-mos".\n\nMacete: se dá para trocar por "eu fui", é uma pessoa só. Se é "nós", a escrita formal pede o "-mos": "fomos".',
    feedbackErro: [
      'Foi você sozinho ao depósito ou foram vocês dois? Qual forma mostra na escrita que foram mais de um?',
      'Quando o sujeito é "nós", na escrita formal o verbo costuma terminar em "-mos". Qual das duas opções tem esse finalzinho?',
      'A escrita formal pede **"fomos"**. Com o sujeito "nós", o verbo leva o "-mos" no fim: "Nós fomos ao depósito de manhã e voltamos logo."',
    ],
  },

  {
    slug: "a7-ex3",
    tipo: "lacuna_unica",
    enunciado:
      'Numa reunião rápida da equipe, você anota o que ficou combinado. Complete: "Nós ___ resolver isso até sexta."',
    opcoes: ["precisamos", "precisa"],
    gabarito: "precisamos",
    armadilhaId: "nos_mos",
    feedbackAcerto:
      'O finalzinho **precisamos** mostra na escrita que somos nós, a equipe inteira, mais de um. É essa marca que a escrita formal espera com "nós".\n\n"Nós precisa" é o jeito de falar de muita gente e todo mundo entende sem esforço. Numa anotação de trabalho, a escrita formal pede a forma com "-mos".\n\nMacete: se dá para trocar por "eu preciso", é só um. Se é "nós", a escrita formal pede o "-mos" no fim: "precisamos".',
    feedbackErro: [
      'Quem precisa resolver isso: você sozinho ou a equipe toda? Qual forma mostra na escrita que são vários?',
      'Com o sujeito "nós", na escrita formal o verbo ganha o finalzinho "-mos". Qual das duas opções tem esse pedacinho no fim?',
      'A escrita formal pede **"precisamos"**. Com o sujeito "nós", o verbo leva o "-mos": "Nós precisamos resolver isso até sexta."',
    ],
  },

  {
    slug: "a7-ex4",
    tipo: "lacuna_unica",
    enunciado:
      'Você está avisando seu setor que vocês vão sair para uma tarefa externa. Complete: "Nós ___ ao banco agora e voltamos logo."',
    opcoes: ["vamos", "vai"],
    gabarito: "vamos",
    armadilhaId: "nos_mos",
    feedbackAcerto:
      'O finalzinho **vamos** marca na escrita que somos nós, mais de uma pessoa. É essa marca que a escrita formal espera no aviso ao setor.\n\nDizer "nós vai" é o jeito de muita gente e a mensagem chega tranquila na conversa. Num aviso escrito de trabalho, a escrita formal pede a forma com "-mos".\n\nMacete: se dá para trocar por "eu vou", é uma pessoa só. Se é "nós", a escrita formal pede o "-mos": "vamos".',
    feedbackErro: [
      'Vai você sozinho ao banco ou vão vocês? Qual das formas mostra na escrita que são mais de um?',
      'Num aviso de trabalho, quando o sujeito é "nós", o verbo costuma terminar em "-mos". Qual das duas opções tem esse finalzinho?',
      'A escrita formal pede **"vamos"**. Com o sujeito "nós", o verbo leva o "-mos" no fim: "Nós vamos ao banco agora e voltamos logo."',
    ],
  },

  {
    slug: "a7-ex5",
    tipo: "lacuna_unica",
    enunciado:
      'Você está entregando um relatório atrasado e explica por escrito o que aconteceu. Complete: "Nós ___ o relatório ontem, mas o sistema caiu."',
    opcoes: ["terminamos", "terminou"],
    gabarito: "terminamos",
    armadilhaId: "nos_mos",
    feedbackAcerto:
      'O finalzinho **terminamos** mostra na escrita que fomos nós, mais de um, e funciona também no passado. É essa marca que a escrita formal espera com "nós".\n\n"Nós terminou" é o jeito de falar de muita gente e todo mundo entende numa boa. Numa explicação escrita para quem manda, a escrita formal pede a forma com "-mos".\n\nMacete: se dá para trocar por "eu terminei", é só um. Se é "nós", a escrita formal pede o "-mos" no fim, mesmo no passado: "terminamos".',
    feedbackErro: [
      'Quem terminou o relatório: você sozinho ou vocês? No passado vale a mesma ideia. Qual forma mostra que foram mais de um?',
      'Mesmo no passado, com o sujeito "nós" a escrita formal costuma usar o finalzinho "-mos". Qual das duas opções tem esse pedacinho?',
      'A escrita formal pede **"terminamos"**. Com o sujeito "nós", o verbo leva o "-mos" também no passado: "Nós terminamos o relatório ontem, mas o sistema caiu."',
    ],
  },

  {
    slug: "a7-ex6",
    tipo: "lacuna_unica",
    enunciado:
      'Você vai pedir uma folga por escrito e quer explicar o motivo com cuidado. Complete: "Se nós ___ adiantar o serviço hoje, dá para folgar na sexta."',
    opcoes: ["conseguirmos", "conseguir"],
    gabarito: "conseguirmos",
    armadilhaId: "nos_mos",
    feedbackAcerto:
      'O finalzinho **conseguirmos** mostra na escrita que somos nós, mais de um, mesmo nessa frase mais comprida que começa com "se". É essa marca que a escrita formal espera.\n\n"Se nós conseguir" é o jeito de falar de muita gente e a frase é entendida sem nenhum esforço. Num pedido escrito para quem manda, a escrita formal pede a forma com "-mos".\n\nMacete: por mais comprida que seja a frase, volte ao "nós". Se não dá para trocar por "eu", é "nós", e a escrita formal pede o "-mos" no fim: "conseguirmos".',
    feedbackErro: [
      'A frase é mais longa, mas a ideia não muda. Quem vai adiantar o serviço: você sozinho ou vocês? Qual forma mostra que são mais de um?',
      'Em frases compridas é mais fácil escorregar, mas o sujeito ainda é "nós". Na escrita formal, qual das duas opções tem o finalzinho "-mos"?',
      'A escrita formal pede **"conseguirmos"**. Com o sujeito "nós", o verbo leva o "-mos" mesmo em frase longa: "Se nós conseguirmos adiantar o serviço hoje, dá para folgar na sexta."',
    ],
  },

  // ─── Fase 2: sujeito_plural (Ex 7–12, blocked) ───────────────────────────

  {
    slug: "a7-ex7",
    tipo: "lacuna_unica",
    enunciado:
      'Você está avisando o chefe que a papelada da obra já chegou. Complete: "Os documentos ___ pela manhã."',
    opcoes: ["chegaram", "chegou"],
    gabarito: "chegaram",
    armadilhaId: "sujeito_plural",
    feedbackAcerto:
      'O verbo **chegaram** combina com "os documentos", que está no plural. São vários, então o verbo vai junto, no plural.\n\n"Chegou" combinaria com uma coisa só, como "o documento chegou". Como aqui são vários documentos, soaria estranho.\n\nMacete: conte quantos. Se são vários, o verbo termina em "-ram" no passado: "chegaram".',
    feedbackErro: [
      'São quantos documentos: um só ou vários? O verbo precisa combinar com isso.',
      'Quando o sujeito está no plural, "os documentos", o verbo vai junto, no plural. Qual das duas formas está no plural?',
      'A forma é **"chegaram"**. O sujeito "os documentos" está no plural, então o verbo também: "Os documentos chegaram pela manhã."',
    ],
  },

  {
    slug: "a7-ex8",
    tipo: "lacuna_unica",
    enunciado:
      'Você está registrando que vários clientes procuraram a empresa hoje. Complete: "Os clientes ___ duas vezes hoje."',
    opcoes: ["ligaram", "ligou"],
    gabarito: "ligaram",
    armadilhaId: "sujeito_plural",
    feedbackAcerto:
      '**Ligaram** combina com "os clientes", que está no plural. Vários clientes, verbo no plural.\n\n"Ligou" seria para um cliente só: "o cliente ligou". Com vários, a frase pede "ligaram".\n\nMacete: olhe para quem fez a ação. Se tem "os" e termina em "s", o verbo acompanha: "ligaram".',
    feedbackErro: [
      'Foi um cliente que ligou ou foram vários? O verbo precisa combinar com quem ligou.',
      'O sujeito "os clientes" está no plural. Qual forma do verbo também está no plural?',
      'A forma é **"ligaram"**. "Os clientes" está no plural, então o verbo também: "Os clientes ligaram duas vezes hoje."',
    ],
  },

  {
    slug: "a7-ex9",
    tipo: "lacuna_unica",
    enunciado:
      'Você está conferindo a papelada e avisando que está tudo certo. Complete: "As notas fiscais ___ todas conferidas."',
    opcoes: ["estão", "está"],
    gabarito: "estão",
    armadilhaId: "sujeito_plural",
    feedbackAcerto:
      '**Estão** combina com "as notas fiscais", que está no plural. São várias notas, então o verbo vai no plural.\n\n"Está" combinaria com uma nota só. Com várias, a frase pede "estão".\n\nMacete: "as notas" são muitas. Verbo de muitos: "estão".',
    feedbackErro: [
      'É uma nota fiscal só ou são várias? O verbo combina com essa quantidade.',
      'O sujeito "as notas fiscais" está no plural. Qual forma do verbo combina com o plural?',
      'A forma é **"estão"**. "As notas fiscais" está no plural, então o verbo também: "As notas fiscais estão todas conferidas."',
    ],
  },

  {
    slug: "a7-ex10",
    tipo: "lacuna_unica",
    enunciado:
      'Você está pedindo ao almoxarifado que separe o que falta. Complete: "Os materiais da obra ___ que ser entregues hoje."',
    opcoes: ["têm", "tem"],
    gabarito: "têm",
    armadilhaId: "sujeito_plural",
    feedbackAcerto:
      '**Têm** combina com "os materiais", que está no plural. São vários itens, então o verbo vai no plural.\n\n"Tem" sem acento seria para uma coisa só: "o material tem". Com vários materiais, a frase pede "têm", com acento.\n\nMacete: o acento marca o plural aqui. Muitos materiais, "têm".',
    feedbackErro: [
      'É um material só ou são vários materiais? O verbo precisa acompanhar.',
      'O sujeito "os materiais da obra" está no plural. Qual das duas formas é a do plural?',
      'A forma é **"têm"**. "Os materiais" está no plural, então o verbo vai no plural: "Os materiais da obra têm que ser entregues hoje."',
    ],
  },

  {
    slug: "a7-ex11",
    tipo: "lacuna_unica",
    enunciado:
      'Você está informando ao supervisor que faltaram pessoas na equipe. Complete: "Dois funcionários do turno da tarde ___ ontem."',
    opcoes: ["faltaram", "faltou"],
    gabarito: "faltaram",
    armadilhaId: "sujeito_plural",
    feedbackAcerto:
      '**Faltaram** combina com "dois funcionários", que está no plural. São duas pessoas, então o verbo vai no plural.\n\nA palavra "tarde" aparece logo antes da lacuna e pode puxar o ouvido para o singular, mas quem faltou foram os funcionários, e são dois. Por isso "faltaram".\n\nMacete: ignore o que está colado no verbo e volte a quem fez a ação. Dois funcionários faltaram.',
    feedbackErro: [
      'Quem faltou? Foi uma pessoa só ou foram dois funcionários? O verbo combina com quem faltou, não com a palavra mais perto dele.',
      'Cuidado: "tarde" está perto do verbo, mas quem faltou foram "dois funcionários", no plural. Qual forma combina com isso?',
      'A forma é **"faltaram"**. Quem faltou foram "dois funcionários", no plural: "Dois funcionários do turno da tarde faltaram ontem."',
    ],
  },

  {
    slug: "a7-ex12",
    tipo: "lacuna_unica",
    enunciado:
      'Você está relatando ao gerente o que o estoque solicitou. Complete: "Os pedidos do estoque ___ uma resposta ainda hoje."',
    opcoes: ["exigem", "exige"],
    gabarito: "exigem",
    armadilhaId: "sujeito_plural",
    feedbackAcerto:
      '**Exigem** combina com "os pedidos", que está no plural. São vários pedidos, então o verbo vai no plural.\n\nA palavra "estoque" está no singular e bem perto do verbo, o que pode puxar para "exige". Mas quem exige resposta são os pedidos, e são vários.\n\nMacete: pule a palavra que está colada no verbo e pergunte de novo quem faz a ação. Os pedidos exigem.',
    feedbackErro: [
      'Quem exige a resposta: o estoque ou os pedidos? Conte quantos pedidos são.',
      'A palavra "estoque" está perto do verbo e está no singular, mas quem exige resposta são "os pedidos", no plural. Qual forma combina com "os pedidos"?',
      'A forma é **"exigem"**. Quem exige são "os pedidos", no plural: "Os pedidos do estoque exigem uma resposta ainda hoje."',
    ],
  },

  // ─── Fase 3: interleaved (Ex 13–16) ──────────────────────────────────────

  {
    slug: "a7-ex13",
    tipo: "lacuna_unica",
    enunciado:
      'Você está fechando o dia por mensagem para o chefe. Complete: "Nós ___ tudo o que estava na lista."',
    opcoes: ["fizemos", "fez"],
    gabarito: "fizemos",
    armadilhaId: "nos_mos",
    feedbackAcerto:
      'O finalzinho **fizemos** mostra na escrita que fomos nós, mais de uma pessoa, também no passado. É essa marca que a escrita formal espera com o sujeito "nós".\n\n"Nós fez" é o jeito de falar de muita gente e todo mundo entende na hora. Numa mensagem de fechamento de dia para o chefe, a escrita formal pede a forma com "-mos".\n\nMacete: pare e veja quem é o sujeito. Se não dá para trocar por "eu fiz", é "nós", e a escrita formal pede o "-mos": "fizemos".',
    feedbackErro: [
      'Qual é o sujeito da frase e quantos são? Fez você sozinho ou foram vocês? Qual forma mostra que são mais de um?',
      'O sujeito é "nós". Na escrita formal, com "nós", o verbo costuma terminar em "-mos". Qual das duas opções tem esse finalzinho?',
      'A escrita formal pede **"fizemos"**. Com o sujeito "nós", o verbo leva o "-mos", também no passado: "Nós fizemos tudo o que estava na lista."',
    ],
  },

  {
    slug: "a7-ex14",
    tipo: "lacuna_unica",
    enunciado:
      'Você está avisando que as encomendas da obra já podem ser usadas. Complete: "Os materiais ___ liberados para uso."',
    opcoes: ["foram", "foi"],
    gabarito: "foram",
    armadilhaId: "sujeito_plural",
    feedbackAcerto:
      '**Foram** combina com "os materiais", que está no plural. São vários, então o verbo vai no plural.\n\n"Foi" combinaria com uma coisa só, como "o material foi liberado". Aqui são vários materiais, então a frase pede "foram".\n\nMacete: pare e pergunte quantos são. Vários materiais, verbo no plural: "foram".',
    feedbackErro: [
      'Qual é o sujeito e quantos são? Um material ou vários?',
      'O sujeito "os materiais" está no plural. Qual das duas formas é a do plural?',
      'A forma é **"foram"**. "Os materiais" está no plural, então o verbo também: "Os materiais foram liberados para uso."',
    ],
  },

  {
    slug: "a7-ex15",
    tipo: "lacuna_unica",
    enunciado:
      'Você está combinando com um colega como vão dividir uma tarefa e registra por escrito. Complete: "Nós ___ os dois jeitos antes de decidir."',
    opcoes: ["comparamos", "compara"],
    gabarito: "comparamos",
    armadilhaId: "nos_mos",
    feedbackAcerto:
      'O finalzinho **comparamos** mostra na escrita que somos nós, você e o colega, mais de um. É essa marca que a escrita formal espera com o sujeito "nós".\n\n"Nós compara" é o jeito de falar de muita gente e a ideia chega clara na conversa. Num registro escrito do que foi combinado, a escrita formal pede a forma com "-mos".\n\nMacete: antes de escolher, identifique o sujeito. Se é "nós" e não dá para trocar por "eu", a escrita formal pede o "-mos": "comparamos".',
    feedbackErro: [
      'Pare e veja o sujeito: quem vai comparar os jeitos, você sozinho ou você e o colega? Qual forma mostra que são mais de um?',
      'O sujeito é "nós", você e o colega. Na escrita formal, com "nós", o verbo ganha o finalzinho "-mos". Qual das duas opções tem esse pedacinho?',
      'A escrita formal pede **"comparamos"**. Com o sujeito "nós", o verbo leva o "-mos": "Nós comparamos os dois jeitos antes de decidir."',
    ],
  },

  {
    slug: "a7-ex16",
    tipo: "lacuna_unica",
    enunciado:
      'Você está respondendo ao gerente sobre o atendimento de hoje. Complete: "As pessoas que ligaram ___ uma resposta rápida."',
    opcoes: ["querem", "quer"],
    gabarito: "querem",
    armadilhaId: "sujeito_plural",
    feedbackAcerto:
      '**Querem** combina com "as pessoas", que está no plural. São várias, então o verbo vai no plural.\n\nO trecho "que ligaram" entra no meio e pode embaralhar o ouvido, mas quem quer a resposta são as pessoas, e são várias. Por isso "querem".\n\nMacete: tire o trecho do meio e leia direto: "as pessoas querem". Esse é o teste.',
    feedbackErro: [
      'Tire o trecho "que ligaram" e leia de novo: "as pessoas ___ uma resposta". Quem quer a resposta? Quantas são?',
      'O sujeito é "as pessoas", no plural. O "que ligaram" no meio atrapalha, mas não muda quem faz a ação. Qual forma combina com "as pessoas"?',
      'A forma é **"querem"**. Quem quer a resposta são "as pessoas", no plural: "As pessoas que ligaram querem uma resposta rápida."',
    ],
  },
];
