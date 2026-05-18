/**
 * curriculo/b4-ironia.ts
 *
 * Currículo curado da Unidade B.4 — "Ironia, humor e ambiguidade"
 *
 * Princípios pedagógicos (super pacote — 2026-05-16):
 *
 * 1. GRICE (1975) — máximas conversacionais:
 *    Ironia funciona violando deliberadamente a máxima "seja verdadeiro".
 *    O leitor detecta a incongruência e infere a implicatura: o que o
 *    texto realmente quis dizer. Três etapas: (1) leitura literal falha
 *    pelo contexto, (2) busca do sentido cooperativo, (3) inversão.
 *
 * 2. GLUCKSBERG (1990) — competição paralela de sentidos:
 *    Sentido literal e não-literal não são processados em sequência.
 *    Competem em paralelo; o contexto pesa qual vence. Quanto mais
 *    rico o contexto prévio, mais rápido o sentido irônico prevalece.
 *
 * 3. BRAIT (1996) — ironia polifônica:
 *    O enunciado irônico carrega duas vozes simultâneas: a declarada
 *    e a implícita. O leitor precisa detectar o "distanciamento" do
 *    autor em relação ao que está sendo dito literalmente.
 *
 * 4. FREIRE / LETRAMENTO CRÍTICO:
 *    Charges e tirinhas nunca são neutras — condensam contradições
 *    sociais em formato compacto. Lê-las com compreensão plena é ato
 *    de conscientização. Erro de leitura literal = perda da crítica.
 *
 * 5. PHRASING ENCCEJA/ENEM (UX agent; Só Exercícios; Descomplica):
 *    Questões cobram o MECANISMO, não o rótulo:
 *    "O humor decorre principalmente do fato de...",
 *    "O efeito de sentido é provocado por...",
 *    "A ironia presente no trecho reside em..."
 *
 * 6. SEQUÊNCIA INSTRUCIONAL (Lexia/PowerUp; National Academies):
 *    Ironia verbal clara (sentido oposto explícito) → ironia situacional
 *    (quebra de expectativa) → ambiguidade (duplo sentido simultâneo).
 *
 * 7. ERRO PRINCIPAL — leitura literal (EJA research; ALB):
 *    Adulto em desenvolvimento toma o elogio irônico ao pé da letra.
 *    Feedback: nomear o erro, ancorar às pistas perdidas, não zombar.
 */

import type { UnidadeCurriculo } from "./tipos";

