"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-4 ">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <Icons.logo className="h-20 w-auto" />
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map(
            (item, index) =>
              item.slug && <GlobalNavItem key={index} item={item} />
          )}
        </nav>
      ) : null}

      <div className="py-4 md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Menu</Button>
          </SheetTrigger>
          <SheetContent size="lg" position="right">
            <SheetHeader className="text-left">Menu Header</SheetHeader>
            <div className="grid gap-4 py-4">Menu Content</div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

function GlobalNavItem({ item }: { item: NavItem }) {
  // const segment = useSelectedLayoutSegment()
  const pathname = usePathname()

  const isActive = item.slug === pathname

  return (
    <Link
      href={item.slug!}
      className={cn(
        "flex items-center text-lg font-semibold sm:text-sm",
        {
          "text-accent-600 hover:text-accent-900": !isActive,
          "underline decoration-2 underline-offset-8": isActive,
        },
        item.disabled && "cursor-not-allowed opacity-80"
      )}
    >
      {item.title}
    </Link>
  )
}
