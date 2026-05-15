/**
 * exercicios/b1-tipologias.ts
 *
 * Exercícios da Unidade B.1 — "Tipologias textuais" (16 exercícios)
 *
 * Estrutura (Kornell & Bjork 2008 + Sweller CLT):
 *   Fase 1 (b1-ex01–b1-ex05): 1 protótipo por tipologia (bloqueado)
 *   Fase 2 (b1-ex06–b1-ex12): pares de confusão (narrar×descrever,
 *     expor×dissertar, instruir×narrar)
 *   Fase 3 (b1-ex13–b1-ex16): interleaved — discriminação ativa
 *
 * Contextos: trabalho, documentos, vida prática adulta.
 * Trechos curtos (1-3 frases) conforme NNGroup para leitores iniciantes.
 * Feedback feature-specific: explica QUAL característica identifica o tipo.
 */

import type { ExercicioGerado } from "./tipos";

export const EXERCICIOS_B1: ExercicioGerado[] = [
  // ── Fase 1: Protótipos ──────────────────────────────────────────────────

  {
    slug: "b1-ex01",
    tipo: "lacuna_unica",
    enunciado:
      'Leia o trecho e identifique a tipologia que domina:\n\n"Na segunda-feira, o técnico chegou às 8h, inspecionou o equipamento e identificou o problema na bomba. Às 10h, ele desligou o sistema e trocou a peça defeituosa. No fim da tarde, o setor voltou a funcionar."\n\nEssa tipologia é:',
    opcoes: ["Narrar", "Descrever", "Instruir", "Expor"],
    gabarito: "Narrar",
    armadilhaId: "narrar_vs_descrever",
    feedbackAcerto:
      "**Narrar** conta ações em sequência no tempo. O sinal aqui são os verbos no passado em progressão: chegou, inspecionou, identificou, desligou, trocou, voltou. Cada ação avança o tempo. Se o trecho estivesse descrevendo o técnico ou o equipamento sem ação, seria descrição.",
    feedbackErro: [
      "O trecho mostra algo acontecendo. O que acontece primeiro? O que vem depois? Que tipo de texto conta uma sequência de eventos?",
      "Observe os verbos: chegou, inspecionou, trocou. Eles estão no passado e mostram ações em ordem. Isso é característico de qual tipologia?",
      "É **narração**. Narrar é contar o que aconteceu, com ações em sequência temporal. Os verbos no passado são o sinal mais claro: chegou, identificou, trocou, voltou.",
    ],
  },

  {
    slug: "b1-ex02",
    tipo: "lacuna_unica",
    enunciado:
      'Leia o trecho e identifique a tipologia que domina:\n\n"A sala de reuniões fica no segundo andar. Tem capacidade para doze pessoas, ar-condicionado central e projetor. As paredes são bege e há uma grande janela com vista para o estacionamento."\n\nEssa tipologia é:',
    opcoes: ["Narrar", "Descrever", "Dissertar", "Instruir"],
    gabarito: "Descrever",
    armadilhaId: "narrar_vs_descrever",
    feedbackAcerto:
      "**Descrever** mostra como algo é num determinado momento, sem avançar no tempo. O sinal aqui são os verbos de estado no presente: fica, tem, são, há. Nada acontece — o texto está parado no tempo, pintando a imagem da sala. Se contasse o que aconteceu na reunião, seria narração.",
    feedbackErro: [
      "Algo acontece nesse trecho ou o texto está mostrando como um lugar é? Que tipo de texto descreve características sem contar uma história?",
      "Observe os verbos: fica, tem, são, há. Eles mostram estado, não ação no tempo. Isso é característico de qual tipologia?",
      "É **descrição**. Descrever é mostrar como algo é: características, medidas, aparência. Os verbos de estado (é, tem, fica, há) sem progressão temporal são o sinal mais claro.",
    ],
  },

  {
    slug: "b1-ex03",
    tipo: "lacuna_unica",
    enunciado:
      'Leia o trecho e identifique a tipologia que domina:\n\n"O prazo de validade indica o período em que o produto mantém suas características originais. Após essa data, o fabricante não garante a qualidade nem a eficácia. Alimentos e medicamentos têm esse prazo estabelecido por lei."\n\nEssa tipologia é:',
    opcoes: ["Narrar", "Expor", "Dissertar", "Instruir"],
    gabarito: "Expor",
    armadilhaId: "expor_vs_dissertar",
    feedbackAcerto:
      "**Expor** explica como algo funciona de forma objetiva, sem tomar posição. O sinal aqui é a neutralidade: o texto informa o que é o prazo de validade e como funciona, sem defender que deveria ser diferente. Se o texto dissesse 'as empresas deveriam respeitar melhor o prazo de validade porque...', estaria dissertando.",
    feedbackErro: [
      "O texto está explicando o que é o prazo de validade ou defendendo uma posição sobre ele? Que tipo de texto apenas informa, sem tomar partido?",
      "Observe: o texto explica o que é, como funciona e o que a lei determina. Não há opinião nem argumento. Isso é característico de qual tipologia?",
      "É **exposição**. Expor é apresentar informações de forma objetiva e neutra, sem defender tese. O texto informa o que é o prazo de validade — não critica, não defende, não orienta.",
    ],
  },

  {
    slug: "b1-ex04",
    tipo: "lacuna_unica",
    enunciado:
      'Leia o trecho e identifique a tipologia que domina:\n\n"Reuniões sem pauta definida são tempo desperdiçado. Sem saber o que será discutido, os participantes chegam sem preparo e as decisões ficam vagas. Uma pauta clara de dez minutos pode salvar duas horas de reunião."\n\nEssa tipologia é:',
    opcoes: ["Narrar", "Descrever", "Expor", "Dissertar"],
    gabarito: "Dissertar",
    armadilhaId: "expor_vs_dissertar",
    feedbackAcerto:
      "**Dissertar** defende uma posição com argumentos. O sinal aqui é a tese na primeira frase ('reuniões sem pauta são tempo desperdiçado') seguida de justificativas (participantes sem preparo, decisões vagas). O texto quer convencer. Se apenas explicasse como funciona uma reunião com pauta, seria exposição.",
    feedbackErro: [
      "O texto está apenas explicando como reuniões funcionam ou está defendendo que reuniões sem pauta são um problema? Que tipo de texto defende uma posição?",
      "A primeira frase diz que reuniões sem pauta são 'tempo desperdiçado'. Isso é uma tese. O resto justifica essa tese. Isso é característico de qual tipologia?",
      "É **dissertação**. Dissertar é defender uma posição com argumentos. A tese aparece logo no início ('são tempo desperdiçado') e as frases seguintes apresentam as razões. O objetivo é convencer.",
    ],
  },

  {
    slug: "b1-ex05",
    tipo: "lacuna_unica",
    enunciado:
      'Leia o trecho e identifique a tipologia que domina:\n\n"Para solicitar folga, acesse o sistema pela intranet. Clique em \'Nova solicitação\', preencha a data e o motivo e selecione seu gestor. O prazo de resposta é de 48 horas úteis."\n\nEssa tipologia é:',
    opcoes: ["Narrar", "Expor", "Dissertar", "Instruir"],
    gabarito: "Instruir",
    armadilhaId: "instruir",
    feedbackAcerto:
      "**Instruir** orienta o que fazer, em que ordem. O sinal aqui são os verbos no imperativo: acesse, clique, preencha, selecione. O texto não está contando o que aconteceu nem explicando como o sistema funciona — está orientando você a agir. Se contasse 'o funcionário acessou o sistema e clicou', seria narração.",
    feedbackErro: [
      "O texto está contando algo que já aconteceu ou está dizendo o que você deve fazer agora? Que tipo de texto orienta ações?",
      "Observe os verbos: acesse, clique, preencha, selecione. Eles estão no imperativo — dando ordens. Isso é característico de qual tipologia?",
      "É **instrução**. Instruir é dizer o que fazer, usando verbos no imperativo (acesse, clique) ou no infinitivo com valor de ordem. O texto não conta nem explica — ele orienta.",
    ],
  },

  // ── Fase 2: Pares de confusão ──────────────────────────────────────────

  // narrar × descrever (ex06-ex08)

  {
    slug: "b1-ex06",
    tipo: "lacuna_unica",
    enunciado:
      'Leia o trecho e identifique a tipologia que domina:\n\n"Carla entrou na empresa em 2019 como auxiliar. Três anos depois, concluiu o curso técnico e foi promovida. No ano passado, assumiu a coordenação do setor."\n\nEssa tipologia é:',
    opcoes: ["Narrar", "Descrever", "Expor", "Dissertar"],
    gabarito: "Narrar",
    armadilhaId: "narrar_vs_descrever",
    feedbackAcerto:
      "**Narrar**. O trecho conta a trajetória de Carla em ordem cronológica: 2019, três anos depois, no ano passado. Há ações que avançam no tempo (entrou, concluiu, foi promovida, assumiu). É uma narrativa de carreira, não uma descrição de como ela é.",
    feedbackErro: [
      "O texto está mostrando como Carla é (aparência, características) ou contando o que ela fez ao longo do tempo?",
      "Observe: 2019, três anos depois, no ano passado. O texto avança no tempo com ações. Isso é característico de qual tipologia?",
      "É **narração**. Sempre que o texto conta eventos em sequência temporal ('em 2019... três anos depois... no ano passado'), é narração. Os verbos no passado em progressão são o sinal principal.",
    ],
  },

  {
    slug: "b1-ex07",
    tipo: "lacuna_unica",
    enunciado:
      'Leia o trecho e identifique a tipologia que domina:\n\n"O galpão tem 800 metros quadrados e teto de 6 metros de altura. O piso é de concreto reforçado e há quatro portões de acesso. A capacidade de armazenamento é de 2.500 paletes."\n\nEssa tipologia é:',
    opcoes: ["Narrar", "Descrever", "Instruir", "Expor"],
    gabarito: "Descrever",
    armadilhaId: "narrar_vs_descrever",
    feedbackAcerto:
      "**Descrever**. O trecho apresenta as características físicas do galpão: medidas, material, capacidade. Nada acontece — o texto está parado no tempo, mostrando como o galpão é. Os verbos de estado (tem, é, há) confirmam: não há ação, apenas caracterização.",
    feedbackErro: [
      "Algo acontece nesse trecho? Alguma ação avança no tempo? Ou o texto está mostrando como um espaço é?",
      "Observe: 800 metros, teto de 6 metros, piso de concreto, quatro portões. São características físicas, sem ação. Isso é característico de qual tipologia?",
      "É **descrição**. O texto apresenta características (medidas, materiais, capacidade) sem contar uma sequência de eventos. Os verbos de estado (tem, é, há) e a ausência de progressão temporal são os sinais.",
    ],
  },

  {
    slug: "b1-ex08",
    tipo: "lacuna_unica",
    enunciado:
      'Leia o trecho e identifique a tipologia que domina:\n\n"A reunião começou com atraso. O gerente apresentou os resultados, ouviu as reclamações e encerrou às 17h. Ficou decidido que o prazo seria prorrogado por dez dias."\n\nEssa tipologia é:',
    opcoes: ["Narrar", "Descrever", "Expor", "Dissertar"],
    gabarito: "Narrar",
    armadilhaId: "narrar_vs_descrever",
    feedbackAcerto:
      "**Narrar**. O trecho conta o que aconteceu durante a reunião, em ordem: começou, apresentou, ouviu, encerrou, ficou decidido. São ações que avançam no tempo. Mesmo sendo um relato de trabalho, é narração — conta um evento.",
    feedbackErro: [
      "O texto está descrevendo como é a sala de reuniões ou está contando o que aconteceu durante a reunião?",
      "Observe a sequência de ações: começou, apresentou, ouviu, encerrou, ficou decidido. Elas avançam no tempo. Isso é característico de qual tipologia?",
      "É **narração**. O relato de uma reunião — o que aconteceu, em que ordem, como terminou — é narração. Os verbos no passado em sequência temporal são o sinal mais claro.",
    ],
  },

  // expor × dissertar (ex09-ex11)

  {
    slug: "b1-ex09",
    tipo: "lacuna_unica",
    enunciado:
      'Leia o trecho e identifique a tipologia que domina:\n\n"A jornada de trabalho padrão no Brasil é de 44 horas semanais, conforme a CLT. Horas extras são pagas com acréscimo mínimo de 50%. Categorias com acordo coletivo podem ter regras diferentes."\n\nEssa tipologia é:',
    opcoes: ["Narrar", "Descrever", "Expor", "Dissertar"],
    gabarito: "Expor",
    armadilhaId: "expor_vs_dissertar",
    feedbackAcerto:
      "**Expor**. O trecho apresenta informações sobre a legislação trabalhista de forma objetiva, sem defender que deveria ser diferente. 'Conforme a CLT' sinaliza que o texto está reportando uma regra existente, não argumentando contra ou a favor dela. Se dissesse 'as horas extras deveriam ser pagas com mais de 50%', estaria dissertando.",
    feedbackErro: [
      "O texto está defendendo que as regras de jornada deveriam mudar ou apenas informando como elas são?",
      "Observe: 'conforme a CLT', '44 horas semanais', 'mínimo de 50%'. São dados objetivos sem opinião do autor. Isso é característico de qual tipologia?",
      "É **exposição**. O texto apresenta informações sobre a lei de forma neutra. Não há tese, não há argumento, não há posição autoral. Apenas informa como as coisas são.",
    ],
  },

  {
    slug: "b1-ex10",
    tipo: "lacuna_unica",
    enunciado:
      'Leia o trecho e identifique a tipologia que domina:\n\n"A empresa deveria investir em treinamento antes de exigir metas maiores. Funcionários sem capacitação cometem mais erros, o que aumenta o retrabalho. Treinar custa menos do que corrigir."\n\nEssa tipologia é:',
    opcoes: ["Narrar", "Descrever", "Expor", "Dissertar"],
    gabarito: "Dissertar",
    armadilhaId: "expor_vs_dissertar",
    feedbackAcerto:
      "**Dissertar**. O sinal mais claro é o 'deveria' logo na primeira frase — isso é posição autoral explícita. O texto não está explicando como o treinamento funciona; está defendendo que ele deve acontecer e apresentando razões: mais erros, retrabalho, custo. É dissertação.",
    feedbackErro: [
      "O texto está explicando como funciona o treinamento ou está defendendo que o treinamento deveria acontecer?",
      "Observe a primeira frase: 'a empresa deveria'. 'Deveria' indica posição do autor. O restante justifica essa posição. Isso é característico de qual tipologia?",
      "É **dissertação**. O 'deveria' na primeira frase revela a tese. As frases seguintes apresentam argumentos para sustentá-la. Quando um texto defende que algo 'deve' ou 'deveria' acontecer, com justificativas, é dissertação.",
    ],
  },

  {
    slug: "b1-ex11",
    tipo: "lacuna_unica",
    enunciado:
      'Leia o trecho e identifique a tipologia que domina:\n\n"O vale-refeição é um benefício para custear a alimentação do trabalhador durante o expediente. Seu valor varia por empresa e categoria. Quando o empregador faz parte do PAT, há isenção fiscal para a empresa."\n\nEssa tipologia é:',
    opcoes: ["Narrar", "Descrever", "Expor", "Dissertar"],
    gabarito: "Expor",
    armadilhaId: "expor_vs_dissertar",
    feedbackAcerto:
      "**Expor**. O texto explica o que é o vale-refeição, como funciona e um detalhe fiscal — tudo de forma objetiva. Não há julgamento, não há argumento de que deveria ser diferente. O texto apenas informa. Mesmo sendo um tema importante para o trabalhador, o modo de dizer é neutro.",
    feedbackErro: [
      "O texto está apenas explicando o que é o vale-refeição ou está defendendo que ele deveria ser maior, obrigatório ou diferente?",
      "Observe: 'é um benefício', 'seu valor varia', 'há isenção'. São informações objetivas sem posição do autor. Isso é característico de qual tipologia?",
      "É **exposição**. O texto apresenta o conceito, o funcionamento e uma regra fiscal de forma neutra. Sem tese, sem argumento, sem opinião — apenas informação.",
    ],
  },

  // instruir × narrar (ex12)

  {
    slug: "b1-ex12",
    tipo: "lacuna_unica",
    enunciado:
      'Leia o trecho e identifique a tipologia que domina:\n\n"Antes de iniciar a solda, coloque o EPI completo: máscara, luvas e avental. Posicione as peças e verifique o alinhamento. Só então ligue o equipamento e inicie o processo."\n\nEssa tipologia é:',
    opcoes: ["Narrar", "Descrever", "Expor", "Instruir"],
    gabarito: "Instruir",
    armadilhaId: "instruir",
    feedbackAcerto:
      "**Instruir**. Os verbos no imperativo revelam a tipologia: coloque, posicione, verifique, ligue, inicie. O texto não conta o que um soldador fez — ele diz o que você deve fazer. A ordem importa e o texto deixa claro: 'antes de', 'só então'. É um passo a passo prescritivo.",
    feedbackErro: [
      "O texto está contando o que um soldador fez ou está orientando o que você deve fazer antes de soldar?",
      "Observe os verbos: coloque, posicione, verifique, ligue, inicie. Eles estão no imperativo — são ordens. Isso é característico de qual tipologia?",
      "É **instrução**. Os verbos no imperativo (coloque, verifique, ligue) e a sequência prescritiva ('antes de... só então...') indicam que o texto está orientando uma ação, não narrando o que aconteceu.",
    ],
  },

  // ── Fase 3: Interleaved ─────────────────────────────────────────────────

  {
    slug: "b1-ex13",
    tipo: "lacuna_unica",
    enunciado:
      'Leia o trecho e identifique a tipologia que domina:\n\n"O cliente entrou na loja às 14h, reclamou do prazo de entrega e pediu o cancelamento. A atendente anotou a solicitação e encaminhou para o setor financeiro. O reembolso foi processado no mesmo dia."\n\nEssa tipologia é:',
    opcoes: ["Narrar", "Descrever", "Expor", "Dissertar", "Instruir"],
    gabarito: "Narrar",
    armadilhaId: "narrar_vs_descrever",
    feedbackAcerto:
      "**Narrar**. O trecho conta um evento do início ao fim: cliente chegou, reclamou, pediu, atendente anotou, encaminhou, reembolso foi processado. São ações no passado em sequência temporal. Mesmo sendo um relato de atendimento ao cliente, a tipologia é narração.",
    feedbackErro: [
      "O texto está descrevendo a loja, explicando a política de reembolso ou contando o que aconteceu num atendimento?",
      "Observe a sequência: entrou, reclamou, pediu, anotou, encaminhou, foi processado. Ações no passado em progressão. Isso é característico de qual tipologia?",
      "É **narração**. Qualquer texto que conta uma sequência de eventos no tempo é narração, independente do contexto — seja uma história, um relato de reunião ou um registro de atendimento.",
    ],
  },

  {
    slug: "b1-ex14",
    tipo: "lacuna_unica",
    enunciado:
      'Leia o trecho e identifique a tipologia que domina:\n\n"Trabalhadoras que retornam da licença-maternidade deveriam ter horário reduzido nos primeiros meses. A exaustão compromete a saúde e o rendimento. Uma funcionária descansada é mais produtiva do que uma exausta em tempo integral."\n\nEssa tipologia é:',
    opcoes: ["Narrar", "Descrever", "Expor", "Dissertar", "Instruir"],
    gabarito: "Dissertar",
    armadilhaId: "expor_vs_dissertar",
    feedbackAcerto:
      "**Dissertar**. O 'deveriam' na primeira frase é posição autoral explícita. O texto não está explicando como funciona a licença-maternidade — está defendendo uma mudança, com dois argumentos (saúde, produtividade). Quando o texto quer convencer, é dissertação.",
    feedbackErro: [
      "O texto está explicando como a licença-maternidade funciona ou está defendendo que algo deveria ser diferente?",
      "Observe: 'deveriam ter horário reduzido'. Isso é uma tese — uma posição que o texto vai defender. O restante são os argumentos. Isso é característico de qual tipologia?",
      "É **dissertação**. A tese ('deveriam ter horário reduzido') aparece na primeira frase, e as frases seguintes a justificam (exaustão afeta saúde e rendimento). Texto que defende posição com argumentos é dissertação.",
    ],
  },

  {
    slug: "b1-ex15",
    tipo: "lacuna_unica",
    enunciado:
      'Leia o trecho e identifique a tipologia que domina:\n\n"Para trocar o filtro de ar, desligue o motor e aguarde esfriar. Remova a tampa com uma chave de fenda e retire o filtro usado. Coloque o filtro novo e reencaixe a tampa antes de religar o motor."\n\nEssa tipologia é:',
    opcoes: ["Narrar", "Descrever", "Expor", "Dissertar", "Instruir"],
    gabarito: "Instruir",
    armadilhaId: "instruir",
    feedbackAcerto:
      "**Instruir**. Os verbos no imperativo (desligue, aguarde, remova, retire, coloque, reencaixe) e a sequência de passos identificam a instrução. Há também uma advertência implícita na ordem — 'antes de religar' indica que a ordem importa por segurança. É um manual de manutenção.",
    feedbackErro: [
      "O texto está contando como alguém trocou o filtro ou está orientando você a trocar o filtro?",
      "Observe: desligue, aguarde, remova, retire, coloque. Verbos no imperativo em sequência de passos. Isso é característico de qual tipologia?",
      "É **instrução**. O conjunto de verbos no imperativo + sequência de passos + advertência de ordem ('antes de religar') são os três sinais de instrução. O texto orienta ação futura.",
    ],
  },

  {
    slug: "b1-ex16",
    tipo: "lacuna_unica",
    enunciado:
      'Leia o trecho e identifique a tipologia que domina:\n\n"O FGTS é um fundo formado por depósitos mensais do empregador, equivalentes a 8% do salário bruto do trabalhador. O saldo pode ser sacado em situações previstas em lei, como demissão sem justa causa ou compra do primeiro imóvel."\n\nEssa tipologia é:',
    opcoes: ["Narrar", "Descrever", "Expor", "Dissertar", "Instruir"],
    gabarito: "Expor",
    armadilhaId: "expor_vs_dissertar",
    feedbackAcerto:
      "**Expor**. O texto explica o que é o FGTS e como funciona — de forma objetiva, sem opinar sobre se deveria ser maior, menor ou diferente. 'Previstas em lei' confirma que o texto está informando regras existentes, não argumentando. É exposição de um conceito trabalhista.",
    feedbackErro: [
      "O texto está explicando o que é o FGTS ou defendendo que as regras do FGTS deveriam mudar?",
      "Observe: 'é um fundo', 'equivalentes a 8%', 'previstas em lei'. São informações objetivas sem posição do autor. Isso é característico de qual tipologia?",
      "É **exposição**. O texto define o FGTS, explica como é formado e quando pode ser sacado — tudo de forma neutra. Sem tese, sem argumento. Informa, não convence.",
    ],
  },
];
