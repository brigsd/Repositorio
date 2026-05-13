/**
 * GET /api/admin/tokens
 *
 * Retorna totais acumulados de uso de tokens da plataforma.
 * Lê da tabela chamadas_ia que é populada a cada chamada à IA.
 * Restrito a admins.
 */

import { db } from "@/db";
import { chamadasIa } from "@/db/schema";
import { sql } from "drizzle-orm";
import { obterSessao } from "@/lib/auth";

export async function GET() {
  const sessao = await obterSessao();
  if (!sessao?.isAdmin) {
    return Response.json({ erro: "Não autorizado" }, { status: 403 });
  }

  const [totais] = await db
    .select({
      totalChamadas: sql<number>`COUNT(*)::int`,
      tokensInput:   sql<number>`COALESCE(SUM(tokens_input), 0)::int`,
      tokensOutput:  sql<number>`COALESCE(SUM(tokens_output), 0)::int`,
      totalTokens:   sql<number>`COALESCE(SUM(tokens_input + tokens_output), 0)::int`,
      custoUsd:      sql<number>`COALESCE(SUM(custo_usd::numeric), 0)::float`,
    })
    .from(chamadasIa);

  return Response.json({ totais });
}
