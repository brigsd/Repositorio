# 06 — Roadmap

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
| 11 | Nível A com 10 unidades estruturadas | `03-nivel-a.md` |
| 12 | Estratégia de mitigação de alucinação em 7 frentes | `04-ia-e-conteudo.md` |
| 13 | Conteúdo crítico curado pelo curador; derivado pela IA | `04-ia-e-conteudo.md` |
| 14 | Telemetria por sinal, não por volume | `05-telemetria.md` |
| 15 | Dois modos (teste/produção), mesmo motor | `05-telemetria.md` |
| 16 | Cobaia inicial: o próprio curador | `05-telemetria.md` |
| 17 | Stack: SQLite + serviço pequeno | `05-telemetria.md` |

## Decisões pendentes (em ordem de prioridade)

### Pedagógicas

- [ ] **Detalhar o Nível B** com a mesma profundidade do A (unidades, critérios, rubricas)
- [ ] **Detalhar o Nível C** com foco especial na progressão de redação argumentativa
- [ ] **Selecionar textos âncora** para cada unidade do Nível A
- [ ] **Definir o formato do diagnóstico inicial** (perguntas, classificação, ponto de entrada)
- [ ] **Decidir tom/personalidade do tutor IA** (formal? caloroso? como o aluno chama o sistema?)

### Técnicas

- [ ] Escolher stack web (frontend + backend) — provavelmente Next.js + SQLite ou similar leve
- [ ] Definir formato dos prompts (templates) por tipo de tarefa
- [ ] Esquema do banco (tabelas, eventos, índices)
- [ ] Painel admin do curador (visualização de relatórios, flags, diários)
- [ ] Mecanismo de export do "contexto do aluno" como markdown
- [ ] Esquema de hospedagem (VPS, Cloudflare, outro?)

### Operacionais

- [ ] Como os 5 alunos entram (onboarding manual? por convite?)
- [ ] Política de privacidade e termo de consentimento (mesmo em projeto pessoal)
- [ ] Plano de backup dos dados (SQLite precisa de backup ativo)

## Próximos passos imediatos

1. **Detalhar Nível B** (próximo trabalho pedagógico) — equivalente ao detalhamento já feito do A
2. **Esboço do diagnóstico inicial** — define o ponto de entrada na trilha
3. **Escolher stack técnica** e fazer protótipo mínimo de uma única unidade (sugestão: Unidade 6 do Nível A, "palavras que todo mundo erra" — é representativa do padrão geral)
4. **Iteração da cobaia** — curador passa pela unidade protótipo, usa flags e diário, ajusta tudo, repete

## Critérios para considerar o MVP pronto

- [ ] Nível A completo e funcional na plataforma
- [ ] Diagnóstico inicial implementado
- [ ] Telemetria do modo teste capturando os sinais definidos
- [ ] Relatório por aluno gerando markdown exportável
- [ ] Alertas automáticos nos 4 gatilhos
- [ ] Curador completou o Nível A inteiro como cobaia
- [ ] Ajustes pós-cobaia aplicados
- [ ] Termo de consentimento redigido

Só depois disso admite os primeiros alunos reais.

## Histórico de decisões (changelog)

Toda mudança de decisão importante registrar aqui com data e motivo.

- **2026-05-11** — Documentação inicial criada após sessão de planejamento.
