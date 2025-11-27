"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Leaf, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "AI Dynamic Pricing",
      description:
        "ML-powered pricing optimization for UK high-street coffee shops. Achieved R² = 0.997 accuracy with weather integration, SHAP explainability, and ethics guardrails. Projects 16% margin lift.",
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
        "Explainable recommendation system using OpenAI embeddings and semantic search. Achieved 87% Precision@10 with GPT-powered explanations, solving streaming decision fatigue through transparent AI.",
      techStack: ["Next.js", "TypeScript", "OpenAI", "TMDB API", "Vercel"],
      github: "https://github.com/aiirveon",
      demo: "https://v0-youtube-recommender.vercel.app/",
      caseStudy: "/projects/ai-movie-recommender",
      image: "/placeholder.svg?height=200&width=400",
      featured: true,
    },
    {
      title: "Hospital Appointment System API",
      description:
        "Django REST API for booking appointments between patients and doctors with role-based access, JWT authentication, and PostgreSQL backend.",
      techStack: ["Django", "DRF", "PostgreSQL", "JWT", "Docker"],
      github: "#",
      demo: "#",
      caseStudy: null, // No case study yet
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
    {
      title: "Task Manager API",
      description:
        "A comprehensive task management API with user authentication, task categories, priorities, and deadline notifications.",
      techStack: ["Django", "DRF", "PostgreSQL", "Celery", "Redis"],
      github: "#",
      demo: "#",
      caseStudy: null,
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
    {
      title: "Dockerized API + CI/CD Example",
      description:
        "A template project demonstrating best practices for containerizing Django APIs and setting up continuous integration/deployment.",
      techStack: ["Docker", "GitHub Actions", "Django", "AWS"],
      github: "#",
      demo: null,
      caseStudy: null,
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
    {
      title: "Real-time Collaboration Tool",
      description:
        "API backend for a collaborative workspace with real-time updates, document sharing, and team management.",
      techStack: ["Django", "Channels", "WebSockets", "PostgreSQL"],
      github: "#",
      demo: "#",
      caseStudy: null,
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
    {
      title: "LiveStatusAPI with OpenAPI Docs",
      description:
        "A service status monitoring API with comprehensive OpenAPI documentation and interactive testing interface.",
      techStack: ["Django", "DRF", "Swagger", "Redis"],
      github: "#",
      demo: "#",
      caseStudy: null,
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
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
