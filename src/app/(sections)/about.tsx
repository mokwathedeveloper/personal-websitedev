"use client"

import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="prose dark:prose-invert mx-auto text-lg text-muted-foreground leading-relaxed">
            <p className="mb-6">
              I started my journey in web development X years ago. Since then, I've had the privilege of working with agencies, startups, and talented individuals to create digital products for both business and consumer use.
            </p>
            <p>
              I specialize in <strong>JavaScript/TypeScript</strong> ecosystem, primarily working with <strong>React</strong>, <strong>Next.js</strong>, and <strong>Node.js</strong>. I believe that good design is as important as clean code, and I strive to bridge the gap between the two.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
