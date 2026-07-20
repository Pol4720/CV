export type SkillCategory =
  | "languages"
  | "datascience"
  | "ai"
  | "modeling"
  | "web"
  | "mobile"
  | "data"
  | "bigdata"
  | "devops"
  | "qa";

export interface SkillGroup {
  category: SkillCategory;
  label: { es: string; en: string };
  accent: "sage" | "terracotta" | "gold" | "lavender" | "sky";
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "languages",
    label: { es: "Lenguajes de Programación", en: "Programming Languages" },
    accent: "sage",
    skills: ["Python", "Rust", "TypeScript / JavaScript", "C", "C++", "C#", "R", "Haskell", "Prolog", "SQL", "LaTeX"],
  },
  {
    category: "datascience",
    label: { es: "Ciencia de Datos & ML", en: "Data Science & ML" },
    accent: "terracotta",
    skills: ["scikit-learn", "PyTorch", "TensorFlow", "XGBoost", "LightGBM", "CatBoost", "SHAP", "LIME", "MLflow", "NumPy", "Pandas", "SciPy", "SymPy"],
  },
  {
    category: "ai",
    label: { es: "IA / Agentes / NLP", en: "AI / Agents / NLP" },
    accent: "lavender",
    skills: ["LangChain", "LangGraph", "RAG", "Sistemas multiagente", "AutoML (FLAML)", "n8n", "HuggingFace", "Ollama", "ChromaDB", "SPARQL (rdflib)"],
  },
  {
    category: "modeling",
    label: { es: "Modelación & Simulación", en: "Modeling & Simulation" },
    accent: "sky",
    skills: ["Modelos EDO / SEIR", "Modelado basado en agentes (Mesa)", "Autómatas celulares", "Cadenas de Markov (CTMC)", "Metaheurísticas (GA, SA, Tabú, GRASP)", "Análisis de sensibilidad (SALib / Sobol)"],
  },
  {
    category: "web",
    label: { es: "Web & Full-Stack", en: "Web & Full-Stack" },
    accent: "sage",
    skills: ["React", "Next.js", "Node.js", "FastAPI", "Django", "Tailwind CSS", "REST APIs", "WebSockets"],
  },
  {
    category: "mobile",
    label: { es: "Móvil & Escritorio", en: "Mobile & Desktop" },
    accent: "gold",
    skills: ["Flutter", "Android", "iOS", "React Native", "Electron", "Tauri"],
  },
  {
    category: "data",
    label: { es: "Bases de Datos", en: "Databases" },
    accent: "terracotta",
    skills: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Redis", "SQLAlchemy / Alembic"],
  },
  {
    category: "bigdata",
    label: { es: "Big Data & Distribuidos", en: "Big Data & Distributed" },
    accent: "sky",
    skills: ["Hadoop", "HDFS", "PySpark", "Celery", "Redis", "Crawling e indexación distribuida"],
  },
  {
    category: "devops",
    label: { es: "DevOps & Herramientas", en: "DevOps & Tools" },
    accent: "lavender",
    skills: ["Docker", "Docker Compose", "Git", "GitHub Actions (CI/CD)", "CodeQL", "Linux"],
  },
  {
    category: "qa",
    label: { es: "QA & Testing", en: "QA & Testing" },
    accent: "gold",
    skills: ["pytest", "unittest", "Selenium", "Cypress", "Playwright", "Postman", "JMeter", "TDD", "SonarQube", "ruff / black / mypy"],
  },
];

export interface Language {
  name: { es: string; en: string };
  level: { es: string; en: string };
  percentage: number;
  flag: string;
}

export const languages: Language[] = [
  { name: { es: "Español", en: "Spanish" }, level: { es: "Nativo", en: "Native" }, percentage: 100, flag: "🇨🇺" },
  { name: { es: "Inglés", en: "English" }, level: { es: "C1 · Avanzado", en: "C1 · Advanced" }, percentage: 85, flag: "🇬🇧" },
  { name: { es: "Francés", en: "French" }, level: { es: "A2 · Básico", en: "A2 · Basic" }, percentage: 35, flag: "🇫🇷" },
];

/* Highlighted tech for the hero marquee */
export const marqueeTech: string[] = [
  "Python", "Rust", "TypeScript", "PyTorch", "scikit-learn", "LangGraph", "RAG",
  "AutoML", "FastAPI", "Next.js", "PySpark", "Hadoop", "Docker", "PostgreSQL",
  "SHAP", "Mesa", "SEIR", "Haskell",
];

export const researchInterests = {
  es: ["IA Biomédica", "Modelación Epidemiológica", "Desarrollo de Vacunas", "Biología Matemática", "Sistemas Distribuidos"],
  en: ["Biomedical AI", "Epidemiological Modeling", "Vaccine Development", "Mathematical Biology", "Distributed Systems"],
};
