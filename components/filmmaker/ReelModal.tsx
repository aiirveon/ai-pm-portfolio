"use client"

import { useEffect } from "react"

interface ReelModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ReelModal({ isOpen, onClose }: ReelModalProps) {
  useEffect(() => {
    if (!isOpen) return

    document.body.style.overflow = "hidden"

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "rgba(0,0,0,0.9)" }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute top-4 right-5 text-3xl leading-none transition-opacity hover:opacity-60"
        style={{ color: "#f5f5f5" }}
      >
        ×
      </button>

      {/* Video — stop propagation so clicking on it doesn't close the modal */}
      <div
        className="relative w-[90vw] aspect-video"
        style={{ maxWidth: "1100px" }}
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/uqQBb4p8w5o?autoplay=1&rel=0&modestbranding=1"
          title="2026 Reel"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ border: "none" }}
        />
      </div>
    </div>
  )
}
