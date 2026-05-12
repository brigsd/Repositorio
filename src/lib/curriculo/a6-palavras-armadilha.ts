/**
 * curriculo/a6-palavras-armadilha.ts
 *
 * Currículo curado da Unidade A.6 — "As palavras que todo mundo erra"
 *
 * Esta é a FONTE DA VERDADE pedagógica da unidade.
 * A IA usa este conteúdo como âncora — ela não inventa fatos,
 * apenas gera variações e exemplos a partir do que está aqui.
 *
 * Por que A.6 como primeira unidade funcional?
 * - É a unidade com maior impacto imediato (erros visíveis em currículo/e-mail)
 * - Conteúdo discreto e verificável — fácil de testar a IA
 * - Alta taxa de "ah, eu sabia que tinha algo errado!" — gera confiança
 */

import type { UnidadeCurriculo } from "./tipos";

export const A6_PALAVRAS_ARMADILHA: UnidadeCurriculo = {
  slug: "a-6-palavras-armadilha",
  titulo: "As palavras que todo mundo erra",
  nivel: "A",
  numero: 6,
  duracaoEstimadaMin: 25,

  // ─── Âncora de propósito ────────────────────────────────────────────────
  // Aparece ANTES de qualquer conteúdo — "por que isso importa pra mim?"
  ancoraPropósito: {
    titulo: "Por que isso importa?",
    corpo: `Você já enviou uma mensagem importante (pra um cliente, pro chefe, pro RH) e depois percebeu um erro que te deu aquela sensação ruim? Essas palavras são armadilhas porque soam igual na fala, mas têm significados completamente diferentes no texto. Quem lê sabe quando alguém errou. Depois desta unidade, você vai parar de errar essas de vez.`,
    exemploPrático: `Um mecânico enviou um orçamento pro cliente com "Vou verificar mais o motor amanhã" quando queria dizer "mas". O cliente cancelou o serviço achando que tinha mais problema do que esperava.`,
  },

  // ─── Pré-aferição ────────────────────────────────────────────────────────
  // 3 perguntas antes da unidade → mede o delta de aprendizado ao final
  preAfericao: [
    {
      slug: "pre-mas-mais",
      enunciado: 'Qual a opção correta? "Quero ir, ___ não posso."',
      opcoes: ["mas", "mais"],
      gabarito: "mas",
      conceito: "mas_mais",
    },
    {
      slug: "pre-ha-a",
      enunciado:
        'Qual a opção correta? "Trabalho aqui ___ dois anos."',
      opcoes: ["há", "a"],
      gabarito: "há",
      conceito: "ha_a",
    },
    {
      slug: "pre-porque",
      enunciado:
        'Qual a opção correta? "___ você não veio ontem?"',
      opcoes: ["Por que", "Porque"],
      gabarito: "Por que",
      conceito: "porque_family",
    },
  ],

  armadilhas: [
    {
      id: "mas_mais",
      titulo: "mas / mais",
      textoAncora: `
"Mas" serve pra ligar duas ideias que vão em direções opostas. Funciona igual a "porém" ou "no entanto".
"Mais" fala de quantidade ou intensidade. Você pode trocar por um número ou por "muito".

Teste: tente trocar pela palavra "porém". Se ficou certo, use "mas". Se ficou estranho, use "mais".

Exemplo: "Quero ir, porém não posso." Ficou certo? Então é "mas".
      `.trim(),
      exemplosCertos: [
        "Quero ir, mas não posso. (= porém não posso)",
        "Quero mais café. (= quantidade de café)",
        "Trabalhe mais, mas descanse também.",
      ],
      exemplosErrados: [
        "❌ Quero ir, mais não posso.",
        "❌ Preciso de mas atenção.",
      ],
      tiposErro: ["confusao_mas_mais", "uso_mais_adversativo", "uso_mas_aditivo"],
    },
    {
      id: "ha_a",
      titulo: "há / a",
      textoAncora: `
"Há" fala de tempo que já passou ou de algo que existe. Você pode trocar por "faz" e o sentido fica igual.
"A" aponta pra um lugar ou um tempo que ainda vai acontecer.

Teste: tente trocar por "faz". Se ficou certo, use "há". Se ficou estranho, use "a".

Exemplo: "Trabalho aqui faz dois anos." Ficou certo? Então é "há": "Trabalho aqui há dois anos."
      `.trim(),
      exemplosCertos: [
        "Trabalho aqui há dois anos. (= faz dois anos)",
        "Vou voltar daqui a dois dias. (tempo futuro)",
        "Há vagas disponíveis. (= existem vagas)",
      ],
      exemplosErrados: [
        "❌ Trabalho aqui a dois anos.",
        "❌ Há duas horas vou sair. (futuro: 'daqui a duas horas')",
      ],
      tiposErro: ["confusao_ha_a", "ha_no_futuro", "a_no_passado"],
    },
    {
      id: "mau_mal",
      titulo: "mau / mal",
      textoAncora: `
"Mau" descreve como uma coisa ou pessoa é. Você pode trocar por "ruim" e o sentido fica igual.
"Mal" descreve como algo foi feito ou como alguém está se sentindo. Você pode trocar por "de forma ruim".

Teste: tente trocar por "ruim". Se ficou certo, use "mau". Se ficou estranho, use "mal".

Exemplo: "Ele é um ruim funcionário." Ficou certo? Então é "mau": "Ele é um mau funcionário."
Outro: "Ele trabalha de forma ruim." Ficou certo? Então é "mal": "Ele trabalha mal."
      `.trim(),
      exemplosCertos: [
        "Ele é um mau funcionário. (= ruim funcionário)",
        "Ele trabalha mal. (= trabalha de forma ruim)",
        "Está se sentindo mal hoje. (= se sentindo de forma ruim)",
      ],
      exemplosErrados: [
        "❌ Ele trabalha mau.",
        "❌ Ele é um mal funcionário.",
      ],
      tiposErro: ["confusao_mau_mal", "mau_como_adverbio", "mal_como_adjetivo"],
    },
    {
      id: "porque_family",
      titulo: "por que / porque / porquê / por quê",
      textoAncora: `
São quatro formas. Calma, a lógica é simples:

"Por que" (separado, sem acento): aparece em perguntas. "Por que você saiu?"
"Porque" (junto, sem acento): aparece nas respostas. "Saí porque estava doente." Funciona como "pois".
"Por quê" (separado, com acento): é a versão da pergunta quando aparece no final da frase. "Não disse por quê."
"Porquê" (junto, com acento): vira uma coisa, um objeto. Você pode colocar "o" antes. "Quero entender o porquê."

O mais usado no dia a dia é a diferença entre os dois primeiros: pergunta usa "por que", resposta usa "porque".
      `.trim(),
      exemplosCertos: [
        "Por que você saiu cedo? (pergunta)",
        "Saí cedo porque estava doente. (resposta)",
        "Saiu cedo, mas não disse por quê. (final de frase)",
        "Quero entender o porquê da decisão. (= o motivo)",
      ],
      exemplosErrados: [
        "❌ Porque você saiu cedo? (pergunta precisa de 'por que')",
        "❌ Saí porque cedo. (não faz sentido como resposta)",
      ],
      tiposErro: [
        "porque_em_pergunta",
        "por_que_sem_acento_final",
        "pq_informal",
        "porquê_sem_artigo",
      ],
    },
    {
      id: "mim_eu",
      titulo: "mim / eu",
      textoAncora: `
"Eu" aparece antes do verbo, quando você é quem faz a ação.
"Mim" aparece depois de palavras como "para", "por", "de", "com", "sem".

Teste: se você pode trocar por "ele" ou "ela" sem precisar mudar mais nada na frase, use "eu". Se aparecer uma dessas palavras antes (para, por, de, com, sem), use "mim".

Exemplo: "Isso é para ele." Ficou certo? Então é "mim": "Isso é para mim."
Outro: "Ela vai resolver." Ficou certo? Então é "eu": "Eu vou resolver."

Atenção: "comigo" já está correto do jeito que está. Não precisa mudar.
      `.trim(),
      exemplosCertos: [
        "Isso é para mim. ('para' antes)",
        "Eu vou resolver. (quem faz a ação)",
        "Podem contar comigo. (já está certo assim)",
      ],
      exemplosErrados: [
        "❌ Podem contar com eu.",
        "❌ Isso é para eu. (quando 'eu' não é quem faz uma ação)",
      ],
      tiposErro: ["mim_como_sujeito", "eu_apos_preposicao"],
    },
  ],

  // ─── Exercícios (gerados pela IA a partir das armadilhas acima) ──────────
  // Aqui definimos os TIPOS de exercício, a IA gera instâncias
  tiposExercicio: [
    {
      tipo: "lacuna_unica",
      descricao: "Complete a lacuna com a opção correta",
      criterios: [
        "Escolheu a forma gramaticalmente correta",
        "A escolha faz sentido no contexto da frase",
      ],
    },
    {
      tipo: "identificar_erro",
      descricao: "Identifique e corrija o erro neste texto",
      criterios: [
        "Identificou corretamente qual palavra está errada",
        "Propôs a substituição correta",
        "Não introduziu novos erros",
      ],
    },
    {
      tipo: "reescrever_contexto",
      descricao: "Reescreva esta mensagem corrigindo as armadilhas",
      criterios: [
        "Corrigiu todas as armadilhas presentes",
        "Manteve o sentido original",
        "Não alterou partes que estavam corretas",
      ],
    },
  ],

  // ─── Projeto integrador da unidade ──────────────────────────────────────
  // Aluno escreve algo real — não um exercício inventado
  projetoIntegrador: {
    enunciado: `Escreva uma mensagem de texto ou e-mail curto (3-5 frases) que você poderia enviar para alguém no trabalho. Pode ser um pedido, uma confirmação, um aviso. Use pelo menos 2 das palavras desta unidade.`,
    rubrica: [
      "Usou 'mas' e 'mais' corretamente",
      "Usou 'há' e 'a' corretamente",
      "Usou 'mau/mal' corretamente (se apareceu)",
      "Usou 'porque/por que' corretamente",
      "O texto tem sentido e é adequado ao contexto de trabalho",
    ],
  },

  // ─── Pós-aferição ────────────────────────────────────────────────────────
  // As mesmas 3 perguntas da pré-aferição (ou equivalentes) — mede o delta
  posAfericao: [
    {
      slug: "pos-mas-mais",
      enunciado: 'Qual a opção correta? "Tentei várias vezes, ___ não consegui."',
      opcoes: ["mas", "mais"],
      gabarito: "mas",
      conceito: "mas_mais",
    },
    {
      slug: "pos-ha-a",
      enunciado: 'Qual a opção correta? "Não nos vemos ___ três meses."',
      opcoes: ["há", "a"],
      gabarito: "há",
      conceito: "ha_a",
    },
    {
      slug: "pos-porque",
      enunciado: 'Qual a opção correta? "Fiz ___ queria aprender."',
      opcoes: ["por que", "porque"],
      gabarito: "porque",
      conceito: "porque_family",
    },
  ],

  // ─── Revisão espaçada ────────────────────────────────────────────────────
  // 1-2 perguntas para as sessões de revisão (dia 3, 7, 21)
  perguntasRevisao: [
    {
      slug: "rev-mas-mais-a",
      enunciado: 'Complete: "Quero ajudar, ___ não tenho tempo agora."',
      gabarito: "mas",
      conceito: "mas_mais",
    },
    {
      slug: "rev-ha-a-a",
      enunciado: 'Complete: "Ele chegou ___ pouco tempo."',
      gabarito: "há",
      conceito: "ha_a",
    },
    {
      slug: "rev-mau-mal-a",
      enunciado: 'Qual está certo: "Ele age de mau/mal jeito"?',
      gabarito: "mau",
      conceito: "mau_mal",
    },
  ],
};
