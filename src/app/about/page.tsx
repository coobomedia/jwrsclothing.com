import Image from "next/image"

import jwr1 from "../../../public/images/jwr-1.jpeg"
// import jwr2 from "../../../public/images/jwr-2.jpeg"
import jwr3 from "../../../public/images/jwr-3.jpeg"
// import jwr4 from "../../../public/images/jwr-4.jpeg"
// import jwr5 from "../../../public/images/jwr-5.jpeg"
// import jwr6 from "../../../public/images/jwr-6.jpeg"
import jwr7 from "../../../public/images/jwr-7.jpeg"
// import jwr8 from "../../../public/images/jwr-8.jpeg"
import jwr9 from "../../../public/images/jwr-9.jpeg"
import jwr11 from "../../../public/images/jwr-11.jpeg"

export default function AboutPage() {
  return (
    <div className="my-16 overflow-hidden sm:my-32">
      <div className="mx-auto max-w-2xl px-4 pb-24  sm:px-6 lg:flex lg:max-w-7xl lg:px-8 ">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-4xl  tracking-tight text-accent-900 sm:text-5xl">
              About Us
            </h2>
            <p className="mt-6 text-xl leading-8 text-accent-600">
              At JWR's, we are passionate about men&apos;s fashion and providing
              our customers with the latest trends and timeless classics. Our
              mission is to empower men to express their unique style and
              confidence through our carefully curated collection of apparel and
              accessories.
            </p>
            <p className="mt-6 text-base leading-7 text-accent-600">
              We value our customers and prioritize their satisfaction above all
              else. We continuously update our inventory to keep up with the
              latest fashion trends, ensuring that you&apos;ll always find
              something new and exciting with each visit. Whether you&apos;re a
              fashion-forward trendsetter or prefer a classic and timeless look,
              we have something for everyone.
            </p>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className=" relative w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              {/* <div className="absolute inset-0 z-10 rounded-2xl bg-primary-950/50" /> */}
              <Image
                width={1152}
                height={768}
                src={jwr11}
                alt=""
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-accent-50 object-cover"
              />
            </div>
            {/* <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="relative order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <div className="absolute inset-0 z-10 rounded-2xl bg-primary-950/50" />
                <Image
                  height={604}
                  width={768}
                  src={jwr3}
                  alt=""
                  className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-accent-50 object-cover"
                />
              </div>
              <div className="relative flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <div className="absolute inset-0 z-10 rounded-2xl bg-primary-950/50" />
                <Image
                  width={1152}
                  height={842}
                  src={jwr7}
                  alt=""
                  className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-accent-50 object-cover"
                />
              </div>
              <div className="relative hidden  sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <div className="absolute inset-0 z-10 rounded-2xl bg-primary-950/50" />
                <Image
                  width={768}
                  height={604}
                  src={jwr9}
                  alt=""
                  className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-accent-50 object-cover"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
