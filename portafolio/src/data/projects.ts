export interface Project {
  id: string;
  slug: string;
  title: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  longDescription?: {
    es: string;
    en: string;
  };
  image?: string;
  technologies: string[];
  category: 'ai' | 'distributed' | 'compilers' | 'data' | 'games' | 'other';
  github: string;
  demo?: string;
  featured: boolean;
  date: string;
  status: 'completed' | 'in-progress';
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'mulas',
    title: {
      es: 'MULAS - Proyecto Final DAA',
      en: 'MULAS - Final DAA Project'
    },
    description: {
      es: 'Proyecto final de la asignatura Diseño y Análisis de Algoritmos en la carrera de Ciencia de la Computación.',
      en: 'Final project for the Design and Analysis of Algorithms course in the Computer Science degree.'
    },
    longDescription: {
      es: 'Implementación y análisis de algoritmos avanzados como parte del proyecto final de DAA. Incluye optimización, estructuras de datos complejas y análisis de complejidad computacional.',
      en: 'Implementation and analysis of advanced algorithms as part of the final DAA project. Includes optimization, complex data structures, and computational complexity analysis.'
    },
    technologies: ['Python', 'Algorithms', 'Data Structures', 'Optimization'],
    category: 'other',
    github: 'https://github.com/Pol4720/mulas',
    featured: true,
    date: '2025-12',
    status: 'in-progress'
  },
  {
    id: '2',
    slug: 'climaxtreme',
    title: {
      es: 'climaXtreme - Análisis Climático con Big Data',
      en: 'climaXtreme - Climate Analysis with Big Data'
    },
    description: {
      es: 'Proyecto final del curso de Procesamiento de Grandes Volúmenes de Datos. Análisis climático y modelado de eventos extremos usando Hadoop.',
      en: 'Final project for the Large Volume Data Processing course. Climate analysis and extreme event modeling using Hadoop.'
    },
    longDescription: {
      es: 'Sistema de análisis climático a gran escala que utiliza tecnologías de Big Data como Hadoop para procesar y analizar datos meteorológicos históricos, identificando patrones de eventos climáticos extremos.',
      en: 'Large-scale climate analysis system using Big Data technologies like Hadoop to process and analyze historical weather data, identifying patterns of extreme weather events.'
    },
    technologies: ['Python', 'Hadoop', 'Big Data', 'MapReduce', 'Data Analysis'],
    category: 'data',
    github: 'https://github.com/Pol4720/climaXtreme',
    featured: true,
    date: '2025-12',
    status: 'in-progress'
  },
  {
    id: '3',
    slug: 'distrisearch',
    title: {
      es: 'DistriSearch - Motor de Búsqueda Distribuido',
      en: 'DistriSearch - Distributed Search Engine'
    },
    description: {
      es: 'Proyecto final de la asignatura de Sistemas Distribuidos. Motor de búsqueda con arquitectura distribuida.',
      en: 'Final project for the Distributed Systems course. Search engine with distributed architecture.'
    },
    longDescription: {
      es: 'Motor de búsqueda implementado con una arquitectura distribuida que permite indexar y buscar documentos de manera eficiente a través de múltiples nodos.',
      en: 'Search engine implemented with a distributed architecture that allows efficient indexing and searching of documents across multiple nodes.'
    },
    technologies: ['Python', 'Distributed Systems', 'Networking', 'Concurrency'],
    category: 'distributed',
    github: 'https://github.com/Pol4720/DistriSearch',
    featured: true,
    date: '2025-12',
    status: 'completed'
  },
  {
    id: '4',
    slug: 'mortality-ami-predictor',
    title: {
      es: 'Predictor de Mortalidad por IAM',
      en: 'AMI Mortality Predictor'
    },
    description: {
      es: 'Proyecto del curso de Machine Learning. Modelo predictivo para mortalidad por infarto agudo de miocardio.',
      en: 'Machine Learning course project. Predictive model for acute myocardial infarction mortality.'
    },
    longDescription: {
      es: 'Sistema de predicción basado en Machine Learning que analiza factores de riesgo para predecir la mortalidad en pacientes con infarto agudo de miocardio, utilizando técnicas avanzadas de clasificación.',
      en: 'Machine Learning-based prediction system that analyzes risk factors to predict mortality in patients with acute myocardial infarction, using advanced classification techniques.'
    },
    technologies: ['Python', 'Jupyter Notebook', 'Machine Learning', 'Scikit-learn', 'Pandas'],
    category: 'ai',
    github: 'https://github.com/Pol4720/mortality-ami-predictor',
    featured: true,
    date: '2025-12',
    status: 'completed'
  },
  {
    id: '5',
    slug: 'hulk-compiler-rs',
    title: {
      es: 'HULK Compiler RS',
      en: 'HULK Compiler RS'
    },
    description: {
      es: 'Compilador para el lenguaje HULK escrito en Rust. Incluye lexer, parser, análisis semántico y recolección de basura.',
      en: 'Compiler for the HULK programming language written in Rust. Features lexing, parsing, semantic analysis, and garbage collection.'
    },
    longDescription: {
      es: 'Compilador completo para el lenguaje de programación HULK implementado en Rust. Diseñado para rendimiento, seguridad y expresividad. Incluye todas las fases de compilación.',
      en: 'Full compiler for the HULK programming language implemented in Rust. Designed for performance, safety, and expressiveness. Includes all compilation phases.'
    },
    technologies: ['Rust', 'Compilers', 'Lexer', 'Parser', 'Semantic Analysis', 'GC'],
    category: 'compilers',
    github: 'https://github.com/Pol4720/HULK-Compiler-RS',
    featured: true,
    date: '2024-07',
    status: 'completed'
  },
  {
    id: '6',
    slug: 'bcw-project',
    title: {
      es: 'BCW Project - Análisis de Cáncer de Mama',
      en: 'BCW Project - Breast Cancer Analysis'
    },
    description: {
      es: 'Análisis estadístico de la base de datos Breast Cancer Wisconsin (Diagnostic).',
      en: 'Statistical analysis of the Breast Cancer Wisconsin (Diagnostic) database.'
    },
    longDescription: {
      es: 'Proyecto de análisis estadístico completo sobre el dataset de cáncer de mama de Wisconsin, incluyendo visualización de datos, pruebas de hipótesis y modelos predictivos.',
      en: 'Complete statistical analysis project on the Wisconsin breast cancer dataset, including data visualization, hypothesis testing, and predictive models.'
    },
    technologies: ['Python', 'Statistics', 'Pandas', 'Matplotlib', 'Seaborn'],
    category: 'data',
    github: 'https://github.com/Pol4720/BCW-Project',
    featured: false,
    date: '2025-02',
    status: 'completed'
  },
  {
    id: '7',
    slug: 'hex-game',
    title: {
      es: 'HEX Game - Juego con IA',
      en: 'HEX Game - AI Player'
    },
    description: {
      es: 'Implementación del juego HEX con un jugador de inteligencia artificial.',
      en: 'Implementation of the HEX game with an artificial intelligence player.'
    },
    longDescription: {
      es: 'Juego de estrategia HEX implementado con un oponente de IA que utiliza algoritmos de búsqueda en árboles de juego y heurísticas avanzadas.',
      en: 'HEX strategy game implemented with an AI opponent using game tree search algorithms and advanced heuristics.'
    },
    technologies: ['Python', 'AI', 'Game Theory', 'Algorithms'],
    category: 'games',
    github: 'https://github.com/Pol4720/HEX-Game',
    featured: false,
    date: '2025-04',
    status: 'completed'
  },
  {
    id: '8',
    slug: 'discrete-event-simulation',
    title: {
      es: 'Simulación de Eventos Discretos',
      en: 'Discrete Event Simulation'
    },
    description: {
      es: 'Proyecto de simulación de eventos discretos para modelar sistemas complejos.',
      en: 'Discrete event simulation project to model complex systems.'
    },
    longDescription: {
      es: 'Sistema de simulación basado en eventos discretos que permite modelar y analizar el comportamiento de sistemas complejos a lo largo del tiempo.',
      en: 'Discrete event-based simulation system that allows modeling and analyzing the behavior of complex systems over time.'
    },
    technologies: ['TeX', 'LaTeX', 'Simulation', 'Statistics'],
    category: 'other',
    github: 'https://github.com/Pol4720/Discrete-Event-Simulation-Project',
    featured: false,
    date: '2025-04',
    status: 'completed'
  },
  {
    id: '9',
    slug: 'javascript-seminar',
    title: {
      es: 'Seminario de JavaScript',
      en: 'JavaScript Seminar'
    },
    description: {
      es: 'Material y documentación del seminario sobre JavaScript moderno.',
      en: 'Material and documentation from the modern JavaScript seminar.'
    },
    technologies: ['TeX', 'LaTeX', 'JavaScript'],
    category: 'other',
    github: 'https://github.com/Pol4720/JavaScript-seminar',
    featured: false,
    date: '2024-05',
    status: 'completed'
  },
  {
    id: '10',
    slug: '2048-pd-project',
    title: {
      es: '2048 - Proyecto de Programación Declarativa',
      en: '2048 - Declarative Programming Project'
    },
    description: {
      es: 'Implementación del juego 2048 en Haskell para el curso de Programación Declarativa.',
      en: 'Implementation of the 2048 game in Haskell for the Declarative Programming course.'
    },
    longDescription: {
      es: 'Juego 2048 implementado completamente en Haskell, demostrando el uso de programación funcional pura, tipos algebraicos y manejo de estado inmutable.',
      en: 'Game 2048 fully implemented in Haskell, demonstrating the use of pure functional programming, algebraic types, and immutable state management.'
    },
    technologies: ['Haskell', 'Functional Programming', 'Game Development'],
    category: 'games',
    github: 'https://github.com/Pol4720/2048-PD-Project',
    featured: false,
    date: '2025-02',
    status: 'completed'
  },
  {
    id: '11',
    slug: 'tarea-rc-2024',
    title: {
      es: 'Tarea de Redes de Computadoras',
      en: 'Computer Networks Assignment'
    },
    description: {
      es: 'Tarea evaluativa de la asignatura Redes de Computadoras en MATCOM, UH.',
      en: 'Evaluative assignment for the Computer Networks course at MATCOM, UH.'
    },
    technologies: ['Python', 'Networking', 'Protocols'],
    category: 'distributed',
    github: 'https://github.com/Pol4720/Tarea-RC-2024',
    featured: false,
    date: '2024-12',
    status: 'completed'
  },
  {
    id: '12',
    slug: 'tour-guide-cuba',
    title: {
      es: 'Tour Guide Cuba - Guía Turística Inteligente',
      en: 'Tour Guide Cuba - Smart Tourist Guide'
    },
    description: {
      es: 'Guía turística inteligente para Cuba desarrollada en colaboración.',
      en: 'Smart tourist guide for Cuba developed in collaboration.'
    },
    longDescription: {
      es: 'Sistema de guía turística inteligente que proporciona recomendaciones personalizadas para visitantes de Cuba, utilizando técnicas de IA y procesamiento de lenguaje natural.',
      en: 'Smart tourist guide system that provides personalized recommendations for visitors to Cuba, using AI techniques and natural language processing.'
    },
    technologies: ['Python', 'AI', 'NLP', 'Tourism'],
    category: 'ai',
    github: 'https://github.com/AbrahamRom/tour-guide-cuba',
    featured: false,
    date: '2025',
    status: 'in-progress'
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(p => p.slug === slug);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(p => p.featured);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter(p => p.category === category);
};
