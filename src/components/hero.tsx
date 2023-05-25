import Image from "next/image"

import jwrHero from "../../public/images/jwr-hero.jpeg"

function Hero() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto min-h-screen max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="flex items-center px-6 lg:col-span-7 lg:px-0  xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="hidden  sm:flex ">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-accent-500 ring-1 ring-accent-900/10 hover:ring-accent-900/20">
                Anim aute id magna aliqua ad ad non deserunt sunt.{" "}
                <a
                  href="#"
                  className="whitespace-nowrap font-semibold text-primary-800"
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <h1 className="mt-24 text-4xl  tracking-tight text-accent-900 sm:mt-10 sm:text-6xl">
              Brazos Valley’s Premiere Men’s Clothier
            </h1>
            <p className="mt-6 text-lg leading-8 text-accent-600">
              Elevate your style game with our curated selection of premium
              menswear.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-primary-950 px-3.5 py-2.5 font-display text-xs font-semibold uppercase tracking-wider text-white shadow-sm hover:bg-primary-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-800"
              >
                Explore Our Store
              </a>
              <a
                href="#"
                className="font-display text-xs font-semibold uppercase leading-6 tracking-wider text-accent-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <div className="absolute inset-0 z-10 bg-primary-950/50"></div>
          <Image
            className="aspect-[3/2] w-full bg-accent-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src={jwrHero}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
