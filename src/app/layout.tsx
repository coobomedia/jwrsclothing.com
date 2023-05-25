import "@/styles/globals.css"
import { Metadata } from "next"
import { Archivo, EB_Garamond, Nunito_Sans, Roboto } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"

import { cn } from "@/lib/utils"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
})

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
})

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
})

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
})

export const metadata: Metadata = {
  title: {
    default: "Coobo Media Template",
    template: "%s | Coobo Media Template",
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
        "scroll-smooth font-sans antialiased"
      )}
      lang="en"
    >
      <body className=" bg-white  ">
        {children}
        <Footer />
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
