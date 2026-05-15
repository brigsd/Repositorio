"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

interface Aluno {
  id: string;
  nome: string;
  primeiroNome: string;
  email: string;
  isAdmin: boolean;
  criadoEm: string;
}

interface TotaisTokens {
  totalChamadas: number;
  tokensInput: number;
  tokensOutput: number;
  totalTokens: number;
  custoUsd: number;
}

export default function AdminPage() {
  const [alunos, setAlunos] = useState<Aluno[]>([]);
  const [tokens, setTokens] = useState<TotaisTokens | null>(null);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [editandoId, setEditandoId] = useState<string | null>(null);
  const [nomeEditando, setNomeEditando] = useState("");
  const [salvandoId, setSalvandoId] = useState<string | null>(null);
  const [erroEdicao, setErroEdicao] = useState("");
  const router = useRouter();

  const carregarAlunos = useCallback(async () => {
    const res = await fetch("/api/admin/alunos");
    if (res.status === 403) {
      router.push("/");
      return;
    }
    const data = await res.json();
    setAlunos(data.alunos || []);
  }, [router]);

  const carregarTokens = useCallback(async () => {
    const res = await fetch("/api/admin/tokens");
    if (res.ok) {
      const data = await res.json();
      setTokens(data.totais);
    }
  }, []);

  useEffect(() => {
    carregarAlunos();
    carregarTokens();
  }, [carregarAlunos, carregarTokens]);

  function handleIniciarEdicao(aluno: Aluno) {
    setEditandoId(aluno.id);
    setNomeEditando(aluno.nome);
    setErroEdicao("");
  }

  function handleCancelarEdicao() {
    setEditandoId(null);
    setNomeEditando("");
    setErroEdicao("");
  }

  async function handleSalvarNome(id: string) {
    if (!nomeEditando.trim()) return;
    setSalvandoId(id);
    setErroEdicao("");

    try {
      const res = await fetch(`/api/admin/alunos/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome: nomeEditando }),
      });
      const data = await res.json();

      if (data.ok) {
        setEditandoId(null);
        setNomeEditando("");
        carregarAlunos();
      } else {
        setErroEdicao(data.erro ?? "Erro ao salvar.");
      }
    } catch {
      setErroEdicao("Erro ao salvar. Tenta de novo.");
    } finally {
      setSalvandoId(null);
    }
  }

  async function handleAdicionar(e: React.FormEvent) {
    e.preventDefault();
    setErro("");
    setMensagem("");
    setCarregando(true);

    try {
      const res = await fetch("/api/admin/alunos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email }),
      });

      const data = await res.json();

      if (data.ok) {
        setMensagem(
          `${data.aluno.nome} cadastrado! Login: "${data.aluno.primeiroNome}"`
        );
        setNome("");
        setEmail("");
        carregarAlunos();
      } else {
        setErro(data.erro);
      }
    } catch {
      setErro("Erro ao cadastrar. Tenta de novo.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <main className="min-h-screen bg-stone-50 px-4 py-8">
      <div className="mx-auto max-w-2xl">
        {/* Cabeçalho */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-stone-900">
              Painel do Curador
            </h1>
            <p className="mt-1 text-sm text-stone-500">
              Gerencie os alunos da plataforma.
            </p>
          </div>
          <a
            href="/"
            className="rounded-xl border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 transition hover:bg-stone-100"
          >
            ← Voltar
          </a>
        </div>

        {/* Contador de tokens IA */}
        {tokens && (
          <div className="rounded-2xl border border-stone-200 bg-white p-6 mb-8">
            <h2 className="text-lg font-semibold text-stone-900 mb-4">
              Uso de IA — acumulado total
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-xl bg-stone-50 border border-stone-100 px-4 py-3">
                <p className="text-xs font-medium text-stone-500 uppercase tracking-wide">Chamadas</p>
                <p className="mt-1 text-2xl font-bold text-stone-900">{tokens.totalChamadas.toLocaleString("pt-BR")}</p>
              </div>
              <div className="rounded-xl bg-stone-50 border border-stone-100 px-4 py-3">
                <p className="text-xs font-medium text-stone-500 uppercase tracking-wide">Tokens entrada</p>
                <p className="mt-1 text-2xl font-bold text-stone-900">{tokens.tokensInput.toLocaleString("pt-BR")}</p>
              </div>
              <div className="rounded-xl bg-stone-50 border border-stone-100 px-4 py-3">
                <p className="text-xs font-medium text-stone-500 uppercase tracking-wide">Tokens saída</p>
                <p className="mt-1 text-2xl font-bold text-stone-900">{tokens.tokensOutput.toLocaleString("pt-BR")}</p>
              </div>
              <div className="rounded-xl bg-amber-50 border border-amber-100 px-4 py-3">
                <p className="text-xs font-medium text-amber-700 uppercase tracking-wide">Custo estimado</p>
                <p className="mt-1 text-2xl font-bold text-amber-900">
                  US$ {tokens.custoUsd.toFixed(4)}
                </p>
              </div>
            </div>
            <p className="mt-3 text-xs text-stone-400">
              Dados salvos na tabela <code className="rounded bg-stone-100 px-1">chamadas_ia</code> · atualizado a cada chamada
            </p>
          </div>
        )}

        {/* Formulário de cadastro */}
        <div className="rounded-2xl border border-stone-200 bg-white p-6 mb-8">
          <h2 className="text-lg font-semibold text-stone-900 mb-4">
            Adicionar aluno
          </h2>
          <form onSubmit={handleAdicionar} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="admin-nome"
                  className="block text-sm font-medium text-stone-700 mb-1"
                >
                  Nome completo
                </label>
                <input
                  id="admin-nome"
                  type="text"
                  placeholder="Ex: Maria da Silva"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:border-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-200"
                />
              </div>
              <div>
                <label
                  htmlFor="admin-email"
                  className="block text-sm font-medium text-stone-700 mb-1"
                >
                  E-mail
                </label>
                <input
                  id="admin-email"
                  type="email"
                  placeholder="maria@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:border-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-200"
                />
              </div>
            </div>

            {erro && (
              <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-2.5 text-sm text-rose-700">
                {erro}
              </div>
            )}
            {mensagem && (
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-sm text-emerald-700">
                {mensagem}
              </div>
            )}

            <button
              type="submit"
              disabled={carregando || !nome.trim() || !email.trim()}
              className="rounded-xl bg-stone-900 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-stone-800 disabled:opacity-50"
            >
              {carregando ? "Cadastrando..." : "Cadastrar aluno"}
            </button>
          </form>
        </div>

        {/* Lista de alunos */}
        <div className="rounded-2xl border border-stone-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-stone-900 mb-4">
            Alunos cadastrados ({alunos.length})
          </h2>

          {alunos.length === 0 ? (
            <p className="text-sm text-stone-500">
              Nenhum aluno cadastrado ainda.
            </p>
          ) : (
            <div className="space-y-3">
              {alunos.map((aluno) => (
                <div
                  key={aluno.id}
                  className="flex items-center justify-between rounded-xl border border-stone-100 bg-stone-50 px-4 py-3"
                >
                  <div className="flex-1 min-w-0">
                    {editandoId === aluno.id ? (
                      <>
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            value={nomeEditando}
                            onChange={(e) => setNomeEditando(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") handleSalvarNome(aluno.id);
                              if (e.key === "Escape") handleCancelarEdicao();
                            }}
                            autoFocus
                            className="rounded-lg border border-stone-300 bg-white px-2 py-1 text-sm text-stone-900 focus:border-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-200"
                          />
                          <button
                            onClick={() => handleSalvarNome(aluno.id)}
                            disabled={salvandoId === aluno.id || !nomeEditando.trim()}
                            className="text-xs font-medium text-emerald-700 hover:text-emerald-900 disabled:opacity-40 transition"
                          >
                            {salvandoId === aluno.id ? "salvando..." : "salvar"}
                          </button>
                          <button
                            onClick={handleCancelarEdicao}
                            className="text-xs text-stone-400 hover:text-stone-700 transition"
                          >
                            cancelar
                          </button>
                        </div>
                        {erroEdicao && (
                          <p className="mt-1 text-xs text-rose-600">{erroEdicao}</p>
                        )}
                      </>
                    ) : (
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-stone-900">
                          {aluno.nome}
                          {aluno.isAdmin && (
                            <span className="ml-2 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700">
                              curador
                            </span>
                          )}
                        </p>
                        <button
                          onClick={() => handleIniciarEdicao(aluno)}
                          className="text-xs text-stone-400 hover:text-stone-700 transition"
                        >
                          editar
                        </button>
                      </div>
                    )}
                    <p className="text-xs text-stone-500">
                      Login: <strong>{aluno.primeiroNome}</strong> · {aluno.email}
                    </p>
                  </div>
                  <p className="text-xs text-stone-400 shrink-0 ml-4">
                    {new Date(aluno.criadoEm).toLocaleDateString("pt-BR")}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
