import {
  ProgressBar,
  TableOfContents,
  HeroSection,
  ContactSection,
} from "@/components/portfolio"
import { AlertTriangle, Scale, BarChart2, FlaskConical, CheckSquare, BookOpen, ListChecks, Lightbulb } from "lucide-react"

export const metadata = {
  title: "Loan Approval: Bias & Compliance Audit | Ogbebor Osaheni",
  description: "A hands-on exercise in building a loan approval model for a regulated domain — where Equality Act 2010 compliance and fairness questions shape every decision from the first line of code.",
  openGraph: {
    title: "Loan Approval: Bias & Compliance Audit | Ogbebor Osaheni",
    description: "A hands-on exercise in building a loan approval model for a regulated domain — where Equality Act 2010 compliance and fairness questions shape every decision from the first line of code.",
    url: "https://osaheniogbebor.com/projects/loan-approval-bias-compliance",
    images: [{ url: "https://osaheniogbebor.com/og-image.jpg", width: 1200, height: 630, alt: "Loan Approval Bias & Compliance Audit — Ogbebor Osaheni" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loan Approval: Bias & Compliance Audit | Ogbebor Osaheni",
    description: "A hands-on exercise in building a loan approval model for a regulated domain — compliance and fairness questions baked in from the start.",
    images: ["https://osaheniogbebor.com/og-image.jpg"],
  },
}

const contactData = {
  pitch: "I am actively seeking Junior AI PM / Technical PM roles at companies building AI-powered products in media, events, e-commerce, or consumer applications. Let's connect if you're hiring or want to discuss AI product strategy.",
  email: "osaheniogbebor.c@gmail.com",
  linkedIn: "https://www.linkedin.com/in/osaheni-o-94565421a/",
  github: "https://github.com/aiirveon",
  calendlyUrl: undefined,
  authorName: "Ogbebor Osaheni",
}

// ============================================================================
// LOCAL SECTION COMPONENTS
// ============================================================================

function SectionHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-lg bg-jungle-100 dark:bg-jungle-700/50 text-jungle-600 dark:text-jungle-400 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <h2 className="text-3xl font-bold text-slate-800 dark:text-white">{title}</h2>
    </div>
  )
}

