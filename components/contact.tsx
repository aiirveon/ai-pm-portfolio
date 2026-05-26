"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Mail, Linkedin, MapPin } from "lucide-react"

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText("osaheniogbebor.c@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-20 bg-white dark:bg-jungle-950 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 max-w-3xl">

        {/* Section header — same pattern as About and Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4 flex items-center justify-center gap-2">
            <Leaf className="h-6 w-6 text-jungle-500 dark:text-jungle-400" />
            Get In Touch
            <Leaf className="h-6 w-6 text-jungle-500 dark:text-jungle-400" />
          </h2>
          <div className="h-1 w-20 bg-jungle-500 mx-auto mb-6" />
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
            Open to AI PM roles, collaborations, and interesting conversations about responsible AI in UK media.
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
        >
          {/* Email card */}
          <button onClick={copyEmail} className="text-left w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-jungle-500 rounded-lg">
            <Card className="border border-slate-200 dark:border-jungle-800 bg-white dark:bg-jungle-900/40 hover:shadow-md hover:border-jungle-400 dark:hover:border-jungle-500 transition-all duration-200 cursor-pointer h-full">
              <CardContent className="p-5 flex items-start gap-4">
                <div className="mt-0.5 shrink-0 h-9 w-9 rounded-full bg-jungle-50 dark:bg-jungle-900 flex items-center justify-center">
                  <Mail className="h-4 w-4 text-jungle-600 dark:text-jungle-400" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1">Email</p>
                  <p className="text-sm font-medium text-slate-800 dark:text-white break-all">
                    osaheniogbebor.c@gmail.com
                  </p>
                  <p className="text-xs text-jungle-600 dark:text-jungle-400 mt-1.5">
                    {copied ? "Copied!" : "Click to copy"}
                  </p>
                </div>
              </CardContent>
            </Card>
          </button>

          {/* LinkedIn card */}
          <a
            href="https://www.linkedin.com/in/osaheniogbebor/"
            target="_blank"
            rel="noopener noreferrer"
            className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-jungle-500 rounded-lg"
          >
            <Card className="border border-slate-200 dark:border-jungle-800 bg-white dark:bg-jungle-900/40 hover:shadow-md hover:border-jungle-400 dark:hover:border-jungle-500 transition-all duration-200 cursor-pointer h-full">
              <CardContent className="p-5 flex items-start gap-4">
                <div className="mt-0.5 shrink-0 h-9 w-9 rounded-full bg-jungle-50 dark:bg-jungle-900 flex items-center justify-center">
                  <Linkedin className="h-4 w-4 text-jungle-600 dark:text-jungle-400" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1">LinkedIn</p>
                  <p className="text-sm font-medium text-slate-800 dark:text-white">
                    linkedin.com/in/osaheniogbebor
                  </p>
                  <p className="text-xs text-jungle-600 dark:text-jungle-400 mt-1.5">
                    Opens in new tab →
                  </p>
                </div>
              </CardContent>
            </Card>
          </a>
        </motion.div>

        {/* Location note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 text-sm text-slate-500 dark:text-slate-400"
        >
          <MapPin className="h-4 w-4 text-jungle-500 dark:text-jungle-400 shrink-0" />
          <span>Based in Salford, Manchester. Available for remote and on-site roles across the UK.</span>
        </motion.div>

      </div>
    </section>
  )
}
