import { Progress } from "@/components/ui/progress"

interface KeyResult {
  kr: string
  progress: number
  target?: string
}

interface SuccessMetric {
  metric: string
  target: string
  achieved: string
  status: "Achieved" | "In Progress" | "At Risk"
}

interface OkrsSectionProps {
  objective: string
  keyResults: KeyResult[]
  successMetrics: SuccessMetric[]
  videoUrl?: string
}

export function OkrsSection({ objective, keyResults, successMetrics, videoUrl }: OkrsSectionProps) {
  return (
    <section id="okrs" className="py-20 px-4 bg-slate-50 dark:bg-jungle-900/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white">OKRs & Success Metrics</h2>

          <div className="p-8 rounded-xl border-2 border-jungle-200 dark:border-jungle-700 bg-jungle-50 dark:bg-jungle-800/30">
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">Objective</h3>
            <p className="text-lg text-slate-700 dark:text-slate-200">
              {objective}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">Key Results</h3>
            <div className="space-y-4">
              {keyResults.map((item, i) => (
                <div key={i} className="space-y-2 p-4 rounded-xl border border-slate-200 dark:border-jungle-700 bg-white dark:bg-jungle-800/30">
                  <div className="flex justify-between items-center">
                    <p className="font-medium text-slate-800 dark:text-white">{item.kr}</p>
                    <span className="text-sm font-semibold text-jungle-600 dark:text-jungle-400">{item.progress}%</span>
                  </div>
                  <Progress value={item.progress} className="h-2" />
                  {item.target && (
                    <p className="text-sm text-slate-500 dark:text-slate-400">Target: {item.target}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">Success Metrics</h3>
            <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-jungle-700">
              <table className="w-full text-sm">
                <thead className="bg-slate-100 dark:bg-jungle-800/50">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-200">Metric</th>
                    <th className="text-right py-3 px-4 font-semibold text-slate-700 dark:text-slate-200">Target</th>
                    <th className="text-right py-3 px-4 font-semibold text-slate-700 dark:text-slate-200">Achieved</th>
                    <th className="text-right py-3 px-4 font-semibold text-slate-700 dark:text-slate-200">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-jungle-800/30">
                  {successMetrics.map((item, i) => (
                    <tr key={i} className="border-t border-slate-200 dark:border-jungle-700 hover:bg-slate-50 dark:hover:bg-jungle-800/50">
                      <td className="py-3 px-4 text-slate-800 dark:text-white">{item.metric}</td>
                      <td className="text-right py-3 px-4 text-slate-500 dark:text-slate-400">{item.target}</td>
                      <td className="text-right py-3 px-4 font-semibold text-slate-800 dark:text-white">{item.achieved}</td>
                      <td className="text-right py-3 px-4">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          item.status === "Achieved" 
                            ? "bg-jungle-100 dark:bg-jungle-700/50 text-jungle-700 dark:text-jungle-300"
                            : item.status === "In Progress"
                            ? "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300"
                            : "bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300"
                        }`}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {videoUrl && (
            <div className="relative h-80 rounded-xl bg-slate-100 dark:bg-jungle-800 border border-slate-200 dark:border-jungle-700 flex items-center justify-center">
              <p className="text-slate-500 dark:text-slate-400">[Video: Metrics Framework]</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
