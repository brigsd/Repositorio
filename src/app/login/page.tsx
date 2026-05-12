"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [nome, setNome] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setErro("");
    setCarregando(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome }),
      });

      const data = await res.json();

      if (data.ok) {
        router.push("/");
        router.refresh();
      } else {
        setErro(data.erro || "Algo deu errado.");
      }
    } catch {
      setErro("Sem conexão. Tenta de novo.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-50 px-4">
      <div className="w-full max-w-sm">
        {/* Título */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-stone-900">
            Bem-vindo de volta
          </h1>
          <p className="mt-2 text-sm text-stone-500">
            Digite seu primeiro nome para entrar.
          </p>
        </div>

        {/* Formulário */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label
              htmlFor="nome"
              className="block text-sm font-medium text-stone-700 mb-1.5"
            >
              Seu primeiro nome
            </label>
            <input
              id="nome"
              type="text"
              autoComplete="given-name"
              autoCapitalize="words"
              autoFocus
              placeholder="Ex: Maria"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-lg text-stone-900 placeholder:text-stone-400 focus:border-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-200 transition"
            />
          </div>

          {/* Erro */}
          {erro && (
            <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
              {erro}
            </div>
          )}

          {/* Botão */}
          <button
            type="submit"
            disabled={carregando || nome.trim().length === 0}
            className="w-full rounded-xl bg-stone-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-stone-800 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {carregando ? "Entrando..." : "Entrar"}
          </button>
        </form>

        {/* Rodapé */}
        <p className="mt-6 text-center text-xs text-stone-400">
          Não está cadastrado? Fale com o Tiago.
        </p>
      </div>
    </main>
  );
}
