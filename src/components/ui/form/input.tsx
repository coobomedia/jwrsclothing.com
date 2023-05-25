import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
  name: string
  label: string
  type?: string
  className?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <div>
        <label
          htmlFor={props.id}
          className="block text-sm font-medium leading-6 text-accent-900"
        >
          {label}
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            className={cn(
              "block w-full rounded-md  border-0 py-1.5 text-accent-900 shadow-sm ring-1 ring-inset ring-accent-300  transition-colors  ease-in-out placeholder:text-accent-400 focus:ring-2  focus:ring-inset focus:ring-primary-600 sm:text-sm  sm:leading-6 ",
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
