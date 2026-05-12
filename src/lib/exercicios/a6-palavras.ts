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
];
