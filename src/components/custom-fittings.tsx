import Image from "next/image"

// import fitting1 from "../../public/images/fitting-1.webp"
// import fitting2 from "../../public/images/fitting-2.jpeg"
// import fitting3 from "../../public/images/fitting-3.webp"
import fitting1 from "public/images/jwr-cf-1.jpg"
import fitting2 from "public/images/jwr-cf-2.jpg"
import fitting3 from "public/images/jwr-cf-3.jpg"

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
    <div id="custom" className="!scroll-mt-[104px] bg-white">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="border-b border-accent-200 pb-10">
              {/* <h2 className="font-medium text-accent-500">Machined Kettle</h2> */}
              <p className="mt-2 text-4xl   text-accent-900 sm:text-4xl">
                Custom Fitting
              </p>

              <p className="mt-4 font-display text-lg text-accent-500">
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
                  <dd className="mt-3 font-display text-sm text-accent-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-accent-100">
              <Image
                src={fitting2}
                // alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system."
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8">
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-accent-100">
                <Image
                  src={fitting3}
                  // alt="Detail of temperature setting button on kettle bass with digital degree readout."
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-accent-100">
                <Image
                  src={fitting1}
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
