"use client";

/**
 * ExercicioClient.tsx
 *
 * Componente interativo de exercício — roda no browser.
 *
 * Design baseado em pesquisa:
 * - Uma coisa por vez (Cognitive Load Theory)
 * - Feedback imediato (Harvard 2024 — chave para 2x de aprendizado)
 * - Modo adaptativo visível para o curador, invisível para o aluno
 * - Tom de parceiro, não professor (Andragogia — Knowles)
 */

import { useState, useEffect, useRef } from "react";

// ────────────────────────────────────────────────────────────────────────────
// Tipos
// ────────────────────────────────────────────────────────────────────────────

interface Armadilha {
  id: string;
  titulo: string;
  textoAncora: string;
  exemplosCertos: string[];
  exemplosErrados: string[];
  tiposErro: string[];
}

interface ExercicioGerado {
  slug: string;
  tipo: "lacuna_unica" | "identificar_erro";
  enunciado: string;
  opcoes?: string[];
  gabarito: string;
  armadilhaId: string;
  // Feedback curado — explica o PORQUÊ, não só certo/errado
  feedbackAcerto: string;
  feedbackErro: [string, string, string]; // [socrático, pista, explicação direta]
}

interface RespostaIA {
  mensagem: string;
  acertou: boolean;
  tipoErro?: string;
  modoUsado: string;
}

// ────────────────────────────────────────────────────────────────────────────
// Exercícios curados da A6
// Cada exercício tem feedback em 3 camadas:
//   feedbackAcerto     → explica o PORQUÊ da resposta certa
//   feedbackErro[0]    → pergunta socrática (1ª tentativa errada)
//   feedbackErro[1]    → pista com o raciocínio (2ª tentativa)
//   feedbackErro[2]    → explicação direta + reforço (3ª tentativa)
// ────────────────────────────────────────────────────────────────────────────

