# 13 — Guia de Criação de Unidades

Manual de padronização para criar novas unidades interativas na plataforma. Define a estrutura de dados, a página de entrada, os tipos de exercício suportados, e as regras pedagógicas que governam cada decisão.

## Referências científicas deste guia

| Campo | Referência | Princípio aplicado |
|-------|------------|-------------------|
| Andragogia | Knowles (6 princípios) | Adulto precisa saber o "porquê", ser autodirecionado, aplicar imediatamente |
| Carga Cognitiva | Sweller (CLT) | Memória de trabalho limitada. Eliminar ruído. Scaffolding progressivo |
| Autoeficácia | Bandura | Micro-vitórias constroem confiança. Exposição ao fracasso destrói motivação |
| Feedback | Harvard HGSE + Roediger/Karpicke | Feedback imediato para tarefas simples. Testing Effect: testar > reler |
| Intercalação | Rohrer, Dedrick & Stencil (2015) | Misturar tópicos é ~43% mais eficaz que agrupar por tipo |
| UX Educacional | Nielsen Norman Group | Progressive disclosure, mobile-first, Hick's Law (reduzir decisões) |
| Retenção | Ebbinghaus + Bjork (desirable difficulties) | Revisão espaçada. Produção > reconhecimento para retenção |

---

## Os 4 tipos de unidade

Analisando as 45 unidades dos 3 níveis, elas se encaixam em 4 categorias:

| Tipo | Exemplo | Exercício | Precisa de IA? |
|------|---------|-----------|----------------|
| **Lacuna** | A.5 Acentos, A.6 Palavras, A.7 Concordância | Escolher entre 2-3 opções | ❌ Não |
| **Identificar/Corrigir** | A.3 Vírgula, A.4 Pontuação, A.8 Concordância nominal | Encontrar erro e corrigir | ❌/⚠️ Depende |
| **Texto livre** | A.2 Registros, A.10 Projeto, B.12-14 Gêneros | Escrever texto avaliado | ✅ Sim |
| **Leitura + Análise** | B.1-4 Anatomia, C.1-4 Análise crítica | Ler e responder | ⚠️ Parcial |

### O que já funciona hoje

O tipo **Lacuna** está 100% implementado (A.5 e A.6). Para adicionar uma unidade de lacuna:

1. Crie o arquivo de exercícios em `src/lib/exercicios/`
2. Registre no `src/lib/exercicios/index.ts`
3. Adicione o slug ao `UNIDADES_ATIVAS` em `src/app/page.tsx`

Pronto. Não precisa mexer em componente nem em layout.

---

## Progressão pedagógica dentro de cada unidade

Cada unidade segue 2 fases, do mais fácil ao mais difícil (**scaffolding**):

### Fase 1 — Múltipla escolha (reconhecimento)

O aluno escolhe entre opções visíveis. É o apoio máximo.

- Tipo: `lacuna_unica`
- Formato: 1 frase + 2-3 botões de opção
- Uma questão por tela (Cognitive Load Theory — uma coisa por vez)

### Fase 2 — Completar digitando (produção) ← FUTURO

O aluno digita a resposta sem ver opções. É o teste real do conhecimento.

- Tipo: `completar_digitando`
- Formato: 4 frases na mesma tela, cada uma com um campo de texto curto
- Mistura ambos os lados de 2 pares diferentes
- Feedback aparece após submeter todas as 4 respostas

**Por que duas fases (Bjork — Desirable Difficulties):**

| Aspecto | Múltipla escolha | Digitação |
|---------|------------------|-----------|
| Demanda cognitiva | Baixa (reconhecer) | Alta (produzir) |
| Retenção a longo prazo | Menor | **Maior** |
| Teste do conhecimento | Parcial — pode acertar por eliminação | **Verdadeiro** — sabe ou não sabe |
| Momento | Primeiro contato com o conceito | Consolidação, depois das escolhas |

**Não é redundância.** Testar o MESMO conceito de formas diferentes (escolher → digitar) ativa caminhos neurais diferentes. É a diferença entre reler (inútil) e se testar (eficaz).

---

## Intercalação de exercícios (Interleaving)

**Regra:** cada par conceitual (ex: mas/mais) deve ser testado nos dois lados, e os exercícios NÃO ficam sequenciais.

### Por quê

Se o aluno só vê exercícios onde "mas" é correto, pode criar atalho mental: "nessa matéria a resposta é sempre mas". Testar os dois lados força discriminação real.

A pesquisa de Rohrer et al. mostra que intercalar tópicos é ~43% mais eficaz que agrupar por tipo.

### Como organizar (exemplo A.6)

