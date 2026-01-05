import { Navbar } from "@/components/navbar"
import { Hero } from "./(sections)/hero"
import { About } from "./(sections)/about"
import { Projects } from "./(sections)/projects"
import { Contact } from "./(sections)/contact"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      
      <footer className="py-6 text-center text-sm text-muted-foreground border-t">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </main>
  )
}