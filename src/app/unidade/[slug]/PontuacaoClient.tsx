"use client";

/**
 * PontuacaoClient — Unidade A.4 "Os outros sinais"
 *
 * Dois tipos de exercício gerenciados em um componente:
 *
 * 1. "identificar_pontuacao" (Fase 1):
 *    Aluno escolhe entre duas versões qual está pontuada corretamente.
 *    Avaliação local, sem chamada de IA.
 *
 * 2. "reconstrucao_pontuacao" (Fase 2):
 *    Aluno recebe texto sem pontuação pré-carregado no textarea (Sweller/Bandura)
 *    e deve inserir os sinais de pontuação para dar clareza.
 *    Avaliação via IA. Até 2 tentativas antes de mostrar versaoSugerida.
 *
 * Princípios aplicados:
 * - Sweller (CLT): texto pré-preenchido reduz carga cognitiva
 * - Bandura: textarea preenchido evita "página em branco" (ansiedade)
 * - NNg: Progressive Disclosure no feedback
 * - Harvard: reconstrução de texto para ensino de pontuação a adultos
 */

import { useState } from "react";
import type { ExercicioPontuacao } from "@/lib/exercicios/tipos-pontuacao";
import type { RespostaFeedbackPontuacao } from "@/lib/prompts";

interface Props {
  exercicios: ExercicioPontuacao[];
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

export default function PontuacaoClient({ exercicios, slug, isAdmin }: Props) {
  const [exercicioIdx, setExercicioIdx] = useState(0);
  const [fase, setFase] = useState<FaseExercicio>("input");
  const [inputTexto, setInputTexto] = useState("");
  const [opcaoSelecionada, setOpcaoSelecionada] = useState<string | null>(null);
  const [numTentativas, setNumTentativas] = useState(0);
  const [feedback, setFeedback] = useState<RespostaFeedbackPontuacao & { textoFeedback?: string } | null>(null);
  const [acertosPorExercicio, setAcertosPorExercicio] = useState<boolean[]>([]);
  const [concluiu, setConcluiu] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const [opcaoConfirmadaErrada, setOpcaoConfirmadaErrada] = useState<string | null>(null);

  const totalExercicios = exercicios.length;
  const exercicio = exercicios[exercicioIdx];

  // Inicializa o textarea com o texto sem pontuação quando muda de exercício
  function inicializarExercicio(idx: number) {
    const ex = exercicios[idx];
    setExercicioIdx(idx);
    setFase("input");
    setInputTexto(ex.tipo === "reconstrucao_pontuacao" ? (ex.textoSemPontuacao ?? "") : "");
    setOpcaoSelecionada(null);
    setOpcaoConfirmadaErrada(null);
    setNumTentativas(0);
    setFeedback(null);
    setErro(null);
  }

  // ─── Identificação de pontuação (MC) ─────────────────────────────────────────

  function handleSelecionarOpcao(opcao: string) {
    if (feedback?.acertou) return;
    setOpcaoSelecionada(opcao);
  }

  function handleConfirmarMC() {
    if (!opcaoSelecionada || !exercicio) return;

    const acertou = opcaoSelecionada === exercicio.gabarito;

    if (acertou) {
      setFeedback({
        mensagem: exercicio.feedbackAcerto ?? "Exatamente! Essa é a versão bem pontuada.",
        acertou: true,
        confiancaIa: "seguro",
        modoUsado: "celebracao",
      });
    } else {
      const camada = Math.min(numTentativas, 2) as 0 | 1 | 2;
      setOpcaoConfirmadaErrada(opcaoSelecionada);
      setFeedback({
        mensagem: exercicio.feedbackErro?.[camada] ?? "Olhe com mais atenção a pontuação das duas versões.",
        acertou: false,
        confiancaIa: "seguro",
        modoUsado: "socratico",
      });
      setNumTentativas((n) => n + 1);
      setOpcaoSelecionada(null);
    }

    setFase("feedback");
  }

  // ─── Reconstrução de pontuação (IA) ──────────────────────────────────────────

  async function handleConfirmarReconstrucao() {
    if (!inputTexto.trim() || fase !== "input" || !exercicio) return;
    setFase("carregando");
    setErro(null);

    try {
      const res = await fetch("/api/exercicio/avaliar-pontuacao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          exercicioSlug: exercicio.slug,
          textoSemPontuacao: exercicio.textoSemPontuacao ?? "",
          textoPontuado: exercicio.textoPontuado ?? "",
          respostaAluno: inputTexto.trim(),
          contexto: exercicio.contexto,
          sinalFoco: exercicio.sinalFoco ?? "misto",
          rubrica: exercicio.rubrica ?? [],
          tiposErroValidos: exercicio.tiposErroValidos ?? [],
          numTentativas,
          unidadeSlug: slug,
        }),
      });

