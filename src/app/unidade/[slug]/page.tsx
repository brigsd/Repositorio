import Link from "next/link";
import { db } from "@/db";
import { unidades } from "@/db/schema";
import { eq } from "drizzle-orm";
import { A6_PALAVRAS_ARMADILHA } from "@/lib/curriculo/a6-palavras-armadilha";
import { obterExercicios } from "@/lib/exercicios";
import { notFound } from "next/navigation";
import { DetalhesUnidade } from "./DetalhesUnidade";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function UnidadePage({ params }: Props) {
  const { slug } = await params;

  const [unidade] = await db
    .select()
    .from(unidades)
    .where(eq(unidades.slug, slug))
    .limit(1);

  if (!unidade) notFound();

  // Currículo completo (com âncora, armadilhas, etc.)
  const isA6 = slug === "a-6-palavras-armadilha";
  const curriculo = isA6 ? A6_PALAVRAS_ARMADILHA : null;

  // Exercícios interativos (registro central)
  const temExercicios = obterExercicios(slug) !== null;

  // Extrai dados simplificados para exibição
  const proposito = curriculo?.ancoraPropósito.corpo ?? null;
  const exemploPratico = curriculo?.ancoraPropósito.exemploPrático ?? null;
  const armadilhas = curriculo?.armadilhas ?? [];

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
      <header className="mb-8">
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

      {(curriculo || temExercicios) ? (
        <div className="space-y-6">
          {/* ── Camada 1: Propósito (curto) ─────────────────────────── */}
          {/* Princípio Knowles: adulto engaja quando sabe o "porquê" */}
          {proposito && (
            <div className="rounded-2xl border border-amber-200 bg-amber-50 px-6 py-5">
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-amber-700">
                Por que isso importa
              </p>
              <p className="mt-2 text-sm leading-relaxed text-stone-800">
                {proposito}
              </p>
            </div>
          )}

          {/* ── Camada 2: CTA — acima da dobra ─────────────────────── */}
          {/* Princípio: Fast-Track to Value — botão visível sem scroll */}
          <Link
            href={`/unidade/${slug}/exercicio`}
            className="flex items-center justify-center gap-2 rounded-2xl bg-stone-900 px-6 py-4 text-base font-semibold text-white transition hover:bg-stone-800"
          >
            Começar exercícios
            <span aria-hidden="true">→</span>
          </Link>

          {/* ── Camada 3: Detalhes sob demanda (Progressive Disclosure) */}
          {/* Armadilhas, exemplo prático, competências — expande se quiser */}
          {armadilhas.length > 0 && (
            <DetalhesUnidade
              armadilhas={armadilhas.map((a) => ({
                id: a.id,
                titulo: a.titulo,
                resumo: a.textoAncora.split("\n")[0],
              }))}
              exemploPratico={exemploPratico}
            />
          )}
        </div>
      ) : (
        /* Unidades sem conteúdo ainda — placeholder */
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
