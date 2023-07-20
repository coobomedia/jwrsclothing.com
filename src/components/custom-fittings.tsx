import Image from "next/image"

import fittingCoat from "../../public/images/blue-sports-coat.jpg"
import fitting1 from "../../public/images/jwr-custom-fittings-1.jpg"
import fitting2 from "../../public/images/jwr-custom-fittings-2.jpg"
import fitting3 from "../../public/images/jwr-custom-fittings-3.jpg"
import maroon from "../../public/images/maroon-sports-coat.jpg"

const features = [
  {
    name: "Measurement Consultation",

    description:
      "Our expert tailors will take detailed measurements and discuss your style preferences, ensuring that every garment is tailored to your exact specifications.",
  },
  {
    name: "Fabric Selection",
    description:
      "Discover a world of exceptional fabrics with our curated fabric selection.",
  },
  {
    name: "Design & Styling",
    description:
      "Collaborate with our experienced team to customize the design details of your garment. From lapel styles to button choices, make it truly yours.",
  },
  {
    name: "Expert Tailoring",
    description:
      "Our skilled craftsmen will meticulously cut, sew, and assemble your garment, paying attention to every detail to ensure a flawless fit and finish.",
  },
]

export default function CustomFittings() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="border-b border-primary-200 pb-10">
              <p className="mt-2 text-4xl text-primary-900 sm:text-4xl">
                Custom Fitting
              </p>

              <p className="mt-4 font-display text-lg text-primary-500">
                Discover the luxury of custom fitting and elevate your style to
                new heights. Experience clothing that fits you perfectly,
                enhances your silhouette, and showcases your individuality.
              </p>
            </div>

            <dl className="mt-10 space-y-10">
              {features.map((feature) => (
                <div key={feature.name}>
                  <dt className="text-md font-medium text-primary-900">
                    {feature.name}
                  </dt>
                  <dd className="mt-3 font-display text-sm text-primary-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-primary-100">
              <Image
                src={fitting2}
                // alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system."
                className="h-full w-full object-cover object-center"
                alt="Custom Fitting Pictures"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
