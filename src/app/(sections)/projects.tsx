"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { PROJECTS } from "@/lib/data"
import { cn } from "@/lib/utils"

const categories = ["All", ...new Set(PROJECTS.map((project) => project.category))]

export function Projects() {
  const [filter, setFilter] = React.useState("All")

  const filteredProjects = PROJECTS.filter(
    (project) => filter === "All" || project.category === filter
  )

  return (
    <section id="projects" className="py-20">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Here are some of the projects I've worked on recently.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className={cn(
                  "rounded-full transition-all",
                  filter === category && "scale-105"
                )}
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all flex flex-col h-full"
              >
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-xl">{project.title}</h3>
                    <span className="text-xs font-medium bg-muted px-2 py-1 rounded-md">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-auto">
                    <Button variant="outline" size="sm" className="w-full gap-2" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" /> Code
                      </a>
                    </Button>
                    <Button size="sm" className="w-full gap-2" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" /> Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
