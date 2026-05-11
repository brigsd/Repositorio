# 04 — Estratégia de IA e Geração de Conteúdo

## Filosofia

A IA generativa **alucina mais quando precisa "lembrar" fatos** e **menos quando precisa raciocinar sobre algo que está na frente dela**. Toda a estratégia de uso parte daí.

Princípio operacional: **conteúdo crítico o curador cura uma vez; a IA gera apenas variações derivadas a partir do material curado.**

## Mapa de risco de alucinação

| Tarefa | Risco | Justificativa |
|---|---|---|
| Corrigir ortografia/acentuação de um texto | Baixíssimo | Padrão de regra; IA atual acerta quase sempre em português |
| Gerar exercício de completar lacuna a partir de modelo | Baixíssimo | Variação dentro de gabarito controlado |
| Fazer perguntas sobre um texto fornecido | Baixo | Texto está no prompt; é interpretação |
| Dar feedback em redação curta com rubrica explícita | Baixo-médio | Pode "inventar" um erro inexistente; mitigável |
| Explicar conceito gramatical | Médio | Pode simplificar demais ou errar caso de borda |
| Gerar texto original pra interpretação | Médio | Pode escrever algo morno ou com fato impreciso embutido |
| Análise literária com contexto histórico | Alto | Datas, autores, atribuição de obras — IA inventa com confiança |
| Estatísticas/dados pra redação argumentativa | Alto | IA inventa números que parecem reais |

## Estratégias de mitigação (todas em uso simultâneo)

### 1. Trabalhar com material, não de memória
Em vez de "gere um texto sobre direitos trabalhistas", fornecer o texto da CLT relevante no prompt. A IA gera exercícios baseados no que está ali.

### 2. Conteúdo crítico curado uma vez
Textos âncora de literatura, dados históricos, estatísticas pra redações argumentativas: **selecionados pelo curador**. A IA depois gera perguntas, exercícios e variações em cima.

### 3. Rubricas explícitas para correção
Em vez de "corrija essa redação", o prompt é "verifique cada um destes 7 critérios e marque atende/não atende, justificando". Tarefa fechada reduz alucinação.

### 4. Listas fechadas de classificação
Erro do aluno é classificado escolhendo de uma **lista pré-definida por unidade** (ex: "confundiu conector adversativo com aditivo"), não com texto livre. Reduz variação inventada.

### 5. Verificação amostral pelo curador
Com 5 alunos, dá pra revisar 10-20% do output da IA periodicamente e calibrar o prompt quando vir desvio. Inviável em escala, viável aqui.

### 6. Modelo certo pra tarefa certa
Tarefas de raciocínio/correção: **Claude Sonnet 4.6**. Tarefas mecânicas: **Claude Haiku 4.5**. Pra 5 alunos, custo de Sonnet em tudo é negligenciável e elimina um vetor de erro.

### 7. Disagreement detector (modo teste apenas)
Em correção de redação, sistema roda duas vezes com prompts levemente diferentes e compara. Se discordar, flagga pra revisão. Caro em produção; valioso na fase de cobaia.

## Divisão de responsabilidades

### Curador cura uma vez

- **Matriz de competências** (baseada em ENCCEJA, BNCC)
- **Sequência de unidades** dentro de cada nível
- **Listas de armadilhas / casos cobertos** por unidade (ortografia, concordância, etc.)
- **Rubricas de avaliação** por unidade
- **Textos âncora** (2-3 por unidade) — escolha curada, copyright respeitado
- **Critérios de avanço** entre unidades

### IA executa todo dia

- **Geração de variações de exercícios** a partir do modelo
- **Contextualização** ao universo do aluno (profissão, interesses)
- **Correção** com base na rubrica
- **Classificação do erro** (lista fechada)
- **Feedback imediato**
- **Tutor de dúvidas** (responde perguntas livres)
- **Detecção de padrão de erro** e sugestão de micro-revisão

## Modelos e custo

### Modelos recomendados

- **Claude Sonnet 4.6** — correção de redação, feedback complexo, geração de exercícios novos, classificação fina de erro
- **Claude Haiku 4.5** — correções mecânicas, tutoria de dúvidas simples, exercícios de lacuna

### Estimativa de custo

**Para 5 alunos ativos no projeto pessoal:** <R$ 20/mês mesmo usando Sonnet em tudo. Custo de IA **não é variável relevante** nesta escala.

### TTS / STT

Por enquanto **fora de escopo** — público-alvo já é alfabetizado. Caso entre depois:
- TTS: pré-gerar áudios das lições principais; não gerar on-the-fly
- STT: Whisper se necessário, em momentos específicos

## Boas práticas de prompt

- **Sempre passar a rubrica/critérios no prompt**, nunca pedir avaliação "geral"
- **Pedir output estruturado** (JSON) quando o resultado vai pra sistema, texto natural quando vai pro aluno
- **Cachear** o contexto pedagógico, rubricas e few-shot examples (prompt caching reduz custo e variação)
- **Temperatura 0** para correção e classificação; **temperatura mais alta** apenas para geração criativa (e mesmo assim moderada)
- **Pedir auto-avaliação de confiança** da IA em tarefas críticas ("estou seguro / estou meio na dúvida") — quando ela mesma sinaliza dúvida, marca pra revisão humana

## Linha vermelha

Conteúdos que a IA **NUNCA** gera sem revisão humana:

- Fatos históricos com data/autor/atribuição
- Estatísticas e dados quantitativos
- Análise de obras literárias específicas
- Argumentos para redação dissertativa (a IA pode ajudar a estruturar, mas dados/fatos vêm de fontes curadas)
