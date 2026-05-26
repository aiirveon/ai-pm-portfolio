const STAGES = [
  { num: "01", name: "Concept & Story", tool: "Creative brief" },
  { num: "02", name: "Character Design", tool: "Higgsfield Soul Cinema" },
  { num: "03", name: "Location Design", tool: "Higgsfield Soul Cinema" },
  { num: "04", name: "Shot List", tool: "Structured prompt sheet" },
  { num: "05", name: "Prompt Engineering", tool: "13-category framework" },
  { num: "06", name: "AI Generation", tool: "Higgsfield Cinema Studio" },
  { num: "07", name: "Editing", tool: "DaVinci Resolve" },
  { num: "08", name: "Colour Grade", tool: "DaVinci Resolve" },
  { num: "09", name: "Sound Design & Delivery", tool: "ElevenLabs + DaVinci" },
]

export default function FilmmakerProcess() {
  return (
    <section
      id="process"
      className="py-24"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: "#f5f5f5" }}
        >
          The Process
        </h2>
        <p className="text-base mb-12" style={{ color: "#9ca3af" }}>
          From blank page to delivered spot — nine stages, zero crew.
        </p>

        {/* Desktop: horizontal scrollable row */}
        <div className="hidden md:block overflow-x-auto pb-4">
          <div className="flex gap-0 min-w-max">
            {STAGES.map((stage, i) => (
              <div key={stage.num} className="flex items-stretch">
                <StageCard stage={stage} />
                {i < STAGES.length - 1 && (
                  <div className="flex items-center px-2 flex-shrink-0">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#D97706"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ opacity: 0.5 }}
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical stack */}
        <div className="md:hidden flex flex-col gap-3">
          {STAGES.map((stage, i) => (
            <div key={stage.num}>
              <StageCard stage={stage} vertical />
              {i < STAGES.length - 1 && (
                <div className="flex justify-center py-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D97706"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ opacity: 0.5 }}
                  >
                    <path d="M12 5v14M5 12l7 7 7-7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function StageCard({
  stage,
  vertical,
}: {
  stage: { num: string; name: string; tool: string }
  vertical?: boolean
}) {
  return (
    <div
      className={`border p-4 flex-shrink-0 ${vertical ? "w-full" : "w-40"}`}
      style={{ borderColor: "#1f1f1f", backgroundColor: "#111111" }}
    >
      <span
        className="block text-2xl font-bold leading-none mb-3"
        style={{ color: "#D97706" }}
      >
        {stage.num}
      </span>
      <span
        className="block text-sm font-semibold leading-snug mb-2"
        style={{ color: "#f5f5f5" }}
      >
        {stage.name}
      </span>
      <span className="block text-xs" style={{ color: "#9ca3af" }}>
        {stage.tool}
      </span>
    </div>
  )
}
