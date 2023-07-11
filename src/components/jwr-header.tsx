"use client"

import { Fragment, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Dialog, Popover, Tab, Transition } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

import { cn } from "@/lib/utils"
import featuredPromotion from "../../public/images/featured-promotion.jpeg"
import circlelogo from "../../public/images/jwr-logo.png"
import newArrival from "../../public/images/new-arrival-feature.webp"
import logo from "../../public/jwr-letters-logo.svg"

const navigation = {
  categories: [
    {
      id: "store",
      name: "Store",
      featured: [
        {
          name: "New Arrivals",
          href: "/contact",
          imageSrc: newArrival.src,
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in primary-900 and bone.",
        },
        {
          name: "Featured Promotion",
          href: "/contact",
          imageSrc: featuredPromotion.src,
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and primary-900 tees.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            {
              name: "Suits/Sports Coats",
              href: "/clothing#suits-and-sports-coats",
            },
            { name: "Dress Shirts", href: "/clothing#dress-shirts" },
            { name: "Dress Pants", href: "/clothing#dress-pants" },
            { name: "Sports Shirts", href: "/clothing" },
            { name: "Polos", href: "/clothing#polos" },
            { name: "Casual Pants", href: "/clothing#casual-pants" },
            { name: "Jeans", href: "/clothing#jeans" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            {
              name: "Ties/Pocket Squares",
              href: "/accessories/ties-and-pocket-squares",
            },
            { name: "Shoes", href: "/accessories/shoes" },
            { name: "Belts", href: "/accessories/belts" },
            {
              name: "Socks/Underwear",
              href: "/accessories/socks-and-underwear",
            },
            { name: "Money Clips", href: "/accessories/money-clips" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Byron", href: "#" },
            { name: "L.B.M", href: "#" },
            { name: "Stenstroms", href: "#" },
            { name: "Stantt", href: "#" },
            { name: "Alan Payne", href: "#" },
            { name: "Riomar", href: "#" },
            { name: "AG", href: "#" },
            { name: "Emanuel Berg", href: "#" },
            { name: "David Donahue", href: "#" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "About", href: "/about" },
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

  return (
    <header
      className={cn(position, className, "top-0  z-20 w-full bg-white shadow ")}
    >
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
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
                    className="h-10 w-auto lg:h-16"
                    alt="JWR's logo"
                    src={logo}
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

                {/* Links */}
                <Tab.Group as="div" className="pt-8">
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="space-y-6 px-4 pb-8"
                      >
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p
                              id={`${category.id}-${section.id}-heading-mobile`}
                              className=" font-medium tracking-wider text-primary-900"
                            >
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-4 flex flex-col space-y-4"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <Link
                                    href={item.href}
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
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="border-t border-primary-200 px-4 py-6">
                  <Link
                    href="#"
                    className=" text-primary-950 hover:text-primary-900"
                  >
                    <span className="sr-only">Instagram</span>

                    <svg
                      className="h-6 w-6"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <div className="relative bg-white">
        <nav aria-label="Top" className="container mx-auto py-4">
          <div className="">
            <div className="flex  items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-primary-400 lg:hidden"
                onClick={() => setOpen(true)}
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
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={cn(
                                open
                                  ? " text-primary-950"
                                  : " text-primary-700 hover:text-primary-800",
                                "relative z-10 -mb-px flex items-center  pt-px  text-sm font-medium  tracking-wider !outline-0 transition-colors duration-200 ease-out"
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-primary-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div
                                className="absolute inset-0 top-1/2 bg-white shadow"
                                aria-hidden="true"
                              />
                              <div className="relative bg-white">
                                <div className="container mx-auto">
                                  <div className="grid grid-cols-6 gap-x-8 gap-y-10 pb-10 pt-4">
                                    <div className="col-span-5">
                                      <div className="grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                        {category.sections.map((section) => (
                                          <div key={section.name}>
                                            <p
                                              id={`${section.name}-heading`}
                                              className="font-display text-xs font-medium uppercase tracking-wider text-primary-900"
                                            >
                                              {section.name}
                                            </p>
                                            <ul
                                              role="list"
                                              aria-labelledby={`${section.name}-heading`}
                                              className="mt-6 space-y-6 sm:mt-4 sm:space-y-2"
                                            >
                                              {section.items.map((item) => (
                                                <li
                                                  key={item.name}
                                                  className="flex"
                                                >
                                                  <Popover.Button
                                                    as={Link}
                                                    href={item.href}
                                                    className="hover:text-primary-800"
                                                  >
                                                    {item.name}
                                                  </Popover.Button>
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                    <div className="col-span-1">
                                      <Image
                                        alt="JWR's logo"
                                        width={200}
                                        height={200}
                                        src={circlelogo}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <Link
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium  tracking-wider text-primary-700 hover:text-primary-800"
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </Popover.Group>

              {/* Logo */}
              <Link href="/" className="ml-auto">
                <Image
                  className="h-10 w-auto lg:h-16"
                  alt="JWR's logo"
                  src={logo}
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
