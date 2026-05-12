/**
 * spaced-repetition.ts
 *
 * Motor de repetição espaçada baseado no algoritmo SM-2 simplificado.
 *
 * Referência: Ebbinghaus (curva do esquecimento) + Bjork (desirable difficulties).
 * A pesquisa mostra que revisar no dia certo aumenta retenção em 2-4x
 * comparado com revisão no dia seguinte.
 *
 * Intervalos usados:
 *   - Acertou 1x → revisão em 3 dias
 *   - Acertou 2x → revisão em 7 dias
 *   - Acertou 3x → revisão em 21 dias
 *   - Acertou 4x+ → revisão em 60 dias (consolidado)
 *   - Errou → volta para 3 dias (reinicia ciclo)
 */

import { and, eq, lte, desc } from "drizzle-orm";
import { db } from "@/db";
import { progresso, tentativas, eventos } from "@/db/schema";

// ============================================================================
// Tipos
// ============================================================================

export interface ItemRevisao {
  unidadeId: string;
  unidadeTitulo: string;
  unidadeSlug: string;
  diasAtraso: number; // quantos dias passou da data ideal de revisão
  prioridade: "urgente" | "hoje" | "proxima"; // urgente = muito atrasado
}

export interface AgendaRevisao {
  hojeOuAtrasado: ItemRevisao[];
  proximosDias: ItemRevisao[];
  totalPendente: number;
}

// ============================================================================
// Intervalos de revisão (baseado em pesquisa de espaçamento)
// ============================================================================

const INTERVALOS_DIAS = [3, 7, 21, 60] as const;

function calcularProximaRevisao(acertosConsecutivos: number): number {
  const idx = Math.min(acertosConsecutivos, INTERVALOS_DIAS.length - 1);
  return INTERVALOS_DIAS[idx] ?? 60;
}

// ============================================================================
// Registra resultado de um exercício e agenda próxima revisão
// ============================================================================

export async function registrarResultadoEAgendar(params: {
  alunoId: string;
  unidadeId: string;
  exercicio: string;
  acertou: boolean;
  resposta?: string;
  gabarito?: string;
  tipoErro?: string;
  tempoSegundos?: number;
  sessaoId?: string;
}): Promise<{ proximaRevisaoEm: Date }> {
  const {
    alunoId,
    unidadeId,
    exercicio,
    acertou,
    resposta,
    gabarito,
    tipoErro,
    tempoSegundos,
    sessaoId,
  } = params;

  // 1. Registra a tentativa
  await db.insert(tentativas).values({
    alunoId,
    unidadeId,
    exercicio,
    acertou,
    resposta: resposta ?? null,
    gabarito: gabarito ?? null,
    tipoErro: tipoErro ?? null,
    tempoSegundos: tempoSegundos ?? null,
    sessaoId: sessaoId ?? null,
  });

  // 2. Calcula acertos consecutivos para determinar intervalo
  const historicoRecente = await db
    .select({ acertou: tentativas.acertou })
    .from(tentativas)
    .where(
      and(
        eq(tentativas.alunoId, alunoId),
        eq(tentativas.unidadeId, unidadeId)
      )
    )
    .orderBy(desc(tentativas.criadoEm))
    .limit(10);

  let acertosConsecutivos = 0;
  for (const t of historicoRecente) {
    if (t.acertou) acertosConsecutivos++;
    else break; // Para no primeiro erro
  }

  // 3. Calcula próxima revisão
  const intervaloDias = acertou
    ? calcularProximaRevisao(acertosConsecutivos)
    : 3; // Errou: revisita em 3 dias

  const proximaRevisaoEm = new Date();
  proximaRevisaoEm.setDate(proximaRevisaoEm.getDate() + intervaloDias);

  // 4. Atualiza progresso com a data de próxima revisão (via eventos)
  await db.insert(eventos).values({
    alunoId,
    sessaoId: sessaoId ?? null,
    tipo: "revisao_agendada",
    payload: {
      unidadeId,
      exercicio,
      proximaRevisaoEm: proximaRevisaoEm.toISOString(),
      intervaloDias,
      acertosConsecutivos,
    },
  });

  return { proximaRevisaoEm };
}

// ============================================================================
// Busca agenda de revisão do aluno (o que está pendente hoje)
// ============================================================================

export async function buscarAgendaRevisao(
  alunoId: string
): Promise<AgendaRevisao> {
  const agora = new Date();

  // Busca todos os eventos de revisão agendada que já venceram
  const revisoesPendentes = await db
    .select()
    .from(eventos)
    .where(
      and(
        eq(eventos.alunoId, alunoId),
        eq(eventos.tipo, "revisao_agendada")
      )
    )
    .orderBy(desc(eventos.criadoEm));

  // Agrupa por unidade, pega só o mais recente por unidade
  const maisRecentePorUnidade = new Map<string, typeof revisoesPendentes[0]>();
  for (const evento of revisoesPendentes) {
    const payload = evento.payload as Record<string, unknown>;
    const unidadeId = payload.unidadeId as string;
    if (!maisRecentePorUnidade.has(unidadeId)) {
      maisRecentePorUnidade.set(unidadeId, evento);
    }
  }

  const hojeOuAtrasado: ItemRevisao[] = [];
  const proximosDias: ItemRevisao[] = [];

  for (const [unidadeId, evento] of maisRecentePorUnidade) {
    const payload = evento.payload as Record<string, unknown>;
    const proximaRevisaoEm = new Date(payload.proximaRevisaoEm as string);
    const diasAtraso = Math.floor(
      (agora.getTime() - proximaRevisaoEm.getTime()) / (1000 * 60 * 60 * 24)
    );

    const item: ItemRevisao = {
      unidadeId,
      unidadeTitulo: (payload.unidadeTitulo as string) ?? "Unidade",
      unidadeSlug: (payload.unidadeSlug as string) ?? "",
      diasAtraso,
      prioridade:
        diasAtraso > 7 ? "urgente" : diasAtraso >= 0 ? "hoje" : "proxima",
    };

    if (diasAtraso >= 0) {
      hojeOuAtrasado.push(item);
    } else if (diasAtraso > -7) {
      // Próximos 7 dias
      proximosDias.push(item);
    }
  }

  // Ordena por atraso (mais atrasados primeiro)
  hojeOuAtrasado.sort((a, b) => b.diasAtraso - a.diasAtraso);

  return {
    hojeOuAtrasado,
    proximosDias,
    totalPendente: hojeOuAtrasado.length,
  };
}

// ============================================================================
// Verifica se o aluno deve ver aquecimento de revisão ao iniciar sessão
// ============================================================================

export async function precisaDeAquecimento(
  alunoId: string
): Promise<{ precisa: boolean; itens: ItemRevisao[] }> {
  const agenda = await buscarAgendaRevisao(alunoId);

  return {
    precisa: agenda.hojeOuAtrasado.length > 0,
    itens: agenda.hojeOuAtrasado.slice(0, 2), // Máximo 2 revisões por sessão
  };
}
