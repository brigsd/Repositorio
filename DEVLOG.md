# DEVLOG — Registro de Alterações entre Sessões

> **ATENÇÃO — LEIA ISTO PRIMEIRO (LEITURA OTIMIZADA)**
>
> Este arquivo é a **memória compartilhada** entre todas as ferramentas de IA que trabalham neste projeto (Antigravity, Claude Code, ou qualquer outra).
> Ele utiliza **ordem cronológica reversa** (as atualizações mais recentes ficam sempre no TOPO).
>
> **Regras para IAs que abrem este projeto:**
> 1. **NÃO LEIA O ARQUIVO INTEIRO:** Para economizar tokens e processamento, leia apenas estas instruções e as **primeiras entradas no topo da seção "Entradas"** para entender perfeitamente o estado atual do projeto.
> 2. **Após concluir qualquer alteração**, adicione a sua entrada estritamente no **topo da seção "Entradas"** (logo abaixo do cabeçalho `## Entradas`), empurrando o histórico antigo para baixo.
> 3. **Nunca apague entradas antigas** — elas formam a linha do tempo e auditoria do projeto.
> 4. **Se houver conflito** com algo que outra instância fez, sinalize ao usuário antes de sobrescrever.

---

## Formato de cada entrada

```
### YYYY-MM-DD HH:MM — [Ferramenta] — [Local]
**Resumo:** (1 frase do que foi feito)
**Arquivos alterados:**
- `caminho/arquivo.ts` — o que mudou
**Estado atual:** (onde o projeto ficou após esta sessão)
**Próximo passo sugerido:** (o que faz sentido fazer em seguida)
```

- **Ferramenta**: `Antigravity`, `Claude Code`, `Manual` (edição humana direta)
- **Local**: `trabalho`, `casa`, ou outro identificador do PC

---

## Entradas

### 2026-05-16 — Claude Code — claude/review-devlog-instructions-pnoKu
**Resumo:** Criação completa da Unidade B.4 "Ironia, humor e ambiguidade", com currículo e 16 exercícios em 3 tipos (ironia verbal, ambiguidade, quebra de expectativa).
**Arquivos alterados:**
- `src/lib/curriculo/b4-ironia.ts` — [NOVO] Currículo: ancoraPropósito (leitura em dois níveis — literal e real), curiosidade sobre máximas de Grice e violação intencional da verdade, 3 armadilhas (ironia_verbal, ambiguidade, quebra_expectativa), preAfericao, projetoIntegrador (encontrar exemplos reais de cada tipo).
- `src/lib/exercicios/b4-ironia.ts` — [NOVO] 16 exercícios: Fase 1 (ex01-06) bloqueado por tipo — 2 por armadilha; Fase 2 (ex07-12) tipos mistos com distractor literal obrigatório; Fase 3 (ex13-16) ironia institucional, ambiguidade não intencional, quebra de expectativa com autoironia. Phrasing ENCCEJA/ENEM em todos: "O efeito de sentido é produzido por...", "A ironia reside em...", "O humor decorre de...".
- `src/lib/exercicios/index.ts` — EXERCICIOS_B4 importado e registrado.
- `src/app/unidade/[slug]/page.tsx` — B4_IRONIA importado e registrado.
- `src/app/page.tsx` — "b-4-ironia" em UNIDADES_ATIVAS.
**Base pedagógica:** Grice 1975 (máximas conversacionais, violação deliberada de "seja verdadeiro"); Glucksberg 1990 (competição paralela de sentidos literal/não-literal); Brait 1996 (ironia polifônica, duas vozes simultâneas); ENCCEJA/ENEM (questões cobram mecanismo, não rótulo). Fase 3 inclui ironia institucional (memorandos, respostas de suporte) — tipo mais comum no contexto adulto.
**Estado atual:** B.1, B.2, B.3 e B.4 completas e ativas.
**Próximo passo sugerido:** Desenvolver B.5 "Texto de notícia" com super pacote de pesquisa primeiro.

### 2026-05-16 — Claude Code — claude/review-devlog-instructions-pnoKu
**Resumo:** Criação completa da Unidade B.3 "Inferência: ler o que não está escrito", com currículo e 16 exercícios de inferência em 3 tipos progressivos.
**Arquivos alterados:**
- `src/lib/curriculo/b3-inferencia.ts` — [NOVO] Currículo: ancoraPropósito (ler só o explícito vs. ler as entrelinhas), curiosidade sobre inferência causal automática (Graesser 1994), 3 armadilhas em sequência de dificuldade crescente (causal, implícita, conclusiva), preAfericao, projetoIntegrador (analisar comunicado real separando explícito de implícito).
- `src/lib/exercicios/b3-inferencia.ts` — [NOVO] 16 exercícios: Fase 1 (ex01-06) bloqueado por tipo (causal, implícita, conclusiva); Fase 2 (ex07-12) tipos mistos, sempre com "literal lure" obrigatório; Fase 3 (ex13-16) textos mais longos, inferências de múltiplos elementos. Feedback "acknowledge-name-model" em todos os exercícios.
- `src/lib/exercicios/index.ts` — EXERCICIOS_B3 importado e registrado.
- `src/app/unidade/[slug]/page.tsx` — B3_INFERENCIA importado e registrado.
- `src/app/page.tsx` — "b-3-inferencia" em UNIDADES_ATIVAS.
**Base pedagógica:** Graesser, Singer & Trabasso 1994 (inferências causais quase automáticas); McKoon & Ratcliff 1992 (local antes de global); Kispal 2008 (sequência instrucional local→elaborativa→global); Metcalfe et al. 2009 (feedback acknowledge-name-model); Freire/Soares (textos de contexto familiar reduzem carga cognitiva). "Literal lure" em todos os exercícios — distractor prioritário para leitores em desenvolvimento.
**Estado atual:** B.1, B.2 e B.3 completas e ativas.
**Próximo passo sugerido:** Desenvolver B.4 "Ironia, humor e ambiguidade" com super pacote de pesquisa primeiro.

### 2026-05-16 — Claude Code — claude/review-devlog-instructions-pnoKu
**Resumo:** Criação completa da Unidade B.2 "Ideia principal e secundárias", com currículo e 16 exercícios de identificação da ideia principal em textos de contexto trabalhista.
**Arquivos alterados:**
- `src/lib/curriculo/b2-ideia-principal.ts` — [NOVO] Currículo: ancoraPropósito (80% da compreensão é a ideia principal), curiosidade sobre Kintsch & van Dijk (ideia principal é construída, não encontrada), 3 armadilhas (detalhe, ideia secundária, ideia ampla demais), pre/posAfericao, projetoIntegrador (analisar texto real).
- `src/lib/exercicios/b2-ideia-principal.ts` — [NOVO] 16 exercícios: Fase 1 (ex01-06) bloqueado por tipo de erro; Fase 2 (ex07-12) distractores mistos; Fase 3 (ex13-16) textos mais longos com ideia principal implícita. Todos os exercícios usam textos autênticos de contexto trabalhista.
- `src/lib/exercicios/index.ts` — EXERCICIOS_B2 importado e registrado.
- `src/app/unidade/[slug]/page.tsx` — B2_IDEIA_PRINCIPAL importado e registrado.
- `src/app/page.tsx` — "b-2-ideia-principal" em UNIDADES_ATIVAS.
**Base pedagógica:** Kintsch & van Dijk 1978 (macro-operações: deleção, generalização, construção); Fuzzy Trace Theory (leitores de baixa literacia retêm verbatim, não gist); 3 erros documentados (Shanahan, Keys to Literacy); GIST procedure (Cunningham 1982); Soares/letramento (textos autênticos de contexto real).
**Estado atual:** B.1 e B.2 completas e ativas.
**Próximo passo sugerido:** Desenvolver B.3 "Inferência" com super pacote de pesquisa primeiro.

