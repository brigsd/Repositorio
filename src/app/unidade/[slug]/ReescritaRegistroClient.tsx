"use client";

/**
 * ReescritaRegistroClient — Unidade A.2
 *
 * Dois tipos de exercício gerenciados em um componente:
 *
 * 1. "identificacao_registro" (Fase 1):
 *    Aluno escolhe entre duas versões qual está no registro formal.
 *    Avaliação local, sem chamada de IA.
 *
 * 2. "reescrita_registro" (Fase 2):
 *    Aluno reescreve texto informal em formal.
 *    Modelo (exemploPar) sempre visível — Baymard: não usar placeholder.
 *    Avaliação via IA. Até 2 tentativas antes de mostrar versaoSugerida.
 *
 * Princípios aplicados:
 * - NNg Progressive Disclosure: exemplo antes da prática
 * - Baymard: helper text fixo, nunca placeholder
 * - Bandura: framing como "registro mais adequado", nunca "errado"
 * - Sweller: exemploPar visível durante toda a escrita
 */

import { useState } from "react";
import type { ExercicioReescrita } from "@/lib/exercicios/tipos-reescrita";
import type { RespostaFeedbackRegistro } from "@/lib/prompts";

interface Props {
  exercicios: ExercicioReescrita[];
  slug: string;
  isAdmin?: boolean;
}

type FaseExercicio = "input" | "carregando" | "feedback";

function renderNegrito(texto: string) {
  return texto.split(/(\*\*[^*]+\*\*)/).map((parte, i) =>
    parte.startsWith("**") && parte.endsWith("**") ? (
      <strong key={i}>{parte.slice(2, -2)}</strong>
    ) : (
      parte
    )
  );
}

