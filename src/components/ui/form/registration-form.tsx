"use client"

import { FC } from "react"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"

import { FormInput } from "@/components/ui/form/form-input"
import { FormTextarea } from "@/components/ui/form/form-textarea"
import { Button } from "../button"

export type RegistrationFormFields = {
  firstName: string
  lastName: string
  email: string
  bio?: string
}

export const emailPattern = {
  value: new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$", "ig"),
  message: "Enter a valid email address.",
}

export const RegistrationForm: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationFormFields>()

  const watchAllFields = watch()

  const onSubmit = handleSubmit((data) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve()
        console.log(data)
        reset()
      }, 5000)
    })
  })

  return (
    <>
      <form onSubmit={onSubmit}>
        <FormInput<RegistrationFormFields>
          id="firstName"
          type="text"
          name="firstName"
          label="First Name"
          placeholder="First Name"
          className="mb-2"
          register={register}
          rules={{ required: "You must enter your first name." }}
          errors={errors}
        />

        <FormInput<RegistrationFormFields>
          id="lastName"
          type="text"
          name="lastName"
          label="Last Name"
          placeholder="Last Name"
          className="mb-2"
          register={register}
          rules={{ required: "You must enter your last name." }}
          errors={errors}
        />

        <FormInput<RegistrationFormFields>
          id="email"
          type="email"
          name="email"
          label="Email Address"
          placeholder="Email Address"
          className="mb-2"
          register={register}
          rules={{
            required: "You must enter your email address.",
            pattern: emailPattern,
          }}
          errors={errors}
        />

        <FormTextarea<RegistrationFormFields>
          id="bio"
          name="bio"
          label="Bio"
          placeholder="Enter your bio"
          rows={5}
          rules={{ required: "You must enter your bio." }}
          register={register}
          errors={errors}
        />

        <Button className="mt-4" type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin text-white" />
              {"Submitting"}
            </>
          ) : (
            "Submit"
          )}
        </Button>
      </form>
      <pre className="mt-10">{JSON.stringify(watchAllFields, null, 4)}</pre>
    </>
  )
}
