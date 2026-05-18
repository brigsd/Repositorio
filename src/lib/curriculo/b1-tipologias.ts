/**
 * curriculo/b1-tipologias.ts
 *
 * Currículo curado da Unidade B.1 — "Tipologias textuais"
 *
 * Princípios pedagógicos (super pacote — 2026-05-15):
 *
 * 1. MARCUSCHI (2002): cinco tipos textuais — narração, descrição,
 *    exposição, argumentação e injunção. Tipo é a categoria
 *    estrutural-funcional; gênero é o texto social concreto. Textos
 *    reais misturam tipos, mas um domina (heterogeneidade esperada).
 *    NOTA DE RÓTULO: esta unidade usa "dissertar" e "instruir" por
 *    serem os termos da tradição escolar/ENCCEJA que o aluno encontra
 *    na prova. "dissertar" aqui = a ARGUMENTAÇÃO de Marcuschi (defender
 *    uma tese com argumentos), NÃO a "dissertação expositiva" da
 *    escola; "instruir" = a INJUNÇÃO de Marcuschi. As definições
 *    operacionais seguem Marcuschi; apenas os rótulos são adaptados.
 *
 * 2. CONFUSÕES DOCUMENTADAS (ERIC EJ951348, Strucker et al.):
 *    - narrar × descrever: ambos usam linguagem concreta; distinção é
 *      sequência temporal (narrar) vs. estado estático (descrever).
 *    - expor × dissertar: ambos são informativos; distinção é ausência
 *      de posição autoral (expor) vs. tese explícita (dissertar).
 *    - "dissertação" fundida com "exposição" em livros didáticos =
 *      fonte principal de confusão no Brasil. Tratamos exposição e
 *      argumentação como tipos separados, conforme Marcuschi.
 *
 * 3. SCHEMA THEORY (Rumelhart 1980; Kintsch 1998):
 *    Reconhecer o tipo antes de ler ativa o esquema correto e melhora
 *    compreensão e recall (g = 0.25-0.57, Bogaerds-Hazenberg 2021).
 *
 * 4. SEQUÊNCIA INSTRUCIONAL (Kornell & Bjork 2008; Sweller CLT):
 *    Protótipos primeiro (bloqueado por tipo) — schema em formação.
 *    Depois pares de confusão. Depois interleaved — discriminação ativa.
 *    NNGroup: trechos curtos (1 parágrafo máx) para leitores iniciantes.
 */

import type { UnidadeCurriculo } from "./tipos";

