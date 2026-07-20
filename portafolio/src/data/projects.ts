export type ProjectCategory =
  | "ai"
  | "data"
  | "health"
  | "distributed"
  | "compilers"
  | "simulation"
  | "web"
  | "games"
  | "other";

export interface Project {
  id: string;
  slug: string;
  title: { es: string; en: string };
  summary: { es: string; en: string };
  description: { es: string; en: string };
  technologies: string[];
  category: ProjectCategory;
  visibility: "public" | "private";
  github?: string;
  demo?: string;
  organization?: string;
  featured: boolean;
  year: string;
  status: "completed" | "in-progress";
  language?: string;
  metrics?: { es: string; en: string }[];
}

/* ============================================================
   PRIVATE / PROFESSIONAL PROJECTS
   Reserved work developed at the Finlay Vaccine Institute /
   BioCubaFarma and academic contexts. Shown at a high level,
   without exposing source code.
   ============================================================ */
export const privateProjects: Project[] = [
  {
    id: "finlai",
    slug: "finlai",
    title: { es: "FinlAI", en: "FinlAI" },
    summary: {
      es: "Plataforma de IA para optimizar el desarrollo de vacunas mediante gestión integrada de datos.",
      en: "AI platform to optimize vaccine development through integrated data management.",
    },
    description: {
      es: "Plataforma de inteligencia artificial para la optimización del desarrollo de vacunas en el Instituto Finlay de Vacunas: sistemas multiagente, pipelines RAG y flujos AutoML sobre datos de ensayos clínicos.",
      en: "Artificial intelligence platform for optimizing vaccine development at the Finlay Vaccine Institute: multi-agent systems, RAG pipelines and AutoML flows over clinical trial data.",
    },
    technologies: ["IA", "Multiagentes", "RAG", "AutoML", "LangGraph", "Python"],
    category: "ai",
    visibility: "private",
    organization: "Instituto Finlay de Vacunas · BioCubaFarma",
    featured: true,
    year: "2025",
    status: "in-progress",
  },
  {
    id: "hybrid-modeling",
    slug: "hybrid-modeling",
    title: { es: "Hybrid Modeling", en: "Hybrid Modeling" },
    summary: {
      es: "Modelado epidemiológico que combina ecuaciones diferenciales con aprendizaje automático.",
      en: "Epidemiological modeling combining differential equations with machine learning.",
    },
    description: {
      es: "Sistema para el modelado epidemiológico que combina modelos basados en ecuaciones diferenciales (EDO/SEIR) con aprendizaje automático; aplicado a la transmisión de la leptospirosis y a la evaluación de estrategias de vacunación.",
      en: "System for epidemiological modeling that combines differential-equation models (ODE/SEIR) with machine learning; applied to leptospirosis transmission and the evaluation of vaccination strategies.",
    },
    technologies: ["EDO/SEIR", "Machine Learning", "SciPy", "Epidemiología", "Python"],
    category: "health",
    visibility: "private",
    organization: "Instituto Finlay de Vacunas · BioCubaFarma",
    featured: true,
    year: "2025",
    status: "completed",
    metrics: [{ es: "Distinción «Relevante» en BIOQUIM 2025", en: "«Relevant» distinction at BIOQUIM 2025" }],
  },
  {
    id: "auditsoft",
    slug: "auditsoft",
    title: { es: "AuditSoft", en: "AuditSoft" },
    summary: {
      es: "Software para la auditoría de datos de ensayos clínicos con trazabilidad regulatoria.",
      en: "Software for auditing clinical trial data with regulatory traceability.",
    },
    description: {
      es: "Software para la auditoría de datos de ensayos clínicos, orientado a garantizar la calidad, trazabilidad e integridad de la información en el marco regulatorio del IFV. Presentado en COMPUMAT 2025.",
      en: "Software for auditing clinical trial data, aimed at guaranteeing quality, traceability and integrity of information within the IFV regulatory framework. Presented at COMPUMAT 2025.",
    },
    technologies: ["Auditoría", "Datos clínicos", "Python", "PostgreSQL", "FastAPI"],
    category: "health",
    visibility: "private",
    organization: "Instituto Finlay de Vacunas · BioCubaFarma",
    featured: true,
    year: "2025",
    status: "completed",
    metrics: [{ es: "Presentado en COMPUMAT 2025", en: "Presented at COMPUMAT 2025" }],
  },
  {
    id: "ml-studio",
    slug: "ml-studio",
    title: { es: "ML Studio", en: "ML Studio" },
    summary: {
      es: "Entorno AutoML para predecir mortalidad por IAM con interpretabilidad y validación.",
      en: "AutoML environment to predict AMI mortality with interpretability and validation.",
    },
    description: {
      es: "Entorno de modelado de aprendizaje automático para la predicción de mortalidad intrahospitalaria por infarto agudo de miocardio (IAM) y la optimización inversa de variables clínicas, con interpretabilidad (SHAP) y validación rigurosa.",
      en: "Machine learning modeling environment for predicting in-hospital acute myocardial infarction (AMI) mortality and for inverse optimization of clinical variables, with interpretability (SHAP) and rigorous validation.",
    },
    technologies: ["AutoML", "FLAML", "SHAP", "scikit-learn", "XGBoost", "Python"],
    category: "ai",
    visibility: "private",
    organization: "MINSAP · Investigación clínica",
    featured: true,
    year: "2025",
    status: "completed",
  },
  {
    id: "simmunity",
    slug: "simmunity",
    title: { es: "Simmunity", en: "Simmunity" },
    summary: {
      es: "Simulador del sistema inmune con agentes, EDO y procesos estocásticos, distribuido.",
      en: "Immune-system simulator with agents, ODEs and stochastic processes, distributed.",
    },
    description: {
      es: "Simulador computacional del sistema inmune humano: modelos basados en agentes, ecuaciones diferenciales y procesos estocásticos (Gillespie), con API REST en FastAPI y cómputo distribuido con Celery/Redis.",
      en: "Computational simulator of the human immune system: agent-based models, differential equations and stochastic processes (Gillespie), with a FastAPI REST API and distributed computing via Celery/Redis.",
    },
    technologies: ["ABM (Mesa)", "EDO", "Gillespie", "FastAPI", "Celery", "Redis"],
    category: "simulation",
    visibility: "private",
    organization: "Investigación",
    featured: false,
    year: "2025",
    status: "in-progress",
  },
  {
    id: "clinical-trial-db",
    slug: "clinical-trial-db",
    title: { es: "Clinical Trial DB Design", en: "Clinical Trial DB Design" },
    summary: {
      es: "Base de datos relacional (13+ tablas, 3FN) para el ensayo clínico ISCANI de la vacuna VCN7-T.",
      en: "Relational database (13+ tables, 3NF) for the ISCANI clinical trial of the VCN7-T vaccine.",
    },
    description: {
      es: "Diseño de base de datos relacional (13+ tablas, tercera forma normal) para el ensayo clínico ISCANI de la vacuna VCN7-T: pacientes, aleatorización, eventos adversos y trazabilidad regulatoria.",
      en: "Relational database design (13+ tables, third normal form) for the ISCANI clinical trial of the VCN7-T vaccine: patients, randomization, adverse events and regulatory traceability.",
    },
    technologies: ["PostgreSQL", "Modelado ER", "3FN", "SQL"],
    category: "data",
    visibility: "private",
    organization: "Instituto Finlay de Vacunas · BioCubaFarma",
    featured: false,
    year: "2025",
    status: "completed",
  },
];

