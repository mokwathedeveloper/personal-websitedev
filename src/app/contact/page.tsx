import { Contact as ContactSection } from "@/app/(sections)/contact"

export const metadata = {
  title: "Contact | Mokwa",
  description: "Get in touch with me",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col justify-center pt-20 md:pt-0">
      <ContactSection />
    </main>
  )
}
