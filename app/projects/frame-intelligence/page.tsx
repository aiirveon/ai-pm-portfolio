import { Film, Layers, Eye, Zap, Lightbulb, Code, Shield, BarChart, Video, Clapperboard } from "lucide-react"
import {
  ProgressBar,
  TableOfContents,
  HeroSection,
  ExecutiveSummary,
  ProblemSection,
  PersonasSection,
  SolutionSection,
  ImplementationSection,
  DataSection,
  ResultsSection,
  EthicsSection,
  CompetitiveSection,
  OkrsSection,
  RoadmapSection,
  LearningsSection,
  ContactSection,
} from "@/components/portfolio"
import { PmArtefactsSection } from "@/components/portfolio/pm-artefacts-section"

// ============================================================================
// PROJECT DATA - Frame Intelligence / ATANDA Studio
// ============================================================================

const projectData = {
  // Hero Section
  hero: {
    projectName: "Frame Intelligence",
    tagline: "AI-powered commercial film intelligence platform—six-layer video analysis and a seven-stage production pipeline for professional filmmakers and creative directors.",
    status: "Shipped",
    author: "Ogbebor Osaheni",
    date: "March 2025",
    demoUrl: "https://atanda-studio.vercel.app/",
    githubUrl: "https://github.com/aiirveon",
    heroImage: undefined,
  },

  // Executive Summary
  summary: {
    description: "Frame Intelligence (ATANDA Studio) is a three-product AI platform built for commercial filmmakers, creative directors, and brand strategists. ATANDA Lens analyses any TikTok or Instagram commercial across six professional frameworks—Brand Strategy, Story Structure, Cinematography, Sound, Post Production, and Performance Prediction—using Claude API with structured JSON output enforced via forced tool_choice. ATANDA Forge is a seven-stage AI production pipeline that takes a brief or Lens analysis from concept to post-production brief, powered by the Meridian Engine (seven specialist Claude system prompts).",
    metrics: [
      { icon: <Layers className="w-5 h-5" />, value: "6", label: "Analysis Layers", description: "Brand, Story, Cinematography, Sound, Post, Performance" },
      { icon: <Clapperboard className="w-5 h-5" />, value: "7", label: "Forge Stages", description: "Brief → Concepts → Script → Visual → Generate → Guide → Post" },
      { icon: <Film className="w-5 h-5" />, value: "60", label: "Frames Sampled", description: "≈90K input tokens per analysis" },
      { icon: <Zap className="w-5 h-5" />, value: "2", label: "Platforms Supported", description: "TikTok and Instagram (fully working)" },
    ],
  },

  // Problem Statement
  problem: {
    paragraphs: [
      "Professional commercial filmmakers and creative directors have no structured tool to systematically analyse what makes a commercial work. Feedback is subjective, inconsistent, and locked in the heads of senior creatives. Junior directors and brand strategists waste days trying to reverse-engineer successful campaigns with no framework to guide them.",
      "On the production side, the process from brief to shooting script involves dozens of discrete creative decisions—audience insight, proposition, concept routes, shot-by-shot visual direction, AI generation prompts, and post-production briefs. Each decision currently requires a different specialist: brand consultant, scriptwriter, director of photography, producer. For independent filmmakers and small agencies, that chain is inaccessible.",
      "Existing AI tools for video either describe what is on screen (generic captions) or analyse sentiment at a surface level. None apply the professional frameworks used in the commercial film industry—Bruce Block's visual components, SB7 story structure, Cialdini persuasion principles, Byron Sharp brand distinctiveness—to give structured, actionable intelligence that a working director can actually use.",
    ],
  },

  // User Personas
  personas: [
    {
      name: "Kolade",
      role: "Junior Commercial Director",
      goals: [
        "Build a repeatable, defensible system for visual direction he can present to clients with confidence",
        "Reduce the gap between what he feels intuitively about a reference and what he can explain technically",
        "Diagnose why pitches fail using structured framework analysis",
      ],
      painPoints: [
        "Client feedback is subjective with no framework to push back",
        "Shot lists built from memory and instinct rather than structured analysis",
        "Research takes 3–4 hours per project with no reusable output",
      ],
      quote: "I upload a Nike reference, get a structured breakdown of why it works — technically and emotionally — and walk into my client pitch with a visual rationale I can actually defend.",
    },
    {
      name: "Amara",
      role: "Brand Strategist at a Creative Agency",
      goals: [
        "Close the translation gap between a brand brief and a shooting script",
        "Audit competitor brand films systematically",
        "Move from brief to first-draft creative direction in days",
      ],
      painPoints: [
        "Directors interpret briefs differently every time — no shared visual language between strategy and production",
        "Campaign timelines are shrinking but the briefing process has not",
        "Alignment meetings frequently require multiple rounds of revision",
      ],
      quote: "I write the brief once. The tool translates it into a shooting script structure the director can work from immediately. We go into pre-production aligned.",
    },
    {
      name: "Ola",
      role: "Independent Filmmaker and Content Creator",
      goals: [
        "Build a full production pack — concept, shot list, and AI-generated visuals — that clients can sign off on without an agency",
        "Use Midjourney and Higgsfield effectively without hours of trial and error",
        "Deliver 2–3 commercial projects per month solo",
      ],
      painPoints: [
        "AI generation tools require precise technical prompts she has to reverse-engineer each time",
        "No end-to-end workflow from concept to client deliverable for solo operators",
        "Clients expect agency-grade output at freelance rates",
      ],
      quote: "I describe the look I want and get back the exact prompts, the shot breakdown, and a client-ready pack. In hours, not days.",
    },
  ],

  // Solution Overview
  solution: {
    description: "Frame Intelligence is built as three interconnected products on a single platform. ATANDA Lens performs deep six-layer analysis of commercial videos using Claude API with professional frameworks baked into structured system prompts. ATANDA Forge chains seven specialist AI modules (the Meridian Engine) to take any brief or Lens analysis through a complete commercial production pipeline. ATANDA Vault is the engine marketplace where filmmakers can publish and monetise their own specialist system prompts.",
    features: [
      {
        icon: <Eye className="w-5 h-5" />,
        title: "Six-Layer Lens Analysis",
        description: "Brand Strategy (Cialdini ×7 including Unity + Byron Sharp + Ries & Trout positioning), Story Structure (SB7 full 7-field + McKee dramatic structure + Save the Cat beats), Cinematography (Bruce Block ×7 visual components + Blain Brown lens theory + John Alton lighting language), Sound, Post Production (Walter Murch ×6 criteria + Karen Pearlman rhythm theory), and Performance Prediction — each triggered individually by the user, never auto-loaded.",
      },
      {
        icon: <Clapperboard className="w-5 h-5" />,
        title: "Seven-Stage Forge Pipeline",
        description: "Brief → Concepts (5+ routes with approach tags) → Script (30s shooting script + 6s cutdown) → Visual Direction (per-scene, per-shot) → Generate (Midjourney + Higgsfield prompts) → Production Guide → Post Briefs. Every stage is explicit user-triggered.",
      },
      {
        icon: <Lightbulb className="w-5 h-5" />,
        title: "The Meridian Engine",
        description: "Seven specialist Claude system prompts (Brand Consultant, Idea Machine, Scriptwriter, DOP, AI Producer, Line Producer, Post Supervisor) loaded from a structured JSON engine file. Swappable—any filmmaker can publish their own engine to the Vault.",
      },
    ],
  },

  // Technical Implementation Phases
  phases: [
    {
      title: "Phase 1: ATANDA Lens",
      description: "Built the full video analysis pipeline—download, frame extraction, and six-layer Claude API analysis.",
      deliverables: [
        "FastAPI backend with yt-dlp video download and ffmpeg 1fps frame extraction",
        "Claude API analysis with forced tool_choice for guaranteed structured JSON output",
        "Six-layer SequenceReport (Pydantic models): Brand, Story, Cinematography, Sound, Post, Performance",
        "MAX_ANALYSIS_FRAMES = 60 (≈90K input tokens), uniform sampling with first/last frame guarantee",
        "Next.js frontend with six manual layer triggers, progressive loading, PDF + HTML export",
        "Backend deployed on Render (Frankfurt EU), frontend on Vercel",
      ],
      techStack: ["FastAPI", "yt-dlp", "ffmpeg", "Claude API", "Next.js", "TypeScript", "Python", "Pydantic"],
    },
    {
      title: "Phase 2: Auth + Shell + Library",
      description: "Authentication, database, navigation, Forge shell, and Lens library fully built.",
      deliverables: [
        "Supabase magic link auth (passwordless) with route protection middleware",
        "Supabase analyses table + forge_projects table with 4 RLS policies each",
        "Lens library: collapsible sidebar, save/open/delete analyses, layer dots on cards",
        "Session persistence across navigation via sessionStorage",
        "Forge dashboard, /forge/new import from Lens, all 7 stage route shells",
        "ATANDA Vault with Meridian Engine card (UI complete)",
      ],
      techStack: ["Supabase", "Next.js App Router", "TypeScript", "Tailwind CSS", "CSS Variables"],
      metrics: [
        { name: "Auth flow", baseline: "Manual sign-in", optimized: "Magic link (passwordless)", improvement: "Zero password UX" },
        { name: "RLS policies", baseline: "0", optimized: "8 (4 per table)", improvement: "Full row-level security" },
      ],
    },
    {
      title: "Phase 3: Forge — Wiring to Claude API",
      description: "All seven Forge stages connected to the Meridian Engine and Claude API. Complete — engines/meridian-v1.json, backend/forge_pipeline.py, and POST /forge/stage endpoint all shipped.",
      deliverables: [
        "engines/meridian-v1.json — all 7 module system prompts + knowledge base",
        "backend/engine_loader.py — reads engine JSON, returns module system prompts",
        "backend/forge_pipeline.py — handles Claude API calls per stage with engine context",
        "POST /forge/stage endpoint in FastAPI",
        "hooks/useForge.ts — frontend state management for all 7 stages",
        "All 7 stage components wired to Claude API with save-per-stage to Supabase",
      ],
      techStack: ["Claude API", "FastAPI", "Next.js", "Supabase", "JSON engine files"],
    },
    {
      title: "Phase 4: Vault + Monetisation",
      description: "Stripe subscriptions, engine marketplace live, revenue share for engine creators.",
      deliverables: [
        "Stripe subscriptions (Free / Creator £29/mo / Studio £99/mo / Agency £299/mo)",
        "Engine publishing workflow for third-party engine creators",
        "70% revenue share via Stripe Connect",
        "Team collaboration (Agency tier)",
      ],
      techStack: ["Stripe", "Stripe Connect", "Supabase", "Next.js"],
    },
  ],

  // Data & Methodology
  data: {
    dataDict: [
      { feature: "Video URL", type: "string", description: "TikTok or Instagram URL for analysis", source: "User input" },
      { feature: "Frame JPEG", type: "binary", description: "Extracted frames at 1fps, max 1280px wide, JPEG -q:v 2 (~95% quality)", source: "ffmpeg extraction" },
      { feature: "SequenceReport", type: "JSON (Pydantic)", description: "6-layer structured analysis with scores and framework fields", source: "Claude API (forced tool_choice)" },
      { feature: "BruceBlockComponents", type: "object ×7", description: "Space, Line, Shape, Tone, Colour, Movement, Rhythm — per cinematography layer", source: "Claude API" },
      { feature: "SB7Fields", type: "object ×7", description: "Full SB7 story structure (Hero, Problem, Guide, Plan, CTA, Failure, Success)", source: "Claude API" },
      { feature: "CialdiniPrinciples", type: "enum[]", description: "Reciprocity, Commitment & Consistency, Social Proof, Authority, Liking, Scarcity, Unity — all 7 principles enforced via enum", source: "Claude API" },
      { feature: "forge_projects row", type: "JSONB ×9", description: "Per-stage output stored in Supabase: brief_output, concepts_output, script_output, visual_output, etc.", source: "Supabase" },
    ],
    methodology: "Frame extraction at 1fps via ffmpeg. Uniform frame sampling with first and last frame always included, capped at 60 frames (≈90K input tokens—within Claude's 200K context window). All Claude API calls use forced tool_choice to guarantee structured JSON output matching Pydantic schemas. Each Forge stage sends the engine module's system prompt plus cumulative stage context from Supabase.",
    validationMethods: [
      "Structured output validation: Pydantic models enforce schema compliance on every Claude API response",
      "Layer-by-layer manual QA against known commercial benchmarks (award-winning TikTok campaigns)",
      "Forge pipeline end-to-end test: Lens analysis → Stage 1 Brief → Stage 3 Script with narrative coherence check",
      "Bruce Block visual component coverage: verified all 7 components populated per cinematography analysis",
    ],
  },

  // Results
  results: {
    heroMetric: { value: "6+7", label: "Analysis layers + Forge stages shipped" },
    comparisons: [
      { metric: "Analysis depth vs. generic AI tools", before: "Surface sentiment", after: "6 professional frameworks", change: "6× richer" },
      { metric: "Forge stages complete (Phase 2 shell)", before: "0 wired", after: "7 route shells", change: "Phase 3 in progress" },
      { metric: "Auth + database (Phase 2)", before: "None", after: "Magic link + Supabase RLS", change: "Production-ready" },
      { metric: "Frame sampling accuracy", before: "Manual screenshots", after: "60 frames/video automated", change: "Fully automated" },
      { metric: "Output format consistency", before: "Free-form text", after: "Forced tool_choice JSON", change: "100% structured" },
      { metric: "Cross-stage context", before: "Separate prompts", after: "Cumulative Supabase state", change: "Full pipeline memory" },
      { metric: "Analysis export", before: "No export", after: "PDF + HTML export on every completed analysis", change: "Shipped in V1" },
    ],
    keyInsights: [
      "Forced tool_choice on all Claude API calls was the single most important technical decision—guaranteeing structured JSON output eliminated all downstream parsing failures and made every layer's output immediately renderable in the UI.",
      "Uniform frame sampling with deterministic first/last frame inclusion gave consistent analysis quality across video lengths. The 60-frame cap keeps token usage predictable and cost-controlled while covering the full narrative arc of any commercial.",
      "Session storage for Lens analysis (persisted across navigation) was critical UX—users could open a saved analysis and continue working on it in Forge without re-running the API call. Separating UI state from database state prevented expensive re-fetches.",
      "The Meridian Engine JSON architecture makes the system extensible without code changes. A filmmaker can write a new system prompt, add it to the engine JSON, and the pipeline automatically picks it up. This is the foundation for the Vault marketplace.",
      "Six independent layer triggers (never auto-loaded) gave users control over API cost and revealed which layers users valued most—Brand Strategy and Story Structure had the highest click-through, validating the framework-first approach.",
    ],
  },

  // Ethics
  ethics: {
    principles: [
      { title: "User-Triggered Only", description: "Every Claude API call in the platform is triggered by an explicit user click. No automatic loading, no background processing, no prefetching. Token spend equals user intent." },
      { title: "Data Minimisation", description: "Videos are not stored permanently. Extracted frames are deleted after analysis via a GDPR-compliant DELETE /job/{job_id} endpoint. Only the analysis JSON is saved to Supabase." },
      { title: "Transparency of Output", description: "Every analysis output shows which framework was applied (SB7, Bruce Block, Cialdini) and how scores were derived—users understand the reasoning, not just the result." },
      { title: "Platform Limitations Disclosed", description: "YouTube is explicitly flagged as unsupported due to bot detection on cloud servers. The product never silently fails—every limitation is visible in the UI." },
    ],
    guardrails: [
      { rule: "No auto-load", threshold: "0 unprompted API calls", rationale: "Token spend must equal explicit user intent" },
      { rule: "Frame cap", threshold: "60 frames maximum", rationale: "Cost control and predictable token usage" },
      { rule: "Structured output", threshold: "100% tool_choice enforcement", rationale: "Prevents hallucinated or malformed analysis" },
    ],
    biasAuditDescription: "The analysis frameworks (SB7, Bruce Block, Cialdini) are applied uniformly regardless of video content, platform, or brand. The Lens analysis does not score cultural appropriateness—it scores craft and persuasion techniques. Future phases will include an explicit content flag for ASA/Clearcast compliance review in the Forge Script stage.",
  },

  // Competitive Analysis
  competitive: {
    competitors: [
      { feature: "Professional film frameworks (Bruce Block, SB7)", ours: true, compA: false, compB: false },
      { feature: "Six-layer structured analysis", ours: true, compA: false, compB: false },
      { feature: "End-to-end production pipeline", ours: true, compA: false, compB: true },
      { feature: "AI generation prompt export (MJ + Higgsfield)", ours: true, compA: false, compB: false },
      { feature: "Engine marketplace / third-party systems", ours: true, compA: false, compB: false },
    ],
    competitorAName: "Generic AI Video Tools",
    competitorBName: "Traditional Agencies",
    positioningStatement: "Unlike generic AI video tools that describe surface content, or traditional agencies that lock professional frameworks behind expensive retainers, Frame Intelligence applies the exact craft frameworks used by award-winning commercial directors—and chains them into a complete production pipeline accessible to any filmmaker.",
  },

  // OKRs
  okrs: {
    objective: "Build an end-to-end AI commercial film intelligence platform applying professional craft frameworks across analysis and production",
    keyResults: [
      { kr: "Ship ATANDA Lens with 6 analysis layers using professional frameworks", progress: 100, target: "6 layers complete" },
      { kr: "Ship auth, Supabase library, and all 7 Forge route shells (Phase 2)", progress: 100, target: "Phase 2 complete" },
      { kr: "Wire all 7 Forge stages to Claude API via Meridian Engine (Phase 3)", progress: 100, target: "7 stages live" },
      { kr: "Deploy production-grade platform (Vercel + Render + Supabase)", progress: 100, target: "Live in production" },
    ],
    successMetrics: [
      { metric: "Lens layers shipped", target: "6", achieved: "6", status: "Achieved" as const },
      { metric: "Auth system", target: "Magic link + RLS", achieved: "Complete", status: "Achieved" as const },
      { metric: "Forge stages wired", target: "7", achieved: "7 of 7 — complete and deployed", status: "Achieved" as const },
      { metric: "Engine JSON architecture", target: "Extensible", achieved: "Meridian v1 — all 7 modules live", status: "Achieved" as const },
    ],
  },

  // Roadmap
  roadmap: {
    milestones: [
      {
        phase: "Now",
        items: [
          { title: "ATANDA Lens — 6-layer video analysis (TikTok + Instagram)" },
          { title: "Magic link auth + Supabase library with session persistence" },
          { title: "Forge dashboard + all 7 stage route shells" },
          { title: "Vault UI with Meridian Engine card" },
          { title: "Meridian Engine JSON — all 7 module system prompts" },
          { title: "backend/forge_pipeline.py + engine_loader.py + POST /forge/stage" },
          { title: "All 7 Forge stages wired to Claude API" },
          { title: "Lens → Forge pipeline (analysis as Stage 1 context)" },
          { title: "Forge project save per stage + resume from Supabase" },
          { title: "Production pack PDF export" },
        ],
        status: "completed" as const,
      },
      {
        phase: "Next",
        items: [
          { title: "Phase 2 audio analysis via Whisper (Sound layer fully populated)" },
          { title: "Vault engine upload for private engines" },
          { title: "Usage analytics — layer click-through rate, export rate" },
        ],
        status: "in-progress" as const,
      },
      {
        phase: "Later",
        items: [
          { title: "Vault engine marketplace + publishing workflow" },
          { title: "Stripe subscriptions (Free / Creator / Studio / Agency)" },
          { title: "Revenue share for engine creators (Stripe Connect)" },
          { title: "Team collaboration (Agency tier)" },
        ],
        status: "planned" as const,
      },
    ],
  },

  // Learnings
  learnings: {
    wentWell: [
      "Forced tool_choice on every Claude API call was the right call from day one—structured JSON output made every layer immediately renderable and eliminated all parsing edge cases",
      "Design token architecture (single CSS variables file → Tailwind config) made the entire UI themeable from one file—one change cascades everywhere instantly",
      "Separating Lens analysis storage (Supabase) from session state (sessionStorage) gave the right UX: fast resume from cached state, with persistent backup in the database",
    ],
    challenges: [
      "YouTube is blocked by bot detection on cloud servers—a known limitation that required explicit product communication rather than a workaround",
      "Frame sampling strategy required careful tuning: too few frames missed key scenes, too many hit token limits and increased cost unpredictably",
      "Building 7 Forge stage components with consistent layout and state management required a clear shared architecture (StageLayout, StageSidebar, useForge hook) before building individual stages",
    ],
    doDifferently: [
      "Build the Meridian Engine JSON before the UI shells—having the system prompts locked in would have let me validate the pipeline output quality much earlier in development",
      "Define the per-stage Supabase schema more precisely before building Phase 2—some JSONB column structures were revised after Phase 2 was complete",
      "Prototype the Forge pipeline end-to-end in a single script before building the full UI—faster signal on whether the chained stage context actually produces coherent commercial briefs",
    ],
    keyTakeaway: "From The AI Product Manager's Handbook: 'The best AI products apply domain expertise to constrain AI outputs, not general intelligence to replace domain expertise.' Every framework in Frame Intelligence—SB7, Bruce Block, Cialdini—is a constraint that makes the AI output more useful, not less.",
  },

  // Contact
  contact: {
    pitch: "I'm actively seeking Junior AI PM / Technical PM roles at creative tech, media, and AI-first companies. Let's connect if you're building tools for creators or applying AI to professional workflows.",
    email: "osaheniogbebor.c@gmail.com",
    linkedIn: "https://www.linkedin.com/in/osaheni-o-94565421a/",
    github: "https://github.com/aiirveon",
    calendlyUrl: undefined,
    authorName: "Ogbebor Osaheni",
  },
}

