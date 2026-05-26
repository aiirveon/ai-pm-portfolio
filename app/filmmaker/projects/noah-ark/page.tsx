"use client"

import { useState, Fragment } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import DownloadModal from "@/components/DownloadModal"

// ─── Data ─────────────────────────────────────────────────────────────────────

const STATS = [
  { num: "200+", label: "Generations" },
  { num: "47", label: "Prompt Iterations" },
  { num: "9", label: "Production Stages" },
  { num: "13", label: "Prompt Categories" },
  { num: "3", label: "AI Tools" },
]

const DECISIONS = [
  {
    chose: "Earnest-cinematic tone",
    over: "Comedic parody",
    because: "Comedy dates quickly. Sincerity earns the joke.",
  },
  {
    chose: "Glowing mystical scroll",
    over: "Modern smartphone",
    because: "Keeps the world intact. Positions Amazon as timeless.",
  },
  {
    chose: "A younger woman with a newborn",
    over: "An older matriarch",
    because: "Every parent who has run out of something at the worst moment understands that shrug instantly.",
  },
  {
    chose: "Blue-and-gold macaw brand mascot",
    over: "A human voiceover",
    because: "Amazon's colour language, a repeatable catchphrase, and comic relief — without breaking the tone.",
  },
  {
    chose: "Drone as the hero shot (4 of 15 seconds)",
    over: "Noah as the hero shot",
    because: "The drone shot is Amazon's brand promise made visual. It earned the most screen time.",
  },
]

const SHOTS = [
  {
    time: "0:00–0:01.5",
    shot: "Shot 1A — Aerial Establishing",
    picture: "Drone-style high-angle 45° shot of the ark on a soaked plain. Animals processing two by two up the ramp. Storm clouds gathering above.",
    sound: "Wind, distant thunder, animal foley",
    job: "Establish world and stakes",
  },
  {
    time: "0:01.5–0:03",
    shot: "Shot 1B — Noah at the Threshold",
    picture: "Noah in the arched doorway, scroll in hands, parrot on shoulder. Warm amber backlight. Storm light from the front.",
    sound: "Noah VO: 'Lions, check. Grain, check. Water, check...'",
    job: "Introduce character and act of checking",
  },
  {
    time: "0:03–0:05",
    shot: "Shot 2 — Wife and Baby",
    picture: "Wife rocking crying infant in the warm interior. Lion resting nearby. Camera at the threshold.",
    sound: "Baby cry cuts through. Cello holds.",
    job: "Inciting incident",
  },
  {
    time: "0:05–0:07",
    shot: "Shot 3 — The Realisation",
    picture: "Close-up on Noah's face. Eyes drop to the scroll. Realisation lands.",
    sound: "Baby cry ducks under a heartbeat pulse.",
    job: "The problem registers",
  },
  {
    time: "0:07–0:09",
    shot: "Shot 4 — The Order",
    picture: "Noah holds the glowing clay tablet. Amazon product page visible. He taps Add to Cart.",
    sound: "Soft mystical shimmer. Amazon confirmation chime.",
    job: "The product moment",
  },
  {
    time: "0:09–0:13",
    shot: "Shot 5 — The Drone (Hero Shot)",
    picture: "Amazon drone fighting through driving rain and lightning. Blue LED lights glowing. Package suspended beneath.",
    sound: "Drone motor straining. Rising string. Rain peaks. Thunder crack.",
    job: "Brand promise made visual",
  },
  {
    time: "0:13–0:14",
    shot: "Shot 6 — Arrival",
    picture: "Drone delivers to the ark. Wife receives the package. Doors beginning to close in background.",
    sound: "Everything drops to near-silence. Wood creak.",
    job: "Delivery confirmed",
  },
  {
    time: "0:14–0:15",
    shot: "Shot 7 — The Parrot",
    picture: "Parrot flies through the interior, squawking. Baby quiet. Noah grins.",
    sound: "Parrot: 'Two of everything! Even diapers!'",
    job: "Brand recall and laugh",
  },
]

const CATEGORIES = [
  { n: "01", name: "Shot Type / Framing", desc: "Wide, medium, close-up, aerial, POV. Sets the compositional register." },
  { n: "02", name: "Subject", desc: "The primary thing in frame. Named first so the AI prioritises it." },
  { n: "03", name: "Environment / Setting", desc: "Where the shot lives. Anchors the world." },
  { n: "04", name: "Time of Day / Lighting Condition", desc: "Overcast, golden hour, storm, interior. Controls the light temperature." },
  { n: "05", name: "Lighting Direction and Quality", desc: "Front, back, side, hard, soft, dual-source. The most important category." },
  { n: "06", name: "Weather / Atmosphere", desc: "Rain, fog, dust, clear. Sets the emotional register of the exterior." },
  { n: "07", name: "Texture and Material Specificity", desc: "What surfaces look like up close. Sells the world as real." },
  { n: "08", name: "Colour Grade and Palette", desc: "The overall colour identity. Lock this early and repeat it everywhere." },
  { n: "09", name: "Motion / Movement", desc: "What is moving, in what direction, at what speed." },
  { n: "10", name: "Camera Move / Lens", desc: "Static, push-in, dolly, crane. Anamorphic, 35mm, 50mm." },
  { n: "11", name: "Style / Genre / Reference", desc: "What kind of film this looks like. Biblical epic, documentary, Super Bowl." },
  { n: "12", name: "Mood / Emotional Tone", desc: "Adjectives that push stylistic choices. Reverent, urgent, intimate." },
  { n: "13", name: "Negative Prompts", desc: "What to exclude. As important as what to include." },
]

