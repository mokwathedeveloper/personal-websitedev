import { Projects as ProjectsSection } from "@/app/(sections)/projects"

export const metadata = {
  title: "Projects | Mokwa",
  description: "Check out my latest work",
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-20 md:pt-28">
      <ProjectsSection />
    </main>
  )
}
