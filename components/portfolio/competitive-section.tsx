interface CompetitorComparison {
  feature: string
  ours: boolean
  compA: boolean
  compB: boolean
}

interface CompetitiveSectionProps {
  competitors: CompetitorComparison[]
  competitorAName: string
  competitorBName: string
  positioningStatement: string
  videoUrl?: string
}

export function CompetitiveSection({ 
  competitors, 
  competitorAName, 
  competitorBName, 
  positioningStatement, 
  videoUrl 
}: CompetitiveSectionProps) {
  return (
    <section id="competitive" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Competitive Analysis</h2>

          <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-jungle-700">
            <table className="w-full text-sm">
              <thead className="bg-slate-100 dark:bg-jungle-800/50">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-200">Feature</th>
                  <th className="text-center py-3 px-4 font-semibold text-slate-700 dark:text-slate-200">Our Solution</th>
                  <th className="text-center py-3 px-4 font-semibold text-slate-700 dark:text-slate-200">{competitorAName}</th>
                  <th className="text-center py-3 px-4 font-semibold text-slate-700 dark:text-slate-200">{competitorBName}</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-jungle-800/30">
                {competitors.map((item, i) => (
                  <tr key={i} className="border-t border-slate-200 dark:border-jungle-700 hover:bg-slate-50 dark:hover:bg-jungle-800/50">
                    <td className="py-3 px-4 text-slate-800 dark:text-white">{item.feature}</td>
                    <td className="text-center py-3 px-4">
                      <span className={item.ours ? "text-jungle-600 dark:text-jungle-400 font-semibold" : "text-slate-400"}>
                        {item.ours ? "✓" : "✗"}
                      </span>
                    </td>
                    <td className="text-center py-3 px-4">
                      <span className={item.compA ? "text-jungle-600 dark:text-jungle-400 font-semibold" : "text-slate-400"}>
                        {item.compA ? "✓" : "✗"}
                      </span>
                    </td>
                    <td className="text-center py-3 px-4">
                      <span className={item.compB ? "text-jungle-600 dark:text-jungle-400 font-semibold" : "text-slate-400"}>
                        {item.compB ? "✓" : "✗"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-6 rounded-xl border-l-4 border-jungle-500 bg-jungle-50 dark:bg-jungle-800/30">
            <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Positioning Statement</h3>
            <p className="text-slate-700 dark:text-slate-200">
              {positioningStatement}
            </p>
          </div>

          {videoUrl && (
            <div className="relative h-80 rounded-xl bg-slate-100 dark:bg-jungle-800 border border-slate-200 dark:border-jungle-700 flex items-center justify-center">
              <p className="text-slate-500 dark:text-slate-400">[Video: Market Analysis]</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
