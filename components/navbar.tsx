"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/theme-toggle"
import { Menu, X, Leaf, ArrowLeft } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const isProjectPage = pathname.startsWith("/projects/")

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#projects" },
    { name: "Services", href: "/#services" },
    { name: "Blog", href: "/#blog" },
    { name: "Contact", href: "/#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    
    // If we're on home page and it's a hash link, scroll smoothly
    if (isHomePage && href.startsWith("/#")) {
      const sectionId = href.replace("/#", "")
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    } else if (isHomePage && href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
    // Otherwise, the Link component will handle navigation
  }

  return (
    <>
      <header
        className={`fixed top-0 right-0 z-50 transition-all duration-300 ${
          isProjectPage ? "left-0 lg:left-48" : "left-0"
        } ${
          isScrolled ? "bg-white/90 dark:bg-jungle-900/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <img src="/images/kihuni.png" alt="Stephen Kihuni" className="h-10 w-10 rounded-md" />
                <div className="font-bold text-xl text-slate-800 dark:text-white flex items-center">
                  Ogbebor<span className="text-jungle-500 dark:text-jungle-300">Osaheni</span>
                  <Leaf className="h-4 w-4 ml-1 text-jungle-500 dark:text-jungle-300" />
                </div>
              </Link>
              
              {/* Back to Projects - Only show on project pages */}
              {isProjectPage && (
                <Link 
                  href="/#projects" 
                  className="hidden md:inline-flex items-center text-sm text-jungle-600 dark:text-jungle-400 hover:underline"
                >
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Back to Projects
                </Link>
              )}
            </div>



            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  asChild
                  className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                >
                  <Link href={item.href} onClick={() => handleNavClick(item.href)}>
                    {item.name}
                  </Link>
                </Button>
              ))}
              <ThemeToggle />
            </nav>

            {/* Mobile Navigation Toggle */}
            <div className="flex items-center md:hidden gap-2">
              <ThemeToggle />
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-slate-800 dark:text-white" />
                ) : (
                  <Menu className="h-6 w-6 text-slate-800 dark:text-white" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && isMobile && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-jungle-900/95 pt-16">
          <nav className="container mx-auto px-4 py-8 flex flex-col gap-4">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                asChild
                className="w-full justify-start text-lg py-4 text-slate-800 dark:text-white"
              >
                <Link href={item.href} onClick={() => handleNavClick(item.href)}>
                  {item.name}
                </Link>
              </Button>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
