"use client"

import { motion } from "framer-motion"
import { useTranslations, useLocale } from "next-intl"
import { Button } from "@/components/ui/button"
import { personalInfo } from "@/data/personal"
import { marqueeTech } from "@/data/skills"
import { ArrowDown, Github, Send, Mail, MapPin, Sparkles } from "lucide-react"
import { LinkedInIcon } from "@/components/icons/linkedin-icon"

export function HeroSection() {
  const t = useTranslations("hero")
  const locale = useLocale() as "es" | "en"

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  }
  const item = {
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      {/* Soft aurora background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[8%] left-[-6%] w-[38rem] h-[38rem] rounded-full bg-sage-soft/70 blur-3xl animate-float-slow" />
        <div className="absolute bottom-[2%] right-[-8%] w-[34rem] h-[34rem] rounded-full bg-terracotta-soft/60 blur-3xl animate-float-slow-2" />
        <div className="absolute top-[35%] right-[22%] w-[22rem] h-[22rem] rounded-full bg-lavender-soft/50 blur-3xl animate-float-slow" />
        <div className="absolute inset-0 dot-grid opacity-40" />
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left */}
          <motion.div variants={container} initial="hidden" animate="show" className="lg:col-span-7">
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-paper/70 border border-line text-sm text-ink-soft backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-gold" />
                {t("badge")}
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-6 font-display font-semibold text-ink text-[2.7rem] sm:text-6xl xl:text-7xl leading-[1.02]"
            >
              {personalInfo.name.split(" ").slice(0, 2).join(" ")}{" "}
              <span className="text-gradient">{personalInfo.name.split(" ").slice(2).join(" ")}</span>
            </motion.h1>

            <motion.p variants={item} className="mt-4 text-xl sm:text-2xl font-display text-terracotta-deep">
              {personalInfo.title[locale]}
            </motion.p>

            <motion.p variants={item} className="mt-3 text-base sm:text-lg text-ink-soft max-w-xl">
              {personalInfo.tagline[locale]}
            </motion.p>

            <motion.p variants={item} className="mt-5 text-ink-soft max-w-xl leading-relaxed">
              {t("intro")}
            </motion.p>

            <motion.div variants={item} className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-soft">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-sage" /> {personalInfo.location[locale]}
              </span>
              <a href={personalInfo.social.email} className="inline-flex items-center gap-1.5 hover:text-ink transition-colors">
                <Mail className="w-4 h-4 text-sage" /> {personalInfo.email}
              </a>
            </motion.div>

            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
              <Button size="lg" asChild>
                <a href="#projects">{t("ctaProjects")}</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">
                  <Send className="w-4 h-4" /> {t("ctaContact")}
                </a>
              </Button>
              <div className="flex items-center gap-2 ml-1">
                {[
                  { href: personalInfo.social.github, icon: Github, label: "GitHub" },
                  { href: personalInfo.social.linkedin, icon: LinkedInIcon, label: "LinkedIn" },
                  { href: personalInfo.social.telegram, icon: Send, label: "Telegram" },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2.5 rounded-full bg-paper/70 border border-line text-ink-soft hover:text-sage-deep hover:border-sage hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <Icon className="w-[18px] h-[18px]" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right — stats card */}
          <motion.div
            variants={item}
            initial="hidden"
            animate="show"
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-sage-soft/60 via-transparent to-terracotta-soft/50 rounded-[2rem] blur-xl -z-10" />
              <div className="card p-7 sm:p-8">
                <div className="flex items-center gap-2 text-sage-deep mb-6">
                  <span className="h-2 w-2 rounded-full bg-sage animate-pulse" />
                  <span className="eyebrow">{t("statusOpen")}</span>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  {personalInfo.stats.map((s, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                    >
                      <p className="font-display text-3xl sm:text-4xl font-semibold text-gradient">{s.value}</p>
                      <p className="text-xs text-ink-soft mt-1 leading-snug">{s.label[locale]}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="h-px bg-line my-6" />
                <p className="text-sm text-ink-soft leading-relaxed">
                  <span className="font-semibold text-ink">{t("nowTitle")}</span> {t("nowBody")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tech marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-14 marquee-pause overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        >
          <div className="flex gap-3 w-max animate-marquee">
            {[...marqueeTech, ...marqueeTech].map((tech, i) => (
              <span
                key={i}
                className="px-4 py-1.5 rounded-full bg-paper/60 border border-line text-sm text-ink-soft whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-ink-faint"
        aria-label="Scroll"
      >
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="block">
          <ArrowDown className="w-5 h-5" />
        </motion.span>
      </motion.a>
    </section>
  )
}
