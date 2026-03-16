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
  ProductArtifactsSection,
} from "@/components/portfolio"

const projectData = {
  hero: {
    projectName: "ChromaSync",
    tagline: "A two-product AI platform for indie filmmakers: AI colour intelligence for colour continuity, and an AI story engine that guides writers from raw idea to full beat sheet — built end-to-end with FastAPI, Next.js, Supabase, and Claude.",
    status: "In Progress",
    author: "Ogbebor Osaheni",
    date: "March 2026",
    demoUrl: "https://chromasync-app.vercel.app",
    githubUrl: "https://github.com/aiirveon",
    heroImage: undefined,
  },

  summary: {
    description: "ChromaSync is a two-product AI platform for solo indie filmmakers. The Colour product uses OpenCV, XGBoost, and SHAP to solve colour drift across the full shoot pipeline. The Story product is a full-stack AI story engine — built with FastAPI, Next.js, and Supabase — that guides writers from a raw idea through interrogation, logline, character psychology, and a full beat board using structured prompt chains, real-time state persistence, and Claude as the AI backbone. Both products share a single deployed platform, a unified CSS design system, and one product philosophy: AI that suggests, humans that decide.",
    metrics: [
      { icon: <Film className="w-5 h-5" />, value: "2", label: "AI Products", description: "Colour intelligence + Story engine" },
      { icon: <TrendingUp className="w-5 h-5" />, value: "6", label: "Story Stages", description: "Idea → Interrogation → Logline → Character → Beats → Bible" },
      { icon: <Users className="w-5 h-5" />, value: "Full Stack", label: "Built End-to-End", description: "FastAPI · Next.js · Supabase · Render · Vercel" },
      { icon: <Zap className="w-5 h-5" />, value: "100%", label: "State Persisted", description: "Every action saved — resume from exact last step" },
    ],
  },

  problem: {
    paragraphs: [
      "Solo indie filmmakers face two distinct but related problems. The first is technical: colour drift. Shooting run-and-gun means ISO rises in low light, white balance shifts between environments, and exposure floats with changing conditions. The result is footage where scene 1 and scene 12 look like they were filmed on different days — costing 5–8 hours of manual correction per project.",
      "The second problem is creative: most filmmakers have story ideas they never develop because the path from raw idea to structured screenplay is opaque and usually requires either expensive development support or years of craft knowledge. Existing writing tools — Final Draft, Celtx, generic AI chat — either assume you already have a fully formed story or generate one wholesale, removing the writer from their own creative process.",
      "ChromaSync addresses both. The Colour product eliminates the technical barrier. The Story product eliminates the structural barrier — guiding writers through story discovery rather than doing it for them, using AI as a collaborator that asks better questions rather than one that writes the story.",
    ],
    keyInsight: "From Prediction Machines (Agrawal, Gans and Gold): AI reduces the cost of prediction. ChromaSync applies this across two domains — colour correction prediction for filmmakers who can't afford a colorist, and story structure prediction for writers who don't yet know the craft. When prediction is cheap, solo creators can achieve professional outcomes without professional support.",
  },

  personas: [
    {
      name: "Kofi",
      role: "Solo Documentary Filmmaker, Manchester",
      goals: [
        "Shoot and grade entire films alone without hiring crew",
        "Achieve consistent professional colour across all scenes",
        "Spend creative time storytelling, not fixing technical problems",
      ],
      painPoints: [
        "Spends 5-8 hours per project manually fixing colour continuity in DaVinci",
        "Cannot afford a colorist or DIT on a solo budget",
        "Camera parameters drift constantly during run-and-gun shoots",
      ],
      quote: "I know exactly the look I want. I just need my footage to actually look like it all belongs to the same film when I get home.",
    },
    {
      name: "Priya",
      role: "Content Creator Transitioning to Narrative Film, London",
      goals: [
        "Graduate from YouTube content to short narrative films",
        "Achieve a cinematic consistent look without deep technical expertise",
        "Understand what camera settings to use for a specific visual style",
      ],
      painPoints: [
        "Footage looks inconsistent between scenes but does not know why",
        "Does not know which camera settings to adjust for a target look",
        "Colour grading tutorials assume professional knowledge she does not have",
      ],
      quote: "I saw this beautiful warm tone in a reference film. I have no idea how to make my footage look like that or how to keep it consistent across my whole shoot.",
    },
    {
      name: "Marcus",
      role: "Micro-Budget Producer, Birmingham",
      goals: [
        "Produce 2-3 short films per year with a 2-person crew",
        "Reduce post production hours without sacrificing quality",
        "Deliver consistent colour across multi-day shoots",
      ],
      painPoints: [
        "Cannot afford a colorist for every project",
        "Colour consistency across Day 1 and Day 3 of a shoot is a constant problem",
        "Current tools require manual work that slows down delivery",
      ],
      quote: "On a two-day shoot we can easily end up with footage that looks like it came from two different films. Fixing that eats our entire post schedule.",
    },
  ],

  solution: {
    description: "ChromaSync is a two-product AI platform. The Colour product is a three-module pipeline covering pre-shoot, on-shoot, and post correction. The Story product is a six-stage AI story engine: Cold Open → Interrogation → Logline Forge → Character Forge → Beat Board → Story Bible. Both products share a single Next.js frontend, a FastAPI backend on Render, a Supabase database, and a unified CSS design system built entirely on CSS custom properties.",
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
        description: "OpenCV per-frame colour extraction, XGBoost correction prediction, SHAP explainability on every correction. Pre-shoot camera settings, on-shoot dynamic guidance, post-correction with manual override. AI suggests — filmmaker decides.",
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
        "Resume from exact last action — interrogation answers, wound, character fields, completed beats all restored from Supabase on resume",
      ],
      techStack: ["Claude API", "FastAPI", "Supabase", "Next.js", "TypeScript"],
      metrics: [
        { name: "State persistence", baseline: "Lost on page refresh", optimized: "Every action saved to Supabase immediately", improvement: "100% resumable" },
        { name: "Suggestion context", baseline: "Raw idea only", optimized: "Full state: idea + interrogation + theme + logline + character", improvement: "Fully grounded" },
        { name: "Framework support", baseline: "Save the Cat only", optimized: "Save the Cat, Truby, Story Circle, Short Story", improvement: "4 frameworks" },
      ],
    },
    {
      title: "Phase 3: Prompt Engineering and Ethics",
      description: "Context-aware prompts, negative constraint injection, Story Bible, creative autonomy design.",
      deliverables: [
        "AVOID_LIST: negative constraints injected into every prompt — explicitly blocks overused AI defaults (absent parent wounds, chosen one structures, speech-at-the-end resolutions)",
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
    methodology: "Two distinct data strategies for two products. The Colour product uses synthetic training data — reference colour profiles with programmatically applied drift, so ground truth corrections are always known exactly. This mirrors production ML practice of synthetic validation before expensive real-world labelling. The Story product uses a progressive schema: every user input is persisted to Supabase immediately. The schema was designed incrementally — each new story stage added columns, all nullable for backward compatibility with existing rows. Synthetic data is a deliberate professional choice, not a shortcut.",
    validationMethods: [
      "Story: resume fidelity — every field restored from Supabase matches exact state when user left",
      "Story: suggestion grounding — all AI suggestions verified to use full committed story context, not just raw idea",
      "Colour: Delta E measurement — industry standard metric, target below 5 between corrected scenes",
      "Colour: override rate tracking — proxy for model alignment with creative intent (target below 25%)",
    ],
  },

  results: {
    heroMetric: { value: "6", label: "Story stages from raw idea to full beat sheet, every action saved in real time" },
    comparisons: [
      { metric: "Story state on page close", before: "Lost entirely", after: "Every field saved to Supabase on commit", change: "100% persistent" },
      { metric: "Suggestion context at interrogation", before: "Raw idea only", after: "Full story state passed to every endpoint", change: "Grounded suggestions" },
      { metric: "Story frameworks supported", before: "None", after: "Save the Cat, Truby, Story Circle, Short Story", change: "4 frameworks" },
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
      { title: "Transparency in AI Assistance", description: "The Story Bible shows exactly what the AI has built with the writer at every stage. The Theme field surfaces the AI's primal question so the writer can interrogate, edit, or reject it. Nothing is hidden. The Colour product shows SHAP values on every correction — no black-box outputs." },
      { title: "Honest Scope", description: "ChromaSync Story guides — it does not write. ChromaSync Colour corrects continuity drift — it does not replace creative grading. UI language consistently says 'suggest' not 'fix'. Scope is clearly communicated to prevent over-reliance." },
    ],
    guardrails: [
      { rule: "AVOID_LIST injection", threshold: "Applied to every AI prompt in the story pipeline", rationale: "Prevents the model defaulting to overused patterns regardless of how sparse the input is" },
      { rule: "Suggestions always optional", threshold: "No AI output applied without explicit user click", rationale: "Writer creative autonomy is non-negotiable — the AI cannot write the story for them" },
      { rule: "Large Colour Correction Flag", threshold: "Delta E above 15 triggers manual review", rationale: "Large corrections may indicate intentional creative choice, not accidental drift" },
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
    positioningStatement: "Unlike Sudowrite which generates content for the writer, or Celtx which assumes the story already exists and just needs formatting, ChromaSync guides the writer through structured story discovery using their own committed answers as the foundation for every AI suggestion. The story that emerges belongs entirely to the writer.",
  },

  okrs: {
    objective: "Build and ship a two-product AI platform for solo indie filmmakers that demonstrates full-stack AI product thinking, ethical AI design, and production-grade engineering",
    keyResults: [
      { kr: "Story Engine live at chromasync-app.vercel.app with all six stages functional end to end", progress: 100, target: "Live URL" },
      { kr: "Full state persistence: every story action saved to Supabase and resumable from exact last step", progress: 100, target: "100% resumable" },
      { kr: "Four story frameworks supported: Save the Cat, Truby, Story Circle, Short Story", progress: 100, target: "4 frameworks" },
      { kr: "AVOID_LIST negative constraints injected into every AI prompt to prevent output monoculture", progress: 100, target: "All prompts" },
      { kr: "Full PM artefact suite published: PRD, metrics, competitive analysis, ethics, risk register", progress: 100, target: "5 artefacts" },
      { kr: "Colour pipeline: Delta E below 5 on 10 diverse test clips", progress: 30, target: "<5 Delta E units" },
    ],
    successMetrics: [
      { metric: "Story Engine live and functional", target: "All 6 stages", achieved: "Shipped", status: "Achieved" as const },
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
    keyTakeaway: "As Jesse Schell writes in The Art of Game Design, every design decision should be tested against one question: does this serve the experience? For ChromaSync Story, every feature was tested against: does this keep the writer in their creative process, or does it pull them out? The progressive disclosure, commit-before-continuing mechanic, and AVOID_LIST all flow from that single design principle.",
  },

  productArtifacts: {
    introduction: "Beyond the shipped product, I produced a full PM artefact suite covering every dimension of the build: what the product is, who it is for, how success is measured, what the risks are, and how the ethical questions were handled. These documents demonstrate that I think about the full product lifecycle, not just the code.",
    artifacts: [
      {
        icon: <FileText className="w-5 h-5" />,
        title: "Product Requirements Document",
        description: "Problem statement, user stories, functional and non-functional requirements, and success metrics. Covers both the Story Engine and the Colour product with clear separation of scope.",
        githubUrl: "https://github.com/aiirveon/chromasync-app/blob/main/docs/PRD.md",
        highlights: [
          "8 functional requirements covering the full six-stage story flow",
          "Cold start handling and mobile-first as explicit non-functional requirements",
          "Resume fidelity and suggestion grounding as primary success metrics",
        ],
      },
      {
        icon: <BarChart3 className="w-5 h-5" />,
        title: "Metrics Framework",
        description: "North star metric, primary metrics, secondary metrics, and counter-metrics. Includes measurement approach for V1 given the absence of frontend event tracking.",
        githubUrl: "https://github.com/aiirveon/chromasync-app/blob/main/docs/METRICS.md",
        highlights: [
          "North star: stories that reach the beat board",
          "Counter-metrics: immediate field edit rate and stage drop-off rate",
          "Honest about what cannot be measured in V1 without event tracking",
        ],
      },
      {
        icon: <TrendingUp className="w-5 h-5" />,
        title: "Competitive Analysis",
        description: "Analysis of Final Draft, Celtx, ChatGPT, Sudowrite, and StudioBinder. Covers what each competitor does well, where they fall short, and why ChromaSync wins in each case.",
        githubUrl: "https://github.com/aiirveon/chromasync-app/blob/main/docs/COMPETITIVE_ANALYSIS.md",
        highlights: [
          "Clear positioning: guided discovery versus generation versus formatting",
          "Honest about current weaknesses: no export, no community, no Colour and Story integration",
          "ChatGPT included as a competitor because that is the real alternative most writers use",
        ],
      },
      {
        icon: <Shield className="w-5 h-5" />,
        title: "Ethics Framework",
        description: "Four ethics risks with mitigations: AI output monoculture, writer over-reliance, sparse input misleading suggestions, and colour product skin tone bias. Written as a design document, not a checkbox exercise.",
        githubUrl: "https://github.com/aiirveon/chromasync-app/blob/main/docs/ETHICS.md",
        highlights: [
          "AVOID_LIST as the primary mitigation for AI monoculture at scale",
          "Suggest buttons over auto-populate as a deliberate creative autonomy decision",
          "Honest about what the framework does not cover and when it will be revisited",
        ],
      },
      {
        icon: <AlertTriangle className="w-5 h-5" />,
        title: "Risk Register",
        description: "Six risks with likelihood, impact, score, current mitigations, residual risk, and V2 plans. Covers technical, product quality, and infrastructure risks.",
        githubUrl: "https://github.com/aiirveon/chromasync-app/blob/main/docs/RISK_REGISTER.md",
        highlights: [
          "Cold start silent failure: the most operationally damaging risk in V1",
          "AI output monoculture: the most strategically damaging risk at scale",
          "Character forge drop-off: the highest-friction stage in the user journey",
        ],
      },
      {
        icon: <Network className="w-5 h-5" />,
        title: "System Architecture",
        description: "Mermaid system diagram showing two-repo architecture, three cloud services, and data flow through the story pipeline. Includes key architectural decisions and environment variable documentation.",
        githubUrl: "https://github.com/aiirveon/chromasync-app/blob/main/docs/ARCHITECTURE.md",
        highlights: [
          "Two-repo separation: frontend and backend deployed independently",
          "Full data flow sequence diagram from Cold Open to beat board completion",
          "State lifted to dashboard as an architectural decision, not an accident",
        ],
      },
      {
        icon: <GitBranch className="w-5 h-5" />,
        title: "User Flow Diagram",
        description: "Mermaid flowchart covering every path through the Story Engine including first-time users, returning users, library resume logic, and all optional branching within each stage.",
        githubUrl: "https://github.com/aiirveon/chromasync-app/blob/main/docs/USER_FLOW.md",
        highlights: [
          "Resume routing logic: how the app decides which stage to land on",
          "All optional suggest interactions shown as explicit branch points",
          "Stage summary table mapping what the user does vs what the AI does",
        ],
      },
      {
        icon: <Users className="w-5 h-5" />,
        title: "As-Is Process",
        description: "Documents how solo indie filmmakers develop stories today without ChromaSync. Includes process flow diagram, swimlane diagram, step by step breakdown, and current state summary with time costs.",
        githubUrl: "https://github.com/aiirveon/chromasync-app/blob/main/docs/AS_IS_PROCESS.md",
        highlights: [
          "20 to 40 hours per story development cycle before a single scene is written",
          "Abandonment rate above 60% at the beat sheet stage",
          "Swimlane diagram showing which tools are used at each step",
        ],
      },
      {
        icon: <Zap className="w-5 h-5" />,
        title: "To-Be Process",
        description: "Documents the future state workflow with ChromaSync integrated. Includes process flow diagram, swimlane diagram showing system interactions, and step by step breakdown with time comparisons.",
        githubUrl: "https://github.com/aiirveon/chromasync-app/blob/main/docs/TO_BE_PROCESS.md",
        highlights: [
          "90 to 120 minutes from idea to completed beat sheet vs 20 to 40 hours",
          "Swimlane showing Filmmaker, Frontend, Backend, and Claude API lanes",
          "Side by side comparison table for every dimension of the process",
        ],
      },
      {
        icon: <TrendingUp className="w-5 h-5" />,
        title: "Gap Analysis",
        description: "Identifies the seven gaps between current and future state, sizes each gap, and maps it to the specific ChromaSync feature that closes it. Includes residual gaps not closed by V1.",
        githubUrl: "https://github.com/aiirveon/chromasync-app/blob/main/docs/GAP_ANALYSIS.md",
        highlights: [
          "Gap 1: 18 to 38 hours saved per story development cycle",
          "Gap 6: uncontrolled AI monoculture vs actively blocked defaults",
          "Honest about residual gaps including export, first draft, and real user validation",
        ],
      },
      {
        icon: <BarChart3 className="w-5 h-5" />,
        title: "Business Case",
        description: "Problem sizing, market opportunity, proposed solution, investment required, expected return, and recommendation. Covers V1 cash cost, V2 infrastructure costs, and revenue model.",
        githubUrl: "https://github.com/aiirveon/chromasync-app/blob/main/docs/BUSINESS_CASE.md",
        highlights: [
          "V1 built for under 70 GBP cash and 4 months of developer time",
          "Freemium model: 12 GBP per month subscription at 1,000 paying users",
          "Clear recommendation with three V2 priorities in priority order",
        ],
      },
      {
        icon: <FileText className="w-5 h-5" />,
        title: "Functional Specification",
        description: "Exact system behaviour for every feature including edge cases, error states, and API request payloads. Written for engineers and analysts verifying system behaviour.",
        githubUrl: "https://github.com/aiirveon/chromasync-app/blob/main/docs/FUNCTIONAL_SPEC.md",
        highlights: [
          "9 functional specs covering Cold Open through Story Library",
          "Exact API payloads documented per endpoint including all context fields",
          "Error handling table covering all failure modes",
        ],
      },
    ],
  },

  contact: {
    pitch: "I am actively seeking Junior AI PM and Technical PM roles at companies building AI-powered products — creative tech, media, e-commerce, fintech, or any domain where product thinking and technical depth matter equally. ChromaSync demonstrates full-stack AI product development: prompt engineering, real-time persistence, mobile-first UX, and ethical AI design — built and shipped, not just planned. Let us connect.",
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
        <PersonasSection personas={projectData.personas} />
        <SolutionSection description={projectData.solution.description} features={projectData.solution.features} />
        <ImplementationSection phases={projectData.phases} />
        <DataSection dataDict={projectData.data.dataDict} methodology={projectData.data.methodology} validationMethods={projectData.data.validationMethods} />
        <ResultsSection heroMetric={projectData.results.heroMetric} comparisons={projectData.results.comparisons} keyInsights={projectData.results.keyInsights} />
        <EthicsSection principles={projectData.ethics.principles} guardrails={projectData.ethics.guardrails} biasAuditDescription={projectData.ethics.biasAuditDescription} />
        <CompetitiveSection competitors={projectData.competitive.competitors} competitorAName={projectData.competitive.competitorAName} competitorBName={projectData.competitive.competitorBName} positioningStatement={projectData.competitive.positioningStatement} />
        <OkrsSection objective={projectData.okrs.objective} keyResults={projectData.okrs.keyResults} successMetrics={projectData.okrs.successMetrics} />
        <RoadmapSection milestones={projectData.roadmap.milestones} />
        <LearningsSection wentWell={projectData.learnings.wentWell} challenges={projectData.learnings.challenges} doDifferently={projectData.learnings.doDifferently} keyTakeaway={projectData.learnings.keyTakeaway} />
        <ProductArtifactsSection introduction={projectData.productArtifacts.introduction} artifacts={projectData.productArtifacts.artifacts} />
        <ContactSection {...projectData.contact} />
      </main>
    </div>
  )
}
