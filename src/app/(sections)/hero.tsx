"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"
import { SITE_CONFIG, CONTENT } from "@/lib/data"
import Link from "next/link"
import RetroGrid from "@/components/ui/retro-grid"
import Image from "next/image"

export function Hero() {
  return (
    <section id="home" className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-20 overflow-hidden">
      <RetroGrid />
      
      <div className="container px-4 flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 relative"
        >
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
          <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-full border-4 border-background shadow-xl ring-4 ring-primary/10 overflow-hidden bg-muted">
            {/* 
              Using next/image for optimization. 
              In a real app, replace '/avatar-placeholder.jpg' with your actual image path.
              If no image is available, the fallback text is shown via a conditional or CSS.
              For this template, we'll assume an image exists or fallback to a colored div if it fails to load (handled by standard img behavior usually, but Next.js Image requires a valid src).
              Since we don't have a real image, we will render a placeholder div with initials.
            */}
             <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary to-primary/50 text-4xl font-bold text-primary-foreground">
                {SITE_CONFIG.name.charAt(0)}
             </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm mb-6 cursor-default">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            {CONTENT.hero.status}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 font-heading"
        >
          {CONTENT.hero.title.first} <br className="hidden md:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500 animate-gradient-x">
            {CONTENT.hero.title.highlight}
          </span> {CONTENT.hero.title.last}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed"
        >
          {SITE_CONFIG.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <Button size="lg" className="gap-2 h-12 px-8 text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow relative overflow-hidden group" asChild>
            <Link href="/projects">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:animate-shimmer" />
              {CONTENT.hero.cta.primary} <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="gap-2 h-12 px-8 text-base bg-background/50 backdrop-blur-sm hover:bg-background/80 hover:border-primary/50 transition-colors" asChild>
            <Link href="/contact">
              {CONTENT.hero.cta.secondary}
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 flex gap-6 text-muted-foreground"
        >
           <a href={SITE_CONFIG.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300">
             <Github className="w-6 h-6" />
             <span className="sr-only">GitHub</span>
           </a>
           <a href={SITE_CONFIG.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300">
             <Linkedin className="w-6 h-6" />
             <span className="sr-only">LinkedIn</span>
           </a>
           <a href={SITE_CONFIG.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300">
             <Twitter className="w-6 h-6" />
             <span className="sr-only">Twitter</span>
           </a>
        </motion.div>
      </div>
    </section>
  )
}
