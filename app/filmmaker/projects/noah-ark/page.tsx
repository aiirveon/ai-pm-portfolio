"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import DownloadModal from "@/components/DownloadModal"

// ─── Data ─────────────────────────────────────────────────────────────────────

const SHOTS = [
  {
    time: "0:01–0:02",
    title: "Shot 1 — The Ark",
    purpose: "Establishes world, weather, stakes",
    sound: "Wind, distant thunder, animal foley",
  },
  {
    time: "0:03–0:04",
    title: "Shot 2 — Noah at the Threshold",
    purpose: "Introduces character. Parallax slows time.",
    sound: "Noah VO: 'Lions, check. Grain, check. Water...'",
  },
  {
    time: "0:05",
    title: "Shot 3 — The Wife",
    purpose: "Introduces the second protagonist. The baby cries.",
    sound: "Baby cry cuts in. VO stops.",
  },
  {
    time: "0:06–0:07",
    title: "Shot 4 — Noah Hears",
    purpose: "Noah locates the cry. The world narrows.",
    sound: "Cry continues. Low cello holds.",
  },
  {
    time: "0:08–0:12",
    title: "Shot 5 — The Realisation",
    purpose: "Slow zoom in. The longest beat in the spot.",
    sound: "Cry ducks under heartbeat pulse.",
  },
  {
    time: "0:14–0:15",
    title: "Shot 6 — Instruction",
    purpose: "Noah tells the parrot to fetch the tablet.",
    sound: "Noah: 'Bring me the tablet.'",
  },
  {
    time: "0:16–0:17",
    title: "Shot 7 — The Order",
    purpose: "Noah orders diapers on the glowing tablet.",
    sound: "Mystical shimmer. Amazon chime.",
  },
  {
    time: "0:17–0:20",
    title: "Shot 8 — The Drone Approaches",
    purpose: "The drone over water, heading for the ark. Hero shot.",
    sound: "Drone hum. Rising string. No struggle.",
  },
  {
    time: "0:20–0:23",
    title: "Shot 9 — The Parcel Lands",
    purpose: "Parcel lands on the stool. Then the parrot lands on the parcel.",
    sound: "Parcel thud. Wing flap. Parrot: 'That was fast! That was fast!'",
  },
  {
    time: "0:24–0:25",
    title: "Shot 10 — The Shush",
    purpose: "Wife shushes the parrot. The button on the joke.",
    sound: "Single 'shhh'. Silence. Hold.",
  },
]

