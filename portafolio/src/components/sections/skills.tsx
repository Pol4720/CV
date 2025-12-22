"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { skills, getSkillsByCategory, languages } from "@/data/skills"
import { useLocale } from "next-intl"
import { 
  Code2, 
  Layers, 
  Wrench, 
  Database, 
  Brain,
  Globe 
} from "lucide-react"

const categoryIcons = {
  languages: Code2,
  frameworks: Layers,
  tools: Wrench,
  databases: Database,
  concepts: Brain,
}

const categoryColors = {
  languages: "from-blue-500 to-cyan-500",
  frameworks: "from-purple-500 to-pink-500",
  tools: "from-orange-500 to-yellow-500",
  databases: "from-green-500 to-emerald-500",
  concepts: "from-red-500 to-orange-500",
}

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="mb-3"
    >
      <div className="flex justify-between mb-1">
        <span className="text-sm text-gray-300">{name}</span>
        <span className="text-xs text-gray-500">{level}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
        />
      </div>
    </motion.div>
  )
}

function LanguageCard({ language, index }: { language: typeof languages[0]; index: number }) {
  const locale = useLocale() as 'es' | 'en'
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 hover:from-blue-900/30 hover:to-purple-900/30 transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <span className="text-4xl">{language.flag}</span>
            <div className="flex-1">
              <h4 className="font-semibold text-lg">{language.name[locale]}</h4>
              <p className="text-sm text-gray-400">{language.level[locale]}</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {language.percentage}%
              </div>
            </div>
          </div>
          <div className="mt-4 h-2 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${language.percentage}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function SkillsSection() {
  const t = useTranslations("skills")
  const tLang = useTranslations("languages")
  
  const categories = ['languages', 'frameworks', 'tools', 'databases', 'concepts'] as const

  return (
    <section id="skills" className="py-20 relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
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

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {categories.map((category, categoryIndex) => {
            const Icon = categoryIcons[category]
            const categorySkills = getSkillsByCategory(category)
            const colorGradient = categoryColors[category]

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${colorGradient} bg-opacity-20`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <CardTitle className="text-lg">
                        {t(`categories.${category}`)}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {categorySkills.map((skill, index) => (
                      <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20"
        >
          <div className="flex items-center gap-3 justify-center mb-8">
            <Globe className="w-6 h-6 text-blue-400" />
            <h3 className="text-2xl font-bold">{tLang("title")}</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {languages.map((language, index) => (
              <LanguageCard key={language.name.en} language={language} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
