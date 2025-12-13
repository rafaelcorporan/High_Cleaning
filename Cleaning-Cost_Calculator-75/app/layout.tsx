import type React from "react"
import type { Metadata } from "next"
import { Manrope, Inter } from "next/font/google"
import "./globals.css"

const _manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" })
const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "High Cleaning - Internal Cost Calculator",
  description:
    "Internal cost analysis and profit margin calculator for High Cleaning NJ. Calculate labor, materials, and overhead for accurate job pricing.",
  generator: 'v0.app'
}

export const viewport = {
  themeColor: "#0A1628",
}

import { Providers } from "@/components/providers"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased" suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
