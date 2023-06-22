import Link from "next/link"
import Balancer from "react-wrap-balancer"

import Collections from "@/components/collection"
import CustomFittings from "@/components/custom-fittings"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import JWRFooter from "@/components/jwr-footer"
import JWRHeader from "@/components/jwr-header"
import LogoCloud from "@/components/logo-cloud"

const categories = [
  {
    name: "About",
    href: "#",
    cta: "Discover our story",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg",
    imageAlt:
      "Brown leather key ring with brass metal loops and rivets on wood table.",
    description:
      "With the mission of enhancing people’s lives through clothes that make them feel great, we make quintessential menswear that doesn’t take itself too seriously.",
  },
  {
    name: "Services",
    href: "#",
    cta: "See all services",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg",
    imageAlt:
      "Natural leather mouse pad on white desk next to porcelain mug and keyboard.",
    description:
      "We think serving people is cool – so whether it’s full-service styling or simply hemming your jeans, consider us here to help you look your best. ",
  },
  {
    name: "Visit",
    href: "#",
    cta: "Find our shop",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg",
    imageAlt:
      "Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.",
    description:
      "Our brick-and-mortar shop is the a place to pick up a pair of jeans but also to play ping-pong, listen to records, drink a Coke, and be properly taken care of in every way.",
  },
]

