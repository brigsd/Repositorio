# 09 — Roadmap

## Decisões fechadas (registro)

| # | Decisão | Documento de referência |
|---|---|---|
| 1 | Projeto pessoal, máximo 5 alunos | `01-projeto.md` |
| 2 | Público com letramento funcional já consolidado | `01-projeto.md` |
| 3 | Foco inicial: módulo de Letramento (outros módulos depois) | `01-projeto.md` |
| 4 | Modelo pedagógico misto em 3 camadas | `02-pedagogia.md` |
| 5 | Trilha completa A → B → C com diagnóstico de entrada | `02-pedagogia.md` |
| 6 | Níveis 0 e 1 (alfabetização) descartados | `02-pedagogia.md` |
| 7 | Literatura incluída no Nível C | `02-pedagogia.md` |
| 8 | Gêneros textuais diversificados no Nível B | `02-pedagogia.md` |
| 9 | Redação ENCCEJA como produção principal do C | `02-pedagogia.md` |
| 10 | Princípio "problema antes da regra" | `02-pedagogia.md` |
| 11 | Princípio "ancoragem de propósito" em 3 escalas | `02-pedagogia.md` |
| 12 | Nível A com 10 unidades estruturadas | `03-nivel-a.md` |
| 13 | Nível B com 20 unidades em 8 blocos | `04-nivel-b.md` |
| 14 | Crônica/conto em bloco próprio (primeira literatura) | `04-nivel-b.md` |
| 15 | Coesão/coerência antes de resumo/paráfrase | `04-nivel-b.md` |
| 16 | Argumentativo curto incluso no B (ponte pro C) | `04-nivel-b.md` |
| 17 | Texto instrucional como gênero de produção | `04-nivel-b.md` |
| 18 | Nível C com 15 unidades em 5 blocos | `05-nivel-c.md` |
| 19 | Uso de "cor" em vez de "raça" (alinhado ao IBGE) | `05-nivel-c.md` |
| 20 | Literatura no Caminho A (leve), com pincelada de contexto histórico | `05-nivel-c.md` |
| 21 | Linguagem inclusiva tratada descritivamente (não-prescritiva) | `05-nivel-c.md` |
| 22 | Redação ENCCEJA em 5 unidades (anatomia, intro, argumentação, conclusão, redação completa) | `05-nivel-c.md` |
| 23 | Simulado ENCCEJA final com modo à escolha (cronometrado ou tempo livre) | `05-nivel-c.md` |
| 24 | Diagnóstico inicial em 5 etapas (~15-20 min) | `06-diagnostico.md` |
| 25 | Classificação por código determinístico, não por prompt | `06-diagnostico.md` |
| 26 | Regra de prudência: em incerteza, começa uma unidade antes | `06-diagnostico.md` |
| 27 | Override pelo aluno sempre permitido; avanço com mini-teste | `06-diagnostico.md` |
| 28 | Re-diagnóstico opcional após cada bloco; completo após 30+ dias parado | `06-diagnostico.md` |
| 29 | Estratégia de mitigação de alucinação em 7 frentes | `07-ia-e-conteudo.md` |
| 30 | Conteúdo crítico curado pelo curador; derivado pela IA | `07-ia-e-conteudo.md` |
| 31 | Telemetria por sinal, não por volume | `08-telemetria.md` |
| 32 | Dois modos (teste/produção), mesmo motor | `08-telemetria.md` |
| 33 | Cobaia inicial: o próprio curador | `08-telemetria.md` |
| 34 | Stack técnica: Next.js 15 + TypeScript + TailwindCSS | `10-stack.md` |
| 35 | Banco: Postgres (no Render free 90 dias → Neon free depois) | `10-stack.md` |
| 36 | ORM: Drizzle (TypeScript end-to-end, mais simples que Prisma) | `10-stack.md` |
| 37 | Hospedagem: Render com auto-deploy de git | `10-stack.md` |
| 38 | Auth: magic link via e-mail (sem provedor externo) | `10-stack.md` |
| 39 | Dev: local como padrão (Postgres local), Render só para produção | `10-stack.md` |

