/**
 * Exercícios curados da Unidade A.4 — "Os outros sinais"
 *
 * Estrutura (baseada no super pacote — 2026-05-14):
 *
 * Fase 1 — Identificação (Ex 1–8, blocked por sinal):
 *   Aluno escolhe qual versão está pontuada corretamente.
 *   Princípio: reconhecimento antes da produção (Sweller).
 *   Scaffolding: ponto final (óbvio) → dois-pontos → ponto-e-vírgula → travessão.
 *
 * Fase 2 — Reconstrução com IA (Ex 9–12):
 *   Aluno recebe texto sem pontuação pré-carregado no textarea.
 *   Deve inserir os sinais de pontuação para dar clareza.
 *   Avaliação por IA focada em sentido preservado.
 *
 * Feedback: função do sinal primeiro, contraste depois, dica prática por último.
 * Sem "errado/certo" dirigido à pessoa.
 */

import type { ExercicioPontuacao } from "./tipos-pontuacao";

// Rubrica padrão para exercícios de reconstrução
const RUBRICA = [
  "Ponto final usado para encerrar ideias completas",
  "Dois-pontos usado para introduzir explicações ou listas",
  "Ponto-e-vírgula usado para conectar ideias complementares",
  "Travessão usado para destacar informações extras",
  "Sentido original da mensagem preservado",
  "Maiúscula após ponto final",
];

const TIPOS_ERRO = [
  "ponto_ausente",
  "ponto_no_lugar_errado",
  "dois_pontos_ausente",
  "dois_pontos_desnecessario",
  "ponto_e_virgula_ausente",
  "ponto_e_virgula_incorreto",
  "travessao_ausente",
  "travessao_incorreto",
  "sentido_alterado",
  "pontuacao_correta",
];

