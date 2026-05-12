# 11 — Decisões de Design e Linguagem

> Registra as decisões tomadas durante o desenvolvimento do MVP (maio/2026).
> Cada seção tem: **o que foi decidido**, **por que**, e **o que foi alterado no código**.

---

## D-01 · O travessão (—) nos textos pedagógicos

**Data:** 2026-05-11
**Contexto:** Revisão dos textos de `textoAncora` da Unidade A.6.

### Decisão
Remover o travessão (—) dos textos que o aluno vai ler. Mantê-lo apenas em comentários de código (invisíveis ao aluno).

### Por que
O travessão é pontuação válida em português — Chicago Style e Merriam-Webster o documentam como ferramenta para ênfase, pausas e inserção de informação. **Mas** a pesquisa confirma que é chamado de "the ChatGPT dash": LLMs o usam com frequência desproporcional, tornando-o um marcador visível de texto gerado por máquina.

Para o nosso público (letramento básico), o travessão cria dois problemas práticos:
1. Quebra o ritmo de leitura de quem ainda lê com mais esforço
2. Sinaliza origem artificial do texto, o que pode reduzir a confiança

**Regra adotada:** máximo 0 travessões nos textos que o aluno lê. Substituir por parênteses, ponto final ou frase nova.

### Arquivos alterados
- `src/lib/curriculo/a6-palavras-armadilha.ts` — âncora de propósito e todos os `textoAncora`

---

## D-02 · Linguagem dos textos pedagógicos

**Data:** 2026-05-11
**Contexto:** Revisão do tom e vocabulário dos `textoAncora` da Unidade A.6.

### Decisão
Reescrever todos os textos de explicação eliminando termos gramaticais formais (adjetivo, advérbio, substantivo, preposição como classificação) e contradições internas. Manter tom de conversa entre colegas — nem acadêmico nem exageradamente informal.

### Por que
O público tem letramento funcional consolidado, mas sem letramento formal. Termos como "advérbio" e "qualifica um substantivo" pressupõem familiaridade com metalinguagem gramatical que esse aluno não tem. Usar esses termos cria a sensação de "voltei pra escola" — exatamente o que queremos evitar.

**Padrão adotado para explicações:**
1. Descreve o papel da palavra em linguagem cotidiana ("descreve como algo foi feito")
2. Apresenta teste com palavra conhecida ("tenta trocar por 'ruim'")
3. Mostra o resultado do teste aplicado à frase do exercício
4. Nunca abre exceção dentro da regra na mesma tela

**Antes:**
> "Mau" é adjetivo — oposto de "bom". Qualifica um substantivo.

**Depois:**
> "Mau" descreve como uma coisa ou pessoa é. Você pode trocar por "ruim" e o sentido fica igual.

### Arquivos alterados
- `src/lib/curriculo/a6-palavras-armadilha.ts` — todos os `textoAncora` e `ancoraPropósito`

---

## D-03 · Feedback do Tutor: curado fixo vs. chamada à API

**Data:** 2026-05-11
**Contexto:** Decisão sobre a arquitetura do feedback nos exercícios de múltipla escolha.

### Decisão
O feedback nos exercícios fechados (lacuna única, múltipla escolha) é **curado e fixo** — não usa chamada à API da Anthropic. A API fica reservada para exercícios de resposta aberta (projeto integrador, redação livre).

### Por que
Para exercícios com resposta fechada (A ou B), todas as combinações possíveis de erro são conhecidas de antemão. Um feedback curado tem vantagens claras sobre IA generativa nesse caso:

| Aspecto | Feedback curado | API dinâmica |
|---|---|---|
| Velocidade | Instantâneo | 1-3s de latência |
| Consistência | Todo aluno recebe a mesma explicação de qualidade | Varia a cada chamada |
| Controle | Curador define exatamente o que explica | IA pode improvisar |
| Custo | Zero tokens | ~$0,001-0,003 por interação |
| Risco de alucinação | Zero | Presente |

A API ainda faz sentido para: correção de texto livre, resposta a dúvidas digitadas pelo aluno, geração de novos exercícios em escala.

### Estrutura implementada
Cada exercício tem 4 mensagens curadas:

```
feedbackAcerto      → explica o PORQUÊ da resposta certa (sempre exibe quando acerta)
feedbackErro[0]     → pergunta socrática — faz o aluno pensar (1ª tentativa errada)
feedbackErro[1]     → pista com o raciocínio — aponta o caminho (2ª tentativa)
feedbackErro[2]     → explicação direta + contraste com o erro (3ª tentativa)
```

A camada 3 nunca deixa o aluno preso — princípio da pesquisa Harvard/CMU: frustração prolongada destrói motivação em adultos.

### Arquivos alterados
- `src/app/unidade/[slug]/ExercicioClient.tsx` — interface `ExercicioGerado`, array `EXERCICIOS_A6`, função `gerarFeedbackLocal`

---

## D-04 · Onde a API da IA faz sentido neste projeto

**Data:** 2026-05-11
**Contexto:** Delimitar os casos de uso da Anthropic para evitar custo desnecessário e risco de alucinação.

### Decisão
A IA (Anthropic SDK) é chamada **apenas quando a resposta do aluno é imprevisível**:

| Caso de uso | API? | Motivo |
|---|---|---|
| Exercício de lacuna (A ou B) | ❌ Não | Resposta fechada — feedback curado é superior |
| Exercício de identificar erro no texto | ❌ Não | Conjunto de erros conhecido — curado possível |
| Projeto integrador (texto livre) | ✅ Sim | Texto é único — IA avalia com rubrica |
| Dúvida digitada pelo aluno | ✅ Sim | Pergunta imprevisível |
| Geração de novos exercícios (escala) | ✅ Sim | Curador não consegue escrever centenas manualmente |
| Correção de redação (Nível C) | ✅ Sim | Texto livre complexo |

### Arquivos relevantes
- `src/lib/prompts.ts` — funções `avaliarResposta` e `gerarExplicacao` (prontas, aguardando conexão)

---

## D-05 · Enunciado sem travessão nos exercícios

**Data:** 2026-05-11
**Contexto:** Revisão dos enunciados do array `EXERCICIOS_A6`.

### Decisão
Remover travessão dos enunciados dos exercícios.

**Antes:** `"O serviço ficou ___ feito — precisa refazer."`
**Depois:** `"O serviço ficou ___ feito. Precisa refazer."`

Coerência com D-01: o aluno não deve encontrar o travessão em nenhum texto da plataforma nos níveis A e B. No nível C (leitura crítica e análise de gêneros textuais), o travessão pode aparecer como **objeto de estudo**, não como escolha estilística nossa.

### Arquivos alterados
- `src/app/unidade/[slug]/ExercicioClient.tsx` — enunciado do exercício a6-ex4