| # | Par | Resposta | Princípio |
|---|-----|----------|-----------|
| 1 | mas/mais | **mas** | Começa com o mais comum |
| 2 | há/a | **há** | Troca de par (interleaving) |
| 3 | por que/porque | **por que** | Outro par |
| 4 | mas/mais | **mais** | Volta ao par 1, outro lado |
| 5 | mau/mal | **mal** | Novo par |
| 6 | mim/eu | **mim** | Outro par |
| 7 | há/a | **a** | Volta ao par 2, outro lado |
| 8 | por que/porque | **porque** | Par 3, outro lado |
| 9 | mau/mal | **mau** | Par 5, outro lado |
| 10 | mim/eu | **eu** | Par 6, outro lado |

**O padrão:** primeiro lado → outros pares → segundo lado (com distância mínima de 2 exercícios).

---

## Estrutura de cada exercício de lacuna

```typescript
{
  slug: "a5-ex1",                    // identificador único
  tipo: "lacuna_unica",             // tipo do exercício
  enunciado: "A sala ___ reservada.", // frase com ___
  opcoes: ["está", "esta"],          // 2-3 opções
  gabarito: "está",                  // resposta correta
  armadilhaId: "esta_esta",          // agrupa por conceito
  feedbackAcerto: "...",             // ver docs/12 para formatação
  feedbackErro: ["...", "...", "..."] // 3 camadas progressivas
}
```

---

## Regras da página de entrada da unidade

A página de entrada (`/unidade/[slug]`) segue o princípio de **Progressive Disclosure** (revelação progressiva):

### Camada 1 — Sempre visível (acima da dobra)

| Elemento | Obrigatório? | Fonte |
|----------|-------------|-------|
| Badge (Nível X · Unidade Y) | ✅ Sempre | Banco de dados |
| Título | ✅ Sempre | Banco de dados |
| "Por que isso importa" | ✅ Se tiver currículo | `ancoraPropósito.corpo` |
| **Botão "Começar exercícios →"** | ✅ Se tiver exercícios | Registro central |

**Regra:** o botão de ação NUNCA fica abaixo da dobra. O aluno não deve precisar rolar para começar.

### Camada 2 — Expansível (sob demanda)

| Elemento | Obrigatório? | Fonte |
|----------|-------------|-------|
| Lista de tópicos | ⚠️ Se tiver armadilhas | `curriculo.armadilhas` |
| Exemplo prático | ⚠️ Se tiver | `ancoraPropósito.exemploPrático` |

**Regra:** fica colapsado por padrão. O aluno expande se quiser contexto antes de começar.

### O que NÃO vai na página de entrada

- ❌ Lista de competências ("depois desta unidade você vai conseguir") — redundante com a lista de tópicos
- ❌ Texto longo de explicação — o propósito já cobre isso
- ❌ Múltiplos CTAs — só um botão, sem competir por atenção

---

## Proteção emocional do aluno (Bandura — Autoeficácia)

Adultos com baixa escolaridade carregam vergonha e ansiedade associadas ao fracasso escolar. Cada erro pode reativar esse sentimento.

### Regras obrigatórias

1. A plataforma **NUNCA** usa as palavras "errado", "incorreto" ou "tente novamente"
2. Use: "Quase!", "Pense por outro ângulo", "Vamos ver isso de novo"
3. Após **3 tentativas erradas**, o sistema **SEMPRE** dá a resposta completa — não deixa o aluno preso (isso destrói autoeficácia)
4. Celebração de acerto: o feedback de acerto já é a celebração. Sem confete ou animação exagerada — respeita a maturidade do adulto
5. Nunca mostrar ranking, comparação entre alunos, ou pontuação punitiva

### Status na implementação

O `ExercicioClient.tsx` já implementa as regras 1-4. A regra 3 funciona via o array `feedbackErro` de 3 camadas: após a 3ª tentativa errada, a explicação direta inclui a resposta.

---

## Regras do enunciado (Knowles — Orientação para problemas)

O adulto aprende quando a necessidade é real. Enunciados devem ser situações que o aluno reconhece.

### Obrigatório

- ✅ **SEMPRE** usar contexto de vida real (trabalho, família, burocracia, dia a dia)
- ✅ O aluno deve se ver na situação

### Exemplos

| ✅ Bom | ❌ Ruim |
|--------|--------|
| "O cliente pediu um orçamento ___." | "Complete a frase: ___." |
| "Trabalho aqui ___ cinco anos." | "Qual a opção correta?" |
| "A reunião ___ marcada para amanhã." | "Assinale a alternativa certa:" |
| "Ontem ele não ___ entregar o relatório." | "Conjugue o verbo no pretérito:" |

### Proibido

