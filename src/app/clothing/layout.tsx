import JWRFooter from "@/components/jwr-footer"
import JWRHeader from "@/components/jwr-header"

export default function ClothingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <JWRHeader className="sticky " />
      <main className="flex min-h-screen flex-col">{children}</main>
      <JWRFooter />
    </>
  )
}