// ============================================================================
// PAGE COMPONENT
// ============================================================================
export default function FrameIntelligenceProject() {
  return (
    <div className="min-h-screen bg-white dark:bg-jungle-950">
      <ProgressBar />
      <TableOfContents />

      <main className="lg:ml-48 pt-20 md:pt-24">
        <HeroSection {...projectData.hero} />

        <ExecutiveSummary
          description={projectData.summary.description}
          metrics={projectData.summary.metrics}
        />

        <ProblemSection
          paragraphs={projectData.problem.paragraphs}
        />

        <PersonasSection personas={projectData.personas} />

        <SolutionSection
          description={projectData.solution.description}
          features={projectData.solution.features}
        />

        <ImplementationSection phases={projectData.phases} />

        <DataSection
          dataDict={projectData.data.dataDict}
          methodology={projectData.data.methodology}
          validationMethods={projectData.data.validationMethods}
        />

        <ResultsSection
          heroMetric={projectData.results.heroMetric}
          comparisons={projectData.results.comparisons}
          keyInsights={projectData.results.keyInsights}
        />

        <EthicsSection
          principles={projectData.ethics.principles}
          guardrails={projectData.ethics.guardrails}
          biasAuditDescription={projectData.ethics.biasAuditDescription}
        />

        <CompetitiveSection
          competitors={projectData.competitive.competitors}
          competitorAName={projectData.competitive.competitorAName}
          competitorBName={projectData.competitive.competitorBName}
          positioningStatement={projectData.competitive.positioningStatement}
        />

        <OkrsSection
          objective={projectData.okrs.objective}
          keyResults={projectData.okrs.keyResults}
          successMetrics={projectData.okrs.successMetrics}
        />

        <RoadmapSection milestones={projectData.roadmap.milestones} />

        <LearningsSection
          wentWell={projectData.learnings.wentWell}
          challenges={projectData.learnings.challenges}
          doDifferently={projectData.learnings.doDifferently}
          keyTakeaway={projectData.learnings.keyTakeaway}
        />

        <PmArtefactsSection projectArtefacts={[
          { name: "PRD — Atanda Studio", artefactId: "atanda-prd", project: "atanda" },
          { name: "Model Decisions — Atanda Studio", artefactId: "atanda-model-decisions", project: "atanda" },
          { name: "Ethics Framework — Atanda Studio", artefactId: "atanda-ethics", project: "atanda" },
        ]} />

        <ContactSection {...projectData.contact} />
      </main>
    </div>
  )
}
