# 10 — Stack e Arquitetura Técnica

## Stack escolhida

| Camada | Tecnologia | Justificativa |
|---|---|---|
| Frontend + Backend | **Next.js 15** + TypeScript | Stack único (uma linguagem), ecossistema React, AI conhece bem para te ajudar a debugar |
| Estilo | **TailwindCSS 3** | Classes na tag, mobile-responsivo de graça, sem CSS separado |
| Banco | **Postgres** via **Neon** (free tier indefinido) — **já ativo** | Dados relacionais; gerenciado na nuvem, sem instalar nada. Schema e seed já aplicados. |
| ORM | **Drizzle ORM** | TypeScript end-to-end; mais simples que Prisma; sem geração de código complicada |
| IA | `@anthropic-ai/sdk` | Padrão Anthropic, atualizada com modelos novos |
| Auth | Convite via WhatsApp + PIN | 5 usuários; curador envia link de convite, aluno informa e-mail e cria PIN |
| Hospedagem | **Render** | Você já conhece; auto-deploy de git; free tier suficiente pra MVP (quando MVP estiver pronto) |
| Dev local | `npm run dev` + Neon (remoto) | Caminho **primário** de desenvolvimento; iteração rápida, hot reload em ~1s. Sem Postgres local — banco é o Neon direto. |

## Estrutura do projeto

```
.
├── docs/                    # Documentação viva (markdown)
├── public/                  # Assets estáticos (favicon, imagens)
├── src/
│   ├── app/                 # Rotas Next.js (App Router)
│   │   ├── layout.tsx       # Layout raiz
│   │   ├── page.tsx         # Home
│   │   ├── globals.css      # Tailwind base
│   │   ├── (auth)/          # Rotas de login (a criar)
│   │   ├── (aluno)/         # Rotas do aluno: trilha, unidade, exercício
│   │   ├── (admin)/         # Painel do curador: telemetria, flags, diários
│   │   └── api/             # API routes: chamadas à IA, registro de telemetria
│   ├── db/
│   │   ├── schema.ts        # Tabelas Drizzle (fonte da verdade)
│   │   ├── index.ts         # Cliente do banco
│   │   └── migrations/      # Migrações geradas (não editar à mão)
│   ├── lib/
│   │   ├── ai.ts            # Cliente Anthropic + modelos
│   │   ├── classificacao.ts # Lógica determinística do diagnóstico (a criar)
│   │   ├── prompts/         # Templates de prompts por tarefa (a criar)
│   │   └── telemetria.ts    # Registrar eventos (a criar)
│   └── components/          # Componentes React reusáveis (a criar)
├── drizzle.config.ts        # Configuração do Drizzle
├── next.config.ts
├── tailwind.config.ts
├── package.json
├── render.yaml              # Infraestrutura como código (Render)
├── .env.example             # Modelo das variáveis de ambiente
└── README.md                # Setup
```

## Banco de dados — visão geral

| Tabela | O que armazena |
|---|---|
| `alunos` | Usuários da plataforma (id, nome, e-mail, modo teste/prod) |
| `sessoes` | Cada login até saída (rastreia onde o aluno estava) |
| `unidades` | Catálogo curado das unidades (A.1 até C.15) com slug, título, ordem |
| `progresso` | Status do aluno em cada unidade (não iniciado / em andamento / concluído) |
| `tentativas` | Cada exercício respondido, com classificação fechada de erro |
| `eventos` | Event log para tudo que não cabe em tabelas estruturadas |
| `diagnosticos` | Resultado do diagnóstico inicial (nível recomendado, classificação JSON) |
| `flags` | Anotações 🟡🟠🔴 da cobaia (modo teste apenas) |
| `diario_sessao` | Reflexão livre da cobaia no fim de cada sessão (modo teste) |
| `chamadas_ia` | Auditoria completa de cada chamada à API Anthropic (modo teste) |

A fonte da verdade do esquema é [`src/db/schema.ts`](../src/db/schema.ts). Drizzle gera migrações automaticamente a partir dele.

## Fluxo típico de uma chamada à IA

1. **Aluno faz uma ação** — envia redação, faz pergunta, responde exercício
2. **Backend monta o prompt** a partir de template em `src/lib/prompts/` + dados do aluno
3. **Chamada à API Anthropic** via SDK (`src/lib/ai.ts`)
4. **Resposta é salva em `chamadas_ia`** (se `modo=teste`) com prompt completo, resposta, tokens, custo, latência
5. **Resultado processado** — classificação fechada de acerto/erro, feedback gerado
6. **`tentativas` recebe a tentativa**, `progresso` atualiza, `eventos` registra sinal importante (ex: padrão de erro repetido)
7. **UI atualiza** com o feedback formatado

