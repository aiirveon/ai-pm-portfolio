"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Link from "next/link"
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Play, 
  CheckCircle2, 
  Circle,
  ChevronDown,
  ChevronRight,
  Leaf,
  Target,
  Users,
  Lightbulb,
  Code,
  BarChart3,
  Shield,
  GitCompare,
  Flag,
  Map,
  BookOpen,
  Mail,
  Database,
  Scale
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

// ============================================================================
// PROJECT DATA - Replace this with your actual project content
// ============================================================================
const projectData = {
  title: "[Project Name]",
  tagline: "[One-line value proposition describing what this project does]",
  status: "Case Study", // "Shipped" | "In Progress" | "Case Study"
  date: "[Month Year]",
  techStack: ["[Tech 1]", "[Tech 2]", "[Tech 3]", "[Tech 4]", "[Tech 5]"],
  demoUrl: "#",
  githubUrl: "#",
  
  // Executive Summary
  summary: {
    description: "[2-3 paragraphs describing the project overview, what problem it solves, and the key outcomes achieved. This should give readers a quick understanding of the entire project.]",
    metrics: [
      { icon: "chart", value: "[X]%", label: "[Metric Name]", description: "[Brief description]" },
      { icon: "users", value: "[X]", label: "[Metric Name]", description: "[Brief description]" },
      { icon: "target", value: "[X]%", label: "[Metric Name]", description: "[Brief description]" },
      { icon: "shield", value: "[X]", label: "[Metric Name]", description: "[Brief description]" },
    ],
    videoUrl: null, // Replace with Loom/YouTube URL
  },

  // Problem Statement
  problem: {
    description: "[Detailed description of the problem. What pain points exist? Who is affected? Why does this matter? Include specific data points or research if available.]",
    opportunity: "[Describe the market opportunity or business case. What's the potential impact of solving this problem?]",
    keyInsight: "[A compelling quote or key insight that captures the essence of the problem]",
    videoUrl: null,
  },

  // User Personas
  personas: [
    {
      name: "[Persona Name]",
      role: "[Job Title / Role]",
      avatar: "/placeholder.svg?height=80&width=80",
      goals: ["[Goal 1]", "[Goal 2]", "[Goal 3]"],
      painPoints: ["[Pain Point 1]", "[Pain Point 2]", "[Pain Point 3]"],
      quote: "[A quote that represents this persona's perspective]",
    },
    {
      name: "[Persona Name]",
      role: "[Job Title / Role]",
      avatar: "/placeholder.svg?height=80&width=80",
      goals: ["[Goal 1]", "[Goal 2]", "[Goal 3]"],
      painPoints: ["[Pain Point 1]", "[Pain Point 2]", "[Pain Point 3]"],
      quote: "[A quote that represents this persona's perspective]",
    },
    {
      name: "[Persona Name]",
      role: "[Job Title / Role]",
      avatar: "/placeholder.svg?height=80&width=80",
      goals: ["[Goal 1]", "[Goal 2]", "[Goal 3]"],
      painPoints: ["[Pain Point 1]", "[Pain Point 2]", "[Pain Point 3]"],
      quote: "[A quote that represents this persona's perspective]",
    },
  ],
  personasVideoUrl: null,

  // Solution Overview
  solution: {
    description: "[Description of your solution. How does it address the problem? What's the core value proposition?]",
    features: [
      { icon: "lightbulb", title: "[Feature 1]", description: "[Feature description]" },
      { icon: "code", title: "[Feature 2]", description: "[Feature description]" },
      { icon: "chart", title: "[Feature 3]", description: "[Feature description]" },
    ],
    architectureImage: "/placeholder.svg?height=400&width=800",
    videoUrl: null,
  },

  // Technical Phases
  phases: [
    {
      id: "phase1",
      title: "Phase 1: MVP",
      description: "[Brief description of this phase's goals]",
      deliverables: [
        { name: "[Deliverable 1]", status: "complete", description: "[Brief description]" },
        { name: "[Deliverable 2]", status: "complete", description: "[Brief description]" },
        { name: "[Deliverable 3]", status: "complete", description: "[Brief description]" },
        { name: "[Deliverable 4]", status: "complete", description: "[Brief description]" },
      ],
      techStack: ["[Tech 1]", "[Tech 2]", "[Tech 3]"],
      codeSnippet: `# Example code snippet
def example_function():
    """[Description of what this code does]"""
    pass`,
      videoUrl: null,
    },
    {
      id: "phase2",
      title: "Phase 2: Production ML",
      description: "[Brief description of this phase's goals]",
      deliverables: [
        { name: "[Deliverable 1]", status: "complete", description: "[Brief description]" },
        { name: "[Deliverable 2]", status: "complete", description: "[Brief description]" },
        { name: "[Deliverable 3]", status: "complete", description: "[Brief description]" },
        { name: "[Deliverable 4]", status: "complete", description: "[Brief description]" },
      ],
      metrics: [
        { metric: "[Metric]", baseline: "[Value]", optimized: "[Value]", improvement: "[+X%]" },
        { metric: "[Metric]", baseline: "[Value]", optimized: "[Value]", improvement: "[+X%]" },
        { metric: "[Metric]", baseline: "[Value]", optimized: "[Value]", improvement: "[+X%]" },
      ],
      chartImage: "/placeholder.svg?height=300&width=600",
      videoUrl: null,
    },
    {
      id: "phase3",
      title: "Phase 3: Product & Ethics",
      description: "[Brief description of this phase's goals]",
      deliverables: [
        { name: "[Deliverable 1]", status: "complete", description: "[Brief description]" },
        { name: "[Deliverable 2]", status: "complete", description: "[Brief description]" },
        { name: "[Deliverable 3]", status: "complete", description: "[Brief description]" },
        { name: "[Deliverable 4]", status: "complete", description: "[Brief description]" },
      ],
      ethicsHighlight: "[Key ethics consideration or guardrail implemented]",
      screenshotGallery: [
        "/placeholder.svg?height=200&width=350",
        "/placeholder.svg?height=200&width=350",
        "/placeholder.svg?height=200&width=350",
      ],
      videoUrl: null,
    },
    {
      id: "phase4",
      title: "Phase 4: Launch & Distribution",
      description: "[Brief description of this phase's goals]",
      deliverables: [
        { name: "[Deliverable 1]", status: "complete", description: "[Brief description]" },
        { name: "[Deliverable 2]", status: "complete", description: "[Brief description]" },
        { name: "[Deliverable 3]", status: "in-progress", description: "[Brief description]" },
        { name: "[Deliverable 4]", status: "planned", description: "[Brief description]" },
      ],
      distributionChannels: ["[Channel 1]", "[Channel 2]", "[Channel 3]", "[Channel 4]"],
      tractionMetrics: [
        { label: "[Metric]", value: "[Value]" },
        { label: "[Metric]", value: "[Value]" },
        { label: "[Metric]", value: "[Value]" },
      ],
      videoUrl: null,
    },
  ],

  // Results & Backtest
  results: {
    heroMetric: { value: "[X]%", label: "[Primary Result Metric]" },
    comparison: [
      { metric: "[Metric 1]", before: "[Value]", after: "[Value]", change: "[+/-X%]" },
      { metric: "[Metric 2]", before: "[Value]", after: "[Value]", change: "[+/-X%]" },
      { metric: "[Metric 3]", before: "[Value]", after: "[Value]", change: "[+/-X%]" },
      { metric: "[Metric 4]", before: "[Value]", after: "[Value]", change: "[+/-X%]" },
    ],
    chartImage: "/placeholder.svg?height=300&width=600",
    keyInsights: [
      "[Key insight or finding from the results]",
      "[Key insight or finding from the results]",
      "[Key insight or finding from the results]",
    ],
    videoUrl: null,
  },

  // Data & Methodology
  data: {
    dictionary: [
      { feature: "[Feature 1]", type: "[Type]", description: "[Description]", source: "[Source]" },
      { feature: "[Feature 2]", type: "[Type]", description: "[Description]", source: "[Source]" },
      { feature: "[Feature 3]", type: "[Type]", description: "[Description]", source: "[Source]" },
      { feature: "[Feature 4]", type: "[Type]", description: "[Description]", source: "[Source]" },
      { feature: "[Feature 5]", type: "[Type]", description: "[Description]", source: "[Source]" },
    ],
    methodology: "[Detailed explanation of the methodology, including data collection, preprocessing, feature engineering, and model selection approaches.]",
    validation: [
      "[Validation method 1 - e.g., Train/test split strategy]",
      "[Validation method 2 - e.g., Cross-validation approach]",
      "[Validation method 3 - e.g., Backtesting methodology]",
    ],
    videoUrl: null,
  },

  // Ethics
  ethics: {
    principles: [
      { icon: "shield", title: "[Principle 1]", description: "[Description of this ethical principle]" },
      { icon: "users", title: "[Principle 2]", description: "[Description of this ethical principle]" },
      { icon: "target", title: "[Principle 3]", description: "[Description of this ethical principle]" },
    ],
    guardrails: [
      { rule: "[Rule 1]", threshold: "[Value]", rationale: "[Why this rule exists]" },
      { rule: "[Rule 2]", threshold: "[Value]", rationale: "[Why this rule exists]" },
      { rule: "[Rule 3]", threshold: "[Value]", rationale: "[Why this rule exists]" },
    ],
    biasAudit: {
      description: "[Description of bias audit process - what was tested, how fairness was measured, and what safeguards were implemented]",
      findings: [
        { category: "[Category 1]", status: "pass", detail: "[Detail about this finding]" },
        { category: "[Category 2]", status: "pass", detail: "[Detail about this finding]" },
        { category: "[Category 3]", status: "warning", detail: "[Detail about this finding]" },
      ],
      mitigations: [
        "[Mitigation strategy 1]",
        "[Mitigation strategy 2]",
        "[Mitigation strategy 3]",
      ],
      chartImage: "/placeholder.svg?height=300&width=600",
    },
    videoUrl: null,
  },

  // Competitive Analysis
  competitive: {
    comparison: [
      { feature: "[Feature 1]", ours: true, competitorA: true, competitorB: false },
      { feature: "[Feature 2]", ours: true, competitorA: false, competitorB: true },
      { feature: "[Feature 3]", ours: true, competitorA: false, competitorB: false },
      { feature: "[Feature 4]", ours: true, competitorA: true, competitorB: true },
    ],
    competitorAName: "[Competitor A]",
    competitorBName: "[Competitor B]",
    positioning: "[Your unique positioning statement - what makes your solution different]",
    videoUrl: null,
  },

  // OKRs
  okrs: {
    objective: "[Your main objective statement]",
    keyResults: [
      { kr: "[Key Result 1]", progress: 85, target: "[Target value]" },
      { kr: "[Key Result 2]", progress: 70, target: "[Target value]" },
      { kr: "[Key Result 3]", progress: 100, target: "[Target value]" },
    ],
    videoUrl: null,
  },

  // Roadmap
  roadmap: {
    now: [
      { title: "[Current Initiative 1]", description: "[Description]", status: "in-progress" },
      { title: "[Current Initiative 2]", description: "[Description]", status: "complete" },
    ],
    next: [
      { title: "[Next Initiative 1]", description: "[Description]", status: "planned" },
      { title: "[Next Initiative 2]", description: "[Description]", status: "planned" },
    ],
    later: [
      { title: "[Future Initiative 1]", description: "[Description]", status: "planned" },
      { title: "[Future Initiative 2]", description: "[Description]", status: "planned" },
    ],
    videoUrl: null,
  },

  // Learnings
  learnings: {
    wentWell: ["[What went well 1]", "[What went well 2]", "[What went well 3]"],
    challenges: ["[Challenge faced 1]", "[Challenge faced 2]", "[Challenge faced 3]"],
    doDifferently: ["[What I'd do differently 1]", "[What I'd do differently 2]"],
    keyTakeaway: "[The most important lesson learned from this project]",
    videoUrl: null,
  },

  // Contact
  contact: {
    pitch: "I'm actively seeking Junior AI PM / Technical PM roles at companies building AI-powered products for retail, e-commerce, or consumer applications. Let's connect if you're hiring or want to discuss AI product strategy.",
    email: "osaheniogbebor.c@gmail.com",
    linkedIn: "https://www.linkedin.com/in/osaheni-o-94565421a/",
    github: "https://github.com/aiirveon",
    calendlyUrl: undefined,
    authorName: "Aiir Obaloluwa",
  },
}

