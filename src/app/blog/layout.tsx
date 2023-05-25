import Header from "@/components/header"
import SearchInput from "@/components/search-input"
import Sidebar from "@/components/sidebar"
import { SiteHeader } from "@/components/site-header"

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <Header position="sticky" />

      <div className="container mx-auto flex items-start gap-x-20 py-10 ">
        <main className="flex-1"> {children}</main>

        <aside className="sticky top-[calc(2rem_+_var(--header-height))] hidden w-96 shrink-0 space-y-10 xl:block">
          <SearchInput />
          <Sidebar />
        </aside>
      </div>
    </main>
  )
}
