import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  id?: string
  container?: boolean
}

export function Section({ children, id, className, container = true, ...props }: SectionProps) {
  return (
    <section 
      id={id} 
      className={cn("py-20 md:py-32 relative overflow-hidden", className)} 
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