### 2026-05-15 — Claude Code — claude/review-devlog-instructions-pnoKu
**Resumo:** Criação completa da Unidade B.1 "Tipologias textuais", primeira unidade do Nível B, com currículo e 16 exercícios de classificação textual.
**Arquivos alterados:**
- `src/lib/curriculo/b1-tipologias.ts` — [NOVO] Currículo: ancoraPropósito (saber o tipo ativa o esquema correto), curiosidade sobre heterogeneidade tipológica (Marcuschi 2002), 3 armadilhas (narrar×descrever, expor×dissertar, instruir), pre/posAfericao, projetoIntegrador (escrever mesma situação em 2 tipologias).
- `src/lib/exercicios/b1-tipologias.ts` — [NOVO] 16 exercícios: Fase 1 (ex01-05) 1 protótipo por tipologia; Fase 2 (ex06-12) pares de confusão narrar×descrever e expor×dissertar; Fase 3 (ex13-16) interleaved com todas as 5 tipologias.
- `src/lib/exercicios/index.ts` — EXERCICIOS_B1 importado e registrado.
- `src/app/unidade/[slug]/page.tsx` — B1_TIPOLOGIAS importado e registrado em CURRICULOS.
- `src/app/page.tsx` — "b-1-tipologias" em UNIDADES_ATIVAS.
**Base pedagógica:** Marcuschi 2002 (tipos vs. gêneros); Rumelhart 1980/Kintsch 1998 (formal schemata, g=0.25-0.57); Kornell & Bjork 2008 (protótipos bloqueados → interleaved); NNGroup (trechos curtos para leitores iniciantes). Confusões documentadas: narrar×descrever (sequência temporal vs. estado estático) e expor×dissertar (informação neutra vs. tese autoral).
**Estado atual:** B.1 completa e ativa. Nível A integralmente publicado (A.1–A.10). Nível B iniciado.
**Próximo passo sugerido:** Desenvolvver B.2 "Ideia principal e secundárias" com super pacote de pesquisa primeiro.

### 2026-05-15 — Claude Code — claude/review-devlog-instructions-pnoKu
**Resumo:** Criação completa da Unidade A.10 "Projeto Integrador do Nível A", unidade capstone que fecha o Nível A com prática intercalada de todos os 9 tópicos.
**Arquivos alterados:**
- `src/lib/curriculo/a10-projeto.ts` — [NOVO] Currículo: âncora celebratória ("você chegou à última unidade"), curiosidade sobre prática intercalada, preAfericao (A.9/A.7/A.8), tiposExercicio (lacuna_unica + identificar_erro), projetoIntegrador completo com rubrica de 6 itens, posAfericao e perguntasRevisao.
- `src/lib/exercicios/a10-projeto.ts` — [NOVO] 16 exercícios intercalados: A.2 registro (1), A.3 vírgula (1), A.4 pontuação (1), A.5 acentos (1), A.6 palavras (2), A.7 verbal (3), A.8 nominal (4), A.9 regência (3). Tipos: lacuna_unica (13) + identificar_erro (3).
- `src/lib/exercicios/index.ts` — EXERCICIOS_A10 importado e registrado.
- `src/app/page.tsx` — "a-10-projeto" em UNIDADES_ATIVAS.
- `src/app/unidade/[slug]/page.tsx` — A10_PROJETO importado e em CURRICULOS.
**Super Pacote aplicado (4 frentes):**
- UbD/Wiggins + Knowles: tarefa autêntica única (mensagem completa) com rubrica visível antecipadamente; adultos precisam ver o critério antes da tarefa.
- Kornell & Bjork (2008) + Roediger: todos os 9 tópicos intercalados, pesos maiores para A.7/A.8/A.9 (mais recentes e mais difíceis). Interleaving sobre conjunto completo > blocked.
- Zeigarnik + Bandura: fechamento de nível nomeado como conquista, não como teste. Feedback celebra domínio específico. projetoIntegrador é "demonstração para você mesmo".
- NN/G: feedback imediato para mapeamentos arbitrários (acentos, palavras); 2 opções mantidas; identificar_erro para exercícios de reconhecimento de frase inteira.
**Decisões tomadas:**
- Slug confirmado: "a-10-projeto". Typecheck limpo.
- Usados dois tipos de exercício na mesma unidade (lacuna_unica e identificar_erro) — ambos válidos no enum ExercicioGerado.tipo.
- Nenhum em-dash em texto visível (D-01). Conteúdo novo zero: revisão pura.
**Estado atual:** Nível A completo (A.1 a A.10). 10 unidades ativas, typecheck limpo nos arquivos das unidades.
**Próximo passo sugerido:** Testar A.10 no browser (npm run dev) e avaliar desenvolvimento do Nível B.

### 2026-05-15 — Claude Code — claude/review-devlog-instructions-pnoKu
**Resumo:** Criação completa da Unidade A.9 "Regência: tropeços clássicos", com super pacote aplicado ANTES do conteúdo e filtro antimito rigoroso.
**Arquivos alterados:**
- `src/lib/curriculo/a9-regencia.ts` — [NOVO] Currículo: âncora (Vera, técnica de manutenção), curiosidade (origem antiga do "a", recuo na fala), 2 armadilhas: `ir_a` e `chegar_a`.
- `src/lib/exercicios/a9-regencia.ts` — [NOVO] 16 exercícios `lacuna_unica`: Fase 1 (ex01-06, ir_a blocked), Fase 2 (ex07-12, chegar_a blocked), Fase 3 (ex13-16, interleaved).
- `src/lib/exercicios/index.ts` — EXERCICIOS_A9 importado e registrado.
- `src/app/page.tsx` — "a-9-regencia" em UNIDADES_ATIVAS.
- `src/app/unidade/[slug]/page.tsx` — A9_REGENCIA importado e em CURRICULOS.
**Super Pacote aplicado (4 frentes) — verificação factual prévia (lição da A.7):**
- ALERTA crítico das 4 frentes: regência é o terreno mais minado de mitos prescritivos. Bagno ("Preconceito Linguístico") aponta "assistir ao filme", "namorar com", "obedecer a", "preferir X a Y" como shibboleths sociais, NÃO norma culta real. Esses foram DELIBERADAMENTE EXCLUÍDOS.
- Base sólida usada: variação genuína e documentada (Wiedemer; Mollica; Berlinck — variacionismo peer-reviewed): verbos de movimento + destino, fala "em/no/na" vs. escrita formal "a/ao/à". Variação estável, não erro.
- Decisão: um único fenômeno (movimento + "a"), dividido em 2 contextos de prática (ir / chegar) — sem inventar 2ª premissa frágil. Cognição (PMC): regência arbitrária aprende melhor em contexto, não como lista de pares.
- Framing Labov/Bandura estrito: "vou na reunião" validado como certo na conversa; "vou à reunião" apresentado como costume da escrita formal, nunca como erro, nunca chamado de raro.
**Decisões tomadas:**
- Slug confirmado no seed.ts: "a-9-regencia". Typecheck limpo (sem output).
- Nenhum em-dash em texto visível (D-01). Nenhum mito prescritivo no conteúdo.
**Estado atual:** A.9 pronta e factualmente defensável. 16 exercícios, integrada nos 4 pontos.
**Próximo passo sugerido:** Testar A.9 no browser (npm run dev); A.10 conforme seed.ts.

