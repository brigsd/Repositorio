/**
 * exercicios/b3-inferencia.ts
 *
 * Exercícios da Unidade B.3 — "Inferência: ler o que não está escrito" (16 ex.)
 *
 * Estrutura (Graesser 1994 + Kispal 2008 + Kornell & Bjork 2008):
 *   Fase 1 (b3-ex01–b3-ex06): bloqueado por tipo de inferência
 *     ex01-02: inferencia_causal (por que? — local, mais acessível)
 *     ex03-04: inferencia_implicita (o texto sugere que... — elaborativa)
 *     ex05-06: inferencia_conclusao (é possível concluir que... — global)
 *   Fase 2 (b3-ex07–b3-ex12): tipos mistos, sempre com "literal lure"
 *   Fase 3 (b3-ex13–b3-ex16): interleaved, textos mais longos,
 *     inferências que requerem conectar múltiplos elementos
 *
 * Cada exercício inclui obrigatoriamente um "literal lure" (distractor que
 * é literalmente verdadeiro mas não é a inferência pedida) — diagnostica
 * e treina o principal erro de leitores em desenvolvimento.
 *
 * Feedback padrão "acknowledge-name-model" (Metcalfe 2017; Bandura; SDT):
 *   [0] socrático: reconhece o que está no texto, aponta o movimento faltante
 *   [1] pista: indica o elemento específico que habilita a inferência
 *   [2] direto: modela a inferência completa
 *
 * Contextos: trabalho, saúde, família, comércio — familiares ao adulto
 * trabalhador, reduzindo carga cognitiva para o processo inferencial.
 */

import type { ExercicioGerado } from "./tipos";

