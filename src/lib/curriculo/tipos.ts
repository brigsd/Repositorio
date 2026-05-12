/**
 * curriculo/tipos.ts
 *
 * Tipos compartilhados para o currículo curado das unidades.
 */

export interface PerguntaAfericao {
  slug: string;
  enunciado: string;
  opcoes: string[];
  gabarito: string;
  conceito: string; // agrupa perguntas do mesmo conceito para análise
}

export interface PerguntaRevisao {
  slug: string;
  enunciado: string;
  gabarito: string;
  conceito: string;
}

export interface Armadilha {
  id: string;
  titulo: string;
  textoAncora: string;       // Curado — a IA usa como base, não inventa
  exemplosCertos: string[];
  exemplosErrados: string[];
  tiposErro: string[];       // Lista fechada — reduz alucinação na classificação
}

export interface TipoExercicio {
  tipo: "lacuna_unica" | "identificar_erro" | "reescrever_contexto";
  descricao: string;
  criterios: string[];
}

export interface UnidadeCurriculo {
  slug: string;
  titulo: string;
  nivel: "A" | "B" | "C";
  numero: number;
  duracaoEstimadaMin: number;

  ancoraPropósito: {
    titulo: string;
    corpo: string;
    exemploPrático: string;
  };

  preAfericao: PerguntaAfericao[];
  armadilhas?: Armadilha[];         // Para unidades de gramática
  tiposExercicio: TipoExercicio[];
  projetoIntegrador: {
    enunciado: string;
    rubrica: string[];
  };
  posAfericao: PerguntaAfericao[];
  perguntasRevisao: PerguntaRevisao[];
}
