"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslations, useLocale } from "next-intl"
import { Link, usePathname, useRouter } from "@/i18n/navigation"
import { Button } from "@/components/ui/button"
import { personalInfo } from "@/data/personal"
import { 
  Menu, 
  X, 
  Download,
  Globe
} from "lucide-react"

const navItems = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "projects", href: "#projects" },
  { key: "education", href: "#education" },
  { key: "contact", href: "#contact" },
]

export function Navbar() {
  const t = useTranslations("nav")
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLocale = () => {
    const newLocale = locale === 'es' ? 'en' : 'es'
    router.push(pathname, { locale: newLocale })
  }

  const cvUrl = locale === 'es' ? personalInfo.resumeEs : personalInfo.resumeEn

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-gray-900/80 backdrop-blur-lg border-b border-white/10 shadow-lg" 
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="#home" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center font-bold text-lg">
                RM
              </div>
              <span className="font-semibold hidden sm:block">Richard Matos</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="px-4 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  {t(item.key)}
                </a>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2">
              {/* Language Toggle */}
              <button
                onClick={toggleLocale}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm uppercase">{locale === 'es' ? 'EN' : 'ES'}</span>
              </button>

              {/* Download CV Button */}
              <Button variant="default" size="sm" asChild className="hidden sm:flex">
                <a href={cvUrl} download>
                  <Download className="w-4 h-4" />
                  <span className="hidden md:inline">{t("downloadCV")}</span>
                </a>
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 lg:hidden"
          >
            <div className="bg-gray-900/95 backdrop-blur-lg border-b border-white/10 shadow-xl">
              <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <a
                      key={item.key}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                    >
                      {t(item.key)}
                    </a>
                  ))}
                  <hr className="border-white/10 my-2" />
                  <Button variant="default" size="sm" asChild className="w-full">
                    <a href={cvUrl} download>
                      <Download className="w-4 h-4" />
                      {t("downloadCV")}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
