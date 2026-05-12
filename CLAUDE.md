# CLAUDE.md — Instruções para o Claude Code

Leia o `.ai-instructions.md` para as regras gerais do projeto.
Este arquivo contém adições específicas para o Claude Code.

---

## Primeira coisa a fazer em cada sessão

1. Leia `DEVLOG.md` — é a memória compartilhada entre todas as ferramentas
2. Leia `.ai-instructions.md` — convenções e regras do projeto

---

## "Super pacote de pesquisa"

Quando o usuário (Tiago) pedir o **"super pacote"**, ou quando você julgar que uma decisão é significativa o suficiente para merecer pesquisa validada (decisões de UX, pedagogia, conteúdo, arquitetura de aprendizado), execute **quatro buscas em paralelo** e cruze os resultados:

1. **Pesquisa acadêmica / Harvard**: o que estudos peer-reviewed e instituições de pesquisa (Harvard, MIT, Stanford, NIH/PMC) dizem sobre o assunto
2. **Especialistas em ensino**: andragogia, instrução, design instrucional — Knowles, Sweller, Rohrer, Bjork, Mayer, Bloom
3. **Psicólogos**: cognição, memória, motivação, autoeficácia — Bandura, Ebbinghaus, Roediger, Deci/Ryan (SDT)
4. **Especialistas em UX / interface**: Nielsen Norman Group, Baymard Institute, literatura de design de produto

**Como apresentar o resultado:**
- Não emita opinião própria — apresente **contrapontos validados** por cada frente
- Cite a fonte e o peso dela (peer-reviewed > livro especializado > artigo de referência)
- Inclua links (seção "Sources:" obrigatória)
- Se as quatro frentes convergirem: diga isso explicitamente
- Se houver divergência: mostre o conflito sem resolver arbitrariamente

**Quando acionar automaticamente** (sem o usuário pedir):
- Decisões sobre estrutura pedagógica (ordem de exercícios, tipos de feedback, scaffolding)
- Decisões de UX que afetam o fluxo do aluno (o que mostrar, quando, como)
- Conteúdo gramatical em que há dúvida sobre a norma culta
- Qualquer mudança que afete diretamente a experiência de aprendizado

---

## Restrições operacionais

- **Comandos de instalação** (`npm install`, etc.) → passe para o usuário rodar manualmente (ele usa conta admin)
- **Banco de dados**: Neon (cloud) — não há Postgres local
- **Commits e push**: sempre para o branch de trabalho da sessão (ver DEVLOG)
- **DEVLOG.md**: atualizar SEMPRE ao final de qualquer sessão com alterações

---

## Contexto do projeto

Plataforma de educação para adultos em português brasileiro. Trilha de letramento em 3 níveis (A, B, C), 45 unidades. Stack: Next.js 15 + React 19 + TypeScript + Drizzle ORM + Neon + TailwindCSS.

Usuário/curador: **Tiago Marcondes** (login: TIAGO, isAdmin: true).