export const EXERCICIOS_B3: ExercicioGerado[] = [
  // ── Fase 1: Bloqueado por tipo ──────────────────────────────────────────

  // inferencia_causal (ex01-02)

  {
    slug: "b3-ex01",
    tipo: "lacuna_unica",
    enunciado: `Leia o texto e responda:

"Rodrigo chegou ao trabalho com os olhos vermelhos e respondeu com irritação quando o colega fez uma pergunta simples. Mais tarde, ele pediu desculpas: tinha sido uma noite difícil."

Com base no texto, por que Rodrigo respondeu com irritação?`,
    opcoes: [
      "Provavelmente estava cansado ou havia dormido mal.",
      "Rodrigo respondeu com irritação quando o colega fez uma pergunta simples.",
      "O colega fez uma pergunta inadequada.",
      "Rodrigo não gostava do colega.",
    ],
    gabarito: "Provavelmente estava cansado ou havia dormido mal.",
    armadilhaId: "inferencia_causal",
    feedbackAcerto:
      "Exato. **Olhos vermelhos** e **noite difícil** são as pistas. O texto não diz que Rodrigo estava cansado — ele implica isso. A irritação é o efeito; o cansaço é a causa inferida a partir dos elementos concretos que o texto apresenta.",
    feedbackErro: [
      "Rodrigo respondeu com irritação — isso está no texto. Mas a pergunta é por quê. O texto não explica diretamente. O que 'olhos vermelhos' e 'noite difícil' sugerem sobre o estado dele?",
      "Observe dois elementos: 'olhos vermelhos' (pista física) e 'noite difícil' (confirmação). Juntos, eles sugerem o que sobre o estado de Rodrigo?",
      "É **'provavelmente estava cansado ou havia dormido mal'**. Os olhos vermelhos e a noite difícil são pistas de cansaço. A irritação é a consequência natural desse estado — o texto implica isso sem dizer.",
    ],
  },

  {
    slug: "b3-ex02",
    tipo: "lacuna_unica",
    enunciado: `Leia o texto e responda:

"A padaria do bairro aumentou os preços do pão e do leite em 15% neste mês. A dona explicou que os fornecedores repassaram a alta do trigo e dos combustíveis."

Com base no texto, por que os preços na padaria subiram?`,
    opcoes: [
      "Porque os custos dos fornecedores aumentaram e foram repassados.",
      "A dona explicou o motivo do aumento.",
      "A padaria queria aumentar o lucro.",
      "O governo aumentou os impostos sobre alimentos.",
    ],
    gabarito: "Porque os custos dos fornecedores aumentaram e foram repassados.",
    armadilhaId: "inferencia_causal",
    feedbackAcerto:
      "Correto. A causa está implícita na cadeia: **trigo e combustíveis ficaram mais caros** → fornecedores repassaram → dona repassou para os preços. O texto descreve essa cadeia; a inferência é reconhecer que a causa raiz são os custos, não uma decisão arbitrária da padaria.",
    feedbackErro: [
      "'A dona explicou o motivo' está no texto, mas não é a causa — é o ato de comunicar a causa. O que ela explicou? Qual foi o motivo real?",
      "A pista está em 'trigo e combustíveis'. Quando esses insumos ficam mais caros, o que acontece com o preço final do produto?",
      "É **'porque os custos dos fornecedores aumentaram'**. Trigo e combustíveis mais caros → fornecedores cobram mais → dona repassa. Essa cadeia de causa e efeito está implícita no texto.",
    ],
  },

  // inferencia_implicita (ex03-04)

  {
    slug: "b3-ex03",
    tipo: "lacuna_unica",
    enunciado: `Leia o texto e responda:

"Quando o inspetor de obras entrou no canteiro, os trabalhadores que não usavam capacete rapidamente pegaram o equipamento que estava pendurado na parede."

O texto sugere que:`,
    opcoes: [
      "Os trabalhadores não estavam usando o capacete antes de o inspetor entrar.",
      "Os trabalhadores pegaram o capacete pendurado na parede.",
      "O inspetor mandou os trabalhadores usarem o capacete.",
      "Os trabalhadores sempre usam EPI quando estão trabalhando.",
    ],
    gabarito: "Os trabalhadores não estavam usando o capacete antes de o inspetor entrar.",
    armadilhaId: "inferencia_implicita",
    feedbackAcerto:
      "Exato. **'Rapidamente'** é a pista. Ninguém pega o EPI às pressas se já está usando. O texto não diz que os trabalhadores estavam sem capacete — ele implica isso pelo comportamento descrito. Ler só o que está escrito perderia esse sentido.",
    feedbackErro: [
      "'Os trabalhadores pegaram o capacete' está no texto. Mas a pergunta pede o que o texto *sugere*, não o que ele diz. Por que eles pegaram o capacete tão rapidamente ao ver o inspetor?",
      "A palavra-chave é 'rapidamente'. Por que alguém pegaria o EPI às pressas ao ver o inspetor entrar? O que isso sugere sobre o que estava acontecendo antes?",
      "É **'os trabalhadores não estavam usando o capacete antes de o inspetor entrar'**. Pegar o equipamento rapidamente ao ver o inspetor implica que ele não estava sendo usado — o texto não diz, mas o comportamento revela.",
    ],
  },

  {
    slug: "b3-ex04",
    tipo: "lacuna_unica",
    enunciado: `Leia o texto e responda:

"A vendedora sorriu, pegou o produto que o cliente havia colocado de volta na prateleira e disse: 'Esse aqui eu deixo por um precinho especial pra você.'"

O texto sugere que:`,
    opcoes: [
      "O cliente estava prestes a desistir da compra.",
      "A vendedora pegou o produto que estava na prateleira.",
      "O produto estava com defeito.",
      "O cliente não tinha dinheiro suficiente.",
    ],
    gabarito: "O cliente estava prestes a desistir da compra.",
    armadilhaId: "inferencia_implicita",
    feedbackAcerto:
      "Correto. **Colocar o produto de volta na prateleira** é o sinal. Ninguém devolve algo à prateleira a não ser que esteja desistindo de levar. A vendedora leu esse sinal e agiu. O texto não diz que o cliente queria desistir — o gesto implica.",
    feedbackErro: [
      "'A vendedora pegou o produto da prateleira' está no texto. Mas por que ela fez isso? O que o cliente tinha feito imediatamente antes, e o que esse gesto normalmente indica?",
      "A pista é 'o produto que o cliente havia colocado de volta na prateleira'. Quando alguém devolve um produto à prateleira numa loja, o que isso geralmente significa?",
      "É **'o cliente estava prestes a desistir da compra'**. Devolver o produto à prateleira é o gesto universal de 'não vou levar'. A vendedora percebeu isso e ofereceu desconto — o texto implica essa situação sem declará-la.",
    ],
  },

  // inferencia_conclusao (ex05-06)

  {
    slug: "b3-ex05",
    tipo: "lacuna_unica",
    enunciado: `Leia o texto e responda:

"O candidato chegou 20 minutos atrasado para a entrevista de emprego. Ao entrar, explicou que o GPS havia falhado. O entrevistador anotou algo no caderno e disse que entraria em contato."

É possível concluir que:`,
    opcoes: [
      "O atraso provavelmente afetou a impressão do entrevistador sobre o candidato.",
      "O entrevistador disse que entraria em contato.",
      "O candidato não vai conseguir o emprego.",
      "O candidato mentiu sobre o GPS para se desculpar.",
    ],
    gabarito:
      "O atraso provavelmente afetou a impressão do entrevistador sobre o candidato.",
    armadilhaId: "inferencia_conclusao",
    feedbackAcerto:
      "Correto. Dois elementos constroem essa conclusão: **chegar atrasado numa entrevista** (sinal negativo) e **entrevistador anotou algo** (registrou o fato). Não dá para afirmar que o candidato não vai ser contratado — o texto não autoriza isso. Mas dá para inferir que o atraso deixou uma marca.",
    feedbackErro: [
      "'O entrevistador disse que entraria em contato' está no texto — é a resposta formal, não a conclusão. O que o conjunto dos fatos (atraso + anotação) permite concluir sobre a impressão deixada?",
      "Observe dois elementos: chegar atrasado para uma entrevista é normalmente visto de que forma? E o entrevistador anotou algo — o que isso sugere?",
      "É **'o atraso provavelmente afetou a impressão'**. Atraso em entrevista é sinal negativo; a anotação indica que foi registrado. 'Não vai conseguir o emprego' é forte demais — o texto não autoriza essa certeza.",
    ],
  },

  {
    slug: "b3-ex06",
    tipo: "lacuna_unica",
    enunciado: `Leia o texto e responda:

"A empresa instalou câmeras de segurança em todos os corredores e passou a exigir crachá para acesso a qualquer área. Dois meses antes, um notebook havia desaparecido do setor administrativo."

É possível concluir que:`,
    opcoes: [
      "As novas medidas de segurança foram adotadas em resposta ao sumiço do notebook.",
      "A empresa instalou câmeras e passou a exigir crachá.",
      "O ladrão foi identificado pelas câmeras.",
      "A empresa sempre teve problemas de segurança.",
    ],
    gabarito:
      "As novas medidas de segurança foram adotadas em resposta ao sumiço do notebook.",
    armadilhaId: "inferencia_conclusao",
    feedbackAcerto:
      "Exato. A **sequência temporal** é a chave: notebook sumiu → câmeras e crachá instalados. O texto não diz que um causou o outro, mas a proximidade e a natureza das medidas constroem essa conclusão. Isso é inferência: conectar dois eventos que o texto coloca juntos sem explicitar a ligação.",
    feedbackErro: [
      "'A empresa instalou câmeras e passou a exigir crachá' está no texto. Mas a pergunta pede a conclusão: por que essas medidas foram adotadas? O que o texto coloca logo antes dessas informações?",
      "Dois meses antes do quê? Depois de que evento a empresa tomou essas medidas? A ordem dos fatos no texto é a pista.",
      "É **'as medidas foram adotadas em resposta ao sumiço do notebook'**. Notebook some → empresa reforça segurança. O texto não diz que um causou o outro, mas a sequência e a natureza das medidas implicam essa relação.",
    ],
  },

  // ── Fase 2: Tipos mistos, sempre com literal lure ───────────────────────

  {
    slug: "b3-ex07",
    tipo: "lacuna_unica",
    enunciado: `Leia o texto e responda:

"A Sra. Marisa pediu para trocar de lugar com o colega na linha de produção. Ela estava ao lado da janela e havia chegado ao trabalho de roupa molhada por causa da chuva."

Com base no texto, por que a Sra. Marisa quis trocar de lugar?`,
    opcoes: [
      "Provavelmente queria se afastar da corrente de ar, já que estava com roupa molhada.",
      "A Sra. Marisa pediu para trocar de lugar com o colega.",
      "Ela não gostava do colega que estava ao seu lado.",
      "O trabalho ao lado da janela era mais difícil.",
    ],
    gabarito:
      "Provavelmente queria se afastar da corrente de ar, já que estava com roupa molhada.",
    armadilhaId: "inferencia_causal",
    feedbackAcerto:
      "Correto. A **combinação roupa molhada + posição ao lado da janela** constrói a causa inferida: corrente de ar é desconfortável (e potencialmente prejudicial) para quem está molhado. O texto apresenta os dois elementos; a inferência conecta para explicar a pedida de troca.",
    feedbackErro: [
      "'A Sra. Marisa pediu para trocar de lugar' está no texto. Mas por quê? O texto dá duas informações: janela e roupa molhada. Como essas duas coisas se relacionam?",
      "Janela + roupa molhada + linha de produção. O que acontece quando você está molhado e perto de uma janela aberta ou com corrente de ar?",
      "É **'queria se afastar da corrente de ar por estar com roupa molhada'**. Roupa molhada + janela = desconforto ou risco de resfriado. A combinação explica a troca; o texto não diz, mas implica.",
    ],
  },

  {
    slug: "b3-ex08",
    tipo: "lacuna_unica",
    enunciado: `Leia o texto e responda:

"O médico examinou o paciente, fez algumas anotações e, sem levantar os olhos do papel, disse: 'Vou precisar pedir uns exames antes de definir o tratamento.'"

O texto sugere que:`,
    opcoes: [
      "O médico ainda não tinha certeza do diagnóstico.",
      "O médico pediu exames para o paciente.",
      "O paciente tinha uma doença grave.",
      "O médico não gostava de dar más notícias.",
    ],
    gabarito: "O médico ainda não tinha certeza do diagnóstico.",
    armadilhaId: "inferencia_implicita",
    feedbackAcerto:
      "Correto. **'Antes de definir o tratamento'** é a pista. Médicos pedem exames quando o quadro não está claro o suficiente para definir conduta. O texto não diz que o médico estava incerto — implica isso pela necessidade de exames para só então definir.",
    feedbackErro: [
      "'O médico pediu exames' está no texto. Mas por que um médico pede exames antes de definir o tratamento? O que esse comportamento sugere sobre o que ele sabe até aquele momento?",
      "A frase-chave é 'antes de definir o tratamento'. Quando um médico diz isso, o que está implícito sobre o diagnóstico naquele momento?",
      "É **'o médico ainda não tinha certeza do diagnóstico'**. Pedir exames 'antes de definir' implica que a definição ainda não é possível — o que significa que o quadro não estava claro o suficiente.",
    ],
  },

  {
    slug: "b3-ex09",
    tipo: "lacuna_unica",
    enunciado: `Leia o texto e responda:

"Em março, Ana perdeu o emprego. Em abril, vendeu o carro. Em maio, avisou ao proprietário que precisaria sair do apartamento."

É possível concluir que:`,
    opcoes: [
      "Ana estava passando por dificuldades financeiras sérias.",
      "Ana avisou ao proprietário que precisaria sair do apartamento.",
      "Ana tinha dívidas antes de perder o emprego.",
      "Ana encontrou um emprego melhor em outra cidade.",
    ],
    gabarito: "Ana estava passando por dificuldades financeiras sérias.",
    armadilhaId: "inferencia_conclusao",
    feedbackAcerto:
      "Correto. Nenhuma frase diz que Ana tinha dificuldades financeiras. Mas a **sequência mensal de perdas crescentes** — emprego, carro, moradia — constrói essa conclusão de forma inequívoca. Cada evento isolado poderia ter outra explicação; os três juntos em progressão não deixam outra leitura.",
    feedbackErro: [
      "'Ana avisou ao proprietário' está no texto — é o último evento narrado, não a conclusão. O que os três eventos juntos (emprego, carro, apartamento) permitem concluir sobre a situação de Ana?",
      "Março: perdeu emprego. Abril: vendeu carro. Maio: vai sair do apartamento. Essa progressão de três meses sugere o quê sobre a situação financeira dela?",
      "É **'Ana estava passando por dificuldades financeiras'**. A ordem dos eventos — perder emprego, vender bem de valor, deixar moradia — é a sequência clássica de aperto financeiro. O texto não diz, mas os fatos em sequência constroem essa conclusão.",
    ],
  },

  {
    slug: "b3-ex10",
    tipo: "lacuna_unica",
    enunciado: `Leia o texto e responda:

"O açougue da esquina colocou no vidro da vitrine: 'Fechado para reforma'. Na semana passada, a prefeitura havia notificado o estabelecimento por falta de condições higiênicas."

Com base no texto, por que o açougue está fechado?`,
    opcoes: [
      "Provavelmente para adequar as condições higiênicas exigidas pela prefeitura.",
      "Porque o açougue está passando por uma reforma.",
      "O proprietário decidiu tirar férias.",
      "A prefeitura ordenou o fechamento imediato.",
    ],
    gabarito:
      "Provavelmente para adequar as condições higiênicas exigidas pela prefeitura.",
    armadilhaId: "inferencia_causal",
    feedbackAcerto:
      "Correto. O aviso diz 'reforma', mas o texto coloca logo antes a **notificação da prefeitura por condições higiênicas**. A inferência conecta os dois: a 'reforma' é provavelmente a adequação exigida. Ler só o aviso na vitrine seria leitura superficial — a pista real está na notificação da semana anterior.",
    feedbackErro: [
      "'Fechado para reforma' está no vidro — é o que o texto diz. Mas o texto também informa outra coisa que aconteceu na semana anterior. Como esses dois fatos se relacionam?",
      "A notificação da prefeitura foi por condições higiênicas. Uma semana depois, o açougue fechou 'para reforma'. O que é mais provável: coincidência ou relação de causa e efeito?",
      "É **'para adequar as condições higiênicas exigidas pela prefeitura'**. A notificação de higiene + fechamento para reforma, em sequência, implicam que a 'reforma' é na verdade uma adequação às exigências. O texto não diz — a inferência conecta os dois eventos.",
    ],
  },

  {
    slug: "b3-ex11",
    tipo: "lacuna_unica",
    enunciado: `Leia o texto e responda:

"Às 16h55, o funcionário olhou para o relógio, começou a salvar os documentos no computador e já pegou a mochila que estava embaixo da mesa."

O texto sugere que:`,
    opcoes: [
      "O funcionário se preparava para sair antes mesmo de terminar o horário.",
      "O funcionário salvou os documentos no computador.",
      "O funcionário tinha um compromisso importante após o trabalho.",
      "O funcionário estava atrasado para uma reunião.",
    ],
    gabarito:
      "O funcionário se preparava para sair antes mesmo de terminar o horário.",
    armadilhaId: "inferencia_implicita",
    feedbackAcerto:
      "Exato. **16h55** é o horário-chave. Se o expediente termina às 17h, iniciar a sequência de saída (relógio, salvar arquivos, pegar mochila) cinco minutos antes sugere que o funcionário estava se preparando para sair na hora exata — ou até antes. O texto não diz o horário de término, mas o comportamento implica a antecipação.",
    feedbackErro: [
      "'Salvou os documentos' está no texto. Mas a pergunta é o que o conjunto de ações sugere. O que normalmente significa olhar para o relógio, salvar arquivos e pegar a mochila, tudo às 16h55?",
      "Qual é o horário padrão de encerramento do expediente? O que significa fazer toda essa sequência de saída 5 minutos antes?",
      "É **'o funcionário se preparava para sair antes mesmo de terminar o horário'**. Olhar o relógio + salvar documentos + pegar mochila às 16h55 é a sequência de quem quer sair na hora exata — ou antes. O comportamento implica a antecipação.",
    ],
  },

  {
    slug: "b3-ex12",
    tipo: "lacuna_unica",
    enunciado: `Leia o texto e responda:

"A professora de reforço percebeu que Tiago sabia todos os conteúdos quando ela explicava sozinha com ele, mas ficava em silêncio quando havia outros alunos na sala."

É possível concluir que:`,
    opcoes: [
      "Tiago provavelmente tinha dificuldade com a presença de outras pessoas, não com o conteúdo.",
      "A professora percebeu a diferença no comportamento de Tiago.",
      "O conteúdo era muito difícil para Tiago.",
      "Tiago não gostava de estudar em grupo.",
    ],
    gabarito:
      "Tiago provavelmente tinha dificuldade com a presença de outras pessoas, não com o conteúdo.",
    armadilhaId: "inferencia_conclusao",
    feedbackAcerto:
      "Correto. O texto apresenta um **contraste preciso**: com a professora sozinha → sabe tudo; com outros alunos → silêncio. A variável que muda é a presença de outras pessoas. A conclusão é que o problema não é o conteúdo — é o contexto social. Isso não está dito, mas o contraste implica diretamente.",
    feedbackErro: [
      "'A professora percebeu a diferença' está no texto. Mas a pergunta pede o que concluir sobre Tiago. O que a diferença de comportamento entre as duas situações revela?",
      "Sozinho com a professora: sabe tudo. Com outros alunos: silêncio. O que mudou entre as duas situações? O que essa variável sugere sobre onde está a dificuldade real?",
      "É **'a dificuldade é com a presença de outras pessoas, não com o conteúdo'**. Ele sabe — mas só quando está sozinho com a professora. A mudança de contexto é a única variável; a conclusão aponta para isso.",
    ],
  },

  // ── Fase 3: Interleaved, textos mais longos ─────────────────────────────

  {
    slug: "b3-ex13",
    tipo: "lacuna_unica",
    enunciado: `Leia o texto e responda:

"Durante a reunião de encerramento do projeto, a gerente agradeceu a toda a equipe pelo esforço. Ela mencionou que o prazo havia sido apertado, que houve momentos de tensão, mas que o resultado ficou dentro do esperado. No final, cada membro recebeu um certificado de participação. A gerente não mencionou bônus ou premiações extras."

É possível concluir que a gerente considerou o projeto:`,
    opcoes: [
      "Satisfatório, mas não excepcional.",
      "A gerente agradeceu a toda a equipe pelo esforço.",
      "Um fracasso por causa dos momentos de tensão.",
      "Um grande sucesso que merecia comemoração especial.",
    ],
    gabarito: "Satisfatório, mas não excepcional.",
    armadilhaId: "inferencia_conclusao",
    feedbackAcerto:
      "Correto. Dois elementos constroem essa conclusão: **'resultado dentro do esperado'** (não acima) e **ausência de bônus** (premiações ficam para resultados excepcionais). O agradecimento e os certificados são gestos de reconhecimento padrão, não de celebração extraordinária. A soma implica 'foi bom, mas não extraordinário'.",
    feedbackErro: [
      "'A gerente agradeceu a equipe' está no texto. Mas a conclusão precisa considerar também o que *não* foi dito. O resultado foi classificado como o quê? E o que não foi mencionado que normalmente seria para resultados excepcionais?",
      "Duas pistas: 'dentro do esperado' (não acima) e a ausência de bônus ou premiação. O que essas duas informações juntas sugerem sobre a avaliação da gerente?",
      "É **'satisfatório, mas não excepcional'**. 'Dentro do esperado' = atingiu a meta, mas não superou. Sem bônus = não foi resultado que justifica premiação extra. Os dois juntos constroem uma avaliação de adequado, não de excelente.",
    ],
  },

  {
    slug: "b3-ex14",
    tipo: "lacuna_unica",
    enunciado: `Leia o texto e responda:

"A nova funcionária cumprimentou todos no primeiro dia, tomou notas durante toda a reunião de integração e fez perguntas detalhadas sobre os processos. Na hora do almoço, perguntou a um colega se havia um canal de dúvidas para novos funcionários."

O texto sugere que a nova funcionária era:`,
    opcoes: [
      "Muito comprometida e cuidadosa com o início no novo emprego.",
      "A funcionária fez perguntas detalhadas sobre os processos.",
      "Muito ansiosa e insegura no novo ambiente.",
      "Experiente em outros empregos anteriores.",
    ],
    gabarito: "Muito comprometida e cuidadosa com o início no novo emprego.",
    armadilhaId: "inferencia_implicita",
    feedbackAcerto:
      "Correto. Quatro comportamentos constroem essa imagem: **cumprimentou todos, tomou notas durante toda a reunião, fez perguntas detalhadas e buscou um canal de dúvidas**. Nenhum deles isolado diria muito, mas juntos traçam o perfil de alguém muito engajada com o processo de integração. O texto não avalia — os comportamentos implicam.",
    feedbackErro: [
      "'Fez perguntas detalhadas' está no texto. Mas a pergunta pede o que o conjunto de comportamentos sugere sobre o perfil da funcionária. O que cumprimentar todos, tomar notas, fazer perguntas e ainda buscar canal de dúvidas têm em comum?",
      "Enumere os comportamentos: cumprimentou todos (1), tomou notas (2), fez perguntas detalhadas (3), buscou canal de dúvidas (4). Qual traço de personalidade ou postura esses quatro comportamentos sugerem juntos?",
      "É **'muito comprometida e cuidadosa'**. Cada comportamento isolado pode ser comum. Os quatro juntos traçam o perfil de alguém que levou o primeiro dia a sério e queria aprender e se integrar bem.",
    ],
  },

  {
    slug: "b3-ex15",
    tipo: "lacuna_unica",
    enunciado: `Leia o texto e responda:

"O médico perguntou ao paciente quanto tempo levava para chegar ao trabalho. 'Quarenta minutos a pé, doutor', respondeu ele. O médico anotou algo, depois perguntou se havia mudado algum hábito alimentar recentemente. O paciente disse que não. Ao final, o médico disse que os exames estavam ótimos."

Com base no texto, por que o médico perguntou sobre o deslocamento a pé e os hábitos alimentares antes de comentar os exames?`,
    opcoes: [
      "Queria entender o estilo de vida do paciente para relacionar com os resultados dos exames.",
      "O paciente levava 40 minutos a pé para chegar ao trabalho.",
      "O médico estava preocupado com o peso do paciente.",
      "Os exames estavam ruins e o médico precisava de mais informações.",
    ],
    gabarito:
      "Queria entender o estilo de vida do paciente para relacionar com os resultados dos exames.",
    armadilhaId: "inferencia_causal",
    feedbackAcerto:
      "Correto. O **padrão das perguntas** é a pista: exercício (deslocamento a pé) e alimentação são os dois pilares do estilo de vida que explicam resultados de exames. O médico coletou essas informações antes de dar o resultado — a inferência é que queria contextualizá-lo. Os exames bons fazem mais sentido à luz de um estilo de vida saudável.",
    feedbackErro: [
      "'O paciente levava 40 minutos a pé' está no texto. Mas a pergunta é por que o médico fez essas perguntas específicas, nessa ordem, antes de revelar o resultado. Que tipo de informação ele estava coletando?",
      "O médico perguntou sobre exercício (deslocamento a pé) e alimentação. O que esses dois tópicos têm em comum? Para que servem essas informações na avaliação de um paciente?",
      "É **'queria relacionar o estilo de vida com os resultados dos exames'**. Exercício e alimentação explicam exames positivos. O médico coletou o contexto antes de entregar o resultado — padrão clínico de contextualização.",
    ],
  },

  {
    slug: "b3-ex16",
    tipo: "lacuna_unica",
    enunciado: `Leia o texto e responda:

"O candidato ao cargo de operador de máquinas explicou na entrevista que havia trabalhado dez anos como mecânico em uma oficina de caminhões. Ele apresentou os certificados de cursos técnicos. O entrevistador disse que entraria em contato até sexta-feira. Quando o candidato saiu, o entrevistador ligou para o colega e disse: 'É esse.'"

É possível concluir que:`,
    opcoes: [
      "O entrevistador ficou muito satisfeito com o candidato e provavelmente vai contratá-lo.",
      "O entrevistador disse que entraria em contato até sexta-feira.",
      "O candidato mentiu sobre sua experiência como mecânico.",
      "O entrevistador ainda tinha outros candidatos para entrevistar antes de decidir.",
    ],
    gabarito:
      "O entrevistador ficou muito satisfeito com o candidato e o considerou o escolhido para a vaga.",
    armadilhaId: "inferencia_conclusao",
    feedbackAcerto:
      "Exato. **'É esse.'** É a frase mais carregada de implicação de todo o texto. Dita para um colega, logo após a saída do candidato, é uma expressão inequívoca de decisão. O 'vou entrar em contato' foi o protocolo formal; 'é esse' é o que o entrevistador realmente concluiu. O texto contrasta as duas falas para que o leitor faça a inferência — não vai além disso.",
    feedbackErro: [
      "'O entrevistador disse que entraria em contato' é o protocolo — o que se diz formalmente. Mas o texto acrescenta outra fala, privada, dita depois que o candidato saiu. O que 'é esse' significa nesse contexto?",
      "Compare as duas falas do entrevistador: a que foi dita ao candidato e a que foi dita ao colega depois. Qual das duas revela o que ele realmente pensou sobre o candidato?",
      "É **'o entrevistador ficou satisfeito e o considerou o escolhido'**. 'É esse', dito ao colega logo após a entrevista, é a forma coloquial de dizer 'esse é o candidato'. O contraste entre o protocolo formal e a fala privada é a pista para a inferência.",
    ],
  },
];
