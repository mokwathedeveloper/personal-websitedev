"use client"

import * as React from "react"
import Link from "next/link"
import { SITE_CONFIG, NAV_LINKS } from "@/lib/data"
import { Github, Linkedin, Twitter, ArrowRight, Mail, Home, User, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function Footer() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Home": return <Home className="w-4 h-4" />
      case "About": return <User className="w-4 h-4" />
      case "Projects": return <Briefcase className="w-4 h-4" />
      case "Contact": return <Mail className="w-4 h-4" />
      default: return <ArrowRight className="w-4 h-4" />
    }
  }

  return (
    <footer className="relative bg-muted/30 border-t pt-20 pb-10">
      <div className="container px-4">
        {/* Top Section: CTA & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-heading font-bold tracking-tight">
              Ready to create something <span className="text-primary">extraordinary?</span>
            </h2>
            <p className="text-muted-foreground max-w-md text-lg">
              Let's turn your ideas into digital reality. I'm currently available for new projects and collaborations.
            </p>
            <Button size="lg" className="rounded-full gap-2" asChild>
              <a href="mailto:hello@example.com">
                Start a Conversation <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>

          <div className="bg-card p-8 rounded-2xl border shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Stay in the loop</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Subscribe to my newsletter for the latest updates on tech, design, and development.
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="Enter your email" 
                className="bg-background" 
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-border/50 mb-12" />

        {/* Middle Section: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-bold text-xl tracking-tight flex items-center gap-2 mb-4">
              {SITE_CONFIG.name}<span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Crafting digital experiences with a focus on motion, accessibility, and clean code.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-primary transition-colors flex items-center gap-2">
                    {getIcon(link.name)}
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Socials</h4>
            <TooltipProvider>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a href={SITE_CONFIG.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2 w-fit">
                        <Github className="w-4 h-4" /> GitHub
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Check out my code</p>
                    </TooltipContent>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a href={SITE_CONFIG.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2 w-fit">
                        <Linkedin className="w-4 h-4" /> LinkedIn
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Connect professionally</p>
                    </TooltipContent>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a href={SITE_CONFIG.socials.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2 w-fit">
                        <Twitter className="w-4 h-4" /> Twitter
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Follow for updates</p>
                    </TooltipContent>
                  </Tooltip>
                </li>
              </ul>
            </TooltipProvider>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href={`mailto:${SITE_CONFIG.socials.email.replace('mailto:', '')}`} className="hover:text-primary transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" /> {SITE_CONFIG.socials.email.replace('mailto:', '')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}