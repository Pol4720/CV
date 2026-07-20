"use client"

import { useLocale, useTranslations } from "next-intl"
import { SectionHeading } from "@/components/ui/section-heading"
import { Reveal } from "@/components/ui/reveal"
import { awards } from "@/data/awards"
import { Trophy, Medal, Star, Award as AwardIcon } from "lucide-react"

const iconMap = { trophy: Trophy, medal: Medal, star: Star, award: AwardIcon }

export function AwardsSection() {
  const t = useTranslations("awards")
  const locale = useLocale() as "es" | "en"

  return (
    <section id="awards" className="relative py-24 sm:py-28 bg-sand/40 border-y border-line-soft overflow-hidden">
      <div className="absolute top-10 right-[-4%] w-80 h-80 rounded-full bg-gold-soft/40 blur-3xl -z-10" />
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading index="05" eyebrow={t("eyebrow")} title={t("title")} description={t("subtitle")} />

        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          {awards.map((award, i) => {
            const Icon = iconMap[award.icon]
            return (
              <Reveal key={award.id} delay={i * 0.1}>
                <div
                  className={`card card-hover p-7 h-full relative overflow-hidden ${
                    award.highlight ? "border-gold/40" : ""
                  }`}
                >
                  {award.highlight && (
                    <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-gold-soft/70 to-transparent rounded-bl-[3rem] -z-0" />
                  )}
                  <div className="relative">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
                        award.highlight
                          ? "bg-gradient-to-br from-gold to-terracotta text-white shadow-[0_8px_20px_-8px_rgba(199,162,75,0.7)]"
                          : "bg-sage-soft text-sage-deep"
                      }`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-mono text-ink-faint">{award.date}</span>
                      {award.highlight && (
                        <span className="text-[0.65rem] eyebrow text-gold px-2 py-0.5 rounded-full bg-gold-soft/60">
                          {t("featured")}
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-xl text-ink leading-snug mb-2">{award.title[locale]}</h3>
                    <p className="text-sm font-medium text-terracotta-deep mb-3">{award.issuer[locale]}</p>
                    {award.description && (
                      <p className="text-sm text-ink-soft leading-relaxed">{award.description[locale]}</p>
                    )}
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
