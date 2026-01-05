"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"
import { NAV_LINKS, SITE_CONFIG } from "@/lib/data"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, Home, User, Briefcase, Mail } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const getIcon = (name: string) => {
    switch (name) {
      case "Home": return <Home className="h-5 w-5" />
      case "About": return <User className="h-5 w-5" />
      case "Projects": return <Briefcase className="h-5 w-5" />
      case "Contact": return <Mail className="h-5 w-5" />
      default: return <Home className="h-5 w-5" />
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-border shadow-sm" 
          : "bg-background/0 border-transparent"
      )}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tight flex items-center gap-2">
          {SITE_CONFIG.name}<span className="text-primary">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-2 items-center">
          <TooltipProvider>
            {NAV_LINKS.map((item) => (
              <Tooltip key={item.name}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      "p-2 rounded-md transition-colors hover:bg-muted hover:text-primary relative group",
                      pathname === item.href ? "text-primary bg-primary/10" : "text-muted-foreground"
                    )}
                    aria-label={item.name}
                  >
                    {getIcon(item.name)}
                    {pathname === item.href && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                    )}
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
          
          <div className="h-6 w-[1px] bg-border mx-2" />
          <ModeToggle />
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-4">
          <ModeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader className="text-left mb-6">
                <SheetTitle className="text-xl font-bold">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-2">
                {NAV_LINKS.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center gap-4 text-lg font-medium transition-colors hover:text-primary px-4 py-3 rounded-md",
                      pathname === item.href 
                        ? "text-primary bg-primary/10" 
                        : "text-muted-foreground hover:bg-muted"
                    )}
                  >
                    {getIcon(item.name)}
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
