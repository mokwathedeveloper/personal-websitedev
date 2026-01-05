"use client"

import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Code2, Sparkles, Layout, Server, Smartphone, Grid, Layers } from "lucide-react"
import { PROJECTS, CONTENT, CATEGORY_ICONS } from "@/lib/data"
import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Section } from "@/components/ui/section"
import { SectionHeading, SectionDescription } from "@/components/ui/typography"
import { FadeIn } from "@/components/animation-wrapper"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { getRepoStats } from "@/lib/github"
import { Star, GitFork } from "lucide-react"

const categories = ["All", ...new Set(PROJECTS.map((project) => project.category))]

export function Projects() {
  const [filter, setFilter] = React.useState("All")
  const [repoStats, setRepoStats] = React.useState<Record<number, { stars: number, forks: number }>>({})

  const filteredProjects = PROJECTS.filter(
    (project) => filter === "All" || project.category === filter
  )

  React.useEffect(() => {
    const fetchAllStats = async () => {
      const stats: Record<number, { stars: number, forks: number }> = {}
      for (const project of PROJECTS) {
        if (project.github && project.github.includes("github.com")) {
          const data = await getRepoStats(project.github)
          if (data) {
            stats[project.id] = { stars: data.stars, forks: data.forks }
          }
        }
      }
      setRepoStats(stats)
    }
    fetchAllStats()
  }, [])

  return (
    <Section id="projects" className="bg-background pt-24 lg:pt-32" fullHeight>
      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] bg-primary/10 blur-[120px] rounded-full opacity-50 pointer-events-none" />
      
      <FadeIn>
        <div className="text-center mb-16 px-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-muted/50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm shadow-sm text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{CONTENT.projects.tagline}</span>
          </div>
          <SectionHeading className="mb-6">{CONTENT.projects.title}</SectionHeading>
          <SectionDescription className="max-w-xl">
            {CONTENT.projects.subtitle}
          </SectionDescription>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => {
            const Icon = CATEGORY_ICONS[category] || Code2
            const isActive = filter === category
            return (
              <Button
                key={category}
                variant={isActive ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className={cn(
                  "rounded-full transition-all duration-500 border-primary/10 h-10 px-6",
                  isActive 
                    ? "shadow-lg shadow-primary/20 scale-105" 
                    : "hover:bg-primary/5 hover:scale-105 bg-background text-muted-foreground hover:text-primary"
                )}
                size="sm"
              >
                <Icon className={cn("w-4 h-4 mr-2 transition-transform", isActive && "scale-110")} />
                <span className="text-xs font-bold uppercase tracking-wider">{category}</span>
              </Button>
            )
          })}
        </div>
      </FadeIn>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => {
            const CategoryIcon = CATEGORY_ICONS[project.category] || Code2
            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "circOut" }}
              >
                <SpotlightCard className="h-full flex flex-col group transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 border-primary/5 bg-card/30">
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-1000 ease-out">
                      <Code2 className="h-20 w-20 text-primary/10" />
                    </div>
                    
                    <div className="absolute top-4 left-4 z-10">
                      <Badge variant="secondary" className="backdrop-blur-md bg-background/60 shadow-sm border-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5">
                        <CategoryIcon className="w-3 h-3 text-primary" />
                        {project.category}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                  </div>
                  
                  <CardHeader className="space-y-3 p-6 md:p-8 pb-4">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors duration-500 font-heading tracking-tight">{project.title}</CardTitle>
                      <div className="flex gap-3 text-xs text-muted-foreground font-bold">
                        {repoStats[project.id] && (
                          <>
                            <span className="flex items-center gap-1 hover:text-primary transition-colors">
                              <Star className="w-3 h-3 fill-primary/20 text-primary" />
                              {repoStats[project.id].stars}
                            </span>
                            <span className="flex items-center gap-1 hover:text-primary transition-colors">
                              <GitFork className="w-3 h-3 text-primary" />
                              {repoStats[project.id].forks}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                    <CardDescription className="text-sm leading-relaxed line-clamp-2 text-muted-foreground/80">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex-grow p-6 md:p-8 pt-0">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-[10px] font-bold uppercase tracking-tight bg-primary/5 border-primary/5 text-primary/80 px-2 py-0 h-5">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="gap-3 p-6 md:p-8 pt-0 mt-auto">
                    <Button variant="outline" size="sm" className="flex-1 gap-2 rounded-xl h-10 border-primary/10 hover:bg-primary/5 text-xs font-bold uppercase tracking-wider" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3.5 h-3.5" /> Code
                      </a>
                    </Button>
                    <Button size="sm" className="flex-1 gap-2 rounded-xl h-10 shadow-md shadow-primary/10 text-xs font-bold uppercase tracking-wider group/btn relative overflow-hidden" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover/btn:animate-shimmer" />
                        <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" /> Demo
                      </a>
                    </Button>
                  </CardFooter>
                </SpotlightCard>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </motion.div>
    </Section>
  )
}
