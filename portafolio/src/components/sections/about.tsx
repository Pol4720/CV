"use client"

import { motion } from "framer-motion"
import { useTranslations, useLocale } from "next-intl"
import { SectionHeading } from "@/components/ui/section-heading"
import { Reveal } from "@/components/ui/reveal"
import { languages, researchInterests } from "@/data/skills"
import { GraduationCap, Building2, FlaskConical, Microscope } from "lucide-react"

export function AboutSection() {
  const t = useTranslations("about")
  const locale = useLocale() as "es" | "en"

  const facts = [
    { icon: GraduationCap, label: t("facts.education"), value: t("facts.educationValue") },
    { icon: Building2, label: t("facts.role"), value: t("facts.roleValue") },
    { icon: FlaskConical, label: t("facts.focus"), value: t("facts.focusValue") },
    { icon: Microscope, label: t("facts.field"), value: t("facts.fieldValue") },
  ]

  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading index="01" eyebrow={t("eyebrow")} title={t("title")} description={t("subtitle")} />

        <div className="mt-14 grid lg:grid-cols-12 gap-8">
          {/* Bio */}
          <Reveal className="lg:col-span-7">
            <div className="card p-8 h-full">
              <p className="font-display text-2xl text-ink leading-snug mb-5">{t("lead")}</p>
              <p className="text-ink-soft leading-relaxed mb-4">{t("p1")}</p>
              <p className="text-ink-soft leading-relaxed">{t("p2")}</p>

              <div className="mt-7 grid sm:grid-cols-2 gap-3">
                {facts.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3 rounded-2xl bg-sand/60 border border-line-soft p-4">
                    <span className="mt-0.5 w-9 h-9 rounded-xl bg-paper border border-line flex items-center justify-center shrink-0">
                      <Icon className="w-[18px] h-[18px] text-sage-deep" />
                    </span>
                    <div>
                      <p className="text-xs eyebrow text-ink-faint">{label}</p>
                      <p className="text-sm text-ink font-medium mt-1 leading-snug">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Interests + Languages */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <Reveal delay={0.1}>
              <div className="card p-7">
                <h3 className="font-display text-xl text-ink mb-4">{t("interestsTitle")}</h3>
                <div className="flex flex-wrap gap-2">
                  {researchInterests[locale].map((interest) => (
                    <span
                      key={interest}
                      className="px-3.5 py-1.5 rounded-full text-sm bg-sage-soft/60 text-sage-deep border border-sage/30"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="card p-7">
                <h3 className="font-display text-xl text-ink mb-5">{t("languagesTitle")}</h3>
                <div className="space-y-5">
                  {languages.map((lang) => (
                    <div key={lang.name.en}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-medium text-ink flex items-center gap-2">
                          <span className="text-base">{lang.flag}</span>
                          {lang.name[locale]}
                        </span>
                        <span className="text-xs text-ink-soft">{lang.level[locale]}</span>
                      </div>
                      <div className="h-2 rounded-full bg-sand overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${lang.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as const }}
                          className="h-full rounded-full bg-gradient-to-r from-sage to-terracotta"
                        />
                      </div>
                    </div>
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
