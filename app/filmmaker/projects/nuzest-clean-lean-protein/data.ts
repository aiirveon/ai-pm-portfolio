import type { CaseStudyData } from "@/components/filmmaker/CaseStudy"

export const data: CaseStudyData = {
  accent: "#D97706",

  hero: {
    specLabel: "SPEC COMMERCIAL · 2026",
    title: "Nuzest Clean Lean Protein",
    tagline: "A protein shake made in a real kitchen. 17 seconds. No gym. No hype. Just breakfast.",
    pills: ["17 seconds", "ComfyUI + DaVinci Resolve", "Spec Commercial"],
    youtubeId: "ZDqq5bmvl3M",
    videoTitle: "Nuzest Clean Lean Protein | Spec Commercial",
  },

  statement: {
    paragraphs: [
      "Protein powder ads fall into two categories: gym motivation or wellness lifestyle. Both feel the same. I wanted to make something simpler. A woman making a shake in her kitchen on a Tuesday morning. That's it. No transformation, no before-and-after, no promise of a better body. Just a breakfast ingredient that tastes good and keeps the macros clean.",
      "The brief I gave myself was to use ComfyUI — free, open-source, no subscriptions. To prove that professional commercial work doesn't require expensive platforms or agency budgets. To show that filmmakers can build this themselves. The Nuzest specs speak for themselves once the shake is made: 20g protein, 1g carb, 0g sugar. The product is honest; the film had to be too.",
      "Clean Lean Protein is plant-based, dairy-free, vegan. The film had to feel as accessible as the product. No exclusivity. No gatekeeping. Just a real morning, real ingredients, real light, and a woman who's made this shake a hundred times before.",
    ],
  },

  sceneBreakdown: {
    intro: "Five moments. Each one a single action.",
    columns: ["TYPE", "SHOT", "WHY IT WAS PICKED"],
    rows: [
      {
        col1: "Establishing",
        col2: "Woman in warm kitchen, morning light, cabinets and shelves in soft focus",
        col3: "Sets the world. Real home, real light, real morning. The kitchen is where the product lives, not a studio.",
      },
      {
        col1: "Blend",
        col2: "Close-up inside blender — strawberries, blueberries, banana, protein powder mixed with milk swirling",
        col3: "Show the actual ingredients. Berries and banana visible. The product is one ingredient among many, not the hero doing the work alone.",
      },
      {
        col1: "Pour",
        col2: "Pouring blended shake into a tall glass, creamy pink liquid, natural light catching the edge",
        col3: "Motion without performance. The shake is made. Simple, real action. No voiceover needed.",
      },
      {
        col1: "Satisfaction",
        col2: "Woman holds the glass, takes a sip, genuine smile, looks toward window/light",
        col3: "The payoff is quiet. Not exaggerated. Just 'this tastes good and I made it myself in under a minute.' That's the sell.",
      },
      {
        col1: "Product Close-Up",
        col2: "Nuzest Clean Lean Protein Smooth Vanilla bag, teal packaging, specs visible — 20g protein, 1g carbs, 0g sugar",
        col3: "Product hero at the end. The audience already knows what it is by then. The specs land because they earned context from the shake.",
      },
    ],
  },

  commentary: {
    intro: "Two moments that carry the meaning.",
    notes: [
      {
        n: "01",
        title: "Opening in a Real Kitchen",
        shot: "Woman stands in a warm, sunlit kitchen with wood cabinets. Morning light from the side. Real appliances. Real counter.",
        intent: "Most protein powder ads open in a gym or with a fitness montage. I opened in a kitchen where people actually make shakes. The setting is the argument — this is not a supplement, it's a breakfast ingredient.",
        rejected: "A gym opening was generated. It looked like every other fitness brand. The kitchen is less obvious but more honest.",
      },
      {
        n: "02",
        title: "Closing with the Bag and the Specs",
        shot: "Nuzest teal bag held steady, front label clear. Specs readable: 20g protein, 1g carbs, 0g sugar, 100 servings.",
        intent: "The specs are not a sales pitch — they're proof that the shake she just drank delivers what was promised. No hyperbole. No claims the product can't keep.",
        rejected: "A glossy product beauty shot was tested. It looked like an ad. The spec-focused shot is honest and lands harder.",
      },
    ],
  },

  visualLanguage: {
    paragraphs: [
      "The film lives in morning kitchen light. Warm cream walls, wood cabinets, soft shadows. The only colour accent is the teal Nuzest packaging — used once, at the close. The palette is restraint. Everything else belongs in a real home at 7am.",
      "The blender moment is the visual climax. Berries, banana, and milk swirling together in glass. The shake inside the blender is the only moment of colour saturation. Once it's poured, it becomes soft pink in white ceramic. The colour fades as the action completes.",
      "DaVinci Resolve locked the grade. Warm daylight temperature — 3500K. No blue. No contrast pushed. Skin tones true. The grade is invisible if it works. By the end, the audience should only remember the woman and the shake, not the tooling.",
    ],
    palette: [
      { role: "Hero accent (deep petrol teal)", hex: "#1D4D4C" },
      { role: "Warm cream (kitchen backdrop)", hex: "#F5EFE0" },
      { role: "Milk white", hex: "#FAFAF8" },
      { role: "Berry deep (blended shake)", hex: "#8B3A62" },
      { role: "Anchor (soft charcoal)", hex: "#2B2B2B" },
    ],
  },

  casting: {
    heading: "Character",
    characters: [
      {
        label: "THE WOMAN",
        body: "Late twenties to early thirties, warm brown skin, long dark hair, natural expression. White casual shirt. Gold jewellery. She moves through the kitchen with ease — not performing, just making breakfast. The shake is part of her routine, not a transformation moment. Casting was about finding someone who felt real, not aspirational.",
      },
    ],
  },

  soundDesign: {
    intro: "How audio carries a 17-second morning moment.",
    paragraphs: [
      "The audio is mostly diegetic. Real kitchen sounds: water running, the blender whir, liquid pouring into glass, the satisfied exhale at the end. No music underneath. No voiceover. The audience hears what the woman hears.",
      "The blender is the moment of energy. The machine working, mechanical but not intrusive. Once it stops, silence holds. The pour is quiet. The sip is quiet. The smile is silent. Sound design is what you don't hear — restraint that makes the moment real.",
      "One soft ambient tone sits underneath the whole piece. Not music, not a bed. Just enough texture to keep the cut from feeling completely bare. It's the emotional anchor without being obvious.",
    ],
  },

  tools: [
    { name: "ComfyUI", role: "Video generation, motion control, scene composition" },
    { name: "DaVinci Resolve", role: "Edit, colour grade, sound design" },
  ],

  disclaimer:
    "This is a speculative concept ad created for portfolio purposes only. Not affiliated with, sponsored by, or endorsed by Nuzest. All product names, logos, and brands are property of their respective owners. Nuzest® and Clean Lean Protein® are registered trademarks of their respective owner.",
}
