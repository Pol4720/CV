"use client"

import { useLocale, useTranslations } from "next-intl"
import { SectionHeading } from "@/components/ui/section-heading"
import { Reveal } from "@/components/ui/reveal"
import { skillGroups } from "@/data/skills"

const accentMap: Record<string, { chip: string; dot: string }> = {
  sage: { chip: "bg-sage-soft/50 text-sage-deep border-sage/30", dot: "bg-sage-deep" },
  terracotta: { chip: "bg-terracotta-soft/50 text-terracotta-deep border-terracotta/30", dot: "bg-terracotta-deep" },
  gold: { chip: "bg-gold-soft/50 text-[#94741f] border-gold/30", dot: "bg-gold" },
  lavender: { chip: "bg-lavender-soft/50 text-[#6a5a94] border-lavender/30", dot: "bg-lavender" },
  sky: { chip: "bg-sky-soft/50 text-[#4a7799] border-sky/30", dot: "bg-sky" },
}

export function SkillsSection() {
  const t = useTranslations("skills")
  const locale = useLocale() as "es" | "en"

  return (
    <section id="skills" className="relative py-24 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading index="03" eyebrow={t("eyebrow")} title={t("title")} description={t("subtitle")} />

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => {
            const accent = accentMap[group.accent]
            return (
              <Reveal key={group.category} delay={(i % 2) * 0.08}>
                <div className="card card-hover p-6 h-full">
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className={`w-2.5 h-2.5 rounded-full ${accent.dot}`} />
                    <h3 className="font-display text-lg text-ink">{group.label[locale]}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1.5 rounded-lg text-sm border transition-transform duration-200 hover:-translate-y-0.5 ${accent.chip}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
