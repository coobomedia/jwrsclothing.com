import React, { FC } from "react"

import { cn } from "@/lib/utils"

export type FormErrorMessageProps = {
  className?: string
  children: React.ReactNode
}

export const FormErrorMessage: FC<FormErrorMessageProps> = ({
  children,
  className,
}) => <p className={cn(" mt-2 text-sm text-red-600", className)}>{children}</p>
