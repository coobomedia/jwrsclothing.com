import Link from "next/link"

import JWRFooter from "@/components/jwr-footer"
import JWRHeader from "@/components/jwr-header"

export default function NotFound() {
  return (
    <>
      <JWRHeader />
      <main className="container mx-auto flex w-full flex-auto flex-col justify-center  py-24 sm:py-64 ">
        <p className="text-base font-semibold leading-8 text-primary-600">
          404
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-primary-900 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-primary-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10">
          <Link
            href="/"
            className="text-sm font-semibold leading-7 text-primary-600"
          >
            <span aria-hidden="true">&larr;</span> Back to home
          </Link>
        </div>
      </main>
      <JWRFooter />
    </>
  )
}
