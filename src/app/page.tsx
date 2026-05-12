import { asc } from "drizzle-orm";
import Link from "next/link";
import { db } from "@/db";
import { unidades } from "@/db/schema";
import { NIVEIS_INFO, type NivelChave } from "@/lib/niveis";

// Unidades com currículo interativo pronto
const UNIDADES_ATIVAS = new Set(["a-6-palavras-armadilha"]);

export const dynamic = "force-dynamic";

export default async function HomePage() {
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
        Versão de desenvolvimento · Documentação completa em{" "}
        <code className="rounded bg-stone-100 px-1.5 py-0.5 text-xs">
          docs/
        </code>
      </footer>
    </div>
  );
}
