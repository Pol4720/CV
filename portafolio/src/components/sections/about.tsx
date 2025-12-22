"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { Card, CardContent } from "@/components/ui/card"
import { personalInfo } from "@/data/personal"
import { 
  MapPin, 
  GraduationCap, 
  Building2, 
  Calendar,
  Sparkles 
} from "lucide-react"

export function AboutSection() {
  const t = useTranslations("about")

  const details = [
    { icon: Building2, label: t("details.university"), key: "university" },
    { icon: GraduationCap, label: t("details.faculty"), key: "faculty" },
    { icon: Calendar, label: t("details.year"), key: "year" },
    { icon: MapPin, label: t("details.location"), key: "location" },
  ]

  const interests = t.raw("interests.list") as string[]

  return (
    <section id="about" className="py-20 relative">
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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-20" />
              
              {/* Image Container */}
              <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-white/10 bg-gray-800/50">
                {/* Placeholder for avatar */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900/50 to-purple-900/50">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-5xl font-bold">
                      {personalInfo.name.charAt(0)}
                    </div>
                    <p className="text-gray-400 text-sm">
                      {/* User will add their photo */}
                      Agrega tu foto en /public/images/avatar.jpg
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl px-4 py-2 shadow-xl"
              >
                <span className="text-sm font-medium">MATCOM - UH</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {t("description")}
            </p>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {details.map((detail, index) => (
                <motion.div
                  key={detail.key}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                    <detail.icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm">{detail.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Interests */}
            <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                  <h3 className="font-semibold">{t("interests.title")}</h3>
                </div>
                <ul className="space-y-2">
                  {interests.map((interest: string, index: number) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                      {interest}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
