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
      title: "AI Dynamic Pricing System",
      description:
        "ML-powered pricing optimization for UK e-commerce and retail. Achieved R² = 0.997 accuracy with weather integration, SHAP explainability, and ethics guardrails. Proves 16% margin lift (£17,959 annual revenue) through historical backtest validation.",
      techStack: ["Python", "XGBoost", "SHAP", "Optuna", "Streamlit"],
      github: "https://github.com/aiirveon/ai-dynamic-pricing",
      demo: "https://ai-dynamic-pricing-fym9pp9mnhtwwpo5zpzud5.streamlit.app/",
      caseStudy: "/projects/ai-dynamic-pricing",
      image: "/placeholder.svg?height=200&width=400",
      featured: true,
    },

    {
      title: "AI Movie Recommender",
      description:
        "Explainable movie recommendation engine solving streaming decision fatigue. Uses OpenAI text-embedding-3-small and cosine similarity to suggest personalised films from a YouTube video URL or mood input. Every recommendation includes a GPT-4o-mini generated explanation showing WHY it was suggested. Achieved 87% Precision@10 vs. 34% random baseline across 5,000+ movies and 6 streaming platforms.",
      techStack: ["Next.js", "TypeScript", "OpenAI API", "TMDB API", "WatchMode API", "Vercel"],
      github: "https://github.com/aiirveon",
      demo: "https://v0-youtube-recommender.vercel.app/",
      caseStudy: "/projects/ai-movie-recommender",
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
      status: "Shipped",
    },

    {
      title: "Bias Audit Dashboard",
      description:
        "B2B AI tool for trust and safety teams at UK media companies. Detects bias across 6 categories using TF-IDF + XGBoost (F1 0.90) with tiered routing: short inputs go to Claude API for semantic classification, long inputs to the full XGBoost + SHAP pipeline. Includes a live comment moderation simulator, fairness metrics panel, and audit log. Built for Online Safety Act 2023 and Ofcom compliance.",
      techStack: ["Next.js", "FastAPI", "XGBoost", "SHAP", "Claude API", "Supabase"],
      github: "https://github.com/aiirveon/bias-audit-dashboard",
      demo: "https://bias-audit-dashboard.vercel.app",
      caseStudy: "/projects/bias-audit-dashboard",
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
      status: "Shipped",
    },

    {
      title: "Ojuit - AI Filmmaking Intelligence",
      description:
        "Two-product AI platform for solo indie filmmakers. Story Engine guides writers from raw idea to full beat sheet across six stages with AVOID_LIST prompt engineering and full Supabase state persistence. Colour Intelligence pipeline delivers CIE Lab Delta E measurement, XGBoost correction predictions, and scene-to-reference LUT export for DaVinci Resolve and Premiere Pro.",
      techStack: ["Python", "FastAPI", "Next.js", "OpenCV", "XGBoost", "Claude API", "Supabase"],
      github: "https://github.com/aiirveon/chromasync-app",
      demo: "https://chromasync-app.vercel.app",
      caseStudy: "/projects/ojuit",
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
      status: "In Progress",
    },
    {
      title: "Pulse: AI Audience Sentiment Monitor",
      description:
        "Real-time AI audience sentiment monitor for live UK broadcast events. TF-IDF + XGBoost emotion classifier (5-class, Macro F1 0.830) and multi-label topic classifier built for live broadcast producers at BBC, Channel 4, ITV, and Sky. Scripted BAFTA simulation with narrative arc, negative sentiment spike alerts, SHAP word-level explainability, and an editorial guardrail built into the architecture. Aligned with Ofcom Broadcasting Code.",
      techStack: ["Python", "FastAPI", "Next.js", "XGBoost", "SHAP", "Recharts"],
      github: "https://github.com/aiirveon/pulse",
      demo: "https://pulse-pi-inky.vercel.app",
      caseStudy: "/projects/pulse",
      image: "/placeholder.svg?height=200&width=400",
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
                  {project.featured && (
    <Badge className="absolute top-4 left-4 bg-white text-jungle-700 font-bold text-xs">
      Featured
    </Badge>
  )}
                  {project.status === "Shipped" && !project.featured && (
                    <Badge className="absolute top-4 left-4 bg-jungle-500 text-white font-bold text-xs">
                      Shipped
                    </Badge>
                  )}
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
