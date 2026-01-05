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
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-border shadow-sm py-2" 
          : "bg-transparent border-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-2xl tracking-tight flex items-center gap-2 group">
          <span className="bg-primary text-primary-foreground w-10 h-10 flex items-center justify-center rounded-xl group-hover:rotate-6 transition-transform duration-300 font-heading">
            {SITE_CONFIG.name.charAt(0)}
          </span>
          <span className="hidden sm:inline-block font-heading">
            {SITE_CONFIG.name}<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-1 items-center bg-muted/50 p-1 rounded-full border border-primary/10">
          <TooltipProvider delayDuration={0}>
            {NAV_LINKS.map((item) => {
              const Icon = NAV_ICONS[item.name] || NAV_ICONS.Home
              return (
                <Tooltip key={item.name}>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 relative",
                        pathname === item.href 
                          ? "bg-primary text-primary-foreground shadow-md scale-105" 
                          : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                      )}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="hidden lg:inline text-sm font-medium">{item.name}</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="lg:hidden">
                    <p>{item.name}</p>
                  </TooltipContent>
                </Tooltip>
              )
            })}
          </TooltipProvider>
        </nav>

        <div className="flex items-center gap-2">
          <ModeToggle />
          
          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader className="text-left mb-12">
                <SheetTitle className="text-2xl font-bold flex items-center gap-2 font-heading">
                   <div className="bg-primary text-primary-foreground w-8 h-8 flex items-center justify-center rounded-lg text-sm">
                    {SITE_CONFIG.name.charAt(0)}
                  </div>
                  {SITE_CONFIG.name}<span className="text-primary">.</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4">
                {NAV_LINKS.map((item) => {
                  const Icon = NAV_ICONS[item.name] || NAV_ICONS.Home
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center gap-4 text-xl font-medium transition-colors hover:text-primary p-4 rounded-2xl",
                        pathname === item.href 
                          ? "text-primary bg-primary/10" 
                          : "text-muted-foreground hover:bg-muted"
                      )}
                    >
                      <Icon className="h-6 w-6" />
                      {item.name}
                    </Link>
                  )
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