## Decisões pendentes (em ordem de prioridade)

### Pedagógicas

- [ ] **Selecionar textos âncora** para cada unidade dos 3 níveis (notícias, artigos, crônicas, contos, propagandas, contratos, manuais, poemas, redações exemplares)
- [ ] **Curar lista de repertório** para argumentação (dados verificados, citações canônicas, exemplos históricos) — Nível C
- [ ] **Selecionar fontes de checagem** confiáveis a apresentar na U3 do Nível C
- [ ] **Curar materiais do diagnóstico** — 3-5 notícias da Etapa 2, cenários da Etapa 3, pares de frases da Etapa 4
- [ ] **Escrever templates de devolutiva** do diagnóstico ao aluno
- [ ] **Escrever os textos motivacionais** (trailers, aberturas de bloco, "por que importa") com tom autoral, ancorado nos alunos reais
- [ ] **Decidir tom/personalidade do tutor IA** (formal? caloroso? como o aluno chama o sistema?)
- [ ] **Definir o que conta como "concluir o Nível C"** com critério replicável (rubrica final + critérios mínimos por unidade)

### Técnicas

- [x] ~~Escolher stack web~~ → Next.js + Postgres + Render
- [x] ~~Esquema do banco~~ → ver `src/db/schema.ts`
- [x] ~~Esquema de hospedagem~~ → Render via `render.yaml`
- [ ] Aplicar migrações iniciais no banco (`npm run db:push` no Render)
- [ ] Seed das 45 unidades (catálogo curado A.1 a C.15) em `src/db/seed.ts`
- [ ] Auth simples (magic link)
- [ ] Esqueleto da UI do aluno
- [ ] Primeira unidade funcional (sugestão: U6 do Nível A)
- [ ] Definir formato dos prompts (templates) por tipo de tarefa em `src/lib/prompts/`
- [ ] Painel admin do curador (visualização de relatórios, flags, diários)
- [ ] Mecanismo de export do "contexto do aluno" como markdown
- [ ] **Implementar lógica de classificação do diagnóstico** como código determinístico em `src/lib/classificacao.ts`

### Operacionais

- [ ] Como os 5 alunos entram (onboarding manual? por convite?)
- [ ] Política de privacidade e termo de consentimento (mesmo em projeto pessoal)
- [ ] Plano de backup dos dados (SQLite precisa de backup ativo)

## Expansões futuras (não no MVP)

Coisas que ficaram fora por escolha consciente e podem entrar em versões posteriores:

### Literatura — Caminho B (escolas literárias com profundidade)

O Nível C adota a leitura literária "leve" (Caminho A): foco em prazer, sensibilidade, mínimo contexto histórico. O **Caminho B** acrescentaria:
- Escolas literárias do Brasil (Romantismo, Realismo, Modernismo, Contemporâneo) com obras representativas
- 8-12 autores canônicos com leitura sistemática
- Análise de figuras de linguagem com nomenclatura técnica
- Repertório literário "de munição" para usar em redação ENCCEJA com profundidade

**Justificativa pra não estar no MVP:** análise do perfil dos alunos atuais (5 pessoas conhecidas, com foco em letramento funcional → formal e possível certificação ENCCEJA) sugere que o repertório enciclopédico não é prioridade. Os alunos ganham mais com proficiência em escrita e leitura crítica do que com cultura literária acadêmica. Quando o público se expandir ou quando algum aluno demonstrar interesse específico em ENEM/vestibular, esse caminho pode ser ativado como módulo opcional.

### Módulos além de Letramento

- **Matemática** (raciocínio matemático e financeiro)
- **Ciências da Natureza**
- **Ciências Humanas e Sociais**
- **Letramento digital** (uso seguro de internet, ferramentas básicas)

Esses só entram **depois** da validação completa do módulo de Letramento.

### Funcionalidades técnicas avançadas

