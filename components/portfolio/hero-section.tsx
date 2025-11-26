import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

interface HeroSectionProps {
  projectName: string
  tagline: string
  status: string
  author: string
  date: string
  demoUrl?: string
  githubUrl?: string
  heroImage?: string
}

export function HeroSection({ 
  projectName, 
  tagline, 
  status, 
  author, 
  date, 
  demoUrl, 
  githubUrl,
  heroImage 
}: HeroSectionProps) {
  return (
    <section id="hero" className="pt-8 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-jungle-500 via-jungle-400 to-jungle-600 bg-clip-text text-transparent">
                  {projectName}
                </span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                {tagline}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 items-center">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-jungle-100 dark:bg-jungle-700/50 text-jungle-700 dark:text-jungle-300">
                {status}
              </span>
              <span className="text-sm text-slate-500 dark:text-slate-400">• By {author} • {date}</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              {demoUrl && (
                <Button asChild size="lg" className="gap-2 bg-jungle-500 hover:bg-jungle-600">
                  <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                    View Live Demo
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              )}
              {githubUrl && (
                <Button asChild size="lg" variant="outline" className="gap-2 border-jungle-200 dark:border-jungle-700">
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    View GitHub
                    <Github className="w-4 h-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>

          <div className="relative h-96 rounded-2xl bg-gradient-to-br from-jungle-100 via-jungle-50 to-jungle-100 dark:from-jungle-800 dark:via-jungle-900 dark:to-jungle-800 border border-jungle-200 dark:border-jungle-700 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-jungle-950 via-transparent to-transparent" />
            {heroImage ? (
              <img src={heroImage} alt={projectName} className="w-full h-full object-cover" />
            ) : (
              <div className="text-center text-slate-500 dark:text-slate-400 z-10">
                <p className="text-sm">[Hero Image/Visual]</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