const PIPELINE = [
  { n: "1", name: "Concept & Story", tool: "No tool", desc: "Three-act structure in 15 seconds. Brief, inciting incident, resolution." },
  { n: "2", name: "Character Design", tool: "Higgsfield Soul Cinema", desc: "Identity blocks, face locks, wardrobe specs. Generated before any shot." },
  { n: "3", name: "Location Design", tool: "Higgsfield Soul Cinema", desc: "Ark exterior, ark interior. Anchor descriptions locked as references." },
  { n: "4", name: "Shot List", tool: "No tool", desc: "7 shots, 15 seconds, every frame's job defined before generation." },
  { n: "5", name: "Prompt Engineering", tool: "13-Category Framework", desc: "Every prompt built by category. Master version and Seedance-compressed version." },
  { n: "6", name: "AI Generation", tool: "Higgsfield Cinema Studio + Seedance", desc: "Start/end frame control. Dialogue directed through prompt language." },
  { n: "7", name: "Editing", tool: "DaVinci Resolve", desc: "Shot selection, pacing, continuity. Not every generation made the cut." },
  { n: "8", name: "Colour Grade", tool: "DaVinci Resolve", desc: "Two-palette system. Amber interior vs slate-blue storm. Consistent across all shots." },
  { n: "9", name: "Sound Design", tool: "DaVinci Resolve + Higgsfield Audio", desc: "Baby cry, drone motor, storm ambience, dialogue, Amazon audio logo layered." },
]

