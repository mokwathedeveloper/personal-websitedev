import { cn } from "@/lib/utils"

export function SectionHeading({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 
      className={cn("text-3xl md:text-5xl font-heading font-bold tracking-tight mb-6", className)}
      {...props}
    >
      {children}
    </h2>
  )
}

export function SectionDescription({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p 
      className={cn("text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed", className)}
      {...props}
    >
      {children}
    </p>
  )
}
