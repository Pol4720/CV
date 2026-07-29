import { withBasePath } from "@/lib/base-path";
import projectContent from "../../content/projects.json";
import type { Project } from "./project-types";
import { privateProjects } from "./projects.private";
import { publicProjects } from "./projects.public";

export type {
  Project,
  ProjectCategory,
  Bilingual,
  GalleryImage,
  TeamMember,
  FeatureItem,
  StackGroup,
} from "./project-types";

export { privateProjects, publicProjects };

/* ------------------------------------------------------------
   Merge in content authored from the admin panel.
   `content/projects.json` is committed to the repository and
   edited through the admin UI, so galleries can be updated
   without touching the data files.
   ------------------------------------------------------------ */
type ProjectOverride = Partial<
  Pick<Project, "overview" | "gallery" | "features" | "metrics" | "contribution" | "demo" | "role">
>;

const overrides = (projectContent as { overrides?: Record<string, ProjectOverride> }).overrides ?? {};

function applyOverrides(list: Project[]): Project[] {
  return list.map((p) => {
    const o = overrides[p.slug];
    if (!o) return p;
    return {
      ...p,
      ...o,
      // Uploaded gallery images are appended to the curated ones.
      gallery: [...(p.gallery ?? []), ...(o.gallery ?? []).map((g) => ({ ...g, src: withBasePath(g.src) }))],
    };
  });
}

export const allProjects: Project[] = applyOverrides([...privateProjects, ...publicProjects]);

export const getFeaturedProjects = (): Project[] => allProjects.filter((p) => p.featured);

export const getProjectBySlug = (slug: string): Project | undefined =>
  allProjects.find((p) => p.slug === slug);

export const getPublicProjects = (): Project[] =>
  allProjects.filter((p) => p.visibility === "public");

export const getPrivateProjects = (): Project[] =>
  allProjects.filter((p) => p.visibility === "private");
