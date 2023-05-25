"use client"

import { useEffect } from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { buttonVariants } from "@/components/ui/button"

interface SiteHeaderProps {
  position?: "fixed" | "sticky" | "relative"
  className?: string
}

export function SiteHeader({ position,className }: SiteHeaderProps) {
  useEffect(() => {
    const headerHeight = document.querySelector("header")!.offsetHeight
    document.documentElement.style.setProperty(
      "--header-height",
      `${headerHeight}px`
    )
    console.log(headerHeight)
  }, [])
  return (
    <header
      className={cn(
        position,
        className,
        "top-0 z-40 w-full border-b border-b-accent-200 bg-white"
      )}
    >
      <div className="container mx-auto flex h-full items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="hidden flex-1 items-center justify-end space-x-4 md:flex">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.facebook || "#"}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                  className: "text-accent-700 ",
                })}
              >
                <Icons.facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.linkedin || "#"}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                  className: "text-accent-700 ",
                })}
              >
                <Icons.linkedin className="h-5 w-5 " />
                <span className="sr-only">LinkedIn</span>
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
