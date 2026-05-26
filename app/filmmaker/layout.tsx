"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const NAV_LINKS = [
  { name: "Work", href: "#work" },
  { name: "Process", href: "#process" },
  { name: "Resources", href: "#resources" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
]

function FilmmakerNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(8px)" : "none",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/filmmaker" className="hover:opacity-80 transition-opacity">
              <span className="font-bold text-xl" style={{ color: "#D97706" }}>Osaheni</span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium transition-opacity hover:opacity-70"
                  style={{ color: "#f5f5f5" }}
                >
                  {link.name}
                </a>
              ))}
              <Link
                href="/"
                className="text-sm transition-opacity hover:opacity-70"
                style={{ color: "#9ca3af" }}
              >
                AI PM Portfolio →
              </Link>
            </nav>

            <button
              className="md:hidden p-2 transition-opacity hover:opacity-70"
              style={{ color: "#f5f5f5" }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div
          className="fixed inset-0 z-40 pt-16 md:hidden"
          style={{ backgroundColor: "rgba(10,10,10,0.98)" }}
        >
          <nav className="container mx-auto px-4 py-8 flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium transition-opacity hover:opacity-70"
                style={{ color: "#f5f5f5" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Link
              href="/"
              className="text-base transition-opacity hover:opacity-70"
              style={{ color: "#9ca3af" }}
              onClick={() => setMenuOpen(false)}
            >
              AI PM Portfolio →
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}

export default function FilmmakerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ backgroundColor: "#0a0a0a", minHeight: "100vh" }}>
      <FilmmakerNavbar />
      {children}
    </div>
  )
}
