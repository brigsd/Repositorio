import { asc } from "drizzle-orm";
import Link from "next/link";
import { db } from "@/db";
import { unidades } from "@/db/schema";
import { NIVEIS_INFO, type NivelChave } from "@/lib/niveis";
import { obterSessao } from "@/lib/auth";
import { LogoutButton } from "./LogoutButton";

// Unidades com currículo interativo pronto
const UNIDADES_ATIVAS = new Set([
  "a-5-acentos",
  "a-6-palavras-armadilha",
]);

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const sessao = await obterSessao();

  const todasUnidades = await db
    .select()
    .from(unidades)
    .orderBy(asc(unidades.ordem));

  const porNivel: Record<NivelChave, typeof todasUnidades> = {
    A: todasUnidades.filter((u) => u.nivel === "A"),
    B: todasUnidades.filter((u) => u.nivel === "B"),
    C: todasUnidades.filter((u) => u.nivel === "C"),
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      {/* Barra do usuário */}
      {sessao && (
        <div className="mb-6 flex items-center justify-between rounded-xl border border-stone-200 bg-white px-4 py-3">
          <p className="text-sm text-stone-700">
            Olá, <strong>{sessao.nome}</strong>
          </p>
          <div className="flex items-center gap-3">
            {sessao.isAdmin && (
              <Link
                href="/admin"
                className="text-xs font-medium text-amber-700 hover:text-amber-900 transition"
              >
                Painel do curador
              </Link>
            )}
            <LogoutButton />
          </div>
        </div>
      )}

      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Programa de Educação para Adultos
        </h1>
        <p className="mt-3 text-stone-600">
          Trilha de letramento em 3 níveis, {todasUnidades.length} unidades no
          total.
        </p>
      </header>

      <div className="space-y-12">
        {(["A", "B", "C"] as const).map((nivel) => {
          const info = NIVEIS_INFO[nivel];
          const unidadesDoNivel = porNivel[nivel];

          return (
            <section key={nivel}>
              <div className="mb-4 border-l-4 border-stone-300 pl-4">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h2 className="text-2xl font-semibold">Nível {nivel}</h2>
                  <span className="text-sm text-stone-500">
                    {info.duracaoEstimada} · {unidadesDoNivel.length} unidades
                  </span>
                </div>
                <p className="mt-1 text-lg text-stone-800">{info.titulo}</p>
                <p className="mt-1 text-sm leading-relaxed text-stone-600">
                  {info.descricao}
                </p>
              </div>

              <ul className="space-y-2">
                {unidadesDoNivel.map((u) => {
                  const ativa = UNIDADES_ATIVAS.has(u.slug);
                  return (
                    <li key={u.id}>
                      {ativa ? (
                        <Link
                          href={`/unidade/${u.slug}`}
                          className="flex items-center justify-between gap-4 rounded-lg border border-stone-200 bg-white px-4 py-3 transition hover:border-stone-800 hover:bg-stone-50 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:ring-offset-1"
                        >
                          <div className="min-w-0">
                            <span className="text-xs font-medium uppercase tracking-wide text-stone-500">
                              {u.nivel}.{u.numero}
                            </span>
                            <h3 className="mt-0.5 text-base font-medium text-stone-900">
                              {u.titulo}
                            </h3>
                          </div>
                          <span className="shrink-0 rounded-full bg-stone-900 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                            Disponível
                          </span>
                        </Link>
                      ) : (
                        <article className="flex items-center justify-between gap-4 rounded-lg border border-stone-200 bg-white px-4 py-3 opacity-60">
                          <div className="min-w-0">
                            <span className="text-xs font-medium uppercase tracking-wide text-stone-500">
                              {u.nivel}.{u.numero}
                            </span>
                            <h3 className="mt-0.5 text-base font-medium text-stone-900">
                              {u.titulo}
                            </h3>
                          </div>
                          <span className="shrink-0 rounded-full bg-stone-100 px-2 py-1 text-xs font-medium uppercase tracking-wide text-stone-500">
                            Em breve
                          </span>
                        </article>
                      )}
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>

      <footer className="mt-16 border-t border-stone-200 pt-6 text-sm text-stone-500">
        <div className="flex items-center justify-between">
          <span>
            Versão de desenvolvimento · Documentação em{" "}
            <code className="rounded bg-stone-100 px-1.5 py-0.5 text-xs">
              docs/
            </code>
          </span>
          <code className="rounded bg-stone-100 px-1.5 py-0.5 text-xs text-stone-400">
            {process.env.NEXT_PUBLIC_GIT_HASH}
          </code>
        </div>
      </footer>
    </div>
  );
}
