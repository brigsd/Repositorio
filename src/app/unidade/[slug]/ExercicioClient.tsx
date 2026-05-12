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
import type { ExercicioGerado } from "@/lib/exercicios/tipos";

const PAR_NOME: Record<string, string> = {
  mas_mais: "mas / mais",
  ha_a: "há / a",
  mau_mal: "mau / mal",
  porque_family: "por que / porque",
  mim_eu: "mim / eu",
  onde_aonde: "onde / aonde",
  senao_se_nao: "senão / se não",
  esta_esta: "está / esta",
  pode_pode: "pôde / pode",
  sabia_sabia: "sábia / sabia",
  duvida_duvida: "dúvida / duvida",
  e_e: "é / e",
  da_da: "dá / da",
};

// ────────────────────────────────────────────────────────────────────────────
// Tipos locais
// ────────────────────────────────────────────────────────────────────────────

interface Armadilha {
  id: string;
  titulo: string;
  textoAncora: string;
  exemplosCertos: string[];
  exemplosErrados: string[];
  tiposErro: string[];
}

interface RespostaIA {
  mensagem: string;
  acertou: boolean;
  tipoErro?: string;
  modoUsado: string;
}

// ────────────────────────────────────────────────────────────────────────────
// Renderiza texto com **negrito** para palavras-chave
// ────────────────────────────────────────────────────────────────────────────

function renderTextoFormatado(texto: string) {
  const partes = texto.split(/(\*\*[^*]+\*\*)/g);
  return partes.map((parte, i) => {
    if (parte.startsWith('**') && parte.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold">
          {parte.slice(2, -2)}
        </strong>
      );
    }
    return parte;
  });
}

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
  exercicios: ExercicioGerado[];
  slug: string; // slug da unidade
}

export default function ExercicioClient({ armadilhas, exercicios, slug }: Props) {
  const [exercicioIdx, setExercicioIdx] = useState(0);
  const [opcaoSelecionada, setOpcaoSelecionada] = useState<string | null>(null);
  const [inputEscrita, setInputEscrita] = useState("");
  const [tentativas, setTentativas] = useState(0);
  const [resposta, setResposta] = useState<RespostaIA | null>(null);
  const [concluiu, setConcluiu] = useState(false);
  const [acertosPorExercicio, setAcertosPorExercicio] = useState<boolean[]>([]);
  const [dicaVisivel, setDicaVisivel] = useState(false);
  const feedbackRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const exercicio = exercicios[exercicioIdx];
  const totalExercicios = exercicios.length;
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
    if (!exercicio) return;

    const resposta_aluno =
      exercicio.tipo === "escrita_lacuna" ? inputEscrita : opcaoSelecionada;
    if (!resposta_aluno) return;

    const fb = gerarFeedbackLocal(exercicio, resposta_aluno, tentativas);
    setResposta(fb);

    if (!fb.acertou) {
      setTentativas((t) => t + 1);
      setOpcaoSelecionada(null);
      setInputEscrita("");
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }

  function handleProximo() {
    if (!resposta || !exercicio) return;

    const respostaFinal =
      exercicio.tipo === "escrita_lacuna" ? inputEscrita : opcaoSelecionada;
    const acertou = resposta.acertou || respostaFinal === exercicio.gabarito;
    setAcertosPorExercicio((prev) => [...prev, acertou]);

    if (exercicioIdx + 1 >= totalExercicios) {
      setConcluiu(true);
    } else {
      setExercicioIdx((i) => i + 1);
      setOpcaoSelecionada(null);
      setInputEscrita("");
      setResposta(null);
      setTentativas(0);
      setDicaVisivel(false);
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
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-stone-400">
          {exercicio.tipo === "escrita_lacuna" ? "Escreva a palavra certa" : "Complete a frase"}
        </p>
        {exercicio.tipo === "escrita_lacuna" ? (
          <p className="text-lg font-medium leading-relaxed text-stone-900">
            {exercicio.enunciado.split("___")[0]}
            <input
              ref={inputRef}
              type="text"
              value={inputEscrita}
              onChange={(e) => setInputEscrita(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter" && inputEscrita.trim()) handleConfirmar(); }}
              disabled={!!resposta?.acertou}
              autoCapitalize="off"
              autoCorrect="off"
              autoComplete="off"
              spellCheck={false}
              aria-label="Digite a resposta"
              className={[
                "mx-1 inline-block w-28 border-b-2 bg-transparent pb-0.5 text-center font-semibold focus:outline-none",
                resposta?.acertou
                  ? "border-emerald-500 text-emerald-700"
                  : resposta && !resposta.acertou
                    ? "border-rose-400 text-rose-700"
                    : "border-stone-900 text-stone-900",
              ].join(" ")}
            />
            {exercicio.enunciado.split("___")[1]}
          </p>
        ) : (
          <p className="text-lg font-medium leading-relaxed text-stone-900">
            {exercicio.enunciado.replace("___", "______")}
          </p>
        )}
      </div>

      {/* Dica de par — apenas para exercícios de escrita */}
      {exercicio.tipo === "escrita_lacuna" && (
        <div className="flex justify-end">
          {!dicaVisivel ? (
            <button
              onClick={() => setDicaVisivel(true)}
              className="flex items-center gap-1.5 rounded-lg border border-stone-200 bg-white px-3 py-1.5 text-xs text-stone-400 transition hover:border-stone-300 hover:text-stone-600"
            >
              <span aria-hidden="true">💡</span>
              Dica
            </button>
          ) : (
            <span className="flex items-center gap-1.5 rounded-lg border border-amber-200 bg-amber-50 px-3 py-1.5 font-mono text-xs font-semibold text-stone-700">
              <span aria-hidden="true">💡</span>
              {PAR_NOME[exercicio.armadilhaId] ?? exercicio.armadilhaId}
            </span>
          )}
        </div>
      )}

      {/* Opções — apenas para múltipla escolha */}
      {exercicio.tipo !== "escrita_lacuna" && exercicio.opcoes && (
        <div
          className="grid grid-cols-2 gap-3"
          role="group"
          aria-label="Escolha uma opção"
        >
          {exercicio.opcoes.map((opcao) => {
            const selecionado = opcaoSelecionada === opcao;
            const correto = resposta?.acertou && opcao === exercicio.gabarito;
            const errado = resposta && !resposta.acertou && selecionado;

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
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest opacity-60">
            {resposta.acertou
              ? "Tutor"
              : tentativas === 1
                ? "Tutor · pista"
                : "Tutor · explicação"}
          </p>
          {resposta.mensagem.split('\n').map((paragrafo, i) => (
            <p key={i} className={i > 0 ? 'mt-2' : ''}>{renderTextoFormatado(paragrafo)}</p>
          ))}
        </div>
      )}

      {/* Botão de ação */}
      <div>
        {!resposta || !resposta.acertou && tentativas < 3 ? (
          <button
            onClick={handleConfirmar}
            disabled={
              exercicio.tipo === "escrita_lacuna"
                ? !inputEscrita.trim()
                : !opcaoSelecionada
            }
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
