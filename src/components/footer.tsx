"use client"

import * as React from "react"
import Link from "next/link"
import { SITE_CONFIG, NAV_LINKS } from "@/lib/data"
import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="container px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center border-t border-muted pt-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="/" className="font-bold text-xl tracking-tight">
              {SITE_CONFIG.name}<span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground text-sm text-center md:text-left">
              Building the future of the web, one pixel at a time.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            {NAV_LINKS.map((link) => (
              <Link key={link.name} href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex justify-center md:justify-end gap-4">
            <a href={SITE_CONFIG.socials.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href={SITE_CONFIG.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href={SITE_CONFIG.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 font-semibold">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
