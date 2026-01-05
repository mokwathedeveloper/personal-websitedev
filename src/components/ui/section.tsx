import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  id?: string
  container?: boolean
  fullHeight?: boolean
  centered?: boolean
}

export function Section({
  children,
  id,
  className,
  container = true,
  fullHeight = false,
  centered = true,
  ...props
}: SectionProps) {
  return (
    <section 
      id={id} 
      className={cn(
        "relative w-full flex flex-col",
        fullHeight && "min-h-screen",
        centered && "justify-center",
        !fullHeight && "py-20 md:py-32",
        className
      )} 
      {...props}
    >
      {container ? (
        <div className="container relative z-10 w-full">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  )
}
