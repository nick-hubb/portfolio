import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Allura, Satisfy, Kalam, Caveat, Amatic_SC } from "next/font/google"
import "./globals.css"

const allura = Allura({ 
  weight: "400", 
  subsets: ["latin"],
  variable: "--font-allura"
})

const satisfy = Satisfy({ 
  weight: "400", 
  subsets: ["latin"],
  variable: "--font-satisfy"
})

const kalam = Kalam({ 
  weight: ["300", "400", "700"], 
  subsets: ["latin"],
  variable: "--font-kalam"
})

const caveat = Caveat({ 
  weight: ["400", "500", "600", "700"], 
  subsets: ["latin"],
  variable: "--font-caveat"
})

const amaticSC = Amatic_SC({ 
  weight: ["400", "700"], 
  subsets: ["latin"],
  variable: "--font-amatic-sc"
})

export const metadata: Metadata = {
  title: "Nick Hubbard - Portfolio",
  description: "Full-stack developer specializing in modern web technologies",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", rel: "icon" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  manifest: "/favicon/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${allura.variable} ${satisfy.variable} ${kalam.variable} ${caveat.variable} ${amaticSC.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
