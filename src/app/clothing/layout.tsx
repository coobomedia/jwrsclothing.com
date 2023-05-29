import Footer from "@/components/footer"
import JWRHeader from "@/components/jwr-header"

export default function ClothingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="">
      <JWRHeader className="sticky " />
      {children}
      <Footer />
    </main>
  )
}
