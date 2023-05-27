"use client"

import { useToast } from "@/hooks/use-toast"
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "@/lib/utils"

type FormValues = {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

const schema = z.object({
  firstName: z.string().nonempty({ message: "First name is required" }),
  lastName: z.string().nonempty({ message: "Last name is required" }),
  email: z.string().nonempty({ message: "Email is required" }).email(),
  phone: z.string().nonempty({ message: "Phone is required" }),
  message: z.string().nonempty({ message: "Message is required" }),
})

export default function ContactPage() {
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

  // const watchAllFields = watch()

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
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 ">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="jwr-bg  absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-accent-50 ring-1 ring-accent-900/10 lg:w-1/2"></div>
            <h2 className="text-4xl tracking-tight text-accent-900 lg:text-5xl">
              Get in touch
            </h2>
            <p className="mt-6 text-lg leading-8 text-accent-600">
              We value your feedback, inquiries, and suggestions. At JWR's, we
              are committed to providing exceptional customer service and
              ensuring your shopping experience with us is nothing short of
              excellent. We encourage you to get in touch with us through the
              form aside or any of the following channels:
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-accent-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon
                    className="h-7 w-6 text-primary-950"
                    aria-hidden="true"
                  />
                </dt>
                <dd>505 University Dr. E. #305, College Station, TX 77840</dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon
                    className="h-7 w-6 text-primary-950"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="hover:text-accent-900"
                    href="tel:(979) 805-2495"
                  >
                    (979) 805-2495
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon
                    className="h-7 w-6 text-primary-950"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="hover:text-accent-900"
                    href="mailto:hello@example.com"
                  >
                    info@jwrsclothing.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form
          className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-32"
          onSubmit={handleFormSubmit(onSubmit)}
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="">
                <label
                  htmlFor="first-name"
                  className="block font-display text-xs font-medium uppercase leading-6 tracking-wider text-accent-900"
                >
                  First Name
                </label>
                <div className="relative mt-2.5 rounded-md shadow-sm">
                  <input
                    type="text"
                    id="first-name"
                    {...register("firstName")}
                    className={cn(
                      "block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset  focus:ring-inset  sm:text-sm sm:leading-6",
                      {
                        "text-accent-900  ring-accent-300 placeholder:text-accent-400 focus:ring-2  focus:ring-primary-900 ":
                          !errors["firstName"],
                        "focus:ring-red-500 text-red-900 ring-red-300 placeholder:text-red-300 ":
                          errors["firstName"],
                      }
                    )}
                    aria-invalid={errors.firstName ? "true" : "false"}
                    aria-describedby="first-name-error"
                  />
                </div>

                {errors["firstName"] && (
                  <p
                    className="mt-2.5 text-sm text-red-600"
                    id="email-error"
                    role="alert"
                  >
                    {errors["firstName"].message}
                  </p>
                )}
              </div>
              <div className="">
                <label
                  htmlFor="last-name"
                  className="block font-display text-xs font-medium uppercase leading-6 tracking-wider text-accent-900"
                >
                  Last Name
                </label>
                <div className="relative mt-2.5 rounded-md shadow-sm">
                  <input
                    type="text"
                    id="last-name"
                    {...register("lastName")}
                    className={cn(
                      "block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset  focus:ring-inset  sm:text-sm sm:leading-6",
                      {
                        "text-accent-900  ring-accent-300 placeholder:text-accent-400 focus:ring-2  focus:ring-primary-900 ":
                          !errors["lastName"],
                        "focus:ring-red-500 text-red-900 ring-red-300 placeholder:text-red-300 ":
                          errors["lastName"],
                      }
                    )}
                    aria-invalid={errors.lastName ? "true" : "false"}
                    aria-describedby="last-name-error"
                  />
                </div>

                {errors["lastName"] && (
                  <p
                    className="mt-2.5 text-sm text-red-600"
                    id="email-error"
                    role="alert"
                  >
                    {errors["lastName"].message}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="phone"
                  className="block font-display text-xs font-medium uppercase leading-6 tracking-wider text-accent-900"
                >
                  Phone
                </label>
                <div className="relative mt-2.5 rounded-md shadow-sm">
                  <input
                    type="tel"
                    id="phone"
                    {...register("phone")}
                    className={cn(
                      "block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset  focus:ring-inset  sm:text-sm sm:leading-6",
                      {
                        "text-accent-900  ring-accent-300 placeholder:text-accent-400 focus:ring-2  focus:ring-primary-900 ":
                          !errors["phone"],
                        "focus:ring-red-500 text-red-900 ring-red-300 placeholder:text-red-300 ":
                          errors["phone"],
                      }
                    )}
                    aria-invalid={errors.phone ? "true" : "false"}
                    aria-describedby="phone-error"
                  />
                </div>

                {errors["phone"] && (
                  <p
                    className="mt-2.5 text-sm text-red-600"
                    id="phone-error"
                    role="alert"
                  >
                    {errors["phone"].message}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block font-display text-xs font-medium uppercase leading-6 tracking-wider text-accent-900"
                >
                  Email
                </label>
                <div className="relative mt-2.5 rounded-md shadow-sm">
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    className={cn(
                      "block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset  focus:ring-inset  sm:text-sm sm:leading-6",
                      {
                        "text-accent-900  ring-accent-300 placeholder:text-accent-400 focus:ring-2  focus:ring-primary-900 ":
                          !errors["email"],
                        "focus:ring-red-500 text-red-900 ring-red-300 placeholder:text-red-300 ":
                          errors["email"],
                      }
                    )}
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby="email-error"
                  />
                </div>

                {errors["email"] && (
                  <p
                    className="mt-2.5 text-sm text-red-600"
                    id="email-error"
                    role="alert"
                  >
                    {errors["email"].message}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block font-display text-xs font-medium uppercase leading-6 tracking-wider text-accent-900"
                >
                  Your Message
                </label>
                <div className="relative mt-2.5 rounded-md shadow-sm">
                  <textarea
                    aria-invalid={errors.message ? "true" : "false"}
                    {...register("message")}
                    rows={4}
                    name="message"
                    id="message"
                    className={cn(
                      "block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset  focus:ring-inset  sm:text-sm sm:leading-6",
                      {
                        "text-accent-900  ring-accent-300 placeholder:text-accent-400 focus:ring-2  focus:ring-primary-900 ":
                          !errors["message"],
                        "focus:ring-red-500 text-red-900 ring-red-300 placeholder:text-red-300 ":
                          errors["message"],
                      }
                    )}
                    defaultValue={""}
                  />
                  {errors.message && (
                    <p role="alert" className="mt-2.5 text-sm text-red-600">
                      {errors.message?.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                className="flex items-center rounded-md bg-primary-950 px-3.5 py-2.5 text-center font-display text-xs font-semibold uppercase tracking-widest text-white shadow-sm hover:bg-primary-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-900"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    {"Submitting"}
                    <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
