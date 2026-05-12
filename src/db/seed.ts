/**
 * Seed do catalogo de unidades.
 *
 * Insere as 45 unidades curadas (A.1-A.10, B.1-B.20, C.1-C.15) no banco.
 * Idempotente: pode rodar varias vezes; atualiza titulo/ordem se ja existir.
 *
 * Uso: npm run db:seed
 *
 * A fonte da verdade pedagogica dessas unidades fica em:
 * - docs/03-nivel-a.md
 * - docs/04-nivel-b.md
 * - docs/05-nivel-c.md
 */
import { sql } from "drizzle-orm";
import { db } from "./index";
import { unidades, alunos } from "./schema";

type NovaUnidade = {
  nivel: "A" | "B" | "C";
  numero: number;
  slug: string;
  titulo: string;
  ordem: number;
};

// ordem = nivel_idx * 100 + numero, com gap de 100 entre niveis pra
// reordenacao futura sem conflito
const UNIDADES: NovaUnidade[] = [
  // -------------------------------------------------------------------------
  // Nivel A — Da escrita informal a escrita formal (10 unidades)
  // -------------------------------------------------------------------------
  { nivel: "A", numero: 1, slug: "a-1-trailer", titulo: "Trailer do nivel A", ordem: 101 },
  { nivel: "A", numero: 2, slug: "a-2-registros", titulo: "Registros: o mesmo recado em mundos diferentes", ordem: 102 },
  { nivel: "A", numero: 3, slug: "a-3-virgula", titulo: "A virgula que muda o sentido", ordem: 103 },
  { nivel: "A", numero: 4, slug: "a-4-outros-sinais", titulo: "Os outros sinais de pontuacao", ordem: 104 },
  { nivel: "A", numero: 5, slug: "a-5-acentos", titulo: "Acentos que mudam tudo", ordem: 105 },
  { nivel: "A", numero: 6, slug: "a-6-palavras-armadilha", titulo: "As palavras que todo mundo erra", ordem: 106 },
  { nivel: "A", numero: 7, slug: "a-7-concordancia-verbal", titulo: "Concordancia verbal essencial", ordem: 107 },
  { nivel: "A", numero: 8, slug: "a-8-concordancia-nominal", titulo: "Concordancia nominal essencial", ordem: 108 },
  { nivel: "A", numero: 9, slug: "a-9-regencia", titulo: "Regencia: tropecos classicos", ordem: 109 },
  { nivel: "A", numero: 10, slug: "a-10-projeto", titulo: "Projeto integrador do nivel A", ordem: 110 },

  // -------------------------------------------------------------------------
  // Nivel B — Interpretacao e producao de textos (20 unidades em 8 blocos)
  // -------------------------------------------------------------------------
  // Bloco 1: Anatomia dos textos
  { nivel: "B", numero: 1, slug: "b-1-tipologias", titulo: "Tipologias textuais", ordem: 201 },
  { nivel: "B", numero: 2, slug: "b-2-ideia-principal", titulo: "Ideia principal e secundarias", ordem: 202 },
  { nivel: "B", numero: 3, slug: "b-3-inferencia", titulo: "Inferencia: ler o que nao esta escrito", ordem: 203 },
  { nivel: "B", numero: 4, slug: "b-4-ironia", titulo: "Ironia, humor e ambiguidade", ordem: 204 },

  // Bloco 2: Generos para receber informacao
  { nivel: "B", numero: 5, slug: "b-5-noticia", titulo: "Noticia e reportagem", ordem: 205 },
  { nivel: "B", numero: 6, slug: "b-6-instrucional-leitura", titulo: "Texto instrucional (leitura)", ordem: 206 },
  { nivel: "B", numero: 7, slug: "b-7-documentos-formais", titulo: "Documentos formais: contratos e termos", ordem: 207 },

  // Bloco 3: Generos opinativos
  { nivel: "B", numero: 8, slug: "b-8-artigo-opiniao", titulo: "Artigo de opiniao e editorial", ordem: 208 },
  { nivel: "B", numero: 9, slug: "b-9-propaganda", titulo: "Propaganda e recursos persuasivos", ordem: 209 },

  // Bloco 4: Primeira literatura
  { nivel: "B", numero: 10, slug: "b-10-cronica-conto", titulo: "Cronica e conto curto", ordem: 210 },

  // Bloco 5: Ferramentas da escrita
  { nivel: "B", numero: 11, slug: "b-11-coesao", titulo: "Coesao: o que liga as partes", ordem: 211 },
  { nivel: "B", numero: 12, slug: "b-12-coerencia", titulo: "Coerencia: o sentido global", ordem: 212 },

  // Bloco 6: Transformacao da leitura a escrita
  { nivel: "B", numero: 13, slug: "b-13-resumo", titulo: "Resumo: sintetizar sem perder o essencial", ordem: 213 },
  { nivel: "B", numero: 14, slug: "b-14-parafrase", titulo: "Parafrase: reescrever com suas palavras", ordem: 214 },

  // Bloco 7: Producao em generos do cotidiano
  { nivel: "B", numero: 15, slug: "b-15-email-formal", titulo: "E-mail e carta formal", ordem: 215 },
  { nivel: "B", numero: 16, slug: "b-16-curriculo", titulo: "Curriculo e carta de apresentacao", ordem: 216 },
  { nivel: "B", numero: 17, slug: "b-17-relato-pessoal", titulo: "Relato pessoal", ordem: 217 },
  { nivel: "B", numero: 18, slug: "b-18-instrucional-escrita", titulo: "Escrever texto instrucional", ordem: 218 },
  { nivel: "B", numero: 19, slug: "b-19-argumentativo-curto", titulo: "Argumentativo curto", ordem: 219 },

  // Bloco 8: Integrador
  { nivel: "B", numero: 20, slug: "b-20-projeto", titulo: "Projeto integrador do nivel B", ordem: 220 },

  // -------------------------------------------------------------------------
  // Nivel C — Leitura critica e producao autonoma (15 unidades em 5 blocos)
  // -------------------------------------------------------------------------
  // Bloco 1: Analise de discurso e leitura critica
  { nivel: "C", numero: 1, slug: "c-1-intencionalidade", titulo: "Intencionalidade e ponto de vista", ordem: 301 },
  { nivel: "C", numero: 2, slug: "c-2-falacias", titulo: "Falacias comuns", ordem: 302 },
  { nivel: "C", numero: 3, slug: "c-3-fake-news", titulo: "Fake news e checagem de fontes", ordem: 303 },
  { nivel: "C", numero: 4, slug: "c-4-comparacao-critica", titulo: "Comparacao critica de textos", ordem: 304 },

  // Bloco 2: Variacao linguistica
  { nivel: "C", numero: 5, slug: "c-5-lingua-viva", titulo: "A lingua viva: variacao regional, social, geracional", ordem: 305 },
  { nivel: "C", numero: 6, slug: "c-6-preconceito-linguistico", titulo: "Preconceito linguistico", ordem: 306 },

  // Bloco 3: Literatura ampliada
  { nivel: "C", numero: 7, slug: "c-7-poesia", titulo: "Poesia: ler com sensibilidade", ordem: 307 },
  { nivel: "C", numero: 8, slug: "c-8-narrativa", titulo: "Narrativa literaria: contos e romances", ordem: 308 },
  { nivel: "C", numero: 9, slug: "c-9-literatura-contexto", titulo: "Literatura no contexto historico", ordem: 309 },

  // Bloco 4: Redacao dissertativo-argumentativa
  { nivel: "C", numero: 10, slug: "c-10-anatomia-redacao", titulo: "Anatomia da redacao ENCCEJA", ordem: 310 },
  { nivel: "C", numero: 11, slug: "c-11-introducao", titulo: "Introducao com tese", ordem: 311 },
  { nivel: "C", numero: 12, slug: "c-12-argumentacao", titulo: "Argumentacao com repertorio", ordem: 312 },
  { nivel: "C", numero: 13, slug: "c-13-conclusao", titulo: "Conclusao com proposta de intervencao", ordem: 313 },
  { nivel: "C", numero: 14, slug: "c-14-redacao-completa", titulo: "Redacao completa", ordem: 314 },

  // Bloco 5: Integrador
  { nivel: "C", numero: 15, slug: "c-15-simulado", titulo: "Simulado ENCCEJA", ordem: 315 },
];

