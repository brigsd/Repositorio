# 05 — Telemetria e Modos (Teste vs Produção)

## Princípio

**Capturar sinal, não barulho.** Telemetria educacional padrão registra tudo e ninguém olha. Aqui registramos apenas o que **decide alguma coisa**.

## Dois modos, mesmo motor

A versão "teste" e a "produção" rodam o **mesmo motor pedagógico**. O que muda é o que está logado e quais controles estão disponíveis. Isso evita testar uma versão diferente da que vai produção.

- **`mode = test`** — cobaia (o curador). Logs extras + ferramentas de auditoria + anotações
- **`mode = prod`** — alunos reais. Logs essenciais apenas

Implementação: campo `mode` na sessão/conta; logs e UIs extras condicionais a esse campo.

---

## Camada base (ambos os modos)

### Por tentativa de exercício

- Unidade, exercício, resposta do aluno, gabarito, acertou ou não
- Tempo gasto
- Quantas tentativas até acertar
- **Classificação do erro pela IA** — lista fechada por unidade (ex: "confundiu conector adversativo com aditivo")

### Por sessão

- Início, fim, em qual unidade estava
- Onde parou (concluiu? abandonou no meio?)
- Frequência de sessões na semana

### Eventos qualitativos

- Toda dúvida que o aluno digitou pro tutor IA (texto cru)
- Toda redação/resposta longa + feedback da IA
- "Pediu pra repetir explicação" ou "respondeu não entendi"

### Sinais de engajamento

- Streak (dias seguidos)
- Tempo desde a última sessão
- Taxa de abandono no meio de unidade

### O que NÃO é registrado

- Heatmaps de clique/mouse (zero sinal)
- Análise de sentimento automática (enviesada, não confiável)
- Métricas vaidosas (total de palavras, total de exercícios feitos)
- Comparação entre alunos (amostra pequena demais pra inferência)

---

## Camada extra do modo TESTE

### 1. Eficiência do ensino

**Mini-aferição pré/pós unidade**
- 2-3 perguntas no início + 2-3 equivalentes (não idênticas) no final
- **Delta** = ganho real da unidade. Delta zero ou negativo = unidade não está ensinando

**Curva de retenção**
- 3 dias, 7 dias, 21 dias após: 1 pergunta surpresa sobre conceito anterior
- Acerta hoje mas esquece em 7 dias = não consolidou

**Tempo até domínio**
- Quantos minutos de prática até atingir critério
- Comparável entre unidades — outlier sinaliza problema de design

### 2. Auditoria da IA

**Log completo de cada chamada**
- Prompt enviado (com placeholders preenchidos)
- Resposta crua
- Modelo, tokens, latência, custo
- Acessível via view "última chamada" no canto da UI

**Re-run determinístico**
- Botão "rodar de novo" com temperatura 0
- Ver se a resposta é estável ou variando

**Disagreement detector**
- Em correção de redação: roda duas vezes com prompts levemente diferentes e compara
- Se discordar, flagga "IA sem certeza, revise"

**Auto-confiança da IA**
- Prompt pede pra IA declarar "seguro / na dúvida"
- Quando ela mesma sinaliza dúvida → marca pra revisão

### 3. Anotações da cobaia

**Botão flag (3 níveis)** em qualquer tela:
- 🟡 *"estranho, revisar depois"*
- 🟠 *"isso aqui não funcionou bem"*
- 🔴 *"isso aqui está errado/quebrado"*

Cada flag → evento com: o que estava na tela, qual exercício, qual chamada à IA, campo livre de texto.

**Diário de sessão (~2 min ao final)**
- "O que funcionou bem hoje?"
- "O que travou ou irritou?"
- "Onde sentiu que aprendeu algo de verdade?"

Texto livre, curto. É o sinal mais valioso e o que análise automática nunca pega.

**Modo "audit"**
- Toggle que faz qualquer exercício mostrar lado a lado o que o aluno veria + o que rolou nos bastidores (prompt, resposta da IA, classificação de erro)
- Pra inspecionar enquanto pratica

---

## Relatório por aluno

Em cima do log bruto, uma view por aluno que monta um relatório legível com botão **"Exportar contexto pra IA"** que copia markdown formatado:

```
# Contexto — Aluno: Bruno
Última sessão: 3 dias atrás
Nível atual: A | Unidade atual: 6
Progresso geral: 55% do Nível A

## Onde está travado
- Unidade 6, exercício mas/mais: 4 tentativas, ainda errando
- Padrão observado: usa "mais" como conector aditivo
- Hipótese da IA: transferência do oral

## O que já domina
- Unidades 2 e 3 — passou de primeira
- Pontuação geral: 9/10

## Engajamento
- 5 sessões na última semana, média 22 min
- Sem sinais de abandono

## Últimas dúvidas perguntadas
1. "Quando usar dois pontos?"
2. "Por que 'fazem dois anos' tá errado?"

## Trechos recentes da escrita
[3 trechos das últimas respostas longas]
```

Esse formato é colado em chat com assistente IA pra pedir ajuda específica com contexto real.

## Alertas automáticos

Em vez de checar dashboards, o sistema avisa quando:

- Aluno **abandonou** (sem sessão há 5+ dias)
- Aluno **travou** (mesmo critério não atingido em 3+ tentativas)
- Aluno **acelerou** (3+ unidades em uma semana — pode estar sub-desafiado)
- IA **detectou padrão repetido** de erro em 2+ unidades (gap conceitual de fundo)

Pode ser e-mail diário/semanal ou notificação no painel.

## O que o assistente IA olha proativamente

Quando o curador trouxer contexto exportado, o assistente vai caçar:

1. Unidades com **delta de aprendizado baixo** entre pré e pós
2. Conceitos com **retenção ruim** em 7 dias
3. **Padrões de erro recorrentes** que sugerem explicação furada (não aluno ruim)
4. **Discordâncias entre rodadas** da IA (alucinação em ação)
5. **Tempos anômalos** (unidade muito longa ou rápida)
6. **Flags + diários** — onde mora a verdade que log automático não pega

## Ética e transparência

Telemetria educacional é diferente de tracking comercial. O aluno **deve** saber:

> "Isso registra como você aprende pra eu (instrutor) te ajudar quando travar. Não é prova, não é vigilância. Você pode pedir pra ver os seus dados ou apagar quando quiser."

Mensagem no onboarding. Adulto com trauma escolar pega gatilho de "vigiado e avaliado" facilmente — transparência é prevenção de abandono.

## Arquitetura mínima

Para 5 alunos:

- **Postgres** (gerenciado no Render free tier 90 dias, depois Neon free indefinido) com tabelas:
  - `eventos` — event log para tudo o que não cabe nas tabelas estruturadas
  - `alunos`, `unidades`, `progresso`, `tentativas` — dados estruturados
  - `diagnosticos` — resultado do diagnóstico inicial
  - `flags`, `diario_sessao`, `chamadas_ia` — apenas modo teste
- View/função que gera relatório do aluno a partir do log
- Botão admin de export markdown
- Tarefa diária que checa condições de alerta
- Roda em Render Web Service (free tier)

Esquema completo em [`src/db/schema.ts`](../src/db/schema.ts). Detalhes da arquitetura em [`10-stack.md`](./10-stack.md).

> **Nota histórica:** a primeira versão deste documento previa SQLite + VPS. Mudou-se para Postgres + Render pelo perfil "usar free tier" do usuário, evitando configuração manual de persistent disk. Funcionalmente equivalente para o caso de uso.
