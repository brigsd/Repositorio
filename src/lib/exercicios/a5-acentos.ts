/**
 * Exercícios curados da Unidade A.5 — "Acentos que mudam tudo"
 *
 * Pares cobertos (conforme docs/03-nivel-a.md):
 * - está/esta (verbo vs pronome)
 * - pôde/pode (passado vs presente)
 * - sábia/sabia (adjetivo vs verbo)
 * - dúvida/duvida (substantivo vs verbo)
 * - é/e (verbo vs conjunção)
 * - dá/da (verbo vs preposição)
 *
 * Cada exercício segue o guia de escrita: docs/12-guia-feedback-tutor.md
 * Ordem dos parágrafos no feedbackAcerto: papel → contraste → dica
 */

import type { ExercicioGerado } from "./tipos";

export const EXERCICIOS_A5: ExercicioGerado[] = [
  {
    slug: "a5-ex1",
    tipo: "lacuna_unica",
    enunciado: "A sala de reunião ___ reservada para amanhã.",
    opcoes: ["está", "esta"],
    gabarito: "está",
    armadilhaId: "esta_esta",
    feedbackAcerto:
      '**Está** com acento é uma ação, algo que acontece agora.\nJá **esta** sem acento aponta para algo, tipo "esta sala", "esta pessoa".\nUma dica: se você consegue trocar por **encontra-se**, é **está** com acento. "A sala encontra-se reservada." Funcionou!',
    feedbackErro: [
      "A frase está dizendo que a sala se encontra reservada, ou está apontando para qual sala?",
      'Tenta trocar por **encontra-se**: "A sala encontra-se reservada para amanhã." Soou natural? Quando a palavra indica um estado ou situação, leva acento: **está**.',
      '**Está** com acento é a resposta. A frase diz que a sala se encontra reservada. Sem acento, **esta** seria para apontar: "esta sala aqui".',
    ],
  },
  {
    slug: "a5-ex2",
    tipo: "lacuna_unica",
    enunciado: "Ontem ele não ___ entregar o relatório a tempo.",
    opcoes: ["pôde", "pode"],
    gabarito: "pôde",
    armadilhaId: "pode_pode",
    feedbackAcerto:
      '**Pôde** com acento é passado, algo que já aconteceu.\nJá **pode** sem acento é presente, algo que acontece agora ou é possível.\nUma dica: a palavra **ontem** na frase indica passado. Se tem palavra de passado (ontem, na semana passada, ano passado), use **pôde**.',
    feedbackErro: [
      "Essa situação aconteceu no passado ou está acontecendo agora?",
      'A frase começa com **ontem**. Quando algo já aconteceu, usamos **pôde** com acento. Sem acento, **pode** é para agora: "Ele pode sair mais cedo hoje."',
      '**Pôde** com acento é a resposta. A palavra **ontem** mostra que é passado. Sem acento seria presente: "Ele pode entregar hoje." Com acento: "Ontem ele não pôde entregar."',
    ],
  },
  {
    slug: "a5-ex3",
    tipo: "lacuna_unica",
    enunciado: "A decisão da chefe foi muito ___.",
    opcoes: ["sábia", "sabia"],
    gabarito: "sábia",
    armadilhaId: "sabia_sabia",
    feedbackAcerto:
      '**Sábia** com acento descreve alguém que tem sabedoria.\nJá **sabia** sem acento é ação, como em "ela sabia a resposta".\nUma dica: se você consegue trocar por **inteligente**, é **sábia** com acento. "A decisão foi muito inteligente." Funcionou!',
    feedbackErro: [
      "A frase está descrevendo como a decisão foi, ou está dizendo que alguém sabia de algo?",
      'Tenta trocar por **inteligente**: "A decisão da chefe foi muito inteligente." Soou natural? Quando a palavra descreve uma qualidade, leva acento: **sábia**.',
      '**Sábia** com acento é a resposta. A frase está descrevendo a qualidade da decisão. Sem acento, **sabia** seria uma ação: "Ela sabia o resultado."',
    ],
  },
  {
    slug: "a5-ex4",
    tipo: "lacuna_unica",
    enunciado: "Não ___ do que eu estou dizendo.",
    opcoes: ["duvida", "dúvida"],
    gabarito: "duvida",
    armadilhaId: "duvida_duvida",
    feedbackAcerto:
      '**Duvida** sem acento é uma ação, quando alguém está duvidando.\nJá **dúvida** com acento é uma coisa, tipo "tenho uma dúvida".\nUma dica: se você consegue trocar por **desconfia**, é **duvida** sem acento. "Não desconfia do que eu estou dizendo." Funcionou!',
    feedbackErro: [
      "A frase está pedindo para alguém não fazer algo (ação), ou está falando sobre uma coisa (um sentimento)?",
      'Tenta trocar por **desconfia**: "Não desconfia do que eu estou dizendo." Soou natural? Quando é uma ação (alguém duvidando), é sem acento: **duvida**.',
      '**Duvida** sem acento é a resposta. A frase pede para alguém não duvidar, é uma ação. Com acento seria uma coisa: "Tenho uma **dúvida** sobre o prazo."',
    ],
  },
  {
    slug: "a5-ex5",
    tipo: "lacuna_unica",
    enunciado: "Terminar esse serviço ___ prioridade.",
    opcoes: ["é", "e"],
    gabarito: "é",
    armadilhaId: "e_e",
    feedbackAcerto:
      '**É** com acento vem do verbo ser, indica que algo é alguma coisa.\nJá **e** sem acento junta duas coisas, tipo "café e leite".\nUma dica: se você consegue trocar por **significa** ou **representa**, é **é** com acento. "Terminar esse serviço significa prioridade."',
    feedbackErro: [
      "A frase está dizendo que algo é alguma coisa, ou está juntando duas coisas?",
      'Tenta trocar por **significa**: "Terminar esse serviço significa prioridade." Soou natural? Quando a palavra vem do verbo **ser**, leva acento: **é**.',
      '**É** com acento é a resposta. A frase diz que o serviço é prioridade (verbo ser). Sem acento, **e** seria para juntar: "o serviço e o relatório".',
    ],
  },
  {
    slug: "a5-ex6",
    tipo: "lacuna_unica",
    enunciado: "Ele não ___ conta do trabalho sozinho.",
    opcoes: ["dá", "da"],
    gabarito: "dá",
    armadilhaId: "da_da",
    feedbackAcerto:
      '**Dá** com acento vem do verbo dar, indica uma ação.\nJá **da** sem acento liga palavras, tipo "a chave da porta".\nUma dica: se você consegue trocar por **consegue**, é **dá** com acento. "Ele não consegue conta do trabalho sozinho."',
    feedbackErro: [
      "A frase está dizendo que alguém faz algo (ação), ou está ligando palavras?",
      'Tenta trocar por **consegue**: "Ele não consegue conta do trabalho sozinho." Soou natural? Quando a palavra vem do verbo **dar**, leva acento: **dá**.',
      '**Dá** com acento é a resposta. A frase fala de uma ação (dar conta). Sem acento, **da** seria para ligar: "a porta da sala".',
    ],
  },
];
