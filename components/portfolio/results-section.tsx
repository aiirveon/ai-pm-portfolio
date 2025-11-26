interface ResultComparison {
  metric: string
  before: string
  after: string
  change: string
}

interface ResultsSectionProps {
  heroMetric: {
    value: string
    label: string
  }
  comparisons: ResultComparison[]
  keyInsights: string[]
  videoUrl?: string
}

export function ResultsSection({ heroMetric, comparisons, keyInsights, videoUrl }: ResultsSectionProps) {
  return (
    <section id="results" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Proof of Impact</h2>

          <div className="p-8 rounded-2xl border-2 border-jungle-500 bg-jungle-50 dark:bg-jungle-800/30">
            <p className="text-6xl font-bold text-jungle-600 dark:text-jungle-400">{heroMetric.value}</p>
            <p className="text-xl text-slate-700 dark:text-slate-200 mt-2">{heroMetric.label}</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">Results Comparison</h3>
            <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-jungle-700">
              <table className="w-full text-sm">
                <thead className="bg-slate-100 dark:bg-jungle-800/50">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-200">Metric</th>
                    <th className="text-right py-3 px-4 font-semibold text-slate-700 dark:text-slate-200">Before</th>
                    <th className="text-right py-3 px-4 font-semibold text-slate-700 dark:text-slate-200">After</th>
                    <th className="text-right py-3 px-4 font-semibold text-slate-700 dark:text-slate-200">Change</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-jungle-800/30">
                  {comparisons.map((item, i) => (
                    <tr key={i} className="border-t border-slate-200 dark:border-jungle-700 hover:bg-slate-50 dark:hover:bg-jungle-800/50">
                      <td className="py-3 px-4 text-slate-800 dark:text-white">{item.metric}</td>
                      <td className="text-right py-3 px-4 text-slate-500 dark:text-slate-400">{item.before}</td>
                      <td className="text-right py-3 px-4 font-semibold text-slate-800 dark:text-white">{item.after}</td>
                      <td className="text-right py-3 px-4 text-jungle-600 dark:text-jungle-400 font-semibold">{item.change}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">Key Insights</h3>
            <div className="p-6 rounded-xl border border-slate-200 dark:border-jungle-700 bg-white dark:bg-jungle-800/30 space-y-3">
              {keyInsights.map((insight, i) => (
                <p key={i} className="text-slate-600 dark:text-slate-300">{insight}</p>
              ))}
            </div>
          </div>

          {videoUrl && (
            <div className="relative h-80 rounded-xl bg-slate-100 dark:bg-jungle-800 border border-slate-200 dark:border-jungle-700 flex items-center justify-center">
              <p className="text-slate-500 dark:text-slate-400">[Video: Backtest Analysis]</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
