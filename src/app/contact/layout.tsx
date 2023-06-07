import Footer from "@/components/footer"
import JWRFooter from "@/components/jwr-footer"
import JWRHeader from "@/components/jwr-header"

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="  bg-accent-50 ">
      <JWRHeader className="sticky " />
      {children}
      <JWRFooter />
    </main>
  )
}
