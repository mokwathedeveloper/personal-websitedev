"use client"

import { SKILLS, EXPERIENCES, CONTENT } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, GraduationCap, Code, Atom, Zap, FileCode, Palette, Server, Database, Container, Cloud, GitBranch, Terminal, Sparkles } from "lucide-react"
import { Section } from "@/components/ui/section"
import { SectionHeading, SectionDescription } from "@/components/ui/typography"
import { FadeIn } from "@/components/animation-wrapper"

const getSkillIcon = (skill: string) => {
  switch (skill) {
    case "React": return <Atom className="w-4 h-4 text-blue-500" />
    case "Next.js": return <Zap className="w-4 h-4 text-foreground" />
    case "TypeScript": return <FileCode className="w-4 h-4 text-blue-600" />
    case "Tailwind CSS": return <Palette className="w-4 h-4 text-cyan-500" />
    case "Node.js": return <Server className="w-4 h-4 text-green-600" />
    case "PostgreSQL": return <Database className="w-4 h-4 text-blue-400" />
    case "Prisma": return <Database className="w-4 h-4 text-foreground" />
    case "Docker": return <Container className="w-4 h-4 text-blue-500" />
    case "AWS": return <Cloud className="w-4 h-4 text-yellow-500" />
    case "Git": return <GitBranch className="w-4 h-4 text-orange-600" />
    default: return <Terminal className="w-4 h-4 text-muted-foreground" />
  }
}

import { SpotlightCard } from "@/components/ui/spotlight-card"

import { SectionLabel } from "@/components/ui/typography"

export function About() {
  const duplicatedSkills = [...SKILLS, ...SKILLS]

  return (
    <Section id="about" className="bg-background pt-20 lg:pt-0" fullHeight>
       {/* Background decoration */}
       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] -z-10 rounded-full" />

      <FadeIn>
        <div className="text-center mb-20">
          <SectionLabel>Biography</SectionLabel>
          <SectionHeading>{CONTENT.about.title}</SectionHeading>
          <SectionDescription className="max-w-xl">
            {CONTENT.about.subtitle}
          </SectionDescription>
        </div>
      </FadeIn>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-auto md:auto-rows-[minmax(14rem,auto)]">
        {/* Background Box */}
        <FadeIn delay={0.1} className="md:col-span-2 lg:col-span-2 lg:row-span-2 h-full">
          <SpotlightCard className="h-full p-8 md:p-10 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 flex items-center gap-4 font-heading">
              <span className="p-3 bg-primary/10 rounded-2xl text-primary shadow-inner">
                <GraduationCap className="w-6 h-6 md:w-8 md:h-8" />
              </span>
              {CONTENT.about.background.title}
            </h3>
            <div className="prose dark:prose-invert text-muted-foreground leading-relaxed text-base md:text-lg">
              <p className="mb-6">
                {CONTENT.about.background.text1}
              </p>
              <p>
                {CONTENT.about.background.text2}
              </p>
            </div>
          </SpotlightCard>
        </FadeIn>

        {/* Skills Box */}
        <FadeIn delay={0.2} className="md:col-span-1 lg:col-span-2 h-full">
          <SpotlightCard className="h-full p-8 md:p-10 flex flex-col justify-center overflow-hidden">
            <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-3 font-heading">
              <Code className="w-6 h-6 text-primary" />
              {CONTENT.about.skillsTitle}
            </h3>
            
            <div className="relative flex overflow-hidden py-4 mask-linear-gradient">
              <div className="flex gap-4 whitespace-nowrap animate-marquee">
                {duplicatedSkills.map((skill, i) => (
                  <div
                    key={`${skill}-${i}`}
                    className="flex items-center gap-3 px-6 py-3 rounded-2xl border border-primary/10 bg-background/50 backdrop-blur-sm text-sm md:text-base font-bold shadow-sm hover:border-primary/30 transition-all"
                  >
                     {getSkillIcon(skill)}
                     <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </SpotlightCard>
        </FadeIn>

        {/* Experience Box */}
        <FadeIn delay={0.3} className="md:col-span-2 lg:col-span-2 lg:row-span-2 h-full">
          <SpotlightCard className="h-full p-8 md:p-10 overflow-y-auto custom-scrollbar max-h-[35rem] md:max-h-full">
            <h3 className="text-xl md:text-2xl font-bold mb-10 flex items-center gap-4 font-heading sticky top-0 bg-background/50 backdrop-blur-md z-10 py-4">
              <Briefcase className="w-6 h-6 text-primary" />
              {CONTENT.about.experienceTitle}
            </h3>
            <div className="space-y-10 relative pl-8 border-l-2 border-primary/10 ml-2">
              {EXPERIENCES.map((exp, index) => (
                <div key={index} className="relative">
                  <span className="absolute -left-[41px] top-1.5 h-5 w-5 rounded-full border-4 border-background bg-primary shadow-lg shadow-primary/20" />
                  <div className="space-y-2">
                    <h4 className="font-bold text-foreground text-base md:text-lg tracking-tight">{exp.role}</h4>
                    <div className="flex items-center gap-2 text-sm md:text-base text-primary font-bold">
                      <Briefcase className="w-4 h-4" />
                      {exp.company}
                    </div>
                    <div className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-[0.2em] font-bold">{exp.period}</div>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-4">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </FadeIn>

        {/* Dynamic Badge Box */}
        <FadeIn delay={0.4} className="hidden lg:block lg:col-span-2 h-full">
          <SpotlightCard className="h-full p-10 flex items-center justify-between bg-primary/5 border-primary/10">
            <div className="space-y-2">
              <h4 className="text-4xl md:text-5xl font-bold font-heading tracking-tighter text-primary">10+</h4>
              <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-[0.2em] font-bold">Projects Engineered</p>
            </div>
            <div className="h-16 w-16 rounded-3xl bg-primary/10 flex items-center justify-center text-primary rotate-12 shadow-inner border border-primary/10">
              <Sparkles className="w-8 h-8" />
            </div>
          </SpotlightCard>
        </FadeIn>
      </div>
    </Section>
  )
}