export const B4_IRONIA: UnidadeCurriculo = {
  slug: "b-4-ironia",
  titulo: "Ironia, humor e ambiguidade",
  nivel: "B",
  numero: 4,
  duracaoEstimadaMin: 30,

  ancoraPropósito: {
    titulo: "Por que isso importa",
    corpo: `Charge, tirinha, post irônico, propaganda com jogo de palavras, comentário sarcástico do chefe: todos esses textos funcionam em dois níveis ao mesmo tempo. O nível do que está escrito. E o nível do que realmente está sendo dito.

Ler só o primeiro nível significa perder a mensagem real. Significa tomar um elogio sarcástico como elogio verdadeiro. Significa não entender por que todo mundo riu. Significa não perceber quando uma mensagem aparentemente neutra esconde uma crítica.

Reconhecer ironia, humor e ambiguidade é uma habilidade de proteção: ela te diz quando alguém está sendo sincero e quando não está. E é a habilidade mais cobrada no ENCCEJA e no ENEM, onde charges e tirinhas aparecem em praticamente toda prova.`,
    exemploPrático: `Exemplo prático:

O supervisor enviou uma mensagem para toda a equipe depois de um erro grave no relatório: "Pessoal, que trabalho impecável! Estou muito orgulhoso de vocês."

Quem leu apenas o que estava escrito pensou: "Ótimo, o supervisor gostou do trabalho."

Quem reconheceu a ironia entendeu: a mensagem era uma crítica velada. "Impecável" e "orgulhoso" ditos logo após um erro grave são o oposto do que parecem — é sarcasmo, não elogio.

Dois textos exatamente iguais. Dois entendimentos completamente diferentes. A diferença é saber ler além do que está escrito.`,
  },

  curiosidade: `O linguista britânico Paul Grice descobriu que a linguagem funciona por um "contrato de cooperação": quando alguém diz algo que não pode ser verdadeiro no contexto, o ouvinte não descarta a frase como erro — procura o sentido real por trás dela. É exatamente esse mecanismo que faz a ironia funcionar: o falante viola a regra "seja verdadeiro" propositalmente, contando com que o ouvinte perceba e inverta o sentido. Quando você lê "que pontualidade admirável" para alguém que chegou atrasado, seu cérebro faz essa operação em frações de segundo. Esta unidade torna esse processo consciente.`,

  armadilhas: [
    {
      id: "ironia_verbal",
      titulo: "Ironia verbal (sentido oposto)",
      textoAncora:
        'A ironia verbal diz o oposto do que significa. Um elogio que é crítica. Uma admiração que é deboche. Um "parabéns" que é punição. O sinal está no contexto: a situação descrita é incompatível com o sentido literal das palavras.\n\nComo reconhecer: o que está escrito e o que acabou de acontecer no texto são opostos. Se o contexto mostra um fracasso e o comentário usa palavras de elogio, é ironia verbal.\n\nArmadilha: tomar o elogio ao pé da letra. É o erro mais comum — e o mais visível para quem não foi alvo da ironia.',
      exemplosCertos: [
        '"Chegou atrasado pela terceira vez. O chefe disse: Que pontualidade exemplar." Sentido real: crítica ao atraso, não elogio.',
        '"O relatório estava cheio de erros. A supervisora disse: Perfeito trabalho, como sempre." Sentido real: ironia sobre a baixa qualidade.',
      ],
      exemplosErrados: [
        'Erro de leitura: achar que "que trabalho impecável!" após um erro grave é um elogio sincero.',
      ],
      tiposErro: ["leitura_literal_de_ironia", "contexto_ignorado"],
    },
    {
      id: "quebra_expectativa",
      titulo: "Quebra de expectativa (virada)",
      textoAncora:
        'A quebra de expectativa cria humor ou ironia pela virada: o texto constrói uma expectativa no início e a desfaz no final, com um elemento inesperado. O humor vem do contraste entre o que se esperava e o que aconteceu.\n\nComo reconhecer: o texto tem uma estrutura de "setup" (preparação) e "punchline" (virada). A virada é o oposto, a redução, ou o esvaziamento do que foi prometido no setup.\n\nArmadilha: não reconhecer que o final muda o sentido de tudo que veio antes — ler cada parte isolada e não perceber o contraste.',
      exemplosCertos: [
        'Setup: "Tenho uma sugestão que vai economizar tempo, dinheiro e esforço." Virada: "Cancelem essa reunião." O humor vem de a grande solução ser encerrar a própria reunião.',
        'Setup: "Curso de culinária para iniciantes. Aprenda como um chef." Virada (letras miúdas): "Chef não incluído." O humor vem do contraste entre a promessa e o que está disponível.',
      ],
      exemplosErrados: [
        'Erro de leitura: focar no setup e ignorar a virada — achar que a sugestão vai ser algo grandioso sem perceber que a virada esvaziou a expectativa.',
      ],
      tiposErro: ["setup_ignorado", "virada_nao_percebida"],
    },
    {
      id: "ambiguidade",
      titulo: "Ambiguidade (duplo sentido)",
      textoAncora:
        'A ambiguidade ativa dois sentidos ao mesmo tempo com as mesmas palavras. O humor ou o efeito vem da tensão entre os dois significados possíveis — nenhum anula o outro, os dois coexistem.\n\nComo reconhecer: uma palavra ou expressão tem dois sentidos igualmente válidos no contexto. O humor ou o jogo vem de notar os dois ao mesmo tempo.\n\nArmadilha: ficar preso em apenas um dos sentidos — geralmente o mais óbvio — e perder o efeito do jogo de palavras.\n\nNota: a ambiguidade pode ser intencional (quando o autor cria o jogo propositalmente, como em propagandas) ou pode ser descoberta pelo leitor numa expressão que o autor não percebeu ser dupla. Em ambos os casos, os dois sentidos coexistem na língua — reconhecê-los é a habilidade.',
      exemplosCertos: [
        '"Mudamos tudo. Até o seu humor." (empresa de mudanças): "mudar" significa tanto "fazer a mudança de casa" quanto "transformar o estado emocional".',
        '"Problemas com pressão? Pode falar com a gente." (farmácia): "pressão" pode ser pressão arterial e pressão do dia a dia.',
      ],
      exemplosErrados: [
        'Erro de leitura: interpretar só um dos sentidos e perder o jogo de palavras ("a farmácia atende hipertensos" — verdade, mas perde metade do sentido).',
      ],
      tiposErro: ["sentido_unico", "jogo_palavras_ignorado"],
    },
  ],

  preAfericao: [
    {
      slug: "pre-iro-verbal",
      enunciado:
        '"Após o time perder o jogo por 5 a 0, o técnico disse: Desempenho admirável, rapazes. Estou muito satisfeito." Qual é o sentido real da fala do técnico?',
      opcoes: [
        "O técnico criticou o desempenho usando palavras de elogio.",
        "O técnico ficou satisfeito com o esforço da equipe mesmo com a derrota.",
        "O técnico era irônico porque gostava de provocar os jogadores.",
        "O técnico estava sendo educado para não desmotivar a equipe.",
      ],
      gabarito: "O técnico criticou o desempenho usando palavras de elogio.",
      conceito: "ironia_verbal",
    },
    {
      slug: "pre-iro-ambiguidade",
      enunciado:
        '"Anúncio numa clínica de emagrecimento: Aqui você perde tudo que não quer." O efeito do anúncio vem do fato de que:',
      opcoes: [
        '"Perder tudo que não quer" funciona como promessa de emagrecer e como jogo com o sentido negativo de "perder tudo".',
        "A clínica promete que o cliente vai emagrecer.",
        "O anúncio usa linguagem informal para parecer amigável.",
        "A expressão está errada — deveria ser 'perder o que não quer'.",
      ],
      gabarito:
        '"Perder tudo que não quer" funciona como promessa de emagrecer e como jogo com o sentido negativo de "perder tudo".',
      conceito: "ambiguidade",
    },
    {
      slug: "pre-iro-expectativa",
      enunciado:
        '"Um homem levantou na reunião e disse: Tenho uma ideia que vai resolver todos os problemas da empresa. O silêncio foi total. Ele completou: Vamos embora mais cedo hoje." O humor vem de:',
      opcoes: [
        "A grande solução prometida se revela uma sugestão simples e inesperada.",
        "O homem sugeriu encerrar a reunião.",
        "O homem não tinha uma ideia de verdade.",
        "A equipe ficou em silêncio porque discordou da sugestão.",
      ],
      gabarito:
        "A grande solução prometida se revela uma sugestão simples e inesperada.",
      conceito: "quebra_expectativa",
    },
  ],

  tiposExercicio: [
    {
      tipo: "lacuna_unica",
      descricao:
        "Leia o texto e identifique o mecanismo de ironia, humor ou ambiguidade",
      criterios: [
        "Identifica ironia verbal (elogio que é crítica, crítica que é elogio)",
        "Reconhece ambiguidade intencional (duplo sentido simultâneo)",
        "Percebe quebra de expectativa (virada que muda o sentido do setup)",
        "Distingue a leitura literal da leitura irônica/humorística",
        "Explica o mecanismo, não apenas nomeia o recurso",
      ],
    },
  ],

  projetoIntegrador: {
    enunciado: `Encontre na sua vida real um exemplo de cada tipo trabalhado nesta unidade:

1. Um texto com ironia verbal (elogio que é crítica, ou crítica que é elogio). Pode ser uma mensagem, um comentário, algo que alguém disse.
2. Um texto com ambiguidade ou jogo de palavras (propaganda, placa, manchete). Pode ser de uma embalagem, anúncio, placa de loja.
3. Um texto com quebra de expectativa (começa de um jeito, termina de outro). Pode ser uma anedota, uma manchete irônica, um fim de história.

Para cada exemplo:
- Escreva o texto original.
- Explique qual é a leitura literal.
- Explique qual é a leitura real (irônica, humorística, ambígua).
- Aponte qual elemento do texto é a pista para a leitura correta.`,
    rubrica: [
      "Identificou corretamente o tipo de recurso em cada exemplo",
      "Distinguiu a leitura literal da leitura real",
      "Apontou um elemento concreto do texto como pista",
      "Os exemplos são de situações reais, não inventados",
    ],
  },

  posAfericao: [
    {
      slug: "pos-iro-verbal",
      enunciado:
        '"Depois de três horas de reunião sem decisão nenhuma, a gerente disse: Que dia produtivo. Nunca trabalhei tanto." Qual é o sentido real?',
      opcoes: [
        "A gerente criticou ironicamente a falta de produtividade da reunião.",
        "A gerente ficou satisfeita com o resultado da reunião.",
        "A gerente estava brincando para aliviar a tensão do grupo.",
        "A gerente trabalhou muito naquele dia.",
      ],
      gabarito:
        "A gerente criticou ironicamente a falta de produtividade da reunião.",
      conceito: "ironia_verbal",
    },
    {
      slug: "pos-iro-ambiguidade",
      enunciado:
        '"Placa numa barbearia: Aqui você sai diferente." O efeito de sentido da placa vem de:',
      opcoes: [
        '"Sair diferente" pode significar tanto "com um corte novo" quanto "transformado de alguma forma", ativando dois sentidos ao mesmo tempo.',
        "A barbearia garante que o corte vai mudar o visual do cliente.",
        "A placa usa linguagem informal para atrair clientes jovens.",
        "A barbearia é conhecida por técnicas exclusivas de corte.",
      ],
      gabarito:
        '"Sair diferente" pode significar tanto "com um corte novo" quanto "transformado de alguma forma", ativando dois sentidos ao mesmo tempo.',
      conceito: "ambiguidade",
    },
    {
      slug: "pos-iro-expectativa",
      enunciado:
        '"Cartaz: Aprenda inglês fluente em 30 dias. Garantia total. Abaixo, em letras miúdas: Garantia de que você vai tentar." O humor reside em:',
      opcoes: [
        "A promessa de garantia total é esvaziada pela revelação de que a garantia cobre apenas a tentativa, não o resultado.",
        "O cartaz oferece uma garantia de aprendizado de inglês.",
        "A empresa é desonesta porque não garante o resultado real.",
        "As letras miúdas explicam os detalhes da garantia contratual.",
      ],
      gabarito:
        "A promessa de garantia total é esvaziada pela revelação de que a garantia cobre apenas a tentativa, não o resultado.",
      conceito: "quebra_expectativa",
    },
  ],

  perguntasRevisao: [
    {
      slug: "rev-iro-a",
      enunciado: "Como identificar se um elogio é sincero ou irônico?",
      gabarito:
        "A chave está no contexto: se o que acabou de acontecer no texto é oposto ao elogio, é ironia. Quando alguém chega atrasado e ouve 'que pontualidade!', a situação (atraso) contradiz as palavras (elogio). Essa incongruência entre contexto e palavras é o sinal da ironia verbal.",
      conceito: "ironia_verbal",
    },
    {
      slug: "rev-iro-b",
      enunciado: "O que é ambiguidade intencional e como ela cria humor?",
      gabarito:
        "Ambiguidade intencional é quando uma expressão tem dois sentidos igualmente válidos ao mesmo tempo, e o autor usa isso de propósito. O humor vem de notar os dois sentidos simultaneamente. A diferença da ambiguidade acidental é a intencionalidade: o contexto deixa claro que o jogo de sentidos é proposital, não um erro.",
      conceito: "ambiguidade",
    },
    {
      slug: "rev-iro-c",
      enunciado:
        "O que é quebra de expectativa e por que ela cria humor?",
      gabarito:
        "Quebra de expectativa é quando o texto cria uma expectativa no início (setup) e a desfaz com algo inesperado no final (virada). O humor vem do contraste entre o esperado e o real. Quanto maior a distância entre o que se prometeu e o que foi entregue, mais forte o efeito. É o mecanismo básico de tirinhas e piadas: setup + virada.",
      conceito: "quebra_expectativa",
    },
  ],
};
