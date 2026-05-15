import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { alunos } from "@/db/schema";
import { eq } from "drizzle-orm";
import { obterSessao, normalizarNome } from "@/lib/auth";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const sessao = await obterSessao();
  if (!sessao?.isAdmin) {
    return NextResponse.json({ erro: "Sem permissão." }, { status: 403 });
  }

  const { id } = await params;
  const body = await req.json();
  const nome = typeof body.nome === "string" ? body.nome.trim() : "";
  const primeiroNome =
    typeof body.primeiroNome === "string"
      ? normalizarNome(body.primeiroNome)
      : "";

  if (!nome || !primeiroNome) {
    return NextResponse.json(
      { erro: "Nome e login não podem ficar em branco." },
      { status: 400 }
    );
  }

  try {
    const [atualizado] = await db
      .update(alunos)
      .set({ nome, primeiroNome })
      .where(eq(alunos.id, id))
      .returning();

    if (!atualizado) {
      return NextResponse.json(
        { erro: "Aluno não encontrado." },
        { status: 404 }
      );
    }

    return NextResponse.json({ ok: true, aluno: atualizado });
  } catch (error: unknown) {
    const mensagem =
      error instanceof Error && error.message.includes("unique")
        ? "Esse login já está em uso por outro aluno."
        : "Erro ao salvar. Tenta de novo.";
    return NextResponse.json({ erro: mensagem }, { status: 400 });
  }
}
