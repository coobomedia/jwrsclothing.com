import Collections from "@/components/collection"
import CustomFitting from "@/components/custom-fittings"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import JWRHeader from "@/components/jwr-header"
import LogoCloud from "@/components/logo-cloud"

export default function HomePage() {
  return (
    <main className="relative">
      {/* <div className="absolute isolate inset-0 z-10  ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 3000 1000"
        >
          <rect fill="#1E3A8A" width="1600" height="800" />
          <g stroke="#09090B" stroke-width="66.7" stroke-opacity="0.05">
            <circle fill="#1E3A8A" cx="0" cy="0" r="1800" />
            <circle fill="#213984" cx="0" cy="0" r="1700" />
            <circle fill="#23387e" cx="0" cy="0" r="1600" />
            <circle fill="#253778" cx="0" cy="0" r="1500" />
            <circle fill="#273572" cx="0" cy="0" r="1400" />
            <circle fill="#28346c" cx="0" cy="0" r="1300" />
            <circle fill="#293367" cx="0" cy="0" r="1200" />
            <circle fill="#2a3261" cx="0" cy="0" r="1100" />
            <circle fill="#2a315b" cx="0" cy="0" r="1000" />
            <circle fill="#2b3056" cx="0" cy="0" r="900" />
            <circle fill="#2b2f50" cx="0" cy="0" r="800" />
            <circle fill="#2b2e4a" cx="0" cy="0" r="700" />
            <circle fill="#2a2d45" cx="0" cy="0" r="600" />
            <circle fill="#2a2b3f" cx="0" cy="0" r="500" />
            <circle fill="#292a3a" cx="0" cy="0" r="400" />
            <circle fill="#292935" cx="0" cy="0" r="300" />
            <circle fill="#28282f" cx="0" cy="0" r="200" />
            <circle fill="#27272A" cx="0" cy="0" r="100" />
          </g>
        </svg>
      </div> */}
      <JWRHeader className="sticky lg:fixed" />

      <Hero />
      <LogoCloud />
      <Collections />
      <CustomFitting className=" mx-auto max-w-2xl px-4 pb-24 sm:px-6  lg:max-w-7xl lg:px-8" />
      <Footer />
    </main>
  )
}
