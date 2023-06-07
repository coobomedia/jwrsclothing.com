import Collections from "@/components/collection"
import CustomFittings from "@/components/custom-fittings"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import JWRFooter from "@/components/jwr-footer"
import JWRHeader from "@/components/jwr-header"
import LogoCloud from "@/components/logo-cloud"

export default function HomePage() {
  return (
    <main className="relative">
      <JWRHeader className="sticky lg:fixed" />
      <Hero />
      <LogoCloud />
      {/* <Collections /> */}
      {/* <CustomFitting className=" mx-auto max-w-2xl px-4 pb-24 sm:px-6  lg:max-w-7xl lg:px-8" /> */}
      <CustomFittings />
      <JWRFooter />
    </main>
  )
}
