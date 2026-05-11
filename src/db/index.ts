import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL não está definida. Veja .env.example.");
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // No Render free tier o Postgres aceita SSL; em local pode estar desativado
  ssl: process.env.DATABASE_URL.includes("render.com")
    ? { rejectUnauthorized: false }
    : false,
});

export const db = drizzle(pool, { schema });
export { schema };
