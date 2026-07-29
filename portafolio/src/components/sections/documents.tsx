"use client"

import { useState } from "react"
import { useLocale, useTranslations } from "next-intl"
import { SectionHeading } from "@/components/ui/section-heading"
import { Reveal } from "@/components/ui/reveal"
import { staticDocuments, docCategories, type DocCategory } from "@/data/documents"
import { personalInfo } from "@/data/personal"
import { FileText, Image as ImageIcon, Download, Eye, FileDown, ShieldCheck } from "lucide-react"

const catColor: Record<string, string> = {
  diploma: "bg-sage-soft/60 text-sage-deep",
  certificate: "bg-sky-soft/60 text-[#4a7799]",
  letter: "bg-terracotta-soft/60 text-terracotta-deep",
  award: "bg-gold-soft/60 text-[#94741f]",
  other: "bg-sand text-ink-soft",
}

export function DocumentsSection() {
  const t = useTranslations("documents")
  const locale = useLocale() as "es" | "en"
  const [filter, setFilter] = useState<DocCategory | "all">("all")

  // Documents uploaded from the admin panel are baked into the build,
  // so the list is already complete on first paint.
  const filtered =
    filter === "all" ? staticDocuments : staticDocuments.filter((d) => d.category === filter)

  return (
    <section id="documents" className="relative py-24 sm:py-28 bg-sand/40 border-y border-line-soft">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading index="07" eyebrow={t("eyebrow")} title={t("title")} description={t("subtitle")} />

        {/* CV downloads */}
        <div className="mt-14 grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {([
            { lang: "es", flag: "🇪🇸", href: personalInfo.resume.es, label: t("cvEs") },
            { lang: "en", flag: "🇬🇧", href: personalInfo.resume.en, label: t("cvEn") },
          ] as const).map((cv, i) => (
            <Reveal key={cv.lang} delay={i * 0.08}>
              <div className="card card-hover p-6 flex items-center gap-4">
                <span className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sage to-sage-deep text-white flex items-center justify-center shrink-0">
                  <FileDown className="w-7 h-7" />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs eyebrow text-ink-faint">{t("cvLabel")}</p>
                  <p className="font-display text-lg text-ink">{cv.flag} {cv.label}</p>
                </div>
                <div className="flex gap-2">
                  <a href={cv.href} target="_blank" rel="noopener noreferrer" aria-label="View"
                    className="p-2.5 rounded-full bg-sand border border-line text-ink-soft hover:text-ink hover:border-sage transition-colors">
                    <Eye className="w-[18px] h-[18px]" />
                  </a>
                  <a href={cv.href} download aria-label="Download"
                    className="p-2.5 rounded-full bg-sage-deep text-white hover:bg-[#4a7255] transition-colors">
                    <Download className="w-[18px] h-[18px]" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Filters */}
        <Reveal className="mt-14 flex flex-wrap justify-center gap-2">
          {docCategories.map((c) => (
            <button
              key={c.key}
              onClick={() => setFilter(c.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                filter === c.key
                  ? "bg-ink text-cream border-ink"
                  : "bg-paper text-ink-soft border-line hover:border-ink-soft"
              }`}
            >
              {c.label[locale]}
            </button>
          ))}
        </Reveal>

        {/* Documents grid */}
        {filtered.length > 0 ? (
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((doc, i) => (
              <Reveal key={doc.id} delay={(i % 3) * 0.06}>
                <div className="card card-hover p-5 h-full flex flex-col">
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${catColor[doc.category]}`}>
                      {docCategories.find((c) => c.key === doc.category)?.label[locale]}
                    </span>
                    {doc.date && <span className="text-xs font-mono text-ink-faint">{doc.date}</span>}
                  </div>
                  <div className="flex items-start gap-3 flex-1">
                    <span className="w-11 h-11 rounded-xl bg-sand border border-line flex items-center justify-center shrink-0">
                      {doc.type === "image"
                        ? <ImageIcon className="w-5 h-5 text-terracotta-deep" />
                        : <FileText className="w-5 h-5 text-sage-deep" />}
                    </span>
                    <div className="min-w-0">
                      <p className="font-medium text-ink text-sm leading-snug">{doc.title[locale]}</p>
                      {doc.issuer && <p className="text-xs text-ink-soft mt-1">{doc.issuer[locale]}</p>}
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-line-soft flex gap-2">
                    <a href={doc.file} target="_blank" rel="noopener noreferrer"
                      className="flex-1 text-center text-sm font-medium text-sage-deep py-2 rounded-lg hover:bg-sage-soft/40 transition-colors inline-flex items-center justify-center gap-1.5">
                      <Eye className="w-4 h-4" /> {t("view")}
                    </a>
                    <a href={doc.file} download
                      className="flex-1 text-center text-sm font-medium text-ink-soft py-2 rounded-lg hover:bg-sand transition-colors inline-flex items-center justify-center gap-1.5">
                      <Download className="w-4 h-4" /> {t("download")}
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="mt-10 text-center text-ink-soft">
            <p>{t("empty")}</p>
          </Reveal>
        )}

        <Reveal className="mt-10 text-center">
          <p className="text-xs text-ink-faint inline-flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4" /> {t("adminHint")}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
