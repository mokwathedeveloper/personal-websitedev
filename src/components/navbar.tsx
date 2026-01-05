"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"
import { NAV_LINKS, SITE_CONFIG, NAV_ICONS } from "@/lib/data"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        isScrolled 
          ? "bg-background/70 backdrop-blur-xl border-b border-primary/10 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.1)] py-3" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-bold text-2xl tracking-tighter flex items-center gap-2 group shrink-0">
          <div className="bg-primary text-primary-foreground w-10 h-10 flex items-center justify-center rounded-xl group-hover:rotate-[10deg] transition-transform duration-500 shadow-lg shadow-primary/20 font-heading">
            {SITE_CONFIG.name.charAt(0)}
          </div>
          <span className="hidden sm:inline-block font-heading">
            {SITE_CONFIG.name}<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-1 items-center bg-muted/40 backdrop-blur-md p-1.5 rounded-full border border-primary/5 shadow-inner">
          <TooltipProvider delayDuration={0}>
            {NAV_LINKS.map((item) => {
              const Icon = NAV_ICONS[item.name] || NAV_ICONS.Home
              const isActive = pathname === item.href
              return (
                <Tooltip key={item.name}>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-2 px-5 py-2 rounded-full transition-all duration-500 relative overflow-hidden group/nav",
                        isActive 
                          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-[1.02]" 
                          : "text-muted-foreground hover:text-primary"
                      )}
                    >
                      <Icon className={cn("h-4 w-4 transition-transform duration-500 group-hover/nav:scale-110", isActive && "scale-110")} />
                      <span className="hidden lg:inline text-xs font-bold uppercase tracking-widest leading-none">{item.name}</span>
                      {!isActive && (
                        <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover/nav:translate-y-0 transition-transform duration-500" />
                      )}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="lg:hidden bg-background/95 backdrop-blur-md border-primary/10">
                    <p className="text-[10px] font-bold uppercase tracking-widest">{item.name}</p>
                  </TooltipContent>
                </Tooltip>
              )
            })}
          </TooltipProvider>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block h-8 w-px bg-primary/10 mx-1" />
          <ModeToggle />
          
          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden rounded-xl hover:bg-primary/10 hover:text-primary transition-colors">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[350px] border-l-primary/10 bg-background/95 backdrop-blur-2xl">
              <SheetHeader className="text-left mb-16">
                <SheetTitle className="text-3xl font-bold flex items-center gap-3 font-heading tracking-tighter">
                   <div className="bg-primary text-primary-foreground w-10 h-10 flex items-center justify-center rounded-xl text-lg shadow-lg shadow-primary/20">
                    {SITE_CONFIG.name.charAt(0)}
                  </div>
                  {SITE_CONFIG.name}<span className="text-primary">.</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-3">
                {NAV_LINKS.map((item) => {
                  const Icon = NAV_ICONS[item.name] || NAV_ICONS.Home
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center gap-5 text-xl font-bold font-heading p-5 rounded-2xl transition-all duration-500",
                        isActive 
                          ? "bg-primary text-primary-foreground shadow-xl shadow-primary/20 translate-x-2" 
                          : "text-muted-foreground hover:text-primary hover:bg-primary/5 hover:translate-x-1"
                      )}
                    >
                      <Icon className="h-7 w-7" />
                      {item.name}
                    </Link>
                  )
                })}
              </nav>
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="p-6 rounded-3xl bg-primary/5 border border-primary/10">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">Version</p>
                  <p className="text-lg font-heading font-bold">1.0.0 Stable</p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
