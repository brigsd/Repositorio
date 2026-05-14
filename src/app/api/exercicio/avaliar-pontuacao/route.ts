/**
 * POST /api/exercicio/avaliar-pontuacao
 *
 * Avalia a reconstrução de pontuação do aluno via IA (unidade A.4).
 * Salva tentativa no banco e retorna feedback.
 */

import { NextRequest } from "next/server";
import { db } from "@/db";
import { unidades, tentativas } from "@/db/schema";
import { eq } from "drizzle-orm";
import { obterSessao } from "@/lib/auth";
import { construirModeloAluno } from "@/lib/modelo-aluno";
import { avaliarRespostaPontuacao } from "@/lib/prompts";

interface BodyAvaliarPontuacao {
  exercicioSlug: string;
  textoSemPontuacao: string;
  textoPontuado: string;
  respostaAluno: string;
  contexto: string;
  sinalFoco: string;
  rubrica: string[];
  tiposErroValidos: string[];
  numTentativas: number;
  unidadeSlug: string;
}

export async function POST(request: NextRequest) {
  const sessao = await obterSessao();
  if (!sessao) {
    return Response.json({ erro: "Não autenticado" }, { status: 401 });
  }

  let body: BodyAvaliarPontuacao;
  try {
    body = await request.json();
  } catch {
    return Response.json({ erro: "Corpo inválido" }, { status: 400 });
  }

  const {
    exercicioSlug,
    textoSemPontuacao,
    textoPontuado,
    respostaAluno,
    contexto,
    sinalFoco,
    rubrica,
    tiposErroValidos,
    numTentativas,
    unidadeSlug,
  } = body;

  if (!exercicioSlug || !respostaAluno || !unidadeSlug) {
    return Response.json({ erro: "Campos obrigatórios ausentes" }, { status: 400 });
  }

  // Localiza a unidade no banco para ter o unidadeId
  const [unidade] = await db
    .select()
    .from(unidades)
    .where(eq(unidades.slug, unidadeSlug))
    .limit(1);

  if (!unidade) {
    return Response.json({ erro: "Unidade não encontrada" }, { status: 404 });
  }

  // Constrói o modelo do aluno para personalizar o feedback
  const modelo = await construirModeloAluno(
    sessao.alunoId,
    exercicioSlug,
    unidade.id
  );

  // Avalia com IA
  const resultado = await avaliarRespostaPontuacao({
    modelo,
    exercicio: {
      slug: exercicioSlug,
      textoSemPontuacao,
      textoPontuado,
      respostaAluno,
      contexto,
      sinalFoco,
      rubrica,
      tiposErroValidos,
      numTentativas,
    },
    opcoes: {
      alunoId: sessao.alunoId,
      proposito: "avaliacao_reconstrucao_pontuacao",
    },
  });

  // Salva tentativa no banco
  await db.insert(tentativas).values({
    alunoId: sessao.alunoId,
    unidadeId: unidade.id,
    exercicio: exercicioSlug,
    resposta: respostaAluno,
    gabarito: textoPontuado,
    acertou: resultado.acertou,
    tipoErro: resultado.tipoErro ?? null,
  });

  return Response.json(resultado);
}
