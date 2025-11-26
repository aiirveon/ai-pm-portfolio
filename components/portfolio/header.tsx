import { ThemeToggle } from "./theme-toggle"
import { ProgressBar } from "./progress-bar"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface ProjectHeaderProps {
  showBackButton?: boolean
}

export function ProjectHeader({ showBackButton = true }: ProjectHeaderProps) {
  return (
    <>
      <ProgressBar />
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {showBackButton && (
              <Link 
                href="/#projects" 
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mr-14"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">Back to Projects</span>
              </Link>
            )}
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center">
              <span className="text-sm font-bold text-primary-foreground">PM</span>
            </div>
            <span className="text-xl font-semibold hidden sm:inline">Portfolio</span>
          </div>
          <ThemeToggle />
        </div>
      </header>
    </>
  )
}
