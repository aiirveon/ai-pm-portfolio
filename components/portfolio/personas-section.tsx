interface PersonaProps {
  name: string
  role: string
  goals: string[]
  painPoints: string[]
  quote: string
}

function PersonaCard({ name, role, goals, painPoints, quote }: PersonaProps) {
  return (
    <div className="p-6 rounded-xl border border-slate-200 dark:border-jungle-700 bg-white dark:bg-jungle-800/30 hover:border-jungle-500 hover:shadow-lg transition-all space-y-4">
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-jungle-500 to-jungle-600 flex items-center justify-center text-white text-xl font-bold">
        {name[0]}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-slate-800 dark:text-white">{name}</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">{role}</p>
      </div>

      <div>
        <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">Goals:</p>
        <ul className="space-y-1">
          {goals.map((goal, i) => (
            <li key={i} className="text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2">
              <span className="text-jungle-500 mt-1">•</span>
              <span>{goal}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">Pain Points:</p>
        <ul className="space-y-1">
          {painPoints.map((point, i) => (
            <li key={i} className="text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2">
              <span className="text-red-500 mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-3 rounded-lg bg-slate-50 dark:bg-jungle-900/50">
        <p className="text-sm text-slate-600 dark:text-slate-300 italic">"{quote}"</p>
      </div>
    </div>
  )
}

interface PersonasSectionProps {
  personas: PersonaProps[]
  videoUrl?: string
}

export function PersonasSection({ personas, videoUrl }: PersonasSectionProps) {
  return (
    <section id="personas" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white">User Personas</h2>

          <div className="grid lg:grid-cols-3 gap-6">
            {personas.map((persona, i) => (
              <PersonaCard key={i} {...persona} />
            ))}
          </div>

          {videoUrl && (
            <div className="relative h-80 rounded-xl bg-slate-100 dark:bg-jungle-800 border border-slate-200 dark:border-jungle-700 flex items-center justify-center">
              <p className="text-slate-500 dark:text-slate-400">[Video: User Research Process]</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
