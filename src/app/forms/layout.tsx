import Header from "@/components/header"
import { SiteHeader } from "@/components/site-header"

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      {/* <SiteHeader position="sticky" /> */}

      <Header position="sticky" />
      {children}
    </main>
  )
}
