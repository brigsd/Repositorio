# 12 — Guia de Escrita do Feedback do Tutor

> Este documento é a **referência definitiva** para escrever os textos que aparecem na caixa de feedback do tutor.
> Toda IA que gerar conteúdo de exercícios e todo curador que editar manualmente deve seguir este guia.

---

## Onde os textos ficam no código

**Arquivo:** `src/app/unidade/[slug]/ExercicioClient.tsx`

Cada exercício é um objeto no array `EXERCICIOS_A6` (ou equivalente de cada unidade futura) com esta estrutura:

```typescript
{
  slug: "a6-ex1",
  enunciado: "Frase com ___ para o aluno completar.",
  opcoes: ["opção A", "opção B"],
  gabarito: "opção correta",
  armadilhaId: "id_da_armadilha",

  feedbackAcerto: '...',      // ← quando o aluno acerta
  feedbackErro: [
    '...',                     // [0] ← 1º erro: pergunta socrática
    '...',                     // [1] ← 2º erro: pista com raciocínio
    '...',                     // [2] ← 3º erro: explicação direta
  ],
}
```

---

## Marcações de formatação disponíveis

| Marcação | O que faz | Exemplo no código | Resultado na tela |
|----------|-----------|-------------------|-------------------|
| `**palavra**` | Negrito | `**mas**` | **mas** |
| `\n` | Quebra de parágrafo (espaço entre blocos) | `Frase 1.\nFrase 2.` | Dois parágrafos separados |
| `"frase"` | Aspas duplas normais (para frases de exemplo) | `"Quero ir, porém não posso."` | "Quero ir, porém não posso." |

### Quando usar cada formatação

- **Negrito (`**`):** para as **palavras-chave** que estão sendo ensinadas e para as **palavras de teste** (porém, faz, de forma ruim, ele). Nunca para frases inteiras.
- **Aspas (`"`):** para **frases de exemplo** que mostram a palavra em contexto. Sempre frases que o aluno poderia usar no trabalho ou no dia a dia.
- **Quebra de parágrafo (`\n`):** para separar os **3 blocos visuais** do feedback (ver seção abaixo).

---

## Estrutura do feedbackAcerto (3 parágrafos)

Todo feedback de acerto segue **exatamente 3 parágrafos**, separados por `\n`:

### Parágrafo 1 — O que a palavra faz (1 frase)

Descreve o papel da palavra em linguagem do dia a dia. Sem termos gramaticais.

✅ **Certo:**
> **Mas** liga duas ideias que se opõem.

> **Há** indica tempo que já passou.

> **Mal** descreve como algo foi feito.

❌ **Errado:**
> "Mas" é uma conjunção adversativa.

> "Há" é a forma verbal do verbo haver.

> "Mal" é o certo aqui porque está descrevendo como o serviço foi feito — de forma ruim.

### Parágrafo 2 — O contraste com a outra opção (1-2 frases)

Mostra quando usaria a outra opção, para o aluno ter a distinção clara. Começa com "Já o/a..."

✅ **Certo:**
> Já o **mais** é para quantidade, exemplo: "preciso de **mais** tempo".

> Já o **a** indica tempo que ainda vem, como em "vou sair daqui a duas horas".

> Quando você está respondendo ou explicando o motivo, aí usa **porque** junto. Por exemplo: "Não avisei porque esqueci."

❌ **Errado:**
> Se fosse quantidade ou intensidade, aí seria "mais".

> Na resposta, aí usa "porque" junto: "Não avisei porque esqueci."

### Parágrafo 3 — A dica prática para lembrar (1-2 frases)

Apresenta um truque simples que o aluno pode usar sozinho no futuro. Tom de conversa.

✅ **Certo:**
> Uma dica: se você consegue trocar o **mas** por **porém** e a frase continua fazendo sentido, use **mas** e não **mais**.

> Uma dica: tenta trocar por **faz**. "Trabalho nesta oficina faz cinco anos." Soou natural? Então é **há**.

❌ **Errado:**
> O teste: troca por "porém". Ficou natural? Então é "mas".

> A regra é direta: pergunta usa "por que" separado.

**Por que o errado está errado:**
- "O teste:" soa como manual de instruções, não como conversa
- "A regra é direta:" usa a palavra "regra", que remete à escola

---

## Tom de voz — regras detalhadas

### 1. Fale como um colega de trabalho que sabe mais, não como professor

✅ "Uma dica: tenta trocar por **porém**."
❌ "O teste: troca por porém."
❌ "A regra é: perguntas usam por que separado."

### 2. Use "você" e verbos na segunda pessoa

✅ "Se você consegue trocar por **porém** e a frase continua fazendo sentido..."
❌ "Pode-se substituir por porém para verificar..."
❌ "Troca-se porém para testar..."

