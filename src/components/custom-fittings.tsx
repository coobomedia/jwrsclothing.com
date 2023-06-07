// import Image from "next/image"

// import { cn } from "@/lib/utils"

// const features = [
//   {
//     name: "Measurement Consultation",
//     description:
//       "Our expert tailors will take detailed measurements and discuss your style preferences, ensuring that every garment is tailored to your exact specifications.",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-01.jpg",
//     imageAlt:
//       "White canvas laptop sleeve with accent felt interior, silver zipper, and tan leather zipper pull.",
//   },
//   {
//     name: "Fabric Selection",
//     description:
//       "Choose from a wide range of premium fabrics, from luxurious wool to lightweight linens. Select colors, patterns, and textures that complement your personal style and make a statement.",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-02.jpg",
//     imageAlt: "Detail of zipper pull with tan leather and silver rivet.",
//   },
//   {
//     name: "Design & Styling",
//     description:
//       "Collaborate with our experienced team to customize the design details of your garment. From lapel styles to button choices, make it truly yours.",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-02.jpg",
//     imageAlt: "Detail of zipper pull with tan leather and silver rivet.",
//   },
//   // {
//   //   name: "Expert Tailoring",
//   //   description:
//   //     "Our skilled craftsmen will meticulously cut, sew, and assemble your garment, paying attention to every detail to ensure a flawless fit and finish.",
//   //   imageSrc:
//   //     "https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-02.jpg",
//   //   imageAlt: "Detail of zipper pull with tan leather and silver rivet.",
//   // },
// ]

// interface CustomFittingProps {
//   className?: string
// }

// function CustomFitting({ className }: CustomFittingProps) {
//   return (
//     <div className="relative bg-white pt-24 sm:pt-32">
//       <div className={cn(className, "")}>
//         <div className="mx-auto max-w-3xl text-center">
//           <h2 className="text-3xl  tracking-tight text-accent-900 sm:text-5xl">
//             Custom Fitting
//           </h2>
//           <p className="mt-4 text-lg text-accent-500">
//             Discover the luxury of custom fitting and elevate your style to new
//             heights. Experience clothing that fits you perfectly, enhances your
//             silhouette, and showcases your individuality.
//           </p>
//         </div>

//         <div className="mt-16 space-y-16">
//           {features.map((feature, featureIdx) => (
//             <div
//               key={feature.name}
//               className=" flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
//             >
//               <div
//                 className={cn(
//                   featureIdx % 2 === 0
//                     ? "lg:col-start-1"
//                     : "lg:col-start-8 xl:col-start-9",
//                   "mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4"
//                 )}
//               >
//                 <h3 className="text-xl  font-medium text-accent-900">
//                   {feature.name}
//                 </h3>
//                 <p className="text-md mt-2 text-accent-500">
//                   {feature.description}
//                 </p>
//               </div>
//               <div
//                 className={cn(
//                   featureIdx % 2 === 0
//                     ? "lg:col-start-6 xl:col-start-5"
//                     : "lg:col-start-1",
//                   "flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8"
//                 )}
//               >
//                 <div className=" aspect-h-2 aspect-w-5 relative overflow-hidden rounded-lg bg-accent-100">
//                   {/* <div className="absolute inset-0 z-10 bg-primary-950/50" /> */}
//                   <img
//                     src={feature.imageSrc}
//                     alt={feature.imageAlt}
//                     className="object-cover object-center"
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CustomFitting

/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

import Image from "next/image"

import fitting1 from "../../public/images/fitting-1.webp"
import fitting2 from "../../public/images/fitting-2.jpeg"
import fitting3 from "../../public/images/fitting-3.webp"

const features = [
  {
    name: "Measurement Consultation",

    description:
      "Our expert tailors will take detailed measurements and discuss your style preferences, ensuring that every garment is tailored to your exact specifications.",
  },
  {
    name: "Fabric Selection",
    description: "Shaped for steady pours and insulated to prevent burns.",
  },
  {
    name: "Design & Styling",
    description:
      "Collaborate with our experienced team to customize the design details of your garment. From lapel styles to button choices, make it truly yours..",
  },
  {
    name: "Expert Tailoring",
    description:
      "Our skilled craftsmen will meticulously cut, sew, and assemble your garment, paying attention to every detail to ensure a flawless fit and finish.",
  },
]

export default function CustomFittings() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div>
            <div className="border-b border-accent-200 pb-10">
              {/* <h2 className="font-medium text-accent-500">Machined Kettle</h2> */}
              <p className="mt-2 text-3xl   text-accent-900 sm:text-4xl">
                Custom Fitting
              </p>

              <p className="mt-4 text-lg text-accent-500">
                Discover the luxury of custom fitting and elevate your style to
                new heights. Experience clothing that fits you perfectly,
                enhances your silhouette, and showcases your individuality.
              </p>
            </div>

            <dl className="mt-10 space-y-10">
              {features.map((feature) => (
                <div key={feature.name}>
                  <dt className="text-md font-medium text-accent-900">
                    {feature.name}
                  </dt>
                  <dd className="mt-3 text-sm text-accent-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-accent-100">
              <Image
                src={fitting1}
                // alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system."
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8">
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-accent-100">
                <Image
                  src={fitting2}
                  // alt="Detail of temperature setting button on kettle bass with digital degree readout."
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-accent-100">
                <Image
                  src={fitting3}
                  // alt="Kettle spout pouring boiling water into coffee grounds in pour-over mug."
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
