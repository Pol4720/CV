"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline" | "success" | "warning"
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variants = {
      default: "bg-gradient-to-r from-blue-600 to-purple-600 text-white",
      secondary: "bg-white/10 text-foreground border border-white/20",
      outline: "border-2 border-blue-500/50 text-blue-400",
      success: "bg-green-500/20 text-green-400 border border-green-500/30",
      warning: "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30",
    }

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-all duration-300",
          variants[variant],
          className
        )}
        {...props}
      />
    )
  }
)
Badge.displayName = "Badge"

export { Badge }
