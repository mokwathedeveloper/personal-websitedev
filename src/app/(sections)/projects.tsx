"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "A comprehensive dashboard for managing online stores, featuring real-time analytics and inventory management.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    link: "#",
    github: "#",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool with drag-and-drop functionality and team workspaces.",
    tags: ["React", "Redux", "Node.js", "Socket.io"],
    link: "#",
    github: "#",
  },
  {
    title: "AI Image Generator",
    description: "An application that uses generative AI to create unique images based on user prompts.",
    tags: ["Python", "FastAPI", "React", "OpenAI API"],
    link: "#",
    github: "#",
  },
]

export function Projects() {
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
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on recently.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all"
            >
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
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
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="w-full gap-2">
                    <Github className="w-4 h-4" /> Code
                  </Button>
                  <Button size="sm" className="w-full gap-2">
                    <ExternalLink className="w-4 h-4" /> Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
