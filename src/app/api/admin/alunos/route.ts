import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { alunos } from "@/db/schema";
import { obterSessao, normalizarNome } from "@/lib/auth";

// GET — lista todos os alunos
export async function GET() {
  const sessao = await obterSessao();
  if (!sessao?.isAdmin) {
    return NextResponse.json({ erro: "Sem permissão." }, { status: 403 });
  }

  const lista = await db.select().from(alunos).orderBy(alunos.criadoEm);
  return NextResponse.json({ alunos: lista });
}

// POST — adiciona um novo aluno
export async function POST(req: NextRequest) {
  const sessao = await obterSessao();
  if (!sessao?.isAdmin) {
    return NextResponse.json({ erro: "Sem permissão." }, { status: 403 });
  }

  try {
    const body = await req.json();
    const { nome, email } = body;

    if (!nome || !email) {
      return NextResponse.json(
        { erro: "Nome e e-mail são obrigatórios." },
        { status: 400 }
      );
    }

    // Extrai primeiro nome e normaliza para UPPERCASE
    const primeiroNome = normalizarNome(nome.split(" ")[0]);

    const [novoAluno] = await db
      .insert(alunos)
      .values({
        nome: nome.trim(),
        primeiroNome,
        email: email.trim().toLowerCase(),
      })
      .returning();

    return NextResponse.json({ ok: true, aluno: novoAluno });
  } catch (error: unknown) {
    const mensagem =
      error instanceof Error && error.message.includes("unique")
        ? "Esse nome ou e-mail já está cadastrado."
        : "Erro ao cadastrar aluno.";
    return NextResponse.json({ erro: mensagem }, { status: 400 });
  }
}
