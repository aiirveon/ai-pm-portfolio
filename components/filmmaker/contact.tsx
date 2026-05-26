import { Linkedin } from "lucide-react"

export default function FilmmakerContact() {
  return (
    <section id="contact" className="py-24" style={{ backgroundColor: "#0a0a0a" }}>
      <div className="container mx-auto px-4 max-w-2xl">
        <h2
          className="text-4xl md:text-5xl font-bold mb-5"
          style={{ color: "#f5f5f5" }}
        >
          Let&apos;s Make Something
        </h2>

        <p className="text-base leading-relaxed mb-10" style={{ color: "#9ca3af" }}>
          I&apos;m open to commercial commissions, branded content briefs, creative collaborations, and consultation work.
        </p>

        <a
          href="mailto:osaheniogbebor.c@gmail.com"
          className="inline-flex items-center justify-center px-8 py-4 rounded-sm font-semibold text-base transition-opacity hover:opacity-80 mb-10"
          style={{ backgroundColor: "#D97706", color: "#0a0a0a" }}
        >
          Get In Touch
        </a>

        <div className="flex items-center gap-3">
          <span className="text-sm" style={{ color: "#6b7280" }}>
            Or find me on
          </span>
          <a
            href="https://www.linkedin.com/in/ogbebor-osaheni"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
            style={{ color: "#9ca3af" }}
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
