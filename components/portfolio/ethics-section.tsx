import { ShieldAlert } from "lucide-react"

interface Principle {
  title: string
  description: string
}

interface Guardrail {
  rule: string
  threshold: string
  rationale: string
}

interface EthicsSectionProps {
  principles: Principle[]
  guardrails: Guardrail[]
  biasAuditDescription?: string
  videoUrl?: string
}

export function EthicsSection({ principles, guardrails, biasAuditDescription, videoUrl }: EthicsSectionProps) {
  return (
    <section id="ethics" className="py-20 px-4 bg-slate-50 dark:bg-jungle-900/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-jungle-100 dark:bg-jungle-700/50 text-jungle-600 dark:text-jungle-400 flex items-center justify-center">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Ethics & Responsible AI</h2>
          </div>

          <div className="grid lg:grid-cols-4 gap-4">
            {principles.map((principle, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-slate-200 dark:border-jungle-700 bg-white dark:bg-jungle-800/30 hover:border-jungle-500 hover:shadow-lg transition-all"
              >
                <h3 className="font-semibold text-slate-800 dark:text-white mb-2">{principle.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{principle.description}</p>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">Guardrails & Safeguards</h3>
            <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-jungle-700">
              <table className="w-full text-sm">
                <thead className="bg-slate-100 dark:bg-jungle-800/50">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-200">Rule</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-200">Threshold</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-200">Rationale</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-jungle-800/30">
                  {guardrails.map((item, i) => (
                    <tr key={i} className="border-t border-slate-200 dark:border-jungle-700 hover:bg-slate-50 dark:hover:bg-jungle-800/50">
                      <td className="py-3 px-4 font-medium text-slate-800 dark:text-white">{item.rule}</td>
                      <td className="py-3 px-4 text-jungle-600 dark:text-jungle-400 font-mono">{item.threshold}</td>
                      <td className="py-3 px-4 text-slate-600 dark:text-slate-300">{item.rationale}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {biasAuditDescription && (
            <div className="p-6 rounded-xl border border-slate-200 dark:border-jungle-700 bg-white dark:bg-jungle-800/30">
              <h4 className="font-semibold text-slate-800 dark:text-white mb-3">Bias Audit & Fairness Assessment</h4>
              <p className="text-slate-600 dark:text-slate-300 mb-4">{biasAuditDescription}</p>
              <div className="relative h-64 rounded-lg bg-slate-100 dark:bg-jungle-900/50 border border-slate-200 dark:border-jungle-700 flex items-center justify-center">
                <p className="text-slate-500 dark:text-slate-400 text-sm">[Image: Bias Audit Results]</p>
              </div>
            </div>
          )}

          {videoUrl && (
            <div className="relative h-80 rounded-xl bg-slate-100 dark:bg-jungle-800 border border-slate-200 dark:border-jungle-700 flex items-center justify-center">
              <p className="text-slate-500 dark:text-slate-400">[Video: Ethics Framework]</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
