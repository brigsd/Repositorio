# 11 — Decisões de Design e Linguagem

> Registra as decisões tomadas durante o desenvolvimento do MVP (maio/2026).
> Cada seção tem: **o que foi decidido**, **por que**, e **o que foi alterado no código**.

---

## D-01 · O travessão (—) nos textos pedagógicos

**Data:** 2026-05-11
**Contexto:** Revisão dos textos de `textoAncora` da Unidade A.6.

### Decisão
Remover o travessão (—) dos textos que o aluno vai ler.

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
Reescrever todos os textos de explicação eliminando termos gramaticais formais (adjetivo, advérbio, substantivo, preposição como classificação) e contradições internas. Manter tom de conversa entre colegas ou seja, nem acadêmico nem exageradamente informal.

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

---

## D-06 · Autenticação: convite via WhatsApp + PIN (substituiu magic link)

**Data:** 2026-05-12
**Contexto:** Definição do esquema de autenticação para os 5 alunos do projeto.

### Decisão
Substituir o plano original de magic link por e-mail por um esquema de **convite via WhatsApp + PIN numérico**.

### Fluxo

1. **Curador gera link de convite** personalizado na plataforma
2. **Envia o link pelo WhatsApp** para o aluno (canal que o público já usa diariamente)
3. **Aluno clica no link**, que abre a página de cadastro
4. **Aluno informa e-mail e cria um PIN numérico** (funciona como senha)
5. **Sistema cadastra o aluno no banco** com identificação única (e-mail + PIN)
6. **Nas sessões seguintes**, aluno faz login com e-mail + PIN

### Por que mudou

O magic link parecia simples, mas tinha problemas práticos para esse público:

| Aspecto | Magic link | Convite WhatsApp + PIN |
|---|---|---|
| Canal de entrada | E-mail (muitos não checam regularmente) | WhatsApp (usam todo dia) |
| Dependência de e-mail | Total (se não chega, não entra) | Só no cadastro inicial |
| Experiência de login | Ir no e-mail → achar o link → clicar → voltar | Abrir app → e-mail + PIN → entrar |
| Risco de não funcionar | Alto (spam, caixa mal configurada, demora) | Baixo (PIN está na memória do aluno) |
| Cadastro de novos alunos | Automático mas sem controle | Controlado pelo curador (por convite) |
| Identificação individual | Sim | Sim (e-mail + PIN no banco) |

**Vantagem extra:** o convite controlado evita cadastro indesejado. Só entra quem o curador convidou.

### Arquivos a alterar (implementação pendente)
- `src/db/schema.ts` — adicionar campo de PIN (hash) na tabela `alunos`; criar tabela `convites`
- `src/app/(auth)/` — páginas de convite, cadastro e login
- `docs/10-stack.md` — tabela de stack atualizada ✅
- `docs/09-roadmap.md` — decisão e changelog atualizados ✅

---

## D-07 · Padronização da estrutura dos feedbacks de acerto

**Data:** 2026-05-12
**Contexto:** Auditoria dos textos de feedback da Unidade A.6 durante teste de cobaia.

### Problemas detectados

1. **Travessões (—) em 6 lugares** — violação de D-01 que havia passado despercebida nos feedbacks (estava corrigido apenas nos `textoAncora`)
2. **Ex.1 (mas/mais) não usava o teste prático** — explicava com "direções opostas" e "pressão contrária" (abstrato), em vez do teste "troca por porém" definido no `textoAncora`
3. **Textos não seguiam o padrão de 4 passos da D-02** — eram parágrafos corridos sem estrutura clara

### Decisão

Padronizar todos os 5 `feedbackAcerto` no formato de 4 frases curtas que seguem o padrão D-02:

1. **Papel da palavra** em linguagem cotidiana (o que ela faz)
2. **Teste prático** com palavra conhecida ("troca por X")
3. **Teste aplicado** à frase do exercício ("ficou natural? então é Y")
4. **Contraste** curto com a outra opção ("o Z seria para...")

**Antes (Ex.1):**
> "Mas" é o certo aqui porque as duas partes da frase puxam em direções opostas: você quer terminar o serviço, e o cliente esperando cria uma pressão contrária. Toda vez que uma ideia vai contra a outra, é "mas". Se fosse quantidade ou intensidade, aí seria "mais".

**Depois (Ex.1):**
> "Mas" liga duas ideias que se opõem. O teste: troca por "porém". "Quero terminar o serviço hoje, porém o cliente está esperando." Ficou natural? Então é "mas". O "mais" seria para quantidade, como em "preciso de mais tempo".

### Arquivos alterados
- `src/app/unidade/[slug]/ExercicioClient.tsx` — 5 `feedbackAcerto` reescritos + 1 `feedbackErro[1]` corrigido (travessão removido)
- `src/app/unidade/[slug]/exercicio/page.tsx` — travessão removido da caixa "Lembre-se"
