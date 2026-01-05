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
        "relative",
        fullHeight ? "min-h-screen flex items-center" : "py-16 md:py-24",
        className
      )} 
      {...props}
    >
      {container ? (
        <div className="container relative z-10 py-12">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  )
}
