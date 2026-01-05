import { Contact as ContactSection } from "@/app/(sections)/contact"

export const metadata = {
  title: "Contact | Your Portfolio",
  description: "Get in touch with me",
}

export default function ContactPage() {
  return (
    <main className="pt-16 min-h-screen">
      <ContactSection />
    </main>
  )
}
