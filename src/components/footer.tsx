"use client"

import * as React from "react"
import Link from "next/link"
import { SITE_CONFIG, NAV_LINKS } from "@/lib/data"
import { Github, Linkedin, Twitter, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background/50 backdrop-blur-xl">
      <div className="container px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <Link href="/" className="font-bold text-2xl tracking-tight flex items-center gap-2">
              {SITE_CONFIG.name}<span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground max-w-xs leading-relaxed text-sm">
              Crafting digital experiences with a focus on motion, accessibility, and clean code.
            </p>
            <div className="flex gap-4">
              <a href={SITE_CONFIG.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-secondary hover:bg-primary/10 hover:text-primary transition-all">
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href={SITE_CONFIG.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-secondary hover:bg-primary/10 hover:text-primary transition-all">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href={SITE_CONFIG.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-secondary hover:bg-primary/10 hover:text-primary transition-all">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider">Legal</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Built with</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" />
            <span>using Next.js & Shadcn UI</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
