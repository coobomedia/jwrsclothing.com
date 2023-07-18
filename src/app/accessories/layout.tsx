import JWRFooter from "@/components/jwr-footer"
import JWRHeader from "@/components/jwr-header"
import ScrollUp from "@/components/scroll-up"

export default function ClothingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <JWRHeader className="sticky" />
      <main className="flex min-h-screen flex-col">{children}</main>
      <JWRFooter />
      {/* Workaround: scroll to top on route change */}
      <ScrollUp />
    </>
  )
}
