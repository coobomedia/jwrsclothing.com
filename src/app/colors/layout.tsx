import Header from "@/components/header"
import { SiteHeader } from "@/components/site-header"

export default function ColorsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <Header position="sticky" />
      {children}
    </main>
  )
}
