'use client'

import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

function getYouTubeEmbedUrl(url: string): string {
  const match = url.match(/[?&]v=([^&]+)/)
  return match ? `https://www.youtube.com/embed/${match[1]}` : url
}

interface MediaSwitcherProps {
  youtubeUrl: string
  images: string[]
  projectName: string
}

export function MediaSwitcher({ youtubeUrl, images, projectName }: MediaSwitcherProps) {
  const [activeTab, setActiveTab] = useState<'walkthrough' | 'images'>('walkthrough')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  function prev() {
    setCurrentIndex(i => (i - 1 + images.length) % images.length)
  }

  function next() {
    setCurrentIndex(i => (i + 1) % images.length)
  }

  const lightboxPrev = useCallback(() => {
    setLightboxIndex(i => i === null ? null : (i - 1 + images.length) % images.length)
  }, [images.length])

  const lightboxNext = useCallback(() => {
    setLightboxIndex(i => i === null ? null : (i + 1) % images.length)
  }, [images.length])

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])

  useEffect(() => {
    if (lightboxIndex === null) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') lightboxPrev()
      if (e.key === 'ArrowRight') lightboxNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxIndex, closeLightbox, lightboxPrev, lightboxNext])

  return (
    <>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex justify-end">
        <div className="flex gap-0.5 rounded-md border border-jungle-200 dark:border-jungle-700 bg-jungle-50 dark:bg-jungle-900/50 p-0.5">
          <button
            onClick={() => setActiveTab('walkthrough')}
            className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
              activeTab === 'walkthrough'
                ? 'bg-jungle-500 text-white'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
            }`}
          >
            Video
          </button>
          <button
            onClick={() => { setActiveTab('images'); setCurrentIndex(0) }}
            className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
              activeTab === 'images'
                ? 'bg-jungle-500 text-white'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
            }`}
          >
            Images
          </button>
        </div>
        </div>

        <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl bg-gradient-to-br from-jungle-100 via-jungle-50 to-jungle-100 dark:from-jungle-800 dark:via-jungle-900 dark:to-jungle-800 border border-jungle-200 dark:border-jungle-700 overflow-hidden">
          {activeTab === 'walkthrough' ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={getYouTubeEmbedUrl(youtubeUrl)}
              title={projectName}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <>
              <img
                src={images[currentIndex]}
                alt={`${projectName} image ${currentIndex + 1}`}
                className="absolute inset-0 w-full h-full object-contain cursor-zoom-in"
                onClick={() => setLightboxIndex(currentIndex)}
              />

              {images.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-jungle-900/60 text-white hover:bg-jungle-900/80 transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-jungle-900/60 text-white hover:bg-jungle-900/80 transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          i === currentIndex
                            ? 'bg-jungle-400'
                            : 'bg-jungle-200/60 dark:bg-jungle-600/60'
                        }`}
                        aria-label={`Go to image ${i + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 rounded-full bg-jungle-900/60 text-white hover:bg-jungle-900/80 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <img
            src={images[lightboxIndex]}
            alt={`${projectName} image ${lightboxIndex + 1}`}
            className="max-w-[90vw] max-h-[90vh] object-contain"
            onClick={e => e.stopPropagation()}
          />

          {images.length > 1 && (
            <>
              <button
                onClick={e => { e.stopPropagation(); lightboxPrev() }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-jungle-900/60 text-white hover:bg-jungle-900/80 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={e => { e.stopPropagation(); lightboxNext() }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-jungle-900/60 text-white hover:bg-jungle-900/80 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>
      )}
    </>
  )
}
