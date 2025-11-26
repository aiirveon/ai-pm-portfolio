import type { ReactNode } from "react"
import { Lightbulb, Zap, BarChart3 } from "lucide-react"

interface Feature {
  icon: ReactNode
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: Feature) {
  return (
    <div className="p-6 rounded-xl border border-slate-200 dark:border-jungle-700 bg-white dark:bg-jungle-800/30 hover:border-jungle-500 hover:shadow-lg transition-all space-y-3">
      <div className="w-10 h-10 rounded-lg bg-jungle-100 dark:bg-jungle-700/50 text-jungle-600 dark:text-jungle-400 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-slate-800 dark:text-white">{title}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{description}</p>
      </div>
    </div>
  )
}

interface SolutionSectionProps {
  description: string
  features: Feature[]
  architectureImage?: string
  videoUrl?: string
}

export function SolutionSection({ description, features, architectureImage, videoUrl }: SolutionSectionProps) {
  return (
    <section id="solution" className="py-20 px-4 bg-slate-50 dark:bg-jungle-900/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Solution Overview</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
              {description}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <FeatureCard key={i} {...feature} />
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">Architecture Diagram</h3>
            <div className="relative h-96 rounded-xl bg-slate-100 dark:bg-jungle-800 border border-slate-200 dark:border-jungle-700 flex items-center justify-center overflow-hidden">
              {architectureImage ? (
                <img src={architectureImage} alt="Architecture Diagram" className="w-full h-full object-contain" />
              ) : (
                <p className="text-slate-500 dark:text-slate-400">[Image: Architecture Diagram]</p>
              )}
            </div>
          </div>

          {videoUrl && (
            <div className="relative h-80 rounded-xl bg-slate-100 dark:bg-jungle-800 border border-slate-200 dark:border-jungle-700 flex items-center justify-center">
              <p className="text-slate-500 dark:text-slate-400">[Video: Solution Walkthrough]</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
