# 15 — Unidades Existentes (Foco, Função e Estrutura)

Este documento serve como um mapa do que já foi implementado na plataforma. Ele descreve o foco pedagógico, a função e a estrutura técnica de cada unidade existente para servir de referência na criação de novas.

## Nível A: Letramento Formal

### A.1 — Trailer (Introdução)
- **Foco:** Imersão e conexão emocional. Introduz o aluno à plataforma e quebra a resistência inicial aos estudos.
- **Função:** Estabelecer o tom coloquial e andragógico. Mostrar que a plataforma entende a vida do adulto trabalhador.
- **Estrutura:** Curto texto narrativo em `src/lib/curriculo/a1-trailer.ts` com cenas da vida real (Juliana, Carlos e Marcos). Não possui exercícios mecânicos, é um *onboarding* emocional com foco no controle de expectativas.

### A.2 — Registros (Code-switching)
- **Foco:** Entender que não existe "certo" ou "errado" absoluto, mas sim adequação ao contexto (Registro Formal vs. Informal).
- **Função:** Ensinar o *code-switching* sem vocabulário punitivo. Valorizar a bagagem do aluno.
- **Estrutura:** Exercícios curados em `src/lib/exercicios/a2-registros.ts` usando avaliação baseada em Inteligência Artificial. O aluno analisa se uma frase é adequada para um grupo de amigos ou para o trabalho, e o prompt da IA foca exclusivamente no registro (ignorando ortografia).

### A.3 — A Vírgula Que Muda o Sentido
- **Foco:** Mostrar o impacto dramático da vírgula no sentido prático das mensagens (Vocativo e Negação com Vírgula).
- **Função:** Quebrar o mito de que "vírgula é pra respirar" e ensinar através de consequências reais (ex: erro com encanador, liberação de acesso).
- **Estrutura:** Exercícios do tipo `identificar_erro`. 15 exercícios no total (Fase 1: vocativo, Fase 2: negação, Fase 3: intercalado/interleaving). O aluno deve escolher qual das opções (com ou sem vírgula) atende ao contexto solicitado.

### A.4 — Os Outros Sinais (Pontuação)
- **Foco:** Ensinar ponto final, dois-pontos, ponto-e-vírgula e travessão como ferramentas de clareza.
- **Função:** Mostrar que pontuação é a "respiração do texto". Sem ela, o leitor se perde. Com ela, cada ideia tem começo, meio e fim.
- **Estrutura:** Abordagem híbrida baseada em pesquisa (Super Pacote 2026-05-14). Fase 1: 8 exercícios de identificação (`identificar_pontuacao`) onde o aluno escolhe a versão bem pontuada. Fase 2: 4 exercícios de reconstrução (`reconstrucao_pontuacao`) onde o texto vem pré-carregado sem pontuação no textarea e o aluno insere os sinais. Avaliação da Fase 2 via IA (aceita variações que preservem o sentido).

### A.5 — Acentos
- **Foco:** Diferenciar palavras que mudam de sentido apenas pelo acento (ex: está/esta, sábia/sabia).
- **Função:** Foco cirúrgico em acentuação que afeta a comunicação no trabalho.
- **Estrutura:** Exercícios do tipo `lacuna_unica` e `escrita_lacuna` (fase 2). O aluno tem acesso à história de "Progressive Disclosure" da bomba de óleo. Feedbacks totalmente padronizados com uso intensivo de negrito e regra de três parágrafos (Papel, Contraste, Dica).

### A.6 — Palavras-Armadilha
- **Foco:** Pares que soam iguais mas se escrevem diferentes (mas/mais, mau/mal, há/a, por que/porque, mim/eu).
- **Função:** Eliminar erros clássicos de e-mail corporativo.
- **Estrutura:** Alta densidade. 36 exercícios misturando múltipla escolha (`lacuna_unica`) e produção/digitação (`escrita_lacuna`). Utiliza intensamente o princípio do *Interleaving* (intercalação de pares) e da "regra dos opostos" nos feedbacks (bom/mau, bem/mal) de forma coloquial ("suar a camisa", "puxão de orelha").
