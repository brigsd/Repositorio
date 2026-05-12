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
  opcoes?: string[];      // Para lacuna_unica
  gabarito: string;
  armadilhaId: string;
  dica?: string;
}

interface RespostaIA {
  mensagem: string;
  acertou: boolean;
  tipoErro?: string;
  modoUsado: string;
}

// ────────────────────────────────────────────────────────────────────────────
// Exercícios estáticos para a A6 (até ter a rota de API com IA)
// ────────────────────────────────────────────────────────────────────────────

const EXERCICIOS_A6: ExercicioGerado[] = [
  {
    slug: "a6-ex1",
    tipo: "lacuna_unica",
    enunciado: "Quero terminar o serviço hoje, ___ o cliente está esperando.",
    opcoes: ["mas", "mais"],
    gabarito: "mas",
    armadilhaId: "mas_mais",
    dica: "Pense: a segunda parte da frase vai na mesma direção ou é oposta?",
  },
  {
    slug: "a6-ex2",
    tipo: "lacuna_unica",
    enunciado: "Trabalho nesta oficina ___ cinco anos.",
    opcoes: ["há", "a"],
    gabarito: "há",
    armadilhaId: "ha_a",
    dica: "Teste: dá pra trocar por 'faz cinco anos'? Se sim, é 'há'.",
  },
  {
    slug: "a6-ex3",
    tipo: "lacuna_unica",
    enunciado: "___ você não avisou antes que ia faltar?",
    opcoes: ["Por que", "Porque"],
    gabarito: "Por que",
    armadilhaId: "porque_family",
    dica: "É uma pergunta ou uma resposta?",
  },
  {
    slug: "a6-ex4",
    tipo: "lacuna_unica",
    enunciado: "O serviço ficou ___ feito — precisa refazer.",
    opcoes: ["mau", "mal"],
    gabarito: "mal",
    armadilhaId: "mau_mal",
    dica: "Qualifica como foi feito o serviço (como?) ou como é o serviço (como é)?",
  },
  {
    slug: "a6-ex5",
    tipo: "lacuna_unica",
    enunciado: "Podem deixar o orçamento com ___.",
    opcoes: ["mim", "eu"],
    gabarito: "mim",
    armadilhaId: "mim_eu",
    dica: "Tem uma preposição ('com') antes do pronome?",
  },
];

// ────────────────────────────────────────────────────────────────────────────
// Feedback gerado localmente (até ter rota de API com IA)
// Baseado nos princípios: nunca "errado", sempre orientado
// ────────────────────────────────────────────────────────────────────────────

function gerarFeedbackLocal(
  exercicio: ExercicioGerado,
  respostaAluno: string,
  tentativas: number
): RespostaIA {
  const acertou = respostaAluno.toLowerCase().trim() === exercicio.gabarito.toLowerCase().trim();

  if (acertou) {
    const mensagens = [
      `Exatamente! "${exercicio.gabarito}" é a escolha certa aqui. Você pegou o padrão.`,
      `Isso! Ficou perfeito. Essa daqui você já sabe.`,
      `Certo. Esse é um dos mais importantes — agora vai ficar na memória.`,
    ];
    return {
      mensagem: mensagens[Math.floor(Math.random() * mensagens.length)]!,
      acertou: true,
      modoUsado: "celebracao",
    };
  }

  // Errou — adapta o feedback ao número de tentativas
  if (tentativas === 0) {
    // Primeira tentativa errada — modo socrático
    return {
      mensagem:
        exercicio.dica ??
        `Quase lá. Pensa de novo: ${exercicio.enunciado.replace("___", `"${respostaAluno}"`)} — faz sentido assim?`,
      acertou: false,
      modoUsado: "socratico",
    };
  }

  if (tentativas === 1) {
    // Segunda tentativa — modo scaffolding
    const dicas: Record<string, string> = {
      mas_mais: `Lembra: "mas" = porém (ideia oposta). "mais" = quantidade. Qual se encaixa aqui?`,
      ha_a: `Testa trocar por "faz": "faz cinco anos" soa certo? Então é "há".`,
      porque_family: `Pergunta = "por que" (separado). Resposta = "porque" (junto). Qual é esse caso?`,
      mau_mal: `"mal" qualifica verbos (trabalha mal, sente mal). "mau" qualifica pessoas ou coisas (mau funcionário, mau jeito).`,
      mim_eu: `Depois de preposição (para, com, de, por) → sempre "mim". Antes do verbo, sem preposição → "eu".`,
    };
    return {
      mensagem: dicas[exercicio.armadilhaId] ?? `Não exatamente. Olha bem o contexto da frase.`,
      acertou: false,
      modoUsado: "scaffolding",
    };
  }

  // Terceira tentativa+ — instrução direta
  return {
    mensagem: `A resposta é "${exercicio.gabarito}". ${exercicio.dica ?? ""}. Agora você sabe — na próxima vai de primeira.`,
    acertou: false,
    modoUsado: "direta",
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
