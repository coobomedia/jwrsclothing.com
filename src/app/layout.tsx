import "@/styles/globals.css"
import { Metadata } from "next"
import {
  Cormorant_Garamond,
  Courier_Prime,
  Cousine,
  Cutive,
  Cutive_Mono,
  EB_Garamond,
  Inconsolata,
  Kosugi_Maru,
  Lekton,
  Merriweather,
  Nunito_Sans,
  Open_Sans,
  Oranienbaum,
  PT_Sans_Narrow,
  Roboto_Slab,
  Space_Grotesk,
  Special_Elite,
  Syne_Mono,
  VT323,
} from "next/font/google"
import { Analytics } from "@vercel/analytics/react"

import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"

// const ebGaramond = Courier_Prime({
//   weight: ["400", "700"],
//   subsets: ["latin"],
//   variable: "--font-eb-garamond",
// })

const ebGaramond = Special_Elite({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-eb-garamond",
})

// const ebGaramond = Cutive({
//   weight: ["400"],
//   subsets: ["latin"],
//   variable: "--font-eb-garamond",
// })

// const ebGaramond = Lekton({
//   weight: ["400", "700"],
//   subsets: ["latin"],
//   variable: "--font-eb-garamond",
// })

// const ebGaramond = Oranienbaum({
//   weight: ["400"],
//   subsets: ["latin"],
//   variable: "--font-eb-garamond",
// })

// const ebGaramond = Inconsolata({
//   // weight: ["400"],
//   subsets: ["latin"],
//   variable: "--font-eb-garamond",
// })

// const ebGaramond = Cousine({
//   weight: ["400", "700"],
//   subsets: ["latin"],
//   variable: "--font-eb-garamond",
// })

// const ebGaramond = Space_Grotesk({
//   // weight: ["400", "700"],
//   subsets: ["latin"],
//   variable: "--font-eb-garamond",
// })

// const ebGaramond = Roboto_Slab({
//   // weight: ["400", "700"],
//   subsets: ["latin"],
//   variable: "--font-eb-garamond",
// })

// const ebGaramond = EB_Garamond({
//   subsets: ["latin"],
//   variable: "--font-eb-garamond",
// })

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
})

// const nunitoSans = Merriweather({
//   weight: ["300", "400", "700", "900"],
//   subsets: ["latin"],
//   variable: "--font-nunito-sans",
// })

// const nunitoSans = Open_Sans({
//   // weight: ["300", "400", "700", "900"],
//   subsets: ["latin"],
//   variable: "--font-nunito-sans",
// })

// const nunitoSans = PT_Sans_Narrow({
//   weight: ["400", "700"],
//   subsets: ["latin"],
//   variable: "--font-nunito-sans",
// })

// const nunitoSans = Cutive_Mono({
//   weight: ["400"],
//   subsets: ["latin"],
//   variable: "--font-nunito-sans",
// })

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
      <body className=" bg-white">
        {children}

        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
