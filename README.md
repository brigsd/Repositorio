# Programa de Educação para Adultos

Plataforma de ensino para adultos que não concluíram o ensino médio, com foco em letramento formal e crítico. Projeto pessoal, escala pequena (até 5 alunos).

A documentação completa do projeto fica em [`docs/`](./docs/README.md).

---

## Stack

- **Next.js 15** (App Router) + TypeScript
- **TailwindCSS** para estilo
- **Postgres** local (dev) → Render/Neon (produção)
- **Drizzle ORM** para banco
- **Anthropic SDK** para IA

Detalhes técnicos em [`docs/10-stack.md`](./docs/10-stack.md).

---

## Setup local (caminho primário de desenvolvimento)

### 1. Pré-requisitos

- **Node.js 20+** — instalar via [nvm](https://github.com/nvm-sh/nvm) ou pacote do SO
- **Git**
- **Postgres 16** — duas opções abaixo
- Editor de código (VS Code recomendado)

### 2. Clone e instale dependências

```bash
git clone https://github.com/brigsd/repositorio.git
cd repositorio
git checkout claude/adult-education-program-ppjiC
npm install
```

### 3. Suba o Postgres local

#### Opção A — Docker (recomendado se você já usa Docker)

```bash
docker compose up -d
```

Pronto. Banco rodando em `localhost:5432` com usuário `programa_dev`, senha `dev`, banco `programa_educacao`.

Para parar: `docker compose down`. Para resetar dados: `docker compose down -v` (cuidado, apaga tudo).

#### Opção B — Postgres nativo no sistema

**Ubuntu/Debian:**
```bash
sudo apt install postgresql-16
sudo service postgresql start
sudo -u postgres psql -c "CREATE USER programa_dev WITH PASSWORD 'dev' SUPERUSER;"
sudo -u postgres psql -c "CREATE DATABASE programa_educacao OWNER programa_dev;"
```

**Mac (Homebrew):**
```bash
brew install postgresql@16
brew services start postgresql@16
createuser -s programa_dev
createdb -O programa_dev programa_educacao
# Defina a senha:
psql -d programa_educacao -c "ALTER USER programa_dev WITH PASSWORD 'dev';"
```

**Windows:** instale o [installer oficial](https://www.postgresql.org/download/windows/) e use o pgAdmin pra criar o usuário e banco com os mesmos nomes.

### 4. Configure as variáveis de ambiente

```bash
cp .env.example .env
```

Edite `.env` e preencha pelo menos:
- `ANTHROPIC_API_KEY` — gere em https://console.anthropic.com/settings/keys

A `DATABASE_URL` já vem padrão pra Postgres local. `AUTH_SECRET` pode ficar como exemplo em dev.

### 5. Aplique o esquema no banco

```bash
npm run db:push
```

Isso cria as 10 tabelas no banco vazio. Pode rodar quantas vezes quiser — em dev, o `db:push` sincroniza schema sem migrações intermediárias.

### 6. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

Acesse http://localhost:3000. Mudanças no código recarregam automaticamente.

### 7. (Opcional) Drizzle Studio para inspecionar o banco

```bash
npm run db:studio
```

Abre interface web em http://localhost:4983 — útil pra ver/editar dados manualmente.

---

## Comandos úteis

| Comando | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento (hot reload) |
| `npm run build` | Build de produção |
| `npm start` | Roda o build de produção |
| `npm run lint` | Checagem de lint |
| `npm run typecheck` | Checagem de tipos TS sem build |
| `npm run db:push` | Sincroniza schema no banco (dev) |
| `npm run db:generate` | Gera migração a partir do schema |
| `npm run db:migrate` | Aplica migrações geradas (produção) |
| `npm run db:studio` | Drizzle Studio (UI do banco) |

---

## Deploy no Render (produção, quando MVP estiver pronto)

O `render.yaml` já está configurado. Quando for a hora:

1. Acesse [render.com](https://render.com) com seu GitHub
2. **New → Blueprint** → escolhe esse repositório
3. Render cria automaticamente Web Service + Postgres
4. Configure as variáveis sensíveis (`ANTHROPIC_API_KEY`, `APP_URL`)
5. Após o primeiro deploy, abra Shell e rode `npm run db:push`

⚠️ **Postgres free tier do Render expira em 90 dias.** Quando se aproximar, migrar pra **Neon** ou **Supabase** (Postgres free indefinido) — basta trocar `DATABASE_URL`.

⚠️ **Web Service free tier dorme após 15 min idle.** Primeiro acesso depois disso leva ~30s pra acordar.

---

## Estrutura

```
.
├── docs/                    # Documentação do projeto (markdown)
├── src/
│   ├── app/                 # Rotas Next.js (App Router)
│   ├── db/                  # Schema e cliente Drizzle
│   └── lib/                 # Utilitários (IA, etc.)
├── docker-compose.yml       # Postgres local (opcional)
├── drizzle.config.ts
├── next.config.ts
├── package.json
├── render.yaml              # Infraestrutura Render
└── tailwind.config.ts
```

---

## Branch de desenvolvimento

Trabalho atual: `claude/adult-education-program-ppjiC`. Commits acontecem nessa branch; quando uma feature estiver estável, considerar merge pra `main`.
