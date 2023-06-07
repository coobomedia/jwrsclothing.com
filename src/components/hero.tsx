import Image from "next/image"

import jwrHero from "../../public/images/jwr-hero.jpeg"

function Hero() {
  return (
    <div className="jwr-bg relative bg-white">
      <div className="mx-auto min-h-screen max-w-7xl  lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="flex items-center px-6 py-10 lg:col-span-7 lg:p-0 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl tracking-tight  text-accent-900 sm:mt-10 sm:text-6xl ">
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
          {/* <div className="absolute inset-0 z-10 bg-primary-950/50" /> */}
          <Image
            className="lg:aspect-auto aspect-[3/2] w-full bg-accent-50 object-cover lg:absolute lg:inset-0 lg:h-full"
            src={jwrHero}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