- **Voz** (TTS para leituras longas; STT para conversação com tutor)
- **Modo offline** (PWA para uso sem conexão)
- **App mobile nativo** (atualmente foco é web responsivo)
- **Integração com WhatsApp** (lembretes, micro-exercícios)
- **Comparação entre alunos / cohort analytics** (só faz sentido com >50 alunos)

## Próximos passos imediatos

1. **Escolher stack técnica** e arquitetura mínima
2. **Esquema do banco** com tabelas de evento, aluno, progresso, diagnóstico
3. **Protótipo de uma única unidade** — sugestão: Unidade 6 do Nível A ("palavras que todo mundo erra"), por ser representativa do padrão geral
4. **Iteração da cobaia** — curador passa pela unidade protótipo, usa flags e diário, ajusta tudo, repete
5. **Implementar o diagnóstico** como segundo marco técnico, em paralelo à curadoria dos materiais dele

## Critérios para considerar o MVP pronto

- [ ] Diagnóstico inicial funcionando com classificação determinística
- [ ] Nível A completo e funcional na plataforma
- [ ] Telemetria do modo teste capturando os sinais definidos
- [ ] Relatório por aluno gerando markdown exportável
- [ ] Alertas automáticos nos 4 gatilhos
- [ ] Curador completou o diagnóstico + Nível A inteiro como cobaia
- [ ] Ajustes pós-cobaia aplicados
- [ ] Termo de consentimento redigido

Só depois disso admite os primeiros alunos reais. Níveis B e C podem ser construídos depois da validação inicial.

## Histórico de decisões (changelog)

Toda mudança de decisão importante registrar aqui com data e motivo.

- **2026-05-11** — Documentação inicial criada após sessão de planejamento (Níveis 0 e 1 descartados; trilha A→B→C; modelo misto; telemetria com modos teste/prod).
- **2026-05-11** — Nível B detalhado em 20 unidades. Crônica/conto movidos pra bloco próprio. Princípio "ancoragem de propósito" formalizado e aplicado retroativamente ao Nível A. Estrutura de arquivos renumerada (04 = Nível B; ia-e-conteudo → 05; telemetria → 06; roadmap → 07).
- **2026-05-11** — Nível C detalhado em 15 unidades. Decisões importantes: uso de "cor" em vez de "raça" (alinhado ao IBGE); literatura no Caminho A com Caminho B documentado como expansão futura; linguagem inclusiva tratada descritivamente; redação ENCCEJA em 5 unidades estruturadas; simulado final com escolha do aluno entre modo cronometrado e tempo livre. Arquivos renumerados: 05 = Nível C; ia-e-conteudo → 06; telemetria → 07; roadmap → 08.
- **2026-05-11** — Diagnóstico inicial detalhado em 5 etapas (~15-20 min). Decisões: classificação por código determinístico (não prompt); regra de prudência (em incerteza, começar uma unidade antes); override sempre permitido com mini-teste pra avanço; re-diagnóstico opcional após blocos. Arquivos renumerados: 06 = Diagnóstico; ia-e-conteudo → 07; telemetria → 08; roadmap → 09.
- **2026-05-11** — Stack técnica escolhida e setup inicial do projeto. Decisões: Next.js 15 + TypeScript + TailwindCSS; Postgres (Render free 90 dias → Neon free depois) em vez de SQLite (Render free não tem persistent disk); Drizzle ORM em vez de Prisma; deploy via Render auto-git; auth com magic link a definir. Criados: estrutura completa do projeto (package.json, configs, esquema do banco em `src/db/schema.ts`, render.yaml), README de setup, doc técnica em `10-stack.md`. Index.txt antigo de exercício de Git removido.
- **2026-05-11** — Mudança de abordagem: desenvolvimento local-first em vez de deploy contínuo no Render. Adicionado `docker-compose.yml` (Postgres local opcional via Docker), README reformulado priorizando setup local com Postgres nativo OU Docker. Render fica para deploy quando MVP estiver pronto. `package-lock.json` adicionado pra builds reproduzíveis. Setup validado: npm install OK, db:push aplica schema, build limpo, typecheck limpo.
