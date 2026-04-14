"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Leaf, ArrowRight } from "lucide-react"
import Link from "next/link"

interface Project {
  title: string
  description: string
  techStack: string[]
  github: string
  demo: string | null
  caseStudy: string | null
  image: string
  featured: boolean
  status?: string
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "AI Dynamic Ticket Pricing",
      description:
        "An end-to-end AI pricing system for UK live events that integrates artist popularity, venue location premiums, demand urgency signals, and market conditions to generate explainable, ethical price recommendations",
      techStack: ["Python", "XGBoost", "SHAP", "Optuna", "Streamlit"],
      github: "https://github.com/aiirveon/ai-ticket-pricing",
      demo: "https://ai-ticket-pricing.streamlit.app/",
      caseStudy: "/projects/ai-ticket-pricing",
      image: "/gifs/ai-ticket-pricing-gif.gif",
      featured: true,
    },

    {
      title: "Frame Intelligence",
      description:
        "AI-powered commercial film intelligence platform for professional filmmakers and creative directors. ATANDA Lens analyses TikTok and Instagram commercials across 6 layers—Brand, Story, Cinematography, Sound, Post, and Performance—using Claude API and computer vision with Bruce Block and SB7 frameworks. ATANDA Forge delivers a 7-stage AI production pipeline from brief to post-production brief, powered by the Meridian Engine.",
      techStack: ["Next.js", "FastAPI", "Claude API", "Supabase", "Python", "ffmpeg", "Vercel"],
      github: "https://github.com/aiirveon",
      demo: "https://atanda-studio.vercel.app/",
      caseStudy: "/projects/frame-intelligence",
      image: "/gifs/frame-intelligence-gif.gif",
      featured: false,
      status: "In Progress",
    },

    {
      title: "Bias Audit Dashboard",
      description:
        "B2B AI tool for trust and safety teams at UK media companies. Detects bias across 6 categories using TF-IDF + XGBoost (F1 0.90) with tiered routing: short inputs go to Claude API for semantic classification, long inputs to the full XGBoost + SHAP pipeline. Includes a live comment moderation simulator, fairness metrics panel, and audit log. Built for Online Safety Act 2023 and Ofcom compliance.",
      techStack: ["Next.js", "FastAPI", "XGBoost", "SHAP", "Claude API", "Supabase"],
      github: "https://github.com/aiirveon/bias-audit-dashboard",
      demo: "https://bias-audit-dashboard.vercel.app",
      caseStudy: "/projects/bias-audit-dashboard",
      image: "/gifs/bias-audit-dashboard-gif.gif",
      featured: false,
      status: "Shipped",
    },

    {
      title: "Ojuit",
      description:
        "Two-product AI platform for solo indie filmmakers. Story Engine guides writers from raw idea to full beat sheet across six stages with AVOID_LIST prompt engineering and full Supabase state persistence. Colour Intelligence pipeline delivers CIE Lab Delta E measurement, XGBoost correction predictions, and scene-to-reference LUT export for DaVinci Resolve and Premiere Pro.",
      techStack: ["Python", "FastAPI", "Next.js", "OpenCV", "XGBoost", "Claude API", "Supabase"],
      github: "https://github.com/aiirveon/chromasync-app",
      demo: "https://chromasync-app.vercel.app",
      caseStudy: "/projects/ojuit",
      image: "/gifs/ojuit-gif.gif",
      featured: false,
      status: "In Progress",
    },
    {
      title: "TrueCase",
      description:
        "AI-powered business case builder for AI investments. Generates governance-adjusted ROI projections with a reliability score (0–100%) based on six KB-backed governance elements. Claude Sonnet 4 produces a three-section business case narrative constrained entirely to a verified knowledge base — not training data. Zero data retained. Exports board-ready PDF and HTML.",
      techStack: ["Next.js", "Claude API", "TypeScript", "Tailwind CSS", "@react-pdf/renderer", "Vercel"],
      github: "https://github.com/aiirveon",
      demo: "https://truecase-seven.vercel.app/",
      caseStudy: "/projects/truecase",
      image: "/gifs/truecase-gif.gif",
      featured: false,
      status: "Shipped",
    },
    {
      title: "Pulse: AI Audience Sentiment Monitor",
      description:
        "Real-time AI audience sentiment monitor for live UK broadcast events. TF-IDF + XGBoost emotion classifier (5-class, Macro F1 0.830) and multi-label topic classifier built for live broadcast producers at BBC, Channel 4, ITV, and Sky. Scripted BAFTA simulation with narrative arc, negative sentiment spike alerts, SHAP word-level explainability, and an editorial guardrail built into the architecture. Aligned with Ofcom Broadcasting Code.",
      techStack: ["Python", "FastAPI", "Next.js", "XGBoost", "SHAP", "Recharts"],
      github: "https://github.com/aiirveon/pulse",
      demo: "https://pulse-pi-inky.vercel.app",
      caseStudy: "/projects/pulse",
      image: "/gifs/pulse-gif.gif",
      featured: false,
      status: "Shipped",
    },
  ]

  // Separate featured project
  const featuredProject = projects.find(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-jungle-900/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4 flex items-center justify-center gap-2">
            <Leaf className="h-6 w-6 text-jungle-500 dark:text-jungle-400" />
            Projects
            <Leaf className="h-6 w-6 text-jungle-500 dark:text-jungle-400" />
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A showcase of my AI Product Management and backend development work.
          </p>
          <div className="h-1 w-20 bg-jungle-500 mx-auto mt-4"></div>
        </motion.div>



        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full flex flex-col overflow-hidden transition-all dark:bg-jungle-800/30
  ${project.featured 
    ? "border-2 border-jungle-500 shadow-xl ring-2 ring-jungle-500/20" 
    : "border-slate-200 dark:border-jungle-800 hover:border-jungle-500 hover:shadow-lg"
  }`}>
                <div className="aspect-video w-full overflow-hidden bg-slate-100 dark:bg-jungle-800 relative group">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-jungle-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800 dark:text-white">{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.techStack.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-jungle-100 dark:bg-jungle-700/50 text-jungle-800 dark:text-jungle-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-slate-600 dark:text-slate-300 text-base">
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex gap-2 pt-2">
                  {project.caseStudy && (
                    <Button asChild size="sm" className="bg-jungle-500 hover:bg-jungle-600">
                      <Link href={project.caseStudy}>
                        Case Study <ArrowRight className="h-3 w-3 ml-1" />
                      </Link>
                    </Button>
                  )}
                  <Button variant="outline" size="sm" asChild className="border-jungle-200 dark:border-jungle-700">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-1" /> GitHub
                    </a>
                  </Button>
                  {project.demo && (
                    <Button variant="outline" size="sm" asChild className="border-jungle-200 dark:border-jungle-700">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" /> Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