export default function ReescritaRegistroClient({ exercicios, slug, isAdmin }: Props) {
  const [exercicioIdx, setExercicioIdx] = useState(0);
  const [fase, setFase] = useState<FaseExercicio>("input");
  const [inputTexto, setInputTexto] = useState("");
  const [opcaoSelecionada, setOpcaoSelecionada] = useState<string | null>(null);
  const [numTentativas, setNumTentativas] = useState(0);
  const [feedback, setFeedback] = useState<RespostaFeedbackRegistro & { textoFeedback?: string } | null>(null);
  const [acertosPorExercicio, setAcertosPorExercicio] = useState<boolean[]>([]);
  const [concluiu, setConcluiu] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  const totalExercicios = exercicios.length;
  const exercicio = exercicios[exercicioIdx];

  // ─── Navegação (admin) ───────────────────────────────────────────────────────

  function irParaExercicio(idx: number) {
    setExercicioIdx(idx);
    setFase("input");
    setInputTexto("");
    setOpcaoSelecionada(null);
    setNumTentativas(0);
    setFeedback(null);
    setErro(null);
  }

  // ─── Identificação de registro (MC) ─────────────────────────────────────────

  function handleSelecionarOpcao(opcao: string) {
    if (fase !== "input") return;
    setOpcaoSelecionada(opcao);

    const acertou = opcao === exercicio.gabarito;

    if (acertou) {
      setFeedback({
        mensagem: exercicio.feedbackAcerto ?? "Isso mesmo! Você identificou o registro correto.",
        acertou: true,
        confiancaIa: "seguro",
        modoUsado: "socratico",
      });
    } else {
      const tentativa = numTentativas;
      setNumTentativas((n) => n + 1);
      const msg =
        tentativa === 0
          ? (exercicio.feedbackErro?.[0] ?? "Pensa bem no contexto. Tente novamente.")
          : (exercicio.feedbackErro?.[1] ?? "A opção mais adequada para o contexto formal é a outra versão.");
      setFeedback({
        mensagem: msg,
        acertou: false,
        confiancaIa: "seguro",
        modoUsado: "socratico",
      });
    }

    setFase("feedback");
  }

  // ─── Reescrita de registro (IA) ──────────────────────────────────────────────

  async function handleConfirmarReescrita() {
    if (!inputTexto.trim() || fase !== "input") return;
    setFase("carregando");
    setErro(null);

    try {
      const res = await fetch("/api/exercicio/avaliar-registro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          exercicioSlug: exercicio.slug,
          textoInformal: exercicio.textoInformal ?? "",
          respostaAluno: inputTexto.trim(),
          contexto: exercicio.contexto,
          rubrica: exercicio.rubrica ?? [],
          tiposErroValidos: exercicio.tiposErroValidos ?? [],
          numTentativas,
          unidadeSlug: slug,
        }),
      });

      if (!res.ok) throw new Error("Erro na avaliação");

      const resultado: RespostaFeedbackRegistro = await res.json();
      setFeedback(resultado);
      setFase("feedback");
    } catch {
      setErro("Não consegui avaliar agora. Tente de novo.");
      setFase("input");
    }
  }

  // ─── Avançar para próximo exercício ─────────────────────────────────────────

  function handleProximo(acertou: boolean) {
    const novosAcertos = [...acertosPorExercicio, acertou];
    setAcertosPorExercicio(novosAcertos);

    if (exercicioIdx + 1 >= totalExercicios) {
      setConcluiu(true);
      return;
    }

    irParaExercicio(exercicioIdx + 1);
  }

  function handleTentarNovamente() {
    setNumTentativas((n) => n + 1);
    setFeedback(null);
    setOpcaoSelecionada(null);
    setFase("input");
    // Mantém o texto do aluno para que ele possa editar a partir do que escreveu
  }

  // ─── Tela de conclusão ───────────────────────────────────────────────────────

  if (concluiu) {
    const totalAcertos = acertosPorExercicio.filter(Boolean).length;
    const percentual = Math.round((totalAcertos / totalExercicios) * 100);
    const passou = percentual >= 70;

    return (
      <div className="space-y-6">
        <div className={`rounded-2xl border px-6 py-8 text-center ${passou ? "border-emerald-200 bg-emerald-50" : "border-amber-200 bg-amber-50"}`}>
          <p className={`text-4xl font-bold ${passou ? "text-emerald-700" : "text-amber-700"}`}>
            {percentual}%
          </p>
          <p className="mt-2 text-sm font-semibold text-stone-700">
            {totalAcertos} de {totalExercicios} exercícios
          </p>
          <p className="mt-4 text-sm text-stone-600 leading-relaxed">
            {passou
              ? "Você demonstrou boa compreensão dos registros formais e informais. Isso vai fazer diferença nas suas comunicações profissionais."
              : "Você está no caminho certo. Pratique mais um pouco — reconhecer o registro adequado para cada contexto é uma habilidade que se afina com a prática."}
          </p>
        </div>

        <a
          href="/"
          className="flex items-center justify-center gap-2 rounded-2xl bg-stone-900 px-6 py-4 text-base font-semibold text-white transition hover:bg-stone-800"
        >
          Voltar ao início
          <span aria-hidden="true">→</span>
        </a>
      </div>
    );
  }

  const progresso = exercicioIdx / totalExercicios;

  return (
    <div className="space-y-6">
      {/* Barra de progresso */}
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-stone-100">
        <div
          className="h-full rounded-full bg-stone-900 transition-all duration-500"
          style={{ width: `${progresso * 100}%` }}
        />
      </div>

      {/* Barra de admin */}
      {isAdmin && (
        <div className="flex items-center justify-between rounded-xl border border-dashed border-stone-300 bg-stone-50 px-4 py-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-stone-400">
            Admin
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={() => irParaExercicio(exercicioIdx - 1)}
              disabled={exercicioIdx === 0}
              className="rounded px-2 py-1 text-xs font-medium text-stone-500 hover:text-stone-900 disabled:opacity-30"
            >
              ← Anterior
            </button>
            <span className="text-xs text-stone-500">
              {exercicioIdx + 1} / {totalExercicios}
            </span>
            <button
              onClick={() => irParaExercicio(exercicioIdx + 1)}
              disabled={exercicioIdx + 1 >= totalExercicios}
              className="rounded px-2 py-1 text-xs font-medium text-stone-500 hover:text-stone-900 disabled:opacity-30"
            >
              Próximo →
            </button>
          </div>
        </div>
      )}

      {/* Card do exercício */}
      <div className="rounded-2xl border border-stone-200 bg-white px-6 py-5 shadow-sm">
        {/* Chip de contexto */}
        <div className="mb-4 flex items-center justify-between">
          <span className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-stone-700">
            {exercicio.contexto}
          </span>
          <span className="text-xs text-stone-400">
            {exercicioIdx + 1}/{totalExercicios}
          </span>
        </div>

        {/* Enunciado */}
        <p className="mb-5 text-sm font-semibold leading-relaxed text-stone-800">
          {exercicio.enunciado}
        </p>

        {/* ── IDENTIFICAÇÃO DE REGISTRO ── */}
        {exercicio.tipo === "identificacao_registro" && exercicio.opcoes && (
          <div className="space-y-3">
            {exercicio.opcoes.map((opcao, i) => {
              const selecionada = opcaoSelecionada === opcao;
              const correta = opcao === exercicio.gabarito;
              let estilo =
                "w-full rounded-xl border px-4 py-3 text-left text-sm leading-relaxed transition ";

              if (fase === "feedback" && selecionada) {
                estilo += correta
                  ? "border-emerald-400 bg-emerald-50 text-stone-800"
                  : "border-red-300 bg-red-50 text-stone-800";
              } else if (fase === "feedback" && correta && numTentativas > 0) {
                estilo += "border-emerald-200 bg-emerald-50/50 text-stone-600";
              } else {
                estilo += "border-stone-200 bg-stone-50 text-stone-700 hover:border-stone-400 hover:bg-stone-100";
              }

              return (
                <button
                  key={i}
                  onClick={() => handleSelecionarOpcao(opcao)}
                  disabled={fase === "feedback" && (feedback?.acertou || numTentativas >= 1)}
                  className={estilo}
                >
                  <span className="mr-2 font-semibold text-stone-400">
                    {i === 0 ? "A." : "B."}
                  </span>
                  {opcao}
                </button>
              );
            })}
          </div>
        )}

        {/* ── REESCRITA DE REGISTRO ── */}
        {exercicio.tipo === "reescrita_registro" && (
          <div className="space-y-4">
            {/* Exemplo-modelo — sempre visível (Sweller + Baymard) */}
            {exercicio.exemploPar && (
              <div className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 space-y-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">
                  Como ficaria no formal
                </p>
                <div className="space-y-1.5">
                  <div className="flex gap-2 items-start">
                    <span className="mt-0.5 shrink-0 rounded bg-stone-200 px-1.5 py-0.5 text-[10px] font-semibold uppercase text-stone-500">
                      Informal
                    </span>
                    <p className="text-sm text-stone-500 italic leading-relaxed">
                      "{exercicio.exemploPar.informal}"
                    </p>
                  </div>
                  <div className="flex gap-2 items-start">
                    <span className="mt-0.5 shrink-0 rounded bg-amber-100 px-1.5 py-0.5 text-[10px] font-semibold uppercase text-amber-700">
                      Formal
                    </span>
                    <p className="text-sm text-stone-800 leading-relaxed">
                      "{exercicio.exemploPar.formal}"
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Texto a reescrever */}
            <div className="rounded-xl border border-stone-200 bg-white px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-1.5">
                Reescreva esta mensagem
              </p>
              <p className="text-sm text-stone-700 italic leading-relaxed">
                "{exercicio.textoInformal}"
              </p>
            </div>

            {/* Textarea */}
            <div>
              <textarea
                value={inputTexto}
                onChange={(e) => setInputTexto(e.target.value)}
                disabled={fase === "carregando"}
                placeholder="Escreva aqui a versão formal..."
                rows={4}
                className="w-full resize-none rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-800 placeholder-stone-400 outline-none transition focus:border-stone-400 disabled:bg-stone-50 disabled:text-stone-500"
              />
            </div>

            {/* Botão confirmar */}
            {fase === "input" && (
              <button
                onClick={handleConfirmarReescrita}
                disabled={!inputTexto.trim()}
                className="w-full rounded-xl bg-stone-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-stone-800 disabled:bg-stone-300 disabled:cursor-not-allowed"
              >
                Confirmar
              </button>
            )}

            {/* Loading */}
            {fase === "carregando" && (
              <div className="flex items-center justify-center gap-2 rounded-xl bg-stone-100 px-4 py-3">
                <svg className="h-4 w-4 animate-spin text-stone-500" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                <span className="text-sm text-stone-500">Avaliando sua resposta...</span>
              </div>
            )}
          </div>
        )}

        {/* Erro de rede */}
        {erro && (
          <p className="mt-3 rounded-lg bg-red-50 px-4 py-2 text-sm text-red-700">
            {erro}
          </p>
        )}
      </div>

      {/* Card de feedback */}
      {fase === "feedback" && feedback && (
        <div className={`rounded-2xl border px-6 py-5 space-y-4 ${feedback.acertou ? "border-emerald-200 bg-emerald-50" : "border-amber-200 bg-amber-50"}`}>
          {/* Cabeçalho */}
          <div className="flex items-center gap-2">
            <span className={`text-xs font-semibold uppercase tracking-widest ${feedback.acertou ? "text-emerald-700" : "text-amber-700"}`}>
              {feedback.acertou ? "Registro adequado" : "Quase lá"}
            </span>
          </div>

          {/* Mensagem da IA */}
          <p className="text-sm text-stone-700 leading-relaxed whitespace-pre-line">
            {feedback.mensagem.split("\n").map((linha, i) => (
              <span key={i}>
                {renderNegrito(linha)}
                {i < feedback.mensagem.split("\n").length - 1 && <br />}
              </span>
            ))}
          </p>

          {/* Versão sugerida (após 2+ tentativas) */}
          {feedback.versaoSugerida && (
            <div className="rounded-xl border border-amber-200 bg-white px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">
                Uma versão formal seria
              </p>
              <p className="text-sm text-stone-700 leading-relaxed italic">
                "{feedback.versaoSugerida}"
              </p>
            </div>
          )}

          {/* Ações */}
          <div className="flex gap-3">
            {/* Tentar novamente: só para reescrita, só se não acertou e sem versaoSugerida */}
            {exercicio.tipo === "reescrita_registro" && !feedback.acertou && !feedback.versaoSugerida && (
              <button
                onClick={handleTentarNovamente}
                className="flex-1 rounded-xl border border-amber-300 bg-white px-4 py-2.5 text-sm font-semibold text-amber-800 transition hover:bg-amber-50"
              >
                Tentar novamente
              </button>
            )}

            {/* Próximo: aparece sempre que o aluno pode avançar */}
            {(feedback.acertou || feedback.versaoSugerida || exercicio.tipo === "identificacao_registro") && (
              <button
                onClick={() => handleProximo(feedback.acertou)}
                className="flex-1 rounded-xl bg-stone-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-stone-800"
              >
                {exercicioIdx + 1 >= totalExercicios ? "Concluir" : "Próximo →"}
              </button>
            )}
          </div>
        </div>
      )}

      {/* Para identificação: se errou na 1ª tentativa, pode tentar de novo */}
      {fase === "feedback" && feedback && !feedback.acertou && exercicio.tipo === "identificacao_registro" && numTentativas < 2 && (
        <button
          onClick={() => {
            setFeedback(null);
            setOpcaoSelecionada(null);
            setFase("input");
          }}
          className="w-full rounded-xl border border-stone-200 bg-white px-4 py-2.5 text-sm font-semibold text-stone-700 transition hover:bg-stone-50"
        >
          Tentar novamente
        </button>
      )}
    </div>
  );
}
