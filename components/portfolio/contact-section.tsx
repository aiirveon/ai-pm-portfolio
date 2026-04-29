import { Github, Linkedin, Mail } from "lucide-react"

interface ContactSectionProps {
  pitch: string
  email: string
  linkedIn: string
  authorName: string
}

export function ContactSection({ pitch, email, linkedIn, authorName }: ContactSectionProps) {
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

          <div className="grid md:grid-cols-1 gap-8 max-w-md mx-auto">
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
                <div className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-jungle-700 opacity-60 cursor-not-allowed">
                  <Github className="w-5 h-5 text-jungle-500" />
                  <div>
                    <p className="text-sm font-medium text-slate-800 dark:text-white">GitHub</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Available on request</p>
                  </div>
                </div>
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
