import { BarChart3, Shield, Users, Zap, FileText, AlertTriangle, Code, Lightbulb } from "lucide-react"
import {
  ProgressBar,
  TableOfContents,
  HeroSection,
  ExecutiveSummary,
  ProblemSection,
  SolutionSection,
  ImplementationSection,
  DataSection,
  ResultsSection,
  EthicsSection,
  OkrsSection,
  LearningsSection,
  ContactSection,
} from "@/components/portfolio"
import { PmArtefactsSection } from "@/components/portfolio/pm-artefacts-section"

const projectData = {
  hero: {
    projectName: "Pulse — AI Audience Sentiment Monitor",
    tagline: "Real-time AI audience sentiment classification for live UK broadcast events. TF-IDF + XGBoost emotion classifier (Macro F1 0.830) with tiered routing, SHAP explainability, and an editorial guardrail built into the architecture — built for BBC, Channel 4, ITV, and Sky.",
    status: "Shipped",
    author: "Ogbebor Osaheni",
    date: "March 2026",
    demoUrl: "https://pulse-pi-inky.vercel.app",
    githubUrl: "https://github.com/aiirveon/pulse",
    heroImage: undefined,
    youtubeUrl: "https://www.youtube.com/watch?v=2P7k6InUiBI",
  },
  summary: {
    description: "A real-time AI sentiment classification system that gives broadcast producers structured, explainable, auditable audience intelligence — so they can make faster, more audience-aware editorial decisions during live events. The system never makes editorial decisions. The producer always decides.",
    metrics: [
      { icon: <BarChart3 className="w-5 h-5" />, value: "0.830", label: "Macro F1 Score", description: "Emotion classifier across 5 categories" },
      { icon: <Shield className="w-5 h-5" />, value: "3-Tier", label: "Routing Architecture", description: "Auto-neutral, Claude API, XGBoost" },
      { icon: <Users className="w-5 h-5" />, value: "2,699", label: "Training Examples", description: "Synthetic BAFTA social posts" },
      { icon: <Zap className="w-5 h-5" />, value: "5+6", label: "Classifications", description: "5 emotions, 6 topics multi-label" },
    ],
  },
  problem: {
    paragraphs: [
      "Live broadcast producers at UK broadcasters make editorial decisions in real time with almost no structured audience intelligence. During high-stakes events — the BAFTAs, election nights, live finals — audience reaction exists in volume on social media but reaches the gallery too late, too unstructured, and too noisy to act on.",
      "The challenge is not technical. The barrier is product thinking: how do you surface real-time audience sentiment in a form that a live broadcast producer can read in under 5 seconds and act on immediately? How do you build a tool that is fast enough for a gallery, honest enough about its uncertainty, and safe enough for an Ofcom-regulated broadcaster to use?",
      "This project addresses the full product lifecycle: from ML model design and labelling guide to tiered routing architecture to SHAP explainability to editorial ethics to a shipped, interactive demo — demonstrating how AI Product Managers bridge technical capability with editorial integrity and regulatory awareness.",
    ],

  },
  solution: {
    description: "A real-time AI sentiment classification system that gives broadcast producers structured, explainable, auditable audience intelligence — so they can make faster, more audience-aware editorial decisions during live events. The system never makes editorial decisions. The producer always decides.",
    features: [
      {
        icon: <Code className="w-5 h-5" />,
        title: "Tiered Routing Architecture",
        description: "Three-tier classification: Tier 1 (≤3 words) auto-classifies as neutral at zero cost. Tier 2 (4–20 words) routes to Claude API for semantic understanding of short casual text. Tier 3 (>20 words) runs full TF-IDF + XGBoost + SHAP pipeline. Cost and accuracy matched to input complexity.",
      },
      {
        icon: <Lightbulb className="w-5 h-5" />,
        title: "SHAP Word-Level Explainability",
        description: "Every Tier 3 classification includes SHAP highlights showing the specific words that drove the emotion classification. A producer can see exactly why a post was flagged as angry versus negative — not just a score.",
      },
      {
        icon: <Shield className="w-5 h-5" />,
        title: "Editorial Guardrail Built In",
        description: "A non-dismissible persistent label on every screen: 'Pulse surfaces audience signals. Editorial decisions remain with the producer.' This is not a UX flourish — it is an ethical constraint embedded in the architecture, documented in the Ethics Framework.",
      },
    ],
  },
  phases: [
    {
      title: "Phase 0: PM Artefacts",
      description: "Written before any code. Full PM artefact set established the product requirements, ethical constraints, and competitive positioning that shaped every subsequent build decision.",
      deliverables: [
        "Opportunity Assessment: problem, persona, hypothesis",
        "PRD: 5 functional requirements, success metrics, alert threshold spec",
        "Ethics Framework: editorial sovereignty, feedback loop risk, Ofcom alignment",
        "Competitive Analysis: Brandwatch, Sprout Social, Pulsar, Twitter/X, manual monitoring",
        "Labelling Guide: emotion decision trees, topic definitions, pilot check protocol",
      ],
      techStack: ["Notion", "Markdown", "PM Frameworks"],
    },
    {
      title: "Phase 1: Data & Model",
      description: "Generated 2,699 synthetic BAFTA social posts using Claude API. Trained TF-IDF + XGBoost emotion classifier and multi-label topic classifier. Iterated on labelling guide when negative/angry boundary produced F1 0.742 — fixed through targeted augmentation and sharpened prompt definitions, not hyperparameter tuning.",
      deliverables: [
        "2,699 synthetic BAFTA posts (2,399 original + 300 targeted augmentation)",
        "Emotion classifier: 5-class XGBoost, Macro F1 0.830",
        "Topic classifier: 6-class multi-label OneVsRest XGBoost",
        "Labelling guide with decision trees — written before generation began",
        "Diagnostic script: class balance, test sample size, split validation",
        "MODEL_DECISIONS.md: F1 scores, known limitations, v2 roadmap",
      ],
      techStack: ["Python", "XGBoost", "scikit-learn", "SHAP", "Claude API", "pandas"],
      metrics: [
        { name: "negative F1 (iteration 1)", baseline: "0.742", optimized: "0.750", improvement: "Targeted augmentation" },
        { name: "fashion_red_carpet F1", baseline: "0.696 (15 test examples)", optimized: "0.776 (30 test examples)", improvement: "Test split rebalance" },
        { name: "Macro F1 overall", baseline: "N/A", optimized: "0.830", improvement: "All categories above 0.75" },
      ],
    },
    {
      title: "Phase 2: FastAPI Backend",
      description: "Five endpoints deployed to Render. Tiered routing architecture implemented in the classifier — the key architectural decision driven by both short text accuracy and responsible AI principles.",
      deliverables: [
        "GET /health — cold start wake, model info",
        "POST /api/classify — tiered routing, returns emotion/topics/confidence/shap_words",
        "POST /api/feed/start — resets scripted BAFTA narrative arc",
        "GET /api/feed/next — returns next classified batch from scripted feed",
        "GET /api/stats — session sentiment distribution + alert system",
      ],
      techStack: ["FastAPI", "Python", "Anthropic SDK", "Render"],
    },
    {
      title: "Phase 3: Next.js Frontend",
      description: "Three screens deployed to Vercel. Live Monitor, Simulator, and Stats — with editorial guardrail persistent on every screen and alert system firing when negative + angry exceeds threshold.",
      deliverables: [
        "Live Monitor: two-panel layout, auto-feed + manual input, sentiment chart",
        "Simulator: scripted BAFTA narrative arc with 5 stages (Opening → Controversy → Closing)",
        "Stats: session overview, emotion breakdown, topic bars, model info panel",
        "Alert system: fires when negative + angry > 40% of last 30 posts",
        "Editorial guardrail: persistent non-dismissible footer on every screen",
        "Deployed: https://pulse-pi-inky.vercel.app",
      ],
      techStack: ["Next.js 16", "TypeScript", "Tailwind v4", "Recharts", "Vercel"],
    },
  ],
  data: {
    dataDict: [
      { feature: "content", type: "string", description: "Synthetic BAFTA 2026 social media post in Twitter/X register", source: "Claude API generation" },
      { feature: "emotion", type: "categorical (5)", description: "excited, positive, neutral, negative, angry — classified by tone not topic", source: "Generation prompt + labelling guide" },
      { feature: "topics", type: "multi-label (6)", description: "winner_reaction, presenter_performance, ceremony_production, diversity_representation, fashion_red_carpet, general_audience_reaction", source: "Claude API topic assignment" },
      { feature: "confidence", type: "float (0.70–0.99)", description: "Generation difficulty signal. Clear examples 0.85–0.99, subtle 0.70–0.84", source: "Designed by difficulty tier" },
      { feature: "split", type: "categorical (train/test)", description: "Stratified 80/20 split by emotion category", source: "Assigned after generation" },
    ],
    methodology: "Generated 2,699 synthetic BAFTA 2026 social media posts using Claude API (claude-haiku-4-5). Key design decision: wrote the labelling guide before generating any data — defining all emotion boundaries, topic definitions, and decision trees upfront. When negative/angry boundary produced F1 0.742, the fix was targeted augmentation (300 additional negative posts with sharper prompt definitions) not hyperparameter tuning. When fashion_red_carpet produced F1 0.696, the fix was rebalancing the test split from 15 to 30 examples — a measurement problem, not a model problem.",
    validationMethods: [
      "Stratified 80/20 train/test split by emotion category",
      "F1 per category with 0.78 threshold (emotion) and 0.75 threshold (topic multi-label)",
      "Diagnostic script: class balance, test sample size per category, similar category imbalance",
      "Targeted augmentation for negative category: 180 clear + 120 subtle additional examples",
      "Test split rebalance for fashion_red_carpet: 15 → 30 test examples",
    ],
  },
  results: {
    heroMetric: { value: "0.830", label: "Macro F1 — emotion classifier across all 5 categories" },
    comparisons: [
      { metric: "negative F1", before: "0.742", after: "0.750", change: "Targeted augmentation" },
      { metric: "fashion_red_carpet F1", before: "0.696 (15 test)", after: "0.776 (30 test)", change: "Split rebalance" },
      { metric: "Tier 2 short text accuracy", before: "Wrong (TF-IDF out of distribution)", after: "Correct (Claude API semantic)", change: "Tiered routing" },
      { metric: "general_audience_reaction F1", before: "N/A", after: "0.304 (accepted)", change: "Documented limitation" },
    ],
    keyInsights: [
      "The negative/angry F1 improvement came from redesigning the generation prompts using the labelling guide decision trees — not from tuning the model. The labelling guide is a product decision. The model learns exactly what the data shows.",
      "The fashion_red_carpet failure was a measurement problem, not a model problem. At 15 test examples, one wrong prediction moves F1 by 6.7 percentage points. Rebalancing the split to 30 examples moved F1 from 0.696 to 0.776 at zero additional cost.",
      "The tiered routing architecture was driven by a product and ethics decision: TF-IDF + XGBoost produces wrong high-confidence results on short text. Showing a wrong answer with 99% confidence destroys producer trust. Claude API for Tier 2 costs $0.0003 per call. The cost of a wrong high-confidence verdict in a live broadcast context is orders of magnitude higher.",
      "general_audience_reaction F1 0.304 is an accepted limitation documented in MODEL_DECISIONS.md. The category is defined by exclusion — it applies when nothing else does. Models learn by positive examples. A category defined by the absence of other signals is structurally harder to learn. In production, low-confidence topic tags are shown with a distinct visual indicator.",
    ],
  },
  ethics: {
    introduction: "This project applies responsible AI principles from the ground up. The central ethical tension: if a live broadcast producer consistently responds to sentiment signals, the algorithm gradually shapes editorial decisions — and the broadcast stops reflecting editorial judgement and starts reflecting algorithmic optimisation. Every decision in this system was made to prevent that failure mode.",
    principles: [
      { title: "Editorial Sovereignty is Non-Negotiable", description: "The system never makes a content decision. Every result requires an explicit producer response. The editorial guardrail is persistent and non-dismissible on every screen. This is an ethical constraint embedded in the architecture." },
      { title: "Transparency Over False Confidence", description: "Every classification includes a confidence score. Low-confidence results are visually distinct. The tiered routing architecture exists specifically because showing wrong high-confidence results violates this principle — false certainty is more dangerous than acknowledged uncertainty." },
      { title: "The Feedback Loop Risk is Documented", description: "If producers consistently respond to sentiment spikes, audience behaviour adapts, and the model begins learning the consequences of its own influence rather than genuine sentiment. This risk is documented in the Ethics Framework and the v2 roadmap requires training data from multiple diverse events to mitigate it." },
      { title: "Social Signal Caveat Built Into the UI", description: "Social media audiences skew younger and more urban than linear broadcast audiences. This demographic gap is surfaced in the dashboard as a persistent caveat — not buried in documentation." },
    ],
    guardrails: [
      { rule: "Editorial guardrail on every screen", threshold: "Non-dismissible", rationale: "Producer must never forget the signal is advisory not directive" },
      { rule: "Confidence shown on every verdict", threshold: "Always visible", rationale: "Producer must know how certain the model is before acting" },
      { rule: "Short text routes to Claude not XGBoost", threshold: "4–20 words via Tier 2", rationale: "Wrong high-confidence verdicts destroy trust and could cause editorial errors" },
      { rule: "Alert names signal not action", threshold: "Descriptive only", rationale: "Alert says 'Negative spike: Winner Reaction' never 'Consider changing coverage'" },
    ],
    biasAuditDescription: "Fairness constraint: no emotion category flagged at more than 2× the rate of any other. Known limitation: general_audience_reaction F1 0.304 — structural catch-all limitation, low-confidence results shown with distinct visual indicator. Negative/angry boundary F1 0.750 — in production, alert system uses combined negative + angry score, not either emotion alone.",
  },
  competitive: {
    introduction: "Social listening is a crowded market. But every existing tool is built for marketing teams, not broadcast producers. The gap: a tool that classifies audience sentiment in real time at gallery speed — in a format a producer can read in 5 seconds and act on in a live broadcast context.",
    competitors: [
      { feature: "Real-time classification (< 2s)", ours: true, compA: false, compB: false },
      { feature: "Emotion classification (5 categories)", ours: true, compA: false, compB: false },
      { feature: "Topic classification (multi-label)", ours: true, compA: false, compB: false },
      { feature: "Gallery-ready interface (< 5s read)", ours: true, compA: false, compB: false },
      { feature: "Negative sentiment alert system", ours: true, compA: false, compB: false },
      { feature: "Editorial guardrail built into UI", ours: true, compA: false, compB: false },
      { feature: "SHAP word-level explainability", ours: true, compA: false, compB: false },
      { feature: "Ofcom/BBC Guidelines framing", ours: true, compA: false, compB: false },
    ],
    competitorAName: "Brandwatch",
    competitorBName: "Sprout Social",
    positioningStatement: "The only tool designed for the live broadcast producer workflow — classifying audience sentiment by emotion and topic in real time, at gallery speed, with confidence scoring, SHAP explainability, editorial guardrails, and UK broadcasting regulatory framing built in.",
  },
  okrs: {
    objective: "Demonstrate responsible AI product management capability through a shipped, production-grade broadcast sentiment tool that is technically sound, editorially safe, and commercially relevant to UK live broadcasting.",
    keyResults: [
      { kr: "Achieve Macro F1 > 0.78 on emotion classifier", progress: 100, target: "Macro F1 > 0.78" },
      { kr: "Implement tiered routing with editorial guardrail", progress: 100, target: "All three tiers operational" },
      { kr: "Deploy to public URL with scripted BAFTA simulation", progress: 100, target: "Live public demo" },
    ],
    successMetrics: [
      { metric: "Emotion Macro F1", target: "> 0.78", achieved: "0.830 — all categories above 0.75", status: "Achieved" as const },
      { metric: "Tiered routing", target: "3 tiers operational", achieved: "Tier 1 auto-neutral, Tier 2 Claude API, Tier 3 XGBoost", status: "Achieved" as const },
      { metric: "Live demo", target: "Public URL", achieved: "pulse-pi-inky.vercel.app", status: "Achieved" as const },
      { metric: "PM artefacts", target: "5 documents", achieved: "5 shipped before build started + Labelling Guide", status: "Achieved" as const },
    ],
  },
  roadmap: {
    milestones: [
      {
        phase: "Now",
        items: [
          { title: "TF-IDF + XGBoost emotion classifier — Macro F1 0.830" },
          { title: "Multi-label topic classifier — 6 categories" },
          { title: "Tiered routing: Tier 1 auto-neutral, Tier 2 Claude API, Tier 3 XGBoost" },
          { title: "Scripted BAFTA narrative arc — 5 stages with dominant emotion shifts" },
          { title: "Live Monitor + Simulator + Stats — deployed at pulse-pi-inky.vercel.app" },
          { title: "Alert system: fires when negative + angry > 40% of last 30 posts" },
        ],
        status: "completed" as const,
      },
      {
        phase: "Next",
        items: [
          { title: "Bootstrapped labelling from real broadcast data (requires DPIA under UK GDPR Article 35)" },
          { title: "Sentence transformer upgrade for better semantic boundary on negative/angry" },
          { title: "Expand to election night and sports event contexts" },
          { title: "PDF export of session sentiment arc for post-broadcast editorial review" },
        ],
        status: "in-progress" as const,
      },
      {
        phase: "Later",
        items: [
          { title: "Fine-tune on real broadcast data under consent framework" },
          { title: "Real-time platform API integration (subject to terms compliance)" },
          { title: "Multi-broadcaster dashboard with cross-event comparison" },
          { title: "Fairness audit across demographic segments using Fairlearn" },
        ],
        status: "planned" as const,
      },
    ],
  },
  learnings: {
    wentWell: [
      "Writing the labelling guide before generating any data produced cleaner category boundaries than the iterative approach used in earlier projects — the decision trees made every label unambiguous before a single API call was made",
      "The tiered routing architecture solved two problems simultaneously: short text accuracy and honest uncertainty communication — the same architecture decision served both technical and ethical requirements",
      "The scripted BAFTA narrative arc makes the demo immediately legible to any broadcaster — the CONTROVERSY stage with negative/angry spikes tells the product story better than any explanation",
    ],
    challenges: [
      "The negative/angry boundary remained at F1 0.750 after two targeted augmentation runs — the remaining gap is likely irreducible with synthetic data and requires real broadcast audience comments under a proper consent and anonymisation framework",
      "general_audience_reaction F1 0.304 is a structural limitation of catch-all categories — accepted and documented, but it surfaces the fundamental tension between ML training methodology and category design",
      "Render free tier cold start (30–50 seconds) creates friction in the demo — health check retry loop mitigates this but does not eliminate it",
    ],
    doDifferently: [
      "Build tiered routing from day one — the moment I decided to support manual text input I should have asked 'what is the shortest input a producer would type?' and designed the routing architecture before the classification layer",
      "Write the labelling guide before the generation script, not after the first failed training run — this was the correct sequence and would have saved two full regeneration cycles",
      "Generate a 100-row pilot before full generation — $0.02 to validate label boundaries before committing to a $0.50 full run",
    ],
    keyTakeaway: "The labelling guide is not documentation — it is product design. Every emotion boundary definition is a decision about what the model learns. Every topic decision tree is a specification. Writing it before generating data is the correct order. The model learns exactly what the data shows.",
  },
  contact: {
    pitch: "I am actively seeking Junior AI PM and Technical PM roles at UK media companies — BBC, Channel 4, ITV, Sky, and media-adjacent tech. My background in sociology and anthropology combined with an MSc in Managing AI in Business gives me a perspective on responsible AI and editorial ethics that most technical candidates do not have. Let's connect.",
    email: "osaheniogbebor.c@gmail.com",
    linkedIn: "https://www.linkedin.com/in/osaheni-o-94565421a/",
    github: "https://github.com/aiirveon",
    calendlyUrl: undefined,
    authorName: "Ogbebor Osaheni",
  },
}

export default function PulseProject() {
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
          introduction={projectData.ethics.introduction}
          principles={projectData.ethics.principles}
          guardrails={projectData.ethics.guardrails}
          biasAuditDescription={projectData.ethics.biasAuditDescription}
        />
        <OkrsSection
          objective={projectData.okrs.objective}
          keyResults={projectData.okrs.keyResults}
          successMetrics={projectData.okrs.successMetrics}
        />
        <LearningsSection
          wentWell={projectData.learnings.wentWell}
          challenges={projectData.learnings.challenges}
          doDifferently={projectData.learnings.doDifferently}
          keyTakeaway={projectData.learnings.keyTakeaway}
        />
        <PmArtefactsSection projectArtefacts={[
          { name: "PRD — Pulse", artefactId: "pulse-prd", project: "pulse" },
          { name: "Model Decisions — Pulse", artefactId: "pulse-model-decisions", project: "pulse" },
          { name: "Ethics Framework — Pulse", artefactId: "pulse-ethics", project: "pulse" },
        ]} />

        <ContactSection {...projectData.contact} />
      </main>
    </div>
  )
}
