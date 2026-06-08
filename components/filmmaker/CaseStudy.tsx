"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { bg, colors, borders, swatchClass, fi, spacing, widths } from "@/lib/caseStudy/theme"

// ─── Types ────────────────────────────────────────────────────────────────────

export type CaseStudyData = {
  accent: string
  hero: {
    specLabel: string
    title: string
    tagline: string
    pills: string[]
    youtubeId: string
    videoTitle: string
  }
  statement: { paragraphs: string[] }
  sceneBreakdown: {
    intro: string
    columns: [string, string, string]
    rows: { col1: string; col2: string; col3: string }[]
  }
  commentary: {
    intro: string
    notes: { n: string; title: string; shot: string; intent: string; rejected: string }[]
  }
  visualLanguage: {
    paragraphs: string[]
    palette: { role: string; hex: string }[]
  }
  casting: {
    heading: string
    characters: { label: string; body: string }[]
  }
  soundDesign: { intro: string; paragraphs: string[] }
  tools: { name: string; role: string }[]
  linkedIn?: { intro: string; ugcPostId: string }
  disclaimer: string
  logline?: string
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

// Dynamically assign alternating section backgrounds based on which optional
// sections are present, so there are never two consecutive same-coloured sections.
function buildBgs(hasLogline: boolean, hasLinkedIn: boolean): Record<string, string> {
  const keys = [
    "hero",
    ...(hasLogline ? ["logline"] : []),
    "statement",
    "sceneBreakdown",
    "commentary",
    "visualLanguage",
    "casting",
    "soundDesign",
    "tools",
    ...(hasLinkedIn ? ["linkedin"] : []),
  ]
  return Object.fromEntries(keys.map((k, i) => [k, i % 2 === 0 ? bg.base : bg.alt]))
}

function Num({ n, accent }: { n: string; accent: string }) {
  return (
    <div
      className="text-6xl font-bold leading-none mb-1 select-none"
      style={{ color: accent, opacity: 0.2 }}
      aria-hidden
    >
      {n}
    </div>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function CaseStudy({ data }: { data: CaseStudyData }) {
  const { accent } = data
  const bgs = buildBgs(!!data.logline, !!data.linkedIn)

  return (
    <main style={{ backgroundColor: bg.base }}>

      {/* ── S1 Hero ── */}
      <section className={spacing.standard} style={{ backgroundColor: bgs.hero }}>
        <div className={`container mx-auto px-4 ${widths.content}`}>
          <motion.div {...fi}>
            <p
              className="text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: accent }}
            >
              {data.hero.specLabel}
            </p>
            <h1
              className="font-bold leading-tight mb-4"
              style={{ color: colors.heading, fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
            >
              {data.hero.title}
            </h1>
            <p className="text-base md:text-lg mb-6 max-w-2xl" style={{ color: colors.body }}>
              {data.hero.tagline}
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              {data.hero.pills.map((pill) => (
                <span
                  key={pill}
                  className="text-xs px-3 py-1 rounded-sm"
                  style={{
                    border: `1px solid ${borders.border}`,
                    backgroundColor: "rgba(255,255,255,0.03)",
                    color: colors.body,
                  }}
                >
                  {pill}
                </span>
              ))}
            </div>

            <div
              className="w-full rounded-sm overflow-hidden aspect-video"
              style={{ border: `1px solid ${borders.border}` }}
            >
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${data.hero.youtubeId}?rel=0&modestbranding=1`}
                title={data.hero.videoTitle}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ border: "none" }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── S1.5 Logline (optional) ── */}
      {data.logline && (
        <section className={spacing.standard} style={{ backgroundColor: bgs.logline }}>
          <div className={`container mx-auto px-4 ${widths.content}`}>
            <motion.div {...fi}>
              <p className="text-lg md:text-xl leading-relaxed max-w-3xl" style={{ color: colors.body }}>
                {data.logline}
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── S2 Director's Statement ── */}
      <section className={spacing.standard} style={{ backgroundColor: bgs.statement }}>
        <div className={`container mx-auto px-4 ${widths.content}`}>
          <motion.div {...fi}>
            <Num n="01" accent={accent} />
            <h2 className="text-3xl font-bold mb-8" style={{ color: colors.heading }}>
              Director&apos;s Statement
            </h2>
            <div className="space-y-5 max-w-3xl">
              {data.statement.paragraphs.map((para, i) => (
                <p key={i} className="text-base leading-relaxed" style={{ color: colors.body }}>
                  {para}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── S3 Scene Breakdown ── */}
      <section className={spacing.standard} style={{ backgroundColor: bgs.sceneBreakdown }}>
        <div className={`container mx-auto px-4 ${widths.wide}`}>
          <motion.div {...fi}>
            <Num n="02" accent={accent} />
            <h2 className="text-3xl font-bold mb-4" style={{ color: colors.heading }}>
              Scene Breakdown
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: colors.body }}>
              {data.sceneBreakdown.intro}
            </p>

            {/* Desktop table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ backgroundColor: bg.alt }}>
                    {data.sceneBreakdown.columns.map((col) => (
                      <th
                        key={col}
                        className="text-left px-4 py-3 text-xs font-bold tracking-widest uppercase border-b"
                        style={{ color: accent, borderColor: borders.border }}
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.sceneBreakdown.rows.map((row, i) => (
                    <tr key={i} style={{ backgroundColor: i % 2 === 0 ? bg.base : bg.rowAlt }}>
                      <td
                        className="px-4 py-4 align-top text-xs font-semibold border-b"
                        style={{ color: accent, borderColor: borders.border, minWidth: "200px" }}
                      >
                        {row.col1}
                      </td>
                      <td
                        className="px-4 py-4 align-top text-xs font-semibold border-b"
                        style={{ color: colors.heading, borderColor: borders.border, minWidth: "220px" }}
                      >
                        {row.col2}
                      </td>
                      <td
                        className="px-4 py-4 align-top text-xs leading-relaxed border-b"
                        style={{ color: colors.body, borderColor: borders.border }}
                      >
                        {row.col3}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden space-y-4">
              {data.sceneBreakdown.rows.map((row, i) => (
                <div
                  key={i}
                  className="border p-4"
                  style={{ borderColor: borders.border, backgroundColor: bg.alt }}
                >
                  <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: accent }}>
                    {row.col1}
                  </p>
                  <p className="text-sm font-semibold mb-3" style={{ color: colors.heading }}>
                    {row.col2}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: colors.body }}>
                    {row.col3}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── S4 Director's Commentary ── */}
      <section className={spacing.standard} style={{ backgroundColor: bgs.commentary }}>
        <div className={`container mx-auto px-4 ${widths.content}`}>
          <motion.div {...fi}>
            <Num n="03" accent={accent} />
            <h2 className="text-3xl font-bold mb-4" style={{ color: colors.heading }}>
              Director&apos;s Commentary
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: colors.body }}>
              {data.commentary.intro}
            </p>
            <div>
              {data.commentary.notes.map((note) => (
                <div
                  key={note.n}
                  className="border p-6 md:p-8 mb-6"
                  style={{ borderColor: borders.border, backgroundColor: bg.base }}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="text-base font-bold" style={{ color: accent }}>{note.n}</span>
                    <h3 className="text-base font-semibold" style={{ color: colors.heading }}>{note.title}</h3>
                  </div>

                  <p className="text-xs font-bold tracking-widest uppercase mt-4 mb-2" style={{ color: accent }}>
                    SHOT
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: colors.body }}>
                    {note.shot}
                  </p>

                  <p className="text-xs font-bold tracking-widest uppercase mt-5 mb-2" style={{ color: accent }}>
                    INTENT
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: colors.body }}>
                    {note.intent}
                  </p>

                  <p className="text-xs font-bold tracking-widest uppercase mt-5 mb-2" style={{ color: colors.muted }}>
                    WHAT WAS REJECTED
                  </p>
                  <p className="text-xs leading-relaxed italic" style={{ color: colors.muted }}>
                    {note.rejected}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── S5 Visual Language ── */}
      <section className={spacing.standard} style={{ backgroundColor: bgs.visualLanguage }}>
        <div className={`container mx-auto px-4 ${widths.content}`}>
          <motion.div {...fi}>
            <Num n="04" accent={accent} />
            <h2 className="text-3xl font-bold mb-8" style={{ color: colors.heading }}>
              Visual Language
            </h2>
            <div className="space-y-5 max-w-3xl mb-10">
              {data.visualLanguage.paragraphs.map((para, i) => (
                <p key={i} className="text-base leading-relaxed" style={{ color: colors.body }}>
                  {para}
                </p>
              ))}
            </div>

            {/* Colour swatches — small inline style (w-6 h-6), sourced from theme.swatchClass */}
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: colors.muted }}>
                PALETTE
              </p>
              <div className="flex flex-wrap gap-4">
                {data.visualLanguage.palette.map((c) => (
                  <div key={c.hex} className="flex items-center gap-3">
                    <div
                      className={`${swatchClass} rounded-sm flex-shrink-0`}
                      style={{ backgroundColor: c.hex, border: `1px solid ${borders.borderSoft}` }}
                    />
                    <div>
                      <span className="text-xs block leading-tight" style={{ color: colors.body }}>{c.role}</span>
                      <span className="text-[10px] block mt-0.5" style={{ color: colors.muted }}>{c.hex}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── S6 Casting ── */}
      <section className={spacing.standard} style={{ backgroundColor: bgs.casting }}>
        <div className={`container mx-auto px-4 ${widths.content}`}>
          <motion.div {...fi}>
            <Num n="05" accent={accent} />
            <h2 className="text-3xl font-bold mb-10" style={{ color: colors.heading }}>
              {data.casting.heading}
            </h2>
            <div className="space-y-10">
              {data.casting.characters.map((char) => (
                <div key={char.label}>
                  <p
                    className="text-sm font-bold tracking-widest uppercase mb-3"
                    style={{ color: accent }}
                  >
                    {char.label}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: colors.body }}>
                    {char.body}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── S7 Sound Design ── */}
      <section className={spacing.standard} style={{ backgroundColor: bgs.soundDesign }}>
        <div className={`container mx-auto px-4 ${widths.content}`}>
          <motion.div {...fi}>
            <Num n="06" accent={accent} />
            <h2 className="text-3xl font-bold mb-4" style={{ color: colors.heading }}>
              Sound Design
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: colors.body }}>
              {data.soundDesign.intro}
            </p>
            <div className="space-y-5 max-w-3xl">
              {data.soundDesign.paragraphs.map((para, i) => (
                <p key={i} className="text-sm leading-relaxed" style={{ color: colors.body }}>
                  {para}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── S8 Tools Used ── */}
      <section className={spacing.tools} style={{ backgroundColor: bgs.tools }}>
        <div className={`container mx-auto px-4 ${widths.content}`}>
          <motion.div {...fi}>
            <h2 className="text-2xl font-bold mb-8" style={{ color: colors.heading }}>Tools Used</h2>
            <div className="flex flex-wrap gap-4">
              {data.tools.map((tool) => (
                <div
                  key={tool.name}
                  className="border px-5 py-4"
                  style={{ borderColor: borders.border, backgroundColor: bg.base }}
                >
                  <div className="text-sm font-semibold" style={{ color: colors.heading }}>
                    {tool.name}
                  </div>
                  <div className="text-xs mt-1" style={{ color: colors.body }}>{tool.role}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── S8.5 Process & Prompts — LinkedIn (optional) ── */}
      {data.linkedIn && (
        <section className={spacing.tools} style={{ backgroundColor: bgs.linkedin }}>
          <div className={`container mx-auto px-4 ${widths.content}`}>
            <motion.div {...fi}>
              <h2 className="text-2xl font-bold mb-3" style={{ color: colors.heading }}>
                Process &amp; Prompts
              </h2>
              <p className="text-base leading-relaxed mb-8 max-w-3xl" style={{ color: colors.body }}>
                {data.linkedIn.intro}
              </p>

              <div
                className="w-full overflow-hidden rounded-sm"
                style={{ border: `1px solid ${borders.border}`, backgroundColor: bg.alt }}
              >
                <iframe
                  src={`https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:${data.linkedIn.ugcPostId}?collapsed=1`}
                  title={`Process & prompts — ${data.hero.title}`}
                  className="w-full"
                  style={{ border: "none", height: "566px", maxWidth: "100%" }}
                  frameBorder={0}
                  allowFullScreen
                />
              </div>

              <a
                href={`https://www.linkedin.com/feed/update/urn:li:ugcPost:${data.linkedIn.ugcPostId}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-4 text-sm font-semibold transition-opacity hover:opacity-70"
                style={{ color: accent }}
              >
                Read the full breakdown on LinkedIn →
              </a>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── S9 Work With Me CTA — always base bg ── */}
      <section className={spacing.cta} style={{ backgroundColor: bg.base }}>
        <div className={`container mx-auto px-4 ${widths.cta} text-center`}>
          <motion.div {...fi}>
            <h2 className="text-3xl font-bold mb-4" style={{ color: colors.heading }}>
              Let&apos;s Make Something
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: colors.body }}
            >
              If you&apos;re a brand with a brief, an agency with a client, or a director who wants to
              explore AI production — this is what I build.
            </p>
            <Link
              href="/filmmaker#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-sm font-semibold text-sm transition-opacity hover:opacity-80"
              style={{ backgroundColor: accent, color: "#0a0a0a" }}
            >
              Bring me your brief →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── S10 Disclaimer & Navigation — always alt bg ── */}
      <section
        className={spacing.disclaimer}
        style={{ backgroundColor: bg.alt, borderTop: `1px solid ${borders.border}` }}
      >
        <div className={`container mx-auto px-4 ${widths.content}`}>
          <div className="flex justify-between items-center mb-8">
            <Link
              href="/filmmaker#work"
              className="text-sm transition-colors"
              style={{ color: colors.body }}
              onMouseEnter={(e) => (e.currentTarget.style.color = colors.heading)}
              onMouseLeave={(e) => (e.currentTarget.style.color = colors.body)}
            >
              ← Back to Work
            </Link>
            <Link
              href="/filmmaker#contact"
              className="text-sm transition-opacity hover:opacity-70"
              style={{ color: accent }}
            >
              Get In Touch →
            </Link>
          </div>
          <p className="text-xs text-center max-w-2xl mx-auto" style={{ color: colors.muted }}>
            {data.disclaimer}
          </p>
        </div>
      </section>
    </main>
  )
}
