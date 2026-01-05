import { cn } from "@/lib/utils"

export function SectionHeading({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 
      className={cn("text-4xl md:text-6xl font-heading font-bold tracking-tight mb-6 leading-[1.1]", className)}
      {...props}
    >
      {children}
    </h2>
  )
}

export function SectionDescription({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p 
      className={cn("text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium", className)}
      {...props}
    >
      {children}
    </p>
  )
}

export function SectionLabel({ className, children, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span 
      className={cn("text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4 inline-block", className)}
      {...props}
    >
      {children}
    </span>
  )
}
