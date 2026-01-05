"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, ArrowLeft } from 'lucide-react'
import RetroGrid from '@/components/ui/retro-grid'
import { FadeIn } from '@/components/animation-wrapper'

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center px-4 overflow-hidden">
      <RetroGrid />
      
      <FadeIn className="z-10">
        <h1 className="text-[12rem] md:text-[15rem] font-bold text-primary/10 select-none leading-none">404</h1>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
          <h2 className="text-3xl md:text-5xl font-bold font-heading tracking-tight mb-4">Lost in digital space?</h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto text-lg leading-relaxed">
            The page you're looking for doesn't exist or has been moved to a new dimension.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full gap-2 px-8">
              <Link href="/">
                <Home className="w-4 h-4" /> Go back home
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full gap-2 px-8" onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4" /> Previous page
            </Button>
          </div>
        </div>
      </FadeIn>
    </div>
  )
}
