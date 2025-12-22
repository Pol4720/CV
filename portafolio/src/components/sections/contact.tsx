"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { personalInfo } from "@/data/personal"
import { 
  Send, 
  Github, 
  Linkedin,
  Mail,
  MapPin,
  ArrowUpRight
} from "lucide-react"

export function ContactSection() {
  const t = useTranslations("contact")

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: personalInfo.social.github,
      color: "hover:bg-gray-800"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: personalInfo.social.linkedin || "#",
      color: "hover:bg-blue-600"
    },
    {
      name: "Telegram",
      icon: Send,
      url: personalInfo.social.telegram,
      color: "hover:bg-sky-500"
    },
    {
      name: "Email",
      icon: Mail,
      url: personalInfo.email ? `mailto:${personalInfo.email}` : "#",
      color: "hover:bg-red-500"
    }
  ]

  return (
    <section id="contact" className="py-20 relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t("title")}
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">{t("description")}</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="font-medium">La Habana, Cuba</p>
                    </div>
                  </div>
                  
                  {personalInfo.email && (
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Email</p>
                        <a 
                          href={`mailto:${personalInfo.email}`}
                          className="font-medium hover:text-blue-400 transition-colors"
                        >
                          {personalInfo.email}
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <h4 className="font-semibold mb-4">{t("social.title")}</h4>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-3 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 ${social.color}`}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-sm text-gray-400">
                      {/* User can customize */}
                      Disponible para oportunidades
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">
                    Actualmente buscando prácticas profesionales y proyectos interesantes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="h-full">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t("form.name")}
                    </label>
                    <Input 
                      type="text" 
                      placeholder={t("form.name")}
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t("form.email")}
                    </label>
                    <Input 
                      type="email" 
                      placeholder="your@email.com"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t("form.message")}
                    </label>
                    <Textarea 
                      placeholder={t("form.message")}
                      className="w-full min-h-[150px]"
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    {t("form.send")}
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>

                <p className="text-xs text-gray-500 text-center mt-4">
                  * El formulario requiere configuración de backend (Resend, Formspree, etc.)
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
