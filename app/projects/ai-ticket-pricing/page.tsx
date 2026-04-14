import { BarChart3, TrendingUp, Users, Zap, Lightbulb, Code, Shield, FileText, AlertTriangle } from "lucide-react"
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
// PROJECT DATA - AI Dynamic Ticket Pricing for UK Live Events
// ============================================================================

const projectData = {
  // Hero Section
  hero: {
    projectName: "AI Dynamic Ticket Pricing",
    tagline: "Machine learning-powered pricing engine for UK live events, delivering transparent, CMA-compliant price recommendations with SHAP explainability and real-time demand signal integration.",
    status: "Shipped",
    author: "Ogbebor Osaheni",
    date: "March 2026",
    demoUrl: "https://ai-ticket-pricing.streamlit.app/",
    githubUrl: "https://github.com/aiirveon/ai-event-ticket-pricing",
    heroImage: undefined,
  },

  // Executive Summary
  summary: {
    description: "An end-to-end AI pricing system for UK live events that integrates artist popularity, venue location premiums, demand urgency signals, and market conditions to generate explainable, ethical price recommendations. The model achieves R² = 0.79 on real demand signals — deliberately capturing genuine market unpredictability rather than overfitting — and is deployed as a production Streamlit dashboard.",
    metrics: [
      { icon: <BarChart3 className="w-5 h-5" />, value: "0.79", label: "R² Score", description: "Genuine demand signal learning" },
      { icon: <TrendingUp className="w-5 h-5" />, value: "3.11%", label: "Mean Abs Error", description: "Baseline model error (Phase 1)" },
      { icon: <Users className="w-5 h-5" />, value: "50", label: "Optuna Trials", description: "Hyperparameter optimisation" },
      { icon: <Zap className="w-5 h-5" />, value: "+22% / -28%", label: "CMA Price Cap", description: "Ethical pricing boundary" },
    ],
  },

  // Problem Statement
  problem: {
    paragraphs: [
      "UK live events venues lose significant revenue through static ticket pricing that ignores real-time demand signals. The same seat at the O2 Arena sells for the same price whether the artist has just gone viral on TikTok, whether there are 180 days or 3 days until the show, and whether a competing event is drawing fans away that same evening.",
      "The challenge is not technical — XGBoost exists. The barrier is product thinking: How do you build dynamic pricing for live events without triggering the kind of fan backlash that Ticketmaster faced with Oasis tour pricing in 2024? How do you make recommendations transparent enough that venue managers trust and act on them? How do you operate within CMA guidelines while still capturing genuine demand uplift?",
      "This project addresses the full product lifecycle: from ML model design decisions to SHAP explainability to ethics guardrails to a shipped, interactive demo — demonstrating how AI Product Managers bridge technical capability with business value and regulatory awareness.",
    ],
  },

  // User Personas
  personas: {
    introduction: "I created 3 detailed personas using the Jobs-to-be-Done framework combined with empathy mapping from Product Management & Strategy. Each persona represents a distinct stakeholder in the live events pricing ecosystem, with different goals, risk tolerances, and definitions of success.",
    basic: [
      {
        name: "Dave Okonkwo",
        role: "Independent Promoter, 100–2,000 Capacity Venues",
        goals: [
          "Capture revenue on sold-out shows that currently flows to the secondary market",
          "Avoid artist tension over resale price gaps",
          "Use a simple tool that requires no technical expertise or data infrastructure to operate",
        ],
        painPoints: [
          "Pricing is binary — a show either sells out at the wrong price or fails to sell and requires a panic discount",
          "No data to inform decisions and no mechanism to adjust prices in response to demand signals",
          "The resale market consistently captures uplift that should belong to the artist and promoter",
        ],
        quote: "I set a price range before the announcement; the tool adjusts within that range as demand builds, and I recapture the uplift that used to go to touts. The artist sees the data and understands why the price moved.",
      },
      {
        name: "Marcus Webb",
        role: "Head of Revenue, Mid-Tier Venue",
        goals: [
          "Maximise revenue per event without triggering fan backlash or CMA scrutiny",
          "Justify pricing decisions to artist management with structured data",
          "Reduce the manual pricing workload — approximately 4–6 hours per event",
        ],
        painPoints: [
          "Pricing blind spots 6 months out mean early decisions are made with almost no demand signal",
          "Post-Oasis CMA anxiety has made the commercial team risk-averse about any price movement",
          "No explainability layer means he cannot show an artist's management team why a price recommendation was made",
        ],
        quote: "Every price recommendation comes with a plain English explanation — what signal drove it, what the CMA cap is, and why it is within acceptable range. I can send that to an artist's management team and have a conversation based on data instead of instinct.",
      },
      {
        name: "Priya Sharma",
        role: "Ticketing Product Manager, Major Festival Group",
        goals: [
          "Build a defensible, auditable pricing system before regulators mandate one",
          "Capture demand uplifts from viral moments without reputational or commercial risk",
          "Create a data infrastructure that informs future event planning and artist negotiations",
        ],
        painPoints: [
          "Viral moment lag — by the time the team identifies a demand spike and coordinates a response, the window has closed",
          "No audit trail exists for artist or regulator review",
          "Current tooling is built for marketing analytics, not real-time pricing decisions",
        ],
        quote: "A verified demand signal triggers a price recommendation within minutes, within a pre-approved range, with a full audit trail attached. The decision is human-approved. The data is already there if a regulator or artist manager asks.",
      },
    ],
    deepDive: {
      empathyMaps: [
        {
          persona: "Dave Okonkwo, Independent Promoter",
          thinksFeels: "\"If we get this wrong, it's front page news.\" \"The Oasis thing scared everyone — I need CMA compliance documentation before I touch dynamic pricing.\"",
          sees: "Ticketmaster news coverage. Resale platforms showing 3x face value. Empty premium seats at sold-out shows.",
          hears: "\"Why are you charging more than last year?\" (from artist managers). \"We need to maximise yield\" (from CFO).",
          saysDoes: "Sets prices 6 months out, rarely adjusts. Reviews resale data post-event and feels frustrated.",
          pains: "Regulatory risk. Reputational risk. Revenue left on table. No data to back decisions.",
          gains: "Auditable pricing decisions. CMA compliance documentation. Revenue uplift with artist trust maintained.",
        },
        {
          persona: "Priya (Ticketing PM)",
          thinksFeels: "\"I want to build the right system before we're forced to.\" \"Our current stack is 10 years old — this is the moment to modernise.\"",
          sees: "Spotify and Netflix using ML to personalise every interaction. Her own ticketing platform with no ML layer.",
          hears: "\"Can we react faster to demand changes?\" (from CEO). \"Why did rival festival sell out in 2 hours?\" (from board).",
          saysDoes: "Builds Jira tickets for pricing features. Evangelises data-driven culture internally. Reads CMA guidance documents.",
          pains: "Legacy systems. Slow internal buy-in. Fear of getting pricing wrong at scale (40,000 tickets per festival).",
          gains: "Modern ML infrastructure. Real-time demand response. Defensible audit trail. Internal credibility as innovator.",
        },
        {
          persona: "Dave (Independent Promoter)",
          thinksFeels: "\"I'm losing money to touts every week.\" \"I don't have time to learn software — I'm booking acts, not coding.\"",
          sees: "Viagogo listings at 3x face value hours after his tickets go on sale. Bigger promoters with data teams.",
          hears: "\"Those tickets are on Viagogo already\" (from artists). \"You should charge more\" (from accountant).",
          saysDoes: "Prices by gut feel and historical precedent. Checks Spotify streams to gauge artist popularity.",
          pains: "Revenue lost to secondary market. No data infrastructure. Artist relationships strained by resale prices.",
          gains: "Simple tool that tells him what to charge. Proof that pricing was fair (for artist conversations). More revenue.",
        },
      ],
      decisionCriteria: [
        {
          persona: "Marcus",
          mustHaves: ["CMA compliance documentation", "Audit trail for every price change", "Artist manager explainability", "Integration with existing ticketing platform"],
          niceToHaves: ["Real-time demand dashboard", "Competitor event monitoring", "Artist-specific pricing profiles"],
          dealBreakers: ["No legal documentation", "Opaque algorithm", "Press risk with no guardrails", "Requires data science team to operate"],
        },
        {
          persona: "Priya",
          mustHaves: ["API-first architecture", "SHAP explainability layer", "Real-time signal processing", "Scalable to 40,000 tickets"],
          niceToHaves: ["A/B testing framework", "Artist portal for transparency", "Predictive sell-out modelling"],
          dealBreakers: ["Batch-only processing", "No explainability", "Vendor lock-in", "No UK regulatory alignment"],
        },
        {
          persona: "Dave",
          mustHaves: ["Simple interface (no code required)", "Plain English recommendations", "Profit/loss projection per event", "Works for 100-2,000 capacity shows"],
          niceToHaves: ["Mobile access", "Artist comparison features", "Automated social monitoring"],
          dealBreakers: ["Complex setup", "Long-term contract", "Requires data team", "No phone support"],
        },
      ],
      objectionHandling: [
        {
          persona: "Marcus",
          objection: "What happens if this triggers a CMA investigation like Oasis?",
          response: "Every price change is logged with SHAP explanation. Max +22% cap enforced. Full audit trail available on demand. CMA guidance explicitly permits demand-based pricing with transparency.",
          evidence: "Ethics framework includes CMA compliance checklist. Price cap prevents the 160% increases that triggered Oasis investigation.",
        },
        {
          persona: "Priya",
          objection: "Our current system processes 10,000 transactions per minute — can this scale?",
          response: "Model inference is sub-millisecond per prediction (XGBoost). SHAP computation adds ~50ms. Stateless design means horizontal scaling is trivial.",
          evidence: "Model pkl file is 2MB — deploys anywhere. Load testing results available on request.",
        },
        {
          persona: "Dave",
          objection: "I don't trust algorithms — what if it tells me to charge £200 for a £30 show?",
          response: "Hard cap: +22% maximum above your set base price. You approve every recommendation. The AI suggests, you decide.",
          evidence: "Demo shows real-time ethics panel with CMA compliance status on every recommendation.",
        },
      ],
      howWeWin: [
        {
          persona: "Marcus",
          stage1: "Industry conference: Whitepaper 'CMA-Compliant Dynamic Pricing: A Practical Guide for UK Venues'",
          stage2: "Demo call: Show SHAP audit trail, CMA compliance documentation, price cap guardrails",
          stage3: "Pilot: 3 events, full audit support, weekly revenue reviews with venue team",
          stage4: "Proven uplift + zero compliance issues → Annual contract at £2,400/venue",
        },
        {
          persona: "Priya",
          stage1: "Tech blog: 'How We Built a Real-Time Ticketing ML System with SHAP Explainability'",
          stage2: "API documentation walkthrough, architecture review, security audit",
          stage3: "Integration pilot (2 festivals), engineering support, custom feature development",
          stage4: "Successful integration → Platform licensing deal (£50k+ annual)",
        },
        {
          persona: "Dave",
          stage1: "Facebook Groups (UK Promoters Network): 'Stop Losing Money to Touts'",
          stage2: "Free trial: Upload last 5 shows, get backtested revenue analysis",
          stage3: "30-day trial with weekly check-in calls and plain English recommendations",
          stage4: "Show £3k-£8k additional revenue per show → £49/month subscription",
        },
      ],
    },
  },

  // Solution Overview
  solution: {
    description: "An AI-powered ticket pricing recommendation engine that combines 16 demand signals — artist popularity, venue location premium, days to event, genre, seasonal patterns, and real-time market conditions — to generate transparent, auditable price recommendations with a SHAP explanation for every decision. Unlike black-box dynamic pricing systems, every recommendation includes a plain English explanation of exactly why that price was suggested.",
    features: [
      {
        icon: <Lightbulb className="w-5 h-5" />,
        title: "Multi-Signal Demand Modelling",
        description: "Integrates 16 features: artist popularity, venue location premiums, days to event urgency, genre demand patterns, competing events, viral moments, and transport disruptions — all in real time.",
      },
      {
        icon: <Code className="w-5 h-5" />,
        title: "SHAP Explainability",
        description: "Every price recommendation includes a waterfall chart and plain English explanation showing exactly which factors drove the suggestion and by how much — in percentage points, not just feature names.",
      },
      {
        icon: <Shield className="w-5 h-5" />,
        title: "CMA-Compliant Ethics Guardrails",
        description: "Hard-coded +22% maximum increase cap and -28% minimum floor, surge pricing detection with human review flag, and full audit trail for regulatory compliance — built for the post-Oasis regulatory environment.",
      },
    ],
  },

  // Technical Implementation Phases
  phases: [
    {
      title: "Phase 1: MVP",
      description: "Built foundational data pipeline and baseline XGBoost model. Made a critical early decision — changing the target variable from absolute price to price adjustment percentage — which transformed what the model learned.",
      deliverables: [
        "Designed synthetic UK market data with 8 venue profiles, 4 ticket tiers, 8 genres, and realistic demand shocks",
        "Generated 5,000 transactions with 9.7% noise — genuine market unpredictability baked in by design",
        "Discovered and fixed dominant feature problem: ticket_tier was absorbing 98.3% of feature importance",
        "Baseline XGBoost model: R² = 0.7935, MAE = 3.11% on price adjustment percentage",
      ],
      techStack: ["Python", "Pandas", "XGBoost", "Scikit-learn", "NumPy"],
    },
    {
      title: "Phase 2: Production ML",
      description: "Enhanced model with Optuna hyperparameter optimisation and full SHAP explainability layer. Key finding: baseline was already well-calibrated — the performance ceiling is genuine market noise, not model weakness.",
      deliverables: [
        "Optuna TPE hyperparameter search: 50 trials, 3-fold cross-validation per trial",
        "SHAP analysis: artist_popularity (26.2%) and venue_location_premium (24.2%) explain 50.4% of all price variation",
        "3 production SHAP charts: global feature importance, dot plot (direction + magnitude), single-prediction waterfall",
      ],
      techStack: ["Optuna", "SHAP", "Matplotlib", "Joblib", "Pickle"],
      metrics: [
        { name: "R² Score", baseline: "0.7935", optimized: "0.7962", improvement: "Marginal improvement (+0.3%)" },
        { name: "MAE", baseline: "3.11%", optimized: "3.15%", improvement: "Marginal" },
        { name: "RMSE", baseline: "4.38%", optimized: "4.35%", improvement: "Marginal improvement" },
      ],
    },
    {
      title: "Phase 3: Product & Dashboard",
      description: "Translated ML model into a production product with interactive Streamlit dashboard, ethics compliance panel, and plain English recommendation generator.",
      deliverables: [
        "Premium navy/gold Streamlit dashboard with real-time price recommendations",
        "SHAP waterfall chart updating dynamically with every input change",
        "CMA ethics compliance panel with three automated checks per recommendation",
        "Plain English explanation generator — every recommendation explained in one sentence",
        "Market overview: venue benchmarks and artist popularity vs price adjustment curve",
      ],
      techStack: ["Streamlit", "Matplotlib", "Custom CSS", "Google Fonts (Playfair Display + DM Mono)"],
    },
    {
      title: "Phase 4: Launch & Distribution",
      description: "Deployed to Streamlit Cloud with public URL, GitHub repository, and portfolio integration.",
      deliverables: [
        "Live deployment: https://ai-ticket-pricing.streamlit.app",
        "GitHub repository: github.com/aiirveon/ai-event-ticket-pricing",
        "Portfolio page with complete PM artifact documentation",
        "LinkedIn launch content series",
      ],
      techStack: ["Streamlit Cloud", "GitHub", "Vercel"],
    },
  ],

  // Data & Methodology
  data: {
    dataDict: [
      { feature: "artist_popularity", type: "integer (1-10)", description: "Artist popularity score — single biggest driver of price adjustment at 26.2% of total variance", source: "Synthetic (Spotify popularity distribution)" },
      { feature: "venue_location_premium", type: "float (0.00-0.35)", description: "Venue location premium factor. O2 London: 0.22, Glastonbury: 0.35, Cardiff: 0.00", source: "UK venue research" },
      { feature: "days_to_event", type: "integer (1-180)", description: "Days remaining until event — urgency signal. Lower = higher price pressure", source: "Feature Engineering" },
      { feature: "genre", type: "categorical (8 values)", description: "Music genre — demand multiplier varies. Musical Theatre: 1.20x, Classical: 0.90x", source: "Synthetic with realistic demand distributions" },
      { feature: "viral_shock", type: "binary", description: "1 if viral moment active (TikTok/press spike) — 8.2% occurrence rate in training data", source: "Synthetic demand shock" },
      { feature: "transport_disruption", type: "binary", description: "1 if transport disruption — suppresses demand. 6% occurrence, -3.1pp average impact", source: "Synthetic demand shock" },
      { feature: "has_competing_event", type: "binary", description: "1 if competing event same night — demand split signal", source: "Feature Engineering" },
      { feature: "is_peak_season", type: "binary", description: "1 for Feb, Jul, Aug, Dec — peak live events months in UK", source: "Feature Engineering" },
      { feature: "is_saturday", type: "binary", description: "Saturday premium — highest demand day of week", source: "Feature Engineering" },
      { feature: "temperature_c", type: "float (-5 to 32)", description: "Temperature — relevant for outdoor festival venues (Glastonbury, Boardmasters)", source: "Synthetic weather" },
      { feature: "is_cold", type: "binary", description: "1 if temperature below 8°C — suppresses outdoor and weather-sensitive venue demand", source: "Feature Engineering" },
      { feature: "is_rainy", type: "binary", description: "1 if temperature below 13°C — proxy for wet conditions in UK climate", source: "Feature Engineering" },
      { feature: "is_weekend", type: "binary", description: "1 if event falls on Friday, Saturday, or Sunday", source: "Feature Engineering" },
      { feature: "month", type: "integer (1-12)", description: "Calendar month of event — captures seasonal demand patterns", source: "Feature Engineering" },
      { feature: "day_of_week", type: "integer (0-6)", description: "Day of week (0=Monday, 6=Sunday) — Saturday commands highest demand", source: "Feature Engineering" },
    ],
    methodology: "Used XGBoost regression to predict price adjustment percentage (not absolute price) based on 16 demand signals. Critical design decision: targeting adjustment percentage rather than absolute price prevents ticket tier from dominating feature importance — first attempt with absolute price had ticket_tier absorbing 98.3% of importance. The model was trained on 80% of 5,000 synthetic transactions with 20% holdout validation. Hyperparameters optimised using Optuna TPE sampler over 50 trials with 3-fold cross-validation. Synthetic data designed with explicit documentation of every distributional assumption — more defensible than an unexplained Kaggle CSV because every design choice has a stated business rationale.",
    validationMethods: [
      "Train/test split (80/20) — 4,000 training, 1,000 test transactions",
      "3-fold cross-validation during all 50 Optuna hyperparameter trials",
      "Feature importance validation: top features align with domain knowledge (artist popularity, venue premium)",
      "SHAP directional validation: high popularity → positive SHAP, transport disruption → negative SHAP (correct)",
      "Ethics validation: all predictions clipped to [-28%, +22%] CMA-compliant range, zero violations",
    ],
  },

  // Results
  results: {
    heroMetric: { value: "50.4%", label: "of all price variation explained by 2 features: artist popularity + venue location premium" },
    comparisons: [
      { metric: "Model R² (Baseline vs Optimised)", before: "0.7935", after: "0.7962", change: "Marginal improvement (+0.3%)" },
      { metric: "Artist Popularity Impact (score 9)", before: "Not quantified", after: "+7.73 percentage points", change: "Quantified" },
      { metric: "Venue Location Impact (O2 London)", before: "Not quantified", after: "+6.89 percentage points", change: "Quantified" },
      { metric: "Viral Moment Impact", before: "Not quantified", after: "+4.7% of total price variation", change: "Quantified" },
      { metric: "Transport Disruption Impact", before: "Not quantified", after: "-3.1pp demand suppression", change: "Quantified" },
      { metric: "CMA Cap Compliance", before: "No guardrails", after: "100% across all scenarios", change: "Enforced" },
    ],
    keyInsights: [
      "Artist popularity and venue location premium together explain 50.4% of all price adjustment decisions. This validates the core product hypothesis: who is performing and where they are performing are the two most important pricing signals in UK live events.",
      "The model's R² of 0.79 is intentionally honest. The remaining 21% unexplained variance represents genuine market unpredictability — viral moments, human judgment, fan irrationality. My first model achieved R² = 0.997 by learning to look up ticket tier. That was worse, not better.",
      "Optuna ran 50 hyperparameter trials and found minimal improvement over baseline (R² 0.7935 → 0.7962). This is a valuable insight: the performance ceiling is close to genuine market noise — the optimised model improved by 0.3% but the gain was marginal.",
      "SHAP waterfall for a superstar artist (popularity 9) at SSE Hydro Glasgow, 10 days to event: artist_popularity (+7.73%), venue_location_premium (-2.44%), days_to_event (+1.71%), genre (+1.35%). Recommended £95.16 vs £78.00 base — a recommendation any venue manager can read, understand, and defend to an artist's team.",
      "Average price adjustment baseline across all 5,000 events: +15.26%. The market skews positive — our UK venue profiles and artist distributions reflect a premium events market where demand typically exceeds static pricing assumptions.",
    ],
  },

  // Ethics
  ethics: {
    introduction: "I conducted a comprehensive ethics review aligned to the CMA's dynamic pricing investigation findings (2024) and the ICO AI Auditing Framework. The Oasis/Ticketmaster controversy that triggered CMA scrutiny was a direct input to this framework design — not background reading. Key finding: transparent, capped, explainable dynamic pricing is not only ethical — it is the only defensible approach in the current UK regulatory environment.",
    principles: [
      { title: "Transparency", description: "Every price recommendation includes a SHAP waterfall chart and plain English explanation. Venue managers, artists, and regulators can see exactly why a price was suggested — in percentage points, not just feature names." },
      { title: "Fairness", description: "+22% maximum increase cap prevents the kind of extreme surge pricing that triggered the CMA investigation of Ticketmaster in 2024. The Oasis tickets went from £135 to £355 — a 163% increase our system would block." },
      { title: "Accountability", description: "Full audit trail of every pricing decision with SHAP values logged. If the CMA asks why a ticket cost £152 instead of £125, the answer is documented, explainable, and defensible within 24 hours." },
      { title: "Human Override", description: "The AI recommends. Venue managers decide. No fully automated price changes — human judgment remains in the loop for every single recommendation, with viral moments flagged for mandatory review." },
    ],
    guardrails: [
      { rule: "Maximum Price Increase", threshold: "+22%", rationale: "CMA-aligned cap. Prevents the surge pricing that triggered Ticketmaster investigation." },
      { rule: "Maximum Price Decrease", threshold: "-28%", rationale: "Prevents below-cost selling and protects revenue floor." },
      { rule: "Viral Surge Warning", threshold: "Amber flag + human review", rationale: "Viral moments require mandatory human approval before any price change." },
    ],
    biasAuditDescription: "Analysed model predictions across all venue types, genres, ticket tiers, and temporal patterns. No protected characteristics used in model. Pricing signals are demand-based (artist popularity, timing, venue location) — not demographic-based. Transport disruption signal suppresses prices when fans face travel difficulties, protecting rather than exploiting vulnerable demand situations.",
    deepDive: {
      methodology: "Following the UK ICO AI Auditing Framework and informed directly by CMA dynamic pricing investigation findings, I conducted a 3-step review: (1) Identify potential protected characteristic proxies in all 16 features, (2) Validate each feature against fairness criteria, (3) Confirm price cap compliance across all prediction scenarios including adversarial edge cases.",
      protectedCharacteristics: ["Race/Ethnicity", "Gender", "Age", "Disability", "Religion", "Sexual Orientation", "Socioeconomic Status"],
      featureAudit: [
        { feature: "artist_popularity", risk: "None", status: "SAFE", action: "Popularity scores are demand-based, not demographic proxies. All fans face same pricing for same artist." },
        { feature: "venue_location_premium", risk: "Potential socioeconomic proxy", status: "MONITORED", action: "London premium reflects genuine demand differences. Cap at +22% total prevents exploitation of location-based pricing." },
        { feature: "days_to_event", risk: "None", status: "SAFE", action: "Urgency pricing is standard commercial practice, universal across all fan demographics." },
        { feature: "genre", risk: "Potential cultural proxy", status: "MONITORED", action: "Genre differentials reflect demand patterns, not cultural discrimination. All genre adjustments within ±22% cap." },
        { feature: "viral_shock", risk: "None", status: "SAFE", action: "Triggers mandatory human review — no automated price increase on viral events. Human judgment required." },
        { feature: "transport_disruption", risk: "None", status: "SAFE", action: "Suppresses prices during disruption — protects rather than exploits fans facing travel difficulties." },
        { feature: "customer_demographics (EXCLUDED)", risk: "Multiple proxies", status: "REMOVED", action: "Age, gender, purchase history excluded entirely. Pricing is event-based, not person-based." },
      ],
      fairnessTests: [
        {
          test: "Socioeconomic Fairness",
          hypothesis: "Model should not systematically price out lower-income fans through location-based proxies",
          method: "Compare predicted adjustments for identical artist/genre/timing across venues with different location premiums",
          result: "PASS — Location premium capped at +22% maximum total. Cardiff fans (0% premium) see same artist-based adjustments as London fans.",
          statistic: "Price differential by venue explained entirely by documented location premium, not demographic targeting.",
        },
        {
          test: "CMA Cap Compliance",
          hypothesis: "No recommendation should exceed +22% above base price under any input combination",
          method: "Tested all 5,000 training transactions plus 500 adversarial examples (max popularity, min days, all positive flags active)",
          result: "PASS — np.clip() enforces hard ceiling at inference time. Even theoretical maximum scenario returns exactly +22.0%.",
          statistic: "Zero out-of-bounds predictions across all test scenarios including adversarial inputs.",
        },
        {
          test: "Viral Surge Fairness",
          hypothesis: "Viral moments should not automatically trigger price increases without human review",
          method: "Check ethics panel behaviour when viral_shock=1 across all venue and tier combinations",
          result: "PASS — viral_shock flag triggers amber warning and human review requirement on every recommendation regardless of other inputs.",
          statistic: "100% of viral shock scenarios correctly flagged for mandatory human review.",
        },
      ],
      gdprCompliance: [
        { requirement: "No PII in Model", status: "COMPLIANT", evidence: "No customer names, emails, purchase history, or individual identifiers used in any feature" },
        { requirement: "Right to Explanation (Article 22)", status: "COMPLIANT", evidence: "SHAP provides itemised explanation of every automated recommendation in plain English" },
        { requirement: "Human Oversight", status: "COMPLIANT", evidence: "Dashboard requires venue manager approval — no fully automated pricing changes" },
        { requirement: "Data Minimisation", status: "COMPLIANT", evidence: "Only event-level signals used; no individual fan data required or collected" },
        { requirement: "Audit Trail", status: "COMPLIANT", evidence: "SHAP values logged per recommendation; full decision trail available for CMA on request" },
      ],
      mitigationStrategies: [
        {
          level: "Design",
          mitigation: "Hard Price Cap",
          implementation: "np.clip(prediction, -28.0, 22.0) enforced at inference time — cannot be bypassed by any input combination",
          tradeoff: "Leaves theoretical revenue on table for extreme demand scenarios; prevents exploitative pricing and CMA investigation risk",
        },
        {
          level: "Design",
          mitigation: "Viral Surge Human Review",
          implementation: "Viral shock flag triggers amber warning requiring manual approval before any price change goes live",
          tradeoff: "Adds human latency (minutes vs seconds); prevents PR disasters and CMA scrutiny from automated surge pricing",
        },
        {
          level: "Design",
          mitigation: "Demographic Feature Exclusion",
          implementation: "Customer age, gender, purchase history, postcode excluded from all feature sets at design stage",
          tradeoff: "Marginal accuracy reduction; eliminates demographic discrimination risk and GDPR Article 22 exposure",
        },
        {
          level: "Monitoring",
          mitigation: "Post-Event Bias Audit",
          implementation: "After each event, compare actual prices charged across venue demographics. Alert if systematic patterns emerge.",
          tradeoff: "Retrospective only; combine with pre-event SHAP audit for complete coverage",
        },
      ],
    },
  },

  // Competitive Analysis
  competitive: {
    introduction: "I applied Porter's Five Forces framework from Product Management & Strategy to the UK live events ticketing market. Key insight: my biggest competitor is not Ticketmaster — it is the status quo of static pricing set 6 months before the event. My defensible moat is explainability + CMA compliance — the exact capabilities Ticketmaster lacked when the Oasis controversy hit.",
    competitors: [
      { feature: "SHAP Explainability", ours: true, compA: false, compB: false },
      { feature: "CMA Compliance Framework", ours: true, compA: false, compB: true },
      { feature: "Real-time Demand Signals", ours: true, compA: true, compB: true },
      { feature: "Human Override Requirement", ours: true, compA: false, compB: false },
      { feature: "UK-Specific Design", ours: true, compA: false, compB: true },
    ],
    competitorAName: "Ticketmaster Dynamic Pricing",
    competitorBName: "FIXR / Eventbrite Flex",
    positioningStatement: "Unlike black-box dynamic pricing systems that triggered CMA investigations, this solution is purpose-built for the UK post-Oasis regulatory environment: transparent, explainable, human-in-the-loop pricing that venue managers can defend to artists, fans, and regulators.",
    deepDive: {
      portersFiveForces: [
        {
          force: "Threat of New Entrants",
          level: "MEDIUM",
          analysis: "Low technical barriers (XGBoost is open-source), but high trust barriers. UK CMA knowledge, SHAP explainability, and venue relationship network create meaningful moat against new entrants who lack regulatory context.",
        },
        {
          force: "Bargaining Power of Buyers",
          level: "MEDIUM",
          analysis: "Venue contracts typically annual. Switching costs moderate once integrated. Mitigated by audit trail value — switching means losing documented pricing history and CMA compliance records.",
        },
        {
          force: "Bargaining Power of Suppliers",
          level: "LOW",
          analysis: "Open-source ML stack (XGBoost, SHAP, Python). Multiple cloud providers. No single supplier has pricing power. Weather APIs free (Open-Meteo). Zero vendor lock-in.",
        },
        {
          force: "Threat of Substitutes",
          level: "HIGH",
          analysis: "Static pricing (free, no risk), spreadsheet tools, gut feel. Must prove ROI clearly: 10% uplift on a 5,000-cap sold-out show at £50 average = £25,000 per event. That is the cost of inaction.",
        },
        {
          force: "Competitive Rivalry",
          level: "HIGH",
          analysis: "Ticketmaster dominates primary market but CMA scrutiny has damaged their dynamic pricing credibility. Explainability gap creates a genuine opening for a transparent, defensible alternative in mid-tier and SMB venue segment.",
        },
      ],
      marketSizing: [
        { metric: "Total Addressable Market (TAM)", value: "£180M", calculation: "~1,800 UK venues with 500+ capacity × £100k avg annual ticketing revenue × 1% pricing optimisation fee" },
        { metric: "Serviceable Addressable Market (SAM)", value: "£36M", calculation: "360 mid-tier venues (1k-20k capacity) with existing digital ticketing infrastructure" },
        { metric: "Serviceable Obtainable Market (SOM)", value: "£3.6M", calculation: "10% penetration in 3 years — 36 venue contracts at £100k average annual value" },
      ],
      competitorDeepDive: [
        {
          competitor: "Ticketmaster Dynamic Pricing",
          strengths: ["Market dominance (60%+ UK primary ticketing)", "Artist relationships", "Scale (millions of events)", "Years of demand data"],
          weaknesses: ["CMA investigation (Oasis 2024)", "No explainability — complete black box", "Fan trust destroyed by Oasis controversy", "Fully automated (no human override)", "Not defensible in current regulatory climate"],
          whyWeWin: "We offer what Ticketmaster cannot: CMA-compliant, explainable, human-in-the-loop pricing. Venues want dynamic pricing but cannot afford the reputational risk of Ticketmaster's approach. We are the safe alternative.",
        },
        {
          competitor: "FIXR / Eventbrite Flex Pricing",
          strengths: ["SMB venue relationships", "Simple interface", "No long-term contracts", "Established brand in independent venue space"],
          weaknesses: ["No SHAP explainability", "US-designed (limited UK regulatory awareness)", "Basic demand signals only — no artist popularity, viral detection, or UK transport signals", "No audit trail for CMA"],
          whyWeWin: "Deeper UK market intelligence (CMA compliance, UK venue premiums, rail disruption signals). SHAP explainability enables artist/manager conversations that FIXR users simply cannot have with their black-box recommendations.",
        },
        {
          competitor: "Static Pricing (Status Quo)",
          strengths: ["Free", "Simple", "No regulatory risk", "Familiar to artists and fans"],
          weaknesses: ["Leaves 8-15% revenue on table for sold-out shows", "Cannot respond to viral moments", "Resale market captures demand uplift instead of venue and artist"],
          whyWeWin: "For a 5,000-cap sold-out show at £50 average, 10% uplift = £25,000 per event. At 20 shows per year = £500,000 additional revenue. That is the annual cost of inaction, not including resale revenue lost to secondary market.",
        },
        {
          competitor: "Manual Adjustment by Revenue Manager",
          strengths: ["Full control", "Human judgment", "No vendor dependency", "Artist relationship sensitivity"],
          weaknesses: ["Cannot process 16 signals simultaneously", "Slow to react to viral moments (hours vs seconds)", "No historical pattern learning", "4-6 hours per event setup time"],
          whyWeWin: "Speed (real-time demand response to viral moments), scale (16 signals processed instantly), and learning (model improves with each event) — none achievable manually. We augment human judgment, not replace it.",
        },
      ],
      competitiveMoat: [
        {
          moat: "CMA Compliance Documentation",
          strength: "STRONG",
          description: "Invested in bias audits, ethics framework, and CMA-aligned price caps before any competitor in the SMB space. Post-Oasis, this is not a nice-to-have — it is the price of entry for any defensible dynamic pricing product in the UK.",
          example: "Can provide venue manager with printed SHAP audit trail and CMA compliance checklist for any pricing decision within minutes. No competitor offers this today.",
        },
        {
          moat: "Explainability as Artist Relationship Tool",
          strength: "STRONG",
          description: "SHAP explanations solve a problem Ticketmaster ignores: artists want to understand why their tickets were priced a certain way. We give managers a data-backed conversation tool, not just a number.",
          example: "Artist manager asks: 'Why was the Glasgow show cheaper than Manchester?' Answer: 'Venue location premium is 0.03 vs 0.08, and streaming data shows lower per-capita engagement in that market for this genre.'",
        },
        {
          moat: "UK-Specific Demand Intelligence",
          strength: "MEDIUM",
          description: "UK rail disruption signals, bank holiday patterns, UK venue premium mapping, and CMA regulatory knowledge built into the model. US competitors entering UK market must rebuild all of this from scratch.",
          example: "Transport disruption suppresses Glasgow ticket demand by ~3pp average. This is UK-specific knowledge a US-built competitor would miss entirely.",
        },
      ],
      positioning: {
        target: "UK mid-tier venue revenue managers and independent promoters",
        needState: "Want to capture dynamic pricing revenue without triggering CMA scrutiny or fan backlash",
        productCategory: "AI ticket pricing recommendation engine",
        keyBenefit: "CMA-compliant dynamic pricing with SHAP explainability and mandatory human override",
        primaryAlternative: "Ticketmaster dynamic pricing (CMA risk), static pricing (revenue loss), manual adjustment (too slow for viral moments)",
        differentiation: "The only UK live events pricing engine that gives every recommendation a plain English explanation — built specifically for the post-Oasis regulatory environment",
      },
    },
  },

  // OKRs
  okrs: {
    objective: "Demonstrate end-to-end AI Product Management capability through a shipped, production-grade ticket pricing system that is technically sophisticated, ethically sound, and commercially defensible in the UK regulatory environment",
    keyResults: [
      { kr: "Achieve R² > 0.75 learning genuine demand signals (not ticket tier lookup)", progress: 100, target: "R² = 0.75" },
      { kr: "Implement SHAP explainability for 100% of predictions with plain English output", progress: 100, target: "100% coverage" },
      { kr: "Pass CMA compliance check across all test predictions including adversarial scenarios", progress: 100, target: "Zero violations" },
      { kr: "Deploy live interactive dashboard with public URL accessible to recruiters", progress: 100, target: "Live URL" },
    ],
    successMetrics: [
      { metric: "Model R² Score", target: "> 0.75", achieved: "0.79", status: "Achieved" as const },
      { metric: "CMA Cap Compliance", target: "100%", achieved: "100% — zero violations", status: "Achieved" as const },
      { metric: "SHAP Coverage", target: "Every prediction", achieved: "Every prediction + plain English", status: "Achieved" as const },
      { metric: "Demo Deployment", target: "Live public URL", achieved: "ai-ticket-pricing.streamlit.app", status: "Achieved" as const },
    ],
  },

  // Risk Register
  riskRegister: {
    introduction: "I identified key risks using the ISO 31000 framework, informed directly by the CMA investigation into Ticketmaster's Oasis tour dynamic pricing (2024). This was not a theoretical exercise — it was a direct response to watching a major industry player get it catastrophically wrong in public, and building a system designed to avoid the same outcome.",
    topRisks: [
      {
        id: "RISK-001",
        category: "REGULATORY / REPUTATIONAL",
        risk: "CMA Investigation Triggered by Price Surge Event",
        likelihood: 3,
        impact: 5,
        score: 15,
        level: "CRITICAL",
        mitigation: "+22% hard cap enforced at inference time (cannot be bypassed), SHAP audit trail for every recommendation, viral shock human review requirement, full documentation available for CMA within 24 hours",
        residualScore: 6,
        owner: "Product Manager + Legal Counsel",
      },
      {
        id: "RISK-002",
        category: "REPUTATIONAL",
        risk: "Fan Backlash / Social Media Boycott Campaign Against Dynamic Pricing",
        likelihood: 3,
        impact: 4,
        score: 12,
        level: "HIGH",
        mitigation: "Price caps prevent extreme surge events, plain English SHAP explanations empower venue managers to communicate pricing rationale publicly, opt-in transparency page showing all active pricing factors",
        residualScore: 6,
        owner: "Product Manager + Venue PR Team",
      },
      {
        id: "RISK-003",
        category: "TECHNICAL",
        risk: "Model Drift as Artist and Genre Popularity Patterns Shift",
        likelihood: 4,
        impact: 3,
        score: 12,
        level: "HIGH",
        mitigation: "Monthly model performance monitoring on new event data, quarterly retraining on latest 12 months, SHAP importance drift detection, rollback plan to previous validated model version",
        residualScore: 6,
        owner: "Data Scientist",
      },
      {
        id: "RISK-004",
        category: "BUSINESS",
        risk: "Artist Manager Rejection of Dynamic Pricing Concept",
        likelihood: 4,
        impact: 3,
        score: 12,
        level: "HIGH",
        mitigation: "SHAP explanation doubles as artist conversation tool showing data-backed rationale, price cap protects artist brand from exploitation narrative, artist portal roadmap showing demand transparency dashboard",
        residualScore: 5,
        owner: "Venue Partnerships Team",
      },
      {
        id: "RISK-005",
        category: "COMPETITIVE",
        risk: "Ticketmaster Builds Transparent Pricing After CMA Pressure",
        likelihood: 3,
        impact: 4,
        score: 12,
        level: "HIGH",
        mitigation: "First-mover advantage in SMB and mid-tier segment Ticketmaster does not serve, UK-specific data moat, speed of iteration vs Ticketmaster enterprise release cycle (12-18 months), partnership option available",
        residualScore: 7,
        owner: "CEO + Product Strategy",
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
          risk: "CMA Investigation",
          trigger: "CMA formal notice OR viral coverage linking our system to a specific pricing event",
          action: "Immediate: Pause all automated recommendations, switch to human-only advisory mode → Week 1: Submit full SHAP audit trail, price cap documentation, ethics framework to CMA → Month 1: Publish transparency report, implement any CMA recommendations, appoint external ethics board reviewer",
        },
        {
          risk: "Fan Boycott Campaign",
          trigger: "#BoycottTickets trending with our venue tagged OR venue social media complaints exceeding 100 in 24 hours",
          action: "CEO statement within 4 hours: publish the SHAP explanation for the specific event that triggered backlash → Offer affected fans price explanation and, if warranted, partial refund protocol → Review and potentially reduce cap from 22% to 15% for that venue category going forward",
        },
        {
          risk: "Model Performance Degradation",
          trigger: "R² drops below 0.65 on monthly validation OR MAE exceeds 6% for 2 consecutive weeks",
          action: "Immediate rollback to previous validated model version → Root cause analysis (data drift, feature distribution shift, new venue or genre not represented in training data) → Retrain with expanded dataset before redeployment, with A/B test against previous version",
        },
      ],
      monitoringCadence: [
        { frequency: "Weekly", risks: ["Model R² and MAE on new event data", "CMA and regulatory news scan", "Social media sentiment around dynamic pricing", "Venue manager override rate and feedback"] },
        { frequency: "Monthly", risks: ["Full bias audit across venue types and genres", "Feature importance drift check via SHAP", "Competitive landscape review", "Customer NPS and churn signals"] },
        { frequency: "Quarterly", risks: ["Full model retraining decision", "CMA guidance review and framework update", "Stakeholder review with venue partners", "Ethics framework external audit"] },
      ],
    },
  },

  // Roadmap
  roadmap: {
    milestones: [
      {
        phase: "Now",
        items: [
          { title: "XGBoost model with 16 UK live events demand signals" },
          { title: "SHAP explainability on every prediction" },
          { title: "CMA-compliant ethics guardrails (±22% hard cap)" },
          { title: "Live Streamlit dashboard — ai-ticket-pricing.streamlit.app" },
        ],
        status: "completed" as const,
      },
      {
        phase: "Next",
        items: [
          { title: "Real Spotify API integration for live artist popularity scores" },
          { title: "National Rail API for real-time transport disruption signals" },
          { title: "Multi-event portfolio view for promoters managing 10+ shows" },
        ],
        status: "in-progress" as const,
      },
      {
        phase: "Later",
        items: [
          { title: "Ticketing platform API integration (FIXR, Eventbrite, Skiddle)" },
          { title: "Artist manager transparency portal with demand data dashboard" },
          { title: "Predictive sell-out probability modelling with 30/60/90 day horizon" },
        ],
        status: "planned" as const,
      },
    ],
  },

  // Learnings
  learnings: {
    wentWell: [
      "The target variable decision was the single most important product decision in the project — changing from absolute price to price adjustment percentage transformed what the model learned and made the whole project defensible",
      "Designing synthetic data with explicit, documented assumptions proved more defensible than an unexplained Kaggle CSV — every distributional choice had a stated business rationale that I can explain in an interview",
      "SHAP explainability transformed a data science project into a product — without it, the model is a black box; with it, it is a stakeholder communication tool, an artist management tool, and a CMA compliance tool simultaneously",
    ],
    challenges: [
      "First model R² = 0.997 looked impressive but was completely useless — it had learned to look up ticket tier, not model demand. High accuracy on the wrong question is worse than honest accuracy on the right one",
      "Optuna found minimal improvement over baseline (R² 0.7935 → 0.7899) — initially felt like failure, but is actually a valuable insight: the performance ceiling is genuine market noise, not fixable by tuning",
      "Balancing regulatory constraint with product ambition — the CMA context added real limits but also created a genuine, defensible differentiator that makes the project stronger, not weaker",
    ],
    doDifferently: [
      "Define the target variable before writing any model code — it is a product decision masquerading as a technical one, and getting it wrong wastes significant time",
      "Build the ethics framework simultaneously with the model, not after — the CMA caps influenced data generation design, and that integration made both better",
      "Ship the Streamlit demo earlier — a live URL that recruiters can click is worth more than a perfectly tuned model they cannot see",
    ],
    keyTakeaway: "R² = 0.997 was my worst model. R² = 0.79 was my best. The difference was understanding what I was actually trying to predict — and why a perfect score on the wrong question is worse than an honest score on the right one. That insight is the core of AI product management.",
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
export default function AIDynamicPricingProject() {
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
        
        <PersonasSection 
          introduction={projectData.personas.introduction}
          personas={projectData.personas.basic}
          deepDive={projectData.personas.deepDive}
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
          { name: "PRD — AI Dynamic Pricing", artefactId: "dynamic-pricing-prd", project: "dynamic-pricing" },
          { name: "Model Decisions — AI Dynamic Pricing", artefactId: "dynamic-pricing-model-decisions", project: "dynamic-pricing" },
          { name: "Ethics Framework — AI Dynamic Pricing", artefactId: "dynamic-pricing-ethics", project: "dynamic-pricing" },
        ]} />

        <ContactSection {...projectData.contact} />
      </main>
    </div>
  )
}
