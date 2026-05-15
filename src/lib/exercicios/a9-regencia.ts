/**
 * Exercícios da Unidade A.9 — Regência: tropeços clássicos
 *
 * Base factual: variação genuína e documentada (verbos de movimento +
 * destino: fala "em/no/na" vs. escrita formal "a/ao/à"). NÃO contém
 * mitos prescritivos (assistir ao, namorar com, obedecer a).
 *
 * Estrutura (Bjork/Rohrer):
 * Fase 1 (a9-ex01 a a9-ex06): ir_a, blocked
 * Fase 2 (a9-ex07 a a9-ex12): chegar_a, blocked
 * Fase 3 (a9-ex13 a a9-ex16): interleaved
 */

import type { ExercicioGerado } from "./tipos";

export const EXERCICIOS_A9: ExercicioGerado[] = [
  // ─── Fase 1: ir_a (blocked) ─────────────────────────────────────────────

  {
    slug: "a9-ex01",
    tipo: "lacuna_unica",
    enunciado: 'Complete: "Amanhã eu ___ reunião das nove."',
    opcoes: ["vou à", "vou na"],
    gabarito: "vou à",
    armadilhaId: "ir_a",
    feedbackAcerto:
      'Certo. **"vou à"** é o jeito que a escrita formal liga o verbo ir ao lugar.\n\nNa conversa, "vou na reunião" é o jeito de praticamente todo brasileiro e está perfeitamente certo. Na escrita formal de trabalho, o costume é usar "a".\n\nMacete: com ir e voltar, na escrita formal, pense "a" antes do lugar.',
    feedbackErro: [
      'Para onde você vai amanhã, e que verbo está ligando você ao lugar?',
      'Com o verbo "ir", a escrita formal usa "a" antes do lugar, não "na".',
      'A escrita formal pede **"vou à reunião"**: com ir, o costume formal é ligar com "a/ao/à".',
    ],
  },
  {
    slug: "a9-ex02",
    tipo: "lacuna_unica",
    enunciado: 'Complete: "Preciso ___ banco antes do almoço."',
    opcoes: ["ir ao", "ir no"],
    gabarito: "ir ao",
    armadilhaId: "ir_a",
    feedbackAcerto:
      'Certo. **"ir ao"** é a forma da escrita formal, porque "banco" é masculino e o "a" vira "ao".\n\nNa fala, "ir no banco" é o que todo mundo diz, sem nenhum problema. Na escrita formal, o costume é "a".\n\nLembre: lugar masculino, o "a" vira "ao".',
    feedbackErro: [
      'O verbo aqui é "ir". Como a escrita formal costuma ligar ele ao lugar?',
      'Com "ir", a escrita formal usa "a"; antes de palavra masculina como "banco", fica "ao".',
      'A escrita formal pede **"ir ao banco"**: com ir, liga-se com "a", e "a + o" vira "ao".',
    ],
  },
  {
    slug: "a9-ex03",
    tipo: "lacuna_unica",
    enunciado: 'Complete: "Ela ___ médico na semana passada."',
    opcoes: ["foi ao", "foi no"],
    gabarito: "foi ao",
    armadilhaId: "ir_a",
    feedbackAcerto:
      'Certo. **"foi ao"** é a forma da escrita formal (foi = passado de ir).\n\nNa conversa, "foi no médico" é o jeito de todo mundo e está certo. Na escrita formal, usa-se "a".\n\nMacete: "foi" também é o verbo ir, então vale o mesmo costume: "a/ao/à".',
    feedbackErro: [
      '"Foi" aqui é o passado de qual verbo?',
      '"Foi" é o passado de "ir". Com ir, a escrita formal usa "a" antes do lugar.',
      'A escrita formal pede **"foi ao médico"**: "foi" é o verbo ir, e o costume formal é ligar com "ao".',
    ],
  },
  {
    slug: "a9-ex04",
    tipo: "lacuna_unica",
    enunciado: 'Complete: "Nós ___ obra logo cedo."',
    opcoes: ["vamos à", "vamos na"],
    gabarito: "vamos à",
    armadilhaId: "ir_a",
    feedbackAcerto:
      'Certo. **"vamos à"** é a forma da escrita formal, e "obra" é feminino, então o "a" vira "à".\n\nNa fala, "vamos na obra" é o que todo mundo diz, sem problema nenhum. Na escrita formal, o costume é "a".\n\nLembre: lugar feminino, o "a" vira "à".',
    feedbackErro: [
      'O verbo é "ir" (vamos). Como a escrita formal liga ele ao lugar?',
      'Com "ir", a escrita formal usa "a"; antes de palavra feminina como "obra", fica "à".',
      'A escrita formal pede **"vamos à obra"**: com ir, liga-se com "a", e "a + a" vira "à".',
    ],
  },
  {
    slug: "a9-ex05",
    tipo: "lacuna_unica",
    enunciado: 'Complete: "Ele ___ escritório depois do almoço."',
    opcoes: ["voltou ao", "voltou no"],
    gabarito: "voltou ao",
    armadilhaId: "ir_a",
    feedbackAcerto:
      'Certo. **"voltou ao"** é a forma da escrita formal. O verbo voltar segue o mesmo costume do ir.\n\nNa conversa, "voltou no escritório" é o jeito natural de todo mundo. Na escrita formal, usa-se "a".\n\nMacete: ir e voltar andam juntos: na escrita formal, "a/ao/à".',
    feedbackErro: [
      'O verbo aqui é "voltar". Ele segue o mesmo costume de qual outro verbo?',
      'Voltar funciona como ir: a escrita formal usa "a" antes do lugar.',
      'A escrita formal pede **"voltou ao escritório"**: voltar, como ir, liga-se com "a/ao/à".',
    ],
  },
  {
    slug: "a9-ex06",
    tipo: "lacuna_unica",
    enunciado: 'Complete: "Vou ___ farmácia comprar o remédio."',
    opcoes: ["à", "na"],
    gabarito: "à",
    armadilhaId: "ir_a",
    feedbackAcerto:
      'Certo. **"à"** é a forma da escrita formal, porque "farmácia" é feminino.\n\nNa fala, "vou na farmácia" é o jeito de praticamente todo mundo, e está certo. Na escrita formal, o costume é "a", que vira "à" antes de palavra feminina.\n\nLembre: com ir, na escrita formal, "a" antes do lugar.',
    feedbackErro: [
      'O verbo é "ir". Como a escrita formal liga ele à farmácia?',
      'Com "ir", a escrita formal usa "a"; "farmácia" é feminino, então fica "à".',
      'A escrita formal pede **"vou à farmácia"**: com ir, liga-se com "a", e antes de palavra feminina vira "à".',
    ],
  },

  // ─── Fase 2: chegar_a (blocked) ─────────────────────────────────────────

  {
    slug: "a9-ex07",
    tipo: "lacuna_unica",
    enunciado: 'Complete: "Cheguei ___ trabalho às oito."',
    opcoes: ["ao", "no"],
    gabarito: "ao",
    armadilhaId: "chegar_a",
    feedbackAcerto:
      'Certo. **"ao"** é a forma da escrita formal com o verbo chegar.\n\nNa conversa, "cheguei no trabalho" é o jeito de todo mundo e funciona perfeitamente. Na escrita formal, o costume é ligar chegar ao lugar com "a".\n\nMacete: chegar a um lugar, na escrita formal, com "a/ao/à".',
    feedbackErro: [
      'Que verbo está ligando você ao trabalho nessa frase?',
      'Com o verbo "chegar", a escrita formal usa "a" antes do lugar, não "no".',
      'A escrita formal pede **"cheguei ao trabalho"**: com chegar, o costume formal é ligar com "ao".',
    ],
  },
  {
    slug: "a9-ex08",
    tipo: "lacuna_unica",
    enunciado: 'Complete: "Quando você ___ empresa, me avise."',
    opcoes: ["chegar à", "chegar na"],
    gabarito: "chegar à",
    armadilhaId: "chegar_a",
    feedbackAcerto:
      'Certo. **"chegar à"** é a forma da escrita formal, e "empresa" é feminino, então o "a" vira "à".\n\nNa fala, "chegar na empresa" é o jeito natural de todo mundo. Na escrita formal, o costume é "a".\n\nLembre: lugar feminino, o "a" vira "à".',
    feedbackErro: [
      'O verbo é "chegar". Como a escrita formal liga ele à empresa?',
      'Com "chegar", a escrita formal usa "a"; antes de palavra feminina como "empresa", fica "à".',
      'A escrita formal pede **"chegar à empresa"**: com chegar, liga-se com "a", e "a + a" vira "à".',
    ],
  },
  {
    slug: "a9-ex09",
    tipo: "lacuna_unica",
    enunciado: 'Complete: "Ela ___ reunião um pouco atrasada."',
    opcoes: ["chegou à", "chegou na"],
    gabarito: "chegou à",
    armadilhaId: "chegar_a",
    feedbackAcerto:
      'Certo. **"chegou à"** é a forma da escrita formal, e "reunião" é feminino.\n\nNa conversa, "chegou na reunião" é o que todo mundo diz, sem problema. Na escrita formal, o costume é "a".\n\nMacete: chegar a um lugar feminino, na escrita formal, "à".',
    feedbackErro: [
      'Qual é o verbo, e a que lugar ele está ligando?',
      'Com "chegar", a escrita formal usa "a"; "reunião" é feminino, então "à".',
      'A escrita formal pede **"chegou à reunião"**: com chegar, liga-se com "a", e antes de palavra feminina vira "à".',
    ],
  },
  {
    slug: "a9-ex10",
    tipo: "lacuna_unica",
    enunciado: 'Complete: "Assim que ___ depósito, confiro o estoque."',
    opcoes: ["chegar ao", "chegar no"],
    gabarito: "chegar ao",
    armadilhaId: "chegar_a",
    feedbackAcerto:
      'Certo. **"chegar ao"** é a forma da escrita formal, e "depósito" é masculino.\n\nNa fala, "chegar no depósito" é o jeito de todo mundo e está certo. Na escrita formal, o costume é "a".\n\nLembre: lugar masculino, o "a" vira "ao".',
    feedbackErro: [
      'O verbo é "chegar". Como a escrita formal liga ele ao depósito?',
      'Com "chegar", a escrita formal usa "a"; antes de palavra masculina como "depósito", fica "ao".',
      'A escrita formal pede **"chegar ao depósito"**: com chegar, liga-se com "a", e "a + o" vira "ao".',
    ],
  },
  {
    slug: "a9-ex11",
    tipo: "lacuna_unica",
    enunciado: 'Complete: "Eles ___ aeroporto bem cedo."',
    opcoes: ["chegaram ao", "chegaram no"],
    gabarito: "chegaram ao",
    armadilhaId: "chegar_a",
    feedbackAcerto:
      'Certo. **"chegaram ao"** é a forma da escrita formal, e "aeroporto" é masculino.\n\nNa conversa, "chegaram no aeroporto" é o jeito natural de todo mundo. Na escrita formal, o costume é "a".\n\nMacete: chegar a um lugar masculino, na escrita formal, "ao".',
    feedbackErro: [
      'Que verbo liga "eles" ao aeroporto?',
      'Com "chegar", a escrita formal usa "a"; "aeroporto" é masculino, então "ao".',
      'A escrita formal pede **"chegaram ao aeroporto"**: com chegar, liga-se com "a", e "a + o" vira "ao".',
    ],
  },
  {
    slug: "a9-ex12",
    tipo: "lacuna_unica",
    enunciado: 'Complete: "Cheguei ___ loja antes de ela abrir."',
    opcoes: ["à", "na"],
    gabarito: "à",
    armadilhaId: "chegar_a",
    feedbackAcerto:
      'Certo. **"à"** é a forma da escrita formal, porque "loja" é feminino.\n\nNa fala, "cheguei na loja" é o jeito de praticamente todo mundo, e está certo. Na escrita formal, o costume é "a", que vira "à" antes de palavra feminina.\n\nLembre: com chegar, na escrita formal, "a" antes do lugar.',
    feedbackErro: [
      'O verbo é "chegar". Como a escrita formal liga ele à loja?',
      'Com "chegar", a escrita formal usa "a"; "loja" é feminino, então "à".',
      'A escrita formal pede **"cheguei à loja"**: com chegar, liga-se com "a", e antes de palavra feminina vira "à".',
    ],
  },

  // ─── Fase 3: interleaved ─────────────────────────────────────────────────

  {
    slug: "a9-ex13",
    tipo: "lacuna_unica",
    enunciado: 'Complete: "Hoje preciso ___ cartório registrar o documento."',
    opcoes: ["ir ao", "ir no"],
    gabarito: "ir ao",
    armadilhaId: "ir_a",
    feedbackAcerto:
      'Certo. **"ir ao"** é a forma da escrita formal, e "cartório" é masculino.\n\nNa conversa, "ir no cartório" é o jeito de todo mundo, sem problema. Na escrita formal, o costume é "a".\n\nMacete: com ir, na escrita formal, "a/ao/à" antes do lugar.',
    feedbackErro: [
      'Qual é o verbo, e o "cartório" é masculino ou feminino?',
      'Com "ir", a escrita formal usa "a"; "cartório" é masculino, então "ao".',
      'A escrita formal pede **"ir ao cartório"**: com ir, liga-se com "a", e "a + o" vira "ao".',
    ],
  },
  {
    slug: "a9-ex14",
    tipo: "lacuna_unica",
    enunciado: 'Complete: "Quando ele ___ portaria, me liga."',
    opcoes: ["chegar à", "chegar na"],
    gabarito: "chegar à",
    armadilhaId: "chegar_a",
    feedbackAcerto:
      'Certo. **"chegar à"** é a forma da escrita formal, e "portaria" é feminino.\n\nNa fala, "chegar na portaria" é o jeito natural de todo mundo. Na escrita formal, o costume é "a".\n\nLembre: com chegar, lugar feminino, "à".',
    feedbackErro: [
      'O verbo aqui é "chegar". A "portaria" é masculina ou feminina?',
      'Com "chegar", a escrita formal usa "a"; "portaria" é feminino, então "à".',
      'A escrita formal pede **"chegar à portaria"**: com chegar, liga-se com "a", e antes de palavra feminina vira "à".',
    ],
  },
  {
    slug: "a9-ex15",
    tipo: "lacuna_unica",
    enunciado: 'Complete: "Ela ___ dentista hoje à tarde."',
    opcoes: ["foi ao", "foi no"],
    gabarito: "foi ao",
    armadilhaId: "ir_a",
    feedbackAcerto:
      'Certo. **"foi ao"** é a forma da escrita formal (foi = passado de ir), e "dentista" aqui está como masculino.\n\nNa conversa, "foi no dentista" é o jeito de todo mundo e está certo. Na escrita formal, o costume é "a".\n\nMacete: "foi" é o verbo ir, então vale o mesmo costume: "a/ao/à".',
    feedbackErro: [
      '"Foi" é o passado de qual verbo?',
      '"Foi" é o passado de "ir". Com ir, a escrita formal usa "a" antes do lugar.',
      'A escrita formal pede **"foi ao dentista"**: "foi" é o verbo ir, e o costume formal é ligar com "ao".',
    ],
  },
  {
    slug: "a9-ex16",
    tipo: "lacuna_unica",
    enunciado: 'Complete: "Nós ___ feira bem cedo para garantir o lugar."',
    opcoes: ["chegamos à", "chegamos na"],
    gabarito: "chegamos à",
    armadilhaId: "chegar_a",
    feedbackAcerto:
      'Certo. **"chegamos à"** é a forma da escrita formal, e "feira" é feminino.\n\nNa fala, "chegamos na feira" é o jeito de praticamente todo mundo, sem problema. Na escrita formal, o costume é "a".\n\nLembre: com chegar, lugar feminino, "à".',
    feedbackErro: [
      'Qual é o verbo, e a "feira" é masculina ou feminina?',
      'Com "chegar", a escrita formal usa "a"; "feira" é feminino, então "à".',
      'A escrita formal pede **"chegamos à feira"**: com chegar, liga-se com "a", e antes de palavra feminina vira "à".',
    ],
  },
];
