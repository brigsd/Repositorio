/**
 * curriculo/a9-regencia.ts
 *
 * Currículo curado da Unidade A.9 — "Regência: tropeços clássicos"
 *
 * Princípios pedagógicos e base factual (super pacote — 2026-05-15):
 *
 * 1. CUIDADO ANTIMITO (Bagno, "Preconceito Linguístico"; Bechara):
 *    Regência é o terreno mais cheio de mitos prescritivos do ensino
 *    de português. NÃO se ensina aqui "assistir ao filme", "namorar
 *    com", "obedecer a", "preferir X a Y" — são shibboleths sociais,
 *    não norma culta real. A unidade trata APENAS da variação genuína
 *    e documentada: verbos de movimento + destino.
 *
 * 2. BASE SOCIOLINGUÍSTICA (Wiedemer; Mollica; Berlinck — variacionismo):
 *    Com verbos de movimento, a fala brasileira prefere "em" (vou na,
 *    cheguei no); a escrita formal manteve o "a" mais antigo (vou à,
 *    cheguei ao). Variação estável e bem documentada, não erro.
 *
 * 3. UMA COISA POR VEZ + CONTEXTO (Sweller; PMC arbitrariedade):
 *    Um único fenômeno (movimento + "a"), praticado em frases reais,
 *    nunca lista de pares verbo+preposição soltos.
 *
 * 4. SCAFFOLDING + ESPAÇAMENTO (Bjork/Rohrer):
 *    Fase 1 (ir, blocked) → Fase 2 (chegar, blocked) → Fase 3
 *    (interleaved) para revisão espaçada.
 *
 * 5. LABOV / BANDURA (bidialetismo + autoeficácia):
 *    Forma falada validada explicitamente como certa na conversa;
 *    escrita formal apresentada como registro adicional, jamais
 *    como conserto. Nenhuma variante chamada de "errada" ou "rara".
 */

import type { UnidadeCurriculo } from "./tipos";

