"use client"

import { useState } from "react"
import { Download } from "lucide-react"
import DownloadModal from "@/components/DownloadModal"

type Artefact = { name: string; artefactId: string; project: string; unavailable?: boolean }

function ArtefactRow({
  name,
  onDownload,
  unavailable,
}: {
  name: string
  onDownload: () => void
  unavailable?: boolean
}) {
  const [showMsg, setShowMsg] = useState(false)

  if (unavailable) {
    return (
      <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-jungle-800 last:border-0">
        <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{name}</span>
        <div className="flex items-center gap-2 ml-4 shrink-0">
          {showMsg && (
            <span className="text-xs text-gray-400 dark:text-gray-500 italic">
              Available on request
            </span>
          )}
          <button
            onClick={() => setShowMsg(true)}
            className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border border-gray-200 dark:border-jungle-800 text-gray-400 dark:text-gray-600 cursor-not-allowed whitespace-nowrap"
          >
            <Download className="w-3 h-3" />
            Download
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-jungle-800 last:border-0">
      <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{name}</span>
      <button
        onClick={onDownload}
        className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border border-gray-300 dark:border-jungle-700 text-gray-600 dark:text-gray-400 hover:border-jungle-500 dark:hover:border-jungle-400 hover:text-jungle-600 dark:hover:text-jungle-300 transition-colors whitespace-nowrap ml-4 shrink-0"
      >
        <Download className="w-3 h-3" />
        Download
      </button>
    </div>
  )
}

export function PmArtefactsSection({
  projectArtefacts = [],
}: {
  projectArtefacts?: Artefact[]
}) {
  const [selected, setSelected] = useState<Artefact | null>(null)

  return (
    <section id="pm-artefacts" className="py-16 md:py-24 bg-gray-50 dark:bg-jungle-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              PM Artefacts
            </h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Written before any code. Every project ships with a full PM artefact set.
            </p>
          </div>
          <div className="bg-white dark:bg-jungle-900 rounded-xl border border-gray-200 dark:border-jungle-800 px-6 py-2">
            {projectArtefacts.map((artefact) => (
              <ArtefactRow
                key={artefact.artefactId}
                name={artefact.name}
                unavailable={artefact.unavailable}
                onDownload={() => setSelected(artefact)}
              />
            ))}
          </div>
        </div>
      </div>

      {selected && (
        <DownloadModal
          isOpen={true}
          onClose={() => setSelected(null)}
          artefactId={selected.artefactId}
          project={selected.project}
          artefactName={selected.name}
        />
      )}
    </section>
  )
}