      if (!res.ok) throw new Error("Erro na avaliação");

      const resultado: RespostaFeedbackPontuacao = await res.json();
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

    inicializarExercicio(exercicioIdx + 1);
  }

  function handleTentarNovamente() {
    setNumTentativas((n) => n + 1);
    setFeedback(null);
    setOpcaoSelecionada(null);
    setOpcaoConfirmadaErrada(null);
    setFase("input");
    // Mantém o texto do aluno para que ele possa editar
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
              ? "Você demonstrou boa compreensão dos sinais de pontuação. Seus textos vão ficar mais claros e profissionais."
              : "Você está no caminho certo. Pontuação é uma habilidade que se afina com a prática. O sistema vai te trazer esses exercícios de volta nos próximos dias."}
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
      <div>
        <div className="mb-1.5 flex justify-between text-xs text-stone-500">
          <span>Exercício {exercicioIdx + 1} de {totalExercicios}</span>
          <span>{Math.round(progresso * 100)}%</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-stone-100">
          <div
            className="h-full rounded-full bg-stone-900 transition-all duration-500"
            style={{ width: `${progresso * 100}%` }}
          />
        </div>
      </div>

      {/* Barra de admin */}
      {isAdmin && (
        <div className="flex items-center justify-between rounded-xl border border-dashed border-stone-300 bg-stone-50 px-4 py-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-stone-400">
            Admin
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={() => inicializarExercicio(exercicioIdx - 1)}
              disabled={exercicioIdx === 0}
              className="rounded px-2 py-1 text-xs font-medium text-stone-500 hover:text-stone-900 disabled:opacity-30"
            >
              ← Anterior
            </button>
            <span className="text-xs text-stone-500">
              {exercicioIdx + 1} / {totalExercicios}
            </span>
            <button
              onClick={() => inicializarExercicio(exercicioIdx + 1)}
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

        {/* Label do tipo */}
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-stone-400">
          {exercicio.tipo === "reconstrucao_pontuacao"
            ? "Insira a pontuação"
            : "Escolha a versão bem pontuada"}
        </p>

        {/* Enunciado */}
        <p className="mb-5 text-sm font-semibold leading-relaxed text-stone-800">
          {exercicio.enunciado}
        </p>

        {/* ── IDENTIFICAÇÃO DE PONTUAÇÃO ── */}
        {exercicio.tipo === "identificar_pontuacao" && exercicio.opcoes && (
          <div className="space-y-3">
            {exercicio.opcoes.map((opcao, i) => {
              const selecionada = opcaoSelecionada === opcao;
              const correta = feedback?.acertou && opcao === exercicio.gabarito;
              const errada = opcaoConfirmadaErrada === opcao;
              let estilo =
                "w-full rounded-xl border-2 px-4 py-4 text-left text-sm leading-relaxed transition ";

              if (correta) {
                estilo += "border-emerald-400 bg-emerald-50 text-stone-800";
              } else if (errada) {
                estilo += "border-rose-300 bg-rose-50 text-stone-800";
              } else if (selecionada) {
                estilo += "border-stone-900 bg-stone-900 text-white";
              } else {
                estilo += "border-stone-200 bg-stone-50 text-stone-700 hover:border-stone-400 hover:bg-stone-100";
              }

              return (
                <button
                  key={i}
                  onClick={() => handleSelecionarOpcao(opcao)}
                  disabled={!!feedback?.acertou}
                  className={estilo}
                >
                  <span className="mr-2 font-semibold text-stone-400">
                    {i === 0 ? "A." : "B."}
                  </span>
                  {opcao}
                </button>
              );
            })}

            {/* Botão confirmar MC */}
            {(!feedback || (!feedback.acertou && numTentativas < 3)) && (
              <button
                onClick={handleConfirmarMC}
                disabled={!opcaoSelecionada}
                className="w-full rounded-xl bg-stone-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-stone-800 disabled:bg-stone-300 disabled:cursor-not-allowed"
              >
                Confirmar
              </button>
            )}
          </div>
        )}

        {/* ── RECONSTRUÇÃO DE PONTUAÇÃO ── */}
        {exercicio.tipo === "reconstrucao_pontuacao" && (
          <div className="space-y-4">
            {/* Texto original (referência visual) */}
            <div className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-1.5">
                Texto original (sem pontuação)
              </p>
              <p className="text-sm text-stone-500 italic leading-relaxed">
                {exercicio.textoSemPontuacao}
              </p>
            </div>

            {/* Textarea pré-preenchido */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-1.5">
                Sua versão pontuada
              </p>
              <textarea
                value={inputTexto}
                onChange={(e) => setInputTexto(e.target.value)}
                disabled={fase === "carregando"}
                rows={5}
                className="w-full resize-none rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-800 placeholder-stone-400 outline-none transition focus:border-stone-400 disabled:bg-stone-50 disabled:text-stone-500"
              />
            </div>

            {/* Botão confirmar */}
            {fase === "input" && (
              <button
                onClick={handleConfirmarReconstrucao}
                disabled={!inputTexto.trim() || inputTexto === exercicio.textoSemPontuacao}
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
                <span className="text-sm text-stone-500">Avaliando sua pontuação...</span>
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
              {feedback.acertou
                ? "Tutor"
                : numTentativas === 1
                  ? "Tutor · pista"
                  : "Tutor · explicação"}
            </span>
          </div>

          {/* Mensagem */}
          {feedback.mensagem.split("\n").map((paragrafo, i) => (
            <p key={i} className={`text-sm text-stone-700 leading-relaxed ${i > 0 ? "mt-2" : ""}`}>
              {renderNegrito(paragrafo)}
            </p>
          ))}

          {/* Versão sugerida (após 2+ tentativas) */}
          {feedback.versaoSugerida && (
            <div className="rounded-xl border border-amber-200 bg-white px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">
                Uma versão pontuada seria
              </p>
              <p className="text-sm text-stone-700 leading-relaxed italic">
                &ldquo;{feedback.versaoSugerida}&rdquo;
              </p>
            </div>
          )}

          {/* Ações */}
          <div className="flex gap-3">
            {/* Tentar novamente: só para reconstrução, só se não acertou e sem versaoSugerida */}
            {exercicio.tipo === "reconstrucao_pontuacao" && !feedback.acertou && !feedback.versaoSugerida && (
              <button
                onClick={handleTentarNovamente}
                className="flex-1 rounded-xl border border-amber-300 bg-white px-4 py-2.5 text-sm font-semibold text-amber-800 transition hover:bg-amber-50"
              >
                Tentar novamente
              </button>
            )}

            {/* Próximo */}
            {(feedback.acertou || feedback.versaoSugerida || exercicio.tipo === "identificar_pontuacao") && (
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
    </div>
  );
}