function BusinessProblemSection() {
  return (
    <section id="business-problem" className="py-20 px-4 bg-slate-50 dark:bg-jungle-900/30">
      <div className="container mx-auto max-w-6xl space-y-10">
        <SectionHeader icon={<AlertTriangle className="w-6 h-6" />} title="The Business Problem & Why It Matters" />

        <div className="space-y-6 max-w-3xl">
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            A loan officer manually reviewing every application is slow, expensive, and inconsistent. An ML model
            that automates the first-pass decision solves the speed problem — but introduces three others simultaneously:
            financial risk (the model might approve loans that default), applicant harm (the model might deny loans
            to creditworthy applicants unfairly), and legal exposure (if the model's decisions correlate with
            protected characteristics, the lender is in Equality Act 2010 territory regardless of whether bias was "intended").
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            This project was a deliberate exercise in treating those three concerns as constraints from the first line
            of code — not as a compliance checklist appended to a model that was already built. The goal was to
            understand what it feels like to let regulatory framing shape modeling decisions: which features are
            off-limits before training begins, which correlations need to be audited before feature selection, and
            what "good enough" accuracy actually means when subgroup fairness is unresolved.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            { label: "Financial Risk", detail: "Approving loans that default harms the lender. The model needs to be genuinely predictive, not just high-accuracy on a skewed dataset." },
            { label: "Applicant Harm", detail: "Denying creditworthy applicants — especially along demographic lines — is both ethically wrong and legally actionable." },
            { label: "Legal Exposure", detail: "The Equality Act 2010 makes it unlawful to discriminate on the basis of protected characteristics in the provision of financial services. Intent doesn't matter; disparate impact does." },
          ].map(({ label, detail }) => (
            <div key={label} className="p-5 rounded-xl border border-slate-200 dark:border-jungle-700 bg-white dark:bg-jungle-800/30 space-y-2">
              <p className="font-semibold text-slate-800 dark:text-white">{label}</p>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ComplianceFramingSection() {
  return (
    <section id="regulatory-compliance" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl space-y-10">
        <SectionHeader icon={<Scale className="w-6 h-6" />} title="Regulatory & Compliance Framing" />

        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          Before any exploratory data analysis began, I set the compliance constraints. This sequencing was
          deliberate — the alternative (discovering a problem after building a model on prohibited features) is
          a worse outcome both ethically and practically.
        </p>

        <p className="text-sm text-slate-500 dark:text-slate-400 italic max-w-3xl">
          Note: this project's compliance framing was originally built around US law (ECOA/FCRA), then revised to
          UK law (Equality Act 2010, Data Protection Act 2018) to better match this portfolio's target market —
          an example of catching and correcting a real assumption partway through a project, not getting it right
          on the first pass.
        </p>

        <div className="p-6 md:p-8 rounded-xl border border-slate-200 dark:border-jungle-700 bg-white dark:bg-jungle-800/30 space-y-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
            <div className="space-y-3">
              <p className="font-semibold text-slate-800 dark:text-white text-lg">Equality Act 2010</p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                In the UK, the Equality Act 2010 makes it unlawful to discriminate based on nine protected
                characteristics, including sex and marriage/civil partnership — both directly relevant here.
                Official UK government guidance on the Act gives an example almost identical to this project's
                scenario: a credit union refusing a woman a loan because "a woman is less likely to have a job
                and be able to repay the loan" — explicitly named as direct sex discrimination.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                A UK-specific nuance worth noting: indirect discrimination — a neutral-looking feature that
                disadvantages a protected group without directly using it (the exact pattern found with Dependents
                and CoapplicantIncome) — is genuinely allowed under UK law if the company can show it's "a
                proportionate means of achieving a legitimate aim." This means retaining these features isn't
                automatically a compliance violation the way using Gender directly would be — but it requires a
                real, defensible business justification for each one, not just improved accuracy.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Enforcement is split across different bodies: the Financial Conduct Authority (FCA) regulates
                lending conduct but does not directly enforce the Equality Act — that's the Equality and Human
                Rights Commission's (EHRC) role. The Financial Ombudsman Service (FOS) handles individual
                complaints on a "fair and reasonable" basis but can't make a formal legal finding of a breach —
                that's reserved for the courts.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-slate-200 dark:border-jungle-700 bg-white dark:bg-jungle-800/30 space-y-3">
            <p className="font-semibold text-slate-800 dark:text-white">Gender & Married: Excluded Before Modeling</p>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Both <code className="bg-amber-100 dark:bg-amber-900/40 px-1 rounded text-xs">Gender</code> and{" "}
              <code className="bg-amber-100 dark:bg-amber-900/40 px-1 rounded text-xs">Married</code> correspond
              to the protected characteristics of sex and marriage/civil partnership under the Equality Act 2010.
              Both were dropped from the feature set before any model training. This was a non-negotiable
              constraint, not a modeling choice — documenting it explicitly is part of the compliance trail a
              regulated lender would need.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-slate-200 dark:border-jungle-700 bg-white dark:bg-jungle-800/30 space-y-3">
            <p className="font-semibold text-slate-800 dark:text-white">Dependents & Property_Area: Proxy Flags</p>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <code className="bg-amber-100 dark:bg-amber-900/40 px-1 rounded text-xs">Dependents</code> and{" "}
              <code className="bg-amber-100 dark:bg-amber-900/40 px-1 rounded text-xs">Property_Area</code> were
              flagged as potential proxies for protected attributes at this stage — before data exploration, not
              during it. Both were kept conditionally, pending a proper proxy audit. Under the Equality Act's
              indirect discrimination provisions, retaining them would require a documented, proportionate
              business justification — not just a marginal accuracy gain.
            </p>
          </div>
        </div>

        <p className="text-base text-slate-500 dark:text-slate-400 italic max-w-3xl">
          In a real production setting, these decisions would involve legal counsel and a documented model card,
          not just a notebook comment. The framing here is intentionally simplified to practice the reasoning, not
          to simulate a complete compliance process.
        </p>
      </div>
    </section>
  )
}

function ReframingSection() {
  return (
    <section id="ml-framing" className="py-20 px-4 bg-slate-50 dark:bg-jungle-900/30">
      <div className="container mx-auto max-w-6xl space-y-8">
        <SectionHeader icon={<FlaskConical className="w-6 h-6" />} title="Reframing as an ML Problem" />

        <div className="space-y-4 max-w-3xl">
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            After setting compliance constraints, the ML framing itself is relatively straightforward: binary
            classification (Loan_Status: Y/N) on structured tabular data, with a mix of numeric and categorical
            features.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Target: <span className="font-semibold text-slate-700 dark:text-slate-200">Loan_Status</span> — approved
            (68.7% of labeled records) or denied (31.3%). The class imbalance isn't severe enough to require
            resampling, but it does mean accuracy can flatter a model that just approves everything. A lazy
            baseline was established first.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Features available after compliance exclusions: ApplicantIncome, CoapplicantIncome, LoanAmount,
            Loan_Amount_Term, Credit_History, Dependents, Self_Employed, Property_Area, Education.
          </p>
        </div>
      </div>
    </section>
  )
}

function DataAndBiasAuditSection() {
  const missingDataTable = [
    { column: "LoanAmount", fill: "Median", pValue: "p=0.67 (not sig.)", flagKept: "No — clean impute" },
    { column: "Loan_Amount_Term", fill: "Mode", pValue: "p=0.81 (not sig.)", flagKept: "No — clean impute" },
    { column: "Credit_History", fill: "Mode", pValue: "p<0.001 (sig.)", flagKept: "Yes — Had_Credit_History flag added" },
    { column: "Dependents", fill: "Mode", pValue: "p=0.21 (not sig.)", flagKept: "No — clean impute" },
    { column: "Self_Employed", fill: "Mode", pValue: "p=0.43 (not sig.)", flagKept: "No — clean impute" },
  ]

  const proxyTable = [
    { pair: "Dependents → Married", correlation: "42 pts gap", verdict: "Strong proxy — flag for review" },
    { pair: "Dependents → Gender", correlation: "17.5 pts gap", verdict: "Moderate proxy — flag for review" },
    { pair: "Property_Area → Gender", correlation: "10 pts gap", verdict: "Weaker, borderline" },
    { pair: "CoapplicantIncome → Gender", correlation: "p = 0.0000003", verdict: "Very strong proxy — flag" },
    { pair: "ApplicantIncome → Gender", correlation: "p = 0.068", verdict: "Borderline — watch" },
  ]

  return (
    <section id="data-bias-audit" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl space-y-12">
        <SectionHeader icon={<BarChart2 className="w-6 h-6" />} title="The Data — Including a Pre-Modeling Bias Audit" />

        {/* Outcome gap analysis */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">Subgroup Outcome Gaps (Before Any Model)</h3>
          <p className="text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            Before fitting any model, I checked whether approval rates already differed by protected group in the
            raw data. Two findings stood out — with meaningfully different levels of confidence:
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="p-5 rounded-xl border border-slate-200 dark:border-jungle-700 bg-white dark:bg-jungle-800/30 space-y-2">
              <p className="font-semibold text-slate-800 dark:text-white">Gender Gap: 2.4 pts</p>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Female approval rate vs. male was 2.4 percentage points lower. But the female sample was small
                (n≈100 vs. n≈370 male), making this gap statistically inconclusive. It's not evidence of
                no problem — it's evidence we can't conclude either way with this sample size.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 dark:border-jungle-700 bg-white dark:bg-jungle-800/30 space-y-2">
              <p className="font-semibold text-slate-800 dark:text-white">Married Gap: 8.7 pts</p>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Unmarried applicants were approved 8.7 pts less often than married ones. The sample here was
                larger and the gap bigger — a more trustworthy signal that something worth investigating is
                present in the data, even though Married is already excluded from the model.
              </p>
            </div>
          </div>
        </div>

        {/* Proxy audit table */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">Proxy Audit Results</h3>
          <p className="text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            Excluding Gender and Married directly doesn't guarantee fairness — features that correlate strongly
            with protected attributes can re-introduce the same signal through the back door. I ran a proxy check
            on the remaining candidates:
          </p>
          <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-jungle-700">
            <table className="w-full text-sm">
              <thead className="bg-slate-100 dark:bg-jungle-800/50">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-200">Feature Pair</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-200">Correlation Signal</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-200">Verdict</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-jungle-800/30">
                {proxyTable.map((row, i) => (
                  <tr key={i} className="border-t border-slate-200 dark:border-jungle-700">
                    <td className="py-3 px-4 text-slate-800 dark:text-white font-medium">{row.pair}</td>
                    <td className="py-3 px-4 text-slate-600 dark:text-slate-300 font-mono text-xs">{row.correlation}</td>
                    <td className={`py-3 px-4 text-sm font-medium ${row.verdict.includes("Strong") || row.verdict.includes("Very") ? "text-amber-600 dark:text-amber-400" : "text-slate-500 dark:text-slate-400"}`}>
                      {row.verdict}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 italic">
            CoapplicantIncome and Dependents were kept in the model (removing every correlated feature would
            collapse predictive power), but their correlation with protected attributes is documented here and
            would require explicit justification in a compliance review.
          </p>
        </div>

        {/* Dependents flip-flop story */}
        <div className="p-6 md:p-8 rounded-xl border border-slate-200 dark:border-jungle-700 bg-white dark:bg-jungle-800/30 space-y-4">
          <h3 className="text-xl font-bold text-slate-800 dark:text-white">The Dependents Flip-Flop</h3>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Dependents caused three reversals before I reached for a proper statistical test. First pass: it looked
            predictive, keep it. Second pass: it correlated with Married (42 pts gap), flag it for exclusion.
            Third pass: I excluded it, model performance dropped noticeably, so I reconsidered. Fourth pass
            (the right move): ran a chi-square test. The test gave p=0.21 against Gender — not a statistically
            significant proxy for the gender axis specifically, which is the axis that matters most given
            the Equality Act constraint.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            The flip-flop happened because I was making the decision by intuition ("this feels like it might
            correlate") rather than evidence. The lesson isn't that Dependents is safe — the Married correlation
            is still real — it's that the sequence should have been: define the test, run the test, then decide.
            Not: decide, then look for evidence to confirm.
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400 italic">
            I didn't catch this on the first pass. The proxy audit for Gender came after I'd already made a
            preliminary inclusion decision. That order was wrong.
          </p>
        </div>

        {/* Missing data table */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">Missing Data: Cleaning Decisions</h3>
          <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-jungle-700">
            <table className="w-full text-sm">
              <thead className="bg-slate-100 dark:bg-jungle-800/50">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-200">Column</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-200">Fill Method</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-200">Missingness p-value</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-200">Flag Kept?</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-jungle-800/30">
                {missingDataTable.map((row, i) => (
                  <tr key={i} className="border-t border-slate-200 dark:border-jungle-700">
                    <td className="py-3 px-4 font-mono text-xs text-slate-800 dark:text-white">{row.column}</td>
                    <td className="py-3 px-4 text-slate-600 dark:text-slate-300">{row.fill}</td>
                    <td className="py-3 px-4 text-slate-600 dark:text-slate-300 font-mono text-xs">{row.pValue}</td>
                    <td className={`py-3 px-4 text-sm font-medium ${row.flagKept.startsWith("Yes") ? "text-jungle-600 dark:text-jungle-400" : "text-slate-500 dark:text-slate-400"}`}>
                      {row.flagKept}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            The Credit_History flag was the only missingness pattern that was itself statistically significant —
            whether someone had credit history recorded at all was predictive of the outcome, so a binary
            flag (<code className="bg-slate-100 dark:bg-slate-800 px-1 rounded text-xs">Had_Credit_History</code>) was added alongside the imputed value.
          </p>
        </div>
      </div>
    </section>
  )
}

function SuccessMetricsSection() {
  return (
    <section id="success-metrics" className="py-20 px-4 bg-slate-50 dark:bg-jungle-900/30">
      <div className="container mx-auto max-w-6xl space-y-10">
        <SectionHeader icon={<CheckSquare className="w-6 h-6" />} title="Why Accuracy Can Hide Unfairness" />

        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          Before showing any model results, it's worth building the intuition for why overall accuracy is an
          insufficient fairness check. Here's a concrete worked example:
        </p>

        <div className="p-6 md:p-8 rounded-xl border border-slate-200 dark:border-jungle-700 bg-white dark:bg-jungle-800/30 space-y-6">
          <p className="font-semibold text-slate-800 dark:text-white text-lg">The 200-Person Problem</p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Imagine a model tested on 200 people: 100 women, 100 men. Overall accuracy: 83%. Sounds fine.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-slate-50 dark:bg-jungle-900/30 space-y-1">
              <p className="font-semibold text-slate-700 dark:text-slate-200">Men (n=100)</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">92 correct → 92% accuracy</p>
            </div>
            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-900/20 space-y-1">
              <p className="font-semibold text-slate-700 dark:text-slate-200">Women (n=100)</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">74 correct → 74% accuracy</p>
            </div>
          </div>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            83% overall, but the model is 18 percentage points worse for women than men. The aggregate number
            hid a real disparity because the two groups averaged together. This is why subgroup accuracy checks
            are not optional in a regulated domain — they're the actual test of whether the model is performing
            fairly, not just performing well.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            This explainer frames what the subgroup results below are actually measuring: not a bonus metric,
            but a first-class outcome that determines whether the model is fit for use.
          </p>
        </div>
      </div>
    </section>
  )
}

function ModelChoiceSection() {
  const modelComparison = [
    { model: "Logistic Regression (tuned C=1.0)", valAcc: "83.7%", testAcc: "82.9%", note: "Final model" },
    { model: "Random Forest (tuned max_depth=5)", valAcc: "84.2%", testAcc: "82.1%", note: "Stronger on val, weaker on test" },
  ]

  return (
    <section id="model-choice" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl space-y-10">
        <SectionHeader icon={<Scale className="w-6 h-6" />} title="Model Choice — Through a Compliance Lens" />

        <div className="space-y-6 max-w-3xl">
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            In a regulated domain, interpretability isn't a nice-to-have — it's close to a legal requirement.
            The UK doesn't have a direct equivalent to the US's adverse-action-notice requirement. The closer
            match is the Data Protection Act 2018 / UK GDPR's provisions on automated decision-making: a right
            not to be subject to a solely-automated decision with a significant effect, and a right to
            "meaningful information about the logic involved." This is genuinely weaker and less specific than
            the US requirement; recent academic review concludes the UK lacks a clear statutory right to
            explanation for credit decisions.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            This actually strengthens the case for an interpretable model rather than weakening it: since the
            legal bar ("meaningful information") is loosely defined, building on a model with real, named,
            explainable coefficients makes it easier to satisfy in good faith than relying on a black-box model
            and a post-hoc explanation technique of uncertain adequacy. A Random Forest with hundreds of trees
            can't provide that in a human-readable form. Logistic Regression can: each feature has a
            coefficient, and a denial reason can be traced to the top contributing features.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            This compliance framing made Logistic Regression the preferred model from the start — before any
            numbers were compared. The fact that it also outperformed Random Forest on the test set made the
            decision unambiguous.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">Model Comparison</h3>
          <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-jungle-700">
            <table className="w-full text-sm">
              <thead className="bg-slate-100 dark:bg-jungle-800/50">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-200">Model</th>
                  <th className="text-right py-3 px-4 font-semibold text-slate-700 dark:text-slate-200">Validation Accuracy</th>
                  <th className="text-right py-3 px-4 font-semibold text-slate-700 dark:text-slate-200">Test Accuracy</th>
                  <th className="text-right py-3 px-4 font-semibold text-slate-700 dark:text-slate-200">Note</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-jungle-800/30">
                {modelComparison.map((row, i) => (
                  <tr key={i} className={`border-t border-slate-200 dark:border-jungle-700 ${i === 0 ? "bg-jungle-50 dark:bg-jungle-800/50" : ""}`}>
                    <td className="py-3 px-4 text-slate-800 dark:text-white font-medium">{row.model}</td>
                    <td className="text-right py-3 px-4 text-slate-600 dark:text-slate-300">{row.valAcc}</td>
                    <td className={`text-right py-3 px-4 font-semibold ${i === 0 ? "text-jungle-600 dark:text-jungle-400" : "text-slate-600 dark:text-slate-300"}`}>{row.testAcc}</td>
                    <td className="text-right py-3 px-4 text-slate-500 dark:text-slate-400 text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Unlike the Titanic project where both models tied exactly on test (81.0%/81.0%), here Logistic
            Regression won outright on the honest evaluation — 82.9% vs. 82.1%. The interpretability argument
            and the performance argument pointed in the same direction.
          </p>
        </div>
      </div>
    </section>
  )
}

function ExperimentSection() {
  return (
    <section id="experiment" className="py-20 px-4 bg-slate-50 dark:bg-jungle-900/30">
      <div className="container mx-auto max-w-6xl space-y-8">
        <SectionHeader icon={<FlaskConical className="w-6 h-6" />} title="The Experiment" />

        <div className="grid md:grid-cols-3 gap-4">
          {[
            { label: "Split", value: "60 / 20 / 20", detail: "Train / Validation / Test — stratified to preserve the 68.7% approval rate across all three sets" },
            { label: "Lazy Baseline", value: "68.3%", detail: "Accuracy from always predicting 'Approved' — the floor every real model has to beat" },
            { label: "Final Test Accuracy", value: "82.9%", detail: "+14.6 pts over lazy baseline, on data the model never saw during tuning" },
          ].map(({ label, value, detail }) => (
            <div key={label} className="p-5 rounded-xl border border-slate-200 dark:border-jungle-700 bg-white dark:bg-jungle-800/30 space-y-2">
              <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
              <p className="text-2xl font-bold text-jungle-600 dark:text-jungle-400">{value}</p>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>

        <div className="p-5 rounded-xl border border-slate-200 dark:border-jungle-700 bg-white dark:bg-jungle-800/30 max-w-3xl space-y-2">
          <p className="font-semibold text-slate-800 dark:text-white">Convergence Warning & Feature Scaling</p>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            The initial Logistic Regression run returned a convergence warning — the solver didn't reach a
            stable solution within the default iteration limit. Root cause: the numeric features
            (ApplicantIncome, LoanAmount) were on very different scales. After applying StandardScaler, the
            warning disappeared and the model reached a stable solution. This is a small but real technical
            judgment call: ignoring a convergence warning and treating the output as trustworthy would have
            been wrong.
          </p>
        </div>
      </div>
    </section>
  )
}

function ResultsSubgroupSection() {
  return (
    <section id="results" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl space-y-10">
        <SectionHeader icon={<BarChart2 className="w-6 h-6" />} title="Results — Including a Subgroup Breakdown" />

        {/* Confusion matrix */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">Confusion Matrix</h3>
          <div className="grid grid-cols-2 gap-3 max-w-sm">
            {[
              { label: "True Negatives (correct denials)", value: "18", accent: false },
              { label: "False Positives (wrongly approved)", value: "21", accent: false },
              { label: "False Negatives (wrongly denied)", value: "0", accent: true },
              { label: "True Positives (correct approvals)", value: "84", accent: true },
            ].map(({ label, value, accent }) => (
              <div key={label} className={`p-4 rounded-xl border ${accent ? "border-jungle-300 dark:border-jungle-600 bg-jungle-50 dark:bg-jungle-800/40" : "border-slate-200 dark:border-jungle-700 bg-white dark:bg-jungle-800/20"} space-y-1`}>
                <p className={`text-2xl font-bold ${accent ? "text-jungle-600 dark:text-jungle-400" : "text-slate-700 dark:text-slate-200"}`}>{value}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-tight">{label}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
            Zero false negatives means the model never wrongly denied someone who should have been approved —
            a strong result for applicant harm. But 21 false positives (loans approved that may default) represents
            financial risk. The model leans heavily toward approval, which is the less harmful direction for
            applicants but not a free pass from a credit-risk perspective.
          </p>
        </div>

        {/* Gender subgroup table */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">Gender Subgroup Accuracy</h3>
          <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-jungle-700">
            <table className="w-full text-sm">
              <thead className="bg-slate-100 dark:bg-jungle-800/50">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-200">Subgroup</th>
                  <th className="text-right py-3 px-4 font-semibold text-slate-700 dark:text-slate-200">n</th>
                  <th className="text-right py-3 px-4 font-semibold text-slate-700 dark:text-slate-200">Test Accuracy</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-jungle-800/30">
                <tr className="border-t border-slate-200 dark:border-jungle-700">
                  <td className="py-3 px-4 text-slate-800 dark:text-white">Female</td>
                  <td className="text-right py-3 px-4 text-slate-600 dark:text-slate-300">28</td>
                  <td className="text-right py-3 px-4 font-semibold text-amber-600 dark:text-amber-400">75.0%</td>
                </tr>
                <tr className="border-t border-slate-200 dark:border-jungle-700">
                  <td className="py-3 px-4 text-slate-800 dark:text-white">Male</td>
                  <td className="text-right py-3 px-4 text-slate-600 dark:text-slate-300">93</td>
                  <td className="text-right py-3 px-4 font-semibold text-jungle-600 dark:text-jungle-400">84.9%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Chi-square callout — the intellectual crux */}
        <div className="p-6 md:p-8 rounded-xl border border-slate-200 dark:border-jungle-700 bg-white dark:bg-jungle-800/30 space-y-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
            <div className="space-y-3">
              <p className="font-bold text-slate-800 dark:text-white text-lg">Chi-Square Result: p = 0.350</p>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                A chi-square test on the gender accuracy gap returned p=0.350 — not statistically significant.
              </p>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed font-semibold">
                This does NOT mean the model is fair. It means we cannot prove it is unfair at this sample size.
                These are not the same thing.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                With only 28 female test examples, a 9.9 percentage point accuracy gap is statistically
                indistinguishable from random noise — not because the gap is small, but because there isn't
                enough data to distinguish a real disparity from chance variation. "Not statistically
                significant" is a statement about evidence quality, not about the underlying reality. A larger
                test set might return a very different p-value on the same 9.9 pt gap.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function GoNoGoSection() {
  return (
    <section id="go-no-go" className="py-12 px-4 bg-slate-50 dark:bg-jungle-900/30">
      <div className="container mx-auto max-w-6xl">
        <div className="p-6 md:p-8 rounded-xl border border-slate-200 dark:border-jungle-700 bg-white dark:bg-jungle-800/30 space-y-4">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Go / No-Go: Would I Sign Off for Production?</h3>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            No. Not as-is.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            The model's overall accuracy (82.9%) is real and stable — it clears the lazy baseline by nearly 15
            points and held up honestly on untouched test data. The zero false negatives on applicant harm is
            a genuinely good result. But the subgroup fairness story is unresolved, and in a regulated domain,
            "unresolved" is not the same as "acceptable." A 9.9 percentage point accuracy gap between female
            and male applicants, on a test set with only 28 women, tells us almost nothing about whether the
            model is treating those groups fairly. We don't have enough evidence to conclude fairness —
            and that absence of evidence is the problem.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            A Go recommendation here would require: a larger, more balanced test set; a formal fairness metric
            (four-fifths rule or equivalent); and a documented legal review of the proxy variables still in
            the feature set. Without those, any Go sign-off would be premature.
          </p>
          <p className="text-base text-slate-500 dark:text-slate-400 italic">
            For this exercise — a practice project, not a production system — the honest conclusion is: the
            model works well enough to document as a learning artifact, but not to recommend for deployment.
            The value of the exercise was learning to reach that specific, bounded conclusion rather than
            rounding it into something cleaner.
          </p>
        </div>
      </div>
    </section>
  )
}

function WhatNextSection() {
  const gaps = [
    { title: "Formal fairness metrics", detail: "The four-fifths (80%) rule is a standard EEOC threshold for adverse impact. A proper audit would compute this for each protected class, not just eyeball an accuracy gap." },
    { title: "Fairlearn or AIF360", detail: "Specialist fairness toolkits that run calibrated subgroup analysis, compute fairness metrics across multiple definitions simultaneously, and can apply in-processing or post-processing fairness interventions." },
    { title: "Power analysis before the project", detail: "The female test set (n=28) was too small to detect a real disparity. A power analysis at the start would have flagged this sample size as insufficient for any meaningful subgroup test — and prompted either more data collection or a different experimental design." },
    { title: "Actual legal review", detail: "No proxy-variable decision made in a notebook substitutes for a legal opinion. In production, the compliance documentation and feature decisions would go to counsel, not just the model card." },
    { title: "A documented model card", detail: "The decisions, limitations, and fairness findings from this notebook would need to exist as a formal model card before any deployment — the artifact that a regulator, auditor, or downstream team would actually review." },
    { title: "Dependents capping / training-serving skew", detail: "The Dependents column had unusual values in a few rows. In a real deployment, outlier capping and explicit documentation of the training distribution would be required to prevent training-serving skew from producing unexpected behavior in production." },
  ]

  return (
    <section id="what-next" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl space-y-10">
        <SectionHeader icon={<ListChecks className="w-6 h-6" />} title="What I'd Do Next" />

        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          The gap between this exercise and production-grade practice is real and worth naming explicitly,
          not glossing over. These aren't aspirational improvements — they're the minimum bar for responsible
          deployment in a regulated domain:
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {gaps.map(({ title, detail }) => (
            <div key={title} className="p-5 rounded-xl border border-slate-200 dark:border-jungle-700 bg-white dark:bg-jungle-800/30 space-y-2">
              <p className="font-semibold text-slate-800 dark:text-white">{title}</p>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ReflectionSection() {
  return (
    <section id="reflection" className="py-20 px-4 bg-slate-50 dark:bg-jungle-900/30">
      <div className="container mx-auto max-w-6xl space-y-8">
        <SectionHeader icon={<BookOpen className="w-6 h-6" />} title="Reflection" />

        <div className="space-y-6 max-w-3xl">
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            The most instructive part of this project wasn't the model — it was the three reversals on
            Dependents. I made an inclusion decision by intuition, then reversed it when a correlation surfaced,
            then reversed again when performance dropped, and only on the fourth pass did I stop and run a
            proper statistical test. The test gave a defensible answer (p=0.21, not a significant Gender proxy)
            that I could have had from the start if I'd led with the right question instead of trying to reason
            my way to a conclusion from gut feel.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            There were also two proxy checks I missed the first time. The Gender income proxy
            (CoapplicantIncome, p=0.0000003) and the Dependents-vs-Gender gap (17.5 pts) were both caught
            late — after I'd already made preliminary feature decisions. The right sequencing was: set
            compliance constraints, run the full proxy audit, then do feature selection. I did those
            in the wrong order and had to loop back.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            What felt most different about this project compared to a standard ML exercise was how the
            compliance framing changed the sequencing of the whole thing. In a typical accuracy-first
            workflow, you build the model, then check whether it has problems. Here, the regulatory constraints
            came first: which features are off-limits, which ones might be proxies, what test the model has
            to pass before it can be used. That reordering didn't make the modeling harder — it made the
            modeling decisions more defensible, because each one had a reason that could be explained to
            someone outside the notebook.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Section 9 deliberately doesn't round the fairness finding into a clean answer. A 9.9 percentage
            point accuracy gap on n=28 is genuinely ambiguous — statistically inconclusive, practically
            concerning. The honest response to that ambiguity is to name it, not to paper over it by
            pointing at the p-value and declaring success. In a regulated domain, a No-Go recommendation
            on unresolved fairness evidence isn't a failure of the model. It's the right call.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-slate-200 dark:border-jungle-700 bg-white dark:bg-jungle-800/30 max-w-3xl">
          <p className="text-lg font-semibold text-slate-800 dark:text-white italic">
            "The compliance framing didn't constrain the modeling — it clarified it. Every feature
            decision had to be defensible, not just technically justifiable. That's a different and
            harder standard, and it's the right one for a model that affects real credit decisions."
          </p>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// PAGE COMPONENT
// ============================================================================
export default function LoanApprovalBiasCompliancePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-jungle-950">
      <ProgressBar />
      <TableOfContents sections={[
        { id: "hero", label: "Home" },
        { id: "business-problem", label: "Business Problem" },
        { id: "regulatory-compliance", label: "Compliance Framing" },
        { id: "ml-framing", label: "ML Framing" },
        { id: "data-bias-audit", label: "Data & Bias Audit" },
        { id: "success-metrics", label: "Success Metrics" },
        { id: "model-choice", label: "Model Choice" },
        { id: "experiment", label: "The Experiment" },
        { id: "results", label: "Results" },
        { id: "go-no-go", label: "Go / No-Go" },
        { id: "what-next", label: "What's Next" },
        { id: "reflection", label: "Reflection" },
        { id: "contact", label: "Contact" },
      ]} />

      <main className="lg:ml-48 pt-20 md:pt-24">
        <HeroSection
          projectName="Loan Approval: Bias & Compliance Audit"
          tagline="A hands-on exercise in building a model for a regulated domain from the ground up — where compliance and fairness questions shape every decision from the first line of code, not just the final review."
          status="Practice Project — Not Shipped"
          author="Ogbebor Osaheni"
          date="July 2026"
          demoUrl={undefined}
          githubUrl={undefined}
          heroImage={undefined}
          youtubeUrl={undefined}
          screenshotImages={undefined}
        />

        <BusinessProblemSection />
        <ComplianceFramingSection />
        <ReframingSection />
        <DataAndBiasAuditSection />
        <SuccessMetricsSection />
        <ModelChoiceSection />
        <ExperimentSection />
        <ResultsSubgroupSection />
        <GoNoGoSection />
        <WhatNextSection />
        <ReflectionSection />

        <ContactSection {...contactData} />
      </main>
    </div>
  )
}
