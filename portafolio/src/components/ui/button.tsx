import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-sage-deep text-white shadow-[0_8px_20px_-8px_rgba(85,128,95,0.7)] hover:bg-[#4a7255] hover:shadow-[0_12px_28px_-10px_rgba(85,128,95,0.8)] hover:-translate-y-0.5",
        terracotta:
          "bg-terracotta-deep text-white shadow-[0_8px_20px_-8px_rgba(176,106,76,0.6)] hover:bg-[#9c5c40] hover:-translate-y-0.5",
        outline:
          "border border-line bg-paper/70 text-ink backdrop-blur-sm hover:border-sage hover:text-sage-deep hover:-translate-y-0.5",
        secondary:
          "bg-sand text-ink border border-line hover:bg-[#eae0cf] hover:-translate-y-0.5",
        ghost: "text-ink hover:bg-sand",
        link: "text-sage-deep underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-[0.8rem]",
        lg: "h-13 px-8 text-base",
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
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
