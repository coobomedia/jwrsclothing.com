"use client"

import { useEffect } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"
import ag from "../../../public/images/ag.png"
import alanPayne from "../../../public/images/alan-payne.jpg"
import betenly from "../../../public/images/betenly-color.png"
import byron from "../../../public/images/byron-logo.jpg"
import casualPants from "../../../public/images/casual-pants.jpeg"
import calder from "../../../public/images/cc-logo.jpg"
import donahue from "../../../public/images/donahue-color.png"
import dressPants from "../../../public/images/dress-pants.jpg"
import dressShirts from "../../../public/images/dress-shirts.jpg"
import berg from "../../../public/images/emanuel-berg.png"
import jm from "../../../public/images/j-m.png"
import jeans from "../../../public/images/jeans.jpg"
import johnnie from "../../../public/images/johnnie-o.jpg"
import lbm from "../../../public/images/lbm-color.svg"
import martinDingman from "../../../public/images/martin-dingman.jpg"
import meyer from "../../../public/images/meyer.jpg"
import peter from "../../../public/images/peter-millar.webp"
import polos from "../../../public/images/polos.jpg"
import rioMar from "../../../public/images/riomar.webp"
import sb from "../../../public/images/sb.png"
import shoes from "../../../public/images/shoes-3.jpg"
import sportsShirts from "../../../public/images/sports-shirts-3.jpg"
import stantt from "../../../public/images/stantt-color.svg"
import stenstroms from "../../../public/images/stenstroms-color.png"
import sportCoats from "../../../public/images/suits-and-sports-coats.jpeg"
import travis from "../../../public/images/travis-mathew.jpeg"

const features = [
  {
    id: "suits-and-sports-coats",
    name: "Suits & Sports Coats",
    description:
      "Ranging from semi-casual to formal attire, our suits and sportcoats are crafted from the finest materials to embody the perfect balance of durability, breathability, and elegance. Our carefully selected fabrics will allow you to move comfortably while maintaining a sleek, stylish look.",
    imageSrc: sportCoats,
    brands: [
      {
        name: "LBM 1911",
        imageSrc: lbm,
      },
      {
        name: "Byron",
        imageSrc: byron,
      },

      {
        name: "Bentenly",
        imageSrc: betenly,
      },
    ],
    imageAlt: "Suits and sports coats display on clothing rack in JwR's store.",
  },
  {
    id: "dressShirts",
    name: "Dress Shirts",
    description:
      "Suitable for a wide range of occasions, our meticulously constructed dress shirts allow for different styling options so you can express personality in your attire. The elegant craftsmanship ensures a durable dress shirt that prevents bunches and wrinkles, preserving impeccable appearance.",
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
    imageAlt: "Formal dress shirts stacked display in JwR's store.",
  },
  {
    id: "dressPants",
    name: "Dress Pants",
    description:
      "Tailored to support a sleek, polished look, our dress pants provide a flattering presentation for whatever the occasion may be. Precise stitching, options for pleats and creases, and a variety of styles will contribute to your elevated look.",
    imageSrc: dressPants,
    brands: [
      {
        name: "Meyer",
        imageSrc: meyer,
      },
      {
        name: "Paul Betenly",
        imageSrc: betenly,
      },
    ],
    imageAlt: "Dress pants on display table in JwR's store.",
  },
  {
    id: "sportsShirts",
    name: "Sports Shirts",
    description:
      "Designed for optimal performance and breathability, our sports shirts strike the perfect balance between style and comfort. Whether it be for a fashionable outdoor look or just for freedom of movement, these shirts offer a sporty flair to any occasion.",
    imageSrc: sportsShirts,
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
        name: "Calder",
        imageSrc: calder,
      },
      {
        name: "Emanuel Berg",
        imageSrc: berg,
      },
    ],
    imageAlt: "Collection of sports shirts display in JwR's store.",
  },
  {
    id: "polos",
    name: "Polos",
    description:
      "A reliable choice for both casual and semi-formal outings, our polo shirts allow for comfortable movement without being baggy or restrictive. Our polos are carefully crafted, staying a reliable choice that never goes out of style.",
    imageSrc: polos,
    brands: [
      {
        name: "Johnnie-O",
        imageSrc: johnnie,
      },

      {
        name: "Travis Mathew",
        imageSrc: travis,
      },
      {
        name: "Perter Millar",
        imageSrc: peter,
      },
    ],
    imageAlt: "Assorted polo shirts with various patterns and colors.",
  },
  {
    id: "casual-pants",
    name: "Casual Pants",
    description:
      "Our variety of casual pants allows comfort and style for your everyday attire. With options for different colors, fabrics, and designs, our casual pants provide endless options for a well put-together look for any occasion.",
    imageSrc: casualPants,
    brands: [
      {
        name: "Meyer",
        imageSrc: meyer,
      },

      {
        name: "Peter Millar",
        imageSrc: peter,
      },
    ],
    imageAlt: "Casual pants stacks on display table in JwR's store.",
  },
  {
    id: "jeans",
    name: "Jeans",
    description:
      "A timeless classic that will never go out of style, our jeans are made to last, while being adaptable to a diverse range of situations. Our jeans are a wardrobe staple that blends both fashion and functionality, all while remaining a comfortable option.",
    imageSrc: jeans,
    brands: [
      {
        name: "AG",
        imageSrc: ag,
      },

      {
        name: "Travis Mathew",
        imageSrc: travis,
      },
    ],
    imageAlt:
      "Image of a stylish and diverse collection of jeans showcased in JwR's store.",
  },
  {
    id: "shoes",
    name: "Shoes",
    description:
      "Discover timeless style and craftsmanship in our men’s shoe collection, featuring Johnston & Murphy and Smathers & Branson. From handcrafted elegance to statement-making designs, step with confidence and sophistication. Shop now for the finest in men’s footwear at our store.",
    imageSrc: shoes,
    brands: [
      {
        name: "Alan Payne",
        imageSrc: alanPayne,
      },
      {
        name: "Martin Dingman",
        imageSrc: martinDingman,
      },
      {
        name: "Rio Mar",
        imageSrc: rioMar,
      },
      {
        name: "Johnston & Murphy",
        imageSrc: jm,
      },
    ],
    imageAlt:
      "Shelf display of diverse range of footwear, including sneakers, boots, heels, and more, in various styles and colors to suit every taste.",
  },
]

function ClothingPage() {
  return (
    <main className="container mx-auto py-10 sm:py-16">
      <div className="space-y-24">
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
              <div className="mx-auto mt-8 grid w-full max-w-xl grid-cols-3 items-center gap-10 lg:mx-0 lg:max-w-none lg:grid-cols-2 ">
                {feature.brands.map((brand, index) => (
                  <div
                    key={index}
                    className="aspect-h-9 aspect-w-16 relative max-w-[10rem]"
                  >
                    <Image
                      className="object-contain object-center grayscale"
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
