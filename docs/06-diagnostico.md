# 06 — Diagnóstico Inicial

## Objetivo

Determinar o ponto de entrada do aluno na trilha (Nível A, B ou C; qual unidade) de forma:

- **Rápida** (~15-20 min)
- **Não-ameaçadora** (sem cara de prova, sem cronômetro visível, sem barra que parece avaliação)
- **Precisa o suficiente** pra evitar tanto "começar onde ele já sabe" quanto "começar onde ele não tem base"
- **Útil pra telemetria** desde o primeiro contato

## Princípios de design

1. **Conversa, não prova.** Tom de chat de boas-vindas, não de avaliação
2. **Múltiplas evidências.** Combina leitura, escrita, análise e autoavaliação — não depende de uma tarefa única
3. **Pular permitido.** Qualquer etapa pode ser pulada se o aluno não se sentir confortável; classificação fica mais conservadora
4. **Reversível.** Classificação é "ponto de partida", não sentença
5. **Encorajador na devolutiva.** Mensagem sempre é "vamos começar daqui", não "você está atrás"

---

## Estrutura — 5 etapas

### Etapa 1 — Aquecimento *(~3 min)*

Conversa de boas-vindas:

> "Antes de começar, queria te conhecer um pouco. Pode me contar:
> - O que você faz hoje (trabalho, rotina)?
> - O que te fez decidir voltar a estudar?
> - Tem algum tipo de coisa que você queria conseguir ler ou escrever que hoje sente dificuldade?"

**O que se mede (de forma passiva, sem o aluno perceber):**
- Registro habitual (informal / formal / misto)
- Fluência (alta / média / baixa)
- Vocabulário disponível
- Erros frequentes espontâneos
- Motivação principal (trabalho, certificação ENCCEJA, autonomia geral, outro)

A IA observa sem "avaliar". Pro aluno é só apresentação.

---

### Etapa 2 — Leitura *(~5 min)*

Mostrar uma **notícia curta** (~15 linhas) sobre algo cotidiano e prático — aumento de tarifa, mudança de regra de benefício, evento local. Texto curado, sem termos técnicos pouco comuns.

Três perguntas, em ordem crescente de profundidade:

1. **Literal:** "Qual é o fato principal que esse texto está contando?"
2. **Inferência simples:** "De que jeito isso pode afetar a vida de uma pessoa comum?"
3. **Inferência difícil:** "Pelo jeito que o texto foi escrito, você diria que quem escreveu acha que essa medida é boa, ruim, ou está tentando ficar neutro? Como você sabe?"

**Classificação observada:**
| Acertos | Sinal |
|---|---|
| 0-1 | Déficit claro de interpretação → começa Nível B |
| 2 (literal + inferência simples) | Fronteira B/C |
| 3 | Provável Nível C |

---

### Etapa 3 — Escrita *(~7 min)*

> "Imagina uma das situações abaixo (escolhe a que faz mais sentido pra você) e escreve a mensagem completa, como se fosse mandar de verdade:
>
> A) E-mail pro seu chefe pedindo conversa sobre aumento de salário
> B) Reclamação a uma empresa por causa de um produto que veio com defeito
> C) Resposta a uma cobrança que você acha injusta de um banco ou empresa"

Texto aberto, esperado entre 100-200 palavras. **Sem tempo limite explícito.**

**O que se mede (rubrica fechada):**

| Critério | Nível associado |
|---|---|
| Registro adequado (formal sem ser estranho) | A |
| Ortografia básica em contextos formais | A |
| Pontuação correta | A |
| Concordância verbal e nominal nos casos óbvios | A |
| Estrutura coerente (abertura, contexto, pedido/argumento, fecho) | B |
| Argumentação minimamente sustentada (não só "porque sim") | B |
| Tom apropriado (firme sem ser ofensivo) | B |

