"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLocale, useTranslations } from "next-intl"
import { SectionHeading } from "@/components/ui/section-heading"
import { Reveal } from "@/components/ui/reveal"
import { publicProjects, privateProjects, type Project } from "@/data/projects"
import { Github, Lock, Star, ArrowUpRight, Building2, Sparkles } from "lucide-react"

const catAccent: Record<string, string> = {
  ai: "bg-lavender-soft/60 text-[#6a5a94]",
  data: "bg-sky-soft/60 text-[#4a7799]",
  health: "bg-terracotta-soft/60 text-terracotta-deep",
  distributed: "bg-sage-soft/60 text-sage-deep",
  compilers: "bg-gold-soft/60 text-[#94741f]",
  simulation: "bg-sky-soft/60 text-[#4a7799]",
  web: "bg-sage-soft/60 text-sage-deep",
  games: "bg-terracotta-soft/60 text-terracotta-deep",
  other: "bg-sand text-ink-soft",
}

function ProjectCard({ project, locale, index }: { project: Project; locale: "es" | "en"; index: number }) {
  const t = useTranslations("projects")
  const isPrivate = project.visibility === "private"

  return (
    <Reveal delay={(index % 3) * 0.06}>
      <div className="card card-hover p-6 h-full flex flex-col group">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${catAccent[project.category]}`}>
              {t(`categories.${project.category}`)}
            </span>
            {project.featured && (
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-gold-soft/70 text-[#94741f] inline-flex items-center gap-1">
                <Star className="w-3 h-3" /> {t("featured")}
              </span>
            )}
          </div>
          <span className="text-xs text-ink-faint font-mono shrink-0">{project.year}</span>
        </div>

        <h3 className="font-display text-xl text-ink flex items-center gap-2">
          {project.title[locale]}
          {isPrivate && <Lock className="w-3.5 h-3.5 text-ink-faint" />}
        </h3>

        {project.organization && (
          <p className="mt-1 text-xs text-terracotta-deep inline-flex items-center gap-1">
            <Building2 className="w-3.5 h-3.5" /> {project.organization}
          </p>
        )}

        <p className="mt-3 text-sm text-ink-soft leading-relaxed flex-1">{project.description[locale]}</p>

        {project.metrics && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.metrics.map((m, i) => (
              <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-sage-soft/50 text-sage-deep border border-sage/20 inline-flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> {m[locale]}
              </span>
            ))}
          </div>
        )}

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 6).map((tech) => (
            <span key={tech} className="text-xs px-2.5 py-1 rounded-lg bg-sand text-ink-soft border border-line">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 pt-4 border-t border-line-soft flex items-center justify-between">
          <span className={`text-xs font-medium inline-flex items-center gap-1.5 ${project.status === "completed" ? "text-sage-deep" : "text-terracotta-deep"}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${project.status === "completed" ? "bg-sage-deep" : "bg-terracotta-deep animate-pulse"}`} />
            {t(`status.${project.status}`)}
          </span>

          {isPrivate ? (
            <span className="text-xs text-ink-faint inline-flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5" /> {t("reserved")}
            </span>
          ) : (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-sage-deep inline-flex items-center gap-1 hover:gap-2 transition-all"
            >
              <Github className="w-4 h-4" /> {t("viewCode")}
              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          )}
        </div>
      </div>
    </Reveal>
  )
}

export function ProjectsSection() {
  const t = useTranslations("projects")
  const locale = useLocale() as "es" | "en"
  const [tab, setTab] = useState<"public" | "private">("public")

  const list = tab === "public" ? publicProjects : privateProjects

  return (
    <section id="projects" className="relative py-24 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading index="04" eyebrow={t("eyebrow")} title={t("title")} description={t("subtitle")} />

        {/* Tabs */}
        <Reveal className="mt-10 flex justify-center">
          <div className="inline-flex p-1.5 rounded-full bg-sand border border-line">
            {(["public", "private"] as const).map((k) => (
              <button
                key={k}
                onClick={() => setTab(k)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  tab === k ? "text-white" : "text-ink-soft hover:text-ink"
                }`}
              >
                {tab === k && (
                  <motion.span
                    layoutId="projTab"
                    className="absolute inset-0 rounded-full bg-sage-deep"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative inline-flex items-center gap-1.5">
                  {k === "private" && <Lock className="w-3.5 h-3.5" />}
                  {k === "public" ? t("tabs.public") : t("tabs.private")}
                  <span className={`ml-0.5 text-xs ${tab === k ? "opacity-90" : "opacity-60"}`}>
                    {k === "public" ? publicProjects.length : privateProjects.length}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        {tab === "private" && (
          <Reveal className="mt-6 max-w-2xl mx-auto text-center">
            <p className="text-sm text-ink-soft bg-terracotta-soft/30 border border-terracotta/20 rounded-2xl px-5 py-3 inline-flex items-center gap-2">
              <Lock className="w-4 h-4 text-terracotta-deep shrink-0" />
              {t("privateNote")}
            </p>
          </Reveal>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
            className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {list.map((project, i) => (
              <ProjectCard key={project.id} project={project} locale={locale} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        <Reveal className="mt-12 text-center">
          <a
            href="https://github.com/Pol4720"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-paper border border-line text-ink font-medium hover:border-sage hover:text-sage-deep hover:-translate-y-0.5 transition-all"
          >
            <Github className="w-5 h-5" /> {t("viewAll")}
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
