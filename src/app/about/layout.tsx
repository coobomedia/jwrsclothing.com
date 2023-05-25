import Header from "@/components/header"

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <Header position="fixed" />

      {children}
    </main>
  )
}
