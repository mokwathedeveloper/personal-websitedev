"use client"

import * as React from "react"
import Link from "next/link"
import { SITE_CONFIG, NAV_LINKS, NAV_ICONS } from "@/lib/data"
import { ArrowRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { SocialLinks } from "@/components/social-links"

export function Footer() {
  return (
    <footer className="relative bg-muted/30 border-t pt-24 pb-12">
      <div className="container">
        {/* Top Section: CTA & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight leading-tight">
              Ready to create something <span className="text-primary italic">extraordinary?</span>
            </h2>
            <p className="text-muted-foreground max-w-lg text-lg leading-relaxed">
              Let's turn your ideas into digital reality. I'm currently available for new projects and collaborations.
            </p>
            <Button size="lg" className="rounded-full gap-2 px-8 h-12 shadow-lg shadow-primary/20" asChild>
              <a href={SITE_CONFIG.socials.email}>
                Start a Conversation <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>

          <div className="lg:col-span-5 bg-card/50 backdrop-blur-sm p-8 rounded-3xl border shadow-sm group hover:shadow-md transition-all duration-300">
            <h3 className="font-semibold text-lg mb-2">Stay in the loop</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Subscribe to my newsletter for the latest updates on tech, design, and development.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input 
                placeholder="Enter your email" 
                className="bg-background rounded-xl h-11" 
              />
              <Button className="rounded-xl h-11 px-6">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <Link href="/" className="font-bold text-2xl tracking-tight flex items-center gap-2 mb-6 font-heading">
              <div className="bg-primary text-primary-foreground w-8 h-8 flex items-center justify-center rounded-lg text-sm">
                {SITE_CONFIG.name.charAt(0)}
              </div>
              {SITE_CONFIG.name}<span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Crafting digital experiences with a focus on motion, accessibility, and clean code.
            </p>
          </div>

          <div className="lg:pl-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-foreground/80">Navigation</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              {NAV_LINKS.map((link) => {
                const Icon = NAV_ICONS[link.name] || ArrowRight
                return (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-primary transition-colors flex items-center gap-2 group/nav">
                      <Icon className="w-4 h-4 group-hover/nav:scale-110 transition-transform" />
                      {link.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-foreground/80">Socials</h4>
            <div className="flex flex-col gap-1">
               <SocialLinks 
                 className="flex-col items-start gap-4" 
                 iconClassName="border-none bg-transparent p-0 hover:bg-transparent shadow-none w-auto h-auto rounded-none justify-start text-muted-foreground hover:text-primary" 
               />
            </div>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-foreground/80">Connect</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <a href={`mailto:${SITE_CONFIG.socials.email.replace('mailto:', '')}`} className="hover:text-primary transition-colors flex items-center gap-2 break-all">
                  <Mail className="w-4 h-4 shrink-0" /> {SITE_CONFIG.socials.email.replace('mailto:', '')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-border/50 text-xs uppercase tracking-[0.15em] text-muted-foreground/60 font-semibold">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