**Classificação observada:**
- Múltiplas falhas em critérios A → **Nível A**, na unidade mais relevante
- A ok, falhas em B → **Nível B**
- Tudo aprovado com naturalidade → potencial Nível C, validar com Etapa 4

---

### Etapa 4 — Análise persuasiva *(~3 min)*

Mostrar duas frases curtas, lado a lado:

> 1. *"Compre agora! Só hoje, últimas unidades, oferta imperdível!"*
> 2. *"Este produto custa R$ 100 e vem com 1 ano de garantia."*

Pergunta: "Olhando essas duas frases, qual delas tem mais 'truque' pra te convencer a comprar? O que você reparou que faz diferença?"

**O que se mede:**
- Reconhecimento de urgência fabricada / escassez como recurso persuasivo
- Distinção entre informação e persuasão

**Classificação:**
- Identifica o recurso com nome ou descrição clara → **Nível C** provável
- Identifica vagamente ("a primeira é mais forte" sem explicar) → fronteira B/C
- Não identifica → ainda no **Nível B**

---

### Etapa 5 — Autoavaliação *(~2 min)*

Três escalas 1-5:
- "Quão confortável você se sente lendo um texto longo (notícia, contrato, manual técnico)?"
- "Quão confortável você se sente escrevendo um e-mail formal?"
- "Quão confortável você se sente defendendo uma opinião por escrito?"

Uma livre:
- "Tem algum tipo de texto que você queria muito conseguir ler ou escrever melhor?"

**Uso:**
- Cruza confiança auto-percebida com competência observada
- **Confiança baixa + competência alta** → ajustar tom, validar mais, encorajar
- **Confiança alta + competência baixa** → ajustar **com cuidado**, sem confrontar, mostrar evidência aos poucos
- Resposta livre alimenta personalização e ancoragem ("vamos te levar até lá")

---

## Lógica de classificação

A IA pontua cada etapa em saída estruturada (JSON). **A decisão final do nível/unidade roda em código, não em prompt** — mais determinístico e auditável.

Tabela de decisão:

| Etapa 2 | Etapa 3 | Etapa 4 | Recomendação |
|---|---|---|---|
| 0-1 acertos | Falhas em A | qualquer | **Nível A**, U2 (registros) |
| 0-1 acertos | A ok | qualquer | **Nível B**, U2 (ideia principal) |
| 2-3 acertos | Falhas em A | qualquer | **Nível A**, U2 (com nota de que B será rápido) |
| 2-3 acertos | A ok, falhas em B | qualquer | **Nível B**, U2 ou U3 conforme padrão |
| 2-3 acertos | A e B ok | Não identifica | **Nível B**, U11+ (parte final, ferramentas e produção) |
| 3 acertos (inclui difícil) | A e B ok | Identifica | **Nível C**, U1 (intencionalidade) |

**Regra de prudência:** em caso de incerteza ou empate entre duas classificações, **começa uma unidade antes** do que parece. Custo de começar fácil = aluno pula rápido. Custo de começar difícil = frustração e abandono. Assimetria é grande.

---

## Output do diagnóstico

### Pra o aluno *(caloroso, encorajador)*

> "Show, já tenho uma boa ideia de por onde começar. Pelo que vi:
>
> **O que você já manda bem:** [2-3 pontos fortes observados, em linguagem específica]
> **O que vamos trabalhar primeiro:** [1-2 pontos a desenvolver, sem julgamento]
>
> Vou te colocar no **[Nível X, Unidade Y]**. Se em algum momento sentir que tá fácil demais, fala — a gente pula. Se travar, fala — a gente desacelera. Bora?"

### Pra a telemetria *(estruturado, JSON)*

