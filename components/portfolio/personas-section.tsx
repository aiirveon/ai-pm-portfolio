"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface PersonaProps {
  name: string
  role: string
  age?: string
  techComfort?: string
  goals: string[]
  painPoints: string[]
  quote: string
}

interface EmpathyMap {
  persona: string
  thinksFeels: string
  sees: string
  hears: string
  saysDoes: string
  pains: string
  gains: string
}

interface DecisionCriteria {
  persona: string
  mustHaves: string[]
  niceToHaves: string[]
  dealBreakers: string[]
}

interface ObjectionHandling {
  persona: string
  objection: string
  response: string
  evidence: string
}

interface HowWeWin {
  persona: string
  stage1: string
  stage2: string
  stage3: string
  stage4: string
}

interface DeepDive {
  empathyMaps: EmpathyMap[]
  decisionCriteria: DecisionCriteria[]
  objectionHandling: ObjectionHandling[]
  howWeWin: HowWeWin[]
}

interface PersonasSectionProps {
  introduction: string
  personas: PersonaProps[]
  deepDive?: DeepDive
}

function PersonaCard({ name, role, age, techComfort, goals, painPoints, quote }: PersonaProps) {
  return (
    <div className="p-6 rounded-xl border-2 border-gray-200 dark:border-jungle-700 bg-white dark:bg-jungle-800 hover:border-accent-500 dark:hover:border-accent-400 transition-all space-y-4">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
          {name.split(" ")[0][0]}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{role}</p>
          {age && techComfort && (
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              Age {age} • Tech: {techComfort}
            </p>
          )}
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Goals:</p>
        <ul className="space-y-1">
          {goals.map((goal, i) => (
            <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
              <span className="text-accent-600 dark:text-accent-400 mt-1">•</span>
              <span>{goal}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Pain Points:</p>
        <ul className="space-y-1">
          {painPoints.map((point, i) => (
            <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
              <span className="text-red-500 dark:text-red-400 mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-3 rounded-lg bg-gray-50 dark:bg-jungle-900">
        <p className="text-sm text-gray-600 dark:text-gray-300 italic">"{quote}"</p>
      </div>
    </div>
  )
}

export function PersonasSection({ introduction, personas, deepDive }: PersonasSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section id="personas" className="py-16 md:py-24 bg-white dark:bg-jungle-950">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              User Personas
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl">
              {introduction}
            </p>
          </div>

          {/* Persona Cards */}
          <div className="grid lg:grid-cols-3 gap-6">
            {personas.map((persona, i) => (
              <PersonaCard key={i} {...persona} />
            ))}
          </div>

          {/* Expand/Collapse Button */}
          {deepDive && (
            <>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gray-50 dark:bg-jungle-900 rounded-xl border-2 border-gray-200 dark:border-jungle-700 hover:border-accent-500 dark:hover:border-accent-400 transition-all group"
              >
                <span className="font-semibold text-gray-900 dark:text-white">
                  {isExpanded ? "Hide" : "Show"} Full Persona Analysis (Empathy Maps, Decision Criteria, Objection Handling)
                </span>
                {isExpanded ? (
                  <ChevronUp className="w-5 h-5 text-accent-600 dark:text-accent-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-accent-600 dark:text-accent-400 group-hover:translate-y-0.5 transition-transform" />
                )}
              </button>

              {/* Expanded Deep Dive Content */}
              {isExpanded && (
                <div className="space-y-12 p-8 bg-gray-50 dark:bg-jungle-900 rounded-2xl border-2 border-gray-200 dark:border-jungle-700">
                  {/* Empathy Maps */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Empathy Maps
                    </h3>
                    <div className="space-y-6">
                      {deepDive.empathyMaps.map((map, index) => (
                        <div key={index} className="p-6 bg-white dark:bg-jungle-800 rounded-xl border border-gray-200 dark:border-jungle-700">
                          <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-4">{map.persona}</h4>
                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="font-semibold text-gray-700 dark:text-gray-200 mb-1">Thinks & Feels:</p>
                              <p className="text-gray-600 dark:text-gray-300">{map.thinksFeels}</p>
                            </div>
                            <div>
                              <p className="font-semibold text-gray-700 dark:text-gray-200 mb-1">Sees:</p>
                              <p className="text-gray-600 dark:text-gray-300">{map.sees}</p>
                            </div>
                            <div>
                              <p className="font-semibold text-gray-700 dark:text-gray-200 mb-1">Hears:</p>
                              <p className="text-gray-600 dark:text-gray-300">{map.hears}</p>
                            </div>
                            <div>
                              <p className="font-semibold text-gray-700 dark:text-gray-200 mb-1">Says & Does:</p>
                              <p className="text-gray-600 dark:text-gray-300">{map.saysDoes}</p>
                            </div>
                            <div>
                              <p className="font-semibold text-red-600 dark:text-red-400 mb-1">Pains:</p>
                              <p className="text-gray-600 dark:text-gray-300">{map.pains}</p>
                            </div>
                            <div>
                              <p className="font-semibold text-green-600 dark:text-green-400 mb-1">Gains:</p>
                              <p className="text-gray-600 dark:text-gray-300">{map.gains}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Decision Criteria */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Decision Criteria
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      {deepDive.decisionCriteria.map((criteria, index) => (
                        <div key={index} className="p-4 bg-white dark:bg-jungle-800 rounded-xl border border-gray-200 dark:border-jungle-700 space-y-4">
                          <h4 className="font-bold text-gray-900 dark:text-white">{criteria.persona}</h4>
                          
                          <div>
                            <p className="text-sm font-semibold text-green-600 dark:text-green-400 mb-2">Must-Haves:</p>
                            <ul className="space-y-1">
                              {criteria.mustHaves.map((item, i) => (
                                <li key={i} className="text-xs text-gray-600 dark:text-gray-300 flex gap-2">
                                  <span className="text-green-500">✓</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">Nice-to-Haves:</p>
                            <ul className="space-y-1">
                              {criteria.niceToHaves.map((item, i) => (
                                <li key={i} className="text-xs text-gray-600 dark:text-gray-300 flex gap-2">
                                  <span className="text-blue-500">○</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <p className="text-sm font-semibold text-red-600 dark:text-red-400 mb-2">Deal-Breakers:</p>
                            <ul className="space-y-1">
                              {criteria.dealBreakers.map((item, i) => (
                                <li key={i} className="text-xs text-gray-600 dark:text-gray-300 flex gap-2">
                                  <span className="text-red-500">✗</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Objection Handling */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Objection Handling
                    </h3>
                    <div className="space-y-4">
                      {deepDive.objectionHandling.map((objection, index) => (
                        <div key={index} className="p-6 bg-white dark:bg-jungle-800 rounded-xl border border-gray-200 dark:border-jungle-700">
                          <h4 className="font-bold text-gray-900 dark:text-white mb-3">{objection.persona}</h4>
                          <div className="space-y-3 text-sm">
                            <div>
                              <span className="font-semibold text-red-600 dark:text-red-400">Objection: </span>
                              <span className="text-gray-700 dark:text-gray-300">"{objection.objection}"</span>
                            </div>
                            <div>
                              <span className="font-semibold text-green-600 dark:text-green-400">Response: </span>
                              <span className="text-gray-700 dark:text-gray-300">{objection.response}</span>
                            </div>
                            <div>
                              <span className="font-semibold text-blue-600 dark:text-blue-400">Evidence: </span>
                              <span className="text-gray-700 dark:text-gray-300">{objection.evidence}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* How We Win */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      How We Win Each Persona
                    </h3>
                    <div className="space-y-6">
                      {deepDive.howWeWin.map((strategy, index) => (
                        <div key={index} className="p-6 bg-white dark:bg-jungle-800 rounded-xl border border-gray-200 dark:border-jungle-700">
                          <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-4">{strategy.persona}</h4>
                          <div className="grid md:grid-cols-4 gap-4 text-sm">
                            <div className="p-3 bg-accent-50 dark:bg-accent-900/20 rounded-lg">
                              <p className="font-semibold text-accent-700 dark:text-accent-300 mb-2">Stage 1: Awareness</p>
                              <p className="text-gray-600 dark:text-gray-300 text-xs">{strategy.stage1}</p>
                            </div>
                            <div className="p-3 bg-accent-50 dark:bg-accent-900/20 rounded-lg">
                              <p className="font-semibold text-accent-700 dark:text-accent-300 mb-2">Stage 2: Consideration</p>
                              <p className="text-gray-600 dark:text-gray-300 text-xs">{strategy.stage2}</p>
                            </div>
                            <div className="p-3 bg-accent-50 dark:bg-accent-900/20 rounded-lg">
                              <p className="font-semibold text-accent-700 dark:text-accent-300 mb-2">Stage 3: Trial</p>
                              <p className="text-gray-600 dark:text-gray-300 text-xs">{strategy.stage3}</p>
                            </div>
                            <div className="p-3 bg-accent-50 dark:bg-accent-900/20 rounded-lg">
                              <p className="font-semibold text-accent-700 dark:text-accent-300 mb-2">Stage 4: Conversion</p>
                              <p className="text-gray-600 dark:text-gray-300 text-xs">{strategy.stage4}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  )
}
