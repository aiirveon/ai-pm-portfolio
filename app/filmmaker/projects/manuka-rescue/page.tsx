"use client"

import Link from "next/link"
import { motion } from "framer-motion"

// ─── Data ─────────────────────────────────────────────────────────────────────

const SHOTS = [
  {
    type: "Cast Establishing",
    title: "The three women together — studio",
    why: "One frame that says everything the ad is about. Three skin types, three skin tones, one cream. The shot does the work a voiceover would have done in a slower ad — the casting is the message.",
  },
  {
    type: "Package Overhead",
    title: "Top-down on travertine — Dr. Organic carton centred",
    why: "Product hero without performance. The carton sits on warm, imperfect stone — honest material, no plinth, no gloss. The audience sees what they would actually buy.",
  },
  {
    type: "Application Close-Up — African Woman",
    title: "Jar in one hand, cream to cheek with the other, smiling to camera",
    why: "The cream actually being used. Real application, real expression, no posed glow. The product is in her hand and on her skin in the same frame — proof inside one shot.",
  },
  {
    type: "Application Close-Up — South Asian Woman",
    title: "Same gesture, her own home, soft window light",
    why: "Same action, different woman, different space. The home setting grounds the product in a real morning. The repetition is deliberate — same gesture across different lives.",
  },
  {
    type: "Closing Hero",
    title: "Open jar, silver lid removed, a single bee in flight, golden pollen in the air",
    why: "The source of the product made literal. Manuka honey comes from bees. The film opens on the package and closes on where the package comes from. Brand, then biology.",
  },
]

const DIRECTOR_NOTES = [
  {
    n: "01",
    title: "Opening with the Package",
    shot: "First frame — Dr. Organic carton centred on travertine, leaf logo and coral label dead centre.",
    intent: "Most skincare ads open on a face. I opened on the package. The first frame is the carton — leaf logo dead centre, brand recognisable in half a second. The audience knows what they're watching before they know who they're watching. The product is the hero; the women are its evidence.",
    rejected: "An opening on a face was tested. It looked like every other skincare ad. Leading with the package is harder to earn but right for this brand — Dr. Organic packaging is recognisable, and recognition does work the dialogue doesn't have to.",
  },
  {
    n: "02",
    title: "Closing with the Jar and the Bee",
    shot: "Final frame — the open jar of cream, silver lid off, a single bee in flight beside it, golden pollen in the air.",
    intent: "Manuka honey comes from bees. The product is built around that fact, but most skincare ads bury the source — ingredient, formula, claim. I wanted to surface it. The bee is not a graphic; it is the origin of the product made literal. The film opens on the package and closes on the source. Brand, then biology.",
    rejected: "A closing shot of the carton on travertine was tested. It read as a sales close. The bee is a creative close — it says where the product comes from instead of where to buy it.",
  },
]

const CHARACTERS = [
  {
    label: "CHARACTER 1 — THE BRITISH WOMAN",
    body: "Late twenties, fair skin with natural freckles across the nose and cheekbones, mid-length wavy auburn hair, blue eyes. Cream ribbed tank under an open white waffle robe, coral camisole underneath — the only wardrobe in the spot that touches the brand's hero colour. Freckled skin was the casting brief, not a preference. The product addresses dryness; the casting had to make dryness visible without making the actor look unhealthy.",
  },
  {
    label: "CHARACTER 2 — THE AFRICAN WOMAN",
    body: "Late twenties to early thirties, warm dark brown skin, very tight neat cornrows woven flat against the scalp, straight back from forehead to nape. Cream ribbed tank, cream relaxed trousers. Small gold hoop earrings, delicate gold chain, small gold nose ring. The cornrows were a deliberate brief — the silhouette had to read as clean and modern from every angle, no hanging braids competing with the face. The product moments belong to her hands; the hair stays out of the work.",
  },
  {
    label: "CHARACTER 3 — THE SOUTH ASIAN WOMAN",
    body: "Late twenties, warm medium-brown skin, mid-length wavy dark brown hair worn down. Honey-beige silk camisole and relaxed trousers — the warmest wardrobe in the spot, deliberately distinct from the cream worn by the other two. Small gold studs and delicate chain. The styling reads as quietly confident — a woman comfortable in her own routine, not performing one.",
  },
]

