"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { personalInfo } from "@/data/personal"
import { Github, Linkedin, Send, Heart, Code2 } from "lucide-react"

export function Footer() {
  const t = useTranslations("footer")

  const socialLinks = [
    { icon: Github, url: personalInfo.social.github, label: "GitHub" },
    { icon: Linkedin, url: personalInfo.social.linkedin || "#", label: "LinkedIn" },
    { icon: Send, url: personalInfo.social.telegram, label: "Telegram" },
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 border-t border-white/10">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900/50 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center font-bold text-sm">
                RM
              </div>
              <span className="font-semibold">{personalInfo.name}</span>
            </div>
            <p className="text-sm text-gray-500">
              © {currentYear} {t("rights")}
            </p>
          </div>

          {/* Made With */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-sm text-gray-400"
          >
            <span>{t("madeWith")}</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>{t("and")}</span>
            <Code2 className="w-4 h-4 text-blue-400" />
            <span>{t("by")}</span>
            <span className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </motion.div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-8 pt-6 border-t border-white/5">
          <p className="text-center text-xs text-gray-600">
            Built with Next.js 14 • TypeScript • Tailwind CSS • Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
