/** Shared project types. The data itself lives in
 *  `projects.public.ts` (open-source repos) and
 *  `projects.private.ts` (professional / reserved work). */
import { withBasePath } from "@/lib/base-path";

export type ProjectCategory =
  | "ai"
  | "data"
  | "health"
  | "distributed"
  | "compilers"
  | "simulation"
  | "web"
  | "games"
  | "systems"
  | "other";

export interface Bilingual {
  es: string;
  en: string;
}

export interface GalleryImage {
  src: string;
  caption: Bilingual;
}

export interface TeamMember {
  login: string;
  commits: number;
  /** True for the author's own accounts (Pol4720 / Pol472). */
  isAuthor?: boolean;
}

export interface FeatureItem {
  title: Bilingual;
  description: Bilingual;
}

export interface StackGroup {
  group: Bilingual;
  items: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: Bilingual;
  /** One-line blurb for cards. */
  summary: Bilingual;
  /** Paragraph shown on the card. */
  description: Bilingual;
  /** Long-form paragraphs for the detail page. */
  overview?: Bilingual[];
  /** The author's role in the project. */
  role?: Bilingual;
  /** What the author specifically built. */
  contribution?: Bilingual;
  technologies: string[];
  stack?: StackGroup[];
  features?: FeatureItem[];
  architecture?: { diagram?: string; notes?: Bilingual[] };
  gallery?: GalleryImage[];
  team?: TeamMember[];
  metrics?: Bilingual[];
  category: ProjectCategory;
  visibility: "public" | "private";
  github?: string;
  demo?: string;
  organization?: string;
  /** Academic course the project belongs to. */
  course?: Bilingual;
  featured: boolean;
  year: string;
  status: "completed" | "in-progress";
  language?: string;
  /** Commits authored across the author's GitHub accounts. */
  commits?: number;
}

/** Resolves a project screenshot to its public URL, honouring `basePath`. */
export const img = (slug: string, file: string) =>
  withBasePath(`/projects/${slug}/${file}`);