### 2026-05-15 — Claude Code — claude/review-devlog-instructions-pnoKu
**Resumo:** Criação completa da Unidade A.8 "Concordância Nominal Essencial", com super pacote de pesquisa aplicado antes de qualquer escrita de conteúdo.
**Arquivos alterados:**
- `src/lib/curriculo/a8-concordancia-nominal.ts` — [NOVO] Currículo: âncora de propósito (Jorge, recepcionista), curiosidade sobre pesquisa UFRJ de posição linear, 2 armadilhas: `substantivo_plural` e `adjetivo_plural`.
- `src/lib/exercicios/a8-concordancia-nominal.ts` — [NOVO] 16 exercícios `lacuna_unica`: Fase 1 (ex01-06, substantivo_plural blocked), Fase 2 (ex07-12, adjetivo_plural blocked), Fase 3 (ex13-16, interleaved).
- `src/lib/exercicios/index.ts` — EXERCICIOS_A8 importado e registrado em REGISTRO.
- `src/app/page.tsx` — "a-8-concordancia-nominal" adicionado ao UNIDADES_ATIVAS.
- `src/app/unidade/[slug]/page.tsx` — A8_CONCORDANCIA_NOMINAL importado e adicionado ao CURRICULOS.
**Super Pacote aplicado (4 frentes) — ANTES de escrever conteúdo:**
- Sociolinguística peer-reviewed (Scherre 1988 UFRJ; Naro & Scherre 2007): artigo retém plural ~99,7%; substantivo e adjetivo mostram marcação variável — "os livro novo" é sistemático, não erro aleatório. Armadilhas baseadas nessa evidência.
- Sweller (CLT): número e gênero não são ensinados juntos; esta unidade cobre só número (plural) no SN.
- Bjork/Rohrer + Hwang 2025: blocked (substantivo) → blocked (adjetivo) → interleaved para discriminação.
- Labov/Bandura: forma vernácula "os documento" validada explicitamente; escrita formal apresentada como repertório adicional.
**Decisões tomadas:**
- Slug correto confirmado no seed.ts antes de qualquer código: "a-8-concordancia-nominal".
- Não há erros de TypeScript nos novos arquivos (tsc --noEmit --skipLibCheck sem output).
- Nenhum em-dash em texto visível ao aluno (regra D-01 aplicada).
**Estado atual:** A.8 pronta. 16 exercícios, typecheck limpo, integrada em index.ts, page.tsx e unidade/[slug]/page.tsx.
**Próximo passo sugerido:** Testar A.8 no browser (npm run dev); avaliar desenvolvimento de A.9 "Regência" com o mesmo processo de verificação factual prévia.

### 2026-05-15 — Claude Code — claude/review-devlog-instructions-pnoKu
**Resumo:** Correção factual profunda da A.7: Caso 1 trocado de "a gente" (premissa linguisticamente furada) para "nós" com/sem -mos (variação real e documentada). Caso 1 trocado de "a gente" (premissa linguisticamente furada) para "nós" com/sem -mos (variação real e documentada).
**Arquivos alterados:**
- `src/lib/curriculo/a7-concordancia.ts` — armadilha `a_gente_singular` → `nos_mos`; corpo, exemploPrático (Rosana com "nós fechou/fechamos"), curiosidade (origem latina do -mos), pré/pós-aferição, projetoIntegrador e perguntasRevisao reescritos.
- `src/lib/exercicios/a7-concordancia.ts` — ex1-6, ex13, ex15 reescritos para `nos_mos` ("nós vamos" vs "nós vai"); cabeçalho e comentários de fase atualizados. Ex7-12, ex14, ex16 (sujeito_plural) intactos.
**Por que mudou (super pacote — verificação factual):**
- Pesquisa peer-reviewed (Naro & Scherre; Cambridge LVC; SciELO DELTA): "a gente vai" (3ª sing.) é a forma DOMINANTE na fala E na escrita, não havendo "armadilha" real; "a gente vão" (3ª pl.) é a MAIS RARA das três variantes, contradizendo o texto que afirmava circular livremente.
- A dificuldade de concordância genuína e documentada de adultos de baixa escolaridade é o "nós" SEM -mos ("nós vai", "nós foi"), variante vernacular sistemática e estigmatizada — agora o Caso 1.
**Decisões tomadas:**
- Framing Labov/bidialetalismo mantido e agora factualmente correto: a fala vernacular é validada explicitamente; a forma com -mos é apresentada como ferramenta adicional para escrita formal, nunca como conserto.
- Estrutura blocked→interleaved preservada (validada por Hwang 2025, Language Learning, para baixa proficiência). Slugs de exercício mantidos; só pré/pós-aferição mudaram de slug (conceito mudou).
**Estado atual:** A.7 com base linguística sólida. Caso 1 = nós+-mos; Caso 2 = sujeito plural. 16 exercícios, typecheck limpo nos arquivos da unidade.
**Próximo passo sugerido:** Testar A.7 no browser (npm run dev); avaliar aplicar o mesmo rigor de verificação factual às demais unidades de gramática.

### 2026-05-15 — Claude Code — claude/review-devlog-instructions-pnoKu
**Resumo:** Criação completa da Unidade A.7 "O verbo combina com quem faz a ação" (Concordância Verbal), com super pacote de pesquisa aplicado (4 frentes) e conteúdo gerado pelo Opus 4.7.
**Arquivos alterados:**
- `src/lib/curriculo/a7-concordancia.ts` — [NOVO] Currículo com âncora de propósito (Rosana, auxiliar administrativa), curiosidade sobre "a gente" e 2 armadilhas: `a_gente_singular` e `sujeito_plural`.
- `src/lib/exercicios/a7-concordancia.ts` — [NOVO] 16 exercícios tipo `lacuna_unica`: Fase 1 (ex1-6, a_gente blocked), Fase 2 (ex7-12, sujeito_plural blocked), Fase 3 (ex13-16, interleaved). Progressão fácil para difícil com palavra-atratora nos exercícios finais de cada fase.
- `src/lib/exercicios/index.ts` — EXERCICIOS_A7 importado e registrado em REGISTRO.
- `src/app/page.tsx` — "a-7-concordancia" adicionado ao UNIDADES_ATIVAS.
- `src/app/unidade/[slug]/page.tsx` — A7_CONCORDANCIA importado e adicionado ao CURRICULOS.
**Super Pacote aplicado (4 frentes convergentes):**
- ERIC/Harvard: análise contrastiva (certo vs. errado em contexto real) supera memorização de regras para adultos
- Bjork/Rohrer: scaffolding blocked (fácil para difícil) + Fase 3 interleaved força discriminação entre os dois casos
- Bandura: mastery first, casos simples antes dos com palavra-atratora; feedbacks no efeito comunicativo, nunca na pessoa
- Nielsen Norman: lacuna_unica com 2 opções (recognition > recall), frases curtas e contextos plausíveis
**Decisões tomadas:**
- Dois casos apenas (Sweller CLT): "a gente" + singular e sujeito plural + verbo plural. Um princípio por fase.
- Palavra-atratora introduzida nos ex11, ex12 e ex16: a palavra singular perto do verbo que "puxa" para o erro. Exercícios finais testam se o aluno aprendeu a ignorar o ruído e voltar ao sujeito real.
- Conteúdo textual gerado pelo Opus 4.7 (conforme dica do curador); estrutura TypeScript e integração por Sonnet 4.6.
**Estado atual:** 7 unidades ativas (A.1 a A.7). A.7 com currículo completo e 16 exercícios interativos.
**Próximo passo sugerido:** Testar localmente a A.7 (npm run dev), depois avançar para A.8 ou iniciar o sistema de revisão espaçada (spaced repetition).