## Custos previstos (mensais)

| Item | Free tier | Após esgotar |
|---|---|---|
| Render Web Service | Grátis (com cold start após 15 min idle) | ~R$ 35/mês plano Starter |
| Render Postgres | Grátis 90 dias | ~R$ 35/mês — **ou migrar pra Neon free indefinido** |
| Anthropic API (cobaia, 1 usuário) | ~R$ 0-2/mês | — |
| Anthropic API (5 alunos ativos) | — | ~R$ 5-30/mês |
| Domínio (opcional) | — | ~R$ 50/ano |

**MVP / cobaia:** R$ 0-5/mês.
**Produção com 5 alunos durante 90 dias:** R$ 0-30/mês.
**Após 90 dias com migração pra Neon free:** R$ 0-30/mês (só IA).

## Notas operacionais

### Comandos de instalação
O ambiente de desenvolvimento roda em máquina com conta administrativa. Comandos que instalam dependências (`npm install`, `npm install -g`, etc.) devem ser rodados **manualmente pelo desenvolvedor** no terminal com permissões de admin.

## Decisões técnicas importantes (com justificativa)

### Postgres (Neon) em vez de SQLite
A decisão original era SQLite. Mudada para Postgres por:
- Neon oferece Postgres gerenciado com free tier **indefinido** (sem expiração de 90 dias como Render)
- Sem instalar nada localmente — banco na nuvem acessível de qualquer máquina
- SQL é mais transferível e melhor pra agregações de telemetria
- **Status atual:** Neon já está ativo e em uso. Não há Postgres local — o dev aponta direto para o Neon.

### Drizzle em vez de Prisma
- Drizzle é mais explícito (você escreve o esquema em TS, vê o SQL gerado)
- Sem geração de código mágica
- Menor curva de aprendizado pra iniciante
- Tipos fluem direto do esquema

### Convite via WhatsApp + PIN em vez de OAuth/magic link
- Curador envia link de convite personalizado via WhatsApp
- Aluno clica, informa e-mail e cria um PIN numérico (funciona como senha)
- PIN simples é mais acessível que senha complexa para o público-alvo
- WhatsApp é o canal natural desses alunos (já usam todo dia)
- Sem dependência de entrega de e-mail (magic link falhava em caixas mal configuradas)
- Cada aluno fica cadastrado no banco com identificação única (e-mail + PIN), permitindo progresso individual

### Modo teste vs produção em campo da tabela
- Em vez de duas aplicações diferentes, o campo `alunos.modo` controla quais logs e UIs aparecem
- Curador da cobaia tem `modo=teste`; alunos reais terão `modo=prod`
- Garante que o motor pedagógico é o **mesmo** em ambos

### Classificação do diagnóstico em código, não em prompt
- Decisão registrada em `06-diagnostico.md`
- IA pontua cada etapa em JSON estruturado
- Código (em `src/lib/classificacao.ts`) aplica a tabela de decisão deterministicamente
- Mais auditável, mais consistente

## Quando reconsiderar a stack

- **Mais de 50 alunos** → considerar plano pago no Render ou hospedagem dedicada
- **Cobranças Anthropic > R$ 100/mês** → revisar prompts, cachear contexto, usar Haiku onde der
- **Latência irritante** → considerar Vercel (otimizado pra Next.js) ou hospedagem em edge
- **Servidor virou dor** → migrar pra Vercel ou Cloudflare full-stack

## O que falta implementar

Marcos sequenciais (cada um destravar o próximo):

1. **Setup do projeto e schema** ✅ feito
2. **Migrações iniciais aplicadas no banco** — `npm run db:push`
3. **Seed inicial das unidades** (catálogo das 45 unidades) — `src/db/seed.ts`
4. **Auth simples** — login do curador (admin)
5. **Esqueleto da UI do aluno** — navegação entre níveis/unidades
6. **Primeira unidade funcional** — sugestão: U6 do Nível A ("palavras que todo mundo erra")
7. **Telemetria básica** — registrar tentativas, eventos
8. **Diagnóstico inicial** — UI + lógica de classificação
9. **Painel admin** — visualização do contexto do aluno, flags, diários
10. **Modo teste** — flags, audit toggle, diário de sessão

Não é necessário implementar tudo. O MVP de fato é até o passo 6 + telemetria básica (passo 7).
