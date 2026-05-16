/**
 * curriculo/b3-inferencia.ts
 *
 * Currículo curado da Unidade B.3 — "Inferência: ler o que não está escrito"
 *
 * Princípios pedagógicos (super pacote — 2026-05-16):
 *
 * 1. GRAESSER, SINGER & TRABASSO (1994) — construtivismo inferencial:
 *    Inferências causais são geradas quase automaticamente por leitores
 *    competentes porque o cérebro busca explicações. Leitores de baixa
 *    literacia as geram apenas quando explicitamente solicitados.
 *    Ensinar inferência causal primeiro — menor carga cognitiva.
 *
 * 2. McKOON & RATCLIFF (1992) — hipótese minimalista:
 *    Inferências locais (coerência entre sentenças adjacentes) são
 *    automáticas. Inferências globais/elaborativas exigem esforço deliberado.
 *    Sequência instrucional: local → elaborativa → global.
 *
 * 3. ERRO PRINCIPAL — "literal lure" (ERIC ED243090; ScienceDirect 2023):
 *    Adultos de baixa literacia escolhem a resposta verbatim do texto
 *    em vez de gerar a inferência. Cada exercício inclui um "literal lure"
 *    como distractor principal — diagnostica e treina simultaneamente.
 *
 * 4. FEEDBACK "acknowledge-name-model" (Metcalfe, Kornell & Finn 2009):
 *    (1) Reconhece o que o aluno leu corretamente.
 *    (2) Nomeia o movimento necessário (inferir, não recuperar).
 *    (3) Modela a inferência explicitamente.
 *    Evita dano à autoeficácia (Bandura) — o aluno leu certo, aplicou
 *    o processo errado.
 *
 * 5. FREIRE / SOARES — letramento e conhecimento prévio:
 *    O adulto chega ao texto com esquemas do vivido. Usar contextos
 *    familiares (trabalho, saúde, família, vizinhança) libera capacidade
 *    cognitiva de trabalho para o processo inferencial (WMC compensado
 *    por familiaridade de domínio — TESOL Quarterly 2011).
 */

import type { UnidadeCurriculo } from "./tipos";

