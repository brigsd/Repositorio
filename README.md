# Programa de Educação para Adultos

Plataforma de ensino para adultos que não concluíram o ensino médio, com foco em letramento formal e crítico. Projeto pessoal, escala pequena (até 5 alunos).

A documentação completa do projeto fica em [`docs/`](./docs/README.md).

---

## Stack

- **Next.js 15** (App Router) + TypeScript
- **TailwindCSS** para estilo
- **Postgres** (gerenciado pelo Render)
- **Drizzle ORM** para banco
- **Anthropic SDK** para IA
- **Render** para hospedagem (web + banco)

Detalhes técnicos em [`docs/10-stack.md`](./docs/10-stack.md).

---

## Setup local (opcional)

Não é obrigatório se você for desenvolver direto no Render via push-to-deploy. Mas pra iterar rápido, vale a pena.

### 1. Pré-requisitos

- **Node.js 20+** (recomendado: instalar via [nvm](https://github.com/nvm-sh/nvm))
- **Git**
- Editor de código (VS Code é o mais comum)

### 2. Instalar dependências

```bash
npm install
```

### 3. Configurar variáveis de ambiente

Copie o arquivo de exemplo e preencha:

```bash
cp .env.example .env
```

Você precisa:
- **`DATABASE_URL`** — pegue no painel do Render (banco criado conforme passo abaixo) ou use um Postgres local
- **`ANTHROPIC_API_KEY`** — gere em https://console.anthropic.com/settings/keys
- **`AUTH_SECRET`** — gere com `openssl rand -base64 32`
- **`APP_URL`** — `http://localhost:3000` em local

### 4. Rodar migrações

```bash
npm run db:push
```

### 5. Iniciar servidor de desenvolvimento

```bash
npm run dev
```

Acesse http://localhost:3000.

---

## Deploy no Render

### Primeira configuração

1. Acesse [render.com](https://render.com) e faça login com seu GitHub
2. Clique em **New +** → **Blueprint**
3. Selecione o repositório `brigsd/repositorio`
4. O Render vai detectar o `render.yaml` automaticamente e criar:
   - Um **Web Service** (a aplicação Next.js)
   - Um **Postgres database** (free tier — 90 dias)
5. Defina as variáveis sensíveis (que não vêm no `render.yaml`):
   - **`ANTHROPIC_API_KEY`** — sua chave da Anthropic
   - **`APP_URL`** — vai ficar tipo `https://programa-educacao.onrender.com` (descobre depois do primeiro deploy)
6. Aguarde o primeiro deploy (5-10 min)

### Após primeiro deploy

7. **Rode as migrações do banco no Render:**
   - Vá no Web Service → **Shell**
   - Execute: `npm run db:push`

8. Pronto. A aplicação está no ar.

### Deploys subsequentes

Cada `git push` para a branch `main` (ou a configurada) aciona auto-deploy. Build leva ~3-5 min no free tier.

⚠️ **Atenção ao free tier:** o Web Service do Render dorme após 15 min sem uso. Primeiro acesso depois disso leva ~30s pra acordar. OK pra cobaia/5 alunos.

⚠️ **Postgres free tier expira em 90 dias.** Quando se aproximar, migrar para **Neon** ou **Supabase** (Postgres free indefinido). É só trocar a `DATABASE_URL`.

---

## Comandos úteis

| Comando | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento (hot reload) |
| `npm run build` | Build de produção |
| `npm start` | Roda o build de produção |
| `npm run lint` | Checagem de lint |
| `npm run typecheck` | Checagem de tipos TS |
| `npm run db:generate` | Gera arquivos de migração a partir do schema |
| `npm run db:push` | Aplica o schema direto no banco (sem migração intermediária — bom pra dev) |
| `npm run db:migrate` | Aplica migrações geradas (bom pra produção) |
| `npm run db:studio` | Abre Drizzle Studio (UI do banco) em http://localhost:4983 |

---

## Estrutura

```
.
├── docs/                # Documentação do projeto
├── src/
│   ├── app/             # Rotas Next.js (App Router)
│   ├── db/              # Schema e cliente Drizzle
│   └── lib/             # Utilitários (IA, etc.)
├── package.json
├── drizzle.config.ts
├── render.yaml          # Infraestrutura Render
└── README.md
```

---

## Branch de desenvolvimento

Trabalho atual: `claude/adult-education-program-ppjiC`

Quando quiser fazer deploy contínuo, configure o Render pra acompanhar essa branch (ou faça merge para `main`).
