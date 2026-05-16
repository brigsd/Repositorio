/**
 * curriculo/b2-ideia-principal.ts
 *
 * Currículo curado da Unidade B.2 — "Ideia principal e secundárias"
 *
 * Princípios pedagógicos (super pacote — 2026-05-16):
 *
 * 1. KINTSCH & VAN DIJK (1978): A ideia principal não está no texto
 *    — é construída pelo leitor via três macro-operações: deleção
 *    (descarta detalhes), generalização (sobe exemplos a regras) e
 *    construção (sintetiza). Leitores de baixa literacia fazem isso
 *    com dificuldade: entendem cada frase mas perdem o ponto central.
 *
 * 2. FUZZY TRACE THEORY (Reyna & Brainerd 2002):
 *    Leitores menos experientes retêm a memória verbatim (detalhe
 *    concreto, número, nome) em vez do gist (essência semântica).
 *    Por isso o erro mais comum é escolher um detalhe vívido no lugar
 *    da ideia principal.
 *
 * 3. TRÊS ERROS DOCUMENTADOS (Shanahan; Keys to Literacy; Hechinger):
 *    - Detalhe no lugar da principal: o erro mais frequente.
 *    - Ideia secundária no lugar da principal: verdadeira e relacionada,
 *      mas existe para sustentar a principal, não substituí-la.
 *    - Ideia ampla demais: generaliza além do que o texto realmente diz.
 *
 * 4. GIST PROCEDURE (Cunningham 1982; LINCS/ERIC):
 *    Leitores devem PRODUZIR uma paráfrase reduzida, não identificar
 *    uma frase pré-existente. A produção força as macro-operações.
 *    Instrução explícita + prática construtiva > identificação passiva.
 *
 * 5. SOARES / LETRAMENTO (EJA):
 *    Textos autênticos de contexto real (comunicados, notícias, normas
 *    trabalhistas) — nunca textos de exercício artificiais. A distinção
 *    principal/secundária deve ser comunicativamente significativa.
 */

import type { UnidadeCurriculo } from "./tipos";

