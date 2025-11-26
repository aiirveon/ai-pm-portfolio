import { Lightbulb, AlertCircle, Zap } from "lucide-react"

interface LearningSectionProps {
  wentWell: string[]
  challenges: string[]
  doDifferently: string[]
  keyTakeaway: string
  videoUrl?: string
}

export function LearningsSection({ wentWell, challenges, doDifferently, keyTakeaway, videoUrl }: LearningSectionProps) {
  return (
    <section id="learnings" className="py-20 px-4 bg-slate-50 dark:bg-jungle-900/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Learnings & Reflections</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-slate-200 dark:border-jungle-700 bg-white dark:bg-jungle-800/30 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-jungle-100 dark:bg-jungle-700/50 text-jungle-600 dark:text-jungle-400 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg text-slate-800 dark:text-white">What Went Well</h3>
              </div>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                {wentWell.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-jungle-500">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 dark:border-jungle-700 bg-white dark:bg-jungle-800/30 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-500 flex items-center justify-center">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg text-slate-800 dark:text-white">Challenges Faced</h3>
              </div>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                {challenges.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-red-500">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 dark:border-jungle-700 bg-white dark:bg-jungle-800/30 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-500 flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg text-slate-800 dark:text-white">What I'd Do Differently</h3>
              </div>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                {doDifferently.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-blue-500">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-6 rounded-xl border-l-4 border-jungle-500 bg-jungle-50 dark:bg-jungle-800/30">
            <p className="text-lg font-semibold text-slate-800 dark:text-white italic">
              "{keyTakeaway}"
            </p>
          </div>

          {videoUrl && (
            <div className="relative h-80 rounded-xl bg-slate-100 dark:bg-jungle-800 border border-slate-200 dark:border-jungle-700 flex items-center justify-center">
              <p className="text-slate-500 dark:text-slate-400">[Video: Project Retrospective]</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
