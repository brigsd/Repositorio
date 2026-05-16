/**
 * exercicios/b2-ideia-principal.ts
 *
 * Exercícios da Unidade B.2 — "Ideia principal e secundárias" (16 exercícios)
 *
 * Estrutura (Kintsch & van Dijk 1978 + Kornell & Bjork 2008):
 *   Fase 1 (b2-ex01–b2-ex06): bloqueado por tipo de erro
 *     ex01-02: detalhe_como_principal (erro mais frequente — ensinar primeiro)
 *     ex03-04: ideia_secundaria_como_principal
 *     ex05-06: ideia_ampla_demais
 *   Fase 2 (b2-ex07–b2-ex12): distractores mistos (todos os 3 tipos)
 *   Fase 3 (b2-ex13–b2-ex16): interleaved, textos mais longos ou
 *     ideia principal implícita (não está na primeira frase)
 *
 * Contextos: comunicados de RH, normas trabalhistas, segurança, saúde,
 * notícias — textos autênticos que adultos trabalhadores encontram no dia a dia.
 * Textos de 4-8 frases por exercício.
 * 4 opções por exercício: gabarito + detalhe + ideia secundária + ideia ampla.
 */

import type { ExercicioGerado } from "./tipos";

export const EXERCICIOS_B2: ExercicioGerado[] = [
  // ── Fase 1: Bloqueado por tipo de erro ─────────────────────────────────

  // detalhe_como_principal (ex01-02)

  {
    slug: "b2-ex01",
    tipo: "lacuna_unica",
    enunciado: `Leia o texto e marque a ideia principal:

"A empresa vai implantar um novo sistema de registro de ponto a partir da próxima segunda-feira. Em vez do cartão magnético, o ponto será registrado por leitura biométrica da digital. O RH realizará um treinamento de cinco minutos com cada equipe durante esta semana para explicar o funcionamento."

A ideia principal deste texto é:`,
    opcoes: [
      "A empresa vai mudar o sistema de registro de ponto.",
      "O treinamento do RH vai durar cinco minutos.",
      "O novo sistema usa leitura biométrica da digital.",
      "A tecnologia transforma a rotina das empresas.",
    ],
    gabarito: "A empresa vai mudar o sistema de registro de ponto.",
    armadilhaId: "detalhe_como_principal",
    feedbackAcerto:
      "Correto. **A mudança do sistema de ponto** é o que o texto quer comunicar — a informação central que o leitor precisa saber. O tempo do treinamento (5 minutos) é um detalhe de como vai funcionar. A biometria é o como, não o quê. A frase sobre tecnologia em geral é ampla demais.",
    feedbackErro: [
      "Qual informação deste texto você precisaria saber mesmo que esquecesse todo o resto? Essa é a ideia principal.",
      "Um detalhe responde 'quanto tempo?', 'de que jeito?'. A ideia principal responde 'sobre o que é esse texto?'. Releia e tente de novo.",
      "É **'A empresa vai mudar o sistema de registro de ponto.'** Isso resume o texto inteiro. O tempo de treinamento e o tipo de tecnologia são detalhes de como isso vai acontecer.",
    ],
  },

  {
    slug: "b2-ex02",
    tipo: "lacuna_unica",
    enunciado: `Leia o texto e marque a ideia principal:

"A partir desta semana, o uso de capacete e botas de segurança é obrigatório em toda a área da obra, incluindo o corredor de acesso. Funcionários flagrados sem o equipamento receberão advertência na primeira ocorrência e multa de R$ 200 na segunda. A medida foi adotada após aumento de acidentes nos últimos três meses."

A ideia principal deste texto é:`,
    opcoes: [
      "O uso de EPI passou a ser obrigatório em toda a área da obra, com punições para quem não cumprir.",
      "A multa para a segunda infração é de R$ 200.",
      "A medida foi adotada após o aumento de acidentes.",
      "A segurança no trabalho protege a vida dos trabalhadores.",
    ],
    gabarito:
      "O uso de EPI passou a ser obrigatório em toda a área da obra, com punições para quem não cumprir.",
    armadilhaId: "detalhe_como_principal",
    feedbackAcerto:
      "Correto. O texto quer dizer que **o uso de EPI virou obrigatório** e que há punições. O valor da multa (R$ 200) é um detalhe específico da punição. O motivo (aumento de acidentes) é o contexto. A frase sobre segurança no trabalho em geral é ampla demais.",
    feedbackErro: [
      "O valor da multa ficou fácil na memória por ser um número concreto. Mas o texto não é 'sobre R$ 200'. É sobre o quê?",
      "Um número (R$ 200) é um detalhe. A ideia principal é a regra maior que o texto comunica. Qual é essa regra?",
      "É **'O uso de EPI passou a ser obrigatório, com punições.'** Isso é o que o texto quer dizer. A multa é apenas um dos detalhes da punição.",
    ],
  },

  // ideia_secundaria_como_principal (ex03-04)

  {
    slug: "b2-ex03",
    tipo: "lacuna_unica",
    enunciado: `Leia o texto e marque a ideia principal:

"O plano de saúde da empresa passa a cobrir consultas odontológicas a partir de março. Além dos procedimentos de rotina, o novo convênio inclui aparelho ortodôntico para filhos de funcionários até 18 anos. Para usar o benefício, o funcionário deve cadastrar os dependentes no RH até o dia 28."

A ideia principal deste texto é:`,
    opcoes: [
      "A empresa ampliou o plano de saúde para incluir cobertura odontológica.",
      "O prazo para cadastrar dependentes é dia 28.",
      "As consultas odontológicas de rotina já estão cobertas.",
      "Ter saúde bucal é fundamental para o bem-estar do trabalhador.",
    ],
    gabarito:
      "A empresa ampliou o plano de saúde para incluir cobertura odontológica.",
    armadilhaId: "ideia_secundaria_como_principal",
    feedbackAcerto:
      "Correto. **A ampliação do plano de saúde** é a notícia central — o que o texto quer comunicar. As consultas de rotina e o aparelho ortodôntico são exemplos do que passou a ser coberto (ideias de apoio). O prazo é uma instrução dentro da notícia — um detalhe.",
    feedbackErro: [
      "O texto fala de consultas odontológicas, ortodontia e prazo de cadastro. O que une todas essas informações? Esse é o ponto central.",
      "Ideias de apoio explicam ou detalham a principal. Qual é a mensagem maior que o texto quer passar, da qual o prazo e as consultas fazem parte?",
      "É **'A empresa ampliou o plano de saúde.'** As consultas de rotina e o ortodôntico são exemplos do que foi ampliado. O prazo de cadastro é uma instrução. Nenhum deles é a notícia principal.",
    ],
  },

  {
    slug: "b2-ex04",
    tipo: "lacuna_unica",
    enunciado: `Leia o texto e marque a ideia principal:

"O FGTS pode ser sacado apenas em situações específicas previstas em lei. As mais comuns são demissão sem justa causa, compra do primeiro imóvel e doenças graves como câncer ou HIV. Fora dessas situações, o dinheiro fica bloqueado. Há também o saque-aniversário, modalidade voluntária que permite retirar parte do saldo anualmente."

A ideia principal deste texto é:`,
    opcoes: [
      "O FGTS só pode ser sacado em situações específicas previstas em lei.",
      "A demissão sem justa causa permite sacar o saldo completo.",
      "O saque-aniversário é uma modalidade voluntária anual.",
      "Os trabalhadores brasileiros têm muitos direitos financeiros que desconhecem.",
    ],
    gabarito: "O FGTS só pode ser sacado em situações específicas previstas em lei.",
    armadilhaId: "ideia_secundaria_como_principal",
    feedbackAcerto:
      "Correto. A **regra geral do FGTS** — saque só em situações específicas — é o ponto central. A demissão sem justa causa é apenas um exemplo das situações (ideia de apoio). O saque-aniversário é outro exemplo. Nenhum deles resume o texto inteiro.",
    feedbackErro: [
      "O texto fala de demissão, doença, saque-aniversário. Qual é a regra geral que engloba todos esses casos?",
      "Cada situação específica (demissão, doença, saque-aniversário) é um exemplo que apoia a ideia principal. Qual é essa ideia maior?",
      "É **'O FGTS só pode ser sacado em situações específicas.'** Demissão e saque-aniversário são exemplos dessas situações — existem para explicar a regra, não para substituí-la.",
    ],
  },

  // ideia_ampla_demais (ex05-06)

  {
    slug: "b2-ex05",
    tipo: "lacuna_unica",
    enunciado: `Leia o texto e marque a ideia principal:

"O departamento de TI identificou três acessos não autorizados ao sistema interno nos últimos dois meses. A investigação mostrou que todos ocorreram por computadores que ficaram logados sem usuário presente. A partir de agora, o sistema será encerrado automaticamente após dez minutos de inatividade. Funcionários que precisarem de acesso prolongado devem solicitar exceção ao setor de TI."

A ideia principal deste texto é:`,
    opcoes: [
      "A empresa adotou bloqueio automático do sistema para evitar acessos não autorizados.",
      "Foram detectados três acessos não autorizados nos últimos dois meses.",
      "Computadores logados sem usuário presente são um risco de segurança.",
      "A segurança digital é cada vez mais importante para as empresas.",
    ],
    gabarito:
      "A empresa adotou bloqueio automático do sistema para evitar acessos não autorizados.",
    armadilhaId: "ideia_ampla_demais",
    feedbackAcerto:
      "Correto. A **nova medida de bloqueio automático** é o ponto central — o que o texto comunica como novidade. O número de acessos (3) é um detalhe que motivou a medida. O risco de computadores logados é o motivo. A frase sobre segurança digital em geral poderia ser de qualquer texto sobre o assunto — é ampla demais.",
    feedbackErro: [
      "A última opção é verdadeira, mas poderia ser a ideia principal de qualquer texto sobre segurança digital. Esse texto fala de algo mais específico. O quê?",
      "Se uma opção poderia resumir dezenas de textos diferentes, ela é ampla demais. Qual opção resume exatamente esse comunicado?",
      "É **'A empresa adotou bloqueio automático do sistema.'** Isso é o que o texto anuncia de novo. A frase sobre segurança digital é genérica — não resume este texto em particular.",
    ],
  },

  {
    slug: "b2-ex06",
    tipo: "lacuna_unica",
    enunciado: `Leia o texto e marque a ideia principal:

"Fica estabelecido que a realização de horas extras precisa de autorização prévia do gestor imediato, solicitada com no mínimo 24 horas de antecedência. Pedidos feitos no próprio dia não serão autorizados, exceto em emergências documentadas. O descumprimento implicará no não pagamento das horas. A medida visa organizar o orçamento e evitar excesso de jornada."

A ideia principal deste texto é:`,
    opcoes: [
      "Horas extras só são permitidas com autorização prévia do gestor com pelo menos 24 horas de antecedência.",
      "Pedidos feitos no mesmo dia da hora extra não são aceitos.",
      "A medida busca organizar o orçamento e evitar excesso de jornada.",
      "A legislação trabalhista brasileira regula o direito às horas extras.",
    ],
    gabarito:
      "Horas extras só são permitidas com autorização prévia do gestor com pelo menos 24 horas de antecedência.",
    armadilhaId: "ideia_ampla_demais",
    feedbackAcerto:
      "Correto. A **nova regra de horas extras** desta empresa é o ponto central. Os pedidos no mesmo dia são uma consequência da regra (detalhe). O objetivo da medida é o contexto (ideia secundária). A frase sobre legislação trabalhista em geral não tem a ver com este texto específico — é ampla demais.",
    feedbackErro: [
      "A última opção fala da legislação brasileira em geral. Mas esse texto é sobre uma norma interna desta empresa. Qual opção resume exatamente o que o texto estabelece?",
      "Quando uma opção vai além do que o texto diz, ela é ampla demais. Este texto não fala de 'legislação trabalhista brasileira'. Fala do quê?",
      "É **'Horas extras precisam de autorização prévia com 24 horas de antecedência.'** Isso é a regra estabelecida pelo texto. A frase sobre legislação é genérica e vai além do que o texto comunica.",
    ],
  },

  // ── Fase 2: Distractores mistos ─────────────────────────────────────────

  {
    slug: "b2-ex07",
    tipo: "lacuna_unica",
    enunciado: `Leia o texto e marque a ideia principal:

"A licença-maternidade garante à trabalhadora 120 dias de afastamento remunerado após o parto. Empresas que aderirem ao programa Empresa Cidadã podem estender esse prazo para 180 dias. Durante a licença, a funcionária não pode ser demitida sem justa causa. O benefício é pago pelo INSS, não pela empresa diretamente."

A ideia principal deste texto é:`,
    opcoes: [
      "A licença-maternidade garante 120 dias remunerados, com possibilidade de extensão para 180.",
      "O benefício é pago pelo INSS, não pela empresa.",
      "Empresas do Empresa Cidadã podem ampliar a licença para 180 dias.",
      "A maternidade é um direito fundamental das mulheres trabalhadoras.",
    ],
    gabarito:
      "A licença-maternidade garante 120 dias remunerados, com possibilidade de extensão para 180.",
    armadilhaId: "detalhe_como_principal",
    feedbackAcerto:
      "Correto. O texto é sobre **o que é e o que garante a licença-maternidade** — duração e possibilidade de extensão. O pagamento pelo INSS é um detalhe de como funciona. A extensão para 180 dias é uma das possibilidades (ideia secundária). A frase sobre direito fundamental é ampla demais.",
    feedbackErro: [
      "O texto informa o prazo, quem paga e o que protege. O que une tudo isso? Qual é a mensagem principal sobre a licença-maternidade?",
      "Quem paga (INSS) e por quanto tempo (180 dias no Empresa Cidadã) são detalhes ou alternativas. A ideia principal é a regra geral. Qual é ela?",
      "É **'A licença-maternidade garante 120 dias remunerados, com possibilidade de extensão.'** Isso resume o texto. O resto são detalhes e complementos.",
    ],
  },

  {
    slug: "b2-ex08",
    tipo: "lacuna_unica",
    enunciado: `Leia o texto e marque a ideia principal:

"A avaliação de desempenho anual acontecerá em novembro. O resultado define os aumentos por mérito do próximo ano e influencia as indicações para promoções. A avaliação é feita pelo gestor direto e inclui uma autoavaliação do próprio funcionário. Quem não participar da autoavaliação até o prazo terá a nota final reduzida em um ponto."

A ideia principal deste texto é:`,
    opcoes: [
      "A avaliação de novembro define os aumentos por mérito e as promoções do próximo ano.",
      "Quem não fizer a autoavaliação perde um ponto na nota final.",
      "A avaliação inclui uma autoavaliação feita pelo próprio funcionário.",
      "Avaliar o desempenho dos funcionários é essencial para o crescimento da empresa.",
    ],
    gabarito:
      "A avaliação de novembro define os aumentos por mérito e as promoções do próximo ano.",
    armadilhaId: "ideia_secundaria_como_principal",
    feedbackAcerto:
      "Correto. **O impacto da avaliação** — o que ela define — é o ponto central que o funcionário precisa saber. A penalidade por não fazer a autoavaliação é um detalhe da consequência. A autoavaliação é parte do processo (ideia de apoio). A frase sobre crescimento da empresa é ampla demais.",
    feedbackErro: [
      "Por que o texto foi escrito? O que o funcionário precisa entender sobre a avaliação de novembro? Essa é a ideia principal.",
      "A autoavaliação e a penalidade são partes do processo. O que essa avaliação toda vai determinar no fim? Esse é o ponto central.",
      "É **'A avaliação define os aumentos por mérito e as promoções.'** Esse é o motivo pelo qual o texto existe. O resto explica como funciona.",
    ],
  },

  {
    slug: "b2-ex09",
    tipo: "lacuna_unica",
    enunciado: `Leia o texto e marque a ideia principal:

"O horário do almoço no refeitório será alterado a partir de segunda-feira. O primeiro turno passará das 11h30 para as 12h, e o segundo turno, das 12h para as 12h30. A mudança foi necessária para adequar o fluxo ao novo sistema de controle de acesso. Funcionários com necessidade especial de horário devem informar ao RH até sexta."

A ideia principal deste texto é:`,
    opcoes: [
      "Os horários do almoço no refeitório serão adiados em 30 minutos a partir de segunda-feira.",
      "Funcionários com necessidade especial devem avisar o RH até sexta.",
      "A mudança é necessária por causa do novo sistema de controle de acesso.",
      "A organização do horário de almoço melhora a produtividade dos trabalhadores.",
    ],
    gabarito:
      "Os horários do almoço no refeitório serão adiados em 30 minutos a partir de segunda-feira.",
    armadilhaId: "ideia_ampla_demais",
    feedbackAcerto:
      "Correto. A **mudança de horário do almoço** é o que o texto comunica. A instrução para funcionários com necessidade especial é um detalhe do processo. O motivo (novo sistema de acesso) é a justificativa. A frase sobre produtividade é genérica e não resume este comunicado.",
    feedbackErro: [
      "O que mudou? Essa é sempre uma boa pergunta para encontrar a ideia principal de um comunicado. O quê, exatamente, vai ser diferente a partir de segunda?",
      "O motivo da mudança (sistema de acesso) e a instrução para casos especiais são informações secundárias. O que o texto anuncia de principal?",
      "É **'Os horários do almoço serão adiados em 30 minutos.'** Isso é o que muda. O resto explica o porquê e o que fazer em casos especiais.",
    ],
  },

  {
    slug: "b2-ex10",
    tipo: "lacuna_unica",
    enunciado: `Leia o texto e marque a ideia principal:

"O sindicato convoca todos os trabalhadores para uma assembleia geral no próximo sábado, às 9h, na sede do sindicato. A pauta é a análise da proposta de acordo coletivo apresentada pela empresa. A presença é importante porque as deliberações valem para todos os trabalhadores da categoria, mesmo para quem não comparecer."

A ideia principal deste texto é:`,
    opcoes: [
      "O sindicato convoca os trabalhadores para votar a proposta de acordo coletivo na assembleia de sábado.",
      "A assembleia acontece às 9h na sede do sindicato.",
      "As deliberações valem para todos, mesmo para quem não comparecer.",
      "A organização sindical é fundamental para a defesa dos direitos dos trabalhadores.",
    ],
    gabarito:
      "O sindicato convoca os trabalhadores para votar a proposta de acordo coletivo na assembleia de sábado.",
    armadilhaId: "detalhe_como_principal",
    feedbackAcerto:
      "Correto. A **convocação para votar o acordo coletivo** é o ponto central. O horário e o local (9h, sede do sindicato) são detalhes logísticos. O fato de que as deliberações valem para todos é a justificativa da convocação (ideia secundária). A frase sobre organização sindical é genérica.",
    feedbackErro: [
      "Horário e local são detalhes importantes, mas não são o ponto central. Para que o sindicato está convocando os trabalhadores?",
      "O texto quer dizer mais do que 'tem uma reunião sábado às 9h'. Qual é o propósito da convocação?",
      "É **'O sindicato convoca para votar o acordo coletivo.'** O horário e o local são apenas onde e quando isso acontece.",
    ],
  },

  {
    slug: "b2-ex11",
    tipo: "lacuna_unica",
    enunciado: `Leia o texto e marque a ideia principal:

"Funcionários que precisarem se ausentar por motivo de saúde devem apresentar atestado médico em até 48 horas após o retorno. Atestados entregues fora desse prazo não serão aceitos e os dias de ausência serão descontados. O atestado deve especificar o CID e o número de dias de afastamento. Atestados sem CID podem ser recusados pelo RH."

A ideia principal deste texto é:`,
    opcoes: [
      "O atestado médico precisa ser entregue em até 48 horas após o retorno, com CID, ou os dias serão descontados.",
      "Atestados sem CID podem ser recusados pelo RH.",
      "O atestado deve especificar o número de dias de afastamento.",
      "A saúde dos trabalhadores é responsabilidade compartilhada entre empresa e funcionário.",
    ],
    gabarito:
      "O atestado médico precisa ser entregue em até 48 horas após o retorno, com CID, ou os dias serão descontados.",
    armadilhaId: "ideia_secundaria_como_principal",
    feedbackAcerto:
      "Correto. O texto comunica **a regra completa do atestado**: prazo + requisito (CID) + consequência (desconto). Cada elemento sozinho é uma parte da regra, não a regra inteira. A frase sobre saúde como responsabilidade compartilhada é genérica e não resume esta norma.",
    feedbackErro: [
      "O texto tem várias regras sobre o atestado. Qual é a mensagem geral que une todas elas?",
      "O CID e o número de dias são requisitos do atestado (partes da regra). A ideia principal inclui esses requisitos e o que acontece se não forem cumpridos.",
      "É **'O atestado precisa ser entregue em até 48 horas, com CID, ou os dias serão descontados.'** Isso resume a norma inteira.",
    ],
  },

  {
    slug: "b2-ex12",
    tipo: "lacuna_unica",
    enunciado: `Leia o texto e marque a ideia principal:

"A empresa está abrindo inscrições para o plano de previdência complementar até o dia 30. O plano permite que o funcionário contribua com um percentual do salário, que será dobrado pela empresa. Quem não se inscrever neste ciclo terá de esperar até o próximo ano. O plano é gerido por uma instituição financeira independente."

A ideia principal deste texto é:`,
    opcoes: [
      "A empresa está abrindo inscrições para um plano de previdência complementar com contrapartida.",
      "O prazo de inscrição vai até o dia 30.",
      "Quem não se inscrever agora terá de esperar até o próximo ano.",
      "Planejar a aposentadoria é uma das decisões financeiras mais importantes da vida.",
    ],
    gabarito:
      "A empresa está abrindo inscrições para um plano de previdência complementar com contrapartida.",
    armadilhaId: "detalhe_como_principal",
    feedbackAcerto:
      "Correto. A **abertura de inscrições para o plano com contrapartida da empresa** é a novidade central. O prazo (dia 30) é um detalhe logístico. A consequência de não se inscrever é uma informação de apoio. A frase sobre aposentadoria é genérica.",
    feedbackErro: [
      "O texto anuncia algo novo para os funcionários. O prazo é importante, mas não é o centro da notícia. O que a empresa está oferecendo?",
      "O prazo (dia 30) é um detalhe de quando. A ideia principal é o quê. O que a empresa está oferecendo?",
      "É **'A empresa está abrindo inscrições para um plano de previdência com contrapartida.'** A contrapartida (a empresa dobra a contribuição) é o que torna isso relevante — é o coração da notícia.",
    ],
  },

  // ── Fase 3: Interleaved, textos mais longos / ideia implícita ───────────

  {
    slug: "b2-ex13",
    tipo: "lacuna_unica",
    enunciado: `Leia o texto e marque a ideia principal:

"Os acidentes de trabalho raramente têm uma única causa. Na maioria dos casos investigados, existe uma combinação de fatores: o trabalhador estava com sono por excesso de horas, o equipamento não havia passado pela manutenção programada, e o ambiente tinha iluminação insuficiente. Isolar apenas um fator para culpar é conveniente, mas não resolve o problema. Empresas que reduziram acidentes de forma consistente investiram em três frentes ao mesmo tempo: controle de jornada, manutenção preventiva e ergonomia."

A ideia principal deste texto é:`,
    opcoes: [
      "Acidentes de trabalho têm múltiplas causas e só são reduzidos quando a empresa age em várias frentes.",
      "A iluminação insuficiente foi um dos fatores identificados nos acidentes.",
      "Empresas que reduziram acidentes investiram em jornada, manutenção e ergonomia.",
      "A saúde e a segurança no trabalho são direitos fundamentais de todo trabalhador.",
    ],
    gabarito:
      "Acidentes de trabalho têm múltiplas causas e só são reduzidos quando a empresa age em várias frentes.",
    armadilhaId: "ideia_secundaria_como_principal",
    feedbackAcerto:
      "Correto. O texto defende que **acidentes têm múltiplas causas** — essa é a ideia que organiza tudo. A iluminação é um exemplo de fator (detalhe). As três frentes de investimento (jornada, manutenção, ergonomia) são a solução proposta (ideia secundária que apoia a principal). A frase sobre direitos é genérica.",
    feedbackErro: [
      "Neste texto, a ideia principal não está na primeira frase. O texto todo está argumentando o quê? Qual é a mensagem que organiza os exemplos e a solução?",
      "As três frentes de investimento são a solução — mas a solução existe por causa de um problema. Qual é o problema central que o texto identifica?",
      "É **'Acidentes têm múltiplas causas e só são reduzidos quando a empresa age em várias frentes.'** Os exemplos e a solução existem para sustentar essa afirmação central.",
    ],
  },

  {
    slug: "b2-ex14",
    tipo: "lacuna_unica",
    enunciado: `Leia o texto e marque a ideia principal:

"O setor de RH informa que as inscrições para os cursos de capacitação do segundo semestre estão abertas. Há vagas para cursos nas áreas de soldagem, eletricidade e logística, além de um curso de informática básica. A participação é voluntária, mas os certificados contam pontos na avaliação de desempenho. Funcionários interessados devem preencher o formulário na intranet até o dia 15."

A ideia principal deste texto é:`,
    opcoes: [
      "O RH abriu inscrições para cursos de capacitação que valem pontos na avaliação de desempenho.",
      "O prazo de inscrição é dia 15, pelo formulário na intranet.",
      "Os cursos cobrem soldagem, eletricidade, logística e informática básica.",
      "A qualificação profissional é o melhor investimento que um trabalhador pode fazer.",
    ],
    gabarito:
      "O RH abriu inscrições para cursos de capacitação que valem pontos na avaliação de desempenho.",
    armadilhaId: "ideia_ampla_demais",
    feedbackAcerto:
      "Correto. O texto anuncia **inscrições abertas para cursos que contam na avaliação**. O prazo e a intranet são instruções de como se inscrever (detalhe). A lista de cursos é o que está disponível (ideia secundária). A frase sobre qualificação profissional é genérica.",
    feedbackErro: [
      "O texto está abrindo inscrições. Por que isso é relevante para o funcionário? Qual é o incentivo principal para se inscrever?",
      "O prazo e os tipos de curso são informações de apoio. O que o comunicado quer dizer, no geral?",
      "É **'O RH abriu inscrições para cursos que valem pontos na avaliação.'** O fato de contar na avaliação é a informação que torna o comunicado relevante — não pode ficar de fora da ideia principal.",
    ],
  },

  {
    slug: "b2-ex15",
    tipo: "lacuna_unica",
    enunciado: `Leia o texto e marque a ideia principal:

"O uso do celular pessoal durante o expediente tem gerado discussões. Alguns gestores alegam que o aparelho distrai e reduz a produtividade. Outros argumentam que proibir totalmente gera resistência e impede o trabalhador de resolver problemas urgentes da família. A empresa optou por uma política intermediária: celular permitido durante o horário de almoço e nas pausas, mas guardado durante o expediente. Quem precisar atender uma emergência pode sair brevemente da área de trabalho."

A ideia principal deste texto é:`,
    opcoes: [
      "A empresa adotou uma política de celular: permitido nas pausas, guardado durante o expediente.",
      "Alguns gestores acreditam que o celular reduz a produtividade.",
      "Quem precisar atender emergências pode sair brevemente da área de trabalho.",
      "O uso de celular no trabalho é um desafio crescente para as empresas.",
    ],
    gabarito:
      "A empresa adotou uma política de celular: permitido nas pausas, guardado durante o expediente.",
    armadilhaId: "ideia_ampla_demais",
    feedbackAcerto:
      "Correto. Neste texto, a ideia principal não está na primeira frase — ela aparece no meio. O texto apresenta um debate e depois anuncia a **decisão da empresa**. Os argumentos dos gestores são o contexto do debate. A instrução de emergência é um detalhe da política. A frase sobre desafio crescente é genérica.",
    feedbackErro: [
      "Nem sempre a ideia principal está na primeira frase. O texto discute um problema e depois anuncia algo. O que a empresa decidiu fazer?",
      "O texto apresenta dois lados de um debate e então toma uma posição. Qual é a decisão que o texto anuncia?",
      "É **'A empresa adotou uma política: celular permitido nas pausas, guardado no expediente.'** O debate no início é o contexto. A decisão é a ideia principal.",
    ],
  },

  {
    slug: "b2-ex16",
    tipo: "lacuna_unica",
    enunciado: `Leia o texto e marque a ideia principal:

"Uma paralisação parcial do transporte público afetou a cidade na última quinta-feira. Segundo a concessionária, 60% das linhas de ônibus operaram normalmente e apenas 18 linhas foram suspensas. Os trabalhadores do transporte reivindicam reajuste salarial de 12% e melhores condições de segurança nos terminais. A prefeitura informou que as negociações continuam e que uma nova rodada de conversas está marcada para esta semana."

A ideia principal deste texto é:`,
    opcoes: [
      "Trabalhadores do transporte fizeram greve parcial reivindicando reajuste e melhores condições.",
      "60% das linhas de ônibus operaram normalmente durante a paralisação.",
      "A prefeitura marcou nova rodada de negociações para esta semana.",
      "As condições de trabalho nos transportes públicos brasileiros precisam melhorar.",
    ],
    gabarito:
      "Trabalhadores do transporte fizeram greve parcial reivindicando reajuste e melhores condições.",
    armadilhaId: "detalhe_como_principal",
    feedbackAcerto:
      "Correto. O texto é sobre **a greve e o que os trabalhadores querem**. O percentual de 60% é um detalhe concreto que fica fácil na memória — mas é apenas o dado sobre o impacto, não o ponto da notícia. A nova rodada de negociações é uma consequência (ideia secundária). A frase sobre condições nos transportes é genérica.",
    feedbackErro: [
      "O número 60% ficou na memória? Números específicos são fáceis de lembrar, mas raramente são a ideia principal. Sobre o que é essa notícia?",
      "O impacto (60% das linhas funcionando) e a próxima reunião são detalhes sobre a greve. A ideia principal é a própria greve — quem, por quê.",
      "É **'Trabalhadores fizeram greve parcial reivindicando reajuste e melhores condições.'** O 60% é um detalhe do impacto. Os números concretos atraem atenção, mas costumam ser detalhes.",
    ],
  },
];
