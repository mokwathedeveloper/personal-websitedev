import { Contact as ContactSection } from "@/app/(sections)/contact"

export const metadata = {
  title: "Contact | Your Portfolio",
  description: "Get in touch with me",
}

export default function ContactPage() {
  return (
    <main className="pt-20 md:pt-28 min-h-screen">
      <ContactSection />
    </main>
  )
}
