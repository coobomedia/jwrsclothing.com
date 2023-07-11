"use client"

import { useState } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"
import donahue from "../../../public/images/donahue-color.png"
import gator from "../../../public/images/gator-cigar.jpg"
import money from "../../../public/images/hero-5.jpeg"
import shoes from "../../../public/images/shoes.jpg"
import ties from "../../../public/images/ties.jpg"

const product = {
  name: "Accessories",
  images: [
    {
      src: ties.src,
      alt: "Two each of primary, white, and black shirts laying flat.",
    },
    {
      src: gator.src,
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: money.src,
      alt: "Model wearing plain white basic tee.",
    },
    {
      src: shoes.src,
      alt: "Model wearing plain primary basic tee.",
    },
  ],

  description:
    "Made from the finest materials, our Sports Coat embodies the perfect balance of durability, breathability, and elegance. The carefully selected fabrics ensure a comfortable fit, allowing you to move with ease without compromising on style. Whether you're attending a business meeting or social event, our Sports Coat will effortlessly exude confidence and sophistication.",
}

function BrandsPage() {
  const [open, setOpen] = useState(false)

  return (
    <main className="py-16 lg:py-24">
      {/* Image gallery */}
      {/* Product info */}
      <div className="container mx-auto lg:grid  lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8  ">
        <div className="lg:col-span-2 lg:border-r lg:border-primary-200 lg:pr-8">
          <h1 className="text-4xl   text-primary-900 ">{product.name}</h1>
        </div>

        {/* Options */}
        <div className="mt-4 flex items-center lg:row-span-3 lg:mt-0">
          <div className="relative mx-auto  grid h-1/2 w-full max-w-xl grid-cols-2 place-items-center  items-center gap-y-8   lg:mx-0 lg:max-w-none">
            <Image
              className="z-10 grayscale "
              src={donahue}
              alt="Donahue"
              width={140}
              height={48}
            />
            <Image
              className="z-10 grayscale "
              src={donahue}
              alt="Donahue"
              width={140}
              height={48}
            />
            <Image
              className="z-10 grayscale "
              src={donahue}
              alt="Donahue"
              width={140}
              height={48}
            />
            <Image
              className="z-10 grayscale "
              src={donahue}
              alt="Donahue"
              width={140}
              height={48}
            />
          </div>
        </div>

        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-primary-200 lg:pb-16 lg:pr-8 lg:pt-6">
          {/* Description and details */}
          <div>
            <h3 className="sr-only">Description</h3>

            <div className="space-y-6">
              <p className="font-display text-base text-primary-900">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-16 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
          <img
            src={product.images[0].src}
            alt={product.images[0].alt}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <img
              src={product.images[1].src}
              alt={product.images[1].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <img
              src={product.images[2].src}
              alt={product.images[2].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
          <img
            src={product.images[3].src}
            alt={product.images[3].alt}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </main>
  )
}

export default BrandsPage
