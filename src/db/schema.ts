import {
  boolean,
  index,
  integer,
  jsonb,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

// ============================================================================
// Enums
// ============================================================================

export const modoEnum = pgEnum("modo", ["teste", "prod"]);
export const nivelEnum = pgEnum("nivel", ["A", "B", "C"]);
export const statusProgressoEnum = pgEnum("status_progresso", [
  "nao_iniciado",
  "em_andamento",
  "concluido",
]);
export const severidadeFlagEnum = pgEnum("severidade_flag", [
  "amarelo",
  "laranja",
  "vermelho",
]);
export const confiancaEnum = pgEnum("confianca", ["alta", "media", "baixa"]);

// ============================================================================
// Alunos — quem usa a plataforma
// ============================================================================

export const alunos = pgTable("alunos", {
  id: uuid("id").defaultRandom().primaryKey(),
  nome: text("nome").notNull(),
  primeiroNome: text("primeiro_nome").notNull().unique(), // UPPERCASE, usado no login
  email: text("email").notNull().unique(),
  pinHash: text("pin_hash"), // mantido por compatibilidade, sem uso por enquanto
  isAdmin: boolean("is_admin").notNull().default(false),
  modo: modoEnum("modo").notNull().default("prod"),
  criadoEm: timestamp("criado_em", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

// ============================================================================
// Convites — links de convite gerados pelo curador (auth via WhatsApp + PIN)
// ============================================================================

export const convites = pgTable("convites", {
  id: uuid("id").defaultRandom().primaryKey(),
  alunoId: uuid("aluno_id")
    .notNull()
    .references(() => alunos.id, { onDelete: "cascade" }),
  token: text("token").notNull().unique(),
  expiraEm: timestamp("expira_em", { withTimezone: true }).notNull(),
  usadoEm: timestamp("usado_em", { withTimezone: true }),
  criadoEm: timestamp("criado_em", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

// ============================================================================
// Sessões — cada login até fim de uso
// ============================================================================

export const sessoes = pgTable("sessoes", {
  id: uuid("id").defaultRandom().primaryKey(),
  alunoId: uuid("aluno_id")
    .notNull()
    .references(() => alunos.id, { onDelete: "cascade" }),
  iniciadaEm: timestamp("iniciada_em", { withTimezone: true })
    .defaultNow()
    .notNull(),
  encerradaEm: timestamp("encerrada_em", { withTimezone: true }),
  nivelAtual: nivelEnum("nivel_atual"),
  unidadeAtual: integer("unidade_atual"),
});

// ============================================================================
// Unidades — catálogo curado das unidades de A1 até C15
// ============================================================================

export const unidades = pgTable(
  "unidades",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    nivel: nivelEnum("nivel").notNull(),
    numero: integer("numero").notNull(),
    slug: text("slug").notNull().unique(),
    titulo: text("titulo").notNull(),
    ordem: integer("ordem").notNull(),
  },
  (t) => [index("unidades_nivel_numero_idx").on(t.nivel, t.numero)],
);

// ============================================================================
// Progresso — status do aluno em cada unidade
// ============================================================================

export const progresso = pgTable(
  "progresso",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    alunoId: uuid("aluno_id")
      .notNull()
      .references(() => alunos.id, { onDelete: "cascade" }),
    unidadeId: uuid("unidade_id")
      .notNull()
      .references(() => unidades.id, { onDelete: "cascade" }),
    status: statusProgressoEnum("status").notNull().default("nao_iniciado"),
    tentativas: integer("tentativas").notNull().default(0),
    acertos: integer("acertos").notNull().default(0),
    primeiraTentativaEm: timestamp("primeira_tentativa_em", {
      withTimezone: true,
    }),
    concluidoEm: timestamp("concluido_em", { withTimezone: true }),
  },
  (t) => [index("progresso_aluno_idx").on(t.alunoId)],
);

// ============================================================================
// Tentativas — cada resposta a exercício
// ============================================================================

export const tentativas = pgTable(
  "tentativas",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    alunoId: uuid("aluno_id")
      .notNull()
      .references(() => alunos.id, { onDelete: "cascade" }),
    unidadeId: uuid("unidade_id")
      .notNull()
      .references(() => unidades.id, { onDelete: "cascade" }),
    sessaoId: uuid("sessao_id").references(() => sessoes.id, {
      onDelete: "set null",
    }),
    // slug do exercício específico dentro da unidade (curador define)
    exercicio: text("exercicio").notNull(),
    resposta: text("resposta"),
    gabarito: text("gabarito"),
    acertou: boolean("acertou").notNull(),
    // tipo de erro escolhido de uma lista FECHADA por unidade — reduz alucinação
    tipoErro: text("tipo_erro"),
    tempoSegundos: integer("tempo_segundos"),
    criadoEm: timestamp("criado_em", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (t) => [
    index("tentativas_aluno_unidade_idx").on(t.alunoId, t.unidadeId),
    index("tentativas_tipo_erro_idx").on(t.tipoErro),
  ],
);

// ============================================================================
// Eventos — event log para tudo que não cabe nas tabelas estruturadas
// ============================================================================

export const eventos = pgTable(
  "eventos",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    alunoId: uuid("aluno_id").references(() => alunos.id, {
      onDelete: "cascade",
    }),
    sessaoId: uuid("sessao_id").references(() => sessoes.id, {
      onDelete: "set null",
    }),
    tipo: text("tipo").notNull(),
    payload: jsonb("payload").notNull().default({}),
    criadoEm: timestamp("criado_em", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (t) => [
    index("eventos_tipo_idx").on(t.tipo),
    index("eventos_aluno_tipo_idx").on(t.alunoId, t.tipo),
  ],
);

// ============================================================================
// Diagnósticos — resultado da entrada do aluno na trilha
// ============================================================================

export const diagnosticos = pgTable("diagnosticos", {
  id: uuid("id").defaultRandom().primaryKey(),
  alunoId: uuid("aluno_id")
    .notNull()
    .references(() => alunos.id, { onDelete: "cascade" }),
  respostasBrutas: jsonb("respostas_brutas").notNull(),
  classificacao: jsonb("classificacao").notNull(),
  nivelRecomendado: nivelEnum("nivel_recomendado").notNull(),
  unidadeEntrada: integer("unidade_entrada").notNull(),
  confiancaClassificacao: confiancaEnum("confianca_classificacao").notNull(),
  overrideAluno: boolean("override_aluno").notNull().default(false),
  criadoEm: timestamp("criado_em", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

// ============================================================================
// Flags — anotações da cobaia (somente modo teste)
// ============================================================================

export const flags = pgTable("flags", {
  id: uuid("id").defaultRandom().primaryKey(),
  alunoId: uuid("aluno_id")
    .notNull()
    .references(() => alunos.id, { onDelete: "cascade" }),
  sessaoId: uuid("sessao_id").references(() => sessoes.id, {
    onDelete: "set null",
  }),
  severidade: severidadeFlagEnum("severidade").notNull(),
  // o que estava na tela, qual exercício, qual chamada à IA
  contexto: jsonb("contexto").notNull().default({}),
  notas: text("notas"),
  criadoEm: timestamp("criado_em", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

// ============================================================================
// Diário de sessão — reflexão da cobaia ao fim de cada sessão (modo teste)
// ============================================================================

export const diarioSessao = pgTable("diario_sessao", {
  id: uuid("id").defaultRandom().primaryKey(),
  sessaoId: uuid("sessao_id")
    .notNull()
    .references(() => sessoes.id, { onDelete: "cascade" }),
  alunoId: uuid("aluno_id")
    .notNull()
    .references(() => alunos.id, { onDelete: "cascade" }),
  funcionouBem: text("funcionou_bem"),
  travou: text("travou"),
  aprendeu: text("aprendeu"),
  criadoEm: timestamp("criado_em", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

// ============================================================================
// Chamadas IA — auditoria completa de cada chamada (modo teste)
// ============================================================================

export const chamadasIa = pgTable("chamadas_ia", {
  id: uuid("id").defaultRandom().primaryKey(),
  alunoId: uuid("aluno_id").references(() => alunos.id, {
    onDelete: "set null",
  }),
  sessaoId: uuid("sessao_id").references(() => sessoes.id, {
    onDelete: "set null",
  }),
  // 'correcao_redacao', 'tutor_duvida', 'classificacao_diagnostico', etc.
  proposito: text("proposito").notNull(),
  modelo: text("modelo").notNull(),
  promptCompleto: jsonb("prompt_completo").notNull(),
  resposta: text("resposta").notNull(),
  tokensInput: integer("tokens_input"),
  tokensOutput: integer("tokens_output"),
  latenciaMs: integer("latencia_ms"),
  // string pra evitar problemas de precisão de float
  custoUsd: text("custo_usd"),
  // auto-declaração de confiança da IA quando pedida ('seguro' | 'duvida')
  confiancaIa: text("confianca_ia"),
  criadoEm: timestamp("criado_em", { withTimezone: true })
    .defaultNow()
    .notNull(),
});
