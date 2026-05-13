/**
 * curriculo/a2-registros.ts
 *
 * Currículo curado da Unidade A.2 — "Registros: o mesmo recado em mundos diferentes"
 *
 * Princípio pedagógico central (Wheeler & Swords; Knowles; Bandura):
 * O informal NÃO é errado — é a primeira chave, que o aluno já tem.
 * Esta unidade entrega a segunda chave: o registro formal.
 * Nunca tratar o informal como déficit. Tratar como "repertório em expansão".
 */

import type { UnidadeCurriculo } from "./tipos";

export const A2_REGISTROS: UnidadeCurriculo = {
  slug: "a-2-registros",
  titulo: "Registros: o mesmo recado em mundos diferentes",
  nivel: "A",
  numero: 2,
  duracaoEstimadaMin: 25,

  ancoraPropósito: {
    titulo: "Por que isso importa?",
    corpo: `Você já sabe se comunicar — e essa habilidade tem todo o valor que precisa ter. Ela aparece quando você manda uma mensagem, explica uma situação pelo celular ou combina algo com um colega. Essa é a sua primeira chave.\n\nO que essa unidade traz é a segunda. Cada situação tem o seu tom: a mensagem para o amigo tem um; a mensagem para o chefe, outro; o e-mail para um cliente ou o requerimento numa repartição, outro ainda. Esses são registros diferentes — ferramentas para contextos diferentes. Nenhum substitui o outro.\n\nO descompasso acontece quando a chave não corresponde à porta. Uma mensagem no tom informal, num momento em que o interlocutor espera o formal, pode fechar uma oportunidade que você nem sabia que estava aberta.`,
    exemploPrático: `Exemplo prático:\n\nPedro é eletricista autônomo e faz um bom trabalho. Um dia, viu o anúncio de uma empresa pedindo orçamentos para uma reforma elétrica grande e mandou a seguinte mensagem: "oi vi q vcs fazem reforma, quanto custa trocar o painel de uma casa de 80m? me fala aí".\n\nA empresa tinha vários eletricistas na lista de contato. O responsável passou para o próximo sem responder.\n\nPedro sabia fazer o serviço. O que faltou foi o tom — informal demais para um contexto em que ele queria ser visto como profissional.\n\nUma mensagem mais adequada seria: "Boa tarde. Meu nome é Pedro e trabalho como eletricista. Vi a sua solicitação de orçamento e tenho experiência com troca de painel elétrico. Poderia me passar mais detalhes para que eu prepare uma proposta? Agradeço a atenção."\n\nMesma informação. Tom diferente. Resultado completamente diferente.`,
  },

  curiosidade: `Você já muda de tom dependendo de com quem está falando. Com o amigo, de um jeito. Com o chefe, de outro. Com um cliente ou uma repartição, de outro ainda. Isso já é seu — você faz isso na fala todo dia, sem precisar parar para pensar. Essa adaptação tem um nome: **registro**. O que esta unidade faz é pegar o que você já sabe fazer na fala e levar para a escrita, onde o tom também decide como a mensagem chega.`,

  armadilhas: [
    {
      id: "pedido_formal",
      titulo: "Pedido de folga / prazo",
      textoAncora: "Pedidos formais precisam de saudação, explicação clara e fechamento educado.",
      exemplosCertos: ["Gostaria de solicitar folga na sexta-feira, caso seja possível."],
      exemplosErrados: ["chefe, tô precisando de folga na sexta, pode ser?"],
      tiposErro: ["contracao_informal", "sem_abertura_formal"],
    },
    {
      id: "aviso_problema",
      titulo: "Aviso de problema",
      textoAncora: "Comunicar um problema formalmente requer objetividade e tom neutro.",
      exemplosCertos: ["Informo que o equipamento apresentou uma falha e está fora de operação."],
      exemplosErrados: ["a máquina quebrou e tá uma bagunça aqui"],
      tiposErro: ["vocabulario_coloquial", "contracao_informal"],
    },
    {
      id: "confirmacao",
      titulo: "Confirmação de compromisso",
      textoAncora: "Confirmações profissionais dispensam gírias e abreviações.",
      exemplosCertos: ["Confirmo minha presença. Poderia me informar o horário de início?"],
      exemplosErrados: ["blz, apareço sim, que horas começa?"],
      tiposErro: ["abreviacao", "vocabulario_coloquial"],
    },
    {
      id: "reclamacao",
      titulo: "Reclamação formal",
      textoAncora: "Reclamações formais são mais eficazes quando objetivas e sem carga emocional excessiva.",
      exemplosCertos: ["Venho registrar uma reclamação sobre o serviço recebido, que não atendeu ao combinado."],
      exemplosErrados: ["quero reclamar, ficou muito ruim e não gostei nada"],
      tiposErro: ["vocabulario_coloquial", "sem_abertura_formal"],
    },
    {
      id: "apresentacao",
      titulo: "Apresentação profissional",
      textoAncora: "Ao se apresentar para um cliente ou empresa, o tom formal passa credibilidade.",
      exemplosCertos: ["Meu nome é Pedro e trabalho como eletricista há cinco anos."],
      exemplosErrados: ["oi sou o Pedro, faço serviço elétrico"],
      tiposErro: ["sem_abertura_formal", "vocabulario_coloquial"],
    },
    {
      id: "encerramento",
      titulo: "Encerramento de mensagem",
      textoAncora: "Encerrar uma mensagem formal com 'Att.' ou 'Atenciosamente' marca o tom profissional.",
      exemplosCertos: ["Coloco-me à disposição para qualquer esclarecimento. Att."],
      exemplosErrados: ["qualquer coisa me fala, tô por aqui"],
      tiposErro: ["contracao_informal", "sem_fechamento_formal"],
    },
  ],

  preAfericao: [
    {
      slug: "pre-reg-pedido",
      enunciado: 'Qual versão está no tom adequado para um e-mail ao chefe?',
      opcoes: [
        "chefe, preciso de folga amanhã, pode ser?",
        "Gostaria de solicitar folga amanhã, se possível.",
      ],
      gabarito: "Gostaria de solicitar folga amanhã, se possível.",
      conceito: "registro_pedido",
    },
    {
      slug: "pre-reg-aviso",
      enunciado: 'Qual versão está no tom adequado para avisar um cliente?',
      opcoes: [
        "Informo que chegarei com 20 minutos de atraso.",
        "vou atrasar 20 min, tô no trânsito",
      ],
      gabarito: "Informo que chegarei com 20 minutos de atraso.",
      conceito: "registro_aviso",
    },
    {
      slug: "pre-reg-encerramento",
      enunciado: 'Qual encerramento é mais adequado para um e-mail profissional?',
      opcoes: [
        "qualquer coisa me fala",
        "Coloco-me à disposição para esclarecimentos.",
      ],
      gabarito: "Coloco-me à disposição para esclarecimentos.",
      conceito: "registro_encerramento",
    },
  ],

  tiposExercicio: [
    {
      tipo: "identificar_erro",
      descricao: "Identifique qual versão está no registro mais adequado para o contexto",
      criterios: [
        "Reconheceu o registro formal",
        "Compreendeu por que o contexto exige o registro formal",
      ],
    },
    {
      tipo: "reescrever_contexto",
      descricao: "Reescreva a mensagem no registro formal adequado ao contexto",
      criterios: [
        "Evitou contrações informais",
        "Usou conjugação verbal completa",
        "Manteve o sentido original",
        "Tom adequado ao contexto profissional",
      ],
    },
  ],

  projetoIntegrador: {
    enunciado: `Escreva uma mensagem profissional real que você poderia precisar enviar: pode ser um pedido de folga, um aviso de atraso, uma confirmação de reunião ou uma solicitação a um cliente. A mensagem deve ter entre 3 e 5 frases, com saudação e encerramento adequados ao contexto.`,
    rubrica: [
      "Abertura com saudação adequada ao contexto",
      "Sem contrações informais (tô, tá, hj, vc, pq)",
      "Conjugação verbal completa",
      "Mensagem clara e objetiva",
      "Encerramento formal (Att., Obrigado, etc.)",
    ],
  },

  posAfericao: [
    {
      slug: "pos-reg-pedido",
      enunciado: 'Qual versão está no tom adequado para um e-mail a um fornecedor?',
      opcoes: [
        "Poderia me enviar o orçamento até sexta-feira?",
        "manda o orçamento aí até sexta, tá?",
      ],
      gabarito: "Poderia me enviar o orçamento até sexta-feira?",
      conceito: "registro_pedido",
    },
    {
      slug: "pos-reg-aviso",
      enunciado: 'Qual versão está no tom adequado para comunicar um problema ao gerente?',
      opcoes: [
        "a impressora quebrou e tá travada",
        "Informo que a impressora apresentou uma falha e está fora de operação.",
      ],
      gabarito: "Informo que a impressora apresentou uma falha e está fora de operação.",
      conceito: "registro_aviso",
    },
    {
      slug: "pos-reg-agradecimento",
      enunciado: 'Qual versão está no tom adequado para agradecer após uma reunião?',
      opcoes: [
        "Agradeço pela atenção e pela oportunidade. Foi muito produtivo.",
        "valeu mesmo pela reunião, foi ótimo",
      ],
      gabarito: "Agradeço pela atenção e pela oportunidade. Foi muito produtivo.",
      conceito: "registro_agradecimento",
    },
  ],

  perguntasRevisao: [
    {
      slug: "rev-reg-a",
      enunciado: 'Complete no registro formal: "Gostaria de ___ folga na sexta-feira."',
      gabarito: "solicitar",
      conceito: "registro_pedido",
    },
    {
      slug: "rev-reg-b",
      enunciado: 'Qual é o encerramento mais adequado para um e-mail profissional: "qualquer coisa me fala" ou "Coloco-me à disposição"?',
      gabarito: "Coloco-me à disposição",
      conceito: "registro_encerramento",
    },
  ],
};
