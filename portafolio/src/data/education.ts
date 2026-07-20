export interface Education {
  id: string;
  institution: { es: string; en: string };
  degree: { es: string; en: string };
  field?: { es: string; en: string };
  location: { es: string; en: string };
  startDate: string;
  endDate: string;
  current: boolean;
  description: { es: string; en: string };
  meta?: { es: string; en: string };
}

export const education: Education[] = [
  {
    id: "cs-degree",
    institution: {
      es: "Facultad de Matemática y Computación (MATCOM) · Universidad de La Habana",
      en: "Faculty of Mathematics & Computer Science (MATCOM) · University of Havana",
    },
    degree: {
      es: "Lic. en Ciencia de la Computación",
      en: "B.Sc. in Computer Science",
    },
    location: { es: "La Habana, Cuba", en: "Havana, Cuba" },
    startDate: "2023-01",
    endDate: "2026-06",
    current: true,
    description: {
      es: "Formación en Ciencia de la Computación con enfoque en inteligencia artificial, ciencia de datos, sistemas distribuidos y modelación matemática.",
      en: "Computer Science education focused on artificial intelligence, data science, distributed systems and mathematical modeling.",
    },
    meta: { es: "Índice académico: 4.71 / 5.00 · Brigada C411", en: "GPA: 4.71 / 5.00 · Group C411" },
  },
  {
    id: "clinical-trials",
    institution: {
      es: "Centro de Ingeniería Genética y Biotecnología (CIGB) · BioCubaFarma",
      en: "Center for Genetic Engineering & Biotechnology (CIGB) · BioCubaFarma",
    },
    degree: {
      es: "Diplomado en Ensayos Clínicos",
      en: "Postgraduate Diploma in Clinical Trials",
    },
    location: { es: "La Habana, Cuba", en: "Havana, Cuba" },
    startDate: "2025",
    endDate: "2025",
    current: false,
    description: {
      es: "Formación de posgrado especializada en el diseño, conducción, regulación y gestión de datos de ensayos clínicos.",
      en: "Specialized postgraduate training in the design, conduct, regulation and data management of clinical trials.",
    },
  },
  {
    id: "winter-school",
    institution: {
      es: "Universidad de La Habana",
      en: "University of Havana",
    },
    degree: {
      es: "Escuela Internacional de Invierno",
      en: "International Winter School",
    },
    location: { es: "La Habana, Cuba", en: "Havana, Cuba" },
    startDate: "2026",
    endDate: "2026",
    current: false,
    description: {
      es: "Programa intensivo de formación e intercambio científico internacional.",
      en: "Intensive program of international scientific training and exchange.",
    },
  },
];

export const relevantCourses = {
  es: [
    "Diseño y Análisis de Algoritmos", "Sistemas Distribuidos", "Machine Learning",
    "Procesamiento de Grandes Volúmenes de Datos", "Compiladores", "Programación Declarativa",
    "Redes de Computadoras", "Inteligencia Artificial", "Simulación de Eventos Discretos", "Estadística",
  ],
  en: [
    "Design & Analysis of Algorithms", "Distributed Systems", "Machine Learning",
    "Large-Volume Data Processing", "Compilers", "Declarative Programming",
    "Computer Networks", "Artificial Intelligence", "Discrete Event Simulation", "Statistics",
  ],
};
