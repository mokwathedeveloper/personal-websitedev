"use client"

import * as React from "react"
import Link from "next/link"
import { SITE_CONFIG, NAV_LINKS } from "@/lib/data"
import { Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-24 pb-12 overflow-hidden relative">
      <div className="container px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mb-24">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight">
              Let's build something <br />
              <span className="text-primary-foreground/50">extraordinary.</span>
            </h2>
            <div className="flex gap-4">
               <a 
                 href={`mailto:${SITE_CONFIG.socials.email.replace('mailto:', '')}`} 
                 className="inline-flex items-center gap-2 text-lg font-medium border-b border-primary-foreground/30 pb-1 hover:text-primary-foreground hover:border-primary-foreground transition-all"
               >
                 {SITE_CONFIG.socials.email.replace('mailto:', '')}
                 <ArrowUpRight className="w-5 h-5" />
               </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12">
             <div className="space-y-6">
               <h3 className="text-sm uppercase tracking-widest font-semibold text-primary-foreground/50">Navigation</h3>
               <ul className="space-y-4">
                 {NAV_LINKS.map((link) => (
                   <li key={link.name}>
                     <Link href={link.href} className="text-lg hover:text-primary-foreground/70 transition-colors">
                       {link.name}
                     </Link>
                   </li>
                 ))}
               </ul>
             </div>
             <div className="space-y-6">
               <h3 className="text-sm uppercase tracking-widest font-semibold text-primary-foreground/50">Socials</h3>
               <ul className="space-y-4">
                 <li>
                   <a href={SITE_CONFIG.socials.github} target="_blank" rel="noopener noreferrer" className="text-lg hover:text-primary-foreground/70 transition-colors flex items-center gap-2">
                     GitHub
                   </a>
                 </li>
                 <li>
                   <a href={SITE_CONFIG.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-lg hover:text-primary-foreground/70 transition-colors flex items-center gap-2">
                     LinkedIn
                   </a>
                 </li>
                 <li>
                   <a href={SITE_CONFIG.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-lg hover:text-primary-foreground/70 transition-colors flex items-center gap-2">
                     Twitter
                   </a>
                 </li>
               </ul>
             </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/40">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-primary-foreground/80 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary-foreground/80 transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>

      {/* Big Watermark Text */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none opacity-[0.03]">
        <h1 className="text-[15vw] font-bold font-heading leading-none text-center whitespace-nowrap select-none">
          {SITE_CONFIG.name.split(' ')[0]}
        </h1>
      </div>
    </footer>
  )
}
