"use client"

import { useState } from "react"
import { useLocale, useTranslations } from "next-intl"
import { SectionHeading } from "@/components/ui/section-heading"
import { Reveal } from "@/components/ui/reveal"
import { Button } from "@/components/ui/button"
import { personalInfo } from "@/data/personal"
import { Mail, Github, Send, MapPin, ArrowUpRight, MessageCircle, Phone } from "lucide-react"
import { LinkedInIcon } from "@/components/icons/linkedin-icon"

export function ContactSection() {
  const t = useTranslations("contact")
  const locale = useLocale() as "es" | "en"
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const channels = [
    { icon: Mail, label: "Email", value: personalInfo.email, href: personalInfo.social.email, internal: true },
    { icon: MessageCircle, label: "WhatsApp", value: personalInfo.phone, href: personalInfo.social.whatsapp },
    { icon: Phone, label: t("phone"), value: personalInfo.phone, href: personalInfo.social.phone, internal: true },
    { icon: LinkedInIcon, label: "LinkedIn", value: t("viewProfile"), href: personalInfo.social.linkedin },
    { icon: Github, label: "GitHub", value: "Pol4720", href: personalInfo.social.github },
    { icon: Send, label: "Telegram", value: "@Pol4720", href: personalInfo.social.telegram },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`${t("mailSubject")} — ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="relative py-24 sm:py-28 overflow-hidden">
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-sage-soft/40 blur-3xl -z-10" />
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading index="08" eyebrow={t("eyebrow")} title={t("title")} description={t("subtitle")} />

        <div className="mt-14 grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Channels */}
          <Reveal>
            <div className="card p-8 h-full flex flex-col">
              <p className="text-ink-soft leading-relaxed mb-6">{t("description")}</p>
              <div className="space-y-3 flex-1">
                {channels.map(({ icon: Icon, label, value, href, internal }) => (
                  <a
                    key={label}
                    href={href}
                    target={internal ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-line bg-sand/50 p-4 hover:border-sage hover:bg-sage-soft/30 transition-all"
                  >
                    <span className="w-11 h-11 rounded-xl bg-paper border border-line flex items-center justify-center shrink-0 group-hover:border-sage transition-colors">
                      <Icon className="w-5 h-5 text-sage-deep" />
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs eyebrow text-ink-faint">{label}</p>
                      <p className="text-sm text-ink font-medium truncate">{value}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-ink-faint group-hover:text-sage-deep transition-colors" />
                  </a>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm text-ink-soft">
                <MapPin className="w-4 h-4 text-sage" /> {personalInfo.location[locale]}
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="card p-8 h-full flex flex-col gap-4">
              <div>
                <label className="text-sm font-medium text-ink mb-1.5 block">{t("form.name")}</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-line bg-sand/40 px-4 py-3 text-ink placeholder:text-ink-faint focus:border-sage focus:bg-paper outline-none transition-colors"
                  placeholder={t("form.namePlaceholder")}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-ink mb-1.5 block">{t("form.email")}</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-line bg-sand/40 px-4 py-3 text-ink placeholder:text-ink-faint focus:border-sage focus:bg-paper outline-none transition-colors"
                  placeholder="you@email.com"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <label className="text-sm font-medium text-ink mb-1.5 block">{t("form.message")}</label>
                <textarea
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full flex-1 min-h-32 rounded-xl border border-line bg-sand/40 px-4 py-3 text-ink placeholder:text-ink-faint focus:border-sage focus:bg-paper outline-none transition-colors resize-none"
                  placeholder={t("form.messagePlaceholder")}
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                <Send className="w-4 h-4" /> {t("form.send")}
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
