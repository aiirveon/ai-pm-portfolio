import type { ReactNode } from "react"

interface MetricCardProps {
  icon: ReactNode
  value: string
  label: string
  description: string
}

export function MetricCard({ icon, value, label, description }: MetricCardProps) {
  return (
    <div className="p-6 rounded-xl border border-slate-200 dark:border-jungle-700 bg-white dark:bg-jungle-800/30 hover:border-jungle-500 hover:shadow-lg transition-all group">
      <div className="space-y-3">
        <div className="w-10 h-10 rounded-lg bg-jungle-100 dark:bg-jungle-700/50 text-jungle-600 dark:text-jungle-400 flex items-center justify-center group-hover:bg-jungle-200 dark:group-hover:bg-jungle-700 transition-colors">
          {icon}
        </div>
        <div>
          <div className="text-3xl font-bold text-slate-800 dark:text-white">{value}</div>
          <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{label}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{description}</p>
        </div>
      </div>
    </div>
  )
}