export const A9_REGENCIA: UnidadeCurriculo = {
  slug: "a-9-regencia",
  titulo: "Regência: tropeços clássicos",
  nivel: "A",
  numero: 9,
  duracaoEstimadaMin: 25,

  ancoraPropósito: {
    titulo: "Por que isso importa?",
    corpo: `Quando você diz "vou na reunião" ou "cheguei no trabalho", todo mundo entende na hora. Esse é o jeito de falar de praticamente todo brasileiro, no trabalho, em casa, na rua. Está certíssimo na conversa e não tem nada de errado nisso.

Acontece que a escrita formal de trabalho guarda um costume mais antigo. Com os verbos que falam de ir e de chegar a um lugar, a escrita formal usa um "a" no lugar do "na" ou do "no": "vou à reunião", "cheguei ao trabalho". É a mesma frase, com o mesmo sentido. O que muda é só a palavrinha que liga o verbo ao lugar.

Isso não quer dizer que um jeito é melhor que o outro. Os dois funcionam, cada um no seu lugar: o "na/no" na conversa do dia a dia, o "à/ao" na mensagem formal, no documento, no recado para quem manda. É só mais uma ferramenta na sua mão.

Esta unidade trabalha os dois casos mais comuns na escrita de trabalho. O primeiro é ir a um lugar: "vou à obra", "fui ao banco". O segundo é chegar a um lugar: "cheguei ao escritório", "cheguei à empresa".`,
    exemploPrático: `Exemplo prático:

Vera é técnica de manutenção numa fábrica. De manhã, antes de começar, ela manda uma mensagem para o supervisor avisando a rota do dia.

Ela escreveu primeiro: "Bom dia. Cheguei na fábrica e já vou na ala de produção verificar a máquina." Era exatamente como ela falaria, e qualquer pessoa entenderia na hora.

Aí releu, lembrou que era uma mensagem de trabalho e trocou só as palavrinhas de ligação: "Bom dia. Cheguei à fábrica e já vou à ala de produção verificar a máquina." A mesma informação, o mesmo esforço, a mesma Vera. O que mudou foi a imagem dela naquele texto mais sério: alguém que domina também o jeito formal de escrever.`,
  },

  curiosidade: `Tem uma explicação bonita por trás desse "a". Os verbos de ir e de chegar pediam "a" desde o português antigo, há muitos séculos. Com o tempo, na fala do Brasil, o "em" foi tomando o lugar e hoje quase todo mundo diz "vou na", "cheguei no". A escrita formal, que muda mais devagar, segurou o "a" antigo. Pesquisadores de universidades brasileiras que estudam como o brasileiro fala mostram que isso é uma das diferenças de registro mais bem documentadas que existem, e não é defeito de ninguém: é só a fala andando por um caminho e a escrita formal por outro, cada uma no seu ritmo.`,

  armadilhas: [
    {
      id: "ir_a",
      titulo: 'Ir a um lugar: "vou à reunião"',
      textoAncora:
        'Falar "vou na reunião", "vou no banco", "fui no médico" é o jeito de praticamente todo brasileiro e todo mundo entende perfeitamente. Não tem nada de errado nisso na conversa. Aqui a gente está olhando como a escrita formal de trabalho costuma escrever essa mesma ideia. Com o verbo ir (e também voltar), a escrita formal usa "a" antes do lugar: "vou à reunião", "vou ao banco", "fui ao médico", "voltei ao escritório". Quando o lugar é feminino, o "a" vira "à" (vou à obra); quando é masculino, vira "ao" (vou ao banco). É só essa palavrinha de ligação que muda. O sentido continua o mesmo.',
      exemplosCertos: [
        "Amanhã vou à reunião das nove.",
        "Preciso ir ao banco antes do almoço.",
        "Ela foi ao médico na semana passada.",
      ],
      exemplosErrados: [
        "Amanhã vou na reunião das nove.",
        "Preciso ir no banco antes do almoço.",
      ],
      tiposErro: ["ir_com_em"],
    },
    {
      id: "chegar_a",
      titulo: 'Chegar a um lugar: "cheguei ao trabalho"',
      textoAncora:
        'Dizer "cheguei no trabalho", "cheguei na empresa" é o jeito natural de falar de todo mundo, e a conversa flui sem nenhum problema assim. Aqui a gente está olhando o costume da escrita formal de trabalho. Com o verbo chegar, a escrita formal usa "a" antes do lugar: "cheguei ao trabalho", "cheguei à empresa", "quando chegar ao depósito". Quando o lugar é feminino, fica "à" (cheguei à obra); quando é masculino, fica "ao" (cheguei ao escritório). A informação é a mesma, muda só a ligação entre o verbo e o lugar.',
      exemplosCertos: [
        "Cheguei ao trabalho às oito.",
        "Quando você chegar à empresa, me avise.",
        "Eles chegaram ao aeroporto bem cedo.",
      ],
      exemplosErrados: [
        "Cheguei no trabalho às oito.",
        "Quando você chegar na empresa, me avise.",
      ],
      tiposErro: ["chegar_com_em"],
    },
  ],

  preAfericao: [
    {
      slug: "pre-reg-ir",
      enunciado: "Qual frase a escrita formal de trabalho pede?",
      opcoes: ["Vou à reunião das nove.", "Vou na reunião das nove."],
      gabarito: "Vou à reunião das nove.",
      conceito: "ir_a",
    },
    {
      slug: "pre-reg-chegar",
      enunciado: "Qual frase a escrita formal pede?",
      opcoes: [
        "Cheguei ao escritório às oito.",
        "Cheguei no escritório às oito.",
      ],
      gabarito: "Cheguei ao escritório às oito.",
      conceito: "chegar_a",
    },
    {
      slug: "pre-reg-misto",
      enunciado: "Qual frase combina com a escrita formal?",
      opcoes: [
        "Ela foi ao médico e voltou ao trabalho.",
        "Ela foi no médico e voltou no trabalho.",
      ],
      gabarito: "Ela foi ao médico e voltou ao trabalho.",
      conceito: "ir_a",
    },
  ],

  tiposExercicio: [
    {
      tipo: "lacuna_unica",
      descricao:
        "Escolha a forma que a escrita formal de trabalho costuma usar para ligar o verbo ao lugar",
      criterios: [
        'Reconheceu que com "ir" e "voltar" a escrita formal usa "a/ao/à" antes do lugar',
        'Reconheceu que com "chegar" a escrita formal usa "a/ao/à" antes do lugar',
      ],
    },
  ],

  projetoIntegrador: {
    enunciado: `Escreva duas mensagens curtas (2 a 3 frases cada) como se fosse enviar ao seu chefe ou supervisor:
1. Uma mensagem dizendo que você vai a algum lugar (uma reunião, um setor, um cliente, o banco).
2. Uma mensagem avisando que você chegou a algum lugar.
Use o contexto que quiser: trabalho, escola dos filhos, compras, vizinhança.`,
    rubrica: [
      'Verbo "ir" ou "voltar" ligado ao lugar com "a/ao/à"',
      'Verbo "chegar" ligado ao lugar com "a/ao/à"',
      "Sentido claro para quem lê",
    ],
  },

  posAfericao: [
    {
      slug: "pos-reg-ir",
      enunciado: "Qual frase a escrita formal de trabalho pede?",
      opcoes: ["Preciso ir ao banco hoje.", "Preciso ir no banco hoje."],
      gabarito: "Preciso ir ao banco hoje.",
      conceito: "ir_a",
    },
    {
      slug: "pos-reg-chegar",
      enunciado: "Qual frase a escrita formal pede?",
      opcoes: [
        "Quando chegar à empresa, me avise.",
        "Quando chegar na empresa, me avise.",
      ],
      gabarito: "Quando chegar à empresa, me avise.",
      conceito: "chegar_a",
    },
    {
      slug: "pos-reg-misto",
      enunciado: "Qual frase combina com a escrita formal?",
      opcoes: [
        "Eles chegaram ao aeroporto e foram ao hotel.",
        "Eles chegaram no aeroporto e foram no hotel.",
      ],
      gabarito: "Eles chegaram ao aeroporto e foram ao hotel.",
      conceito: "chegar_a",
    },
  ],

  perguntasRevisao: [
    {
      slug: "rev-reg-a",
      enunciado:
        'Na escrita formal, como se liga o verbo "ir" ao lugar: "vou na reunião" ou "vou à reunião"? Por quê?',
      gabarito:
        'Falar "vou na reunião" é o jeito de praticamente todo brasileiro e está certo na conversa. Já a escrita formal de trabalho guarda um costume mais antigo e usa "a": "vou à reunião", "vou ao banco". É só a palavrinha de ligação que muda, o sentido continua o mesmo.',
      conceito: "ir_a",
    },
    {
      slug: "rev-reg-b",
      enunciado:
        'E com o verbo "chegar": como a escrita formal liga o verbo ao lugar?',
      gabarito:
        'Na conversa, "cheguei no trabalho" funciona perfeitamente. Na escrita formal, o costume é usar "a": "cheguei ao trabalho", "cheguei à empresa". Quando o lugar é masculino fica "ao", quando é feminino fica "à".',
      conceito: "chegar_a",
    },
  ],
};
