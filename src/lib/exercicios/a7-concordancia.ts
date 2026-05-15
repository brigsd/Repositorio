/**
 * Exercícios curados da Unidade A.7 — "O verbo combina com quem faz a ação"
 *
 * Estrutura (super pacote — 2026-05-15):
 *
 * Fase 1 (Ex 1–6, blocked): armadilha a_gente_singular
 *   Fácil (verbo isolado) → difícil (palavra-atratora no meio).
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

  // ─── Fase 1: a_gente_singular (Ex 1–6, blocked) ──────────────────────────

  {
    slug: "a7-ex1",
    tipo: "lacuna_unica",
    enunciado:
      'Você está mandando uma mensagem para o chefe sobre o serviço de hoje. Complete: "A gente ___ terminar tudo antes das cinco."',
    opcoes: ["vai", "vão"],
    gabarito: "vai",
    armadilhaId: "a_gente_singular",
    feedbackAcerto:
      'O verbo **vai** combina com "a gente", que na escrita formal funciona como "ele" ou "ela". Por isso ele fica no singular.\n\nA opção "vão" pareceria certa porque você está falando de um grupo, mas "a gente" não pede o verbo no plural, mesmo querendo dizer "nós".\n\nMacete: troque "a gente" por "ele" na cabeça. "Ele vai terminar" soa natural. É esse o verbo que você usa.',
    feedbackErro: [
      'Experimente trocar "a gente" por "ele" e leia a frase de novo. Qual verbo combina: "ele vai" ou "ele vão"?',
      'Mesmo que "a gente" signifique um grupo, na escrita ela se comporta como uma pessoa só, igual a "ele" ou "ela". Pensando assim, qual das duas formas combina?',
      'A forma é **"vai"**. "A gente" pede verbo no singular na escrita formal, do mesmo jeito que "ele vai". Por isso: "A gente vai terminar tudo antes das cinco."',
    ],
  },

  {
    slug: "a7-ex2",
    tipo: "lacuna_unica",
    enunciado:
      'Você combinou uma tarefa com um colega e está confirmando por escrito. Complete: "A gente ___ os dois jeitos e escolhe o melhor."',
    opcoes: ["testa", "testam"],
    gabarito: "testa",
    armadilhaId: "a_gente_singular",
    feedbackAcerto:
      'O verbo **testa** combina com "a gente", que funciona como "ele" ou "ela" na escrita. Fica no singular.\n\n"Testam" daria a impressão de concordar com o grupo de pessoas, mas "a gente" não puxa o verbo para o plural, mesmo sendo você e o colega.\n\nMacete: "ele testa" soa certo, "ele testam" não. É "testa".',
    feedbackErro: [
      'Troque "a gente" por "ele" e teste no ouvido: "ele testa" ou "ele testam"?',
      '"A gente" se comporta como uma pessoa só na frase, igual a "ele". Qual verbo combina com essa forma?',
      'A forma é **"testa"**. "A gente" pede o singular: "A gente testa os dois jeitos e escolhe o melhor."',
    ],
  },

  {
    slug: "a7-ex3",
    tipo: "lacuna_unica",
    enunciado:
      'Numa reunião rápida da equipe, você anota o que ficou combinado. Complete: "A gente ___ resolver isso até sexta."',
    opcoes: ["precisa", "precisam"],
    gabarito: "precisa",
    armadilhaId: "a_gente_singular",
    feedbackAcerto:
      '**Precisa** combina com "a gente", que na escrita formal vale como "ele" ou "ela". Por isso o singular.\n\n"Precisam" parece encaixar porque é a equipe inteira, mas a expressão "a gente" não acompanha a quantidade de gente, e sim a sua forma.\n\nMacete: "ele precisa resolver". Esse é o som certo. É "precisa".',
    feedbackErro: [
      'Se você trocar "a gente" por "ele", fica "ele precisa" ou "ele precisam"?',
      'Mesmo sendo a equipe toda, "a gente" funciona como uma pessoa só na frase. Qual forma combina com isso?',
      'A forma é **"precisa"**. "A gente" pede o singular: "A gente precisa resolver isso até sexta."',
    ],
  },

  {
    slug: "a7-ex4",
    tipo: "lacuna_unica",
    enunciado:
      'Você vai ao banco com um colega resolver uma pendência da empresa e avisa o setor. Complete: "A gente ___ ao banco agora e volta logo."',
    opcoes: ["vai", "vamos"],
    gabarito: "vai",
    armadilhaId: "a_gente_singular",
    feedbackAcerto:
      '**Vai** combina com "a gente". Apesar de você querer dizer "nós vamos", a escrita formal trata "a gente" como "ele" ou "ela".\n\n"Vamos" é a forma que combina com "nós", e é fácil cair nela porque o sentido é "nós". Mas a palavra escrita é "a gente", e ela pede o singular.\n\nMacete: o sentido é "nós", a forma é "ele". O verbo segue a forma: "vai".',
    feedbackErro: [
      'O sentido é "nós", mas a palavra escrita é "a gente". Trocando por "ele": "ele vai" ou "ele vamos"?',
      'Esse é o pulo do gato: "a gente" quer dizer "nós", mas se comporta como "ele". O verbo combina com a forma, não com o sentido. Qual é a forma certa?',
      'A forma é **"vai"**. Mesmo significando "nós", "a gente" pede o singular: "A gente vai ao banco agora e volta logo."',
    ],
  },

  {
    slug: "a7-ex5",
    tipo: "lacuna_unica",
    enunciado:
      'Você está entregando um relatório atrasado e explica por escrito o que aconteceu. Complete: "A gente ___ o relatório ontem, mas o sistema caiu."',
    opcoes: ["terminou", "terminamos"],
    gabarito: "terminou",
    armadilhaId: "a_gente_singular",
    feedbackAcerto:
      '**Terminou** combina com "a gente" no passado também. Ela continua valendo como "ele" ou "ela", mesmo quando a ação já aconteceu.\n\n"Terminamos" é a forma de "nós", e o sentido aqui é mesmo "nós". Por isso ela atrai. Mas a palavra escrita continua sendo "a gente", e ela pede o singular.\n\nMacete: "ele terminou" soa certo. No passado, a regra é a mesma: "terminou".',
    feedbackErro: [
      'No passado vale a mesma lógica. Troque por "ele": "ele terminou" ou "ele terminamos"?',
      '"Terminamos" combina com "nós", mas a palavra na frase é "a gente", que se comporta como "ele". Qual forma combina com "a gente"?',
      'A forma é **"terminou"**. "A gente" pede o singular também no passado: "A gente terminou o relatório ontem, mas o sistema caiu."',
    ],
  },

  {
    slug: "a7-ex6",
    tipo: "lacuna_unica",
    enunciado:
      'Você vai pedir uma folga por escrito e quer explicar o motivo com cuidado. Complete: "Se a gente ___ adiantar o serviço hoje, dá para folgar na sexta."',
    opcoes: ["conseguir", "conseguirmos"],
    gabarito: "conseguir",
    armadilhaId: "a_gente_singular",
    feedbackAcerto:
      '**Conseguir** combina com "a gente" mesmo nessa frase mais comprida, com "se" no começo. Ela continua valendo como "ele" ou "ela".\n\n"Conseguirmos" é a forma de "nós", e em frases longas é ainda mais fácil escorregar para ela. Mas a palavra escrita não mudou: continua "a gente", no singular.\n\nMacete: por mais comprida que seja a frase, volte ao "a gente" e troque por "ele": "se ele conseguir". É "conseguir".',
    feedbackErro: [
      'A frase é mais longa, mas a regra não muda. Troque "a gente" por "ele": "se ele conseguir" ou "se ele conseguirmos"?',
      'Em frases compridas o "nós" puxa mais forte, mas a palavra ainda é "a gente", que se comporta como "ele". Qual forma combina?',
      'A forma é **"conseguir"**. "A gente" pede o singular mesmo em frase longa: "Se a gente conseguir adiantar o serviço hoje, dá para folgar na sexta."',
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
      'Você está fechando o dia por mensagem para o chefe. Complete: "A gente ___ tudo o que estava na lista."',
    opcoes: ["fez", "fizemos"],
    gabarito: "fez",
    armadilhaId: "a_gente_singular",
    feedbackAcerto:
      '**Fez** combina com "a gente", que na escrita formal vale como "ele" ou "ela", também no passado.\n\n"Fizemos" é a forma de "nós", e o sentido aqui é "nós". Por isso ela atrai. Mas a palavra escrita é "a gente", que pede o singular.\n\nMacete: pare e pergunte qual é o sujeito. Se é "a gente", troque por "ele": "ele fez". É "fez".',
    feedbackErro: [
      'Qual é o sujeito da frase? Se for "a gente", troque por "ele": "ele fez" ou "ele fizemos"?',
      'O sujeito é "a gente", que se comporta como "ele", não como "nós". Qual forma combina com "a gente"?',
      'A forma é **"fez"**. "A gente" pede o singular: "A gente fez tudo o que estava na lista."',
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
      'Você está combinando com um colega como vão dividir uma tarefa e registra por escrito. Complete: "A gente ___ os dois jeitos antes de decidir."',
    opcoes: ["compara", "comparam"],
    gabarito: "compara",
    armadilhaId: "a_gente_singular",
    feedbackAcerto:
      '**Compara** combina com "a gente", que se comporta como "ele" ou "ela" na escrita formal.\n\n"Comparam" parece combinar com o grupo, você e o colega, mas "a gente" não acompanha a quantidade de pessoas, e sim a sua forma, que é singular.\n\nMacete: antes de escolher o verbo, identifique o sujeito. "A gente" vira "ele": "ele compara". É "compara".',
    feedbackErro: [
      'Pare e veja o sujeito: é "a gente". Trocando por "ele": "ele compara" ou "ele comparam"?',
      'Mesmo sendo você e o colega, "a gente" se comporta como uma pessoa só. Qual forma combina com isso?',
      'A forma é **"compara"**. "A gente" pede o singular: "A gente compara os dois jeitos antes de decidir."',
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
