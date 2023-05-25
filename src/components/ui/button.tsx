import * as React from "react"
import { VariantProps, cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(" font-semibold shadow-sm  ", {
  variants: {
    variant: {
      default:
        "bg-primary-600  text-white hover:bg-primary-500 focus-visible:outline-primary-600  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
      onDark:
        "hover:bg-primary-400 bg-primary-500 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500",
      secondary:
        "bg-white text-acccent-900 ring-1 ring-inset ring-accent-300 hover:bg-accent-50 ",
      soft: "bg-primary-50 text-primary-600 shadow-sm hover:bg-primary-100",
      withIcon:
        "inline-flex items-center rounded-md bg-primary-600  text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600",
    },
    size: {
      default: "px-3.5 py-2.5 rounded-md text-sm",
      xs: "px-2 py-1 text-xs rounded ",
      sm: "px-2 py-1 text-sm rounded",
      md: "px-2.5 py-1.5 rounded-md text-sm",
      lg: "px-3 py-2 text-sm rounded-md",
      iconSm: "px-2.5 py-1.5 gap-x-1.5",
      iconMd: "px-3 py-2 gap-x-1.5",
      iconLg: "px-3.5 py-2.5 gap-x-2",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