/* ============================================================
   PUBLIC PROJECTS — Open-source repositories on GitHub
   ============================================================ */
export const publicProjects: Project[] = [
  {
    id: "climaxtreme",
    slug: "climaxtreme",
    title: { es: "climaXtreme", en: "climaXtreme" },
    summary: {
      es: "Análisis de eventos climáticos extremos sobre 8.6M+ registros con Big Data.",
      en: "Extreme climate event analysis over 8.6M+ records with Big Data.",
    },
    description: {
      es: "Análisis y modelado de eventos climáticos extremos sobre más de 8.6 millones de registros usando Hadoop y PySpark; dashboard interactivo en Streamlit, predicciones con ML y despliegue completo en Docker. Proyecto final de Procesamiento de Grandes Volúmenes de Datos.",
      en: "Analysis and modeling of extreme climate events over 8.6M+ records using Hadoop and PySpark; interactive Streamlit dashboard, ML predictions and full Docker deployment. Final project for Large-Volume Data Processing.",
    },
    technologies: ["Python", "PySpark", "Hadoop/HDFS", "Streamlit", "Docker", "ML"],
    category: "data",
    visibility: "public",
    github: "https://github.com/Pol4720/climaXtreme",
    featured: true,
    year: "2025",
    status: "completed",
    language: "Python",
    metrics: [{ es: "8.6M+ registros procesados", en: "8.6M+ records processed" }],
  },
  {
    id: "hulk-compiler-rs",
    slug: "hulk-compiler-rs",
    title: { es: "HULK Compiler RS", en: "HULK Compiler RS" },
    summary: {
      es: "Compilador completo del lenguaje HULK en Rust: léxico, sintáctico, semántico y GC.",
      en: "Full HULK-language compiler in Rust: lexing, parsing, semantics and GC.",
    },
    description: {
      es: "Compilador completo del lenguaje de programación HULK implementado en Rust: análisis léxico, sintáctico y semántico, y recolección de basura. Diseñado con foco en rendimiento, seguridad y expresividad.",
      en: "Full compiler for the HULK programming language implemented in Rust: lexing, parsing, semantic analysis, and garbage collection. Designed for performance, safety and expressiveness.",
    },
    technologies: ["Rust", "Compiladores", "Lexer", "Parser", "Semántica", "GC"],
    category: "compilers",
    visibility: "public",
    github: "https://github.com/Pol4720/HULK-Compiler-RS",
    featured: true,
    year: "2024",
    status: "completed",
    language: "Rust",
  },
  {
    id: "distrisearch",
    slug: "distrisearch",
    title: { es: "DistriSearch", en: "DistriSearch" },
    summary: {
      es: "Motor de búsqueda distribuido con rastreo, indexación y consultas entre nodos.",
      en: "Distributed search engine with crawling, indexing and cross-node queries.",
    },
    description: {
      es: "Motor de búsqueda con arquitectura distribuida: rastreo (crawling), indexación y procesamiento de consultas distribuido a través de múltiples nodos. Proyecto final de Sistemas Distribuidos.",
      en: "Search engine with a distributed architecture: crawling, indexing and distributed query processing across multiple nodes. Final project for Distributed Systems.",
    },
    technologies: ["Python", "Sistemas Distribuidos", "Crawling", "Concurrencia"],
    category: "distributed",
    visibility: "public",
    github: "https://github.com/Pol4720/DistriSearch",
    featured: true,
    year: "2025",
    status: "completed",
    language: "Python",
  },
  {
    id: "mortality-ami-predictor",
    slug: "mortality-ami-predictor",
    title: { es: "Predictor de Mortalidad por IAM", en: "AMI Mortality Predictor" },
    summary: {
      es: "Modelo de ML para predecir mortalidad por infarto agudo de miocardio.",
      en: "ML model to predict acute myocardial infarction mortality.",
    },
    description: {
      es: "Sistema de predicción basado en Machine Learning que analiza factores de riesgo para predecir la mortalidad en pacientes con infarto agudo de miocardio, con técnicas avanzadas de clasificación e interpretabilidad.",
      en: "Machine-learning prediction system that analyzes risk factors to predict mortality in acute myocardial infarction patients, using advanced classification techniques and interpretability.",
    },
    technologies: ["Python", "scikit-learn", "Pandas", "Jupyter", "ML"],
    category: "ai",
    visibility: "public",
    github: "https://github.com/Pol4720/mortality-ami-predictor",
    featured: true,
    year: "2025",
    status: "completed",
    language: "Jupyter",
  },
  {
    id: "mulas",
    slug: "mulas",
    title: { es: "MULAS — Proyecto Final DAA", en: "MULAS — Final DAA Project" },
    summary: {
      es: "Proyecto final de Diseño y Análisis de Algoritmos.",
      en: "Final project for Design & Analysis of Algorithms.",
    },
    description: {
      es: "Implementación y análisis de algoritmos avanzados como proyecto final de la asignatura Diseño y Análisis de Algoritmos: optimización, estructuras de datos y análisis de complejidad.",
      en: "Implementation and analysis of advanced algorithms as the final project for Design & Analysis of Algorithms: optimization, data structures and complexity analysis.",
    },
    technologies: ["Algoritmos", "Optimización", "Estructuras de Datos"],
    category: "other",
    visibility: "public",
    github: "https://github.com/Pol4720/mulas",
    featured: false,
    year: "2026",
    status: "in-progress",
    language: "HTML",
  },
  {
    id: "hex-game",
    slug: "hex-game",
    title: { es: "HEX Game — Jugador con IA", en: "HEX Game — AI Player" },
    summary: {
      es: "Juego de estrategia HEX con un oponente de inteligencia artificial.",
      en: "HEX strategy game with an artificial-intelligence opponent.",
    },
    description: {
      es: "Implementación del juego de estrategia HEX con un oponente de IA basado en algoritmos de búsqueda en árboles de juego y heurísticas avanzadas.",
      en: "Implementation of the HEX strategy game with an AI opponent based on game-tree search algorithms and advanced heuristics.",
    },
    technologies: ["Python", "IA", "Teoría de Juegos", "Algoritmos"],
    category: "games",
    visibility: "public",
    github: "https://github.com/Pol4720/HEX-Game",
    featured: false,
    year: "2025",
    status: "completed",
    language: "Python",
  },
  {
    id: "bcw-project",
    slug: "bcw-project",
    title: { es: "BCW — Análisis de Cáncer de Mama", en: "BCW — Breast Cancer Analysis" },
    summary: {
      es: "Análisis estadístico del dataset Breast Cancer Wisconsin (Diagnostic).",
      en: "Statistical analysis of the Breast Cancer Wisconsin (Diagnostic) dataset.",
    },
    description: {
      es: "Análisis estadístico completo del dataset Breast Cancer Wisconsin (Diagnostic): visualización de datos, pruebas de hipótesis y modelos predictivos.",
      en: "Complete statistical analysis of the Breast Cancer Wisconsin (Diagnostic) dataset: data visualization, hypothesis testing and predictive models.",
    },
    technologies: ["Python", "Estadística", "Pandas", "Matplotlib", "Seaborn"],
    category: "data",
    visibility: "public",
    github: "https://github.com/Pol4720/BCW-Project",
    featured: false,
    year: "2025",
    status: "completed",
    language: "Python",
  },
  {
    id: "2048-pd",
    slug: "2048-pd-project",
    title: { es: "2048 — Programación Declarativa", en: "2048 — Declarative Programming" },
    summary: {
      es: "El juego 2048 implementado en Haskell con programación funcional pura.",
      en: "The 2048 game implemented in Haskell with pure functional programming.",
    },
    description: {
      es: "Juego 2048 implementado completamente en Haskell, demostrando programación funcional pura, tipos algebraicos y manejo de estado inmutable.",
      en: "The 2048 game fully implemented in Haskell, demonstrating pure functional programming, algebraic types and immutable state management.",
    },
    technologies: ["Haskell", "Programación Funcional"],
    category: "games",
    visibility: "public",
    github: "https://github.com/Pol4720/2048-PD-Project",
    featured: false,
    year: "2025",
    status: "completed",
    language: "Haskell",
  },
  {
    id: "discrete-event-sim",
    slug: "discrete-event-simulation",
    title: { es: "Simulación de Eventos Discretos", en: "Discrete Event Simulation" },
    summary: {
      es: "Modelado y simulación de sistemas complejos por eventos discretos.",
      en: "Modeling and simulation of complex systems via discrete events.",
    },
    description: {
      es: "Sistema de simulación basado en eventos discretos para modelar y analizar el comportamiento de sistemas complejos a lo largo del tiempo.",
      en: "Discrete-event-based simulation system to model and analyze the behavior of complex systems over time.",
    },
    technologies: ["Simulación", "Estadística", "LaTeX"],
    category: "simulation",
    visibility: "public",
    github: "https://github.com/Pol4720/Discrete-Event-Simulation-Project",
    featured: false,
    year: "2025",
    status: "completed",
    language: "TeX",
  },
  {
    id: "tarea-rc",
    slug: "tarea-rc-2024",
    title: { es: "Redes de Computadoras", en: "Computer Networks" },
    summary: {
      es: "Tarea evaluativa de Redes de Computadoras (MATCOM, UH).",
      en: "Computer Networks evaluative assignment (MATCOM, UH).",
    },
    description: {
      es: "Tarea evaluativa de la asignatura Redes de Computadoras en la carrera de Ciencia de la Computación, MATCOM, Universidad de La Habana.",
      en: "Evaluative assignment for the Computer Networks course in the Computer Science degree, MATCOM, University of Havana.",
    },
    technologies: ["Python", "Redes", "Protocolos"],
    category: "distributed",
    visibility: "public",
    github: "https://github.com/Pol4720/Tarea-RC-2024",
    featured: false,
    year: "2024",
    status: "completed",
    language: "Python",
  },
  {
    id: "js-seminar",
    slug: "javascript-seminar",
    title: { es: "Seminario de JavaScript", en: "JavaScript Seminar" },
    summary: {
      es: "Material y documentación de un seminario sobre JavaScript moderno.",
      en: "Material and documentation from a modern JavaScript seminar.",
    },
    description: {
      es: "Material y documentación del seminario sobre JavaScript moderno, con ejemplos y guías.",
      en: "Material and documentation from the modern JavaScript seminar, with examples and guides.",
    },
    technologies: ["JavaScript", "LaTeX"],
    category: "web",
    visibility: "public",
    github: "https://github.com/Pol4720/JavaScript-seminar",
    featured: false,
    year: "2024",
    status: "completed",
    language: "TeX",
  },
];

export const allProjects: Project[] = [...privateProjects, ...publicProjects];

export const getFeaturedProjects = (): Project[] =>
  allProjects.filter((p) => p.featured);

export const getProjectBySlug = (slug: string): Project | undefined =>
  allProjects.find((p) => p.slug === slug);
