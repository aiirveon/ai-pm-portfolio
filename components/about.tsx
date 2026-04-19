"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Brain, BarChart2, Target, Shield, Code2, Zap } from "lucide-react"

export default function About() {
  const skills = [
    {
      name: "ML & XGBoost",
      description: "Built XGBoost pipelines across pricing, sentiment, and bias detection. Applied Optuna TPE search (50 trials, 3-fold CV) on the pricing system — confirming the baseline was already well-calibrated and the R² ceiling was genuine market noise, not fixable by tuning.",
      icon: "Brain",
    },
    {
      name: "Explainable AI",
      description: "Applied SHAP to the pricing and bias detection models. Pricing: 3 chart types (bar, dot, waterfall) with live per-prediction explanations. Bias Audit: per-word SHAP waterfall in every result card — reviewers see exactly which words drove the verdict and by how much.",
      icon: "BarChart2",
    },
    {
      name: "Product Strategy",
      description: "Wrote PRDs, OKRs, and roadmaps before building. Shipped PM artefacts first, code second — on every project.",
      icon: "Target",
    },
    {
      name: "Responsible AI",
      description: "Built bias audits, fairness constraints, and ethics frameworks aligned to UK Online Safety Act, Ofcom, and GDPR.",
      icon: "Shield",
    },
    {
      name: "Full-Stack Shipping",
      description: "FastAPI backends, Next.js frontends, Supabase — from model to deployed product, end to end.",
      icon: "Code2",
    },
    {
      name: "AI-Assisted Development",
      description: "Direct Claude Code and v0 to ship production interfaces, maintaining full ownership of decisions and architecture.",
      icon: "Zap",
    },
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-jungle-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0 bg-contain"
          style={{
            backgroundImage: `url(‘/images/django-jungle.png’)`,
            backgroundPosition: "center",
            backgroundSize: "80%",
            backgroundRepeat: "no-repeat",
            filter: "blur(2px)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-5xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4 flex items-center justify-center gap-2">
            <Leaf className="h-6 w-6 text-jungle-500 dark:text-jungle-400" />
            About Me
            <Leaf className="h-6 w-6 text-jungle-500 dark:text-jungle-400" />
          </h2>
          <div className="h-1 w-20 bg-jungle-500 mx-auto"></div>
        </motion.div>

        {/* Top: Image + Bio side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-14">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="max-w-xs mx-auto bg-gradient-to-b from-jungle-800/50 to-jungle-950/50 rounded-xl overflow-hidden relative aspect-square">
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <img
                  src="/images/profile.png"
                  alt="Ogbebor Osaheni - AI Product Manager"
                  className="w-full h-full object-contain p-4"
                />
              </motion.div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-jungle-900/90 to-transparent p-4">
                <h3 className="text-white text-lg font-bold">Ogbebor Osaheni</h3>
                <p className="text-jungle-200 text-sm">AI Product Manager</p>
              </div>
            </div>
          </motion.div>

          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              I’m Ogbebor Osaheni, an AI Product Manager building end-to-end ML products from the ground up: ML pipelines, FastAPI backends, and Next.js frontends shipped to production with full PM artefacts before a single line of code.
            </p>
            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              I’m drawn to products where AI meets human creativity and editorial judgement. Bias detection tools that keep reviewers in control, story engines that guide writers rather than replace them, pricing systems that explain every recommendation in plain English. The common thread: AI that earns trust by being transparent.
            </p>
            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              Open to AI PM roles in the UK, particularly in media, film and creative technology. Projects built using AI-assisted development workflows, directing Claude Code and v0 to ship production frontends while maintaining full ownership of product decisions, architecture, and PM artefacts.
            </p>
          </motion.div>
        </div>

        {/* Bottom: Skills grid full width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {skills.map((skill, index) => {
              const icons: Record<string, React.ReactNode> = {
                Brain: <Brain className="h-4 w-4 text-jungle-500" />,
                BarChart2: <BarChart2 className="h-4 w-4 text-jungle-500" />,
                Target: <Target className="h-4 w-4 text-jungle-500" />,
                Shield: <Shield className="h-4 w-4 text-jungle-500" />,
                Code2: <Code2 className="h-4 w-4 text-jungle-500" />,
                Zap: <Zap className="h-4 w-4 text-jungle-500" />,
              }
              return (
                <Card key={index} className="border border-slate-200 dark:border-jungle-800 bg-white dark:bg-jungle-900/40 hover:shadow-sm transition-shadow duration-200">
                  <CardContent className="p-3 flex items-start gap-2.5">
                    <div className="mt-0.5 shrink-0">{icons[skill.icon]}</div>
                    <div>
                      <p className="font-semibold text-xs text-slate-800 dark:text-white mb-0.5">{skill.name}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{skill.description}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
