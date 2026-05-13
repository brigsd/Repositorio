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