const EXERCICIOS_A6: ExercicioGerado[] = [
  {
    slug: "a6-ex1",
    tipo: "lacuna_unica",
    enunciado: "Quero terminar o serviço hoje, ___ o cliente está esperando.",
    opcoes: ["mas", "mais"],
    gabarito: "mas",
    armadilhaId: "mas_mais",
    feedbackAcerto:
      '"Mas" é o certo aqui porque as duas partes da frase puxam em direções opostas: você quer terminar o serviço, e o cliente esperando cria uma pressão contrária. Toda vez que uma ideia vai contra a outra, é "mas". Se fosse quantidade ou intensidade, aí seria "mais".',
    feedbackErro: [
      "A segunda parte da frase vai na mesma direção da primeira, ou contradiz ela?",
      '"Mais" fala de quantidade: mais café, mais tempo, mais dinheiro. Aqui a frase não está falando de quantidade. O cliente esperando vai contra a ideia de terminar o serviço. Qual palavra liga ideias opostas?',
      '"Mas" é a resposta. Ele conecta duas ideias que se contradizem: "quero terminar" vai contra "o cliente está esperando". "Mais" seria para quantidade, como em "preciso de mais tempo".',
    ],
  },
  {
    slug: "a6-ex2",
    tipo: "lacuna_unica",
    enunciado: "Trabalho nesta oficina ___ cinco anos.",
    opcoes: ["há", "a"],
    gabarito: "há",
    armadilhaId: "ha_a",
    feedbackAcerto:
      '"Há" é o certo porque o tempo já passou — você começou a trabalhar há cinco anos e segue até hoje. O teste simples: troca por "faz". "Trabalho nesta oficina faz cinco anos." Ficou natural? Então é "há". Se fosse tempo futuro, como "vou sair daqui a duas horas", aí seria "a".',
    feedbackErro: [
      "Esse tempo de cinco anos já aconteceu (começou no passado) ou ainda vai acontecer?",
      'Tenta trocar pela palavra "faz": "Trabalho nesta oficina faz cinco anos." Ficou natural? Se sim, a palavra certa é "há", não "a". O "a" aparece quando o tempo ainda vai acontecer, tipo "daqui a dois dias".',
      '"Há" é a resposta. Sempre que o tempo já começou no passado, use "há". O teste é trocar por "faz": "faz cinco anos" soa certo, então é "há cinco anos". O "a" ficaria errado porque ele aponta para o futuro.',
    ],
  },
  {
    slug: "a6-ex3",
    tipo: "lacuna_unica",
    enunciado: "___ você não avisou antes que ia faltar?",
    opcoes: ["Por que", "Porque"],
    gabarito: "Por que",
    armadilhaId: "porque_family",
    feedbackAcerto:
      '"Por que" separado é o certo aqui porque a frase é uma pergunta — você está pedindo uma explicação de alguém. A regra é direta: pergunta usa "por que" separado. Quando a resposta vier, aí usa "porque" junto: "Não avisei porque esqueci."',
    feedbackErro: [
      "Essa frase está fazendo uma pergunta ou dando uma resposta?",
      'É uma pergunta — você quer saber o motivo. Em perguntas, sempre "por que" separado. O "porque" junto só aparece nas respostas: "Não fui porque estava doente."',
      '"Por que" separado é a resposta. A frase é uma pergunta, então precisa do "por que" em duas palavras. O "porque" junto é só para respostas e explicações: "Fiz isso porque achei certo."',
    ],
  },
  {
    slug: "a6-ex4",
    tipo: "lacuna_unica",
    enunciado: "O serviço ficou ___ feito. Precisa refazer.",
    opcoes: ["mau", "mal"],
    gabarito: "mal",
    armadilhaId: "mau_mal",
    feedbackAcerto:
      '"Mal" é o certo porque está descrevendo como o serviço foi feito — de forma ruim. O teste: troca por "de forma ruim". "O serviço ficou feito de forma ruim." Ficou certo? Então é "mal". Se fosse descrever como o serviço é em si (um serviço ruim por natureza), aí seria "mau serviço".',
    feedbackErro: [
      "A palavra está descrevendo como o serviço foi feito, ou descrevendo como o serviço é em si?",
      'Tenta trocar por "de forma ruim": "O serviço ficou feito de forma ruim." Ficou certo? Então é "mal". O "mau" descreveria o serviço como coisa: "um mau serviço" — mas aqui estamos falando de como ele foi executado.',
      '"Mal" é a resposta. Ele descreve como algo foi feito ou como alguém está: "trabalhou mal", "se sentiu mal". O "mau" descreve como algo ou alguém é: "mau funcionário", "mau hábito". Aqui, o serviço foi feito de forma ruim, então é "mal".',
    ],
  },
  {
    slug: "a6-ex5",
    tipo: "lacuna_unica",
    enunciado: "Podem deixar o orçamento com ___.",
    opcoes: ["mim", "eu"],
    gabarito: "mim",
    armadilhaId: "mim_eu",
    feedbackAcerto:
      '"Mim" é o certo porque vem depois de "com" — e depois de palavras como "para", "por", "de", "com" e "sem", sempre vem "mim". O teste: troca por "ele". "Podem deixar o orçamento com ele." Ficou natural? Então é "mim". O "eu" aparece antes do verbo, quando você é quem faz a ação: "Eu vou resolver."',
    feedbackErro: [
      'Tem uma palavra logo antes do espaço em branco. Qual é ela? Isso dá uma pista sobre qual pronome usar.',
      'A palavra "com" vem antes. Depois de "com", "para", "de", "por" e "sem", a forma correta é sempre "mim", nunca "eu". O "eu" aparece quando você é quem faz a ação: "Eu vou buscar."',
      '"Mim" é a resposta. Depois de preposições como "com", "para", "de", "por" e "sem", use sempre "mim". O "eu" só aparece antes do verbo, quando você é o sujeito da ação: "Eu resolvo" funciona, "com eu" não funciona.',
    ],
  },
];

// ────────────────────────────────────────────────────────────────────────────
// Seleciona o feedback correto conforme acerto e número de tentativas
// ────────────────────────────────────────────────────────────────────────────

function gerarFeedbackLocal(
  exercicio: ExercicioGerado,
  respostaAluno: string,
  tentativas: number
): RespostaIA {
  const acertou =
    respostaAluno.toLowerCase().trim() ===
    exercicio.gabarito.toLowerCase().trim();

  if (acertou) {
    return {
      mensagem: exercicio.feedbackAcerto,
      acertou: true,
      modoUsado: "celebracao",
    };
  }

  // Errou — seleciona a camada de feedback pelo número de tentativas
  const camada = Math.min(tentativas, 2) as 0 | 1 | 2;
  const modos: RespostaIA["modoUsado"][] = ["socratico", "scaffolding", "direta"];

  return {
    mensagem: exercicio.feedbackErro[camada],
    acertou: false,
    modoUsado: modos[camada] ?? "direta",
  };
}

