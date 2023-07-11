import "@/styles/globals.css"
import { Metadata } from "next"
import { Nunito_Sans, Special_Elite } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"

import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"

const ebGaramond = Special_Elite({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-eb-garamond",
})

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
})

export const metadata: Metadata = {
  title: {
    default: "JwR's Clothing",
    template: "%s | JwR's Clothing",
  },
  description:
    "A playground to explore new Next.js App Router features such as nested layouts, instant loading states, streaming, and component level data fetching.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      className={cn(
        ebGaramond.variable,
        nunitoSans.variable,
        "!scroll-smooth font-sans antialiased"
      )}
      lang="en"
    >
      <body className="bg-white">
        {children}

        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
