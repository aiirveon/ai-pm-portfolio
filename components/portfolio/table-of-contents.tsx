"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

const sections = [
  { id: "hero", label: "Home" },
  { id: "executive-summary", label: "Executive Summary" },
  { id: "problem", label: "Problem Statement" },
  { id: "personas", label: "User Personas" },
  { id: "solution", label: "Solution" },
  { id: "implementation", label: "Implementation" },
  { id: "data", label: "Data & Methodology" },
  { id: "results", label: "Results" },
  { id: "ethics", label: "Ethics & AI" },
  { id: "competitive", label: "Competitive Analysis" },
  { id: "okrs", label: "OKRs & Metrics" },
  { id: "roadmap", label: "Roadmap" },
  { id: "learnings", label: "Learnings" },
  { id: "contact", label: "Contact" },
]

export function TableOfContents() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  if (!mounted) return null

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 lg:hidden p-3 bg-jungle-500 text-white rounded-lg shadow-lg z-40 hover:bg-jungle-600 transition-colors"
        aria-label="Toggle table of contents"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-48 lg:border-r lg:border-slate-200 lg:dark:border-jungle-800 lg:bg-white lg:dark:bg-jungle-900 lg:p-8 lg:overflow-y-auto lg:flex lg:flex-col">
        <div className="space-y-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`block w-full text-left px-3 py-2 rounded-md transition-colors text-sm ${
                activeSection === section.id
                  ? "bg-jungle-100 dark:bg-jungle-800 text-jungle-600 dark:text-jungle-400 font-semibold"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 z-30 bg-white/80 dark:bg-jungle-900/80 backdrop-blur-sm lg:hidden pt-16">
          <div className="bg-white dark:bg-jungle-900 border-l border-slate-200 dark:border-jungle-800 h-screen w-64 overflow-y-auto p-4 space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`block w-full text-left px-3 py-2 rounded-md transition-colors text-sm ${
                  activeSection === section.id
                    ? "bg-jungle-100 dark:bg-jungle-800 text-jungle-600 dark:text-jungle-400 font-semibold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
