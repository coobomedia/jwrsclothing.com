import Image from "next/image"

import jwr11 from "../../../public/images/about-dog.jpg"

export default function AboutPage() {
  return (
    <section className="grow bg-white py-24 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-4xl  tracking-tight text-primary-900">
          Testimonials
        </h2>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="skewed-border  flex  flex-col p-10 ">
            {/* <img
              className="h-12 self-start"
              src="https://tailwindui.com/img/logos/tuple-logo-gray-900.svg"
              alt=""
            /> */}
            <figure className="flex flex-auto flex-col justify-between">
              <blockquote className="font-display text-lg leading-8 text-primary-900">
                <p>
                  “Amet amet eget scelerisque tellus sit neque faucibus non
                  eleifend. Integer eu praesent at a. Ornare arcu gravida
                  natoque erat et cursus tortor consequat at. Vulputate gravida
                  sociis enim nullam ultricies habitant malesuada lorem ac.
                  Tincidunt urna dui pellentesque sagittis.”
                </p>
              </blockquote>
              {/* <figcaption className="flex items-center gap-x-6">
                <img
                  className="h-14 w-14 rounded-full bg-primary-50"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div className="text-base">
                  <div className="font-semibold text-primary-900">
                    Judith Black
                  </div>
                  <div className="mt-1  text-primary-500">CEO of Tuple</div>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className=" skewed-border  flex flex-col  p-10 ">
            {/* <img
              className="h-12 self-start"
              src="https://tailwindui.com/img/logos/reform-logo-gray-900.svg"
              alt=""
            /> */}
            <figure className="flex flex-auto flex-col justify-between">
              <blockquote className="font-display text-lg leading-8 text-primary-900">
                <p>
                  “Excepteur veniam labore ullamco eiusmod. Pariatur consequat
                  proident duis dolore nulla veniam reprehenderit nisi officia
                  voluptate incididunt exercitation exercitation elit. Nostrud
                  veniam sint dolor nisi ullamco.”
                </p>
              </blockquote>
              {/* <figcaption className="flex items-center gap-x-6">
                <img
                  className="h-14 w-14 rounded-full bg-primary-50"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div className="text-base">
                  <div className="font-semibold text-primary-900">
                    Joseph Rodriguez
                  </div>
                  <div className="mt-1 text-primary-500">CEO of Reform</div>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="skewed-border  flex  flex-col p-10 ">
            {/* <img
              className="h-12 self-start"
              src="https://tailwindui.com/img/logos/tuple-logo-gray-900.svg"
              alt=""
            /> */}
            <figure className="flex flex-auto flex-col justify-between">
              <blockquote className="font-display text-lg leading-8 text-primary-900">
                <p>
                  “Amet amet eget scelerisque tellus sit neque faucibus non
                  eleifend. Integer eu praesent at a. Ornare arcu gravida
                  natoque erat et cursus tortor consequat at. Vulputate gravida
                  sociis enim nullam ultricies habitant malesuada lorem ac.
                  Tincidunt urna dui pellentesque sagittis.”
                </p>
              </blockquote>
              {/* <figcaption className="flex items-center gap-x-6">
                <img
                  className="h-14 w-14 rounded-full bg-primary-50"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div className="text-base">
                  <div className="font-semibold text-primary-900">
                    Judith Black
                  </div>
                  <div className="mt-1  text-primary-500">CEO of Tuple</div>
                </div>
              </figcaption> */}
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