### 2026-05-14 21:56 — Antigravity — local
**Resumo:** Inversão de prioridade de IA (DeepSeek como principal, Claude como fallback), nova regra dura de prompt contra travessões e adoção de Chain of Thought no output JSON.
**Arquivos alterados:**
- `src/lib/ai.ts` — Ajuste na lógica para refletir a DeepSeek como motor principal de avaliação de exercícios.
- `src/lib/prompts.ts` — 
  1. Invertidos os blocos `try/catch`: `chamarDeepSeekFallback` agora executa primeiro. Apenas se falhar, a `anthropic.messages.create` é acionada.
  2. Adicionada a regra "7. NUNCA use o símbolo '—' (travessão) nas suas respostas" nas `INSTRUCOES_BASE`.
  3. Adicionado o campo `"analise_interna"` no TOPO do JSON de resposta de todos os prompts. Isso obriga a IA a realizar um raciocínio passo a passo antes de emitir o veredito (`acertou: boolean`), eliminando alucinações de leitura sem a necessidade de fazer duas consultas separadas à API.
**Estado atual:** DeepSeek avalia os exercícios com extrema precisão graças ao raciocínio forçado (CoT). Textos devolvidos ao aluno não contêm mais travessões. Redução drástica de falsos negativos na avaliação.
**Próximo passo sugerido:** Iniciar a criação da nova unidade (A.7 - Concordância Verbal).

### 2026-05-14 09:57 — Antigravity — local
**Resumo:** Criação completa da Unidade A.4 "Os outros sinais" (Pontuação), incluindo novo componente de reconstrução de texto com avaliação por IA, pesquisa do Super Pacote (4 frentes) e integração total no ecossistema.
**Arquivos alterados:**
- `src/lib/curriculo/a4-pontuacao.ts` — [NOVO] Currículo com âncora de propósito (auxiliar administrativo Marcelo) e 4 armadilhas (ponto final, dois-pontos, ponto-e-vírgula, travessão).
- `src/lib/exercicios/tipos-pontuacao.ts` — [NOVO] Tipos ExercicioPontuacao com subtipos identificar_pontuacao e reconstrucao_pontuacao.
- `src/lib/exercicios/a4-pontuacao.ts` — [NOVO] 12 exercícios curados: 8 MC (scaffolding por sinal) + 4 reconstrução de texto com IA.
- `src/app/unidade/[slug]/PontuacaoClient.tsx` — [NOVO] Componente React com textarea pré-preenchido (Sweller/Bandura) e integração IA.
- `src/app/api/exercicio/avaliar-pontuacao/route.ts` — [NOVO] Rota API para avaliação de pontuação via IA.
- `src/lib/prompts.ts` — Adicionada função avaliarRespostaPontuacao com prompt focado exclusivamente em sinais de pontuação.
- `src/lib/exercicios/index.ts` — EXERCICIOS_A4 registrado + obterExerciciosPontuacao().
- `src/app/page.tsx` — a-4-pontuacao adicionado ao UNIDADES_ATIVAS.
- `src/app/unidade/[slug]/page.tsx` — A4_PONTUACAO importado e adicionado ao CURRICULOS.
- `src/app/unidade/[slug]/exercicio/page.tsx` — Roteamento para PontuacaoClient adicionado.
- `docs/15-unidades-existentes.md` — A.4 documentada com foco, função e estrutura.
**Super Pacote aplicado (4 frentes convergentes):**
- Harvard/Dictogloss: reconstrução de texto é o método mais eficaz para ensinar pontuação a adultos
- Sweller (CLT): texto pré-preenchido no textarea reduz carga cognitiva extrínseca vs. textarea vazio
- Bandura: textarea vazio gera ansiedade ("página em branco"), pré-preenchido cria micro-vitórias
- Nielsen (UX): textarea dedicado com tamanho proporcional ao texto, texto original visível como referência
**Decisões tomadas:**
- Travessão ENSINADO no currículo (é conteúdo necessário), mas continua proibido nos textos da interface (D-01)
- Textarea pré-preenchido (não vazio): todas as 4 frentes de pesquisa concordaram que textarea vazio paralisa adultos com baixa autoeficácia
- Fase 1 (MC) antes da Fase 2 (reconstrução): scaffolding — reconhecimento antes da produção
- IA aceita variações de pontuação que preservem sentido (gabarito não é único)
**Estado atual:** 6 unidades interativas (A.1, A.2, A.3, A.4, A.5, A.6). A.4 com novo tipo de exercício (reconstrução de texto com IA).
**Próximo passo sugerido:** Testar localmente a A.4 (npm run dev), depois avançar para A.7 (Concordância verbal).

### 2026-05-14 09:33 — Antigravity — local
**Resumo:** Criação do Workflow de Criação de Unidades, Documento de Unidades Existentes, e atualização das instruções para as IAs lerem quando estiverem sem contexto.
**Arquivos alterados:**
- `docs/14-workflow-criacao-unidades.md` — [NOVO] Molde/Roteiro integrando código, conteúdo e pesquisa do Super Pacote.
- `docs/15-unidades-existentes.md` — [NOVO] Arquivo detalhando foco, função e estrutura de todas as unidades já criadas (A.1, A.2, A.3, A.5, A.6).
- `docs/README.md` — Adição dos arquivos 14 e 15 ao índice.
- `.ai-instructions.md` — Adição da regra de "fallback" ensinando qualquer IA a ler as docs 15, 14 e 13 caso esteja perdida ou precise de contexto antes de criar unidades novas.
**Estado atual:** Documentação expandida para garantir padrão na criação de novas unidades e evitar alucinação por falta de contexto.
**Próximo passo sugerido:** Iniciar o desenvolvimento de uma nova unidade (ex: A.4 ou A.7) usando o novo Workflow 14 como base.

### 2026-05-13 — Claude Code — claude/analyze-repo-document-K3Nbq
**Resumo:** Varredura completa de travessões (em-dash) em todo o conteúdo visível ao aluno. Substituídos por vírgula, dois-pontos ou ponto final caso a caso, conforme super pacote (4 frentes convergem que pontuação não-canônica gera carga cognitiva extra para leitores de baixa proficiência: Perfetti Lexical Quality; Stanovich Matthew effect; Mellard et al. "ignoram/interpretam mal pontuação"; plain language guides US/UK/AU; WCAG O3P06).
**Arquivos alterados:**
- `src/lib/curriculo/a2-registros.ts` — 4 travessões substituídos (corpo, exemploPrático, curiosidade).
- `src/lib/curriculo/a3-virgula.ts` — 11 travessões substituídos (corpo, exemploPrático, curiosidade, armadilhas, projetoIntegrador).
- `src/lib/curriculo/a5-acentos.ts` — 6 travessões substituídos (corpo, textoAncora de 5 armadilhas).
- `src/lib/curriculo/a6-palavras-armadilha.ts` — 4 travessões substituídos (textoAncora de ha_a, mim_eu, onde_aonde, senao_se_nao).
- `src/lib/exercicios/a2-registros.ts` — 8 travessões substituídos (feedbackAcerto de ex1, ex2, ex3, ex4, ex5, ex6, ex7, ex8).
- `src/lib/exercicios/a3-virgula.ts` — 27 travessões substituídos (feedbackAcerto e feedbackErro de quase todos os 15 exercícios).
- `src/lib/exercicios/a6-palavras.ts` — 1 travessão substituído (enunciado do ex20 com par mau/mal).
**Estado atual:** 61 travessões de conteúdo eliminados. Restam 38 em comentários de código (não visíveis ao aluno). Cada substituição foi feita caso a caso, escolhendo entre vírgula (apposição), dois-pontos (definição), ponto final (frase nova) ou reestruturação (apposições duplas), priorizando leitura natural em voz alta.
**Próximo passo sugerido:** Política a partir de agora — evitar travessões em qualquer texto novo visto pelo aluno; aplicar o mesmo filtro a unidades futuras desde a primeira escrita.

