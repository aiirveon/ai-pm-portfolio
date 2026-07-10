import Link from "next/link"
import {
  ProgressBar,
  TableOfContents,
  HeroSection,
  ContactSection,
} from "@/components/portfolio"
import {
  AlertTriangle,
  Activity,
  GitBranch,
  FlaskConical,
  Cpu,
  DollarSign,
  Layers,
  Users,
  ExternalLink,
} from "lucide-react"

export const metadata = {
  title: "Model Maintenance: Continuous Monitoring & Drift Detection | Ogbebor Osaheni",
  description: "A learning project exploring what happens to an ML model after it ships — drift detection, retraining triggers, and a CI/CD pipeline designed around keeping a production model healthy.",
  openGraph: {
    title: "Model Maintenance: Continuous Monitoring & Drift Detection | Ogbebor Osaheni",
    description: "A learning project exploring what happens to an ML model after it ships — drift detection, retraining triggers, and a CI/CD pipeline designed around keeping a production model healthy.",
    url: "https://osaheniogbebor.com/projects/model-monitoring-drift-detection",
    images: [{ url: "https://osaheniogbebor.com/og-image.jpg", width: 1200, height: 630, alt: "Model Monitoring & Drift Detection — Ogbebor Osaheni" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Model Maintenance: Continuous Monitoring & Drift Detection | Ogbebor Osaheni",
    description: "A learning project exploring what happens to an ML model after it ships — drift detection, retraining, and keeping a production model healthy.",
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

// 1. Problem & Stakes
function ProblemAndStakesSection() {
  return (
    <section id="problem-and-stakes" className="py-20 px-4 bg-slate-50 dark:bg-jungle-900/30">
      <div className="container mx-auto max-w-6xl space-y-10">
        <SectionHeader icon={<AlertTriangle className="w-6 h-6" />} title="The Business Problem & What's at Stake" />

        <div className="space-y-6 max-w-3xl">
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            The Loan Approval model from Project 2 was trained, tested, and honestly evaluated — 82.9% test accuracy,
            a documented Go/No-Go decision, known limitations. But that whole project was a single snapshot in time.
            Nothing about it addresses what happens six months after launch, once applicant patterns shift, once new
            batches of data start arriving, once the model that was "good enough to reference" quietly stops being
            accurate. Most companies treat "we shipped the model" as the finish line. It isn't. This project is
            about the part that gets skipped: building a small, real system for noticing when a model starts to fail,
            and having a plan for what to do about it before real harm accumulates.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              label: "Undetected Drift",
              detail: "Model drift — when real-world accuracy degrades because incoming data no longer matches training data — is one of the most common, well-documented ways production ML systems fail. Not from a bad model at launch, but from a good model nobody kept watching.",
            },
            {
              label: "Financial Cost",
              detail: "More bad loans approved as the model's known lean toward over-approval worsens — a direct, quantifiable financial loss, modeled later in this case study.",
            },
            {
              label: "Fairness Risk",
              detail: "Any degradation could widen Project 2's already-unresolved gender accuracy gap — tying model health directly back to the unresolved compliance question from that project, not just financial cost.",
            },
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

// 2. Defining a Healthy Model
function DefiningHealthySection() {
  const tiers = [
    {
      color: "green" as const,
      label: "Green",
      threshold: "Accuracy within ~80–85% (near baseline)",
      action: "No action needed.",
      actionColor: "jungle" as const,
    },
    {
      color: "yellow" as const,
      label: "Yellow",
      threshold: "Accuracy 75–80%, OR CM detects a statistically significant input shift",
      action: "Logged alert. Pause automatic retraining — investigate WHY the shift happened before retraining on it (see Architectural Discovery section).",
      actionColor: "amber" as const,
    },
    {
      color: "red" as const,
      label: "Red",
      threshold: "Accuracy below 75%, OR false positive rate spikes sharply, OR the subgroup fairness gap widens",
      action: "Stop using the model for new decisions. Escalate immediately — fairness-related Red triggers route to compliance, not just engineering.",
      actionColor: "red" as const,
    },
  ]

  return (
    <section id="defining-healthy" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl space-y-10">
        <SectionHeader icon={<Activity className="w-6 h-6" />} title="Defining What 'Healthy' Means" />

        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          Before building any monitoring script, "healthy" and "degraded" had to be defined in advance — a business
          judgment call, not a technical detail, since it's the rule the monitoring system would enforce automatically later.
        </p>

        <div className="space-y-4">
          {tiers.map(({ color, label, threshold, action, actionColor }) => {
            const borderClass =
              color === "green" ? "border-jungle-300 dark:border-jungle-600"
              : color === "yellow" ? "border-amber-300 dark:border-amber-600"
              : "border-red-300 dark:border-red-600"
            const bgClass =
              color === "green" ? "bg-jungle-50 dark:bg-jungle-800/30"
              : color === "yellow" ? "bg-amber-50 dark:bg-amber-900/20"
              : "bg-red-50 dark:bg-red-900/20"
            const labelClass =
              color === "green" ? "text-jungle-700 dark:text-jungle-300"
              : color === "yellow" ? "text-amber-700 dark:text-amber-300"
              : "text-red-700 dark:text-red-300"
            const dot =
              color === "green" ? "🟢" : color === "yellow" ? "🟡" : "🔴"
            const actionClass =
              actionColor === "jungle" ? "text-jungle-600 dark:text-jungle-400"
              : actionColor === "amber" ? "text-amber-600 dark:text-amber-400"
              : "text-red-600 dark:text-red-400"

            return (
              <div key={label} className={`p-6 rounded-xl border-2 ${borderClass} ${bgClass} grid md:grid-cols-[160px_1fr_1fr] gap-4 items-start`}>
                <div className="flex items-center gap-2">
                  <span className="text-xl">{dot}</span>
                  <span className={`text-lg font-bold ${labelClass}`}>{label}</span>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Threshold</p>
                  <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">{threshold}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Action</p>
                  <p className={`text-sm font-medium leading-relaxed ${actionClass}`}>{action}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="p-5 rounded-xl border border-slate-200 dark:border-jungle-700 bg-white dark:bg-jungle-800/30 max-w-3xl space-y-2">
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            These thresholds aren't arbitrary — they're anchored to this project's own validated baseline (82.9% accuracy,
            ~54% false positive rate from Project 2's real confusion matrix), following the Value Threshold / Cost Cap model
            described in <em>The Profitable AI Advantage</em>. Checked this reasoning against real industry practice
            afterward: it holds up as a legitimate simplified version of a real severity-tier system, though production
            systems typically name specific ownership per tier and use adaptive thresholds alongside static ones — both
            real gaps, addressed honestly in the Decision Framework section below.
          </p>
        </div>
      </div>
    </section>
  )
}

// 3. Pipeline Diagram — with rendered SVG
function PipelineDiagramSection() {
  return (
    <section id="pipeline-diagram" className="py-20 px-4 bg-slate-50 dark:bg-jungle-900/30">
      <div className="container mx-auto max-w-6xl space-y-10">
        <SectionHeader icon={<GitBranch className="w-6 h-6" />} title="The MLOps Pipeline" />

        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          Four pieces, each doing one job: CI validates a model before it's trusted, CD promotes a validated model
          into production, CT retrains on new data, and CM watches for drift in the input data itself. Built and
          tested each one against real project data — including one real, working dependency: this project's
          validation gate is actively checked by the Loan Policy Assistant agent before it will load a model.
        </p>

        {/* SVG Pipeline Diagram */}
        <div className="flex justify-center overflow-x-auto">
          <svg
            viewBox="0 0 615 620"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-xl"
            aria-label="MLOps pipeline flowchart"
          >
            {/* ── Box styles ── */}
            {/* Main pipeline boxes: x=160, width=200 */}
            {/* Side box: x=360, width=140 */}

            {/* Box 1: Loaded Data */}
            <rect x="160" y="20" width="200" height="64" rx="10"
              className="fill-slate-100 dark:fill-slate-700 stroke-slate-400 dark:stroke-slate-500"
              strokeWidth="1.5" />
            <text x="260" y="47" textAnchor="middle"
              className="fill-slate-700 dark:fill-slate-200"
              fontSize="13" fontWeight="600">Loaded Data</text>
            <text x="260" y="67" textAnchor="middle"
              className="fill-slate-500 dark:fill-slate-400"
              fontSize="11">new applicant batch</text>

            {/* Arrow 1→2 */}
            <line x1="260" y1="84" x2="260" y2="114"
              className="stroke-slate-400 dark:stroke-slate-500"
              strokeWidth="1.5" markerEnd="url(#arrowhead)" />

            {/* Box 2: CM Drift Check */}
            <rect x="160" y="114" width="200" height="64" rx="10"
              className="fill-jungle-100 dark:fill-jungle-700/50 stroke-jungle-400 dark:stroke-jungle-500"
              strokeWidth="1.5" />
            <text x="260" y="141" textAnchor="middle"
              className="fill-jungle-700 dark:fill-jungle-300"
              fontSize="13" fontWeight="600">CM: Drift Check</text>
            <text x="260" y="161" textAnchor="middle"
              className="fill-jungle-600 dark:fill-jungle-400"
              fontSize="11">KS test — p-value gate</text>

            {/* Arrow 2→3 */}
            <line x1="260" y1="178" x2="260" y2="208"
              className="stroke-slate-400 dark:stroke-slate-500"
              strokeWidth="1.5" markerEnd="url(#arrowhead)" />

            {/* Box 3: CI Validation Gate */}
            <rect x="160" y="208" width="200" height="64" rx="10"
              className="fill-jungle-100 dark:fill-jungle-700/50 stroke-jungle-400 dark:stroke-jungle-500"
              strokeWidth="1.5" />
            <text x="260" y="235" textAnchor="middle"
              className="fill-jungle-700 dark:fill-jungle-300"
              fontSize="13" fontWeight="600">CI: Validation Gate</text>
            <text x="260" y="255" textAnchor="middle"
              className="fill-jungle-600 dark:fill-jungle-400"
              fontSize="11">accuracy + fairness check</text>

            {/* Arrow 3→4 */}
            <line x1="260" y1="272" x2="260" y2="302"
              className="stroke-slate-400 dark:stroke-slate-500"
              strokeWidth="1.5" markerEnd="url(#arrowhead)" />

            {/* Box 4: CD Promote Model */}
            <rect x="160" y="302" width="200" height="64" rx="10"
              className="fill-jungle-100 dark:fill-jungle-700/50 stroke-jungle-400 dark:stroke-jungle-500"
              strokeWidth="1.5" />
            <text x="260" y="329" textAnchor="middle"
              className="fill-jungle-700 dark:fill-jungle-300"
              fontSize="13" fontWeight="600">CD: Promote Model</text>
            <text x="260" y="349" textAnchor="middle"
              className="fill-jungle-600 dark:fill-jungle-400"
              fontSize="11">deploy or rollback</text>

            {/* Arrow 4→5 */}
            <line x1="260" y1="366" x2="260" y2="396"
              className="stroke-slate-400 dark:stroke-slate-500"
              strokeWidth="1.5" markerEnd="url(#arrowhead)" />

            {/* Box 5: CT Retrain */}
            <rect x="160" y="396" width="200" height="64" rx="10"
              className="fill-amber-100 dark:fill-amber-900/30 stroke-amber-400 dark:stroke-amber-600"
              strokeWidth="1.5" />
            <text x="260" y="423" textAnchor="middle"
              className="fill-amber-700 dark:fill-amber-300"
              fontSize="13" fontWeight="600">CT: Retrain</text>
            <text x="260" y="443" textAnchor="middle"
              className="fill-amber-600 dark:fill-amber-400"
              fontSize="11">triggered by drift gate</text>

            {/* Dashed feedback line: CT → CI (left side) */}
            <path
              d="M 160 428 L 100 428 L 100 240 L 160 240"
              fill="none"
              className="stroke-amber-400 dark:stroke-amber-500"
              strokeWidth="1.5"
              strokeDasharray="5 4"
              markerEnd="url(#arrowheadAmber)"
            />
            <text x="75" y="340" textAnchor="middle"
              className="fill-amber-600 dark:fill-amber-400"
              fontSize="10"
              transform="rotate(-90, 75, 340)"
            >retrain loop</text>

            {/* Side box: Loan Policy Assistant — same size as main boxes (200×64) */}
            <line x1="360" y1="334" x2="395" y2="334"
              className="stroke-violet-400 dark:stroke-violet-500"
              strokeWidth="1.5"
              strokeDasharray="4 3"
              markerEnd="url(#arrowheadViolet)"
            />
            <rect x="395" y="302" width="200" height="64" rx="10"
              className="fill-violet-50 dark:fill-violet-900/30 stroke-violet-400 dark:stroke-violet-500"
              strokeWidth="1.5" />
            <text x="495" y="329" textAnchor="middle"
              className="fill-violet-700 dark:fill-violet-300"
              fontSize="13" fontWeight="600">Loan Policy</text>
            <text x="495" y="349" textAnchor="middle"
              className="fill-violet-500 dark:fill-violet-400"
              fontSize="11">Assistant (Project 3)</text>

            {/* Arrow marker definitions */}
            <defs>
              <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6"
                  className="fill-slate-400 dark:fill-slate-500" />
              </marker>
              <marker id="arrowheadAmber" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6"
                  className="fill-amber-400 dark:fill-amber-500" />
              </marker>
              <marker id="arrowheadViolet" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6"
                  className="fill-violet-400 dark:fill-violet-500" />
              </marker>
            </defs>
          </svg>
        </div>

        {/* Cross-project dependency callout */}
        <div className="p-5 rounded-xl border-2 border-violet-300 dark:border-violet-600 bg-violet-50 dark:bg-violet-900/20 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-shrink-0">
            <ExternalLink className="w-6 h-6 text-violet-600 dark:text-violet-400" />
          </div>
          <div className="flex-grow space-y-1">
            <p className="font-semibold text-violet-800 dark:text-violet-200">Real cross-project dependency: Loan Policy Assistant</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              The CD stage in this pipeline connects to the Loan Policy Assistant (Project 3) — a live dependency, not a hypothetical one. When a new model is promoted, the RAG assistant's prediction tool must be updated to use it. This diagram reflects that actual coupling.
            </p>
          </div>
          <Link
            href="/projects/loan-policy-assistant"
            className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium transition-colors"
          >
            View Project 3 <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}

// Small inline icon to avoid import overhead
function ArrowRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
    </svg>
  )
}

// 4. Drift Simulation
function DriftSimulationSection() {
  return (
    <section id="drift-simulation" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl space-y-10">
        <SectionHeader icon={<FlaskConical className="w-6 h-6" />} title="Drift Simulation & Detection" />

        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          Split the original 614 applicants into two batches to simulate a before/after: Batch 1 (first 400 rows,
          "day one") and Batch 2 (remaining 214 rows, "new applicants who arrived later").
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-jungle-200 dark:border-jungle-700 bg-jungle-50 dark:bg-jungle-800/30 space-y-3">
            <p className="font-semibold text-jungle-700 dark:text-jungle-300">Sanity Check — No Real Change</p>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Ran a Kolmogorov-Smirnov test comparing ApplicantIncome between Batch 1 and the real, untouched Batch 2.
            </p>
            <p className="text-3xl font-bold text-jungle-600 dark:text-jungle-400 font-mono">p = 0.681</p>
            <p className="text-sm text-slate-500 dark:text-slate-400 italic leading-relaxed">
              Correctly reports no meaningful drift — both batches are genuinely similar, as expected.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-amber-200 dark:border-amber-700/50 bg-amber-50 dark:bg-amber-900/20 space-y-3">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
              <p className="font-semibold text-amber-700 dark:text-amber-300">Deliberate Shift — Real Drift</p>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Artificially raised every ApplicantIncome value in Batch 2 by 40%, simulating a real-world shift like
              income inflation or a genuine change in applicant profile, then re-ran the same test.
            </p>
            <p className="text-3xl font-bold text-amber-600 dark:text-amber-400 font-mono">p = 0.0000000011</p>
            <p className="text-sm text-slate-500 dark:text-slate-400 italic leading-relaxed">
              An overwhelming, unambiguous "real drift detected" result.
            </p>
          </div>
        </div>

        <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          The detector doesn't cry wolf on ordinary variation, and doesn't miss a real, meaningful shift when one
          exists — the two properties a monitoring system actually needs to be trustworthy.
        </p>
      </div>
    </section>
  )
}

// 5. Architectural Discovery — violet accent, distinct visual treatment
function ArchitecturalDiscoverySection() {
  return (
    <section id="architectural-discovery" className="py-20 px-4 bg-violet-50 dark:bg-violet-950/30">
      <div className="container mx-auto max-w-6xl space-y-10">
        {/* Distinct header — violet, not jungle */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-violet-100 dark:bg-violet-700/40 text-violet-600 dark:text-violet-400 flex items-center justify-center flex-shrink-0">
            <Cpu className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
            A Real Architectural Gap: CT Doesn't Catch Its Own Drift
          </h2>
        </div>

        {/* Centerpiece callout card */}
        <div className="relative p-8 rounded-2xl border-2 border-violet-400 dark:border-violet-500 bg-white dark:bg-violet-900/20 overflow-hidden">
          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-violet-100 dark:bg-violet-800/30 rounded-bl-full opacity-60" />

          <div className="relative space-y-2 mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-violet-500 dark:text-violet-400">Notable Technical Finding</p>
          </div>

          {/* Four paragraphs — spaced deliberately, not a wall of text */}
          <div className="relative space-y-7 max-w-3xl">
            <p className="text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
              After building CI, CD, and CT, I tried something that seemed like an obvious next test: feed the
              artificially-shifted Batch 2 — the same +40% income data the drift detector correctly flagged above —
              into the CT retraining function, expecting the resulting model to fail CI or at least show a real
              difference. It didn't. The retrained model came back with identical numbers to the non-shifted version:
              81.3% accuracy, 53.8% false positive rate, CI passed cleanly.
            </p>

            <p className="text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
              Why this happens, and it's not a bug: StandardScaler re-centers and re-scales whatever data it's given,
              every time it's fit. When CT retrains from scratch on the shifted data, the scaler simply adapts to the
              new income range rather than treating it as an anomaly — the model isn't "fooled" by drift, it just
              doesn't have a mechanism to notice the input distribution moved, because retraining re-normalizes around
              whatever it's handed.
            </p>

            <p className="text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
              The real finding this reveals: CI and CT, as built, only check whether a model performs acceptably on
              data drawn from its own — possibly already-shifted — training distribution. Neither one compares against
              the original baseline distribution. Only CM's drift test, which explicitly compares new data against the
              untouched Batch 1, actually catches a shift. This means the correct pipeline order isn't CI → CD → CT → CM
              as four independent, parallel checks; it should be CM running first, before CT retrains at all — if CM
              detects drift, that's a signal for a human to investigate the cause of the shift before blindly retraining
              on it, not a green light to retrain automatically.
            </p>

            {/* Reflective close — visually set apart */}
            <div className="border-l-4 border-violet-300 dark:border-violet-600 pl-5 py-1">
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed italic">
                Discovering that a system's pieces don't compose the way you initially assumed is a genuinely realistic,
                valuable outcome of building a monitoring pipeline for the first time — and it's a more honest, more
                interesting result than if CI had simply "caught" the drift the way I expected going in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// 6. Business Impact — real calculation table
function BusinessImpactSection() {
  const calcRows = [
    {
      step: "1",
      description: "Approvals per month",
      value: "500 × 68.3% ≈ 342 approved/month",
    },
    {
      step: "2",
      description: "Bad loans/month, healthy baseline",
      value: "158 should-be-denied × 54% ≈ 85 bad loans/month ≈ £1,700,000/month in expected losses (baseline reference cost, not the cost of drift)",
    },
    {
      step: "3",
      description: "Drift scenario: false positive rate worsens to 64%",
      value: "158 × 64% ≈ 101 bad loans/month (+16/month vs. baseline)",
    },
    {
      step: "4",
      description: "Cost of 6 months undetected",
      value: "16/month × 6 months × £20,000 ≈ £1,920,000 in additional losses",
    },
    {
      step: "5",
      description: "Savings from early detection (caught in ~1 week vs. 6 months)",
      value: "≈96% reduction in the damage window ≈ £1,843,000 saved",
    },
  ]

  return (
    <section id="business-impact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl space-y-8">
        <SectionHeader icon={<DollarSign className="w-6 h-6" />} title="Business Impact — A Step-by-Step Calculation" />

        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          My first pass at this section was a placeholder — a guessed percentage with a disclaimer attached, not a
          real calculation. Rebuilding it here with every assumption stated and every step shown, following the Value
          Threshold / Cost Cap structure from <em>The Profitable AI Advantage</em>.
        </p>

        {/* Assumptions — two callout boxes side by side */}
        <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
          <div className="p-4 rounded-xl border border-slate-200 dark:border-jungle-700 bg-slate-50 dark:bg-jungle-900/30 space-y-1">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Explicit Assumptions</p>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              500 loan applications/month (small lender) · £50,000 average loan size · 40% Loss Given Default
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500 italic">All explicitly assumed, not measured</p>
          </div>
          <div className="p-4 rounded-xl border border-jungle-200 dark:border-jungle-700 bg-jungle-50 dark:bg-jungle-800/30 space-y-1">
            <p className="text-xs font-bold uppercase tracking-wide text-jungle-600 dark:text-jungle-400">From Project 2 — Real Numbers</p>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              68.3% baseline approval rate · ~54% false positive rate among should-be-denied cases · ~31.7% of applicants should genuinely be denied
            </p>
            <p className="text-xs text-jungle-500 dark:text-jungle-400 italic">From Project 2's actual model evaluation</p>
          </div>
        </div>

        {/* Calculation table */}
        <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-jungle-700">
          <table className="w-full text-sm">
            <thead className="bg-slate-100 dark:bg-jungle-800/50">
              <tr>
                <th className="text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-200 w-16">Step</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-200">Description</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-700 dark:text-slate-200">Result</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-jungle-800/30">
              {calcRows.map((row, i) => (
                <tr key={i} className={`border-t border-slate-200 dark:border-jungle-700 ${i === calcRows.length - 1 ? "bg-jungle-50 dark:bg-jungle-800/50" : ""}`}>
                  <td className="py-3 px-4 font-mono text-xs text-slate-500 dark:text-slate-400 align-top">{row.step}</td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-300 align-top">{row.description}</td>
                  <td className={`py-3 px-4 align-top leading-relaxed ${i === calcRows.length - 1 ? "font-semibold text-jungle-600 dark:text-jungle-400" : "text-slate-700 dark:text-slate-200"}`}>
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-slate-500 dark:text-slate-400 italic max-w-3xl leading-relaxed">
          Every number above traces back to either a real, measured project result or an explicitly labeled assumption —
          the value of this structure over a single guessed percentage is that every input can be challenged or refined
          with real figures the moment they exist.
        </p>
      </div>
    </section>
  )
}

// 7. Decision Framework
function DecisionFrameworkSection() {
  return (
    <section id="decision-framework" className="py-20 px-4 bg-slate-50 dark:bg-jungle-900/30">
      <div className="container mx-auto max-w-6xl space-y-10">
        <SectionHeader icon={<Layers className="w-6 h-6" />} title="Decision Framework: When to Retrain vs. Rollback" />

        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          Every monitoring signal needs a predefined answer to "what happens next" — decided in advance, not improvised
          once a real alert fires. This builds directly on the Green/Yellow/Red tiers above, but adds a specific action
          for each — and critically, the correction from the Architectural Discovery finding about when retraining is
          even the right move.
        </p>

        <div className="grid md:grid-cols-3 gap-5">
          {/* Green */}
          <div className="p-6 rounded-xl border-2 border-jungle-300 dark:border-jungle-600 bg-jungle-50 dark:bg-jungle-800/30 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xl">🟢</span>
              <p className="text-lg font-bold text-jungle-700 dark:text-jungle-300">Green</p>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              No action. The system keeps running as-is.
            </p>
            <p className="text-xs font-medium text-jungle-600 dark:text-jungle-400 uppercase tracking-wide">Action: Continue</p>
          </div>

          {/* Yellow */}
          <div className="p-6 rounded-xl border-2 border-amber-300 dark:border-amber-600 bg-amber-50 dark:bg-amber-900/20 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xl">🟡</span>
              <p className="text-lg font-bold text-amber-700 dark:text-amber-300">Yellow</p>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              My original assumption was that a Yellow signal should trigger automatic retraining. The Architectural
              Discovery proved that's wrong: retraining on drifted data without understanding why just produces a model
              adapted to the drift, not one checked against it. Corrected action: CM's drift signal pauses automatic
              retraining and triggers human investigation into why the input distribution shifted — is it a temporary
              blip, a real population change, or an upstream data bug? Only once that's understood should CT run, and
              its output must still pass CI before promotion.
            </p>
            <p className="text-xs font-medium text-amber-600 dark:text-amber-400 uppercase tracking-wide">Action: Investigate First, Then Retrain</p>
          </div>

          {/* Red */}
          <div className="p-6 rounded-xl border-2 border-red-300 dark:border-red-600 bg-red-50 dark:bg-red-900/20 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xl">🔴</span>
              <p className="text-lg font-bold text-red-700 dark:text-red-300">Red</p>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Stop using the model for new decisions, escalate immediately — not a scheduled retrain. Given Project 2's
              unresolved gender fairness finding, a Red trigger on subgroup gap widening should route to whoever owns
              fairness/compliance review, not just engineering — this could be a legal exposure question, not only a
              technical one.
            </p>
            <p className="text-xs font-medium text-red-600 dark:text-red-400 uppercase tracking-wide">Action: Stop &amp; Escalate</p>
          </div>
        </div>

        {/* Rollback callout — bordered inset, visually distinct from tier cards */}
        <div className="border-l-4 border-slate-400 dark:border-slate-500 pl-6 py-2 max-w-3xl space-y-3">
          <p className="font-semibold text-slate-800 dark:text-white">Rollback as a distinct fourth option, not just "retrain harder"</p>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            The deployment record built earlier makes rollback possible in principle — every promoted model has a
            timestamped record of its own validated performance, so a Red-tier failure in a newly-promoted model can be
            answered by reverting to the last known-good record and model file, rather than always reaching for a fresh
            retrain.
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Retraining assumes new data will produce a better model; rollback assumes the previous model was fine and
            something about the promotion process failed. Conflating them — always retraining, never rolling back — is
            itself a design mistake worth naming explicitly.
          </p>
        </div>
      </div>
    </section>
  )
}

// 8. Team & Reflection
function TeamAndReflectionSection() {
  const teamRoles = [
    {
      role: "Model Owner",
      gap: "Accountable for the model's ongoing health — this framework's tiers currently route to 'a human' or 'compliance,' not a specific named role.",
    },
    {
      role: "Data Engineer",
      gap: "To build the real, automated pipeline feeding new applicant data in, rather than the two hand-split CSV batches used to simulate it here.",
    },
    {
      role: "Compliance / Legal Reviewer",
      gap: "Specifically for Red-tier fairness triggers, given Project 2's unresolved gender gap finding and its UK Equality Act framing.",
    },
    {
      role: "MLOps / Infrastructure Engineer",
      gap: "To actually run this on a schedule, rather than the manually-triggered scripts built here — a deliberate scope decision made at the start of this project.",
    },
  ]

  return (
    <section id="team-and-reflection" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl space-y-12">
        <SectionHeader icon={<Users className="w-6 h-6" />} title="What I'd Need from a Real Team & Reflection" />

        {/* Team */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">What a Real Team Would Add</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {teamRoles.map(({ role, gap }) => (
              <div key={role} className="p-5 rounded-xl border border-slate-200 dark:border-jungle-700 bg-white dark:bg-jungle-800/30 space-y-2">
                <p className="font-semibold text-slate-800 dark:text-white">{role}</p>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{gap}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Reflection */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">Reflection</h3>
          <div className="space-y-6 max-w-3xl">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              The technical mechanics of this project — a checklist function, a promotion script, a retraining loop, a
              statistical test — were each individually simple. The genuinely hard part was discovering that four
              separate, working pieces don't automatically compose into a system that does what you assume it does just
              because each piece works correctly on its own.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              The clearest example was the CT/drift finding above. I built CI, CD, and CT expecting the chain would
              eventually catch drifted data somewhere. It didn't — not because anything was broken, but because a real
              architectural property of how these pieces relate went untested until I tried the interaction directly.
              The CI threshold mistake was a smaller version of the same lesson: I set a false-positive-rate check at
              "under 30%" without first calculating what that number actually was on the model I'd already validated —
              it was 53.8%. The fix wasn't a better guess, it was anchoring to a real, measured baseline.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Checking this project against real, documented industry practice — rather than assuming a
              reasonable-sounding framework was sufficient on its own — surfaced genuine gaps every time I did it: the
              CI checklist against named escalation matrices used at real companies, the cost estimate against a real
              Value Threshold framework, the team structure against how prototype teams actually scale. That comparison
              habit is itself a useful discipline, independent of any single finding it produced.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              The throughline connecting this project to the other three in this portfolio: the technical skill of
              building a model, an agent, or a monitoring pipeline is the easy part. The actual discipline is refusing
              to trust a number, a threshold, or a claim until it's checked against something real — a baseline, a
              documented case, or the plain arithmetic behind it — and being willing to say so plainly when an earlier
              version of the work didn't clear that bar.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// PAGE COMPONENT
// ============================================================================
export default function ModelMonitoringDriftDetectionPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-jungle-950">
      <ProgressBar />
      <TableOfContents sections={[
        { id: "hero", label: "Home" },
        { id: "problem-and-stakes", label: "Problem & Stakes" },
        { id: "defining-healthy", label: "Defining Healthy" },
        { id: "pipeline-diagram", label: "Pipeline Diagram" },
        { id: "drift-simulation", label: "Drift Simulation" },
        { id: "architectural-discovery", label: "Architectural Discovery" },
        { id: "business-impact", label: "Business Impact" },
        { id: "decision-framework", label: "Decision Framework" },
        { id: "team-and-reflection", label: "Team & Reflection" },
        { id: "contact", label: "Contact" },
      ]} />

      <main className="lg:ml-48 pt-20 md:pt-24">
        <HeroSection
          projectName="Model Maintenance: Continuous Monitoring & Drift Detection"
          tagline="What happens to a model after it ships — drift detection, retraining triggers, and a CI/CD pipeline designed to catch a degrading model before real harm accumulates."
          status="Learning Project — Not Shipped"
          author="Ogbebor Osaheni"
          date="July 2026"
          demoUrl={undefined}
          githubUrl={undefined}
          heroImage={undefined}
          youtubeUrl={undefined}
          screenshotImages={undefined}
        />

        <ProblemAndStakesSection />
        <DefiningHealthySection />
        <PipelineDiagramSection />
        <DriftSimulationSection />
        <ArchitecturalDiscoverySection />
        <BusinessImpactSection />
        <DecisionFrameworkSection />
        <TeamAndReflectionSection />

        <ContactSection {...contactData} />
      </main>
    </div>
  )
}
