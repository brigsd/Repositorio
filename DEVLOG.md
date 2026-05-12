# DEVLOG — Registro de Alterações entre Sessões

> **ATENÇÃO — LEIA ISTO PRIMEIRO**
>
> Este arquivo é a **memória compartilhada** entre todas as ferramentas de IA que trabalham neste projeto (Antigravity, Claude Code, ou qualquer outra).
>
> **Regras para IAs que abrem este projeto:**
> 1. **Antes de começar qualquer trabalho**, leia este arquivo inteiro para entender o que mudou desde a última vez
> 2. **Após concluir qualquer alteração**, adicione uma entrada no topo da seção "Entradas" com o formato abaixo
> 3. **Nunca apague entradas antigas** — elas são o histórico
> 4. **Se houver conflito** com algo que outra instância fez, sinalize ao usuário antes de sobrescrever

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