### 3. Nunca use termos gramaticais formais

✅ "descreve como algo foi feito"
❌ "é um advérbio de modo"

✅ "liga duas ideias que se opõem"
❌ "é uma conjunção adversativa"

✅ "vem depois de palavras como com, para, por"
❌ "aparece após preposições"

### 4. Nunca use "regra", "norma", "correto/incorreto", "errado"

✅ "Soou natural? Então é **há**."
❌ "A forma correta é há."
❌ "A regra é direta."

### 5. Nunca use travessão (—) em textos que o aluno lê

✅ "**Mal** descreve como algo foi feito."
❌ "Mal é o certo porque está descrevendo como o serviço foi feito — de forma ruim."

(Ver decisão D-01 em `docs/11-decisoes-design.md`)

### 6. Frases curtas. Máximo 2 linhas por frase no celular.

O público lê com mais esforço. Frases longas fazem perder o fio. Se uma frase tem mais de 20 palavras, divida em duas.

---

## Estrutura do feedbackErro (3 camadas)

O feedback de erro segue o modelo adaptativo socrático → scaffolding → direta:

### feedbackErro[0] — Pergunta socrática (1º erro)

**Objetivo:** fazer o aluno pensar sem dar a resposta.
**Formato:** 1 pergunta curta e direta.

✅ "A segunda parte da frase vai na mesma direção da primeira, ou contradiz ela?"
✅ "Esse tempo de cinco anos já aconteceu ou ainda vai acontecer?"

❌ "Você errou. Pense novamente."
❌ "Tente de novo."

### feedbackErro[1] — Pista com raciocínio (2º erro)

**Objetivo:** dar uma pista parcial que aponta o caminho sem resolver.
**Formato:** 2-3 frases. Oferece o raciocínio ou o teste que resolve.

✅ "Uma dica: tenta trocar pela palavra **faz**. 'Trabalho nesta oficina faz cinco anos.' Soou natural? Se sim, a palavra certa é **há**, não **a**."

❌ "Há é a resposta correta porque indica tempo passado."

### feedbackErro[2] — Explicação direta (3º erro)

**Objetivo:** não deixar o aluno preso. Dá a resposta com explicação clara.
**Formato:** 2-3 frases. Resposta + por quê + contraste.

✅ "**Há** é a resposta. Sempre que o tempo já começou no passado, use **há**. O **a** ficaria errado porque ele aponta para o futuro."

❌ "A resposta correta é há. Há é uma forma verbal do verbo haver que indica tempo decorrido."

---

## Checklist antes de finalizar um feedback

Use esta checklist para cada texto de feedback antes de commitar:

- [ ] Sem travessão (—)?
- [ ] Sem termos gramaticais formais (advérbio, conjunção, preposição, substantivo)?
- [ ] Sem "regra", "norma", "correto", "incorreto", "errado"?
- [ ] Palavras-chave em **negrito** (não em aspas)?
- [ ] Frases de exemplo em aspas?
- [ ] feedbackAcerto tem exatamente 3 parágrafos separados por `\n`?
- [ ] Parágrafo 1: papel da palavra (1 frase)?
- [ ] Parágrafo 2: dica prática com exemplo aplicado (2-3 frases)?
- [ ] Parágrafo 3: contraste com a outra opção (1 frase)?
- [ ] Tom de conversa entre colegas (não de professor)?
- [ ] Máximo ~20 palavras por frase?

---

## Exemplo completo de referência

```typescript
{
  slug: "a6-ex2",
  tipo: "lacuna_unica",
  enunciado: "Trabalho nesta oficina ___ cinco anos.",
  opcoes: ["há", "a"],
  gabarito: "há",
  armadilhaId: "ha_a",

  feedbackAcerto:
    '**Há** indica tempo que já passou.\n'
    + 'Uma dica: tenta trocar por **faz**. "Trabalho nesta oficina faz cinco anos." Soou natural? Então é **há**.\n'
    + 'Já o **a** indica tempo que ainda vem, como em "vou sair daqui a duas horas".',

  feedbackErro: [
    // [0] Socrático — faz pensar
    "Esse tempo de cinco anos já aconteceu (começou no passado) ou ainda vai acontecer?",

    // [1] Pista — aponta o caminho
    'Uma dica: tenta trocar pela palavra "faz". "Trabalho nesta oficina faz cinco anos." '
    + 'Soou natural? Se sim, a palavra certa é **há**, não **a**. '
    + 'O **a** aparece quando o tempo ainda vai acontecer, tipo "daqui a dois dias".',

    // [2] Direta — não deixa preso
    '**Há** é a resposta. Sempre que o tempo já começou no passado, use **há**. '
    + 'O **a** ficaria errado porque ele aponta para o futuro.',
  ],
}
```