const DIRECTOR_NOTES = [
  {
    n: "01",
    title: "The Opening Shot",
    shot: "Shot 1 — Aerial of the ark, animals processing two-by-two, storm building",
    intent: "Wide, high, still. No camera movement. The opening shot of a Super Bowl spot has one job — make the audience commit to the world in two seconds. A static wide signals confidence. The animals are still in the frame even though logically they should already be inside — because the audience needs to recognise this is Noah's ark before they recognise anything else. Story clarity over scene logic.",
    rejected: "The version with the camera pushing in was tested and rejected. It pulled attention to the camera instead of the world. The shot needed to feel found, not directed.",
  },
  {
    n: "02",
    title: "The Parallax Around Noah",
    shot: "Shot 2 — Slow parallax orbit around Noah holding the scroll, parrot on shoulder",
    intent: "Parallax buys time. The viewer learns the interior, the character, the wardrobe, the parrot, and the lighting in a single shot without a cut. The camera doing the work means the actor doesn't have to. Noah is doing one thing — reading a list — and the parallax dresses that one action with everything the audience needs to understand the scene. The slow speed signals this is a world where time matters, not a world where speed matters. That tonal decision sets up the realisation moment later.",
    rejected: "A faster orbit was tested. It made the scene feel restless, like the spot was nervous about losing attention. Slowing it down was the right call.",
  },
  {
    n: "03",
    title: "The Realisation",
    shot: "Shot 5 — Slow zoom into Noah's face. The realisation lands. Five seconds.",
    intent: "Five seconds is a long time to hold on a face in a 30-second commercial. Most directors would have cut to the scroll, then to a reaction shot, then to the wife. I held the shot. The zoom does the work the cuts would have done. The audience watches the realisation happen in real time — the eyes shift, the mouth opens slightly, the breath changes. That is what they remember, not the joke that follows. The whole spot is structured to earn this hold.",
    rejected: "A cutaway to the scroll showing 'diapers' missing was generated and rejected. It explained the joke before the audience had felt the moment. The face had to do the work alone.",
  },
  {
    n: "04",
    title: "The Drone Over Water",
    shot: "Shot 8 — Amazon drone above open water, heading toward the ark",
    intent: "I chose water over storm. The original treatment had the drone fighting through rain and lightning — action-movie energy, struggle as drama. I rejected that. Water is calmer, quieter, more cinematic. The drone moving steadily over water signals that Amazon's brand promise isn't 'we will fight through anything' — it's 'we will simply arrive.' Calmness as power, not struggle as power. The shot is the only one in the spot that contains both palettes — the cold blue of the water below, the warm light implied by the ark ahead. Two worlds in one frame.",
    rejected: "The storm version is technically more impressive. But more impressive is not the same as more right. Drama belongs to the realisation. The delivery belongs to inevitability.",
  },
  {
    n: "05",
    title: "The Lion, The Stool, The Woman",
    shot: "Shot 9 — Parcel lands on the wooden stool. The lion watches. The woman stands by.",
    intent: "This shot is the spot's establishing shot for the interior — but it happens at second 20, not second 5. The audience has been inside the ark for most of the runtime, but I held back the full establishing of the space until the moment of delivery. The lion lying calmly next to the parcel is the visual joke — peace in chaos, the world Noah has built actually working. The wooden stool is deliberately small and worn — the modern Amazon box on top of it makes the contrast land. The woman in the background, standing not rocking, signals the cry has stopped. That single piece of staging is doing more emotional work than the dialogue.",
    rejected: "A version with the parcel landing in Noah's hands was generated. It made Noah the hero of the delivery. I wanted the delivery to feel autonomous — Amazon arriving without ceremony. The stool is more honest.",
  },
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

const TOOLS = [
  { name: "Higgsfield Cinema Studio", role: "Video generation, start/end frame control, dialogue direction" },
  { name: "Higgsfield Soul Cinema", role: "Character and location reference generation" },
  { name: "Higgsfield Audio", role: "Voice generation for Noah and the parrot" },
  { name: "Seedance", role: "Additional image and shot testing" },
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

export default function NoahArkCaseStudy() {
  const [modalOpen, setModalOpen] = useState(false)

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
              Noah&apos;s Ark × Amazon Prime
            </h1>
            <p className="text-base md:text-lg mb-6 max-w-2xl" style={{ color: "#9ca3af" }}>
              A 30-second biblical epic. One forgotten item. One drone delivery.
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

      {/* ── S2 Logline ── */}
      <section className="py-20" style={{ backgroundColor: "#111111" }}>
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div {...fi}>
            <p
              className="text-xs font-bold tracking-widest uppercase mb-6"
              style={{ color: "#D97706" }}
            >
              LOGLINE
            </p>
            <blockquote
              className="text-3xl md:text-4xl font-bold italic leading-tight"
              style={{ color: "#f5f5f5" }}
            >
              &ldquo;Three days before the flood, Noah forgets the diapers. Amazon delivers anyway.&rdquo;
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* ── S3 Director's Statement ── */}
      <section className="py-24" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fi}>
            <Num n="01" />
            <h2 className="text-3xl font-bold mb-8" style={{ color: "#f5f5f5" }}>
              Director&apos;s Statement
            </h2>
            <div className="space-y-5 max-w-3xl">
              {[
                "I wanted to make a Super Bowl spot that didn't feel like a Super Bowl spot. The genre is biblical epic, the brand promise is Amazon Prime, and the joke is that they belong in the same world.",
                "Played completely straight. No winks. No nudges. The comedy lives in the situation, not in the performances. Noah is genuinely trying to finish his list. The wife is genuinely exhausted. The baby is genuinely crying. The parrot is the only character who knows we're in a commercial.",
                "Every creative decision was made to keep the audience inside the world for as long as possible. The drone is the only modern object that appears. The ordering device is a glowing scroll. The shush at the end is the wife reasserting the world over the gag. The audience laughs because they were never told to.",
              ].map((para, i) => (
                <p key={i} className="text-base leading-relaxed" style={{ color: "#9ca3af" }}>
                  {para}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── S4 Shot List ── */}
      <section className="py-24" style={{ backgroundColor: "#111111" }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div {...fi}>
            <Num n="02" />
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#f5f5f5" }}>
              The Shot List
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#9ca3af" }}>
              Ten shots. Thirty seconds. Every frame planned before any generation began.
            </p>

            {/* Desktop table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ backgroundColor: "#0a0a0a" }}>
                    {["TIME", "SHOT", "PURPOSE", "SOUND"].map((col) => (
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
                        style={{ color: "#f5f5f5", borderColor: "#1f1f1f", minWidth: "180px" }}
                      >
                        {row.title}
                      </td>
                      <td
                        className="px-4 py-4 align-top text-xs leading-relaxed border-b"
                        style={{ color: "#9ca3af", borderColor: "#1f1f1f", minWidth: "200px" }}
                      >
                        {row.purpose}
                      </td>
                      <td
                        className="px-4 py-4 align-top text-xs leading-relaxed border-b"
                        style={{ color: "#9ca3af", borderColor: "#1f1f1f", minWidth: "160px" }}
                      >
                        {row.sound}
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
                    <span className="text-xs font-semibold" style={{ color: "#f5f5f5" }}>{row.title}</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <p>
                      <span className="font-bold tracking-widest uppercase" style={{ color: "#6b7280" }}>
                        Purpose —{" "}
                      </span>
                      <span style={{ color: "#9ca3af" }}>{row.purpose}</span>
                    </p>
                    <p>
                      <span className="font-bold tracking-widest uppercase" style={{ color: "#6b7280" }}>
                        Sound —{" "}
                      </span>
                      <span style={{ color: "#9ca3af" }}>{row.sound}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── S5 Director's Commentary ── */}
      <section className="py-24" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fi}>
            <Num n="03" />
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#f5f5f5" }}>
              Director&apos;s Commentary
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#9ca3af" }}>
              Five shots. The thinking behind the frame.
            </p>
            <div>
              {DIRECTOR_NOTES.map((note) => (
                <div
                  key={note.n}
                  className="border-l-2 p-6 md:p-8 mb-6"
                  style={{ borderColor: "#D97706", backgroundColor: "#111111" }}
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

      {/* ── S6 Visual Language ── */}
      <section className="py-24" style={{ backgroundColor: "#111111" }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fi}>
            <Num n="04" />
            <h2 className="text-3xl font-bold mb-8" style={{ color: "#f5f5f5" }}>
              Visual Language
            </h2>
            <div className="space-y-5 max-w-3xl mb-10">
              {[
                "The spot lives in two colour worlds. The interior is warm amber and honey-brown — safe, alive, worth protecting. The exterior is cold slate and grey — the world ending outside the walls. Every shot belongs to one palette.",
                "The only shot containing both palettes is the drone over water. Cold blue below, warm light implied ahead. That single frame is Amazon's brand promise expressed as colour — the company that bridges the cold world and the warm one.",
                "DaVinci Resolve carried the consistency. Every interior frame was graded to the same amber temperature. Every exterior to the same cold register. The grade is invisible if the audience never thinks about it. That is the goal.",
              ].map((para, i) => (
                <p key={i} className="text-base leading-relaxed" style={{ color: "#9ca3af" }}>
                  {para}
                </p>
              ))}
            </div>

            {/* Colour swatches */}
            <div className="space-y-6">
              <div>
                <p
                  className="text-xs font-bold tracking-widest uppercase mb-3"
                  style={{ color: "#6b7280" }}
                >
                  EXTERIOR
                </p>
                <div className="flex gap-6">
                  {[{ hex: "#64748b" }, { hex: "#374151" }].map(({ hex }) => (
                    <div key={hex}>
                      <div className="w-16 h-16 mb-2" style={{ backgroundColor: hex }} />
                      <span className="text-xs" style={{ color: "#6b7280" }}>{hex}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p
                  className="text-xs font-bold tracking-widest uppercase mb-3"
                  style={{ color: "#6b7280" }}
                >
                  INTERIOR
                </p>
                <div className="flex gap-6">
                  {[{ hex: "#D97706" }, { hex: "#92400e" }].map(({ hex }) => (
                    <div key={hex}>
                      <div className="w-16 h-16 mb-2" style={{ backgroundColor: hex }} />
                      <span className="text-xs" style={{ color: "#6b7280" }}>{hex}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── S7 Casting & Character Design ── */}
      <section className="py-24" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fi}>
            <Num n="05" />
            <h2 className="text-3xl font-bold mb-10" style={{ color: "#f5f5f5" }}>
              Casting &amp; Character Design
            </h2>
            <div className="space-y-10">
              {[
                {
                  label: "NOAH",
                  body: "Late sixties, Mediterranean, deeply weathered. The face had to carry weight without performing weight. I tested younger faces — they read as serious, not heavy. Heaviness comes from time, and time has to show in the skin. The beard was deliberately long enough to obscure the neckline of his tunic. That choice later became a consistency challenge across shots — but the silhouette was worth it.",
                },
                {
                  label: "THE WIFE",
                  body: "Mid-thirties, calm, used to the work. Not exhausted. Not collapsed. The wife had to feel like she had been doing this for years already. The shush at the end of the spot only works if her presence has been quiet competence the whole way through. She is the adult in the room — including when the room is full of literal lions.",
                },
                {
                  label: "THE PARROT — A BLUE-AND-GOLD MACAW",
                  body: "Specifically blue and gold because those are Amazon's colours. A character that carries the brand's identity without anyone having to mention the brand. The parrot is the only character who breaks the world — speaks in modern English, comments on the action, performs for the audience. That is the licence the spot earns by playing everything else completely straight.",
                },
              ].map((char) => (
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

      {/* ── S8 Sound Design ── */}
      <section className="py-24" style={{ backgroundColor: "#111111" }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fi}>
            <Num n="06" />
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#f5f5f5" }}>
              Sound Design
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "#9ca3af" }}>
              What the audience hears, in the order they hear it.
            </p>
            <div className="space-y-5 max-w-3xl">
              {[
                "The spot opens with the world. Wind. Distant thunder. The sound of two hundred animals being herded onto a wooden ship. Noah's voice enters over the second shot — calm, list-making, a man finishing the work of his life. The audience meets him through his voice before they meet him as a character.",
                "The baby's cry is the inciting incident in audio form. It cuts through everything else. Noah's voice stops. The world narrows. By the time the audience sees the wife and baby, they have already understood what has gone wrong.",
                "The realisation shot is scored against the audio architecture, not for it. The cry ducks under a low heartbeat pulse. The audience is inside Noah's head. When the heartbeat fades, the realisation is complete.",
                "The shush at the end is the most important sound in the spot. Not the parrot. The shush. A single 'shhh' from the wife is the audience's permission to laugh. Without it the gag would have ended the spot on the parrot — making the parrot the protagonist. The shush returns the world to her. That is the last note.",
              ].map((para, i) => (
                <p key={i} className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>
                  {para}
                </p>
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

      {/* ── S10 Tools Used ── */}
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

      {/* ── S11 Download CTA ── */}
      <section className="py-20" style={{ backgroundColor: "#0a0a0a" }}>
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
              The complete guide — 13 categories, real prompts, generation examples, failure modes and fixes. Everything from this production in one document.
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

      {/* ── S12 Work With Me CTA ── */}
      <section className="py-20" style={{ backgroundColor: "#111111" }}>
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

      {/* ── S13 Disclaimer and Navigation ── */}
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
