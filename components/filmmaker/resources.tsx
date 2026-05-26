"use client"

import { useState } from "react"
import DownloadModal from "@/components/DownloadModal"

const BULLETS = [
  "13-category prompt framework explained",
  "Real prompts paired with their generated images",
  "Character sheet and location reference methodology",
  "Common AI generation failure modes and exact fixes",
  "Seedance 2500-character limit workflow",
  "DaVinci Resolve colour grade approach",
]

export default function FilmmakerResources() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section id="resources" className="py-24" style={{ backgroundColor: "#111111" }}>
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl md:text-5xl font-bold mb-16"
          style={{ color: "#f5f5f5" }}
        >
          The Prompt Guide
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: description */}
          <div>
            <h3
              className="text-2xl font-bold mb-3"
              style={{ color: "#f5f5f5" }}
            >
              AI Commercial Production: Prompts, Images &amp; Process
            </h3>
            <p className="text-base leading-relaxed mb-6" style={{ color: "#9ca3af" }}>
              The complete prompt framework from a 15-second biblical spec ad — including the 13 prompt categories, real generation examples, common failure modes and how to fix them, and the Seedance character limit workflow.
            </p>

            <ul className="space-y-3 mb-8">
              {BULLETS.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-sm" style={{ color: "#9ca3af" }}>
                  <span style={{ color: "#D97706" }} className="mt-0.5 flex-shrink-0">▸</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm mb-6" style={{ color: "#6b7280" }}>
              Free download — enter your email
            </p>

            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center justify-center px-6 py-3 rounded-sm font-semibold text-sm transition-opacity hover:opacity-80 mb-4"
              style={{ backgroundColor: "#D97706", color: "#0a0a0a" }}
            >
              Download the Guide
            </button>

            <p className="text-xs" style={{ color: "#6b7280" }}>
              Your email is only used to send you the guide. Not added to any list.
            </p>
          </div>

          {/* Right: mock PDF cover */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="w-full max-w-xs aspect-[3/4] flex flex-col justify-between p-8 border"
              style={{
                backgroundColor: "#0a0a0a",
                borderColor: "#1f1f1f",
              }}
            >
              {/* Top accent line */}
              <div
                className="w-12 h-0.5 mb-6"
                style={{ backgroundColor: "#D97706" }}
              />

              <div className="flex-1 flex flex-col justify-center">
                {/* Geometric accent */}
                <div className="flex gap-2 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="h-px flex-1"
                      style={{ backgroundColor: i < 3 ? "#D97706" : "#1f1f1f" }}
                    />
                  ))}
                </div>

                <h4
                  className="text-xl font-bold leading-snug mb-3"
                  style={{ color: "#D97706" }}
                >
                  AI Commercial Production Guide
                </h4>
                <p className="text-xs" style={{ color: "#9ca3af" }}>
                  Prompts, Images &amp; Process
                </p>
              </div>

              <div
                className="pt-6 border-t text-xs flex items-center justify-between"
                style={{ borderColor: "#1f1f1f", color: "#9ca3af" }}
              >
                <span>Osaheni</span>
                <span>2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DownloadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        artefactId="filmmaker-prompt-guide"
        project="AI Filmmaker"
        artefactName="AI Commercial Production — Prompt Guide"
      />
    </section>
  )
}
