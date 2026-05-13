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
    slug: "a5-ex1", // #1
    tipo: "lacuna_unica",
    enunciado: "A sala de reunião ___ reservada para amanhã.",
    opcoes: ["está", "esta"],
    gabarito: "está",
    armadilhaId: "esta_esta",
    feedbackAcerto:
      "A palavra **está** com acento serve para mostrar a situação atual de alguma coisa, enquanto a versão sem o sinal funciona apenas para apontar para um objeto ou pessoa.\n\nSe você conseguir trocar por **encontra-se** e a frase **a sala encontra-se reservada** fizer sentido, o uso do acento é necessário.",
    feedbackErro: [
      "A frase quer mostrar como a sala se encontra neste momento ou está apenas apontando para ela?",
      "Tente fazer a leitura trocando a palavra por **encontra-se**. Como dizer que **a sala encontra-se reservada** soa normal, isso mostra que a situação exige o **está** com acento.",
      "A resposta certa é **está** com acento, já que a intenção da frase é explicar a situação da sala. A versão sem acento apareceria apenas se você estivesse mostrando o local para alguém, dizendo algo como **esta sala aqui é muito boa**."
    ],
  },
  {
    slug: "a5-ex2", // #2
    tipo: "lacuna_unica",
    enunciado: "Ontem ele não ___ entregar o relatório a tempo.",
    opcoes: ["pôde", "pode"],
    gabarito: "pôde",
    armadilhaId: "pode_pode",
    feedbackAcerto:
      "O **pôde** com acento é usado para avisar que um imprevisto aconteceu lá no passado, enquanto a palavra **pode** sem nenhum sinal indica as coisas que acontecem hoje ou no futuro.\n\nComo a presença da palavra **ontem** joga a situação para trás, a escrita correta exige o acento.",
    feedbackErro: [
      "Essa dificuldade para entregar o relatório aconteceu no passado ou é um problema de agora?",
      "Repare que a frase já começa com a palavra **ontem**, o que obriga a gente a falar do passado. Sempre que a situação já aconteceu e ficou para trás, colocamos o acento na palavra.",
      "A resposta é **pôde** com acento, pois o texto deixa claro que o prazo de ontem já foi perdido. A forma sem acento a gente reserva para o dia a dia, como na frase **ele pode entregar o documento hoje**."
    ],
  },
  {
    slug: "a5-ex3", // #3
    tipo: "lacuna_unica",
    enunciado: "A decisão da chefe foi muito ___.",
    opcoes: ["sábia", "sabia"],
    gabarito: "sábia",
    armadilhaId: "sabia_sabia",
    feedbackAcerto:
      "Usamos **sábia** com acento para elogiar uma atitude inteligente, diferente da palavra **sabia** sem o sinal, que indica apenas que a pessoa tinha conhecimento de uma informação.\n\nSe você tentar ler a frase usando a palavra **inteligente** no lugar e o sentido bater certinho, a escolha leva o acento.",
    feedbackErro: [
      "A palavra que falta serve para dar um elogio ao que a chefe fez ou quer apenas dizer que ela tinha uma informação?",
      "Tente avaliar a frase usando a palavra **inteligente** como um teste. Como a leitura **a decisão foi muito inteligente** mantém a ideia original, isso indica que o espaço pede o acento.",
      "A resposta correta é **sábia** com acento, já que o texto quer destacar a ótima qualidade da decisão que foi tomada. A palavra sem acento apareceria caso a frase mostrasse uma ação, do tipo **ela sabia muito bem o que estava fazendo**."
    ],
  },
  {
    slug: "a5-ex4", // #4
    tipo: "lacuna_unica",
    enunciado: "Não ___ do que eu estou dizendo.",
    opcoes: ["duvida", "dúvida"],
    gabarito: "duvida",
    armadilhaId: "duvida_duvida",
    feedbackAcerto:
      "A palavra **dúvida** com acento dá nome àquela incerteza que você tem na cabeça, enquanto a forma sem acento aponta para a atitude de desconfiar de alguém.\n\nPara tirar a prova, tente trocar por **desconfia**, pois se a leitura **não desconfia do que estou dizendo** fluir naturalmente, o certo é usar a palavra sem acento.",
    feedbackErro: [
      "O texto está pedindo para a pessoa não desconfiar da conversa ou está falando sobre ter uma pergunta anotada no papel?",
      "Faça o teste rápido substituindo a palavra por **desconfia**. Como a frase **não desconfia do que eu estou dizendo** entrega exatamente o mesmo recado, o certo é usar a forma sem acento.",
      "A resposta é **duvida** sem acento, porque a intenção da mensagem é impedir que quem ouve desconfie da história contada. A versão acentuada funciona apenas para nomear o problema, como quando você avisa que **tem uma dúvida sobre o projeto**."
    ],
  },
  {
    slug: "a5-ex5", // #5
    tipo: "lacuna_unica",
    enunciado: "Terminar esse serviço ___ prioridade.",
    opcoes: ["é", "e"],
    gabarito: "é",
    armadilhaId: "e_e",
    feedbackAcerto:
      "O **é** com acento confirma o que algo significa de verdade. Já a letra **e** sozinha funciona apenas para juntar duas coisas diferentes na mesma frase, como quando pedimos **café e leite**.\n\nSe você conseguir ler com **representa** e perceber que **terminar esse serviço representa prioridade** tem total sentido, o acento precisa ser mantido.",
    feedbackErro: [
      "A frase tenta explicar a importância de terminar o serviço ou quer apenas juntar o serviço com outra tarefa da lista?",
      "Avalie a frase trocando o espaço em branco pela palavra **significa**. Como a ideia de que o **serviço significa prioridade** amarra muito bem o pensamento, isso mostra que a palavra leva acento.",
      "A resposta é **é** com acento, visto que a mensagem busca dar um peso de prioridade para a tarefa da oficina. O uso da letra sem acento serve para grudar itens, como ao pedir **o alicate e a chave de fenda**."
    ],
  },
  {
    slug: "a5-ex6", // #6
    tipo: "lacuna_unica",
    enunciado: "Ele não ___ conta do trabalho sozinho.",
    opcoes: ["dá", "da"],
    gabarito: "dá",
    armadilhaId: "da_da",
    feedbackAcerto:
      "O **dá** com acento aparece quando alguém faz uma ação, como dar um recado ou dar conta de um serviço. Já o **da** sem acento serve só para juntar palavras, mostrando de quem é a coisa.\n\nUma forma simples de tirar a dúvida é tentar ler a frase com **consegue dar** no lugar do espaço, pois como **ele não consegue dar conta** faz sentido, o acento é garantido.",
    feedbackErro: [
      "A frase está falando de uma pessoa tentando fazer uma tarefa difícil ou está apenas ligando duas palavras soltas?",
      "Tente ler a frase colocando **consegue dar** no lugar do espaço. Como essa troca funciona bem para explicar que o rapaz não vai vencer o serviço, a palavra pede o uso do acento.",
      "A resposta certa é **dá** com acento, porque o texto fala diretamente sobre a ação de fazer um trabalho pesado. A versão sem acento funciona só para conectar as coisas, como quando dizemos que **a chave da oficina sumiu**."
    ],
  },
  {
    slug: "a5-ex7-escrita", // #7
    tipo: "escrita_lacuna",
    enunciado: "O pedido ___ aguardando aprovação desde ontem.",
    gabarito: "está",
    armadilhaId: "esta_esta",
    feedbackAcerto:
      "A palavra **está** com acento mostra como um processo se encontra no momento, enquanto a versão **esta** sem o sinal serve para apontar para algo perto de você.\n\nSe você conseguir ler **o pedido encontra-se aguardando** e achar o sentido claro, o uso do acento está correto.",
    feedbackErro: [
      "A mensagem quer informar em que pé está o pedido ou quer apenas apontar para um pacote na mesa?",
      "Tente substituir a palavra que falta por **encontra-se**. Como a leitura flui muito bem explicando a situação de espera do pacote, o acento na palavra é necessário.",
      "A resposta é **está** com acento, porque a frase informa a situação daquele pedido que aguarda liberação. A palavra sem acento seria usada para apontar o dedo, como em **esta caixa deve ser enviada hoje**."
    ],
  },
  {
    slug: "a5-ex11-escrita", // #8
    tipo: "escrita_lacuna",
    enunciado: "Na semana passada, ninguém ___ resolver o problema.",
    gabarito: "pôde",
    armadilhaId: "pode_pode",
    feedbackAcerto:
      "O **pôde** com o acento de chapéu serve para relatar situações que já passaram, deixando o **pode** sem acento livre para cuidar das coisas de hoje ou de amanhã.\n\nComo o começo da frase avisa que tudo aconteceu na **semana passada**, usamos o acento para marcar o passado.",
    feedbackErro: [
      "Essa falha na hora de resolver o problema rolou nos dias de hoje ou é um assunto que ficou para trás?",
      "A leitura já entrega que a situação ocorreu na semana passada, o que joga o assunto para o passado. Toda vez que relatamos algo que já foi, o acento entra na palavra para fazer essa marcação.",
      "A resposta correta é **pôde** com acento, visto que o texto relata uma dor de cabeça antiga que ninguém conseguiu resolver. A versão sem acento a gente guarda para o cenário atual, como quando você pergunta se **alguém pode ajudar agora**."
    ],
  },
  {
    slug: "a5-ex15-escrita", // #9
    tipo: "escrita_lacuna",
    enunciado: "Foi uma escolha muito ___ esperar antes de assinar.",
    gabarito: "sábia",
    armadilhaId: "sabia_sabia",
    feedbackAcerto:
      "Nós usamos **sábia** com acento para elogiar uma atitude inteligente, enquanto a palavra **sabia** sem sinal relata apenas que uma pessoa tinha conhecimento de algo.\n\nSe você testar a palavra **inteligente** na frase e vir que **foi uma escolha muito inteligente** faz sentido, o acento entra no texto.",
    feedbackErro: [
      "A frase está tentando elogiar quem decidiu esperar ou quer apenas contar que alguém conhecia uma informação?",
      "Avalie a frase usando a palavra **inteligente**. Como a leitura funciona bem e mostra que a atitude foi positiva, isso confirma que a lacuna exige a versão com acento.",
      "A resposta é **sábia** com acento, porque o objetivo do texto é destacar que ter paciência antes de assinar foi uma ótima escolha. O uso sem acento ficaria bom se o foco fosse outro, como em **ela já sabia que não devia assinar correndo**."
    ],
  },
  {
    slug: "a5-ex19-escrita", // #10
    tipo: "escrita_lacuna",
    enunciado: "Tenho uma ___ sobre o horário da reunião.",
    gabarito: "dúvida",
    armadilhaId: "duvida_duvida",
    feedbackAcerto:
      "A forma **dúvida** com acento dá nome àquela incerteza que fica martelando na nossa cabeça, enquanto a versão **duvida** sem o sinal mostra que alguém está desconfiando de uma história.\n\nSe você fizer o teste trocando por **pergunta** e a frase mantiver a mesma ideia sobre o horário, o uso da palavra acentuada resolve o problema.",
    feedbackErro: [
      "O texto fala sobre ter um questionamento guardado na cabeça ou está apontando para o ato de desconfiar da chefia?",
      "Tente ler o pedaço trocando o espaço em branco pela palavra **pergunta**. Visto que ter uma **pergunta sobre o horário** faz todo o sentido, o acento ajuda a dar nome a essa incerteza.",
      "A resposta certa é **dúvida** com acento, já que a mensagem quer dar nome ao problema de não ter certeza sobre a agenda. A falta de acento apareceria caso alguém agisse com desconfiança, como na frase **ele duvida do horário combinado**."
    ],
  },
  {
    slug: "a5-ex23-escrita", // #11
    tipo: "escrita_lacuna",
    enunciado: "Esse ___ o contrato que precisa ser assinado.",
    gabarito: "é",
    armadilhaId: "e_e",
    feedbackAcerto:
      "O **é** com acento serve para confirmar exatamente o que uma coisa é. A letra **e** sem acento, por outro lado, serve apenas para somar duas coisas na conversa, como na união de **caneta e papel**.\n\nAo conseguir ler que **esse representa o contrato** sem perder a lógica, fica provado que o acento precisa estar lá.",
    feedbackErro: [
      "A frase serve para confirmar qual é o papel certo na mesa ou tenta somar dois papéis diferentes?",
      "Aplique a dica de substituir a lacuna pela palavra **representa**. Como o texto ganha um sentido firme apontando o documento certo, a escolha com acento vira a única opção viável.",
      "A resposta é o **é** com acento, porque a pessoa está confirmando exatamente qual papel precisa ganhar uma assinatura. A letra desacompanhada costuma aparecer quando juntamos as coisas, como em **entregue a nota fiscal e a via do contrato**."
    ],
  },
  {
    slug: "a5-ex27-escrita", // #12
    tipo: "escrita_lacuna",
    enunciado: "___ pra agendar uma reunião para essa semana?",
    gabarito: "Dá",
    armadilhaId: "da_da",
    feedbackAcerto:
      "A palavra **dá** com acento mostra uma possibilidade ou esforço para fazer algo, diferente do **da** sem acento que só liga palavras.\n\nSe você conseguir ler a pergunta começando com **tem como** e o sentido continuar sendo o mesmo sobre agendar a reunião, pode colocar o acento sem medo.",
    feedbackErro: [
      "A pergunta quer saber se existe a possibilidade de realizar a reunião ou está tentando grudar duas palavras na mesma linha?",
      "Faça o teste prático lendo o começo da frase com a expressão **tem como**. Como investigar se **tem como agendar** soa super normal no ambiente de trabalho, o acento precisa marcar presença.",
      "A resposta é **dá** com acento, visto que o colega está tentando descobrir se é possível encaixar mais um compromisso na semana. A forma sem acento fica responsável apenas por amarrar os detalhes, como quando pedimos **a pauta da reunião**."
    ],
  },
  {
    slug: "a5-ex8-escrita", // #13
    tipo: "escrita_lacuna",
    enunciado: "Por favor, assine ___ folha antes de sair.",
    gabarito: "esta",
    armadilhaId: "esta_esta",
    feedbackAcerto:
      "A palavra **esta** sem acento serve perfeitamente para apontar para um papel que está na sua frente, deixando o **está** com acento para explicar se um documento já foi preenchido ou não.\n\nUma tática boa é colocar a palavra **essa** no lugar, pois se a frase não perder o sentido, o certo é não usar o acento.",
    feedbackErro: [
      "A pessoa está apontando para o papel em que o cliente deve assinar ou está descrevendo a aparência da folha?",
      "Tente ler o recado substituindo o termo pela palavra **essa**. Visto que pedir para **assinar essa folha** passa exatamente a mesma mensagem, a palavra correta exige a ausência do acento.",
      "A resposta é **esta** sem acento, porque a pessoa está simplesmente indicando em qual papel a caneta deve ser usada. O uso do acento mudaria totalmente a ideia da frase, como em **a folha já está assinada**."
    ],
  },
  {
    slug: "a5-ex12-escrita", // #14
    tipo: "escrita_lacuna",
    enunciado: "Você ___ me ajudar com esse formulário?",
    gabarito: "pode",
    armadilhaId: "pode_pode",
    feedbackAcerto:
      "O **pode** sem acento funciona como um pedido de socorro para o momento atual, enquanto a forma **pôde** com acento fala sobre as dificuldades que já aconteceram no passado.\n\nComo o colega está querendo uma ajuda no formulário agora mesmo, a escrita certa não leva acento.",
    feedbackErro: [
      "Esse pedido de ajuda para preencher o documento vale para hoje ou é uma reclamação sobre algo da semana passada?",
      "A leitura revela um pedido de auxílio que precisa ser resolvido no presente. Como não existe nenhuma indicação de que esse problema ficou para trás, descartamos o uso do acento.",
      "A resposta certa é **pode** sem acento, visto que a pergunta tenta descobrir se o colega tem tempo para ajudar neste exato momento. A versão acentuada serviria apenas para perguntar sobre o passado, do tipo **você pôde avaliar aquele caso ontem?**."
    ],
  },
  {
    slug: "a5-ex16-escrita", // #15
    tipo: "escrita_lacuna",
    enunciado: "Ela ___ de tudo sobre o assunto, mas ficou quieta.",
    gabarito: "sabia",
    armadilhaId: "sabia_sabia",
    feedbackAcerto:
      "A versão **sabia** sem acento mostra que alguém guardava um conhecimento sobre a situação, ao passo que a palavra **sábia** com acento aparece para elogiar atitudes inteligentes.\n\nSe você conseguir trocar a lacuna por **conhecia** e a leitura **ela conhecia de tudo** ficar coerente, a palavra não leva acento.",
    feedbackErro: [
      "O texto conta que a moça tinha bastante informação escondida ou tenta fazer um elogio para a atitude dela de ficar em silêncio?",
      "Aplique o teste da palavra **conhecia** na hora de entender a frase. Como avisar que **ela conhecia de tudo** transmite a mesma ideia de que ela tinha informações, a forma correta ignora o uso do acento.",
      "A resposta é **sabia** sem acento, porque a intenção é mostrar que a pessoa estava bem informada sobre os bastidores. O acento entraria na jogada apenas se você quisesse exaltar o silêncio dela, como em **ficar quieta foi uma decisão muito sábia**."
    ],
  },
  {
    slug: "a5-ex20-escrita", // #16
    tipo: "escrita_lacuna",
    enunciado: "Ele ___ que o projeto vai ser aprovado.",
    gabarito: "duvida",
    armadilhaId: "duvida_duvida",
    feedbackAcerto:
      "A palavra **duvida** sem o acento mostra a atitude de alguém que está com o pé atrás sobre uma ideia, enquanto a versão acentuada dá o nome a esse sentimento de incerteza.\n\nSe a frase aceitar a palavra **desconfia** tranquilamente, confirmando que **ele desconfia que o projeto vai ser aprovado**, a versão sem sinal está correta.",
    feedbackErro: [
      "A frase mostra a desconfiança agindo na cabeça do rapaz ou apenas informa que ele tem uma pergunta anotada no caderno?",
      "Tente ler o problema colocando a palavra **desconfia** no espaço em branco. Como esse teste prova que a pessoa não leva muita fé na aprovação, fica claro que a atitude não exige acentuação.",
      "A resposta é **duvida** sem acento, já que o foco da mensagem é apontar a postura de desconfiança do rapaz. O uso com acento serviria apenas para identificar uma falha na explicação, como em **ele ficou com uma dúvida sobre os custos do projeto**."
    ],
  },
  {
    slug: "a5-ex24-escrita", // #17
    tipo: "escrita_lacuna",
    enunciado: "Preciso do documento ___ da assinatura do responsável.",
    gabarito: "e",
    armadilhaId: "e_e",
    feedbackAcerto:
      "A letra **e** livre de acentos funciona apenas para somar coisas diferentes em um mesmo pedido, diferente do **é** agudo que afirma o que algo é de verdade.\n\nAo tentar fazer a leitura usando a palavra **mais** no meio do caminho, você percebe que precisar do documento **mais** a assinatura faz todo o sentido, garantindo a versão sem acento.",
    feedbackErro: [
      "A frase está somando os papéis necessários para liberar o atendimento ou está tentando explicar quem é o responsável?",
      "Faça a prova trocando a letra em branco pela palavra **mais**. Como a ideia de exigir um papel **mais** um carimbo organiza os pedidos perfeitamente, a ausência do acento resolve a questão.",
      "A resposta é a letra **e** sem acento, porque a pessoa está simplesmente juntando duas obrigações diferentes para o serviço. A forma acentuada mudaria a conversa para uma confirmação, do tipo **a assinatura do gerente é obrigatória**."
    ],
  },
  {
    slug: "a5-ex28-escrita", // #18
    tipo: "escrita_lacuna",
    enunciado: "O resultado ___ análise vai sair amanhã.",
    gabarito: "da",
    armadilhaId: "da_da",
    feedbackAcerto:
      "O termo **da** sem acento age apenas para ligar palavras e mostrar que o resultado pertence àquela análise, enquanto o **dá** acentuado indica a ação de entregar ou realizar algo.\n\nSe você puder ler a frase pensando no resultado **de a** análise de forma separada na cabeça, usar o termo sem acento funciona perfeitamente.",
    feedbackErro: [
      "O texto mostra de qual processo vem esse resultado ou relata o esforço de um funcionário para liberar os dados?",
      "Tente quebrar a palavra mentalmente em dois pedaços, pensando no **resultado de a análise**. Como a intenção é só amarrar o dado com o lugar de onde ele veio, o acento fica de fora.",
      "A resposta é **da** sem acento, porque a palavra só conecta o resultado com a análise que foi feita. A versão com acento entra apenas quando destacamos a ação, como em **o sistema dá o resultado amanhã de manhã**."
    ],
  },
  {
    slug: "a5-ex9-escrita", // #19
    tipo: "escrita_lacuna",
    enunciado: "Pode pegar ___ caixa e levar para o depósito.",
    gabarito: "esta",
    armadilhaId: "esta_esta",
    feedbackAcerto:
      "Nós usamos **esta** sem acento quando a intenção é apontar diretamente para a caixa, deixando a forma acentuada **está** para avisar se o pacote se encontra pesado ou amassado.\n\nSe a troca pela palavra **essa** funcionar bem durante a leitura, a falta de acento é garantida.",
    feedbackErro: [
      "A frase está apontando para qual caixa deve ser levada ou está reclamando da situação em que o papelão se encontra?",
      "Avalie o recado tentando colocar a palavra **essa** no meio. Visto que a ordem de **pegar essa caixa** não muda a mensagem, a palavra cumpre seu papel de apontar e dispensa o acento.",
      "A resposta correta é **esta** sem acento, porque a fala serve apenas para mostrar qual caixa precisa ser transportada. O uso do acento criaria um aviso sobre a condição do pacote, como na frase **a caixa está no fundo do corredor**."
    ],
  },
  {
    slug: "a5-ex13-escrita", // #20
    tipo: "escrita_lacuna",
    enunciado: "Essa máquina ___ funcionar por mais dois anos.",
    gabarito: "pode",
    armadilhaId: "pode_pode",
    feedbackAcerto:
      "A palavra **pode** sem acento projeta o que vai acontecer daqui para a frente, enquanto a versão **pôde** com acento avalia algo que a máquina fez lá no passado.\n\nComo a expectativa envolve o futuro dos próximos dois anos, o acento não tem espaço nessa frase.",
    feedbackErro: [
      "A avaliação diz respeito à força da máquina para trabalhar no futuro ou analisa os defeitos dela em anos passados?",
      "A presença da expressão **por mais dois anos** joga a situação diretamente para o futuro. Quando a frase não fala de um problema antigo, a gente não usa o acento.",
      "A resposta é **pode** sem acento, visto que é uma previsão de funcionamento para os dias que ainda vão chegar. A forma acentuada entra na frase apenas em relatos antigos, como ao lamentar que **a máquina pôde operar muito pouco na gestão passada**."
    ],
  },
  {
    slug: "a5-ex17-escrita", // #21
    tipo: "escrita_lacuna",
    enunciado: "Eu não ___ que o prazo era hoje.",
    gabarito: "sabia",
    armadilhaId: "sabia_sabia",
    feedbackAcerto:
      "A forma **sabia** sem acento mostra a falta de conhecimento sobre uma informação, como o prazo de entrega, diferente da palavra **sábia** acentuada que elogia uma atitude madura.\n\nSe você ler a frase substituindo por **tinha conhecimento** e fizer sentido, a regra confirma que não há acento.",
    feedbackErro: [
      "A pessoa está admitindo que não dominava as informações sobre a data ou está querendo elogiar a qualidade do prazo?",
      "Faça o teste de leitura confirmando que a pessoa não **tinha conhecimento** do assunto. Como o resultado passa a mesma mensagem, a palavra acerta o alvo sem precisar de acentuação.",
      "A resposta é **sabia** sem acento, porque a frase é um aviso bem direto sobre o desconhecimento da data. O uso do acento mudaria a conversa para um elogio, como em **cobrar esse prazo agora não foi uma atitude muito sábia**."
    ],
  },
  {
    slug: "a5-ex21-escrita", // #22
    tipo: "escrita_lacuna",
    enunciado: "Ninguém ___ da capacidade dela para o cargo.",
    gabarito: "duvida",
    armadilhaId: "duvida_duvida",
    feedbackAcerto:
      "A versão **duvida** sem acento indica que ninguém tem atitudes de desconfiar da moça, enquanto a forma **dúvida** com acento serviria para falar da incerteza em si.\n\nSe a troca por **desconfia** mantiver o respeito intacto dizendo que **ninguém desconfia da capacidade dela**, a palavra fica sem acento.",
    feedbackErro: [
      "A oração afirma que não há gente com postura de desconfiar da moça ou fala sobre ter uma pergunta anotada na gaveta?",
      "Tente ler o elogio trocando o espaço vazio pela palavra **desconfia**. Como a ideia de que o setor confia nela continua igual, isso comprova que o acento não deve ser usado.",
      "A resposta certa é **duvida** sem acento, já que o texto destaca a falta de atitudes negativas da equipe em relação a ela. A versão com acento serviria para dar um nome à insegurança, do tipo **não restou nenhuma dúvida sobre a promoção dela**."
    ],
  },
  {
    slug: "a5-ex25-escrita", // #23
    tipo: "escrita_lacuna",
    enunciado: "Você vai representar a empresa ___ o setor comercial.",
    gabarito: "e",
    armadilhaId: "e_e",
    feedbackAcerto:
      "A letra **e** sem acento serve para unir coisas, juntando a missão de cuidar da empresa com a de cuidar do setor. A versão com acento tentaria confirmar quem o setor é.\n\nAo testar a leitura imaginando a empresa **mais** o setor comercial, a conta fecha perfeitamente sem necessidade de acentuação.",
    feedbackErro: [
      "A chefia está somando o setor comercial nas responsabilidades do funcionário ou está tentando explicar o que a empresa faz?",
      "Avalie a frase trocando a lacuna pela palavra **mais**. Visto que cuidar da empresa **mais** o setor resume bem a promoção, a ponte fica pronta sem a ajuda do acento.",
      "A resposta é a letra **e** sem acento, porque o recado junta duas tarefas nas costas do mesmo funcionário. O acento ganharia espaço apenas para confirmar informações, como avisar que **o setor comercial é o que mais trabalha**."
    ],
  },
  {
    slug: "a5-ex29-escrita", // #24
    tipo: "escrita_lacuna",
    enunciado: "Vou falar com o chefe ___ equipe.",
    gabarito: "da",
    armadilhaId: "da_da",
    feedbackAcerto:
      "O termo **da** sem acento funciona para ligar o chefe ao grupo dele, mostrando de onde ele é. Já o **dá** com acento seria para indicar a ação de dar alguma coisa.\n\nComo a intenção é só mostrar que ele é o chefe daquele grupo, a ligação é feita de forma simples e sem acento.",
    feedbackErro: [
      "O funcionário está tentando dizer de qual grupo é aquele chefe ou relata uma atitude dele ajudando a equipe?",
      "Tente pensar na união da palavra **de** com **a**, apenas ligando o chefe com a equipe dele. Como o objetivo é costurar a relação dos dois, o acento não entra na frase.",
      "A resposta correta é **da** sem acento, pois a palavra funciona como um elo entre o líder e o grupo que trabalha com ele. A versão com acento destacaria uma atitude, como na frase em que **o chefe dá muito apoio para todos**."
    ],
  },
  {
    slug: "a5-ex10-escrita", // #25
    tipo: "escrita_lacuna",
    enunciado: "A entrega ___ prevista para sexta-feira.",
    gabarito: "está",
    armadilhaId: "esta_esta",
    feedbackAcerto:
      "A forma **está** com acento indica a situação em que o pacote se encontra no momento, enquanto o **esta** sem o sinal serviria apenas para apontar para um pacote específico.\n\nSe você conseguir ler que a entrega **encontra-se prevista** para logo e a promessa fizer sentido, o uso do acento está correto.",
    feedbackErro: [
      "A mensagem tenta informar o andamento da entrega ou a pessoa está apenas apontando para um pacote na mesa?",
      "Avalie a frase aplicando a palavra **encontra-se** na leitura. Como a explicação de que o pacote **encontra-se previsto** ajuda a passar a informação, o acento é necessário ali.",
      "A resposta é **está** com acento, porque a frase avisa exatamente a situação da encomenda no fim da semana. O emprego da versão sem acento focaria em apontar algo, como em **esta entrega vai por avião**."
    ],
  },
  {
    slug: "a5-ex14-escrita", // #26
    tipo: "escrita_lacuna",
    enunciado: "Ela não ___ comparecer à reunião de segunda-feira passada.",
    gabarito: "pôde",
    armadilhaId: "pode_pode",
    feedbackAcerto:
      "A palavra **pôde** ganhando o acento joga o problema diretamente para o passado, enquanto o **pode** sem acento define avisos e regras para o dia de hoje.\n\nComo a desculpa cita uma **segunda-feira passada** que já foi embora, o uso do acento entra para fechar a conta.",
    feedbackErro: [
      "O aviso justifica a falta num compromisso que ocorreu no passado ou diz que a colega não vai aparecer na empresa mais tarde?",
      "A presença da palavra **passada** joga a conversa direto para a semana anterior. Toda vez que falamos de pendências antigas, o acento ajuda a mostrar que é passado.",
      "A resposta certa é **pôde** com acento, já que a moça tenta explicar o motivo de ter faltado em dias anteriores. A versão que não traz acento cuida das coisas atuais, do tipo **ela não pode entrar na sala agora**."
    ],
  },
  {
    slug: "a5-ex18-escrita", // #27
    tipo: "escrita_lacuna",
    enunciado: "A orientação que ela deu foi muito ___.",
    gabarito: "sábia",
    armadilhaId: "sabia_sabia",
    feedbackAcerto:
      "Nós escolhemos **sábia** com acento para elogiar o conselho dado pela colega, diferente do **sabia** sem acento que diz apenas que alguém conhecia um assunto.\n\nSe colocar a palavra **inteligente** no lugar mantiver o elogio na leitura, você pode confirmar o acento.",
    feedbackErro: [
      "A frase foca em elogiar a qualidade do conselho dela ou apenas avisa que a funcionária conhecia a informação?",
      "Faça o teste de colocar a palavra **inteligente** no final da frase. Como o reconhecimento de que a ajuda dela foi **muito inteligente** funciona com perfeição, a versão acentuada é a resposta.",
      "A resposta é **sábia** com acento, porque o foco do texto é valorizar a qualidade da orientação dela. O formato sem acento contaria o que se passava na cabeça da pessoa, como em **ela já sabia que a planilha ia dar erro**."
    ],
  },
  {
    slug: "a5-ex22-escrita", // #28
    tipo: "escrita_lacuna",
    enunciado: "Em caso de ___, pergunte ao responsável.",
    gabarito: "dúvida",
    armadilhaId: "duvida_duvida",
    feedbackAcerto:
      "A forma **dúvida** com acento age prevendo aquela incerteza comum que surge durante o trabalho, enquanto a escrita **duvida** sem a marcação aponta para o ato de desconfiar de alguém.\n\nSe você usar o termo **pergunta** e a ideia do aviso de **em caso de pergunta** fluir muito bem nas orientações, a regra crava o uso do acento.",
    feedbackErro: [
      "O aviso da empresa prevê o surgimento de uma incerteza durante o serviço ou relata atitudes desconfiadas de alguém?",
      "Tente ler o aviso pensando na palavra **pergunta** para ajudar na checagem. Como a sugestão de procurar o chefe em **caso de pergunta** faz sentido, a palavra certa exige o acento.",
      "A resposta é **dúvida** com acento, visto que o documento tenta orientar a pessoa caso o serviço pareça muito confuso. A falta de acento focaria na atitude das pessoas, como em **o cliente duvida que o aparelho funcione**."
    ],
  },
  {
    slug: "a5-ex26-escrita", // #29
    tipo: "escrita_lacuna",
    enunciado: "A responsável ___ a gerente de operações.",
    gabarito: "é",
    armadilhaId: "e_e",
    feedbackAcerto:
      "O **é** acompanhado de acento confirma quem realmente é a pessoa que manda no setor, diferente do **e** sozinho que juntaria duas pessoas diferentes na frase, somando forças.\n\nAo testar que **a responsável trata-se da gerente** e encontrar total sentido na ideia, o acento é a escolha correta.",
    feedbackErro: [
      "A frase está confirmando a verdadeira função da funcionária ou está tentando somar a gerente com outra pessoa?",
      "Avalie a frase usando a expressão **trata-se da** no lugar. Como informar que a responsável **trata-se da gerente de operações** mostra muito bem a situação, a letra pede o apoio do acento.",
      "A resposta é o **é** com acento, porque a frase esclarece de quem é o cargo mais alto. A letra simples que não carrega acento serviria apenas para juntar mais de uma pessoa, como em **a responsável e a gerente saíram agora**."
    ],
  },
  {
    slug: "a5-ex30-escrita", // #30
    tipo: "escrita_lacuna",
    enunciado: "Ela ___ atenção a todos os detalhes do contrato.",
    gabarito: "dá",
    armadilhaId: "da_da",
    feedbackAcerto:
      "A palavra **dá** recebendo o acento mostra o esforço e a ação de prestar muita atenção, enquanto o **da** sem acento tentaria só conectar palavras, indicando de qual lugar o contrato é.\n\nSe a tentativa de trocar a palavra por **presta** mantiver a ação de olhar os detalhes com cuidado, o acento entra na frase.",
    feedbackErro: [
      "A mensagem descreve o esforço de leitura com bastante foco ou apenas tenta ligar a palavra com a funcionária?",
      "Faça o teste rápido usando o verbo **presta** durante a leitura. Como dizer que a moça **presta atenção aos detalhes** mostra a dedicação dela, o espaço pede o uso do acento.",
      "A resposta certa é **dá** com acento, já que o texto destaca a ação ativa de despejar muito foco em cima das páginas de um contrato. A versão sem acento atuaria apenas localizando as partes, do tipo **aquele erro da folha final nos assustou**."
    ],
  },
];