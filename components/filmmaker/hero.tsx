"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import ReelModal from "./ReelModal"

const GRAIN_SVG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E"

export default function FilmmakerHero() {
  const [reelOpen, setReelOpen] = useState(false)

  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden"
      style={{ height: "100vh", backgroundColor: "#0a0a0a" }}
    >
      {/* Film grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("${GRAIN_SVG}")`,
          backgroundRepeat: "repeat",
          opacity: 0.07,
          mixBlendMode: "overlay",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl"
        >
          <h1 className="font-bold leading-none mb-4" style={{ fontSize: "clamp(3.5rem, 10vw, 7rem)" }}>
            <span className="block" style={{ color: "#f5f5f5" }}>
              Filmmaker<span style={{ color: "#D97706" }}>.</span>
            </span>
            <span className="block" style={{ color: "#f5f5f5" }}>
              Director<span style={{ color: "#D97706" }}>.</span>
            </span>
          </h1>

          <p
            className="text-lg md:text-xl mb-10 max-w-xl leading-relaxed"
            style={{ color: "#9ca3af" }}
          >
            I build commercials, short films, and branded content. I write the story, craft the visuals, and use the right tools.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button
              type="button"
              onClick={() => setReelOpen(true)}
              className="inline-flex items-center justify-center px-6 py-3 rounded-sm font-semibold text-sm transition-opacity hover:opacity-80"
              style={{ backgroundColor: "#D97706", color: "#0a0a0a" }}
            >
              Watch the Reel
            </button>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-sm font-semibold text-sm border-2 transition-opacity hover:opacity-80"
              style={{ borderColor: "#f5f5f5", color: "#f5f5f5", backgroundColor: "transparent" }}
            >
              Work With Me
            </a>
          </div>

        </motion.div>
      </div>

      <ReelModal isOpen={reelOpen} onClose={() => setReelOpen(false)} />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.a
          href="#work"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center justify-center transition-opacity hover:opacity-70"
          style={{ color: "rgba(245,245,245,0.4)" }}
          aria-label="Scroll down"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.a>
      </div>
    </section>
  )
}
