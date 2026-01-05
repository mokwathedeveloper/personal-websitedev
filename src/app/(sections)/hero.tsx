"use client"

import { useEffect, useState } from "react"
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
import { MeshGradient } from "@/components/ui/mesh-gradient"

export function Hero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [lastActivity, setLastActivity] = useState<string | null>(null)

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const username = SITE_CONFIG.socials.github.split("/").pop()
        const response = await fetch(`https://api.github.com/users/${username}/events/public`)
        const data = await response.json()
        if (data && data.length > 0) {
          const lastEvent = data[0]
          const date = new Date(lastEvent.created_at)
          setLastActivity(`Last active ${date.toLocaleDateString()}`)
        }
      } catch (error) {
        console.error("Error fetching activity:", error)
      }
    }
    fetchActivity()
  }, [])

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
      <MeshGradient />
      <RetroGrid className="opacity-[0.15]" />
      
      {/* Background Spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 transition duration-300 opacity-0 lg:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              1000px circle at ${mouseX}px ${mouseY}px,
              rgba(var(--primary), 0.08),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="container relative z-10 flex flex-col items-center text-center py-12">
        <FadeIn>
          <div className="mb-10 relative inline-block">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse" />
            <div className="relative h-32 w-32 md:h-44 md:w-44 rounded-[2rem] border-4 border-background shadow-2xl ring-4 ring-primary/10 overflow-hidden bg-muted flex items-center justify-center rotate-3 hover:rotate-0 transition-transform duration-500">
               <Image 
                 src="/images/profile.webp" 
                 alt={SITE_CONFIG.name}
                 fill
                 className="object-cover scale-110"
                 priority
               />
            </div>
            {lastActivity && (
              <div className="absolute -bottom-2 -right-2 bg-background border border-primary/20 px-3 py-1 rounded-full shadow-lg z-20 flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-tight text-foreground">{lastActivity}</span>
              </div>
            )}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <SectionLabel className="mb-8 bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse inline-block align-middle"></span>
            {CONTENT.hero.status}
          </SectionLabel>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 font-heading overflow-hidden leading-[0.85] uppercase">
            {CONTENT.hero.title.first.split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block mr-[0.2em]"
              >
                {word}
              </motion.span>
            ))}
            <br className="hidden md:block" />
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60 animate-gradient-x inline-block"
            >
              {CONTENT.hero.title.highlight}
            </motion.span>{" "}
            {CONTENT.hero.title.last.split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block mr-[0.2em]"
              >
                {word}
              </motion.span>
            ))}
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <SectionDescription className="mb-12 text-xl md:text-2xl max-w-3xl font-medium tracking-tight">
            {SITE_CONFIG.description}
          </SectionDescription>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-6 items-center mb-16">
            <Button size="lg" className="gap-2 h-16 px-10 text-lg shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-all rounded-full group bg-primary hover:scale-105 active:scale-95" asChild>
              <Link href="/projects">
                {CONTENT.hero.cta.primary} 
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 h-16 px-10 text-lg bg-background/50 backdrop-blur-sm hover:bg-background/80 rounded-full border-primary/20 hover:border-primary/50 hover:scale-105 active:scale-95 transition-all" asChild>
              <Link href="/contact">
                {CONTENT.hero.cta.secondary} <Mail className="w-6 h-6" />
              </Link>
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <SocialLinks className="justify-center scale-110" />
        </FadeIn>
      </div>
    </Section>
  )
}