- ❌ Situações escolares ou acadêmicas ("Na prova...", "O professor...")
- ❌ Contextos infantis
- ❌ Frases soltas sem contexto

---

## Ordem dos exercícios dentro da unidade (CLT — Scaffolding)

### Regra de progressão

1. **Primeiro exercício:** o caso mais comum e intuitivo do conceito (o aluno provavelmente acerta)
2. **Exercícios do meio:** variações, casos menos óbvios, e intercalação com outros pares
3. **Último exercício de múltipla escolha:** o caso mais sutil ou com contexto mais complexo
4. **Fase de digitação (quando implementada):** consolidação final sem apoio visual

### Limites de quantidade

- **Mínimo:** 4 exercícios de múltipla escolha por unidade (menos que isso não consolida)
- **Máximo:** 10 exercícios de múltipla escolha (mais que isso causa fadiga cognitiva)
- **Digitação:** 4 frases por bloco (quantidade fixa)
- **Ideal por unidade:** 8-10 escolhas + 4 digitações = ~12-14 exercícios total

---

## Revisão espaçada

Os exercícios errados voltam automaticamente via spaced repetition (`src/lib/spaced-repetition.ts`). Isso significa que:

- Não precisa criar "exercícios de revisão" separados
- O sistema já cuida da curva do esquecimento (Ebbinghaus)
- O curador deve garantir que **cada exercício funciona isoladamente** — pode aparecer fora de ordem, dias depois da unidade original

---

## Regras do feedback (resumo do docs/12)

Todo feedback segue a estrutura de **3 parágrafos** separados por `\n`:

1. **Papel** — o que a palavra/conceito faz
2. **Contraste** — como é diferente da outra opção
3. **Dica prática** — um teste simples que o aluno pode usar no dia a dia

### Formatação
- `**negrito**` para palavras-chave (renderizado via `renderTextoFormatado`)
- `\n` para separar parágrafos
- Sem aspas duplas em palavras soltas (usar negrito)
- Aspas só para citar frases de exemplo completas
- Sem travessão (`—`) nos níveis A e B

### Tom de voz
- Colega experiente, não professor
- Sem termos gramaticais (evitar "conjunção", "advérbio", "substantivo")
- Frases curtas e diretas

---

## Checklist para criar uma nova unidade

### Conteúdo
- [ ] Exercícios cobrem **ambos os lados** de cada par (mas→certo E mais→certo)
- [ ] Exercícios estão **intercalados** (pares não ficam sequenciais)
- [ ] Ordem segue **scaffolding**: do mais fácil ao mais difícil
- [ ] Enunciados usam **contexto de vida real** (trabalho, família, burocracia)
- [ ] Feedbacks seguem o guia `docs/12-guia-feedback-tutor.md` (3 parágrafos)
- [ ] feedbackErro tem **3 camadas** progressivas (socrático → pista → explicação com resposta)
- [ ] Linguagem **não usa** "errado", "incorreto" ou termos gramaticais

### Técnico
- [ ] Arquivo criado em `src/lib/exercicios/`
- [ ] Registrado no `src/lib/exercicios/index.ts`
- [ ] Slug adicionado ao `UNIDADES_ATIVAS` em `src/app/page.tsx`
- [ ] Currículo (opcional) em `src/lib/curriculo/` se tiver âncora e tópicos
- [ ] Testado manualmente: resolver todos, acertar e errar de propósito

---

## Próximas estruturas a implementar (quando necessário)

### Tipo "Completar digitando" — PRÓXIMO

- 4 frases na mesma tela, campo de texto curto para cada
- Normalização do input: trim, lowercase, ignorar acentos extras
- Tolerância a erros de digitação (distância de Levenshtein ≤ 1)
- Mobile: `autocapitalize="off"`, `autocorrect="off"`
- Feedback individual para cada frase após submeter todas

### Tipo "Identificar/Corrigir" (A.3, A.4, A.7, A.8)
- Mostra um texto com erro(s)
- Aluno clica na palavra errada ou seleciona trecho
- Depois corrige digitando
- Feedback comparando original vs correção

### Tipo "Texto Livre" (A.10, B.12-14, C.10-15)
- Campo de texto para o aluno escrever
- Avaliação via API do Claude com rubrica curada
- Feedback estruturado por critério da rubrica
- Possibilidade de revisão e reenvio

### Tipo "Leitura + Análise" (B.1-4, C.1-4)
- Texto âncora para leitura
- Perguntas de compreensão (múltipla escolha ou resposta curta)
- Algumas perguntas abertas avaliadas por IA

**Não implementar antes de precisar.** Cada tipo novo adiciona complexidade ao componente.
