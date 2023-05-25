"use client"

import { useToast } from "@/hooks/use-toast"
import { ExclamationCircleIcon } from "@heroicons/react/20/solid"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

type FormValues = {
  email: string
  message: string
  location: string
  checkbox: string
  fruits: string[]
  notificationMethods: string
}

const schema = z.object({
  email: z.string().nonempty({ message: "Message is required" }).email(),
  message: z.string().nonempty({ message: "Message is required" }),
  location: z.string().nonempty({ message: "Message is required" }),
  checkbox: z.string().nonempty({ message: "Message is required" }),
  fruits: z.string().nonempty({ message: "Message is required" }),
  notificationMethods: z.string().nonempty({ message: "Message is required" }),
})

const notificationMethods = [
  { value: "email", label: "Email" },
  { value: "sms", label: "Phone (SMS)" },
  { value: "push", label: "Push notification" },
]

const fruits = [
  { label: "Apple", value: "Apple" },
  { label: "Banana", value: "Banana" },
  { label: "Orange", value: "Orange" },
]

function FormsPage() {
  const { toast } = useToast()

  const {
    register,
    handleSubmit: handleFormSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })

  const watchAllFields = watch()

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      )
      if (response.ok) {
        console.log("Form submitted successfully")

        toast({
          title: "Form submitted successfully!",
          description: "Thank you for your submission.",
          duration: 5000,
        })
        reset()
      } else {
        const responseData = await response.json()
        console.log("Form submission failed:", responseData)

        if (responseData.error) {
          toast({
            title: "Uh oh! Something went wrong.",
            description: responseData.error,
            duration: 5000,
            variant: "destructive",
          })
        }
      }
    } catch (error) {
      console.log("Error submitting form:", error)
    }
  }

  return (
    <div className="container mx-auto grid items-center gap-6 pb-8 pt-6 md:py-10">
      <section className="flex  flex-col items-start gap-4">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Forms
        </h1>
        <p className="text-lg text-accent-700 sm:text-xl">
          Full featured secure forms using{" "}
          <a
            target="_blank"
            className="underline underline-offset-2 hover:text-accent-500"
            href="https://react-hook-form.com/"
          >
            React Hook Form
          </a>
          ,{" "}
          <a
            target="_blank"
            className="underline underline-offset-2 hover:text-accent-500"
            href="https://zod.dev/"
          >
            Zod
          </a>{" "}
          and{" "}
          <a
            target="_blank"
            className="underline underline-offset-2 hover:text-accent-500"
            href="https://formspree.io/"
          >
            Formspree
          </a>
          .
        </p>
        <small className="italic text-accent-500">
          * To connect to Formspree, you need to create an account. Create a new
          form and go to the integration tab to copy the endpoint URL. Then,
          paste it in the .env file as NEXT_PUBLIC_FORMSPREE_ENDPOINT.
        </small>
      </section>
      <Separator className="my-4 " />
      <section className="">
        <form
          className="max-w-xs space-y-10"
          onSubmit={handleFormSubmit(onSubmit)}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-accent-900"
            >
              Email
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="email"
                id="email"
                {...register("email")}
                className={cn(
                  "block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset  focus:ring-inset  sm:text-sm sm:leading-6",
                  {
                    "text-accent-900  ring-accent-300 placeholder:text-accent-400 focus:ring-2  focus:ring-primary-600 ":
                      !errors["email"],
                    "focus:ring-red-500 text-red-900 ring-red-300 placeholder:text-red-300 ":
                      errors["email"],
                  }
                )}
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby="email-error"
              />
              {errors["email"] && (
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <ExclamationCircleIcon
                    className="h-5 w-5 text-red-500"
                    aria-hidden="true"
                  />
                </div>
              )}
            </div>

            {errors["email"] && (
              <p
                className="mt-2 text-sm text-red-600"
                id="email-error"
                role="alert"
              >
                {errors["email"].message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="comment"
              className="block text-sm font-medium leading-6 text-accent-900"
            >
              Your Message
            </label>
            <div className="mt-2">
              <textarea
                aria-invalid={errors.message ? "true" : "false"}
                {...register("message")}
                rows={4}
                name="message"
                id="message"
                className="block w-full rounded-md border-0 text-accent-900 shadow-sm ring-1 ring-inset ring-accent-300 placeholder:text-accent-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:py-1.5 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
              {errors.message && (
                <p role="alert" className="mt-2 text-sm text-red-600">
                  {errors.message?.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium leading-6 text-accent-900"
            >
              Location
            </label>
            <select
              id="location"
              {...register("location")}
              className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-accent-900 ring-1 ring-inset ring-accent-300 focus:ring-2 focus:ring-primary-600 sm:text-sm sm:leading-6"
              defaultValue="United States"
            >
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>

          <fieldset>
            <legend className="text-base font-semibold leading-6 text-accent-900">
              Fruits
            </legend>
            <div className="mt-4 divide-y divide-accent-200 border-y border-accent-200">
              {fruits.map(({ label, value }, index) => {
                return (
                  <div
                    key={value + index}
                    className="relative flex items-start py-4"
                  >
                    <div className="min-w-0 flex-1 text-sm leading-6">
                      <label
                        htmlFor={`fruits-${label}`}
                        className="select-none font-medium text-accent-900"
                      >
                        {label}
                      </label>
                    </div>
                    <div className="ml-3 flex h-6 items-center">
                      <input
                        {...register("fruits")}
                        className="h-4 w-4 rounded border-accent-300 text-primary-600 focus:ring-primary-600"
                        aria-invalid={errors["fruits"] ? "true" : "false"}
                        value={value}
                        type="checkbox"
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </fieldset>

          <div>
            <label className="text-base font-semibold text-accent-900">
              Notifications
            </label>
            <p className="text-sm text-accent-500">
              How do you prefer to receive notifications?
            </p>
            <fieldset className="mt-4">
              <legend className="sr-only">Notification method</legend>
              <div className="space-y-4">
                {notificationMethods.map(({ label, value }, index) => {
                  return (
                    <div key={value + index} className="flex items-center">
                      <input
                        {...register("notificationMethods")}
                        value={value}
                        type="radio"
                        defaultChecked={value === "email"}
                        className="h-4 w-4 border-accent-300 text-primary-600 focus:ring-primary-600"
                      />
                      <label
                        htmlFor={label}
                        className="ml-3 block text-sm font-medium leading-6 text-accent-900"
                      >
                        {label}
                      </label>
                    </div>
                  )
                })}
              </div>
            </fieldset>
            {errors["notificationMethods"] && (
              <p role="alert">{errors["notificationMethods"]?.message}</p>
            )}
          </div>

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {"Submitting"}
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </form>
        <pre className="mt-10">{JSON.stringify(watchAllFields, null, 4)}</pre>
      </section>
    </div>
  )
}

export default FormsPage
