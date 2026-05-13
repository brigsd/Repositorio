/**
 * Exercícios curados da Unidade A.3 — "A vírgula que muda o sentido"
 *
 * Estrutura (baseada em pesquisa — super pacote 2026-05-13):
 *
 * Fase 1 — Vocativo (Ex 1–6, blocked):
 *   Aluno identifica qual das duas frases corresponde ao contexto indicado.
 *   Princípio: contraste antes da regra (explícito-indutivo híbrido).
 *
 * Fase 2 — Negação com vírgula (Ex 7–12, blocked):
 *   Mesmo formato, segundo caso.
 *
 * Fase 3 — Interleaved (Ex 13–15):
 *   Aluno precisa distinguir qual dos dois casos se aplica.
 *   Princípio Bjork/Rohrer: forçar discriminação entre regras consolida retenção.
 *
 * Feedback: sentido alterado primeiro, regra nomeada depois (Hattie nível 2-3).
 * Sem "errado/certo" dirigido à pessoa — apenas ao efeito de sentido.
 */

import type { ExercicioGerado } from "./tipos";

export const EXERCICIOS_A3: ExercicioGerado[] = [

  // ─── Fase 1: Vocativo (Ex 1–6) ───────────────────────────────────────────

  {
    slug: "a3-ex1",
    tipo: "identificar_erro",
    enunciado:
      "A família está reunida e alguém quer chamar a vovó para o jantar. Qual frase faz isso?",
    opcoes: ["Vamos comer, vovó.", "Vamos comer vovó."],
    gabarito: "Vamos comer, vovó.",
    armadilhaId: "vocativo",
    feedbackAcerto:
      "A vírgula depois de 'comer' separa o convite do nome da pessoa chamada — é um chamado para a mesa.\n\nSem ela, 'vovó' fica colado à ação como se fosse o que vai ser comido. É o exemplo mais famoso de como uma vírgula muda tudo.\n\n**Regra do vocativo**: sempre que você escreve diretamente para alguém, separe o nome do resto com vírgula.",
    feedbackErro: [
      "Leia as duas frases em voz alta. Uma chama a vovó para comer; a outra soa estranha. Qual delas convida?",
      "Repare onde a vírgula aparece. A frase 'Vamos comer, vovó' faz uma pausa antes do nome — e essa pausa é o chamado. Qual das duas tem essa pausa?",
      "A resposta é **'Vamos comer, vovó.'** A vírgula antes do nome mostra que você está chamando a pessoa diretamente. Sem ela, 'vovó' fica parecendo o prato da refeição.",
    ],
  },

  {
    slug: "a3-ex2",
    tipo: "identificar_erro",
    enunciado:
      "Carlos está do seu lado e você quer pedir a ajuda dele agora. Qual frase usa?",
    opcoes: ["Carlos, pode ajudar aqui?", "Carlos pode ajudar aqui?"],
    gabarito: "Carlos, pode ajudar aqui?",
    armadilhaId: "vocativo",
    feedbackAcerto:
      "Com a vírgula, você está falando diretamente com Carlos — ele é quem recebe o chamado.\n\nSem ela, 'Carlos' vira sujeito da frase: a pergunta passa a ser sobre ele, não para ele. Contextos diferentes, frases diferentes.\n\nSempre que você abre uma frase chamando alguém pelo nome, a vírgula vem logo depois.",
    feedbackErro: [
      "Você está pedindo ajuda para Carlos ou perguntando sobre Carlos para outra pessoa?",
      "A vírgula separa o nome de quem você chama do restante da frase. Qual das duas versões tem essa separação?",
      "A resposta é **'Carlos, pode ajudar aqui?'** A vírgula depois de 'Carlos' mostra que você está falando com ele diretamente. Sem ela, a pergunta soa como se fosse sobre Carlos, não para Carlos.",
    ],
  },

  {
    slug: "a3-ex3",
    tipo: "identificar_erro",
    enunciado:
      "Você está conversando com o chefe e quer saber se Carlos tem disponibilidade para um projeto. Qual frase usa?",
    opcoes: ["Carlos tem disponibilidade?", "Carlos, tem disponibilidade?"],
    gabarito: "Carlos tem disponibilidade?",
    armadilhaId: "vocativo",
    feedbackAcerto:
      "Sem vírgula, 'Carlos' é o sujeito da pergunta — você está questionando sobre ele para outra pessoa.\n\nCom vírgula, a frase viraria um chamado direto para Carlos: 'Carlos, tem disponibilidade?' Como aqui você está falando com o chefe sobre Carlos, a vírgula não entra.\n\nO contexto decide: você está chamando a pessoa ou falando sobre ela?",
    feedbackErro: [
      "Você está na conversa com o chefe — Carlos não está presente. Você está chamando Carlos ou perguntando sobre ele?",
      "Se Carlos está ausente e você está falando sobre ele, o nome dele é o sujeito da frase, sem vírgula. Se você estivesse chamando Carlos diretamente, aí viria a vírgula. Qual é o caso aqui?",
      "A resposta é **'Carlos tem disponibilidade?'** sem vírgula. Você está falando com o chefe sobre Carlos — ele é o assunto da pergunta, não o destinatário dela.",
    ],
  },

  {
    slug: "a3-ex4",
    tipo: "identificar_erro",
    enunciado:
      "Você quer encerrar uma mensagem agradecendo diretamente à dona Maria. Qual frase usa?",
    opcoes: ["Obrigado, dona Maria.", "Obrigado dona Maria."],
    gabarito: "Obrigado, dona Maria.",
    armadilhaId: "vocativo",
    feedbackAcerto:
      "A vírgula separa o agradecimento do nome da pessoa — deixa claro que você está falando diretamente com ela.\n\nSem a vírgula, o texto fica impreciso: quem está lendo pode sentir que o tom é menos direto, mais como um aviso geral do que um agradecimento pessoal.\n\nEm mensagens formais, incluir a vírgula antes do nome de quem você está agradecendo é o padrão esperado.",
    feedbackErro: [
      "Você está agradecendo diretamente à dona Maria ou só mencionando o nome dela?",
      "Quando você agradece para alguém usando o nome dela na frase, a vírgula separa o agradecimento do nome. Qual das duas versões faz isso?",
      "A resposta é **'Obrigado, dona Maria.'** A vírgula antes do nome mostra que o agradecimento é endereçado diretamente a ela.",
    ],
  },

  {
    slug: "a3-ex5",
    tipo: "identificar_erro",
    enunciado:
      "Você quer pedir ajuda à Ana numa mensagem. Qual frase usa?",
    opcoes: ["Ana, preciso da sua ajuda.", "Ana precisa da sua ajuda."],
    gabarito: "Ana, preciso da sua ajuda.",
    armadilhaId: "vocativo",
    feedbackAcerto:
      "Com a vírgula, você está falando diretamente para Ana — pedindo a ajuda dela.\n\nSem ela, o sentido muda completamente: 'Ana precisa da sua ajuda' diz que é Ana quem precisa de ajuda — não você.\n\nVírgula depois do nome no começo da frase = chamado direto para a pessoa. Sem ela = a pessoa é o assunto da frase.",
    feedbackErro: [
      "Quem precisa de ajuda nessa situação — você ou a Ana?",
      "Repare: 'Ana precisa da sua ajuda' tem um sentido; 'Ana, preciso da sua ajuda' tem outro. Qual delas coloca você como quem precisa?",
      "A resposta é **'Ana, preciso da sua ajuda.'** Com a vírgula depois de 'Ana', você está chamando ela e pedindo ajuda. Sem a vírgula, a frase diz que a Ana é quem precisa de ajuda.",
    ],
  },

  {
    slug: "a3-ex6",
    tipo: "identificar_erro",
    enunciado:
      "Você quer pedir ao Paulo que mande um arquivo. Qual frase usa?",
    opcoes: ["Manda o arquivo, Paulo.", "Manda o arquivo Paulo."],
    gabarito: "Manda o arquivo, Paulo.",
    armadilhaId: "vocativo",
    feedbackAcerto:
      "A vírgula antes de 'Paulo' separa o pedido do nome de quem vai receber o pedido — fica claro que você está mandando uma mensagem para ele.\n\nSem a vírgula, 'Paulo' fica grudado em 'arquivo', como se o arquivo se chamasse 'arquivo Paulo' — o que cria ambiguidade desnecessária.\n\nNome no final da frase também pede vírgula quando você está chamando alguém.",
    feedbackErro: [
      "Quem vai mandar o arquivo — ou para quem você está pedindo?",
      "Se o Paulo é a pessoa que vai receber o pedido, o nome dele precisa de vírgula para ficar separado do resto. Qual das duas tem essa vírgula?",
      "A resposta é **'Manda o arquivo, Paulo.'** A vírgula antes de 'Paulo' deixa claro que você está mandando uma mensagem para ele. Sem ela, 'Paulo' soa como parte do nome do arquivo.",
    ],
  },

  // ─── Fase 2: Negação com vírgula (Ex 7–12) ───────────────────────────────

  {
    slug: "a3-ex7",
    tipo: "identificar_erro",
    enunciado:
      "Um funcionário perguntou se podia entrar. O responsável quer dizer que pode. Qual frase usa?",
    opcoes: ["Não, pode entrar.", "Não pode entrar."],
    gabarito: "Não, pode entrar.",
    armadilhaId: "negacao_virgula",
    feedbackAcerto:
      "Com a vírgula, o 'não' responde a algo que estava no ar — uma dúvida ou impressão — e a frase corrige: 'Não [há impedimento], pode entrar.'\n\nSem a vírgula, 'não pode' forma um bloco único de proibição. O sentido é o oposto.\n\n**Regra da negação**: 'Não, pode...' é permissão ou correção. 'Não pode...' é proibição.",
    feedbackErro: [
      "As duas frases têm sentidos opostos. Qual delas você diria para liberar a entrada?",
      "Pense: 'não pode entrar' proíbe. 'não, pode entrar' libera. A vírgula depois de 'não' muda tudo. Qual das duas dá permissão?",
      "A resposta é **'Não, pode entrar.'** A vírgula separa o 'não' do restante — ele funciona como uma resposta a uma preocupação, e a frase que vem depois dá a permissão.",
    ],
  },

  {
    slug: "a3-ex8",
    tipo: "identificar_erro",
    enunciado:
      "Você quer avisar que não é necessário trazer documento. Qual frase usa?",
    opcoes: ["Não precisa de documento.", "Não, precisa de documento."],
    gabarito: "Não precisa de documento.",
    armadilhaId: "negacao_virgula",
    feedbackAcerto:
      "'Não precisa' sem vírgula é uma informação direta: dispensa o documento.\n\nCom a vírgula, o sentido muda: 'Não, precisa de documento' contradiz algo — como se alguém tivesse dito que não era necessário e você estivesse corrigindo: 'Não [é isso], precisa sim.'\n\nUse sem vírgula quando quiser informar. Use com vírgula quando quiser contradizer.",
    feedbackErro: [
      "Você está informando que não é necessário ou contradizendo alguém?",
      "Sem vírgula: 'não precisa' dispensa o documento. Com vírgula: 'não, precisa' contradiz quem disse que não era necessário. Qual é o caso aqui?",
      "A resposta é **'Não precisa de documento.'** sem vírgula — você está dando uma informação simples de que o documento não é exigido.",
    ],
  },

  {
    slug: "a3-ex9",
    tipo: "identificar_erro",
    enunciado:
      "Alguém disse que não precisava trazer nada. Você sabe que o RG é obrigatório e quer corrigir. Qual frase usa?",
    opcoes: ["Não, precisa trazer o RG.", "Não precisa trazer o RG."],
    gabarito: "Não, precisa trazer o RG.",
    armadilhaId: "negacao_virgula",
    feedbackAcerto:
      "Com a vírgula, o 'não' responde à informação anterior — contradiz quem disse que não precisava — e a frase corrige: 'Não [é verdade], precisa trazer o RG.'\n\nSem a vírgula, a frase dispensaria o documento, que é o contrário do que você quer dizer.\n\nVírgula depois de 'não' = você está contradizendo algo. Sem vírgula = a frase é uma informação simples.",
    feedbackErro: [
      "Você está corrigindo uma informação ou confirmando o que foi dito?",
      "Se você quer contradizer alguém, o 'não' com vírgula funciona como resposta de negação à informação anterior. Qual das duas frases faz isso?",
      "A resposta é **'Não, precisa trazer o RG.'** O 'não' com vírgula desfaz o que foi dito antes e a frase que vem depois traz a informação correta.",
    ],
  },

  {
    slug: "a3-ex10",
    tipo: "identificar_erro",
    enunciado:
      "Você quer avisar que o prazo não pode ser estendido. Qual frase usa?",
    opcoes: ["Não pode prorrogar.", "Não, pode prorrogar."],
    gabarito: "Não pode prorrogar.",
    armadilhaId: "negacao_virgula",
    feedbackAcerto:
      "'Não pode' sem vírgula é proibição direta — a prorrogação não está autorizada.\n\nCom a vírgula, 'não, pode prorrogar' viraria uma liberação — o oposto do que você quer dizer.\n\nSem vírgula: proibição. Com vírgula: permissão ou correção.",
    feedbackErro: [
      "Você quer proibir ou liberar a prorrogação?",
      "Lembre: 'não pode' (sem vírgula) proíbe. 'Não, pode' (com vírgula) libera. Qual é o sentido que você precisa aqui?",
      "A resposta é **'Não pode prorrogar.'** sem vírgula. Você está dizendo que a prorrogação não é permitida — uma proibição direta.",
    ],
  },

  {
    slug: "a3-ex11",
    tipo: "identificar_erro",
    enunciado:
      "O gerente estava em dúvida se o sistema ia funcionar. Você testou e funcionou. Como você diz isso?",
    opcoes: ["Não, vai funcionar.", "Não vai funcionar."],
    gabarito: "Não, vai funcionar.",
    armadilhaId: "negacao_virgula",
    feedbackAcerto:
      "Com a vírgula, o 'não' responde à dúvida do gerente — contradiz o pessimismo — e a frase garante: 'Não [é isso], vai funcionar.'\n\nSem ela, a frase diria o contrário: que não vai funcionar.\n\nO 'não' com vírgula desfaz uma preocupação; o 'não' sem vírgula cria uma.",
    feedbackErro: [
      "Você quer tranquilizar o gerente ou confirmar que não vai funcionar?",
      "Com vírgula: 'não, vai funcionar' reassegura. Sem vírgula: 'não vai funcionar' é uma previsão negativa. Qual é o que você precisa?",
      "A resposta é **'Não, vai funcionar.'** A vírgula separa o 'não' que contradiz a dúvida do gerente do restante da frase, que dá a garantia.",
    ],
  },

  {
    slug: "a3-ex12",
    tipo: "identificar_erro",
    enunciado:
      "Você quer avisar que a reunião foi cancelada. Qual frase usa?",
    opcoes: ["Não haverá reunião.", "Não, haverá reunião."],
    gabarito: "Não haverá reunião.",
    armadilhaId: "negacao_virgula",
    feedbackAcerto:
      "'Não haverá reunião' sem vírgula é um aviso direto: a reunião não acontece.\n\nCom a vírgula, 'não, haverá reunião' contradiz quem disse que não haveria — e confirma que vai acontecer. Sentido oposto.\n\nAntes de usar 'não' com vírgula, pergunte: estou corrigindo algo que foi dito, ou informando?",
    feedbackErro: [
      "Você quer cancelar a reunião ou confirmar que ela vai acontecer?",
      "Sem vírgula: 'não haverá reunião' cancela. Com vírgula: 'não, haverá reunião' confirma. Qual é o aviso que você precisa?",
      "A resposta é **'Não haverá reunião.'** sem vírgula — um aviso direto de cancelamento.",
    ],
  },

  // ─── Fase 3: Interleaved (Ex 13–15) ─────────────────────────────────────

  {
    slug: "a3-ex13",
    tipo: "identificar_erro",
    enunciado:
      "O síndico quer avisar que a área de lazer está interditada. Qual frase usa?",
    opcoes: ["Não pode usar a área de lazer.", "Não, pode usar a área de lazer."],
    gabarito: "Não pode usar a área de lazer.",
    armadilhaId: "negacao_virgula",
    feedbackAcerto:
      "Sem vírgula, 'não pode' forma um bloco de proibição — a mensagem é clara: interdição.\n\nCom a vírgula, a frase contradiz alguma restrição anterior e dá permissão — o oposto do que o síndico quer comunicar.\n\nAntes de escrever, pergunte: estou proibindo ou liberando?",
    feedbackErro: [
      "O síndico quer proibir ou liberar o uso da área de lazer?",
      "Lembre os dois padrões: 'não pode...' proíbe; 'não, pode...' libera. Qual serve aqui?",
      "A resposta é **'Não pode usar a área de lazer.'** sem vírgula — proibição direta.",
    ],
  },

  {
    slug: "a3-ex14",
    tipo: "identificar_erro",
    enunciado:
      "Você quer pedir à Rosa, que está na sua frente, que confirme a presença. Qual frase usa?",
    opcoes: ["Rosa, pode confirmar a presença?", "Rosa pode confirmar a presença?"],
    gabarito: "Rosa, pode confirmar a presença?",
    armadilhaId: "vocativo",
    feedbackAcerto:
      "Com a vírgula, você está falando diretamente com Rosa — é um chamado.\n\nSem a vírgula, 'Rosa' vira sujeito da pergunta: parece que você está questionando sobre Rosa para outra pessoa.\n\nComo Rosa está na sua frente e você está falando para ela, a vírgula entra.",
    feedbackErro: [
      "Você está falando para a Rosa ou sobre a Rosa para alguém?",
      "Se você está chamando Rosa diretamente, o nome dela precisa de vírgula. Se você estivesse falando sobre ela, sem vírgula. Qual é o caso?",
      "A resposta é **'Rosa, pode confirmar a presença?'** A vírgula depois de 'Rosa' mostra que o pedido vai direto para ela.",
    ],
  },

  {
    slug: "a3-ex15",
    tipo: "identificar_erro",
    enunciado:
      "O aviso dizia 'não pode usar a impressora'. O gerente quer corrigir: ela está disponível. O que ele escreve?",
    opcoes: ["Não, pode usar a impressora.", "Não pode usar a impressora."],
    gabarito: "Não, pode usar a impressora.",
    armadilhaId: "negacao_virgula",
    feedbackAcerto:
      "O gerente está contradizendo o aviso anterior — a vírgula depois de 'não' sinaliza exatamente isso: 'Não [é o que estava escrito], pode usar.'\n\nSem a vírgula, a mensagem repetiria a proibição que ele quer cancelar.\n\nQuando você escreve para corrigir uma informação, o 'não' com vírgula é a ferramenta certa.",
    feedbackErro: [
      "O gerente quer confirmar a proibição ou desfazê-la?",
      "Para corrigir algo que foi escrito antes, o 'não' funciona como uma resposta — e a vírgula deixa claro que o que vem depois é a informação correta. Qual das duas frases faz isso?",
      "A resposta é **'Não, pode usar a impressora.'** O gerente está desfazendo a proibição anterior. A vírgula separa o 'não corretivo' da permissão que vem a seguir.",
    ],
  },
];
