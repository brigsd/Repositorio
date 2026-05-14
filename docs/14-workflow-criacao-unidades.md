# 14 — Workflow de Criação de Unidades

Este documento estabelece o roteiro padronizado (pipeline) para desenvolver novas unidades na plataforma. Ele garante que toda nova unidade passe pelo crivo metodológico antes de ser finalizada.

## Fluxo de Trabalho (Workflow)

O desenvolvimento de uma nova unidade deve seguir estritamente estas 4 etapas:

### Passo 1: Esqueleto e Implementação Inicial no Código
1. Crie o arquivo de currículo em `src/lib/curriculo/` contendo a `ancoraPropósito` (corpo e exemplo prático) e as `armadilhas`.
2. Crie o arquivo de exercícios em `src/lib/exercicios/` com um esboço inicial dos exercícios (múltipla escolha, identificar erro ou escrita).
3. Conecte a unidade no ecossistema (registre no `src/lib/exercicios/index.ts` e no `UNIDADES_ATIVAS` do `src/app/page.tsx`).

### Passo 2: O "Super Pacote de Pesquisa"
Antes de polir os textos, a IA ou o curador deve acionar o **Super Pacote de Pesquisa** para embasar as decisões. Realize 4 consultas paralelas sobre o tema específico da unidade:
- **Acadêmica (Harvard/ERIC)**: Como adultos retêm essa regra específica?
- **Especialistas em Ensino (Knowles, Sweller, Rohrer, Bjork)**: Como fazer o *scaffolding* e o *interleaving* (intercalação) desse conteúdo?
- **Psicólogos (Bandura, Deci)**: Como abordar o erro sem afetar a autoeficácia? Qual o contexto mais seguro?
- **UX (Nielsen, Baymard)**: Como apresentar a interface para reduzir a carga cognitiva?

### Passo 3: Revisão sob a Ótica da Pesquisa
Cruze o conteúdo criado no Passo 1 com os *insights* obtidos no Passo 2:
1. **Andragogia e Contexto**: O exemplo prático faz sentido no mundo real do adulto (ex: pedreiro, diarista, encanador, auxiliar de escritório)? Se soar "escolar", reescreva.
2. **Carga Cognitiva e UX**: Remova travessões (em-dash), termos gramaticais rebuscados, textos longos ou qualquer pontuação que gere atrito.
3. **Estrutura dos Exercícios**: Aplique *scaffolding* (do óbvio para o complexo) e *interleaving* (misture os conceitos, nunca deixe blocos idênticos sequenciais).
4. **Proteção Emocional (Bandura)**: Garanta que o sistema **nunca** use palavras negativas como "errado" ou "incorreto". O feedback de erro deve guiar com perguntas socráticas.

### Passo 4: Padronização Final do Feedback
Valide se os feedbacks de acerto (na caixa do "Tutor") estão rigorosamente no padrão do `docs/12-guia-feedback-tutor.md`:
- **Parágrafo 1 (Papel)**: O que a palavra faz.
- **Parágrafo 2 (Contraste)**: A diferença para a outra opção.
- **Parágrafo 3 (Dica)**: Um macete prático para o dia a dia.
- *Uso de negrito nas palavras-chave e separação por quebras de linha (`\n\n`).*
