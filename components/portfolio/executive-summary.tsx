"use client"

import { MetricCard } from "./metric-card"
import { BarChart3, TrendingUp, Users, Zap } from "lucide-react"
import type { ReactNode } from "react"

interface Metric {
  icon: ReactNode
  value: string
  label: string
  description: string
}

interface ExecutiveSummaryProps {
  description: string
  metrics: Metric[]
  videoUrl?: string
}

export function ExecutiveSummary({ description, metrics, videoUrl }: ExecutiveSummaryProps) {
  return (
    <section id="executive-summary" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Executive Summary</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
              {description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((metric, i) => (
              <MetricCard
                key={i}
                icon={metric.icon}
                value={metric.value}
                label={metric.label}
                description={metric.description}
              />
            ))}
          </div>

          {videoUrl && (
            <div className="relative h-80 rounded-xl bg-slate-100 dark:bg-jungle-800 border border-slate-200 dark:border-jungle-700 flex items-center justify-center">
              <p className="text-slate-500 dark:text-slate-400">[Video: Project Overview]</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
