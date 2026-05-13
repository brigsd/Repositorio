"use client";

import { useState } from "react";

function renderNegrito(texto: string) {
  return texto.split(/(\*\*[^*]+\*\*)/g).map((parte, i) => {
    if (parte.startsWith("**") && parte.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-stone-800">
          {parte.slice(2, -2)}
        </strong>
      );
    }
    return parte;
  });
}

interface Props {
  corpo: string;
  curiosidade?: string | null;
}

export function AncoraProposito({ corpo, curiosidade }: Props) {
  const [modalAberto, setModalAberto] = useState(false);

  return (
    <>
      <div className="relative rounded-2xl border border-amber-200 bg-amber-50 px-6 py-5">
        {/* Cabeçalho */}
        <div className="mb-3 flex items-start justify-between gap-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-700">
            Por que isso importa
          </p>
          {curiosidade && (
            <button
              onClick={() => setModalAberto(true)}
              aria-label="Ver curiosidade"
              title="Curiosidade"
              className="shrink-0 rounded-lg p-1 text-amber-400 transition hover:bg-amber-100 hover:text-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </button>
          )}
        </div>

        {/* Corpo — cada \n\n vira parágrafo separado */}
        <div className="space-y-3">
          {corpo.split("\n\n").map((paragrafo, i) => (
            <p key={i} className="text-sm leading-relaxed text-stone-800">
              {paragrafo}
            </p>
          ))}
        </div>
      </div>

      {/* Modal de curiosidade */}
      {modalAberto && curiosidade && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setModalAberto(false)}
        >
          <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
          <div
            className="relative w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Curiosidade"
          >
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">
                Você sabia?
              </p>
              <button
                onClick={() => setModalAberto(false)}
                aria-label="Fechar"
                className="rounded-lg p-1 text-stone-400 transition hover:bg-stone-100 hover:text-stone-600 focus:outline-none focus:ring-2 focus:ring-stone-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <p className="text-sm leading-relaxed text-stone-700">
              {renderNegrito(curiosidade)}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
