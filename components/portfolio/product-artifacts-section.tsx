"use client"

import { ExternalLink } from "lucide-react"

interface Artifact {
  icon: React.ReactNode
  title: string
  description: string
  githubUrl: string
  notionUrl?: string
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
              <div
                key={index}
                className="group p-6 bg-gray-50 dark:bg-jungle-900 rounded-xl border-2 border-gray-200 dark:border-jungle-800 hover:border-accent-500 dark:hover:border-accent-400 transition-all hover:shadow-lg flex flex-col"
              >
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-100 dark:bg-accent-900/20 flex items-center justify-center text-accent-600 dark:text-accent-400">
                    {artifact.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {artifact.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {artifact.description}
                    </p>
                  </div>
                </div>

                {/* Highlights */}
                <div className="pt-4 border-t border-gray-200 dark:border-jungle-800 flex-1">
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

                {/* Links */}
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-jungle-800 flex items-center gap-3 flex-wrap">
                  <a
                    href={artifact.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                    GitHub
                  </a>
                  {artifact.notionUrl && (
                    <a
                      href={artifact.notionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-md bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:opacity-80 transition-opacity"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/>
                      </svg>
                      View in Notion
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 p-6 bg-accent-50 dark:bg-accent-900/10 rounded-xl border-2 border-accent-200 dark:border-accent-800">
            <p className="text-center text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Want the full details?</span> All artifacts are available on{" "}
              <a
                href="https://github.com/aiirveon/chromasync-app/tree/main/docs"
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
