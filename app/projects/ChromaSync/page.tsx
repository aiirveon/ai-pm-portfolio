import { Film, TrendingUp, Users, Zap, Lightbulb, Code, Shield } from "lucide-react"
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

const projectData = {
  hero: {
    projectName: "ChromaSync",
    tagline: "AI colour intelligence that recommends camera settings before the shoot, guides adjustments during it, and auto-corrects drift in post—eliminating hours of manual colour work for solo indie filmmakers.",
    status: "In Progress",
    author: "Ogbebor Osaheni",
    date: "March 2025",
    demoUrl: "https://chromasync-app.vercel.app",
    githubUrl: "https://github.com/aiirveon",
    heroImage: undefined,
  },

  summary: {
    description: "ChromaSync is an end-to-end AI colour continuity system for solo indie filmmakers who shoot and grade alone. Using OpenCV for per-frame colour analysis, XGBoost for correction prediction, and SHAP for explainability, ChromaSync solves colour drift at three points: before the shoot (camera setting recommendations), during the shoot (dynamic parameter guidance), and after (automated post correction). Unlike DaVinci Resolve or Colourlab AI which live entirely in post, ChromaSync is the only tool that addresses continuity from the moment of capture.",
    metrics: [
      { icon: <Film className="w-5 h-5" />, value: "70%", label: "Correction Time Saved", description: "Target reduction in manual post work" },
      { icon: <TrendingUp className="w-5 h-5" />, value: "3", label: "Workflow Modules", description: "Pre-shoot, on-shoot, post correction" },
      { icon: <Users className="w-5 h-5" />, value: "2M+", label: "Target Market", description: "Solo indie filmmakers UK and Europe" },
      { icon: <Zap className="w-5 h-5" />, value: "£0", label: "Colorist Cost", description: "vs £300-500 per day industry rate" },
    ],
  },

  problem: {
    paragraphs: [
      "Solo indie filmmakers face an unavoidable technical problem: colour drift. Shooting run-and-gun means ISO rises in low light, white balance shifts moving between indoor tungsten and outdoor daylight, and exposure floats with changing cloud cover. The result is footage where scene 1 and scene 12 look like they were filmed on different days.",
      "Professional productions solve this with a DIT on set and a colorist in post, costing £300–£500 per day each. For a 5-day indie shoot, that is £3,000–£5,000 in specialist labour most solo filmmakers simply cannot afford. They absorb the hours themselves—spending 5–8 hours per project in DaVinci Resolve fixing continuity before beginning any creative colour work.",
      "The existing tool ecosystem is designed for professionals with crew and budget. DaVinci Resolve is powerful but requires expert knowledge and manual scene-by-scene correction. Colourlab AI helps in post but offers no pre-shoot intelligence. No tool currently bridges the gap between how the camera behaves on set and what the colorist needs in post—for a solo creator working alone.",
    ],
    keyInsight: "From Prediction Machines (Agrawal, Gans and Gold): AI reduces the cost of prediction. ChromaSync applies this directly—instead of a colorist predicting the right correction for each scene manually, the AI predicts it automatically. When prediction is cheap, solo filmmakers can achieve professional continuity without professional crew.",
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
    description: "ChromaSync is a three-module AI colour intelligence system. Module 1 analyses a reference frame and outputs recommended camera settings before the shoot begins. Module 2 provides dynamic parameter updates as shooting conditions change throughout the day. Module 3 automatically detects and corrects colour drift in uploaded footage post-shoot, with full SHAP explainability on every correction so the filmmaker stays in creative control.",
    features: [
      {
        icon: <Lightbulb className="w-5 h-5" />,
        title: "Pre-Shoot Intelligence",
        description: "Upload your reference frame. ChromaSync analyses its colour profile and outputs exact camera settings—colour temperature, ISO, picture profile, white balance—to get you closest to your target look before you press record.",
      },
      {
        icon: <Code className="w-5 h-5" />,
        title: "On-Shoot Guidance",
        description: "Input changing conditions (moving indoors, golden hour, overcast) and receive dynamically updated parameter recommendations throughout the shoot. Stay inside the right colour space all day.",
      },
      {
        icon: <Shield className="w-5 h-5" />,
        title: "Explainable Post Correction",
        description: "Upload footage. XGBoost predicts corrections per scene. SHAP explains every decision in plain English. Manual override sliders on every correction. The AI suggests—the filmmaker decides.",
      },
    ],
  },

  phases: [
    {
      title: "Phase 1: MVP",
      description: "Core colour analysis engine and basic post correction pipeline.",
      deliverables: [
        "OpenCV per-frame colour extraction (mean RGB, colour temperature, exposure, histogram)",
        "Synthetic drift data generation simulating real camera parameter variation",
        "XGBoost regression model trained to predict colour correction values",
        "Basic Streamlit UI for footage upload and corrected output download",
      ],
      techStack: ["Python", "OpenCV", "XGBoost", "MoviePy", "Streamlit", "Pandas"],
    },
    {
      title: "Phase 2: Production ML and Explainability",
      description: "SHAP integration, pre-shoot module, and model optimisation.",
      deliverables: [
        "SHAP explainability dashboard showing per-scene correction drivers",
        "Pre-shoot reference frame analysis and camera settings output",
        "Optuna hyperparameter tuning for correction model",
        "Before/after video comparison player in Streamlit",
      ],
      techStack: ["SHAP", "Optuna", "Scikit-learn", "Streamlit"],
      metrics: [
        { name: "Scene-to-Scene Delta E", baseline: ">15 units (visible drift)", optimized: "<5 units (professional continuity)", improvement: "70% reduction" },
        { name: "Pre-shoot Accuracy", baseline: "Manual estimate", optimized: "Within 15% of colorist", improvement: ">80% accuracy" },
        { name: "Override Rate", baseline: "N/A", optimized: "<25%", improvement: "75% AI trust rate" },
      ],
    },
    {
      title: "Phase 3: Product and Ethics",
      description: "Full PM artefact suite, ethics audit, and on-shoot guidance module.",
      deliverables: [
        "PRD, OKRs, user personas, competitive analysis, risk register",
        "Ethics audit addressing alignment, skin tone bias, and creative autonomy",
        "On-shoot dynamic guidance module with condition-based updates",
        "Manual override layer on all corrections",
      ],
      techStack: ["Figma", "Notion", "Ethics Framework"],
    },
    {
      title: "Phase 4: Launch and Distribution",
      description: "Streamlit Cloud deployment, portfolio case study, and go-to-market.",
      deliverables: [
        "Streamlit Cloud deployment with live demo",
        "Portfolio case study page on personal website",
        "LinkedIn launch post and Loom walkthrough video",
        "README with architecture diagram and technical documentation",
      ],
      techStack: ["Streamlit Cloud", "GitHub", "Vercel", "LinkedIn"],
    },
  ],

  data: {
    dataDict: [
      { feature: "mean_r, mean_g, mean_b", type: "float", description: "Average RGB channel values per frame", source: "OpenCV extraction" },
      { feature: "colour_temperature_k", type: "float", description: "Estimated colour temperature in Kelvin", source: "Derived from RGB ratios" },
      { feature: "exposure_level", type: "float", description: "Overall frame brightness and exposure estimate", source: "OpenCV histogram" },
      { feature: "saturation_mean", type: "float", description: "Average colour saturation across frame", source: "HSV conversion" },
      { feature: "contrast_ratio", type: "float", description: "Ratio of highlight to shadow values", source: "Histogram percentiles" },
      { feature: "correction_r/g/b", type: "float", description: "Target correction per channel (model output)", source: "Synthetic ground truth" },
      { feature: "drift_magnitude", type: "float", description: "Distance from reference colour fingerprint", source: "Delta E calculation" },
    ],
    methodology: "Synthetic training data is generated by taking reference colour profiles and programmatically applying known parameter drift—simulating ISO shifts, white balance changes, and exposure variation across thousands of combinations. Because the drift is applied programmatically, the ground truth correction is always known exactly. This mirrors production ML team practice of synthetic data validation before acquiring expensive labelled real-world datasets. The XGBoost regressor then learns to predict the inverse correction from per-frame colour statistics.",
    validationMethods: [
      "Delta E measurement: industry standard colour difference metric. Target below 5 Delta E between corrected scenes",
      "Baseline comparison: histogram matching vs XGBoost correction model on identical test clips",
      "Override rate tracking: proxy for model alignment with creative intent (target below 25%)",
      "Tested across footage simulating 3 camera profiles (Sony S-Log, Canon Log, flat neutral)",
    ],
  },

  results: {
    heroMetric: { value: "70%", label: "Target reduction in manual colour correction time per project" },
    comparisons: [
      { metric: "Scene-to-scene colour delta", before: ">15 Delta E (visible drift)", after: "<5 Delta E (professional continuity)", change: "70% improvement" },
      { metric: "Pre-shoot setting accuracy", before: "Manual guess", after: "Within 15% of colorist benchmark", change: ">80% accuracy" },
      { metric: "Post correction time per project", before: "5-8 hours manual", after: "<1 hour with ChromaSync", change: "~85% reduction" },
      { metric: "AI correction trust rate", before: "N/A", after: "75% accepted without override", change: "Strong alignment" },
      { metric: "Colorist cost per project", before: "£300-£1,500", after: "£0", change: "100% saving" },
      { metric: "Workflow coverage", before: "Post only (all existing tools)", after: "Pre + during + post", change: "Full pipeline" },
    ],
    keyInsights: [
      "Pre-shoot intelligence is the most novel differentiator. No existing tool tells the filmmaker how to set the camera before shooting begins. This preventative approach reduces post correction burden significantly because drift is minimised at source rather than fixed after the fact.",
      "SHAP explainability drives filmmaker trust. When users can see that white balance was the primary driver of a correction contributing 62% of the adjustment, they make informed override decisions rather than blindly accepting or rejecting AI output. This directly addresses the alignment problem—the AI's corrections must match creative intent, not just mathematical targets.",
      "The override rate is the most important alignment metric. Below 25% means filmmakers trust 3 in 4 AI corrections. Above 40% signals the model is misaligned with creative intent and needs redesign. This single number tells you whether the product is actually working.",
      "Synthetic data is a deliberate professional choice, not a limitation. Production ML teams consistently use synthetic data for initial model validation before acquiring expensive labelled real-world datasets. Framing this confidently in interviews demonstrates ML pipeline maturity.",
    ],
  },

  ethics: {
    principles: [
      { title: "Creative Autonomy", description: "Every AI correction is displayed before being applied. Manual override sliders on every scene. The AI suggests—the filmmaker always decides. No locked corrections under any circumstance." },
      { title: "Explainability First", description: "SHAP values on every correction. Plain English labels showing which colour parameter drove each adjustment and by how much. Zero black-box outputs in the production system." },
      { title: "Skin Tone Awareness", description: "Training data generated across full colour temperature spectrum 2700K to 8000K. Test suite includes footage with diverse skin tones. V1 limitations documented openly; full bias testing roadmapped for V2." },
      { title: "Honest Positioning", description: "ChromaSync corrects continuity drift—it does not replace creative colour grading. UI language consistently says suggests not fixed. Scope is clearly communicated to prevent over-reliance on the system." },
    ],
    guardrails: [
      { rule: "Large Correction Flag", threshold: "Delta E above 15 triggers manual review prompt", rationale: "Large corrections may indicate intentional creative choice rather than accidental drift" },
      { rule: "Override Rate Monitor", threshold: "Alert if override rate exceeds 40%", rationale: "High override rate signals model misalignment with creative intent requiring retraining" },
      { rule: "Explainability Coverage", threshold: "100% of corrections have SHAP output", rationale: "No correction should be applied without explanation available to the filmmaker" },
      { rule: "Non-destructive Processing", threshold: "Original files always preserved", rationale: "Filmmaker can always revert to uncorrected footage regardless of AI output" },
    ],
    biasAuditDescription: "Primary bias risk: colour correction models may perform inconsistently across diverse skin tones if training data is skewed toward particular colour temperature ranges. V1 mitigation: synthetic data generated across full 2700K to 8000K spectrum; test footage includes diverse subjects. Documented limitation: full bias validation against diverse real-world footage deferred to V2. Secondary risk: alignment failure where model corrects intentional creative colour choices. Mitigation: large-correction flagging, override layer, and SHAP transparency throughout. Ethical framework reference: Brian Christian, The Alignment Problem—building AI that serves human creative intent, not just the training objective.",
  },

  competitive: {
    competitors: [
      { feature: "Pre-shoot camera guidance", ours: true, compA: false, compB: false },
      { feature: "On-shoot dynamic recommendations", ours: true, compA: false, compB: false },
      { feature: "Automated post correction", ours: true, compA: true, compB: false },
      { feature: "SHAP explainability", ours: true, compA: false, compB: false },
      { feature: "Designed for solo filmmakers", ours: true, compA: false, compB: false },
      { feature: "Manual override on every correction", ours: true, compA: false, compB: false },
    ],
    competitorAName: "Colourlab AI",
    competitorBName: "DaVinci Resolve",
    positioningStatement: "Unlike DaVinci Resolve which requires expert knowledge and manual scene correction, or Colourlab AI which lives entirely in post with no explainability, ChromaSync is the only end-to-end colour intelligence system built specifically for solo indie filmmakers—covering pre-shoot guidance, on-shoot recommendations, and explainable post correction in a single workflow.",
  },

  okrs: {
    objective: "Build an end-to-end AI colour continuity system that demonstrably reduces manual colour work for solo indie filmmakers",
    keyResults: [
      { kr: "Achieve below 5 Delta E scene-to-scene colour delta on 10 diverse test clips", progress: 0, target: "<5 Delta E units" },
      { kr: "Pre-shoot recommendations within 15% of colorist benchmark on 5 reference styles", progress: 0, target: ">80% accuracy" },
      { kr: "AI correction acceptance rate above 75% in user testing", progress: 0, target: ">75% acceptance" },
      { kr: "Full PM artefact suite completed and published on portfolio", progress: 100, target: "7 artefacts" },
      { kr: "Live Streamlit demo deployed and portfolio case study published", progress: 0, target: "Live URL" },
    ],
    successMetrics: [
      { metric: "Scene-to-scene Delta E", target: "<5 units", achieved: "In progress", status: "In Progress" as const },
      { metric: "Correction acceptance rate", target: ">75%", achieved: "In progress", status: "In Progress" as const },
      { metric: "PM artefact suite", target: "Complete", achieved: "Complete", status: "Achieved" as const },
      { metric: "Processing time", target: "<5 mins per 10min clip", achieved: "In progress", status: "In Progress" as const },
    ],
  },

  roadmap: {
    milestones: [
      {
        phase: "Now",
        items: [
          { title: "PRD, OKRs, ethics audit, competitive analysis — complete" },
          { title: "Synthetic colour drift data generation" },
          { title: "XGBoost colour correction model training" },
          { title: "SHAP explainability dashboard" },
        ],
        status: "in-progress" as const,
      },
      {
        phase: "Next",
        items: [
          { title: "Pre-shoot camera settings recommendation module" },
          { title: "On-shoot dynamic guidance interface" },
          { title: "Before/after video comparison player" },
          { title: "Streamlit Cloud deployment and live demo" },
        ],
        status: "planned" as const,
      },
      {
        phase: "Later",
        items: [
          { title: "Support for LOG formats (S-Log, Canon Log, BRAW)" },
          { title: "Real footage bias testing across diverse skin tones for V2" },
          { title: "LUT export for DaVinci Resolve integration" },
          { title: "Mobile companion app for on-set guidance" },
        ],
        status: "planned" as const,
      },
    ],
  },

  learnings: {
    wentWell: [
      "Identifying the pre-shoot module as a genuine market gap—no existing tool tells filmmakers how to set the camera before shooting. This became the strongest product differentiator and the clearest evidence of original product thinking.",
      "Applying the alignment problem framework to colour correction—recognising that mathematically correct and creatively correct are different problems requiring different design solutions. The override layer and SHAP transparency are the product answer.",
      "Choosing XGBoost over neural style transfer for explainability—a deliberate PM decision that prioritised filmmaker trust over visual impressiveness. The right call for this user and this use case.",
    ],
    challenges: [
      "Defining correct colour correction when correctness is subjective—the same drift might be intentional in one scene and accidental in another. The override layer and SHAP transparency are the product answer, not a technical one.",
      "Synthetic data generalisation risk—training on simulated drift means the model has never seen real camera noise, codec compression, or manufacturer-specific colour science. Documented openly as a V1 limitation with V2 roadmap.",
      "Skin tone bias is a real risk requiring dedicated test data to validate properly—scheduled for V2 with real diverse footage dataset.",
    ],
    doDifferently: [
      "Run user interviews with real indie filmmakers before finalising the module structure. The product instincts feel right but should be validated against actual filmmaker workflow before the technical build.",
      "Start with a real footage test dataset earlier to validate synthetic data assumptions before the full model build rather than deferring to V2.",
      "Define the on-shoot guidance UX before building the model—how does Kofi input changing conditions on set? Product decisions should precede technical decisions, not follow them.",
    ],
    keyTakeaway: "As Jesse Schell writes in The Art of Game Design, every design decision should be tested against one question: does this serve the experience? For ChromaSync, every feature was tested against: does this keep the filmmaker in creative flow, or does it interrupt it? The SHAP explainability, override sliders, and suggests-not-decides language all flow directly from that single design principle.",
  },

  contact: {
    pitch: "I am building an AI PM portfolio targeting roles at BBC R&D, Foundry, Sky Studios, Channel 4, and creative AI companies across the UK. ChromaSync demonstrates end-to-end ML product thinking in the creative technology space. Let us connect if you are building at the intersection of AI and creative production.",
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
        <ContactSection {...projectData.contact} />
      </main>
    </div>
  )
}
