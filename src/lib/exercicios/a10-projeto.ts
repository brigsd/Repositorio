/**
 * Exercícios da Unidade A.10 — Projeto Integrador do Nível A
 *
 * 16 exercícios intercalados cobrindo todos os tópicos do Nível A:
 * A.2 (registro), A.3 (vírgula), A.4 (pontuação), A.5 (acentos),
 * A.6 (palavras), A.7 (verbal), A.8 (nominal), A.9 (regência).
 * Pesos maiores para A.7/A.8/A.9 (mais recentes e mais difíceis).
 *
 * Tipos usados:
 * - lacuna_unica: gramática e palavras (ex01-06, ex08-09, ex11-14, ex16)
 * - identificar_erro: vírgula, pontuação e registro (ex07, ex10, ex15)
 *
 * Prática intercalada (Kornell & Bjork 2008): sem blocos por unidade.
 * Feedback mais curto que unidades anteriores — o aluno já conhece as
 * regras; aqui consolida e demonstra.
 */

import type { ExercicioGerado } from "./tipos";

export const EXERCICIOS_A10: ExercicioGerado[] = [
  // ─── Exercício 1 — A.7 Concordância verbal (nos_mos) ────────────────────
  {
    slug: "a10-ex01",
    tipo: "lacuna_unica",
    enunciado: 'Complete: "Nós ___ a reunião às três da tarde."',
    opcoes: ["iniciamos", "iniciou"],
    gabarito: "iniciamos",
    armadilhaId: "nos_mos",
    feedbackAcerto:
      'Certo. **"iniciamos"** combina com "nós" na escrita formal.\n\nFalar "nós iniciou" é o jeito de muita gente na conversa. Na escrita formal, quando o sujeito é "nós", o verbo leva o "-mos" no fim.\n\nMacete: "nós" pede o "-mos".',
    feedbackErro: [
      "Quem iniciou a reunião? E quantas pessoas?",
      'Com "nós", a escrita formal pede o "-mos" no fim do verbo.',
      'A escrita formal pede **"nós iniciamos"**: "nós" pede o finalzinho "-mos".',
    ],
  },

  // ─── Exercício 2 — A.9 Regência (ir_a) ──────────────────────────────────
  {
    slug: "a10-ex02",
    tipo: "lacuna_unica",
    enunciado: 'Complete: "Amanhã preciso ___ banco assinar os documentos."',
    opcoes: ["ir ao", "ir no"],
    gabarito: "ir ao",
    armadilhaId: "ir_a",
    feedbackAcerto:
      'Certo. **"ir ao"** é a forma da escrita formal com o verbo ir.\n\nNa conversa, "ir no banco" é o jeito de todo mundo. Na escrita formal, com ir, usa-se "a/ao/à".\n\nLembre: "banco" é masculino, então "ao".',
    feedbackErro: [
      'O verbo aqui é "ir". Como a escrita formal liga ele ao lugar?',
      'Com "ir", a escrita formal usa "a" antes do lugar; "banco" é masculino, então "ao".',
      'A escrita formal pede **"ir ao banco"**: com ir, liga-se com "a/ao/à".',
    ],
  },

  // ─── Exercício 3 — A.8 Concordância nominal (substantivo_plural) ────────
  {
    slug: "a10-ex03",
    tipo: "lacuna_unica",
    enunciado: 'Complete: "Os ___ estão aguardando assinatura."',
    opcoes: ["contrato", "contratos"],
    gabarito: "contratos",
    armadilhaId: "substantivo_plural",
    feedbackAcerto:
      'Certo. **"contratos"** vai para o plural porque "os" avisou que são vários.\n\nNa fala, "os contrato" é entendido. Na escrita formal, o artigo e o substantivo vão juntos para o plural.\n\nMacete: "os" pede plural no substantivo que vem depois.',
    feedbackErro: [
      'Quantos contratos estão aguardando? E o que o "os" já indicou?',
      '"Os" diz que são vários. O substantivo precisa ir para o plural também.',
      'A escrita formal pede **"os contratos"**: o substantivo acompanha o artigo no plural.',
    ],
  },

  // ─── Exercício 4 — A.6 Palavras (mas/mais) ──────────────────────────────
  {
    slug: "a10-ex04",
    tipo: "lacuna_unica",
    enunciado: 'Complete: "Tentei ligar três vezes, ___ ninguém atendeu."',
    opcoes: ["mas", "mais"],
    gabarito: "mas",
    armadilhaId: "mas_mais",
    feedbackAcerto:
      'Certo. **"mas"** é a palavra que indica contraste ou oposição entre as ideias.\n\n"Mais" acrescenta quantidade ("mais um dia", "quer mais?"). "Mas" liga duas ideias opostas. Aqui, tentou ligar e não conseguiu: é oposição, então "mas".\n\nMacete: se dá para trocar por "porém", é "mas".',
    feedbackErro: [
      'A segunda parte contradiz a primeira ou acrescenta algo?',
      '"Mas" conecta ideias opostas. "Mais" acrescenta quantidade. Aqui há oposição.',
      'A palavra certa é **"mas"**: liga duas ideias que se contradizem.',
    ],
  },

  // ─── Exercício 5 — A.5 Acentos ──────────────────────────────────────────
  {
    slug: "a10-ex05",
    tipo: "lacuna_unica",
    enunciado: 'Complete: "A reunião ___ às quinze horas."',
    opcoes: ["é", "e"],
    gabarito: "é",
    armadilhaId: "acento_tonica",
    feedbackAcerto:
      'Certo. **"é"** (com acento) é o verbo "ser". "e" (sem acento) é a conjunção que une palavras.\n\nNa frase, a reunião é descrita pelo horário. O verbo ali é "ser": "a reunião é às quinze horas".\n\nMacete: se dá para trocar por "ocorre" ou "acontece", é o verbo "é" com acento.',
    feedbackErro: [
      'Qual é a função da palavra nessa frase: é um verbo ou está unindo dois elementos?',
      '"é" com acento = verbo "ser". "e" sem acento = une palavras como "café e pão".',
      'A frase precisa do verbo "ser": **"é"** com acento.',
    ],
  },

  // ─── Exercício 6 — A.9 Regência (chegar_a) ──────────────────────────────
  {
    slug: "a10-ex06",
    tipo: "lacuna_unica",
    enunciado: 'Complete: "Avise quando ___ empresa, por favor."',
    opcoes: ["chegar à", "chegar na"],
    gabarito: "chegar à",
    armadilhaId: "chegar_a",
    feedbackAcerto:
      'Certo. **"chegar à"** é a forma da escrita formal, e "empresa" é feminino.\n\nNa conversa, "chegar na empresa" é o jeito de todo mundo. Na escrita formal, com chegar, usa-se "a/ao/à".\n\nLembre: lugar feminino com chegar, na escrita formal, "à".',
    feedbackErro: [
      'O verbo aqui é "chegar". Como a escrita formal liga ele ao lugar?',
      'Com "chegar", a escrita formal usa "a"; "empresa" é feminino, então "à".',
      'A escrita formal pede **"chegar à empresa"**: com chegar, liga-se com "à".',
    ],
  },

  // ─── Exercício 7 — A.3 Vírgula (identificar_erro) ───────────────────────
  {
    slug: "a10-ex07",
    tipo: "identificar_erro",
    enunciado: "Qual frase usa a vírgula corretamente na enumeração?",
    opcoes: [
      "Trouxe os relatórios, os contratos e as notas.",
      "Trouxe os relatórios os contratos, e as notas.",
    ],
    gabarito: "Trouxe os relatórios, os contratos e as notas.",
    armadilhaId: "virgula_enumeracao",
    feedbackAcerto:
      'Certo. **Vírgula entre os itens da lista**, sem vírgula antes do "e" final.\n\nNa enumeração, a vírgula separa os itens um a um. O último item é ligado por "e" sem vírgula antes.\n\nMacete: "item, item e item" — vírgula antes do "e" só se houver ambiguidade.',
    feedbackErro: [
      "As vírgulas estão separando os itens corretamente?",
      'Na enumeração, a vírgula vai entre os itens, não antes do "e" que fecha a lista.',
      'A forma correta é **"os relatórios, os contratos e as notas"**: vírgula entre os itens, sem vírgula antes do "e" final.',
    ],
  },

  // ─── Exercício 8 — A.7 Concordância verbal (sujeito_plural) ─────────────
  {
    slug: "a10-ex08",
    tipo: "lacuna_unica",
    enunciado: 'Complete: "Os candidatos ___ na hora marcada."',
    opcoes: ["chegaram", "chegou"],
    gabarito: "chegaram",
    armadilhaId: "sujeito_plural",
    feedbackAcerto:
      'Certo. **"chegaram"** combina com "os candidatos" porque o sujeito está no plural.\n\nSempre que o sujeito é "os candidatos", "as pessoas", "os documentos", o verbo vai junto para o plural.\n\nMacete: volte ao sujeito. Se são vários, o verbo é plural.',
    feedbackErro: [
      "Quem chegou? Quantos chegaram?",
      '"Os candidatos" está no plural. O verbo precisa ir junto.',
      'A escrita formal pede **"os candidatos chegaram"**: sujeito plural, verbo plural.',
    ],
  },

  // ─── Exercício 9 — A.8 Concordância nominal (adjetivo_plural) ───────────
  {
    slug: "a10-ex09",
    tipo: "lacuna_unica",
    enunciado: 'Complete: "As notas estão ___."',
    opcoes: ["conferidas", "conferida"],
    gabarito: "conferidas",
    armadilhaId: "adjetivo_plural",
    feedbackAcerto:
      'Certo. **"conferidas"** acompanha "as notas" no plural.\n\nO adjetivo faz parte do grupo e vai junto para o plural. "As notas" está no plural, então "conferidas" também vai.\n\nMacete: o adjetivo usa o mesmo uniforme do substantivo.',
    feedbackErro: [
      'Quantas notas estão conferidas?',
      '"As notas" está no plural. O adjetivo precisa acompanhar.',
      'A escrita formal pede **"conferidas"**: o adjetivo segue o substantivo no plural.',
    ],
  },

  // ─── Exercício 10 — A.2 Registro formal (identificar_erro) ──────────────
  {
    slug: "a10-ex10",
    tipo: "identificar_erro",
    enunciado: "Qual das frases está no registro formal de trabalho?",
    opcoes: [
      "Gostaria de informar que o serviço foi concluído.",
      "Oi! O serviço tá pronto hein.",
    ],
    gabarito: "Gostaria de informar que o serviço foi concluído.",
    armadilhaId: "registro_formal",
    feedbackAcerto:
      'Certo. **"Gostaria de informar"** é a abertura do registro formal.\n\n"Oi! O serviço tá pronto hein." é o jeito da conversa, certo na hora certa. Na mensagem para o chefe ou cliente, o registro formal pede linguagem cuidada, sem gírias.\n\nLembre: o registro muda conforme quem lê, não conforme a pessoa que escreve.',
    feedbackErro: [
      "Qual das frases você usaria num e-mail para o supervisor ou cliente?",
      'A escrita de trabalho evita gírias como "tá" e expressões da conversa como "hein".',
      'A escrita formal pede **"Gostaria de informar que o serviço foi concluído"**: linguagem cuidada, sem gírias.',
    ],
  },

  // ─── Exercício 11 — A.6 Palavras (por que/porque) ───────────────────────
  {
    slug: "a10-ex11",
    tipo: "lacuna_unica",
    enunciado: 'Complete: "___ o pedido não foi entregue no prazo?"',
    opcoes: ["Por que", "Porque"],
    gabarito: "Por que",
    armadilhaId: "por_que_porque",
    feedbackAcerto:
      'Certo. **"Por que"** (separado) é para fazer perguntas.\n\n"Porque" (junto) é para dar respostas e explicações. Aqui a frase está perguntando a razão, então "por que" separado.\n\nMacete: pergunta = "por que" separado. Resposta = "porque" junto.',
    feedbackErro: [
      "A frase está perguntando uma razão ou explicando uma razão?",
      '"Por que" separado faz perguntas. "Porque" junto explica o motivo.',
      'A frase faz uma pergunta, então **"Por que"** separado.',
    ],
  },

  // ─── Exercício 12 — A.9 Regência (ir_a) ─────────────────────────────────
  {
    slug: "a10-ex12",
    tipo: "lacuna_unica",
    enunciado:
      'Complete: "Ela ___ obra de manhã e voltou ao escritório ao meio-dia."',
    opcoes: ["foi à", "foi na"],
    gabarito: "foi à",
    armadilhaId: "ir_a",
    feedbackAcerto:
      'Certo. **"foi à"** é a forma da escrita formal ("foi" é o passado do verbo ir).\n\nNa conversa, "foi na obra" é o jeito natural. Na escrita formal, com ir, usa-se "a/ao/à".\n\nMacete: "foi" é verbo ir. O costume da escrita formal é "a/ao/à" antes do lugar.',
    feedbackErro: [
      '"Foi" é o passado de qual verbo?',
      '"Foi" é o passado de "ir". Com ir, a escrita formal usa "a/ao/à".',
      'A escrita formal pede **"foi à obra"**: "foi" é verbo ir, liga-se com "à".',
    ],
  },

  // ─── Exercício 13 — A.7 Concordância verbal (nos_mos) ───────────────────
  {
    slug: "a10-ex13",
    tipo: "lacuna_unica",
    enunciado: 'Complete: "Nós ___ todos os documentos antes do prazo."',
    opcoes: ["entregamos", "entregou"],
    gabarito: "entregamos",
    armadilhaId: "nos_mos",
    feedbackAcerto:
      'Certo. **"entregamos"** combina com "nós" na escrita formal.\n\nNa fala, "nós entregou" é ouvido e entendido. Na escrita formal, "nós" pede o "-mos" no verbo.\n\nLembre: "nós" pede "-mos".',
    feedbackErro: [
      "Quem entregou os documentos? E como o verbo combina com esse sujeito?",
      'Com "nós", a escrita formal pede o "-mos" no fim do verbo.',
      'A escrita formal pede **"nós entregamos"**: "nós" pede o finalzinho "-mos".',
    ],
  },

  // ─── Exercício 14 — A.8 Concordância nominal (substantivo_plural) ────────
  {
    slug: "a10-ex14",
    tipo: "lacuna_unica",
    enunciado: 'Complete: "As ___ foram assinadas na segunda-feira."',
    opcoes: ["ata", "atas"],
    gabarito: "atas",
    armadilhaId: "substantivo_plural",
    feedbackAcerto:
      'Certo. **"atas"** vai para o plural porque "as" avisou que são várias.\n\nNa conversa, "as ata" é entendido. Na escrita formal, "as" e o substantivo vão juntos para o plural.\n\nMacete: "as" pede plural no substantivo que vem depois.',
    feedbackErro: [
      'Quantas atas foram assinadas? E o que o "as" já indicou?',
      '"As" diz que são várias. O substantivo precisa ir para o plural também.',
      'A escrita formal pede **"as atas"**: o substantivo acompanha o artigo no plural.',
    ],
  },

  // ─── Exercício 15 — A.4 Pontuação (identificar_erro) ────────────────────
  {
    slug: "a10-ex15",
    tipo: "identificar_erro",
    enunciado: "Qual frase usa o sinal de pontuação correto no final?",
    opcoes: [
      "Pode confirmar a reunião para amanhã?",
      "Pode confirmar a reunião para amanhã.",
    ],
    gabarito: "Pode confirmar a reunião para amanhã?",
    armadilhaId: "interrogacao",
    feedbackAcerto:
      'Certo. A frase pede uma resposta, então termina com **"?"**.\n\nO ponto de interrogação vai no fim de qualquer frase que espera uma resposta de quem lê. O ponto final é para afirmações.\n\nMacete: se você está pedindo algo de quem lê, a frase termina com "?".',
    feedbackErro: [
      "Essa frase está pedindo uma resposta ou fazendo uma afirmação?",
      "Frases que pedem uma resposta terminam com ponto de interrogação, não ponto final.",
      'A frase é uma pergunta: precisa de **"?"** no final.',
    ],
  },

  // ─── Exercício 16 — A.8 Concordância nominal (adjetivo_plural) ──────────
  {
    slug: "a10-ex16",
    tipo: "lacuna_unica",
    enunciado: 'Complete: "Os pedidos chegaram ___."',
    opcoes: ["atrasados", "atrasado"],
    gabarito: "atrasados",
    armadilhaId: "adjetivo_plural",
    feedbackAcerto:
      'Certo. **"atrasados"** acompanha "os pedidos" no plural.\n\nO adjetivo faz parte do grupo e vai junto para o plural. "Os pedidos" está no plural, então "atrasados" também vai.\n\nLembre: o plural é uma característica do grupo inteiro.',
    feedbackErro: [
      'Quantos pedidos chegaram atrasados?',
      '"Os pedidos" está no plural. O adjetivo que descreve precisa acompanhar.',
      'A escrita formal pede **"atrasados"**: o adjetivo segue o substantivo no plural.',
    ],
  },
];
