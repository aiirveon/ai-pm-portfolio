import Link from "next/link"

function getYouTubeEmbedUrl(url: string): string {
  // Handles both https://youtu.be/ID and https://www.youtube.com/watch?v=ID formats
  const shortMatch = url.match(/youtu\.be\/([^?&]+)/)
  const longMatch = url.match(/[?&]v=([^?&]+)/)
  const id = shortMatch?.[1] || longMatch?.[1] || ""
  return `https://www.youtube.com/embed/${id}?autoplay=0&rel=0&modestbranding=1`
}

interface Project {
  title: string
  type: string
  description: string
  caseStudy: string | null
  status: "complete" | "coming-soon"
  youtube?: string
}

const PROJECTS: Project[] = [
  {
    title: "Noah's Ark × Amazon Prime",
    type: "SPEC COMMERCIAL",
    description: "A 30-second biblical epic. One forgotten item. One drone delivery.",
    caseStudy: "/filmmaker/projects/noah-ark",
    status: "complete",
    youtube: "https://youtu.be/4LEwiHJ30xY",
  },
  {
    title: "Dr. Organic Manuka Honey Rescue Cream",
    type: "SPEC COMMERCIAL",
    description: "A skincare film for all skin. Three women. One ritual. No words.",
    caseStudy: "/filmmaker/projects/manuka-rescue",
    status: "complete",
    youtube: "https://youtu.be/PLACEHOLDER",
  },
  {
    title: "Coming Soon",
    type: "SHORT FILM",
    description: "Next project in development.",
    caseStudy: null,
    status: "coming-soon",
  },
  {
    title: "Coming Soon",
    type: "BRANDED CONTENT",
    description: "Next project in development.",
    caseStudy: null,
    status: "coming-soon",
  },
]

export default function FilmmakerWork() {
  return (
    <section id="work" style={{ backgroundColor: "#0a0a0a" }} className="py-24">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl md:text-5xl font-bold mb-16"
          style={{ color: "#f5f5f5" }}
        >
          The Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title + project.type} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const isDimmed = project.status === "coming-soon"

  return (
    <div
      className="group relative flex flex-col border transition-all duration-300"
      style={{
        borderColor: "#1f1f1f",
        backgroundColor: "#0d0d0d",
        opacity: isDimmed ? 0.4 : 1,
      }}
    >
      {/* Type badge strip — sits above the thumbnail */}
      <div
        className="px-4 py-2 border-b"
        style={{
          backgroundColor: "#0a0a0a",
          borderColor: "#1f1f1f",
        }}
      >
        <span
          className="text-[10px] font-bold tracking-widest uppercase"
          style={{ color: "#D97706" }}
        >
          {project.type}
        </span>
      </div>

      {/* Thumbnail area */}
      <div
        className={`relative aspect-video w-full transition-all duration-300 ${!isDimmed ? "group-hover:border-amber-600" : ""}`}
        style={{
          backgroundColor: "#111111",
        }}
      >
        {project.youtube ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={getYouTubeEmbedUrl(project.youtube)}
            title={project.title}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ border: "none" }}
          />
        ) : (
          <span
            className="absolute inset-0 flex items-center justify-center text-xs font-bold tracking-[0.2em] uppercase"
            style={{ color: "#1f1f1f" }}
          >
            TBA
          </span>
        )}
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col flex-1">
        <h3
          className="text-base font-semibold mb-2"
          style={{ color: "#f5f5f5" }}
        >
          {project.title}
        </h3>
        <p
          className="text-sm leading-relaxed flex-1 mb-4"
          style={{ color: "#9ca3af" }}
        >
          {project.description}
        </p>

        {!isDimmed && project.caseStudy && (
          <Link
            href={project.caseStudy}
            className="text-sm font-medium transition-opacity hover:opacity-70 self-start"
            style={{ color: "#D97706" }}
          >
            View Case Study →
          </Link>
        )}
      </div>

      {/* Hover border overlay */}
      {!isDimmed && (
        <div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ border: "1px solid #D97706" }}
        />
      )}
    </div>
  )
}
