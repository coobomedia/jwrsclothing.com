"use client"

import { useState } from "react"
import Image from "next/image"
import { Balancer } from "react-wrap-balancer"

import { cn } from "@/lib/utils"
import ag from "../../../public/images/ag.png"
import payne from "../../../public/images/alan-payne.jpg"
import betenly from "../../../public/images/betenly-color.png"
import byron from "../../../public/images/byron-color.png"
import calder from "../../../public/images/calder.jpeg"
import donahue from "../../../public/images/donahue-color.png"
import armah from "../../../public/images/edward-armah.png"
import berg from "../../../public/images/emanuel-berg.png"
import jm from "../../../public/images/j-m.png"
import johnnie from "../../../public/images/johnnie-o.jpg"
import lbm from "../../../public/images/lbm-color.svg"
import lu from "../../../public/images/lu.jpg"
import mclip from "../../../public/images/mclip.png"
import meyer from "../../../public/images/meyer.jpg"
import peter from "../../../public/images/peter-millar.png"
import riomar from "../../../public/images/riomar.webp"
import saxx from "../../../public/images/saxx.jpeg"
import sb from "../../../public/images/sb.png"
import stantt from "../../../public/images/stantt-color.svg"
import stenstroms from "../../../public/images/stenstroms-color.png"
import torino from "../../../public/images/torino.webp"
import travis from "../../../public/images/travis-mathew.jpeg"

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
    {
      alt: "Alan Payne",
      imageSrc: payne,
    },
    {
      alt: "Riomar",
      imageSrc: riomar,
    },
    {
      alt: "AG",
      imageSrc: ag,
    },
    {
      alt: "Calder",
      imageSrc: calder,
    },
    {
      alt: "Johnnie-O",
      imageSrc: johnnie,
    },
    {
      alt: "Peter Millar",
      imageSrc: peter,
    },
    {
      alt: "Travis Mathew",
      imageSrc: travis,
    },
    {
      alt: "Emanuel Berg",
      imageSrc: berg,
    },
    {
      alt: "Meyer",
      imageSrc: meyer,
    },
    {
      alt: "Edward Armah",
      imageSrc: armah,
    },
    {
      alt: "Johnston & Murphy",
      imageSrc: jm,
    },
    {
      alt: "Torino Leather Company",
      imageSrc: torino,
    },
    {
      alt: "Smathers & Branson",
      imageSrc: sb,
    },
    {
      alt: "Lorenzo Uomo",
      imageSrc: lu,
    },
    {
      alt: "SAXX",
      imageSrc: saxx,
    },
    {
      alt: "M-Clip",
      imageSrc: mclip,
    },
  ],

  description:
    "Here at JwR’s Clothing, we take pride in the collection of excellent brands and their pristinely crafted garments we are able to curate for our customers. Each of the brands below carry an exquisite variety that represents the finest and trendiest of upscale men’s fashion.",
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
      <div className="container mx-auto bg-white py-16 sm:py-24">
        <div className=" grid grid-cols-2 gap-16 overflow-hidden  md:grid-cols-5">
          {brands.images.map((brand, index) => (
            <div key={index} className="">
              <Image
                className="max-h-12 w-full object-contain  grayscale"
                src={brand.imageSrc}
                alt="Transistor"
                width={158}
                height={48}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default BrandsPage
