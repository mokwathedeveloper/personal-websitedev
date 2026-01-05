import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center px-4">
      <h1 className="text-9xl font-bold text-primary opacity-50">404</h1>
      <h2 className="text-3xl font-bold mt-4 font-heading">Page Not Found</h2>
      <p className="text-muted-foreground mt-4 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <div className="mt-8">
        <Button asChild size="lg" className="gap-2">
          <Link href="/">
            <Home className="w-4 h-4" /> Go back home
          </Link>
        </Button>
      </div>
    </div>
  )
}
