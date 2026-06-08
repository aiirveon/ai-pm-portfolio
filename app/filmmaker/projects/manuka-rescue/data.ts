import type { CaseStudyData } from "@/components/filmmaker/CaseStudy"

export const data: CaseStudyData = {
  accent: "#D97706",

  hero: {
    specLabel: "SPEC COMMERCIAL · 2026",
    title: "Dr. Organic Manuka Honey Rescue Cream",
    tagline: "A skincare film for all skin. Three women. One ritual. No words.",
    pills: ["11 seconds", "Higgsfield + Seedance + DaVinci Resolve", "Spec Commercial"],
    youtubeId: "zBxeybQ0KIs",
    videoTitle: "Dr. Organic Manuka Honey Rescue Cream | AI Commercial Spec Ad",
  },

  statement: {
    paragraphs: [
      "I wanted to try a fast-paced skincare film. Most ads in the category slow down — soft music, long dwells, voiceover doing the heavy lifting. I wanted the opposite. Quick cuts, energy, the product moving through real moments of application instead of sitting on a plinth.",
      "The brief I gave myself was to show the cream actually being used — on real skin, in real light, across the range of people the brand says it's for. The film cuts between women whose skin types and tones differ, but the cream stays constant. Same formula, same warmth, same finish.",
      "Dr. Organic has refused to compromise on ingredients since 1989. The Manuka Honey Rescue Cream is COSMOS Organic certified and vegan. The film had to feel as honest as the formulation — no fake glow, no over-grading, no promise the product can't keep.",
    ],
  },

  sceneBreakdown: {
    intro: "Five shot types. Each chosen for a specific reason.",
    columns: ["TYPE", "SHOT", "WHY IT WAS PICKED"],
    rows: [
      {
        col1: "Cast Establishing",
        col2: "The three women together — studio",
        col3: "One frame that says everything the ad is about. Three skin types, three skin tones, one cream. The shot does the work a voiceover would have done in a slower ad — the casting is the message.",
      },
      {
        col1: "Package Overhead",
        col2: "Top-down on travertine — Dr. Organic carton centred",
        col3: "Product hero without performance. The carton sits on warm, imperfect stone — honest material, no plinth, no gloss. The audience sees what they would actually buy.",
      },
      {
        col1: "Application Close-Up — African Woman",
        col2: "Jar in one hand, cream to cheek with the other, smiling to camera",
        col3: "The cream actually being used. Real application, real expression, no posed glow. The product is in her hand and on her skin in the same frame — proof inside one shot.",
      },
      {
        col1: "Application Close-Up — South Asian Woman",
        col2: "Same gesture, her own home, soft window light",
        col3: "Same action, different woman, different space. The home setting grounds the product in a real morning. The repetition is deliberate — same gesture across different lives.",
      },
      {
        col1: "Closing Hero",
        col2: "Open jar, silver lid removed, a single bee in flight, golden pollen in the air",
        col3: "The source of the product made literal. Manuka honey comes from bees. The film opens on the package and closes on where the package comes from. Brand, then biology.",
      },
    ],
  },

  commentary: {
    intro: "Two shots. The thinking behind the frame.",
    notes: [
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
    ],
  },

  visualLanguage: {
    paragraphs: [
      "The film lives in a single palette. Warm off-white, honey beige, coral accents — pulled directly from the product packaging. The walls, the wardrobe, the furnishings all sit in the same warm register. The cream is not introduced into the world; the world was built to receive it.",
      "Coral-orange is the hero accent — used once in the wardrobe of Character 1, used once on the product label, used nowhere else. The leaf green appears only on the end-card logo. Restraint is the discipline. Every frame had to earn its colour.",
      "DaVinci Resolve carried the consistency. Every frame graded to the same warm daylight temperature — roughly 3500–4000K. Soft shadows. Skin tones true. The grade is invisible if the audience never thinks about it. That is the goal.",
    ],
    palette: [
      { role: "Hero accent (coral)", hex: "#D97706" },
      { role: "Base / canvas (warm off-white)", hex: "#F7F5F0" },
      { role: "Warm cream (honey beige)", hex: "#E6D5B8" },
      { role: "Anchor (soft charcoal)", hex: "#2B2B2B" },
    ],
  },

  casting: {
    heading: "Casting & Character Design",
    characters: [
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
    ],
  },

  soundDesign: {
    intro: "How the audio carries an 11-second cut.",
    paragraphs: [
      "The film is fast. The cuts move quickly, and the sound had to move with them. I picked an upbeat, rhythmic track — light percussion, a driving tempo, no vocals. Music that lifts the spot without competing with it.",
      "Skincare ads usually slow the audio to signal calm — soft piano, ambient pads, a single sustained tone. I wanted the opposite. The energy of the music tells the audience this is a product for a real morning, not a meditation. The cream sits inside an active life, not a spa.",
      "Diegetic sound is minimal. A single click as the jar opens. The soft scoop of cream. The track carries everything else. The audio does the same job the voiceover would have done in a slower ad — setting the pace and emotional register — without saying anything.",
    ],
  },

  tools: [
    { name: "Higgsfield Soul", role: "Character reference generation" },
    { name: "Higgsfield Cinema Studio", role: "Video generation, start/end frame control" },
    { name: "Seedance 2.0", role: "Product moment generation, motion-from-still" },
    { name: "DaVinci Resolve", role: "Edit, colour grade, sound design" },
  ],

  linkedIn: {
    intro: "The full prompt set and shot-by-shot workflow behind this film — how each frame was generated, refined, and assembled. Written up in detail on LinkedIn.",
    ugcPostId: "7467956894515601408",
  },

  disclaimer:
    "This is a speculative concept ad created for portfolio purposes only. Not affiliated with, sponsored by, or endorsed by Dr. Organic. All product names, logos, and brands are property of their respective owners. Dr. Organic® is a registered trademark of its respective owner.",
}
