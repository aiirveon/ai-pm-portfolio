import Link from "next/link"

export default function FilmmakerAbout() {
  return (
    <section
      id="about-filmmaker"
      className="py-24"
      style={{ backgroundColor: "#111111" }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text column */}
          <div>
            <h2
              className="text-4xl md:text-5xl font-bold mb-8"
              style={{ color: "#f5f5f5" }}
            >
              The Filmmaker
            </h2>

            <p className="text-base leading-relaxed mb-5" style={{ color: "#9ca3af" }}>
              I&apos;m a filmmaker who uses AI as a production tool. Not an AI person who sometimes makes films — a filmmaker who happens to have access to a pipeline that removes the physical constraints of traditional production.
            </p>

            <p className="text-base leading-relaxed mb-10" style={{ color: "#9ca3af" }}>
              My work sits at the intersection of story, craft, and technology. The AI generates the pixels. I decide what&apos;s worth generating.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/ogbebor-osaheni"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-sm text-sm font-medium border transition-opacity hover:opacity-70"
                style={{ borderColor: "#D97706", color: "#D97706", backgroundColor: "transparent" }}
              >
                LinkedIn →
              </a>
              <Link
                href="/"
                className="inline-flex items-center px-4 py-2 rounded-sm text-sm font-medium border transition-opacity hover:opacity-70"
                style={{ borderColor: "#D97706", color: "#D97706", backgroundColor: "transparent" }}
              >
                AI PM Portfolio →
              </Link>
            </div>
          </div>

          {/* Image column */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Film strip top */}
              <div
                className="w-full h-6 flex items-center gap-1 px-2 mb-1"
                style={{ backgroundColor: "#1a1a1a" }}
              >
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 h-3 rounded-sm"
                    style={{ backgroundColor: "#0a0a0a" }}
                  />
                ))}
              </div>

              {/* Image with amber border */}
              <div
                className="w-64 h-64 md:w-80 md:h-80 overflow-hidden"
                style={{ border: "2px solid #D97706" }}
              >
                <img
                  src="/images/profile.png"
                  alt="Aiir — Filmmaker"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center" }}
                />
              </div>

              {/* Film strip bottom */}
              <div
                className="w-full h-6 flex items-center gap-1 px-2 mt-1"
                style={{ backgroundColor: "#1a1a1a" }}
              >
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 h-3 rounded-sm"
                    style={{ backgroundColor: "#0a0a0a" }}
                  />
                ))}
              </div>

              {/* Amber glow */}
              <div
                className="absolute inset-0 pointer-events-none blur-2xl -z-10"
                style={{ backgroundColor: "rgba(217,119,6,0.08)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
