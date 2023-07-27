"use client"

import { Fragment, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Dialog, Menu, Popover, Tab, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

import { cn } from "@/lib/utils"
import featuredPromotion from "../../public/images/featured-promotion.jpeg"
import circlelogo from "../../public/images/jwr-circle-logo.jpg"
import newArrival from "../../public/images/new-arrival-feature.webp"
import logo from "../../public/jwr-letters-logo.svg"

const navigation = {
  sections: [
    {
      id: "clothing",
      name: "Clothing",
      items: [
        {
          name: "Suits/Sports Coats",
          href: "/clothing",
        },
        {
          name: "Dress Shirts",
          href: "/clothing#dressShirts",
          anchorID: "dressShirts",
        },
        {
          name: "Dress Pants",
          href: "/clothing#dressPants",
          anchorID: "dressPants",
        },
        {
          name: "Sports Shirts",
          href: "/clothing#sportsShirts",
          anchorID: "sportsShirts",
        },
        { name: "Polos", href: "/clothing#polos", anchorID: "polos" },
        {
          name: "Casual Pants",
          href: "/clothing#casual-pants",
          anchorID: "casual-pants",
        },
        { name: "Jeans", href: "/clothing#jeans", anchorID: "jeans" },
        { name: "Shoes", href: "/clothing#shoes", anchorID: "shoes" },
      ],
    },
    {
      id: "accessories",
      name: "Accessories",
      items: [
        {
          name: "Ties/Pocket Squares",
          href: "/accessories",
        },
        { name: "Belts", href: "/accessories" },
        {
          name: "Socks/Underwear",
          href: "/accessories",
        },
        { name: "Money Clips", href: "/accessories" },
      ],
    },
  ],
  pages: [
    //{ name: "About", href: "/about" },
    // { name: "Custom", href: "/#custom" },
    { name: "Contact", href: "/contact" },
  ],
}

interface SiteHeaderProps {
  position?: "fixed" | "sticky" | "relative"
  className?: string
}

export default function JWRHeader({ position, className }: SiteHeaderProps) {
  const [open, setOpen] = useState(false)

  const route = useRouter()

  return (
    <header
      className={cn(position, className, "top-0  z-20 w-full bg-white shadow ")}
    >
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 lg:hidden"
          onClose={() => setOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-50"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-50"
            leaveTo="opacity-0"
          >
            <div className="bg-opacity/25 fixed inset-0 bg-primary-900" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex justify-between px-4 py-6 ">
                  <Image
                    className="h-14 w-auto lg:h-16"
                    alt="JWR's logo"
                    src={circlelogo}
                  />
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-primary-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon
                      className="h-6 w-6 stroke-primary-900"
                      aria-hidden="true"
                    />
                  </button>
                </div>
                <div className="space-y-4 border-y border-primary-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <Link
                        href={page.href}
                        className="-m-2 block p-2 font-medium tracking-wider text-primary-900"
                      >
                        {page.name}
                      </Link>
                    </div>
                  ))}
                </div>

                {/* Mobile Links */}
                <Tab.Group as="div" className="pt-8">
                  <Tab.Panels as={Fragment}>
                    <Tab.Panel className="space-y-6 px-4 pb-8">
                      {navigation.sections.map((section) => (
                        <div>
                          <p
                            id={`${section.id}-heading-mobile`}
                            className=" font-medium tracking-wider text-primary-900"
                          >
                            {section.name}
                          </p>
                          <ul
                            role="list"
                            aria-labelledby={`${section.id}-heading-mobile`}
                            className="mt-4 flex flex-col space-y-4"
                          >
                            {section.items.map((item) => (
                              <li key={item.name} className="flow-root">
                                <Link
                                  href={item.href}
                                  onClick={() => {
                                    setOpen(false)
                                  }}
                                  className="-m-2 block p-2 text-primary-500"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>

                <div className="border-t border-primary-200 px-4 py-6">
                  <div className="flex gap-4">
                    <a
                      className=""
                      target="_blank"
                      href="https://www.facebook.com/thesquireshopcstat"
                    >
                      <span className="sr-only">Facebook</span>
                      <svg
                        className="h-8 w-8 fill-primary-900 stroke-primary-900 stroke-[5px] "
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
                      className=""
                      target="_blank"
                      href="https://www.instagram.com/jwrsclothing/"
                    >
                      <span className="sr-only">Instagram</span>
                      <svg
                        id="Layer_1"
                        data-name="Layer 1"
                        className="h-8 w-8 fill-primary-900"
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
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <div className="relative bg-white">
        <nav aria-label="Top" className="container mx-auto py-4">
          <div className="">
            <div className="flex items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-primary-400 lg:hidden"
                onClick={() => {
                  setOpen(true)
                }}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon
                  className="h-6 w-6 stroke-primary-900 "
                  aria-hidden="true"
                />
              </button>

              {/* Flyout menus */}

              <Popover.Group className="hidden lg:block lg:flex-1 lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.sections.map((section) => (
                    <Popover className="flex">
                      <div className="relative flex">
                        <Popover.Button
                          className={cn(
                            open
                              ? " text-primary-950"
                              : " text-primary-700 hover:text-primary-800",
                            "relative z-10 -mb-px flex items-center  pt-px  text-sm font-medium  tracking-wider !outline-0 transition-colors duration-200 ease-out"
                          )}
                        >
                          {section.name}
                          <ChevronDownIcon
                            className="h-5 w-5 flex-none text-gray-400"
                            aria-hidden="true"
                          />
                        </Popover.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute top-full z-10 w-56 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5">
                          {section.items.map((item) => (
                            // <Link
                            //   key={item.name}
                            //   href={item.href}
                            //   scroll={false}
                            //   className="block rounded-lg px-3 py-2 text-sm leading-6 text-gray-900 hover:bg-gray-50"
                            // >
                            //   {item.name}
                            // </Link>
                            <a
                              onClick={() => {
                                route.push(item.href)
                              }}
                              key={item.name}
                              className="block cursor-pointer rounded-lg px-3 py-2 text-sm leading-6 text-gray-900 hover:bg-gray-50"
                            >
                              {item.name}
                            </a>
                          ))}
                        </Popover.Panel>
                      </Transition>
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <Link
                      key={page.name}
                      href={page.href}
                      scroll={false}
                      className="flex items-center text-sm font-medium  tracking-wider text-primary-700 hover:text-primary-800"
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </Popover.Group>

              {/* Logo */}
              <Link href="/" scroll={true} className="ml-auto">
                <Image
                  className="h-14 w-auto lg:h-20"
                  alt="JWR's logo"
                  src={circlelogo}
                />
              </Link>

              <div className="hidden flex-1 items-center justify-end lg:flex">
                <p className="text-primary  flex  items-center justify-end  text-sm font-medium  ">
                  979.704.5469
                  <span
                    className="mx-2 h-4 w-px bg-gray-200"
                    aria-hidden="true"
                  />
                  info@jwrsclothing.com
                </p>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