// ────────────────────────────────────────────────────────────────────────────
// Componente principal
// ────────────────────────────────────────────────────────────────────────────

interface Props {
  armadilhas: Armadilha[];
  slug: string; // slug da unidade
}

export default function ExercicioClient({ armadilhas, slug }: Props) {
  const [exercicioIdx, setExercicioIdx] = useState(0);
  const [opcaoSelecionada, setOpcaoSelecionada] = useState<string | null>(null);
  const [tentativas, setTentativas] = useState(0);
  const [resposta, setResposta] = useState<RespostaIA | null>(null);
  const [concluiu, setConcluiu] = useState(false);
  const [acertosPorExercicio, setAcertosPorExercicio] = useState<boolean[]>([]);
  const feedbackRef = useRef<HTMLDivElement>(null);

  const exercicio = EXERCICIOS_A6[exercicioIdx];
  const totalExercicios = EXERCICIOS_A6.length;
  const progresso = Math.round((exercicioIdx / totalExercicios) * 100);

  // Rola para o feedback quando aparece
  useEffect(() => {
    if (resposta) {
      feedbackRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [resposta]);

  function handleSelecionar(opcao: string) {
    if (resposta?.acertou) return; // Já acertou, aguarda próximo
    setOpcaoSelecionada(opcao);
  }

  function handleConfirmar() {
    if (!opcaoSelecionada || !exercicio) return;

    const fb = gerarFeedbackLocal(exercicio, opcaoSelecionada, tentativas);
    setResposta(fb);

    if (!fb.acertou) {
      setTentativas((t) => t + 1);
      setOpcaoSelecionada(null); // Limpa para nova tentativa
    }
  }

  function handleProximo() {
    if (!resposta || !exercicio) return;

    const acertou = resposta.acertou || opcaoSelecionada === exercicio.gabarito;
    setAcertosPorExercicio((prev) => [...prev, acertou]);

    if (exercicioIdx + 1 >= totalExercicios) {
      setConcluiu(true);
    } else {
      setExercicioIdx((i) => i + 1);
      setOpcaoSelecionada(null);
      setResposta(null);
      setTentativas(0);
    }
  }

  // ── Tela de conclusão ──────────────────────────────────────────────────

  if (concluiu) {
    const total = acertosPorExercicio.length;
    const acertos = acertosPorExercicio.filter(Boolean).length;
    const taxa = Math.round((acertos / total) * 100);

    return (
      <div className="space-y-8">
        <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50 px-6 py-8 text-center">
          <div className="mb-3 text-4xl" aria-hidden="true">
            {taxa >= 80 ? "🎉" : taxa >= 60 ? "👍" : "💪"}
          </div>
          <h2 className="text-2xl font-bold text-stone-900">
            {taxa >= 80
              ? "Unidade concluída!"
              : "Bom começo — vamos reforçar?"}
          </h2>
          <p className="mt-2 text-stone-600">
            Você acertou{" "}
            <strong className="text-stone-900">
              {acertos} de {total}
            </strong>{" "}
            exercícios ({taxa}%).
          </p>
        </div>

        {taxa >= 80 ? (
          <div className="rounded-2xl border border-stone-200 bg-white px-6 py-6">
            <h3 className="font-semibold text-stone-900 mb-2">
              O que você agora consegue fazer
            </h3>
            <ul className="space-y-2 text-sm text-stone-700">
              {armadilhas.map((a) => (
                <li key={a.id} className="flex items-start gap-2">
                  <span className="mt-0.5 text-emerald-500" aria-hidden="true">✓</span>
                  Usar <strong>{a.titulo}</strong> certo em e-mail, currículo e mensagem formal
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="rounded-2xl border border-amber-200 bg-amber-50 px-6 py-6">
            <p className="text-sm text-stone-700">
              Algumas ainda estão pegando. Isso é normal — o sistema vai te
              trazer essas de volta nos próximos dias para consolidar.
            </p>
          </div>
        )}

        <div className="flex gap-3">
          <a
            href={`/unidade/${slug}`}
            className="flex-1 rounded-xl border border-stone-300 px-4 py-3 text-center text-sm font-medium text-stone-700 transition hover:bg-stone-50"
          >
            Ver a unidade
          </a>
          <a
            href="/"
            className="flex-1 rounded-xl bg-stone-900 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-stone-800"
          >
            Próxima unidade →
          </a>
        </div>
      </div>
    );
  }

  if (!exercicio) return null;

  // ── Exercício ──────────────────────────────────────────────────────────

  return (
    <div className="space-y-8">
      {/* Progresso */}
      <div>
        <div className="mb-1.5 flex justify-between text-xs text-stone-500">
          <span>
            Exercício {exercicioIdx + 1} de {totalExercicios}
          </span>
          <span>{progresso}%</span>
        </div>
        <div
          className="h-1.5 w-full overflow-hidden rounded-full bg-stone-200"
          role="progressbar"
          aria-valuenow={progresso}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="h-full rounded-full bg-stone-900 transition-all duration-500"
            style={{ width: `${progresso}%` }}
          />
        </div>
      </div>

      {/* Enunciado */}
      <div className="rounded-2xl border border-stone-200 bg-white px-6 py-6">
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-stone-400">
          Complete a frase
        </p>
        <p className="text-lg font-medium leading-relaxed text-stone-900">
          {exercicio.enunciado.replace("___", "______")}
        </p>
      </div>

      {/* Opções */}
      {exercicio.opcoes && (
        <div
          className="grid grid-cols-2 gap-3"
          role="group"
          aria-label="Escolha uma opção"
        >
          {exercicio.opcoes.map((opcao) => {
            const selecionado = opcaoSelecionada === opcao;
            const correto = resposta?.acertou && opcao === exercicio.gabarito;
            const errado =
              resposta && !resposta.acertou && selecionado;

            return (
              <button
                key={opcao}
                onClick={() => handleSelecionar(opcao)}
                disabled={!!resposta?.acertou}
                aria-pressed={selecionado}
                className={[
                  "rounded-2xl border-2 px-6 py-5 text-left text-base font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-stone-900 focus:ring-offset-2",
                  correto
                    ? "border-emerald-500 bg-emerald-50 text-emerald-800"
                    : errado
                    ? "border-rose-300 bg-rose-50 text-rose-800"
                    : selecionado
                    ? "border-stone-900 bg-stone-900 text-white"
                    : "border-stone-200 bg-white text-stone-800 hover:border-stone-400 hover:bg-stone-50",
                ].join(" ")}
              >
                {opcao}
              </button>
            );
          })}
        </div>
      )}

      {/* Feedback da IA */}
      {resposta && (
        <div
          ref={feedbackRef}
          role="status"
          aria-live="polite"
          className={[
            "rounded-2xl border px-5 py-4 text-sm leading-relaxed",
            resposta.acertou
              ? "border-emerald-200 bg-emerald-50 text-emerald-900"
              : tentativas <= 1
              ? "border-amber-200 bg-amber-50 text-amber-900"
              : "border-blue-200 bg-blue-50 text-blue-900",
          ].join(" ")}
        >
          <p className="mb-0.5 text-xs font-semibold uppercase tracking-widest opacity-60">
            {resposta.acertou
              ? "Tutor"
              : tentativas === 1
              ? "Tutor · pista"
              : "Tutor · explicação"}
          </p>
          <p>{resposta.mensagem}</p>
        </div>
      )}

      {/* Botão de ação */}
      <div>
        {!resposta || !resposta.acertou && tentativas < 3 ? (
          <button
            onClick={handleConfirmar}
            disabled={!opcaoSelecionada}
            className="w-full rounded-xl bg-stone-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-stone-800 disabled:cursor-not-allowed disabled:opacity-40 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:ring-offset-2"
          >
            Confirmar
          </button>
        ) : (
          <button
            onClick={handleProximo}
            className="w-full rounded-xl bg-stone-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:ring-offset-2"
          >
            {exercicioIdx + 1 >= totalExercicios
              ? "Ver resultado"
              : "Próximo exercício →"}
          </button>
        )}
      </div>
    </div>
  );
}
