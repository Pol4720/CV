import { withBasePath } from "@/lib/base-path";

export interface PersonalInfo {
  name: string;
  shortName: string;
  initials: string;
  title: { es: string; en: string };
  tagline: { es: string; en: string };
  email: string;
  phone: string;
  location: { es: string; en: string };
  social: {
    github: string;
    linkedin: string;
    telegram: string;
    email: string;
  };
  avatar: string;
  resume: {
    es: string;
    en: string;
  };
  stats: {
    value: string;
    label: { es: string; en: string };
  }[];
}

export const personalInfo: PersonalInfo = {
  name: "Richard A. Matos Arderí",
  shortName: "Richard Matos",
  initials: "RM",
  title: {
    es: "Científico de la Computación",
    en: "Computer Scientist",
  },
  tagline: {
    es: "Ciencia de Datos · Machine Learning e IA · Desarrollador Full-Stack",
    en: "Data Science · Machine Learning & AI · Full-Stack Developer",
  },
  email: "matosrichard58@gmail.com",
  phone: "+53 5825 8556",
  location: { es: "La Habana, Cuba", en: "Havana, Cuba" },
  social: {
    github: "https://github.com/Pol4720",
    linkedin: "https://www.linkedin.com/in/richard-matos-arderí-8912643ba",
    telegram: "https://t.me/Pol4720",
    email: "mailto:matosrichard58@gmail.com",
  },
  avatar: withBasePath("/images/avatar.jpg"),
  resume: {
    es: withBasePath("/documents/cv/cv-es.pdf"),
    en: withBasePath("/documents/cv/cv-en.pdf"),
  },
  stats: [
    { value: "4.71", label: { es: "Índice académico / 5.00", en: "Academic GPA / 5.00" } },
    { value: "6+", label: { es: "Publicaciones y ponencias", en: "Publications & talks" } },
    { value: "3", label: { es: "Premios y distinciones", en: "Awards & distinctions" } },
    { value: "15+", label: { es: "Proyectos de software", en: "Software projects" } },
  ],
};