export const B2_IDEIA_PRINCIPAL: UnidadeCurriculo = {
  slug: "b-2-ideia-principal",
  titulo: "Ideia principal e secundárias",
  nivel: "B",
  numero: 2,
  duracaoEstimadaMin: 35,

  ancoraPropósito: {
    titulo: "Por que isso importa",
    corpo: `Oitenta por cento da compreensão de leitura é encontrar a ideia principal. Não importa se é uma notícia, um contrato, um comunicado do RH ou uma mensagem do chefe: quem consegue dizer em uma frase o que aquele texto quer dizer está lendo de verdade. Quem não consegue leu as palavras, mas não leu o texto.

A dificuldade não é falta de vocabulário. É que nosso cérebro naturalmente guarda o que é vívido, específico e concreto: um número, uma multa, uma data, um nome. Esses detalhes ficam na memória com facilidade. Mas eles costumam ser o apoio da ideia principal, não ela mesma.

Saber separar o que o texto quer dizer do que ele usa para dizer é o que esta unidade treina. É uma habilidade que, uma vez aprendida, acelera a leitura de qualquer coisa pelo resto da vida.`,
    exemploPrático: `Exemplo prático:

Sandra recebeu um comunicado da empresa sobre o plano de saúde. Ela leu com atenção e reteve a informação mais concreta: "o prazo para cadastrar os dependentes é dia 28." Quando a colega perguntou do que se tratava, Sandra disse: "tem um prazo pra cadastrar dependentes."

Mas o comunicado não era sobre o prazo. O prazo era uma instrução secundária dentro do comunicado. A ideia principal era: a empresa ampliou o plano de saúde para incluir cobertura odontológica.

Sandra leu tudo. Mas guardou o detalhe mais concreto no lugar da ideia central. Isso é o que esta unidade treina: saber o que o texto quer dizer, não apenas o que ficou na memória.`,
  },

  curiosidade: `Dois pesquisadores europeus, Kintsch e van Dijk, descobriram nos anos 1970 que a ideia principal de um texto não está escrita nele — ela é **construída** pelo leitor. Enquanto lê, o cérebro descarta automaticamente os detalhes dispensáveis, sobe os exemplos para regras mais gerais e sintetiza tudo em uma proposição central. Leitores experientes fazem isso sem perceber. Leitores em desenvolvimento podem aprender a fazer **conscientemente** — e é exatamente isso que você vai praticar aqui.`,

  armadilhas: [
    {
      id: "detalhe_como_principal",
      titulo: "Detalhe no lugar da ideia principal",
      textoAncora:
        'O erro mais comum: escolher um dado específico (um número, uma data, uma multa, um nome) em vez da ideia central do texto. Detalhes concretos ficam mais fáceis na memória — são vívidos e específicos — mas eles existem para apoiar a ideia principal, não para substituí-la.\n\nComo identificar o detalhe: ele responde "quem?", "quando?", "quanto?", "onde?". A ideia principal responde "o que o texto quer dizer?" ou "sobre o que é esse texto?".',
      exemplosCertos: [
        'Texto sobre nova política de EPI. Ideia principal: "O uso de EPI passa a ser obrigatório em toda a obra, com punições para quem não cumprir."',
        'Texto sobre licença-maternidade. Ideia principal: "A licença-maternidade garante 120 dias remunerados, com possibilidade de extensão para 180."',
      ],
      exemplosErrados: [
        'Detalhe escolhido como principal: "A multa pela segunda infração é de R$ 200." (detalhe da punição, não a regra principal)',
        'Detalhe escolhido como principal: "O benefício é pago pelo INSS." (detalhe de como funciona, não o que é a licença)',
      ],
      tiposErro: ["detalhe_como_principal"],
    },
    {
      id: "ideia_secundaria_como_principal",
      titulo: "Ideia de apoio no lugar da principal",
      textoAncora:
        'Ideias secundárias são verdadeiras, relacionadas ao assunto e importantes. Mas elas existem para sustentar a ideia principal: explicam o motivo, detalham o funcionamento, listam consequências ou apresentam exemplos. Confundi-las com a ideia principal é escolher um dos apoios no lugar da estrutura que ele sustenta.\n\nComo diferenciar: a ideia principal pode existir sozinha como resumo do texto. A ideia secundária, se colocada sozinha, parece incompleta — falta o contexto da principal.',
      exemplosCertos: [
        'Texto sobre avaliação de desempenho. Ideia principal: "A avaliação de novembro define os aumentos por mérito e as promoções do próximo ano."',
        'Ideia secundária do mesmo texto: "A avaliação inclui uma autoavaliação feita pelo próprio funcionário." (isso é como funciona, não o que ela significa)',
      ],
      exemplosErrados: [
        'Ideia secundária escolhida como principal: "Empresas que reduziram acidentes investiram em jornada, manutenção e ergonomia." (isso é a solução, mas a ideia principal é que acidentes têm múltiplas causas)',
      ],
      tiposErro: ["ideia_secundaria_como_principal"],
    },
    {
      id: "ideia_ampla_demais",
      titulo: "Ideia ampla demais",
      textoAncora:
        'Às vezes a opção errada parece certa porque é verdadeira e relacionada ao assunto. O problema: ela diz mais do que o texto diz. A ideia principal de um texto é específica — resume exatamente aquele texto, não o tema geral.\n\nComo identificar: se a frase poderia ser a ideia principal de dezenas de textos diferentes sobre o mesmo assunto geral, ela é ampla demais. A ideia principal correta só encaixa naquele texto específico.',
      exemplosCertos: [
        'Texto sobre norma de hora extra específica da empresa. Ideia principal: "Horas extras precisam de autorização prévia do gestor com 24 horas de antecedência."',
      ],
      exemplosErrados: [
        'Ideia ampla demais: "A legislação trabalhista brasileira regula o direito às horas extras." (verdadeiro, mas não é o que o texto diz — ele fala da norma interna da empresa)',
        'Ideia ampla demais: "A segurança no trabalho protege a vida dos trabalhadores." (genérico demais — poderia ser de qualquer texto sobre segurança)',
      ],
      tiposErro: ["ideia_ampla_demais"],
    },
  ],

  preAfericao: [
    {
      slug: "pre-ip-detalhe",
      enunciado:
        '"A empresa vai mudar o sistema de ponto para biometria. O RH fará um treinamento de cinco minutos com cada equipe esta semana." Qual é a ideia principal?',
      opcoes: [
        "A empresa vai mudar o sistema de ponto.",
        "O treinamento do RH vai durar cinco minutos.",
        "A biometria é mais segura que o cartão magnético.",
        "Os trabalhadores precisam de treinamento para usar tecnologia.",
      ],
      gabarito: "A empresa vai mudar o sistema de ponto.",
      conceito: "detalhe_como_principal",
    },
    {
      slug: "pre-ip-secundaria",
      enunciado:
        '"O uso de capacete é obrigatório em toda a obra, com multa de R$ 200 na segunda infração. A medida veio após aumento de acidentes." Qual é a ideia principal?',
      opcoes: [
        "O uso de capacete passou a ser obrigatório, com punições para quem não cumprir.",
        "A multa pela segunda infração é de R$ 200.",
        "Os acidentes aumentaram nos últimos meses.",
        "A segurança no trabalho é responsabilidade de todos.",
      ],
      gabarito:
        "O uso de capacete passou a ser obrigatório, com punições para quem não cumprir.",
      conceito: "ideia_secundaria_como_principal",
    },
    {
      slug: "pre-ip-ampla",
      enunciado:
        '"O sistema vai bloquear automaticamente após dez minutos de inatividade para evitar acessos não autorizados." Qual é a ideia principal?',
      opcoes: [
        "A empresa adotou bloqueio automático do sistema para proteger os dados.",
        "O sistema bloqueia após dez minutos.",
        "A segurança digital é essencial para qualquer empresa.",
        "Computadores logados sem usuário são um risco de segurança.",
      ],
      gabarito:
        "A empresa adotou bloqueio automático do sistema para proteger os dados.",
      conceito: "ideia_ampla_demais",
    },
  ],

  tiposExercicio: [
    {
      tipo: "lacuna_unica",
      descricao:
        "Leia o texto e identifique qual das opções é a ideia principal",
      criterios: [
        "Distingue a ideia principal de um detalhe específico",
        "Distingue a ideia principal de uma ideia de apoio",
        "Distingue a ideia principal de uma generalização ampla demais",
        "Identifica a ideia principal mesmo quando não está na primeira frase",
      ],
    },
  ],

  projetoIntegrador: {
    enunciado: `Escolha um texto de sua vida real — pode ser um comunicado do trabalho, uma notícia de jornal, um regulamento, uma mensagem de grupo — com no mínimo 10 linhas.

Escreva:
1. A ideia principal em uma frase (o que o texto quer dizer, no geral).
2. Duas ou três ideias secundárias (as que sustentam, explicam ou exemplificam a principal).
3. Um detalhe que não deve ser confundido com a ideia principal (um dado específico, um número, uma data que aparece no texto).

Se não encontrar um texto real, use este: procure uma notícia sobre um assunto do seu trabalho ou da sua cidade.`,
    rubrica: [
      "A ideia principal resume o texto inteiro, não apenas um trecho",
      "A ideia principal não é um detalhe específico (número, data, nome)",
      "As ideias secundárias são diferentes da principal e a sustentam",
      "O detalhe identificado é de fato um dado específico, não a mensagem central",
    ],
  },

  posAfericao: [
    {
      slug: "pos-ip-detalhe",
      enunciado:
        '"A empresa abrirá inscrições para previdência complementar até o dia 30. O plano tem contrapartida da empresa e é gerido por instituição independente." Qual é a ideia principal?',
      opcoes: [
        "A empresa está abrindo inscrições para um plano de previdência com contrapartida.",
        "O prazo de inscrição vai até o dia 30.",
        "O plano é gerido por uma instituição independente.",
        "Planejar a aposentadoria é uma decisão financeira importante.",
      ],
      gabarito:
        "A empresa está abrindo inscrições para um plano de previdência com contrapartida.",
      conceito: "detalhe_como_principal",
    },
    {
      slug: "pos-ip-secundaria",
      enunciado:
        '"A avaliação de desempenho de novembro define os aumentos por mérito e as indicações para promoções. A avaliação inclui uma autoavaliação feita pelo próprio funcionário." Qual é a ideia principal?',
      opcoes: [
        "A avaliação de novembro define os aumentos e as promoções do próximo ano.",
        "A avaliação inclui uma autoavaliação feita pelo próprio funcionário.",
        "Quem não participar terá nota reduzida.",
        "Avaliar desempenho é essencial para o crescimento profissional.",
      ],
      gabarito:
        "A avaliação de novembro define os aumentos e as promoções do próximo ano.",
      conceito: "ideia_secundaria_como_principal",
    },
    {
      slug: "pos-ip-ampla",
      enunciado:
        '"O sindicato convoca todos os trabalhadores para votar a proposta de acordo coletivo na assembleia de sábado, às 9h." Qual é a ideia principal?',
      opcoes: [
        "O sindicato convoca os trabalhadores para votar o acordo coletivo na assembleia de sábado.",
        "A assembleia acontece às 9h na sede do sindicato.",
        "As deliberações valem para todos os trabalhadores, mesmo os ausentes.",
        "A organização sindical é fundamental para a defesa dos direitos dos trabalhadores.",
      ],
      gabarito:
        "O sindicato convoca os trabalhadores para votar o acordo coletivo na assembleia de sábado.",
      conceito: "ideia_ampla_demais",
    },
  ],

  perguntasRevisao: [
    {
      slug: "rev-ip-a",
      enunciado:
        "Por que é tão comum confundir um detalhe com a ideia principal?",
      gabarito:
        "Porque detalhes concretos — números, datas, multas, nomes — ficam mais fáceis na memória. Eles são vívidos e específicos. Mas existem para apoiar a ideia principal, não para substituí-la. A ideia principal responde 'sobre o que é esse texto?'. O detalhe responde 'quanto?', 'quando?', 'quem?'.",
      conceito: "detalhe_como_principal",
    },
    {
      slug: "rev-ip-b",
      enunciado:
        "Como saber se uma ideia é a principal ou apenas uma ideia de apoio?",
      gabarito:
        "A ideia principal pode existir sozinha como resumo do texto — ela basta. A ideia de apoio, se colocada sozinha, parece incompleta: falta o contexto da principal. Ideias de apoio explicam o motivo, descrevem o funcionamento, listam exemplos ou apresentam consequências da ideia principal.",
      conceito: "ideia_secundaria_como_principal",
    },
    {
      slug: "rev-ip-c",
      enunciado: "Como identificar quando uma opção é ampla demais?",
      gabarito:
        "A ideia principal correta resume exatamente aquele texto específico. Se a opção poderia ser a ideia principal de dezenas de textos diferentes sobre o mesmo assunto geral, ela é ampla demais. Frases como 'a tecnologia transforma o trabalho' ou 'a segurança no trabalho é um direito' são verdadeiras, mas não resumem nenhum texto em particular.",
      conceito: "ideia_ampla_demais",
    },
  ],
};