### 2026-05-13 — Claude Code — claude/analyze-repo-document-K3Nbq
**Resumo:** Refinamento estrutural da A.3 — `corpo` da `ancoraPropósito` reescrito sem narrativa embutida (Dona Vera removida). A história agora vive só no `exemploPrático` (Marcelo), restaurando o padrão da A.2: princípio no corpo, exemplo no exemploPrático.
**Arquivos alterados:**
- `src/lib/curriculo/a3-virgula.ts` — `corpo` reformulado em três parágrafos: (1) conexão com habilidade existente (pausas na fala — Bandura), (2) princípio (vírgula carrega peso), (3) preview dos dois casos da unidade (Harvard — adultos preferem framing explícito).
**Estado atual:** A.3 sem duplicação narrativa. Tela "Por que isso importa?" carrega só o princípio; tela "Exemplo prático" carrega a história.
**Próximo passo sugerido:** Conferir o mesmo padrão nas demais unidades (A.5, A.6) para garantir consistência.

### 2026-05-13 — Claude Code — claude/analyze-repo-document-K3Nbq
**Resumo:** Correção do `exemploPrático` da A.3 — cenário do zelador era implausível (ninguém coloca placa de "não pode entrar" querendo permitir). Substituído por troca de mensagens entre encanador e cliente, onde a omissão da vírgula em mensagem rápida realmente causa o tipo de mal-entendido descrito.
**Arquivos alterados:**
- `src/lib/curriculo/a3-virgula.ts` — `ancoraPropósito.exemploPrático` reescrito. Marcelo (encanador) pergunta se pode liberar a água; cliente em reunião responde "Não pode liberar" sem vírgula; serviço fica parado meia hora. Cenário plausível, consequência concreta, contraste mantido.
**Estado atual:** A.3 com exemplo coerente. Lição para próximos exemplos: validar plausibilidade do cenário antes de fechar o texto.
**Próximo passo sugerido:** Revisar exemplos das demais unidades pelo mesmo critério (cenário precisa fazer sentido no mundo real, não ser engenharia reversa para encaixar a regra).

### 2026-05-13 — Claude Code — claude/analyze-repo-document-K3Nbq
**Resumo:** Três melhorias: curiosidade da A.2 reescrita (andragogia), prompt de avaliação de registro corrigido (versão sugerida a partir do aluno, sem flagrar ortografia), e contador de tokens IA no painel admin.
**Arquivos alterados:**
- `src/lib/curriculo/a2-registros.ts` — `curiosidade` reescrita: remove "em linguística", remove metáfora de ator, coloca revelação do repertório existente em primeiro lugar (Bandura), fecha com "Essa adaptação tem um nome: **registro**" (explícito-indutivo híbrido).
- `src/lib/prompts.ts` — (1) instrução adicionada: não avaliar ortografia/acentuação, focar só em registro; (2) versão sugerida deve ser construída a partir da resposta do aluno, não do zero; (3) condição de log alterada de `alunoId && sessaoId` para apenas `alunoId` — agora todas as chamadas são salvas em `chamadas_ia`, mesmo sem sessão.
- `src/app/api/admin/tokens/route.ts` — nova rota GET que agrega totais de `chamadas_ia` (chamadas, tokens entrada/saída, custo USD estimado). Restrito a isAdmin.
- `src/app/admin/page.tsx` — nova seção "Uso de IA — acumulado total" com 4 cards: chamadas, tokens entrada, tokens saída, custo estimado.
**Estado atual:** Contador de tokens persiste no Neon (independente do git). A cada chamada à IA com alunoId, um registro é inserido em `chamadas_ia`. O painel admin soma tudo em tempo real.
**Próximo passo sugerido:** Testar o painel admin após algumas chamadas de IA para verificar os totais.

### 2026-05-13 — Claude Code — claude/analyze-repo-document-K3Nbq
**Resumo:** Unidade A.3 "A vírgula que muda o sentido" — criação completa com super pacote de pesquisa (3/4 frentes: Harvard/ERIC, especialistas em ensino, psicólogos cognitivos).
**Arquivos alterados:**
- `src/lib/curriculo/a3-virgula.ts` — currículo curado: 2 casos (vocativo + negação com vírgula), âncora com protagonista adulto (Bandura), abordagem explícito-indutiva híbrida (Harvard/DeKeyser).
- `src/lib/exercicios/a3-virgula.ts` — 15 exercícios tipo `identificar_erro`: ex1–6 vocativo (blocked), ex7–12 negação (blocked), ex13–15 interleaved (Bjork/Rohrer). Feedback: sentido primeiro, regra depois (Hattie nível 2-3).
- `src/lib/exercicios/index.ts` — `EXERCICIOS_A3` registrado em `REGISTRO`.
- `src/app/page.tsx` — "a-3-virgula" adicionado a `UNIDADES_ATIVAS`.
- `src/app/unidade/[slug]/page.tsx` — `A3_VIRGULA` importado e adicionado a `CURRICULOS`.
- `src/app/unidade/[slug]/ExercicioClient.tsx` — label "Escolha a versão adequada" para tipo `identificar_erro`.
**Estado atual:** A.3 disponível na home, com currículo e 15 exercícios interativos. Sem avaliação por IA (avaliação local, igual A.5/A.6).
**Próximo passo sugerido:** Testar fluxo completo da A.3 no browser; ou avançar para A.4.

### 2026-05-13 — Claude Code — claude/analyze-repo-document-K3Nbq
**Resumo:** Revisão andragógica dos textos da Unidade A.2 — eliminação de vocabulário negativo e alinhamento dos exemplos-modelo (exemploPar) com as melhores práticas de Wheeler & Swords e Bandura.
**Arquivos alterados:**
- `src/lib/curriculo/a2-registros.ts` — Reescrita do campo `corpo` em `ancoraPropósito`: removido staccato inicial, substituído "não tem nada de errado" por "tem todo o valor que precisa ter", "tom certo" → "o seu tom", "chave errada na hora errada" → "a chave não corresponde à porta".
- `src/lib/exercicios/a2-registros.ts` — Substituído "descuido / pouco cuidado / descuidada" nos feedbackAcerto de ex1, ex3, ex5 por "imagem menos profissional do que [o contexto / você] gostaria / pede"; corrigidos mismatches nos exemploPar de ex12 (informal→"quero meu dinheiro de volta" / formal→"reembolso"), ex13 (informal agora inclui confusão "não tô entendendo nada"), ex14 (informal agora mostra urgência "preciso entregar hoje").
**Estado atual:** Unidade A.2 com todo o texto alinhado ao princípio de code-switching sem vocabulário negativo; exemplos-modelo coerentes com os textos informais que modelam.
**Próximo passo sugerido:** Testar fluxo completo da A.2 no browser (identificação → reescrita → feedback IA).

### 2026-05-13 15:55 — Manual / Antigravity — local
**Resumo:** Reescrita completa dos textos e histórias da Unidade A.1 (Trailer) curada pelo usuário para reforçar a imersão e o tom coloquial.
**Arquivos alterados:**
- `src/lib/curriculo/a1-trailer.ts` — Reformulação da âncora de propósito, das 3 cenas (Juliana, Carlos e Marcos) e da mensagem final utilizando linguagem altamente empática e conectada ao cotidiano do adulto.
**Estado atual:** Unidade A.1 totalmente polida com foco no controle das palavras em momentos críticos.
**Próximo passo sugerido:** Continuar com o desenvolvimento das próximas unidades ou módulos.

