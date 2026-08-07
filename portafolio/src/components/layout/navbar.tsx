"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslations, useLocale } from "next-intl"
import { usePathname, useRouter } from "@/i18n/navigation"
import { Button } from "@/components/ui/button"
import { personalInfo } from "@/data/personal"
import { Menu, X, Download, Languages, Github, ChevronDown } from "lucide-react"
import { LinkedInIcon } from "@/components/icons/linkedin-icon"

const navItems = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "experience", href: "#experience" },
  { key: "projects", href: "#projects" },
  { key: "awards", href: "#awards" },
  { key: "research", href: "#research" },
  { key: "documents", href: "#documents" },
  { key: "contact", href: "#contact" },
]

export function Navbar() {
  const t = useTranslations("nav")
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [cvOpen, setCvOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLocale = () => {
    router.push(pathname, { locale: locale === "es" ? "en" : "es" })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass shadow-[0_6px_24px_-16px_rgba(120,100,70,0.5)]" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2.5 group">
              <span className="w-10 h-10 rounded-2xl bg-sage-deep text-white flex items-center justify-center font-display font-semibold text-lg group-hover:bg-terracotta-deep transition-colors duration-500">
                {personalInfo.initials}
              </span>
              <span className="font-display font-semibold text-ink hidden sm:block">
                {personalInfo.shortName}
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden xl:flex items-center gap-0.5">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="px-3.5 py-2 rounded-full text-sm text-ink-soft hover:text-ink hover:bg-sand transition-all duration-300"
                >
                  {t(item.key)}
                </a>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1.5">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hidden sm:flex p-2 rounded-full text-ink-soft hover:text-ink hover:bg-sand transition-colors"
              >
                <Github className="w-[18px] h-[18px]" />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hidden sm:flex p-2 rounded-full text-ink-soft hover:text-ink hover:bg-sand transition-colors"
              >
                <LinkedInIcon className="w-[18px] h-[18px]" />
              </a>

              <button
                onClick={toggleLocale}
                className="p-2 rounded-full text-ink-soft hover:text-ink hover:bg-sand transition-colors flex items-center gap-1.5"
                aria-label="Toggle language"
              >
                <Languages className="w-[18px] h-[18px]" />
                <span className="text-xs font-semibold uppercase">{locale === "es" ? "EN" : "ES"}</span>
              </button>

              {/* CV dropdown */}
              <div
                className="relative hidden sm:block"
                onMouseEnter={() => setCvOpen(true)}
                onMouseLeave={() => setCvOpen(false)}
              >
                <Button size="sm" className="pr-3">
                  <Download className="w-4 h-4" />
                  <span className="hidden md:inline">{t("downloadCV")}</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-80" />
                </Button>
                <AnimatePresence>
                  {cvOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute right-0 top-full pt-2 w-44"
                    >
                      <div className="card p-1.5 overflow-hidden">
                        <a
                          href={personalInfo.resume.es}
                          download
                          className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-ink hover:bg-sand transition-colors"
                        >
                          🇪🇸 {t("cvEs")}
                        </a>
                        <a
                          href={personalInfo.resume.en}
                          download
                          className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-ink hover:bg-sand transition-colors"
                        >
                          🇬🇧 {t("cvEn")}
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="xl:hidden p-2 rounded-full text-ink hover:bg-sand transition-colors"
                aria-label="Menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-x-0 top-16 z-40 xl:hidden px-3"
          >
            <div className="card p-3">
              <div className="grid grid-cols-2 gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3 rounded-xl text-sm text-ink-soft hover:text-ink hover:bg-sand transition-colors"
                  >
                    {t(item.key)}
                  </a>
                ))}
              </div>
              <div className="h-px bg-line my-3" />
              <div className="flex gap-2">
                <Button size="sm" asChild className="flex-1">
                  <a href={personalInfo.resume.es} download>
                    <Download className="w-4 h-4" /> {t("cvEs")}
                  </a>
                </Button>
                <Button size="sm" variant="secondary" asChild className="flex-1">
                  <a href={personalInfo.resume.en} download>
                    <Download className="w-4 h-4" /> {t("cvEn")}
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
