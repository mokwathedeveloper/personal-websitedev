"use client"

import { Github, Linkedin, Twitter } from "lucide-react"
import { SITE_CONFIG } from "@/lib/data"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

interface SocialLinksProps {
  className?: string
  iconClassName?: string
}

export function SocialLinks({ className, iconClassName }: SocialLinksProps) {
  const socials = [
    {
      name: "GitHub",
      href: SITE_CONFIG.socials.github,
      icon: Github,
      label: "Check out my code"
    },
    {
      name: "LinkedIn",
      href: SITE_CONFIG.socials.linkedin,
      icon: Linkedin,
      label: "Connect professionally"
    },
    {
      name: "Twitter",
      href: SITE_CONFIG.socials.twitter,
      icon: Twitter,
      label: "Follow for updates"
    }
  ]

  return (
    <TooltipProvider delayDuration={0}>
      <div className={cn("flex gap-4 items-center flex-wrap justify-center", className)}>
        {socials.map((social) => (
          <Tooltip key={social.name}>
            <TooltipTrigger asChild>
              <a 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={cn(
                  "p-3 rounded-full bg-background/50 border hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all duration-300 shadow-sm",
                  iconClassName
                )}
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
                <span className="sr-only">{social.name}</span>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>{social.label}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}