export const B3_INFERENCIA: UnidadeCurriculo = {
  slug: "b-3-inferencia",
  titulo: "Inferência: ler o que não está escrito",
  nivel: "B",
  numero: 3,
  duracaoEstimadaMin: 35,

  ancoraPropósito: {
    titulo: "Por que isso importa",
    corpo: `Muita comunicação acontece nas entrelinhas. Um aviso que parece neutro pode sinalizar um problema sério. Um elogio pode ser uma crítica velada. Um comportamento descrito sem comentário pode revelar tudo sobre o que a pessoa está sentindo.

Ler só o que está escrito deixa você na superfície. Inferir é pegar os elementos que o texto apresenta e chegar ao que ele não diz, mas implica. É a habilidade que distingue quem "leu as palavras" de quem "entendeu o texto".

Essa habilidade é a mais cobrada no ENCCEJA e no ENEM. E é a mais útil no dia a dia: ler um comunicado da empresa e entender o que está por trás do que está escrito, perceber o tom de uma mensagem, antecipar consequências. É a leitura que protege.`,
    exemploPrático: `Exemplo prático:

O comunicado dizia: "Em razão de ajustes no planejamento estratégico, a empresa passará por uma reestruturação nos próximos meses. Mais informações serão compartilhadas em breve."

Quem leu só o que estava escrito ficou tranquilo: é só uma reestruturação.

Quem inferiu percebeu que "ajustes no planejamento", "reestruturação" e "mais informações em breve" são formas gentis de dizer que mudanças significativas estão vindo, possivelmente incluindo demissões. O texto não diz isso, mas implica.

A diferença não é paranoia. É leitura com atenção ao que não está dito.`,
  },

  curiosidade: `Pesquisadores que estudaram como o cérebro lê descobriram algo surpreendente: quando você lê "Maria entrou na cozinha e viu que as louças estavam sujas", seu cérebro automaticamente gera a conclusão de que Maria provavelmente vai lavar as louças, mesmo que isso não esteja escrito. Isso se chama inferência causal, e acontece sem esforço em leitores experientes. Para leitores em desenvolvimento, essa mesma inferência precisa ser feita conscientemente, com esforço. Esta unidade treina exatamente isso: tornar consciente um processo que, com prática, se torna automático.`,

  armadilhas: [
    {
      id: "inferencia_causal",
      titulo: "Inferência causal (por que?)",
      textoAncora:
        'A inferência causal preenche uma lacuna de causa e efeito que o texto não explicita. O texto descreve o que aconteceu; a inferência reconstrói por que aconteceu ou o que vai acontecer por causa disso.\n\nComo identificar: a pergunta começa com "por que" ou "o que levou a". O texto não responde diretamente — você precisa conectar dois elementos que o texto apresenta separadamente.\n\nArmadilha frequente: escolher a frase que descreve o que aconteceu ("o funcionário chegou atrasado") em vez da causa implícita do comportamento ou da consequência natural.',
      exemplosCertos: [
        'Texto: "O funcionário chegou pálido, sem comer nada no almoço." Inferência causal: ele provavelmente estava passando por algum problema de saúde ou estresse — não está escrito, mas é a explicação natural.',
      ],
      exemplosErrados: [
        'Confundir o efeito com a causa: se o texto diz "o gerente convocou reunião urgente logo após receber o relatório", a causa é o relatório — não a reunião em si.',
      ],
      tiposErro: ["literal_no_lugar_da_inferencia", "causa_confundida_com_efeito"],
    },
    {
      id: "inferencia_implicita",
      titulo: "Inferência implícita (o que o texto sugere?)",
      textoAncora:
        'A inferência implícita lê o que está nas entrelinhas: o que as ações, escolhas e palavras de alguém revelam sem ser dito. O texto descreve um comportamento; a inferência capta a intenção, o estado, ou o sentido por trás.\n\nComo identificar: a pergunta usa "o texto sugere que" ou "pode-se inferir que". A resposta não está em nenhuma frase do texto — está no que as frases, juntas, implicam.\n\nArmadilha frequente: escolher uma frase que está literalmente no texto como se fosse a resposta, quando a pergunta pede o que o texto apenas sugere.',
      exemplosCertos: [
        'Texto: "O inspetor entrou, os funcionários pegaram rapidamente os capacetes que estavam pendurados na parede." Inferência: os funcionários não estavam usando o EPI antes de ele entrar — isso não está escrito, mas é o que o comportamento implica.',
      ],
      exemplosErrados: [
        'Literal lure: se o texto diz "os funcionários pegaram os capacetes pendurados na parede", escolher essa frase como resposta é descrever o que aconteceu, não o que o texto sugere.',
      ],
      tiposErro: ["literal_no_lugar_da_inferencia", "inferencia_nao_suportada"],
    },
    {
      id: "inferencia_conclusao",
      titulo: "Inferência conclusiva (é possível concluir que...)",
      textoAncora:
        'A inferência conclusiva conecta múltiplos elementos do texto para chegar a uma conclusão lógica que nenhuma frase isolada contém. É a forma mais sofisticada de inferência: requer construir uma síntese de informações dispersas.\n\nComo identificar: a pergunta usa "é possível concluir que" ou "com base no texto, o que podemos afirmar". A resposta integra dois ou mais elementos do texto em uma conclusão que vai além de qualquer frase individual.\n\nArmadilha frequente: escolher uma conclusão plausível mas que vai além do que o texto autoriza ("overreach") — ou escolher uma frase do texto em vez da conclusão.',
      exemplosCertos: [
        'Texto: "Em março ela perdeu o emprego. Em abril vendeu o carro. Em maio avisou que precisaria sair do apartamento." Conclusão: ela estava em dificuldade financeira — nenhuma frase diz isso, mas os três eventos juntos implicam.',
      ],
      exemplosErrados: [
        '"Overreach": concluir que "ela vai pedir ajuda ao governo" — possível, mas o texto não autoriza.',
        'Literal lure: "ela avisou que precisaria sair do apartamento" — é o que o texto diz, não uma conclusão.',
      ],
      tiposErro: ["literal_no_lugar_da_inferencia", "conclusao_nao_autorizada"],
    },
  ],

  preAfericao: [
    {
      slug: "pre-inf-causal",
      enunciado:
        '"O gerente convocou uma reunião de urgência logo após receber o relatório mensal." Com base no texto, por que o gerente convocou a reunião?',
      opcoes: [
        "Provavelmente porque o relatório trouxe alguma informação relevante que exigia ação imediata.",
        "Porque o gerente convocou uma reunião de urgência.",
        "Porque os funcionários pediram uma reunião.",
        "Porque era o dia programado para reunião.",
      ],
      gabarito:
        "Provavelmente porque o relatório trouxe alguma informação relevante que exigia ação imediata.",
      conceito: "inferencia_causal",
    },
    {
      slug: "pre-inf-implicita",
      enunciado:
        '"Quando a supervisora entrou na sala, os dois funcionários que estavam conversando pegaram rapidamente os celulares e os colocaram no bolso." O texto sugere que:',
      opcoes: [
        "Os funcionários provavelmente estavam usando o celular de forma não permitida durante o trabalho.",
        "Os funcionários colocaram os celulares no bolso.",
        "A supervisora não permitia o uso de celular.",
        "Os funcionários estavam com pressa.",
      ],
      gabarito:
        "Os funcionários provavelmente estavam usando o celular de forma não permitida durante o trabalho.",
      conceito: "inferencia_implicita",
    },
    {
      slug: "pre-inf-conclusao",
      enunciado:
        '"O técnico tentou três vezes ligar o equipamento. Na terceira tentativa, sacudiu a cabeça e foi buscar o manual." É possível concluir que:',
      opcoes: [
        "O equipamento provavelmente apresentava algum problema que o técnico não conseguia resolver de imediato.",
        "O técnico foi buscar o manual.",
        "O equipamento estava quebrado definitivamente.",
        "O técnico não sabia usar o equipamento.",
      ],
      gabarito:
        "O equipamento provavelmente apresentava algum problema que o técnico não conseguia resolver de imediato.",
      conceito: "inferencia_conclusao",
    },
  ],

  tiposExercicio: [
    {
      tipo: "lacuna_unica",
      descricao:
        "Leia o texto e identifique o que ele sugere, implica ou permite concluir",
      criterios: [
        "Identifica a causa implícita de um comportamento ou evento descrito",
        "Reconhece o que as ações de uma personagem sugerem sobre sua intenção ou estado",
        "Conecta múltiplos elementos do texto para chegar a uma conclusão lógica",
        "Distingue o que está escrito (literal) do que está implícito (inferência)",
      ],
    },
  ],

  projetoIntegrador: {
    enunciado: `Leia o trecho abaixo e responda às três perguntas:

"A empresa anunciou que vai 'otimizar processos' no próximo trimestre. O diretor disse que 'as mudanças vão impactar algumas áreas'. O RH começou a convocar funcionários para conversas individuais esta semana."

1. O que esse texto literalmente diz? (só o que está escrito)
2. O que o texto sugere, sem dizer diretamente? (a inferência)
3. Qual elemento do texto é a pista mais forte para a sua inferência? Por quê?

Depois, encontre um texto real (comunicado, notícia, mensagem) e faça o mesmo exercício: o que está escrito, o que está implícito, e qual é a pista.`,
    rubrica: [
      "Separou claramente o que está no texto do que é inferência",
      "A inferência é suportada por pelo menos um elemento concreto do texto",
      "Identificou a pista mais forte e explicou por que ela é uma pista",
      "Não confundiu inferência com opinião pessoal não ancorada no texto",
    ],
  },

  posAfericao: [
    {
      slug: "pos-inf-causal",
      enunciado:
        '"A funcionária pediu para mudar de turno logo após a empresa anunciar que o supervisor do turno da manhã seria substituído." Com base no texto, por que ela pediu a mudança?',
      opcoes: [
        "Provavelmente a mudança de supervisor influenciou a decisão de pedir a transferência de turno.",
        "Porque ela pediu para mudar de turno.",
        "Porque ela não gostava do turno da manhã.",
        "Porque o novo supervisor exigiu a mudança.",
      ],
      gabarito:
        "Provavelmente a mudança de supervisor influenciou a decisão de pedir a transferência de turno.",
      conceito: "inferencia_causal",
    },
    {
      slug: "pos-inf-implicita",
      enunciado:
        '"O candidato entrou na sala de entrevista, cumprimentou o entrevistador e, antes de sentar, limpou rapidamente a cadeira com a mão." O texto sugere que:',
      opcoes: [
        "O candidato era provavelmente muito cuidadoso ou nervoso com a impressão que causaria.",
        "O candidato limpou a cadeira com a mão antes de sentar.",
        "A cadeira estava suja.",
        "O candidato era muito exigente com limpeza.",
      ],
      gabarito:
        "O candidato era provavelmente muito cuidadoso ou nervoso com a impressão que causaria.",
      conceito: "inferencia_implicita",
    },
    {
      slug: "pos-inf-conclusao",
      enunciado:
        '"O produto estava no site com preço normal na segunda-feira. Na terça, apareceu com desconto de 40%. Na quarta, o anúncio indicava: últimas unidades." É possível concluir que:',
      opcoes: [
        "O produto estava vendendo bem e o estoque estava se esgotando.",
        "O produto estava com desconto de 40%.",
        "A empresa queria se desfazer de um produto ruim.",
        "O produto vai desaparecer do catálogo da empresa.",
      ],
      gabarito:
        "O produto estava vendendo bem e o estoque estava se esgotando.",
      conceito: "inferencia_conclusao",
    },
  ],

  perguntasRevisao: [
    {
      slug: "rev-inf-a",
      enunciado:
        "Qual é a diferença entre o que o texto diz e o que o texto sugere?",
      gabarito:
        "O que o texto diz está escrito explicitamente — qualquer leitor pode apontar a frase. O que o texto sugere não está em nenhuma frase isolada — é o que as informações do texto, juntas, implicam. Para chegar ao que está sugerido, o leitor precisa conectar elementos e tirar uma conclusão que vai além das palavras.",
      conceito: "inferencia_implicita",
    },
    {
      slug: "rev-inf-b",
      enunciado:
        "Por que a inferência causal é a mais fácil de aprender entre os tipos de inferência?",
      gabarito:
        "Porque o cérebro humano busca causas naturalmente — quando algo acontece, a primeira pergunta instintiva é 'por quê?'. A inferência causal preenche uma lacuna de causa e efeito que o texto apresenta mas não explica. O padrão 'X aconteceu; Y aconteceu logo depois' quase sempre implica uma relação de causa e consequência.",
      conceito: "inferencia_causal",
    },
    {
      slug: "rev-inf-c",
      enunciado:
        "Como saber se uma conclusão é uma inferência válida ou uma opinião não suportada pelo texto?",
      gabarito:
        "A inferência válida tem âncora no texto: você consegue apontar qual elemento ou combinação de elementos autoriza aquela conclusão. A opinião não suportada é possível, mas o texto não dá pistas que a justifiquem. Sempre pergunte: 'O que no texto me autoriza a chegar a essa conclusão?' Se não houver resposta, é opinião, não inferência.",
      conceito: "inferencia_conclusao",
    },
  ],
};
