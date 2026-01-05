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

export function About() {
  const duplicatedSkills = [...SKILLS, ...SKILLS]

  return (
    <Section id="about" className="bg-background pt-20 lg:pt-0" fullHeight>
       {/* Background decoration */}
       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] -z-10 rounded-full" />

      <FadeIn>
        <div className="text-center mb-16">
          <SectionHeading>{CONTENT.about.title}</SectionHeading>
          <SectionDescription>
            {CONTENT.about.subtitle}
          </SectionDescription>
        </div>
      </FadeIn>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-auto md:auto-rows-[minmax(12rem,auto)]">
        {/* Background Box */}
        <FadeIn delay={0.1} className="md:col-span-2 lg:col-span-2 lg:row-span-2 h-full">
          <SpotlightCard className="h-full p-6 md:p-8 flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-3 font-heading">
              <span className="p-2 bg-primary/10 rounded-xl text-primary">
                <GraduationCap className="w-5 h-5 md:w-6 md:h-6" />
              </span>
              {CONTENT.about.background.title}
            </h3>
            <div className="prose dark:prose-invert text-muted-foreground leading-relaxed text-sm md:text-base">
              <p className="mb-4">
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
          <SpotlightCard className="h-full p-6 md:p-8 flex flex-col justify-center overflow-hidden">
            <h3 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2 font-heading">
              <Code className="w-5 h-5 text-primary" />
              {CONTENT.about.skillsTitle}
            </h3>
            
            <div className="relative flex overflow-hidden py-2 mask-linear-gradient">
              <div className="flex gap-3 whitespace-nowrap animate-marquee">
                {duplicatedSkills.map((skill, i) => (
                  <div
                    key={`${skill}-${i}`}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/10 bg-background/50 backdrop-blur-sm text-xs md:text-sm font-medium shadow-sm"
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
          <SpotlightCard className="h-full p-6 md:p-8 overflow-y-auto custom-scrollbar max-h-[30rem] md:max-h-full">
            <h3 className="text-lg md:text-xl font-bold mb-6 md:mb-8 flex items-center gap-3 font-heading sticky top-0 bg-background/50 backdrop-blur-md z-10 py-2">
              <Briefcase className="w-5 h-5 text-primary" />
              {CONTENT.about.experienceTitle}
            </h3>
            <div className="space-y-6 md:space-y-8 relative pl-6 border-l-2 border-primary/20">
              {EXPERIENCES.map((exp, index) => (
                <div key={index} className="relative">
                  <span className="absolute -left-[31px] top-1 h-4 w-4 rounded-full border-4 border-background bg-primary" />
                  <div className="space-y-1">
                    <h4 className="font-bold text-foreground text-sm md:text-base">{exp.role}</h4>
                    <div className="flex items-center gap-2 text-xs md:text-sm text-primary font-medium">
                      <Briefcase className="w-3 h-3" />
                      {exp.company}
                    </div>
                    <div className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">{exp.period}</div>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mt-2">
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
          <SpotlightCard className="h-full p-8 flex items-center justify-between bg-primary/5 border-primary/20">
            <div className="space-y-1">
              <h4 className="text-3xl md:text-4xl font-bold font-heading">10+</h4>
              <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest font-bold">Projects Completed</p>
            </div>
            <div className="h-12 w-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary rotate-12">
              <Sparkles className="w-6 h-6" />
            </div>
          </SpotlightCard>
        </FadeIn>
      </div>
    </Section>
  )
}