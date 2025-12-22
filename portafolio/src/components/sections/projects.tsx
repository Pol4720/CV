"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslations, useLocale } from "next-intl"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { projects, getProjectsByCategory, type Project } from "@/data/projects"
import { 
  Github, 
  ExternalLink, 
  Folder, 
  Star,
  ArrowRight 
} from "lucide-react"

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const locale = useLocale() as 'es' | 'en'
  const t = useTranslations("projects")

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card className="h-full group hover:border-blue-500/50 transition-all duration-300">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-4">
            <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20">
              <Folder className="w-5 h-5 text-blue-400" />
            </div>
            <div className="flex gap-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
          <CardTitle className="text-lg mt-4 group-hover:text-blue-400 transition-colors">
            {project.title[locale]}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-gray-400 line-clamp-3">
            {project.description[locale]}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="secondary" className="text-xs">
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>

          <div className="flex items-center justify-between pt-2">
            <Badge 
              variant={project.status === 'completed' ? 'success' : 'warning'}
              className="text-xs"
            >
              {project.status === 'completed' ? '✓' : '⏳'} {project.status === 'completed' ? 'Completado' : 'En progreso'}
            </Badge>
            {project.featured && (
              <div className="flex items-center gap-1 text-yellow-400 text-xs">
                <Star className="w-3 h-3 fill-current" />
                {t("featured")}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function ProjectsSection() {
  const t = useTranslations("projects")
  const [activeCategory, setActiveCategory] = useState<string>("all")
  
  const categories = [
    { id: 'all', label: t("categories.all") },
    { id: 'ai', label: t("categories.ai") },
    { id: 'distributed', label: t("categories.distributed") },
    { id: 'compilers', label: t("categories.compilers") },
    { id: 'data', label: t("categories.data") },
    { id: 'games', label: t("categories.games") },
    { id: 'other', label: t("categories.other") },
  ]

  const filteredProjects = getProjectsByCategory(activeCategory)

  return (
    <section id="projects" className="py-20 relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
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

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <Tabs value={activeCategory} onValueChange={setActiveCategory}>
            <TabsList className="flex-wrap h-auto gap-2 p-2">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="px-4 py-2"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild>
            <a 
              href="https://github.com/Pol4720?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {t("viewAll")}
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
