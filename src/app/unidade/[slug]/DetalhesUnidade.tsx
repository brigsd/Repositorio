"use client";

import { useState } from "react";

/**
 * DetalhesUnidade — Progressive Disclosure
 *
 * Mostra detalhes da unidade (armadilhas, exemplo prático) em seção
 * expansível. O aluno vê primeiro o propósito e o botão de começar.
 * Se quiser mais contexto antes de começar, expande esta seção.
 *
 * Baseado em:
 * - Progressive Disclosure (Nielsen Norman Group)
 * - Cognitive Load Theory — reduz ruído visual na entrada
 * - Andragogia (Knowles) — adulto escolhe quando quer mais detalhes
 */

interface ArmadilhaResumo {
  id: string;
  titulo: string;
}

interface Props {
  armadilhas: ArmadilhaResumo[];
  exemploPratico: string | null;
}

export function DetalhesUnidade({ armadilhas, exemploPratico }: Props) {
  const [aberto, setAberto] = useState(false);

  return (
    <div className="rounded-2xl border border-stone-200 bg-white overflow-hidden">
      {/* Botão de expandir/recolher */}
      <button
        onClick={() => setAberto(!aberto)}
        className="flex w-full items-center justify-between px-6 py-4 text-left transition hover:bg-stone-50"
        aria-expanded={aberto}
      >
        <div>
          <p className="text-sm font-semibold text-stone-900">
            O que você vai aprender
          </p>
          <p className="mt-0.5 text-xs text-stone-500">
            {armadilhas.length} tópicos nesta unidade
          </p>
        </div>
        <span
          className={`text-stone-400 transition-transform duration-200 ${
            aberto ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        >
          ▼
        </span>
      </button>

      {/* Conteúdo expansível */}
      {aberto && (
        <div className="border-t border-stone-100 px-6 py-5 space-y-5">
          {/* Lista de pares — chips sem explicação */}
          <ul className="flex flex-wrap gap-2">
            {armadilhas.map((a) => (
              <li key={a.id}>
                <span className="rounded-md bg-stone-100 px-2.5 py-1 font-mono text-xs font-semibold text-stone-700">
                  {a.titulo}
                </span>
              </li>
            ))}
          </ul>

          {/* Exemplo prático */}
          {exemploPratico && (
            <blockquote className="border-l-2 border-amber-300 pl-4 text-sm italic text-stone-600 leading-relaxed">
              {exemploPratico}
            </blockquote>
          )}

        </div>
      )}
    </div>
  );
}
