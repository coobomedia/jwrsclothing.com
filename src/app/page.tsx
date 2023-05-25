import Image from "next/image"

import { cn } from "@/lib/utils"
import Hero from "@/components/hero"
import JWRHeader from "@/components/jwr-header"
import LogoCloud from "@/components/logo-cloud"
import jwrHero from "../../public/images/jwr-hero.jpeg"

const features = [
  {
    name: "Measurement Consultation",
    description:
      "Our expert tailors will take detailed measurements and discuss your style preferences, ensuring that every garment is tailored to your exact specifications.",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-01.jpg",
    imageAlt:
      "White canvas laptop sleeve with accent felt interior, silver zipper, and tan leather zipper pull.",
  },
  {
    name: "Fabric Selection",
    description:
      "Choose from a wide range of premium fabrics, from luxurious wool to lightweight linens. Select colors, patterns, and textures that complement your personal style and make a statement.",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-02.jpg",
    imageAlt: "Detail of zipper pull with tan leather and silver rivet.",
  },
  {
    name: "Design & Styling",
    description:
      "Collaborate with our experienced team to customize the design details of your garment. From lapel styles to button choices, make it truly yours.",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-02.jpg",
    imageAlt: "Detail of zipper pull with tan leather and silver rivet.",
  },
  {
    name: "Expert Tailoring",
    description:
      "Our skilled craftsmen will meticulously cut, sew, and assemble your garment, paying attention to every detail to ensure a flawless fit and finish.",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-02.jpg",
    imageAlt: "Detail of zipper pull with tan leather and silver rivet.",
  },
]

export default function HomePage() {
  return (
    <main className="">
      <JWRHeader position="fixed" />
      <Hero />
      <LogoCloud />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl  tracking-tight text-accent-900 sm:text-5xl">
              Custom Fitting
            </h2>
            <p className="mt-4 text-lg text-accent-500">
              Discover the luxury of custom fitting and elevate your style to
              new heights. Experience clothing that fits you perfectly, enhances
              your silhouette, and showcases your individuality.
            </p>
          </div>

          <div className="mt-16 space-y-16">
            {features.map((feature, featureIdx) => (
              <div
                key={feature.name}
                className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
              >
                <div
                  className={cn(
                    featureIdx % 2 === 0
                      ? "lg:col-start-1"
                      : "lg:col-start-8 xl:col-start-9",
                    "mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4"
                  )}
                >
                  <h3 className="text-xl font-medium text-accent-900">
                    {feature.name}
                  </h3>
                  <p className="text-md mt-2 text-accent-500">
                    {feature.description}
                  </p>
                </div>
                <div
                  className={cn(
                    featureIdx % 2 === 0
                      ? "lg:col-start-6 xl:col-start-5"
                      : "lg:col-start-1",
                    "flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8"
                  )}
                >
                  <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-accent-100">
                    <img
                      src={feature.imageSrc}
                      alt={feature.imageAlt}
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