```json
{
  "nivel_recomendado": "B",
  "unidade_entrada": 2,
  "pontos_fortes": ["registro_formal_em_email", "ortografia_basica", "pontuacao_geral"],
  "pontos_fracos": ["inferencia_dificil", "argumentacao_sustentada"],
  "confianca_da_classificacao": "alta|media|baixa",
  "observacoes_qualitativas": "Texto livre breve com o que a IA percebeu além das métricas.",
  "registro_habitual": "informal|formal|misto",
  "motivacao_principal": "trabalho|certificacao_ENCCEJA|autonomia|outro",
  "self_assessment": { "leitura": 3, "escrita_formal": 4, "argumentacao": 2 },
  "resposta_livre": "...",
  "respostas_brutas": { /* todas as respostas pra auditoria */ }
}
```

---

## Override pelo aluno

Após a recomendação, o aluno tem três opções:

1. **Aceitar** e começar
2. **Começar mais atrás** ("acho que preciso revisar antes") — sempre permitido sem questionar
3. **Começar mais à frente** ("acho que isso eu já sei") — permitido com **mini-teste extra** de 3-5 perguntas da unidade pedida; se passa, começa lá; se não, volta à recomendação original com explicação curta

Override sempre registrado com motivo (quando informado), pra calibrar o diagnóstico depois.

---

## Re-diagnóstico

Após cada **bloco concluído** (não cada unidade), micro-diagnóstico opcional de 2-3 perguntas pra revalidar progressão. Não obrigatório. Permite ajuste fino sem refazer o diagnóstico completo.

Re-diagnóstico completo só se aluno **pausar por 30+ dias** — quando volta, faz versão curta (~5 min) pra recalibrar.

---

## Divisão curador × IA

**Curador cura uma vez:**
- Texto da Etapa 1 (perguntas de aquecimento)
- 3-5 notícias curadas para Etapa 2 (rotação pra evitar memorização entre alunos)
- 3 cenários da Etapa 3
- Pares de frases da Etapa 4
- Rubrica da Etapa 3 com critérios A e B explícitos
- Tabela de decisão (acima)
- Templates da devolutiva ao aluno

**IA executa:**
- Conduz a conversa da Etapa 1
- Aplica rubrica da Etapa 3 (classificação fechada)
- Avalia respostas das Etapas 2 e 4
- Emite scores estruturados (JSON) por etapa

**Código (não IA) executa:**
- Decisão final do nível/unidade pela tabela
- Cálculo da confiança da classificação
- Geração do JSON consolidado

**IA executa de novo:**
- Renderiza a devolutiva ao aluno usando os templates + dados específicos

---

## Riscos e mitigação

| Risco | Mitigação |
|---|---|
| Aluno trava na Etapa 3 por ansiedade | Permitir pular; classificação fica conservadora (Nível A com flag de baixa confiança); IA não confronta |
| Aluno escreve muito pouco | Não confiar em diagnóstico curto; começar Nível A; ajustar rápido nas primeiras unidades |
| IA classificar mal por viés regional/dialetal | Etapa 1 ancora o registro habitual do aluno; rubrica explicitamente **não** penaliza variação dialetal — só inadequação ao contexto formal |
| Aluno desistir antes do fim do diagnóstico | Total ~15 min, cada etapa rápida; primeira pergunta da Etapa 1 já entrega sensação de acolhimento (não cobrança) |
| Diagnóstico errar e prejudicar engajamento | Override sempre disponível; re-diagnóstico após cada bloco; classificação inicial é "ponto de partida", não destino |
| Aluno mentir na autoavaliação (querer parecer mais ou menos capaz) | Comparar self-assessment com observado; classificação privilegia observado quando há divergência grande |

---

## Pendências de implementação

- [ ] Curar 3-5 notícias para Etapa 2
- [ ] Curar cenários da Etapa 3
- [ ] Curar pares de frases da Etapa 4
- [ ] Escrever templates de devolutiva ao aluno
- [ ] Definir rubrica detalhada da Etapa 3 (mapeamento critério → unidade de entrada)
- [ ] Implementar a lógica de classificação como código determinístico (não prompt)
- [ ] Implementar o override do aluno (com mini-teste pra avanço)
- [ ] Implementar o mecanismo de re-diagnóstico após bloco
