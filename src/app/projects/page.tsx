import { Projects as ProjectsSection } from "@/app/(sections)/projects"

export const metadata = {
  title: "Projects | Your Portfolio",
  description: "Check out my latest work",
}

export default function ProjectsPage() {
  return (
    <main className="pt-16 min-h-screen">
      <ProjectsSection />
    </main>
  )
}
