"use client"

import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Code2, Sparkles, Layout, Server, Smartphone, Grid, Layers } from "lucide-react"
import { PROJECTS, CONTENT } from "@/lib/data"
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

const categories = ["All", ...new Set(PROJECTS.map((project) => project.category))]

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "All": return <Grid className="w-4 h-4 mr-2" />
    case "Full Stack": return <Layout className="w-4 h-4 mr-2" />
    case "Web App": return <Layers className="w-4 h-4 mr-2" />
    case "AI/ML": return <Server className="w-4 h-4 mr-2" />
    case "Mobile": return <Smartphone className="w-4 h-4 mr-2" />
    default: return <Code2 className="w-4 h-4 mr-2" />
  }
}

export function Projects() {
  const [filter, setFilter] = React.useState("All")

  const filteredProjects = PROJECTS.filter(
    (project) => filter === "All" || project.category === filter
  )

  return (
    <Section id="projects" className="bg-background" fullHeight>
      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] bg-primary/10 blur-[120px] rounded-full opacity-50 pointer-events-none" />
      
      <FadeIn>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border bg-muted/50 px-3 py-1 text-sm font-medium mb-4 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>{CONTENT.projects.tagline}</span>
          </div>
          <SectionHeading>{CONTENT.projects.title}</SectionHeading>
          <SectionDescription>
            {CONTENT.projects.subtitle}
          </SectionDescription>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className={cn(
                "rounded-full transition-all duration-300 border-primary/20",
                filter === category 
                  ? "shadow-md shadow-primary/25 scale-105" 
                  : "hover:bg-primary/5 hover:scale-105 bg-background"
              )}
              size="sm"
            >
              {getCategoryIcon(category)}
              {category}
            </Button>
          ))}
        </div>
      </FadeIn>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <SpotlightCard className="h-full flex flex-col group transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 border-primary/10" spotlightColor="rgba(var(--primary), 0.1)">
                <div className="relative aspect-video overflow-hidden bg-muted/50 group-hover:shadow-inner transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-700 ease-out">
                    <Code2 className="h-16 w-16 text-primary/20" />
                  </div>
                  
                  <div className="absolute top-4 right-4 z-10">
                    <Badge variant="secondary" className="backdrop-blur-md bg-background/80 shadow-sm flex items-center gap-1">
                      {getCategoryIcon(project.category)}
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                
                <CardHeader>
                  <CardTitle className="line-clamp-1 group-hover:text-primary transition-colors duration-300 font-heading">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2 mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs font-normal bg-background/50 flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-primary/70" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="gap-2 pt-0">
                  <Button variant="outline" size="sm" className="w-full gap-2 transition-all hover:border-primary/50 hover:bg-primary/5" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" /> Code
                    </a>
                  </Button>
                  <Button size="sm" className="w-full gap-2 group/btn relative overflow-hidden" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover/btn:animate-shimmer" />
                      <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" /> Demo
                    </a>
                  </Button>
                </CardFooter>
              </SpotlightCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  )
}
