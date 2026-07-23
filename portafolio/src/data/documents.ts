import { withBasePath } from "@/lib/base-path";

export type DocCategory = "diploma" | "certificate" | "letter" | "award" | "other";
export type DocType = "pdf" | "image";

export interface DocItem {
  id: string;
  title: { es: string; en: string };
  issuer?: { es: string; en: string };
  category: DocCategory;
  type: DocType;
  file: string;
  date?: string;
}

export const docCategories: {
  key: DocCategory | "all";
  label: { es: string; en: string };
}[] = [
  { key: "all", label: { es: "Todos", en: "All" } },
  { key: "diploma", label: { es: "Diplomas y Títulos", en: "Diplomas & Degrees" } },
  { key: "certificate", label: { es: "Certificados", en: "Certificates" } },
  { key: "letter", label: { es: "Cartas y Constancias", en: "Letters & Records" } },
  { key: "award", label: { es: "Premios", en: "Awards" } },
  { key: "other", label: { es: "Otros", en: "Other" } },
];

/* Baseline documents bundled with the site.
   Additional documents uploaded from the admin panel are merged at runtime. */
export const staticDocuments: DocItem[] = [
  {
    id: "diploma-bioquim-web",
    title: {
      es: "Diploma BIOQUIM 2025 — Aplicación Web (IAM)",
      en: "BIOQUIM 2025 Diploma — Web Application (AMI)",
    },
    issuer: { es: "Evento BIOQUIM 2025", en: "BIOQUIM 2025 Event" },
    category: "diploma",
    type: "pdf",
    file: withBasePath("/documents/certificates/events/Diploma BioQuim 2025 App web.pdf"),
    date: "2025",
  },
  {
    id: "diploma-bioquim-ml",
    title: {
      es: "Diploma BIOQUIM 2025 — Modelos de ML",
      en: "BIOQUIM 2025 Diploma — ML Models",
    },
    issuer: { es: "Evento BIOQUIM 2025", en: "BIOQUIM 2025 Event" },
    category: "diploma",
    type: "pdf",
    file: withBasePath("/documents/certificates/events/Diploma BioQuim 2025 Modelos ML.pdf"),
    date: "2025",
  },
  {
    id: "carta-finlay-datos",
    title: {
      es: "Carta — Proyecto Ecosistema de Datos (IFV)",
      en: "Letter — Data Ecosystem Project (IFV)",
    },
    issuer: { es: "Instituto Finlay de Vacunas", en: "Finlay Vaccine Institute" },
    category: "letter",
    type: "pdf",
    file: withBasePath("/documents/letters/carta_finlay_ecosistema_datos.pdf"),
    date: "2025",
  },
];
