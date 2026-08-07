// Structured CV content — EN & ES. Mirrors the original PDFs 1:1 (no info dropped),
// just reorganized so it fits 2 dense, ATS-parseable pages with real selectable text.

export const EN = {
  locale: "en",
  name: "Richard A. Matos Arderí",
  title: "Computer Scientist · Data Science, ML & AI · Full-Stack Developer",
  location: "Havana, Cuba",
  phone: "+53 5825 8556",
  email: "matosrichard58@gmail.com",
  github: "github.com/Pol4720",
  githubUrl: "https://github.com/Pol4720",
  linkedinUrl: "https://www.linkedin.com/in/richard-matos-arderí",
  linkedinLabel: "LinkedIn",

  profile:
    "Computer Scientist trained at MATCOM (University of Havana), specializing in Data Science, Machine Learning and Artificial Intelligence, with strong full-stack and web development experience. Awarded the Scientific Merit Prize for an outstanding research record. Currently a Consultant Specialist at the Finlay Vaccine Institute (BioCubaFarma), where I design AI-powered platforms — multi-agent systems, RAG pipelines and AutoML workflows — and ship web, mobile and desktop applications. I take products end to end, from data and mathematical modeling to polished, deployable software across web, Android, iOS and desktop.",

  stats: [
    { value: "4.71", label: "Academic GPA / 5.00" },
    { value: "6+", label: "Publications & talks" },
    { value: "3", label: "Awards & distinctions" },
    { value: "24", label: "Software projects" },
  ],

  languages: [
    { name: "Spanish", level: "Native", pct: 100 },
    { name: "English", level: "C1 · Advanced", pct: 85 },
    { name: "French", level: "A2 · Elementary", pct: 30 },
  ],

  honors: [
    { title: "Scientific Merit Prize", sub: "Cuban Higher Education · 2026" },
    { title: "1st Place · Honors Examination in Ordinary Differential Equations", sub: "MATCOM, UH · 2026" },
    { title: "“Relevant” paper at BIOQUIM 2025", sub: "Hybrid modeling of leptospirosis with vaccination" },
  ],

  researchInterests: [
    "Biomedical AI",
    "Epidemiological Modeling",
    "Vaccine Development",
    "Mathematical Biology",
    "Distributed Systems",
  ],

  skillGroups: [
    { h: "Programming Languages", v: "Python · Rust · TypeScript / JavaScript · C · C++ · C# · R · Haskell · Prolog · SQL · LaTeX" },
    { h: "Data Science & ML", v: "scikit-learn · PyTorch · TensorFlow · XGBoost · LightGBM · CatBoost · SHAP · LIME · MLflow · NumPy · Pandas · SciPy · SymPy" },
    { h: "AI / Agents / NLP", v: "LangChain · LangGraph · RAG · Multi-agent systems · AutoML (FLAML) · n8n · HuggingFace · Ollama · ChromaDB · Ontologies & SPARQL (rdflib)" },
    { h: "Modeling & Simulation", v: "ODE / SEIR models · Agent-based modeling (Mesa) · Cellular automata · Markov chains (CTMC) · Metaheuristics (GA, SA, Tabu, GRASP) · Sensitivity analysis (SALib/Sobol)" },
    { h: "Databases", v: "PostgreSQL · MySQL · SQL Server · MongoDB · Redis · SQLAlchemy / Alembic" },
    { h: "Web & Full-Stack", v: "React · Next.js · Node.js · FastAPI · Django · Tailwind CSS · REST APIs · WebSockets" },
    { h: "Mobile & Desktop", v: "Flutter · Android · iOS · React Native · Electron / Tauri" },
    { h: "Big Data & Distributed", v: "Hadoop · HDFS · PySpark · Celery · Redis · Distributed crawling & indexing" },
    { h: "DevOps & Tools", v: "Docker · Docker Compose · Git · GitHub Actions (CI/CD) · CodeQL · Linux" },
    { h: "QA & Testing", v: "pytest · unittest · Selenium · Cypress · Playwright · Postman · JMeter · TDD · SonarQube · ruff / black / mypy" },
  ],

  experience: [
    {
      role: "Consultant Specialist",
      org: "Finlay Vaccine Institute (IFV) · BioCubaFarma",
      dates: "Mar 2025 – Present",
      desc: "Data-science and AI consulting for vaccine development: epidemiological modeling, clinical-data integration and auditing, and the design of predictive models and supporting software within IFV and BioCubaFarma projects.",
    },
  ],

  education: [
    {
      degree: "B.Sc. in Computer Science",
      org: "Faculty of Mathematics and Computer Science (MATCOM), University of Havana",
      dates: "Jan 2023 – Jun 2026",
      detail: "GPA: 4.71 / 5.00 · Cohort C411.",
    },
    {
      degree: "Diploma in Clinical Trials",
      org: "Center for Genetic Engineering and Biotechnology (CIGB) · BioCubaFarma",
      dates: "2025",
      detail: "Specialized postgraduate training in the design, conduct, regulation and data management of clinical trials.",
    },
    {
      degree: "International Winter School",
      org: "University of Havana",
      dates: "2026",
      detail: "Intensive program of international scientific training and exchange.",
    },
  ],

  projectsHeading: "Featured Projects",
  projects: [
    { name: "FinlAI", tags: "AI · AutoML · Health", desc: "AI platform for optimizing vaccine development through integrated data management at the Finlay Vaccine Institute: multi-agent systems, RAG pipelines and AutoML workflows over clinical-trial data." },
    { name: "Hybrid Modeling", tags: "ODE · ML · Epidemiology", desc: "System for epidemiological modeling combining differential-equation models with machine learning; applied to leptospirosis transmission and the evaluation of vaccination strategies." },
    { name: "AuditSoft", tags: "Audit · Clinical data", desc: "Software for auditing clinical-trial data, ensuring quality, traceability and integrity of information within the IFV regulatory framework. Presented at COMPUMAT 2025." },
    { name: "ML Studio", tags: "AutoML · Predictive models", desc: "Machine-learning modeling environment for predicting in-hospital mortality from AMI and performing inverse optimization of clinical variables, with interpretability (SHAP) and validation." },
    { name: "Simmunity", tags: "ABM · ODE · FastAPI · Distributed", desc: "Computational simulator of the human immune system: agent-based, ODE and stochastic (Gillespie) models, a FastAPI REST layer, and distributed computing with Celery/Redis." },
    { name: "Clinical Trial DB Design", tags: "PostgreSQL · ER Modeling", desc: "Relational database design (13+ tables, 3NF) for the ISCANI clinical trial of the VCN7-T vaccine: patients, randomization, adverse events and regulatory audit trail." },
    { name: "climaXtreme", tags: "PySpark · HDFS · Docker", desc: "Analysis and modeling of extreme climate events over 8.6M+ records with Hadoop and PySpark; Streamlit dashboard, ML predictions and full Docker deployment." },
    { name: "HULK-Compiler-RS", tags: "Rust · Compilers", desc: "A complete compiler for the HULK language in Rust: lexical, syntactic and semantic analysis, and garbage collection, focused on performance and safety." },
    { name: "DistriSearch", tags: "Python · Distributed", desc: "Distributed search engine with distributed crawling, indexing and query processing (Distributed Systems final project)." },
  ],

  conferenceHeading: "Conference Contributions",
  conference: [
    { title: "“Hybrid Modeling: A system for epidemiological modeling”", venue: "XLI Scientific Conference, Faculty of Physics, UH · May 2026" },
    { title: "“AuditSoft: Software for auditing clinical-trial data”", venue: "COMPUMAT 2025 · International" },
    { title: "“ODE Mathematical Model for leptospirosis transmission”", venue: "COMPUMAT 2025 · International" },
    { title: "“Hybrid Modeling of leptospirosis transmission with vaccination strategies”", venue: "BIOQUIM 2025 · National · “Relevant” distinction" },
    { title: "“Interactive Web Application for predicting Acute Myocardial Infarction”", venue: "BIOQUIM 2025 · National · with A. Ponce González" },
    { title: "“ML models for in-hospital AMI mortality prediction and inverse optimization of clinical variables”", venue: "BIOQUIM 2025 · National · with A. Ponce González, A. Romero Imbert" },
  ],

  researchProjectsHeading: "Research Projects",
  researchProjects: [
    { title: "Optimizing vaccine development through integrated data management and AI", org: "Finlay Vaccine Institute (IFV) · BioCubaFarma" },
    { title: "Data Ecosystem Evolution Project", org: "DICEI · IFV · BioCubaFarma" },
    { title: "Development of a novel vaccine against Leptospirosis", org: "IFV · BioCubaFarma" },
    { title: "AMI registry with variable homogenization and quality indicators in Cuba", org: "“Dr. Ernesto Guevara de la Serna” Teaching Hospital · MINSAP" },
    { title: "VLIR-UOS: Integrated Real-Time Dengue Surveillance in Cuba for Outbreak Prediction", org: "VLIR-UOS international cooperation" },
  ],

  labels: {
    languages: "Languages",
    honors: "Honors & Awards",
    interests: "Research Interests",
    profile: "Profile",
    skills: "Technical Skills",
    experience: "Professional Experience",
    education: "Education",
  },
};

