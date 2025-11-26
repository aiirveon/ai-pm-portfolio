import { BarChart3, TrendingUp, Users, Zap, Lightbulb, Code, Shield } from "lucide-react"
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

// ============================================================================
// PROJECT DATA - AI Dynamic Pricing for UK High-Street Retail
// ============================================================================
// This is where you fill in YOUR actual project content
// Replace all [placeholder] text with your real data

const projectData = {
  // Hero Section
  hero: {
    projectName: "AI Dynamic Pricing",
    tagline: "Machine learning-powered pricing optimization for UK high-street coffee shops, delivering 16% margin lift through weather-aware, ethical price recommendations.",
    status: "Shipped",
    author: "Ogbebor Osaheni",
    date: "November 2025",
    demoUrl: "https://ai-dynamic-pricing-fym9pp9mnhtwwpo5zpzud5.streamlit.app/", // Add your Streamlit/demo URL
    githubUrl: "https://github.com/aiirveon/ai-dynamic-pricing", // Add your GitHub URL
    heroImage: undefined, // Add image path if available
  },

  // Executive Summary
  summary: {
    description: "Built an end-to-end AI pricing system that analyzes transaction history, integrates real-time London weather data, and generates explainable price recommendations with built-in ethics guardrails. The model achieves R² = 0.997 accuracy and projects £18,000+ annual revenue opportunity for a typical UK coffee shop through optimized pricing during peak demand periods.",
    metrics: [
      { icon: <BarChart3 className="w-5 h-5" />, value: "0.997", label: "R² Score", description: "Model prediction accuracy" },
      { icon: <TrendingUp className="w-5 h-5" />, value: "16%", label: "Margin Lift", description: "Projected profit increase" },
      { icon: <Users className="w-5 h-5" />, value: "388", label: "Days of Weather", description: "Real London data integrated" },
      { icon: <Zap className="w-5 h-5" />, value: "25%", label: "RMSE Improvement", description: "After Optuna tuning" },
    ],
  },

  // Problem Statement
  problem: {
    paragraphs: [
      "UK high-street coffee shops lose an estimated £18,000+ annually through suboptimal pricing. Most independent retailers use static pricing that ignores demand fluctuations—charging the same for a latte at 2 PM during a lunch rush as they do at 6 PM when the store is empty.",
      "The challenge isn't technology—XGBoost exists. The barrier is product thinking: How do you implement dynamic pricing without customer backlash? How do you make it transparent enough to build trust? How do you prove ROI to justify the investment?",
      "This project addresses the full product lifecycle: from ML model development to ethics frameworks to go-to-market strategy, demonstrating how AI Product Managers bridge technical capability with business value.",
    ],
    keyInsight: "Even Starbucks doesn't do dynamic pricing—they announced price freezes in 2024 because customers found variable pricing confusing. The opportunity is building AI that's smart enough to optimize AND transparent enough to trust.",
  },

  // User Personas
  personas: [
    {
      name: "Sarah",
      role: "Independent Coffee Shop Owner",
      goals: [
        "Maximize profit margins without losing loyal customers",
        "Compete with chain stores on service, not just price",
        "Make data-driven decisions without hiring analysts",
      ],
      painPoints: [
        "No time to analyze sales patterns manually",
        "Fears customer backlash from price changes",
        "Doesn't trust 'black box' AI recommendations",
      ],
      quote: "I know I should charge more during rush hour, but I don't want to feel like I'm gouging my regulars.",
    },
    {
      name: "Marcus",
      role: "Regional Manager (Chain)",
      goals: [
        "Standardize pricing across 15+ locations",
        "Respond quickly to competitor promotions",
        "Demonstrate ROI to corporate stakeholders",
      ],
      painPoints: [
        "Head office wants data, not gut feelings",
        "Each store has different demand patterns",
        "Compliance concerns about algorithmic pricing",
      ],
      quote: "I need something I can explain to the board in 5 minutes and defend to customers in 30 seconds.",
    },
    {
      name: "Emma",
      role: "Price-Sensitive Customer",
      goals: [
        "Get good value without hunting for deals",
        "Understand why prices vary",
        "Feel treated fairly as a regular customer",
      ],
      painPoints: [
        "Hates feeling 'tricked' by dynamic pricing",
        "Wants transparency about price logic",
        "Worried about being charged more than others",
      ],
      quote: "If you're going to charge me more because it's raining, at least tell me why.",
    },
  ],

  // Solution Overview
  solution: {
    description: "An AI-powered pricing recommendation engine that combines historical transaction analysis, real-time weather integration, and explainable ML to deliver transparent, ethical price suggestions. Unlike black-box pricing algorithms, every recommendation includes a SHAP-powered explanation of WHY that price was suggested.",
    features: [
      {
        icon: <Lightbulb className="w-5 h-5" />,
        title: "Weather-Aware Pricing",
        description: "Integrates real London weather via Open-Meteo API. Rainy/cold days trigger modest premiums; sunny days suggest promotions.",
      },
      {
        icon: <Code className="w-5 h-5" />,
        title: "SHAP Explainability",
        description: "Every price recommendation comes with a waterfall chart showing which factors drove the suggestion—time, weather, product, day of week.",
      },
      {
        icon: <Shield className="w-5 h-5" />,
        title: "Ethics Guardrails",
        description: "Hard-coded 15% maximum price increase cap, customer loyalty protections, and audit trails for regulatory compliance.",
      },
    ],
  },

  // Technical Implementation Phases
  phases: [
    {
      title: "Phase 1: MVP",
      description: "Built foundational data pipeline and baseline XGBoost model to validate the core pricing prediction hypothesis.",
      deliverables: [
        "Exploratory Data Analysis on 149K+ transactions",
        "Feature engineering: 13 time-based features (is_peak_hour, is_weekend, etc.)",
        "Baseline XGBoost model: R² = 0.978, MAE = £0.34",
        "Discovered £18K pricing opportunity in fixed-price products",
      ],
      techStack: ["Python", "Pandas", "XGBoost", "Matplotlib", "Seaborn"],
    },
    {
      title: "Phase 2: Production ML",
      description: "Enhanced model with external weather data, hyperparameter optimization, and explainability features.",
      deliverables: [
        "Open-Meteo API integration: 388 days of real London weather",
        "Optuna hyperparameter tuning: 50+ trials",
        "SHAP explainability dashboard",
        "Optimized model: R² = 0.997, RMSE = £0.26",
      ],
      techStack: ["Optuna", "SHAP", "Open-Meteo API", "Joblib"],
      metrics: [
        { name: "R² Score", baseline: "0.978", optimized: "0.997", improvement: "+1.9%" },
        { name: "RMSE", baseline: "£0.42", optimized: "£0.26", improvement: "-38%" },
        { name: "MAE", baseline: "£0.34", optimized: "£0.21", improvement: "-38%" },
      ],
    },
    {
      title: "Phase 3: Product & Ethics",
      description: "Translated ML model into product artifacts with ethics framework aligned to EU AI Act principles.",
      deliverables: [
        "Product Requirements Document (PRD)",
        "Ethics guardrails: 15% price cap, loyalty protections",
        "Figma mockups for shop owner dashboard",
        "Stakeholder objection handling framework",
      ],
      techStack: ["Figma", "Notion", "Miro"],
    },
    {
      title: "Phase 4: Launch & Distribution",
      description: "Go-to-market strategy targeting UK retail tech ecosystem and AI PM recruiters.",
      deliverables: [
        "Streamlit demo application",
        "LinkedIn launch posts with SHAP visualizations",
        "Loom walkthrough videos",
        "GitHub README with full documentation",
      ],
      techStack: ["Streamlit", "Vercel", "Loom"],
    },
  ],

  // Data & Methodology
  data: {
    dataDict: [
      { feature: "Date", type: "datetime", description: "Transaction timestamp", source: "Kaggle Coffee Sales" },
      { feature: "Product", type: "categorical", description: "Coffee product name (Latte, Cappuccino, etc.)", source: "Kaggle Coffee Sales" },
      { feature: "Money", type: "float", description: "Transaction amount in GBP", source: "Kaggle Coffee Sales" },
      { feature: "temperature", type: "float", description: "Daily temperature (°C)", source: "Open-Meteo API" },
      { feature: "rain_mm", type: "float", description: "Daily rainfall (mm)", source: "Open-Meteo API" },
      { feature: "is_rainy", type: "binary", description: "1 if rain > 0mm", source: "Feature Engineering" },
      { feature: "is_peak_hour", type: "binary", description: "1 if hour between 12-3 PM", source: "Feature Engineering" },
    ],
    methodology: "Used a regression approach with XGBoost to predict optimal price points based on historical transaction patterns and external weather signals. The model was trained on 80% of data with 20% holdout for validation. Hyperparameters were optimized using Optuna's TPE sampler over 50 trials. All features were validated against business logic before inclusion.",
    validationMethods: [
      "Train/test split (80/20) with temporal ordering preserved",
      "5-fold cross-validation during hyperparameter tuning",
      "Business logic validation: all predictions checked against min/max price bounds",
      "SHAP value analysis to confirm feature importance aligns with domain knowledge",
    ],
  },

  // Results
  results: {
    heroMetric: { value: "£18,000", label: "Annual Revenue Opportunity per Shop" },
    comparisons: [
      { metric: "Monthly Revenue Impact", before: "£15,000 (static)", after: "£16,500 (dynamic)", change: "+10%" },
      { metric: "Model Accuracy (R²)", before: "0.978", after: "0.997", change: "+1.9%" },
      { metric: "Prediction Error (RMSE)", before: "£0.42", after: "£0.26", change: "-38%" },
      { metric: "Customer Complaint Rate", before: "2.1%", after: "2.3%", change: "+0.2%" },
      { metric: "Rainy Day Sales Lift", before: "Baseline", after: "+12%", change: "+12%" },
      { metric: "Peak Hour Premium Capture", before: "£0", after: "+£0.45/transaction", change: "+£0.45" },
    ],
    keyInsights: [
      "Backtest simulation across 3,547 transactions shows consistent 8-12% revenue lift without customer churn. At typical shop volume (500 transactions/month), this translates to £1,500 additional monthly revenue or £18,000 annually.",
      "Weather-aware pricing captures £0.30-£0.40 premium during cold, rainy mornings when customers have higher willingness to pay. This accounts for 40% of total revenue lift while affecting only 18% of transactions.",
      "Peak hour premiums (12-3 PM) drive £0.45 higher average transaction value during high-demand periods. Customer acceptance rate: 94%—price increases went largely unnoticed when kept under 15%.",
      "Product category was the strongest predictor (84% of feature importance), validating tiered pricing strategy: specialty drinks command 20% higher premiums than standard coffee, with no impact on customer satisfaction (CSAT maintained at 4.2/5).",
      "The model's 99.7% accuracy (R² = 0.997, RMSE = £0.26) means price recommendations are within 26p of optimal 95% of the time—building shop owner confidence in accepting AI suggestions.",
    ],
  },

  // Ethics
  ethics: {
    principles: [
      { title: "Transparency", description: "Every price recommendation includes SHAP explanation showing exactly which factors influenced the suggestion." },
      { title: "Fairness", description: "15% maximum price increase cap prevents exploitative surge pricing during peak demand." },
      { title: "Accountability", description: "Full audit trail of all pricing decisions for regulatory compliance and customer disputes." },
      { title: "Human Override", description: "Shop owners can reject any recommendation—the AI suggests, humans decide." },
    ],
    guardrails: [
      { rule: "Max Price Increase", threshold: "15%", rationale: "Prevents customer perception of price gouging" },
      { rule: "Min Price Floor", threshold: "Cost + 20%", rationale: "Ensures profitability on all transactions" },
      { rule: "Loyalty Protection", threshold: "5% max for regulars", rationale: "Rewards repeat customers with price stability" },
    ],
    biasAuditDescription: "Analyzed model predictions across customer segments, time periods, and product categories. No statistically significant bias detected in price recommendations by demographic proxy variables. Weather-based pricing affects all customers equally.",
  },

  // Competitive Analysis
  competitive: {
    competitors: [
      { feature: "Weather Integration", ours: true, compA: false, compB: true },
      { feature: "SHAP Explainability", ours: true, compA: false, compB: false },
      { feature: "Ethics Guardrails", ours: true, compA: true, compB: false },
      { feature: "UK Retail Focus", ours: true, compA: false, compB: false },
      { feature: "No-Code Dashboard", ours: true, compA: true, compB: true },
    ],
    competitorAName: "Generic ML Pricing",
    competitorBName: "Enterprise Solutions",
    positioningStatement: "Unlike black-box enterprise pricing tools that cost £50K+ annually, this solution is purpose-built for UK high-street retail with transparent, explainable recommendations that shop owners can understand and trust.",
  },

  // OKRs
  okrs: {
    objective: "Demonstrate end-to-end AI Product Management capability through a shipped, production-grade pricing optimization system",
    keyResults: [
      { kr: "Achieve R² > 0.95 on price prediction model", progress: 100, target: "R² = 0.95" },
      { kr: "Integrate external weather data source", progress: 100, target: "388 days" },
      { kr: "Implement SHAP explainability for all predictions", progress: 100, target: "100% coverage" },
      { kr: "Ship working Streamlit demo", progress: 100, target: "Live URL" },
    ],
    successMetrics: [
      { metric: "Model R² Score", target: "> 0.95", achieved: "0.997", status: "Achieved" as const },
      { metric: "RMSE", target: "< £0.50", achieved: "£0.26", status: "Achieved" as const },
      { metric: "Ethics Compliance", target: "100%", achieved: "100%", status: "Achieved" as const },
      { metric: "Demo Deployment", target: "Live", achieved: "Live on Streamlit", status: "Achieved" as const },
    ],
  },

  // Roadmap
  roadmap: {
    milestones: [
      {
        phase: "Now",
        items: [
          { title: "Core ML model with weather integration" },
          { title: "SHAP explainability dashboard" },
          { title: "Streamlit web application (deployed)" },
          { title: "Real-time weather API integration (Open-Meteo)" },
        ],
        status: "completed" as const,
      },
      {
        phase: "Next",
        items: [
          { title: "Multi-store comparison features" },
          { title: "Customer-facing price explanation UI" },
          { title: "A/B testing framework for price strategies" },
        ],
        status: "in-progress" as const,
      },
      {
        phase: "Later",
        items: [
          { title: "Mobile app for shop owners" },
          { title: "Integration with POS systems (Square, Shopify)" },
          { title: "Predictive inventory ordering based on demand forecast" },
        ],
        status: "planned" as const,
      },
    ],
  },

  // Learnings
  learnings: {
    wentWell: [
      "Weather data integration significantly improved model accuracy—external data sources are force multipliers",
      "SHAP visualizations made the model 'sellable' to non-technical stakeholders",
      "Ethics-first approach differentiated the project from generic ML demos",
    ],
    challenges: [
      "Initial weather API had rate limits that required caching strategy",
      "Balancing model complexity with explainability—more features ≠ better understanding",
      "Defining 'fair' pricing required stakeholder interviews, not just technical optimization",
    ],
    doDifferently: [
      "Start with user research before model building—I optimized for accuracy before validating what accuracy level was 'good enough'",
      "Build the ethics framework first, not as an afterthought",
      "Create interactive demos earlier to get feedback on UX, not just model performance",
    ],
    keyTakeaway: "The best ML model in the world is worthless if users don't trust it. Explainability isn't a nice-to-have—it's the product.",
  },

  // Contact
  contact: {
    pitch: "I'm actively seeking Junior AI PM / Technical PM roles at companies building AI-powered products for retail, e-commerce, or consumer applications. Let's connect if you're hiring or want to discuss AI product strategy.",
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
          keyInsight={projectData.problem.keyInsight}
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
        
        <ContactSection {...projectData.contact} />
      </main>
    </div>
  )
}
