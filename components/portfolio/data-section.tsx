interface DataDictEntry {
  feature: string
  type: string
  description: string
  source: string
}

interface DataSectionProps {
  dataDict: DataDictEntry[]
  methodology: string
  validationMethods: string[]
  videoUrl?: string
}

export function DataSection({ dataDict, methodology, validationMethods, videoUrl }: DataSectionProps) {
  return (
    <section id="data" className="py-20 px-4 bg-slate-50 dark:bg-jungle-900/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Data & Methodology</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">Data Dictionary</h3>
              <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-jungle-700">
                <table className="w-full text-sm">
                  <thead className="bg-slate-100 dark:bg-jungle-800/50">
                    <tr>
                      <th className="text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-200">Feature</th>
                      <th className="text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-200">Type</th>
                      <th className="text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-200">Description</th>
                      <th className="text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-200">Source</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-jungle-800/30">
                    {dataDict.map((item, i) => (
                      <tr key={i} className="border-t border-slate-200 dark:border-jungle-700 hover:bg-slate-50 dark:hover:bg-jungle-800/50">
                        <td className="py-3 px-4 text-slate-800 dark:text-white font-medium">{item.feature}</td>
                        <td className="py-3 px-4 text-slate-500 dark:text-slate-400">{item.type}</td>
                        <td className="py-3 px-4 text-slate-600 dark:text-slate-300">{item.description}</td>
                        <td className="py-3 px-4 text-slate-500 dark:text-slate-400">{item.source}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">Methodology</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {methodology}
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 dark:border-jungle-700 bg-white dark:bg-jungle-800/30">
              <h4 className="font-semibold text-slate-800 dark:text-white mb-3">Validation Approach</h4>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                {validationMethods.map((method, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-jungle-500">•</span>
                    <span>{method}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {videoUrl && (
            <div className="relative h-80 rounded-xl bg-slate-100 dark:bg-jungle-800 border border-slate-200 dark:border-jungle-700 flex items-center justify-center">
              <p className="text-slate-500 dark:text-slate-400">[Video: Data Pipeline Explanation]</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
