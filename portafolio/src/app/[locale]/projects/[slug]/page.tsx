import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { setRequestLocale, getTranslations } from "next-intl/server"
import { routing } from "@/i18n/routing"
import { allProjects, getProjectBySlug } from "@/data/projects"
import { ProjectDetail } from "@/components/sections/project-detail"

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    allProjects.map((p) => ({ locale, slug: p.slug }))
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}

  const l = (locale === "en" ? "en" : "es") as "es" | "en"
  const title = `${project.title[l]} — Richard A. Matos Arderí`

  return {
    title,
    description: project.summary[l],
    openGraph: {
      type: "article",
      title,
      description: project.summary[l],
      locale: l === "es" ? "es_ES" : "en_US",
    },
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  setRequestLocale(locale)

  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const t = await getTranslations("projectDetail")
  const l = (locale === "en" ? "en" : "es") as "es" | "en"

  return (
    <ProjectDetail
      project={project}
      locale={l}
      labels={{
        back: t("back"),
        overview: t("overview"),
        gallery: t("gallery"),
        features: t("features"),
        architecture: t("architecture"),
        stack: t("stack"),
        team: t("team"),
        role: t("role"),
        contribution: t("contribution"),
        viewCode: t("viewCode"),
        viewDemo: t("viewDemo"),
        privateNote: t("privateNote"),
        commits: t("commits"),
        course: t("course"),
        you: t("you"),
        noGallery: t("noGallery"),
      }}
    />
  )
}
