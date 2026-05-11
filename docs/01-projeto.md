# 01 — Projeto

## Objetivo

Construir uma plataforma de ensino para adultos que não tiveram oportunidade de completar a educação formal, com foco em retenção real de conhecimento e aplicabilidade na vida prática.

## Público-alvo (perfil real, não hipotético)

Adultos conhecidos pessoalmente pelo criador do projeto. Características:

- Já têm **letramento funcional consolidado** — leem livros, escrevem em redes sociais e grupos de mensagens
- O que falta é **letramento formal e crítico** — interpretação de textos densos, escrita formal, raciocínio argumentativo, leitura crítica de mundo
- Provavelmente trabalham o dia inteiro; estudam no celular em momentos curtos
- Tem (provavelmente) algum nível de trauma escolar — sentir que está sendo "avaliado como na escola" é gatilho de abandono
- Precisam ver **utilidade imediata** no que aprendem ou desistem

**Implicação direta:** o projeto NÃO replica a estrutura escolar tradicional (que falhou com essas pessoas uma vez). Não há "1ª série, 2ª série". A organização é por **competência e nível de domínio**.

## Escopo

- **Projeto pessoal**, não comercial
- **Máximo 5 alunos por mês** na operação real
- **Fase atual:** apenas o criador como cobaia (modo teste)
- **Foco inicial:** módulo de **Letramento** (Linguagens). Outros módulos (matemática, ciências, etc.) ficam pra depois de validar este

## Decisões fundamentais (já tomadas)

### Pedagógicas

- **Modelo misto em 3 camadas:** trilha adaptativa (esqueleto) + micro-lições gamificadas (formato) + projetos do cotidiano (âncora de sentido)
- **Trilha completa A → B → C**, com diagnóstico inicial definindo ponto de entrada
- **Literatura incluída** no Nível C
- **Gêneros textuais diversificados** no Nível B
- **Redação dissertativo-argumentativa (estilo ENCCEJA)** como produção principal do Nível C
- **Princípio "problema antes da regra"** — toda habilidade começa com um problema do mundo real antes de virar conteúdo

### Técnicas

- **IA generativa** (Claude) para correção, feedback, geração de exercícios personalizados, tutor de dúvidas
- **Conteúdo crítico curado pelo criador**; conteúdo derivado gerado pela IA com mitigações de alucinação (ver `04-ia-e-conteudo.md`)
- **Telemetria desde o dia 1**, organizada por sinal e não por volume (ver `05-telemetria.md`)
- **Dois modos:** teste (cobaia) e produção (alunos reais), mesmo motor, sensores diferentes
- **Stack mínima:** SQLite + serviço pequeno; sem over-engineering pra 5 alunos

## Referências curriculares

O currículo NÃO segue o ensino regular. As referências são:

- **Matriz de Referência do ENCCEJA** (INEP) — exame nacional para certificação de competências de jovens e adultos. Organizada por eixos cognitivos e competências, não por séries.
- **Diretrizes da EJA** (Educação de Jovens e Adultos, MEC) — modelo condensado já pensado para o público adulto.
- **Marcos da alfabetização de adultos** (linhagem Paulo Freire) — partir da realidade e vocabulário do aluno.
- **BNCC** apenas como referência de competências de fundo, não como sequência.

## O que este projeto explicitamente NÃO é

- NÃO é uma cópia de Khan Academy, Duolingo ou plataforma escolar
- NÃO é certificação formal (mas pode preparar para o ENCCEJA, que é certificação reconhecida)
- NÃO tenta cobrir "todo o ensino fundamental e médio" — começa pelo gap mais útil e expande conforme valida
- NÃO usa gamificação vazia (XP, streaks) sem ancoragem em aprendizado real
