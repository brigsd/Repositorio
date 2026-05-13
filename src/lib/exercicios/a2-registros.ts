/**
 * Exercícios curados da Unidade A.2 — "Registros: o mesmo recado em mundos diferentes"
 *
 * Estrutura (baseada em pesquisa — Wheeler & Swords; Sweller; NNg):
 *
 * Fase 1 — Identificação (8 exercícios):
 *   Aluno vê duas versões da mesma mensagem e escolhe qual está no
 *   registro adequado para o contexto. Avaliação local, sem IA.
 *
 * Fase 2 — Reescrita (6 exercícios):
 *   Aluno recebe texto informal + exemplo-modelo (sempre visível) e
 *   reescreve no registro formal. Avaliação por IA com rubrica.
 *
 * Princípio Sweller (worked example effect): o exemploPar fica visível
 * ANTES de pedir prática e permanece na tela DURANTE a escrita.
 * Princípio Bandura: nenhum item chama o informal de "errado" —
 * sempre "mais adequado para o contexto formal".
 */

import type { ExercicioReescrita } from "./tipos-reescrita";

// Rubrica padrão para todos os exercícios de reescrita
const RUBRICA = [
  "Evitou contrações informais (tô, tá, hj, vc, pq, blz)",
  "Usou conjugação verbal completa (estou, está, porque)",
  "Manteve o sentido original da mensagem",
  "Tom adequado ao contexto profissional",
];

// Lista fechada de tipos de erro para A.2 — reduz alucinação da IA
const TIPOS_ERRO = [
  "contracao_informal",
  "abreviacao",
  "vocabulario_coloquial",
  "sem_abertura_formal",
  "sem_fechamento_formal",
  "sentido_alterado",
  "registro_correto",
];

