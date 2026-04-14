import { Shield, FileText, TrendingUp, Zap, Lock, BookOpen, BarChart3, AlertTriangle, CheckCircle, Users } from "lucide-react"
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
  RiskRegisterSection,
} from "@/components/portfolio"
import { PmArtefactsSection } from "@/components/portfolio/pm-artefacts-section"

// ============================================================================
// PROJECT DATA - TrueCase: AI-Powered Business Case Builder
// ============================================================================

const projectData = {
  // Hero Section
  hero: {
    projectName: "TrueCase",
    tagline: "AI-powered business case builder for AI investments — generates governance-adjusted ROI projections with a reliability score, UK regulatory citations, and a Claude-powered three-section narrative grounded entirely in a verified knowledge base.",
    status: "Shipped",
    author: "Ogbebor Osaheni",
    date: "April 2026",
    demoUrl: "https://truecase-seven.vercel.app/",
    githubUrl: undefined,
    heroImage: undefined,
  },

  // Executive Summary
  summary: {
    description: "TrueCase bridges the gap between financial optimism and regulatory reality in AI investment decisions. A four-stage guided flow — contextual questionnaire, governance assessment gate, financial projections, and AI narrative export — produces a business case built on two projections: the headline ROI and the governance-adjusted ROI. The gap between them is the product. Zero user data is retained. Every governance claim traces to a primary UK regulatory source. Every Claude-generated sentence is constrained to a verified knowledge base — not Claude's training data.",
    metrics: [
      { icon: <Shield className="w-5 h-5" />, value: "6", label: "Governance elements", description: "Each KB-backed with UK regulatory citations and weighted reliability deductions" },
      { icon: <FileText className="w-5 h-5" />, value: "3", label: "Narrative sections", description: "Business Case Summary, Governance Assessment, Social Return Signal" },
      { icon: <Lock className="w-5 h-5" />, value: "0", label: "Bytes retained", description: "Stateless by design — no database, localStorage, cookies, or logging" },
      { icon: <BookOpen className="w-5 h-5" />, value: "3", label: "Knowledge bases", description: "governance-kb.json, benchmarks.json, sdg-kb.json — all verified April 2026" },
    ],
  },

  // Problem Statement
  problem: {
    paragraphs: [
      "Business cases for AI investments tend to be optimistic. Governance gaps — missing human oversight, undocumented training data, no audit trail — are treated as implementation details rather than financial risks. The result is a board deck that shows £2.4M annual gain while quietly ignoring that the system has no regulatory compliance map and may trigger a GDPR enforcement action that erases that gain entirely.",
      "Finance teams want ROI projections. Compliance teams want governance verification. These conversations happen in separate rooms, in different languages, with different tooling. There is no shared instrument that lets both teams look at the same number and ask: 'How confident should we be in this?'",
      "The challenge is not technical — ROI calculators exist, and compliance checklists exist. The barrier is product thinking: how do you build a tool that makes governance maturity visible as a financial variable, not a post-hoc audit finding? How do you ground AI-generated narrative in verified regulatory sources rather than confident-sounding hallucination? How do you do this without storing any of the sensitive business data the user just typed in?",
    ],
    keyInsight: "The governance gap between headline ROI and governance-adjusted ROI is not a failure state — it is the most valuable thing TrueCase shows. When a user's reliability score is 45% because three governance elements are missing, their real ROI projection is 45% of what they thought it was. That is not a discouragement. That is a roadmap.",
  },

  // User Personas
  personas: {
    introduction: "TrueCase is designed for three distinct user archetypes, each arriving at the tool with a different job-to-be-done. The product must serve all three without asking them to self-identify — the guided questionnaire (Q1: decision type, Q4: sector) routes each user to the right regulatory context automatically.",
    basic: [
      {
        name: "Internal AI PM",
        role: "AI Product Manager seeking budget approval at a UK enterprise",
        age: "34",
        techComfort: "High",
        goals: [
          "Build a board-ready business case that finance and compliance will both sign off",
          "Anticipate governance objections before the presentation, not during it",
          "Show that the AI investment has been assessed against UK regulatory requirements",
        ],
        painPoints: [
          "Finance wants a number. Compliance wants a framework. They are never in the same room.",
          "ROI calculators give optimistic projections but no governance context — useless for regulated sectors",
          "Writing business cases from scratch is slow; writing defensible ones is slower",
        ],
        quote: "My CFO will ask what happens if this triggers a GDPR audit. My answer right now is 'we'll deal with it.' I need a better answer before next Thursday's board meeting.",
      },
      {
        name: "Startup Founder",
        role: "Founder pitching institutional investors or enterprise buyers for an AI product",
        age: "30",
        techComfort: "High",
        goals: [
          "Show investors that governance risk has been identified and mitigated, not ignored",
          "Produce a formal, credible ROI document that survives a due diligence review",
          "Demonstrate regulatory awareness to enterprise buyers in financial services or healthcare",
        ],
        painPoints: [
          "Investor due diligence now routinely asks about AI governance — founders are unprepared",
          "Enterprise buyers in regulated sectors will not sign without evidence of compliance mapping",
          "No time or budget to commission a formal governance audit at seed or Series A stage",
        ],
        quote: "The VC asked me about our governance maturity. I didn't have a good answer. I need to be able to show that I've thought about this seriously before the next meeting.",
      },
      {
        name: "Enterprise Buyer",
        role: "Technology Director or Procurement Lead stress-testing an AI vendor's ROI claim",
        age: "47",
        techComfort: "Medium",
        goals: [
          "Audit a vendor's ROI projection against independent governance criteria",
          "Produce a governance gap assessment as part of the procurement process",
          "Justify the purchase (or rejection) to legal, compliance, and the board",
        ],
        painPoints: [
          "Vendor ROI claims are always optimistic and never mention governance dependencies",
          "No neutral tool exists to run a vendor's numbers through an independent governance filter",
          "Procurement decisions in regulated sectors carry personal liability — need defensible documentation",
        ],
        quote: "Every vendor says their AI will save us £1.2M a year. None of them tell me that's only true if we have a Human Review Requirement and a Decision Audit Trail in place — which we don't.",
      },
    ],
  },

  // Solution Overview
  solution: {
    description: "TrueCase is a four-layer product that flows top to bottom: a contextual questionnaire sets regulatory exposure; a governance assessment gate scores maturity against six KB-backed elements; financial projection cards show headline and reliability-adjusted ROI side by side; and a Claude-generated three-section business case narrative — grounded in verified knowledge base entries, not Claude's training data — is exported as PDF or HTML. Nothing is stored. Every claim is traceable.",
    features: [
      {
        icon: <Zap className="w-5 h-5" />,
        title: "Contextual Questionnaire (4 Questions)",
        description: "Decision type, data type, scale, and sector questions route users to the right governance context — triggering sector-specific regulatory anchors, benchmark ranges from benchmarks.json, and auto-confirmation of Element 6 when no personal data is involved.",
      },
      {
        icon: <Shield className="w-5 h-5" />,
        title: "Governance Assessment Gate",
        description: "Six governance elements from governance-kb.json, each with a 3-state toggle (Confirmed / Partial / Missing), regulatory citations sorted by sector priority, consequence text from the KB, and weighted deductions that compose the reliability score (0–100%).",
      },
      {
        icon: <BarChart3 className="w-5 h-5" />,
        title: "Reliability-Adjusted Projections",
        description: "Six financial output cards, always rendered with headline and reliability-adjusted gain at identical size. The governance gap — the difference between the two — is always visible. Not a warning. A number.",
      },
      {
        icon: <FileText className="w-5 h-5" />,
        title: "AI Narrative + Export",
        description: "Claude Sonnet 4 generates three sections (Business Case Summary, Governance Assessment, Social Return Signal) grounded in governance-kb.json, benchmarks.json, and sdg-kb.json. Exported as a 3-page PDF or standalone HTML file. All inputs discarded immediately after generation.",
      },
    ],
  },

  // Technical Implementation Phases
  phases: [
    {
      title: "Phase 1: Knowledge Base & Design System",
      description: "Built the verified knowledge base (governance-kb.json, benchmarks.json, sdg-kb.json) and established the single-source-of-truth design token system in styles/tokens.css. All downstream components reference tokens only — no hardcoded values.",
      deliverables: [
        "governance-kb.json: 6 governance elements with regulatory anchors, reliability deductions, and consequence text",
        "benchmarks.json: sector-specific financial benchmark ranges sourced from FCA reports, Ofcom research, and GDPR enforcement records",
        "sdg-kb.json: Q1 × Q4 SDG mappings with governance dependencies and negative conditions",
        "styles/tokens.css: single source of truth for all color, spacing, typography, and radius tokens",
        "tailwind.config.ts: full token extension from CSS variables",
      ],
      techStack: ["TypeScript", "Tailwind CSS", "CSS Custom Properties"],
    },
    {
      title: "Phase 2: Guided Input (4-Question Questionnaire)",
      description: "Built the dialogue-style guided input — four sequential questions (decision type, data type, scale, sector) each with immediate contextual feedback, followed by a rule-based plain English summary identifying the two most critical governance elements for the use case. Financial input form with sector-specific benchmark hints follows the summary.",
      deliverables: [
        "Q1 (decision type): 4 options with regulatory exposure feedback and governance element routing",
        "Q2 (data type): personal/aggregated/operational/public — triggers auto-confirmation of Element 6 if non-personal",
        "Q3 (scale): four scale bands calibrating regulatory scrutiny expectations",
        "Q4 (sector): 9 sectors linking to sector-specific regulatory frameworks (FCA, Online Safety Act, Ofcom Code, etc.)",
        "Rule-based summary stage: identifies two most critical governance elements for the use case without an API call",
        "Financial input form: 6 fields with dynamic benchmark hints sourced from benchmarks.json",
      ],
      techStack: ["React 19", "TypeScript", "Next.js 15 App Router", "Tailwind CSS"],
    },
    {
      title: "Phase 3: Governance Gate + Projection Cards",
      description: "Built the accordion governance assessment gate and the six financial projection cards. The reliability score — computed from KB element deductions, never hardcoded — adjusts the headline ROI projection. Governance gap is always visible.",
      deliverables: [
        "GovernanceGate.tsx: accordion for 6 elements, 3-state toggle, context notes, auto-confirm for Element 6",
        "Reliability score calculation: sum of KB deductions per missing/partial element, displayed as % with green/amber/red band colouring",
        "Regulatory citations: sorted by sector priority (Q4 answer), max 2 per element, linking to legislation.gov.uk",
        "ProjectionCards.tsx: 6 financial cards — projected gain, reliability-adjusted gain, cost of inaction, net gain, ROI%, break-even",
        "Non-negotiable UI rule: headline and adjusted gain cards always rendered at identical width and height",
      ],
      techStack: ["React 19", "TypeScript", "Next.js 15 App Router", "Tailwind CSS"],
    },
    {
      title: "Phase 4: Claude Narrative + Export + Deployment",
      description: "Built the AI narrative generation route (POST /api/generate-narrative) with a strict system prompt constraining Claude to KB sources, the PDF export route (POST /api/generate-pdf) using @react-pdf/renderer server-side, the HTML export client-side, and deployed to Vercel.",
      deliverables: [
        "POST /api/generate-narrative: Claude Sonnet 4, max 1500 tokens, strict system prompt referencing KB entries and user inputs only",
        "Three narrative sections: Business Case Summary (200–250 words), Governance Assessment (150–200 words), Social Return Signal (100–150 words)",
        "POST /api/generate-pdf: server-side 3-page PDF via @react-pdf/renderer — all inputs discarded immediately after file stream",
        "HTML export: client-side blob download, same content as PDF with responsive table layout",
        "Grounding disclosure and AI-generated label always visible around the narrative output",
        "Vercel deployment: https://truecase-seven.vercel.app",
      ],
      techStack: ["Anthropic SDK 0.85.0", "Claude Sonnet 4", "@react-pdf/renderer 4.4.0", "Next.js API Routes", "Vercel"],
    },
  ],

  // Data & Methodology (repurposed as Knowledge Base Schema)
  data: {
    dataDict: [
      { feature: "hard_output_cap", type: "boolean (confirmed / partial / missing)", description: "Hard, non-configurable maximum on AI outputs. Missing: -25 reliability points. Partial: -12. The single highest-weighted element — output without a ceiling can cause catastrophic harm at scale.", source: "governance-kb.json (UK AI Act signals, ICO guidance)" },
      { feature: "human_override", type: "boolean (confirmed / partial / missing)", description: "Human review required before any AI decision takes effect. Missing: -20 reliability points. Partial: -10. Automation without override creates accountability gaps under GDPR Article 22.", source: "governance-kb.json (GDPR Article 22, FCA Consumer Duty)" },
      { feature: "explainability", type: "boolean (confirmed / partial / missing)", description: "Decision audit trail with plain English explanation available within 24 hours of request. Missing: -15 reliability points. Partial: -7. Required for right-to-explanation obligations.", source: "governance-kb.json (GDPR Article 22, Ofcom Broadcasting Code)" },
      { feature: "regulation_identified", type: "boolean (confirmed / partial / missing)", description: "All applicable UK regulations identified and formally mapped. Missing: -20 reliability points. Partial: -10. Unmapped regulation creates silent liability that compounds over time.", source: "governance-kb.json (sector-specific: FCA, Online Safety Act, ICO)" },
      { feature: "training_data_documented", type: "boolean (confirmed / partial / missing)", description: "Training data source, known limitations, and drift detection plan documented. Missing: -10 reliability points. Partial: -5. Undocumented data provenance is a due diligence failure in any regulated sector.", source: "governance-kb.json (ICO AI Auditing Framework)" },
      { feature: "personalisation_boundary", type: "boolean (auto-confirmed if Q2 ≠ personal)", description: "Policy defining where personalisation ends and surveillance begins. Missing: -10 reliability points. Partial: -5. Auto-confirmed if user indicated no personal data in Q2 — only applies to personal data processing.", source: "governance-kb.json (UK GDPR, ICO guidance on profiling)" },
    ],
    methodology: "The reliability score is computed as a weighted deduction sum from governance-kb.json. It starts at 100% and subtracts the element's reliability_reduction_missing for each missing element, or reliability_reduction_partial for each partial. The final score ranges from 0% (all elements missing) to 100% (all confirmed). This score is then applied as a multiplier to the headline ROI projection: Reliability-Adjusted Gain = Projected Gain × (reliability_score / 100). The reliability score is not a compliance grade — it is a financial variable. A 60% score on a £2M projected gain means the governance-adjusted figure is £1.2M. The £800k gap is the governance risk made visible as money. All financial benchmark ranges in benchmarks.json are sourced from primary UK regulatory documents (legislation.gov.uk, FCA reports, Ofcom research) and marked as 'verified' or 'illustrative range' with source URLs. SDG mappings in sdg-kb.json are derived from UN SDG target documentation and cross-referenced against Q1 (decision type) and Q4 (sector) combinations.",
    validationMethods: [
      "All regulatory anchors in governance-kb.json link to legislation.gov.uk or official regulatory body publications — no secondary sources",
      "Sector-specific benchmark ranges in benchmarks.json sourced from primary FCA reports, Ofcom research, and GDPR enforcement records — all marked with source URL and verification status",
      "Claude system prompt explicitly constrains output to KB entries and user inputs: banned from adding claims beyond verified sources, banned from 'leveraging', 'synergies', or other filler assertions",
      "Self-assessment disclaimer always visible: 'TrueCase cannot verify these answers' — no false authority claimed for governance gate outputs",
      "PDF and HTML exports include KB version, generation date, and liability disclaimer on every page",
    ],
  },

  // Results
  results: {
    heroMetric: { value: "100%", label: "of governance reliability deductions traceable to specific UK regulatory clauses — no arbitrary scoring" },
    comparisons: [
      { metric: "Headline ROI vs Governance-Adjusted ROI", before: "Single optimistic projection", after: "Two projections, always same size — governance gap always visible", change: "Enforced by design" },
      { metric: "Regulatory citations per element", before: "Generic compliance advice", after: "Up to 2 citations, sorted by sector priority, linked to legislation.gov.uk", change: "KB-sourced" },
      { metric: "Claude output grounding", before: "Training data (unverifiable)", after: "governance-kb.json + user inputs only — no KB entry = no claim", change: "Constrained by system prompt" },
      { metric: "Data retained per session", before: "Typical: user data logged or stored", after: "0 bytes — all inputs discarded after response", change: "Stateless by architecture" },
      { metric: "Export completeness", before: "Copy-paste from a calculator", after: "3-page PDF or standalone HTML: summary, governance table, SDG alignment", change: "Board-ready" },
      { metric: "Governance element auto-confirmation", before: "User must manually assess all elements", after: "Element 6 (Data Boundary) auto-confirmed when Q2 indicates no personal data", change: "Rule-based, not guessed" },
    ],
    keyInsights: [
      "The reliability score is a financial variable. A 60% score on a £2M projected gain means the governance-adjusted ROI is £1.2M. The £800k governance gap is not a warning label — it is an asset: it shows exactly what is at risk if governance controls are not in place before deployment.",
      "Grounding Claude in governance-kb.json rather than its training data was the correct product decision for a governance tool. The KB entries are versioned, verifiable, and linked to primary sources. Claude's training data is not. Every sentence in the business case narrative either traces to a KB entry or to the user's own financial inputs — there is no third option.",
      "Zero data retention is a product feature, not just a compliance requirement. Business cases contain sensitive financial projections, strategic context, and regulatory exposure assessments. Users in enterprise and founder contexts have genuine reasons not to trust cloud-stored inputs. Stateless-by-architecture is the only credible privacy guarantee.",
      "The rule-based summary after Q1–Q4 (identifying the two most critical governance elements for the use case) requires no API call and sets the governance context before the user opens a single accordion element. It is the most leverage-per-line-of-code in the product — a sector-specific plain English analysis from four dropdown selections.",
      "Auto-confirming Element 6 (Data Boundary) when Q2 indicates no personal data was a deliberate UX and product decision. Asking users to confirm governance elements that structurally do not apply to their use case erodes trust in the scoring model. The KB governs the logic; TrueCase enforces it.",
    ],
  },

  // Ethics
  ethics: {
    introduction: "TrueCase's ethical commitments are architectural, not aspirational. Privacy by design means the system physically cannot retain data — there are no write operations to a persistence layer. Grounded generation means Claude cannot add governance claims beyond what the verified KB and user inputs supply. Self-assessment transparency means the reliability score is always accompanied by a disclaimer that TrueCase cannot verify the answers the user provided.",
    principles: [
      { title: "Privacy by Design", description: "No database, localStorage, sessionStorage, cookies, or server-side logging. The PDF API route processes inputs, generates the file stream, and discards all data immediately. Stateless architecture is enforced at code level — not policy level." },
      { title: "Grounded Generation", description: "Claude Sonnet 4's system prompt explicitly prohibits adding factual claims beyond governance-kb.json and user inputs. Regulatory citations must come from KB entries. Financial figures must come from user inputs. SDG mappings must come from sdg-kb.json. There is no fallback to training data." },
      { title: "Self-Assessment Transparency", description: "The grounding disclosure is always visible above the generate button. The AI-generated label is always shown after narrative output. The self-assessment disclaimer ('TrueCase cannot verify these answers') appears at the reliability score. Three separate honesty markers, none optional." },
      { title: "Uniform Scoring", description: "The reliability score formula is deterministic and public: start at 100%, subtract KB-specified deductions per element status. No demographic data used. No sector weighting in the score calculation. Identical governance configurations produce identical reliability scores regardless of who is using the tool." },
    ],
    guardrails: [
      { rule: "Claude Output Scope", threshold: "KB + user inputs only", rationale: "Prevents hallucinated governance claims. Every factual assertion in the narrative must trace to governance-kb.json, benchmarks.json, sdg-kb.json, or the user's own inputs." },
      { rule: "Data Retention", threshold: "0 bytes per session", rationale: "No write operations to any persistence layer. PDF and HTML generation uses inputs only within the server-side request lifecycle — all discarded on response." },
      { rule: "Regulatory Citation Source", threshold: "Primary sources only", rationale: "All UK regulations cited to legislation.gov.uk or official regulatory body publications. Secondary sources and general assertions excluded from KB at verification stage." },
      { rule: "Narrative Banned Language", threshold: "Prohibited: 'leveraging', 'synergies', 'driving value', 'unlock potential'", rationale: "Filler corporate language without substantive meaning is explicitly banned in the Claude system prompt — reinforcing the product's credibility commitment." },
    ],
    biasAuditDescription: "No user demographic data is used in any calculation. The reliability score is a function of governance element statuses only — identical inputs produce identical scores for all users. Sector-specific benchmark ranges in benchmarks.json are sourced from public regulatory data (FCA, Ofcom, ICO) and apply uniformly within each sector. The SDG mapping logic in sdg-kb.json assigns impact categories based on Q1 (decision type) and Q4 (sector) — structural use-case characteristics, not user identity. The self-assessment disclaimer ensures no authority is falsely attributed to user-provided governance confirmations.",
  },

  // Competitive Analysis
  competitive: {
    introduction: "TrueCase operates in an uncontested space. ROI calculators exist. Compliance checklists exist. No existing tool combines financial projection with governance maturity scoring, adjusts the projection by the maturity score, and exports a board-ready narrative grounded in verified regulatory sources. The real competition is the status quo: a separate spreadsheet ROI model and a separate compliance checklist that never talk to each other.",
    competitors: [
      { feature: "Governance-adjusted ROI projection", ours: true, compA: false, compB: false },
      { feature: "Sector-specific regulatory citation", ours: true, compA: false, compB: true },
      { feature: "AI narrative grounded in verified KB", ours: true, compA: false, compB: false },
      { feature: "Zero data retention (stateless)", ours: true, compA: false, compB: false },
      { feature: "SDG social return mapping", ours: true, compA: false, compB: false },
      { feature: "PDF + HTML export (board-ready)", ours: true, compA: false, compB: true },
    ],
    competitorAName: "Excel ROI Templates",
    competitorBName: "Standalone Compliance Checklists",
    positioningStatement: "Unlike spreadsheet ROI models that ignore governance risk and compliance checklists that ignore financial impact, TrueCase is the only tool that makes governance maturity visible as a financial variable — showing both projections, always, and grounding every claim in verified UK regulatory sources.",
  },

  // OKRs
  okrs: {
    objective: "Build the first governance-adjusted business case tool for AI investments — making regulatory maturity visible as a financial variable, not an afterthought, with zero data retention and fully grounded AI output",
    keyResults: [
      { kr: "Ship a 6-element governance gate backed by a verified KB with UK regulatory citations and weighted reliability scoring", progress: 100, target: "All 6 elements live" },
      { kr: "Implement a reliability score (0–100%) that adjusts financial projections and is always shown alongside the headline figure at identical visual weight", progress: 100, target: "Always co-equal display" },
      { kr: "Ground all Claude-generated narrative in governance-kb.json, benchmarks.json, and sdg-kb.json — no training data fallback", progress: 100, target: "100% KB-sourced claims" },
      { kr: "Deploy to production on Vercel with zero data retention architecture validated", progress: 100, target: "Live public URL" },
    ],
    successMetrics: [
      { metric: "Governance KB elements", target: "6 elements verified", achieved: "6 — all with regulatory anchors + deductions", status: "Achieved" as const },
      { metric: "Reliability score formula", target: "100% traceable deductions", achieved: "100% — all deductions from KB", status: "Achieved" as const },
      { metric: "Data retention", target: "0 bytes per session", achieved: "0 — stateless architecture", status: "Achieved" as const },
      { metric: "Production deployment", target: "Live public URL", achieved: "truecase-seven.vercel.app", status: "Achieved" as const },
    ],
  },

  // Risk Register
  riskRegister: {
    introduction: "TrueCase's risk profile is shaped by two primary tensions: the knowledge base is static but UK AI regulation is evolving rapidly, and the governance assessment relies entirely on user self-reporting which creates honest score inflation as a vector. Both risks were identified at design stage and addressed architecturally.",
    topRisks: [
      {
        id: "RISK-001",
        category: "KNOWLEDGE / REGULATORY",
        risk: "UK AI Regulation Evolves Faster Than KB Versioning Cycle",
        likelihood: 4,
        impact: 4,
        score: 16,
        level: "HIGH",
        mitigation: "KB entries carry a last_verified timestamp (April 2026). PDF and HTML exports include the KB version and generation date on every page. Users are aware the KB reflects a specific regulatory snapshot. Quarterly review cadence planned for KB maintenance.",
        residualScore: 8,
        owner: "Product Manager",
      },
      {
        id: "RISK-002",
        category: "TRUST / ASSESSMENT INTEGRITY",
        risk: "Users Self-Report Governance Controls That Are Not Actually In Place",
        likelihood: 4,
        impact: 3,
        score: 12,
        level: "HIGH",
        mitigation: "Self-assessment disclaimer ('TrueCase cannot verify these answers') always visible at the reliability score. AI-generated disclaimer in all exports makes the self-assessment basis explicit. Product is designed for honest users — it is a planning tool, not an audit instrument.",
        residualScore: 8,
        owner: "Product Design",
      },
      {
        id: "RISK-003",
        category: "TECHNICAL / AI OUTPUT",
        risk: "Claude Outputs Governance Claims Beyond Verified KB Sources",
        likelihood: 2,
        impact: 5,
        score: 10,
        level: "HIGH",
        mitigation: "System prompt explicitly constrains Claude to KB entries and user inputs. Banned language list prevents filler assertions. Grounding disclosure and AI-generated label accompany every output. Users are told the source of every claim.",
        residualScore: 4,
        owner: "Product Manager",
      },
      {
        id: "RISK-004",
        category: "PRIVACY / TRUST",
        risk: "User Distrust of Data Handling in a Tool Handling Sensitive Business Cases",
        likelihood: 3,
        impact: 4,
        score: 12,
        level: "HIGH",
        mitigation: "Zero data retention is architectural, not policy. Stateless design means there is nothing to breach — no database, no session storage, no logging of inputs. The /about page (roadmap item) will make the architecture explicit for enterprise buyers.",
        residualScore: 4,
        owner: "Product Manager",
      },
      {
        id: "RISK-005",
        category: "PRODUCT / SCOPE",
        risk: "Users Treat Reliability Score as a Compliance Certificate Rather Than a Planning Tool",
        likelihood: 3,
        impact: 3,
        score: 9,
        level: "MEDIUM",
        mitigation: "Three distinct honesty markers in the UI: grounding disclosure, self-assessment disclaimer, AI-generated label. All exports include a liability disclaimer. The /about page will explain what TrueCase is and explicitly what it is not.",
        residualScore: 4,
        owner: "Product Design",
      },
    ],
    deepDive: {
      riskMatrix: `
IMPACT →
         1 (Minor) | 2 (Moderate) | 3 (Moderate) | 4 (Major) | 5 (Critical)
L   ─────┼───────────┼──────────────┼──────────────┼───────────┼─────────────
I   1    │  1 (LOW)  │   2 (LOW)    │   3 (LOW)    │  4 (MED)  │  5 (MED)
K   ─────┼───────────┼──────────────┼──────────────┼───────────┼─────────────
E   2    │  2 (LOW)  │   4 (MED)    │   6 (MED)    │  8 (MED)  │ 10 (HIGH)
L   ─────┼───────────┼──────────────┼──────────────┼───────────┼─────────────
I   3    │  3 (LOW)  │   6 (MED)    │   9 (MED)    │ 12 (HIGH) │ 15 (HIGH)
H   ─────┼───────────┼──────────────┼──────────────┼───────────┼─────────────
O   4    │  4 (MED)  │   8 (MED)    │  12 (HIGH)   │ 16 (HIGH) │ 20 (CRIT)
O   ─────┼───────────┼──────────────┼──────────────┼───────────┼─────────────
D   5    │  5 (MED)  │  10 (HIGH)   │  15 (HIGH)   │ 20 (CRIT) │ 25 (CRIT)
`,
      contingencyPlans: [
        {
          risk: "Regulatory KB Stale Event",
          trigger: "A major UK AI regulation passes or is materially amended without KB update",
          action: "Immediate: add stale-KB warning banner to site with last_verified date prominently displayed → Week 1: update affected governance-kb.json entries with new regulatory anchors and revised deduction weights → Month 1: version the KB, add changelog, notify any active users via site notice",
        },
        {
          risk: "Claude Output Scope Violation",
          trigger: "A governance claim in the narrative output cannot be traced to KB entries or user inputs",
          action: "Immediate: log the prompt and output for review → System prompt tightening to add explicit negative example → Add post-generation claim-source check if pattern repeats → If systemic: add output validation layer before displaying narrative to user",
        },
        {
          risk: "Privacy Incident Report",
          trigger: "Any report — however unlikely given stateless architecture — of data appearing to be retained",
          action: "Immediate server-side audit of all API routes for unintended write operations → Review Vercel function logs for any unexpected persistence → Public disclosure within 72 hours per UK GDPR requirement if any personal data was involved",
        },
      ],
      monitoringCadence: [
        { frequency: "Monthly", risks: ["UK AI regulatory news for KB-relevant developments", "Claude API updates that may affect system prompt behaviour", "User feedback on clarity of self-assessment disclaimer"] },
        { frequency: "Quarterly", risks: ["Full KB review: verify all regulatory anchors still current", "Benchmark ranges review: verify sector figures still aligned with published guidance", "SDG mapping review: confirm UN SDG target text unchanged"] },
        { frequency: "As-needed", risks: ["Any new UK AI regulation or ICO enforcement action touching a KB element", "Claude model version updates requiring system prompt re-validation", "User-reported confusion about TrueCase's scope as a planning tool vs audit tool"] },
      ],
    },
  },

  // Roadmap
  roadmap: {
    milestones: [
      {
        phase: "Now",
        items: [
          { title: "4-question contextual questionnaire with sector-specific feedback and rule-based summary" },
          { title: "6-element governance gate with KB-driven reliability scoring and regulatory citations" },
          { title: "6 financial projection cards — headline and reliability-adjusted gain always co-equal" },
          { title: "Claude Sonnet 4 narrative (3 sections) constrained to verified KB sources" },
          { title: "PDF export (3-page, server-side @react-pdf/renderer) + HTML export (client-side)" },
          { title: "Vercel deployment: truecase-seven.vercel.app" },
        ],
        status: "completed" as const,
      },
      {
        phase: "Next",
        items: [
          { title: "/about page: methodology explanation, KB versioning, what TrueCase is and is not" },
          { title: "Governance improvement recommendations: for each missing/partial element, a plain English action plan" },
          { title: "Multi-scenario comparison: run two configurations side by side to compare governance strategies" },
        ],
        status: "in-progress" as const,
      },
      {
        phase: "Later",
        items: [
          { title: "Vendor ROI audit mode: import a vendor's stated ROI claim and run it through the governance gate" },
          { title: "KB changelog notifications: alert users when a regulatory anchor affecting their sector is updated" },
          { title: "Team collaboration: share a case link (read-only, no data stored server-side) for stakeholder review" },
        ],
        status: "planned" as const,
      },
    ],
  },

  // Learnings
  learnings: {
    wentWell: [
      "The reliability score as the central product metaphor was the correct decision from day one. It gives both the finance team and the compliance team a single shared number — and the gap between headline and adjusted gain is more valuable than either projection alone.",
      "Grounding the Claude system prompt explicitly in the KB — rather than relying on Claude's general regulatory knowledge — was the right call for a governance tool. Verifiability is the product's core promise. A hallucinated GDPR citation undermines everything.",
      "Building stateless from the start, rather than adding privacy controls later, meant every architectural decision reinforced trust. There is no database to breach because there is no database. That is a stronger guarantee than any encryption policy.",
      "The rule-based summary after Q1–Q4 (identifying the two most critical governance elements for the use case without an API call) is the highest-leverage component in the product. Four dropdowns → sector-specific plain English governance readiness assessment, instantly, at zero cost.",
    ],
    challenges: [
      "The Q1–Q4 → plain English summary required mapping every combination of four inputs to meaningful, sector-specific text. The edge cases (e.g. 'automation' × 'public sector' × 'unknown scale' × 'healthcare') multiplied faster than expected and required careful KB reference to avoid vague output.",
      "Enforcing the boundary between what Claude's training data knows and what the KB specifies required iterative system prompt engineering. 'Use KB entries for all factual claims' is correct but insufficient — the prompt needs explicit negative examples to prevent confident-sounding additions.",
      "The @react-pdf/renderer server-side PDF route is the most brittle component. React PDF requires hex values for colours (an explicit exception to the no-hardcoded-values rule), and layout behaviour diverges from the browser in ways that require a parallel styling pass.",
    ],
    doDifferently: [
      "Build the SDG knowledge base (sdg-kb.json) before the narrative section prompt, not alongside it. The Q1 × Q4 mapping complexity adds significant scope if discovered mid-prompt-engineering and requires KB-first thinking to structure correctly.",
      "Ship the HTML export before the PDF export. HTML is simpler, gets the product live-demonstrable faster, and validates the narrative structure before investing in PDF layout. PDF can follow once the content model is proven.",
      "Draft the /about page as part of Phase 1, not a roadmap item. The methodology explanation is part of the product's trust architecture — enterprise buyers and founders need to understand what TrueCase does and does not claim before they input sensitive financial data.",
    ],
    keyTakeaway: "The governance gap between headline ROI and reliability-adjusted ROI is not a failure state. It is the product. Every design decision — the co-equal card sizes, the self-assessment disclaimer, the KB-constrained Claude prompt, the stateless architecture — exists to make that gap credible enough to act on. A business case tool that always shows optimistic numbers is worse than no tool at all.",
  },

  // Contact
  contact: {
    pitch: "I am actively seeking Junior AI PM / Technical PM roles at companies building AI-powered products in media, events, e-commerce, or consumer applications. Let's connect if you're hiring or want to discuss AI product strategy.",
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
export default function TrueCaseProject() {
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

        <PersonasSection
          introduction={projectData.personas.introduction}
          personas={projectData.personas.basic}
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

        <CompetitiveSection
          introduction={projectData.competitive.introduction}
          competitors={projectData.competitive.competitors}
          competitorAName={projectData.competitive.competitorAName}
          competitorBName={projectData.competitive.competitorBName}
          positioningStatement={projectData.competitive.positioningStatement}
        />

        <RiskRegisterSection
          introduction={projectData.riskRegister.introduction}
          topRisks={projectData.riskRegister.topRisks}
          deepDive={projectData.riskRegister.deepDive}
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
          { name: "PRD — TrueCase", artefactId: "truecase-prd", project: "truecase" },
          { name: "Model Decisions — TrueCase", artefactId: "truecase-model-decisions", project: "truecase" },
          { name: "Ethics Framework — TrueCase", artefactId: "truecase-ethics", project: "truecase" },
        ]} />

        <ContactSection {...projectData.contact} />
      </main>
    </div>
  )
}
