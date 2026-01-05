import { Projects as ProjectsSection } from "@/app/(sections)/projects"

export const metadata = {
  title: "Projects | Mokwa",
  description: "Check out my latest work",
}

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsSection />
    </main>
  )
}
