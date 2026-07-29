import type { Project } from "./project-types";
import { img } from "./project-types";

/* ============================================================
   PRIVATE / PROFESSIONAL PROJECTS

   Work developed at the Finlay Vaccine Institute / BioCubaFarma,
   in clinical research, and in private client projects. The
   repositories are private, so no code links are published —
   instead each project carries real interface screenshots,
   architecture notes and verified commit counts.

   Screenshots were taken from the projects' own user manuals and
   technical reports, and only from screens showing demo or test
   data. Anything containing real clinical-trial records is
   deliberately excluded.
   ============================================================ */
export const privateProjects: Project[] = [
  {
    id: "finlai",
    slug: "finlai",
    title: { es: "FinlAI", en: "FinlAI" },
    summary: {
      es: "Asistente virtual multiagente con ontologías biomédicas y LLM locales.",
      en: "Multi-agent virtual assistant with biomedical ontologies and local LLMs.",
    },
    description: {
      es: "Asistente virtual del Instituto Finlay de Vacunas basado en agentes especializados: integra las ontologías Vaccine Ontology y Clinical Trial Ontology, modelos de lenguaje locales con Ollama y RAG sobre ChromaDB.",
      en: "Finlay Vaccine Institute virtual assistant built on specialized agents: it integrates the Vaccine Ontology and Clinical Trial Ontology, local language models via Ollama and RAG over ChromaDB.",
    },
    overview: [
      {
        es: "FinlAI resuelve un problema concreto del instituto: el conocimiento sobre vacunas y ensayos clínicos está repartido entre ontologías formales, documentos técnicos y bases de datos, y consultarlo exige saber de antemano dónde mirar. El sistema unifica ese acceso en una interfaz conversacional.",
        en: "FinlAI solves a concrete institutional problem: knowledge about vaccines and clinical trials is split across formal ontologies, technical documents and databases, and querying it requires knowing in advance where to look. The system unifies that access behind a conversational interface.",
      },
      {
        es: "La arquitectura es multiagente. Un agente Coordinador clasifica la intención de cada consulta y la enruta al especialista adecuado: el agente de Ontología ejecuta consultas SPARQL y búsqueda semántica sobre la Vaccine Ontology (VO) y la Clinical Trial Ontology (CTO); el agente de Conocimiento aplica RAG sobre documentos indexados en ChromaDB; y el agente de Chat atiende la conversación general sobre vacunas y biotecnología.",
        en: "The architecture is multi-agent. A Coordinator agent classifies each query's intent and routes it to the right specialist: the Ontology agent runs SPARQL queries and semantic search over the Vaccine Ontology (VO) and Clinical Trial Ontology (CTO); the Knowledge agent applies RAG over documents indexed in ChromaDB; and the Chat agent handles general conversation about vaccines and biotechnology.",
      },
      {
        es: "Todo el procesamiento de lenguaje se ejecuta con modelos locales servidos por Ollama, de modo que ningún dato institucional sale hacia servicios externos. La orquestación de flujos se apoya en n8n con reserva directa a Ollama si el servicio no está disponible.",
        en: "All language processing runs on local models served by Ollama, so no institutional data leaves for external services. Workflow orchestration relies on n8n with a direct Ollama fallback when the service is unavailable.",
      },
    ],
    role: { es: "Autor y desarrollador principal", en: "Author and lead developer" },
    contribution: {
      es: "Diseño completo de la arquitectura multiagente, integración de las ontologías biomédicas, implementación del backend FastAPI y del frontend React.",
      en: "Full design of the multi-agent architecture, integration of the biomedical ontologies, and implementation of the FastAPI backend and React frontend.",
    },
    technologies: ["Python", "FastAPI", "Ollama", "SPARQL", "ChromaDB", "React", "TypeScript"],
    stack: [
      { group: { es: "Backend", en: "Backend" }, items: ["Python 3.11", "FastAPI", "SQLAlchemy (async)", "PostgreSQL", "Alembic"] },
      { group: { es: "IA y ontologías", en: "AI & ontologies" }, items: ["Ollama", "rdflib (SPARQL)", "sentence-transformers", "ChromaDB", "Vaccine Ontology", "Clinical Trial Ontology"] },
      { group: { es: "Orquestación", en: "Orchestration" }, items: ["n8n", "Agentes especializados"] },
      { group: { es: "Frontend", en: "Frontend" }, items: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Zustand", "react-i18next"] },
      { group: { es: "Autenticación", en: "Auth" }, items: ["JWT (access + refresh)"] },
    ],
    features: [
      {
        title: { es: "Agente Coordinador", en: "Coordinator agent" },
        description: {
          es: "Clasifica la intención de cada consulta y la enruta al agente especializado correspondiente.",
          en: "Classifies each query's intent and routes it to the matching specialized agent.",
        },
      },
      {
        title: { es: "Consultas SPARQL sobre ontologías", en: "SPARQL queries over ontologies" },
        description: {
          es: "Búsqueda semántica y consultas formales sobre la Vaccine Ontology y la Clinical Trial Ontology.",
          en: "Semantic search and formal queries over the Vaccine Ontology and the Clinical Trial Ontology.",
        },
      },
      {
        title: { es: "RAG sobre documentos internos", en: "RAG over internal documents" },
        description: {
          es: "Recuperación aumentada sobre ChromaDB con citación de las fuentes usadas en cada respuesta.",
          en: "Retrieval-augmented generation over ChromaDB, citing the sources used in each answer.",
        },
      },
      {
        title: { es: "Ejecución 100% local", en: "Fully local execution" },
        description: {
          es: "Modelos servidos por Ollama en la propia infraestructura: ningún dato sale del instituto.",
          en: "Models served by Ollama on the institute's own infrastructure: no data ever leaves.",
        },
      },
    ],
    architecture: {
      diagram: `Coordinator  ──┬──> Chat        Conversación general
               ├──> Ontology    SPARQL sobre CTO / VO
               └──> Knowledge   RAG sobre ChromaDB

backend/    FastAPI · SQLAlchemy · PostgreSQL · Ollama · rdflib
frontend/   React 18 · TypeScript · Vite · Tailwind
KB/         Ontologías CTO y VO`,
    },
    gallery: [
      { src: img("finlai", "01-logo.webp"), caption: { es: "Identidad de FinlAI", en: "FinlAI identity" } },
      { src: img("finlai", "02-chat-welcome.webp"), caption: { es: "Pantalla de bienvenida del asistente", en: "Assistant welcome screen" } },
      { src: img("finlai", "03-chat-conversation.webp"), caption: { es: "Consulta resuelta por el agente de Ontología, con fuentes citadas", en: "Query answered by the Ontology agent, with cited sources" } },
      { src: img("finlai", "04-chat-kb.webp"), caption: { es: "Selector de bases de conocimiento por consulta", en: "Per-query knowledge base selector" } },
      { src: img("finlai", "05-documents.webp"), caption: { es: "Explorador de documentos con búsqueda semántica", en: "Document explorer with semantic search" } },
      { src: img("finlai", "06-admin-kb.webp"), caption: { es: "Administración de bases de conocimiento", en: "Knowledge base administration" } },
      { src: img("finlai", "07-admin-areas.webp"), caption: { es: "Gestión de áreas organizativas del instituto", en: "Institute organizational area management" } },
      { src: img("finlai", "08-login.webp"), caption: { es: "Acceso con autenticación JWT", en: "Sign-in with JWT authentication" } },
    ],
    category: "ai",
    visibility: "private",
    organization: "Instituto Finlay de Vacunas · BioCubaFarma",
    featured: true,
    year: "2026",
    status: "in-progress",
    language: "Python",
    commits: 73,
  },
  {
    id: "auditsoft",
    slug: "auditsoft",
    title: { es: "AuditSoft 2.0", en: "AuditSoft 2.0" },
    summary: {
      es: "Auditoría documental inteligente con extracción de metadatos por LLM.",
      en: "Intelligent document auditing with LLM-powered metadata extraction.",
    },
    description: {
      es: "Plataforma de auditoría documental que usa LLM locales para extraer metadatos estructurados, clasificar documentos por tipo y gestionar flujos de revisión y aprobación, con deduplicación, búsqueda ontológica y aplicación de escritorio.",
      en: "Document auditing platform that uses local LLMs to extract structured metadata, classify documents by type and manage review and approval workflows, with deduplication, ontology search and a desktop application.",
    },
    overview: [
      {
        es: "En el marco regulatorio de un ensayo clínico, cada documento debe estar clasificado, indexado y ser trazable. Hacerlo a mano sobre miles de ficheros es inviable. AuditSoft automatiza ese trabajo aplicando modelos de lenguaje sobre el contenido de cada documento.",
        en: "Within a clinical trial's regulatory framework, every document must be classified, indexed and traceable. Doing that by hand across thousands of files is unfeasible. AuditSoft automates the work by applying language models to each document's content.",
      },
      {
        es: "El núcleo del sistema son las plantillas de extracción: esquemas configurables por tipo de documento que definen qué metadatos deben obtenerse. El motor LLM, servido localmente con Ollama, rellena esos campos a partir del texto y propone valores contextuales que el auditor revisa y aprueba.",
        en: "The system's core is its extraction templates: per-document-type configurable schemas defining which metadata must be obtained. The LLM engine, served locally with Ollama, fills those fields from the text and proposes context-aware values that the auditor reviews and approves.",
      },
      {
        es: "Alrededor de esa base se construyeron módulos de deduplicación por grupos de similitud, clasificación jerárquica por categorías, búsqueda semántica con ontologías, explorador MongoDB, panel de analítica con exportación de reportes en PDF y una aplicación de escritorio empaquetada con Tauri.",
        en: "Around that foundation, modules were built for similarity-group deduplication, hierarchical category classification, ontology-backed semantic search, a MongoDB explorer, an analytics panel with PDF report export, and a desktop application packaged with Tauri.",
      },
      {
        es: "El proyecto incluye una evaluación empírica propia: métricas de recuperación (precisión/exhaustividad y nDCG por k), comparación de calidad entre modelos de lenguaje mediante BERTScore, y pruebas de carga con curvas de escalabilidad y distribución de latencias.",
        en: "The project includes its own empirical evaluation: retrieval metrics (precision/recall and nDCG at k), cross-model quality comparison via BERTScore, and load testing with scalability curves and latency distributions.",
      },
    ],
    role: { es: "Autor y desarrollador principal", en: "Author and lead developer" },
    contribution: {
      es: "Desarrollo completo del backend FastAPI, el frontend React, el motor de extracción con LLM, la aplicación de escritorio y el marco de evaluación experimental.",
      en: "Full development of the FastAPI backend, React frontend, LLM extraction engine, desktop application and experimental evaluation framework.",
    },
    technologies: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "Ollama", "Tauri"],
    stack: [
      { group: { es: "Backend", en: "Backend" }, items: ["Python 3.11", "FastAPI", "PostgreSQL", "MongoDB", "Celery"] },
      { group: { es: "IA", en: "AI" }, items: ["Ollama", "Extracción de metadatos con LLM", "OCR", "Ontologías"] },
      { group: { es: "Frontend", en: "Frontend" }, items: ["React 18", "TypeScript", "Tailwind CSS"] },
      { group: { es: "Escritorio", en: "Desktop" }, items: ["Tauri", "Rust"] },
      { group: { es: "Calidad", en: "Quality" }, items: ["GitHub Actions CI", "CodeQL", "pytest", "cobertura"] },
    ],
    features: [
      {
        title: { es: "Extracción de metadatos con IA", en: "AI metadata extraction" },
        description: {
          es: "Plantillas configurables por tipo de documento que el LLM rellena a partir del contenido.",
          en: "Per-document-type configurable templates the LLM fills from the content.",
        },
      },
      {
        title: { es: "Deduplicación por similitud", en: "Similarity deduplication" },
        description: {
          es: "Detección de documentos duplicados agrupados por clase, con resolución asistida.",
          en: "Detection of duplicate documents grouped by class, with assisted resolution.",
        },
      },
      {
        title: { es: "Clasificación jerárquica", en: "Hierarchical classification" },
        description: {
          es: "Categorías anidadas con revisión pendiente y aprobación por parte del auditor.",
          en: "Nested categories with pending review and auditor approval.",
        },
      },
      {
        title: { es: "Flujo de auditoría", en: "Audit workflow" },
        description: {
          es: "Revisión, aprobación y seguimiento del estado de cada documento con registro de actividad.",
          en: "Review, approval and status tracking for each document, with an activity log.",
        },
      },
      {
        title: { es: "Búsqueda semántica y ontologías", en: "Semantic search & ontologies" },
        description: {
          es: "Buscador sobre el corpus con relaciones ontológicas entre conceptos del dominio.",
          en: "Corpus-wide search with ontological relations between domain concepts.",
        },
      },
      {
        title: { es: "Aplicación de escritorio", en: "Desktop application" },
        description: {
          es: "Cliente nativo empaquetado con Tauri e instalador asistido.",
          en: "Native client packaged with Tauri, with a guided installer.",
        },
      },
    ],
    gallery: [
      { src: img("auditsoft", "01-logo.webp"), caption: { es: "Identidad de AuditSoft", en: "AuditSoft identity" } },
      { src: img("auditsoft", "02-login.webp"), caption: { es: "Pantalla de inicio de sesión", en: "Sign-in screen" } },
      { src: img("auditsoft", "03-dashboard.webp"), caption: { es: "Panel principal con estado de proyectos y alertas", en: "Main dashboard with project status and alerts" } },
      { src: img("auditsoft", "04-metadatos.webp"), caption: { es: "Gestión de metadatos con plantillas de IA", en: "Metadata management with AI templates" } },
      { src: img("auditsoft", "05-ontologia.webp"), caption: { es: "Búsqueda y relaciones ontológicas", en: "Ontology search and relations" } },
      { src: img("auditsoft", "06-llm.webp"), caption: { es: "Configuración del procesamiento con LLM", en: "LLM processing configuration" } },
      { src: img("auditsoft", "07-precision-recall.webp"), caption: { es: "Evaluación: precisión y exhaustividad por k", en: "Evaluation: precision and recall at k" } },
      { src: img("auditsoft", "08-calidad-llm.webp"), caption: { es: "Comparación de calidad entre modelos de lenguaje", en: "Quality comparison across language models" } },
      { src: img("auditsoft", "09-escalabilidad.webp"), caption: { es: "Prueba de carga: curva de escalabilidad", en: "Load test: scalability curve" } },
    ],
    metrics: [{ es: "Presentado en COMPUMAT 2025", en: "Presented at COMPUMAT 2025" }],
    category: "health",
    visibility: "private",
    organization: "Instituto Finlay de Vacunas · BioCubaFarma",
    featured: true,
    year: "2026",
    status: "in-progress",
    language: "Python",
    commits: 322,
  },
  {
    id: "hybrid-modeling",
    slug: "hybrid-modeling",
    title: { es: "Hybrid Modeling Platform", en: "Hybrid Modeling Platform" },
    summary: {
      es: "Plataforma web para componer modelos EDO, autómatas celulares, agentes y metamodelos.",
      en: "Web platform to compose ODE, cellular automata, agent-based and metamodel simulations.",
    },
    description: {
      es: "Plataforma full-stack de modelado epidemiológico que permite construir, simular y comparar modelos híbridos — EDO, autómatas celulares, modelos basados en agentes y metamodelos — mediante un editor visual de nodos.",
      en: "Full-stack epidemiological modeling platform for building, simulating and comparing hybrid models — ODEs, cellular automata, agent-based models and metamodels — through a visual node editor.",
    },
    overview: [
      {
        es: "Cada paradigma de modelado epidemiológico tiene su punto ciego: los modelos compartimentales ignoran el espacio, los autómatas celulares no capturan heterogeneidad individual, los modelos basados en agentes son costosos de simular. La plataforma permite componerlos entre sí en lugar de elegir uno.",
        en: "Every epidemiological modeling paradigm has a blind spot: compartmental models ignore space, cellular automata miss individual heterogeneity, agent-based models are expensive to simulate. The platform lets them be composed instead of choosing one.",
      },
      {
        es: "El constructor visual, basado en ReactFlow, permite arrastrar nodos de tipo EDO, autómata celular, ABM o metamodelo y conectarlos en tuberías de simulación unificadas, editando los parámetros de cada uno con validación en tiempo real.",
        en: "The ReactFlow-based visual builder lets ODE, cellular automaton, ABM and metamodel nodes be dragged and connected into unified simulation pipelines, with each one's parameters edited under real-time validation.",
      },
      {
        es: "Sobre los modelos construidos se ejecutan análisis de sensibilidad (índices de Sobol y cribado de Morris), cuantificación de incertidumbre por Monte Carlo, calibración automática de parámetros contra datos epidemiológicos reales con métricas de bondad de ajuste (RMSE, MAE, R², AIC, BIC), y módulos específicos de endemicidad, costo-beneficio y optimización.",
        en: "On top of the built models it runs sensitivity analysis (Sobol indices and Morris screening), Monte Carlo uncertainty quantification, automatic parameter calibration against real epidemiological data with goodness-of-fit metrics (RMSE, MAE, R², AIC, BIC), and dedicated endemicity, cost-benefit and optimization modules.",
      },
      {
        es: "El backend expone más de 80 endpoints REST organizados en routers modulares, y la interfaz ofrece tema claro y oscuro e internacionalización.",
        en: "The backend exposes 80+ REST endpoints organized into modular routers, and the interface offers light and dark themes plus internationalization.",
      },
    ],
    role: { es: "Autor y desarrollador principal", en: "Author and lead developer" },
    technologies: ["Python", "FastAPI", "React", "TypeScript", "ReactFlow", "SciPy", "Mesa"],
    stack: [
      { group: { es: "Motores de modelado", en: "Modeling engines" }, items: ["EDO (SIR, SEIR, SIRS)", "Autómatas celulares", "Modelos basados en agentes", "Metamodelos (Kriging, polinomial, red neuronal)"] },
      { group: { es: "Análisis", en: "Analysis" }, items: ["Sobol", "Morris", "Monte Carlo", "RMSE / MAE / R² / AIC / BIC"] },
      { group: { es: "Backend", en: "Backend" }, items: ["Python 3.11", "FastAPI", "SciPy", "80+ endpoints REST"] },
      { group: { es: "Frontend", en: "Frontend" }, items: ["React 18", "TypeScript", "ReactFlow", "Plotly"] },
    ],
    features: [
      {
        title: { es: "Constructor visual de modelos", en: "Visual model builder" },
        description: {
          es: "Editor de nodos ReactFlow para componer modelos híbridos arrastrando y conectando bloques.",
          en: "ReactFlow node editor to compose hybrid models by dragging and connecting blocks.",
        },
      },
      {
        title: { es: "Cuatro motores de simulación", en: "Four simulation engines" },
        description: {
          es: "EDO, autómatas celulares, modelos basados en agentes y metamodelos sustitutos, interoperables.",
          en: "ODEs, cellular automata, agent-based models and surrogate metamodels, all interoperable.",
        },
      },
      {
        title: { es: "Calibración contra datos reales", en: "Calibration against real data" },
        description: {
          es: "Estimación automática de parámetros por mínimos cuadrados y métodos bayesianos.",
          en: "Automatic parameter estimation via least squares and Bayesian methods.",
        },
      },
      {
        title: { es: "Análisis de sensibilidad", en: "Sensitivity analysis" },
        description: {
          es: "Índices de Sobol y cribado de Morris para identificar los parámetros más influyentes.",
          en: "Sobol indices and Morris screening to identify the most influential parameters.",
        },
      },
      {
        title: { es: "Endemicidad y costo-beneficio", en: "Endemicity & cost-benefit" },
        description: {
          es: "Módulos dedicados al análisis de equilibrio endémico y a la evaluación económica de intervenciones.",
          en: "Dedicated modules for endemic equilibrium analysis and economic evaluation of interventions.",
        },
      },
    ],
    gallery: [
      { src: img("hybrid-modeling", "01-dashboard.webp"), caption: { es: "Panel principal de la plataforma", en: "Platform main dashboard" } },
      { src: img("hybrid-modeling", "02-model-builder.webp"), caption: { es: "Constructor de modelos: selección del paradigma", en: "Model builder: paradigm selection" } },
      { src: img("hybrid-modeling", "03-model-builder-dark.webp"), caption: { es: "Constructor de modelos en tema oscuro", en: "Model builder in dark theme" } },
      { src: img("hybrid-modeling", "04-ode-builder.webp"), caption: { es: "Editor de modelos compartimentales (EDO)", en: "Compartmental (ODE) model editor" } },
      { src: img("hybrid-modeling", "05-abm-builder.webp"), caption: { es: "Editor de modelos basados en agentes", en: "Agent-based model editor" } },
      { src: img("hybrid-modeling", "06-optimizacion.webp"), caption: { es: "Módulo de optimización tras una corrida", en: "Optimization module after a run" } },
      { src: img("hybrid-modeling", "07-ajuste-resultados.webp"), caption: { es: "Resultados del ajuste de parámetros", en: "Parameter fitting results" } },
      { src: img("hybrid-modeling", "08-endemicidad.webp"), caption: { es: "Análisis de endemicidad", en: "Endemicity analysis" } },
      { src: img("hybrid-modeling", "09-proyectos.webp"), caption: { es: "Gestión de proyectos de modelado", en: "Modeling project management" } },
    ],
    metrics: [{ es: "Distinción «Relevante» en BIOQUIM 2025", en: "«Relevant» distinction at BIOQUIM 2025" }],
    category: "simulation",
    visibility: "private",
    organization: "Instituto Finlay de Vacunas · BioCubaFarma",
    featured: true,
    year: "2026",
    status: "in-progress",
    language: "Python",
    commits: 71,
  },
  {
    id: "vax-spiral",
    slug: "vax-spiral",
    title: { es: "vax-SPIRAL-CB", en: "vax-SPIRAL-CB" },
    summary: {
      es: "Evaluación costo-beneficio de estrategias de vacunación contra la leptospirosis.",
      en: "Cost-benefit evaluation of leptospirosis vaccination strategies.",
    },
    description: {
      es: "Marco computacional para la evaluación económica de programas de vacunación contra la leptospirosis: modelos compartimentales de transmisión, análisis de costo-efectividad con AVAD e incertidumbre paramétrica por análisis de sensibilidad probabilístico.",
      en: "Computational framework for the economic evaluation of leptospirosis vaccination programs: compartmental transmission models, DALY-based cost-effectiveness analysis and parametric uncertainty through probabilistic sensitivity analysis.",
    },
    overview: [
      {
        es: "Decidir si vacunar contra la leptospirosis, a quién y con qué cobertura, es una pregunta económica tanto como epidemiológica. vax-SPIRAL-CB une ambas dimensiones en una única herramienta de apoyo a la decisión.",
        en: "Deciding whether to vaccinate against leptospirosis, whom to vaccinate and at what coverage, is an economic question as much as an epidemiological one. vax-SPIRAL-CB unites both dimensions in a single decision-support tool.",
      },
      {
        es: "El componente epidemiológico usa modelos compartimentales SIR/SEIR calibrados a la dinámica de la leptospirosis, incorporando la vía de transmisión ambiental, la estacionalidad y los factores de riesgo ocupacional. El número reproductivo básico R₀ se deriva simbólicamente con SymPy.",
        en: "The epidemiological component uses SIR/SEIR compartmental models calibrated to leptospirosis dynamics, incorporating the environmental transmission pathway, seasonality and occupational risk factors. The basic reproduction number R₀ is derived symbolically with SymPy.",
      },
      {
        es: "El componente económico estima costos sanitarios directos (hospitalización, tratamiento, diagnóstico) y pérdidas de productividad por morbilidad y mortalidad, y calcula la razón de costo-efectividad incremental (ICER) frente a umbrales de disposición a pagar.",
        en: "The economic component estimates direct healthcare costs (hospitalization, treatment, diagnostics) and productivity losses from morbidity and mortality, computing the incremental cost-effectiveness ratio (ICER) against willingness-to-pay thresholds.",
      },
      {
        es: "La incertidumbre se trata con rigor: análisis de sensibilidad probabilístico por Monte Carlo, índices de Sobol y cribado de Morris con SALib, estimación bayesiana de parámetros por MCMC con emcee, y curvas de aceptabilidad de costo-efectividad.",
        en: "Uncertainty is handled rigorously: Monte Carlo probabilistic sensitivity analysis, Sobol indices and Morris screening with SALib, Bayesian parameter estimation via MCMC with emcee, and cost-effectiveness acceptability curves.",
      },
    ],
    role: { es: "Autor y desarrollador principal", en: "Author and lead developer" },
    technologies: ["Python", "SciPy", "SALib", "emcee", "SymPy", "Mesa", "NumPy"],
    stack: [
      { group: { es: "Modelado", en: "Modeling" }, items: ["SIR / SEIR", "SciPy (odeint, solve_ivp)", "Mesa (ABM)", "SymPy (R₀)"] },
      { group: { es: "Economía de la salud", en: "Health economics" }, items: ["AVAD / DALY", "ICER", "Curvas CEAC", "Umbrales de disposición a pagar"] },
      { group: { es: "Incertidumbre", en: "Uncertainty" }, items: ["SALib (Sobol, Morris)", "emcee (MCMC)", "Monte Carlo", "Diagramas de tornado"] },
    ],
    features: [
      {
        title: { es: "Modelo de transmisión ambiental", en: "Environmental transmission model" },
        description: {
          es: "Compartimentos que incluyen el reservorio ambiental y vectorial propio de la leptospirosis.",
          en: "Compartments including the environmental and vector reservoir specific to leptospirosis.",
        },
      },
      {
        title: { es: "Análisis costo-efectividad", en: "Cost-effectiveness analysis" },
        description: {
          es: "Cálculo de ICER y curvas de aceptabilidad frente a distintos umbrales de disposición a pagar.",
          en: "ICER computation and acceptability curves against different willingness-to-pay thresholds.",
        },
      },
      {
        title: { es: "Estimación bayesiana", en: "Bayesian estimation" },
        description: {
          es: "Distribuciones posteriores de los parámetros mediante muestreo MCMC con emcee.",
          en: "Posterior parameter distributions through MCMC sampling with emcee.",
        },
      },
      {
        title: { es: "Comparación de escenarios", en: "Scenario comparison" },
        description: {
          es: "Evaluación de estrategias por cobertura, calendario y población diana.",
          en: "Evaluation of strategies by coverage, schedule and target population.",
        },
      },
    ],
    gallery: [
      { src: img("vax-spiral", "01-modelo-seir.webp"), caption: { es: "Estructura del modelo compartimental SEIR", en: "SEIR compartmental model structure" } },
      { src: img("vax-spiral", "02-ajuste.webp"), caption: { es: "Comparación de ajustes del modelo", en: "Model fit comparison" } },
      { src: img("vax-spiral", "03-obs-vs-pred.webp"), caption: { es: "Observado frente a predicho", en: "Observed vs. predicted" } },
      { src: img("vax-spiral", "04-aic-bic.webp"), caption: { es: "Selección de modelo por AIC y BIC", en: "Model selection by AIC and BIC" } },
      { src: img("vax-spiral", "05-residuos.webp"), caption: { es: "Análisis de residuos", en: "Residual analysis" } },
      { src: img("vax-spiral", "06-vacunados.webp"), caption: { es: "Dinámica del compartimento de vacunados", en: "Vaccinated compartment dynamics" } },
      { src: img("vax-spiral", "07-infectados.webp"), caption: { es: "Dinámica del compartimento de infectados", en: "Infected compartment dynamics" } },
    ],
    category: "health",
    visibility: "private",
    organization: "Instituto Finlay de Vacunas · BioCubaFarma",
    featured: true,
    year: "2026",
    status: "in-progress",
    language: "Python",
    commits: 221,
  },
  {
    id: "mortality-ami-predictor",
    slug: "mortality-ami-predictor",
    title: { es: "Predictor de Mortalidad por IAM", en: "AMI Mortality Predictor" },
    summary: {
      es: "Predicción de mortalidad intrahospitalaria por infarto sobre 4 500 pacientes reales.",
      en: "In-hospital mortality prediction after myocardial infarction on 4,500 real patients.",
    },
    description: {
      es: "Modelos de aprendizaje automático para predecir mortalidad intrahospitalaria en pacientes con infarto agudo de miocardio, evaluados por discriminación, calibración y utilidad clínica, y comparados frente a las escalas clínicas GRACE y TIMI.",
      en: "Machine learning models predicting in-hospital mortality in acute myocardial infarction patients, evaluated by discrimination, calibration and clinical utility, and benchmarked against the GRACE and TIMI clinical scores.",
    },
    overview: [
      {
        es: "El estudio parte de un conjunto de datos clínicos reales de aproximadamente 4 500 pacientes, con variables demográficas, clínicas, de laboratorio y electrocardiográficas. El objetivo principal es predecir la mortalidad intrahospitalaria; como tarea secundaria se explora la predicción de arritmias ventriculares.",
        en: "The study is based on a real clinical dataset of roughly 4,500 patients, with demographic, clinical, laboratory and electrocardiographic variables. The primary goal is predicting in-hospital mortality; predicting ventricular arrhythmias is explored as a secondary task.",
      },
      {
        es: "Se entrenaron y compararon regresión logística, bosques aleatorios, XGBoost, LightGBM y redes neuronales. La evaluación no se limitó a la exactitud: se midieron discriminación (AUC-ROC), calibración (curvas de calibración) y utilidad clínica mediante análisis de curva de decisión, que es lo que determina si un modelo aporta valor real en la cabecera del paciente.",
        en: "Logistic regression, random forests, XGBoost, LightGBM and neural networks were trained and compared. Evaluation went beyond accuracy: discrimination (AUC-ROC), calibration (calibration curves) and clinical utility via decision curve analysis — which is what determines whether a model adds real value at the bedside.",
      },
      {
        es: "Un aspecto central fue el control de la fuga de datos: se ejecutó una corrida específica sin fuga para verificar que el rendimiento observado no dependía de información no disponible en el momento de la predicción. La interpretabilidad se abordó con SHAP y LIME, imprescindible para que el modelo pueda discutirse con personal médico.",
        en: "A central concern was data leakage control: a dedicated leak-free run verified that the observed performance did not depend on information unavailable at prediction time. Interpretability was addressed with SHAP and LIME, indispensable for the model to be discussed with medical staff.",
      },
    ],
    role: { es: "Autor principal (90 commits)", en: "Lead author (90 commits)" },
    contribution: {
      es: "Diseño del estudio, preprocesamiento, entrenamiento y evaluación de los modelos, análisis de interpretabilidad y comparación contra escalas clínicas internacionales.",
      en: "Study design, preprocessing, model training and evaluation, interpretability analysis and benchmarking against international clinical scores.",
    },
    technologies: ["Python", "XGBoost", "LightGBM", "scikit-learn", "SHAP", "LIME", "MLflow", "Docker"],
    stack: [
      { group: { es: "Modelos", en: "Models" }, items: ["Regresión logística", "Random Forest", "XGBoost", "LightGBM", "Redes neuronales"] },
      { group: { es: "Evaluación", en: "Evaluation" }, items: ["AUC-ROC", "Curvas de calibración", "Análisis de curva de decisión", "Curvas de aprendizaje"] },
      { group: { es: "Interpretabilidad", en: "Interpretability" }, items: ["SHAP", "LIME", "Importancia de variables"] },
      { group: { es: "Infraestructura", en: "Infrastructure" }, items: ["Docker", "MLflow", "Jupyter", "pytest (41 tests)", "GitHub Actions"] },
    ],
    features: [
      {
        title: { es: "Comparación con GRACE y TIMI", en: "Benchmark vs. GRACE and TIMI" },
        description: {
          es: "Contraste directo del modelo contra las escalas de riesgo clínicas usadas en la práctica.",
          en: "Direct comparison of the model against the risk scores used in clinical practice.",
        },
      },
      {
        title: { es: "Corrida sin fuga de datos", en: "Leak-free run" },
        description: {
          es: "Verificación explícita de que el rendimiento no depende de información futura.",
          en: "Explicit verification that performance does not depend on future information.",
        },
      },
      {
        title: { es: "Análisis de curva de decisión", en: "Decision curve analysis" },
        description: {
          es: "Medición del beneficio neto clínico del modelo a distintos umbrales de decisión.",
          en: "Measurement of the model's net clinical benefit across decision thresholds.",
        },
      },
      {
        title: { es: "Entorno reproducible", en: "Reproducible environment" },
        description: {
          es: "Dashboard, Jupyter y MLflow orquestados con Docker Compose y 41 pruebas automatizadas.",
          en: "Dashboard, Jupyter and MLflow orchestrated with Docker Compose and 41 automated tests.",
        },
      },
    ],
    gallery: [
      { src: img("mortality-ami-predictor", "01-logo.webp"), caption: { es: "Identidad del proyecto", en: "Project identity" } },
      { src: img("mortality-ami-predictor", "02-roc.webp"), caption: { es: "Curva ROC frente a escalas internacionales", en: "ROC curve vs. international scores" } },
      { src: img("mortality-ami-predictor", "03-calibracion.webp"), caption: { es: "Curva de calibración del modelo", en: "Model calibration curve" } },
      { src: img("mortality-ami-predictor", "04-shap-beeswarm.webp"), caption: { es: "Interpretabilidad SHAP: gráfico beeswarm", en: "SHAP interpretability: beeswarm plot" } },
      { src: img("mortality-ami-predictor", "05-curva-decision.webp"), caption: { es: "Análisis de curva de decisión (beneficio neto)", en: "Decision curve analysis (net benefit)" } },
      { src: img("mortality-ami-predictor", "06-matriz-confusion.webp"), caption: { es: "Matriz de confusión", en: "Confusion matrix" } },
      { src: img("mortality-ami-predictor", "07-importancia.webp"), caption: { es: "Importancia de las 20 variables principales", en: "Top 20 feature importance" } },
      { src: img("mortality-ami-predictor", "08-curva-aprendizaje.webp"), caption: { es: "Curva de aprendizaje de XGBoost", en: "XGBoost learning curve" } },
    ],
    team: [
      { login: "Pol4720", commits: 90, isAuthor: true },
      { login: "AbrahamRom", commits: 27 },
      { login: "abelponce03", commits: 14 },
    ],
    metrics: [{ es: "~4 500 pacientes analizados", en: "~4,500 patients analyzed" }],
    category: "ai",
    visibility: "private",
    organization: "MINSAP · Investigación clínica",
    course: { es: "Aprendizaje Automático", en: "Machine Learning" },
    featured: true,
    year: "2026",
    status: "completed",
    language: "Python",
    commits: 90,
  },
  {
    id: "muevelo",
    slug: "muevelo",
    title: { es: "Muévelo — Logística", en: "Muévelo — Logistics" },
    summary: {
      es: "Plataforma de mensajería y fletes para Cuba: backend, apps móviles y landing.",
      en: "Courier and freight platform for Cuba: backend, mobile apps and landing site.",
    },
    description: {
      es: "Plataforma de logística que conecta a personas y pymes que necesitan transportar mercancía con conductores independientes — almendrones, mensajeros, camiones, motos y bicicletas. Incluye backend en monorepo, aplicaciones móviles para cliente y conductor, y sitio de presentación.",
      en: "Logistics platform connecting people and small businesses that need to move goods with independent drivers — shared taxis, couriers, trucks, motorbikes and bicycles. It includes a monorepo backend, client and driver mobile apps, and a landing site.",
    },
    overview: [
      {
        es: "Muévelo aborda un problema real del contexto cubano: no existe una capa digital que conecte de forma fiable a quien necesita mover mercancía con quien tiene el vehículo para hacerlo. La plataforma cubre el ciclo completo, desde la solicitud del envío hasta la entrega y la valoración.",
        en: "Muévelo addresses a real problem in the Cuban context: there is no reliable digital layer connecting those who need goods moved with those who have the vehicle to do it. The platform covers the full cycle, from shipment request to delivery and rating.",
      },
      {
        es: "El backend es un monorepo gestionado con pnpm sobre Node.js, con PostgreSQL y Redis levantados mediante Docker Compose, migraciones versionadas, verificación de tipos y linting en todos los paquetes. La API está versionada y cubierta por una suite de integración que corre contra el backend real.",
        en: "The backend is a pnpm-managed Node.js monorepo, with PostgreSQL and Redis brought up via Docker Compose, versioned migrations, and type checking and linting across all packages. The API is versioned and covered by an integration suite that runs against the real backend.",
      },
      {
        es: "Las aplicaciones móviles se desarrollaron en Flutter, con clientes diferenciados para el usuario y el conductor. El cliente del conductor incorpora estadísticas con gráficas, tema claro y oscuro, e internacionalización español/inglés; se prestó atención explícita a la accesibilidad de las pantallas y al cacheado del perfil para funcionar con conectividad intermitente.",
        en: "The mobile applications were built in Flutter, with separate clients for the user and the driver. The driver client includes chart-based statistics, light and dark themes, and Spanish/English internationalization; explicit attention went to screen accessibility and profile caching so it works under intermittent connectivity.",
      },
    ],
    role: { es: "Contribuidor principal (82 commits)", en: "Top contributor (82 commits)" },
    contribution: {
      es: "Desarrollo del backend y de las aplicaciones móviles de cliente y conductor, incluidas las estadísticas, la internacionalización y la suite de pruebas de integración.",
      en: "Backend development and the client and driver mobile apps, including statistics, internationalization and the integration test suite.",
    },
    technologies: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Flutter", "Docker", "Astro"],
    stack: [
      { group: { es: "Backend", en: "Backend" }, items: ["Node.js 20", "TypeScript", "pnpm (monorepo)", "PostgreSQL", "Redis", "Docker Compose"] },
      { group: { es: "Móvil", en: "Mobile" }, items: ["Flutter", "Dart", "SQLite", "flutter_map", "i18n es/en"] },
      { group: { es: "Web", en: "Web" }, items: ["Astro", "TypeScript"] },
      { group: { es: "Calidad", en: "Quality" }, items: ["Typecheck", "ESLint", "Pruebas de integración"] },
    ],
    features: [
      {
        title: { es: "Dos aplicaciones móviles", en: "Two mobile apps" },
        description: {
          es: "Clientes independientes para el usuario que envía y para el conductor que transporta.",
          en: "Separate clients for the user sending goods and the driver transporting them.",
        },
      },
      {
        title: { es: "Guardia de zonas de cobertura", en: "Coverage zone guard" },
        description: {
          es: "Validación geográfica de las zonas donde el servicio está disponible.",
          en: "Geographic validation of the zones where the service is available.",
        },
      },
      {
        title: { es: "Estadísticas del conductor", en: "Driver statistics" },
        description: {
          es: "Panel con gráficas de actividad, ingresos y desempeño del conductor.",
          en: "Panel with charts of the driver's activity, earnings and performance.",
        },
      },
      {
        title: { es: "Accesibilidad e idiomas", en: "Accessibility & languages" },
        description: {
          es: "Pantallas accesibles, tema claro/oscuro e interfaz en español e inglés.",
          en: "Accessible screens, light/dark theme and a Spanish/English interface.",
        },
      },
    ],
    gallery: [
      { src: img("carguapp", "01-og.webp"), caption: { es: "Identidad de marca de Muévelo", en: "Muévelo brand identity" } },
      { src: img("carguapp", "02-hero.webp"), caption: { es: "Imagen principal del sitio de presentación", en: "Landing site hero image" } },
      { src: img("carguapp", "03-app-icon.webp"), caption: { es: "Icono de la aplicación móvil", en: "Mobile application icon" } },
    ],
    team: [
      { login: "P57749", commits: 137 },
      { login: "Pol4720", commits: 82, isAuthor: true },
      { login: "abelponce03", commits: 51 },
    ],
    category: "web",
    visibility: "private",
    featured: true,
    year: "2026",
    status: "in-progress",
    language: "TypeScript",
    commits: 82,
  },
  {
    id: "ml-studio",
    slug: "ml-studio",
    title: { es: "ML Studio", en: "ML Studio" },
    summary: {
      es: "Entorno AutoML con interpretabilidad y optimización inversa de variables clínicas.",
      en: "AutoML environment with interpretability and inverse optimization of clinical variables.",
    },
    description: {
      es: "Entorno de modelado que automatiza la selección de algoritmos y el ajuste de hiperparámetros, acompañado de análisis de interpretabilidad con SHAP y un módulo de optimización inversa sobre variables clínicas modificables.",
      en: "Modeling environment automating algorithm selection and hyperparameter tuning, paired with SHAP interpretability analysis and an inverse-optimization module over modifiable clinical variables.",
    },
    overview: [
      {
        es: "ML Studio nació como generalización del trabajo hecho en el predictor de mortalidad por IAM: en lugar de un modelo concreto para un problema concreto, un entorno reutilizable que automatiza el ciclo completo de modelado sobre cualquier conjunto de datos clínicos tabulares.",
        en: "ML Studio grew out of the work done on the AMI mortality predictor: instead of one model for one problem, a reusable environment automating the full modeling cycle over any tabular clinical dataset.",
      },
      {
        es: "El módulo de optimización inversa recorre el espacio de las variables modificables para identificar qué combinaciones de valores clínicos reducirían el riesgo estimado, convirtiendo un modelo predictivo en una herramienta accionable.",
        en: "The inverse optimization module explores the space of modifiable variables to identify which combinations of clinical values would reduce the estimated risk, turning a predictive model into an actionable tool.",
      },
    ],
    role: { es: "Autor y desarrollador principal", en: "Author and lead developer" },
    technologies: ["Python", "AutoML", "FLAML", "SHAP", "scikit-learn", "XGBoost"],
    stack: [
      { group: { es: "AutoML", en: "AutoML" }, items: ["FLAML", "Optuna", "Validación cruzada"] },
      { group: { es: "Modelos", en: "Models" }, items: ["scikit-learn", "XGBoost", "LightGBM"] },
      { group: { es: "Interpretabilidad", en: "Interpretability" }, items: ["SHAP", "Curvas ROC", "Calibración"] },
    ],
    gallery: [
      { src: img("ml-studio", "01-logo.webp"), caption: { es: "Identidad de ML Studio", en: "ML Studio identity" } },
    ],
    category: "ai",
    visibility: "private",
    organization: "MINSAP · Investigación clínica",
    featured: false,
    year: "2026",
    status: "in-progress",
    language: "Python",
    commits: 37,
  },
  {
    id: "clinical-trial-db",
    slug: "clinical-trial-db",
    title: { es: "Diseño de BD — Ensayo Clínico ISCANI", en: "Clinical Trial DB Design — ISCANI" },
    summary: {
      es: "Base de datos relacional en 3FN para el ensayo clínico ISCANI de la vacuna VCN7-T.",
      en: "3NF relational database for the ISCANI clinical trial of the VCN7-T vaccine.",
    },
    description: {
      es: "Diseño de base de datos relacional (13+ tablas, tercera forma normal) para el ensayo clínico ISCANI de la vacuna VCN7-T: participantes, tratamientos y dosis, lotes de vacuna, eventos adversos y trazabilidad regulatoria.",
      en: "Relational database design (13+ tables, third normal form) for the ISCANI clinical trial of the VCN7-T vaccine: participants, treatments and doses, vaccine lots, adverse events and regulatory traceability.",
    },
    overview: [
      {
        es: "El modelo de datos cubre el ciclo completo del ensayo: registro de participantes con estado de salud inicial y percentil nutricional, tratamientos con grupo, sitio, lote y fechas de primera y segunda dosis, catálogo de vacunas con fabricante, caducidad y temperatura de conservación, y registro de eventos adversos con intensidad, relación de causalidad y acción tomada.",
        en: "The data model covers the trial's full cycle: participant registration with baseline health status and nutritional percentile, treatments with group, site, lot and first/second dose dates, a vaccine catalogue with manufacturer, expiry and storage temperature, and adverse event logging with intensity, causality relation and action taken.",
      },
      {
        es: "El diseño se normalizó hasta tercera forma normal para eliminar redundancias que comprometerían la integridad de los datos, y se complementó con restricciones de integridad referencial y cardinalidades explícitas que codifican las reglas del protocolo — por ejemplo, que cada participante recibe como máximo dos dosis del tratamiento.",
        en: "The design was normalized to third normal form to eliminate redundancies that would compromise data integrity, complemented with referential integrity constraints and explicit cardinalities encoding the protocol's rules — for instance, that each participant receives at most two treatment doses.",
      },
    ],
    role: { es: "Diseñador principal de base de datos (27 commits)", en: "Lead database designer (27 commits)" },
    technologies: ["PostgreSQL", "Modelado ER", "3FN", "SQL"],
    stack: [
      { group: { es: "Modelado", en: "Modeling" }, items: ["Diagrama entidad-relación extendido", "Tercera forma normal", "Cardinalidades del protocolo"] },
      { group: { es: "Implementación", en: "Implementation" }, items: ["PostgreSQL", "SQL", "Integridad referencial"] },
    ],
    gallery: [
      { src: img("clinical-trial-db", "01-modelo-er.webp"), caption: { es: "Modelo entidad-relación del ensayo: participantes, tratamientos, vacunas y eventos adversos", en: "Trial entity-relationship model: participants, treatments, vaccines and adverse events" } },
      { src: img("clinical-trial-db", "02-arquitectura.webp"), caption: { es: "Arquitectura del sistema", en: "System architecture" } },
      { src: img("clinical-trial-db", "03-pipeline.webp"), caption: { es: "Pipeline de procesamiento de datos", en: "Data processing pipeline" } },
    ],
    team: [
      { login: "Pol4720", commits: 27, isAuthor: true },
      { login: "rleodav", commits: 9 },
    ],
    category: "data",
    visibility: "private",
    organization: "Instituto Finlay de Vacunas · BioCubaFarma",
    featured: false,
    year: "2025",
    status: "completed",
    language: "SQL",
    commits: 27,
  },
  {
    id: "smart-travel-agent",
    slug: "smart-travel-agent",
    title: { es: "Smart Travel Agent", en: "Smart Travel Agent" },
    summary: {
      es: "Asistente de viajes con LangGraph y cadena de reserva entre cuatro proveedores de LLM.",
      en: "Travel assistant with LangGraph and a fallback chain across four LLM providers.",
    },
    description: {
      es: "Asistente de viajes conversacional con backend FastAPI y frontend React + TypeScript: planificación con LangGraph, memoria persistente, respuestas en streaming y cadena automática de reserva entre Ollama, OpenAI, Anthropic y Groq.",
      en: "Conversational travel assistant with a FastAPI backend and React + TypeScript frontend: LangGraph planning, persistent memory, streaming responses and an automatic fallback chain across Ollama, OpenAI, Anthropic and Groq.",
    },
    overview: [
      {
        es: "El rasgo más interesante del sistema es su tolerancia a fallos a nivel de modelo: la cadena de proveedores intenta primero Ollama en local y, si no está disponible, escala automáticamente a OpenAI, Anthropic y Groq. El asistente sigue funcionando aunque falle cualquier eslabón.",
        en: "The system's most interesting trait is model-level fault tolerance: the provider chain tries local Ollama first and, if unavailable, automatically escalates to OpenAI, Anthropic and Groq. The assistant keeps working even if any link fails.",
      },
      {
        es: "La planificación conversacional se orquesta con LangGraph sobre un conjunto de herramientas: búsqueda de destinos, previsión meteorológica, estimación de presupuesto, generación de itinerarios y búsqueda de vuelos y hoteles. Una capa de memoria conserva el contexto y las preferencias del usuario entre turnos.",
        en: "Conversational planning is orchestrated with LangGraph over a tool set: destination search, weather forecasting, budget estimation, itinerary generation, and flight and hotel search. A memory layer preserves context and user preferences across turns.",
      },
      {
        es: "Las respuestas se entregan en streaming mediante Server-Sent Events, y un módulo de integración con Telegram permite extraer ofertas de viaje y datos meteorológicos de canales y grupos.",
        en: "Responses are streamed via Server-Sent Events, and a Telegram integration module pulls travel offers and weather data from channels and groups.",
      },
    ],
    role: { es: "Autor y desarrollador principal", en: "Author and lead developer" },
    technologies: ["Python", "FastAPI", "LangGraph", "React", "TypeScript", "Ollama", "SSE"],
    stack: [
      { group: { es: "Backend", en: "Backend" }, items: ["FastAPI", "Uvicorn", "Pydantic Settings"] },
      { group: { es: "IA", en: "AI" }, items: ["LangChain", "LangGraph", "Ollama", "OpenAI", "Anthropic", "Groq"] },
      { group: { es: "Frontend", en: "Frontend" }, items: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"] },
      { group: { es: "Integraciones", en: "Integrations" }, items: ["Telethon (MTProto)", "python-telegram-bot", "Server-Sent Events"] },
      { group: { es: "Calidad", en: "Quality" }, items: ["pytest", "pytest-asyncio", "Ruff", "Black", "Mypy", "MkDocs Material"] },
    ],
    features: [
      {
        title: { es: "Cadena de reserva multi-LLM", en: "Multi-LLM fallback chain" },
        description: {
          es: "Ollama local primero, con escalado automático a OpenAI, Anthropic y Groq si falla.",
          en: "Local Ollama first, automatically escalating to OpenAI, Anthropic and Groq on failure.",
        },
      },
      {
        title: { es: "Memoria conversacional", en: "Conversational memory" },
        description: {
          es: "Contexto y preferencias del usuario conservados a lo largo de toda la conversación.",
          en: "User context and preferences preserved across the whole conversation.",
        },
      },
      {
        title: { es: "Respuestas en streaming", en: "Streaming responses" },
        description: {
          es: "Server-Sent Events con indicadores de escritura en la interfaz React.",
          en: "Server-Sent Events with typing indicators in the React interface.",
        },
      },
      {
        title: { es: "Integración con Telegram", en: "Telegram integration" },
        description: {
          es: "Extracción de ofertas de viaje y datos meteorológicos desde canales y grupos.",
          en: "Extraction of travel offers and weather data from channels and groups.",
        },
      },
    ],
    category: "ai",
    visibility: "private",
    featured: false,
    year: "2026",
    status: "in-progress",
    language: "Python",
    commits: 9,
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
      es: "Simulador computacional del sistema inmune humano: modelos basados en agentes, ecuaciones diferenciales y procesos estocásticos (Gillespie), con API REST en FastAPI y cómputo distribuido con Celery y Redis.",
      en: "Computational simulator of the human immune system: agent-based models, differential equations and stochastic processes (Gillespie), with a FastAPI REST API and distributed computing via Celery and Redis.",
    },
    overview: [
      {
        es: "Simmunity modela la respuesta inmune combinando tres formalismos complementarios: agentes individuales que representan células con reglas de comportamiento propias, ecuaciones diferenciales para las poblaciones agregadas, y el algoritmo de Gillespie para los eventos moleculares donde la estocasticidad importa.",
        en: "Simmunity models the immune response by combining three complementary formalisms: individual agents representing cells with their own behavioral rules, differential equations for aggregate populations, and the Gillespie algorithm for molecular events where stochasticity matters.",
      },
      {
        es: "Como las simulaciones estocásticas requieren muchas réplicas independientes para obtener intervalos de confianza útiles, el sistema distribuye las corridas mediante colas de tareas (Celery sobre Redis) y expone los resultados a través de una API REST.",
        en: "Since stochastic simulations require many independent replications to obtain useful confidence intervals, the system distributes runs through task queues (Celery over Redis) and exposes results through a REST API.",
      },
    ],
    role: { es: "Autor y desarrollador principal", en: "Author and lead developer" },
    technologies: ["Python", "Mesa (ABM)", "Gillespie", "FastAPI", "Celery", "Redis"],
    stack: [
      { group: { es: "Simulación", en: "Simulation" }, items: ["Mesa (ABM)", "EDO", "Gillespie (SSA)", "NumPy"] },
      { group: { es: "Infraestructura", en: "Infrastructure" }, items: ["FastAPI", "Celery", "Redis", "MkDocs"] },
    ],
    category: "simulation",
    visibility: "private",
    organization: "Investigación",
    featured: false,
    year: "2026",
    status: "in-progress",
    language: "Python",
    commits: 6,
  },
];
