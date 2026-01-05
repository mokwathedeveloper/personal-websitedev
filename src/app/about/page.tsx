import { About as AboutSection } from "@/app/(sections)/about"

export const metadata = {
  title: "About | Your Portfolio",
  description: "Learn more about my background and skills",
}

export default function AboutPage() {
  return (
    <main className="pt-16 min-h-screen">
      <AboutSection />
    </main>
  )
}
