import { About as AboutSection } from "@/app/(sections)/about"

export const metadata = {
  title: "About | Mokwa",
  description: "Learn more about my background and skills",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col justify-center pt-20 md:pt-0">
      <AboutSection />
    </main>
  )
}