export const ES = {
  locale: "es",
  name: "Richard A. Matos Arderí",
  title: "Científico de la Computación · Ciencia de Datos, ML e IA · Desarrollador Full-Stack",
  location: "La Habana, Cuba",
  phone: "+53 5825 8556",
  email: "matosrichard58@gmail.com",
  github: "github.com/Pol4720",
  githubUrl: "https://github.com/Pol4720",
  linkedinUrl: "https://www.linkedin.com/in/richard-matos-arderí",
  linkedinLabel: "LinkedIn",

  profile:
    "Científico de la Computación formado en MATCOM (Universidad de La Habana), especializado en Ciencia de Datos, Aprendizaje Automático e Inteligencia Artificial, con sólida experiencia en desarrollo full-stack y web. Galardonado con el Premio al Mérito Científico por una trayectoria investigadora destacada. Actualmente Especialista Consultor en el Instituto Finlay de Vacunas (BioCubaFarma), donde diseño plataformas potenciadas por IA — sistemas multiagente, pipelines RAG y flujos AutoML — y desarrollo aplicaciones web, móviles y de escritorio. Llevo los productos de extremo a extremo, desde la modelación matemática y de datos hasta software pulido y desplegable en web, Android, iOS y escritorio.",

  stats: [
    { value: "4.71", label: "Índice académico / 5.00" },
    { value: "6+", label: "Publicaciones y ponencias" },
    { value: "3", label: "Premios y distinciones" },
    { value: "24", label: "Proyectos de software" },
  ],

  languages: [
    { name: "Español", level: "Nativo", pct: 100 },
    { name: "Inglés", level: "C1 · Avanzado", pct: 85 },
    { name: "Francés", level: "A2 · Básico", pct: 30 },
  ],

  honors: [
    { title: "Premio al Mérito Científico", sub: "Educación Superior de Cuba · 2026" },
    { title: "1er Lugar · Examen de Premio de Ecuaciones Diferenciales Ordinarias", sub: "MATCOM, UH · 2026" },
    { title: "Trabajo «Relevante» en BIOQUIM 2025", sub: "Modelado híbrido de leptospirosis con vacunación" },
  ],

  researchInterests: [
    "IA Biomédica",
    "Modelación Epidemiológica",
    "Desarrollo de Vacunas",
    "Biología Matemática",
    "Sistemas Distribuidos",
  ],

  skillGroups: [
    { h: "Lenguajes de Programación", v: "Python · Rust · TypeScript / JavaScript · C · C++ · C# · R · Haskell · Prolog · SQL · LaTeX" },
    { h: "Ciencia de Datos & ML", v: "scikit-learn · PyTorch · TensorFlow · XGBoost · LightGBM · CatBoost · SHAP · LIME · MLflow · NumPy · Pandas · SciPy · SymPy" },
    { h: "IA / Agentes / NLP", v: "LangChain · LangGraph · RAG · Sistemas multiagente · AutoML (FLAML) · n8n · HuggingFace · Ollama · ChromaDB · Ontologías & SPARQL (rdflib)" },
    { h: "Modelación & Simulación", v: "Modelos EDO / SEIR · Modelado basado en agentes (Mesa) · Automatización celular · Cadenas de Markov (CTMC) · Metaheurísticas (GA, SA, Tabú, GRASP) · Análisis de sensibilidad (SALib/Sobol)" },
    { h: "Bases de Datos", v: "PostgreSQL · MySQL · SQL Server · MongoDB · Redis · SQLAlchemy / Alembic" },
    { h: "Web & Full-Stack", v: "React · Next.js · Node.js · FastAPI · Django · Tailwind CSS · REST APIs · WebSockets" },
    { h: "Móvil & Escritorio", v: "Flutter · Android · iOS · React Native · Electron / Tauri" },
    { h: "Big Data & Distribuidos", v: "Hadoop · HDFS · PySpark · Celery · Redis · Crawling e indexación distribuida" },
    { h: "DevOps & Herramientas", v: "Docker · Docker Compose · Git · GitHub Actions (CI/CD) · CodeQL · Linux" },
    { h: "QA & Testing", v: "pytest · unittest · Selenium · Cypress · Playwright · Postman · JMeter · TDD · SonarQube · ruff / black / mypy" },
  ],

  experience: [
    {
      role: "Especialista Consultor",
      org: "Instituto Finlay de Vacunas (IFV) · BioCubaFarma",
      dates: "Mar 2025 – Presente",
      desc: "Consultoría en ciencia de datos e IA para el desarrollo de vacunas: modelación epidemiológica, integración y auditoría de datos clínicos, y diseño de modelos predictivos y software de soporte en proyectos del IFV y BioCubaFarma.",
    },
  ],

  education: [
    {
      degree: "Lic. en Ciencia de la Computación",
      org: "Facultad de Matemática y Computación (MATCOM), Universidad de La Habana",
      dates: "Ene 2023 – Jun 2026",
      detail: "Índice académico: 4.71 / 5.00 · Brigada C411.",
    },
    {
      degree: "Diplomado en Ensayos Clínicos",
      org: "Centro de Ingeniería Genética y Biotecnología (CIGB) · BioCubaFarma",
      dates: "2025",
      detail: "Formación de posgrado especializada en el diseño, conducción, regulación y gestión de datos de ensayos clínicos.",
    },
    {
      degree: "Escuela Internacional de Invierno",
      org: "Universidad de La Habana",
      dates: "2026",
      detail: "Programa intensivo de formación e intercambio científico internacional.",
    },
  ],

  projectsHeading: "Proyectos Destacados",
  projects: [
    { name: "FinlAI", tags: "IA · AutoML · Salud", desc: "Plataforma de IA para la optimización del desarrollo de vacunas mediante gestión integrada de datos en el Instituto Finlay de Vacunas: sistemas multiagente, pipelines RAG y flujos AutoML sobre datos de ensayos clínicos." },
    { name: "Hybrid Modeling", tags: "EDO · ML · Epidemiología", desc: "Sistema para el modelado epidemiológico que combina modelos basados en ecuaciones diferenciales con aprendizaje automático; aplicado a la transmisión de la leptospirosis y la evaluación de estrategias de vacunación." },
    { name: "AuditSoft", tags: "Auditoría · Datos clínicos", desc: "Software para la auditoría de datos de ensayos clínicos, orientado a garantizar la calidad, trazabilidad e integridad de la información en el marco regulatorio del IFV. Presentado en COMPUMAT 2025." },
    { name: "ML Studio", tags: "AutoML · Modelos predictivos", desc: "Entorno de modelado de aprendizaje automático para la predicción de mortalidad intrahospitalaria por IAM y la optimización inversa de variables clínicas, con interpretabilidad (SHAP) y validación." },
    { name: "Simmunity", tags: "ABM · EDO · FastAPI · Distribuidos", desc: "Simulador computacional del sistema inmune humano: modelos basados en agentes, EDO y procesos estocásticos (Gillespie), API REST con FastAPI y cómputo distribuido con Celery/Redis." },
    { name: "Clinical Trial DB Design", tags: "PostgreSQL · Modelado ER", desc: "Diseño de base de datos relacional (13+ tablas, 3FN) para el ensayo clínico ISCANI de la vacuna VCN7-T: pacientes, aleatorización, eventos adversos y trazabilidad regulatoria." },
    { name: "climaXtreme", tags: "PySpark · HDFS · Docker", desc: "Análisis y modelación de eventos climáticos extremos sobre 8.6M+ de registros con Hadoop y PySpark; dashboard en Streamlit, predicciones con ML y despliegue completo en Docker." },
    { name: "HULK-Compiler-RS", tags: "Rust · Compiladores", desc: "Compilador completo del lenguaje HULK en Rust: análisis léxico, sintáctico y semántico, y recolección de basura, con foco en rendimiento y seguridad." },
    { name: "DistriSearch", tags: "Python · Distribuidos", desc: "Motor de búsqueda distribuido con rastreo, indexación y procesamiento de consultas distribuidos (proyecto final de Sistemas Distribuidos)." },
  ],

  conferenceHeading: "Contribuciones a Congresos",
  conference: [
    { title: "«Hybrid Modeling: Sistema para el modelado epidemiológico»", venue: "XLI Jornada Científica de la Facultad de Física, UH · Mayo 2026" },
    { title: "«AuditSoft: Software para Auditoría de datos de Ensayos Clínicos»", venue: "COMPUMAT 2025 · Internacional" },
    { title: "«Modelo Matemático EDO para la transmisión de la leptospirosis»", venue: "COMPUMAT 2025 · Internacional" },
    { title: "«Modelado Híbrido de la transmisión de la leptospirosis con estrategias de Vacunación»", venue: "BIOQUIM 2025 · Nacional · Distinción «Relevante»" },
    { title: "«Aplicación Web Interactiva para la predicción de Infarto Agudo de Miocardio»", venue: "BIOQUIM 2025 · Nacional · con A. Ponce González" },
    { title: "«Modelos de ML para la predicción de mortalidad intrahospitalaria por IAM y optimización inversa de variables clínicas»", venue: "BIOQUIM 2025 · Nacional · con A. Ponce González, A. Romero Imbert" },
  ],

  researchProjectsHeading: "Proyectos de Investigación",
  researchProjects: [
    { title: "Optimización del desarrollo de vacunas mediante gestión integrada de datos e IA", org: "Instituto Finlay de Vacunas (IFV) · BioCubaFarma" },
    { title: "Proyecto de Evolución del Ecosistema de Datos", org: "DICEI · IFV · BioCubaFarma" },
    { title: "Desarrollo de una novedosa vacuna contra la Leptospirosis", org: "IFV · BioCubaFarma" },
    { title: "Registro de Infarto Agudo del Miocardio con homogeneización de variables e indicadores de calidad en Cuba", org: "Hospital General Docente «Dr. Ernesto Guevara de la Serna» · MINSAP" },
    { title: "VLIR-UOS: Integrated Real-Time Dengue Surveillance in Cuba for Outbreak Prediction", org: "Cooperación internacional VLIR-UOS" },
  ],

  labels: {
    languages: "Idiomas",
    honors: "Honores y Premios",
    interests: "Intereses de Investigación",
    profile: "Perfil",
    skills: "Habilidades Técnicas",
    experience: "Experiencia Profesional",
    education: "Educación",
  },
};
