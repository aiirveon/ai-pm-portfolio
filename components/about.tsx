"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf } from "lucide-react"

export default function About() {
  const skills = [
    { name: "ML/XGBoost", icon: <span className="text-2xl">🤖</span>, color: "bg-blue-100 dark:bg-blue-900" },
    { name: "SHAP/Explainability", icon: <span className="text-2xl">📊</span>, color: "bg-purple-100 dark:bg-purple-900" },
    { name: "Product Strategy", icon: <span className="text-2xl">🎯</span>, color: "bg-green-100 dark:bg-green-900" },
    { name: "Stakeholder Mgmt", icon: <span className="text-2xl">👥</span>, color: "bg-orange-100 dark:bg-orange-900" },
    { name: "Ethics & Bias", icon: <span className="text-2xl">⚖️</span>, color: "bg-red-100 dark:bg-red-900" },
    { name: "OKRs/Roadmaps", icon: <span className="text-2xl">🗺️</span>, color: "bg-cyan-100 dark:bg-cyan-900" },
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-jungle-950 relative overflow-hidden">
      {/* Jungle background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0 bg-contain"
          style={{
            backgroundImage: `url('/images/django-jungle.png')`,
            backgroundPosition: "center",
            backgroundSize: "80%",
            backgroundRepeat: "no-repeat",
            filter: "blur(2px)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="aspect-square max-w-md mx-auto bg-gradient-to-b from-jungle-800/50 to-jungle-950/50 rounded-lg overflow-hidden relative">
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
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-jungle-900/90 to-transparent p-6">
                <h3 className="text-white text-xl font-bold">Ogbebor Osaheni</h3>
                <p className="text-jungle-200">AI Product Manager</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-700 dark:text-slate-300">
            I’m Ogbebor Osaheni — an AI Product Manager building end-to-end ML products from the ground up: ML pipelines, FastAPI backends, and Next.js frontends shipped to production with full PM artefacts before a single line of code.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300">
            I’m drawn to products where AI meets human creativity and editorial judgement — bias detection tools that keep reviewers in control, story engines that guide writers rather than replace them, and pricing systems that explain every recommendation in plain English. The thread across all of it: AI that earns trust by being transparent.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300">
            I’m actively looking for junior AI PM and Technical PM roles in the UK — particularly in media, film and creative technology, and any product-led company where responsible AI is a real constraint, not a tagline.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              {skills.map((skill, index) => (
                <Card key={index} className={`border-none ${skill.color}`}>
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                    <div className="mb-2">{skill.icon}</div>
                    <span className="font-medium text-slate-800 dark:text-white">{skill.name}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
