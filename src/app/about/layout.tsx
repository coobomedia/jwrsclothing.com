// import Footer from "@/components/footer"
// import JWRFooter from "@/components/jwr-footer"
// import JWRHeader from "@/components/jwr-header"

// export default function AboutLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <main className="flex min-h-screen flex-col bg-primary-50">
//       <JWRHeader className="sticky " />
//       {children}
//       <JWRFooter />
//     </main>
//   )
// }

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
      <JWRHeader className="sticky " />
      <main className="flex min-h-[calc(100vh-179.98px)] flex-col">
        {children}
      </main>
      <JWRFooter />
      {/* Workaround: scroll to top on route change */}
      <ScrollUp />
    </>
  )
}
