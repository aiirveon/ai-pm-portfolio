import { AlertCircle } from "lucide-react"

interface ProblemSectionProps {
  paragraphs: string[]
  keyInsight: string
  videoUrl?: string
}

export function ProblemSection({ paragraphs, keyInsight, videoUrl }: ProblemSectionProps) {
  return (
    <section id="problem" className="py-20 px-4 bg-slate-50 dark:bg-jungle-900/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-jungle-100 dark:bg-jungle-700/50 text-jungle-600 dark:text-jungle-400 flex items-center justify-center">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Problem Statement</h2>
          </div>

          <div className="space-y-6 max-w-3xl">
            {paragraphs.map((paragraph, i) => (
              <p key={i} className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="p-6 rounded-xl border-l-4 border-jungle-500 bg-jungle-50 dark:bg-jungle-800/30">
            <p className="text-lg font-semibold text-slate-800 dark:text-white italic">
              "{keyInsight}"
            </p>
          </div>

          {videoUrl && (
            <div className="relative h-80 rounded-xl bg-slate-100 dark:bg-jungle-800 border border-slate-200 dark:border-jungle-700 flex items-center justify-center">
              <p className="text-slate-500 dark:text-slate-400">[Video: Problem Overview]</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