// ============================================================================
// COMPONENTS
// ============================================================================

// Video Placeholder Component
function VideoPlaceholder({ title, url }: { title: string; url: string | null }) {
  if (!url) return null
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-6"
    >
      <div className="relative aspect-video bg-slate-100 dark:bg-jungle-800 rounded-lg overflow-hidden border border-slate-200 dark:border-jungle-700 group cursor-pointer hover:border-jungle-500 transition-colors">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-jungle-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <Play className="h-8 w-8 text-white ml-1" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <p className="text-white text-sm font-medium">▶ {title}</p>
        </div>
      </div>
    </motion.div>
  )
}

// Metric Card Component
function MetricCard({ icon, value, label, description }: { icon: string; value: string; label: string; description: string }) {
  const IconComponent = {
    chart: BarChart3,
    users: Users,
    target: Target,
    shield: Shield,
  }[icon] || Target

  return (
    <Card className="border-slate-200 dark:border-jungle-700 dark:bg-jungle-800/30">
      <CardContent className="p-6 text-center">
        <IconComponent className="h-8 w-8 text-jungle-500 mx-auto mb-2" />
        <div className="text-3xl font-bold text-slate-800 dark:text-white">{value}</div>
        <div className="text-sm font-medium text-slate-700 dark:text-slate-200">{label}</div>
        <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{description}</div>
      </CardContent>
    </Card>
  )
}

