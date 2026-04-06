"use client"

import { ExternalLink } from "lucide-react"

type Artefact = { name: string; url: string }

function ArtefactRow({ name, url }: { name: string; url: string }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-jungle-800 last:border-0">
      <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{name}</span>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border border-gray-300 dark:border-jungle-700 text-gray-600 dark:text-gray-400 hover:border-jungle-500 dark:hover:border-jungle-400 hover:text-jungle-600 dark:hover:text-jungle-300 transition-colors whitespace-nowrap ml-4 shrink-0"
      >
        <ExternalLink className="w-3 h-3" />
        Open in Notion
      </a>
    </div>
  )
}

export function PmArtefactsSection({
  projectArtefacts = [],
}: {
  projectArtefacts?: Artefact[]
}) {
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
            {projectArtefacts.map(({ name, url }) => (
              <ArtefactRow key={name} name={name} url={url} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
