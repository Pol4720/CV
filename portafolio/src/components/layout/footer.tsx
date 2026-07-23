"use client"

import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { personalInfo } from "@/data/personal"
import { Github, Linkedin, Send, Mail, Heart } from "lucide-react"

const isStaticExport = process.env.NEXT_PUBLIC_STATIC_EXPORT === "true"

const navLinks = [
  { key: "about", href: "#about" },
  { key: "projects", href: "#projects" },
  { key: "awards", href: "#awards" },
  { key: "research", href: "#research" },
  { key: "documents", href: "#documents" },
  { key: "contact", href: "#contact" },
]

export function Footer() {
  const t = useTranslations("footer")
  const nav = useTranslations("nav")

  const socialLinks = [
    { icon: Github, url: personalInfo.social.github, label: "GitHub" },
    { icon: Linkedin, url: personalInfo.social.linkedin, label: "LinkedIn" },
    { icon: Send, url: personalInfo.social.telegram, label: "Telegram" },
    { icon: Mail, url: personalInfo.social.email, label: "Email" },
  ]

  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-sand/60 border-t border-line">
      <div className="container mx-auto px-4 sm:px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <a href="#home" className="inline-flex items-center gap-2.5">
              <span className="w-10 h-10 rounded-2xl bg-sage-deep text-white flex items-center justify-center font-display font-semibold">
                {personalInfo.initials}
              </span>
              <span className="font-display font-semibold text-ink">{personalInfo.name}</span>
            </a>
            <p className="mt-4 text-sm text-ink-soft leading-relaxed max-w-xs">
              {t("blurb")}
            </p>
            <div className="mt-5 flex gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-2.5 rounded-full bg-paper border border-line text-ink-soft hover:text-sage-deep hover:border-sage hover:-translate-y-0.5 transition-all"
                >
                  <s.icon className="w-[18px] h-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow text-ink-faint mb-4">{t("navTitle")}</p>
            <ul className="grid grid-cols-2 gap-y-2.5">
              {navLinks.map((l) => (
                <li key={l.key}>
                  <a href={l.href} className="text-sm text-ink-soft hover:text-sage-deep transition-colors">
                    {nav(l.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-ink-faint mb-4">{t("contactTitle")}</p>
            <a href={personalInfo.social.email} className="block text-sm text-ink-soft hover:text-sage-deep transition-colors mb-2">
              {personalInfo.email}
            </a>
            <p className="text-sm text-ink-soft">{personalInfo.phone}</p>
            {!isStaticExport && (
              <Link href="/admin" className="mt-4 inline-block text-xs text-ink-faint hover:text-ink transition-colors">
                {t("adminAccess")}
              </Link>
            )}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-ink-soft">© {year} {personalInfo.name}. {t("rights")}.</p>
          <p className="text-xs text-ink-faint inline-flex items-center gap-1.5">
            {t("madeWith")} <Heart className="w-3.5 h-3.5 text-terracotta fill-current" /> · Next.js · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
