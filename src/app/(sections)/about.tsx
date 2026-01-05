"use client"

import { SKILLS, EXPERIENCES, CONTENT } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, GraduationCap, Code, Atom, Zap, FileCode, Palette, Server, Database, Container, Cloud, GitBranch, Terminal } from "lucide-react"
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

export function About() {
  // Duplicate skills to ensure seamless loop
  const duplicatedSkills = [...SKILLS, ...SKILLS]

  return (
    <Section id="about" className="bg-secondary/20">
       {/* Background decoration */}
       <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[500px] bg-primary/5 blur-[100px] -z-10" />

      <FadeIn>
        <div className="text-center mb-16">
          <SectionHeading>{CONTENT.about.title}</SectionHeading>
          <SectionDescription>
            {CONTENT.about.subtitle}
          </SectionDescription>
        </div>
      </FadeIn>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <FadeIn delay={0.1} direction="left">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 font-heading">
                <span className="p-2 bg-primary/10 rounded-lg text-primary">
                  <GraduationCap className="w-5 h-5" />
                </span>
                {CONTENT.about.background.title}
              </h3>
              <Card className="border-none shadow-sm bg-background/50 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="prose dark:prose-invert text-muted-foreground leading-relaxed text-sm">
                    <p className="mb-4">
                      {CONTENT.about.background.text1}
                    </p>
                    <p>
                      {CONTENT.about.background.text2}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="left">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 font-heading">
                <span className="p-2 bg-primary/10 rounded-lg text-primary">
                  <Code className="w-5 h-5" />
                </span>
                {CONTENT.about.skillsTitle}
              </h3>
              
              {/* Marquee Container */}
              <div className="relative flex overflow-hidden py-4 mask-linear-gradient">
                <div className="absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-background to-transparent" />
                <div className="absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-background to-transparent" />
                
                <div className="flex gap-4 whitespace-nowrap animate-marquee">
                  {duplicatedSkills.map((skill, i) => (
                    <div
                      key={`${skill}-${i}`}
                      className="flex items-center gap-2 px-4 py-2 rounded-full border bg-background/50 backdrop-blur-sm text-sm font-medium shadow-sm hover:border-primary/50 transition-colors"
                    >
                       {getSkillIcon(skill)}
                       <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.3} direction="right">
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 font-heading">
              <span className="p-2 bg-primary/10 rounded-lg text-primary">
                <Briefcase className="w-5 h-5" />
              </span>
              {CONTENT.about.experienceTitle}
            </h3>
            <div className="space-y-8 relative pl-6 border-l-2 border-primary/20">
              {EXPERIENCES.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <span className="absolute -left-[31px] top-1 h-4 w-4 rounded-full border-4 border-background bg-primary" />
                  
                  <Card className="relative overflow-hidden border-none bg-background/50 shadow-sm hover:shadow-md transition-all duration-300">
                    <CardHeader className="pb-2">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-2">
                        <CardTitle className="text-base font-bold text-foreground">{exp.role}</CardTitle>
                        <Badge variant="secondary" className="w-fit text-xs font-normal">
                          {exp.period}
                        </Badge>
                      </div>
                      <div className="text-sm font-medium text-primary flex items-center gap-2">
                        <Briefcase className="w-3 h-3" />
                        {exp.company}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  )
}