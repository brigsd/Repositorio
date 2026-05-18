import type { ExercicioGerado } from "./tipos";

export const EXERCICIOS_B4: ExercicioGerado[] = [
  // ─────────────────────────────────────────────────────────────
  // FASE 1 — Prática bloqueada por tipo de armadilha (ex01–06)
  // Ironia verbal (01–02) · Quebra de expectativa (03–04) · Ambiguidade (05–06)
  // Sequência por carga cognitiva: ironia = 1 nível de leitura extra;
  // quebra = sequencial (setup→virada, um sentido de cada vez);
  // ambiguidade = simultâneo (dois sentidos ativos ao mesmo tempo → maior carga).
  // ─────────────────────────────────────────────────────────────

  {
    slug: "b4-ex01",
    tipo: "lacuna_unica",
    armadilhaId: "ironia_verbal",
    enunciado: `João chegou atrasado pela terceira vez na mesma semana. O chefe o chamou na frente da equipe e disse: "Que pontualidade exemplar, João. Sei que posso contar com você."

O sentido real da fala do chefe é:`,
    opcoes: [
      "Uma crítica ao atraso repetido, disfarçada de elogio.",
      "Um elogio sincero pela pontualidade de João.",
      "Um incentivo para que João melhore sua pontualidade.",
      "Uma forma educada de não expor João diante dos colegas.",
    ],
    gabarito: "Uma crítica ao atraso repetido, disfarçada de elogio.",
    feedbackAcerto:
      "**Correto.** O chefe usou ironia verbal: as palavras dizem o oposto do que significam. \"Pontualidade exemplar\" dito para quem chegou atrasado três vezes não é elogio — é crítica. O sinal está no contexto: a situação (três atrasos) contradiz diretamente as palavras (elogio à pontualidade).",
    feedbackErro: [
      "O chefe acabou de ver João chegar atrasado pela terceira vez. Faz sentido que ele esteja elogiando a pontualidade de verdade?",
      "Quando o contexto e as palavras são opostos (atraso versus 'pontualidade exemplar'), o texto está usando ironia verbal: as palavras dizem o contrário do que significam.",
      "**Ironia verbal:** o chefe elogiou a pontualidade de alguém que chegou atrasado três vezes. O elogio é falso — é crítica disfarçada. O contexto (três atrasos) revela que as palavras de elogio na verdade punem.",
    ],
  },

  {
    slug: "b4-ex02",
    tipo: "lacuna_unica",
    armadilhaId: "ironia_verbal",
    enunciado: `A equipe entregou o relatório mensal com cinco erros de cálculo e dados desatualizados. A supervisora leu, fez uma pausa e escreveu no grupo: "Perfeito, como sempre. Esse é o padrão de qualidade que nos diferencia."

A ironia presente na mensagem da supervisora reside em:`,
    opcoes: [
      "As palavras de qualidade foram usadas para criticar um trabalho cheio de falhas.",
      "A supervisora estava tentando motivar a equipe apesar dos erros.",
      "A supervisora reconheceu o esforço da equipe mesmo com os problemas.",
      "O texto expressa elogio sincero ao padrão de trabalho da equipe.",
    ],
    gabarito:
      "As palavras de qualidade foram usadas para criticar um trabalho cheio de falhas.",
    feedbackAcerto:
      "**Correto.** A supervisora usou ironia verbal clássica: \"perfeito\" e \"padrão de qualidade\" ditos logo após cinco erros de cálculo e dados desatualizados. O contexto (trabalho com falhas) e as palavras (elogio à qualidade) são incompatíveis — essa incompatibilidade é a ironia.",
    feedbackErro: [
      "O relatório tinha cinco erros de cálculo e dados desatualizados. Qual supervisora diria sinceramente 'perfeito, como sempre' depois disso?",
      "Quando alguém usa palavras de elogio imediatamente após um fracasso, geralmente não é elogio — é ironia verbal. O contraste entre o erro e o elogio é o sinal.",
      "**Ironia verbal:** 'Perfeito, como sempre' dito após um relatório cheio de erros não é elogio. É crítica usando palavras de elogio. Quanto mais elaborado o elogio num contexto de falha, mais forte a ironia.",
    ],
  },

  {
    slug: "b4-ex03",
    tipo: "lacuna_unica",
    armadilhaId: "quebra_expectativa",
    enunciado: `Durante uma reunião que já durava três horas, um funcionário pediu a palavra:

"Tenho uma sugestão que vai economizar tempo, dinheiro e esforço de todo mundo."

A sala ficou em silêncio. Ele completou:

"Cancelem essa reunião."

O humor decorre principalmente do fato de que:`,
    opcoes: [
      "A grande solução prometida no início se revela ser encerrar a própria reunião.",
      "O funcionário sugeriu cancelar a reunião porque não queria trabalhar.",
      "A sugestão era válida, pois a reunião estava sendo improdutiva.",
      "A sala ficou em silêncio porque a sugestão foi surpreendente demais.",
    ],
    gabarito:
      "A grande solução prometida no início se revela ser encerrar a própria reunião.",
    feedbackAcerto:
      '**Correto.** O texto usa quebra de expectativa: o início (setup) constrói a expectativa de uma grande solução estratégica — "economizar tempo, dinheiro e esforço de todo mundo". A virada revela que a grande solução é... encerrar a própria reunião. O humor vem do contraste entre a grandiosidade prometida e a simplicidade (e autoironia) da resposta.',
    feedbackErro: [
      'O funcionário prometeu uma solução que vai "economizar tempo, dinheiro e esforço de todo mundo". Que tipo de solução você esperava quando ele disse isso?',
      "Quebra de expectativa funciona em duas etapas: o setup (o que o texto promete) e a virada (o que realmente acontece). O humor vem da distância entre as duas. Aqui, o setup prometia algo grandioso e a virada entregou algo completamente inesperado.",
      "**Quebra de expectativa:** o texto construiu a expectativa de uma grande ideia estratégica (setup) e a desfez com a sugestão de encerrar a própria reunião (virada). O humor está no contraste entre o que foi prometido e o que foi entregue.",
    ],
  },

  {
    slug: "b4-ex04",
    tipo: "lacuna_unica",
    armadilhaId: "quebra_expectativa",
    enunciado: `Um folheto de curso de culinária trazia o seguinte texto em destaque:

"Aprenda a cozinhar como um chef profissional. Técnicas exclusivas, resultados garantidos."

Em letras miúdas no rodapé:

"Chef profissional não incluído."

O efeito de sentido do folheto é produzido por:`,
    opcoes: [
      "A promessa de aprender como um chef é esvaziada pela informação de que o chef não faz parte do curso.",
      "O folheto é honesto ao informar que o curso não inclui aulas com chef.",
      "O curso é para iniciantes que não precisam de orientação de um chef.",
      "As letras miúdas explicam os detalhes do que está incluído no valor do curso.",
    ],
    gabarito:
      "A promessa de aprender como um chef é esvaziada pela informação de que o chef não faz parte do curso.",
    feedbackAcerto:
      '**Correto.** O folheto usa quebra de expectativa com ironia: o setup promete aprendizado com um chef profissional, e a virada (em letras miúdas) revela que o chef não está incluído. A piada está no contraste entre o que foi prometido em destaque e o que foi negado com discrição.',
    feedbackErro: [
      '"Aprenda a cozinhar como um chef." Mas o chef não está incluído. Então como exatamente você vai aprender como um chef?',
      "A quebra de expectativa aqui é intencional e irônica: o texto promete um resultado (cozinhar como chef) mas subtrai o elemento essencial para isso (o chef). A virada nas letras miúdas esvazia o que foi prometido em destaque.",
      "**Quebra de expectativa:** setup ('aprenda como um chef') + virada ('chef não incluído'). O humor vem de prometer o resultado sem incluir o meio. É uma estrutura clássica de ironia publicitária.",
    ],
  },

  {
    slug: "b4-ex05",
    tipo: "lacuna_unica",
    armadilhaId: "ambiguidade",
    enunciado: `Uma empresa de mudanças residenciais veiculou o seguinte anúncio:

"Mudamos tudo. Até o seu humor."

O efeito de sentido do anúncio é produzido pelo fato de que:`,
    opcoes: [
      '"Mudar" e "humor" funcionam nos sentidos de mudança de casa e de transformação do estado emocional ao mesmo tempo.',
      "A empresa promete que o processo de mudança não vai causar estresse.",
      "O anúncio usa linguagem informal para parecer mais próximo do cliente.",
      "A empresa garante que vai mudar todos os móveis sem danificar nada.",
    ],
    gabarito:
      '"Mudar" e "humor" funcionam nos sentidos de mudança de casa e de transformação do estado emocional ao mesmo tempo.',
    feedbackAcerto:
      '**Correto.** O anúncio usa ambiguidade intencional. "Mudamos tudo" refere-se tanto ao serviço de mudança de casa quanto à transformação geral. "Humor" reforça o duplo sentido: muda o humor ruim típico de uma mudança estressante. Os dois sentidos coexistem e se reforçam.',
    feedbackErro: [
      '"Mudamos tudo. Até o seu humor." — uma empresa de mudanças resolve o estresse mudando o quê, exatamente?',
      'Em propagandas com jogo de palavras, procure a palavra que tem dois sentidos igualmente válidos. "Mudar" e "humor" têm sentidos no campo do serviço (mudança de residência) e no campo emocional (mudar o estado de espírito). Os dois funcionam ao mesmo tempo.',
      '**Ambiguidade:** "mudar" significa tanto realizar a mudança de casa quanto transformar algo. "Humor" ativa o sentido emocional. Os dois sentidos funcionam simultaneamente — é isso que cria o efeito do anúncio.',
    ],
  },

  {
    slug: "b4-ex06",
    tipo: "lacuna_unica",
    armadilhaId: "ambiguidade",
    enunciado: `Uma farmácia colocou esta placa na entrada:

"Problemas com pressão? Pode falar com a gente."

O humor da placa vem do fato de que:`,
    opcoes: [
      '"Pressão" pode ser a pressão arterial (serviço da farmácia) e a pressão do cotidiano (estresse), e os dois sentidos funcionam ao mesmo tempo.',
      "A farmácia atende clientes com pressão alta e oferece medicamentos específicos.",
      "A placa usa linguagem acolhedora para aproximar a farmácia dos clientes.",
      "A frase indica que os farmacêuticos têm formação para dar orientação médica.",
    ],
    gabarito:
      '"Pressão" pode ser a pressão arterial (serviço da farmácia) e a pressão do cotidiano (estresse), e os dois sentidos funcionam ao mesmo tempo.',
    feedbackAcerto:
      '**Correto.** A placa usa ambiguidade intencional. "Pressão" ativa dois sentidos: pressão arterial (o serviço real da farmácia) e pressão do dia a dia, estresse (sentido figurado). A frase funciona nos dois sentidos ao mesmo tempo — quem tem hipertensão e quem está sobrecarregado se sentiriam chamados pela placa.',
    feedbackErro: [
      'Uma farmácia que resolve "pressão" — pressão de que tipo, exatamente? Pressão arterial ou pressão do dia a dia?',
      'Quando uma palavra tem dois sentidos válidos no mesmo contexto e nenhum exclui o outro, é ambiguidade. "Pressão" funciona como pressão arterial (serviço da farmácia) e como pressão/estresse (sentido emocional). Os dois estão ativos ao mesmo tempo.',
      '**Ambiguidade:** "pressão" tem dois sentidos igualmente válidos aqui: pressão arterial (medicamentos) e pressão emocional do cotidiano. A placa funciona para os dois públicos simultaneamente — é isso que cria o efeito.',
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // FASE 2 — Tipos misturados, sempre com distrator literal (ex07–12)
  // ─────────────────────────────────────────────────────────────

  {
    slug: "b4-ex07",
    tipo: "lacuna_unica",
    armadilhaId: "ironia_verbal",
    enunciado: `Depois de uma reunião de uma hora que poderia ter sido um e-mail de três linhas, a coordenadora escreveu no grupo da equipe:

"Que uso eficiente do nosso tempo hoje. Muito produtivo mesmo."

A frase da coordenadora expressa:`,
    opcoes: [
      "Crítica irônica ao desperdício de tempo da reunião.",
      "Satisfação genuína com o resultado da reunião.",
      "Reconhecimento do esforço de todos na discussão.",
      "Uma forma de encerrar a conversa de modo positivo.",
    ],
    gabarito: "Crítica irônica ao desperdício de tempo da reunião.",
    feedbackAcerto:
      '**Correto.** "Eficiente" e "produtivo" ditos após uma reunião longa e desnecessária são ironia verbal. O contexto (reunião que poderia ser um e-mail) contradiz os elogios. A coordenadora usou palavras de aprovação para criticar.',
    feedbackErro: [
      "A coordenadora acabou de sair de uma reunião de uma hora que poderia ter sido um e-mail de três linhas. Ela realmente acha que o tempo foi bem usado?",
      'Quando alguém usa palavras positivas ("eficiente", "produtivo") imediatamente após uma situação negativa (reunião inútil), o contraste indica ironia verbal.',
      "**Ironia verbal:** as palavras de elogio (eficiente, produtivo) foram usadas num contexto de desperdício de tempo. O contraste entre o que aconteceu e o que foi dito é o sinal da ironia.",
    ],
  },

  {
    slug: "b4-ex08",
    tipo: "lacuna_unica",
    armadilhaId: "ambiguidade",
    enunciado: `Uma academia de ginástica colocou este cartaz na recepção:

"Aqui você vai pagar para sofrer. E vai adorar."

O efeito de sentido do cartaz é criado porque:`,
    opcoes: [
      '"Sofrer" ativa tanto o esforço físico do treino quanto o sofrimento emocional, e o contraste com "adorar" reforça o duplo sentido.',
      "A academia avisa honestamente que os treinos são difíceis.",
      "O cartaz usa humor para preparar o aluno para treinos intensos.",
      "A academia promete que o cliente vai gostar de treinar mesmo sofrendo.",
    ],
    gabarito:
      '"Sofrer" ativa tanto o esforço físico do treino quanto o sofrimento emocional, e o contraste com "adorar" reforça o duplo sentido.',
    feedbackAcerto:
      '**Correto.** O cartaz usa ambiguidade: "sofrer" funciona no sentido literal do esforço físico intenso e no sentido figurado de sofrimento em geral. O contraste com "adorar" reforça o jogo: a academia vende o paradoxo de pagar para se esforçar muito e ainda assim gostar. Os dois sentidos de "sofrer" coexistem.',
    feedbackErro: [
      '"Pagar para sofrer e adorar" — que tipo de sofrimento está em jogo aqui? Físico, emocional, ou os dois ao mesmo tempo?',
      'Quando uma palavra tem dois sentidos válidos no mesmo contexto, é ambiguidade intencional. "Sofrer" aqui ativa o esforço físico do treino e o sofrimento em geral. O humor vem de os dois sentidos coexistirem.',
      '**Ambiguidade:** "sofrer" funciona como esforço físico (treino duro) e como sofrimento geral. O cartaz usa esse duplo sentido para criar humor e atrair pelo paradoxo de pagar para se esforçar intensamente.',
    ],
  },

  {
    slug: "b4-ex09",
    tipo: "lacuna_unica",
    armadilhaId: "quebra_expectativa",
    enunciado: `Um post de motivação profissional dizia:

"Acorde cedo. Trabalhe duro. Nunca desista. Invista em você."

Embaixo, a legenda da foto: "Foto tirada às 14h de uma quarta-feira."

O humor do post vem de:`,
    opcoes: [
      "A legenda contradiz a mensagem motivacional ao revelar que a foto foi tirada num horário incompatível com o conselho de acordar cedo.",
      "A pessoa não seguiu os próprios conselhos que deu.",
      "O post combina motivação com humor para engajar mais pessoas.",
      "A legenda explica quando a foto foi tirada para dar contexto ao post.",
    ],
    gabarito:
      "A legenda contradiz a mensagem motivacional ao revelar que a foto foi tirada num horário incompatível com o conselho de acordar cedo.",
    feedbackAcerto:
      "**Correto.** O post usa quebra de expectativa com ironia: o setup é uma lista de conselhos motivacionais clássicos, e a virada (legenda) revela que a foto foi tirada às 14h de uma quarta — o que contradiz diretamente o primeiro conselho. O humor vem do contraste entre o que foi pregado e a evidência do que realmente aconteceu.",
    feedbackErro: [
      '"Acorde cedo" — e a foto foi tirada às 14h de uma quarta-feira. O que isso diz sobre quem deu o conselho?',
      "A quebra de expectativa aqui é entre o setup (conselho de acordar cedo, trabalhar duro) e a virada (foto tirada às 14h numa quarta). A legenda contradiz o conselho e revela a ironia.",
      "**Quebra de expectativa:** o setup (conselhos motivacionais) criou a expectativa de um exemplo a seguir, e a virada (foto às 14h de quarta) desfez essa expectativa ao contradizer diretamente o primeiro conselho.",
    ],
  },

  {
    slug: "b4-ex10",
    tipo: "lacuna_unica",
    armadilhaId: "ironia_verbal",
    enunciado: `A funcionária chegou ao trabalho com uma xícara enorme de café e olheiras visíveis. O colega comentou em voz alta:

"Nossa, que disposição! Pronta para conquistar o mundo hoje."

A fala do colega é:`,
    opcoes: [
      "Ironia verbal: as palavras de disposição foram usadas para comentar a aparência de cansaço.",
      "Um elogio sincero à dedicação da funcionária.",
      "Uma tentativa de animar a colega que estava com sono.",
      "Um comentário neutro sobre o estado da funcionária.",
    ],
    gabarito:
      "Ironia verbal: as palavras de disposição foram usadas para comentar a aparência de cansaço.",
    feedbackAcerto:
      '**Correto.** "Que disposição" e "pronta para conquistar o mundo" ditos para alguém com olheiras e café enorme é ironia verbal. As palavras dizem o oposto da situação observada. O sinal: café + olheiras versus disposição + conquistar o mundo — os dois lados são incompatíveis.',
    feedbackErro: [
      "A funcionária chegou com olheiras e um café enorme. O colega disse 'que disposição, pronta para conquistar o mundo'. Isso é elogio sincero?",
      'Quando as palavras elogiam ("disposição", "conquistar o mundo") mas a situação descreve o oposto (olheiras, café enorme de manhã), é ironia verbal.',
      "**Ironia verbal:** 'que disposição' dito para alguém que chegou claramente cansada é o oposto do que as palavras dizem. O contexto (olheiras, café) revela que o elogio é na verdade um comentário irônico sobre o cansaço.",
    ],
  },

  {
    slug: "b4-ex11",
    tipo: "lacuna_unica",
    armadilhaId: "ambiguidade",
    enunciado: `Uma loja de roupas usadas colocou esta placa na vitrine:

"Moda com história. Cada peça já viveu muito."

O efeito de sentido da placa é produzido porque:`,
    opcoes: [
      '"Já viveu muito" funciona tanto como indicativo de que as roupas são usadas quanto como valor positivo de experiência e autenticidade.',
      "A loja informa que as roupas são de segunda mão.",
      "A placa usa linguagem poética para descrever o acervo da loja.",
      "A expressão indica que as peças são antigas e podem estar desgastadas.",
    ],
    gabarito:
      '"Já viveu muito" funciona tanto como indicativo de que as roupas são usadas quanto como valor positivo de experiência e autenticidade.',
    feedbackAcerto:
      '**Correto.** A placa usa ambiguidade intencional. "Já viveu muito" pode significar que as roupas são usadas (sentido neutro ou potencialmente negativo) e que elas têm história, autenticidade e experiência (sentido positivo). A loja transformou uma possível desvantagem (roupa usada) em qualidade pela ambiguidade da expressão.',
    feedbackErro: [
      '"Já viveu muito" — roupas que já viveram muito são velhas e gastas, ou são autênticas e cheias de história? Pode ser os dois?',
      'A ambiguidade aqui está na expressão "já viveu muito": pode indicar desgaste (roupas usadas) ou valor (experiência, autenticidade). A loja usa os dois sentidos ao mesmo tempo para transformar uma característica neutra em vantagem.',
      '**Ambiguidade:** "já viveu muito" ativa dois sentidos — roupas que foram usadas antes (fato objetivo) e peças com história e autenticidade (valor agregado). A loja usa o duplo sentido para vender positivamente o que poderia ser visto como negativo.',
    ],
  },

  {
    slug: "b4-ex12",
    tipo: "lacuna_unica",
    armadilhaId: "quebra_expectativa",
    enunciado: `Uma palestra de autoajuda tinha o seguinte título no cartaz:

"Como ser feliz todos os dias sem esforço nenhum."

No primeiro slide, o palestrante mostrou:

"Slide 1: Isso não existe. Mas podemos conversar sobre o que funciona de verdade."

O humor e o efeito do texto vêm de:`,
    opcoes: [
      "O título criou a expectativa de uma promessa fácil, e o primeiro slide a desfez imediatamente ao revelar que ela não existe.",
      "O palestrante foi honesto sobre o conteúdo da palestra.",
      "O slide mostrou que felicidade exige esforço.",
      "O título era uma estratégia de marketing para atrair público.",
    ],
    gabarito:
      "O título criou a expectativa de uma promessa fácil, e o primeiro slide a desfez imediatamente ao revelar que ela não existe.",
    feedbackAcerto:
      "**Correto.** O texto usa quebra de expectativa com autoconsciência irônica: o título é um setup clássico de autoajuda (promessa fácil), e a virada no primeiro slide desfaz a promessa imediatamente. O humor vem da distância entre a expectativa criada pelo título e o esvaziamento imediato no slide.",
    feedbackErro: [
      '"Como ser feliz todos os dias sem esforço nenhum" — e o primeiro slide diz que isso não existe. O que o palestrante fez com a promessa do título?',
      "Quebra de expectativa: o título (setup) prometeu uma solução fácil; o primeiro slide (virada) negou essa promessa imediatamente. O humor está na velocidade e na autoironia do esvaziamento.",
      "**Quebra de expectativa:** o setup (título prometendo felicidade sem esforço) criou uma expectativa forte, e a virada (primeiro slide negando a promessa) a desfez na primeira frase. A estrutura é setup + virada imediata.",
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // FASE 3 — Casos mais sutis, textos maiores, ironia institucional (ex13–16)
  // ─────────────────────────────────────────────────────────────

  {
    slug: "b4-ex13",
    tipo: "lacuna_unica",
    armadilhaId: "ironia_verbal",
    enunciado: `O memorando interno da empresa dizia:

"Em resposta às sugestões dos colaboradores para melhorar o ambiente de trabalho, informamos que a diretoria analisou cuidadosamente todas as propostas. Após avaliação criteriosa, concluímos que o ambiente atual atende plenamente às necessidades da equipe."

A mensagem pode ser lida como irônica porque:`,
    opcoes: [
      "O texto usa linguagem de abertura e escuta (analisou, avaliação criteriosa) para comunicar que nada vai mudar, contradizendo o tom participativo.",
      "A diretoria não quis ouvir as sugestões dos colaboradores.",
      "O memorando foi escrito de forma burocrática para dificultar o entendimento.",
      "A empresa afirma que o ambiente é bom, o que pode ser verdade.",
    ],
    gabarito:
      "O texto usa linguagem de abertura e escuta (analisou, avaliação criteriosa) para comunicar que nada vai mudar, contradizendo o tom participativo.",
    feedbackAcerto:
      "**Correto.** Esse é um caso de ironia institucional mais sutil. O texto imita o gesto de escuta (analisou cuidadosamente, avaliação criteriosa) mas o conteúdo diz que nada vai mudar. A ironia está no contraste entre o processo descrito (participativo, cuidadoso) e o resultado real (nada muda). É o tipo de texto que parece resposta mas não é.",
    feedbackErro: [
      "Os colaboradores fizeram sugestões de melhoria. A empresa diz que avaliou tudo com cuidado. E a conclusão foi que tudo está ótimo. O que realmente aconteceu com as sugestões?",
      "Ironia verbal não precisa ser só elogio óbvio para crítica óbvia. Pode ser linguagem de participação usada para comunicar negação. O texto imita escuta mas entrega fechamento.",
      "**Ironia verbal institucional:** o memorando usa vocabulário de abertura e cuidado (analisou cuidadosamente, avaliação criteriosa) para comunicar que nada vai mudar. O contraste entre o processo descrito e o resultado entregue é a ironia.",
    ],
  },

  {
    slug: "b4-ex14",
    tipo: "lacuna_unica",
    armadilhaId: "ambiguidade",
    enunciado: `Um anúncio de uma empresa de consultoria financeira dizia:

"Cuidamos do seu dinheiro como se fosse nosso."

Uma leitora comentou: "Tomara que não seja verdade."

O comentário da leitora ativa qual sentido da frase que o anúncio não pretendia destacar?`,
    opcoes: [
      "Se cuidassem do dinheiro dos clientes como do próprio, poderiam gastar, investir mal ou guardar pouco — como muitas pessoas fazem com o próprio dinheiro.",
      "A leitora não confiava nas empresas de consultoria financeira.",
      "O anúncio prometeu algo que a empresa não consegue cumprir.",
      "A leitora interpretou a frase no sentido de que a empresa ficaria com o dinheiro.",
    ],
    gabarito:
      "Se cuidassem do dinheiro dos clientes como do próprio, poderiam gastar, investir mal ou guardar pouco — como muitas pessoas fazem com o próprio dinheiro.",
    feedbackAcerto:
      "**Correto.** O anúncio pretendia transmitir cuidado e dedicação, mas a frase tem ambiguidade: 'como se fosse nosso' pressupõe que todos cuidam muito bem do próprio dinheiro — o que nem sempre é verdade. A leitora ativou um sentido que sempre existiu na língua, mas que o anúncio não antecipou. A ambiguidade estava lá; ela apenas apontou.",
    feedbackErro: [
      "Como você cuida do seu próprio dinheiro? Sempre de forma perfeita, ou às vezes gasta mais do que devia, deixa parado, investe errado? A empresa prometeu cuidar do dinheiro dos clientes assim.",
      "'Como se fosse nosso' tem dois sentidos possíveis: com dedicação máxima (o que o anúncio pretendia dizer) e da forma como pessoas reais cuidam do próprio dinheiro (às vezes mal). Os dois sentidos coexistem na expressão — a leitora percebeu o que o anúncio não antecipou.",
      "**Ambiguidade:** 'como se fosse nosso' ativa dois sentidos — com dedicação máxima (sentido pretendido pelo anúncio) e da forma como as pessoas comuns cuidam do próprio dinheiro (que pode ser bem ou mal). A ambiguidade estava na expressão; a leitora a detectou.",
    ],
  },

  {
    slug: "b4-ex15",
    tipo: "lacuna_unica",
    armadilhaId: "quebra_expectativa",
    enunciado: `Uma mensagem circulou nas redes com o título:

"Dez hábitos das pessoas mais bem-sucedidas do mundo."

O texto listava:

"1. Acordam às 4h da manhã.
2. Meditam por uma hora.
3. Leem dois livros por semana.
[... mais seis hábitos semelhantes ...]
10. Raramente verificam as redes sociais."

Abaixo, um comentário com muitos curtidas:

"Acabei de ler isso no celular às 23h enquanto comia biscoito na cama."

O humor do comentário vem de:`,
    opcoes: [
      "O leitor revelou que estava fazendo exatamente o oposto dos hábitos listados enquanto lia o texto sobre esses hábitos.",
      "O leitor não consegue dormir cedo e por isso não vai ter sucesso.",
      "O texto sobre hábitos de sucesso é difícil de seguir na prática.",
      "O comentário mostrou que as pessoas preferem ler sobre hábitos do que praticá-los.",
    ],
    gabarito:
      "O leitor revelou que estava fazendo exatamente o oposto dos hábitos listados enquanto lia o texto sobre esses hábitos.",
    feedbackAcerto:
      "**Correto.** O comentário usa quebra de expectativa com autoironia: o setup (lista de hábitos de pessoas bem-sucedidas) cria a expectativa de reflexão ou inspiração, e a virada (leitor às 23h no celular comendo biscoito na cama) revela que ele está praticando o oposto de todos os hábitos no exato momento em que os lê. A consciência dessa contradição é o humor.",
    feedbackErro: [
      "O texto lista hábitos como acordar às 4h e raramente usar redes sociais. O leitor estava fazendo o quê enquanto lia isso?",
      "O humor da quebra de expectativa aqui está na autoironia: o comentário não critica o texto, ele revela o contraste cômico entre o ideal descrito e a realidade do momento da leitura.",
      "**Quebra de expectativa com autoironia:** o setup (hábitos de sucesso) cria a expectativa de inspiração, e a virada (leitor às 23h no celular comendo biscoito) expõe o contraste entre o que foi lido e como ele estava vivendo naquele exato momento.",
    ],
  },

  {
    slug: "b4-ex16",
    tipo: "lacuna_unica",
    armadilhaId: "ironia_verbal",
    enunciado: `Uma funcionária estava com dificuldades num sistema novo que a empresa havia implantado sem treinamento. Ela enviou um e-mail ao suporte:

"O sistema trava toda vez que tento registrar uma ocorrência. Já tentei três vezes hoje."

O suporte respondeu:

"Obrigado pelo contato. Seu feedback é muito valioso para nós. Estamos trabalhando para melhorar continuamente a experiência dos nossos usuários. Em caso de problemas, reinicie o sistema e tente novamente."

A ironia da resposta do suporte está em:`,
    opcoes: [
      "A resposta usa linguagem de atenção e melhoria contínua mas não resolve o problema relatado, entregando apenas instruções genéricas.",
      "O suporte foi educado mas não tinha a solução para o problema.",
      "A resposta foi gerada automaticamente e não foi lida por ninguém.",
      "O suporte pediu para a funcionária reiniciar, o que pode resolver o problema.",
    ],
    gabarito:
      "A resposta usa linguagem de atenção e melhoria contínua mas não resolve o problema relatado, entregando apenas instruções genéricas.",
    feedbackAcerto:
      "**Correto.** A resposta do suporte usa ironia verbal institucional: o vocabulário declara atenção e cuidado ('feedback valioso', 'melhoria contínua', 'experiência dos usuários') mas o conteúdo real entrega apenas uma instrução genérica que não responde ao problema específico. A organização usa palavras de escuta e cuidado enquanto, na prática, não atende — o contraste entre o que o texto declara e o que ele faz é a ironia.",
    feedbackErro: [
      "A funcionária explicou um problema específico (trava no registro de ocorrências). A resposta disse que o feedback é valioso e mandou reiniciar. O problema foi resolvido?",
      "Ironia verbal institucional: a linguagem declara atenção e resolução, mas o conteúdo entrega resposta genérica. O contraste entre o que o tom promete e o que o conteúdo entrega é a ironia. Textos de suporte e comunicados oficiais frequentemente usam esse padrão.",
      "**Ironia verbal:** 'feedback valioso', 'melhoria contínua', 'experiência dos usuários' — linguagem de cuidado e atenção deliberadamente usada para entregar uma resposta que não aborda o problema relatado. O vocabulário declara uma coisa; a prática entrega outra.",
    ],
  },
];
