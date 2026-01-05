import { About as AboutSection } from "@/app/(sections)/about"

export const metadata = {
  title: "About | Mokwa",
  description: "Learn more about my background and skills",
}

export default function AboutPage() {
  return (
    <main>
      <AboutSection />
    </main>
  )
}
