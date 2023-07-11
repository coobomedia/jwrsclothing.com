"use client"

import Image from "next/image"

import { cn } from "@/lib/utils"
import betenly from "../../../public/images/betenly-color.png"
import byron from "../../../public/images/byron-color.png"
import donahue from "../../../public/images/donahue-color.png"
import dressShirts from "../../../public/images/dress-shirts.jpg"
import lbm from "../../../public/images/lbm-color.svg"
import stantt from "../../../public/images/stantt-color.svg"
import stenstroms from "../../../public/images/stenstroms-color.png"
import sportCoats from "../../../public/images/suits-and-sports-coats.jpeg"

const features = [
  {
    id: "suits-and-sports-coats",
    name: "Suits & Sports Coats",
    description:
      "Made from the finest materials, our Sports Coat embodies the perfect balance of durability, breathability, and elegance. The carefully selected fabrics ensure a comfortable fit, allowing you to move with ease without compromising on style",
    imageSrc: sportCoats,
    brands: [
      {
        name: "Byron",
        imageSrc: byron,
      },
      {
        name: "LBM 1911",
        imageSrc: lbm,
      },
      {
        name: "Bentenly",
        imageSrc: betenly,
      },
    ],
    imageAlt:
      "White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.",
  },
  {
    id: "dress-shirts",
    name: "Dress Shirts",
    description:
      "Made from the finest materials, our Sports Coat embodies the perfect balance of durability, breathability, and elegance. The carefully selected fabrics ensure a comfortable fit, allowing you to move with ease without compromising on style.",
    imageSrc: dressShirts,
    brands: [
      {
        name: "Stenstroms",
        imageSrc: stenstroms,
      },
      {
        name: "Stantt",
        imageSrc: stantt,
      },
      {
        name: "Donahue",
        imageSrc: donahue,
      },
    ],
    imageAlt: "Detail of zipper pull with tan leather and silver rivet.",
  },
  // {
  //   id: "sports-shirts",
  //   name: "Sports Shirts",
  //   description:
  //     "Made from the finest materials, our Sports Coat embodies the perfect balance of durability, breathability, and elegance. The carefully selected fabrics ensure a comfortable fit, allowing you to move with ease without compromising on style. Whether ",
  //   imageSrc: sportCoats.src,
  //   brands: [
  //     {
  //       name: "Stenstroms",
  //       imageSrc: "https://tailwindui.com/img/logos/tuple-logo-gray-900.svg",
  //     },
  //     {
  //       name: "Stenstroms",
  //       imageSrc: "https://tailwindui.com/img/logos/reform-logo-gray-900.svg",
  //     },
  //   ],
  //   imageAlt:
  //     "White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.",
  // },
  // {
  //   id: "polos",
  //   name: "Polos",
  //   description:
  //     "We design every detail with the best materials and finishes. This laptop sleeve features durable canvas with double-stitched construction, a felt interior, and a high quality zipper that hold up to daily use.",
  //   imageSrc:
  //     "https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-02.jpg",
  //   brands: [
  //     {
  //       name: "Stenstroms",
  //       imageSrc: "https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg",
  //     },
  //     {
  //       name: "Stenstroms",
  //       imageSrc: "https://tailwindui.com/img/logos/laravel-logo-gray-900.svg",
  //     },
  //   ],
  //   imageAlt: "Detail of zipper pull with tan leather and silver rivet.",
  // },
]

function ClothingPage() {
  return (
    <main className="container mx-auto py-10 sm:py-16">
      {/* Product info */}
      {/* <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl  tracking-tight text-primary-900 sm:text-4xl">
          Clothing
        </h2>
        <p className="mt-4 font-display text-primary-500">
          Our store is a haven for those seeking refined and elevated clothing
          options. From tailored suits and crisp dress shirts to casual
          essentials and on-trend accessories, we provide a comprehensive range
          of options to suit every occasion and personal style.
        </p>
      </div> */}

      <div className="my-16 space-y-24">
        {features.map((feature, featureIdx) => (
          <div
            id={feature.id}
            key={feature.name}
            className="flex  flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-16"
          >
            <div
              className={cn(
                featureIdx % 2 === 0
                  ? "lg:col-start-1"
                  : "lg:col-start-8 xl:col-start-9",
                " mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4"
              )}
            >
              <h3 className="text-3xl font-medium text-primary-900">
                {feature.name}
              </h3>
              <p className="mt-2 font-display text-sm text-primary-500">
                {feature.description}
              </p>
              <div className="mx-auto mt-8 grid w-full max-w-xl grid-cols-3 items-center gap-4 lg:mx-0 lg:max-w-none ">
                {feature.brands.map((brand, index) => (
                  <div
                    key={index}
                    className="aspect-h-9 aspect-w-16 relative max-w-[6rem]"
                  >
                    <Image
                      className="object-contain object-left grayscale"
                      src={brand.imageSrc}
                      alt={brand.name}
                      fill
                    />
                  </div>
                ))}
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
              <div className="aspect-h-9 aspect-w-16  overflow-hidden rounded-lg bg-primary-100">
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

export default ClothingPage