const OBSERVATIONS = [
  {
    n: "01",
    title: "Character Consistency — Reference Image Completeness",
    observed: "Noah's overall consistency held up well across all 7 shots — face, hair, beard, and core wardrobe stayed visually coherent. However, in 2 generations his shirt collar drifted from the original reference. After investigating, I realised his beard covered the neck area in every reference image I had supplied. The model had no ground truth for that region of the character, so it improvised.",
    happening: "Generative models do not refuse to render areas they have no reference for. They complete those areas by sampling from the nearest match in the training distribution. A missing detail in the reference becomes a hallucinated detail in the output. The model is not aware it is hallucinating — it is doing exactly what it was trained to do.",
    suggestion: "A reference completeness checker. Before locking a character, the product should analyse the uploaded references and flag specific regions that are not visible — collar, hands, footwear, accessories. The interface could highlight these gaps visually and suggest the user upload an additional reference covering them. This shifts the consistency burden from the user noticing a drift in shot 5 to the product preventing it before generation begins.",
    matters: "Reference completeness is one of the few consistency problems that is solvable without changing the underlying model. It is a UX and tooling problem.",
  },
  {
    n: "02",
    title: "Iterative Drift — The 360° Reference System",
    observed: "I stopped iterating early on several shots — not always because of credits, but because each new generation drifted further from my intent rather than closer to it. The model would lose details I had locked in earlier attempts, and continuing to iterate felt like making the problem worse, not better.",
    happening: "Current AI video tools treat each generation as an independent sample from a probability distribution. There is no convergence mechanism — the model does not narrow its sampling based on previous attempts. The user is iterating but the model is not. The result is that experienced users learn to stop iterating early and accept a suboptimal generation rather than risk drifting further.",
    suggestion: "A 360° background reference system. Today, the user uploads a single background image and the model has to imagine the rest of the environment when the camera angle changes. My proposal: let the user upload up to 6 background images covering different angles of the same space (front, back, left, right, up, down). The model uses these as ground truth regardless of camera direction. When the user pans the virtual camera, the model knows what should actually be in the background because it has seen it. This would dramatically reduce environment drift across shots in the same scene.",
    matters: "Environment consistency across multi-shot productions is currently the manual labour of a filmmaker. Building it into the product would move AI video generation closer to professional production workflows.",
  },
  {
    n: "03",
    title: "Audio Coupling — Separating the Audio Layer",
    observed: "Higgsfield generated audio as part of the video clip. This included voice, sound effects, and ambience baked together. To remove unwanted sound effects I had to add them to the negative prompt. There was no way to choose a specific voice for a character — the model decided how it should sound based on the prompt context.",
    happening: "Audio is generated as a coupled output to the video clip rather than as an independent track. This is a product architecture decision. It simplifies the user experience for beginners but removes the layer-level control that any post-production workflow depends on.",
    suggestion: "Two specific changes. First, separate the audio into independent layers — voice, sound effects, soundtrack — with toggle controls. The user should be able to disable sound effects without writing 'no sound effects' into a negative prompt. Second, introduce user-selectable voice profiles for character dialogue. The user uploads or selects a voice and assigns it to a character. The model uses that voice for all dialogue from that character. This matches how professional voice direction actually works.",
    matters: "Until audio and video can be controlled independently, AI generation tools cannot fit cleanly into professional post-production pipelines.",
  },
  {
    n: "04",
    title: "Project Memory — What Higgsfield Got Right",
    observed: "References, characters, and locations persisted across sessions. When I came back to the project after a break, my locked characters and references were exactly where I had left them. I did not have to reconstruct anything.",
    happening: "Higgsfield has built persistent project state for the assets that matter most to a multi-session production — character references, location references, and project structure. This is the foundation of any production workflow and the product handles it well.",
    suggestion: "No change needed here. This is what the product got right. The next step — and this is more of a v-next thought than a complaint — would be to also persist prompt history per shot and generation logs, so a user can see exactly which prompt produced which clip and revisit decisions weeks later.",
    matters: "Recognising what a product does well is as important as identifying gaps. Asset persistence is genuinely well-handled in Higgsfield and should be preserved as the product evolves.",
  },
  {
    n: "05",
    title: "Beginner vs Professional Gap — Templates as the Bridge",
    observed: "As a first-time user, I expected a steeper learning curve and was surprised by how approachable the interface felt. The Higgsfield YouTube tutorials covered most of what I needed to know. The gap I noticed was between general tutorials and a specific production goal — there is no obvious starting point for, say, a 15-second commercial or a music video.",
    happening: "Higgsfield's marketing explicitly says no filmmaking experience is required. The product is built to be approachable for new users, and it succeeds at that. But the same design choices that make it approachable for a casual user can leave a serious user without scaffolding for production-grade work. There is no middle layer between 'follow a tutorial' and 'figure it out yourself'.",
    suggestion: "A template library. Pre-built starting points for the most common production formats — 15-second commercial, music video, narrative short, product film. Each template includes a sample shot list, suggested character and location references, and a prompt structure the user can customise. The user does not start from a blank canvas — they start from a working production and modify it. This is how every other creative tool with a professional ceiling works (Premiere, Resolve, Figma all have templates).",
    matters: "Templates are the bridge between approachable for beginners and powerful for professionals. They are the single fastest way to close the gap without redesigning the interface.",
  },
]

const AUDIO_TIMELINE = [
  { time: "0:00–0:03", desc: "Wind bed, distant thunder, animal foley, Noah VO reciting the list" },
  { time: "0:03–0:05", desc: "Baby cry slams in — the inciting incident in audio form" },
  { time: "0:05–0:07", desc: "Baby cry ducks under a low heartbeat pulse — we're inside Noah's head" },
  { time: "0:07–0:09", desc: "Mystical shimmer, Amazon confirmation chime" },
  { time: "0:09–0:13", desc: "Drone motor straining, rising string, rain peaks, single thunder crack" },
  { time: "0:13–0:14", desc: "Everything drops to near-silence — wood creak, drone settling" },
  { time: "0:14–0:15", desc: "Baby quiet. Parrot squawks. Amazon audio logo." },
]

const LEARNINGS = [
  {
    n: "01",
    title: "Lock references before generating anything",
    body: "Character and location reference images are worth more than any amount of descriptive language. The first thing you do on any AI production is generate your master references. Everything else is built on top of them.",
  },
  {
    n: "02",
    title: "The story has to do the heavy lifting",
    body: "AI can render any visual. It cannot decide what is worth rendering. The quality ceiling on AI production is not the model — it is the taste and judgement of the person directing it.",
  },
  {
    n: "03",
    title: "Strip prompts for performance, build prompts for environment",
    body: "Detailed, layered prompts work well for establishing environments and locations. For character performance — a shrug, a realisation, a turn of the head — strip everything except the action and the negation of the wrong action.",
  },
  {
    n: "04",
    title: "Sound design is doing more emotional work than any single visual",
    body: "The baby cry stopping when the package arrives is felt before it is understood. Audio architecture should be planned before generation begins, not assembled in post from whatever the model produced.",
  },
  {
    n: "05",
    title: "Iteration is the actual skill",
    body: "The first generation is never the final one. The skill is not in writing a perfect prompt — it is in diagnosing why a generation failed and knowing exactly which variable to change. That diagnostic ability is what separates a production from a prompt.",
  },
]