export default function HomePage() {
  return (
    <main className="relative">
      <JWRHeader className="sticky lg:fixed" />
      <Hero />
      <LogoCloud />
      <div className="bg-white">
        <div className="mx-auto max-w-xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
          {/* <h2 className="text-4xl  tracking-tight text-primary-900">
            Shop by Collection
          </h2>
          <p className="mt-4 text-base text-primary-500">
            Each season, we collaborate with world-class designers to create a
            collection inspired by the natural world.
          </p> */}

          <div className="  mt-10 space-y-12 lg:-mx-16 lg:grid lg:grid-cols-3 lg:space-y-0 lg:divide-x lg:divide-accent-200">
            {categories.map((category) => (
              <div
                key={category.name}
                className=" flex flex-col  text-center lg:px-16 "
              >
                <div
                  aria-hidden="true"
                  className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 "
                >
                  <img
                    src={category.imageSrc}
                    alt={category.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="grow">
                  <h3 className="mt-8 text-2xl  text-primary-900">
                    {category.name}
                  </h3>
                  <p className="mt-4 text-sm text-primary-500">
                    {category.description}
                  </p>
                </div>
                {/* <Link className="pt-6" href="#">
                  test
                </Link> */}
                <a
                  href={category.href}
                  className="align-self-end mt-6 block font-display text-xs font-semibold uppercase leading-6 tracking-wider text-accent-900 hover:text-accent-700 hover:underline hover:underline-offset-4"
                >
                  {category.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CustomFittings />

      <div className="relative ">
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 py-32 sm:px-6  lg:px-8 ">
            <div className="mx-auto flex max-w-2xl flex-col justify-between gap-x-16  lg:flex lg:max-w-none lg:flex-row lg:items-center">
              <div className="order-2 mt-14 flex w-full justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:order-1 lg:mt-0 lg:pl-0">
                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-primary-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-primary-900/10" />
                  </div>
                </div>
                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-primary-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-primary-900/10" />
                  </div>
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-primary-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-primary-900/10" />
                  </div>
                </div>
                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-primary-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-primary-900/10" />
                  </div>
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-primary-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-primary-900/10" />
                  </div>
                </div>
              </div>
              <div className="order-1 w-full lg:order-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  className="h-9 w-9 fill-primary-900"
                  viewBox="0 0 48.69 49.25"
                >
                  <path
                    fill="current-color"
                    d="M48.64 8a9.7 9.7 0 0 0-.76-4.09A6.19 6.19 0 0 0 44.74 1a12.6 12.6 0 0 0-4.48-.72c-1.21 0-2.42-.06-3.64-.09Q28 0 19.38 0c-2.62 0-5.23 0-7.85.07C9.38.12 7 0 5 .88A8.28 8.28 0 0 0 .74 6.52C.58 7.31.52 8.14.43 8.93a71.21 71.21 0 0 0-.37 3.84c-.1 1.72 0 3.44 0 5.15v6Q0 30 0 36.14v6.24c0 1.6.12 3.12 1.39 4.24 2.61 2.27 6.4 2.2 9.61 2.07 4-.17 8 .16 12 .33s8.16.31 12.24.18a53.07 53.07 0 0 0 5.49-.36 8.59 8.59 0 0 0 4.12-1.48 7 7 0 0 0 2.25-4 31.61 31.61 0 0 0 .94-5.72c.26-3.34.23-6.71.31-10 .12-4.55.26-9.09.3-13.63.05-2.01.04-4.01-.01-6.01ZM47.2 34.63a41.08 41.08 0 0 1-.57 6.37c-.31 1.63-.61 3.66-1.72 5A6.21 6.21 0 0 1 41 47.78a39.52 39.52 0 0 1-5.1.39c-2 .07-3.95.08-5.93 0-3.8 0-7.6-.25-11.39-.41-2-.08-3.95-.2-5.92-.18-1.81 0-3.62.2-5.43.07a10.31 10.31 0 0 1-4.5-1.36 3.34 3.34 0 0 1-1.45-1.63A8.16 8.16 0 0 1 1 41.88V18.67a78.94 78.94 0 0 1 .33-9c.1-.9.2-1.8.33-2.7a7.6 7.6 0 0 1 1.15-2.74 6.34 6.34 0 0 1 2.57-2.41 8.07 8.07 0 0 1 3.26-.64c2.17-.1 4.34-.13 6.51-.15 5.56-.05 11.12 0 16.67.09 2.44 0 4.87.08 7.3.14 2.86.07 6.11.08 7.73 2.88A8 8 0 0 1 47.62 8c.22 8.87-.2 17.77-.42 26.63Z"
                  />
                  <path
                    fill="current-color"
                    d="M45.91 5.66A5.65 5.65 0 0 0 43.15 3c-2.26-1-5-.75-7.42-.8q-7.93-.16-15.89-.18-3.6 0-7.2.07c-2 0-4.16-.11-6 .74a7.55 7.55 0 0 0-3.95 5.2 41.09 41.09 0 0 0-.62 5.75c-.09 1.49 0 3 0 4.48V40.6c0 1.54 0 3.08 1.28 4.18 2.38 2.09 5.88 2 8.84 1.9 3.68-.15 7.39.15 11.06.31s7.44.28 11.15.16a47.82 47.82 0 0 0 4.93-.33 7.94 7.94 0 0 0 3.77-1.31 6.22 6.22 0 0 0 2.1-3.61 29.67 29.67 0 0 0 .89-5.22c.26-3.1.22-6.24.3-9.34.1-4.17.24-8.34.27-12.51V9.42a8.77 8.77 0 0 0-.75-3.76Zm-.7 28.11a36.25 36.25 0 0 1-.52 5.8c-.28 1.49-.55 3.35-1.57 4.54a5.67 5.67 0 0 1-3.48 1.65 37.68 37.68 0 0 1-4.75.36c-1.74.06-3.47.07-5.2.05-3.56 0-7.11-.23-10.66-.38-1.73-.07-3.46-.16-5.19-.17s-3.37.19-5.06.07a9.14 9.14 0 0 1-4.26-1.29A2.92 2.92 0 0 1 3.28 43a7.68 7.68 0 0 1-.21-2.62V19.16a72.74 72.74 0 0 1 .29-8.09 11.29 11.29 0 0 1 1.29-5A5.81 5.81 0 0 1 7 3.83a7.42 7.42 0 0 1 3.09-.62c1.94-.08 3.88-.11 5.82-.12C21 3 26 3.09 31.11 3.16l6.67.13c2.61.07 5.61 0 7.1 2.6a7.14 7.14 0 0 1 .72 3.53c.2 8.11-.18 16.24-.39 24.35Z"
                  />
                  <path
                    fill="current-color"
                    d="M38.67 7.79a3.17 3.17 0 0 0-1.83.1h-.05a.1.1 0 0 0-.07 0 2.74 2.74 0 0 0-1.38 2.86 3 3 0 0 0 .6 1.52 2.8 2.8 0 0 0 1.48.89A2.55 2.55 0 0 0 40.26 12 3.16 3.16 0 0 0 40 8.74a2.52 2.52 0 0 0-1.33-.95Zm.82 3.38A1.52 1.52 0 0 1 38 12.28a1.68 1.68 0 0 1-1.58-1.34 2.37 2.37 0 0 1 .06-1.21 1.3 1.3 0 0 1 .73-.87 2.07 2.07 0 0 1 .49-.12h.56a1.37 1.37 0 0 1 .79.38 2.13 2.13 0 0 1 .44 2.05ZM30.86 14a12.91 12.91 0 0 0-14.47 1.18 11.4 11.4 0 0 0-3.81 6.39 16.94 16.94 0 0 0-.22 4.27 13.67 13.67 0 0 0 .79 4.39 11.08 11.08 0 0 0 2 3.41 9.45 9.45 0 0 0 3.32 2.25 14.13 14.13 0 0 0 7.15 1 11.71 11.71 0 0 0 6.45-2.75 13.1 13.1 0 0 0 3.92-7A12.27 12.27 0 0 0 30.86 14Zm4.49 10.82a13.24 13.24 0 0 1-2.44 7 10 10 0 0 1-5.55 3.78 13 13 0 0 1-7.21-.16 10.06 10.06 0 0 1-3.65-1.91A9.33 9.33 0 0 1 14.13 30a15.86 15.86 0 0 1-.73-7.14 10.42 10.42 0 0 1 2.31-5.53 11.93 11.93 0 0 1 12.86-3.31 10.88 10.88 0 0 1 6.78 10.75Z"
                  />
                  <path
                    fill="current-color"
                    d="M29.71 15.82a10.65 10.65 0 0 0-11.87.95 9.34 9.34 0 0 0-3.16 5.17 13.58 13.58 0 0 0-.21 3.6 11.64 11.64 0 0 0 .65 3.65 8.15 8.15 0 0 0 4.36 4.64 11.73 11.73 0 0 0 5.94.89 9.71 9.71 0 0 0 5.3-2.25A10.78 10.78 0 0 0 34 26.72a10.17 10.17 0 0 0-4.29-10.9Zm3.53 8.84c-.17 3.92-2.52 7.67-6.4 8.75a10.36 10.36 0 0 1-5.84-.1 8.19 8.19 0 0 1-2.91-1.48 7.52 7.52 0 0 1-2-2.91 13 13 0 0 1-.58-5.8 8.41 8.41 0 0 1 1.87-4.47A9.68 9.68 0 0 1 27.66 16a8.78 8.78 0 0 1 5.58 8.66Z"
                  />
                </svg>
                <h1 className="mt-10 text-4xl  tracking-tight text-primary-900 ">
                  <Balancer>Join us on Instagram</Balancer>
                </h1>
                <p className="relative mt-6 text-lg leading-8 text-primary-600 sm:max-w-md lg:max-w-none">
                  Follow along with @jwrclothing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <JWRFooter />
    </main>
  )
}
