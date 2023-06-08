"use client"

import { useToast } from "@/hooks/use-toast"
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  MapPinIcon,
  PaperAirplaneIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline"
// import {
//   BuildingOffice2Icon,
//   EnvelopeIcon,
//   MapPinIcon,
//   PaperAirplaneIcon,
//   PhoneIcon,
// } from "@heroicons/react/24/solid"
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
    <div className="relative isolate  bg-white">
      <div className="mx-auto grid  max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 ">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="jwr-bg  absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-accent-50 ring-1 ring-accent-900/10 lg:w-1/2"></div>
            <h2 className="text-4xl tracking-tight text-accent-900 lg:text-4xl">
              Get in touch
            </h2>
            <p className="mt-6 font-display text-lg leading-8 text-accent-600">
              We value your feedback, inquiries, and suggestions. At JWR's, we
              are committed to providing exceptional customer service and
              ensuring your shopping experience with us is nothing short of
              excellent. We encourage you to get in touch with us through the
              form aside or any of the following channels:
            </p>
            <dl className="mt-10 space-y-4 font-display text-base leading-7 text-accent-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <MapPinIcon
                    className="h-6 w-7 stroke-[.5px] text-primary-950"
                    aria-hidden="true"
                  />
                </dt>
                <dd>505 University Dr. E. #305, College Station, TX 77840</dd>
              </div>

              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  {/* <EnvelopeIcon
                    className="h-7 w-6 text-primary-950"
                    aria-hidden="true"
                  /> */}
                  <PaperAirplaneIcon
                    className="h-6 w-7 stroke-[.5px] text-primary-950"
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
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  {/* <PhoneIcon
                    className="h-7 w-6 text-primary-950"
                    aria-hidden="true"
                  /> */}
                  <svg
                    className="cls-1 h-6 w-7"
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    viewBox="0 0 25.92 16.48"
                  >
                    {/* <defs>
    <style>
      .cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:.16px}
    </style>
  </defs> */}
                    <path
                      d="M10.55 4.13c.08-.31.68-.24.81 0 .12.42-.81.47-.81.01M11.64 8.2c.16-.31.58-.37.84-.58.23-.09.76-.07.74.29-.12.5-.93.33-.82-.2M23.94 10.5c-.1.37-.52.48-.68.81-.13.23.06.54.33.38.23-.14.32-.41.55-.54.25-.14.46.19.22.38-1.08.94-.7 1.32.49.58.18-.1.43.05.32.25-.09.15-1.07.46-.6.64.38.08.87-.18 1.18.13.12.13.14.62-.11.56-.3-.09-.71-.46-1.01-.25 0 .41.91.53.69.99-.42.37-.69-.43-.96-.64-.77-.37.03.79.11 1.03"
                      className="cls-1"
                    />
                    <path
                      d="M3.95 5.38c.34-.92 1.18-1.57 1.91-2.18.24-1.32.01-1.26 1.47-1.24.9-.01.2 1.02 1.42.92 1.32.03 2.68.15 3.99-.06.38-.23.34-.87.89-.91 2-.29.83.55 1.87 1.2 2.07 1.03-1.58.99.57 3.3.87.86 2.04 1.62 3.25 1.75.71.15 1.78-.41 1.19-1.19M9.74 8.5c-1.18 1.16 1.56 1.12.58-.05"
                      className="cls-1"
                    />
                    <path
                      d="M7.87 5.72c-.23-1.21-1.69.17-.67.27.25.08.45-.05.65-.15.09-.27.53-.43.51-.74-.08-.1-.25-.03-.36-.08-.37-.09-.13-.49.09-.62.17-.04.71-.15.66.13-.06.3-.11.39-.38.55M11.09 4.48c.16.13.43.28.64.2-.03-.51.62-.49.89-.2.32.52-.68.59-.88.22M6.37.58c.32-.09.64-.16.96-.23M9.61 3.82c-.42.03-.77.44-.34.76.21 0 .43-.11.64 0 .25.04.54-.06.77-.15M20.56 3.05c.08 1.26.56 2.75-.02 3.9M17.51 12.54c.59.45.46.01.95-.05.41.31-.58.63-.39.97.32.06.56-.5.91-.44.17.46-.47.91-.08 1.37.12.18.38.22.48-.04.05-.41.27-1.25.81-.81.13.55-.24 1.56.68 1.57.53-.12.13-.92.41-1.23"
                      className="cls-1"
                    />
                    <path
                      d="M9.62 3.79c.04.09.13.09.21.09.19-.02.38.24.21.38-.09.08-.2.14-.25.26M12.5 7.6c-.03-.07-.03-.12 0-.19.08-.13-.02-.32.09-.44.06-.13.05-.3.2-.37.05-.03.05-.08.09-.11.26-.14.84.04.82.37-.06.31-.63.25-.75.01-.05-.09-.06-.2-.12-.29M21.29 13.88c.02-.25.42-.19.49.03.24.46-.1 1.23.55 1.41 1.01.11-.07-1.24.43-1.58.84-.1.54 1.35 1.29 1.45.45.03.38-.02.45-.37M12.86 6.49c-.11-.23-.09-.51-.08-.76-.15-.26 0-.6.34-.52.31.05.48.71.05.65-.15-.02-.23-.18-.38-.18"
                      className="cls-1"
                    />
                    <path
                      d="M8.9 7.54c-1.43 4.19-3.69-1.57-1.65-3.13 1.75-1.36 5.3-1.39 6.51.72.62.85-.05 2.18.78 2.85"
                      className="cls-1"
                    />
                    <path
                      d="M12.08 4.95c.07.25.38.46.62.54M9.27 4.59c-.11.15-.39.27-.57.24M17.59 11.74c.18-.11.48-.31.55.03 0 .34-.25.59-.36.89M14.59 8.11c.41.25.11.33.49.67.34 1.08.95 2.01 1.67 2.87.14.45.24 1.36-.06 1.73-1.25.45-2.67.15-3.98.24-2.29-.18-8.53.56-10.01-.73-.24-1.68.92-.39 1.74-.5 2.2.03 4.42.03 6.62.01 1.56-.04 3.13.04 4.69-.04.64-.17-.14-.87-.27-1.23-.44-.75-1.04-1.67-.65-2.54M20.51 7c-.93.56-3.34-1.81-3.99-2.53-.07-.11-.16-.32.02-.35.41-.03.67.42.95.66.81.96 2.04 1.37 2.98 2.15M8.75 7.26c-.1-.87-.34-2.08.83-2.34 1.04-.4 2.84.27 2.47 1.61-.18 1.44-2.1 1.7-3.13 1-.12-.04-.07-.22-.18-.27-.52-.27-.57-.98-.88-1.41"
                      className="cls-1"
                    />
                    <path
                      d="M14.82 8.27c.26-.34.35-1.07.95-.83 1.27.43 1.41 2.83 1.67 3.99.2.34.08.78.03 1.15-.23.77.01 1.66-.06 2.47.4 1.43.16-2.16.29-2.36M3.31 16.01c.35.33 1.01.17 1.47.26 1.45.03 2.9.05 4.36.07 1.76-.22 7.29.58 8.19-.62M21.63 4.59c-.57.83.41.71.9.44.41-.07.28.53-.01.6-.29.15-1.43.52-.65.82.36.06.91-.5 1.14-.14.18.73-1.35.62-1.07 1.14.03.03.14.05.18.02.25-.12.56-.04.83-.07.21-.01.35.27.15.38-.19.18-1.45.33-.93.72.34.06.7-.12 1.02 0 .31.35-.47.39-.67.48-.22.07-.43.4-.23.58.32.09.62-.25.95-.27.14-.06.24.12.16.23-.19.35-.81.54-.74.99.38.18.98-.57 1.31-.03"
                      className="cls-1"
                    />
                    <path
                      d="M7.34.31c2.92-.41 6.14-.31 9.03.61 1.15.28 2.3.64 3.41 1.05 1 .27 1.1.86 1.21 1.78.05.39.47 1.02.9.76.14-.16.64-.26.8-.14.2.39-.77.53-.87.19M6.29.59c-1.84.55-3.81.94-5.45 1.96-1.08 1.1-.78 3.3-.49 4.7.43 1.19 3.28.12 4.13-.24.75-.28 1.38-.81 1.26-1.68.02-.15-.02-.36-.22-.36-.49.03-.95.32-1.42.43-.16-.03-.27.07-.37.16-.35.13-.76.17-1.13.3-.29.18-2.56.08-2.05.57.47.27 3-.13 3.07-.78"
                      className="cls-1"
                    />
                    <path
                      d="M11.39 8.29c-.06.25-.56.53-.24.79 1.01.5 1.29-1 .29-.81-.39-.09-.79 0-1.15.16-.22-.05-.42.09-.63.03-.13-.04-.26.03-.36.1-2.22 1.96.54 1.49 1.88 1.33 1.19-.12 2.24-.76 3.11-1.54.7-.66.44-1.8.5-2.71-.11-.69.26-3.21-.33-3.45-1.63-.28-.74.87-1.56.96h-1.75c-.85-.15-3.03.3-3.54-.21-.09-.2.05-.57-.24-.6-.31 0-.82-.16-1.03.08 0 2.16-.22 4.29-.98 6.3-.95 2.61-3.03 2.48-3.01 3.62.13 1.12-.44 2.75.55 3.53"
                      className="cls-1"
                    />
                  </svg>
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
                <div className="relative mt-2 rounded-md shadow-sm">
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
                    className="mt-2 text-sm text-red-600"
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
                <div className="relative mt-2 rounded-md shadow-sm">
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
                    className="mt-2 text-sm text-red-600"
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
                <div className="relative mt-2 rounded-md shadow-sm">
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
                    className="mt-2 text-sm text-red-600"
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
                <div className="relative mt-2 rounded-md shadow-sm">
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
                    className="mt-2 text-sm text-red-600"
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
                <div className="relative mt-2 rounded-md shadow-sm">
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
                    <p role="alert" className="mt-2 text-sm text-red-600">
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
