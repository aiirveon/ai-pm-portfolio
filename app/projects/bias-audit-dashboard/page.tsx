import { BarChart3, Shield, Users, Zap, FileText, AlertTriangle, Code, Lightbulb } from "lucide-react"

export const metadata = {
  title: "Bias Audit Dashboard | Ogbebor Osaheni",
  description: "AI bias detection tool for UK media trust and safety teams. TF-IDF + XGBoost, F1 0.90, Ofcom-aligned.",
  openGraph: {
    title: "Bias Audit Dashboard | Ogbebor Osaheni",
    description: "AI bias detection tool for UK media trust and safety teams. TF-IDF + XGBoost, F1 0.90, Ofcom-aligned.",
    url: "https://osaheniogbebor.com/projects/bias-audit-dashboard",
    images: [{ url: "https://osaheniogbebor.com/og-image.jpg", width: 1200, height: 630, alt: "Bias Audit Dashboard — Ogbebor Osaheni" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bias Audit Dashboard | Ogbebor Osaheni",
    description: "AI bias detection tool for UK media trust and safety teams. TF-IDF + XGBoost, F1 0.90, Ofcom-aligned.",
    images: ["https://osaheniogbebor.com/og-image.jpg"],
  },
}
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
  RoadmapSection,
  LearningsSection,
  ContactSection,
} from "@/components/portfolio"
import { PmArtefactsSection } from "@/components/portfolio/pm-artefacts-section"

const projectData = {
  hero: {
    projectName: "Bias Audit Dashboard",
    tagline: "B2B AI tool for trust and safety teams at UK media companies. Detects bias across 6 categories with SHAP explainability, a live moderation simulator, and a full audit trail — built for Online Safety Act 2023, Ofcom Broadcasting Code, and BBC Editorial Guidelines compliance.",
    status: "Shipped",
    author: "Ogbebor Osaheni",
    date: "March 2026",
    demoUrl: "https://bias-audit-dashboard.vercel.app",
    githubUrl: "https://github.com/aiirveon/bias-audit-dashboard",
    heroImage: undefined,
    youtubeUrl: "https://www.youtube.com/watch?v=q2m1QcoEpWI",
    screenshotImages: [
      "/switcher/bias-audit-dashboard/a.PNG",
      "/switcher/bias-audit-dashboard/b.PNG",
    ],
  },
  summary: {
    description: "Built an end-to-end AI bias detection system for UK media trust and safety teams. The hybrid architecture routes content through a tiered pipeline: inputs of 2 words or fewer are auto-approved at zero cost, 4–15 word inputs go to Claude API for semantic classification, and longer inputs run through a TF-IDF + XGBoost classifier with SHAP word-level highlights. The system achieves F1 0.90 across 6 bias categories and includes a live comment moderation simulator that demonstrates the full human-in-the-loop workflow.",
    metrics: [
      { icon: <BarChart3 className="w-5 h-5" />, value: "0.90", label: "F1 Score", description: "Across all 6 bias categories" },
      { icon: <Shield className="w-5 h-5" />, value: "3-Tier", label: "Routing Architecture", description: "Cost-optimised classification pipeline" },
      { icon: <Users className="w-5 h-5" />, value: "3,000", label: "Training Examples", description: "Synthetic UK media content" },
      { icon: <Zap className="w-5 h-5" />, value: "6", label: "Bias Categories", description: "Demographic, gender, racial, religious, geographic, neutral" },
    ],
  },
  problem: {
    paragraphs: [
      "UK media companies — broadcasters, publishers, streaming platforms — produce and moderate thousands of pieces of content daily. Trust and safety teams are responsible for ensuring that content does not systematically disadvantage groups based on age, gender, race, nationality, religion, sexuality, or geography.",
      "Today this work is done manually. A reviewer reads content, applies their own judgement, and makes a call. This process has three critical failure modes: inconsistency (two reviewers assess the same content differently with no shared rubric), scale (manual review cannot handle 50,000 items per week), and blind spots (human reviewers have their own biases — without a structured detection layer, systematic bias in content can go undetected for months).",
      "The result: media companies face regulatory risk under Ofcom and the Online Safety Act 2023, reputational damage, and advertiser pressure — without the tooling to demonstrate they are actively auditing for bias.",
    ],
    keyInsight: "The Online Safety Act 2023 places a duty of care on platforms to protect users from harmful content. Ofcom can fine companies up to £18 million or 10% of global annual turnover for failures. The BBC Editorial Guidelines require content to treat audiences with respect and avoid unjustified harm — covering exactly the demographic, gender, racial, religious, and geographic bias categories this system detects. A trust and safety team that cannot demonstrate structured, auditable bias review is exposed — regardless of how good their intentions are.",
  },
  solution: {
    description: "A hybrid AI system that gives trust and safety analysts a structured, explainable, auditable bias detection layer — so they can make faster, more consistent, and more defensible content moderation decisions at scale. The human always decides. The system never acts autonomously.",
    architectureDiagram: `<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="450" src="https://embed.figma.com/design/Il9EtBpMuGYk4MA0K7LSjS/System-Architecture-%E2%80%94-Bias-Audit-Dashboard?node-id=0-1&embed-host=share" allowfullscreen></iframe>`,
    features: [
      {
        icon: <Code className="w-5 h-5" />,
        title: "Tiered Routing Architecture",
        description: "Three-tier classification pipeline: Tier 1 (≤2 words) auto-approves at zero cost. Tier 2 (4–15 words) routes to Claude API for semantic classification — handles short text that TF-IDF cannot reliably classify. Tier 3 (>15 words) runs the full XGBoost + SHAP pipeline. Cost and accuracy matched to input complexity.",
      },
      {
        icon: <Lightbulb className="w-5 h-5" />,
        title: "SHAP Word-Level Explainability",
        description: "Every verdict includes SHAP highlights showing the specific words that triggered the classification. A trust and safety analyst can see exactly which words drove the score — not just a number. This is the difference between a tool reviewers trust and one they ignore.",
      },
      {
        icon: <Shield className="w-5 h-5" />,
        title: "Comment Moderation Simulator",
        description: "Live two-panel interface: public feed on the left (comments post instantly), moderation queue on the right (bias analysis appears with Approve/Flag/Remove actions). Demonstrates the full human-in-the-loop workflow in under 30 seconds — the exact demo moment that lands in interviews.",
      },
    ],
  },
  phases: [
    {
      title: "Phase 0: PM Artefacts",
      description: "Written before a single line of code. Opportunity Assessment, PRD with functional requirements (FR-01 through FR-06), Ethics Framework, and Competitive Analysis.",
      deliverables: [
        "Opportunity Assessment: problem definition, user persona, hypothesis",
        "PRD: 6 feature areas, P0/P1 priorities, API specification, success metrics",
        "Ethics Framework: 8 sections including regulatory context (OSA 2023, Ofcom, UK GDPR)",
        "Competitive Analysis: 5 competitors profiled, positioning matrix, defensible position statement",
      ],
      techStack: ["Notion", "Markdown", "PM Frameworks"],
    },
    {
      title: "Phase 1: Data & Model",
      description: "Generated 3,000 synthetic UK media content items using Claude API. Trained TF-IDF + XGBoost classifier. Iterated on training data design when demographic_bias and racial_bias categories overlapped — a data quality decision, not a model tuning decision.",
      deliverables: [
        "3,000 synthetic examples across 6 categories (500 per category, 60/40 clear/subtle split)",
        "80/20 stratified train/test split — 400 train, 100 test per category",
        "TF-IDF vectoriser: 50,000 features, bigrams, sublinear TF",
        "XGBoost classifier: 300 estimators, inverse frequency sample weights",
        "F1 0.90 overall — all 6 categories above 0.78 threshold",
        "SHAP TreeExplainer: word-level feature importance per prediction",
      ],
      techStack: ["Python", "scikit-learn", "XGBoost", "SHAP", "Claude API", "pandas"],
      metrics: [
        { name: "demographic_bias F1", baseline: "0.65 (first attempt)", optimized: "0.89", improvement: "Prompt redesign" },
        { name: "racial_bias F1", baseline: "0.65 (first attempt)", optimized: "0.87", improvement: "Journalism framing" },
        { name: "Overall F1", baseline: "N/A", optimized: "0.90", improvement: "All categories above 0.78" },
      ],
    },
    {
      title: "Phase 2: FastAPI Backend",
      description: "Five endpoints deployed to Render. Tiered routing architecture implemented in predictor.py — the key architectural decision driven by both cost analysis and responsible AI principles.",
      deliverables: [
        "POST /api/analyse — tiered routing, returns score/category/confidence/shap_values/tier",
        "POST /api/explain — Claude API plain English explanation with original content passed to prevent hallucination",
        "GET /api/audit — aggregate fairness metrics from synthetic dataset",
        "GET /api/audit/history — Supabase audit log",
        "GET /health — cold start wake for Render free tier",
      ],
      techStack: ["FastAPI", "Python", "Anthropic SDK", "Supabase", "Render"],
    },
    {
      title: "Phase 3: Next.js Frontend",
      description: "Three screens deployed to Vercel. ATANDA Studio design system applied: dark #0D0D0D background, amber #E8C547 accent, ALL CAPS labels, 2px radius, Tailwind v4.",
      deliverables: [
        "Screen 1: Live Content Analyser — chat input, result cards with SHAP highlights",
        "Screen 2: Simulator — two-panel comment moderation with live feed and queue",
        "Screen 3: Audit Dashboard — F1 score bars, fairness health indicator, flag rates chart",
        "Cold start handling: silent health ping, WARMING UP state",
        "Deployed: https://bias-audit-dashboard.vercel.app",
      ],
      techStack: ["Next.js 15", "TypeScript", "Tailwind v4", "Recharts", "Vercel"],
    },
  ],
  data: {
    dataDict: [
      { feature: "content", type: "string", description: "UK media content item — headline, social post, video description, or article excerpt", source: "Claude API generation" },
      { feature: "label", type: "binary (0/1)", description: "0 = neutral, 1 = biased (any non-neutral category)", source: "Derived from category" },
      { feature: "category", type: "categorical (6)", description: "demographic_bias, gender_stereotyping, racial_bias, religious_bias, geographic_bias, neutral", source: "Claude API labelling" },
      { feature: "confidence_ground_truth", type: "float (0.70–0.99)", description: "How clear-cut the example is. Clear examples: 0.85–0.99. Subtle/ambiguous: 0.70–0.84", source: "Designed by difficulty tier" },
      { feature: "split", type: "categorical (train/test)", description: "Stratified 80/20 split — 400 train, 100 test per category", source: "Assigned at generation time" },
    ],
    methodology: "Generated 3,000 synthetic UK media content items using Claude API (claude-haiku-4-5). Six categories, 500 items each, with a deliberate 60/40 clear/subtle difficulty split. Neutral examples were specifically designed to reference the same groups and topics as biased categories — to force the model to learn the bias signal, not just the topic. When demographic_bias and racial_bias overlapped (both scoring F1 0.65 on first attempt), the fix was not model tuning — it was redesigning the generation prompts to create sharper category boundaries. This is a PM decision, not a data science one.",
    validationMethods: [
      "Stratified 80/20 train/test split — 400 train, 100 test per category",
      "F1 score per category with explicit 0.78 threshold from PRD",
      "Fairness constraint: no category flagged at more than 2× the rate of any other",
      "Manual validation: 50 test cases reviewed for explanation accuracy",
      "SHAP validation: top feature words checked against domain knowledge",
    ],
  },
  results: {
    heroMetric: { value: "0.90", label: "Overall F1 score across all 6 bias categories — all above the 0.78 PRD threshold" },
    comparisons: [
      { metric: "demographic_bias F1", before: "0.65 (first attempt)", after: "0.89", change: "Prompt redesign" },
      { metric: "racial_bias F1", before: "0.65 (first attempt)", after: "0.87", change: "Journalism framing" },
      { metric: "geographic_bias F1", before: "N/A", after: "0.92", change: "Within threshold" },
      { metric: "Fairness disparity ratio", before: "Unknown", after: "1.00× (perfect)", change: "Constraint satisfied" },
      { metric: "Explanation accuracy", before: "Hallucinated context", after: "Content-grounded", change: "Fixed by passing original content" },
      { metric: "Short text accuracy", before: "99% false positives", after: "Semantic via Claude API", change: "Tiered routing" },
    ],
    keyInsights: [
      "The model improvement from F1 0.65 to 0.89 on demographic_bias came from redesigning the training prompts, not tuning the model. This is the core PM insight: data quality is a product decision. The model learns what the data shows — if the data conflates two categories, no amount of hyperparameter tuning will fix it.",
      "The tiered routing architecture was driven by a business and ethics decision, not a technical one. TF-IDF + XGBoost produces high-confidence false positives on short text — 'you are a christian' scoring 99% HIGH RISK religious bias. The cost of a wrong high-confidence verdict (regulatory risk, reviewer trust collapse) is orders of magnitude higher than the cost of a Claude API call (£0.0003).",
      "Geographic bias misclassifies when the bias is carried by adjectives rather than location nouns. 'People from the north of England lack ambition' scores as NEUTRAL because the model sees no geographic trigger words — the bias is in 'lack ambition', not 'north of England'. The Claude explanation layer correctly identifies this as a model failure and tells the reviewer to flag it manually. This is the hybrid architecture working as designed.",
      "The fairness disparity ratio of 1.00× means every category is flagged at exactly the same rate. This is a product outcome, not a coincidence — the dataset was deliberately balanced at 500 items per category, and the PRD specified a 2× maximum disparity as a hard constraint.",
    ],
  },
  ethics: {
    introduction: "This project applies responsible AI principles from the ground up — not as documentation added after the build, but as design constraints that shaped architectural decisions. Drawing on Cathy O'Neil's Weapons of Math Destruction: a model is dangerous when it is opaque, operates at scale, and causes harm to the people it scores. Every decision in this system was made to be the opposite.",
    principles: [
      { title: "Human Agency is Non-Negotiable", description: "The system never makes a content decision. Every result requires an explicit reviewer action: Approve, Flag, or Escalate. There is no auto-remove. The system cannot suppress or publish content on its own. This is an ethical constraint embedded in the architecture, not a UX choice." },
      { title: "Explainability is a Right", description: "A reviewer who cannot understand why content was flagged cannot make a defensible decision. Every result includes SHAP word highlights, a plain English Claude explanation, and a confidence score. The reviewer must be able to read the explanation and either agree or override it with full understanding." },
      { title: "Uncertainty Must Be Communicated Honestly", description: "The model is not certain. Confidence scores are shown prominently on every result. Low-confidence verdicts are visually distinct. The tiered routing architecture was implemented specifically because showing a 99% HIGH RISK verdict on neutral content violates this principle — false certainty is more dangerous than acknowledged uncertainty." },
      { title: "Synthetic Data is a Deliberate Privacy Choice", description: "No real user content is stored or processed. The model learns patterns, not individuals. This is documented as a deliberate product decision in MODEL_DECISIONS.md — not a shortcut." },
    ],
    guardrails: [
      { rule: "Human reviewer always required", threshold: "No auto-approve, no auto-remove", rationale: "Removal without human review is censorship without accountability" },
      { rule: "Confidence shown on every verdict", threshold: "Always visible in UI", rationale: "Reviewers must know how certain the model is before acting on it" },
      { rule: "Short text routes to Claude, not XGBoost", threshold: "4–15 words via Tier 2", rationale: "False high-confidence verdicts destroy reviewer trust and create compliance risk" },
      { rule: "No real user content stored in v1", threshold: "Synthetic data only", rationale: "Privacy by design — no DPIA required for v1" },
    ],
    biasAuditDescription: "Fairness metric computed using the dataset directly: disparity ratio (max flag rate / min flag rate across categories) = 1.00× — no category is flagged at a disproportionate rate. Computed in audit.py using pandas. Fairlearn integration (demographic parity, equal opportunity, predictive parity, individual fairness) is planned for v2. Known limitation: geographic_bias is misclassified when bias is carried by adjectives rather than location nouns. Documented in MODEL_DECISIONS.md.",
  },
  competitive: {
    introduction: "The bias detection and content moderation market has enterprise tools (Hive, Jigsaw Perspective API) and AI governance platforms (Fairly AI). None are designed for the trust and safety analyst workflow at UK media companies. The defensible position is the intersection of text-level bias detection, word-level explainability, human-in-the-loop reviewer workflow, and UK regulatory framing.",
    competitors: [
      { feature: "Text bias detection (6 categories)", ours: true, compA: false, compB: false },
      { feature: "SHAP word-level explainability", ours: true, compA: false, compB: false },
      { feature: "Plain English explanation", ours: true, compA: false, compB: true },
      { feature: "Human reviewer action workflow", ours: true, compA: false, compB: false },
      { feature: "UK regulatory framing (OSA, Ofcom)", ours: true, compA: false, compB: false },
      { feature: "Audit log for compliance reporting", ours: true, compA: false, compB: true },
    ],
    competitorAName: "Perspective API (Google)",
    competitorBName: "Fairly AI",
    positioningStatement: "The only tool designed specifically for the trust and safety analyst workflow at UK media companies — combining text-level bias detection, SHAP explainability, a human-in-the-loop reviewer workflow, and an audit log exportable for Ofcom compliance reporting.",
  },
  okrs: {
    objective: "Demonstrate responsible AI product management capability through a shipped, production-grade bias detection system that is technically sound, ethically grounded, and commercially relevant to UK media compliance requirements",
    keyResults: [
      { kr: "Achieve F1 > 0.78 on all 6 bias categories", progress: 100, target: "F1 > 0.78 per category" },
      { kr: "Implement human-in-the-loop architecture with no auto-remove capability", progress: 100, target: "Human always decides" },
    ],
    successMetrics: [
      { metric: "Overall F1 Score", target: "> 0.78 all categories", achieved: "0.90 — all 6 above threshold", status: "Achieved" as const },
      { metric: "Fairness disparity ratio", target: "< 2×", achieved: "1.00× — constraint satisfied", status: "Achieved" as const },
      { metric: "Live demo", target: "Public URL", achieved: "bias-audit-dashboard.vercel.app", status: "Achieved" as const },
      { metric: "PM artefacts", target: "5 documents", achieved: "5 shipped before build started", status: "Achieved" as const },
    ],
  },
  roadmap: {
    milestones: [
      {
        phase: "Now",
        items: [
          { title: "TF-IDF + XGBoost classifier — F1 0.90 across 6 categories" },
          { title: "Tiered routing: Tier 1 (free), Tier 2 (Claude API), Tier 3 (XGBoost + SHAP)" },
          { title: "Live Content Analyser + Comment Moderation Simulator" },
          { title: "Audit Dashboard with fairness metrics" },
          { title: "Deployed: bias-audit-dashboard.vercel.app" },
        ],
        status: "completed" as const,
      },
      {
        phase: "Next",
        items: [
          { title: "Supabase audit log with full session persistence" },
          { title: "Magic link auth for B2B trial access" },
          { title: "PDF export of audit log for Ofcom reporting" },
          { title: "Retrain geographic_bias to catch adjective-based bias patterns" },
        ],
        status: "in-progress" as const,
      },
      {
        phase: "Later",
        items: [
          { title: "Fine-tune on real UK media content (with consent)" },
          { title: "Bulk upload / batch processing for large content queues" },
          { title: "Real-time stream monitoring for live broadcast" },
          { title: "Sentence transformer upgrade for better semantic understanding" },
        ],
        status: "planned" as const,
      },
    ],
  },
  learnings: {
    wentWell: [
      "Writing PM artefacts before any code forced clarity on what the product needed to do — the PRD's 0.78 F1 threshold became a real design constraint that shaped dataset generation, not a metric added at the end",
      "The hybrid architecture decision (ML for detection, Claude for explanation) was made on day one and proved correct — the two layers have different strengths and the product is better for keeping them separate",
      "The tiered routing architecture came from a genuine product problem (short text false positives) and was justified on business and ethics grounds before any code was written — that's the right order",
    ],
    challenges: [
      "The first attempt at demographic_bias and racial_bias both scored F1 0.65 — not because the model was wrong, but because the training data created overlapping categories. The fix was redesigning the generation prompts, not tuning the model. This took a full iteration cycle to diagnose correctly.",
      "The explain endpoint initially hallucinated context because it only received the score and category — not the original content. The fix (passing content to the explain endpoint) was obvious in retrospect but took seeing a bad explanation in production to identify.",
      "Geographic bias remains a known failure mode: 'People from the north of England lack ambition' scores as NEUTRAL because the bias is in the adjectives, not the location noun. TF-IDF sees tokens, not semantic relationships. Documented honestly in MODEL_DECISIONS.md.",
    ],
    doDifferently: [
      "Test the explanation endpoint with real edge cases before shipping — the hallucination bug would have been caught in 10 minutes of manual testing",
      "Design bias category boundaries explicitly before generating training data — the demographic/racial overlap cost a full iteration cycle that upfront design would have prevented",
      "Build the simulator earlier — it became the most compelling demo feature but was added last",
    ],
    keyTakeaway: "The model improved from F1 0.65 to 0.89 on the hardest categories by changing the training data, not the algorithm. Data quality is a product decision. The model learns exactly what the data shows — and if the data conflates two categories, no amount of hyperparameter tuning will teach the model to tell them apart.",
  },
  contact: {
    pitch: "I am actively seeking Junior AI PM / Technical PM roles at companies building AI-powered products in media, trust and safety, e-commerce, or consumer applications. My background in sociology and anthropology combined with an MSc in Managing AI in Business gives me a perspective on responsible AI that most technical candidates don't have. Let's connect.",
    email: "osaheniogbebor.c@gmail.com",
    linkedIn: "https://www.linkedin.com/in/osaheni-o-94565421a/",
    github: "https://github.com/aiirveon",
    calendlyUrl: undefined,
    authorName: "Ogbebor Osaheni",
  },
}

export default function BiasAuditDashboardProject() {
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
          keyInsight={projectData.problem.keyInsight}
        />
        <SolutionSection
          description={projectData.solution.description}
          features={projectData.solution.features}
          architectureDiagram={projectData.solution.architectureDiagram}
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
        <RoadmapSection milestones={projectData.roadmap.milestones} />
        <LearningsSection
          wentWell={projectData.learnings.wentWell}
          challenges={projectData.learnings.challenges}
          doDifferently={projectData.learnings.doDifferently}
          keyTakeaway={projectData.learnings.keyTakeaway}
        />
        <PmArtefactsSection projectArtefacts={[
          { name: "PRD — Bias Audit Dashboard", artefactId: "bias-audit-prd", project: "bias-audit" },
          { name: "Model Decisions — Bias Audit Dashboard", artefactId: "bias-audit-model-decisions", project: "bias-audit" },
          { name: "Ethics Framework — Bias Audit Dashboard", artefactId: "bias-audit-ethics", project: "bias-audit" },
        ]} />

        <ContactSection {...projectData.contact} />
      </main>
    </div>
  )
}
