"use client"

import { useLocale, useTranslations } from "next-intl"
import { SectionHeading } from "@/components/ui/section-heading"
import { Reveal } from "@/components/ui/reveal"
import { publications, researchProjects } from "@/data/research"
import { FileText, FlaskConical, Users, BadgeCheck } from "lucide-react"

export function ResearchSection() {
  const t = useTranslations("research")
  const locale = useLocale() as "es" | "en"

  return (
    <section id="research" className="relative py-24 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading index="06" eyebrow={t("eyebrow")} title={t("title")} description={t("subtitle")} />

        <div className="mt-14 grid lg:grid-cols-12 gap-8">
          {/* Publications */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-2.5 mb-6">
                <span className="w-9 h-9 rounded-xl bg-sage-soft border border-sage/30 flex items-center justify-center">
                  <FileText className="w-[18px] h-[18px] text-sage-deep" />
                </span>
                <h3 className="font-display text-2xl text-ink">{t("publicationsTitle")}</h3>
              </div>
            </Reveal>

            <div className="space-y-4">
              {publications.map((pub, i) => (
                <Reveal key={pub.id} delay={i * 0.05}>
                  <div className="card card-hover p-6 flex gap-4">
                    <span className="font-display text-2xl text-ink-faint/60 leading-none pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <p className="text-ink font-medium leading-snug">{pub.title[locale]}</p>
                      <p className="text-sm text-terracotta-deep mt-1.5">{pub.venue}</p>
                      <div className="mt-2.5 flex flex-wrap items-center gap-2">
                        <span className="text-xs px-2.5 py-1 rounded-full bg-sand text-ink-soft border border-line">
                          {pub.scope[locale]}
                        </span>
                        <span className="text-xs font-mono text-ink-faint">{pub.date.replace("-", "·")}</span>
                        {pub.coauthors && (
                          <span className="text-xs text-ink-soft inline-flex items-center gap-1">
                            <Users className="w-3 h-3" /> {pub.coauthors}
                          </span>
                        )}
                        {pub.distinction && (
                          <span className="text-xs px-2.5 py-1 rounded-full bg-gold-soft/60 text-[#94741f] inline-flex items-center gap-1">
                            <BadgeCheck className="w-3 h-3" /> {pub.distinction[locale]}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Research projects */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-2.5 mb-6">
                <span className="w-9 h-9 rounded-xl bg-terracotta-soft border border-terracotta/30 flex items-center justify-center">
                  <FlaskConical className="w-[18px] h-[18px] text-terracotta-deep" />
                </span>
                <h3 className="font-display text-2xl text-ink">{t("projectsTitle")}</h3>
              </div>
            </Reveal>

            <div className="space-y-4">
              {researchProjects.map((rp, i) => (
                <Reveal key={rp.id} delay={i * 0.05}>
                  <div className="card p-5">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-lavender-soft/60 text-[#6a5a94]">
                        {rp.area[locale]}
                      </span>
                    </div>
                    <p className="text-ink font-medium text-sm leading-snug">{rp.title[locale]}</p>
                    <p className="text-xs text-ink-soft mt-2">{rp.institutions}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
