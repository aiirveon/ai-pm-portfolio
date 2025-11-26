import { CheckCircle2, Circle } from "lucide-react"

interface Milestone {
  title: string
  description?: string
}

interface RoadmapPhase {
  phase: string
  items: Milestone[]
  status: "completed" | "in-progress" | "planned"
}

interface RoadmapSectionProps {
  milestones: RoadmapPhase[]
  videoUrl?: string
}

export function RoadmapSection({ milestones, videoUrl }: RoadmapSectionProps) {
  return (
    <section id="roadmap" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Roadmap & Future Vision</h2>

          <div className="space-y-8">
            {milestones.map((milestone, i) => (
              <div key={i} className="space-y-4">
                <div className="flex items-center gap-3">
                  {milestone.status === "completed" ? (
                    <CheckCircle2 className="w-6 h-6 text-jungle-500" />
                  ) : (
                    <Circle className="w-6 h-6 text-slate-400 dark:text-slate-500" />
                  )}
                  <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">{milestone.phase}</h3>
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded ${
                      milestone.status === "completed"
                        ? "bg-jungle-100 dark:bg-jungle-700/50 text-jungle-700 dark:text-jungle-300"
                        : milestone.status === "in-progress"
                          ? "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                    }`}
                  >
                    {milestone.status === "completed"
                      ? "Completed"
                      : milestone.status === "in-progress"
                        ? "In Progress"
                        : "Planned"}
                  </span>
                </div>
                <ul className="space-y-2 ml-9">
                  {milestone.items.map((item, j) => (
                    <li key={j} className="flex gap-3 text-slate-600 dark:text-slate-300">
                      <span className="text-jungle-500">→</span>
                      <span>{typeof item === 'string' ? item : item.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {videoUrl && (
            <div className="relative h-80 rounded-xl bg-slate-100 dark:bg-jungle-800 border border-slate-200 dark:border-jungle-700 flex items-center justify-center">
              <p className="text-slate-500 dark:text-slate-400">[Video: Product Roadmap]</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
