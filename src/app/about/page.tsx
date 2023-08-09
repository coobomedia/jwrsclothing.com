import Image from "next/image"

import about from "../../../public/images/about-us.jpg"

export default function AboutPage() {
  return (
    <div className=" grow overflow-hidden py-24">
      <div className="mx-auto max-w-2xl px-4   sm:px-6 lg:flex lg:max-w-7xl lg:px-8 ">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-2xl lg:pb-8">
            <h2 className="text-4xl  tracking-tight text-primary-900 sm:text-4xl">
              About Us
            </h2>
            <p className="mt-6 font-display text-xl leading-8 text-primary-600">
              Joshua Rankins, Owner, and Operator of JWR’s Clothing has been in
              the men’s clothing business for over 20 years.
            </p>
            <p className="mt-6 font-display text-base leading-7 text-primary-600">
              Joshua got his start with Harley’s for Men in Tyler in 2002. When
              Harley’s opened a branch in College Station in 2010, Josh made the
              move to the Brazos Valley to help start the new store. Shortly
              after Harley’s closed its College Station location, Joshua was
              able to realize his dream of owning his own upscale men’s clothing
              establishment.
            </p>
            <p className="mt-6 font-display text-base leading-7 text-primary-600">
              A second-generation men’s clothier, Joshua is dedicated to
              impeccable customer service coupled with carrying the finest
              brands available.
            </p>
            <p className="mt-6 font-display text-base leading-7 text-primary-600">
              Visit JWR’s Clothing and experience the Brazos Valley’s Premier
              Men’s Clothier!
            </p>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className=" relative w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              {/* <div className="absolute inset-0 z-10 rounded-2xl bg-primary-950/50" /> */}
              <Image
                width={1152}
                height={768}
                src={about}
                alt=""
                className="aspect-[7/5] w-[37rem] max-w-none border-2 border-black  bg-primary-50 object-cover"
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
                  className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-primary-50 object-cover"
                />
              </div>
              <div className="relative flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <div className="absolute inset-0 z-10 rounded-2xl bg-primary-950/50" />
                <Image
                  width={1152}
                  height={842}
                  src={jwr7}
                  alt=""
                  className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-primary-50 object-cover"
                />
              </div>
              <div className="relative hidden  sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <div className="absolute inset-0 z-10 rounded-2xl bg-primary-950/50" />
                <Image
                  width={768}
                  height={604}
                  src={jwr9}
                  alt=""
                  className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-primary-50 object-cover"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
