"use client"

import { useState } from "react"
import Image from "next/image"
import { Balancer } from "react-wrap-balancer"

import { cn } from "@/lib/utils"
import betenly from "../../../public/images/betenly-color.png"
import byron from "../../../public/images/byron-color.png"
import donahue from "../../../public/images/donahue-color.png"
import lbm from "../../../public/images/lbm-color.svg"
import stantt from "../../../public/images/stantt-color.svg"
import stenstroms from "../../../public/images/stenstroms-color.png"

const brands = {
  name: "Brands",
  images: [
    {
      alt: "Byron",
      imageSrc: byron,
    },
    {
      alt: "LBM 1911",
      imageSrc: lbm,
    },
    {
      alt: "Bentenly",
      imageSrc: betenly,
    },
    {
      alt: "Donahue",
      imageSrc: donahue,
    },
    {
      alt: "Stantt",
      imageSrc: stantt,
    },
    {
      alt: "Stenstroms",
      imageSrc: stenstroms,
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
      <div className="container mx-auto text-center ">
        <h1 className="text-4xl text-primary-900 ">{brands.name}</h1>
        <p className="mx-auto mt-6 max-w-5xl font-display text-base text-primary-900">
          <Balancer>{brands.description}</Balancer>
        </p>

        {/* Options */}
      </div>
      <div className="bg-white p-16 sm:py-24">
        <div className="container mx-auto">
          <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-4">
            {brands.images.map((brand, index) => (
              <div key={index} className="bg-gray-400/5 p-8 sm:p-10">
                <Image
                  className="max-h-12 w-full object-contain"
                  src={brand.imageSrc}
                  alt="Transistor"
                  width={158}
                  height={48}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default BrandsPage
