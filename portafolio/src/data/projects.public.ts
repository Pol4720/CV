import type { Project } from "./project-types";
import { img } from "./project-types";


/* ============================================================
   PUBLIC PROJECTS — open-source repositories on GitHub.
   Includes repositories authored solo and team repositories
   where the author is a contributor.
   ============================================================ */
export const publicProjects: Project[] = [
  {
    id: "climaxtreme",
    slug: "climaxtreme",
    title: { es: "climaXtreme", en: "climaXtreme" },
    summary: {
      es: "Análisis de eventos climáticos extremos sobre 8.6M registros con Hadoop y PySpark.",
      en: "Extreme climate event analysis over 8.6M records with Hadoop and PySpark.",
    },
    description: {
      es: "Plataforma de análisis climático a gran escala: procesamiento distribuido de ~8.6 millones de registros de temperatura con PySpark sobre HDFS, dashboard interactivo en Streamlit y despliegue completo en Docker.",
      en: "Large-scale climate analysis platform: distributed processing of ~8.6M temperature records with PySpark over HDFS, interactive Streamlit dashboard and full Docker deployment.",
    },
    overview: [
      {
        es: "climaXtreme procesa el dataset Global Land Temperatures (~8.6 millones de registros) para detectar y caracterizar eventos climáticos extremos. Todo el pipeline corre sobre un clúster HDFS + Spark levantado con Docker Compose, de forma que el entorno completo se reproduce con dos comandos.",
        en: "climaXtreme processes the Global Land Temperatures dataset (~8.6M records) to detect and characterize extreme climate events. The whole pipeline runs on an HDFS + Spark cluster brought up with Docker Compose, so the full environment reproduces with two commands.",
      },
      {
        es: "El preprocesamiento con PySpark genera 11 ficheros Parquet (~150 MB) con agregaciones mensuales, anuales, estacionales y por anomalía, además de análisis por 16 regiones geográficas y 7 continentes.",
        en: "PySpark preprocessing generates 11 Parquet files (~150 MB) with monthly, yearly, seasonal and anomaly aggregations, plus analysis across 16 geographic regions and 7 continents.",
      },
      {
        es: "El análisis exploratorio incluye matrices de correlación de Pearson, once medidas descriptivas por variable y pruebas chi-cuadrado de independencia entre continente, estación y período respecto a la temperatura. Todo ello se consulta desde un dashboard Streamlit con mapas interactivos y heatmaps.",
        en: "The exploratory analysis includes Pearson correlation matrices, eleven descriptive measures per variable, and chi-square independence tests between continent, season and period against temperature. All of it is queried from a Streamlit dashboard with interactive maps and heatmaps.",
      },
    ],
    role: { es: "Autor principal", en: "Lead author" },
    technologies: ["Python", "PySpark", "Hadoop/HDFS", "Streamlit", "Docker", "Parquet"],
    stack: [
      { group: { es: "Big Data", en: "Big Data" }, items: ["Apache Spark (PySpark)", "Hadoop HDFS", "Parquet"] },
      { group: { es: "Análisis", en: "Analysis" }, items: ["Pandas", "NumPy", "SciPy", "Chi-cuadrado", "Correlación de Pearson"] },
      { group: { es: "Visualización", en: "Visualization" }, items: ["Streamlit", "Plotly", "Mapas interactivos"] },
      { group: { es: "Infraestructura", en: "Infrastructure" }, items: ["Docker", "Docker Compose", "pytest"] },
    ],
    features: [
      {
        title: { es: "Procesamiento distribuido", en: "Distributed processing" },
        description: {
          es: "Pipeline PySpark sobre HDFS que transforma 8.6M registros crudos en 11 datasets Parquet listos para consulta.",
          en: "PySpark pipeline over HDFS transforming 8.6M raw records into 11 query-ready Parquet datasets.",
        },
      },
      {
        title: { es: "Detección de eventos extremos", en: "Extreme event detection" },
        description: {
          es: "Cálculo de umbrales de extremos y anomalías respecto a la climatología de largo plazo.",
          en: "Computation of extreme thresholds and anomalies relative to long-term climatology.",
        },
      },
      {
        title: { es: "Dashboard interactivo", en: "Interactive dashboard" },
        description: {
          es: "Interfaz Streamlit con tendencias, heatmaps, análisis estacional, regional y continental sobre mapas.",
          en: "Streamlit interface with trends, heatmaps, and seasonal, regional and continental analysis over maps.",
        },
      },
      {
        title: { es: "Monitorización del clúster", en: "Cluster monitoring" },
        description: {
          es: "Scripts que registran métricas de rendimiento durante los jobs y generan gráficos para informes.",
          en: "Scripts that record performance metrics during jobs and generate charts for reports.",
        },
      },
    ],
    architecture: {
      diagram: `Docker Network (hdfs)
├── namenode:9870      HDFS Web UI
├── namenode:9000      HDFS API
├── datanode           Almacenamiento / Storage
├── processor          PySpark
└── dashboard:8501     Streamlit`,
    },
    gallery: [{ src: img("climaxtreme", "01-logo.webp"), caption: { es: "climaXtreme", en: "climaXtreme" } }],
    team: [
      { login: "Pol4720", commits: 37, isAuthor: true },
      { login: "Eveliz08", commits: 2 },
    ],
    metrics: [
      { es: "8.6M registros procesados", en: "8.6M records processed" },
      { es: "11 datasets Parquet generados", en: "11 Parquet datasets generated" },
    ],
    category: "data",
    visibility: "public",
    github: "https://github.com/Pol4720/climaXtreme",
    course: { es: "Procesamiento de Grandes Volúmenes de Datos", en: "Large-Volume Data Processing" },
    featured: true,
    year: "2025",
    status: "completed",
    language: "Python",
    commits: 37,
  },
  {
    id: "smarttour-cuba",
    slug: "smarttour-cuba",
    title: { es: "SmartTour Cuba", en: "SmartTour Cuba" },
    summary: {
      es: "Guía turística con RAG local, chatbot multilingüe y planificador de rutas con ACO/PSO.",
      en: "Tourist guide with local RAG, multilingual chatbot and ACO/PSO route planner.",
    },
    description: {
      es: "Plataforma de turismo inteligente para Cuba que combina RAG local (FAISS + MiniLM + Ollama), un recomendador basado en NLP y un planificador de itinerarios con metaheurísticas (Colonia de Hormigas y Enjambre de Partículas).",
      en: "Intelligent tourism platform for Cuba combining local RAG (FAISS + MiniLM + Ollama), an NLP-based recommender and an itinerary planner using metaheuristics (Ant Colony and Particle Swarm Optimization).",
    },
    overview: [
      {
        es: "SmartTour Cuba es un proyecto interdisciplinario que integra Inteligencia Artificial, Sistemas de Recuperación de Información y Simulación en una sola aplicación. Fui el contribuidor principal del repositorio, con 61 de los commits del proyecto.",
        en: "SmartTour Cuba is an interdisciplinary project integrating Artificial Intelligence, Information Retrieval Systems and Simulation in a single application. I was the repository's top contributor, with 61 of the project's commits.",
      },
      {
        es: "El componente RAG funciona íntegramente en local: los embeddings se generan con MiniLM (all-MiniLM-L6-v2), la búsqueda vectorial usa FAISS sobre una base de conocimiento construida mediante scraping de EcuRed, y la generación corre sobre Ollama con modelos como Gemma 2 u OpenHermes. Ningún dato sale hacia APIs externas.",
        en: "The RAG component runs entirely locally: embeddings are generated with MiniLM (all-MiniLM-L6-v2), vector search uses FAISS over a knowledge base built by scraping EcuRed, and generation runs on Ollama with models such as Gemma 2 or OpenHermes. No data leaves for external APIs.",
      },
      {
        es: "El planificador de rutas resuelve el problema de itinerario óptimo con Optimización por Colonia de Hormigas (ACO) y Enjambre de Partículas (PSO), incorporando preferencias del usuario mediante lógica difusa sobre presupuesto, tiempo y prioridades. Los hiperparámetros se ajustaron con Optuna y se validaron mediante remuestreo bootstrap.",
        en: "The route planner solves the optimal itinerary problem with Ant Colony Optimization (ACO) and Particle Swarm Optimization (PSO), incorporating user preferences through fuzzy logic over budget, time and priorities. Hyperparameters were tuned with Optuna and validated through bootstrap resampling.",
      },
    ],
    role: { es: "Contribuidor principal (61 commits)", en: "Top contributor (61 commits)" },
    contribution: {
      es: "Desarrollo del sistema RAG local, el chatbot y los módulos de simulación y validación estadística de los recomendadores.",
      en: "Development of the local RAG system, the chatbot, and the simulation and statistical validation modules for the recommenders.",
    },
    technologies: ["Python", "RAG", "FAISS", "Ollama", "Streamlit", "ACO/PSO", "Optuna"],
    stack: [
      { group: { es: "IA y NLP", en: "AI & NLP" }, items: ["Ollama (Gemma 2, OpenHermes)", "Sentence-Transformers (MiniLM)", "FAISS"] },
      { group: { es: "Optimización", en: "Optimization" }, items: ["Ant Colony Optimization", "Particle Swarm Optimization", "Lógica difusa", "Optuna"] },
      { group: { es: "Datos", en: "Data" }, items: ["Selenium", "HTML2Text", "libzim", "EcuRed"] },
      { group: { es: "Interfaz", en: "Interface" }, items: ["Streamlit", "Folium", "OpenStreetMap"] },
    ],
    features: [
      {
        title: { es: "RAG local y privado", en: "Local, private RAG" },
        description: {
          es: "Búsqueda semántica con FAISS y generación con Ollama, sin enviar datos a servicios externos.",
          en: "Semantic search with FAISS and generation with Ollama, without sending data to external services.",
        },
      },
      {
        title: { es: "Planificador metaheurístico", en: "Metaheuristic planner" },
        description: {
          es: "Itinerarios óptimos con ACO y PSO sujetos a restricciones de presupuesto, tiempo y preferencias.",
          en: "Optimal itineraries with ACO and PSO subject to budget, time and preference constraints.",
        },
      },
      {
        title: { es: "Recomendador NLP", en: "NLP recommender" },
        description: {
          es: "Sentence Transformers que emparejan preferencias en texto libre con sitios, hoteles y actividades.",
          en: "Sentence Transformers matching free-text preferences with sites, hotels and activities.",
        },
      },
      {
        title: { es: "Validación por bootstrap", en: "Bootstrap validation" },
        description: {
          es: "Simulaciones con remuestreo para estimar la distribución de la calidad de las recomendaciones.",
          en: "Resampling simulations to estimate the distribution of recommendation quality.",
        },
      },
    ],
    gallery: [
      { src: img("smarttour-cuba", "01-logo.webp"), caption: { es: "SmartTour Cuba", en: "SmartTour Cuba" } },
      { src: img("smarttour-cuba", "02-flujo-optimizacion.webp"), caption: { es: "Flujo de optimización del planificador de rutas", en: "Route planner optimization flow" } },
      { src: img("smarttour-cuba", "03-rag-distribuciones.webp"), caption: { es: "Distribuciones bootstrap del módulo RAG", en: "Bootstrap distributions of the RAG module" } },
      { src: img("smarttour-cuba", "04-calidad-recomendacion.webp"), caption: { es: "Calidad de las recomendaciones del chatbot", en: "Chatbot recommendation quality" } },
      { src: img("smarttour-cuba", "05-aco-evaporacion.webp"), caption: { es: "Sensibilidad de ACO al factor de evaporación", en: "ACO sensitivity to the evaporation factor" } },
      { src: img("smarttour-cuba", "06-pso-particulas.webp"), caption: { es: "Sensibilidad de PSO al número de partículas", en: "PSO sensitivity to particle count" } },
    ],
    team: [
      { login: "Pol4720", commits: 58, isAuthor: true },
      { login: "AbrahamRom", commits: 36 },
      { login: "LoLProM", commits: 20 },
      { login: "Pol472", commits: 3, isAuthor: true },
      { login: "Eveliz08", commits: 2 },
    ],
    category: "ai",
    visibility: "public",
    github: "https://github.com/AbrahamRom/tour-guide-cuba",
    course: { es: "IA · Sistemas de Recuperación de Información · Simulación", en: "AI · Information Retrieval · Simulation" },
    featured: true,
    year: "2026",
    status: "completed",
    language: "Python",
    commits: 61,
  },
  {
    id: "hulk-compiler-rs",
    slug: "hulk-compiler-rs",
    title: { es: "HULK Compiler (Rust)", en: "HULK Compiler (Rust)" },
    summary: {
      es: "Compilador completo del lenguaje HULK en Rust, con generación de LLVM IR.",
      en: "Full HULK-language compiler in Rust, with LLVM IR code generation.",
    },
    description: {
      es: "Compilador completo para el lenguaje HULK implementado en Rust: análisis léxico, parser con LALRPOP, análisis semántico con inferencia de tipos y generación de código LLVM IR hasta binario nativo.",
      en: "Complete compiler for the HULK language implemented in Rust: lexical analysis, LALRPOP-based parser, semantic analysis with type inference, and LLVM IR generation down to a native binary.",
    },
    overview: [
      {
        es: "HULK (Havana University Language for Kompilers) es el lenguaje didáctico diseñado en MATCOM para la enseñanza de construcción de compiladores. Este proyecto implementa el pipeline completo en Rust, desde el código fuente hasta un ejecutable nativo.",
        en: "HULK (Havana University Language for Kompilers) is the educational language designed at MATCOM for teaching compiler construction. This project implements the full pipeline in Rust, from source code to a native executable.",
      },
      {
        es: "El analizador semántico resuelve ámbitos, valida jerarquías de herencia simple, comprueba conformidad de protocolos mediante tipado estructural e infiere tipos en las ligaduras `let` cuando no se anotan explícitamente.",
        en: "The semantic analyzer resolves scopes, validates single-inheritance hierarchies, checks protocol conformance through structural typing, and infers types in `let` bindings when not explicitly annotated.",
      },
      {
        es: "La generación de código produce LLVM IR, incluyendo tablas de métodos virtuales para el despacho dinámico, sobrecarga de operadores y las funciones matemáticas incorporadas. El IR se compila después a ensamblador con `llc` y se enlaza con gcc/clang.",
        en: "Code generation emits LLVM IR, including virtual method tables for dynamic dispatch, operator overloading and built-in mathematical functions. The IR is then compiled to assembly with `llc` and linked with gcc/clang.",
      },
    ],
    role: { es: "Contribuidor principal (96 commits)", en: "Top contributor (96 commits)" },
    technologies: ["Rust", "LLVM IR", "LALRPOP", "Compiladores", "Inferencia de tipos"],
    stack: [
      { group: { es: "Lenguaje", en: "Language" }, items: ["Rust", "Cargo"] },
      { group: { es: "Front-end", en: "Front-end" }, items: ["Lexer basado en regex", "LALRPOP", "AST"] },
      { group: { es: "Back-end", en: "Back-end" }, items: ["LLVM IR", "inkwell / llvm-sys", "llc", "clang/gcc"] },
    ],
    features: [
      {
        title: { es: "Sistema de tipos", en: "Type system" },
        description: {
          es: "Tipos primitivos, tipos definidos por el usuario con herencia simple, inferencia en `let` y conformidad de protocolos.",
          en: "Primitive types, user-defined types with single inheritance, `let` inference and protocol conformance.",
        },
      },
      {
        title: { es: "Orientación a objetos", en: "Object orientation" },
        description: {
          es: "Herencia con `inherits`, constructores, referencias `self`, despacho virtual y declaración de protocolos.",
          en: "Inheritance via `inherits`, constructors, `self` references, virtual dispatch and protocol declarations.",
        },
      },
      {
        title: { es: "Funciones de primera clase", en: "First-class functions" },
        description: {
          es: "Funciones como valores, sobrecarga de operadores y funciones matemáticas incorporadas.",
          en: "Functions as values, operator overloading and built-in mathematical functions.",
        },
      },
    ],
    architecture: {
      diagram: `Source Code (.hulk)
      ↓
   Lexer          Tokenización (regex)
      ↓
   Parser         Gramática LALRPOP → AST
      ↓
   Semantic       Tipos, ámbitos, herencia
      ↓
   Code Gen       AST → LLVM IR
      ↓
   LLVM IR (.ll) → llc → gcc → binario nativo`,
    },
    team: [
      { login: "Pol4720", commits: 68, isAuthor: true },
      { login: "LoLProM", commits: 67 },
      { login: "AbrahamRom", commits: 57 },
      { login: "Pol472", commits: 28, isAuthor: true },
    ],
    category: "compilers",
    visibility: "public",
    github: "https://github.com/Pol4720/HULK-Compiler-RS",
    course: { es: "Compilación", en: "Compilers" },
    featured: true,
    year: "2025",
    status: "completed",
    language: "Rust",
    commits: 96,
  },
  {
    id: "distrisearch",
    slug: "distrisearch",
    title: { es: "DistriSearch", en: "DistriSearch" },
    summary: {
      es: "Motor de búsqueda distribuido con consenso Raft, gRPC y recuperación de información.",
      en: "Distributed search engine with Raft consensus, gRPC and information retrieval.",
    },
    description: {
      es: "Motor de búsqueda documental distribuido con topología maestro-esclavo y consenso Raft para tolerancia a fallos. Combina TF-IDF, MinHash/LSH para detección de casi-duplicados y LDA para modelado de tópicos.",
      en: "Distributed document search engine with master-slave topology and Raft consensus for fault tolerance. Combines TF-IDF, MinHash/LSH for near-duplicate detection and LDA for topic modeling.",
    },
    overview: [
      {
        es: "DistriSearch une algoritmos clásicos de recuperación de información con una arquitectura distribuida real. El nodo maestro coordina las consultas y fusiona resultados; los nodos esclavos indexan y puntúan documentos en paralelo, comunicándose por gRPC con Protocol Buffers.",
        en: "DistriSearch pairs classical information retrieval algorithms with a genuinely distributed architecture. The master node coordinates queries and merges results; slave nodes index and score documents in parallel, communicating over gRPC with Protocol Buffers.",
      },
      {
        es: "La tolerancia a fallos se implementó con una versión propia del protocolo de consenso Raft, incluyendo elección de líder y replicación del log, de modo que el clúster mantiene consistencia aunque caigan nodos.",
        en: "Fault tolerance was implemented with a custom version of the Raft consensus protocol, including leader election and log replication, so the cluster stays consistent even when nodes fail.",
      },
      {
        es: "Sobre esa base se ejecutan tres métodos de recuperación complementarios: TF-IDF para relevancia léxica, MinHash con Locality-Sensitive Hashing para estimar la similitud de Jaccard y detectar casi-duplicados, y LDA para descubrir la distribución latente de tópicos del corpus.",
        en: "Three complementary retrieval methods run on that foundation: TF-IDF for lexical relevance, MinHash with Locality-Sensitive Hashing to estimate Jaccard similarity and detect near-duplicates, and LDA to discover the corpus's latent topic distribution.",
      },
    ],
    role: { es: "Autor principal (72 commits)", en: "Lead author (72 commits)" },
    technologies: ["Python", "Raft", "gRPC", "FastAPI", "React", "MongoDB", "TF-IDF", "LDA"],
    stack: [
      { group: { es: "Distribuido", en: "Distributed" }, items: ["Raft (implementación propia)", "gRPC", "Protocol Buffers"] },
      { group: { es: "Recuperación", en: "Retrieval" }, items: ["TF-IDF", "MinHash + LSH", "LDA", "scikit-learn", "Gensim"] },
      { group: { es: "Servicios", en: "Services" }, items: ["FastAPI", "MongoDB"] },
      { group: { es: "Interfaz", en: "Interface" }, items: ["React", "JavaScript"] },
    ],
    features: [
      {
        title: { es: "Consenso Raft", en: "Raft consensus" },
        description: {
          es: "Elección de líder, replicación del log y recuperación ante caídas de nodos.",
          en: "Leader election, log replication and recovery from node failures.",
        },
      },
      {
        title: { es: "Detección de casi-duplicados", en: "Near-duplicate detection" },
        description: {
          es: "MinHash con LSH para estimar la similitud de Jaccard entre conjuntos de shingles de forma eficiente.",
          en: "MinHash with LSH to efficiently estimate Jaccard similarity between shingle sets.",
        },
      },
      {
        title: { es: "Modelado de tópicos", en: "Topic modeling" },
        description: {
          es: "LDA para descubrir tópicos latentes y habilitar búsqueda y agrupamiento por tema.",
          en: "LDA to discover latent topics and enable topic-based search and clustering.",
        },
      },
    ],
    architecture: {
      diagram: `        React Frontend  (búsqueda + resultados)
                 │ REST
        FastAPI Master Node
        (coordinación de consultas + fusión)
        │ gRPC     │ gRPC     │ gRPC
     Slave       Slave      Slave
    (TF-IDF)   (MinHash)    (LDA)
        └──────────┼──────────┘
                MongoDB
         ── capa de consenso Raft ──`,
    },
    gallery: [{ src: img("distrisearch", "01-logo.webp"), caption: { es: "DistriSearch", en: "DistriSearch" } }],
    team: [
      { login: "Pol4720", commits: 72, isAuthor: true },
      { login: "abelponce03", commits: 50 },
    ],
    category: "distributed",
    visibility: "public",
    github: "https://github.com/Pol4720/DistriSearch",
    course: { es: "Sistemas Distribuidos", en: "Distributed Systems" },
    featured: true,
    year: "2026",
    status: "completed",
    language: "Python",
    commits: 72,
  },
  {
    id: "playhub",
    slug: "playhub",
    title: { es: "PlayHub — Gestión de Parque Infantil", en: "PlayHub — Playground Management" },
    summary: {
      es: "Aplicación full-stack React + Django REST con roles, reservas, reportes y arquitectura por capas.",
      en: "Full-stack React + Django REST app with roles, reservations, reports and layered architecture.",
    },
    description: {
      es: "Sistema web completo para la gestión de un parque infantil: control de instalaciones, actividades, recursos y reservas, con acceso por roles (administrador, educador, padre), estadísticas y exportación de reportes en PDF.",
      en: "Complete web system for managing a children's playground: control of installations, activities, resources and reservations, with role-based access (admin, educator, parent), statistics and PDF report export.",
    },
    overview: [
      {
        es: "PlayHub fue el proyecto final de Ingeniería de Software. Es una aplicación full-stack con backend en Django REST Framework y frontend en React, diseñada alrededor de tres roles con permisos y vistas diferenciadas.",
        en: "PlayHub was the final Software Engineering project. It is a full-stack application with a Django REST Framework backend and a React frontend, designed around three roles with distinct permissions and views.",
      },
      {
        es: "El backend sigue un patrón de capas explícito — controladores HTTP delgados, una capa de servicios de aplicación con la lógica de negocio, interfaces de dominio abstractas y repositorios de persistencia — lo que mantiene las reglas de negocio aisladas del framework y del ORM.",
        en: "The backend follows an explicit layered pattern — thin HTTP controllers, an application service layer holding business logic, abstract domain interfaces, and persistence repositories — keeping business rules isolated from the framework and the ORM.",
      },
      {
        es: "Las reglas de negocio se implementaron como invariantes verificables: la capacidad de una actividad no puede exceder la de su instalación, un padre no puede hacer más de tres reservas diarias por actividad, las actividades programadas no pueden solaparse en la misma instalación y las calificaciones solo se admiten una vez iniciada la actividad.",
        en: "Business rules were implemented as verifiable invariants: an activity's capacity cannot exceed its installation's, a parent cannot make more than three daily reservations per activity, scheduled activities cannot overlap in the same installation, and ratings are only accepted once the activity has started.",
      },
    ],
    role: { es: "Contribuidor (45 commits)", en: "Contributor (45 commits)" },
    contribution: {
      es: "Desarrollo de módulos del backend Django REST, reglas de negocio y componentes del frontend React.",
      en: "Development of Django REST backend modules, business rules and React frontend components.",
    },
    technologies: ["React", "Django REST", "PostgreSQL", "JWT", "Ant Design", "Vite"],
    stack: [
      { group: { es: "Frontend", en: "Frontend" }, items: ["React 18", "React Router 7", "Ant Design 5", "Bootstrap 5", "Axios", "Vite"] },
      { group: { es: "Backend", en: "Backend" }, items: ["Python", "Django 5.0", "Django REST Framework"] },
      { group: { es: "Datos y auth", en: "Data & auth" }, items: ["PostgreSQL", "JWT (simplejwt)"] },
      { group: { es: "Documentación y reportes", en: "Docs & reports" }, items: ["Swagger UI", "ReDoc (drf-yasg)", "matplotlib", "ReportLab"] },
    ],
    features: [
      {
        title: { es: "Acceso por roles", en: "Role-based access" },
        description: {
          es: "Administrador, educador y padre, con flujo de confirmación de rol y permisos diferenciados por endpoint.",
          en: "Admin, educator and parent, with a role confirmation workflow and per-endpoint permissions.",
        },
      },
      {
        title: { es: "Sistema de reservas", en: "Reservation system" },
        description: {
          es: "Reservas con disponibilidad en tiempo real, límites por padre y validación de capacidad.",
          en: "Reservations with real-time availability, per-parent limits and capacity validation.",
        },
      },
      {
        title: { es: "Estadísticas y reportes", en: "Statistics & reports" },
        description: {
          es: "Analítica visual de reservas, calificaciones y uso de recursos, con exportación a PDF.",
          en: "Visual analytics of reservations, ratings and resource usage, with PDF export.",
        },
      },
      {
        title: { es: "API documentada", en: "Documented API" },
        description: {
          es: "Documentación interactiva completa con Swagger UI y ReDoc sobre todos los endpoints.",
          en: "Complete interactive documentation with Swagger UI and ReDoc across all endpoints.",
        },
      },
    ],
    architecture: {
      diagram: `views/                        Controladores HTTP (delgados)
AppServices/                  Lógica de negocio
DomainServices/               Interfaces abstractas
InfrastructurePersistence/    Acceso a datos (ORM)
models/                       Modelos de base de datos
serializers/                  Transformación req/resp`,
    },
    gallery: [
      { src: img("playhub", "01-logo.webp"), caption: { es: "Identidad de PlayHub", en: "PlayHub identity" } },
      { src: img("playhub", "02-home.webp"), caption: { es: "Portada de la aplicación", en: "Application home" } },
      { src: img("playhub", "03-tarjeta.webp"), caption: { es: "Tarjeta de actividad", en: "Activity card" } },
      { src: img("playhub", "04-actividad.webp"), caption: { es: "Vista de actividad", en: "Activity view" } },
      { src: img("playhub", "05-area.webp"), caption: { es: "Área del parque", en: "Playground area" } },
      { src: img("playhub", "06-reporte-reservaciones.webp"), caption: { es: "Reporte de reservaciones", en: "Reservations report" } },
      { src: img("playhub", "07-reporte-calificaciones.webp"), caption: { es: "Reporte de calificaciones", en: "Ratings report" } },
      { src: img("playhub", "08-reporte-recursos.webp"), caption: { es: "Reporte de uso de recursos", en: "Resource usage report" } },
    ],
    team: [
      { login: "Eveliz08", commits: 66 },
      { login: "michellviu", commits: 66 },
      { login: "AbrahamRom", commits: 57 },
      { login: "Pol472", commits: 45, isAuthor: true },
    ],
    category: "web",
    visibility: "public",
    github: "https://github.com/michellviu/Proyecto-IS",
    course: { es: "Ingeniería de Software", en: "Software Engineering" },
    featured: true,
    year: "2026",
    status: "completed",
    language: "Python",
    commits: 45,
  },
  {
    id: "mulas",
    slug: "mulas",
    title: { es: "Balanced Multi-Bin Packing", en: "Balanced Multi-Bin Packing" },
    summary: {
      es: "13 algoritmos para un problema NP-duro de empaquetado balanceado, con benchmarks y dashboard.",
      en: "13 algorithms for an NP-hard balanced packing problem, with benchmarks and dashboard.",
    },
    description: {
      es: "Implementación y análisis comparativo de 13 algoritmos (voraces, metaheurísticos, exactos y de aproximación) para el problema NP-duro de empaquetado balanceado en múltiples contenedores con restricciones de capacidad.",
      en: "Implementation and comparative analysis of 13 algorithms (greedy, metaheuristic, exact and approximation) for the NP-hard balanced multi-bin packing problem with capacity constraints.",
    },
    overview: [
      {
        es: "Dado un conjunto de n objetos con peso y valor, y k contenedores con capacidades posiblemente distintas, el problema consiste en minimizar la diferencia máxima de valor total entre contenedores respetando las restricciones de capacidad. Es NP-duro, demostrado por reducción desde 3-PARTITION.",
        en: "Given a set of n items with weight and value, and k bins with possibly different capacities, the problem is to minimize the maximum difference in total value between bins while respecting capacity constraints. It is NP-hard, proven by reduction from 3-PARTITION.",
      },
      {
        es: "El proyecto implementa cuatro familias de algoritmos: voraces (FFD, BFD, WFD, LPT Balanced), metaheurísticas (Recocido Simulado, Algoritmo Genético, Búsqueda Tabú), exactos (Programación Dinámica, Ramificación y Poda) y de aproximación (LPT, Búsqueda Local Multi-Start, GRASP).",
        en: "The project implements four algorithm families: greedy (FFD, BFD, WFD, LPT Balanced), metaheuristics (Simulated Annealing, Genetic Algorithm, Tabu Search), exact (Dynamic Programming, Branch and Bound) and approximation (LPT, Multi-Start Local Search, GRASP).",
      },
      {
        es: "Todos se comparan mediante un runner de benchmarks con análisis estadístico sobre instancias generadas (uniformes, bimodales y correlacionadas), midiendo tanto la calidad de la solución (gap respecto al óptimo) como el tiempo de ejecución frente al tamaño de la instancia.",
        en: "All are compared through a benchmark runner with statistical analysis over generated instances (uniform, bimodal and correlated), measuring both solution quality (gap from optimum) and runtime against instance size.",
      },
    ],
    role: { es: "Autor principal (36 commits)", en: "Lead author (36 commits)" },
    technologies: ["Python", "Metaheurísticas", "Streamlit", "Plotly", "Manim", "LaTeX"],
    stack: [
      { group: { es: "Algoritmos voraces", en: "Greedy algorithms" }, items: ["First Fit Decreasing", "Best Fit Decreasing", "Worst Fit Decreasing", "LPT Balanced"] },
      { group: { es: "Metaheurísticas", en: "Metaheuristics" }, items: ["Recocido Simulado", "Algoritmo Genético", "Búsqueda Tabú", "GRASP"] },
      { group: { es: "Exactos", en: "Exact" }, items: ["Programación Dinámica", "Ramificación y Poda"] },
      { group: { es: "Herramientas", en: "Tooling" }, items: ["Streamlit", "Plotly", "Manim", "LaTeX"] },
    ],
    features: [
      {
        title: { es: "13 algoritmos comparables", en: "13 comparable algorithms" },
        description: {
          es: "Interfaz común que permite intercambiar solucionadores y compararlos bajo las mismas instancias.",
          en: "A common interface that lets solvers be swapped and compared on identical instances.",
        },
      },
      {
        title: { es: "Banco de pruebas estadístico", en: "Statistical benchmark suite" },
        description: {
          es: "Generadores de instancias uniformes, bimodales y correlacionadas con análisis agregado de resultados.",
          en: "Uniform, bimodal and correlated instance generators with aggregated result analysis.",
        },
      },
      {
        title: { es: "Formalización matemática", en: "Mathematical formalization" },
        description: {
          es: "Demostración de NP-dureza por reducción desde 3-PARTITION y cotas de aproximación de LPT.",
          en: "NP-hardness proof by reduction from 3-PARTITION and LPT approximation bounds.",
        },
      },
      {
        title: { es: "Animaciones con Manim", en: "Manim animations" },
        description: {
          es: "Visualización animada del comportamiento de los algoritmos para la presentación del proyecto.",
          en: "Animated visualization of algorithm behavior for the project presentation.",
        },
      },
    ],
    gallery: [
      { src: img("mulas", "01-gap-heatmap.webp"), caption: { es: "Mapa de calor del gap por algoritmo e instancia", en: "Gap heatmap by algorithm and instance" } },
      { src: img("mulas", "02-complejidad.webp"), caption: { es: "Comparación de órdenes de complejidad", en: "Complexity order comparison" } },
      { src: img("mulas", "03-runtime.webp"), caption: { es: "Tiempo de ejecución frente al tamaño (k=3)", en: "Runtime vs. instance size (k=3)" } },
      { src: img("mulas", "04-gap-algoritmo.webp"), caption: { es: "Gap por algoritmo", en: "Gap by algorithm" } },
      { src: img("mulas", "05-gap-tamano.webp"), caption: { es: "Gap frente al tamaño de la instancia", en: "Gap vs. instance size" } },
    ],
    team: [
      { login: "Pol4720", commits: 36, isAuthor: true },
      { login: "AbrahamRom", commits: 21 },
      { login: "abelponce03", commits: 3 },
    ],
    metrics: [{ es: "13 algoritmos implementados", en: "13 algorithms implemented" }],
    category: "other",
    visibility: "public",
    github: "https://github.com/Pol4720/mulas",
    course: { es: "Diseño y Análisis de Algoritmos", en: "Design & Analysis of Algorithms" },
    featured: true,
    year: "2026",
    status: "completed",
    language: "Python",
    commits: 36,
  },
  {
    id: "bcw-project",
    slug: "bcw-project",
    title: { es: "BCW — Análisis de Cáncer de Mama", en: "BCW — Breast Cancer Analysis" },
    summary: {
      es: "Estudio estadístico completo del dataset Breast Cancer Wisconsin en Python y R.",
      en: "Complete statistical study of the Breast Cancer Wisconsin dataset in Python and R.",
    },
    description: {
      es: "Análisis estadístico riguroso del dataset Breast Cancer Wisconsin (Diagnostic): estadística descriptiva, pruebas de hipótesis con corrección por comparaciones múltiples y regresión logística regularizada, con dashboard interactivo.",
      en: "Rigorous statistical analysis of the Breast Cancer Wisconsin (Diagnostic) dataset: descriptive statistics, hypothesis testing with multiple-comparison correction, and regularized logistic regression, with an interactive dashboard.",
    },
    overview: [
      {
        es: "El estudio parte de 569 muestras de aspirado con aguja fina caracterizadas por 30 variables numéricas derivadas de imágenes digitalizadas de masas mamarias, y las analiza en dos entornos complementarios: Python y R.",
        en: "The study starts from 569 fine-needle aspirate samples characterized by 30 numeric features derived from digitized images of breast masses, and analyzes them in two complementary environments: Python and R.",
      },
      {
        es: "El componente inferencial aplica pruebas t de muestras independientes, chi-cuadrado, ANOVA, contrastes de normalidad (Shapiro-Wilk y D'Agostino) y la prueba de Levene para homogeneidad de varianzas, corrigiendo el error de tipo I por comparaciones múltiples mediante Bonferroni y Benjamini-Hochberg.",
        en: "The inferential component applies independent-sample t-tests, chi-square, ANOVA, normality tests (Shapiro-Wilk and D'Agostino) and Levene's test for homogeneity of variances, correcting type-I error for multiple comparisons via Bonferroni and Benjamini-Hochberg.",
      },
      {
        es: "El modelo predictivo es una regresión logística con regularización L1/L2, evaluada por exactitud, sensibilidad, especificidad y AUC-ROC, complementada con análisis de calibración. Las 30 variables muestran diferencias estadísticamente significativas (p < 0.001) entre grupos benigno y maligno.",
        en: "The predictive model is a logistic regression with L1/L2 regularization, evaluated by accuracy, sensitivity, specificity and AUC-ROC, complemented with calibration analysis. All 30 features show statistically significant differences (p < 0.001) between benign and malignant groups.",
      },
    ],
    role: { es: "Contribuidor (5 commits)", en: "Contributor (5 commits)" },
    technologies: ["Python", "R", "SciPy", "statsmodels", "scikit-learn", "Streamlit"],
    stack: [
      { group: { es: "Análisis", en: "Analysis" }, items: ["Python", "R", "pandas", "NumPy"] },
      { group: { es: "Estadística", en: "Statistics" }, items: ["SciPy", "statsmodels", "Bonferroni", "Benjamini-Hochberg"] },
      { group: { es: "Modelado", en: "Modeling" }, items: ["scikit-learn", "Regresión logística L1/L2", "AUC-ROC"] },
      { group: { es: "Visualización", en: "Visualization" }, items: ["Matplotlib", "Seaborn", "Plotly", "Streamlit"] },
    ],
    gallery: [
      { src: img("bcw-project", "01-correlacion-pearson.webp"), caption: { es: "Matriz de correlación de Pearson (30 variables)", en: "Pearson correlation matrix (30 features)" } },
      { src: img("bcw-project", "02-correlacion-spearman.webp"), caption: { es: "Matriz de correlación de Spearman", en: "Spearman correlation matrix" } },
      { src: img("bcw-project", "03-distribucion-area.webp"), caption: { es: "Distribución de area_worst por diagnóstico", en: "Distribution of area_worst by diagnosis" } },
      { src: img("bcw-project", "04-pastel-diagnosis.webp"), caption: { es: "Composición de la variable diagnóstico", en: "Composition of the diagnosis variable" } },
      { src: img("bcw-project", "05-regresion.webp"), caption: { es: "Regresión: diagnóstico frente a area_worst", en: "Regression: diagnosis vs. area_worst" } },
    ],
    team: [
      { login: "LoLProM", commits: 7 },
      { login: "Pol472", commits: 3, isAuthor: true },
      { login: "Pol4720", commits: 2, isAuthor: true },
    ],
    metrics: [{ es: "Exactitud > 95% en regresión logística", en: ">95% accuracy in logistic regression" }],
    category: "data",
    visibility: "public",
    github: "https://github.com/Pol4720/BCW-Project",
    course: { es: "Estadística", en: "Statistics" },
    featured: false,
    year: "2025",
    status: "completed",
    language: "Python",
    commits: 5,
  },
  {
    id: "moogle-x",
    slug: "moogle-x",
    title: { es: "MoogleX", en: "MoogleX" },
    summary: {
      es: "Motor de búsqueda web sobre documentos de texto con ranking por relevancia y sugerencias.",
      en: "Web search engine over text documents with relevance ranking and query suggestions.",
    },
    description: {
      es: "Aplicación web de búsqueda sobre una colección de documentos de texto: devuelve resultados ordenados por relevancia con fragmentos de contexto y sugiere una consulta alternativa cuando algún término no aparece en el corpus.",
      en: "Web search application over a collection of text documents: returns relevance-ranked results with context snippets and suggests an alternative query when a term does not appear in the corpus.",
    },
    overview: [
      {
        es: "MoogleX fue mi primer proyecto de programación en MATCOM y el primero en el que construí un sistema completo de principio a fin: motor de indexación, cálculo de relevancia, servidor web e interfaz gráfica.",
        en: "MoogleX was my first programming project at MATCOM and the first in which I built a complete system end to end: indexing engine, relevance scoring, web server and graphical interface.",
      },
      {
        es: "El motor indexa los ficheros de texto de la colección, calcula la relevancia de cada documento frente a la consulta y devuelve los resultados ordenados de mayor a menor, acompañados de un fragmento del texto donde aparecen los términos buscados.",
        en: "The engine indexes the collection's text files, computes each document's relevance against the query, and returns results ranked from highest to lowest, each accompanied by a snippet of the text where the search terms appear.",
      },
      {
        es: "Cuando alguna palabra de la consulta no aparece en ningún documento, el sistema propone la búsqueda más parecida cuyos términos sí están presentes en la colección, evitando resultados vacíos.",
        en: "When a query word does not appear in any document, the system proposes the closest search whose terms are present in the collection, avoiding empty results.",
      },
    ],
    role: { es: "Autor único (15 commits)", en: "Sole author (15 commits)" },
    technologies: ["C#", ".NET", "Blazor", "Recuperación de Información"],
    stack: [
      { group: { es: "Lenguaje y plataforma", en: "Language & platform" }, items: ["C#", ".NET", "Blazor"] },
      { group: { es: "Motor", en: "Engine" }, items: ["Indexación", "Ranking por relevancia", "Sugerencia de consultas"] },
    ],
    gallery: [
      { src: img("moogle-x", "01-logo.webp"), caption: { es: "Identidad de MoogleX", en: "MoogleX identity" } },
      { src: img("moogle-x", "02-ui-busqueda.webp"), caption: { es: "Interfaz de búsqueda", en: "Search interface" } },
      { src: img("moogle-x", "03-ui-resultados.webp"), caption: { es: "Resultados ordenados por relevancia", en: "Relevance-ranked results" } },
      { src: img("moogle-x", "04-ui-sugerencia.webp"), caption: { es: "Sugerencia de búsqueda alternativa", en: "Alternative query suggestion" } },
      { src: img("moogle-x", "05-ui-detalle.webp"), caption: { es: "Detalle de un resultado", en: "Result detail" } },
    ],
    team: [{ login: "Pol472", commits: 15, isAuthor: true }],
    category: "web",
    visibility: "public",
    github: "https://github.com/Pol4720/MoogleX",
    course: { es: "Programación — Primer Proyecto", en: "Programming — First Project" },
    featured: false,
    year: "2023",
    status: "completed",
    language: "C#",
    commits: 15,
  },
  {
    id: "hex-game",
    slug: "hex-game",
    title: { es: "HEX — Jugador con IA", en: "HEX — AI Player" },
    summary: {
      es: "Juego HEX con IA basada en MCTS mejorado con seis heurísticas y detección Dijkstra.",
      en: "HEX game with AI based on MCTS enhanced by six heuristics and Dijkstra win detection.",
    },
    description: {
      es: "Implementación del juego de estrategia HEX con un agente de IA basado en Monte Carlo Tree Search mejorado: UCB1 para el balance exploración/explotación y seis heurísticas de dominio que guían la búsqueda.",
      en: "Implementation of the HEX strategy game with an AI agent based on enhanced Monte Carlo Tree Search: UCB1 for the exploration/exploitation balance and six domain heuristics guiding the search.",
    },
    overview: [
      {
        es: "HEX es un juego de conexión sobre un tablero romboidal NxN en el que cada jugador intenta unir sus dos lados opuestos. Por el teorema del punto fijo de Brouwer, HEX nunca termina en empate: siempre hay un ganador.",
        en: "HEX is a connection game on an NxN rhombus board where each player tries to link their two opposite sides. By Brouwer's fixed-point theorem, HEX never ends in a draw: there is always a winner.",
      },
      {
        es: "El agente combina MCTS con UCB1 y seis heurísticas ponderadas: detección de puentes (conexiones virtuales), control del centro, camino más corto vía Dijkstra, fuerza de conexión entre grupos de fichas, bloqueo del camino del oponente y proximidad a los bordes objetivo.",
        en: "The agent combines MCTS with UCB1 and six weighted heuristics: bridge detection (virtual connections), center control, shortest path via Dijkstra, connection strength between stone groups, blocking the opponent's path, and proximity to target edges.",
      },
      {
        es: "La detección de victoria trata el tablero como un grafo ponderado donde las celdas ocupadas por el jugador tienen coste cero, de modo que Dijkstra determina si existe una conexión completa entre ambos lados.",
        en: "Win detection treats the board as a weighted graph where cells occupied by the player have zero cost, so Dijkstra determines whether a complete connection exists between both sides.",
      },
    ],
    role: { es: "Autor principal (16 commits)", en: "Lead author (16 commits)" },
    technologies: ["Python", "MCTS", "UCB1", "Dijkstra", "Heurísticas"],
    gallery: [{ src: img("hex-game", "01-tablero.webp"), caption: { es: "Tablero de HEX", en: "HEX board" } }],
    team: [
      { login: "Pol472", commits: 13, isAuthor: true },
      { login: "Pol4720", commits: 3, isAuthor: true },
    ],
    category: "games",
    visibility: "public",
    github: "https://github.com/Pol4720/HEX-Game",
    course: { es: "Inteligencia Artificial", en: "Artificial Intelligence" },
    featured: false,
    year: "2025",
    status: "completed",
    language: "Python",
    commits: 16,
  },
  {
    id: "discrete-event-sim",
    slug: "discrete-event-simulation",
    title: { es: "Simulación de Eventos Discretos", en: "Discrete Event Simulation" },
    summary: {
      es: "Problema de reparación de máquinas modelado como CTMC, resuelto analítica y numéricamente.",
      en: "Machine repair problem modeled as a CTMC, solved analytically and numerically.",
    },
    description: {
      es: "Simulación estocástica del problema de reparación de máquinas modelado como Cadena de Markov de Tiempo Continuo, con validación de los resultados de Monte Carlo contra la solución analítica exacta.",
      en: "Stochastic simulation of the machine repair problem modeled as a Continuous-Time Markov Chain, validating Monte Carlo results against the exact analytical solution.",
    },
    overview: [
      {
        es: "El modelo describe N máquinas que fallan de forma independiente con tiempos exponenciales y R técnicos (R < N) que atienden una cola FIFO de reparaciones. El estado del sistema es el número de máquinas averiadas en cada instante.",
        en: "The model describes N machines that fail independently with exponential times and R technicians (R < N) serving a FIFO repair queue. The system state is the number of machines down at each instant.",
      },
      {
        es: "El sistema se resuelve por dos vías: analíticamente, formulándolo como proceso de nacimiento y muerte y obteniendo la distribución estacionaria por ecuaciones de balance; y numéricamente, mediante simulación por eventos con estimación de intervalos de confianza a partir de réplicas independientes y eliminación del período de calentamiento.",
        en: "The system is solved two ways: analytically, formulating it as a birth-death process and obtaining the steady-state distribution via balance equations; and numerically, through event-driven simulation with confidence interval estimation from independent replications and warm-up period removal.",
      },
      {
        es: "Se comparan disponibilidad de máquinas, longitud media de la cola, tiempo medio de espera, utilización de los técnicos y throughput, verificando la convergencia de la simulación hacia los valores teóricos.",
        en: "Machine availability, average queue length, average wait time, technician utilization and throughput are compared, verifying the simulation's convergence toward the theoretical values.",
      },
    ],
    role: { es: "Contribuidor (3 commits)", en: "Contributor (3 commits)" },
    technologies: ["Python", "NumPy", "SciPy", "CTMC", "Monte Carlo", "LaTeX"],
    gallery: [
      { src: img("discrete-event-simulation", "01-presentacion.webp"), caption: { es: "Presentación del proyecto", en: "Project presentation" } },
    ],
    team: [
      { login: "Eveliz08", commits: 2 },
      { login: "Pol4720", commits: 2, isAuthor: true },
      { login: "Pol472", commits: 1, isAuthor: true },
    ],
    category: "simulation",
    visibility: "public",
    github: "https://github.com/Pol4720/Discrete-Event-Simulation-Project",
    course: { es: "Simulación", en: "Simulation" },
    featured: false,
    year: "2025",
    status: "completed",
    language: "Python",
    commits: 3,
  },
  {
    id: "bluetooth-sync",
    slug: "bluetooth-file-sync",
    title: { es: "Bluetooth File Sync", en: "Bluetooth File Sync" },
    summary: {
      es: "Sincronización de ficheros en tiempo real sobre Bluetooth Classic y BLE.",
      en: "Real-time file synchronization over Bluetooth Classic and BLE.",
    },
    description: {
      es: "Herramienta multiplataforma de sincronización de ficheros por Bluetooth: monitoriza un directorio con watchdog y transfiere los cambios usando RFCOMM (PyBluez) o GATT sobre BLE (Bleak).",
      en: "Cross-platform Bluetooth file synchronization tool: monitors a directory with watchdog and transfers changes using RFCOMM (PyBluez) or GATT over BLE (Bleak).",
    },
    overview: [
      {
        es: "El sistema observa el sistema de ficheros mediante watchdog y reacciona a eventos de creación, modificación y borrado, encolando las transferencias correspondientes hacia los dispositivos emparejados.",
        en: "The system watches the filesystem through watchdog and reacts to creation, modification and deletion events, queueing the corresponding transfers toward paired devices.",
      },
      {
        es: "Soporta dos pilas de transporte: Bluetooth Classic mediante sockets RFCOMM para transferencias de alto rendimiento, y Bluetooth Low Energy mediante cliente/servidor GATT asíncrono para dispositivos de bajo consumo. Los ficheros grandes se fragmentan en bloques para una transmisión fiable.",
        en: "It supports two transport stacks: Bluetooth Classic via RFCOMM sockets for high-throughput transfers, and Bluetooth Low Energy via an asynchronous GATT client/server for low-power devices. Large files are chunked for reliable transmission.",
      },
    ],
    role: { es: "Autor principal (5 commits)", en: "Lead author (5 commits)" },
    technologies: ["Python", "PyBluez", "Bleak", "asyncio", "watchdog"],
    team: [
      { login: "Pol472", commits: 3, isAuthor: true },
      { login: "LoLProM", commits: 2 },
      { login: "Pol4720", commits: 2, isAuthor: true },
    ],
    category: "systems",
    visibility: "public",
    github: "https://github.com/Pol4720/Tarea-RC-2024",
    course: { es: "Redes de Computadoras", en: "Computer Networks" },
    featured: false,
    year: "2024",
    status: "completed",
    language: "Python",
    commits: 5,
  },
  {
    id: "ftp-client-server",
    slug: "ftp-client-server",
    title: { es: "Cliente/Servidor FTP", en: "FTP Client/Server" },
    summary: {
      es: "Implementación del protocolo FTP con servidor en Python y cliente web en React.",
      en: "FTP protocol implementation with a Python server and a React web client.",
    },
    description: {
      es: "Implementación desde cero de un servidor FTP en Python y un cliente con interfaz web en React, con una capa de seguridad propia para la transferencia de ficheros.",
      en: "From-scratch implementation of an FTP server in Python and a client with a React web interface, with a custom security layer for file transfer.",
    },
    overview: [
      {
        es: "El proyecto implementa el protocolo FTP en tres piezas: un servidor en Python que atiende los comandos del protocolo, una biblioteca cliente también en Python con su propia capa de seguridad, y una interfaz web en React que consume esa biblioteca.",
        en: "The project implements the FTP protocol in three pieces: a Python server handling protocol commands, a Python client library with its own security layer, and a React web interface consuming that library.",
      },
    ],
    role: { es: "Contribuidor", en: "Contributor" },
    technologies: ["Python", "React", "FTP", "Vite"],
    team: [
      { login: "LoLProM", commits: 1 },
      { login: "Pol472", commits: 1, isAuthor: true },
    ],
    category: "systems",
    visibility: "public",
    github: "https://github.com/LoLProM/FTP-Final-Project-",
    course: { es: "Redes de Computadoras", en: "Computer Networks" },
    featured: false,
    year: "2025",
    status: "completed",
    language: "JavaScript",
    commits: 1,
  },
  {
    id: "2048-haskell",
    slug: "2048-haskell",
    title: { es: "2048 en Haskell", en: "2048 in Haskell" },
    summary: {
      es: "El clásico 2048 implementado en Haskell puro con estado inmutable y tipos algebraicos.",
      en: "The classic 2048 implemented in pure Haskell with immutable state and algebraic types.",
    },
    description: {
      es: "Implementación del puzzle 2048 enteramente en Haskell, con tablero inmutable, funciones puras para deslizar y fusionar fichas, y la mónada IO aislada en el bucle de juego.",
      en: "Implementation of the 2048 puzzle entirely in Haskell, with an immutable board, pure functions for sliding and merging tiles, and the IO monad isolated in the game loop.",
    },
    overview: [
      {
        es: "El proyecto demuestra los conceptos centrales del paradigma funcional: el tablero 4×4 se representa como lista de listas y nunca se muta; las operaciones de deslizamiento, fusión y transposición son funciones puras sin efectos secundarios.",
        en: "The project demonstrates the functional paradigm's core concepts: the 4×4 board is represented as a list of lists and is never mutated; sliding, merging and transposition operations are pure functions with no side effects.",
      },
      {
        es: "La entrada del usuario y el renderizado en terminal quedan confinados a la mónada IO, mientras que el emparejamiento de patrones cubre exhaustivamente las direcciones de movimiento y las operaciones sobre fichas.",
        en: "User input and terminal rendering are confined to the IO monad, while pattern matching exhaustively covers move directions and tile operations.",
      },
    ],
    role: { es: "Autor principal (12 commits)", en: "Lead author (12 commits)" },
    technologies: ["Haskell", "Programación funcional", "Cabal/Stack"],
    team: [
      { login: "Pol472", commits: 8, isAuthor: true },
      { login: "LoLProM", commits: 6 },
      { login: "Pol4720", commits: 4, isAuthor: true },
    ],
    category: "games",
    visibility: "public",
    github: "https://github.com/Pol4720/2048-PD-Project",
    course: { es: "Programación Declarativa", en: "Declarative Programming" },
    featured: false,
    year: "2025",
    status: "completed",
    language: "Haskell",
    commits: 12,
  },
  {
    id: "geowall-e",
    slug: "geowall-e",
    title: { es: "GeoWall-E", en: "GeoWall-E" },
    summary: {
      es: "Intérprete de un lenguaje de dibujo geométrico con motor gráfico en Godot y C#.",
      en: "Interpreter for a geometric drawing language with a Godot + C# graphics engine.",
    },
    description: {
      es: "Intérprete completo de un lenguaje de programación para construcciones geométricas: análisis léxico y sintáctico, evaluación de expresiones y renderizado del resultado sobre un panel de dibujo en Godot.",
      en: "Complete interpreter for a geometric-construction programming language: lexical and syntactic analysis, expression evaluation, and rendering of the result on a Godot drawing panel.",
    },
    overview: [
      {
        es: "GeoWall-E fue el tercer proyecto de programación de la carrera. El sistema interpreta un lenguaje declarativo en el que se describen figuras geométricas — puntos, rectas, circunferencias, secuencias — y las dibuja en pantalla.",
        en: "GeoWall-E was the degree's third programming project. The system interprets a declarative language describing geometric figures — points, lines, circles, sequences — and draws them on screen.",
      },
      {
        es: "Fue mi primer contacto con la construcción de intérpretes: tokenización, árbol de sintaxis abstracta, evaluación de expresiones con ámbitos y funciones definidas por el usuario, integrado con el motor gráfico Godot.",
        en: "It was my first contact with interpreter construction: tokenization, abstract syntax tree, expression evaluation with scopes and user-defined functions, integrated with the Godot game engine.",
      },
    ],
    role: { es: "Contribuidor (2 commits)", en: "Contributor (2 commits)" },
    technologies: ["C#", "Godot", "Intérpretes", "AST"],
    team: [
      { login: "LoLProM", commits: 5 },
      { login: "mario462", commits: 3 },
      { login: "Pol472", commits: 2, isAuthor: true },
    ],
    category: "compilers",
    visibility: "public",
    github: "https://github.com/LoLProM/GeoWall-E",
    course: { es: "Programación — Tercer Proyecto", en: "Programming — Third Project" },
    featured: false,
    year: "2023",
    status: "completed",
    language: "C#",
    commits: 2,
  },
  {
    id: "hulk-csharp",
    slug: "hulk-csharp",
    title: { es: "HULK (C#)", en: "HULK (C#)" },
    summary: {
      es: "Primer intérprete del lenguaje HULK, escrito en C# como segundo proyecto de programación.",
      en: "First HULK-language interpreter, written in C# as the second programming project.",
    },
    description: {
      es: "Intérprete del lenguaje HULK implementado en C#: análisis léxico, parser recursivo descendente, evaluación de expresiones, funciones definidas por el usuario y manejo de errores.",
      en: "HULK language interpreter implemented in C#: lexical analysis, recursive descent parser, expression evaluation, user-defined functions and error handling.",
    },
    overview: [
      {
        es: "Este fue el segundo proyecto de programación de la carrera y mi primera implementación del lenguaje HULK — años antes de reescribir un compilador completo del mismo lenguaje en Rust con generación de LLVM IR.",
        en: "This was the degree's second programming project and my first implementation of the HULK language — years before rewriting a complete compiler for the same language in Rust with LLVM IR generation.",
      },
      {
        es: "El intérprete cubre el ciclo léxico-sintáctico-evaluación con un parser recursivo descendente, soporta funciones definidas por el usuario y reporta errores de sintaxis y de tipos con mensajes descriptivos.",
        en: "The interpreter covers the lexing-parsing-evaluation cycle with a recursive descent parser, supports user-defined functions, and reports syntax and type errors with descriptive messages.",
      },
    ],
    role: { es: "Autor único (6 commits)", en: "Sole author (6 commits)" },
    technologies: ["C#", ".NET", "Intérpretes", "Parser recursivo"],
    team: [{ login: "Pol472", commits: 6, isAuthor: true }],
    category: "compilers",
    visibility: "public",
    github: "https://github.com/Pol4720/HULK",
    course: { es: "Programación — Segundo Proyecto", en: "Programming — Second Project" },
    featured: false,
    year: "2023",
    status: "completed",
    language: "C#",
    commits: 6,
  },
  {
    id: "microprocesador-32",
    slug: "microprocesador-32-bits",
    title: { es: "Microprocesador de 32 bits", en: "32-bit Microprocessor" },
    summary: {
      es: "Diseño y simulación de un microprocesador de 32 bits para Arquitectura de Computadoras.",
      en: "Design and simulation of a 32-bit microprocessor for the Computer Architecture course.",
    },
    description: {
      es: "Proyecto de Arquitectura de Computadoras: diseño de la ruta de datos y la unidad de control de un microprocesador de 32 bits, con simulación de su comportamiento en Python.",
      en: "Computer Architecture project: design of the datapath and control unit of a 32-bit microprocessor, with behavioral simulation in Python.",
    },
    overview: [
      {
        es: "El proyecto aborda el diseño de un microprocesador de 32 bits desde el nivel de arquitectura: definición del conjunto de instrucciones, diseño de la ruta de datos con sus registros y unidad aritmético-lógica, y la unidad de control que orquesta cada ciclo de ejecución.",
        en: "The project addresses the design of a 32-bit microprocessor from the architecture level: instruction set definition, datapath design with its registers and arithmetic-logic unit, and the control unit orchestrating each execution cycle.",
      },
    ],
    role: { es: "Autor único (6 commits)", en: "Sole author (6 commits)" },
    technologies: ["Python", "Arquitectura de Computadoras", "Simulación"],
    team: [{ login: "Pol472", commits: 6, isAuthor: true }],
    category: "systems",
    visibility: "public",
    github: "https://github.com/Pol4720/Microprocesador-32-bits",
    course: { es: "Arquitectura de Computadoras", en: "Computer Architecture" },
    featured: false,
    year: "2024",
    status: "completed",
    language: "Python",
    commits: 6,
  },
  {
    id: "js-seminar",
    slug: "javascript-seminar",
    title: { es: "Seminario: Modelo de Objetos de JavaScript", en: "Seminar: The JavaScript Object Model" },
    summary: {
      es: "Análisis académico del modelo de objetos de JavaScript, de prototipos a ES2024.",
      en: "Academic analysis of JavaScript's object model, from prototypes to ES2024.",
    },
    description: {
      es: "Seminario en LaTeX sobre cómo JavaScript implementa los cuatro pilares de la POO a través de su modelo basado en prototipos, y su evolución desde ES5 hasta ES2024.",
      en: "LaTeX seminar on how JavaScript implements the four OOP pillars through its prototype-based model, and its evolution from ES5 to ES2024.",
    },
    overview: [
      {
        es: "El trabajo contrasta el modelo prototípico de JavaScript con los lenguajes clásicos basados en clases: objetos como diccionarios dinámicos, descriptores de propiedad, la cadena de prototipos y el slot interno [[Prototype]].",
        en: "The work contrasts JavaScript's prototypal model with classical class-based languages: objects as dynamic dictionaries, property descriptors, the prototype chain and the internal [[Prototype]] slot.",
      },
      {
        es: "Analiza cómo se materializa cada pilar de la POO — encapsulamiento con clausuras, WeakMaps, campos privados y símbolos; abstracción por duck typing; herencia prototípica frente a `class extends` y mixins; polimorfismo con despacho dinámico y `Symbol.hasInstance` — y cierra con las capacidades de metaprogramación posteriores a ES6: `Proxy`, `Reflect`, bloques de inicialización estática, iteradores y generadores.",
        en: "It analyzes how each OOP pillar materializes — encapsulation with closures, WeakMaps, private fields and symbols; abstraction through duck typing; prototypal inheritance versus `class extends` and mixins; polymorphism with dynamic dispatch and `Symbol.hasInstance` — closing with post-ES6 metaprogramming: `Proxy`, `Reflect`, static initialization blocks, iterators and generators.",
      },
    ],
    role: { es: "Autor principal (5 commits)", en: "Lead author (5 commits)" },
    technologies: ["JavaScript", "LaTeX", "POO"],
    team: [
      { login: "Pol4720", commits: 4, isAuthor: true },
      { login: "AbrahamRom", commits: 1 },
      { login: "Pol472", commits: 1, isAuthor: true },
    ],
    category: "web",
    visibility: "public",
    github: "https://github.com/Pol4720/JavaScript-seminar",
    course: { es: "Seminario de Lenguajes de Programación", en: "Programming Languages Seminar" },
    featured: false,
    year: "2024",
    status: "completed",
    language: "TeX",
    commits: 5,
  },
  {
    id: "tarea-ac",
    slug: "tarea-evaluativa-ac",
    title: { es: "Bolsa de Problemas — Arquitectura", en: "Problem Set — Computer Architecture" },
    summary: {
      es: "Resolución documentada de la bolsa de problemas de Arquitectura de Computadoras.",
      en: "Documented solutions to the Computer Architecture problem set.",
    },
    description: {
      es: "Resolución completa y documentada en LaTeX de la bolsa de problemas de Arquitectura de Computadoras, con desarrollo formal de cada ejercicio.",
      en: "Complete, LaTeX-documented solutions to the Computer Architecture problem set, with formal development of each exercise.",
    },
    role: { es: "Autor único (4 commits)", en: "Sole author (4 commits)" },
    technologies: ["LaTeX", "Arquitectura de Computadoras"],
    team: [{ login: "Pol472", commits: 4, isAuthor: true }],
    category: "systems",
    visibility: "public",
    github: "https://github.com/Pol4720/Tarea-Evaluativa-AC",
    course: { es: "Arquitectura de Computadoras", en: "Computer Architecture" },
    featured: false,
    year: "2024",
    status: "completed",
    language: "TeX",
    commits: 4,
  },
];
