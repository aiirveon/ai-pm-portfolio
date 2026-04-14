import { Film, TrendingUp, Users, Zap, Lightbulb, Code, Shield, FileText, AlertTriangle, BarChart3, GitBranch, Network } from "lucide-react"
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

const projectData = {
  hero: {
    projectName: "Ojuit",
    tagline: "A two-product AI platform for indie filmmakers: AI colour intelligence with Delta E measurement, XGBoost correction, and LUT export — plus an AI story engine that guides writers from raw idea to full beat sheet. Built end-to-end with FastAPI, Next.js, Supabase, OpenCV, and Claude Opus 4.5 with extended thinking.",
    status: "In Progress",
    author: "Ogbebor Osaheni",
    date: "March 2026",
    demoUrl: "https://chromasync-app.vercel.app",
    githubUrl: "https://github.com/aiirveon",
    heroImage: undefined,
  },

  summary: {
    description: "Ojuit is a two-product AI platform for solo indie filmmakers. The Colour product uses OpenCV, XGBoost, and CIE Lab Delta E to solve colour drift across the full shoot pipeline — including scene-to-reference LUT generation for DaVinci Resolve and Premiere Pro. The Story product is a full-stack AI story engine that guides writers from a raw idea through interrogation, logline, character psychology, and a full beat board using structured prompt chains, real-time state persistence, and Claude as the AI backbone. Both products share a single deployed platform, a unified CSS design system, and one product philosophy: AI that suggests, humans that decide.",
    metrics: [
      { icon: <Film className="w-5 h-5" />, value: "2", label: "AI Products", description: "Colour intelligence + Story engine" },
      { icon: <TrendingUp className="w-5 h-5" />, value: "5", label: "Story Stages", description: "Idea → Interrogation → Logline → Character → Beats" },
      { icon: <Users className="w-5 h-5" />, value: "Full Stack", label: "Built End-to-End", description: "FastAPI · Next.js · Supabase · Render · Vercel" },
      { icon: <Zap className="w-5 h-5" />, value: "100%", label: "State Persisted", description: "Every action saved — resume from exact last step" },
    ],
  },

  problem: {
    paragraphs: [
      "Solo indie filmmakers face two distinct but related problems. The first is technical: colour drift. Shooting run-and-gun means ISO rises in low light, white balance shifts between environments, and exposure floats with changing conditions. The result is footage where scene 1 and scene 12 look like they were filmed on different days — costing 5–8 hours of manual correction per project.",
      "The second problem is creative: most filmmakers have story ideas they never develop because the path from raw idea to structured screenplay is opaque and usually requires either expensive development support or years of craft knowledge. Existing writing tools — Final Draft, Celtx, generic AI chat — either assume you already have a fully formed story or generate one wholesale, removing the writer from their own creative process.",
      "Ojuit addresses both. The Colour product eliminates the technical barrier with CIE Lab Delta E measurement, XGBoost correction predictions, and downloadable LUT files for DaVinci Resolve and Premiere Pro. The Story product eliminates the structural barrier — guiding writers through story discovery rather than doing it for them, using AI as a collaborator that asks better questions rather than one that writes the story.",
    ],
    keyInsight: "From Prediction Machines (Agrawal, Gans and Gold): AI reduces the cost of prediction. Ojuit applies this across two domains — colour correction prediction for filmmakers who can't afford a colorist, and story structure prediction for writers who don't yet know the craft. When prediction is cheap, solo creators can achieve professional outcomes without professional support.",
  },

  personasIntroduction: "Ojuit serves three distinct solo filmmaking profiles: a documentary filmmaker who needs colour consistency without crew, a content creator making the leap to narrative film without technical training, and a micro-budget producer who needs to catch problems on set before post begins. Each persona maps directly to a specific stage of the colour pipeline — pre-shoot reference analysis, on-shoot drift detection, and post correction.",

  personas: [
    {
      name: "Kofi",
      role: "Solo Documentary Filmmaker, Manchester",
      goals: [
        "Achieve consistent professional colour across all scenes without hiring a colorist",
        "Spend creative time on storytelling rather than technical correction",
        "Deliver a final grade that looks intentional, not repaired",
      ],
      painPoints: [
        "Spends 5–8 hours per project manually fixing colour continuity caused by camera drift between locations",
        "Cannot afford a colorist or DIT on a solo budget",
        "Has no reliable way to measure drift before it becomes a post-production problem",
      ],
      quote: "I finish a multi-location shoot, run my footage through the tool, and get a precise measurement of how far each scene has drifted from my reference. I apply corrections in an hour instead of a day.",
    },
    {
      name: "Priya",
      role: "Content Creator Transitioning to Narrative Film, London",
      goals: [
        "Achieve a cinematic, consistent look without deep technical expertise",
        "Understand which camera settings to adjust for a specific visual style",
        "Graduate from content that looks competent to content that looks intentional",
      ],
      painPoints: [
        "Footage looks inconsistent between scenes but she cannot identify the cause",
        "Colour grading tutorials assume professional knowledge she does not have",
        "No clear path from a reference look she admires to camera settings she can actually use",
      ],
      quote: "I find a reference film with the look I want. The tool tells me the colour profile of that look and the camera settings I need to replicate it. My whole film looks like it came from the same world.",
    },
    {
      name: "Marcus",
      role: "Micro-Budget Producer, Birmingham",
      goals: [
        "Reduce post-production hours without sacrificing output quality",
        "Deliver consistent colour across multi-day shoots",
        "Catch drift on set rather than discovering it in post",
      ],
      painPoints: [
        "Cannot afford a colorist for every project",
        "Colour consistency between Day 1 and Day 3 of a shoot is unreliable",
        "Current tools require manual work that consumes the post schedule",
      ],
      quote: "I check colour drift between days while we are still on location. If something is off, I fix it before we wrap. Post-production becomes grading, not rescue.",
    },
  ],

  solution: {
    description: "Ojuit is a two-product AI platform. The Colour product is a three-module pipeline covering pre-shoot, on-shoot, and post correction — with CIE Lab Delta E measurement, XGBoost correction predictions, and scene-to-reference LUT generation for DaVinci Resolve and Premiere Pro. The Story product is a five-stage AI story engine: Cold Open → Interrogation → Logline Forge → Character Forge → Beat Board. Theme development is embedded within Logline Forge. The Story Bible is a persistent panel available from Logline Forge onward — not a stage. Both products share a single Next.js frontend, a FastAPI backend on Render, a Supabase database, and a unified CSS design system built entirely on CSS custom properties.",
    features: [
      {
        icon: <Lightbulb className="w-5 h-5" />,
        title: "AI Story Engine",
        description: "A progressive story development tool guiding writers from raw idea through interrogation, logline generation, character psychology (Lie/Want/Need), Save the Cat moments, and a full beat board. Every AI suggestion is grounded in the writer's own committed inputs. The writer commits answers — the AI never locks a field.",
      },
      {
        icon: <Code className="w-5 h-5" />,
        title: "Full-Stack AI Architecture",
        description: "FastAPI backend with structured prompt chains, context-aware suggestion endpoints, and AVOID_LIST negative constraint injection to prevent AI output monoculture. Next.js frontend with real-time Supabase persistence — every action saved, every session resumable from the exact last step.",
      },
      {
        icon: <Shield className="w-5 h-5" />,
        title: "Colour Intelligence Pipeline",
        description: "OpenCV per-frame colour extraction, XGBoost correction prediction, CIE Lab Delta E measurement, and scene-to-reference LUT generation. Upload two frames and get a downloadable .cube LUT file for DaVinci Resolve or Premiere Pro. Delta E below 5 is the professional continuity threshold. AI suggests — filmmaker decides.",
      },
    ],
  },

  phases: [
    {
      title: "Phase 1: Platform Foundation",
      description: "Two-repo architecture, unified design system, colour pipeline MVP, story engine skeleton.",
      deliverables: [
        "Two-repo architecture: chromasync-api (FastAPI/Render) + chromasync-app (Next.js/Vercel)",
        "Unified CSS design system: all colours, spacing, layout via CSS custom properties in :root — zero hardcoded values across the entire app",
        "Colour pipeline: OpenCV per-frame extraction, XGBoost correction model, synthetic drift data generation",
        "Story Cold Open: raw idea input, format/framework picker, Supabase save with magic link auth",
        "Mobile-first responsive layout with safe area support, bottom nav, fixed header handling",
      ],
      techStack: ["FastAPI", "Next.js", "Supabase", "OpenCV", "XGBoost", "Python", "TypeScript"],
    },
    {
      title: "Phase 2: Story Engine — Interrogation to Beats",
      description: "Full story pipeline with context-aware AI suggestions and real-time state persistence.",
      deliverables: [
        "Interrogation stage: 3 progressive questions — each suggestion endpoint receives all previously committed answers as context",
        "Logline Forge: 3 AI-generated loglines (edit/refresh/lock), editable Theme field with suggestion chips",
        "Character Forge: wound input → Lie/Want/Need generation → Save the Cat scenes — all state lifted to dashboard to persist across navigation",
        "Beat Board: Save the Cat (15) / Truby (18) / Story Circle (8) / Short Story (5) — AI question per beat, suggestion cards, incremental Supabase save after every beat",
        "Story saved to Supabase at Cold Open on Save and Begin confirmation — before interrogation starts. Resume from exact last action: interrogation answers, wound, character fields, completed beats all restored atomically from Supabase on resume",
      ],
      techStack: ["Claude API", "FastAPI", "Supabase", "Next.js", "TypeScript"],
      metrics: [
        { name: "State persistence", baseline: "Lost on page refresh", optimized: "Every action saved to Supabase immediately", improvement: "100% resumable" },
        { name: "Suggestion context", baseline: "Raw idea only", optimized: "Full state: idea + interrogation + theme + logline + character", improvement: "Fully grounded" },
        { name: "Framework support", baseline: "Save the Cat only", optimized: "Save the Cat, Truby, Story Circle (frameworks) + Short Story (format)", improvement: "3 frameworks + 1 format" },
      ],
    },
    {
      title: "Phase 3: Prompt Engineering and Ethics",
      description: "Context-aware prompts, negative constraint injection, Story Bible, creative autonomy design.",
      deliverables: [
        "AVOID_LIST: negative constraints injected into every prompt via central call_claude() function — explicitly blocks overused AI defaults (absent parent wounds, chosen one structures, speech-at-the-end resolutions). Known deviation: /theme-suggestions endpoint calls the Anthropic API directly and includes AVOID_LIST manually but prompt caching is not applied — refactor target for V1.1.",
        "Title-awareness: prompts treat sparse input as a seed, not a literal brief — generates divergent suggestions from minimal input",
        "Story Bible: persistent panel showing logline, theme (primal question), character profile (name, wound, lie, want, need), all completed beats",
        "Theme as editable field: AI-generated primal question surfaced, editable, and affects all downstream character and beat suggestions",
        "Cold start latency management: silent /health ping on component mount wakes Render before first user action",
      ],
      techStack: ["Claude API", "Prompt Engineering", "FastAPI", "Next.js"],
    },
    {
      title: "Phase 4: Production and Launch",
      description: "Story Library, mobile UX polish, full Supabase schema, portfolio publication.",
      deliverables: [
        "Story Library: all saved stories with resume/delete, stage labels, logline preview — resumes to exact last stage with full state restored atomically",
        "Complete Supabase schema: 20+ columns covering every story stage, interrogation answers, wound, character fields, theme, beats as JSONB",
        "Component state management: character forge state lifted to dashboard to prevent loss on back-navigation",
        "Portfolio case study published with full PM artefact documentation",
      ],
      techStack: ["Render", "Vercel", "Supabase", "GitHub"],
    },
  ],

  data: {
    dataDict: [
      { feature: "raw_idea", type: "text", description: "Writer's original idea or title — seed for all downstream AI calls", source: "User input" },
      { feature: "interrogation_location / broken_relationship / private_behaviour", type: "text", description: "Three specificity answers that ground all AI suggestions in the writer's world — saved to Supabase on interrogation continue", source: "User input" },
      { feature: "theme", type: "text", description: "Primal question beneath the story — AI-generated, user-editable, affects character and beat suggestions", source: "Claude API → user edit" },
      { feature: "logline / logline_label", type: "text", description: "Locked logline and its angle label (External Stakes / Internal Stakes / Tonal Shift / Custom)", source: "User selection" },
      { feature: "wound_answer / character_name", type: "text", description: "Protagonist wound and name — saved immediately on submission, restored on resume", source: "User input" },
      { feature: "character_lie / want / need / save_the_cat_scene", type: "text", description: "Full character psychology profile — generated from wound + logline, user-editable per field", source: "Claude API → user edit" },
      { feature: "beats", type: "jsonb", description: "Array of completed beats each with number, name, answer — incremental save after every beat submission", source: "User input per beat" },
      { feature: "stage", type: "integer", description: "Current story stage (0–6) — used to route resume to correct component with full state", source: "Derived" },
      { feature: "mean_r/g/b, colour_temperature_k, drift_magnitude", type: "float", description: "Per-frame colour statistics for XGBoost correction model (Colour product)", source: "OpenCV extraction" },
    ],
    methodology: "Two distinct data strategies for two products. The Colour product uses synthetic training data — 8,000 scenes across four drift types (standard, mixed lighting, LOG profile, harsh clipping) with programmatically applied drift, so ground truth corrections are always known exactly. All colour difference calculations use CIE Lab space, not RGB Euclidean distance. Scene-to-reference LUT generation fits a degree-2 polynomial mapping from scene Lab values to reference Lab values per channel, producing a 33x33x33 .cube file. The Story product uses a progressive schema: the story record is created in Supabase at Cold Open when the user confirms Save and Begin — before interrogation starts. Every subsequent committed answer is saved immediately on commit. Synthetic data is a deliberate professional choice, not a shortcut. The XGBoost model was trained with a 3% noise factor, confirmed in model_metadata.json, to simulate real camera sensor variation.",
    validationMethods: [
      "Story: resume fidelity — every field restored from Supabase matches exact state when user left",
      "Story: suggestion grounding — all AI suggestions verified to use full committed story context, not just raw idea",
      "Colour: Delta E measurement — industry standard metric, target below 5 between corrected scenes",
      "Colour: override rate tracking — proxy for model alignment with creative intent (target below 25%)",
    ],
  },

  results: {
    heroMetric: { value: "5", label: "Story stages from raw idea to full beat sheet, every action saved in real time" },
    comparisons: [
      { metric: "Story state on page close", before: "Lost entirely", after: "Every field saved to Supabase on commit", change: "100% persistent" },
      { metric: "Suggestion context at interrogation", before: "Raw idea only", after: "Full story state passed to every endpoint", change: "Grounded suggestions" },
      { metric: "Story frameworks supported", before: "None", after: "Save the Cat, Truby, Story Circle (frameworks) + Short Story (format)", change: "3 frameworks + 1 format" },
      { metric: "AI output monoculture risk", before: "No mitigation", after: "AVOID_LIST injected into every prompt", change: "Actively blocked" },
      { metric: "Cold start silent failures", before: "Common on first action", after: "Silent health ping on mount", change: "Prevented" },
      { metric: "Colour correction time per project", before: "5 to 8 hours manual", after: "Target under 1 hour with ChromaSync", change: "85% reduction target" },
    ],
    keyInsights: [
      "The two-product architecture is the core strategic decision. Colour and Story serve the same solo filmmaker at different points in their workflow. Building both on a single platform with a shared design system means the value compounds rather than splits.",
      "State persistence is a product feature, not an implementation detail. Designing the Supabase schema to capture every user action before building the UI forced better product decisions throughout. A writer who closes the app and returns to find their story exactly where they left it trusts the product in a way that no feature list can replicate.",
      "The AVOID_LIST negative constraint injection is the most consequential prompt engineering decision in the codebase. Blocking overused story defaults forces the model to find something specific in each writer's idea rather than converging on familiar patterns. This is a direct application of the alignment problem: the model must serve the writer's creative intent, not its own statistical preferences.",
      "Synthetic data is a deliberate professional choice for the Colour product. Production ML teams consistently validate with synthetic data before acquiring expensive labelled real-world datasets. Framing this confidently in interviews demonstrates ML pipeline maturity rather than a workaround.",
    ],
  },

  ethics: {
    principles: [
      { title: "Creative Autonomy", description: "The writer commits every answer — the AI never locks a field. Every suggestion is optional. This is enforced at UX level: no AI output is applied without explicit user action. The story belongs to the writer, not the model." },
      { title: "Avoiding AI Monoculture", description: "Every prompt injects an AVOID_LIST — negative constraints explicitly blocking overused AI defaults: absent parent wounds, chosen one structures, speech-at-the-end resolutions. Forces the model to find the specific human truth in each writer's idea rather than pattern-matching to familiar tropes." },
      { title: "Transparency in AI Assistance", description: "The Story Bible is a persistent panel available from Logline Forge onward — it populates progressively as the writer commits answers and is always accessible via a side tab on desktop or a FAB on mobile. The Theme field surfaces the AI's primal question so the writer can interrogate, edit, or reject it. Nothing is hidden." },
      { title: "Honest Scope", description: "ChromaSync Story guides — it does not write. ChromaSync Colour corrects continuity drift — it does not replace creative grading. UI language consistently says 'suggest' not 'fix'. Scope is clearly communicated to prevent over-reliance." },
    ],
    guardrails: [
      { rule: "AVOID_LIST injection", threshold: "Applied to every AI prompt in the story pipeline", rationale: "Prevents the model defaulting to overused patterns regardless of how sparse the input is" },
      { rule: "Suggestions always optional", threshold: "No AI output applied without explicit user click", rationale: "Writer creative autonomy is non-negotiable — the AI cannot write the story for them" },
      { rule: "Large Colour Correction Flag", threshold: "Delta E above 10 (Critical) triggers manual review warning", rationale: "Large corrections may indicate intentional creative choice, not accidental drift" },
      { rule: "Override Rate Monitor", threshold: "Alert if colour override rate exceeds 40%", rationale: "High override rate signals model misalignment with creative intent requiring retraining" },
    ],
    biasAuditDescription: "Story product: primary risk is AI output monoculture — the model converging on the same archetypes regardless of the writer's input. Mitigation: AVOID_LIST negative constraints in every prompt block overused wounds, structures, and resolutions. Secondary risk: sparse input producing generic suggestions. Mitigation: title-awareness prompts treat minimal input as a seed for divergent possibilities. Colour product: primary risk is inconsistent correction across diverse skin tones. Mitigation: synthetic training data across full 2700K–8000K spectrum. Full bias validation deferred to V2 with real diverse footage. Ethical framework: Brian Christian, The Alignment Problem — building AI that serves human creative intent, not just the training objective.",
  },

  competitive: {
    competitors: [
      { feature: "AI guided story development", ours: true, compA: false, compB: false },
      { feature: "Context-aware suggestions from writer's own inputs", ours: true, compA: false, compB: false },
      { feature: "Full state persistence across sessions", ours: true, compA: false, compB: true },
      { feature: "Negative constraints to prevent AI monoculture", ours: true, compA: false, compB: false },
      { feature: "Colour intelligence pipeline with SHAP explainability", ours: true, compA: false, compB: false },
      { feature: "Writer owns every output", ours: true, compA: false, compB: true },
    ],
    competitorAName: "Sudowrite",
    competitorBName: "Celtx",
    positioningStatement: "Unlike Sudowrite which generates content for the writer, or Celtx which assumes the story already exists and just needs formatting, Ojuit guides the writer through structured story discovery using their own committed answers as the foundation for every AI suggestion. The story that emerges belongs entirely to the writer.",
  },

  okrs: {
    objective: "Build and ship Ojuit — a two-product AI platform for solo indie filmmakers demonstrating full-stack AI product thinking, CIE Lab colour science, XGBoost ML, LUT generation, ethical AI design, and production-grade engineering",
    keyResults: [
      { kr: "Story Engine live at chromasync-app.vercel.app with all five stages functional end to end", progress: 100, target: "Live URL" },      { kr: "Full state persistence: every story action saved to Supabase and resumable from exact last step", progress: 100, target: "100% resumable" },
      { kr: "Three story frameworks supported: Save the Cat, Truby, Story Circle — Short Story is a format not a framework", progress: 100, target: "3 frameworks" },
      { kr: "AVOID_LIST negative constraints injected into every AI prompt to prevent output monoculture", progress: 100, target: "All prompts" },
      { kr: "Full PM artefact suite published: PRD, metrics, competitive analysis, ethics, risk register", progress: 100, target: "5 artefacts" },
      { kr: "Colour pipeline: Delta E below 5 on 10 diverse test clips", progress: 30, target: "<5 Delta E units" },
    ],
    successMetrics: [
      { metric: "Story Engine live and functional", target: "All 5 stages", achieved: "Shipped", status: "Achieved" as const },
      { metric: "State persistence", target: "Every action saved", achieved: "100% via Supabase", status: "Achieved" as const },
      { metric: "PM artefact suite", target: "5 documents", achieved: "PRD, Metrics, Competitive, Ethics, Risk Register", status: "Achieved" as const },
      { metric: "Colour pipeline Delta E", target: "<5 units", achieved: "In progress", status: "In Progress" as const },
    ],
  },

  roadmap: {
    milestones: [
      {
        phase: "Now",
        items: [
          { title: "Story Engine shipped: Cold Open through Beat Board, all stages live" },
          { title: "Full state persistence and resume from exact last action" },
          { title: "AVOID_LIST prompt engineering across all story endpoints" },
          { title: "Story Library with resume and delete" },
          { title: "PM artefact suite: PRD, metrics, competitive analysis, ethics, risk register" },
        ],
        status: "completed" as const,
      },
      {
        phase: "Next",
        items: [
          { title: "Story Health Score: five-dimension story quality gate before scenes" },
          { title: "Scene Board: first draft scene generation from completed beat sheet" },
          { title: "Supporting character profiles: antagonist and ally Lie/Want/Need" },
          { title: "Colour pipeline: pre-shoot module and Delta E validation" },
        ],
        status: "in-progress" as const,
      },
      {
        phase: "Later",
        items: [
          { title: "First draft export to PDF and Final Draft format" },
          { title: "Colour pipeline: real footage bias testing across diverse skin tones" },
          { title: "Upgrade to paid Render and Supabase tiers for production scale" },
          { title: "User interviews with real indie filmmakers to validate story flow" },
        ],
        status: "planned" as const,
      },
    ],
  },

  learnings: {
    wentWell: [
      "The two-product architecture was the right strategic call. Colour and Story serve the same user at different points in the creative workflow. They share a platform, a design system, and a philosophy — but each stands alone as a demonstrable product with distinct PM topics to discuss.",
      "Progressive disclosure in the Story engine significantly reduced perceived complexity. One question at a time, each stage unlocking only after the previous is committed — this mirrors how experienced story editors work and makes the AI feel like a collaborator rather than a form.",
      "State persistence designed as a product feature, not a technical afterthought. Designing the Supabase schema to capture every action — interrogation answers, wound, character fields, theme, beats — before building the UI forced better product decisions. Resume-from-exact-last-action is a differentiating feature.",
      "The AVOID_LIST negative constraint injection is the single most effective prompt engineering decision. Blocking overused defaults forces the model to find something specific in each writer's idea — which is exactly what a good story editor does.",
    ],
    challenges: [
      "Context propagation across a multi-stage flow was harder than expected. Each stage needs the full accumulated story state to produce grounded suggestions. Getting the frontend to pass the right context to every API endpoint required multiple refactoring passes.",
      "Cold start latency on Render's free tier created a silent failure mode — the first user action after dormancy would fail because the API wasn't awake. Solved with a silent /health ping on mount, but the root cause is a product constraint needing addressing before real user growth.",
      "Sparse input is a genuine design problem. A writer who types only a title gets suggestions built from almost nothing. The title-awareness prompt helps, but the interrogation stage itself is the real solution — which is why it exists.",
    ],
    doDifferently: [
      "Define the full Supabase schema before building any story stage. Adding columns incrementally worked but required multiple migration rounds. A full data model upfront — even with nullable columns — would have been cleaner.",
      "Build the Story Library earlier. It's the feature that makes the product feel real — a writer sees saved stories, resumes them, and experiences the value of persistence firsthand. It should have been Day 1, not Phase 4.",
      "Run prompt engineering and UI design in parallel. Several UX decisions were made before AI outputs were stable, which required rework when the suggestions changed shape.",
    ],
    keyTakeaway: "As Jesse Schell writes in The Art of Game Design, every design decision should be tested against one question: does this serve the experience? For Ojuit Story, every feature was tested against: does this keep the writer in their creative process, or does it pull them out? The progressive disclosure, commit-before-continuing mechanic, and AVOID_LIST all flow from that single design principle. For Ojuit Colour, the equivalent question is: does this give the filmmaker a decision they can actually make on set, or just a number they cannot interpret? CIE Lab Delta E and plain-English verdicts exist because of that question.",
  },

  contact: {
    pitch: "I am actively seeking Junior AI PM, Technical PM, and AI BA roles at companies building AI-powered products — creative tech, media, e-commerce, fintech, or any domain where product thinking and technical depth matter equally. Ojuit demonstrates full-stack AI product development: prompt engineering, CIE Lab colour science, XGBoost ML pipelines, LUT generation, real-time persistence, mobile-first UX, and ethical AI design — built and shipped, not just planned. Let us connect.",
    email: "osaheniogbebor.c@gmail.com",
    linkedIn: "https://www.linkedin.com/in/osaheni-o-94565421a/",
    github: "https://github.com/aiirveon",
    calendlyUrl: undefined,
    authorName: "Ogbebor Osaheni",
  },
}

