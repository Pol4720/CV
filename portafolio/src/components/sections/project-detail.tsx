"use client"

import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { Reveal } from "@/components/ui/reveal"
import { Gallery } from "@/components/ui/gallery"
import type { Project } from "@/data/projects"
import {
  ArrowLeft, Github, ExternalLink, Lock, Building2, GraduationCap,
  GitCommitHorizontal, Users, Layers, Boxes, Sparkles, ImageOff,
} from "lucide-react"

const catAccent: Record<string, string> = {
  ai: "bg-lavender-soft/60 text-[#6a5a94]",
  data: "bg-sky-soft/60 text-[#4a7799]",
  health: "bg-terracotta-soft/60 text-terracotta-deep",
  distributed: "bg-sage-soft/60 text-sage-deep",
  compilers: "bg-gold-soft/60 text-[#94741f]",
  simulation: "bg-sky-soft/60 text-[#4a7799]",
  web: "bg-sage-soft/60 text-sage-deep",
  games: "bg-terracotta-soft/60 text-terracotta-deep",
  systems: "bg-lavender-soft/60 text-[#6a5a94]",
  other: "bg-sand text-ink-soft",
}

interface Labels {
  back: string; overview: string; gallery: string; features: string
  architecture: string; stack: string; team: string; role: string
  contribution: string; viewCode: string; viewDemo: string
  privateNote: string; commits: string; course: string; you: string; noGallery: string
}

