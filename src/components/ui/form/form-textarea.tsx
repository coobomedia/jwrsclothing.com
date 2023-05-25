import React, { DetailedHTMLProps, TextareaHTMLAttributes } from "react"
import { ErrorMessage } from "@hookform/error-message"
import get from "lodash.get"
import {
  DeepMap,
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form"

import { cn } from "@/lib/utils"
import { FormErrorMessage } from "./form-error-message"

export type FormTextareaProps<TFormValues extends FieldValues> = {
  id: string
  name: Path<TFormValues>
  label: string
  className?: string
  rules?: RegisterOptions
  register?: UseFormRegister<TFormValues>
  errors?: Partial<DeepMap<TFormValues, FieldError>>
} & DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>

export const FormTextarea = <TFormValues extends Record<string, any>>({
  id,
  name,
  label,
  register,
  rules,
  errors,
  className,
  ...props
}: FormTextareaProps<TFormValues>): JSX.Element => {
  // If the name is in a FieldArray, it will be 'fields.index.fieldName' and errors[name] won't return anything, so we are using lodash get
  const errorMessages = get(errors, name)
  const hasError = !!(errors && errorMessages)

  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-accent-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <textarea
          id={id}
          name={name}
          aria-invalid={!!(errors && errorMessages)}
          className={cn(
            "block w-full rounded-md border-0 text-accent-900 shadow-sm ring-1 ring-inset ring-accent-300 transition-colors placeholder:text-accent-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:py-1.5 sm:text-sm sm:leading-6",
            hasError
              ? "  text-red-900   ring-red-300 placeholder:text-red-300  focus:ring-red-500 "
              : ""
          )}
          {...props}
          {...(register && register(name, rules))}
        />
      </div>
      <ErrorMessage
        errors={errors}
        name={name as any}
        render={({ message }) => <FormErrorMessage>{message}</FormErrorMessage>}
      />
    </div>
  )
}