// Persona Card Component
function PersonaCard({ persona }: { persona: typeof projectData.personas[0] }) {
  return (
    <Card className="border-slate-200 dark:border-jungle-700 dark:bg-jungle-800/30 h-full">
      <CardHeader className="text-center pb-2">
        <div className="w-16 h-16 rounded-full bg-slate-200 dark:bg-jungle-700 mx-auto mb-2 overflow-hidden">
          <img src={persona.avatar} alt={persona.name} className="w-full h-full object-cover" />
        </div>
        <CardTitle className="text-lg">{persona.name}</CardTitle>
        <CardDescription>{persona.role}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold text-jungle-600 dark:text-jungle-400 mb-1">Goals</h4>
          <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
            {persona.goals.map((goal, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-jungle-500 mt-0.5">•</span>
                {goal}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-red-600 dark:text-red-400 mb-1">Pain Points</h4>
          <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
            {persona.painPoints.map((pain, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">•</span>
                {pain}
              </li>
            ))}
          </ul>
        </div>
        <blockquote className="text-sm italic text-slate-500 dark:text-slate-400 border-l-2 border-jungle-500 pl-3">
          "{persona.quote}"
        </blockquote>
      </CardContent>
    </Card>
  )
}

// Phase Accordion Component
function PhaseAccordion({ phase, isOpen, onToggle }: { phase: typeof projectData.phases[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-slate-200 dark:border-jungle-700 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between bg-slate-50 dark:bg-jungle-800/50 hover:bg-slate-100 dark:hover:bg-jungle-800 transition-colors"
      >
        <div className="flex items-center gap-3">
          <Code className="h-5 w-5 text-jungle-500" />
          <span className="font-semibold text-slate-800 dark:text-white">{phase.title}</span>
        </div>
        {isOpen ? (
          <ChevronDown className="h-5 w-5 text-slate-500" />
        ) : (
          <ChevronRight className="h-5 w-5 text-slate-500" />
        )}
      </button>
      
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="px-6 py-4 bg-white dark:bg-jungle-900/30"
        >
          <p className="text-slate-600 dark:text-slate-300 mb-4">{phase.description}</p>
          
          {/* Deliverables */}
          <div className="mb-4">
            <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Deliverables</h4>
            <div className="space-y-2">
              {phase.deliverables.map((d, i) => (
                <div key={i} className="flex items-start gap-3">
                  {d.status === "complete" ? (
                    <CheckCircle2 className="h-5 w-5 text-jungle-500 mt-0.5 flex-shrink-0" />
                  ) : d.status === "in-progress" ? (
                    <Circle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  ) : (
                    <Circle className="h-5 w-5 text-slate-300 mt-0.5 flex-shrink-0" />
                  )}
                  <div>
                    <span className="text-slate-800 dark:text-white">{d.name}</span>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{d.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          {phase.techStack && (
            <div className="mb-4">
              <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {phase.techStack.map((tech, i) => (
                  <Badge key={i} variant="secondary" className="bg-jungle-100 dark:bg-jungle-700/50 text-jungle-800 dark:text-jungle-200">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Code Snippet */}
          {phase.codeSnippet && (
            <div className="mb-4">
              <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Code Sample</h4>
              <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{phase.codeSnippet}</code>
              </pre>
            </div>
          )}

          {/* Metrics Table */}
          {phase.metrics && (
            <div className="mb-4">
              <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Performance Metrics</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-jungle-700">
                      <th className="text-left py-2 px-3 text-slate-600 dark:text-slate-300">Metric</th>
                      <th className="text-left py-2 px-3 text-slate-600 dark:text-slate-300">Baseline</th>
                      <th className="text-left py-2 px-3 text-slate-600 dark:text-slate-300">Optimized</th>
                      <th className="text-left py-2 px-3 text-slate-600 dark:text-slate-300">Improvement</th>
                    </tr>
                  </thead>
                  <tbody>
                    {phase.metrics.map((m, i) => (
                      <tr key={i} className="border-b border-slate-100 dark:border-jungle-800">
                        <td className="py-2 px-3 text-slate-800 dark:text-white">{m.metric}</td>
                        <td className="py-2 px-3 text-slate-600 dark:text-slate-300">{m.baseline}</td>
                        <td className="py-2 px-3 text-slate-600 dark:text-slate-300">{m.optimized}</td>
                        <td className="py-2 px-3 text-jungle-600 dark:text-jungle-400 font-medium">{m.improvement}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Chart Image */}
          {phase.chartImage && (
            <div className="mb-4">
              <img src={phase.chartImage} alt="Performance chart" className="w-full rounded-lg border border-slate-200 dark:border-jungle-700" />
            </div>
          )}

          {/* Screenshot Gallery */}
          {phase.screenshotGallery && (
            <div className="mb-4">
              <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Screenshots</h4>
              <div className="grid grid-cols-3 gap-2">
                {phase.screenshotGallery.map((img, i) => (
                  <img key={i} src={img} alt={`Screenshot ${i + 1}`} className="rounded-lg border border-slate-200 dark:border-jungle-700" />
                ))}
              </div>
            </div>
          )}

          {/* Video */}
          <VideoPlaceholder title={`${phase.title} Walkthrough`} url={phase.videoUrl} />
        </motion.div>
      )}
    </div>
  )
}

// Table of Contents Component
function TableOfContents({ activeSection }: { activeSection: string }) {
  const sections = [
    { id: "summary", label: "Executive Summary" },
    { id: "problem", label: "Problem Statement" },
    { id: "personas", label: "User Personas" },
    { id: "solution", label: "Solution" },
    { id: "implementation", label: "Implementation" },
    { id: "data", label: "Data & Methodology" },
    { id: "results", label: "Results" },
    { id: "ethics", label: "Ethics & Bias Audit" },
    { id: "competitive", label: "Competitive Analysis" },
    { id: "okrs", label: "OKRs" },
    { id: "roadmap", label: "Roadmap" },
    { id: "learnings", label: "Learnings" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <nav className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 z-40">
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={`block text-sm py-1 px-3 rounded-full transition-colors ${
                activeSection === section.id
                  ? "bg-jungle-500 text-white"
                  : "text-slate-500 dark:text-slate-400 hover:text-jungle-500 dark:hover:text-jungle-400"
              }`}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

// Reading Progress Bar
function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      setProgress(scrollPercent)
    }

    window.addEventListener("scroll", updateProgress)
    return () => window.removeEventListener("scroll", updateProgress)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-slate-200 dark:bg-jungle-800 z-50">
      <div 
        className="h-full bg-jungle-500 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
export default function ProjectPage() {
  const [openPhases, setOpenPhases] = useState<string[]>(["phase1"])
  const [activeSection, setActiveSection] = useState("summary")

  const togglePhase = (phaseId: string) => {
    setOpenPhases(prev => 
      prev.includes(phaseId) 
        ? prev.filter(id => id !== phaseId)
        : [...prev, phaseId]
    )
  }

  // Track active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <ReadingProgress />
      <TableOfContents activeSection={activeSection} />
      
      <main className="min-h-screen pt-20 pb-16">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-b from-slate-50 to-white dark:from-jungle-900 dark:to-jungle-950">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link href="/#projects" className="inline-flex items-center text-jungle-600 dark:text-jungle-400 hover:underline mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-4 bg-jungle-100 dark:bg-jungle-700/50 text-jungle-800 dark:text-jungle-200">
                {projectData.status}
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">
                {projectData.title}
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-6">
                {projectData.tagline}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {projectData.techStack.map((tech, i) => (
                  <Badge key={i} variant="outline" className="border-jungle-200 dark:border-jungle-700">
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-4">
                <Button asChild className="bg-jungle-500 hover:bg-jungle-600">
                  <a href={projectData.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
                <Button variant="outline" asChild className="border-jungle-200 dark:border-jungle-700">
                  <a href={projectData.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Executive Summary */}
        <section id="summary" className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
                <Target className="h-6 w-6 text-jungle-500" />
                Executive Summary
              </h2>
              
              <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                {projectData.summary.description}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {projectData.summary.metrics.map((metric, i) => (
                  <MetricCard key={i} {...metric} />
                ))}
              </div>
              
              <VideoPlaceholder title="Project Overview" url={projectData.summary.videoUrl} />
            </motion.div>
          </div>
        </section>

        {/* Problem Statement */}
        <section id="problem" className="py-16 bg-slate-50 dark:bg-jungle-900/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
                <Lightbulb className="h-6 w-6 text-jungle-500" />
                Problem Statement
              </h2>
              
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                {projectData.problem.description}
              </p>
              
              <Card className="mb-6 border-l-4 border-l-jungle-500 dark:bg-jungle-800/30">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-800 dark:text-white mb-2">The Opportunity</h3>
                  <p className="text-slate-600 dark:text-slate-300">{projectData.problem.opportunity}</p>
                </CardContent>
              </Card>
              
              <blockquote className="text-xl italic text-slate-700 dark:text-slate-200 border-l-4 border-jungle-500 pl-6 py-2">
                "{projectData.problem.keyInsight}"
              </blockquote>
              
              <VideoPlaceholder title="Problem Deep Dive" url={projectData.problem.videoUrl} />
            </motion.div>
          </div>
        </section>

        {/* User Personas */}
        <section id="personas" className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
                <Users className="h-6 w-6 text-jungle-500" />
                User Personas
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {projectData.personas.map((persona, i) => (
                  <PersonaCard key={i} persona={persona} />
                ))}
              </div>
              
              <VideoPlaceholder title="User Research Process" url={projectData.personasVideoUrl} />
            </motion.div>
          </div>
        </section>

        {/* Solution Overview */}
        <section id="solution" className="py-16 bg-slate-50 dark:bg-jungle-900/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
                <Lightbulb className="h-6 w-6 text-jungle-500" />
                Solution Overview
              </h2>
              
              <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                {projectData.solution.description}
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {projectData.solution.features.map((feature, i) => {
                  const IconComponent = {
                    lightbulb: Lightbulb,
                    code: Code,
                    chart: BarChart3,
                  }[feature.icon] || Lightbulb
                  
                  return (
                    <Card key={i} className="border-slate-200 dark:border-jungle-700 dark:bg-jungle-800/30">
                      <CardContent className="p-6">
                        <IconComponent className="h-8 w-8 text-jungle-500 mb-3" />
                        <h3 className="font-semibold text-slate-800 dark:text-white mb-2">{feature.title}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-300">{feature.description}</p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold text-slate-800 dark:text-white mb-3">Architecture</h3>
                <img 
                  src={projectData.solution.architectureImage} 
                  alt="Solution Architecture" 
                  className="w-full rounded-lg border border-slate-200 dark:border-jungle-700"
                />
              </div>
              
              <VideoPlaceholder title="Solution Walkthrough" url={projectData.solution.videoUrl} />
            </motion.div>
          </div>
        </section>

        {/* Technical Implementation */}
        <section id="implementation" className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
                <Code className="h-6 w-6 text-jungle-500" />
                Technical Implementation
              </h2>
              
              <div className="space-y-4">
                {projectData.phases.map((phase) => (
                  <PhaseAccordion
                    key={phase.id}
                    phase={phase}
                    isOpen={openPhases.includes(phase.id)}
                    onToggle={() => togglePhase(phase.id)}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Data & Methodology */}
        <section id="data" className="py-16 bg-slate-50 dark:bg-jungle-900/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
                <Database className="h-6 w-6 text-jungle-500" />
                Data & Methodology
              </h2>
              
              {/* Data Dictionary */}
              <h3 className="font-semibold text-slate-800 dark:text-white mb-3">Data Dictionary</h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-jungle-700">
                      <th className="text-left py-3 px-4 text-slate-600 dark:text-slate-300">Feature</th>
                      <th className="text-left py-3 px-4 text-slate-600 dark:text-slate-300">Type</th>
                      <th className="text-left py-3 px-4 text-slate-600 dark:text-slate-300">Description</th>
                      <th className="text-left py-3 px-4 text-slate-600 dark:text-slate-300">Source</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projectData.data.dictionary.map((row, i) => (
                      <tr key={i} className="border-b border-slate-100 dark:border-jungle-800">
                        <td className="py-3 px-4 text-slate-800 dark:text-white font-mono text-sm">{row.feature}</td>
                        <td className="py-3 px-4 text-jungle-600 dark:text-jungle-400">{row.type}</td>
                        <td className="py-3 px-4 text-slate-600 dark:text-slate-300">{row.description}</td>
                        <td className="py-3 px-4 text-slate-500 dark:text-slate-400">{row.source}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* Methodology */}
              <Card className="mb-6 border-slate-200 dark:border-jungle-700 dark:bg-jungle-800/30">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-800 dark:text-white mb-3">Methodology</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {projectData.data.methodology}
                  </p>
                </CardContent>
              </Card>
              
              {/* Validation Approach */}
              <Card className="border-l-4 border-l-jungle-500 dark:bg-jungle-800/30">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-800 dark:text-white mb-3">Validation Approach</h3>
                  <ul className="space-y-2">
                    {projectData.data.validation.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="h-5 w-5 text-jungle-500 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <VideoPlaceholder title="Data Pipeline Explanation" url={projectData.data.videoUrl} />
            </motion.div>
          </div>
        </section>

        {/* Results */}
        <section id="results" className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
                <BarChart3 className="h-6 w-6 text-jungle-500" />
                Results & Backtest
              </h2>
              
              {/* Hero Metric */}
              <Card className="mb-8 bg-jungle-500 text-white border-none">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl font-bold mb-2">{projectData.results.heroMetric.value}</div>
                  <div className="text-xl opacity-90">{projectData.results.heroMetric.label}</div>
                </CardContent>
              </Card>
              
              {/* Comparison Table */}
              <div className="overflow-x-auto mb-8">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-jungle-700">
                      <th className="text-left py-3 px-4 text-slate-600 dark:text-slate-300">Metric</th>
                      <th className="text-left py-3 px-4 text-slate-600 dark:text-slate-300">Before</th>
                      <th className="text-left py-3 px-4 text-slate-600 dark:text-slate-300">After</th>
                      <th className="text-left py-3 px-4 text-slate-600 dark:text-slate-300">Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projectData.results.comparison.map((row, i) => (
                      <tr key={i} className="border-b border-slate-100 dark:border-jungle-800">
                        <td className="py-3 px-4 text-slate-800 dark:text-white">{row.metric}</td>
                        <td className="py-3 px-4 text-slate-600 dark:text-slate-300">{row.before}</td>
                        <td className="py-3 px-4 text-slate-600 dark:text-slate-300">{row.after}</td>
                        <td className="py-3 px-4 text-jungle-600 dark:text-jungle-400 font-medium">{row.change}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* Chart */}
              <img 
                src={projectData.results.chartImage} 
                alt="Results Chart" 
                className="w-full rounded-lg border border-slate-200 dark:border-jungle-700 mb-6"
              />
              
              {/* Key Insights */}
              <Card className="border-l-4 border-l-jungle-500 dark:bg-jungle-800/30">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-800 dark:text-white mb-3">Key Insights</h3>
                  <ul className="space-y-2">
                    {projectData.results.keyInsights.map((insight, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="h-5 w-5 text-jungle-500 mt-0.5 flex-shrink-0" />
                        {insight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <VideoPlaceholder title="Results Deep Dive" url={projectData.results.videoUrl} />
            </motion.div>
          </div>
        </section>

        {/* Ethics */}
        <section id="ethics" className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
                <Shield className="h-6 w-6 text-jungle-500" />
                Ethics & Responsible AI
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {projectData.ethics.principles.map((principle, i) => {
                  const IconComponent = {
                    shield: Shield,
                    users: Users,
                    target: Target,
                  }[principle.icon] || Shield
                  
                  return (
                    <Card key={i} className="border-slate-200 dark:border-jungle-700 dark:bg-jungle-800/30">
                      <CardContent className="p-6">
                        <IconComponent className="h-8 w-8 text-jungle-500 mb-3" />
                        <h3 className="font-semibold text-slate-800 dark:text-white mb-2">{principle.title}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-300">{principle.description}</p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
              
              {/* Guardrails Table */}
              <h3 className="font-semibold text-slate-800 dark:text-white mb-3">Implementation Guardrails</h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-jungle-700">
                      <th className="text-left py-3 px-4 text-slate-600 dark:text-slate-300">Rule</th>
                      <th className="text-left py-3 px-4 text-slate-600 dark:text-slate-300">Threshold</th>
                      <th className="text-left py-3 px-4 text-slate-600 dark:text-slate-300">Rationale</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projectData.ethics.guardrails.map((row, i) => (
                      <tr key={i} className="border-b border-slate-100 dark:border-jungle-800">
                        <td className="py-3 px-4 text-slate-800 dark:text-white">{row.rule}</td>
                        <td className="py-3 px-4 text-jungle-600 dark:text-jungle-400 font-mono">{row.threshold}</td>
                        <td className="py-3 px-4 text-slate-600 dark:text-slate-300">{row.rationale}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* Bias Audit & Fairness Assessment */}
              <Card className="mb-6 border-slate-200 dark:border-jungle-700 dark:bg-jungle-800/30">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Scale className="h-5 w-5 text-jungle-500" />
                    <h3 className="font-semibold text-slate-800 dark:text-white">Bias Audit & Fairness Assessment</h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    {projectData.ethics.biasAudit.description}
                  </p>
                  
                  {/* Findings */}
                  <div className="space-y-3 mb-6">
                    {projectData.ethics.biasAudit.findings.map((finding, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-jungle-800/50">
                        {finding.status === "pass" ? (
                          <CheckCircle2 className="h-5 w-5 text-jungle-500 flex-shrink-0" />
                        ) : finding.status === "warning" ? (
                          <Circle className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                        ) : (
                          <Circle className="h-5 w-5 text-red-500 flex-shrink-0" />
                        )}
                        <div>
                          <span className="font-medium text-slate-800 dark:text-white">{finding.category}</span>
                          <p className="text-sm text-slate-500 dark:text-slate-400">{finding.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Mitigations */}
                  <h4 className="font-medium text-slate-800 dark:text-white mb-2">Mitigation Strategies</h4>
                  <ul className="space-y-2 mb-6">
                    {projectData.ethics.biasAudit.mitigations.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                        <Shield className="h-4 w-4 text-jungle-500 mt-1 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Bias Audit Chart */}
                  <img 
                    src={projectData.ethics.biasAudit.chartImage} 
                    alt="Bias Audit Results" 
                    className="w-full rounded-lg border border-slate-200 dark:border-jungle-700"
                  />
                </CardContent>
              </Card>
              
              <VideoPlaceholder title="Ethics Framework" url={projectData.ethics.videoUrl} />
            </motion.div>
          </div>
        </section>

        {/* Competitive Analysis */}
        <section id="competitive" className="py-16 bg-slate-50 dark:bg-jungle-900/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
                <GitCompare className="h-6 w-6 text-jungle-500" />
                Competitive Analysis
              </h2>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-jungle-700">
                      <th className="text-left py-3 px-4 text-slate-600 dark:text-slate-300">Feature</th>
                      <th className="text-center py-3 px-4 text-slate-600 dark:text-slate-300">Our Solution</th>
                      <th className="text-center py-3 px-4 text-slate-600 dark:text-slate-300">{projectData.competitive.competitorAName}</th>
                      <th className="text-center py-3 px-4 text-slate-600 dark:text-slate-300">{projectData.competitive.competitorBName}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projectData.competitive.comparison.map((row, i) => (
                      <tr key={i} className="border-b border-slate-100 dark:border-jungle-800">
                        <td className="py-3 px-4 text-slate-800 dark:text-white">{row.feature}</td>
                        <td className="py-3 px-4 text-center">
                          {row.ours ? (
                            <CheckCircle2 className="h-5 w-5 text-jungle-500 mx-auto" />
                          ) : (
                            <Circle className="h-5 w-5 text-slate-300 mx-auto" />
                          )}
                        </td>
                        <td className="py-3 px-4 text-center">
                          {row.competitorA ? (
                            <CheckCircle2 className="h-5 w-5 text-slate-400 mx-auto" />
                          ) : (
                            <Circle className="h-5 w-5 text-slate-300 mx-auto" />
                          )}
                        </td>
                        <td className="py-3 px-4 text-center">
                          {row.competitorB ? (
                            <CheckCircle2 className="h-5 w-5 text-slate-400 mx-auto" />
                          ) : (
                            <Circle className="h-5 w-5 text-slate-300 mx-auto" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <Card className="border-l-4 border-l-jungle-500 dark:bg-jungle-800/30">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Our Positioning</h3>
                  <p className="text-slate-600 dark:text-slate-300">{projectData.competitive.positioning}</p>
                </CardContent>
              </Card>
              
              <VideoPlaceholder title="Market Analysis" url={projectData.competitive.videoUrl} />
            </motion.div>
          </div>
        </section>

        {/* OKRs */}
        <section id="okrs" className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
                <Flag className="h-6 w-6 text-jungle-500" />
                OKRs & Success Metrics
              </h2>
              
              <Card className="mb-6 bg-jungle-50 dark:bg-jungle-800/50 border-jungle-200 dark:border-jungle-700">
                <CardContent className="p-6">
                  <h3 className="text-sm uppercase tracking-wide text-jungle-600 dark:text-jungle-400 mb-2">Objective</h3>
                  <p className="text-xl font-semibold text-slate-800 dark:text-white">{projectData.okrs.objective}</p>
                </CardContent>
              </Card>
              
              <div className="space-y-4">
                {projectData.okrs.keyResults.map((kr, i) => (
                  <Card key={i} className="border-slate-200 dark:border-jungle-700 dark:bg-jungle-800/30">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-800 dark:text-white font-medium">KR{i + 1}: {kr.kr}</span>
                        <span className="text-sm text-slate-500">{kr.progress}%</span>
                      </div>
                      <Progress value={kr.progress} className="h-2" />
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Target: {kr.target}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <VideoPlaceholder title="Metrics Framework" url={projectData.okrs.videoUrl} />
            </motion.div>
          </div>
        </section>

        {/* Roadmap */}
        <section id="roadmap" className="py-16 bg-slate-50 dark:bg-jungle-900/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
                <Map className="h-6 w-6 text-jungle-500" />
                Roadmap
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* Now */}
                <div>
                  <h3 className="text-lg font-semibold text-jungle-600 dark:text-jungle-400 mb-4">Now</h3>
                  <div className="space-y-3">
                    {projectData.roadmap.now.map((item, i) => (
                      <Card key={i} className="border-slate-200 dark:border-jungle-700 dark:bg-jungle-800/30">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-2">
                            {item.status === "complete" ? (
                              <CheckCircle2 className="h-5 w-5 text-jungle-500 mt-0.5" />
                            ) : (
                              <Circle className="h-5 w-5 text-yellow-500 mt-0.5" />
                            )}
                            <div>
                              <h4 className="font-medium text-slate-800 dark:text-white">{item.title}</h4>
                              <p className="text-sm text-slate-500 dark:text-slate-400">{item.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                
                {/* Next */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-600 dark:text-slate-300 mb-4">Next</h3>
                  <div className="space-y-3">
                    {projectData.roadmap.next.map((item, i) => (
                      <Card key={i} className="border-slate-200 dark:border-jungle-700 dark:bg-jungle-800/30 opacity-80">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-2">
                            <Circle className="h-5 w-5 text-slate-300 mt-0.5" />
                            <div>
                              <h4 className="font-medium text-slate-800 dark:text-white">{item.title}</h4>
                              <p className="text-sm text-slate-500 dark:text-slate-400">{item.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                
                {/* Later */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-400 dark:text-slate-500 mb-4">Later</h3>
                  <div className="space-y-3">
                    {projectData.roadmap.later.map((item, i) => (
                      <Card key={i} className="border-slate-200 dark:border-jungle-700 dark:bg-jungle-800/30 opacity-60">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-2">
                            <Circle className="h-5 w-5 text-slate-300 mt-0.5" />
                            <div>
                              <h4 className="font-medium text-slate-800 dark:text-white">{item.title}</h4>
                              <p className="text-sm text-slate-500 dark:text-slate-400">{item.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
              
              <VideoPlaceholder title="Product Roadmap" url={projectData.roadmap.videoUrl} />
            </motion.div>
          </div>
        </section>

        {/* Learnings */}
        <section id="learnings" className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-jungle-500" />
                Learnings & Reflections
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="border-jungle-200 dark:border-jungle-700 dark:bg-jungle-800/30">
                  <CardHeader>
                    <CardTitle className="text-lg text-jungle-600 dark:text-jungle-400">What Went Well</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {projectData.learnings.wentWell.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="h-4 w-4 text-jungle-500 mt-1 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-yellow-200 dark:border-yellow-700/50 dark:bg-jungle-800/30">
                  <CardHeader>
                    <CardTitle className="text-lg text-yellow-600 dark:text-yellow-400">Challenges</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {projectData.learnings.challenges.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                          <Circle className="h-4 w-4 text-yellow-500 mt-1 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-blue-200 dark:border-blue-700/50 dark:bg-jungle-800/30">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-600 dark:text-blue-400">What I'd Do Differently</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {projectData.learnings.doDifferently.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                          <Lightbulb className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <blockquote className="text-xl italic text-slate-700 dark:text-slate-200 border-l-4 border-jungle-500 pl-6 py-2">
                "{projectData.learnings.keyTakeaway}"
              </blockquote>
              
              <VideoPlaceholder title="Project Retrospective" url={projectData.learnings.videoUrl} />
            </motion.div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-16 bg-jungle-500">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">Interested in this project?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                {projectData.contact.pitch}
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" variant="secondary">
                  <a href={projectData.contact.linkedIn} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <a href={projectData.contact.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <a href={projectData.contact.email}>
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}