export const EXERCICIOS_A2: ExercicioReescrita[] = [

  // ─── Fase 1: Identificação de registro (8 exercícios) ───────────────────────

  {
    slug: "a2-ex1", // #1
    tipo: "identificacao_registro",
    contexto: "E-mail para o chefe",
    enunciado: "Qual versão está no tom mais adequado para um e-mail pedindo folga ao chefe?",
    opcoes: [
      "chefe, tô precisando de folga na sexta, pode ser?",
      "Bom dia. Gostaria de solicitar folga na próxima sexta-feira, caso seja possível.",
    ],
    gabarito: "Bom dia. Gostaria de solicitar folga na próxima sexta-feira, caso seja possível.",
    feedbackAcerto:
      "Exatamente. A segunda versão tem saudação, usa palavras completas e termina de forma respeitosa — tudo o que o contexto formal pede.\n\nO tom informal funciona bem numa conversa com um amigo, mas num e-mail ao chefe ele pode passar uma imagem menos profissional do que você gostaria.",
    feedbackErro: [
      "Pensa no contexto: você está escrevendo para o chefe, num e-mail. Qual das duas versões parece mais cuidadosa e respeitosa?",
      "A versão adequada para um e-mail ao chefe é a segunda: tem saudação, não usa contrações (tô) e faz o pedido de forma clara e respeitosa.",
    ],
  },

  {
    slug: "a2-ex2", // #2
    tipo: "identificacao_registro",
    contexto: "Confirmação de reunião",
    enunciado: "Qual versão está no tom mais adequado para confirmar presença em uma reunião de trabalho?",
    opcoes: [
      "Confirmo minha presença. Poderia me informar o horário de início?",
      "blz, apareço sim, que horas começa?",
    ],
    gabarito: "Confirmo minha presença. Poderia me informar o horário de início?",
    feedbackAcerto:
      "Certo. A primeira versão é direta, sem gírias e usa palavras completas — registro certo para uma comunicação profissional.\n\nA segunda tem 'blz' (abreviação) e um tom de conversa informal, que pode passar uma imagem menos profissional.",
    feedbackErro: [
      "Qual das duas versões usaria em uma mensagem para um colega de trabalho ou supervisor?",
      "A versão adequada é a primeira: sem abreviações ('blz'), com palavras completas e tom respeitoso.",
    ],
  },

  {
    slug: "a2-ex3", // #3
    tipo: "identificacao_registro",
    contexto: "Aviso de atraso para cliente",
    enunciado: "Qual versão está no tom mais adequado para avisar um cliente sobre um atraso?",
    opcoes: [
      "vou atrasar uns 20 min, tô no trânsito",
      "Informo que chegarei com aproximadamente 20 minutos de atraso devido ao trânsito.",
    ],
    gabarito: "Informo que chegarei com aproximadamente 20 minutos de atraso devido ao trânsito.",
    feedbackAcerto:
      "Isso mesmo. A segunda versão é precisa, sem contrações e inclui uma explicação clara — o que um cliente espera receber.\n\nA primeira funciona para um amigo, mas para um cliente pode passar uma imagem menos profissional do que o contexto pede.",
    feedbackErro: [
      "Imagine que você é o cliente recebendo essa mensagem. Qual das duas te passaria mais confiança?",
      "A versão adequada para um cliente é a segunda: sem 'tô', com a informação completa e tom profissional.",
    ],
  },

  {
    slug: "a2-ex4", // #4
    tipo: "identificacao_registro",
    contexto: "Pedido de prazo ao supervisor",
    enunciado: "Qual versão está no tom mais adequado para pedir mais prazo ao seu supervisor?",
    opcoes: [
      "Infelizmente não conseguirei entregar o material hoje. Seria possível prorrogar o prazo para amanhã?",
      "cara, não vou conseguir entregar hoje não, posso mandar amanhã?",
    ],
    gabarito: "Infelizmente não conseguirei entregar o material hoje. Seria possível prorrogar o prazo para amanhã?",
    feedbackAcerto:
      "Perfeito. A primeira versão reconhece o problema, explica com objetividade e faz o pedido de forma respeitosa — o tom certo para esse contexto.\n\nUsar 'cara' e 'não vou conseguir... não' num pedido formal pode comprometer a imagem de quem escreve.",
    feedbackErro: [
      "Qual das duas versões parece mais profissional para uma mensagem ao supervisor?",
      "A versão adequada é a primeira: sem 'cara', com conjugação correta e pedido claro e respeitoso.",
    ],
  },

  {
    slug: "a2-ex5", // #5
    tipo: "identificacao_registro",
    contexto: "Consulta a fornecedor",
    enunciado: "Qual versão está no tom mais adequado para verificar o andamento de um pedido com um fornecedor?",
    opcoes: [
      "e aí, como tá aquele pedido que fiz semana passada?",
      "Gostaria de verificar o andamento do pedido realizado na semana passada. Poderia me informar?",
    ],
    gabarito: "Gostaria de verificar o andamento do pedido realizado na semana passada. Poderia me informar?",
    feedbackAcerto:
      "Certo. A segunda versão é objetiva e respeitosa — ideal para uma comunicação com fornecedor.\n\nA primeira ('e aí, como tá') funciona na informalidade, mas num contexto comercial pode passar uma imagem menos profissional do que o momento pede.",
    feedbackErro: [
      "Com um fornecedor, qual das duas versões transmite mais profissionalismo?",
      "A versão adequada é a segunda: sem 'e aí' ou 'tá', com a pergunta feita de forma clara e respeitosa.",
    ],
  },

  {
    slug: "a2-ex6", // #6
    tipo: "identificacao_registro",
    contexto: "Relato de problema ao gerente",
    enunciado: "Qual versão está no tom mais adequado para comunicar uma falha de equipamento ao gerente?",
    opcoes: [
      "Informo que o equipamento apresentou uma falha e está fora de operação.",
      "a máquina quebrou e tá uma bagunça aqui",
    ],
    gabarito: "Informo que o equipamento apresentou uma falha e está fora de operação.",
    feedbackAcerto:
      "Exato. A primeira versão comunica o problema com objetividade e tom neutro — o que um gerente precisa receber.\n\nA segunda, além de informal, não especifica qual equipamento e usa 'tá' no lugar de 'está'.",
    feedbackErro: [
      "Qual das duas versões dá mais informação clara e tem tom mais adequado para um gerente?",
      "A versão adequada é a primeira: objetiva, sem 'tá', e informa exatamente o problema.",
    ],
  },

  {
    slug: "a2-ex7", // #7
    tipo: "identificacao_registro",
    contexto: "Agradecimento após reunião",
    enunciado: "Qual versão está no tom mais adequado para agradecer a um cliente após uma reunião?",
    opcoes: [
      "valeu mesmo pela reunião, foi muito bom",
      "Agradeço pela atenção e pela oportunidade. Foi muito produtivo.",
    ],
    gabarito: "Agradeço pela atenção e pela oportunidade. Foi muito produtivo.",
    feedbackAcerto:
      "Isso mesmo. A segunda versão usa palavras completas, é respeitosa e específica — o tom certo para um agradecimento profissional.\n\n'Valeu mesmo' funciona entre amigos, mas num contexto de cliente pode parecer informal demais.",
    feedbackErro: [
      "Qual das duas deixaria uma impressão mais profissional num cliente?",
      "A versão adequada é a segunda: sem 'valeu', com agradecimento claro e tom profissional.",
    ],
  },

  {
    slug: "a2-ex8", // #8
    tipo: "identificacao_registro",
    contexto: "Encerramento de mensagem profissional",
    enunciado: "Qual versão está no tom mais adequado para encerrar um e-mail profissional?",
    opcoes: [
      "Coloco-me à disposição para qualquer esclarecimento. Att.",
      "qualquer coisa me fala, tô por aqui",
    ],
    gabarito: "Coloco-me à disposição para qualquer esclarecimento. Att.",
    feedbackAcerto:
      "Perfeito. A primeira versão tem um encerramento formal clássico ('Att.') e usa 'coloco-me à disposição' — exatamente o tom esperado num e-mail profissional.\n\nA segunda, apesar de amigável, não pertence ao contexto formal.",
    feedbackErro: [
      "Para encerrar um e-mail profissional, qual das duas versões soa mais cuidadosa?",
      "A versão adequada é a primeira: sem 'tô', com 'Att.' e a frase de encerramento formal.",
    ],
  },

  // ─── Fase 2: Reescrita com IA (6 exercícios) ────────────────────────────────

  {
    slug: "a2-ex9", // #9
    tipo: "reescrita_registro",
    contexto: "E-mail para o chefe",
    enunciado: "Reescreva a mensagem abaixo no registro formal, como se fosse um e-mail para o seu chefe.",
    textoInformal: "oi chefe, tô precisando de folga amanhã pq tenho consulta médica, dá pra liberar?",
    exemploPar: {
      informal: "oi, preciso sair mais cedo hj, tá bom?",
      formal: "Boa tarde. Gostaria de solicitar saída antecipada hoje. Seria possível?",
    },
    rubrica: RUBRICA,
    tiposErroValidos: TIPOS_ERRO,
  },

  {
    slug: "a2-ex10", // #10
    tipo: "reescrita_registro",
    contexto: "Aviso ao gerente",
    enunciado: "Reescreva a mensagem abaixo no registro formal, como se fosse enviada ao gerente.",
    textoInformal: "chefe, a entrega atrasou, o fornecedor sumiu e não atende o telefone, tô tentando resolver",
    exemploPar: {
      informal: "o produto não chegou ainda, tô no prejuízo aqui",
      formal: "Informo que o produto não foi recebido no prazo. Estou verificando a situação com o fornecedor.",
    },
    rubrica: RUBRICA,
    tiposErroValidos: TIPOS_ERRO,
  },

  {
    slug: "a2-ex11", // #11
    tipo: "reescrita_registro",
    contexto: "Pedido de prazo extra",
    enunciado: "Reescreva a mensagem abaixo no registro formal, como se fosse enviada ao seu supervisor.",
    textoInformal: "desculpa mas não vou conseguir terminar o relatório hoje, tô com muito serviço, posso entregar quinta?",
    exemploPar: {
      informal: "não vou dar conta de entregar hoje",
      formal: "Infelizmente não conseguirei cumprir o prazo de hoje. Seria possível prorrogar para amanhã?",
    },
    rubrica: RUBRICA,
    tiposErroValidos: TIPOS_ERRO,
  },

  {
    slug: "a2-ex12", // #12
    tipo: "reescrita_registro",
    contexto: "Reclamação formal",
    enunciado: "Reescreva a mensagem abaixo no registro formal, como se fosse enviada para o setor de atendimento de uma empresa.",
    textoInformal: "quero reclamar do serviço que recebi, ficou muito ruim e não gostei nada, quero meu dinheiro de volta",
    exemploPar: {
      informal: "o produto veio com defeito, quero meu dinheiro de volta",
      formal: "Venho registrar uma reclamação sobre o produto recebido, que apresentou defeito. Solicito o reembolso do valor pago.",
    },
    rubrica: RUBRICA,
    tiposErroValidos: TIPOS_ERRO,
  },

  {
    slug: "a2-ex13", // #13
    tipo: "reescrita_registro",
    contexto: "Consulta sobre prazo",
    enunciado: "Reescreva a mensagem abaixo no registro formal, como se fosse enviada para um responsável de contrato.",
    textoInformal: "pra quando precisa essa assinatura mesmo? tô perdido nessa papelada toda, não entendi nada",
    exemploPar: {
      informal: "quando vence isso? não tô entendendo nada desse processo",
      formal: "Poderia me informar o prazo para assinatura? Gostaria de entender melhor os próximos passos do processo.",
    },
    rubrica: RUBRICA,
    tiposErroValidos: TIPOS_ERRO,
  },

  {
    slug: "a2-ex14", // #14
    tipo: "reescrita_registro",
    contexto: "Mensagem para o grupo de trabalho",
    enunciado: "Reescreva a mensagem abaixo no registro formal, como se fosse enviada num grupo de trabalho com colegas e supervisores.",
    textoInformal: "oi galera, alguém viu meu arquivo do cliente João? sumiu do sistema e preciso entregar essa proposta hoje ainda",
    exemploPar: {
      informal: "alguém viu onde ficou aquele arquivo? preciso entregar hoje",
      formal: "Prezados, alguém teria acesso àquele arquivo? Preciso dele para finalizar uma entrega ainda hoje.",
    },
    rubrica: RUBRICA,
    tiposErroValidos: TIPOS_ERRO,
  },
];