export const B1_TIPOLOGIAS: UnidadeCurriculo = {
  slug: "b-1-tipologias",
  titulo: "Tipologias textuais",
  nivel: "B",
  numero: 1,
  duracaoEstimadaMin: 30,

  ancoraPropósito: {
    titulo: "Por que isso importa",
    corpo: `Antes de ler qualquer texto, seu cérebro faz uma pergunta silenciosa: "Que tipo de texto é esse?" Um aviso da empresa, uma bula de remédio, uma notícia de jornal, um contrato de aluguel. Cada um funciona de um jeito diferente. Reconhecer esse jeito antes de começar muda tudo: você sabe o que esperar, onde encontrar a informação que importa e o que pode ignorar.

Existem cinco modos básicos de organizar um texto: narrar (contar o que aconteceu), descrever (mostrar como é), expor (explicar como funciona), dissertar (defender uma posição) e instruir (dizer o que fazer). Na prática, a maioria dos textos mistura dois ou mais desses modos, mas um sempre domina. Reconhecer qual é esse modo é o que vai orientar a sua leitura.`,
    exemploPrático: `Exemplo prático:

Renato recebeu um documento da empresa sobre o plano de saúde. Antes de ler a primeira linha, ele olhou o título e o formato: era uma lista com passos numerados. "Isso é instrução", ele pensou. "Vou procurar o que tenho que fazer e em que ordem." Achou a informação em segundos.

Seu colega pegou o mesmo papel, começou a ler palavra por palavra como se fosse uma notícia e ficou perdido. Não era narração nem exposição de dados: era um passo a passo.

Saber o tipo antes de ler economiza tempo e evita confusão. Não porque a leitura muda, mas porque o seu olhar já sabe onde pousar.`,
  },

  curiosidade: `Marcuschi, o linguista brasileiro que mais estudou o assunto, descobriu que quase nenhum texto usa uma tipologia pura. Um contrato tem: descrição (quem são as partes), exposição (quais são as regras), instrução (o que cada um deve fazer) e às vezes até dissertação (por que o acordo é necessário). Por isso, em vez de tentar classificar o texto inteiro, o mais útil é reconhecer qual tipologia está dominando o trecho que você está lendo agora. É essa habilidade que muda a sua leitura na prática.`,

  armadilhas: [
    {
      id: "narrar_vs_descrever",
      titulo: "Narrar × descrever",
      textoAncora:
        'Narrar e descrever parecem parecidos porque os dois usam linguagem concreta. A diferença está no movimento: a narração conta o que aconteceu, com ações em sequência no tempo ("chegou", "viu", "decidiu"). A descrição mostra como algo é num determinado momento, sem avançar no tempo ("tem", "mede", "é revestido de").\n\nUma forma rápida de identificar: se as ações avançam no tempo, é narração. Se o texto está "parado no tempo" descrevendo características, é descrição.',
      exemplosCertos: [
        'Narrar: "O técnico chegou às 8h, inspecionou o equipamento e identificou o problema."',
        'Descrever: "O equipamento pesa 45 kg, tem 1,20 m de altura e é revestido de aço inox."',
      ],
      exemplosErrados: [
        'Confundir: achar que "O galpão tem 800 metros quadrados e quatro portões" é narração (é descrição — não há ação temporal).',
      ],
      tiposErro: ["narrar_como_descrever", "descrever_como_narrar"],
    },
    {
      id: "expor_vs_dissertar",
      titulo: "Expor × dissertar",
      textoAncora:
        'Aqui, dissertar significa defender uma tese com argumentos: é o que muitos materiais chamam de tipo argumentativo. Não confunda com "dissertação expositiva": nesta unidade, todo texto que apenas informa sem tomar partido é exposição.\n\nExposição e dissertação são os tipos mais confundidos no Brasil, inclusive em livros didáticos. Os dois informam, mas de jeitos opostos. A exposição é neutra: explica como algo funciona sem defender posição. A dissertação tem posição autoral explícita: argumenta, defende, quer convencer.\n\nUma forma rápida de identificar: se o texto diz "é necessário", "deveria", "a empresa precisa" ou apresenta justificativas para uma tese, é dissertação. Se apenas explica fatos, dados ou conceitos sem tomar partido, é exposição.',
      exemplosCertos: [
        'Expor: "O FGTS é composto por depósitos mensais de 8% do salário. O saldo pode ser sacado em casos previstos por lei."',
        'Dissertar: "A empresa deveria investir em treinamento antes de exigir metas maiores. Treinar custa menos do que corrigir erros."',
      ],
      exemplosErrados: [
        'Confundir: achar que um editorial de jornal é exposição porque usa dados (é dissertação — há uma tese sendo defendida com os dados).',
      ],
      tiposErro: ["expor_como_dissertar", "dissertar_como_expor"],
    },
    {
      id: "instruir",
      titulo: "Instruir (passo a passo)",
      textoAncora:
        'A instrução é o único tipo prescritivo: ela não conta o que aconteceu, nem descreve, nem explica, nem argumenta. Ela diz o que fazer. O sinal mais claro é o verbo no imperativo ou no infinitivo com valor de ordem: "acesse", "clique", "remova", "aguarde", "não ligue sem antes verificar".\n\nA armadilha é confundir instrução com narração de processo. "O técnico desligou o motor, retirou o filtro e instalou o novo" é narração (conta o que alguém fez). "Desligue o motor, retire o filtro e instale o novo" é instrução (diz o que você deve fazer).',
      exemplosCertos: [
        'Instruir: "Para solicitar folga, acesse o sistema, clique em \'Nova solicitação\' e preencha os campos."',
        'Instruir: "Antes de ligar o compressor, verifique o nível de óleo. Nunca ligue sem verificar."',
      ],
      exemplosErrados: [
        'Confundir: achar que "o técnico desligou o motor e trocou o filtro" é instrução (é narração — conta o que aconteceu, não o que você deve fazer).',
      ],
      tiposErro: ["instruir_como_narrar", "narrar_como_instruir"],
    },
  ],

  preAfericao: [
    {
      slug: "pre-tip-narrar",
      enunciado:
        '"O gerente entrou na sala, anunciou os resultados e encerrou a reunião às 17h." Qual tipologia domina?',
      opcoes: ["Narrar", "Descrever", "Expor", "Instruir"],
      gabarito: "Narrar",
      conceito: "narrar_vs_descrever",
    },
    {
      slug: "pre-tip-expor-vs-dissertar",
      enunciado:
        '"A empresa deveria oferecer horário flexível. Funcionários com horários adaptados faltam menos e rendem mais." Qual tipologia domina?',
      opcoes: ["Expor", "Dissertar", "Narrar", "Instruir"],
      gabarito: "Dissertar",
      conceito: "expor_vs_dissertar",
    },
    {
      slug: "pre-tip-instruir",
      enunciado:
        '"Desligue o equipamento, remova o parafuso lateral e substitua a peça desgastada." Qual tipologia domina?',
      opcoes: ["Narrar", "Expor", "Dissertar", "Instruir"],
      gabarito: "Instruir",
      conceito: "instruir",
    },
  ],

  tiposExercicio: [
    {
      tipo: "lacuna_unica",
      descricao:
        "Leia o trecho e identifique qual tipologia textual domina",
      criterios: [
        "Identificou narração (ações em sequência temporal)",
        "Identificou descrição (estado estático, características)",
        "Identificou exposição (informação objetiva, sem posição autoral)",
        "Identificou dissertação (tese + argumento, posição autoral)",
        "Identificou instrução (verbo prescritivo, o que fazer)",
      ],
    },
  ],

  projetoIntegrador: {
    enunciado: `Escolha um processo que você conhece bem no seu trabalho ou na sua vida (trocar uma peça, preparar um prato, solicitar um documento, usar um aplicativo).

Escreva sobre esse processo duas vezes:
1. Como narração: conte como você fez isso na última vez que precisou (o que aconteceu, em que ordem, como terminou).
2. Como instrução: escreva um guia para alguém que nunca fez isso antes (o que a pessoa deve fazer, passo a passo).

Cada versão deve ter de 4 a 6 frases.`,
    rubrica: [
      "A narração usa verbos no passado e mostra sequência de ações",
      "A instrução usa verbos no imperativo ou infinitivo e orienta o que fazer",
      "As duas versões tratam do mesmo processo mas com tipologia diferente",
      "Sentido claro em ambas as versões",
    ],
  },

  posAfericao: [
    {
      slug: "pos-tip-descrever",
      enunciado:
        '"A sala tem 40 metros quadrados, ar-condicionado, projetor e quatro mesas redondas." Qual tipologia domina?',
      opcoes: ["Narrar", "Descrever", "Expor", "Instruir"],
      gabarito: "Descrever",
      conceito: "narrar_vs_descrever",
    },
    {
      slug: "pos-tip-expor",
      enunciado:
        '"O seguro-desemprego é pago pelo governo a trabalhadores demitidos sem justa causa. O valor depende do salário anterior e o pagamento dura de 3 a 5 meses." Qual tipologia domina?',
      opcoes: ["Narrar", "Expor", "Dissertar", "Instruir"],
      gabarito: "Expor",
      conceito: "expor_vs_dissertar",
    },
    {
      slug: "pos-tip-dissertar",
      enunciado:
        '"Reuniões sem pauta são tempo perdido. Sem saber o que será discutido, ninguém chega preparado e as decisões ficam vagas." Qual tipologia domina?',
      opcoes: ["Narrar", "Descrever", "Expor", "Dissertar"],
      gabarito: "Dissertar",
      conceito: "expor_vs_dissertar",
    },
  ],

  perguntasRevisao: [
    {
      slug: "rev-tip-a",
      enunciado: "Qual é a diferença principal entre narrar e descrever?",
      gabarito:
        "Narrar conta ações em sequência no tempo: o que aconteceu, em que ordem. Descrever mostra como algo é num determinado momento, sem avançar no tempo. Se as ações se movem para frente no tempo, é narração. Se o texto está parado descrevendo características, é descrição.",
      conceito: "narrar_vs_descrever",
    },
    {
      slug: "rev-tip-b",
      enunciado: "Como identificar se um texto é exposição ou dissertação?",
      gabarito:
        "A exposição é neutra: explica fatos, dados ou conceitos sem defender posição. A dissertação tem posição autoral explícita: apresenta uma tese e argumentos para convencer. Se o texto diz 'deveria', 'é necessário' ou justifica uma posição, é dissertação. Se apenas explica como algo funciona sem tomar partido, é exposição.",
      conceito: "expor_vs_dissertar",
    },
    {
      slug: "rev-tip-c",
      enunciado:
        "Qual é o sinal mais claro de que um texto é instrução e não narração?",
      gabarito:
        "A instrução usa verbos prescritivos: imperativo ('acesse', 'clique', 'remova') ou infinitivo com valor de ordem ('verificar o nível antes de ligar'). Ela diz o que você deve fazer. A narração usa verbos no passado e conta o que alguém fez: 'o técnico desligou o motor e trocou o filtro'. Mesmo assunto, tipologia diferente.",
      conceito: "instruir",
    },
  ],
};
