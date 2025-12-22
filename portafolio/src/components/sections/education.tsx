"use client"

import { motion } from "framer-motion"
import { useTranslations, useLocale } from "next-intl"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { education, certifications } from "@/data/education"
import { 
  GraduationCap, 
  MapPin, 
  Calendar,
  Award,
  ExternalLink,
  BookOpen,
  Trophy
} from "lucide-react"

export function EducationSection() {
  const t = useTranslations("education")
  const tCert = useTranslations("certifications")
  const locale = useLocale() as 'es' | 'en'

  return (
    <section id="education" className="py-20 relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
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

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto mb-20">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 border-l-2 border-blue-500/30"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
              
              <Card className="mb-8 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
                <CardContent className="p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1">
                        {edu.degree[locale]} - {edu.field[locale]}
                      </h3>
                      <div className="flex items-center gap-2 text-blue-400">
                        <GraduationCap className="w-4 h-4" />
                        <span>{edu.institution[locale]}</span>
                      </div>
                    </div>
                    <Badge variant={edu.current ? "default" : "secondary"}>
                      {edu.current ? t("current") : t("completed")}
                    </Badge>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {edu.startDate} - {edu.endDate || (locale === 'es' ? 'Presente' : 'Present')}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location[locale]}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6">{edu.description[locale]}</p>

                  {/* Relevant Courses */}
                  {edu.courses && (
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <BookOpen className="w-4 h-4 text-purple-400" />
                        <h4 className="font-semibold">{t("relevantCourses")}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses[locale].map((course) => (
                          <Badge key={course} variant="secondary" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Achievements */}
                  {edu.achievements && (
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Trophy className="w-4 h-4 text-yellow-400" />
                        <h4 className="font-semibold">{t("achievements")}</h4>
                      </div>
                      <ul className="space-y-2">
                        {edu.achievements[locale].map((achievement, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20"
        >
          <div className="flex items-center gap-3 justify-center mb-8">
            <Award className="w-6 h-6 text-blue-400" />
            <h3 className="text-2xl font-bold">{tCert("title")}</h3>
          </div>
          <p className="text-center text-gray-400 mb-8">
            {tCert("subtitle")}
          </p>

          {certifications.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:border-blue-500/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                          <Award className="w-5 h-5 text-blue-400" />
                        </div>
                        {cert.credentialUrl && (
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                      <h4 className="font-semibold mb-2">{cert.title[locale]}</h4>
                      <p className="text-sm text-gray-400 mb-4">{cert.issuer[locale]}</p>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {cert.date}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {tCert(`categories.${cert.category}`)}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <Award className="w-8 h-8 text-blue-400" />
                </div>
                <p className="text-gray-400">
                  {locale === 'es' 
                    ? 'Agrega tus certificaciones en src/data/education.ts'
                    : 'Add your certifications in src/data/education.ts'}
                </p>
              </CardContent>
            </Card>
          )}
        </motion.div>
      </div>
    </section>
  )
}