export default function ChromaSyncProject() {
  return (
    <div className="min-h-screen bg-white dark:bg-jungle-950">
      <ProgressBar />
      <TableOfContents />
      <main className="lg:ml-48 pt-20 md:pt-24">
        <HeroSection {...projectData.hero} />
        <ExecutiveSummary description={projectData.summary.description} metrics={projectData.summary.metrics} />
        <ProblemSection paragraphs={projectData.problem.paragraphs} keyInsight={projectData.problem.keyInsight} />
        <PersonasSection introduction={projectData.personasIntroduction} personas={projectData.personas} />
        <SolutionSection description={projectData.solution.description} features={projectData.solution.features} />
        <ImplementationSection phases={projectData.phases} />
        <DataSection dataDict={projectData.data.dataDict} methodology={projectData.data.methodology} validationMethods={projectData.data.validationMethods} />
        <ResultsSection heroMetric={projectData.results.heroMetric} comparisons={projectData.results.comparisons} keyInsights={projectData.results.keyInsights} />
        <EthicsSection principles={projectData.ethics.principles} guardrails={projectData.ethics.guardrails} biasAuditDescription={projectData.ethics.biasAuditDescription} />
        <CompetitiveSection competitors={projectData.competitive.competitors} competitorAName={projectData.competitive.competitorAName} competitorBName={projectData.competitive.competitorBName} positioningStatement={projectData.competitive.positioningStatement} />
        <OkrsSection objective={projectData.okrs.objective} keyResults={projectData.okrs.keyResults} successMetrics={projectData.okrs.successMetrics} />
        <RoadmapSection milestones={projectData.roadmap.milestones} />
        <LearningsSection wentWell={projectData.learnings.wentWell} challenges={projectData.learnings.challenges} doDifferently={projectData.learnings.doDifferently} keyTakeaway={projectData.learnings.keyTakeaway} />
        <PmArtefactsSection projectArtefacts={[
          { name: "PRD — Ojuit", artefactId: "ojuit-prd", project: "ojuit" },
          { name: "Model Decisions — Ojuit", artefactId: "ojuit-model-decisions", project: "ojuit" },
          { name: "Ethics Framework — Ojuit", artefactId: "ojuit-ethics", project: "ojuit" },
          { name: "User Personas — Ojuit", artefactId: "ojuit-personas", project: "ojuit" },
        ]} />

        <ContactSection {...projectData.contact} />
      </main>
    </div>
  )
}
