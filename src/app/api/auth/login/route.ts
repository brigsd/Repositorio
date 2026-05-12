import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { alunos } from "@/db/schema";
import { criarSessao, normalizarNome } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nome } = body;

    if (!nome || typeof nome !== "string" || nome.trim().length === 0) {
      return NextResponse.json(
        { ok: false, erro: "Digite seu nome para entrar." },
        { status: 400 }
      );
    }

    const primeiroNome = normalizarNome(nome);

    // Busca aluno pelo primeiro nome (UPPERCASE)
    const [aluno] = await db
      .select()
      .from(alunos)
      .where(eq(alunos.primeiroNome, primeiroNome))
      .limit(1);

    if (!aluno) {
      return NextResponse.json(
        {
          ok: false,
          erro: "Nome não encontrado. Se você é novo, fale com o Tiago.",
        },
        { status: 404 }
      );
    }

    // Cria sessão JWT
    await criarSessao({
      alunoId: aluno.id,
      nome: aluno.nome,
      primeiroNome: aluno.primeiroNome,
      isAdmin: aluno.isAdmin,
    });

    return NextResponse.json({ ok: true, nome: aluno.nome });
  } catch (error) {
    console.error("Erro no login:", error);
    return NextResponse.json(
      { ok: false, erro: "Algo deu errado. Tenta de novo." },
      { status: 500 }
    );
  }
}
