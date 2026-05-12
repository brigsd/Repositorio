/**
 * Exercícios curados da Unidade A.6 — "As palavras que todo mundo erra"
 *
 * Cada exercício segue o guia de escrita: docs/12-guia-feedback-tutor.md
 * Ordem dos parágrafos no feedbackAcerto: papel → contraste → dica
 */

import type { ExercicioGerado } from "./tipos";

export const EXERCICIOS_A6: ExercicioGerado[] = [
  {
    slug: "a6-ex1",
    tipo: "lacuna_unica",
    enunciado: "Quero terminar o serviço hoje, ___ o cliente está esperando.",
    opcoes: ["mas", "mais"],
    gabarito: "mas",
    armadilhaId: "mas_mais",
    feedbackAcerto:
      '**Mas** liga duas ideias que se opõem.\nJá o **mais** é para quantidade, exemplo: "preciso de **mais** tempo". \nUma dica: se você consegue trocar o **mas** por **porém** e a frase continua fazendo sentido, use **mas** e não **mais**. ',
    feedbackErro: [
      "A segunda parte da frase vai na mesma direção da primeira, ou contradiz ela?",
      '**Mais** fala de quantidade: **mais** café, **mais** tempo, **mais** dinheiro. Aqui a frase não está falando de quantidade. O cliente esperando vai contra a ideia de terminar o serviço. Qual palavra liga ideias opostas?',
      '**Mas** é a resposta deste exercício. Essa palavra conecta duas ideias que se contradizem: "quero terminar" vai contra "o cliente está esperando". **Mais** seria para quantidade, como em "preciso de **mais** tempo".',
    ],
  },
  {
    slug: "a6-ex2",
    tipo: "lacuna_unica",
    enunciado: "Trabalho nesta oficina ___ cinco anos.",
    opcoes: ["há", "a"],
    gabarito: "há",
    armadilhaId: "ha_a",
    feedbackAcerto:
      '**Há** indica tempo que já passou.\nJá o **a** indica tempo que ainda vem, como em "vou sair daqui a duas horas".\nUma dica: tenta trocar por **faz**. "Trabalho nesta oficina faz cinco anos." Soou natural? Então é **há**.',
    feedbackErro: [
      "Esse tempo de cinco anos já aconteceu (começou no passado) ou ainda vai acontecer?",
      'Tenta trocar pela palavra "faz": "Trabalho nesta oficina faz cinco anos." Ficou natural? Se sim, a palavra certa é "há", não "a". O "a" aparece quando o tempo ainda vai acontecer, tipo "daqui a dois dias".',
      '"Há" é a resposta. Sempre que o tempo já começou no passado, use "há". O teste é trocar por "faz": "faz cinco anos" soa certo, então é "há cinco anos". O "a" ficaria errado porque ele aponta para o futuro.',
    ],
  },
  {
    slug: "a6-ex3",
    tipo: "lacuna_unica",
    enunciado: "___ você não avisou antes que ia faltar?",
    opcoes: ["Por que", "Porque"],
    gabarito: "Por que",
    armadilhaId: "porque_family",
    feedbackAcerto:
      '**Por que** separado aparece quando você está fazendo uma pergunta.\nQuando você está respondendo ou explicando o motivo, aí usa **porque** junto. Por exemplo: "Não avisei porque esqueci."\nUma dica: se a frase tem ponto de interrogação ou está pedindo um motivo, use **por que** separado.',
    feedbackErro: [
      "Essa frase está fazendo uma pergunta ou dando uma resposta?",
      'É uma pergunta — você quer saber o motivo. Em perguntas, sempre "por que" separado. O "porque" junto só aparece nas respostas: "Não fui porque estava doente."',
      '"Por que" separado é a resposta. A frase é uma pergunta, então precisa do "por que" em duas palavras. O "porque" junto é só para respostas e explicações: "Fiz isso porque achei certo."',
    ],
  },
  {
    slug: "a6-ex4",
    tipo: "lacuna_unica",
    enunciado: "O serviço ficou ___ feito. Precisa refazer.",
    opcoes: ["mau", "mal"],
    gabarito: "mal",
    armadilhaId: "mau_mal",
    feedbackAcerto:
      '**Mal** descreve como algo foi feito.\nJá o **mau** descreve como algo é, tipo "mau serviço" ou "mau funcionário".\nUma dica: tenta trocar por **de forma ruim**. "O serviço ficou feito de forma ruim." Soou natural? Então é **mal**.',
    feedbackErro: [
      "A palavra está descrevendo como o serviço foi feito, ou descrevendo como o serviço é em si?",
      'Tenta trocar por "de forma ruim": "O serviço ficou feito de forma ruim." Ficou certo? Então é "mal". O "mau" descreveria o serviço como coisa ("um mau serviço"), mas aqui estamos falando de como ele foi executado.',
      '"Mal" é a resposta. Ele descreve como algo foi feito ou como alguém está: "trabalhou mal", "se sentiu mal". O "mau" descreve como algo ou alguém é: "mau funcionário", "mau hábito". Aqui, o serviço foi feito de forma ruim, então é "mal".',
    ],
  },
  {
    slug: "a6-ex5",
    tipo: "lacuna_unica",
    enunciado: "Podem deixar o orçamento com ___.",
    opcoes: ["mim", "eu"],
    gabarito: "mim",
    armadilhaId: "mim_eu",
    feedbackAcerto:
      '**Mim** vem depois de palavras como "com", "para", "por", "de" e "sem".\nJá o **eu** aparece quando você é quem faz a ação: "Eu vou resolver."\nUma dica: tenta trocar por **ele**. "Podem deixar o orçamento com ele." Soou natural? Então é **mim**.',
    feedbackErro: [
      'Tem uma palavra logo antes do espaço em branco. Qual é ela? Isso dá uma pista sobre qual pronome usar.',
      'A palavra "com" vem antes. Depois de "com", "para", "de", "por" e "sem", a forma correta é sempre "mim", nunca "eu". O "eu" aparece quando você é quem faz a ação: "Eu vou buscar."',
      '"Mim" é a resposta. Depois de preposições como "com", "para", "de", "por" e "sem", use sempre "mim". O "eu" só aparece antes do verbo, quando você é o sujeito da ação: "Eu resolvo" funciona, "com eu" não funciona.',
    ],
  },

  // ── Fase 2: escrita (cenários novos, intercalados) ────────────────────────

  // Par mas/mais — 2 de cada, intercalados: mas → mais → mais → mas
  {
    slug: "a6-ex6-escrita",
    tipo: "escrita_lacuna",
    enunciado: "Gostei da proposta, ___ o prazo ficou curto demais.",
    gabarito: "mas",
    armadilhaId: "mas_mais",
    feedbackAcerto:
      '**Mas** liga duas ideias que se opõem.\nJá o **mais** é para quantidade, como em "preciso de mais tempo".\nUma dica: se você consegue trocar por **porém** sem mudar o sentido, use **mas**.',
    feedbackErro: [
      "A segunda parte da frase vai na mesma direção da primeira, ou contradiz ela?",
      'Gostar da proposta e o prazo ser curto são ideias que se contradizem. Qual palavra conecta ideias opostas: **mas** ou **mais**?',
      '**Mas** é a resposta. Ele conecta dois lados que se opõem: você gostou, mas o prazo foi um problema. **Mais** seria para quantidade: "preciso de mais tempo".',
    ],
  },
  {
    slug: "a6-ex7-escrita",
    tipo: "escrita_lacuna",
    enunciado: "Ela entende muito ___ de vendas do que eu.",
    gabarito: "mais",
    armadilhaId: "mas_mais",
    feedbackAcerto:
      '**Mais** aparece quando você está comparando quantidade ou intensidade.\nJá o **mas** conecta ideias opostas, como em "quero ir, mas não posso".\nUma dica: se você consegue trocar por **menos** e a frase ainda faz sentido (mesmo que com significado contrário), é **mais**.',
    feedbackErro: [
      "A frase está comparando o quanto duas pessoas entendem, ou está ligando duas ideias contrárias?",
      'Está comparando: ela entende mais, eu entendo menos. Comparação de quantidade usa **mais**, não **mas**.',
      '**Mais** é a resposta. A frase compara o quanto cada um sabe. Para comparações e quantidades, use **mais**. O **mas** serve para ligar ideias opostas: "quero ir, mas não posso".',
    ],
  },
  {
    slug: "a6-ex8-escrita",
    tipo: "escrita_lacuna",
    enunciado: "Preciso de ___ um dia para revisar esse contrato.",
    gabarito: "mais",
    armadilhaId: "mas_mais",
    feedbackAcerto:
      '**Mais** indica quantidade, seja de tempo, dinheiro, esforço ou qualquer outra coisa.\nJá o **mas** conecta duas ideias contrárias.\nUma dica: se a palavra se refere a quanto de algo você precisa ou quer, é **mais**.',
    feedbackErro: [
      "A frase está pedindo uma quantidade de tempo, ou ligando duas ideias opostas?",
      'Você está pedindo quantidade: mais um dia. Para quantidade, use **mais**, não **mas**.',
      '**Mais** é a resposta. Sempre que a frase fala de quantidade (mais tempo, mais dinheiro, mais dias), use **mais**. O **mas** conecta ideias contrárias: "quero terminar, mas preciso de mais tempo".',
    ],
  },
  {
    slug: "a6-ex9-escrita",
    tipo: "escrita_lacuna",
    enunciado: "A reunião foi longa, ___ valeu a pena.",
    gabarito: "mas",
    armadilhaId: "mas_mais",
    feedbackAcerto:
      '**Mas** liga duas ideias que se contradizem: ser longa (ruim) e ter valido a pena (bom).\nJá o **mais** é para quantidade.\nUma dica: troca por **porém** e veja se a frase continua fazendo sentido.',
    feedbackErro: [
      "As duas partes da frase estão de acordo, ou uma contradiz a outra?",
      'Uma reunião longa geralmente é cansativa, mas ela valeu a pena. São ideias contrárias. Qual palavra conecta ideias opostas?',
      '**Mas** é a resposta. A frase tem duas ideias que se contradizem: foi longa (ponto negativo) e valeu a pena (ponto positivo). O **mas** faz exatamente esse trabalho.',
    ],
  },

  // Par por que/porque — 2 de cada, intercalados: por que → porque → porque → por que
  {
    slug: "a6-ex10-escrita",
    tipo: "escrita_lacuna",
    enunciado: "___ o pedido ainda não saiu para entrega?",
    gabarito: "Por que",
    armadilhaId: "porque_family",
    feedbackAcerto:
      '**Por que** separado aparece nas perguntas, quando você quer saber o motivo de algo.\nJá o **porque** junto aparece nas respostas, quando você está explicando o motivo.\nUma dica: se a frase tem ponto de interrogação ou está pedindo uma explicação, use **por que** separado.',
    feedbackErro: [
      "A frase está fazendo uma pergunta ou dando uma resposta?",
      'É uma pergunta sobre o motivo do atraso. Em perguntas, sempre **por que** separado. O **porque** junto aparece só nas respostas: "Não saiu porque teve um problema."',
      '**Por que** separado é a resposta. A frase é uma pergunta: você quer saber o motivo. O **porque** junto só aparece quando você está explicando: "Não saiu porque o estoque zerou."',
    ],
  },
  {
    slug: "a6-ex11-escrita",
    tipo: "escrita_lacuna",
    enunciado: "Não pude ir à reunião ___ estava com o carro na oficina.",
    gabarito: "porque",
    armadilhaId: "porque_family",
    feedbackAcerto:
      '**Porque** junto aparece quando você está explicando ou dando o motivo de algo.\nJá o **por que** separado aparece nas perguntas.\nUma dica: se você consegue trocar por **pois** e a frase continua fazendo sentido, é **porque** junto.',
    feedbackErro: [
      "A frase está fazendo uma pergunta ou explicando um motivo?",
      'A frase explica um motivo: você não foi por causa do carro. Quando você explica o motivo, use **porque** junto. Tenta trocar por "pois": "Não pude ir pois estava com o carro na oficina." Funcionou? Então é **porque**.',
      '**Porque** é a resposta. A frase explica o motivo da ausência. Sempre que você está justificando ou explicando algo, use **porque** junto. O **por que** separado seria para perguntar: "Por que você não foi?"',
    ],
  },
  {
    slug: "a6-ex12-escrita",
    tipo: "escrita_lacuna",
    enunciado: "Assinei o contrato ___ as condições eram boas.",
    gabarito: "porque",
    armadilhaId: "porque_family",
    feedbackAcerto:
      '**Porque** junto introduz a razão ou o motivo de algo que foi feito.\nJá o **por que** separado é para perguntas.\nUma dica: tenta trocar por **pois**. "Assinei o contrato pois as condições eram boas." Ficou natural? Então é **porque**.',
    feedbackErro: [
      "A frase está pedindo um motivo ou explicando um motivo?",
      'A frase explica por que o contrato foi assinado. Tenta trocar por "pois": ficou natural? Então é **porque** junto.',
      '**Porque** é a resposta. Você está dando o motivo da assinatura. Quando a frase explica ou justifica algo, use **porque** junto. Para perguntar o motivo, aí seria **por que** separado.',
    ],
  },
  {
    slug: "a6-ex13-escrita",
    tipo: "escrita_lacuna",
    enunciado: "Você sabe ___ o chefe cancelou a visita?",
    gabarito: "por que",
    armadilhaId: "porque_family",
    feedbackAcerto:
      '**Por que** separado aparece em perguntas sobre motivo, diretas ou indiretas.\nJá o **porque** junto aparece nas respostas e explicações.\nUma dica: mesmo que a frase não termine com ponto de interrogação, se ela está pedindo uma informação sobre o motivo, é **por que** separado.',
    feedbackErro: [
      "Essa frase está pedindo uma informação (motivo do cancelamento) ou explicando algo?",
      'Mesmo sem ponto de interrogação, a frase está perguntando: "você sabe o motivo?" Perguntas, diretas ou indiretas, usam **por que** separado.',
      '**Por que** separado é a resposta. Mesmo sem "?", a frase é uma pergunta indireta: você está pedindo uma informação. O **porque** junto seria numa resposta: "Ele cancelou porque ficou doente."',
    ],
  },
];
