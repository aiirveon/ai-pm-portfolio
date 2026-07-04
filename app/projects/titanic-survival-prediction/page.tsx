import { Target, TrendingUp, GitCompare, Sparkles } from "lucide-react"

export const metadata = {
  title: "Titanic Survival Prediction | Ogbebor Osaheni",
  description: "A hands-on ML fundamentals case study: train/validation/test discipline, hyperparameter tuning, model comparison, and feature engineering, explained and defended from an AI PM perspective.",
  openGraph: {
    title: "Titanic Survival Prediction | Ogbebor Osaheni",
    description: "A hands-on ML fundamentals case study: train/validation/test discipline, hyperparameter tuning, model comparison, and feature engineering, explained and defended from an AI PM perspective.",
    url: "https://osaheniogbebor.com/projects/titanic-survival-prediction",
    images: [{ url: "https://osaheniogbebor.com/og-image.jpg", width: 1200, height: 630, alt: "Titanic Survival Prediction — Ogbebor Osaheni" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Titanic Survival Prediction | Ogbebor Osaheni",
    description: "A hands-on ML fundamentals case study: train/validation/test discipline, hyperparameter tuning, model comparison, and feature engineering, explained and defended from an AI PM perspective.",
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
  DataSection,
  ResultsSection,
  LearningsSection,
  ContactSection,
} from "@/components/portfolio"
import { TitanicPredictorWidget } from "@/components/portfolio/titanic-predictor-widget"

// ============================================================================
// PROJECT DATA - Titanic Survival Prediction: ML Fundamentals Learning Project
// ============================================================================

const projectData = {
  // Hero Section
  hero: {
    projectName: "Titanic Survival Prediction",
    tagline: "A guided, hands-on ML fundamentals exercise built to strengthen the technical judgment behind AI product decisions — not a shipped product, but a documented practice case study in data cleaning, feature engineering, model comparison, and honest evaluation.",
    status: "Practice Project — Not Shipped",
    author: "Ogbebor Osaheni",
    date: "July 2026",
    demoUrl: undefined,
    githubUrl: undefined,
    heroImage: undefined,
    youtubeUrl: undefined,
    screenshotImages: undefined,
  },

  // Executive Summary
  summary: {
    description: "Working from the classic Kaggle Titanic dataset, I ran a complete, disciplined ML workflow end-to-end: cleaned and investigated messy real-world data (including a deliberate check for confounding), engineered a new feature from raw text, tuned two different model types against a held-out validation set, and evaluated the final choice exactly once against an untouched test set. The goal wasn't the dataset — it was building the fluency to ask sharp, well-grounded questions of a data science team as an AI PM, rather than taking model performance claims at face value.",
    metrics: [
      { icon: <Target className="w-5 h-5" />, value: "81.0%", label: "Final Test Accuracy", description: "Honest, one-time evaluation on data the model never saw during tuning" },
      { icon: <TrendingUp className="w-5 h-5" />, value: "+19.5 pts", label: "Over Lazy Baseline", description: "vs. 61.5% from always predicting the majority class" },
      { icon: <GitCompare className="w-5 h-5" />, value: "2", label: "Models Compared", description: "Logistic Regression vs. Random Forest, tied on test despite a validation gap" },
      { icon: <Sparkles className="w-5 h-5" />, value: "+1.7 pts", label: "From Feature Engineering", description: "Extracting passenger Title from free-text Name — a gain that held up on test" },
    ],
  },

  // Problem Statement
  problem: {
    paragraphs: [
      "AI Product Managers don't need to write model training code, but they do need enough technical fluency to evaluate what a data science team hands them: is 82% accuracy actually good, or is it barely beating a coin flip? Did that validation improvement survive contact with real, unseen data, or was it an illusion of overfitting? Is the model's error pattern acceptable given who it affects? Without hands-on practice, these questions stay abstract.",
      "This project was built specifically to close that gap — using a well-understood, low-stakes dataset (Titanic passenger records) as a safe space to practice the exact judgment calls that come up in real production ML work: handling missing data, choosing what to optimize for, comparing models honestly, and knowing when a performance gain is real versus an artifact of tuning against the wrong data.",
      "Every step below was done manually, from scratch, in a live notebook — including several genuine mistakes and corrections along the way (an early file-path error, an initial skip of proper baseline-setting, a redundant single-model run before the tuning loop) — because the reasoning behind a decision, including the wrong turns, is the actual skill being demonstrated.",
    ],
    keyInsight: "The most valuable finding wasn't a model metric — it was discovering that a feature (Has_Cabin) which looked strongly predictive of survival was actually a confound: a proxy for passenger class, not an independent signal. Catching that distinction before trusting the feature is a rehearsal for exactly the kind of fairness and bias question a real AI PM has to raise before a model ships.",
  },

  // Solution Overview
  solution: {
    description: "Rather than jumping straight to a finished model, I treated every step as a deliberate, defensible decision: what to do with missing data, which metric to trust, which hyperparameter to prefer among ties, and which model to ship given identical test performance. Each choice is documented with its reasoning, not just its result.",
    features: [
      {
        icon: <Target className="w-5 h-5" />,
        title: "Confound Investigation",
        description: "Found that 'Has_Cabin' predicted survival (66.7% vs. 29.9%), then tested and confirmed it was really a proxy for Pclass (81.5% of 1st class had known cabins vs. 2.4% of 3rd class) — a direct rehearsal for spotting proxy-variable bias.",
      },
      {
        icon: <GitCompare className="w-5 h-5" />,
        title: "Honest Model Comparison",
        description: "Tuned Logistic Regression and Random Forest independently against validation data. Random Forest looked stronger on validation (+2.3 pts) but the two models tied exactly on the untouched test set — the validation lead didn't generalize.",
      },
      {
        icon: <Sparkles className="w-5 h-5" />,
        title: "Real Feature Engineering",
        description: "Extracted passenger Title (Mr/Miss/Mrs/Master/Other) from the free-text Name field. Unlike higher model complexity, this gain held up on the test set (+1.7 pts) — a concrete example of real signal vs. an overfitting artifact.",
      },
    ],
  },

  // Data & Methodology
  data: {
    dataDict: [
      { feature: "Pclass", type: "Ordinal (1/2/3)", description: "Ticket class, proxy for socio-economic status", source: "Kaggle Titanic dataset" },
      { feature: "Sex", type: "Binary", description: "Encoded male=0, female=1", source: "Kaggle Titanic dataset" },
      { feature: "Age", type: "Numeric", description: "177 missing values (20%), imputed with column median", source: "Kaggle Titanic dataset" },
      { feature: "SibSp / Parch", type: "Numeric", description: "Siblings/spouses and parents/children aboard", source: "Kaggle Titanic dataset" },
      { feature: "Fare", type: "Numeric", description: "Passenger fare paid", source: "Kaggle Titanic dataset" },
      { feature: "Has_Cabin", type: "Engineered, Binary", description: "1 if Cabin was recorded; investigated as a Pclass proxy rather than dropped outright", source: "Derived from Cabin (77% missing)" },
      { feature: "Embarked_Q / Embarked_S", type: "Engineered, One-hot", description: "Port of embarkation, one-hot encoded to avoid implying false ordering", source: "Derived from Embarked (2 missing, filled with mode)" },
      { feature: "Title_Miss / Title_Mr / Title_Mrs / Title_Other", type: "Engineered, One-hot", description: "Extracted from free-text Name; rare titles grouped into 'Other'", source: "Derived from Name (previously unused)" },
    ],
    methodology: "891 labeled passengers were split 60/20/20 into train/validation/test using stratified sampling, preserving the ~38% survival rate across all three sets. Logistic Regression and Random Forest were each tuned against the validation set only (C for Logistic Regression; max_depth for Random Forest), and the test set was touched exactly once, after all tuning decisions were locked in, to produce an honest final score.",
    validationMethods: [
      "Stratified 60/20/20 train/validation/test split to preserve class balance across all subsets",
      "Lazy baseline (always predict majority class) calculated first, to give every subsequent accuracy number a meaningful floor to beat",
      "Hyperparameter tuning restricted entirely to the validation set — the test set was never used to select a setting",
      "Test set evaluated exactly once, after final model and hyperparameters were chosen, to avoid test-set contamination",
      "Confusion matrix built on final test predictions to separate error types (false positives vs. false negatives) rather than relying on accuracy alone",
    ],
  },

  // Results
  results: {
    heroMetric: { value: "81.0%", label: "Final test accuracy — Logistic Regression + Title feature, evaluated once on untouched data" },
    comparisons: [
      { metric: "Lazy baseline (always predict majority class)", before: "—", after: "61.5%", change: "floor" },
      { metric: "Logistic Regression, default settings", before: "—", after: "82.0% (val)", change: "+20.5 pts vs. baseline" },
      { metric: "Logistic Regression, tuned (C=0.1)", before: "82.0% (val)", after: "83.1% (val) → 79.3% (test)", change: "+1.1 pt val" },
      { metric: "Random Forest, tuned (max_depth=5)", before: "83.1% (val, LR)", after: "85.4% (val) → 79.3% (test)", change: "tied LR on test" },
      { metric: "Logistic Regression + Title feature (final)", before: "79.3% (test)", after: "81.0% (test)", change: "+1.7 pts, held on test" },
    ],
    keyInsights: [
      "Random Forest's validation advantage over Logistic Regression (85.4% vs. 83.1%) completely disappeared on the honest test set — both models scored identically at 79.3%. Random Forest's larger validation-to-test drop (-6.1 pts vs. -3.8 pts) is consistent with more flexible models being more prone to fitting quirks of a specific validation split.",
      "The final confusion matrix (97 true negatives, 13 false positives, 21 false negatives, 48 true positives) showed nearly twice as many false negatives as false positives — the model was more likely to miss a survivor than to falsely predict survival, a pattern worth flagging in any higher-stakes real-world analogue (e.g., a triage or eligibility model).",
      "Since both tuned models tied on test accuracy, Logistic Regression was selected for the final model on interpretability grounds — added model complexity earned no measurable performance benefit in this case.",
    ],
  },

  // Learnings
  learnings: {
    wentWell: [
      "Establishing a lazy baseline (61.5%) before trusting any accuracy number made every later result interpretable — an 82% accuracy figure means very little on its own without that floor for comparison.",
      "Investigating why Has_Cabin correlated with survival, rather than accepting the correlation at face value, surfaced a real confound (Pclass) — good practice for spotting proxy variables before they mislead a fairness or explainability review.",
      "Re-running hyperparameter tuning after adding the Title feature (rather than assuming the old best setting still applied) revealed the optimal C actually shifted — a reminder that tuning decisions are tied to a specific feature set, not permanent.",
    ],
    challenges: [
      "Early on, a model was trained and validated without first establishing what accuracy would look like from doing nothing intelligent at all (the lazy baseline) — a step later corrected, but a useful reminder that context should be established before results are judged.",
      "Distinguishing a real, generalizable model improvement (Title feature engineering) from a fake one (Random Forest's validation-only lead) required actually running the honest test evaluation for both — the two looked similar at the validation stage alone.",
      "Understanding False Positive vs. False Negative terminology took several passes with concrete before/after examples (spam filters, medical triage) rather than the formal definition alone — a reminder that plain-language framing matters as much as technical accuracy when explaining model behavior to non-technical stakeholders.",
    ],
    doDifferently: [
      "Establish the lazy baseline as the very first step in any future model evaluation, before training the first real model, rather than adding it in retrospectively.",
      "Extract and test Title (and similar free-text-derived features) earlier in the process, since it was the single highest-leverage, cheapest improvement in the entire project — more valuable than any hyperparameter tuning attempted.",
      "Build the confusion-matrix error breakdown alongside the very first model, not only at the end, so that error-type tradeoffs (false positives vs. false negatives) inform earlier modeling decisions, not just the final write-up.",
    ],
    keyTakeaway: "The technical mechanics of a model — accuracy, tuning, cross-validation — are learnable in an afternoon. The harder, more valuable skill is the discipline to keep asking 'compared to what?' and 'does this improvement actually hold up on data it wasn't tuned against?' at every step. That discipline, not the specific Titanic result, is what transfers directly to evaluating a real production model.",
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
export default function TitanicSurvivalPredictionProject() {
  return (
    <div className="min-h-screen bg-white dark:bg-jungle-950">
      <ProgressBar />
      <TableOfContents sections={[
        { id: "hero", label: "Home" },
        { id: "executive-summary", label: "Executive Summary" },
        { id: "problem", label: "Problem Statement" },
        { id: "solution", label: "Solution" },
        { id: "data", label: "Data & Methodology" },
        { id: "try-the-model", label: "Try the Model" },
        { id: "results", label: "Results" },
        { id: "would-i-ship-this", label: "Would I Ship This?" },
        { id: "learnings", label: "Learnings" },
        { id: "contact", label: "Contact" },
      ]} />

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
        />

        <DataSection
          dataDict={projectData.data.dataDict}
          methodology={projectData.data.methodology}
          validationMethods={projectData.data.validationMethods}
        />

        <section id="try-the-model" className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Try the Model Yourself</h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
                  Adjust the passenger details below to see what my trained Logistic Regression model would have
                  predicted — computed live, using its real coefficients.
                </p>
              </div>
              <TitanicPredictorWidget />
            </div>
          </div>
        </section>

        <ResultsSection
          heroMetric={projectData.results.heroMetric}
          comparisons={projectData.results.comparisons}
          keyInsights={projectData.results.keyInsights}
        />

        <section id="would-i-ship-this" className="py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="p-6 md:p-8 rounded-xl border border-slate-200 dark:border-jungle-700 bg-jungle-50 dark:bg-jungle-800/30 space-y-4">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Would I Ship This?</h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                As a standalone accuracy number, 81% sounds shippable — it clears the lazy baseline by nearly 20
                points and holds up on data the model never saw during tuning. But accuracy alone isn't the whole
                story. The confusion matrix shows the model makes almost twice as many false negatives (21) as
                false positives (13) — it is more likely to miss a real survivor than to falsely flag one.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                In a real-world analogue with the same error shape — a hospital triage model, or an eligibility
                screener deciding who gets flagged for urgent review — that imbalance would be disqualifying on
                its own. Under-flagging the group you most need to catch is a worse failure mode than over-flagging,
                and no amount of overall accuracy makes up for it. I would not ship this model as-is into a
                high-stakes decision. I would ship it as a transparent, well-understood <em>baseline</em> —
                one explicitly optimized next for recall on the positive class, re-evaluated with a cost-weighted
                metric rather than plain accuracy, and reviewed against real subgroup performance (not just Sex and
                Pclass in aggregate) before any higher-stakes use.
              </p>
              <p className="text-base text-slate-500 dark:text-slate-400 italic">
                For this specific dataset — a low-stakes, historical practice exercise — the honest answer is:
                yes, publish it as a documented learning artifact. The exercise here was building the judgment
                to make that distinction correctly, not proving the Titanic model itself is production-ready.
              </p>
            </div>
          </div>
        </section>

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
