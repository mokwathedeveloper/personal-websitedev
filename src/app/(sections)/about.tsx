"use client"

import { motion } from "framer-motion"
import { SKILLS, EXPERIENCES, CONTENT } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, GraduationCap, Code } from "lucide-react"

export function About() {
  // Duplicate skills to ensure seamless loop
  const duplicatedSkills = [...SKILLS, ...SKILLS]

  return (
    <section id="about" className="py-24 bg-secondary/20 relative overflow-hidden">
       {/* Background decoration */}
       <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[500px] bg-primary/5 blur-[100px] -z-10" />

      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">{CONTENT.about.title}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {CONTENT.about.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
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

              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 font-heading">
                  <span className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Code className="w-5 h-5" />
                  </span>
                  {CONTENT.about.skillsTitle}
                </h3>
                
                {/* Marquee Container */}
                <div className="relative flex overflow-hidden py-4 mask-linear-gradient">
                  {/* Left fade */}
                  <div className="absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-background to-transparent" />
                  {/* Right fade */}
                  <div className="absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-background to-transparent" />
                  
                  <motion.div 
                    className="flex gap-4 whitespace-nowrap"
                    animate={{ x: [0, -1000] }}
                    transition={{ 
                      repeat: Infinity, 
                      ease: "linear", 
                      duration: 25 
                    }}
                  >
                    {duplicatedSkills.map((skill, i) => (
                      <div
                        key={`${skill}-${i}`}
                        className="flex items-center gap-2 px-4 py-2 rounded-full border bg-background/50 backdrop-blur-sm text-sm font-medium shadow-sm"
                      >
                         <span className="w-2 h-2 rounded-full bg-primary" />
                         {skill}
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 font-heading">
                <span className="p-2 bg-primary/10 rounded-lg text-primary">
                  <Briefcase className="w-5 h-5" />
                </span>
                {CONTENT.about.experienceTitle}
              </h3>
              <div className="space-y-6">
                {EXPERIENCES.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="relative overflow-hidden border-l-4 border-l-primary shadow-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <CardHeader className="pb-2 relative">
                        <div className="flex justify-between items-start mb-1">
                          <CardTitle className="text-base font-bold group-hover:text-primary transition-colors font-heading">{exp.role}</CardTitle>
                          <Badge variant="outline" className="text-xs font-normal bg-background/80 backdrop-blur-sm">
                            {exp.period}
                          </Badge>
                        </div>
                        <div className="text-sm font-medium text-primary">{exp.company}</div>
                      </CardHeader>
                      <CardContent className="relative">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {exp.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}