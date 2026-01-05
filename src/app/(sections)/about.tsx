"use client"

import { motion } from "framer-motion"
import { SKILLS, EXPERIENCES } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, GraduationCap } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 bg-secondary/20">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A glimpse into my professional journey, skills, and background.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="p-2 bg-primary/10 rounded-lg text-primary">
                    <GraduationCap className="w-5 h-5" />
                  </span>
                  Background
                </h3>
                <Card className="border-none shadow-sm bg-background/50 backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <div className="prose dark:prose-invert text-muted-foreground leading-relaxed text-sm">
                      <p className="mb-4">
                        I'm a passionate developer who loves building things for the web. 
                        With a strong foundation in modern technologies, I strive to create 
                        applications that are not only functional but also provide a great 
                        user experience.
                      </p>
                      <p>
                        When I'm not coding, you can find me exploring new technologies, 
                        contributing to open source, or enjoying a good cup of coffee.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm hover:bg-secondary/80">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="p-2 bg-primary/10 rounded-lg text-primary">
                  <Briefcase className="w-5 h-5" />
                </span>
                Experience
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
                    <Card className="relative overflow-hidden border-l-4 border-l-primary shadow-sm hover:shadow-md transition-shadow">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start mb-1">
                          <CardTitle className="text-base font-bold">{exp.role}</CardTitle>
                          <Badge variant="outline" className="text-xs font-normal bg-muted/50">
                            {exp.period}
                          </Badge>
                        </div>
                        <div className="text-sm font-medium text-primary">{exp.company}</div>
                      </CardHeader>
                      <CardContent>
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
