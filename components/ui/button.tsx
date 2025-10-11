import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-colors transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "relative border border-[hsl(var(--accent-layer-2))] bg-[hsl(var(--secondary))] text-[hsl(var(--primary-foreground))] shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_12px_20px_-10px_rgba(30,58,138,0.28)] hover:bg-[hsl(var(--secondary-layer-3))] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_18px_26px_-12px_rgba(30,58,138,0.32)] hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.99]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-[hsl(var(--accent-layer-2))] bg-[hsl(var(--surface-card))] text-[hsl(var(--accent-layer-2))] shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_10px_18px_-12px_rgba(30,58,138,0.22)] hover:bg-[hsl(var(--secondary-layer-4))] hover:text-[hsl(var(--accent-layer-2))]",
        secondary:
          "bg-[hsl(var(--secondary-layer-3))] text-[hsl(var(--accent-layer-1))] hover:bg-[hsl(var(--secondary-layer-2))] hover:text-[hsl(var(--accent-layer-1))] shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_12px_24px_-16px_rgba(30,58,138,0.28)]",
        ghost:
          "text-[hsl(var(--accent-layer-2))] hover:bg-[hsl(var(--secondary-layer-4))] hover:text-[hsl(var(--accent-layer-2))]",
        link: "text-[hsl(var(--accent-layer-2))] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 rounded-md px-3.5",
        lg: "h-12 rounded-lg px-8",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
