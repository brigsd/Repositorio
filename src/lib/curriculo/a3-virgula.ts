/**
 * curriculo/a3-virgula.ts
 *
 * Currículo curado da Unidade A.3 — "A vírgula que muda o sentido"
 *
 * Princípios pedagógicos (super pacote — 2026-05-13):
 *
 * 1. SENTIDO antes da regra (Hattie nível 2-3; Knowles andragogia):
 *    a vírgula é ensinada como ferramenta de comunicação que evita
 *    mal-entendido — não como regra sintática nomeada.
 *
 * 2. EXPLÍCITO-INDUTIVO HÍBRIDO (Harvard/ERIC; DeKeyser):
 *    contraste primeiro → aluno percebe a diferença → regra nomeada depois.
 *    Adultos preferem análise consciente à descoberta pura.
 *
 * 3. DOIS CASOS APENAS (Sweller CLT — uma regra por vez):
 *    - Caso 1: Vocativo (chamar alguém pelo nome)
 *    - Caso 2: Negação com vírgula (sentido oposto)
 *
 * 4. PROTAGONIST ADULTO similar ao público (Bandura autoeficácia):
 *    Dona Vera no corpo; zelador no exemploPrático.
 */

import type { UnidadeCurriculo } from "./tipos";

export const A3_VIRGULA: UnidadeCurriculo = {
  slug: "a-3-virgula",
  titulo: "A vírgula que muda o sentido",
  nivel: "A",
  numero: 3,
  duracaoEstimadaMin: 25,

  ancoraPropósito: {
    titulo: "Por que isso importa?",
    corpo: `Quando você fala, faz pausas naturalmente. É o tempo certo entre uma ideia e outra, entre chamar alguém e dar o recado. A vírgula é a forma de marcar essas pausas na escrita.

Parece um detalhe pequeno, mas é um detalhe que carrega peso. Uma mesma frase, com vírgula ou sem vírgula, pode comunicar coisas completamente diferentes. E quem lê só tem o que está escrito, não tem como adivinhar o tom da sua voz nem o que você quis dizer.

Esta unidade mostra dois momentos em que a vírgula muda o sentido inteiro de uma frase: quando você chama alguém diretamente pelo nome, e quando você usa "não" para corrigir alguma coisa. Dois casos que aparecem o tempo todo em mensagens, e-mails e bilhetes. Sem a vírgula no lugar, podem virar o oposto do que você queria dizer.`,
    exemploPrático: `Exemplo prático:

Marcelo é encanador. Terminou um conserto na casa de uma cliente e, antes de fechar tudo, mandou uma mensagem rápida para confirmar: "Posso liberar a água?"

A cliente estava no meio de uma reunião e respondeu correndo: "Não pode liberar."

Marcelo leu, achou que tinha aparecido algum problema, parou o serviço e ficou esperando uma explicação. Meia hora depois, a cliente saiu da reunião e estranhou o trabalho travado. A intenção dela tinha sido o oposto: "Não [tem nenhum problema], pode liberar." Sem a vírgula, a leitura natural virou proibição. E o Marcelo seguiu exatamente o que estava escrito.

"Não, pode liberar." Isso é permissão. O "não" responde a uma preocupação que estava no ar; o que vem depois é que libera a ação.
"Não pode liberar." Isso é proibição. O "não" cola no verbo e bloqueia.

Uma vírgula, dois sentidos opostos. E meia hora de serviço parado por causa dela.`,
  },

  curiosidade: `A palavra **vírgula** vem do latim *virgula*, que significa "pequeno galho" ou "pequena vara". Na escrita medieval, copistas usavam um traço fino para separar partes do texto. Essa "varinha" ajudava o leitor a respirar e entender. Ela sobreviveu por séculos porque cumpre algo que não pode ser eliminado: entregar a intenção de quem escreveu.`,

  armadilhas: [
    {
      id: "vocativo",
      titulo: "Vocativo: chamar alguém pelo nome",
      textoAncora:
        "Quando você chama alguém diretamente pelo nome, título ou relação, use vírgula para separar esse chamado do resto da frase.",
      exemplosCertos: [
        "Carlos, pode ajudar aqui?",
        "Obrigado, dona Maria.",
        "Manda o arquivo, Paulo.",
      ],
      exemplosErrados: [
        "Carlos pode ajudar aqui?",
        "Manda o arquivo Paulo.",
      ],
      tiposErro: ["vocativo_sem_virgula"],
    },
    {
      id: "negacao_virgula",
      titulo: "Não + vírgula: permissão ou proibição",
      textoAncora:
        'Com vírgula depois de "não", a frase contradiz ou corrige algo. É o sentido oposto ao de proibição.',
      exemplosCertos: [
        "Não, pode entrar.",
        "Não, precisa trazer o RG.",
      ],
      exemplosErrados: [
        "Não pode entrar.",
        "Não precisa trazer o RG.",
      ],
      tiposErro: ["negacao_sem_virgula"],
    },
  ],

  preAfericao: [
    {
      slug: "pre-vir-vocativo",
      enunciado: "Qual frase chama Maria diretamente?",
      opcoes: [
        "Maria pode confirmar o horário?",
        "Maria, pode confirmar o horário?",
      ],
      gabarito: "Maria, pode confirmar o horário?",
      conceito: "vocativo",
    },
    {
      slug: "pre-vir-negacao",
      enunciado: "Qual frase dá permissão para entrar?",
      opcoes: [
        "Não pode entrar.",
        "Não, pode entrar.",
      ],
      gabarito: "Não, pode entrar.",
      conceito: "negacao_virgula",
    },
    {
      slug: "pre-vir-contexto",
      enunciado: "Qual frase diz que Ana precisa da sua ajuda?",
      opcoes: [
        "Ana, preciso da sua ajuda.",
        "Ana precisa da sua ajuda.",
      ],
      gabarito: "Ana, preciso da sua ajuda.",
      conceito: "vocativo",
    },
  ],

  tiposExercicio: [
    {
      tipo: "identificar_erro",
      descricao: "Escolha qual frase corresponde ao sentido indicado pelo contexto",
      criterios: [
        "Reconheceu o vocativo (chamado direto pelo nome)",
        "Reconheceu o efeito da vírgula após 'não'",
      ],
    },
  ],

  projetoIntegrador: {
    enunciado: `Escreva duas mensagens curtas (2–3 frases cada):
1. Uma mensagem em que você chama alguém pelo nome para pedir ou avisar algo.
2. Uma mensagem em que você usa "não" com vírgula para corrigir uma informação.
As mensagens podem ser no contexto que você quiser: trabalho, família, vizinhos.`,
    rubrica: [
      "Vírgula usada para separar vocativo do resto da frase",
      "Vírgula após 'não' quando o sentido é de correção/permissão",
      "Sentido da mensagem claro para quem lê",
    ],
  },

  posAfericao: [
    {
      slug: "pos-vir-vocativo",
      enunciado: "Qual frase está pedindo a Paulo que feche a porta?",
      opcoes: [
        "Paulo pode fechar a porta.",
        "Paulo, pode fechar a porta?",
      ],
      gabarito: "Paulo, pode fechar a porta?",
      conceito: "vocativo",
    },
    {
      slug: "pos-vir-negacao",
      enunciado: "Qual frase diz que não é necessário pagar agora?",
      opcoes: [
        "Não precisa pagar agora.",
        "Não, precisa pagar agora.",
      ],
      gabarito: "Não precisa pagar agora.",
      conceito: "negacao_virgula",
    },
    {
      slug: "pos-vir-misto",
      enunciado: "Qual frase diz que a impressora está disponível, corrigindo quem achou que não estava?",
      opcoes: [
        "Não pode usar a impressora.",
        "Não, pode usar a impressora.",
      ],
      gabarito: "Não, pode usar a impressora.",
      conceito: "negacao_virgula",
    },
  ],

  perguntasRevisao: [
    {
      slug: "rev-vir-a",
      enunciado: 'Você quer escrever diretamente para o Carlos numa mensagem. Como você começa a frase?',
      gabarito: "Carlos, [mensagem]",
      conceito: "vocativo",
    },
    {
      slug: "rev-vir-b",
      enunciado: 'Qual a diferença de sentido entre "Não pode sair" e "Não, pode sair"?',
      gabarito: "Sem vírgula: proibição. Com vírgula: permissão (corrigindo uma impressão).",
      conceito: "negacao_virgula",
    },
  ],
};
