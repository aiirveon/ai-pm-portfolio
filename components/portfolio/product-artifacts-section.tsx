"use client"

import { ExternalLink } from "lucide-react"

interface Artifact {
  icon: React.ReactNode
  title: string
  description: string
  githubUrl: string
  highlights: string[]
}

interface ProductArtifactsSectionProps {
  introduction: string
  artifacts: Artifact[]
}

export function ProductArtifactsSection({ introduction, artifacts }: ProductArtifactsSectionProps) {
  return (
    <section id="artifacts" className="py-16 md:py-24 bg-white dark:bg-jungle-950">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Product Management Artifacts
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {introduction}
            </p>
          </div>

          {/* Artifacts Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {artifacts.map((artifact, index) => (
              <a
                key={index}
                href={artifact.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-gray-50 dark:bg-jungle-900 rounded-xl border-2 border-gray-200 dark:border-jungle-800 hover:border-accent-500 dark:hover:border-accent-400 transition-all hover:shadow-lg"
              >
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-100 dark:bg-accent-900/20 flex items-center justify-center text-accent-600 dark:text-accent-400">
                    {artifact.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                        {artifact.title}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors" />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {artifact.description}
                    </p>
                  </div>
                </div>

                {/* Highlights */}
                <div className="pt-4 border-t border-gray-200 dark:border-jungle-800">
                  <ul className="space-y-2">
                    {artifact.highlights.map((highlight, highlightIndex) => (
                      <li
                        key={highlightIndex}
                        className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2"
                      >
                        <span className="text-accent-600 dark:text-accent-400 mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* GitHub Link Hint */}
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-jungle-800">
                  <span className="text-xs text-gray-500 dark:text-gray-500 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                    View on GitHub →
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 p-6 bg-accent-50 dark:bg-accent-900/10 rounded-xl border-2 border-accent-200 dark:border-accent-800">
            <p className="text-center text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Want the full details?</span> All 7 artifacts are available on{" "}
              <a
                href="https://github.com/aiirveon/ai-dynamic-pricing/tree/main/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-600 dark:text-accent-400 hover:underline font-semibold"
              >
                GitHub /docs folder
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
