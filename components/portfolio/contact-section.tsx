import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Calendar } from "lucide-react"

interface ContactSectionProps {
  pitch: string
  email: string
  linkedIn: string
  github: string
  calendlyUrl?: string
  authorName: string
}

export function ContactSection({ pitch, email, linkedIn, github, calendlyUrl, authorName }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Let's Connect</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              {pitch}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-slate-800 dark:text-white">Contact Info</h3>
              <div className="space-y-3">
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-jungle-700 hover:border-jungle-500 hover:bg-jungle-50 dark:hover:bg-jungle-800/50 transition-all"
                >
                  <Mail className="w-5 h-5 text-jungle-500" />
                  <div>
                    <p className="text-sm font-medium text-slate-800 dark:text-white">Email</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{email}</p>
                  </div>
                </a>
                <a
                  href={linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-jungle-700 hover:border-jungle-500 hover:bg-jungle-50 dark:hover:bg-jungle-800/50 transition-all"
                >
                  <Linkedin className="w-5 h-5 text-jungle-500" />
                  <div>
                    <p className="text-sm font-medium text-slate-800 dark:text-white">LinkedIn</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Connect with me</p>
                  </div>
                </a>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-jungle-700 hover:border-jungle-500 hover:bg-jungle-50 dark:hover:bg-jungle-800/50 transition-all"
                >
                  <Github className="w-5 h-5 text-jungle-500" />
                  <div>
                    <p className="text-sm font-medium text-slate-800 dark:text-white">GitHub</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">View my code</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-slate-800 dark:text-white">Quick Links</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start border-slate-200 dark:border-jungle-700">
                  Download PDF Version
                </Button>
                {calendlyUrl && (
                  <Button asChild variant="outline" className="w-full justify-start border-slate-200 dark:border-jungle-700">
                    <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule a Meeting
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-200 dark:border-jungle-800 text-center text-sm text-slate-500 dark:text-slate-400">
            <p>© 2025 {authorName}. Built with Next.js, React, and Tailwind CSS.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
