import type { Metadata } from "next"
import { Fraunces, Schibsted_Grotesk } from "next/font/google"
import "./globals.css"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { SignalBar } from "@/components/palo-xanto/signal-bar"

const display = Fraunces({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700", "900"],
})

const body = Schibsted_Grotesk({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "700"],
})

const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://paloxanto.com"

export const metadata: Metadata = {
  metadataBase: new URL(appUrl),
  title: {
    default: "Palo Xanto — Raw Majik from the High Desert",
    template: "%s · Palo Xanto",
  },
  description:
    "Palo Xanto is a lyric poet and sound conjurer making raw desert music in Joshua Tree, California.",
  openGraph: {
    title: "Palo Xanto — Raw Majik from the High Desert",
    description:
      "Blues-soaked guitar, dust-blown beats, lyric poetry, and Homestead Sessions.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Palo Xanto — Raw Majik from the High Desert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Palo Xanto — Raw Majik from the High Desert",
    description:
      "Blues-soaked guitar, dust-blown beats, lyric poetry, and Homestead Sessions.",
    images: ["/og.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${display.variable} ${body.variable} flex min-h-screen flex-col`}
      >
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <SignalBar />
      </body>
    </html>
  )
}
