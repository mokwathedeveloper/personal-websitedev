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
import { cn } from "@/lib/utils"
import { SectionHeading, SectionDescription } from "@/components/ui/typography"
import { FadeIn } from "@/components/animation-wrapper"
import { SpotlightCard } from "@/components/ui/spotlight-card"

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
    <Section id="contact" className="bg-background pt-20 lg:pt-0" fullHeight>
       {/* Decorative gradient blob */}
       <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] bg-primary/5 blur-[120px] rounded-full opacity-50 pointer-events-none" />

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        <FadeIn direction="right" className="lg:col-span-5">
          <div className="space-y-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-muted/50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm shadow-sm text-primary">
                <Mail className="h-3.5 w-3.5" />
                <span>Get in touch</span>
              </div>
              <SectionHeading className="mb-6 text-4xl md:text-5xl lg:text-6xl">{CONTENT.contact.title}</SectionHeading>
              <SectionDescription className="text-left mx-0 max-w-md">
                {CONTENT.contact.subtitle}
              </SectionDescription>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-5 group">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-primary/5 border border-primary/5">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Email</h3>
                  <p className="text-lg font-bold font-heading">{SITE_CONFIG.socials.email.replace('mailto:', '')}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-5 group">
                 <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-primary/5 border border-primary/5">
                  <MapPin className="h-6 w-6" />
                </div>
                 <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Location</h3>
                  <p className="text-lg font-bold font-heading">Remote / Worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} direction="left" className="lg:col-span-7">
          <SpotlightCard className="p-8 md:p-12 relative overflow-hidden group border-primary/5 bg-card/30">
            <div className="relative z-10">
              <div className="mb-10">
                <h3 className="text-2xl md:text-3xl font-bold font-heading tracking-tight mb-2">{CONTENT.contact.formTitle}</h3>
                <p className="text-muted-foreground">{CONTENT.contact.formSubtitle}</p>
              </div>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-xs font-bold uppercase tracking-widest ml-1">Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      {...register("name")}
                      className={cn(
                        "bg-background/50 border-primary/10 h-12 px-4 rounded-xl focus:bg-background transition-all duration-300",
                        errors.name && "border-destructive focus-visible:ring-destructive"
                      )}
                    />
                    {errors.name && (
                      <p className="text-[10px] font-bold text-destructive uppercase tracking-wide ml-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest ml-1">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      {...register("email")}
                      className={cn(
                        "bg-background/50 border-primary/10 h-12 px-4 rounded-xl focus:bg-background transition-all duration-300",
                        errors.email && "border-destructive focus-visible:ring-destructive"
                      )}
                    />
                    {errors.email && (
                      <p className="text-[10px] font-bold text-destructive uppercase tracking-wide ml-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-xs font-bold uppercase tracking-widest ml-1">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Hello, I'd like to discuss..."
                    className={cn(
                      "min-h-[160px] resize-none bg-background/50 border-primary/10 p-4 rounded-xl focus:bg-background transition-all duration-300",
                      errors.message && "border-destructive focus-visible:ring-destructive"
                    )}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="text-[10px] font-bold text-destructive uppercase tracking-wide ml-1">{errors.message.message}</p>
                  )}
                </div>

                <Button type="submit" className="w-full h-14 rounded-xl gap-3 shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all duration-500 font-bold uppercase tracking-widest text-xs" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Processing...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </SpotlightCard>
        </FadeIn>
      </div>
    </Section>
  )
}
