import * as React from "react"
import { VariantProps, cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

export type TextVariantProps = VariantProps<typeof textVariants>

const textVariants = cva("", {
  variants: {
    variant: {
      body: "text-base",
      heading: "text-5xl",
      pageHeading: "text-3xl",
      sectionHeading: "text-xl",
    },
    el: {
      h1: "h1",
      h2: "h2",
      h3: "h3",
      h4: "h4",
      h5: "h5",
      h6: "h6",
      p: "p",
    },
  },
})

export interface TextProps
  extends Omit<TextVariantProps, "el">,
    Required<Pick<TextVariantProps, "el">> {
  children?: React.ReactNode
  className?: string
}

const Text: React.FC<TextProps> = ({
  el,
  variant,
  className,
  children,
  ...props
}) => {
  const DynamicElement = textVariants({ el }) as keyof JSX.IntrinsicElements

  return (
    <DynamicElement
      className={cn(textVariants({ variant, className }))}
      {...props}
    >
      {children}
    </DynamicElement>
  )
}

Text.displayName = "Text"

export { Text, textVariants }
