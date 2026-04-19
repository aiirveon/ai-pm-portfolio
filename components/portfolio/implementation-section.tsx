"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronDown, X, ChevronLeft, ChevronRight } from "lucide-react"

interface Metric {
  name: string
  baseline: string
  optimized: string
  improvement: string
}

interface PhaseImage {
  src: string
  alt: string
}

interface PhaseProps {
  title: string
  description: string
  deliverables: string[]
  techStack: string[]
  metrics?: Metric[]
  images?: PhaseImage[]
}

// ============================================================================
// ImageLightbox
// ============================================================================

interface ImageLightboxProps {
  images: PhaseImage[]
  startIndex: number
  onClose: () => void
}

function ImageLightbox({ images, startIndex, onClose }: ImageLightboxProps) {
  const [current, setCurrent] = useState(startIndex)

  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [onClose, prev, next])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={onClose}
    >
      {/* X button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Close"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Counter */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white text-sm font-medium bg-black/40 px-3 py-1 rounded-full">
        {current + 1} / {images.length}
      </div>

      {/* Left arrow */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); prev() }}
          className="absolute left-3 md:left-6 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>
      )}

      {/* Image */}
      <div
        className="relative max-h-screen max-w-screen-lg w-full px-16 md:px-24 flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[current].src}
          alt={images[current].alt}
          className="max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl"
        />
      </div>

      {/* Right arrow */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); next() }}
          className="absolute right-3 md:right-6 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-7 h-7" />
        </button>
      )}
    </div>
  )
}

// ============================================================================
// PhaseCard
// ============================================================================

function PhaseCard({ title, deliverables, techStack, metrics, description, images }: PhaseProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <div className="border border-slate-200 dark:border-jungle-700 rounded-xl overflow-hidden bg-white dark:bg-jungle-800/30 hover:border-jungle-500 transition-colors">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 hover:bg-slate-50 dark:hover:bg-jungle-800/50 transition-colors"
      >
        <h3 className="font-semibold text-lg text-slate-800 dark:text-white">{title}</h3>
        <ChevronDown className={`w-5 h-5 text-slate-500 dark:text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="border-t border-slate-200 dark:border-jungle-700 p-6 space-y-6">
          <div>
            <p className="text-slate-600 dark:text-slate-300">{description}</p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-800 dark:text-white mb-3">Deliverables:</h4>
            <ul className="space-y-2">
              {deliverables.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <input type="checkbox" defaultChecked className="mt-1 accent-jungle-500" />
                  <span className="text-slate-600 dark:text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-800 dark:text-white mb-3">Tech Stack:</h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, i) => (
                <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-jungle-100 dark:bg-jungle-700/50 text-jungle-700 dark:text-jungle-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {metrics && metrics.length > 0 && (
            <div>
              <h4 className="font-semibold text-slate-800 dark:text-white mb-3">Performance Metrics:</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-jungle-700">
                      <th className="text-left py-2 px-3 text-slate-600 dark:text-slate-300">Metric</th>
                      <th className="text-right py-2 px-3 text-slate-600 dark:text-slate-300">Baseline</th>
                      <th className="text-right py-2 px-3 text-slate-600 dark:text-slate-300">Optimized</th>
                      <th className="text-right py-2 px-3 text-slate-600 dark:text-slate-300">Improvement</th>
                    </tr>
                  </thead>
                  <tbody>
                    {metrics.map((metric, i) => (
                      <tr key={i} className="border-b border-slate-100 dark:border-jungle-800">
                        <td className="py-2 px-3 text-slate-700 dark:text-slate-200">{metric.name}</td>
                        <td className="text-right py-2 px-3 text-slate-500 dark:text-slate-400">{metric.baseline}</td>
                        <td className="text-right py-2 px-3 font-semibold text-slate-800 dark:text-white">{metric.optimized}</td>
                        <td className="text-right py-2 px-3 text-jungle-600 dark:text-jungle-400 font-semibold">{metric.improvement}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {images && images.length > 0 && (
            <div>
              <h4 className="font-semibold text-slate-800 dark:text-white mb-3">Phase Outputs:</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setLightboxIndex(i)}
                    className="relative aspect-video rounded-lg overflow-hidden border border-slate-200 dark:border-jungle-700 hover:border-jungle-500 hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-jungle-500"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, 33vw"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {lightboxIndex !== null && images && (
        <ImageLightbox
          images={images}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  )
}

interface ImplementationSectionProps {
  phases: PhaseProps[]
}

export function ImplementationSection({ phases }: ImplementationSectionProps) {
  return (
    <section id="implementation" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Technical Implementation</h2>
          <div className="space-y-3">
            {phases.map((phase, i) => (
              <PhaseCard key={i} {...phase} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