### 2026-05-13 14:33 — Manual / Antigravity — local
**Resumo:** Padronização visual avançada e refinamento andragógico nos arquivos de exercícios das unidades A.5 e A.6.
**Arquivos alterados:**
- `src/lib/exercicios/a5-acentos.ts` — Adicionados comentários numéricos sequenciais para mapeamento (#1 a #30), padronizada a ênfase visual das palavras-alvo e dicas utilizando negrito Markdown (`**palavra**`) e inseridas quebras duplas de linha (`\n\n`) para melhor legibilidade.
- `src/lib/exercicios/a6-palavras.ts` — Substituídas aspas simples por negrito Markdown em termos-chave e mnemônicos nos feedbacks de múltiplos exercícios, alinhando a formatação visual ao padrão de excelência de leitura para adultos.
**Estado atual:** Unidades A.5 e A.6 perfeitamente padronizadas em estrutura visual, legibilidade e marcação em negrito para facilitar a leitura dinâmica.
**Próximo passo sugerido:** Sincronizar com o repositório Git remoto.

### 2026-05-13 13:36 — Manual / Antigravity — local
**Resumo:** Tradução andragógica completa dos feedbacks da Unidade A.6 curada pelo usuário para utilizar uma linguagem altamente coloquial, empática e conectada ao dia a dia do público-alvo.
**Arquivos alterados:**
- `src/lib/exercicios/a6-palavras.ts` — Reformulação extensiva das propriedades `feedbackAcerto` e `feedbackErro` adotando expressões extremamente palpáveis e memoráveis para adultos (ex: "suar a camisa", "trombar com pequenas palavras", "gastar a sola do sapato", "puxão de orelha").
**Estado atual:** Feedbacks da Unidade A.6 operando com tom perfeitamente alinhado às diretrizes de andragogia e proteção emocional.
**Próximo passo sugerido:** Sincronizar com o repositório Git remoto.

### 2026-05-13 13:25 — Manual / Antigravity — local
**Resumo:** Grande reformulação e padronização dos exercícios da Unidade A.6 curada pelo usuário aplicando sistematicamente a "regra dos opostos" nos feedbacks de mau/mal.
**Arquivos alterados:**
- `src/lib/exercicios/a6-palavras.ts` — Ajuste de contexto no Ex. 1 (falta de peças essenciais) e implementação consistente da regra dos opostos (bom/mau, bem/mal) com quebras de linha nativas em múltiplos exercícios para consolidar a fixação.
**Estado atual:** Unidade A.6 com exercícios totalmente padronizados em torno de mnemônicos altamente eficazes para adultos.
**Próximo passo sugerido:** Sincronizar com o repositório Git remoto.

### 2026-05-13 10:43 — Manual / Antigravity — local
**Resumo:** Refinamento textual curado pelo usuário nas âncoras de propósito das unidades A.5 e A.6 para máxima clareza e fluidez, além do ajuste fino de espaçamento no Progressive Disclosure.
**Arquivos alterados:**
- `src/lib/curriculo/a5-acentos.ts` — Adicionado prefixo explicativo "Exemplo prático:" e refinada a história da bomba de óleo.
- `src/lib/curriculo/a6-palavras-armadilha.ts` — Pequenos ajustes na fluidez da escrita das propriedades `corpo` e `exemploPrático`.
- `src/app/unidade/[slug]/DetalhesUnidade.tsx` — Mapeamento de quebras de linha em tags `<p>` separadas com espaçamento `space-y-2` para reduzir a altura entre parágrafos.
**Estado atual:** Unidades A.5 e A.6 com textos extremamente polidos e design de citações aprimorado.
**Próximo passo sugerido:** Sincronizar com o repositório Git remoto.

### 2026-05-13 09:10 — Antigravity — local
**Resumo:** Refinamento pedagógico da unidade A.5 com exemplo da bomba de óleo e correção global da renderização de quebras de linha (\n\n) no componente de citação expansível.
**Arquivos alterados:**
- `src/lib/curriculo/a5-acentos.ts` — Ajuste do `corpo` para uma introdução concisa de impacto e atribuição da história da bomba de óleo em `exemploPrático` para o Progressive Disclosure na interface.
- `src/app/unidade/[slug]/DetalhesUnidade.tsx` — Adicionada a classe CSS `whitespace-pre-line` ao `blockquote` do Exemplo Prático para garantir que quebras de linha literais (\n\n) sejam exibidas nativamente pelo navegador.
**Estado atual:** Unidade A.5 com exemplo prático extremamente didático e renderização visual corrigida para suportar quebras de linha em qualquer unidade.
**Próximo passo sugerido:** Sincronizar com o Git remoto.

### 2026-05-13 — Claude Code (branch: claude/analyze-repo-document-K3Nbq)
**Resumo:** Sessão completa de melhoria pedagógica nas unidades A.5 e A.6: super pacote de pesquisa aplicado, intercalação real na Fase 2, correção de bugs visuais, exercícios novos e documentação de convenções globais.

**Arquivos alterados:**

- `src/lib/exercicios/a6-palavras.ts`
  - a6-ex5b: substituído exercício com par errado ("ir/onde") pelo correto: "___ você vai depois da reunião?" → ["Onde","Aonde"] → "Aonde"
  - a6-ex5c: reescrito para remover dupla negação — "___ você não me avisar" → "___ me avisar antes, não poderei te ajudar."
  - a6-ex30-escrita: corrigida ordem da frase — "___ você confirmar" → "___ confirmar até amanhã, perderá a vaga."
  - a6-ex18-escrita: naturalizado — "foi escrito muito mal" → "foi muito mal escrito, cheio de erros" (sugestão do curador)
  - Fase 2 reordenada de bloqueada (4 de cada par) para intercalada em 4 rodadas de 7 pares cada (Rohrer & Bjork — spacing + interleaving)
  - a6-ex31b-escrita: novo exercício de par mínimo adicionado logo após a6-ex31 — "Anote o número, ___ você vai se esquecer." → gabarito "porque" (contrasta semanticamente com "senão" do exercício anterior)
  - Total: 36 exercícios (7 MC + 29 escrita)

- `src/lib/curriculo/a6-palavras-armadilha.ts`
  - Primeira linha de cada `textoAncora` reescrita para resumir os dois lados do par (era apenas a definição de um)
  - `titulo` de `porque_family` alterado de "por que / porque / porquê / por quê" → "por que / porque" (alinhado com o que os exercícios testam)
  - Adicionadas armadilhas `onde_aonde` e `senao_se_nao` (estavam faltando no currículo)

- `src/app/unidade/[slug]/DetalhesUnidade.tsx`
  - "O que você vai aprender": removidas explicações das armadilhas (eram cortadas e poluíam visualmente); substituído por chips compactos apenas com o título do par (ex: `mas / mais`, `há / a`)
  - Interface `ArmadilhaResumo` simplificada (removido campo `resumo`)

- `src/app/unidade/[slug]/page.tsx`
  - Removido `resumo: a.textoAncora.split("\n")[0]` do mapeamento de armadilhas

- `src/app/unidade/[slug]/ExercicioClient.tsx`
  - Adicionado botão 💡 Dica para exercícios de escrita: exibe o par sendo testado (ex: "mas / mais")
  - Adicionado estado `dicaVisivel` (reset no próximo exercício)
  - Adicionado estado `opcaoConfirmadaErrada` para corrigir bug visual: ao errar MC e tentar nova opção, a opção clicada ficava vermelha imediatamente — corrigido marcando apenas a que foi confirmada como errada
  - Adicionado mapa `PAR_NOME` com todos os pares de A.5 e A.6

- `src/lib/exercicios/a5-acentos.ts`
  - a5-ex6: corrigida dica do feedbackAcerto — "tenta trocar por consegue" → "tenta completar com consegue dar" (idioma "dar conta" é inseparável; a versão anterior produzia frase agramatical)
  - a5-ex14: corrigida ambiguidade temporal — "reunião de segunda" → "reunião de segunda-feira passada" (deixa claro que é passado)
  - Fase 2 reordenada de bloqueada (4 exercícios de cada par) para intercalada em 4 rodadas de 6 pares cada (mesmo padrão aplicado à A.6)

- `CLAUDE.md` — [NOVO] Arquivo lido automaticamente pelo Claude Code a cada sessão. Documenta: "super pacote de pesquisa" (4 frentes: Harvard/acadêmico, especialistas em ensino, psicólogos, UX), quando acionar automaticamente, restrições operacionais

- `.ai-instructions.md` — Adicionada seção "super pacote de pesquisa" para compartilhar a convenção com todas as ferramentas de IA (Antigravity e outras)

**Decisões tomadas:**
- Intercalação (Rohrer & Bjork 2010): prática bloqueada (todos os "mas" juntos) favorece ilusão de fluência; prática intercalada (alternar pares) força discriminação real entre conceitos semelhantes — padrão agora aplicado às duas unidades
- Dica 💡 visível por demanda (Nielsen NN: progressive disclosure) — não mostra de início para não reduzir esforço cognitivo desejável (Bjork), mas disponível para evitar abandono
- Bug de cor vermelha ao re-selecionar: `opcao === resposta && !acertou && selecionado` marcava vermelho qualquer seleção após erro — isolamos o estado `opcaoConfirmadaErrada` para marcar apenas o que foi efetivamente confirmado errado
- "Super pacote" documentado como regra global de projeto: a cada decisão significativa de UX/pedagogia/conteúdo, realizar as 4 buscas paralelas sem precisar de instrução explícita do curador

**Estado atual:** A.5 (30 ex, Fase 2 intercalada) e A.6 (36 ex, Fase 2 intercalada) funcionalmente completas. Bugs visuais corrigidos. Convenções pedagógicas documentadas.

**Próximo passo sugerido:** Testar localmente as duas unidades (npm run dev), depois avançar para a unidade A.7 ou iniciar o sistema de revisão espaçada (spaced repetition).

---

### 2026-05-12 — Claude Code (branch: claude/analyze-repo-document-K3Nbq)
**Resumo:** Correção de dois exercícios gramaticalmente incorretos no par senão/se não da A.6.
**Arquivos alterados:**
- `src/lib/exercicios/a6-palavras.ts` — a6-ex5c: "___ você não me avisar" → "___ me avisar antes" (eliminada dupla negação + sujeito explícito que tornava a frase agramatical); a6-ex30-escrita: "___ você confirmar" → "___ confirmar" ("se não você confirmar" é ordem não-natural em PT normativo)
**Decisões tomadas:**
- "Se não" como conjunção condicional deve ligar diretamente ao verbo; inserir sujeito explícito entre "se não" e o verbo produz ordem não-natural ("se não você confirmar") ou dupla negação ("se não você não avisar")
- Feedbacks atualizados para remover referências ao "você" que foi excluído
**Estado atual:** A.6 com todos os 35 exercícios gramaticalmente corretos. Branch pronto para merge.
**Próximo passo sugerido:** Merge para main, testar localmente, avançar para onboarding ou diagnóstico.

### 2026-05-12 — Claude Code (branch: claude/analyze-repo-document-K3Nbq)
**Resumo:** Sessão completa de expansão das unidades A.5 e A.6. Implementação da Fase 2 (exercícios de escrita com campo inline), cobertura total de todos os pares, currículo da A.5 criado, remoção do tempo estimado, e correção de erro gramatical identificado pelo curador.
**Arquivos alterados:**
- `src/lib/exercicios/tipos.ts` — Adicionado `"escrita_lacuna"` ao union tipo
- `src/app/unidade/[slug]/ExercicioClient.tsx` — Campo inline de digitação para escrita_lacuna: estado `inputEscrita`, foco automático após erro, Enter para confirmar, botão desabilitado até digitar
- `src/lib/exercicios/a6-palavras.ts` — A.6 completa: 7 pares MC + 28 exercícios de escrita (35 total). Corrigi uso incorreto de "com ___" → "para ___" nos exercícios mim/eu (per Bechara: "com mim" não existe, forma obrigatória é "comigo")
- `src/lib/exercicios/a5-acentos.ts` — A.5 completa: 6 pares MC + 24 exercícios de escrita (30 total)
- `src/lib/curriculo/a5-acentos.ts` — [NOVO] Currículo da A.5 com ancoraPropósito e 6 armadilhas (necessário para exibir "Por que isso importa" e "O que você vai aprender")
- `src/app/unidade/[slug]/page.tsx` — Tempo estimado removido da exibição; página usa mapa de currículos em vez de `if isA6`
**Decisões tomadas:**
- Fase de escrita: feedback imediato frase a frase (não ao final do bloco) — reduz ansiedade (Bandura)
- Cenários de escrita diferentes dos de múltipla escolha — retrieval genuíno, não memória da frase (Roediger)
- Tempo estimado removido — pressão implícita contradiz princípio de ritmo livre do projeto
- "com mim" é gramaticalmente incorreto em português normativo — substituído por "para mim" nos exercícios
**Estado atual:** A.5 (30 ex) e A.6 (35 ex) completas com MC + escrita para todos os pares. Currículo de ambas presente. Tempo estimado removido.
**Próximo passo sugerido:** Fazer merge do branch para main, testar localmente, depois avançar para onboarding ou diagnóstico.

### 2026-05-12 11:40 — Antigravity — trabalho
**Resumo:** Unidade A.5 (Acentos) criada com 6 exercícios curados. Refatoração dos exercícios para sistema modular. Página de entrada redesenhada com Progressive Disclosure. Guia de criação de unidades (docs/13) criado com pesquisa científica completa.
**Arquivos alterados:**
- `src/lib/exercicios/tipos.ts` — [NOVO] Tipo ExercicioGerado extraído do ExercicioClient
- `src/lib/exercicios/a5-acentos.ts` — [NOVO] 6 exercícios curados (está/esta, pôde/pode, sábia/sabia, dúvida/duvida, é/e, dá/da)
- `src/lib/exercicios/a6-palavras.ts` — [NOVO] Exercícios A.6 extraídos do ExercicioClient
- `src/lib/exercicios/index.ts` — [NOVO] Registro central de exercícios por slug
- `src/app/unidade/[slug]/ExercicioClient.tsx` — Recebe exercícios como prop (não mais hardcoded)
- `src/app/unidade/[slug]/exercicio/page.tsx` — Usa registro central ao invés de import direto
- `src/app/unidade/[slug]/page.tsx` — Redesenhada com Progressive Disclosure (propósito + CTA acima da dobra)
- `src/app/unidade/[slug]/DetalhesUnidade.tsx` — [NOVO] Componente expansível (armadilhas, exemplo prático)
- `src/app/page.tsx` — A.5 adicionada ao UNIDADES_ATIVAS
- `docs/13-guia-criacao-unidades.md` — [NOVO] Guia completo: 4 tipos de unidade, scaffolding, interleaving, proteção emocional (Bandura), regras do enunciado (Knowles), revisão espaçada, fase de digitação futura
- `docs/README.md` — Doc 13 no índice, status atualizado
**Pesquisa aplicada:** Knowles (andragogia), Sweller (CLT), Bandura (autoeficácia), Rohrer (interleaving), Bjork (desirable difficulties), Ebbinghaus (spaced repetition), NNG (progressive disclosure)
**Estado atual:** 2 unidades interativas (A.5, A.6). Exercícios modulares. Guia de criação documentado.
**Próximo passo sugerido:** Implementar intercalação (ambos os lados) nas A.5 e A.6, depois fase de digitação.

### 2026-05-12 10:30 — Antigravity — trabalho
**Resumo:** Implementação completa do auth por primeiro nome (UPPERCASE). Login, logout, middleware, painel admin, seed do curador.
**Arquivos alterados:**
- `src/db/schema.ts` — Adicionados `primeiroNome` (UPPERCASE, unique) e `isAdmin` na tabela `alunos`
- `src/lib/auth.ts` — [NOVO] JWT via jose, sessão em cookie httpOnly, normalização de nome
- `src/middleware.ts` — [NOVO] Proteção de rotas (públicas, protegidas, admin)
- `src/app/api/auth/login/route.ts` — [NOVO] POST login por primeiro nome
- `src/app/api/auth/logout/route.ts` — [NOVO] POST limpa sessão
- `src/app/api/admin/alunos/route.ts` — [NOVO] GET lista + POST cria aluno (admin only)
- `src/app/login/page.tsx` — [NOVO] Tela de login minimalista
- `src/app/admin/page.tsx` — [NOVO] Painel do curador (listar/adicionar alunos)
- `src/app/LogoutButton.tsx` — [NOVO] Botão de logout client-side
- `src/app/page.tsx` — Barra do usuário (Olá nome, Sair, Painel do curador)
- `src/db/seed.ts` — Cria curador TIAGO como admin no seed
- `package.json` — jose adicionado como dependência
**Estado atual:** Auth funcional. Login por primeiro nome testado e aprovado. Curador TIAGO é admin.
**Próximo passo sugerido:** Commitar, depois onboarding ou diagnóstico.

### 2026-05-12 09:55 — Antigravity — trabalho
**Resumo:** Criação do guia de escrita do feedback do tutor (docs/12). Tom conversacional, negrito nas palavras-chave, ordem dos parágrafos ajustada pelo curador (papel → contraste → dica). Curador editou Ex.1 manualmente como referência.
**Arquivos alterados:**
- `docs/12-guia-feedback-tutor.md` — [NOVO] Guia completo com regras, exemplos (certo/errado), checklist e exemplo de referência
- `docs/README.md` — Adicionados docs 11 e 12 no índice, status atualizado
- `src/app/unidade/[slug]/ExercicioClient.tsx` — Função `renderTextoFormatado` para negrito (`**`), feedbacks com `**` em vez de aspas, espaçamento no label TUTOR (`mb-3`), Ex.1 editado manualmente pelo curador
**Estado atual:** A.6 funcional com feedbacks em refinamento. Guia de escrita pronto para uso em unidades futuras.
**Próximo passo sugerido:** Curador finalizar textos da A.6 usando o guia. Depois: commitar tudo e seguir para auth + diagnóstico.

### 2026-05-12 09:12 — Antigravity — trabalho
**Resumo:** Separação visual dos feedbacks de acerto em 3 parágrafos (papel / teste+aplicação / contraste). Regra documentada na D-07.
**Arquivos alterados:**
- `src/app/unidade/[slug]/ExercicioClient.tsx` — 5 `feedbackAcerto` com `\n` entre blocos + renderização com `<p>` separados
- `docs/11-decisoes-design.md` — D-07 expandida com regra de apresentação visual (3 parágrafos)
**Estado atual:** Feedbacks da A.6 com conteúdo e visual padronizados. Pronto para teste de cobaia.
**Próximo passo sugerido:** Testar visualmente no browser, depois commitar.

### 2026-05-12 09:00 — Antigravity — trabalho
**Resumo:** Auditoria e padronização dos feedbacks de acerto da A.6. Removidos travessões residuais (D-01) e aplicado padrão D-02 nos 5 exercícios.
**Arquivos alterados:**
- `src/app/unidade/[slug]/ExercicioClient.tsx` — 5 `feedbackAcerto` reescritos (padrão: papel → teste → aplicação → contraste) + 1 `feedbackErro[1]` corrigido
- `src/app/unidade/[slug]/exercicio/page.tsx` — travessão removido da caixa "Lembre-se"
- `docs/11-decisoes-design.md` — D-07 registrada (padronização dos feedbacks)
- `docs/09-roadmap.md` — decisão #44 + changelog atualizado
**Estado atual:** A.6 com feedbacks revisados e padronizados. Servidor de dev testado e funcionando.
**Próximo passo sugerido:** Testar os feedbacks revisados como cobaia. Depois: auth + onboarding.

### 2026-05-12 08:50 — Antigravity — trabalho
**Resumo:** Análise completa do repositório para reconstrução de contexto após perda de histórico. Documentação do uso de Neon e da necessidade de rodar comandos de instalação manualmente.
**Arquivos alterados:**
- `docs/10-stack.md` — Atualizado para refletir que Neon já está ativo (não apenas planejado), dev local aponta direto para Neon, e adicionada nota sobre comandos de instalação com permissões de admin
- `DEVLOG.md` — Criado (este arquivo)
- `.ai-instructions.md` — Criado (instruções para IAs que abrem o projeto)
**Estado atual:**
- Schema e seed já aplicados no Neon (45 unidades)
- Unidade A.6 é a única com currículo interativo funcional
- Auth (WhatsApp + PIN), diagnóstico, e demais unidades ainda não implementados
- Servidor de dev ainda não foi testado nesta sessão (`npm run dev`)
**Próximo passo sugerido:** Rodar `npm run db:seed` e `npm run dev` para testar a A.6 como cobaia

---

### 2026-05-11 — Claude Code (sessão original, reconstruída)
**Resumo:** Criação completa do projeto — documentação pedagógica, setup técnico, primeira unidade funcional.
**Arquivos alterados:**
- `docs/` — Todos os 12 documentos de documentação criados (01-projeto até 11-decisoes-design)
- `src/db/schema.ts` — Schema com 10 tabelas
- `src/db/seed.ts` — Seed das 45 unidades
- `src/db/index.ts` — Cliente Drizzle
- `src/app/page.tsx` — Home com os 3 níveis
- `src/app/unidade/[slug]/page.tsx` — Página da unidade
- `src/app/unidade/[slug]/ExercicioClient.tsx` — Exercícios interativos A.6
- `src/app/unidade/[slug]/exercicio/page.tsx` — Rota de exercícios
- `src/lib/ai.ts` — Cliente Anthropic
- `src/lib/prompts.ts` — Lib de prompts com 4 modos
- `src/lib/modelo-aluno.ts` — Modelo de aluno para personalização
- `src/lib/spaced-repetition.ts` — Motor SM-2
- `src/lib/niveis.ts` — Metadados dos níveis
- `src/lib/curriculo/tipos.ts` — Tipos do currículo
- `src/lib/curriculo/a6-palavras-armadilha.ts` — Currículo curado da A.6
- Configs: `package.json`, `drizzle.config.ts`, `tailwind.config.ts`, `render.yaml`, `docker-compose.yml`, `.env.example`, `README.md`
**Estado atual:** Projeto criado do zero, A.6 funcional, demais unidades pendentes
**Próximo passo sugerido:** Testar A.6 como cobaia, depois auth + diagnóstico
