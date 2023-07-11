import JWRFooter from "@/components/jwr-footer"
import JWRHeader from "@/components/jwr-header"

export default function BrandsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex min-h-screen flex-col">
      <JWRHeader className="" />
      {children}
      <JWRFooter />
    </main>
  )
}
