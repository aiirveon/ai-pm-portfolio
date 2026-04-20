import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Ogbebor Osaheni | AI Product Manager",
  description: "AI Product Manager building intelligent, trusted ML products. Portfolio of shipped projects in media, bias detection, and creative technology.",
  icons: {
    icon: [{ url: "/images/profile.png" }],
  },
  openGraph: {
    title: "Ogbebor Osaheni | AI Product Manager",
    description: "AI Product Manager building intelligent, trusted ML products. Portfolio of shipped projects in media, bias detection, and creative technology.",
    url: "https://osaheniogbebor.com",
    siteName: "Ogbebor Osaheni",
    images: [
      {
        url: "https://osaheniogbebor.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ogbebor Osaheni — AI Product Manager",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ogbebor Osaheni | AI Product Manager",
    description: "AI Product Manager building intelligent, trusted ML products.",
    images: ["https://osaheniogbebor.com/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
