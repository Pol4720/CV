export interface Experience {
  id: string;
  role: { es: string; en: string };
  organization: string;
  parent?: string;
  location: { es: string; en: string };
  startDate: string;
  endDate: { es: string; en: string } | null;
  current: boolean;
  description: { es: string; en: string };
  highlights: { es: string[]; en: string[] };
  tags: string[];
}

export const experiences: Experience[] = [
  {
    id: "ifv-consultant",
    role: { es: "Especialista Consultor", en: "Consultant Specialist" },
    organization: "Instituto Finlay de Vacunas (IFV)",
    parent: "BioCubaFarma",
    location: { es: "La Habana, Cuba", en: "Havana, Cuba" },
    startDate: "2025-03",
    endDate: null,
    current: true,
    description: {
      es: "Consultoría en ciencia de datos e inteligencia artificial para el desarrollo de vacunas: modelación epidemiológica, integración y auditoría de datos clínicos, y diseño de modelos predictivos y software de soporte en proyectos del IFV y BioCubaFarma.",
      en: "Data science and artificial intelligence consulting for vaccine development: epidemiological modeling, clinical data integration and auditing, and the design of predictive models and support software across IFV and BioCubaFarma projects.",
    },
    highlights: {
      es: [
        "Diseño de plataformas potenciadas por IA: sistemas multiagente, pipelines RAG y flujos AutoML.",
        "Modelación epidemiológica híbrida (EDO + ML) aplicada al desarrollo de vacunas.",
        "Integración, auditoría y trazabilidad de datos de ensayos clínicos.",
        "Desarrollo de aplicaciones web, móviles y de escritorio de soporte a la investigación.",
      ],
      en: [
        "Design of AI-powered platforms: multi-agent systems, RAG pipelines and AutoML flows.",
        "Hybrid epidemiological modeling (ODE + ML) applied to vaccine development.",
        "Clinical trial data integration, auditing and traceability.",
        "Development of web, mobile and desktop applications supporting research.",
      ],
    },
    tags: ["IA", "AutoML", "RAG", "Epidemiología", "Datos clínicos", "Full-Stack"],
  },
];
