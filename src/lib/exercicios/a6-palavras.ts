/**
 * Exercícios curados da Unidade A.6 — "As palavras que todo mundo erra"
 *
 * Cada exercício segue o guia de escrita: docs/12-guia-feedback-tutor.md
 * Ordem dos parágrafos no feedbackAcerto: papel → contraste → dica
 */

import type { ExercicioGerado } from "./tipos";

export const EXERCICIOS_A6: ExercicioGerado[] = [
  {
    slug: "a6-ex1", // #1
    tipo: "lacuna_unica",
    enunciado: "Quero terminar o serviço hoje, ___ faltam algumas peças essenciais.",
    opcoes: ["mas", "mais"],
    gabarito: "mas",
    armadilhaId: "mas_mais",
    feedbackAcerto:
      "A palavra **mas** serve para ligar duas ideias contrárias, enquanto **mais** funciona para falar de quantidade.\n\nPara tirar a dúvida na hora de escrever, tente trocar por **porém**, pois se a frase continuar fazendo sentido, o correto é usar **mas**.",
    feedbackErro: [
      "A segunda parte da frase ajuda a primeira ideia ou acaba atrapalhando ela?",
      "A palavra **mais** serve para quantidade, como em **mais café** ou **mais tempo**, mas a falta de peças na verdade atrapalha a entrega do serviço. Qual palavra usamos para juntar coisas que vão para lados opostos?",
      "A resposta certa é **mas**, porque essa palavra conecta duas situações que brigam entre si, já que a vontade de terminar o serviço bate de frente com a falta de peças."
    ],
  },
  {
    slug: "a6-ex2", // #2
    tipo: "lacuna_unica",
    enunciado: "Trabalho nesta oficina ___ cinco anos.",
    opcoes: ["há", "a"],
    gabarito: "há",
    armadilhaId: "ha_a",
    feedbackAcerto:
      "Usamos **há** com a letra H para falar de um tempo que já passou e ficou para trás, deixando a letra **a** sozinha para um tempo que ainda vai chegar.\n\nUma boa dica é tentar trocar pela palavra **faz**, pois se você disser **trabalho nesta oficina faz cinco anos** e achar que soa natural, o correto é usar **há**.",
    feedbackErro: [
      "Esse tempo de cinco anos já passou lá atrás ou ainda vai acontecer no futuro?",
      "Tente trocar a palavra por **faz** para testar como a frase fica. Como **faz cinco anos** soa muito normal no dia a dia, a palavra certa é **há**, deixando a letra **a** apenas para o futuro.",
      "A resposta é **há**. Sempre que o tempo já começou no passado, a gente usa o **há** com H, e o teste de trocar por **faz** ajuda a confirmar isso rapidinho."
    ],
  },
  {
    slug: "a6-ex3", // #3
    tipo: "lacuna_unica",
    enunciado: "___ você não avisou antes que ia faltar?",
    opcoes: ["Por que", "Porque"],
    gabarito: "Por que",
    armadilhaId: "porque_family",
    feedbackAcerto:
      "O **por que** separado é usado na hora de fazer uma pergunta para alguém, enquanto o **porque** escrito todo junto serve para dar a resposta ou explicar o motivo das coisas.\n\nSe a frase tiver um ponto de interrogação no final ou estiver pedindo uma explicação, pode usar ele separado sem medo.",
    feedbackErro: [
      "Essa frase está fazendo uma pergunta para alguém ou já está entregando a resposta?",
      "Como você quer saber o motivo de algo, isso é uma pergunta. Em perguntas, a gente sempre usa o **por que** separado, guardando a versão junta apenas para as explicações.",
      "A resposta é o **por que** separado. Como a frase é uma pergunta direta querendo saber um motivo, as palavras precisam ficar separadas."
    ],
  },
  {
    slug: "a6-ex4", // #4
    tipo: "lacuna_unica",
    enunciado: "O serviço ficou ___ feito. Precisa refazer.",
    opcoes: ["mau", "mal"],
    gabarito: "mal",
    armadilhaId: "mau_mal",
    feedbackAcerto:
      "A palavra **mal** com a letra L serve para explicar de que jeito um serviço foi feito, diferente do **mau** com U que funciona para dar uma característica direta para uma pessoa ou coisa.\n\nPara tirar a dúvida, tente testar a palavra **bem**, e como a gente sempre diz que um serviço ficou **bem feito**, o lado negativo precisa ser escrito com **mal**.",
    feedbackErro: [
      "A palavra está falando sobre a forma como o serviço foi executado ou está dando um apelido para o serviço em si?",
      "Tente fazer o teste colocando a palavra **bem** na frase. Como a gente costuma dizer tranquilamente que o serviço ficou **bem feito**, isso mostra que a versão com problema pede o **mal** com a letra L.",
      "A resposta é **mal** com L. Essa palavra funciona como o contrário direto de **bem** e ajuda a explicar exatamente como o trabalho foi executado na oficina."
    ],
  },
  {
    slug: "a6-ex5", // #5
    tipo: "lacuna_unica",
    enunciado: "Podem deixar o orçamento para ___.",
    opcoes: ["mim", "eu"],
    gabarito: "mim",
    armadilhaId: "mim_eu",
    feedbackAcerto:
      "A palavra **mim** costuma aparecer logo depois de pequenas palavras de ligação, como **para**, **por** e **de**, enquanto o **eu** só entra em cena quando você mesmo vai tomar uma atitude e fazer algo.\n\nSe você conseguir trocar por **ele** e a frase **deixar para ele** fizer sentido, o correto é usar **mim**.",
    feedbackErro: [
      "Dê uma olhada na palavra que vem logo antes do espaço em branco, pois ela sempre entrega a pista do que usar.",
      "A palavra **para** vem logo antes do espaço. Toda vez que usamos **para**, **por** ou **de**, a forma certa de terminar é com **mim**, guardando o **eu** para quando você vai fazer uma ação, tipo **eu vou buscar**.",
      "A resposta é **mim**, pois essa é a palavra certa para vir depois do **para**. O **eu** a gente deixa apenas para o começo da ação, quando dizemos coisas como **eu resolvo o problema**."
    ],
  },
  {
    slug: "a6-ex5b", // #6
    tipo: "lacuna_unica",
    enunciado: "___ você vai depois da reunião?",
    opcoes: ["Onde", "Aonde"],
    gabarito: "Aonde",
    armadilhaId: "onde_aonde",
    feedbackAcerto:
      "Nós usamos **aonde** quando existe algum movimento de ir para um destino, diferente do **onde**, que serve mais para falar de um lugar fixo e parado.\n\nSe você puder trocar o começo por **para onde** e a frase continuar com o mesmo sentido, a escolha certa com certeza é **aonde**.",
    feedbackErro: [
      "A pergunta quer saber em qual lugar você está parado agora, ou para qual caminho você vai andar?",
      "Como existe uma ideia de movimento e você vai para algum lugar, tente trocar por **para onde**. Se essa troca funcionar bem, a palavra certa para usar é o **aonde**.",
      "A resposta é **aonde**, pois a frase quer descobrir o destino de um trajeto. Toda vez que tiver ideia de movimento, como nos verbos ir e andar, a gente junta o **a** na palavra."
    ],
  },
  {
    slug: "a6-ex5c", // #7
    tipo: "lacuna_unica",
    enunciado: "___ me avisar antes, não poderei te ajudar.",
    opcoes: ["Se não", "Senão"],
    gabarito: "Se não",
    armadilhaId: "senao_se_nao",
    feedbackAcerto:
      "A forma separada **se não** aparece quando a gente tem uma condição clara para algo dar certo, enquanto a versão **senão** tudo junto funciona mais como um aviso de **caso contrário**.\n\nPara ter certeza, tente colocar a palavra **você** no meio, pois se a frase **se você não me avisar** fizer todo o sentido, isso mostra que as palavras devem ficar separadas.",
    feedbackErro: [
      "A frase está colocando uma condição necessária para a ajuda acontecer ou apenas dando um aviso para o final do dia?",
      "Tente incluir a palavra **você** na hora de ler para ver como fica. Como a leitura **se você não me avisar** funciona com bastante clareza, fica provado que existe uma condição solta aí, pedindo o uso separado.",
      "A resposta correta é **se não** separado, porque a frase cria uma regra direta para a pessoa receber a ajuda. A palavra junta costuma substituir a ideia de **caso contrário**, como em **me avise logo, senão eu vou embora**."
    ],
  },
  {
    slug: "a6-ex6-escrita", // #8
    tipo: "escrita_lacuna",
    enunciado: "Gostei da proposta, ___ o prazo ficou curto demais.",
    gabarito: "mas",
    armadilhaId: "mas_mais",
    feedbackAcerto:
      "A palavra **mas** serve para ligar duas ideias contrárias, enquanto **mais** funciona para falar de quantidade.\n\nPara tirar a dúvida, tente trocar por **porém**, pois se a frase continuar fazendo sentido sem mudar a ideia, o correto é usar **mas**.",
    feedbackErro: [
      "A segunda parte da mensagem ajuda a primeira ideia ou acaba criando um problema para ela?",
      "Gostar do negócio e achar o prazo apertado são duas coisas que vão para lados opostos. Para juntar essas duas ideias que não combinam muito, a palavra que usamos é o **mas**.",
      "A resposta é **mas**, porque ele serve justamente para juntar duas coisas que batem de frente na frase, já que você gostou do assunto geral, mas o prazo acabou virando um obstáculo."
    ],
  },
  {
    slug: "a6-ex10-escrita", // #9
    tipo: "escrita_lacuna",
    enunciado: "___ o pedido ainda não saiu para entrega?",
    gabarito: "Por que",
    armadilhaId: "porque_family",
    feedbackAcerto:
      "O **por que** separado é usado sempre que a gente quer fazer uma pergunta para descobrir o motivo de alguma coisa, deixando o **porque** junto para a hora de dar a resposta.\n\nSe a frase tem um ponto de interrogação ou está cobrando uma explicação de alguém, use separado.",
    feedbackErro: [
      "A pessoa que enviou a frase está fazendo uma pergunta ou já está dando a explicação pronta?",
      "Como a frase é uma pergunta tentando descobrir o motivo do atraso, a gente usa a versão separada. O **porque** junto aparece só na hora de responder, do tipo **não saiu porque furou o pneu**.",
      "A resposta é **por que** separado. Como a frase é claramente uma pergunta querendo uma informação que falta, as duas palavras precisam ficar desgrudadas."
    ],
  },
  {
    slug: "a6-ex14-escrita", // #10
    tipo: "escrita_lacuna",
    enunciado: "Moro neste bairro ___ quase dez anos.",
    gabarito: "há",
    armadilhaId: "ha_a",
    feedbackAcerto:
      "A palavra **há** com H mostra um tempo que já começou lá no passado, enquanto o **a** aponta para algo que ainda vai chegar.\n\nSe você conseguir trocar por **faz** e a frase **moro neste bairro faz dez anos** continuar soando muito bem, o correto é usar **há**.",
    feedbackErro: [
      "Esse tempo de dez anos já passou na sua vida ou ainda vai começar a contar no futuro?",
      "Como você já mora lá e o tempo passou, tente trocar pela palavra **faz**. Se a frase **moro neste bairro faz quase dez anos** funcionar bem para você, a palavra certa a usar é o **há**.",
      "A resposta é **há**. Sempre que o tempo já aconteceu e ficou para trás, a gente usa o **há** com H. A letra **a** sozinha a gente deixa para coisas do futuro, como em **volto daqui a dez anos**."
    ],
  },
  {
    slug: "a6-ex18-escrita", // #11
    tipo: "escrita_lacuna",
    enunciado: "O relatório foi muito ___ escrito, cheio de erros.",
    gabarito: "mal",
    armadilhaId: "mau_mal",
    feedbackAcerto:
      "A palavra **mal** com L serve para explicar a forma como algo foi feito, diferente do **mau** com U que funciona para dar uma característica para uma pessoa ou objeto.\n\nPara não errar, tente testar a palavra **bem**, pois se a frase **muito bem escrito** fizer sentido para você, a versão negativa exige o uso de **mal**.",
    feedbackErro: [
      "A palavra está explicando de que jeito o papel foi escrito ou está dando um apelido ruim para o papel em si?",
      "Tente fazer o teste rápido aplicando a palavra **bem**. Como a frase **o relatório foi muito bem escrito** faz todo o sentido prático na nossa cabeça, isso sinaliza que o erro precisa ser escrito com **mal**.",
      "A resposta é **mal** com a letra L. Ele atua como o contrário direto da palavra **bem** e descreve perfeitamente o jeito descuidado com que o texto foi feito."
    ],
  },
  {
    slug: "a6-ex22-escrita", // #12
    tipo: "escrita_lacuna",
    enunciado: "O gerente mandou o e-mail para ___ e para o João.",
    gabarito: "mim",
    armadilhaId: "mim_eu",
    feedbackAcerto:
      "Nós usamos o **mim** sempre que ele vem depois de palavras curtas que dão direção, como **para**, **com** ou **de**, deixando o **eu** para a hora em que você mesmo toma a frente e faz alguma ação.\n\nSe você conseguir trocar por **ele** e achar que **mandou para ele** soa natural, o correto é usar **mim**.",
    feedbackErro: [
      "Existe uma palavra bem importante logo antes do espaço em branco. Qual é ela?",
      "Como a palavra **para** aparece logo antes, a gente sempre deve completar com **mim**. O **eu** fica reservado para quando você é o dono da ação, como quando você diz **eu recebi o recado**.",
      "A resposta é **mim**, pois essa é a palavra oficial para usar depois do **para**. Se você testar trocando por **ele**, vai ver que **para ele** soa bem natural, comprovando o uso da palavra certa."
    ],
  },
  {
    slug: "a6-ex26-escrita", // #13
    tipo: "escrita_lacuna",
    enunciado: "A loja ___ trabalho fica perto daqui.",
    gabarito: "onde",
    armadilhaId: "onde_aonde",
    feedbackAcerto:
      "A gente usa **onde** para falar de um lugar fixo onde as coisas ficam paradas, deixando o **aonde** para situações que envolvem movimento e destino.\n\nSe você puder trocar o termo por **na qual** e a frase **a loja na qual trabalho** fizer sentido, o correto é ficar com o **onde**.",
    feedbackErro: [
      "A frase está apontando para o lugar fixo do seu emprego ou falando de um trajeto que você vai fazer?",
      "A loja é um prédio parado onde você já está trabalhando, sem nenhum movimento de viagem. Como o lugar é fixo, a gente usa apenas o **onde**.",
      "A resposta é **onde**, pois você está apontando para o seu local de trabalho, que é um ponto fixo. O **aonde** a gente usa apenas quando alguém se movimenta, como em **aonde você vai ir**."
    ],
  },
  {
    slug: "a6-ex30-escrita", // #14
    tipo: "escrita_lacuna",
    enunciado: "___ confirmar até amanhã, perderá a vaga.",
    gabarito: "Se não",
    armadilhaId: "senao_se_nao",
    feedbackAcerto:
      "Nós escrevemos **se não** separado quando existe uma regra ou condição para as coisas darem certo, guardando o **senão** junto para avisos do tipo **caso contrário**.\n\nUma boa dica é tentar incluir a palavra **você**, pois se a leitura **se você não confirmar** funcionar bem para você, fica provado que as palavras ficam separadas.",
    feedbackErro: [
      "A mensagem está criando uma regra obrigatória para garantir a vaga ou está apenas entregando uma alternativa?",
      "Tente fazer o teste colocando a palavra **você** no começo da leitura. Como dizer **se você não confirmar** não muda em nada a ideia principal da frase, isso prova que o **se** funciona sozinho e precisa ficar separado.",
      "A resposta certa é **se não** separado, já que a frase monta uma regrinha básica para não perder a vaga. A versão junta **senão** combina mais com o final das frases, do tipo **confirme logo, senão você perde a vaga**."
    ],
  },
  {
    slug: "a6-ex7-escrita", // #15
    tipo: "escrita_lacuna",
    enunciado: "Ela entende muito ___ de vendas do que eu.",
    gabarito: "mais",
    armadilhaId: "mas_mais",
    feedbackAcerto:
      "Nós usamos **mais** com a letra I para comparar quantidades ou o tamanho de alguma coisa, deixando o **mas** apenas para juntar ideias que brigam entre si.\n\nUma dica fácil é testar a palavra **menos**, pois se ela encaixar na frase entregando o sentido contrário, o correto é mesmo o **mais**.",
    feedbackErro: [
      "A frase quer comparar o tamanho do conhecimento de duas pessoas ou está tentando ligar ideias que não combinam?",
      "Como a frase está medindo quem entende mais e quem entende menos, o assunto é quantidade. Para coisas de quantidade, a gente usa sempre o **mais**.",
      "A resposta é **mais**, porque a intenção da frase é comparar a quantidade de experiência que cada um tem. O **mas** serviria apenas para situações opostas, como **eu tentei vender, mas não consegui**."
    ],
  },
  {
    slug: "a6-ex11-escrita", // #16
    tipo: "escrita_lacuna",
    enunciado: "Não pude ir à reunião ___ estava com o carro na oficina.",
    gabarito: "porque",
    armadilhaId: "porque_family",
    feedbackAcerto:
      "A versão **porque** escrita toda junta serve para dar uma justificativa ou explicar o motivo das coisas, enquanto a versão separada fica para a hora de fazer perguntas.\n\nSe você conseguir trocar por **pois** e a frase continuar fluindo bem na leitura, a escolha certa é o **porque** junto.",
    feedbackErro: [
      "A pessoa está fazendo uma pergunta para alguém ou já está entregando a desculpa pronta?",
      "Como a frase serve para explicar o motivo de você não ter aparecido, usamos a versão junta. Tente trocar a palavra por **pois** para ver se soa natural, o que confirma o uso do **porque** junto.",
      "A resposta é o **porque** todo junto, pois a frase inteira serve como uma grande explicação do motivo da sua ausência, sem nenhuma tentativa de pergunta no meio."
    ],
  },
  {
    slug: "a6-ex15-escrita", // #17
    tipo: "escrita_lacuna",
    enunciado: "A reunião começa daqui ___ meia hora.",
    gabarito: "a",
    armadilhaId: "ha_a",
    feedbackAcerto:
      "A letra **a** sozinha aponta para um tempo que ainda não chegou, deixando a palavra **há** com H apenas para as coisas que já passaram na nossa vida.\n\nSe você puder trocar a expressão por **dentro de** e achar que **começa dentro de meia hora** tem todo o sentido, a escolha certa é usar o **a**.",
    feedbackErro: [
      "Essa meia hora de espera já passou no relógio ou ainda vai acontecer?",
      "A reunião ainda nem começou e você vai ter que esperar, então estamos falando de um tempo no futuro. Para o que ainda vem pela frente, usamos apenas o **a**.",
      "A resposta é a letra **a** sozinha, já que estamos falando de um prazo que vai acontecer lá no futuro. O uso da palavra **há** fica reservado só para coisas antigas, como na frase **ele chegou há meia hora**."
    ],
  },
  {
    slug: "a6-ex19-escrita", // #18
    tipo: "escrita_lacuna",
    enunciado: "Ele tem um ___ hábito de deixar tudo para a última hora.",
    gabarito: "mau",
    armadilhaId: "mau_mal",
    feedbackAcerto:
      "A palavra **mau** com a letra U descreve a característica ruim de uma pessoa ou coisa, enquanto o **mal** com L diz respeito ao jeito que uma tarefa foi feita.\n\nA dica de ouro é testar a frase usando o contrário. Como a gente consegue falar **um bom hábito** com facilidade, a versão negativa pede o uso da palavra **mau**.",
    feedbackErro: [
      "A palavra está apenas mostrando de que jeito uma tarefa foi feita ou virou uma característica daquele costume de atrasar?",
      "Tente aplicar a regra do contrário testando colocar a palavra **bom** na frase. Como a gente entende perfeitamente o que significa **um bom hábito**, isso avisa que a versão com problema exige o **mau** com U.",
      "A resposta é **mau** com a letra U, porque ela funciona como o oposto direto da palavra **bom** e serve para dar características para as coisas. O uso do **mal** com L só entra quando falamos de ações, do tipo **ele agiu muito mal**."
    ],
  },
  {
    slug: "a6-ex23-escrita", // #19
    tipo: "escrita_lacuna",
    enunciado: "___ e o Pedro vamos apresentar o projeto amanhã.",
    gabarito: "Eu",
    armadilhaId: "mim_eu",
    feedbackAcerto:
      "A palavra **eu** aparece sempre que você é a pessoa que vai botar a mão na massa e praticar a ação, deixando o **mim** para o fim das frases ou depois de pequenas palavras como **para** e **comigo**.\n\nSe você tentar tirar o nome do colega e a frase **eu vou apresentar** continuar firme, a escolha é fácil.",
    feedbackErro: [
      "Quem é a pessoa que vai ter que ficar de pé e fazer a apresentação amanhã?",
      "Você e o seu amigo são as pessoas que vão trabalhar de verdade nessa apresentação. Quando você é o dono da ação, o certo é usar o **eu**. Tente tirar o Pedro da frase e veja como **eu vou apresentar** funciona bem.",
      "A resposta é o **eu**, porque você é quem vai suar a camisa e executar a tarefa de apresentar. A gente reserva o **mim** apenas para receber coisas, como em **entregaram o projeto para mim**."
    ],
  },
  {
    slug: "a6-ex27-escrita", // #20
    tipo: "escrita_lacuna",
    enunciado: "___ você foi ontem à noite?",
    gabarito: "Aonde",
    armadilhaId: "onde_aonde",
    feedbackAcerto:
      "Nós usamos **aonde** quando perguntamos sobre um passeio, destino ou movimento, enquanto o **onde** serve mais para descobrir em qual local fixo um objeto está guardado.\n\nSe você conseguir trocar o começo por **para onde** e a pergunta continuar fazendo sentido na sua cabeça, o certo é o **aonde**.",
    feedbackErro: [
      "A pergunta quer descobrir em qual lugar fixo você ficou sentado ou qual foi o destino do seu passeio?",
      "A frase está querendo saber qual trajeto você fez ontem à noite. Tente trocar o começo por **para onde** e repare que o sentido continua igual, o que confirma o uso do **aonde**.",
      "A resposta é **aonde**, porque a pessoa quer descobrir o destino do movimento que você fez. Toda vez que envolve ir de um lado para o outro, a gente bota a letra **a** no começo da palavra."
    ],
  },
  {
    slug: "a6-ex31-escrita", // #21
    tipo: "escrita_lacuna",
    enunciado: "Anote o número, ___ você vai esquecer.",
    gabarito: "senão",
    armadilhaId: "senao_se_nao",
    feedbackAcerto:
      "A palavra **senão** tudo junto funciona como um alerta de consequência, substituindo muito bem a ideia de **caso contrário**. Já a versão separada **se não** aparece quando você cria regras, do tipo **se não fizer tal coisa**.\n\nSe você trocar por **caso contrário** e a frase avisar sobre o esquecimento de forma natural, a resposta é a palavra junta.",
    feedbackErro: [
      "A frase está criando uma regra nova para a pessoa seguir ou está avisando o problema que vai dar se ela ficar parada?",
      "Essa segunda parte da frase avisa o que vai acontecer de ruim se o número não for anotado. Tente ler trocando as palavras por **caso contrário**, pois se o sentido bater, o certo é escrever tudo junto.",
      "A resposta é a palavra **senão** toda junta, porque ela funciona do mesmo jeito que a expressão **caso contrário**. O uso separado ficaria reservado para condições, como na frase **se não anotar agora, vai dar branco depois**."
    ],
  },
  {
    slug: "a6-ex31b-escrita", // #22
    tipo: "escrita_lacuna",
    enunciado: "Anote o número, ___ você vai se esquecer.",
    gabarito: "porque",
    armadilhaId: "porque_family",
    feedbackAcerto:
      "O **porque** junto serve para explicar o motivo de alguma coisa, mostrando que você deve anotar justamente para evitar o risco de apagão na memória.\n\nFica diferente do **senão**, que a gente usa mais para dar um alerta do que acontece caso a pessoa não faça o que foi pedido.",
    feedbackErro: [
      "A frase está tentando explicar o motivo da anotação ser importante ou apenas jogando um alerta de problema?",
      "A segunda parte da mensagem justifica por que gastar tinta com o número vale a pena, que é o esquecimento. Quando você quer justificar ou dar o motivo, o certo é usar o **porque**.",
      "A resposta é **porque** junto, já que a frase fornece uma explicação direta para o conselho de anotar as coisas. Fica bem diferente da estrutura de alerta, que usaria o **senão** para dizer que vai dar problema."
    ],
  },
  {
    slug: "a6-ex8-escrita", // #23
    tipo: "escrita_lacuna",
    enunciado: "Preciso de ___ um dia para revisar esse contrato.",
    gabarito: "mais",
    armadilhaId: "mas_mais",
    feedbackAcerto:
      "Usamos **mais** com I quando falamos de quantidade, seja para dias, dinheiro ou paciência, enquanto a palavra **mas** entra na jogada para ligar ideias contrárias.\n\nSe a sua mensagem pede um volume maior de qualquer coisa, a escolha vai ser sempre o **mais**.",
    feedbackErro: [
      "Você está pedindo uma quantidade extra de dias na agenda ou está tentando dizer que as ideias da frase brigam entre si?",
      "Você está claramente pedindo um aumento na quantidade do prazo, que é mais um dia. Toda vez que o assunto envolver matemática, soma ou quantidades, usamos a palavra **mais**.",
      "A resposta é **mais** com a letra I, pois a frase fala o tempo todo sobre aumentar a quantidade de dias para o trabalho. O uso do **mas** sem a letra I serve para oposição, como na desculpa **queria acabar, mas acabou a luz**."
    ],
  },
  {
    slug: "a6-ex12-escrita", // #24
    tipo: "escrita_lacuna",
    enunciado: "Assinei o contrato ___ as condições eram boas.",
    gabarito: "porque",
    armadilhaId: "porque_family",
    feedbackAcerto:
      "A gente usa o **porque** todo junto na hora de apresentar os motivos que levaram a uma ação, diferente da versão separada que serve para interrogar alguém.\n\nSe você conseguir trocar a palavra por **pois** e a frase **assinei pois as condições eram boas** soar tranquila, a escolha é a versão junta.",
    feedbackErro: [
      "A frase está fazendo uma pergunta querendo descobrir um motivo ou está entregando a justificativa no prato?",
      "A frase conta exatamente a razão por trás de a pessoa ter assinado os papéis. Tente colocar a palavra **pois** no lugar para ver se a leitura flui, o que garante o uso do **porque** escrito junto.",
      "A resposta é o **porque** todo junto, já que você está apenas contando as razões que facilitaram a assinatura do documento. Para usar a versão separada, a frase precisaria ser uma pergunta direta."
    ],
  },
  {
    slug: "a6-ex16-escrita", // #25
    tipo: "escrita_lacuna",
    enunciado: "O pedido foi feito ___ três semanas e ainda não chegou.",
    gabarito: "há",
    armadilhaId: "ha_a",
    feedbackAcerto:
      "Nós usamos **há** com H para mostrar um tempo que já rodou e ficou para trás, enquanto a letra **a** sozinha serve para o tempo que ainda vamos viver.\n\nSe você testar trocando por **faz** e a frase **feito faz três semanas** fizer total sentido, o correto é ficar com o **há**.",
    feedbackErro: [
      "A compra que originou o pedido aconteceu no passado ou ainda vai ser feita mês que vem?",
      "O pedido já foi faturado e o tempo de três semanas passou, o que prova que é passado. Tente trocar pela palavra **faz** na leitura, pois se der certo, a resposta exige a letra H.",
      "A resposta é **há**, pois o evento de fazer o pedido aconteceu no tempo passado e já começou a contar os dias. A letra **a** sozinha seria ótima para falar do futuro, como em **vai chegar daqui a três semanas**."
    ],
  },
  {
    slug: "a6-ex20-escrita", // #26
    tipo: "escrita_lacuna",
    enunciado: "Ele é um ___ pagador, sempre atrasa.",
    gabarito: "mau",
    armadilhaId: "mau_mal",
    feedbackAcerto:
      "A palavra **mau** com a letra U descreve a característica natural de uma pessoa, enquanto o **mal** com L serve para mostrar de que jeito uma tarefa foi feita em um dia específico.\n\nA dica mais segura é testar a regra do contrário na frase, e como dizer **um bom pagador** tem um sentido muito claro para nós, isso confirma que a versão de quem não paga precisa do **mau**.",
    feedbackErro: [
      "A palavra que falta funciona como uma característica conhecida do cliente ou está descrevendo uma tarefa isolada?",
      "Esse título de devedor acabou virando uma característica da pessoa ao longo do tempo. Tente pensar no contrário aplicando a palavra **bom**, e veja que como **bom pagador** faz sentido, a palavra certa para quem atrasa leva a letra U.",
      "A resposta é **mau** com U, pois essa palavra bate de frente com a palavra **bom** e serve para dar características para as pessoas. O uso do **mal** com L fica reservado para quando você fala de uma ação que deu errado, como **ele dirigiu mal hoje**."
    ],
  },
  {
    slug: "a6-ex24-escrita", // #27
    tipo: "escrita_lacuna",
    enunciado: "Esse recado é para ___.",
    gabarito: "mim",
    armadilhaId: "mim_eu",
    feedbackAcerto:
      "Sempre que você trombar com pequenas palavras de direção, como **para**, **por** e **de**, a finalização certa é com **mim**, pois o **eu** fica apenas para a pessoa que vai dar início a uma ação importante.\n\nSe você conseguir trocar por **ele** e a frase **para ele** soar normal na hora da conversa, a escolha mais segura é o **mim**.",
    feedbackErro: [
      "Olhe bem para a palavra que encosta no espaço em branco, porque ela entrega a regra inteira.",
      "A palavra **para** aparece puxando a linha. Sempre que o **para** der as caras, a gente encerra a ideia com **mim**. O pronome **eu** fica melhor no começo da ação, quando você avisa **eu vou anotar o recado**.",
      "A resposta certa é o **mim**, já que ele é o par perfeito para vir logo em seguida da palavra **para**. O pronome **eu** ficaria esquisito aí porque ele só quer saber de agir, como em **eu vou entregar o recado**."
    ],
  },
  {
    slug: "a6-ex28-escrita", // #28
    tipo: "escrita_lacuna",
    enunciado: "Você sabe ___ eu posso encontrar o documento?",
    gabarito: "onde",
    armadilhaId: "onde_aonde",
    feedbackAcerto:
      "Nós usamos **onde** quando a intenção é descobrir em qual gaveta ou lugar fixo um objeto está escondido, deixando o **aonde** para situações em que a pessoa vai andar e buscar um destino.\n\nSe você tentar trocar a palavra da lacuna pela expressão **em que lugar** e a frase continuar com o sentido intacto, pode confirmar o **onde**.",
    feedbackErro: [
      "A pergunta quer descobrir em que lugar parado o documento foi guardado ou está pedindo uma rota de caminhada?",
      "O papel está parado em alguma prateleira esperando alguém ir buscar, sem nenhum movimento do próprio objeto. Para tratar de localizações estáticas, a gente opta pelo **onde**.",
      "A resposta é **onde**, pois a frase tenta descobrir o esconderijo fixo de um documento. O **aonde** só entraria na brincadeira se você fosse perguntar para qual destino o funcionário está indo procurar o papel."
    ],
  },
  {
    slug: "a6-ex32-escrita", // #29
    tipo: "escrita_lacuna",
    enunciado: "Ligue para o cliente, ___ ele vai reclamar.",
    gabarito: "senão",
    armadilhaId: "senao_se_nao",
    feedbackAcerto:
      "A versão de **senão** escrita toda junta serve como um puxão de orelha para mostrar as consequências do que vai acontecer se nada for feito, diferente da versão separada que cria regras novas.\n\nSe a leitura fluir bem ao testar a troca por **caso contrário**, a resposta que você procura é o **senão** junto.",
    feedbackErro: [
      "A segunda parte da frase mostra a bagunça que vai acontecer se você ficar de braços cruzados ou cria uma regra burocrática?",
      "A frase inteira é um alerta do chefe sobre o risco de o cliente abrir uma reclamação. Tente fazer a troca mental por **caso contrário** na leitura, pois se der certo, o termo correto é sempre escrito junto.",
      "A resposta é a palavra **senão** toda junta, porque ela entrega a mesma mensagem de **caso contrário** de forma direta. A versão separada ficaria boa em construções diferentes, tipo **se não ligar logo de manhã, o chefe briga**."
    ],
  },
  {
    slug: "a6-ex9-escrita", // #30
    tipo: "escrita_lacuna",
    enunciado: "A reunião foi longa, ___ valeu a pena.",
    gabarito: "mas",
    armadilhaId: "mas_mais",
    feedbackAcerto:
      "Nós usamos a palavra **mas** para costurar duas ideias que normalmente iriam brigar entre si, enquanto o **mais** serve apenas para falar de quantidades numéricas.\n\nUma boa dica é tentar trocar pela palavra **porém** durante a leitura, pois se o sentido continuar valendo, o certo é sempre o **mas**.",
    feedbackErro: [
      "Pense no assunto: o cansaço da reunião longa combina com a sensação boa de que o tempo valeu a pena, ou essas coisas são meio opostas?",
      "Ficar preso em uma reunião comprida é bem cansativo, enquanto a ideia de valer a pena é muito positiva. Para amarrar um lado ruim com um lado bom na mesma frase, usamos o **mas**.",
      "A resposta correta é **mas**, porque a frase precisa de uma palavra capaz de juntar o lado chato de um evento demorado com a surpresa boa de o resultado ser excelente."
    ],
  },
  {
    slug: "a6-ex13-escrita", // #31
    tipo: "escrita_lacuna",
    enunciado: "Você sabe ___ o chefe cancelou a visita?",
    gabarito: "por que",
    armadilhaId: "porque_family",
    feedbackAcerto:
      "A gente recorre ao **por que** separado toda vez que lança uma pergunta solta no ar para tentar descobrir o motivo das coisas, enquanto a versão junta aparece na hora de contar as fofocas ou explicar as causas.\n\nSe você está tentando pescar uma informação sobre as razões do chefe, a escrita certa é separada.",
    feedbackErro: [
      "Mesmo sem um sinal claro de pergunta ali no final, a frase está investigando um motivo escondido ou já entrega as razões mastigadas?",
      "Essa frase funciona como uma pergunta indireta tentando arrancar a verdade do colega. Sempre que existir a intenção de perguntar sobre um motivo de trás das cortinas, usamos o **por que** separado.",
      "A resposta é **por que** separado, visto que toda a estrutura do texto tenta investigar os motivos secretos para o cancelamento do evento. A versão toda junta apareceria caso você estivesse apenas fofocando que ele **cancelou porque torceu o pé**."
    ],
  },
  {
    slug: "a6-ex17-escrita", // #32
    tipo: "escrita_lacuna",
    enunciado: "O prazo vence daqui ___ cinco dias.",
    gabarito: "a",
    armadilhaId: "ha_a",
    feedbackAcerto:
      "A letra **a** trabalha muito bem apontando o calendário para frente em um tempo que ainda não chegou, enquanto a palavra **há** com a letra H foca exclusivamente em coisas do passado.\n\nSe o seu relógio ou calendário marcar um evento que ainda vai chegar, você pode apostar na letra **a** de olhos fechados.",
    feedbackErro: [
      "O prazo terrível de entrega já chegou e venceu na semana passada ou você ainda tem alguns dias pela frente?",
      "Os cinco dias citados na frase ainda não rodaram, então temos uma situação escancarada de futuro. Para falar dos dias que ainda vão pintar pela frente, o certo é usar apenas a letra **a**.",
      "A resposta é a letra **a** sozinha, já que a preocupação da frase envolve um prazo de futuro. Se você tentasse colocar o **há** com H, a frase precisaria avisar que o tempo já se foi, como em **o contrato venceu há cinco dias**."
    ],
  },
  {
    slug: "a6-ex21-escrita", // #33
    tipo: "escrita_lacuna",
    enunciado: "O mecânico fez o serviço ___ e o carro voltou com o mesmo problema.",
    gabarito: "mal",
    armadilhaId: "mau_mal",
    feedbackAcerto:
      "A palavra **mal** com a letra L explica para a gente a forma descuidada com que uma ação foi realizada pelas mãos de alguém, diferente do **mau** com U que atua como um carimbo de qualidade nas pessoas e coisas.\n\nPara testar rápido na cabeça, avalie colocar a palavra **bem**, pois como soaria normal dizer que alguém **fez o serviço bem**, fica provado que a versão negativa precisa do L.",
    feedbackErro: [
      "A palavra está sendo usada para criticar a forma como ele apertou os parafusos no serviço ou quer apenas afirmar que ele não presta como ser humano?",
      "Avalie a frase tentando colocar a palavra **bem** na leitura. Visto que a frase positiva **o mecânico fez o serviço bem** não causa estranheza nos ouvidos, isso garante que a versão de quem pisou na bola pede a escrita com **mal**.",
      "A resposta certa é o **mal** com a letra L, porque a palavra critica a qualidade da execução e o jeito que o conserto foi levado, funcionando como o inverso de dizer que ele fez o trampo **bem** feito."
    ],
  },
  {
    slug: "a6-ex25-escrita", // #34
    tipo: "escrita_lacuna",
    enunciado: "___ sempre chego antes do horário.",
    gabarito: "Eu",
    armadilhaId: "mim_eu",
    feedbackAcerto:
      "A palavra **eu** entra em cena no papel principal sempre que você mesmo toma a iniciativa de praticar a ação e chegar aos lugares, deixando o **mim** apenas para a passividade de vir depois do **para** ou do **de**.\n\nSe o início da frase mostrar alguém pegando no pesado ou chegando cedo de propósito, não tenha dúvidas de que é **eu**.",
    feedbackErro: [
      "Pense com clareza: quem é que levanta cedo e chega antes da hora marcada bater no relógio?",
      "A ação de chegar cedo no trabalho foi sua e não do vizinho. Quando você assume o controle da ação para você mesmo, o correto é usar o **eu**.",
      "A resposta é **eu**, visto que você é a pessoa dedicada que toma a atitude e chega antes do batente. O **mim** a gente deixa para os momentos inofensivos em que só recebemos coisas, como **ele chegou antes de mim**."
    ],
  },
  {
    slug: "a6-ex29-escrita", // #35
    tipo: "escrita_lacuna",
    enunciado: "Não sei ___ ir para resolver esse problema.",
    gabarito: "aonde",
    armadilhaId: "onde_aonde",
    feedbackAcerto:
      "O uso do **aonde** serve perfeitamente para tratar de destinos e caminhadas de um lugar para o outro, enquanto o **onde** gosta mais de assuntos parados e objetos escondidos num canto.\n\nSe você conseguir ler com **para onde ir** e o sentido do deslocamento continuar normal, a resposta pede o **aonde**.",
    feedbackErro: [
      "A frase fala sobre um local fixo que você não sabe em qual rua fica, ou está discutindo qual caminho você vai ter que percorrer de carro para resolver o estresse?",
      "Você precisa pegar os seus pertences e se deslocar. Tente realizar a troca por **para onde** mentalmente, pois ver que **para onde ir** dá na mesma garante que o termo tem a letra A no começo.",
      "A resposta certa é **aonde**, porque a frase indica claramente que você vai precisar gastar a sola do sapato em algum destino para resolver a situação. O **onde** funcionaria melhor se você parasse e perguntasse **onde fica o escritório responsável?**."
    ],
  },
  {
    slug: "a6-ex33-escrita", // #36
    tipo: "escrita_lacuna",
    enunciado: "___ houver assinatura, o contrato não vale.",
    gabarito: "Se não",
    armadilhaId: "senao_se_nao",
    feedbackAcerto:
      "A gente escreve **se não** separado quando existe uma condição claríssima para o negócio dar certo, enquanto a palavra toda junta funciona mais como um simples aviso de **caso contrário**.\n\nSe você tentar repassar a lógica lendo **se a assinatura não estiver lá** e vir que dá no mesmo, isso mostra que o **se** tem poder sozinho e não deve grudar no **não**.",
    feedbackErro: [
      "A oração está deixando bem claro qual é a regra do jogo para garantir que o papel seja legal, ou está apenas puxando a sua orelha sobre o final do dia?",
      "Tente reler a mensagem pensando rapidamente na regra de papelada. Visto que a frase **se você não assinar** continua comunicando o mesmo alerta grave, isso comprova que as palavras são independentes e andam separadas.",
      "A resposta é **se não** separado, porque essa forma de escrita estabelece a regra de vida do contrato para ter validade. O uso do **senão** junto trabalha melhor como ameaça nos momentos em que você diria para um parceiro **vem assinar logo de uma vez, senão você tranca o processo**."
    ],
  },
];