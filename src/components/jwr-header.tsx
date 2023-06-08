"use client"

import { Fragment, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Dialog, Popover, Tab, Transition } from "@headlessui/react"
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"

import { cn } from "@/lib/utils"
import featuredPromotion from "../../public/images/featured-promotion.jpeg"
import logo from "../../public/images/jwr-logo.png"
import newArrival from "../../public/images/new-arrival-feature.webp"

console.log("logo", logo)

const navigation = {
  categories: [
    {
      id: "store",
      name: "Store",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc: newArrival.src,
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in accent-900 and bone.",
        },
        {
          name: "Featured Promotion",
          href: "#",
          imageSrc: featuredPromotion.src,
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and accent-900 tees.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Sports Coats", href: "/clothing/sports-coats" },
            { name: "Pants", href: "#" },
            { name: "Dress Shirts", href: "#" },
            { name: "Sports Shirts", href: "#" },
            { name: "Polos", href: "#" },
            { name: "Jeans", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Ties", href: "#" },
            { name: "Shoes", href: "#" },
            { name: "Pocket Squares", href: "#" },
            { name: "Money Clips", href: "#" },
            { name: "Belts", href: "#" },
            { name: "SAXX", href: "#" },
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
    // {
    //   id: "men",
    //   name: "Men",
    //   featured: [
    //     {
    //       name: "New Arrivals",
    //       href: "#",
    //       imageSrc:
    //         "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
    //       imageAlt:
    //         "Drawstring top with elastic loop closure and textured interior padding.",
    //     },
    //     {
    //       name: "Artwork Tees",
    //       href: "#",
    //       imageSrc:
    //         "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
    //       imageAlt:
    //         "Three shirts in accent, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
    //     },
    //   ],
    //   sections: [
    //     {
    //       id: "clothing",
    //       name: "Clothing",
    //       items: [
    //         { name: "Tops", href: "#" },
    //         { name: "Pants", href: "#" },
    //         { name: "Sweaters", href: "#" },
    //         { name: "T-Shirts", href: "#" },
    //         { name: "Jackets", href: "#" },
    //         { name: "Activewear", href: "#" },
    //         { name: "Browse All", href: "#" },
    //       ],
    //     },
    //     {
    //       id: "accessories",
    //       name: "Accessories",
    //       items: [
    //         { name: "Watches", href: "#" },
    //         { name: "Wallets", href: "#" },
    //         { name: "Bags", href: "#" },
    //         { name: "Sunglasses", href: "#" },
    //         { name: "Hats", href: "#" },
    //         { name: "Belts", href: "#" },
    //       ],
    //     },
    //     {
    //       id: "brands",
    //       name: "Brands",
    //       items: [
    //         { name: "Re-Arranged", href: "#" },
    //         { name: "Counterfeit", href: "#" },
    //         { name: "Full Nelson", href: "#" },
    //         { name: "My Way", href: "#" },
    //       ],
    //     },
    //   ],
    // },
  ],
  pages: [
    { name: "Custom", href: "/#custom" },
    { name: "About", href: "/about" },
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
      className={cn(
        position,
        className,
        "top-0 isolate z-20 w-full bg-white shadow "
      )}
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
            <div className="bg-opacity/25 fixed inset-0 bg-accent-900" />
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
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-accent-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-accent-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            cn(
                              selected
                                ? "border-primary-800 text-primary-800"
                                : "border-transparent text-accent-900",
                              "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="space-y-6 px-4 pb-8 pt-10"
                      >
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item) => (
                            <div
                              key={item.name}
                              className="group relative text-sm"
                            >
                              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-accent-100 group-hover:opacity-75">
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="object-cover object-center"
                                />
                              </div>
                              <Link
                                href={item.href}
                                className="mt-6 block font-medium text-accent-900"
                              >
                                <span
                                  className="absolute inset-0 z-10"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </Link>
                              <p aria-hidden="true" className="mt-1">
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p
                              id={`${category.id}-${section.id}-heading-mobile`}
                              className="font-display font-medium tracking-wider text-accent-900"
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
                                    className="-m-2 block p-2 text-accent-500"
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

                <div className="space-y-4 border-t border-accent-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <Link
                        href={page.href}
                        className="-m-2 block p-2 font-display font-medium tracking-wider text-accent-900"
                      >
                        {page.name}
                      </Link>
                    </div>
                  ))}
                </div>

                <div className="border-t border-accent-200 px-4 py-6">
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
        {/* <p className="flex h-10 items-center justify-end bg-primary-950 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          979.704.5469
          <span className="mx-2 h-4 w-px bg-gray-200" aria-hidden="true" />
          info@jwrsclothing.com
        </p> */}

        <nav aria-label="Top" className="mx-auto max-w-7xl p-4 sm:px-6 lg:px-8">
          <div className="">
            <div className="flex  items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-accent-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
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
                                  ? "border-primary-950 text-primary-950"
                                  : "border-transparent text-accent-700 hover:text-accent-800",
                                "relative z-10 -mb-px flex items-center border-b-2 pt-px font-display text-xs font-medium uppercase tracking-wider !outline-0 transition-colors duration-200 ease-out"
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
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-accent-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div
                                className="absolute inset-0 top-1/2 bg-white shadow"
                                aria-hidden="true"
                              />

                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-10">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div
                                          key={item.name}
                                          className="group relative text-base sm:text-sm"
                                        >
                                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-accent-100 group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center"
                                            />
                                          </div>
                                          <Link
                                            href={item.href}
                                            className="mt-6 block font-display font-medium uppercase tracking-wider text-accent-900"
                                          >
                                            <span
                                              className="absolute inset-0 z-10"
                                              aria-hidden="true"
                                            />
                                            {item.name}
                                          </Link>
                                          <p
                                            aria-hidden="true"
                                            className="mt-1"
                                          >
                                            Shop now
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p
                                            id={`${section.name}-heading`}
                                            className="font-display text-xs font-medium uppercase tracking-wider text-accent-900"
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
                                                <Link
                                                  href={item.href}
                                                  className="hover:text-accent-800"
                                                >
                                                  {item.name}
                                                </Link>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
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
                      className="flex items-center font-display text-xs font-medium uppercase tracking-wider text-accent-700 hover:text-accent-800"
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </Popover.Group>
              {/* Logo */}
              <Link
                href="/"
                className="ml-auto  text-3xl   leading-none text-accent-900  lg:text-4xl  "
              >
                {/* JwR's */}
                <svg className="h-20 w-auto" viewBox="0 0 813 813">
                  <path d="M379 1.1c-63 4.3-125.2 23.5-179 55.4C110.9 109.3 45 194.1 16.4 293-14.2 398.4-.5 512.8 53.9 607.8 116.8 717.4 227.6 792 352 808.4c37.8 5 78.3 4.7 115-.9 150.1-22.8 275.1-127.8 323.7-272 29.2-86.7 28.1-181.5-3.3-268.2-14.5-40.3-37.1-80.2-65-115.3-13.7-17.2-45-48.5-62.4-62.4C579.7 25.5 480.5-5.7 379 1.1zm69.5 51.3c44.2 5.8 81.5 17.2 119.8 36.8 35.4 18.2 66 40.8 93.2 69 51.8 53.5 85.6 121.3 96.5 193.7 5.9 39.3 5.2 81.7-2.1 120.6-16.2 86.9-65.2 165.2-137.1 219.3-42.9 32.2-95.1 55-148 64.7-39.9 7.2-86.1 7.4-126.2.5-101.3-17.4-191.9-80-244.7-169.2-62.4-105.2-66.4-236.1-10.5-344.3 17.6-34.2 38.5-62.6 66-90 60.7-60.4 139.2-96.1 226.1-102.9 11.3-.9 55.5.3 67 1.8z" />
                  <path d="M371.5 110.6c-93.3 11.2-175.3 65.1-223 146.7-17.7 30.4-30.9 68.2-36.7 105.2-3 19.1-3.3 65.5-.5 84 8.1 54.2 28.2 101.2 61.7 144.5 9.5 12.3 34.7 37.4 47.7 47.8 69.6 55 158.5 76.4 244.9 58.8C539 682.7 604.5 640 648.7 578.2c32.4-45.3 51.7-101.3 54.2-157.1 2.2-51.9-7-97.9-28.4-142.8-15.1-31.7-32.3-56-57.5-81.4-24.4-24.6-49.3-42.6-79.5-57.4-32.8-16.1-67-26-102.4-29.5-14.4-1.4-49.2-1.1-63.6.6zm72.3 31.3c76.9 11.5 143.1 53.6 185.5 118.1 21.1 32.2 34.8 68.1 40.9 107.5 2.6 16.7 3.1 54.7 1 70.5-2.9 21.3-7.9 42.1-14.8 60.9-4.6 12.5-16.7 37.2-23.9 48.6-42.5 67.7-111.9 112.1-193 123.7-12 1.7-55.2 1.7-67 0-32.1-4.6-56.7-12.2-85-26.2-79-39-132-112.4-145.7-201.5-3-20-3-55 0-75 9-58.4 33.9-108.6 74.3-149.6 45-45.6 102.2-72.5 167.6-78.9 13.6-1.3 44.9-.3 60.1 1.9z" />
                  <path d="M393 168.6c-49.9 3.3-95.1 20.4-133.8 50.7-49 38.4-81 95.2-89.3 158.7-1.8 13.9-1.5 44 .5 59.3 10.8 80.1 60.8 148.8 134.1 183.8 48 22.9 104.4 28.8 157 16.3 68.3-16.3 126.4-62.7 157.4-125.8 8.6-17.4 13.3-30.1 17.7-47.6 8.1-32.9 9.4-64.6 3.8-98C628 292.1 579 226.2 512 193.3c-32.4-15.9-63.1-23.5-99-24.6-8-.3-17-.3-20-.1zm-112 163c0 2.7-.4 3.2-3.1 3.8-1.7.3-4.1.6-5.3.6-5.3.1-5.1-1.9-5.6 52.2-.6 47.6-.7 50.6-2.7 56.5-2.8 8.4-7.4 15.3-14 21.2-9.1 8.1-19.9 12.4-26.7 10.7-2.5-.6-2.6-.9-2.6-8.1 0-4 .4-7.6.8-7.9.5-.3 2.4.6 4.4 2 8.5 6.1 15.1 3.4 16.3-6.7.9-7.8.2-117.6-.8-118.6-.5-.4-3.9-1-7.5-1.3l-6.7-.5-.3-3.5-.3-3.5H281v3.1zm210.8-1.7c10.4 3.5 15.8 12.1 15 23.8-.8 11.4-7 20-18.4 25.8-3.6 1.8-5.3 3.3-5 4.1.3.8 7.3 11.5 15.5 23.8 14.9 22.2 19.5 27.6 23.2 27.6 1.5 0 1.9.7 1.9 3.3v3.3l-15.1-.2-15.1-.3-13.7-22.7c-7.6-12.5-15.9-25.4-18.4-28.6-2.6-3.2-4.7-6.4-4.7-7.2 0-.9 2-1.5 6.3-1.8 7.8-.7 11.9-2.7 15.7-7.9 6.5-9.1 6.2-22.5-.8-29.8-4.5-4.8-9.6-6.3-19.5-5.9l-7.2.3-.2 45.5c-.2 35.1 0 46.1 1 48 1 2.1 2.1 2.6 6.7 3 5.4.5 5.5.5 5.8 4l.3 3.5H414V434h5.5c4.6 0 5.6-.3 6.7-2.3 1.9-3.2 1.9-91.7 0-93.9-.7-.9-3.7-1.9-6.7-2.3-5.4-.6-5.5-.7-5.5-3.8v-3.2h36.8c28.8 0 37.6.3 41 1.4zm54.7-.9c.6 1-3.7 9.7-11.7 23.2-3.2 5.4-4.7 6.9-8 8.3-2.3.9-4.4 1.2-4.8.8-.5-.4.5-4 2.1-7.8 1.5-3.9 3.6-10.3 4.5-14.3 1.4-6.4 1.9-7.3 4.3-7.8 1.4-.3 4.6-1.2 7.1-1.9 5.8-1.7 5.8-1.7 6.5-.5zm-178.4 49.5c6.5 16.5 12.1 30.6 12.4 31.4.3.8.7 1.2 1 1 1.2-1.2 12.6-49.4 12.3-52.2-.3-3.1-.5-3.2-5-3.5-4.6-.3-4.8-.4-4.8-3.3v-3l14.8.3 14.7.3v2.5c0 2.1-.5 2.6-3.3 2.8-4.4.4-5.4 2.2-10.2 18.7-3.5 12.1-15.6 57.5-17.4 65.8-.6 2.7-.9 2.8-5.8 2.5l-5.2-.3-2.4-6.5c-2-5.2-10.7-27.6-21.4-55l-1-2.5-1.5 2.9c-1.8 3.4-19.9 46.3-23.4 55.3l-2.4 6.3h-10.1l-8.8-40.8c-4.9-22.4-9.5-41.9-10.2-43.5-1.2-2.2-2.1-2.7-4.9-2.7-3.2 0-3.5-.2-3.5-3v-3h40.1l-.3 2.7c-.3 2.5-.8 2.9-4.8 3.3-3.2.4-4.6 1-4.8 2.3-.6 3.1 9.7 53.7 10.9 53.7.3 0 1.7-2.8 3.2-6.3 1.4-3.4 7-16.8 12.5-29.7 5.4-12.9 10.2-24.3 10.5-25.3.5-1.3 1.5-1.7 3.8-1.5 3 .3 3.1.5 15 30.3zm213.1-14 4.8 1.7-.6 9.1c-.7 11.7-.8 11.9-4.1 11.5-2.5-.3-2.9-.8-3.3-4.9-.7-5.6-2.2-7.6-7.5-10-7.2-3.3-17.6-1.5-20.9 3.6-2 3-2 8.4-.1 11.1 1.9 2.8 4.9 3.9 17.5 6.5 15.6 3.1 19.6 5.4 22.8 12.8 5.2 12.3-2.1 28.3-15.5 34.3-9 4-27.3 4-38.1 0-4.1-1.5-4.7-2.1-4.6-4.5 0-1.5.1-6.8.2-11.7l.2-9h7v5.6c0 5 .3 5.9 3.3 8.6 4.4 4.2 8.6 5.8 15.3 5.8 10.1 0 15.4-4.4 15.4-12.9 0-3.1-.6-4.4-3-6.4-3.3-2.9-3.3-2.8-15-5.6-11.4-2.6-15.1-4.3-18.8-8.5-11.1-12.7-3.7-32.2 14.4-38 6.4-2.1 23.9-1.5 30.6.9zM303.8 453c1.7 1.1 3.2 2.4 3.2 2.9 0 1.8-3.2 2-6.2.5-4.8-2.5-11.5-1.4-15 2.5-9.6 10.7 2.5 26 15.4 19.3 2.6-1.4 4-1.6 4.7-.9 1.8 1.8 1.3 2.6-3.1 4.8-11.3 5.8-24.8-2-24.8-14.4 0-6.2 3-11.7 7.9-14.5 4.8-2.9 13.4-2.9 17.9-.2zm16.2 12.5V480h9.1c8.1 0 9 .2 8.7 1.7-.3 1.6-1.6 1.8-11.3 1.8h-11l-.3-15c-.1-8.2 0-15.5.2-16.2.3-.7 1.5-1.3 2.6-1.3 1.9 0 2 .6 2 14.5zm49.7-11.9c5.2 3.9 6.8 7.1 6.8 13.7 0 4.9-.5 6.9-2.3 9.5-4.6 6.4-14.1 9-21.5 5.8-12.5-5.3-13.6-23.2-1.8-29.7 4.8-2.6 14.9-2.2 18.8.7zm39.1-.4c.3 1.4-.6 1.7-5.5 2l-5.8.3-.3 14.2c-.2 13.5-.4 14.3-2.2 14.3-1.9 0-2-.7-2-14.5V455h-5.5c-4.9 0-5.5-.2-5.5-2 0-2 .5-2 13.2-1.8 11.6.3 13.3.5 13.6 2zM421 458v7h19v-7c0-6.3.2-7 2-7 1.9 0 2 .7 2 16.5s-.1 16.5-2 16.5c-1.8 0-2-.7-2-7.5V469h-19v7.6c0 7.2-.1 7.5-2.2 7.2-2.3-.3-2.3-.6-2.6-16.6L416 451h2.5c2.4 0 2.5.2 2.5 7zm38 9.6v16.5l-2.2-.3c-2.3-.3-2.3-.6-2.6-15.3-.1-8.2 0-15.5.2-16.2.3-.7 1.5-1.3 2.6-1.3 1.9 0 2 .6 2 16.6zm23.2-5.1c5 6.3 9.5 11.5 9.9 11.5.3 0 .6-1.7.6-3.8-.1-16.3.3-19.2 2.3-19.2 1.9 0 2 .7 2 16.5 0 15-.2 16.5-1.7 16.5-1.1 0-5.7-4.9-11.3-12l-9.5-12-.3 12-.3 12H469v-16.5c0-15.8.1-16.5 2-16.5 1.3 0 5 3.8 11.2 11.5zm48.6-9.5c1.7 1.1 3.2 2.4 3.2 3 0 1.9-2.9 2.2-5.2.6-1.2-.9-4.1-1.6-6.4-1.6-8.9 0-15.3 8.6-12.3 16.5.8 2.1 2.6 4.7 4 5.7 3.2 2.4 9.5 3.3 13.2 1.9 2.5-1 2.7-1.5 2.7-6.6 0-4.8.2-5.5 2-5.5s2 .7 2 6.5c0 5.9-.2 6.6-2.7 8.2-1.9 1.3-4.7 1.8-9.4 1.8-7.6 0-10.6-1.6-14.7-7.6-2-2.8-2.3-4.4-2-9.4.4-6.9 2.4-10.2 7.8-13.4 4.7-2.8 13.3-2.8 17.8-.1z" />
                  <path d="M351.4 458.3c-6.4 5.8-5.5 15.2 1.9 19.7 3.9 2.4 7.8 2.5 12.3.4 8.5-4.1 8.7-17.6.3-22-5-2.5-10.5-1.8-14.5 1.9z" />
                </svg>
                {/* <span className="sr-only">Your Company</span>
                <Image className="h-8 w-auto" src={logo} alt="" /> */}
              </Link>
              {/* <div className="ml-4 flex lg:ml-10">
                <Link href="#">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=primary&shade=600"
                    alt=""
                  />
                </Link>
              </div> */}

              <div className="hidden flex-1 items-center justify-end lg:flex">
                {/* <Link
                    href="#"
                    className="text-sm font-medium text-accent-700 hover:text-accent-800"
                  >
                    Sign in
                  </Link>
                  <span className="h-6 w-px bg-accent-200" aria-hidden="true" />
                  <Link
                    href="#"
                    className="text-sm font-medium text-accent-700 hover:text-accent-800"
                  >
                    Create account
                  </Link> */}
                <p className="text-primary flex h-10 items-center  justify-end px-4 text-sm font-medium sm:px-6 lg:px-8">
                  979.704.5469
                  <span
                    className="mx-2 h-4 w-px bg-gray-200"
                    aria-hidden="true"
                  />
                  info@jwrsclothing.com
                </p>
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
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
