import "@/styles/globals.css"
import { Metadata } from "next"
import { Nunito_Sans, Special_Elite } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"

import { cn } from "@/lib/utils"
import { Toaster } from "@/components/toaster"

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
  metadataBase: new URL("https://jwrsclothing.com/"),
  title: {
    default: "JwR's Clothing",
    template: "%s | JwR's Clothing",
  },
  description:
    "Elevate your style game with our curated selection of premium menswear.",
  openGraph: {
    title: "JwR's Clothing",
    description:
      "Elevate your style game with our curated selection of premium menswear.",
    url: "https://jwrsclothing.com/",
    siteName: "JwR's Clothing",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
        "font-sans antialiased"
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
