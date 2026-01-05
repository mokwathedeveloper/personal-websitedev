"use client"

import React from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { NAV_LINKS, NAV_ICONS } from "@/lib/data"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function FloatingDock() {
  const pathname = usePathname()
  
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-2 p-2 rounded-full border border-primary/10 bg-background/40 backdrop-blur-2xl shadow-2xl">
        <TooltipProvider delayDuration={0}>
          {NAV_LINKS.map((item) => {
            const Icon = NAV_ICONS[item.name]
            const isActive = pathname === item.href
            
            return (
              <Tooltip key={item.name}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      "relative p-3 rounded-full transition-all duration-300 group",
                      isActive 
                        ? "bg-primary text-primary-foreground" 
                        : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
                    )}
                  >
                    <Icon className="w-5 h-5" />
                    {isActive && (
                      <motion.div
                        layoutId="dock-active"
                        className="absolute inset-0 bg-primary rounded-full -z-10"
                        transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                      />
                    )}
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="top" className="bg-background/95 backdrop-blur-md border-primary/10 mb-2">
                  <p className="text-[10px] font-bold uppercase tracking-widest">{item.name}</p>
                </TooltipContent>
              </Tooltip>
            )
          })}
        </TooltipProvider>
      </nav>
    </div>
  )
}
