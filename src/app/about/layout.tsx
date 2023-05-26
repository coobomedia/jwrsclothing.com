import Footer from "@/components/footer"
import JWRHeader from "@/components/jwr-header"

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <JWRHeader className="sticky " />
      {children}
      <Footer />
    </main>
  )
}
