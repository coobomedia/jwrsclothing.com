import Footer from "@/components/footer"
import JWRFooter from "@/components/jwr-footer"
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
      <JWRFooter />
    </main>
  )
}