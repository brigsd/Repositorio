/**
 * Metadados dos niveis — fonte da verdade para descricoes e duracoes.
 *
 * Os niveis em si (e as unidades dentro deles) vivem no banco de dados.
 * Aqui ficam apenas os campos descritivos que nao precisam estar em SQL.
 */
export const NIVEIS_INFO = {
  A: {
    titulo: "Da escrita informal à escrita formal",
    descricao:
      "Afia a escrita que você já tem para as situações em que a forma importa: e-mail formal, currículo, contrato.",
    duracaoEstimada: "4 a 5 horas",
  },
  B: {
    titulo: "Interpretação e produção de textos",
    descricao:
      "Constrói o aparato de leitura profunda e escrita intencional em vários gêneros do cotidiano e do trabalho.",
    duracaoEstimada: "10 a 12 horas",
  },
  C: {
    titulo: "Leitura crítica e produção autônoma",
    descricao:
      "Consolida leitura crítica do mundo (intencionalidade, falácias, fake news) e redação dissertativa estilo ENCCEJA.",
    duracaoEstimada: "12 a 15 horas",
  },
} as const;

export type NivelChave = keyof typeof NIVEIS_INFO;