export const EXERCICIOS_A4: ExercicioPontuacao[] = [

  // ─── Fase 1: Identificação (Ex 1–8) ─────────────────────────────────────────

  // Ponto final (Ex 1–2)
  {
    slug: "a4-ex1", // #1
    tipo: "identificar_pontuacao",
    contexto: "Aviso no mural do trabalho",
    enunciado:
      "Qual versão do aviso fica mais clara para quem lê?",
    opcoes: [
      "A impressora do segundo andar está em manutenção. Use a do térreo.",
      "A impressora do segundo andar está em manutenção use a do térreo",
    ],
    gabarito:
      "A impressora do segundo andar está em manutenção. Use a do térreo.",
    feedbackAcerto:
      "O ponto final depois de **manutenção** encerra a primeira informação. Só depois começa a segunda: a instrução sobre qual impressora usar.\n\nSem ele, as duas ideias se misturam e quem lê rápido pode não entender onde uma termina e a outra começa.\n\n**Dica prática**: se você consegue ler a parte antes do ponto como uma ideia completa, ali cabe um ponto final.",
    feedbackErro: [
      "Leia as duas versões em voz alta. Em qual delas você naturalmente faz uma pausa entre as duas informações?",
      "O ponto final serve para separar ideias completas. Na primeira versão, ele aparece depois de 'manutenção', criando duas frases claras. Na segunda, tudo se mistura.",
      "A resposta é **a primeira versão**. O ponto final depois de 'manutenção' separa o aviso (a impressora está parada) da instrução (use outra). Sem ele, o leitor tem que adivinhar onde uma ideia termina.",
    ],
  },

  {
    slug: "a4-ex2", // #2
    tipo: "identificar_pontuacao",
    contexto: "Mensagem para o supervisor",
    enunciado:
      "Qual versão comunica melhor o que aconteceu?",
    opcoes: [
      "o material chegou atrasado a entrega só foi feita às 16h o cliente reclamou",
      "O material chegou atrasado. A entrega só foi feita às 16h. O cliente reclamou.",
    ],
    gabarito:
      "O material chegou atrasado. A entrega só foi feita às 16h. O cliente reclamou.",
    feedbackAcerto:
      "Cada ponto final encerra um fato: o atraso, o horário, a reclamação. O supervisor bate o olho e entende o que aconteceu, em que ordem.\n\nSem pontos, o texto vira um desabafo corrido. A informação está lá, mas o leitor precisa fazer esforço para separar os fatos.\n\n**Dica prática**: leu uma ideia completa? Coloque ponto. Comece a próxima com letra maiúscula.",
    feedbackErro: [
      "Em qual das duas versões você consegue contar quantos fatos diferentes foram comunicados?",
      "A versão pontuada separa três fatos com ponto final. A sem pontuação mistura tudo em uma linha só. Qual delas facilita a leitura?",
      "A resposta é **a segunda versão**. Cada ponto final marca o fim de um fato. 'Chegou atrasado.' (fato 1), 'Entrega às 16h.' (fato 2), 'Cliente reclamou.' (fato 3).",
    ],
  },

  // Dois-pontos (Ex 3–4)
  {
    slug: "a4-ex3", // #3
    tipo: "identificar_pontuacao",
    contexto: "Lista de materiais para compra",
    enunciado:
      "Qual versão apresenta a lista de forma mais organizada?",
    opcoes: [
      "Precisamos comprar: papel A4, toner e grampos.",
      "Precisamos comprar papel A4 toner e grampos.",
    ],
    gabarito: "Precisamos comprar: papel A4, toner e grampos.",
    feedbackAcerto:
      "Os dois-pontos depois de **comprar** anunciam a lista que vem a seguir. Eles dizem ao leitor: \"Atenção, agora vem a relação de itens.\"\n\nSem eles, o leitor precisa separar mentalmente o que é pedido e o que são os itens. Em listas curtas parece pouca diferença, mas em listas longas a confusão aumenta.\n\n**Dica prática**: sempre que você for abrir uma lista, coloque dois-pontos antes do primeiro item.",
    feedbackErro: [
      "Qual das duas versões deixa mais claro onde termina o pedido e onde começa a lista de itens?",
      "Os dois-pontos funcionam como um anúncio: 'agora vem a lista'. Na primeira versão, eles aparecem depois de 'comprar'. Na segunda, a lista começa sem aviso.",
      "A resposta é **a primeira versão**. Os dois-pontos depois de 'comprar' organizam a frase: primeiro o pedido, depois a lista. Sem eles, tudo se mistura.",
    ],
  },

  {
    slug: "a4-ex4", // #4
    tipo: "identificar_pontuacao",
    contexto: "Justificativa de falta",
    enunciado:
      "Qual versão explica melhor o motivo?",
    opcoes: [
      "Não compareço hoje por um motivo a consulta médica foi remarcada para esta manhã.",
      "Não compareço hoje por um motivo: a consulta médica foi remarcada para esta manhã.",
    ],
    gabarito:
      "Não compareço hoje por um motivo: a consulta médica foi remarcada para esta manhã.",
    feedbackAcerto:
      "Os dois-pontos depois de **motivo** avisam que a explicação vem agora. O leitor já sabe que o que vem depois é o porquê.\n\nSem eles, o texto corre sem separação. O leitor precisa processar a frase toda para entender que \"consulta médica\" é o motivo, não outra informação.\n\n**Dica prática**: quando você disser algo como 'o motivo é', 'a razão é' ou 'funciona assim', geralmente os dois-pontos vêm logo depois.",
    feedbackErro: [
      "Em qual versão fica mais claro que a consulta médica é o motivo da falta?",
      "Os dois-pontos introduzem uma explicação. 'Por um motivo: (agora vem o motivo)'. Qual das versões usa esse recurso?",
      "A resposta é **a segunda versão**. Os dois-pontos depois de 'motivo' dizem ao leitor que a explicação vem a seguir. Sem eles, 'motivo' e 'consulta médica' se confundem na mesma frase.",
    ],
  },

  // Ponto-e-vírgula (Ex 5–6)
  {
    slug: "a4-ex5", // #5
    tipo: "identificar_pontuacao",
    contexto: "Relatório de turno",
    enunciado:
      "Qual versão conecta melhor as duas informações?",
    opcoes: [
      "O estoque foi conferido; faltam 12 unidades do item 304.",
      "O estoque foi conferido faltam 12 unidades do item 304.",
    ],
    gabarito:
      "O estoque foi conferido; faltam 12 unidades do item 304.",
    feedbackAcerto:
      "O ponto-e-vírgula depois de **conferido** conecta as duas informações: a conferência foi feita, e o resultado é que faltam itens. As duas partes se complementam.\n\nSem ele, o leitor não sabe se são duas informações separadas ou uma continuação. O texto fica ambíguo.\n\n**Dica prática**: quando duas frases completas se complementam (uma é consequência ou continuação da outra), o ponto-e-vírgula une as duas sem perder a pausa.",
    feedbackErro: [
      "As duas informações (conferência e falta de itens) estão relacionadas. Qual versão mostra essa relação?",
      "O ponto-e-vírgula conecta duas ideias completas que se complementam. Na primeira versão, ele aparece entre 'conferido' e 'faltam'. Na segunda, as duas ideias se misturam.",
      "A resposta é **a primeira versão**. O ponto-e-vírgula depois de 'conferido' mostra que a segunda parte (falta de itens) é resultado da primeira (conferência).",
    ],
  },

  {
    slug: "a4-ex6", // #6
    tipo: "identificar_pontuacao",
    contexto: "Recado entre colegas",
    enunciado:
      "Qual versão organiza melhor o recado?",
    opcoes: [
      "Saí para almoçar voltarei às 14h.",
      "Saí para almoçar; voltarei às 14h.",
    ],
    gabarito: "Saí para almoçar; voltarei às 14h.",
    feedbackAcerto:
      "O ponto-e-vírgula une a saída (informação 1) e o retorno (informação 2). As duas se completam: quem lê sabe que você saiu e quando volta, numa sequência lógica.\n\nSem pontuação, as duas ideias se misturam. Poderia ser um ponto final também, mas o ponto-e-vírgula mostra que as informações andam juntas.\n\n**Dica prática**: se você pode trocar o ponto-e-vírgula por ponto final e as duas frases ainda fazem sentido sozinhas, o ponto-e-vírgula está no lugar certo.",
    feedbackErro: [
      "As duas informações (saída e retorno) andam juntas. Qual versão mostra essa conexão?",
      "O ponto-e-vírgula conecta ideias que se complementam. 'Saí para almoçar' e 'voltarei às 14h' formam um par lógico. Qual versão usa essa conexão?",
      "A resposta é **a segunda versão**. O ponto-e-vírgula entre 'almoçar' e 'voltarei' mantém as duas informações conectadas num recado organizado.",
    ],
  },

  // Travessão (Ex 7–8)
  {
    slug: "a4-ex7", // #7
    tipo: "identificar_pontuacao",
    contexto: "E-mail para o time",
    enunciado:
      "Qual versão destaca melhor a informação extra?",
    opcoes: [
      "A reunião de sexta — que será online — começa às 9h.",
      "A reunião de sexta que será online começa às 9h.",
    ],
    gabarito:
      "A reunião de sexta — que será online — começa às 9h.",
    feedbackAcerto:
      "Os travessões isolam a informação extra: **que será online**. Quem lê entende que esse detalhe é um complemento, não a parte principal da frase.\n\nSem os travessões, o leitor pode confundir 'que será online' com a definição da reunião, em vez de entender como um detalhe adicional.\n\n**Dica prática**: o travessão funciona como um parêntese mais forte. Use quando quiser que o leitor **note** a informação extra, não quando quiser escondê-la.",
    feedbackErro: [
      "Qual versão deixa mais claro que 'online' é uma informação extra sobre a reunião?",
      "Os travessões isolam um detalhe dentro da frase. Na primeira versão, 'que será online' fica entre travessões, destacado como informação adicional. Na segunda, se mistura com o restante.",
      "A resposta é **a primeira versão**. Os travessões isolam 'que será online' como um detalhe extra. Sem eles, a frase fica confusa: parece que 'que será online' é parte do sujeito, não um complemento.",
    ],
  },

  {
    slug: "a4-ex8", // #8
    tipo: "identificar_pontuacao",
    contexto: "Mensagem ao fornecedor",
    enunciado:
      "Qual versão comunica melhor a condição?",
    opcoes: [
      "Confirmo o pedido a entrega deve ser feita até quarta sem falta.",
      "Confirmo o pedido — a entrega deve ser feita até quarta, sem falta.",
    ],
    gabarito:
      "Confirmo o pedido — a entrega deve ser feita até quarta, sem falta.",
    feedbackAcerto:
      "O travessão depois de **pedido** separa a confirmação da condição. Fica claro que a segunda parte é uma observação importante sobre o pedido.\n\nSem pontuação, as duas ideias se misturam. O fornecedor pode não perceber que 'até quarta, sem falta' é uma condição, não apenas parte do pedido.\n\n**Dica prática**: quando a segunda parte da frase é uma condição, um alerta ou um destaque, o travessão funciona como uma seta: 'atenção ao que vem agora'.",
    feedbackErro: [
      "Em qual versão fica mais claro que a entrega até quarta é uma condição do pedido?",
      "O travessão separa a confirmação da condição. Na segunda versão, ele aparece depois de 'pedido', destacando o prazo. Na primeira, tudo se mistura.",
      "A resposta é **a segunda versão**. O travessão depois de 'pedido' isola a condição de entrega. Sem ele, o leitor pode não dar a devida importância ao prazo.",
    ],
  },

  // ─── Fase 2: Reconstrução com IA (Ex 9–12) ──────────────────────────────────

  {
    slug: "a4-ex9", // #9
    tipo: "reconstrucao_pontuacao",
    contexto: "Aviso no grupo de trabalho",
    enunciado:
      "O texto abaixo foi escrito às pressas e saiu sem pontuação. Insira os sinais de pontuação (ponto final, vírgula, dois-pontos) para que a mensagem fique clara.",
    textoSemPontuacao:
      "atenção pessoal amanhã não haverá expediente o escritório estará fechado para dedetização voltem na quarta com os materiais de sempre",
    textoPontuado:
      "Atenção, pessoal: amanhã não haverá expediente. O escritório estará fechado para dedetização. Voltem na quarta com os materiais de sempre.",
    sinalFoco: "ponto_final",
    rubrica: RUBRICA,
    tiposErroValidos: TIPOS_ERRO,
  },

  {
    slug: "a4-ex10", // #10
    tipo: "reconstrucao_pontuacao",
    contexto: "E-mail de resposta ao cliente",
    enunciado:
      "Pontue o texto abaixo para que o cliente entenda claramente cada informação.",
    textoSemPontuacao:
      "prezado cliente confirmamos o recebimento do seu pedido os itens solicitados foram caneta azul bloco de notas e pasta A4 a entrega será feita em até 3 dias úteis",
    textoPontuado:
      "Prezado cliente, confirmamos o recebimento do seu pedido. Os itens solicitados foram: caneta azul, bloco de notas e pasta A4. A entrega será feita em até 3 dias úteis.",
    sinalFoco: "dois_pontos",
    rubrica: RUBRICA,
    tiposErroValidos: TIPOS_ERRO,
  },

  {
    slug: "a4-ex11", // #11
    tipo: "reconstrucao_pontuacao",
    contexto: "Relatório de ocorrência",
    enunciado:
      "Pontue o relato abaixo. Use ponto final, ponto-e-vírgula ou dois-pontos conforme necessário.",
    textoSemPontuacao:
      "às 10h o alarme disparou todos saíram do prédio a causa foi identificada um sensor defeituoso no segundo andar o técnico já foi acionado o problema deve ser resolvido até o fim do dia",
    textoPontuado:
      "Às 10h, o alarme disparou; todos saíram do prédio. A causa foi identificada: um sensor defeituoso no segundo andar. O técnico já foi acionado; o problema deve ser resolvido até o fim do dia.",
    sinalFoco: "ponto_e_virgula",
    rubrica: RUBRICA,
    tiposErroValidos: TIPOS_ERRO,
  },

  {
    slug: "a4-ex12", // #12
    tipo: "reconstrucao_pontuacao",
    contexto: "Comunicado interno",
    enunciado:
      "Pontue o comunicado abaixo usando todos os sinais que achar necessários. Preste atenção nos detalhes que merecem destaque.",
    textoSemPontuacao:
      "informamos que a partir de segunda o horário de funcionamento será alterado o expediente que antes era das 8h às 17h passará a ser das 9h às 18h o almoço será das 12h às 13h qualquer dúvida procure o RH",
    textoPontuado:
      "Informamos que, a partir de segunda, o horário de funcionamento será alterado. O expediente — que antes era das 8h às 17h — passará a ser das 9h às 18h. O almoço será das 12h às 13h. Qualquer dúvida, procure o RH.",
    sinalFoco: "misto",
    rubrica: RUBRICA,
    tiposErroValidos: TIPOS_ERRO,
  },
];
