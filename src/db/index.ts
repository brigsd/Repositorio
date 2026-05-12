import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL não está definida. Veja .env.example.");
}

// Conexão usa SSL automaticamente para qualquer banco remoto.
// Detectamos por:
// - URL com sslmode=require (Neon, Supabase, etc.)
// - hostnames conhecidos de provedores cloud
// Conexões locais (localhost / 127.0.0.1) ficam sem SSL.
function precisaSsl(url: string): boolean {
  if (url.includes("sslmode=require")) return true;
  if (url.includes("sslmode=disable")) return false;
  return !url.includes("localhost") && !url.includes("127.0.0.1");
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: precisaSsl(process.env.DATABASE_URL)
    ? { rejectUnauthorized: false }
    : false,
});

export const db = drizzle(pool, { schema });
export { schema };
