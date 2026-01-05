"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"
import { SITE_CONFIG, CONTENT } from "@/lib/data"
import Link from "next/link"
import RetroGrid from "@/components/ui/retro-grid"
import { Section } from "@/components/ui/section"
import { SectionHeading, SectionDescription } from "@/components/ui/typography"
import { FadeIn } from "@/components/animation-wrapper"
import { SocialLinks } from "@/components/social-links"

import Image from "next/image"

export function Hero() {
  return (
    <Section id="home" className="min-h-screen flex items-center justify-center py-0" container={false}>
      <RetroGrid />
      
      <div className="container relative z-10 flex flex-col items-center text-center">
        <FadeIn>
          <div className="mb-8 relative inline-block">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-full border-4 border-background shadow-xl ring-4 ring-primary/10 overflow-hidden bg-muted flex items-center justify-center">
               <Image 
                 src="/images/profile.webp" 
                 alt={SITE_CONFIG.name}
                 fill
                 className="object-cover"
                 priority
               />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm mb-8 cursor-default shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            {CONTENT.hero.status}
          </span>
        </FadeIn>

        <FadeIn delay={0.2}>
          <SectionHeading className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-8">
            {CONTENT.hero.title.first} <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60 animate-gradient-x">
              {CONTENT.hero.title.highlight}
            </span> {CONTENT.hero.title.last}
          </SectionHeading>
        </FadeIn>

        <FadeIn delay={0.3}>
          <SectionDescription className="mb-10 text-xl">
            {SITE_CONFIG.description}
          </SectionDescription>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 items-center mb-16">
            <Button size="lg" className="gap-2 h-14 px-8 text-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow rounded-full group" asChild>
              <Link href="/projects">
                {CONTENT.hero.cta.primary} 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 h-14 px-8 text-lg bg-background/50 backdrop-blur-sm hover:bg-background/80 rounded-full" asChild>
              <Link href="/contact">
                {CONTENT.hero.cta.secondary} <Mail className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <SocialLinks />
        </FadeIn>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent relative overflow-hidden">
            <motion.div 
              animate={{ translateY: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-primary shadow-[0_0_8px_rgba(var(--primary),0.5)]"
            />
          </div>
        </motion.div>
      </div>
    </Section>
  )
}