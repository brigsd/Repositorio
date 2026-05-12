import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

// ============================================================================
// Configuração
// ============================================================================

const SECRET = new TextEncoder().encode(
  process.env.AUTH_SECRET || "dev-secret-trocar-em-producao"
);
const COOKIE_NAME = "sessao";
const EXPIRACAO = "7d"; // sessão dura 7 dias

// ============================================================================
// Tipos
// ============================================================================

export interface DadosSessao {
  alunoId: string;
  nome: string;
  primeiroNome: string;
  isAdmin: boolean;
}

// ============================================================================
// Normalização — garante que o nome é sempre UPPERCASE para comparação
// ============================================================================

export function normalizarNome(nome: string): string {
  return nome.trim().toUpperCase();
}

// ============================================================================
// JWT — criar e verificar tokens
// ============================================================================

async function criarToken(dados: DadosSessao): Promise<string> {
  return new SignJWT(dados as unknown as Record<string, unknown>)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(EXPIRACAO)
    .sign(SECRET);
}

async function verificarToken(token: string): Promise<DadosSessao | null> {
  try {
    const { payload } = await jwtVerify(token, SECRET);
    return payload as unknown as DadosSessao;
  } catch {
    return null;
  }
}

// ============================================================================
// Sessão — gerencia cookie httpOnly
// ============================================================================

export async function criarSessao(dados: DadosSessao): Promise<void> {
  const token = await criarToken(dados);
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 dias em segundos
    path: "/",
  });
}

export async function obterSessao(): Promise<DadosSessao | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return null;
  return verificarToken(token);
}

export async function encerrarSessao(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}