async function main() {
  console.log(`Inserindo/atualizando ${UNIDADES.length} unidades...`);

  // Upsert: insere o que nao existe, atualiza o que existe (com base no slug)
  await db
    .insert(unidades)
    .values(UNIDADES)
    .onConflictDoUpdate({
      target: unidades.slug,
      set: {
        nivel: sql`EXCLUDED.nivel`,
        numero: sql`EXCLUDED.numero`,
        titulo: sql`EXCLUDED.titulo`,
        ordem: sql`EXCLUDED.ordem`,
      },
    });

  const contagem = await db.select().from(unidades);
  console.log(`Pronto. Total de unidades no banco: ${contagem.length}`);
  console.log(`  Nivel A: ${contagem.filter((u) => u.nivel === "A").length}`);
  console.log(`  Nivel B: ${contagem.filter((u) => u.nivel === "B").length}`);
  console.log(`  Nivel C: ${contagem.filter((u) => u.nivel === "C").length}`);

  // -------------------------------------------------------------------
  // Seed do curador (admin)
  // -------------------------------------------------------------------
  console.log("\nCriando curador (admin)...");
  await db
    .insert(alunos)
    .values({
      nome: "Tiago Marcondes",
      primeiroNome: "TIAGO",
      email: "tiagomarcondechadeck@gmail.com",
      isAdmin: true,
      modo: "teste",
    })
    .onConflictDoUpdate({
      target: alunos.email,
      set: {
        nome: sql`EXCLUDED.nome`,
        primeiroNome: sql`EXCLUDED.primeiro_nome`,
        isAdmin: sql`EXCLUDED.is_admin`,
      },
    });
  console.log("Curador criado: TIAGO (admin)");
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Erro no seed:", err);
    process.exit(1);
  });
