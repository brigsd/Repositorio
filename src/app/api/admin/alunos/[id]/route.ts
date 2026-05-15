import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { alunos } from "@/db/schema";
import { eq } from "drizzle-orm";
import { obterSessao } from "@/lib/auth";

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

  if (!nome) {
    return NextResponse.json(
      { erro: "Nome não pode ficar em branco." },
      { status: 400 }
    );
  }

  const [atualizado] = await db
    .update(alunos)
    .set({ nome })
    .where(eq(alunos.id, id))
    .returning();

  if (!atualizado) {
    return NextResponse.json(
      { erro: "Aluno não encontrado." },
      { status: 404 }
    );
  }

  return NextResponse.json({ ok: true, aluno: atualizado });
}
