"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Code2, Sparkles } from "lucide-react"
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
import Image from "next/image"

const categories = ["All", ...new Set(PROJECTS.map((project) => project.category))]

export function Projects() {
  const [filter, setFilter] = React.useState("All")

  const filteredProjects = PROJECTS.filter(
    (project) => filter === "All" || project.category === filter
  )

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] bg-primary/10 blur-[120px] rounded-full opacity-50" />
      
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border bg-muted/50 px-3 py-1 text-sm font-medium mb-4 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>{CONTENT.projects.tagline}</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 font-heading">
            {CONTENT.projects.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {CONTENT.projects.subtitle}
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "secondary"}
              onClick={() => setFilter(category)}
              className={cn(
                "rounded-full transition-all duration-300",
                filter === category 
                  ? "shadow-md shadow-primary/25 scale-105" 
                  : "hover:bg-secondary/80 hover:scale-105"
              )}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>

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
                <Card className="h-full flex flex-col overflow-hidden group relative border-transparent bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 rounded-lg p-[1px] bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-primary/50 group-hover:via-purple-500/50 group-hover:to-primary/50 -z-10 transition-all duration-500" />
                  
                  <div className="relative aspect-video overflow-hidden bg-muted/50 group-hover:shadow-inner transition-all">
                    {/* 
                       Placeholder for project image.
                       In a real app, use:
                       <Image src={project.image} alt={project.title} fill className="object-cover" />
                    */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-700 ease-out">
                      <Code2 className="h-16 w-16 text-primary/20" />
                    </div>
                    
                    <div className="absolute top-4 right-4 z-10">
                      <Badge variant="secondary" className="backdrop-blur-md bg-background/80 shadow-sm">
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
                        <Badge key={tag} variant="outline" className="text-xs font-normal bg-background/50">
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
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
