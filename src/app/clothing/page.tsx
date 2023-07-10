"use client"

import { Fragment, useState } from "react"
import Image from "next/image"
import { Dialog, Popover, RadioGroup, Tab, Transition } from "@headlessui/react"
import { ChevronDownIcon, StarIcon } from "@heroicons/react/20/solid"
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"

import { cn } from "@/lib/utils"
import byron from "../../../public/images/3.png"
import sport1 from "../../../public/images/sports-coats-1.jpeg"
import sport2 from "../../../public/images/sports-coats-2.jpeg"
import sport3 from "../../../public/images/sports-coats-3.jpeg"
import sport4 from "../../../public/images/sports-coats-4.jpeg"
import sportCoats from "../../../public/images/sports-coats.jpg"
import stenstroms from "../../../public/images/stenstroms.png"

const product = {
  name: "Suits & Sports Coats",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Store", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: sport1.src,
      alt: "Two each of accent, white, and black shirts laying flat.",
    },
    {
      src: sport2.src,
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: sport3.src,
      alt: "Model wearing plain accent basic tee.",
    },
    {
      src: sport4.src,
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-accent-400" },
    {
      name: "accent",
      class: "bg-accent-200",
      selectedClass: "ring-accent-400",
    },
    { name: "Black", class: "bg-accent-900", selectedClass: "ring-accent-900" },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    "Made from the finest materials, our Sports Coat embodies the perfect balance of durability, breathability, and elegance. The carefully selected fabrics ensure a comfortable fit, allowing you to move with ease without compromising on style. Whether you're attending a business meeting or social event, our Sports Coat will effortlessly exude confidence and sophistication.",
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather accent Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal accent" limited release.',
}

const features = [
  {
    name: "Suits & Sports Coats",
    description:
      "Made from the finest materials, our Sports Coat embodies the perfect balance of durability, breathability, and elegance. The carefully selected fabrics ensure a comfortable fit, allowing you to move with ease without compromising on style. Whether ",
    imageSrc: sportCoats.src,
    brands: [
      {
        name: "Stenstroms",
        imageSrc: "https://tailwindui.com/img/logos/tuple-logo-gray-900.svg",
      },
      {
        name: "Stenstroms",
        imageSrc: "https://tailwindui.com/img/logos/reform-logo-gray-900.svg",
      },
    ],
    imageAlt:
      "White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.",
  },
  {
    name: "Dress Shirts",
    description:
      "We design every detail with the best materials and finishes. This laptop sleeve features durable canvas with double-stitched construction, a felt interior, and a high quality zipper that hold up to daily use.",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-02.jpg",
    brands: [
      {
        name: "Stenstroms",
        imageSrc: "https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg",
      },
      {
        name: "Stenstroms",
        imageSrc: "https://tailwindui.com/img/logos/laravel-logo-gray-900.svg",
      },
    ],
    imageAlt: "Detail of zipper pull with tan leather and silver rivet.",
  },
  {
    name: "Sports Shirts",
    description:
      "Made from the finest materials, our Sports Coat embodies the perfect balance of durability, breathability, and elegance. The carefully selected fabrics ensure a comfortable fit, allowing you to move with ease without compromising on style. Whether ",
    imageSrc: sportCoats.src,
    brands: [
      {
        name: "Stenstroms",
        imageSrc: "https://tailwindui.com/img/logos/tuple-logo-gray-900.svg",
      },
      {
        name: "Stenstroms",
        imageSrc: "https://tailwindui.com/img/logos/reform-logo-gray-900.svg",
      },
    ],
    imageAlt:
      "White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.",
  },
  {
    name: "Polos",
    description:
      "We design every detail with the best materials and finishes. This laptop sleeve features durable canvas with double-stitched construction, a felt interior, and a high quality zipper that hold up to daily use.",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-02.jpg",
    brands: [
      {
        name: "Stenstroms",
        imageSrc: "https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg",
      },
      {
        name: "Stenstroms",
        imageSrc: "https://tailwindui.com/img/logos/laravel-logo-gray-900.svg",
      },
    ],
    imageAlt: "Detail of zipper pull with tan leather and silver rivet.",
  },
]

function SportsCoatsPage() {
  const [open, setOpen] = useState(false)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])

  return (
    <main className="container mx-auto grow py-10 sm:py-16">
      {/* Product info */}
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl  tracking-tight text-gray-900 sm:text-4xl">
          Clothing
        </h2>
        <p className="mt-4 text-gray-500">
          As a digital creative, your laptop or tablet is at the center of your
          work. Keep your device safe with a fabric sleeve that matches in
          quality and looks.
        </p>
      </div>

      <div className="mt-16 space-y-24">
        {features.map((feature, featureIdx) => (
          <div
            key={feature.name}
            className="flex  flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
          >
            <div
              className={cn(
                featureIdx % 2 === 0
                  ? "lg:col-start-1"
                  : "lg:col-start-8 xl:col-start-9",
                " mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4"
              )}
            >
              <h3 className="text-2xl font-medium text-gray-900">
                {feature.name}
              </h3>
              <p className="mt-2 font-display text-sm text-gray-500">
                {feature.description}
              </p>
              <div className="mx-auto mt-8 grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none ">
                {feature.brands.map((brand, index) => (
                  <Image
                    key={index}
                    className="max-h-12 w-full object-contain object-left"
                    src={brand.imageSrc}
                    alt="Tuple"
                    width={105}
                    height={48}
                  />
                ))}
                {/* <img
                  className="max-h-12 w-full object-contain object-left"
                  src="https://tailwindui.com/img/logos/tuple-logo-gray-900.svg"
                  alt="Tuple"
                  width={105}
                  height={48}
                />
                <img
                  className="max-h-12 w-full object-contain object-left"
                  src="https://tailwindui.com/img/logos/reform-logo-gray-900.svg"
                  alt="Reform"
                  width={104}
                  height={48}
                />
                <img
                  className="max-h-12 w-full object-contain object-left"
                  src="https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg"
                  alt="SavvyCal"
                  width={140}
                  height={48}
                />
                <img
                  className="max-h-12 w-full object-contain object-left"
                  src="https://tailwindui.com/img/logos/laravel-logo-gray-900.svg"
                  alt="Laravel"
                  width={136}
                  height={48}
                /> */}
              </div>
            </div>
            <div
              className={cn(
                featureIdx % 2 === 0
                  ? "lg:col-start-6 xl:col-start-5"
                  : "lg:col-start-1",
                "flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8"
              )}
            >
              <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={feature.imageSrc}
                  fill
                  alt={feature.imageAlt}
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default SportsCoatsPage
