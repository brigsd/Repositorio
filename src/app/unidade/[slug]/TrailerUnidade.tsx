import type { Cena } from "@/lib/curriculo/tipos";
import Link from "next/link";

const COR_CONTEXTO: Record<string, string> = {
  "Currículo":       "bg-blue-100 text-blue-700",
  "E-mail pro chefe": "bg-violet-100 text-violet-700",
  "Contrato":        "bg-amber-100 text-amber-700",
};

interface Props {
  intro: string;
  cenas: Cena[];
  mensagemFinal: string;
  proximaUnidadeSlug: string;
}

export function TrailerUnidade({ intro, cenas, mensagemFinal, proximaUnidadeSlug }: Props) {
  return (
    <div className="space-y-8">
      {/* Intro */}
      <div className="space-y-2">
        {intro.split("\n\n").map((p, i) => (
          <p key={i} className="text-sm leading-relaxed text-stone-700">
            {p}
          </p>
        ))}
      </div>

      {/* Cenas */}
      <div className="space-y-4">
        {cenas.map((cena, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl border border-stone-200 bg-white"
          >
            {/* Cabeçalho da cena */}
            <div className="flex items-center gap-3 border-b border-stone-100 px-5 py-3">
              <span
                className={[
                  "rounded-full px-2.5 py-0.5 text-xs font-semibold",
                  COR_CONTEXTO[cena.contexto] ?? "bg-stone-100 text-stone-600",
                ].join(" ")}
              >
                {cena.contexto}
              </span>
            </div>

            {/* Corpo da cena */}
            <div className="px-5 py-4 space-y-3">
              <p className="text-sm leading-relaxed text-stone-800">
                {cena.historia}
              </p>
              {/* Consequência — destaque sutil */}
              <div className="flex gap-3 rounded-xl bg-rose-50 px-4 py-3">
                <span className="mt-0.5 shrink-0 text-rose-400" aria-hidden="true">
                  ↳
                </span>
                <p className="text-sm leading-relaxed text-rose-900">
                  {cena.consequencia}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mensagem final */}
      <div className="rounded-2xl border border-amber-200 bg-amber-50 px-6 py-5 text-center">
        <p className="text-base font-semibold leading-relaxed text-stone-900">
          {mensagemFinal}
        </p>
      </div>

      {/* CTA */}
      <Link
        href={`/unidade/${proximaUnidadeSlug}`}
        className="flex items-center justify-center gap-2 rounded-2xl bg-stone-900 px-6 py-4 text-base font-semibold text-white transition hover:bg-stone-800"
      >
        Começar o Nível A
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
