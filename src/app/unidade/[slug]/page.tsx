import Link from "next/link";
import { db } from "@/db";
import { unidades } from "@/db/schema";
import { eq } from "drizzle-orm";
import { A6_PALAVRAS_ARMADILHA } from "@/lib/curriculo/a6-palavras-armadilha";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function UnidadePage({ params }: Props) {
  const { slug } = await params;

  // Busca a unidade no banco
  const [unidade] = await db
    .select()
    .from(unidades)
    .where(eq(unidades.slug, slug))
    .limit(1);

  if (!unidade) notFound();

  // Por ora só A6 tem currículo — estrutura pronta para expandir
  const isA6 = slug === "a-6-palavras-armadilha";
  const curriculo = isA6 ? A6_PALAVRAS_ARMADILHA : null;

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-sm text-stone-500">
        <Link href="/" className="hover:text-stone-800 transition-colors">
          Início
        </Link>
        <span>/</span>
        <span className="text-stone-800 font-medium">
          {unidade.nivel}.{unidade.numero} — {unidade.titulo}
        </span>
      </nav>

      {/* Cabeçalho da unidade */}
      <header className="mb-10">
        <div className="mb-3 flex items-center gap-3">
          <span className="rounded-full bg-stone-900 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
            Nível {unidade.nivel} · Unidade {unidade.numero}
          </span>
          {curriculo && (
            <span className="text-sm text-stone-500">
              ~{curriculo.duracaoEstimadaMin} min
            </span>
          )}
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
          {unidade.titulo}
        </h1>
      </header>

      {curriculo ? (
        <div className="space-y-10">
          {/* Âncora de propósito — ANTES de qualquer conteúdo */}
          {/* Princípio: adulto precisa saber o porquê antes de engajar (Knowles) */}
          <section
            aria-labelledby="ancora-titulo"
            className="rounded-2xl border border-amber-200 bg-amber-50 px-6 py-6"
          >
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-amber-700">
              Por que isso importa
            </p>
            <h2 id="ancora-titulo" className="sr-only">
              Por que esta unidade importa
            </h2>
            <p className="mt-2 text-base leading-relaxed text-stone-800">
              {curriculo.ancoraPropósito.corpo}
            </p>
            {curriculo.ancoraPropósito.exemploPrático && (
              <blockquote className="mt-4 border-l-2 border-amber-400 pl-4 text-sm italic text-stone-600">
                {curriculo.ancoraPropósito.exemploPrático}
              </blockquote>
            )}
          </section>

          {/* O que você vai aprender */}
          {curriculo.armadilhas && (
            <section aria-labelledby="armadilhas-titulo">
              <h2
                id="armadilhas-titulo"
                className="mb-4 text-lg font-semibold text-stone-900"
              >
                As armadilhas desta unidade
              </h2>
              <ul className="space-y-3">
                {curriculo.armadilhas.map((a) => (
                  <li
                    key={a.id}
                    className="flex items-center gap-3 rounded-xl border border-stone-200 bg-white px-4 py-3"
                  >
                    <span className="shrink-0 rounded-lg bg-stone-100 px-2.5 py-1.5 font-mono text-sm font-semibold text-stone-700">
                      {a.titulo}
                    </span>
                    <span className="text-sm text-stone-600 leading-snug">
                      {a.textoAncora.split("\n")[0]}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* CTA — começa a unidade interativa */}
          <section className="rounded-2xl border-2 border-stone-900 bg-stone-900 px-6 py-8 text-center">
            <p className="mb-2 text-sm text-stone-400">Pronto para começar?</p>
            <h2 className="mb-4 text-xl font-bold text-white">
              Vamos praticar essas armadilhas
            </h2>
            <p className="mb-6 text-sm text-stone-400 leading-relaxed">
              Você vai receber situações reais e o tutor vai te ajudar a
              entender cada uma. Sem prova, sem nota. Só aprendizado.
            </p>
            <Link
              href={`/unidade/${slug}/exercicio`}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-stone-900"
            >
              Começar esta unidade
              <span aria-hidden="true">→</span>
            </Link>
          </section>

          {/* O que você vai conseguir fazer depois */}
          <section
            aria-labelledby="resultado-titulo"
            className="rounded-2xl border border-stone-200 bg-stone-50 px-6 py-5"
          >
            <h2
              id="resultado-titulo"
              className="mb-3 text-sm font-semibold uppercase tracking-widest text-stone-500"
            >
              Depois desta unidade você vai conseguir
            </h2>
            <ul className="space-y-2">
              {curriculo.armadilhas?.map((a) => (
                <li key={a.id} className="flex items-start gap-2 text-sm text-stone-700">
                  <span className="mt-0.5 text-stone-400" aria-hidden="true">
                    ✓
                  </span>
                  Usar <strong className="font-semibold">{a.titulo}</strong>{" "}
                  sem errar em e-mail, currículo ou mensagem formal
                </li>
              ))}
            </ul>
          </section>
        </div>
      ) : (
        /* Unidades sem currículo ainda — placeholder */
        <div className="rounded-2xl border border-dashed border-stone-300 px-6 py-12 text-center">
          <p className="text-stone-500">
            Esta unidade ainda está sendo preparada.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block text-sm text-stone-700 underline underline-offset-4"
          >
            Voltar ao início
          </Link>
        </div>
      )}
    </div>
  );
}
