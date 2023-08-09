"use client"

import * as React from "react"
import Image from "next/image"
import Balancer from "react-wrap-balancer"

import "keen-slider/keen-slider.min.css"
import Link from "next/link"
import { useKeenSlider } from "keen-slider/react"

import jwrHero from "../../public/images/maroon-sports-coat.jpg"

// import jwrHero from "../../public/images/storefront.jpg"

// const images = [jwrHero, jwrHero2, jwrHero3, jwrHero4, jwrHero5, jwrHero6]

function Hero() {
  return (
    <div className=" relative border-b border-primary-200 ">
      <div className="mx-auto min-h-screen max-w-7xl  lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="flex items-center px-6 py-10  lg:col-span-7 lg:p-0 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-5xl tracking-tight  text-primary-900 sm:mt-10  ">
              <Balancer>Brazos Valley’s Premiere Men’s Clothier</Balancer>
            </h1>
            <p className="mt-6 font-display text-lg leading-8 text-primary-600">
              Elevate your style game with our curated selection of premium
              menswear.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/#learn-more"
                className="rounded-md bg-primary-950 px-3.5 py-2.5 font-display text-xs font-semibold uppercase tracking-wider text-white shadow-sm hover:bg-primary-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-800"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <div className="h-full">
            <div className="lg:aspect-auto aspect-[3/2] w-full  overflow-hidden bg-primary-50  lg:absolute lg:inset-0 lg:h-full">
              <Image
                className="objectFit-centertop object-cover"
                sizes="50vw"
                fill
                src={jwrHero}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
