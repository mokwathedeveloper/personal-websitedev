import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  id?: string
  container?: boolean
  fullHeight?: boolean
}

export function Section({ children, id, className, container = true, fullHeight = false, ...props }: SectionProps) {
  return (
    <section 
      id={id} 
      className={cn(
        "relative w-full",
        fullHeight ? "min-h-screen flex items-center pt-20 md:pt-0" : "py-20 md:py-32",
        className
      )} 
      {...props}
    >
      {container ? (
        <div className="container relative z-10">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  )
}