const PALETTE = [
  { role: "Hero accent (coral)", hex: "#D97706" },
  { role: "Brand signature (leaf green) — unused", hex: "#7CB342" },
  { role: "Base / canvas (warm off-white)", hex: "#F7F5F0" },
  { role: "Warm cream (honey beige)", hex: "#E6D5B8" },
  { role: "Anchor (soft charcoal)", hex: "#2B2B2B" },
]

const TOOLS = [
  { name: "Higgsfield Soul", role: "Character reference generation" },
  { name: "Higgsfield Cinema Studio", role: "Video generation, start/end frame control" },
  { name: "Seedance 2.0", role: "Product moment generation, motion-from-still" },
  { name: "Flux Kontext / Nano Banana", role: "Open-jar asset inpainting" },
  { name: "DaVinci Resolve", role: "Edit, colour grade, sound design" },
]

// ─── Shared animation props ───────────────────────────────────────────────────

const fi = {
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  transition: { duration: 0.6 },
  viewport: { once: true } as const,
}

// ─── Reusable section number ──────────────────────────────────────────────────

function Num({ n }: { n: string }) {
  return (
    <div
      className="text-6xl font-bold leading-none mb-1 select-none"
      style={{ color: "#D97706", opacity: 0.2 }}
      aria-hidden
    >
      {n}
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ManukaRescueCaseStudy() {
  return (
    <main style={{ backgroundColor: "#0a0a0a" }}>

      {/* ── S1 Hero ── */}
      <section className="py-24" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fi}>
            <p
              className="text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: "#D97706" }}
            >
              SPEC COMMERCIAL · 2026
            </p>
            <h1
              className="font-bold leading-tight mb-4"
              style={{ color: "#f5f5f5", fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
            >
              Dr. Organic Manuka Honey Rescue Cream
            </h1>
            <p className="text-base md:text-lg mb-6 max-w-2xl" style={{ color: "#9ca3af" }}>
              A skincare film for all skin. Three women. One ritual. No words.
            </p>

            {/* Metadata pills */}
            <div className="flex flex-wrap gap-2 mb-10">
              {["11 seconds", "Higgsfield + Seedance + DaVinci Resolve", "Spec Commercial"].map((pill) => (
                <span
                  key={pill}
                  className="text-xs px-3 py-1 rounded-sm"
                  style={{
                    border: "1px solid #1f1f1f",
                    backgroundColor: "rgba(255,255,255,0.03)",
                    color: "#9ca3af",
                  }}
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Video embed — replace src with final YouTube/Vimeo URL once edited */}
            <div
              className="w-full rounded-sm overflow-hidden aspect-video"
              style={{ border: "1px solid #1f1f1f" }}
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/zBxeybQ0KIs?rel=0&modestbranding=1"
                title="Dr. Organic Manuka Honey Rescue Cream | AI Commercial Spec Ad"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ border: "none" }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── S2 Director's Statement ── */}
      <section className="py-24" style={{ backgroundColor: "#111111" }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fi}>
            <Num n="01" />
            <h2 className="text-3xl font-bold mb-8" style={{ color: "#f5f5f5" }}>
              Director&apos;s Statement
            </h2>
            <div className="space-y-5 max-w-3xl">
              {[
                "I wanted to try a fast-paced skincare film. Most ads in the category slow down — soft music, long dwells, voiceover doing the heavy lifting. I wanted the opposite. Quick cuts, energy, the product moving through real moments of application instead of sitting on a plinth.",
                "The brief I gave myself was to show the cream actually being used — on real skin, in real light, across the range of people the brand says it's for. The film cuts between women whose skin types and tones differ, but the cream stays constant. Same formula, same warmth, same finish.",
                "Dr. Organic has refused to compromise on ingredients since 1989. The Manuka Honey Rescue Cream is COSMOS Organic certified and vegan. The film had to feel as honest as the formulation — no fake glow, no over-grading, no promise the product can't keep.",
              ].map((para, i) => (
                <p key={i} className="text-base leading-relaxed" style={{ color: "#9ca3af" }}>
                  {para}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── S3 Scene Breakdown ── */}
      <section className="py-24" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div {...fi}>
            <Num n="02" />
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#f5f5f5" }}>
              Scene Breakdown
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#9ca3af" }}>
              Five shot types. Each chosen for a specific reason.
            </p>

            {/* Desktop table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ backgroundColor: "#111111" }}>
                    {["TYPE", "SHOT", "WHY IT WAS PICKED"].map((col) => (
                      <th
                        key={col}
                        className="text-left px-4 py-3 text-xs font-bold tracking-widest uppercase border-b"
                        style={{ color: "#D97706", borderColor: "#1f1f1f" }}
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {SHOTS.map((row, i) => (
                    <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#0a0a0a" : "#0d0d0d" }}>
                      <td
                        className="px-4 py-4 align-top text-xs font-semibold border-b"
                        style={{ color: "#D97706", borderColor: "#1f1f1f", minWidth: "200px" }}
                      >
                        {row.type}
                      </td>
                      <td
                        className="px-4 py-4 align-top text-xs font-semibold border-b"
                        style={{ color: "#f5f5f5", borderColor: "#1f1f1f", minWidth: "220px" }}
                      >
                        {row.title}
                      </td>
                      <td
                        className="px-4 py-4 align-top text-xs leading-relaxed border-b"
                        style={{ color: "#9ca3af", borderColor: "#1f1f1f" }}
                      >
                        {row.why}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden space-y-4">
              {SHOTS.map((row, i) => (
                <div
                  key={i}
                  className="border p-4"
                  style={{ borderColor: "#1f1f1f", backgroundColor: "#111111" }}
                >
                  <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#D97706" }}>
                    {row.type}
                  </p>
                  <p className="text-sm font-semibold mb-3" style={{ color: "#f5f5f5" }}>
                    {row.title}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "#9ca3af" }}>
                    {row.why}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── S4 Director's Commentary ── */}
      <section className="py-24" style={{ backgroundColor: "#111111" }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fi}>
            <Num n="03" />
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#f5f5f5" }}>
              Director&apos;s Commentary
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#9ca3af" }}>
              Two shots. The thinking behind the frame.
            </p>
            <div>
              {DIRECTOR_NOTES.map((note) => (
                <div
                  key={note.n}
                  className="border p-6 md:p-8 mb-6"
                  style={{ borderColor: "#1f1f1f", backgroundColor: "#0a0a0a" }}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="text-base font-bold" style={{ color: "#D97706" }}>{note.n}</span>
                    <h3 className="text-base font-semibold" style={{ color: "#f5f5f5" }}>{note.title}</h3>
                  </div>

                  <p
                    className="text-xs font-bold tracking-widest uppercase mt-4 mb-2"
                    style={{ color: "#D97706" }}
                  >
                    SHOT
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>
                    {note.shot}
                  </p>

                  <p
                    className="text-xs font-bold tracking-widest uppercase mt-5 mb-2"
                    style={{ color: "#D97706" }}
                  >
                    INTENT
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>
                    {note.intent}
                  </p>

                  <p
                    className="text-xs font-bold tracking-widest uppercase mt-5 mb-2"
                    style={{ color: "#6b7280" }}
                  >
                    WHAT WAS REJECTED
                  </p>
                  <p className="text-xs leading-relaxed italic" style={{ color: "#6b7280" }}>
                    {note.rejected}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── S5 Visual Language ── */}
      <section className="py-24" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fi}>
            <Num n="04" />
            <h2 className="text-3xl font-bold mb-8" style={{ color: "#f5f5f5" }}>
              Visual Language
            </h2>
            <div className="space-y-5 max-w-3xl mb-10">
              {[
                "The film lives in a single palette. Warm off-white, honey beige, coral accents — pulled directly from the product packaging. The walls, the wardrobe, the furnishings all sit in the same warm register. The cream is not introduced into the world; the world was built to receive it.",
                "Coral-orange is the hero accent — used once in the wardrobe of Character 1, used once on the product label, used nowhere else. The leaf green appears only on the end-card logo. Restraint is the discipline. Every frame had to earn its colour.",
                "DaVinci Resolve carried the consistency. Every frame graded to the same warm daylight temperature — roughly 3500–4000K. Soft shadows. Skin tones true. The grade is invisible if the audience never thinks about it. That is the goal.",
              ].map((para, i) => (
                <p key={i} className="text-base leading-relaxed" style={{ color: "#9ca3af" }}>
                  {para}
                </p>
              ))}
            </div>

            {/* Colour swatches */}
            <div>
              <p
                className="text-xs font-bold tracking-widest uppercase mb-4"
                style={{ color: "#6b7280" }}
              >
                PALETTE
              </p>
              <div className="flex flex-wrap gap-4">
                {PALETTE.map((c) => (
                  <div key={c.hex} className="flex items-center gap-3">
                    <div
                      className="w-6 h-6 rounded-sm flex-shrink-0"
                      style={{ backgroundColor: c.hex, border: "1px solid #2a2a2a" }}
                    />
                    <div>
                      <span className="text-xs block leading-tight" style={{ color: "#9ca3af" }}>{c.role}</span>
                      <span className="text-[10px] block mt-0.5" style={{ color: "#6b7280" }}>{c.hex}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── S6 Casting & Character Design ── */}
      <section className="py-24" style={{ backgroundColor: "#111111" }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fi}>
            <Num n="05" />
            <h2 className="text-3xl font-bold mb-10" style={{ color: "#f5f5f5" }}>
              Casting &amp; Character Design
            </h2>
            <div className="space-y-10">
              {CHARACTERS.map((char) => (
                <div key={char.label}>
                  <p
                    className="text-sm font-bold tracking-widest uppercase mb-3"
                    style={{ color: "#D97706" }}
                  >
                    {char.label}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>
                    {char.body}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── S7 Sound Design ── */}
      <section className="py-24" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fi}>
            <Num n="06" />
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#f5f5f5" }}>
              Sound Design
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "#9ca3af" }}>
              How the audio carries an 11-second cut.
            </p>
            <div className="space-y-5 max-w-3xl">
              {[
                "The film is fast. The cuts move quickly, and the sound had to move with them. I picked an upbeat, rhythmic track — light percussion, a driving tempo, no vocals. Music that lifts the spot without competing with it.",
                "Skincare ads usually slow the audio to signal calm — soft piano, ambient pads, a single sustained tone. I wanted the opposite. The energy of the music tells the audience this is a product for a real morning, not a meditation. The cream sits inside an active life, not a spa.",
                "Diegetic sound is minimal. A single click as the jar opens. The soft scoop of cream. The track carries everything else. The audio does the same job the voiceover would have done in a slower ad — setting the pace and emotional register — without saying anything.",
              ].map((para, i) => (
                <p key={i} className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>
                  {para}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── S8 Tools Used ── */}
      <section className="py-16" style={{ backgroundColor: "#111111" }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fi}>
            <h2 className="text-2xl font-bold mb-8" style={{ color: "#f5f5f5" }}>Tools Used</h2>
            <div className="flex flex-wrap gap-4">
              {TOOLS.map((tool) => (
                <div
                  key={tool.name}
                  className="border px-5 py-4"
                  style={{ borderColor: "#1f1f1f", backgroundColor: "#0a0a0a" }}
                >
                  <div className="text-sm font-semibold" style={{ color: "#f5f5f5" }}>
                    {tool.name}
                  </div>
                  <div className="text-xs mt-1" style={{ color: "#9ca3af" }}>{tool.role}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── S9 Work With Me CTA ── */}
      <section className="py-20" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <motion.div {...fi}>
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#f5f5f5" }}>
              Let&apos;s Make Something
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#9ca3af" }}
            >
              If you&apos;re a brand with a brief, an agency with a client, or a director who wants to
              explore AI production — this is what I build.
            </p>
            <Link
              href="/filmmaker#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-sm font-semibold text-sm transition-opacity hover:opacity-80"
              style={{ backgroundColor: "#D97706", color: "#0a0a0a" }}
            >
              Bring me your brief →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── S10 Disclaimer and Navigation ── */}
      <section
        className="py-12"
        style={{ backgroundColor: "#111111", borderTop: "1px solid #1f1f1f" }}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex justify-between items-center mb-8">
            <Link
              href="/filmmaker#work"
              className="text-sm transition-colors"
              style={{ color: "#9ca3af" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f5f5f5")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
            >
              ← Back to Work
            </Link>
            <Link
              href="/filmmaker#contact"
              className="text-sm transition-opacity hover:opacity-70"
              style={{ color: "#D97706" }}
            >
              Get In Touch →
            </Link>
          </div>
          <p className="text-xs text-center max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            This is a speculative concept ad created for portfolio purposes only. Not affiliated with,
            sponsored by, or endorsed by Dr. Organic. All product names, logos, and brands are property
            of their respective owners. Dr. Organic® is a registered trademark of its respective owner.
          </p>
        </div>
      </section>
    </main>
  )
}
