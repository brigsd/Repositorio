import { db } from "@/db";
import { unidades } from "@/db/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import Link from "next/link";
import { A6_PALAVRAS_ARMADILHA } from "@/lib/curriculo/a6-palavras-armadilha";
import ExercicioClient from "../ExercicioClient";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ExercicioPage({ params }: Props) {
  const { slug } = await params;

  const [unidade] = await db
    .select()
    .from(unidades)
    .where(eq(unidades.slug, slug))
    .limit(1);

  if (!unidade) notFound();

  const isA6 = slug === "a-6-palavras-armadilha";
  const curriculo = isA6 ? A6_PALAVRAS_ARMADILHA : null;

  if (!curriculo) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12 text-center">
        <p className="text-stone-500">Esta unidade ainda não tem exercícios interativos.</p>
        <Link href="/" className="mt-4 inline-block text-sm underline underline-offset-4 text-stone-700">
          Voltar ao início
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12">
      {/* Cabeçalho */}
      <header className="mb-8">
        <nav className="mb-4 flex items-center gap-2 text-sm text-stone-500">
          <Link href="/" className="hover:text-stone-800 transition-colors">
            Início
          </Link>
          <span>/</span>
          <Link
            href={`/unidade/${slug}`}
            className="hover:text-stone-800 transition-colors"
          >
            {unidade.titulo}
          </Link>
          <span>/</span>
          <span className="text-stone-800">Exercícios</span>
        </nav>

        <div className="rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-1">
            Lembre-se
          </p>
          <p className="text-sm text-stone-800 leading-relaxed">
            Isso não é uma prova. O tutor vai te ajudar se você travar.
            O objetivo é entender, não acertar de primeira.
          </p>
        </div>
      </header>

      {/* Exercícios interativos */}
      <ExercicioClient
        armadilhas={curriculo.armadilhas ?? []}
        slug={slug}
      />
    </div>
  );
}
