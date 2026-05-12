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

  // ── Fase 2: escrita (cenários novos, intercalados) ────────────────────────

  // Par está/esta — intercalado: está → esta → esta → está
  {
    slug: "a5-ex7-escrita",
    tipo: "escrita_lacuna",
    enunciado: "O pedido ___ aguardando aprovação desde ontem.",
    gabarito: "está",
    armadilhaId: "esta_esta",
    feedbackAcerto:
      '**Está** com acento indica um estado ou situação: o pedido se encontra aguardando.\nJá **esta** sem acento aponta para algo: "esta pasta", "esta pessoa".\nUma dica: tenta trocar por **encontra-se**. "O pedido encontra-se aguardando." Funcionou? Então é **está**.',
    feedbackErro: [
      "A frase está descrevendo o estado do pedido, ou apontando para ele?",
      'Tenta trocar por "encontra-se": "O pedido encontra-se aguardando." Soou natural? Quando indica um estado, leva acento: **está**. Sem acento, **esta** seria para apontar: "esta pasta aqui".',
      '**Está** com acento é a resposta. A frase descreve o estado do pedido (aguardando). Sem acento, **esta** aponta para algo: "esta solicitação que você vê".',
    ],
  },
  {
    slug: "a5-ex8-escrita",
    tipo: "escrita_lacuna",
    enunciado: "Por favor, assine ___ folha antes de sair.",
    gabarito: "esta",
    armadilhaId: "esta_esta",
    feedbackAcerto:
      '**Esta** sem acento aponta para algo próximo: esta folha aqui, na sua frente.\nJá **está** com acento indica um estado ou ação: "o documento está pronto".\nUma dica: se você pode trocar por **essa** sem mudar o sentido, é **esta** sem acento.',
    feedbackErro: [
      "A frase está apontando para uma folha específica, ou descrevendo o estado de algo?",
      'A frase aponta para a folha que está na frente da pessoa. Para apontar, use **esta** sem acento. O **está** com acento indicaria estado: "a folha está assinada".',
      '**Esta** sem acento é a resposta. A frase aponta para um objeto específico. Sem acento, **esta** e **essa** servem para apontar. Com acento, **está** indicaria estado: "a folha já está assinada".',
    ],
  },
  {
    slug: "a5-ex9-escrita",
    tipo: "escrita_lacuna",
    enunciado: "Pode pegar ___ caixa e levar para o depósito.",
    gabarito: "esta",
    armadilhaId: "esta_esta",
    feedbackAcerto:
      '**Esta** sem acento aponta para algo: esta caixa aqui, na sua frente.\nJá **está** com acento indica estado: "a caixa está pesada".\nUma dica: tenta trocar por **essa**. "Pode pegar essa caixa." Funcionou? Então é **esta** sem acento.',
    feedbackErro: [
      "A frase está apontando para a caixa, ou descrevendo como ela está?",
      'A frase aponta para a caixa. Para apontar, use **esta** sem acento. Tenta trocar por "essa": funcionou? Então é **esta**. O **está** com acento indicaria estado: "a caixa está vazia".',
      '**Esta** sem acento é a resposta. A frase aponta para a caixa. O **está** com acento indicaria estado: "a caixa está pesada".',
    ],
  },
  {
    slug: "a5-ex10-escrita",
    tipo: "escrita_lacuna",
    enunciado: "A entrega ___ prevista para sexta-feira.",
    gabarito: "está",
    armadilhaId: "esta_esta",
    feedbackAcerto:
      '**Está** com acento indica o estado da entrega: ela se encontra prevista.\nJá **esta** sem acento aponta para algo: "esta entrega aqui".\nUma dica: tenta trocar por **encontra-se**. "A entrega encontra-se prevista." Funcionou? Então é **está**.',
    feedbackErro: [
      "A frase descreve o estado da entrega, ou aponta para ela?",
      'Tenta trocar por "encontra-se": "A entrega encontra-se prevista." Soou natural? Para estado, use **está** com acento.',
      '**Está** com acento é a resposta. A frase descreve o estado da entrega. Sem acento, **esta** seria para apontar: "esta entrega que você mencionou".',
    ],
  },

  // Par pôde/pode — intercalado: pôde → pode → pode → pôde
  {
    slug: "a5-ex11-escrita",
    tipo: "escrita_lacuna",
    enunciado: "Na semana passada, ninguém ___ resolver o problema.",
    gabarito: "pôde",
    armadilhaId: "pode_pode",
    feedbackAcerto:
      '**Pôde** com acento é passado: aconteceu antes.\nJá **pode** sem acento é presente: acontece agora ou é possível.\nUma dica: "na semana passada" indica passado. Quando há palavra de passado na frase, use **pôde**.',
    feedbackErro: [
      "Isso aconteceu no passado ou está acontecendo agora?",
      '"Na semana passada" indica passado. Para passado, use **pôde** com acento. Sem acento, **pode** é para o presente: "ninguém pode resolver agora".',
      '**Pôde** com acento é a resposta. "Na semana passada" mostra que é passado. Com acento para passado, sem acento para presente: "ninguém pode sair agora".',
    ],
  },
  {
    slug: "a5-ex12-escrita",
    tipo: "escrita_lacuna",
    enunciado: "Você ___ me ajudar com esse formulário?",
    gabarito: "pode",
    armadilhaId: "pode_pode",
    feedbackAcerto:
      '**Pode** sem acento é presente, algo possível agora.\nJá **pôde** com acento é passado: "ontem ele não pôde".\nUma dica: a pergunta é sobre agora, sobre possibilidade. Para presente, use **pode** sem acento.',
    feedbackErro: [
      "Essa pergunta é sobre algo que aconteceu no passado ou sobre o que é possível agora?",
      'A pergunta é sobre agora, sobre possibilidade presente. Para presente, use **pode** sem acento. Com acento, **pôde** seria passado: "ontem você pôde me ajudar?"',
      '**Pode** sem acento é a resposta. A pergunta é sobre agora. Para presente e possibilidade, sem acento. Com acento, **pôde** é só para passado: "ela não pôde comparecer ontem".',
    ],
  },
  {
    slug: "a5-ex13-escrita",
    tipo: "escrita_lacuna",
    enunciado: "Essa máquina ___ funcionar por mais dois anos.",
    gabarito: "pode",
    armadilhaId: "pode_pode",
    feedbackAcerto:
      '**Pode** sem acento indica possibilidade no presente ou futuro.\nJá **pôde** com acento é passado: "ano passado ela pôde funcionar bem".\nUma dica: a frase fala sobre o que é possível a partir de agora. Para isso, use **pode** sem acento.',
    feedbackErro: [
      "A frase está falando de uma possibilidade de agora em diante, ou de algo que já aconteceu?",
      'A frase fala de possibilidade futura. Para presente e possibilidade, use **pode** sem acento. Com acento, **pôde** é para passado: "ano passado ela pôde funcionar bem".',
      '**Pode** sem acento é a resposta. Indica possibilidade a partir de agora. O **pôde** com acento é só para o passado: "no ano passado, essa máquina pôde funcionar por dois anos".',
    ],
  },
  {
    slug: "a5-ex14-escrita",
    tipo: "escrita_lacuna",
    enunciado: "Ela não ___ comparecer à reunião de segunda.",
    gabarito: "pôde",
    armadilhaId: "pode_pode",
    feedbackAcerto:
      '**Pôde** com acento indica passado: a reunião de segunda já passou.\nJá **pode** sem acento é presente: "ela não pode vir hoje".\nUma dica: "de segunda" aqui indica uma reunião que já aconteceu. Para passado, use **pôde** com acento.',
    feedbackErro: [
      "A reunião de segunda já aconteceu (passado) ou ainda vai acontecer?",
      'O contexto indica que a reunião já foi. Para passado, use **pôde** com acento. Sem acento, **pode** seria para o presente: "ela não pode vir agora".',
      '**Pôde** com acento é a resposta. A reunião já aconteceu, é passado. Para passado, **pôde**. Para presente, **pode**: "ela não pode vir hoje".',
    ],
  },

  // Par sábia/sabia — intercalado: sábia → sabia → sabia → sábia
  {
    slug: "a5-ex15-escrita",
    tipo: "escrita_lacuna",
    enunciado: "Foi uma escolha muito ___ esperar antes de assinar.",
    gabarito: "sábia",
    armadilhaId: "sabia_sabia",
    feedbackAcerto:
      '**Sábia** com acento descreve uma qualidade: a escolha tinha sabedoria.\nJá **sabia** sem acento é ação: "ela sabia o resultado".\nUma dica: tenta trocar por **inteligente**. "Uma escolha muito inteligente." Funcionou? Então é **sábia** com acento.',
    feedbackErro: [
      "A palavra está descrevendo uma qualidade da escolha, ou dizendo que alguém sabia de algo?",
      'Tenta trocar por "inteligente": "Foi uma escolha muito inteligente." Soou natural? Para qualidade, use **sábia** com acento.',
      '**Sábia** com acento é a resposta. A frase descreve a qualidade da escolha. Sem acento, **sabia** seria ação: "ela sabia que devia esperar".',
    ],
  },
  {
    slug: "a5-ex16-escrita",
    tipo: "escrita_lacuna",
    enunciado: "Ela ___ de tudo sobre o assunto, mas ficou quieta.",
    gabarito: "sabia",
    armadilhaId: "sabia_sabia",
    feedbackAcerto:
      '**Sabia** sem acento é uma ação no passado: ela tinha conhecimento, ela conhecia.\nJá **sábia** com acento descreve uma qualidade: "uma pessoa sábia".\nUma dica: tenta trocar por **conhecia**. "Ela conhecia tudo sobre o assunto." Funcionou? Então é **sabia** sem acento.',
    feedbackErro: [
      "A frase está dizendo que ela tinha conhecimento de algo, ou descrevendo como ela é?",
      'Tenta trocar por "conhecia": "Ela conhecia tudo sobre o assunto." Soou natural? Para ação de conhecer, use **sabia** sem acento.',
      '**Sabia** sem acento é a resposta. A frase indica que ela tinha conhecimento — é uma ação. Com acento, **sábia** descreveria uma qualidade: "uma pessoa muito sábia".',
    ],
  },
  {
    slug: "a5-ex17-escrita",
    tipo: "escrita_lacuna",
    enunciado: "Eu não ___ que o prazo era hoje.",
    gabarito: "sabia",
    armadilhaId: "sabia_sabia",
    feedbackAcerto:
      '**Sabia** sem acento é a ação de saber, de ter conhecimento.\nJá **sábia** com acento descreve uma qualidade: "a orientação foi sábia".\nUma dica: tenta trocar por **tinha conhecimento**. "Eu não tinha conhecimento de que o prazo era hoje." Funcionou? Então é **sabia** sem acento.',
    feedbackErro: [
      "A frase diz que você não tinha conhecimento de algo, ou está descrevendo uma qualidade?",
      'Tenta trocar por "tinha conhecimento": funcionou? Para a ação de saber, use **sabia** sem acento. Com acento, **sábia** descreveria qualidade: "foi uma decisão sábia".',
      '**Sabia** sem acento é a resposta. A frase indica que você não tinha o conhecimento. Para a ação de saber, sem acento. Com acento, **sábia** descreve qualidade.',
    ],
  },
  {
    slug: "a5-ex18-escrita",
    tipo: "escrita_lacuna",
    enunciado: "A orientação que ela deu foi muito ___.",
    gabarito: "sábia",
    armadilhaId: "sabia_sabia",
    feedbackAcerto:
      '**Sábia** com acento descreve a qualidade da orientação: tinha sabedoria.\nJá **sabia** sem acento seria ação: "ela sabia orientar".\nUma dica: tenta trocar por **inteligente**. "A orientação foi muito inteligente." Funcionou? Então é **sábia** com acento.',
    feedbackErro: [
      "A palavra descreve como foi a orientação (qualidade), ou diz que alguém sabia de algo (ação)?",
      'Tenta trocar por "inteligente": "A orientação foi muito inteligente." Soou natural? Para qualidade, use **sábia** com acento.',
      '**Sábia** com acento é a resposta. A frase descreve a qualidade da orientação. Sem acento, **sabia** seria ação: "ela sabia que a orientação estava certa".',
    ],
  },

  // Par dúvida/duvida — intercalado: dúvida → duvida → duvida → dúvida
  {
    slug: "a5-ex19-escrita",
    tipo: "escrita_lacuna",
    enunciado: "Tenho uma ___ sobre o horário da reunião.",
    gabarito: "dúvida",
    armadilhaId: "duvida_duvida",
    feedbackAcerto:
      '**Dúvida** com acento é uma coisa, um sentimento que você tem.\nJá **duvida** sem acento é uma ação: "ele duvida de tudo".\nUma dica: tenta trocar por **questão**. "Tenho uma questão sobre o horário." Funcionou? Então é **dúvida** com acento.',
    feedbackErro: [
      "A frase está falando de uma coisa que você tem (sentimento), ou de uma ação de duvidar?",
      'Você tem uma dúvida — é uma coisa, como ter uma questão. Para a coisa, use **dúvida** com acento. Sem acento, **duvida** seria ação: "ele duvida do horário".',
      '**Dúvida** com acento é a resposta. A frase fala de algo que você tem, como "uma questão". Para a coisa, com acento. Para a ação, sem acento: "ninguém duvida disso".',
    ],
  },
  {
    slug: "a5-ex20-escrita",
    tipo: "escrita_lacuna",
    enunciado: "Ele ___ que o projeto vai ser aprovado.",
    gabarito: "duvida",
    armadilhaId: "duvida_duvida",
    feedbackAcerto:
      '**Duvida** sem acento é uma ação: ele está duvidando, desconfiando.\nJá **dúvida** com acento é uma coisa: "tenho uma dúvida".\nUma dica: tenta trocar por **desconfia**. "Ele desconfia que o projeto vai ser aprovado." Funcionou? Então é **duvida** sem acento.',
    feedbackErro: [
      "A frase fala de uma ação (alguém duvidando), ou de uma coisa (um sentimento que se tem)?",
      'Tenta trocar por "desconfia": "Ele desconfia que vai ser aprovado." Soou natural? Para a ação de duvidar, use **duvida** sem acento.',
      '**Duvida** sem acento é a resposta. É uma ação: ele está duvidando. Com acento, **dúvida** seria uma coisa: "ele tem uma dúvida sobre o projeto".',
    ],
  },
  {
    slug: "a5-ex21-escrita",
    tipo: "escrita_lacuna",
    enunciado: "Ninguém ___ da capacidade dela para o cargo.",
    gabarito: "duvida",
    armadilhaId: "duvida_duvida",
    feedbackAcerto:
      '**Duvida** sem acento é ação: ninguém está duvidando.\nJá **dúvida** com acento é a coisa em si: "não há dúvida sobre isso".\nUma dica: tenta trocar por **questiona**. "Ninguém questiona a capacidade dela." Funcionou? Então é **duvida** sem acento.',
    feedbackErro: [
      "A frase diz que as pessoas fazem uma ação (duvidar), ou fala de um sentimento que existe?",
      'Tenta trocar por "questiona": funcionou? Para a ação, use **duvida** sem acento. Com acento, **dúvida** seria a coisa: "não há dúvida sobre isso".',
      '**Duvida** sem acento é a resposta. É uma ação: ninguém está questionando. Com acento, **dúvida** seria a coisa: "não existe dúvida sobre a capacidade dela".',
    ],
  },
  {
    slug: "a5-ex22-escrita",
    tipo: "escrita_lacuna",
    enunciado: "Em caso de ___, pergunte ao responsável.",
    gabarito: "dúvida",
    armadilhaId: "duvida_duvida",
    feedbackAcerto:
      '**Dúvida** com acento é uma coisa: a dúvida que você pode ter.\nJá **duvida** sem acento seria ação: "ele duvida disso".\nUma dica: tenta trocar por **questão**. "Em caso de questão, pergunte." Funcionou? Então é **dúvida** com acento.',
    feedbackErro: [
      "A frase fala de uma coisa que pode existir (sentimento), ou de uma ação de duvidar?",
      'Tenta trocar por "questão": "Em caso de questão..." soou natural? Para a coisa, use **dúvida** com acento. Sem acento, **duvida** seria ação: "ele duvida de tudo".',
      '**Dúvida** com acento é a resposta. A frase fala da coisa em si — o sentimento de incerteza. Para a ação, sem acento: "ela duvida da informação".',
    ],
  },

  // Par é/e — intercalado: é → e → e → é
  {
    slug: "a5-ex23-escrita",
    tipo: "escrita_lacuna",
    enunciado: "Esse ___ o contrato que precisa ser assinado.",
    gabarito: "é",
    armadilhaId: "e_e",
    feedbackAcerto:
      '**É** com acento vem do verbo ser: o contrato é algo.\nJá **e** sem acento junta coisas: "o contrato e o recibo".\nUma dica: tenta trocar por **representa**. "Esse representa o contrato que precisa ser assinado." Funcionou? Então é **é** com acento.',
    feedbackErro: [
      "A frase está dizendo que algo é alguma coisa, ou está juntando duas coisas?",
      'A frase diz que "esse" é o contrato — verbo ser. Tenta trocar por "representa": funcionou? Para o verbo ser, use **é** com acento.',
      '**É** com acento é a resposta. A frase usa o verbo ser. Sem acento, **e** seria para juntar: "o contrato e a nota fiscal".',
    ],
  },
  {
    slug: "a5-ex24-escrita",
    tipo: "escrita_lacuna",
    enunciado: "Preciso do documento ___ da assinatura do responsável.",
    gabarito: "e",
    armadilhaId: "e_e",
    feedbackAcerto:
      '**E** sem acento junta duas coisas: o documento e a assinatura.\nJá **é** com acento vem do verbo ser.\nUma dica: tenta trocar por **mais**. "Preciso do documento mais da assinatura." Funcionou com o mesmo sentido? Então é **e** sem acento.',
    feedbackErro: [
      "A frase está juntando duas coisas que você precisa, ou está dizendo que algo é alguma coisa?",
      'A frase junta duas coisas: o documento e a assinatura. Para juntar, use **e** sem acento. Com acento, **é** seria verbo ser: "o documento é obrigatório".',
      '**E** sem acento é a resposta. A frase une dois itens necessários. Para juntar, sem acento. Com acento, **é** indicaria verbo ser: "a assinatura é necessária".',
    ],
  },
  {
    slug: "a5-ex25-escrita",
    tipo: "escrita_lacuna",
    enunciado: "Você vai representar a empresa ___ o setor comercial.",
    gabarito: "e",
    armadilhaId: "e_e",
    feedbackAcerto:
      '**E** sem acento une duas coisas: a empresa e o setor.\nJá **é** com acento vem do verbo ser.\nUma dica: tenta substituir por **mais**. "Vai representar a empresa mais o setor." Faz sentido? Então é **e** sem acento.',
    feedbackErro: [
      "A frase está unindo duas coisas, ou dizendo que algo é alguma coisa?",
      'Há duas coisas sendo unidas: a empresa e o setor. Para unir, use **e** sem acento. Com acento, **é** seria verbo ser: "a empresa é conhecida".',
      '**E** sem acento é a resposta. A frase une dois elementos. Sem acento para unir. Com acento, **é** é verbo ser: "o setor é importante".',
    ],
  },
  {
    slug: "a5-ex26-escrita",
    tipo: "escrita_lacuna",
    enunciado: "A responsável ___ a gerente de operações.",
    gabarito: "é",
    armadilhaId: "e_e",
    feedbackAcerto:
      '**É** com acento vem do verbo ser: a gerente é a responsável.\nJá **e** sem acento une coisas: "a gerente e o coordenador".\nUma dica: tenta trocar por **significa** ou **trata-se de**. "A responsável trata-se da gerente." Faz sentido? Então é **é** com acento.',
    feedbackErro: [
      "A frase está dizendo que ela é alguém, ou está unindo duas pessoas?",
      'A frase identifica quem é a responsável — verbo ser. Para o verbo ser, use **é** com acento. Sem acento, **e** uniria pessoas: "a gerente e o coordenador".',
      '**É** com acento é a resposta. A frase usa o verbo ser para identificar a responsável. Sem acento, **e** uniria: "a gerente e o supervisor são responsáveis".',
    ],
  },

  // Par dá/da — intercalado: dá → da → da → dá
  {
    slug: "a5-ex27-escrita",
    tipo: "escrita_lacuna",
    enunciado: "___ pra agendar uma reunião para essa semana?",
    gabarito: "Dá",
    armadilhaId: "da_da",
    feedbackAcerto:
      '**Dá** com acento vem do verbo dar: é possível fazer algo.\nJá **da** sem acento liga palavras: "da empresa", "da semana".\nUma dica: tenta trocar por **é possível**. "É possível agendar uma reunião?" Funcionou? Então é **dá** com acento.',
    feedbackErro: [
      "A frase pergunta se é possível fazer algo (ação), ou está ligando palavras?",
      'Tenta trocar por "é possível": "É possível agendar?" Soou natural? Para possibilidade ou ação do verbo dar, use **dá** com acento.',
      '**Dá** com acento é a resposta. A frase pergunta sobre possibilidade — verbo dar. Sem acento, **da** ligaria palavras: "reunião da semana".',
    ],
  },
  {
    slug: "a5-ex28-escrita",
    tipo: "escrita_lacuna",
    enunciado: "O resultado ___ análise vai sair amanhã.",
    gabarito: "da",
    armadilhaId: "da_da",
    feedbackAcerto:
      '**Da** sem acento liga palavras: o resultado pertence à análise.\nJá **dá** com acento vem do verbo dar: "ela dá o resultado".\nUma dica: tenta trocar por **de + a**. "O resultado de a análise" tem o mesmo sentido que "da análise". Para ligar palavras, use **da** sem acento.',
    feedbackErro: [
      "A frase está ligando duas coisas (resultado e análise), ou indicando uma ação?",
      '"Da" liga o resultado à análise — é a preposição "de" + artigo "a". Para ligar, sem acento: **da**. Com acento, **dá** seria verbo: "ela dá o resultado amanhã".',
      '**Da** sem acento é a resposta. A frase liga "resultado" a "análise" — é preposição. Sem acento para ligar. Com acento, **dá** seria ação: "ela dá o resultado amanhã".',
    ],
  },
  {
    slug: "a5-ex29-escrita",
    tipo: "escrita_lacuna",
    enunciado: "Vou falar com o chefe ___ equipe.",
    gabarito: "da",
    armadilhaId: "da_da",
    feedbackAcerto:
      '**Da** sem acento liga palavras: o chefe pertence à equipe.\nJá **dá** com acento vem do verbo dar: "ela dá ordens à equipe".\nUma dica: tenta trocar por **de + a**. "O chefe de a equipe" tem o mesmo sentido. Para ligar, use **da** sem acento.',
    feedbackErro: [
      "A frase liga duas coisas (chefe e equipe), ou indica uma ação do verbo dar?",
      '"Da" une "chefe" e "equipe" — preposição. Para ligar, sem acento: **da**. Com acento, **dá** seria ação: "ela dá ordens à equipe".',
      '**Da** sem acento é a resposta. Liga "chefe" a "equipe". Para preposição, sem acento. Com acento, **dá** seria verbo: "o chefe dá instruções".',
    ],
  },
  {
    slug: "a5-ex30-escrita",
    tipo: "escrita_lacuna",
    enunciado: "Ela ___ atenção a todos os detalhes do contrato.",
    gabarito: "dá",
    armadilhaId: "da_da",
    feedbackAcerto:
      '**Dá** com acento vem do verbo dar: ela pratica a ação de dar atenção.\nJá **da** sem acento ligaria palavras: "a atenção da equipe".\nUma dica: tenta trocar por **presta**. "Ela presta atenção a todos os detalhes." Funcionou? Então é **dá** com acento.',
    feedbackErro: [
      "A frase diz que ela pratica uma ação, ou está ligando duas palavras?",
      'Tenta trocar por "presta": "Ela presta atenção aos detalhes." Soou natural? Para a ação do verbo dar, use **dá** com acento.',
      '**Dá** com acento é a resposta. A frase indica a ação de dar atenção — verbo dar. Sem acento, **da** ligaria palavras: "a atenção da equipe".',
    ],
  },
];
