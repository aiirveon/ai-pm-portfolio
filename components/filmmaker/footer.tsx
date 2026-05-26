import Link from "next/link"

export default function FilmmakerFooter() {
  return (
    <footer
      className="py-8"
      style={{
        backgroundColor: "#0a0a0a",
        borderTop: "1px solid #1f1f1f",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <span style={{ color: "#6b7280" }}>© 2026 Aiir</span>
          <span style={{ color: "#6b7280" }}>Filmmaker who uses AI</span>
          <Link
            href="/"
            className="transition-opacity hover:opacity-70"
            style={{ color: "#9ca3af" }}
          >
            AI PM Portfolio →
          </Link>
        </div>
      </div>
    </footer>
  )
}
