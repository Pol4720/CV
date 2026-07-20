/* Congress contributions & research projects — from CV */

export interface Publication {
  id: string;
  title: { es: string; en: string };
  venue: string;
  scope: { es: string; en: string };
  date: string;
  coauthors?: string;
  distinction?: { es: string; en: string };
}

export const publications: Publication[] = [
  {
    id: "pub-hybrid",
    title: {
      es: "«Hybrid Modeling: Sistema para el modelado epidemiológico»",
      en: "«Hybrid Modeling: A system for epidemiological modeling»",
    },
    venue: "XLI Jornada Científica de la Facultad de Física, UH",
    scope: { es: "Ponencia", en: "Talk" },
    date: "2026-05",
  },
  {
    id: "pub-auditsoft",
    title: {
      es: "«AuditSoft: Software para Auditoría de datos de Ensayos Clínicos»",
      en: "«AuditSoft: Software for Clinical Trial data Auditing»",
    },
    venue: "COMPUMAT 2025",
    scope: { es: "Internacional", en: "International" },
    date: "2025",
  },
  {
    id: "pub-edo-lepto",
    title: {
      es: "«Modelo Matemático EDO para la transmisión de la leptospirosis»",
      en: "«ODE Mathematical Model for leptospirosis transmission»",
    },
    venue: "COMPUMAT 2025",
    scope: { es: "Internacional", en: "International" },
    date: "2025",
  },
  {
    id: "pub-hybrid-lepto",
    title: {
      es: "«Modelado Híbrido de la transmisión de la leptospirosis con estrategias de Vacunación»",
      en: "«Hybrid Modeling of leptospirosis transmission with Vaccination strategies»",
    },
    venue: "BIOQUIM 2025",
    scope: { es: "Nacional", en: "National" },
    date: "2025",
    distinction: { es: "Distinción «Relevante»", en: "«Relevant» distinction" },
  },
  {
    id: "pub-iam-web",
    title: {
      es: "«Aplicación Web Interactiva para la predicción de Infarto Agudo de Miocardio»",
      en: "«Interactive Web Application for Acute Myocardial Infarction prediction»",
    },
    venue: "BIOQUIM 2025",
    scope: { es: "Nacional", en: "National" },
    date: "2025",
    coauthors: "A. Ponce González",
  },
  {
    id: "pub-iam-ml",
    title: {
      es: "«Modelos de ML para la predicción de mortalidad intrahospitalaria por IAM y optimización inversa de variables clínicas»",
      en: "«ML Models for in-hospital AMI mortality prediction and inverse optimization of clinical variables»",
    },
    venue: "BIOQUIM 2025",
    scope: { es: "Nacional", en: "National" },
    date: "2025",
    coauthors: "A. Ponce González, A. Romero Imbert",
  },
];

export interface ResearchProject {
  id: string;
  title: { es: string; en: string };
  institutions: string;
  area: { es: string; en: string };
}

export const researchProjects: ResearchProject[] = [
  {
    id: "rp-finlai",
    title: {
      es: "Optimización del desarrollo de vacunas mediante gestión integrada de datos e IA",
      en: "Optimizing vaccine development through integrated data management and AI",
    },
    institutions: "Instituto Finlay de Vacunas (IFV) · BioCubaFarma",
    area: { es: "IA · Salud", en: "AI · Health" },
  },
  {
    id: "rp-ecosistema",
    title: {
      es: "Proyecto de Evolución del Ecosistema de Datos",
      en: "Data Ecosystem Evolution Project",
    },
    institutions: "DICEI · IFV · BioCubaFarma",
    area: { es: "Ingeniería de datos", en: "Data engineering" },
  },
  {
    id: "rp-lepto",
    title: {
      es: "Desarrollo de una novedosa vacuna contra la Leptospirosis",
      en: "Development of a novel Leptospirosis vaccine",
    },
    institutions: "IFV · BioCubaFarma",
    area: { es: "Modelación epidemiológica", en: "Epidemiological modeling" },
  },
  {
    id: "rp-iam",
    title: {
      es: "Registro de Infarto Agudo del Miocardio con homogeneización de variables e indicadores de calidad en Cuba",
      en: "Acute Myocardial Infarction registry with variable homogenization and quality indicators in Cuba",
    },
    institutions: "Hospital General Docente «Dr. Ernesto Guevara de la Serna» · MINSAP",
    area: { es: "Ciencia de datos clínicos", en: "Clinical data science" },
  },
  {
    id: "rp-dengue",
    title: {
      es: "VLIR-UOS: Vigilancia integrada del dengue en tiempo real en Cuba para predicción de brotes",
      en: "VLIR-UOS: Integrated Real-Time Dengue Surveillance in Cuba for Outbreak Prediction",
    },
    institutions: "Cooperación internacional VLIR-UOS",
    area: { es: "Salud pública · ML", en: "Public health · ML" },
  },
];
