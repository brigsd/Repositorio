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
| 40 | Feedback do tutor nos exercícios fechados: curado fixo, não API | `11-decisoes-design.md` |
| 41 | Travessão (—) removido dos textos que o aluno lê (Níveis A e B) | `11-decisoes-design.md` |
| 42 | Termos gramaticais formais removidos das explicações pedagógicas | `11-decisoes-design.md` |
| 43 | Feedback em 3 camadas por exercício (socrático → pista → direto) | `11-decisoes-design.md` |

## Decisões pendentes (em ordem de prioridade)

### Pedagógicas

- [ ] **Selecionar textos âncora** para cada unidade dos 3 níveis
- [ ] **Curar lista de repertório** para argumentação — Nível C
- [ ] **Selecionar fontes de checagem** confiáveis para U3 do Nível C
- [ ] **Curar materiais do diagnóstico** (notícias, cenários, pares de frases)
- [ ] **Escrever templates de devolutiva** do diagnóstico ao aluno
- [ ] **Escrever os textos motivacionais** com tom autoral, ancorado nos alunos reais
- [ ] **Definir o que conta como "concluir o Nível C"** com critério replicável

### Técnicas

- [x] ~~Escolher stack web~~ → Next.js + Postgres + Render
- [x] ~~Esquema do banco~~ → `src/db/schema.ts`
- [x] ~~Aplicar migrações~~ → `npm run db:push` (validado local)
- [x] ~~Seed das 45 unidades~~ → `src/db/seed.ts`
- [x] ~~Lib de prompts adaptativa (4 modos)~~ → `src/lib/prompts.ts`
- [x] ~~Motor de spaced repetition~~ → `src/lib/spaced-repetition.ts`
- [x] ~~Modelo de aluno~~ → `src/lib/modelo-aluno.ts`
- [x] ~~Currículo curado da Unidade A.6~~ → `src/lib/curriculo/a6-palavras-armadilha.ts`
- [x] ~~UI da unidade com exercícios interativos~~ → `src/app/unidade/[slug]/`
- [ ] Auth simples (magic link)
- [ ] Onboarding do aluno (contexto pessoal: ocupação, motivação)
- [ ] Diagnóstico inicial como fluxo na plataforma
- [ ] Painel admin do curador (relatórios, flags, diários)
- [ ] Implementar `src/lib/classificacao.ts` (código determinístico do diagnóstico)
- [ ] Conectar API à correção do projeto integrador (texto livre da A.6)

### Operacionais

- [ ] Como os 5 alunos entram (onboarding manual? por convite?)
- [ ] Política de privacidade e termo de consentimento
- [ ] Plano de backup dos dados

## Expansões futuras (não no MVP)

- **Literatura — Caminho B** (escolas literárias, autores canônicos, repertório ENCCEJA aprofundado)
- **Outros módulos** (Matemática, Ciências da Natureza, Ciências Humanas, Letramento Digital)
- **Voz** (TTS/STT para leitura e conversação)
- **Modo offline** (PWA)
- **Integração com WhatsApp** (lembretes, micro-exercícios)

## Próximos passos imediatos

1. **Testar a Unidade A.6** — curador (cobaia) passa pelo fluxo completo: âncora → exercícios → conclusão
2. **Auth e onboarding** — login simples + captura do contexto pessoal do aluno
3. **Diagnóstico inicial** — implementar o fluxo das 5 etapas como UI na plataforma
4. **Projeto integrador** — conectar a API para avaliar o texto livre da A.6

## Critérios para considerar o MVP pronto

- [ ] Diagnóstico inicial funcionando com classificação determinística
- [ ] Nível A completo e funcional na plataforma
- [ ] Telemetria do modo teste capturando os sinais definidos
- [ ] Relatório por aluno gerando markdown exportável
- [ ] Curador completou o diagnóstico + Nível A inteiro como cobaia
- [ ] Ajustes pós-cobaia aplicados
- [ ] Termo de consentimento redigido

Só depois disso admite os primeiros alunos reais. Níveis B e C são construídos após validação do MVP.

## Histórico de decisões (changelog)

- **2026-05-11** — Documentação inicial criada após sessão de planejamento (Níveis 0 e 1 descartados; trilha A→B→C; modelo misto; telemetria).
- **2026-05-11** — Nível B detalhado em 20 unidades.
- **2026-05-11** — Nível C detalhado em 15 unidades.
- **2026-05-11** — Diagnóstico inicial detalhado em 5 etapas (~15-20 min).
- **2026-05-11** — Stack técnica escolhida. Setup inicial do projeto criado e validado.
- **2026-05-11** — Mudança para desenvolvimento local-first. Docker-compose adicionado.
- **2026-05-11** — Seed das 45 unidades implementado.
- **2026-05-11** — Home funcional com os 3 níveis e 45 unidades.
- **2026-05-11** — Lib de prompts adaptativa, spaced repetition, modelo de aluno, currículo A.6 e UI de exercícios criados.
- **2026-05-11** — Travessão removido dos textos que o aluno lê (D-01). Linguagem das explicações reescrita sem termos gramaticais formais (D-02). Feedback do tutor definido como curado fixo em 3 camadas (D-03, D-04, D-05). Ver `11-decisoes-design.md`.
