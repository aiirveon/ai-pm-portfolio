import { Github, Linkedin, Mail, Leaf } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-jungle-900 text-slate-300 relative overflow-hidden">
      {/* Jungle silhouette at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 opacity-20">
        <div
          className="w-full h-full bg-bottom bg-repeat-x"
          style={{
            backgroundImage: `url('/images/django-jungle.png')`,
            backgroundSize: "auto 100%",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="mb-4 md:mb-0 flex items-center gap-3">
            <img src="/images/profile.png" alt="Ogbebor Osaheni" className="h-10 w-10 rounded-md" />
            <div>
              <p className="text-lg font-semibold flex items-center">
                Ogbebor Osaheni <Leaf className="h-4 w-4 ml-1 text-jungle-400" />
              </p>
              <p className="text-sm text-jungle-400">Django Jungle Explorer</p>
            </div>
          </div>

          <div className="flex gap-4 mb-4 md:mb-0">
            <a
              href="https://www.linkedin.com/in/kihuni/"
              className="p-2 rounded-full hover:bg-jungle-800 transition-colors"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/kihuni"
              className="p-2 rounded-full hover:bg-jungle-800 transition-colors"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:ogbeborosaheni.c@gmail.com"
              className="p-2 rounded-full hover:bg-jungle-800 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="text-sm text-jungle-400">
              © {currentYear} Ogbebor Osaheni. All rights reserved.
            </div>
            <div className="flex gap-3 text-xs">
              <Link 
                href="/privacy" 
                className="text-jungle-400 hover:text-jungle-200 transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-jungle-600">|</span>
              <a 
                href="https://github.com/YOUR_USERNAME/portfolio-website" 
                className="text-jungle-400 hover:text-jungle-200 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Source
              </a>
            </div>
          </div>
        </div>

        {/* Legal disclaimer */}
        <div className="mt-6 pt-4 border-t border-jungle-800 text-center">
          <p className="text-xs text-jungle-500">
            This portfolio showcases AI/ML prototypes for demonstration purposes. 
            Projects are not production systems. GDPR & UK Data Protection Act 2018 compliant.
          </p>
        </div>
      </div>
    </footer>
  )
}
