"use client"

import { useLocale, useTranslations } from "next-intl"
import { SectionHeading } from "@/components/ui/section-heading"
import { Reveal } from "@/components/ui/reveal"
import { experiences } from "@/data/experience"
import { education, relevantCourses } from "@/data/education"
import { Briefcase, GraduationCap, Check, BookOpen } from "lucide-react"

export function ExperienceSection() {
  const t = useTranslations("experience")
  const locale = useLocale() as "es" | "en"

  const fmt = (d: string) => {
    const [y, m] = d.split("-")
    if (!m) return y
    const months = locale === "es"
      ? ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]
      : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    return `${months[parseInt(m) - 1]} ${y}`
  }

  return (
    <section id="experience" className="relative py-24 sm:py-28 bg-sand/40 border-y border-line-soft">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading index="02" eyebrow={t("eyebrow")} title={t("title")} description={t("subtitle")} />

        <div className="mt-14 grid lg:grid-cols-2 gap-8">
          {/* Experience */}
          <div>
            <Reveal>
              <div className="flex items-center gap-2.5 mb-6">
                <span className="w-9 h-9 rounded-xl bg-terracotta-soft border border-terracotta/30 flex items-center justify-center">
                  <Briefcase className="w-[18px] h-[18px] text-terracotta-deep" />
                </span>
                <h3 className="font-display text-2xl text-ink">{t("workTitle")}</h3>
              </div>
            </Reveal>

            <div className="relative pl-6 border-l-2 border-line space-y-6">
              {experiences.map((exp, i) => (
                <Reveal key={exp.id} delay={i * 0.08}>
                  <div className="relative">
                    <span className="absolute -left-[1.72rem] top-1.5 w-3.5 h-3.5 rounded-full bg-terracotta-deep ring-4 ring-sand" />
                    <div className="card p-6">
                      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                        <h4 className="font-semibold text-ink text-lg">{exp.role[locale]}</h4>
                        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-sage-soft/70 text-sage-deep">
                          {fmt(exp.startDate)} — {exp.current ? t("present") : ""}
                        </span>
                      </div>
                      <p className="text-terracotta-deep font-medium text-sm">
                        {exp.organization}
                        {exp.parent && <span className="text-ink-faint"> · {exp.parent}</span>}
                      </p>
                      <p className="text-ink-soft text-sm mt-3 leading-relaxed">{exp.description[locale]}</p>
                      <ul className="mt-4 space-y-2">
                        {exp.highlights[locale].map((h, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-ink-soft">
                            <Check className="w-4 h-4 text-sage-deep mt-0.5 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {exp.tags.map((tag) => (
                          <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-sand text-ink-soft border border-line">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <Reveal>
              <div className="flex items-center gap-2.5 mb-6">
                <span className="w-9 h-9 rounded-xl bg-sage-soft border border-sage/30 flex items-center justify-center">
                  <GraduationCap className="w-[18px] h-[18px] text-sage-deep" />
                </span>
                <h3 className="font-display text-2xl text-ink">{t("eduTitle")}</h3>
              </div>
            </Reveal>

            <div className="relative pl-6 border-l-2 border-line space-y-6">
              {education.map((edu, i) => (
                <Reveal key={edu.id} delay={i * 0.08}>
                  <div className="relative">
                    <span className="absolute -left-[1.72rem] top-1.5 w-3.5 h-3.5 rounded-full bg-sage-deep ring-4 ring-sand" />
                    <div className="card p-6">
                      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                        <h4 className="font-semibold text-ink text-lg">{edu.degree[locale]}</h4>
                        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-sage-soft/70 text-sage-deep">
                          {edu.startDate === edu.endDate ? edu.endDate : `${edu.startDate.split("-")[0]}—${edu.endDate.split("-")[0]}`}
                        </span>
                      </div>
                      <p className="text-sage-deep font-medium text-sm">{edu.institution[locale]}</p>
                      <p className="text-ink-soft text-sm mt-3 leading-relaxed">{edu.description[locale]}</p>
                      {edu.meta && (
                        <p className="mt-3 text-xs font-medium text-ink bg-gold-soft/60 border border-gold/30 rounded-lg px-3 py-2 inline-block">
                          {edu.meta[locale]}
                        </p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="card p-6 mt-6">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-4 h-4 text-sage-deep" />
                  <h4 className="font-display text-lg text-ink">{t("coursesTitle")}</h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {relevantCourses[locale].map((c) => (
                    <span key={c} className="text-xs px-3 py-1.5 rounded-full bg-sand text-ink-soft border border-line">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
