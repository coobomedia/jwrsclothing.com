import Collections from "@/components/collection"
import CustomFitting from "@/components/custom-fittings"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import JWRHeader from "@/components/jwr-header"
import LogoCloud from "@/components/logo-cloud"

export default function HomePage() {
  return (
    <main className="relative">
      <JWRHeader className="sticky lg:fixed" />
      <Hero />
      <LogoCloud />
      <Collections />
      <CustomFitting className="mx-auto max-w-2xl px-4 pb-24 sm:px-6  lg:max-w-7xl lg:px-8" />
      <Footer />
    </main>
  )
}
