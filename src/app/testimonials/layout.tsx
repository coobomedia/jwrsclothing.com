import Footer from "@/components/footer"
import JWRFooter from "@/components/jwr-footer"
import JWRHeader from "@/components/jwr-header"

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex min-h-screen flex-col bg-accent-50">
      <JWRHeader className="sticky " />
      {children}
      <JWRFooter />
    </main>
  )
}
