"use client"

import { useState } from "react"
import { AlertTriangle, ChevronDown, ChevronUp } from "lucide-react"

interface Risk {
  id: string
  category: string
  risk: string
  likelihood: number
  impact: number
  score: number
  level: string
  mitigation: string
  residualScore: number
  owner: string
}

interface ContingencyPlan {
  risk: string
  trigger: string
  action: string
}

interface MonitoringItem {
  frequency: string
  risks: string[]
}

interface DeepDive {
  riskMatrix: string
  contingencyPlans: ContingencyPlan[]
  monitoringCadence: MonitoringItem[]
}

interface RiskRegisterSectionProps {
  introduction: string
  topRisks: Risk[]
  deepDive: DeepDive
}

export function RiskRegisterSection({ introduction, topRisks, deepDive }: RiskRegisterSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const getRiskColor = (level: string) => {
    switch (level) {
      case "CRITICAL":
        return "bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300 border-red-300 dark:border-red-700"
      case "HIGH":
        return "bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-300 border-orange-300 dark:border-orange-700"
      case "MEDIUM":
        return "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-300 border-yellow-300 dark:border-yellow-700"
      default:
        return "bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 border-green-300 dark:border-green-700"
    }
  }

  return (
    <section id="risk-register" className="py-16 md:py-24 bg-gray-50 dark:bg-jungle-900">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="flex items-start gap-4 mb-8">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Risk Register
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {introduction}
              </p>
            </div>
          </div>

          {/* Top Risks */}
          <div className="space-y-6">
            {topRisks.map((risk) => (
              <div
                key={risk.id}
                className={`p-6 rounded-xl border-2 ${getRiskColor(risk.level)}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono font-semibold">{risk.id}</span>
                      <span className="text-xs font-semibold px-2 py-1 rounded-full bg-white/50 dark:bg-black/20">
                        {risk.level}
                      </span>
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        {risk.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{risk.risk}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold mb-1">{risk.score}</div>
                    <div className="text-xs opacity-75">
                      L:{risk.likelihood} × I:{risk.impact}
                    </div>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold">Mitigation: </span>
                    <span className="opacity-90">{risk.mitigation}</span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-current/20">
                    <span className="text-xs">
                      <span className="font-semibold">Residual Risk:</span> {risk.residualScore} (reduced from {risk.score})
                    </span>
                    <span className="text-xs">
                      <span className="font-semibold">Owner:</span> {risk.owner}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Expand/Collapse Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-8 w-full flex items-center justify-center gap-2 px-6 py-4 bg-white dark:bg-jungle-800 rounded-xl border-2 border-gray-200 dark:border-jungle-700 hover:border-accent-500 dark:hover:border-accent-400 transition-all group"
          >
            <span className="font-semibold text-gray-900 dark:text-white">
              {isExpanded ? "Hide" : "Show"} Full Risk Analysis (Risk Matrix, Contingency Plans, Monitoring)
            </span>
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-accent-600 dark:text-accent-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-accent-600 dark:text-accent-400 group-hover:translate-y-0.5 transition-transform" />
            )}
          </button>

          {/* Expanded Deep Dive Content */}
          {isExpanded && (
            <div className="mt-8 p-8 bg-white dark:bg-jungle-800 rounded-2xl border-2 border-gray-200 dark:border-jungle-700 space-y-8">
              {/* Risk Matrix */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Risk Scoring Matrix
                </h3>
                <pre className="p-4 bg-gray-50 dark:bg-jungle-900 rounded-lg overflow-x-auto text-xs font-mono text-gray-700 dark:text-gray-300">
                  {deepDive.riskMatrix}
                </pre>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-semibold">Risk Levels:</span> CRITICAL (16-25) = Immediate action required | HIGH (10-15) = Active mitigation | MEDIUM (5-9) = Contingency plan | LOW (1-4) = Accepted risk
                </p>
              </div>

              {/* Contingency Plans */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Contingency Plans
                </h3>
                <div className="space-y-4">
                  {deepDive.contingencyPlans.map((plan, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gray-50 dark:bg-jungle-900 rounded-lg"
                    >
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                        {plan.risk}
                      </h4>
                      <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                        <div>
                          <span className="font-semibold text-red-600 dark:text-red-400">Trigger: </span>
                          {plan.trigger}
                        </div>
                        <div>
                          <span className="font-semibold text-green-600 dark:text-green-400">Action: </span>
                          {plan.action}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Monitoring Cadence */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Monitoring Cadence
                </h3>
                <div className="space-y-4">
                  {deepDive.monitoringCadence.map((item, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gray-50 dark:bg-jungle-900 rounded-lg"
                    >
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                        {item.frequency} Review
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        {item.risks.map((risk, riskIndex) => (
                          <li key={riskIndex}>{risk}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
