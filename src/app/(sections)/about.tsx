"use client"

import { motion } from "framer-motion"
import { SKILLS, EXPERIENCES } from "@/lib/data"

export function About() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Background</h3>
              <div className="prose dark:prose-invert text-muted-foreground leading-relaxed mb-6">
                <p>
                  I'm a passionate developer who loves building things for the web. 
                  With a strong foundation in modern technologies, I strive to create 
                  applications that are not only functional but also provide a great 
                  user experience.
                </p>
                <p className="mt-4">
                  When I'm not coding, you can find me exploring new technologies, 
                  contributing to open source, or enjoying a good cup of coffee.
                </p>
              </div>

              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill) => (
                  <div
                    key={skill}
                    className="px-3 py-1 bg-background border rounded-full text-sm font-medium"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Experience</h3>
              <div className="space-y-6">
                {EXPERIENCES.map((exp, index) => (
                  <div 
                    key={index}
                    className="border-l-2 border-primary/20 pl-4 relative before:content-[''] before:absolute before:w-3 before:h-3 before:bg-primary before:rounded-full before:-left-[7px] before:top-1.5"
                  >
                    <h4 className="font-medium text-lg">{exp.role}</h4>
                    <div className="text-primary font-medium mb-1">{exp.company}</div>
                    <div className="text-sm text-muted-foreground mb-2">{exp.period}</div>
                    <p className="text-sm text-muted-foreground">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
