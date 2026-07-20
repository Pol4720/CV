export interface Award {
  id: string;
  title: { es: string; en: string };
  issuer: { es: string; en: string };
  date: string;
  description?: { es: string; en: string };
  highlight?: boolean;
  icon: "trophy" | "medal" | "star" | "award";
}

export const awards: Award[] = [
  {
    id: "merito-cientifico",
    title: {
      es: "Premio al Mérito Científico",
      en: "Scientific Merit Award",
    },
    issuer: {
      es: "Educación Superior de Cuba",
      en: "Cuban Higher Education",
    },
    date: "2026",
    description: {
      es: "Distinción otorgada por una trayectoria investigativa destacada en Ciencia de la Computación y sus aplicaciones a la salud pública.",
      en: "Distinction awarded for an outstanding research trajectory in Computer Science and its applications to public health.",
    },
    highlight: true,
    icon: "trophy",
  },
  {
    id: "premio-edo",
    title: {
      es: "1er Lugar · Examen de Premio de Ecuaciones Diferenciales Ordinarias",
      en: "1st Place · Ordinary Differential Equations Award Exam",
    },
    issuer: {
      es: "MATCOM, Universidad de La Habana",
      en: "MATCOM, University of Havana",
    },
    date: "2026",
    description: {
      es: "Primer lugar en el examen de premio de la asignatura, reconociendo excelencia en matemática aplicada.",
      en: "First place in the course award exam, recognizing excellence in applied mathematics.",
    },
    highlight: true,
    icon: "medal",
  },
  {
    id: "bioquim-relevante",
    title: {
      es: "Trabajo «Relevante» en BIOQUIM 2025",
      en: "«Relevant» Work Distinction at BIOQUIM 2025",
    },
    issuer: {
      es: "Evento Científico BIOQUIM",
      en: "BIOQUIM Scientific Event",
    },
    date: "2025",
    description: {
      es: "Distinción por el trabajo «Modelado híbrido de la transmisión de la leptospirosis con estrategias de vacunación».",
      en: "Distinction for the work «Hybrid modeling of leptospirosis transmission with vaccination strategies».",
    },
    highlight: false,
    icon: "star",
  },
];
