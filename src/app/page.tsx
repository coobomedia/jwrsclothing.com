import Image from "next/image"
import Link from "next/link"
import Balancer from "react-wrap-balancer"

import CustomFittings from "@/components/custom-fittings"
import Hero from "@/components/hero"
import JWRFooter from "@/components/jwr-footer"
import JWRHeader from "@/components/jwr-header"
import about from "../../public/images/about-home.jpeg"

import instapost1a from "../../public/images/insta-post1a.jpg"
import fitting1 from "../../public/images/jwr-custom-fittings-1.jpg"
import testimonials from "../../public/images/testimonials-home.jpeg"

const categories = [
  {
    name: "About JWR",
    href: "/about",
    cta: "Discover our story",
    imageSrc: about.src,
    imageAlt:
      "Brown leather key ring with brass metal loops and rivets on wood table.",
    description:
      "With the mission of enhancing people’s lives through clothes that make them feel great, we make quintessential menswear that doesn’t take itself too seriously.",
  },
  {
    name: "Services",
    href: "/contact",
    cta: "Ask about our services",
    imageSrc: fitting1.src,
    imageAlt:
      "Natural leather mouse pad on white desk next to porcelain mug and keyboard.",
    description:
      "We think serving people is cool – so whether it’s full-service styling or simply hemming your jeans, consider us here to help you look your best. ",
  },
  {
    name: "Testimonials",
    href: "/testimonials",
    cta: "See our testimonials",
    imageSrc: testimonials.src,
    imageAlt:
      "Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.",
    description:
      "Our brick-and-mortar shop is the a place to pick up a pair of jeans but also to play ping-pong, listen to records, drink a Coke, and be properly taken care of in every way.",
  },
]

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <JWRHeader className="sticky lg:absolute" />
      <Hero />
      <div
        id="learn-more"
        className="container relative  mx-auto py-24 sm:py-32 "
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl  tracking-tight text-primary-900 sm:text-4xl">
            <Balancer>Premium Brands, Endless Style</Balancer>
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-display text-lg leading-8 text-primary-600">
            Indulge in the finest craftsmanship and design with our collection
            of prestigious brands. Elevate your wardrobe with timeless pieces
            that embody sophistication, innovation, and unparalleled quality.
          </p>
          <div className="mx-auto mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/clothing"
              className="rounded-md bg-primary-950 px-3.5 py-2.5 font-display text-xs font-semibold uppercase tracking-wider text-white shadow-sm hover:bg-primary-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-800"
            >
              Explore Our Store
            </a>
            <Link
              href="/contact"
              className="font-display text-xs font-semibold uppercase leading-6 tracking-wider text-primary-900"
            >
              Contact Us <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative bg-white">
        <div className=" container mx-auto pb-16 sm:pb-24 ">
          <div className="space-y-12 lg:mx-[-3vw] lg:grid lg:grid-cols-3 lg:space-y-0 lg:divide-x lg:divide-primary-200">
            {categories.map((category) => (
              <div
                key={category.name}
                className=" flex flex-col  text-center lg:px-[3vw] "
              >
                <div
                  aria-hidden="true"
                  className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 "
                >
                  <Image
                    fill
                    src={category.imageSrc}
                    alt={category.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="grow">
                  <h3 className="mt-8 text-2xl  text-primary-900">
                    {category.name}
                  </h3>
                  <p className="mt-4 font-display text-sm text-primary-500">
                    {category.description}
                  </p>
                </div>

                <Link
                  href={category.href}
                  className="align-self-end mt-6 block font-display text-xs font-semibold uppercase leading-6 tracking-wider text-primary-900 hover:text-primary-700 hover:underline hover:underline-offset-4"
                >
                  {category.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CustomFittings />

      <div className="relative py-24 sm:py-32 ">
        <div className="overflow-hidden">
          <div className="container mx-auto   ">
            <div className="mx-auto flex max-w-2xl flex-col justify-between gap-x-16  lg:flex lg:max-w-none lg:flex-row lg:items-center">
              <div className="order-2 mt-14 flex w-full justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:order-1 lg:mt-0 lg:pl-0">
                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div className="relative">
                    <div className="aspect-[2/3] w-full ">
                      <Image
                        fill
                        className="rounded-xl bg-primary-900/5 object-cover shadow-lg"
                        src={instapost1a}
                        alt=""
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-primary-900/10" />
                  </div>
                </div>
                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div className=" relative">
                    <div className="aspect-[2/3] w-full ">
                      <Image
                        fill
                        className="rounded-xl bg-primary-900/5 object-cover shadow-lg"
                        src={instapost1a}
                        alt=""
                      />
                    </div>

                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-primary-900/10" />
                  </div>
                  <div className="relative">
                    <div className="aspect-[2/3] w-full ">
                      <Image
                        fill
                        className="rounded-xl bg-primary-900/5 object-cover shadow-lg"
                        src={instapost1a}
                        alt=""
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-primary-900/10" />
                  </div>
                </div>
                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div className="relative">
                    <div className="aspect-[2/3] w-full ">
                      <Image
                        fill
                        className="rounded-xl bg-primary-900/5 object-cover shadow-lg"
                        src={instapost1a}
                        alt=""
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-primary-900/10" />
                  </div>
                  <div className="relative">
                    <div className="aspect-[2/3] w-full ">
                      <Image
                        fill
                        className="rounded-xl bg-primary-900/5 object-cover shadow-lg"
                        src={instapost1a}
                        alt=""
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-primary-900/10" />
                  </div>
                </div>
              </div>
              <div className="order-1 w-full lg:order-2">
                <div className="flex gap-4">
                  <a
                    target="_blank"
                    href="https://www.facebook.com/thesquireshopcstat"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg
                      className="h-9 w-9 fill-primary-900 stroke-primary-900 stroke-[5px] "
                      viewBox="0 0 508 508"
                    >
                      <path
                        fill="current-color"
                        d="M329.744 187.804a4.004 4.004 0 0 0-2.952-1.3h-44.984V166.66c0-10.988 7.024-11.84 9.176-11.84h34.444c2.208 0 4-1.792 4-4V98.212a3.998 3.998 0 0 0-3.984-4l-48.82-.196c-51.816 0-70.276 35.844-70.276 69.388v23.104h-23.776c-2.208 0-4 1.792-4 4V254c0 2.208 1.792 4 4 4h27.748v150.76c0 2.208 1.792 4 4 4h59.52c2.208 0 4-1.788 4-4v-35.716c0-2.208-1.792-4-4-4s-4 1.792-4 4v31.716h-51.52V254c0-2.208-1.792-4-4-4h-27.748v-55.488h23.776c2.208 0 4-1.792 4-4v-27.104c0-58.428 51.876-61.388 62.26-61.388l44.82.18v44.624h-30.444c-8.548 0-17.176 6.136-17.176 19.84v23.844c0 2.208 1.792 4 4 4h44.612L317.448 250H273.84c-2.208 0-4 1.792-4 4v51.588c0 2.208 1.792 4 4 4s4-1.792 4-4V258h43.264c2.072 0 3.8-1.58 3.984-3.648l5.688-63.492a3.989 3.989 0 0 0-1.032-3.056z"
                      />
                      <path
                        fill="current-color"
                        d="M378.764 0H129.18C57.952 0 0 57.964 0 129.212v249.576C0 450.036 57.952 508 129.18 508h249.584C450.024 508 508 450.036 508 378.788V129.212C508 57.964 450.024 0 378.764 0zM500 378.788C500 445.624 445.612 500 378.764 500H129.18C62.36 500 8 445.624 8 378.788V129.212C8 62.376 62.36 8 129.18 8h249.584C445.616 8 500 62.376 500 129.212v249.576z"
                      />
                      <path
                        fill="current-color"
                        d="M480.192 253.968c-2.208 0-4 1.792-4 4v112.02c0 57.568-48.632 106.204-106.2 106.204H138.004c-57.564 0-106.196-48.636-106.196-106.204V138c0-57.564 48.632-106.192 106.196-106.188H369.08c2.208 0 4-1.792 4-4s-1.792-4-4-4H138.004c-61.9 0-114.196 52.292-114.196 114.188v231.988c0 61.904 52.296 114.204 114.196 114.204h231.988c61.904 0 114.2-52.3 114.2-114.208V257.968c0-2.208-1.792-4-4-4z"
                      />
                      <path
                        fill="current-color"
                        d="M449.808 58.188c-21.848-21.848-51.272-34.38-80.732-34.38-2.208 0-4 1.792-4 4s1.792 4 4 4c27.356 0 54.72 11.676 75.076 32.036.78.78 1.804 1.172 2.828 1.172s2.048-.392 2.828-1.172a3.996 3.996 0 0 0 0-5.656zM480.192 166.668c-2.208 0-4 1.792-4 4v59.524c0 2.208 1.792 4 4 4s4-1.792 4-4v-59.524c0-2.208-1.792-4-4-4z"
                      />
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/jwrsclothing/"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg
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
                  </a>
                </div>

                <h1 className="mt-10 text-4xl  tracking-tight text-primary-900 ">
                  <Balancer>Join us on Social Media</Balancer>
                </h1>
                <p className="relative mt-6 text-lg leading-8 text-primary-600 sm:max-w-md lg:max-w-none">
                  Follow along with @jwrsclothing
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
