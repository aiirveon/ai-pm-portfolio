"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface Metric {
  name: string
  baseline: string
  optimized: string
  improvement: string
}

interface PhaseProps {
  title: string
  description: string
  deliverables: string[]
  techStack: string[]
  metrics?: Metric[]
}

function PhaseCard({ title, deliverables, techStack, metrics, description }: PhaseProps) {
  const [isOpen, setIsOpen] = useState(false)

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

          <div className="relative h-60 rounded-lg bg-slate-100 dark:bg-jungle-900/50 border border-slate-200 dark:border-jungle-700 flex items-center justify-center">
            <p className="text-slate-500 dark:text-slate-400 text-sm">[Video: Phase Demo]</p>
          </div>
        </div>
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