const TOOLS = [
  { name: "Higgsfield Cinema Studio", role: "Video generation with start/end frame control and in-prompt dialogue direction" },
  { name: "Higgsfield Soul Cinema", role: "Character and location reference image generation" },
  { name: "Higgsfield Audio", role: "Voice generation for Noah's dialogue and the parrot" },
  { name: "Seedance", role: "Additional image generation and prompt testing" },
  { name: "DaVinci Resolve", role: "Editing, colour grading, and sound design" },
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

export default function NoahArkCaseStudy() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <main style={{ backgroundColor: "#0a0a0a" }}>

      {/* ── S1 Hero ── */}
      <section style={{ backgroundColor: "#0a0a0a", paddingTop: "96px", paddingBottom: "64px" }}>
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
              Noah&apos;s Ark × Amazon Prime
            </h1>
            <p className="text-base md:text-lg mb-6 max-w-2xl" style={{ color: "#9ca3af" }}>
              A 30-second biblical epic. One forgotten item. One drone delivery through the storm.
            </p>

            {/* Metadata pills */}
            <div className="flex flex-wrap gap-2 mb-10">
              {["30 seconds", "Higgsfield + DaVinci Resolve", "Spec Commercial"].map((pill) => (
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

            {/* YouTube embed */}
            <div
              className="w-full rounded-sm overflow-hidden aspect-video"
              style={{ border: "1px solid #1f1f1f" }}
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/4LEwiHJ30xY?rel=0&modestbranding=1"
                title="Noah's Ark × Amazon Prime | AI Commercial Spec Ad"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ border: "none" }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── S2 By the Numbers ── */}
      <section className="py-16" style={{ backgroundColor: "#111111" }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fi}>
            <div className="flex flex-wrap md:flex-nowrap">
              {STATS.map((stat, i) => (
                <Fragment key={stat.label}>
                  <div className="w-1/2 md:w-auto md:flex-1 py-8 px-4 text-center">
                    <div className="text-4xl font-bold mb-2" style={{ color: "#D97706" }}>
                      {stat.num}
                    </div>
                    <div className="text-xs tracking-widest uppercase" style={{ color: "#9ca3af" }}>
                      {stat.label}
                    </div>
                  </div>
                  {i < STATS.length - 1 && (
                    <div
                      className="hidden md:block self-stretch"
                      style={{ width: "1px", backgroundColor: "#1f1f1f" }}
                    />
                  )}
                </Fragment>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── S3 The Brief ── */}
      <section className="py-24" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fi}>
            <Num n="01" />
            <h2 className="text-3xl font-bold mb-8" style={{ color: "#f5f5f5" }}>The Brief</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-5">
                {[
                  "The brief was self-set: build a 15-second Amazon Prime spec commercial using only AI production tools. No camera. No crew. No location budget. The creative constraint was to deliver a spot that could sit alongside real Super Bowl work — not as a curiosity, but as a genuine piece of branded storytelling.",
                  "The Amazon brief was clear: Prime delivers anywhere, to anyone, no matter what. The challenge was to find a situation that made that promise feel impossible — and then prove it anyway. Noah's ark, three days before the flood, with a forgotten item on the manifest, was that situation.",
                  "The tone was set from the first creative decision: earnest-cinematic, not comedic. The situation is inherently funny. The spot doesn't need to wink at the audience. It needs to play it completely straight and let the absurdity do the work.",
                ].map((para, i) => (
                  <p key={i} className="text-base leading-relaxed" style={{ color: "#9ca3af" }}>
                    {para}
                  </p>
                ))}
              </div>
              <div className="border p-6" style={{ borderColor: "#1f1f1f", backgroundColor: "#0d0d0d" }}>
                <p
                  className="text-xs font-bold tracking-widest uppercase mb-3"
                  style={{ color: "#D97706" }}
                >
                  BRAND PROMISE
                </p>
                <p className="text-xl font-semibold leading-snug mb-6" style={{ color: "#f5f5f5" }}>
                  &ldquo;Delivered anywhere. No matter what.&rdquo;
                </p>
                <div className="h-px" style={{ backgroundColor: "#1f1f1f" }} />
                <p
                  className="text-xs font-bold tracking-widest uppercase mt-6 mb-3"
                  style={{ color: "#D97706" }}
                >
                  CREATIVE CHALLENGE
                </p>
                <p className="text-xl font-semibold leading-snug" style={{ color: "#f5f5f5" }}>
                  &ldquo;Make the impossible delivery feel inevitable.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── S4 The Concept ── */}
      <section className="py-24" style={{ backgroundColor: "#111111" }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fi}>
            <Num n="02" />
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#f5f5f5" }}>The Concept</h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: "#9ca3af" }}>
              Three creative decisions shaped the entire production. Every subsequent choice — character
              design, colour language, shot structure, sound design — flowed from these three.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  n: "01",
                  title: "Earnest-Cinematic Over Comedy",
                  body: "Super Bowl spots that win awards play the story straight and let the situation be the joke. A winking, self-aware tone would have dated the spot in 18 months. Playing it completely sincere — a man genuinely checking his ark inventory, a mother genuinely exhausted — means the comedy comes from the situation, not from breaking the fourth wall.",
                },
                {
                  n: "02",
                  title: "A Glowing Scroll Over a Smartphone",
                  body: "Introducing a modern smartphone 8 seconds into a biblical epic would have punctured the world. The scroll transforming into an ordering device keeps the audience inside the story while still communicating the product action clearly. It also positions Amazon as something almost mythic — a service that transcends time and technology.",
                },
                {
                  n: "03",
                  title: "A Brand Mascot Over a Spokesperson",
                  body: "The blue-and-gold macaw carries Amazon's colour language without a word of exposition. Its catchphrase — 'Two of everything! Even diapers!' — does the brand recall work that a voiceover would normally carry, in a form the audience will actually remember and repeat. It became the spot's most distinctive creative asset without being planned from the start.",
                },
              ].map((card) => (
                <div
                  key={card.n}
                  className="border p-6"
                  style={{ backgroundColor: "#0a0a0a", borderColor: "#1f1f1f" }}
                >
                  <div className="text-2xl font-bold mb-4" style={{ color: "#D97706" }}>{card.n}</div>
                  <h3 className="text-lg font-semibold mb-3" style={{ color: "#f5f5f5" }}>{card.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>{card.body}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── S5 Creative Decisions ── */}
      <section className="py-24" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fi}>
            <Num n="03" />
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#f5f5f5" }}>Creative Decisions</h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: "#9ca3af" }}>
              Every major creative decision was made before any generation began. The format: what we
              chose, what we didn&apos;t, and why.
            </p>
            <div className="border" style={{ borderColor: "#1f1f1f" }}>
              {/* Desktop header row */}
              <div
                className="hidden md:grid md:grid-cols-[1fr_1fr_2fr] border-b px-6 py-3"
                style={{ backgroundColor: "#0d0d0d", borderColor: "#1f1f1f" }}
              >
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#D97706" }}>
                  WE CHOSE
                </span>
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#6b7280" }}>
                  OVER
                </span>
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#6b7280" }}>
                  BECAUSE
                </span>
              </div>
              {DECISIONS.map((d, i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 md:grid-cols-[1fr_1fr_2fr] gap-4 md:gap-0 border-b last:border-b-0 px-6 py-6"
                  style={{
                    borderColor: "#1f1f1f",
                    backgroundColor: i % 2 === 0 ? "#111111" : "#0d0d0d",
                  }}
                >
                  <div>
                    <span
                      className="block md:hidden text-xs font-bold tracking-widest uppercase mb-1"
                      style={{ color: "#D97706" }}
                    >
                      WE CHOSE
                    </span>
                    <span className="text-base font-semibold" style={{ color: "#f5f5f5" }}>{d.chose}</span>
                  </div>
                  <div>
                    <span
                      className="block md:hidden text-xs font-bold tracking-widest uppercase mb-1"
                      style={{ color: "#6b7280" }}
                    >
                      OVER
                    </span>
                    <span className="text-sm line-through" style={{ color: "#6b7280" }}>{d.over}</span>
                  </div>
                  <div>
                    <span
                      className="block md:hidden text-xs font-bold tracking-widest uppercase mb-1"
                      style={{ color: "#6b7280" }}
                    >
                      BECAUSE
                    </span>
                    <span className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>{d.because}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── S6 Shot List ── */}
      <section className="py-24" style={{ backgroundColor: "#111111" }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div {...fi}>
            <Num n="04" />
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#f5f5f5" }}>The Shot List</h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#9ca3af" }}>
              The full 15-second structure, shot by shot. Every frame planned before any generation began.
            </p>

            {/* Desktop table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ backgroundColor: "#0a0a0a" }}>
                    {["TIME", "SHOT", "PICTURE", "SOUND", "FRAME'S JOB"].map((col) => (
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
                    <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#111111" : "#0d0d0d" }}>
                      <td
                        className="px-4 py-4 align-top text-xs font-mono whitespace-nowrap border-b"
                        style={{ color: "#D97706", borderColor: "#1f1f1f", minWidth: "90px" }}
                      >
                        {row.time}
                      </td>
                      <td
                        className="px-4 py-4 align-top text-xs font-semibold border-b"
                        style={{ color: "#f5f5f5", borderColor: "#1f1f1f", minWidth: "150px" }}
                      >
                        {row.shot}
                      </td>
                      <td
                        className="px-4 py-4 align-top text-xs leading-relaxed border-b"
                        style={{ color: "#9ca3af", borderColor: "#1f1f1f", minWidth: "200px" }}
                      >
                        {row.picture}
                      </td>
                      <td
                        className="px-4 py-4 align-top text-xs leading-relaxed border-b"
                        style={{ color: "#9ca3af", borderColor: "#1f1f1f", minWidth: "160px" }}
                      >
                        {row.sound}
                      </td>
                      <td
                        className="px-4 py-4 align-top text-xs font-medium border-b"
                        style={{ color: "#f5f5f5", borderColor: "#1f1f1f", minWidth: "130px" }}
                      >
                        {row.job}
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
                  style={{ borderColor: "#1f1f1f", backgroundColor: "#0a0a0a" }}
                >
                  <div className="flex items-baseline gap-3 mb-3 flex-wrap">
                    <span className="text-xs font-mono font-bold" style={{ color: "#D97706" }}>
                      {row.time}
                    </span>
                    <span className="text-xs font-semibold" style={{ color: "#f5f5f5" }}>{row.shot}</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <p>
                      <span
                        className="font-bold tracking-widest uppercase"
                        style={{ color: "#6b7280" }}
                      >
                        Picture —{" "}
                      </span>
                      <span style={{ color: "#9ca3af" }}>{row.picture}</span>
                    </p>
                    <p>
                      <span
                        className="font-bold tracking-widest uppercase"
                        style={{ color: "#6b7280" }}
                      >
                        Sound —{" "}
                      </span>
                      <span style={{ color: "#9ca3af" }}>{row.sound}</span>
                    </p>
                    <p>
                      <span
                        className="font-bold tracking-widest uppercase"
                        style={{ color: "#6b7280" }}
                      >
                        Frame&apos;s job —{" "}
                      </span>
                      <span className="font-medium" style={{ color: "#f5f5f5" }}>{row.job}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── S7 Prompt Framework ── */}
      <section className="py-24" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fi}>
            <Num n="05" />
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#f5f5f5" }}>
              The Prompt Framework
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: "#9ca3af" }}>
              Every AI video prompt in this production was built using a 13-category framework. Before
              writing a single prompt, each category was identified and filled. This is what separates
              a consistent production from a collection of lucky generations.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
              {CATEGORIES.map((cat) => (
                <div
                  key={cat.n}
                  className="border p-4"
                  style={{ borderColor: "#1f1f1f", backgroundColor: "#111111" }}
                >
                  <div className="text-xs font-bold mb-1" style={{ color: "#D97706" }}>{cat.n}</div>
                  <div className="text-sm font-semibold mb-1" style={{ color: "#f5f5f5" }}>{cat.name}</div>
                  <div className="text-xs leading-relaxed" style={{ color: "#9ca3af" }}>{cat.desc}</div>
                </div>
              ))}
            </div>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center justify-center px-6 py-3 rounded-sm font-semibold text-sm transition-opacity hover:opacity-80"
              style={{ backgroundColor: "#D97706", color: "#0a0a0a" }}
            >
              Download the Full Prompt Guide
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── S8 Production Pipeline ── */}
      <section className="py-24" style={{ backgroundColor: "#111111" }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fi}>
            <Num n="06" />
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#f5f5f5" }}>
              The Production Pipeline
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#9ca3af" }}>
              Nine stages from concept to delivery. Each stage had a specific tool, a specific
              decision, and a specific output.
            </p>

            {/* Desktop: horizontal scrollable */}
            <div className="hidden md:block overflow-x-auto pb-4">
              <div className="flex min-w-max">
                {PIPELINE.map((stage, i) => (
                  <Fragment key={stage.n}>
                    <div
                      className="border p-5 w-44 flex-shrink-0"
                      style={{ backgroundColor: "#0a0a0a", borderColor: "#1f1f1f" }}
                    >
                      <div className="text-2xl font-bold mb-3" style={{ color: "#D97706" }}>
                        {stage.n}
                      </div>
                      <div className="text-sm font-semibold mb-1" style={{ color: "#f5f5f5" }}>
                        {stage.name}
                      </div>
                      <div className="text-xs mb-2" style={{ color: "#D97706" }}>{stage.tool}</div>
                      <div className="text-xs leading-relaxed" style={{ color: "#9ca3af" }}>
                        {stage.desc}
                      </div>
                    </div>
                    {i < PIPELINE.length - 1 && (
                      <div className="flex items-center px-2 flex-shrink-0">
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
                          aria-hidden
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}
                  </Fragment>
                ))}
              </div>
            </div>

            {/* Mobile: vertical stack */}
            <div className="md:hidden space-y-3">
              {PIPELINE.map((stage, i) => (
                <div key={stage.n}>
                  <div
                    className="border p-5"
                    style={{ backgroundColor: "#0a0a0a", borderColor: "#1f1f1f" }}
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-2xl font-bold leading-none flex-shrink-0" style={{ color: "#D97706" }}>
                        {stage.n}
                      </span>
                      <div>
                        <div className="text-sm font-semibold mb-0.5" style={{ color: "#f5f5f5" }}>
                          {stage.name}
                        </div>
                        <div className="text-xs mb-1" style={{ color: "#D97706" }}>{stage.tool}</div>
                        <div className="text-xs leading-relaxed" style={{ color: "#9ca3af" }}>
                          {stage.desc}
                        </div>
                      </div>
                    </div>
                  </div>
                  {i < PIPELINE.length - 1 && (
                    <div className="flex justify-center py-2" aria-hidden>
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
          </motion.div>
        </div>
      </section>

      {/* ── S9 First Build: A Product Review ── */}
      <section className="py-24" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fi}>
            <Num n="07" />
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#f5f5f5" }}>
              First Build: A Product Review
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#9ca3af" }}>
              This was my first full production using Higgsfield. The observations below are what I
              noted as a new user thinking about the experience from an AI Product Management
              perspective — what worked, where the product gaps are, and what I would build next.
            </p>
            <p className="text-sm leading-relaxed mb-10 italic" style={{ color: "#6b7280" }}>
              These are first-time user observations, not the verdict of a long-term power user. That
              framing matters — the friction a new user notices is the friction a long-term user has
              already adapted around.
            </p>
            <div className="space-y-6">
              {OBSERVATIONS.map((o) => (
                <div
                  key={o.n}
                  className="border p-6 md:p-8"
                  style={{ borderColor: "#1f1f1f", backgroundColor: "#111111" }}
                >
                  <div className="flex items-baseline gap-4 mb-6">
                    <span className="text-2xl font-bold" style={{ color: "#D97706" }}>{o.n}</span>
                    <h3 className="text-lg font-semibold" style={{ color: "#f5f5f5" }}>{o.title}</h3>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <p
                        className="text-xs font-bold tracking-widest uppercase mb-2"
                        style={{ color: "#D97706" }}
                      >
                        WHAT I OBSERVED
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>
                        {o.observed}
                      </p>
                    </div>

                    <div>
                      <p
                        className="text-xs font-bold tracking-widest uppercase mb-2"
                        style={{ color: "#6b7280" }}
                      >
                        WHAT&apos;S ACTUALLY HAPPENING
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>
                        {o.happening}
                      </p>
                    </div>

                    <div>
                      <p
                        className="text-xs font-bold tracking-widest uppercase mb-2"
                        style={{ color: "#D97706" }}
                      >
                        PRODUCT SUGGESTION
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>
                        {o.suggestion}
                      </p>
                    </div>

                    <div
                      className="pt-4"
                      style={{ borderTop: "1px solid #1f1f1f" }}
                    >
                      <p
                        className="text-xs font-bold tracking-widest uppercase mb-2"
                        style={{ color: "#6b7280" }}
                      >
                        WHY THIS MATTERS
                      </p>
                      <p className="text-xs leading-relaxed italic" style={{ color: "#6b7280" }}>
                        {o.matters}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── S10 Colour Grade and Sound Design ── */}
      <section className="py-24" style={{ backgroundColor: "#111111" }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fi}>
            <Num n="08" />
            <h2 className="text-3xl font-bold mb-12" style={{ color: "#f5f5f5" }}>
              Colour Grade and Sound Design
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

              {/* Left — Colour Grade */}
              <div>
                <h3 className="text-lg font-semibold mb-4" style={{ color: "#f5f5f5" }}>
                  The Two-Palette System
                </h3>
                <div className="space-y-4 text-sm leading-relaxed mb-8" style={{ color: "#9ca3af" }}>
                  <p>
                    Every shot in the spot belongs to one of two colour worlds. The exterior and storm
                    shots live in cold slate-blue and bruised charcoal — oppressive, dangerous, the world
                    ending. The interior and family shots live in warm amber-gold and honey-brown — safe,
                    alive, worth protecting.
                  </p>
                  <p>
                    The colour contrast is the spot&apos;s whole emotional argument. The drone shot is the
                    only frame where both palettes appear simultaneously — cold blue LEDs cutting through
                    the storm, warm amber package beneath. That single frame is Amazon&apos;s brand promise
                    expressed as colour.
                  </p>
                  <p>
                    DaVinci Resolve was used to ensure every interior shot matched the same amber
                    temperature and every exterior shot matched the same cold grade, regardless of what
                    the generator produced.
                  </p>
                </div>
                {/* Colour swatches */}
                <div className="space-y-4">
                  <div>
                    <p
                      className="text-xs font-bold tracking-widest uppercase mb-2"
                      style={{ color: "#6b7280" }}
                    >
                      EXTERIOR / STORM
                    </p>
                    <div className="flex gap-4">
                      {[{ hex: "#64748b" }, { hex: "#374151" }].map(({ hex }) => (
                        <div key={hex}>
                          <div className="w-12 h-12 rounded-sm mb-1" style={{ backgroundColor: hex }} />
                          <span className="text-xs" style={{ color: "#6b7280" }}>{hex}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p
                      className="text-xs font-bold tracking-widest uppercase mb-2"
                      style={{ color: "#6b7280" }}
                    >
                      INTERIOR / SANCTUARY
                    </p>
                    <div className="flex gap-4">
                      {[{ hex: "#D97706" }, { hex: "#92400e" }].map(({ hex }) => (
                        <div key={hex}>
                          <div className="w-12 h-12 rounded-sm mb-1" style={{ backgroundColor: hex }} />
                          <span className="text-xs" style={{ color: "#6b7280" }}>{hex}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right — Sound Design */}
              <div>
                <h3 className="text-lg font-semibold mb-4" style={{ color: "#f5f5f5" }}>
                  The Audio Architecture
                </h3>
                <div className="space-y-3 mb-6">
                  {AUDIO_TIMELINE.map((row) => (
                    <div key={row.time} className="flex gap-4 items-start">
                      <span
                        className="text-xs font-mono whitespace-nowrap pt-0.5 flex-shrink-0"
                        style={{ color: "#D97706", minWidth: "72px" }}
                      >
                        {row.time}
                      </span>
                      <span className="text-xs leading-relaxed" style={{ color: "#9ca3af" }}>
                        {row.desc}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-sm italic" style={{ color: "#D97706" }}>
                  &ldquo;The baby cry stopping the instant the package arrives is the spot&apos;s
                  emotional climax. The audience feels it even if they don&apos;t consciously register
                  it.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── S11 Key Learnings ── */}
      <section className="py-24" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fi}>
            <Num n="09" />
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#f5f5f5" }}>Key Learnings</h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: "#9ca3af" }}>
              What this production changed about how I work.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {LEARNINGS.map((l) => (
                <div
                  key={l.n}
                  className="border p-6"
                  style={{ backgroundColor: "#111111", borderColor: "#1f1f1f" }}
                >
                  <div className="text-2xl font-bold mb-4" style={{ color: "#D97706" }}>{l.n}</div>
                  <h3 className="text-base font-semibold mb-3" style={{ color: "#f5f5f5" }}>{l.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>{l.body}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── S12 Behind the Scenes ── */}
      <section className="py-24" style={{ backgroundColor: "#111111" }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fi}>
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#f5f5f5" }}>How It Was Made</h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#9ca3af" }}>
              A full walkthrough of the production — from concept to final cut.
            </p>
            <div
              className="w-full aspect-video flex items-center justify-center rounded-sm"
              style={{ backgroundColor: "#0a0a0a", border: "1px dashed #1f1f1f" }}
            >
              <span className="text-sm" style={{ color: "#6b7280" }}>
                Behind-the-scenes video coming soon
              </span>
            </div>
            <p className="text-xs mt-4" style={{ color: "#6b7280" }}>
              Full production walkthrough — concept, character design, prompt engineering, generation,
              editing, and colour grade — coming soon.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── S13 Tools Used ── */}
      <section className="py-16" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fi}>
            <h2 className="text-2xl font-bold mb-8" style={{ color: "#f5f5f5" }}>Tools Used</h2>
            <div className="flex flex-wrap gap-4">
              {TOOLS.map((tool) => (
                <div
                  key={tool.name}
                  className="border px-5 py-4"
                  style={{ borderColor: "#1f1f1f", backgroundColor: "#111111" }}
                >
                  <div className="text-sm font-semibold mb-1" style={{ color: "#f5f5f5" }}>
                    {tool.name}
                  </div>
                  <div className="text-xs" style={{ color: "#9ca3af" }}>{tool.role}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── S14 Download CTA ── */}
      <section className="py-20" style={{ backgroundColor: "#111111" }}>
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <motion.div {...fi}>
            <p
              className="text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: "#D97706" }}
            >
              FREE DOWNLOAD
            </p>
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#f5f5f5" }}>
              Want the full prompt framework?
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "#9ca3af" }}
            >
              The complete guide — 13 categories, real prompts, generation examples, failure modes,
              and fixes. Everything from this production in one document.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center justify-center px-6 py-3 rounded-sm font-semibold text-sm transition-opacity hover:opacity-80"
              style={{ backgroundColor: "#D97706", color: "#0a0a0a" }}
            >
              Download the Prompt Guide
            </button>
            <p className="text-xs mt-4" style={{ color: "#6b7280" }}>
              Free. Your email is only used to send you the guide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── S15 Work With Me CTA ── */}
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

      {/* ── S16 Disclaimer and Navigation ── */}
      <section
        className="py-12"
        style={{ backgroundColor: "#0a0a0a", borderTop: "1px solid #1f1f1f" }}
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
            sponsored by, or endorsed by Amazon.com, Inc. or its affiliates. All brand marks are
            property of their respective owners.
          </p>
        </div>
      </section>

      {/* Single shared DownloadModal instance */}
      <DownloadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        artefactId="filmmaker-prompt-guide"
        project="AI Filmmaker"
        artefactName="AI Commercial Production — Prompt Guide"
      />
    </main>
  )
}
