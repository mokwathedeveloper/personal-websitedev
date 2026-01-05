"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"
import { SITE_CONFIG, CONTENT } from "@/lib/data"
import Link from "next/link"
import Image from "next/image"
import RetroGrid from "@/components/ui/retro-grid"
import { Section } from "@/components/ui/section"
import { SectionHeading, SectionDescription, SectionLabel } from "@/components/ui/typography"
import { FadeIn } from "@/components/animation-wrapper"
import { SocialLinks } from "@/components/social-links"
import { useMotionValue, useMotionTemplate } from "framer-motion"

export function Hero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <Section 
      id="home" 
      fullHeight 
      container={false}
      onMouseMove={handleMouseMove}
      className="pt-20 lg:pt-0"
    >
      <RetroGrid />
      
      {/* Background Spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 transition duration-300 opacity-0 lg:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              800px circle at ${mouseX}px ${mouseY}px,
              rgba(var(--primary), 0.05),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="container mx-auto relative z-10 flex flex-col items-center text-center py-12 px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-10 relative inline-block">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <div className="relative h-32 w-32 md:h-44 md:w-44 rounded-full border-4 border-background shadow-2xl ring-4 ring-primary/10 overflow-hidden bg-muted flex items-center justify-center">
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
          <SectionLabel className="mb-8">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse inline-block align-middle"></span>
            {CONTENT.hero.status}
          </SectionLabel>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8 font-heading overflow-hidden leading-[0.9]">
            {CONTENT.hero.title.first.split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="inline-block mr-[0.2em]"
              >
                {word}
              </motion.span>
            ))}
            <br className="hidden md:block" />
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60 animate-gradient-x inline-block"
            >
              {CONTENT.hero.title.highlight}
            </motion.span>{" "}
            {CONTENT.hero.title.last.split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                className="inline-block mr-[0.2em]"
              >
                {word}
              </motion.span>
            ))}
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <SectionDescription className="mb-12 text-xl md:text-2xl max-w-3xl">
            {SITE_CONFIG.description}
          </SectionDescription>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-6 items-center mb-16">
            <Button size="lg" className="gap-2 h-16 px-10 text-lg shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all rounded-full group" asChild>
              <Link href="/projects">
                {CONTENT.hero.cta.primary} 
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 h-16 px-10 text-lg bg-background/50 backdrop-blur-sm hover:bg-background/80 rounded-full border-primary/20" asChild>
              <Link href="/contact">
                {CONTENT.hero.cta.secondary} <Mail className="w-6 h-6" />
              </Link>
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <SocialLinks className="justify-center" />
        </FadeIn>
      </div>
    </Section>
  )
}