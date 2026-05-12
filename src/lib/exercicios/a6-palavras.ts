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
    enunciado: "Podem deixar o orçamento para ___.",
    opcoes: ["mim", "eu"],
    gabarito: "mim",
    armadilhaId: "mim_eu",
    feedbackAcerto:
      '**Mim** vem depois de preposições como "para", "por", "de" e "sem".\nJá o **eu** aparece quando você é quem faz a ação: "Eu vou resolver."\nUma dica: tenta trocar por **ele**. "Podem deixar o orçamento para ele." Soou natural? Então é **mim**.',
    feedbackErro: [
      'Tem uma palavra logo antes do espaço em branco. Qual é ela? Isso dá uma pista sobre qual pronome usar.',
      'A palavra "para" vem antes. Depois de "para", "por", "de" e "sem", a forma correta é sempre "mim", nunca "eu". O "eu" aparece quando você é quem faz a ação: "Eu vou buscar."',
      '"Mim" é a resposta. Depois de preposições como "para", "por", "de" e "sem", use sempre "mim". O "eu" só aparece antes do verbo, quando você é o sujeito da ação: "Eu resolvo" funciona, "para eu" não funciona.',
    ],
  },

  // ── Múltipla escolha: pares restantes ────────────────────────────────────

  {
    slug: "a6-ex5b",
    tipo: "lacuna_unica",
    enunciado: "___ você vai depois da reunião?",
    opcoes: ["Onde", "Aonde"],
    gabarito: "Aonde",
    armadilhaId: "onde_aonde",
    feedbackAcerto:
      '**Aonde** indica destino — para onde alguém vai ou está indo.\nJá o **onde** indica localização fixa, o lugar onde algo está ou acontece.\nUma dica: tenta trocar por **para onde**. "Para onde você vai depois da reunião?" Soou natural? Então é **aonde**.',
    feedbackErro: [
      "A pergunta quer saber onde você está agora, ou para onde você está indo?",
      'Há movimento: você vai para algum lugar. Tenta trocar por "para onde": funcionou? Então é **aonde**. O **onde** ficaria para localização fixa: "onde você estava durante a reunião?".',
      '"Aonde" é a resposta. A frase pergunta o destino de um movimento. Quando há movimento ("vai", "foi", "ir"), use **aonde**. O **onde** fica para localização: "onde fica o escritório?".',
    ],
  },
  {
    slug: "a6-ex5c",
    tipo: "lacuna_unica",
    enunciado: "___ me avisar antes, não poderei te ajudar.",
    opcoes: ["Se não", "Senão"],
    gabarito: "Se não",
    armadilhaId: "senao_se_nao",
    feedbackAcerto:
      '**Se não** (separado) aparece quando você tem uma condição: "se não acontecer X, então Y".\nJá **senão** (junto) aparece como alternativa ou consequência, com sentido de "caso contrário" ou "além disso".\nUma dica: tenta trocar por "caso não". Se funcionar, é **se não** separado.',
    feedbackErro: [
      "A frase está colocando uma condição, ou apresentando uma alternativa?",
      'Tenta trocar por "caso não me avisar": funcionou? Quando tem uma condição ("caso não"), usa-se **se não** separado. O **senão** junto aparece como "caso contrário": "Estude, senão vai se arrepender."',
      '"Se não" separado é a resposta. A frase tem uma condição: "se não avisar → não posso ajudar". Quando há condição com "se", a negação é sempre separada. **Senão** junto é para "caso contrário": "Chegue cedo, senão perde a vaga."',
    ],
  },

  // ── Fase 2: escrita — intercalada entre pares (7 pares × 4 rodadas) ────────
  //
  // Estrutura: rodada 1 (1 exercício de cada par) → rodada 2 → rodada 3 → rodada 4
  // Dentro de cada par, os dois lados são alternados entre rodadas.
  // Base: Rohrer & Bjork — prática intercalada produz discriminação superior
  // à prática bloqueada (todos os exercícios do mesmo par juntos).
  //
  // Rodada 1: mas | por que | há | mal | mim | onde | se não
  // Rodada 2: mais | porque | a | mau | eu | aonde | senão
  // Rodada 3: mais | porque | há | mau | mim | onde | senão
  // Rodada 4: mas | por que | a | mal | eu | aonde | se não

  // ── Rodada 1: mas | por que | há | mal | mim | onde | se não ───────────────

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
    slug: "a6-ex14-escrita",
    tipo: "escrita_lacuna",
    enunciado: "Moro neste bairro ___ quase dez anos.",
    gabarito: "há",
    armadilhaId: "ha_a",
    feedbackAcerto:
      '**Há** indica tempo que já passou, que já começou.\nJá o **a** aponta para tempo que ainda vai acontecer: "daqui a dois dias".\nUma dica: tenta trocar por **faz**. "Moro neste bairro faz quase dez anos." Soou natural? Então é **há**.',
    feedbackErro: [
      "Esse tempo de dez anos já começou no passado ou ainda vai acontecer?",
      'Você mora lá faz dez anos — o tempo já aconteceu. Tenta trocar por "faz": "Moro neste bairro faz quase dez anos." Funcionou? Então é **há**.',
      '"Há" é a resposta. O tempo já começou. Sempre que o tempo é passado, use **há**. O **a** ficaria errado aqui porque ele indica tempo futuro: "vou voltar daqui a dez anos".',
    ],
  },
  {
    slug: "a6-ex18-escrita",
    tipo: "escrita_lacuna",
    enunciado: "O relatório foi muito ___ escrito, cheio de erros.",
    gabarito: "mal",
    armadilhaId: "mau_mal",
    feedbackAcerto:
      '**Mal** descreve como algo foi feito ou como alguém está.\nJá o **mau** descreve como algo ou alguém é: "mau caráter", "mau exemplo".\nUma dica: tenta trocar por **de forma ruim**. "O relatório foi muito mal escrito" → feito de forma ruim. Funcionou? Então é **mal**.',
    feedbackErro: [
      "A palavra está descrevendo como o relatório foi escrito, ou como o relatório é?",
      'A frase diz como ele foi escrito — de forma ruim. Tenta trocar por "de forma ruim": funcionou? Então é **mal**. O **mau** seria para descrever o relatório como coisa: "um mau relatório".',
      '"Mal" é a resposta. Ele descreve como a ação foi feita: escrito de forma ruim. O **mau** descreveria a qualidade da coisa em si: "um mau documento", "um mau funcionário".',
    ],
  },
  {
    slug: "a6-ex22-escrita",
    tipo: "escrita_lacuna",
    enunciado: "O gerente mandou o e-mail para ___ e para o João.",
    gabarito: "mim",
    armadilhaId: "mim_eu",
    feedbackAcerto:
      '**Mim** vem depois de preposições como "para", "com", "de", "por" e "sem".\nJá o **eu** aparece quando você é quem faz a ação: "Eu resolvo".\nUma dica: tenta trocar por **ele**. "Mandou o e-mail para ele." Soou natural? Então é **mim**.',
    feedbackErro: [
      'Tem uma preposição logo antes do espaço. Qual é ela?',
      'A palavra "para" vem antes. Depois de "para", "com", "de", "por" e "sem", use sempre **mim**. O **eu** aparece quando você é o sujeito da ação: "Eu recebi o e-mail".',
      '"Mim" é a resposta. Depois de preposições como "para", use **mim**. O teste: troca por "ele" — "para ele" soa natural, então é "para mim". O **eu** só aparece antes do verbo: "Eu abri o e-mail".',
    ],
  },
  {
    slug: "a6-ex26-escrita",
    tipo: "escrita_lacuna",
    enunciado: "A loja ___ trabalho fica perto daqui.",
    gabarito: "onde",
    armadilhaId: "onde_aonde",
    feedbackAcerto:
      '**Onde** indica um lugar fixo, sem movimento — você está lá ou o lugar está descrito.\nJá o **aonde** indica destino, movimento em direção a algum lugar.\nUma dica: tenta trocar por **no qual**. "A loja na qual trabalho." Soou natural? Então é **onde**.',
    feedbackErro: [
      "A frase está descrevendo o lugar onde você trabalha, ou para onde você vai?",
      'A loja é um lugar fixo onde você trabalha — não há movimento. Para lugar fixo, use **onde**. O **aonde** seria para destino: "aonde você vai trabalhar?".',
      '"Onde" é a resposta. Você está descrevendo um lugar fixo. Use **onde** para lugares sem movimento. O **aonde** é para destino: "aonde você vai?"',
    ],
  },
  {
    slug: "a6-ex30-escrita",
    tipo: "escrita_lacuna",
    enunciado: "___ confirmar até amanhã, perderá a vaga.",
    gabarito: "Se não",
    armadilhaId: "senao_se_nao",
    feedbackAcerto:
      '**Se não** separado aparece quando há uma condição: "se não acontecer X, então Y".\nJá o **senão** junto é equivalente a "caso contrário" ou "além disso".\nUma dica: tenta trocar por **caso não**. "Caso não confirmar até amanhã..." Funcionou? Então é **se não** separado.',
    feedbackErro: [
      "A frase está impondo uma condição ou apresentando uma alternativa?",
      'Há uma condição: "se não confirmar → perde a vaga". Tenta trocar por "caso não": funcionou? Então é **se não** separado. O **senão** junto seria: "Confirme, senão perderá a vaga."',
      '"Se não" separado é a resposta. A frase tem uma condição com "se". Quando o "não" faz parte da condição introduzida por "se", escreve separado. O **senão** junto equivale a "caso contrário".',
    ],
  },

  // ── Rodada 2: mais | porque | a | mau | eu | aonde | senão ────────────────

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
    slug: "a6-ex15-escrita",
    tipo: "escrita_lacuna",
    enunciado: "A reunião começa daqui ___ meia hora.",
    gabarito: "a",
    armadilhaId: "ha_a",
    feedbackAcerto:
      '**A** indica tempo que ainda vai acontecer, que está por vir.\nJá o **há** indica tempo que já passou: "trabalho aqui há dois anos".\nUma dica: se você puder trocar por "em" e a frase continuar fazendo sentido, é **a**: "daqui em meia hora" tem o mesmo sentido.',
    feedbackErro: [
      "Essa meia hora já passou ou ainda vai acontecer?",
      'A reunião ainda não começou — o tempo é futuro. Para tempo futuro, use **a**, não **há**. O **há** seria para passado: "a reunião acabou há meia hora".',
      '"A" é a resposta. O tempo ainda vai acontecer. Use **a** para o futuro: "daqui a pouco", "daqui a dois dias". O **há** é para o passado: "chegou há meia hora".',
    ],
  },
  {
    slug: "a6-ex19-escrita",
    tipo: "escrita_lacuna",
    enunciado: "Ele tem um ___ hábito de deixar tudo para a última hora.",
    gabarito: "mau",
    armadilhaId: "mau_mal",
    feedbackAcerto:
      '**Mau** descreve como algo ou alguém é — uma característica, uma qualidade ruim.\nJá o **mal** descreve como algo foi feito: "dormiu mal", "trabalhou mal".\nUma dica: tenta trocar por **ruim**. "Um ruim hábito." Funcionou? Então é **mau**.',
    feedbackErro: [
      "A palavra está descrevendo como o hábito é, ou como ele foi praticado?",
      'A frase descreve como o hábito é — uma característica negativa. Tenta trocar por "ruim": "um ruim hábito" tem o mesmo sentido. Quando você descreve uma característica ruim, use **mau**.',
      '"Mau" é a resposta. Ele descreve o hábito como algo de má qualidade. Use **mau** para características: "mau hábito", "mau funcionário". Use **mal** para ações: "agiu mal", "dormiu mal".',
    ],
  },
  {
    slug: "a6-ex23-escrita",
    tipo: "escrita_lacuna",
    enunciado: "___ e o Pedro vamos apresentar o projeto amanhã.",
    gabarito: "Eu",
    armadilhaId: "mim_eu",
    feedbackAcerto:
      '**Eu** aparece quando você é quem faz a ação — o sujeito da frase.\nJá o **mim** aparece depois de preposições: "para mim", "comigo", "de mim".\nUma dica: tenta tirar "e o Pedro" da frase. "Eu vou apresentar." Soou natural? Então é **eu**.',
    feedbackErro: [
      "Quem está fazendo a ação de apresentar?",
      'Você e o Pedro são quem vai apresentar — vocês são o sujeito. Quando você pratica a ação, use **eu**. Tira "e o Pedro": "Eu vou apresentar." Funcionou? Então é **eu**.',
      '"Eu" é a resposta. Você é quem vai apresentar — é o sujeito da frase. O **eu** sempre aparece quando você pratica a ação. O **mim** aparece depois de preposições: "foi apresentado por mim".',
    ],
  },
  {
    slug: "a6-ex27-escrita",
    tipo: "escrita_lacuna",
    enunciado: "___ você foi ontem à noite?",
    gabarito: "Aonde",
    armadilhaId: "onde_aonde",
    feedbackAcerto:
      '**Aonde** aparece quando há movimento ou destino — "para onde você foi?".\nJá o **onde** é para lugar fixo, sem movimento: "onde você estava?".\nUma dica: tenta trocar por **para onde**. "Para onde você foi?" Funcionou? Então é **aonde**.',
    feedbackErro: [
      "A pergunta quer saber o lugar fixo onde algo estava, ou o destino de um movimento?",
      'A frase pergunta para onde você foi — há movimento. Tenta trocar por "para onde": "Para onde você foi?" Funcionou? Então é **aonde**.',
      '"Aonde" é a resposta. A frase pergunta o destino de um movimento. Quando há movimento ("foi", "vai", "correu"), use **aonde**. O **onde** fica para lugar fixo: "onde você estava?".',
    ],
  },
  {
    slug: "a6-ex31-escrita",
    tipo: "escrita_lacuna",
    enunciado: "Anote o número, ___ você vai esquecer.",
    gabarito: "senão",
    armadilhaId: "senao_se_nao",
    feedbackAcerto:
      '**Senão** junto equivale a "caso contrário" — indica o que acontece se a ação não for feita.\nJá o **se não** separado aparece em condições com "se": "se não fizer X, então Y".\nUma dica: tenta trocar por **caso contrário**. "Anote o número, caso contrário vai esquecer." Funcionou? Então é **senão** junto.',
    feedbackErro: [
      "A frase está estabelecendo uma condição com 'se', ou dizendo o que acontece se não agir?",
      'A frase avisa o que vai acontecer se você não anotar. Tenta trocar por "caso contrário": "Anote, caso contrário vai esquecer." Funcionou? Então é **senão** junto.',
      '"Senão" junto é a resposta. Ele equivale a "caso contrário". Use **senão** quando a frase diz o que vai acontecer se nada for feito. O **se não** separado ficaria em: "Se não anotar, vai esquecer."',
    ],
  },

  // ── Rodada 3: mais | porque | há | mau | mim | onde | senão ──────────────

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
    slug: "a6-ex16-escrita",
    tipo: "escrita_lacuna",
    enunciado: "O pedido foi feito ___ três semanas e ainda não chegou.",
    gabarito: "há",
    armadilhaId: "ha_a",
    feedbackAcerto:
      '**Há** indica que o tempo já aconteceu — o pedido foi feito no passado.\nJá o **a** seria para algo que ainda vai acontecer.\nUma dica: troca por **faz**. "O pedido foi feito faz três semanas." Soou natural? Então é **há**.',
    feedbackErro: [
      "O pedido foi feito no passado ou ainda vai ser feito?",
      'O pedido já foi feito — é passado. Tenta trocar por "faz": funcionou? Então é **há**. O **a** seria para "daqui a três semanas", tempo que ainda vai acontecer.',
      '"Há" é a resposta. O pedido é passado. Quando o tempo já passou, use **há**. Para confirmar, troca por "faz": "foi feito faz três semanas" — soou natural, então é **há**.',
    ],
  },
  {
    slug: "a6-ex20-escrita",
    tipo: "escrita_lacuna",
    enunciado: "Ele é um ___ pagador — sempre atrasa.",
    gabarito: "mau",
    armadilhaId: "mau_mal",
    feedbackAcerto:
      '**Mau** descreve uma característica ruim de algo ou alguém.\nJá o **mal** descreve como algo foi feito ou como alguém está.\nUma dica: troca por **ruim**. "Um ruim pagador." Soou natural? Então é **mau**.',
    feedbackErro: [
      "A palavra descreve como ele é, ou como ele age?",
      '"Mau pagador" é uma característica dele — como ele é. Tenta trocar por "ruim pagador": faz sentido? Então é **mau**. O **mal** seria para ação: "pagou mal o funcionário".',
      '"Mau" é a resposta. Descreve uma característica da pessoa: ser mau pagador é como ele é, não como ele age. O **mal** ficaria para ação: "tratou mal os clientes".',
    ],
  },
  {
    slug: "a6-ex24-escrita",
    tipo: "escrita_lacuna",
    enunciado: "Esse recado é para ___.",
    gabarito: "mim",
    armadilhaId: "mim_eu",
    feedbackAcerto:
      '**Mim** vem sempre depois de preposições como "para", "por", "de" e "sem".\nJá o **eu** é para quando você pratica a ação.\nUma dica: tenta trocar por **ele**. "Esse recado é para ele." Soou natural? Então é **mim**.',
    feedbackErro: [
      'Qual palavra vem logo antes do espaço?',
      'A preposição "para" vem antes. Depois de "para", sempre **mim**. O **eu** seria antes do verbo: "Eu recebi o recado".',
      '"Mim" é a resposta. Depois de preposições como "para", use sempre **mim**. O **eu** ficaria antes do verbo: "Eu entendo o recado".',
    ],
  },
  {
    slug: "a6-ex28-escrita",
    tipo: "escrita_lacuna",
    enunciado: "Você sabe ___ eu posso encontrar o documento?",
    gabarito: "onde",
    armadilhaId: "onde_aonde",
    feedbackAcerto:
      '**Onde** indica localização — o documento está em algum lugar fixo.\nJá o **aonde** seria para destino de movimento: "aonde você vai buscar?".\nUma dica: tenta trocar por **em que lugar**. "Em que lugar posso encontrar?" Soou natural? Então é **onde**.',
    feedbackErro: [
      "A pergunta quer saber o lugar onde o documento está, ou para onde você vai?",
      'O documento está em um lugar — não há movimento de destino. Para localização fixa, use **onde**. O **aonde** seria para movimento: "aonde você vai para buscá-lo?".',
      '"Onde" é a resposta. A frase pergunta a localização de algo fixo. O **aonde** ficaria para destino de movimento: "aonde ir para buscar?".',
    ],
  },
  {
    slug: "a6-ex32-escrita",
    tipo: "escrita_lacuna",
    enunciado: "Ligue para o cliente, ___ ele vai reclamar.",
    gabarito: "senão",
    armadilhaId: "senao_se_nao",
    feedbackAcerto:
      '**Senão** junto indica consequência — o que vai acontecer se a ação não for tomada.\nJá o **se não** separado aparece em condições: "se não ligar, então...".\nUma dica: troca por **caso contrário**. "Ligue, caso contrário ele vai reclamar." Funcionou? Então é **senão**.',
    feedbackErro: [
      "A frase diz o que vai acontecer se você não agir, ou coloca uma condição com 'se'?",
      'Tenta trocar por "caso contrário": "Ligue, caso contrário ele vai reclamar." Soou natural? Então é **senão** junto.',
      '"Senão" junto é a resposta. Significa "caso contrário": se você não ligar, ele reclama. O **se não** separado ficaria numa condição: "Se não ligar até as três, ele reclama."',
    ],
  },

  // ── Rodada 4: mas | por que | a | mal | eu | aonde | se não ──────────────

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
  {
    slug: "a6-ex17-escrita",
    tipo: "escrita_lacuna",
    enunciado: "O prazo vence daqui ___ cinco dias.",
    gabarito: "a",
    armadilhaId: "ha_a",
    feedbackAcerto:
      '**A** aponta para tempo futuro, que ainda está por vir.\nJá o **há** é para tempo passado: "o prazo venceu há cinco dias".\nUma dica: se a frase fala de algo que ainda vai acontecer, é sempre **a**.',
    feedbackErro: [
      "O prazo já venceu ou ainda vai vencer?",
      'O prazo ainda vai vencer — é futuro. Para tempo futuro, use **a**: "daqui a cinco dias". O **há** seria para passado: "venceu há cinco dias".',
      '"A" é a resposta. O prazo está no futuro. Use **a** para tempo que ainda vai acontecer. O **há** fica para o passado: "venceu há cinco dias".',
    ],
  },
  {
    slug: "a6-ex21-escrita",
    tipo: "escrita_lacuna",
    enunciado: "O mecânico fez o serviço ___ e o carro voltou com o mesmo problema.",
    gabarito: "mal",
    armadilhaId: "mau_mal",
    feedbackAcerto:
      '**Mal** descreve como a ação foi executada — de forma ruim.\nJá o **mau** descreveria a característica: "um mau mecânico".\nUma dica: tenta trocar por **de forma ruim**. "Fez o serviço de forma ruim." Funcionou? Então é **mal**.',
    feedbackErro: [
      "A palavra diz como o serviço foi feito, ou diz como o mecânico é?",
      'A frase fala de como o serviço foi executado. Tenta trocar por "de forma ruim": funcionou? Então é **mal**. O **mau** descreveria o mecânico como pessoa: "um mau mecânico".',
      '"Mal" é a resposta. Ele indica como a ação foi feita — de forma ruim. O **mau** seria para uma característica: "mau profissional", "mau serviço" (a coisa em si).',
    ],
  },
  {
    slug: "a6-ex25-escrita",
    tipo: "escrita_lacuna",
    enunciado: "___ sempre chego antes do horário.",
    gabarito: "Eu",
    armadilhaId: "mim_eu",
    feedbackAcerto:
      '**Eu** aparece quando você é o sujeito — quem pratica a ação.\nJá o **mim** vem depois de preposições: "para mim", "de mim", "por mim".\nUma dica: se a frase faz sentido com "Eu faço isso", é **eu**.',
    feedbackErro: [
      "Quem é que chega antes do horário?",
      'Você é quem chega — é o sujeito da frase. Quando você pratica a ação, use **eu**. O **mim** ficaria depois de preposição: "eles confiam em mim".',
      '"Eu" é a resposta. Você é o sujeito que pratica a ação de chegar. O **mim** aparece depois de preposições: "chegaram antes de mim".',
    ],
  },
  {
    slug: "a6-ex29-escrita",
    tipo: "escrita_lacuna",
    enunciado: "Não sei ___ ir para resolver esse problema.",
    gabarito: "aonde",
    armadilhaId: "onde_aonde",
    feedbackAcerto:
      '**Aonde** indica destino — para onde ir.\nJá o **onde** indica localização fixa: o lugar onde algo está.\nUma dica: tenta trocar por **para onde**. "Não sei para onde ir." Soou natural? Então é **aonde**.',
    feedbackErro: [
      "A frase está falando de um lugar fixo ou de para onde ir?",
      'Há movimento: você precisa "ir" a algum lugar. Tenta trocar por "para onde": "Não sei para onde ir." Funcionou? Então é **aonde**.',
      '"Aonde" é a resposta. A frase indica destino de movimento. Quando há movimento ("ir", "vir", "correr"), use **aonde**. O **onde** ficaria para localização: "onde está o responsável?".',
    ],
  },
  {
    slug: "a6-ex33-escrita",
    tipo: "escrita_lacuna",
    enunciado: "___ houver assinatura, o contrato não vale.",
    gabarito: "Se não",
    armadilhaId: "senao_se_nao",
    feedbackAcerto:
      '**Se não** separado aparece em condições: "se a assinatura não estiver lá, então o contrato não vale".\nJá o **senão** junto equivale a "caso contrário" e não abre uma condição com "se".\nUma dica: tenta trocar por **caso não**. "Caso não houver assinatura..." Funcionou? Então é **se não** separado.',
    feedbackErro: [
      "A frase está colocando uma condição com 'se', ou dizendo 'caso contrário'?",
      'Há uma condição: "se não houver assinatura → contrato não vale". Tenta trocar por "caso não": funcionou? Então é **se não** separado.',
      '"Se não" separado é a resposta. A frase tem uma condição introduzida por "se". Quando o "não" faz parte dessa condição, escrevemos separado. O **senão** junto não abriria uma condição: seria "Assine, senão o contrato não vale."',
    ],
  },
];
