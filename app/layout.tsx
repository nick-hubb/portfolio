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
  title: "Your Name - Developer Portfolio",
  description: "Full-stack developer specializing in modern web technologies",
  generator: "v0.app",
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
