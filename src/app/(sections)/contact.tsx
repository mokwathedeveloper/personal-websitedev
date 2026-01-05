"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { Loader2, Send, Mail, MapPin } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CONTENT, SITE_CONFIG } from "@/lib/data"
import { Section } from "@/components/ui/section"
import { SectionHeading, SectionDescription } from "@/components/ui/typography"
import { FadeIn } from "@/components/animation-wrapper"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type FormValues = z.infer<typeof formSchema>

export function Contact() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    console.log("Form submitted:", data)
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    })
    
    reset()
    setIsSubmitting(false)
  }

  return (
    <Section id="contact" className="bg-background" fullHeight>
       {/* Decorative gradient blob */}
       <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] bg-primary/5 blur-[120px] rounded-full opacity-50" />

      <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
        
        <FadeIn direction="right">
          <div className="sticky top-24">
            <SectionHeading className="mb-6">{CONTENT.contact.title}</SectionHeading>
            <SectionDescription className="mb-8 text-left mx-0">
              {CONTENT.contact.subtitle}
            </SectionDescription>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">{SITE_CONFIG.socials.email.replace('mailto:', '')}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                 <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                 <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-muted-foreground">Remote / Worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} direction="left">
          <Card className="border-muted shadow-lg relative overflow-hidden group">
            {/* Subtle Gradient Glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/30 to-primary/10 opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-card/90 backdrop-blur-sm" />
            
            <div className="relative">
              <CardHeader>
                <CardTitle className="font-heading">{CONTENT.contact.formTitle}</CardTitle>
                <CardDescription>{CONTENT.contact.formSubtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      {...register("name")}
                      className={`bg-background/50 focus:bg-background transition-colors ${errors.name ? "border-destructive focus-visible:ring-destructive" : "focus-visible:ring-primary"}`}
                    />
                    {errors.name && (
                      <p className="text-xs text-destructive">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      {...register("email")}
                      className={`bg-background/50 focus:bg-background transition-colors ${errors.email ? "border-destructive focus-visible:ring-destructive" : "focus-visible:ring-primary"}`}
                    />
                    {errors.email && (
                      <p className="text-xs text-destructive">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Hello, I'd like to discuss..."
                      className={`min-h-[150px] resize-none bg-background/50 focus:bg-background transition-colors ${errors.message ? "border-destructive focus-visible:ring-destructive" : "focus-visible:ring-primary"}`}
                      {...register("message")}
                    />
                    {errors.message && (
                      <p className="text-xs text-destructive">{errors.message.message}</p>
                    )}
                  </div>

                  <Button type="submit" className="w-full gap-2 shadow-md shadow-primary/20 hover:shadow-primary/40 transition-all" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </div>
          </Card>
        </FadeIn>
      </div>
    </Section>
  )
}