export function ProjectDetail({
  project, locale, labels,
}: { project: Project; locale: "es" | "en"; labels: Labels }) {
  const tp = useTranslations("projects")
  const isPrivate = project.visibility === "private"
  const gallery = project.gallery ?? []

  return (
    <article className="relative">
      {/* Ambient wash */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[46rem] h-[46rem] rounded-full bg-sage-soft/30 blur-3xl -z-10" />

      <div className="container mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-20">
        <Reveal>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-sage-deep transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> {labels.back}
          </Link>
        </Reveal>

        {/* ------------------------------------------------------ header */}
        <header className="mt-8 max-w-4xl">
          <Reveal>
            <div className="flex flex-wrap items-center gap-2">
              <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${catAccent[project.category]}`}>
                {tp(`categories.${project.category}`)}
              </span>
              <span className="text-xs font-mono text-ink-faint px-3 py-1.5 rounded-full bg-sand border border-line">
                {project.year}
              </span>
              {project.language && (
                <span className="text-xs font-mono text-ink-soft px-3 py-1.5 rounded-full bg-sand border border-line">
                  {project.language}
                </span>
              )}
              {isPrivate && (
                <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-terracotta-soft/60 text-terracotta-deep inline-flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5" /> {labels.privateNote}
                </span>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.05]">
              {project.title[locale]}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 text-lg sm:text-xl text-ink-soft leading-relaxed">
              {project.summary[locale]}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              {project.organization && (
                <span className="inline-flex items-center gap-2 text-terracotta-deep">
                  <Building2 className="w-4 h-4" /> {project.organization}
                </span>
              )}
              {project.course && (
                <span className="inline-flex items-center gap-2 text-ink-soft">
                  <GraduationCap className="w-4 h-4 text-sage-deep" /> {labels.course}: {project.course[locale]}
                </span>
              )}
              {typeof project.commits === "number" && (
                <span className="inline-flex items-center gap-2 text-ink-soft">
                  <GitCommitHorizontal className="w-4 h-4 text-sage-deep" /> {project.commits} {labels.commits}
                </span>
              )}
            </div>
          </Reveal>

          {(project.github || project.demo) && (
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sage-deep text-white font-medium hover:-translate-y-0.5 hover:shadow-lg transition-all"
                  >
                    <Github className="w-4.5 h-4.5" /> {labels.viewCode}
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-paper border border-line text-ink font-medium hover:border-sage hover:text-sage-deep hover:-translate-y-0.5 transition-all"
                  >
                    <ExternalLink className="w-4.5 h-4.5" /> {labels.viewDemo}
                  </a>
                )}
              </div>
            </Reveal>
          )}
        </header>

        {/* ----------------------------------------------------- metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap gap-2">
              {project.metrics.map((m, i) => (
                <span
                  key={i}
                  className="text-sm px-4 py-2 rounded-full bg-gold-soft/50 text-[#94741f] border border-gold/25 inline-flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" /> {m[locale]}
                </span>
              ))}
            </div>
          </Reveal>
        )}

        <div className="mt-16 grid lg:grid-cols-[minmax(0,1fr)_20rem] gap-12 lg:gap-16 items-start">
          {/* ------------------------------------------------- main column */}
          <div className="min-w-0 space-y-16">
            {project.overview && project.overview.length > 0 && (
              <section>
                <Reveal>
                  <h2 className="font-display text-2xl text-ink mb-5">{labels.overview}</h2>
                </Reveal>
                <div className="space-y-4">
                  {project.overview.map((p, i) => (
                    <Reveal key={i} delay={i * 0.05}>
                      <p className="text-ink-soft leading-[1.8]">{p[locale]}</p>
                    </Reveal>
                  ))}
                </div>
              </section>
            )}

            <section>
              <Reveal>
                <h2 className="font-display text-2xl text-ink mb-5">{labels.gallery}</h2>
              </Reveal>
              {gallery.length > 0 ? (
                <Gallery images={gallery} locale={locale} />
              ) : (
                <Reveal>
                  <div className="rounded-2xl border border-dashed border-line bg-sand/40 px-6 py-10 text-center">
                    <ImageOff className="w-6 h-6 text-ink-faint mx-auto" />
                    <p className="mt-3 text-sm text-ink-soft max-w-md mx-auto leading-relaxed">
                      {labels.noGallery}
                    </p>
                  </div>
                </Reveal>
              )}
            </section>

            {project.features && project.features.length > 0 && (
              <section>
                <Reveal>
                  <h2 className="font-display text-2xl text-ink mb-5">{labels.features}</h2>
                </Reveal>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.features.map((f, i) => (
                    <Reveal key={i} delay={(i % 2) * 0.06}>
                      <div className="card p-5 h-full">
                        <h3 className="font-medium text-ink flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-sage-deep shrink-0" />
                          {f.title[locale]}
                        </h3>
                        <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                          {f.description[locale]}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </section>
            )}

            {project.architecture?.diagram && (
              <section>
                <Reveal>
                  <h2 className="font-display text-2xl text-ink mb-5">{labels.architecture}</h2>
                </Reveal>
                <Reveal delay={0.05}>
                  <div className="rounded-2xl border border-line bg-ink/[0.03] overflow-x-auto">
                    <pre className="p-6 text-xs sm:text-sm font-mono text-ink-soft leading-relaxed whitespace-pre">
                      {project.architecture.diagram}
                    </pre>
                  </div>
                </Reveal>
                {project.architecture.notes?.map((n, i) => (
                  <Reveal key={i} delay={0.1}>
                    <p className="mt-4 text-ink-soft leading-relaxed">{n[locale]}</p>
                  </Reveal>
                ))}
              </section>
            )}
          </div>

          {/* ---------------------------------------------------- sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-24">
            {project.role && (
              <Reveal>
                <div className="card p-5">
                  <p className="eyebrow text-xs text-ink-faint">{labels.role}</p>
                  <p className="mt-2 text-sm font-medium text-ink leading-snug">{project.role[locale]}</p>
                  {project.contribution && (
                    <>
                      <p className="eyebrow text-xs text-ink-faint mt-4">{labels.contribution}</p>
                      <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                        {project.contribution[locale]}
                      </p>
                    </>
                  )}
                </div>
              </Reveal>
            )}

            <Reveal delay={0.05}>
              <div className="card p-5">
                <p className="eyebrow text-xs text-ink-faint inline-flex items-center gap-1.5">
                  <Boxes className="w-3.5 h-3.5" /> {labels.stack}
                </p>
                {project.stack && project.stack.length > 0 ? (
                  <div className="mt-3 space-y-4">
                    {project.stack.map((g, i) => (
                      <div key={i}>
                        <p className="text-xs font-medium text-sage-deep inline-flex items-center gap-1.5">
                          <Layers className="w-3 h-3" /> {g.group[locale]}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {g.items.map((it) => (
                            <span key={it} className="text-xs px-2.5 py-1 rounded-lg bg-sand text-ink-soft border border-line">
                              {it}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.technologies.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-lg bg-sand text-ink-soft border border-line">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>

            {project.team && project.team.length > 0 && (
              <Reveal delay={0.1}>
                <div className="card p-5">
                  <p className="eyebrow text-xs text-ink-faint inline-flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" /> {labels.team}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {project.team.map((m) => (
                      <li key={m.login} className="flex items-center gap-2.5">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`https://github.com/${m.login}.png?size=48`}
                          alt=""
                          loading="lazy"
                          className="w-7 h-7 rounded-full border border-line bg-sand"
                        />
                        <a
                          href={`https://github.com/${m.login}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-sm flex-1 truncate hover:text-sage-deep transition-colors ${
                            m.isAuthor ? "text-ink font-medium" : "text-ink-soft"
                          }`}
                        >
                          {m.login}
                          {m.isAuthor && (
                            <span className="ml-1.5 text-[10px] uppercase tracking-wide text-sage-deep">
                              {labels.you}
                            </span>
                          )}
                        </a>
                        <span className="text-xs font-mono text-ink-faint shrink-0">{m.commits}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}
          </aside>
        </div>
      </div>
    </article>
  )
}
