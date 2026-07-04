"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Leaf, ArrowRight, TrendingUp, ShieldCheck, BarChart2, Scale } from "lucide-react"
import Link from "next/link"

export default function TechnicalFundamentals() {
  return (
    <section id="technical-fundamentals" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-3 flex items-center justify-center gap-2">
            <Leaf className="h-5 w-5 text-jungle-500 dark:text-jungle-400" />
            Technical Fundamentals
            <Leaf className="h-5 w-5 text-jungle-500 dark:text-jungle-400" />
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
            Deliberate, hands-on practice with core ML and data workflows — documented honestly, mistakes included.
          </p>
          <div className="h-1 w-16 bg-jungle-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full flex flex-col border-slate-200 dark:border-jungle-800 hover:border-jungle-500 hover:shadow-lg transition-all dark:bg-jungle-800/30 overflow-hidden">
              <div className="h-36 w-full bg-gradient-to-br from-jungle-100 via-jungle-50 to-slate-100 dark:from-jungle-800 dark:via-jungle-900 dark:to-jungle-800 flex items-center justify-center flex-shrink-0">
                <BarChart2 className="h-12 w-12 text-jungle-400 dark:text-jungle-500 opacity-70" />
              </div>
              <CardHeader>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <Badge
                    variant="secondary"
                    className="bg-slate-100 dark:bg-slate-700/40 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600"
                  >
                    Practice Project — Not Shipped
                  </Badge>
                </div>
                <CardTitle className="text-lg text-slate-800 dark:text-white">Titanic Survival Prediction</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <CardDescription className="text-slate-600 dark:text-slate-300 text-sm">
                  A guided, hands-on ML fundamentals exercise: data cleaning, confound investigation, feature
                  engineering, model comparison, and honest train/validation/test evaluation. Built to strengthen the
                  technical judgment behind AI product decisions.
                </CardDescription>
                <div className="flex items-center gap-2 text-sm font-medium text-jungle-600 dark:text-jungle-400">
                  <TrendingUp className="h-4 w-4 flex-shrink-0" />
                  <span>81.0% final test accuracy — +19.5 pts over lazy baseline</span>
                </div>
              </CardContent>
              <CardFooter className="pt-2">
                <Button asChild size="sm" className="bg-jungle-500 hover:bg-jungle-600">
                  <Link href="/projects/titanic-survival-prediction">
                    Read the Case Study <ArrowRight className="h-3 w-3 ml-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full flex flex-col border-slate-200 dark:border-jungle-800 hover:border-jungle-500 hover:shadow-lg transition-all dark:bg-jungle-800/30 overflow-hidden">
              <div className="h-36 w-full bg-gradient-to-br from-slate-100 via-jungle-50 to-jungle-100 dark:from-jungle-900 dark:via-jungle-800 dark:to-jungle-700 flex items-center justify-center flex-shrink-0">
                <Scale className="h-12 w-12 text-jungle-400 dark:text-jungle-500 opacity-70" />
              </div>
              <CardHeader>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <Badge
                    variant="secondary"
                    className="bg-slate-100 dark:bg-slate-700/40 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600"
                  >
                    Practice Project — Not Shipped
                  </Badge>
                </div>
                <CardTitle className="text-lg text-slate-800 dark:text-white">Loan Approval: Bias & Compliance Audit</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <CardDescription className="text-slate-600 dark:text-slate-300 text-sm">
                  Building a model for a regulated domain from day one — compliance and fairness questions
                  shaping every decision, not bolted on at the end.
                </CardDescription>
                <div className="flex items-center gap-2 text-sm font-medium text-jungle-600 dark:text-jungle-400">
                  <TrendingUp className="h-4 w-4 flex-shrink-0" />
                  <span>82.9% test accuracy — but an honest, inconclusive fairness finding kept it from a Go recommendation</span>
                </div>
              </CardContent>
              <CardFooter className="pt-2">
                <Button asChild size="sm" className="bg-jungle-500 hover:bg-jungle-600">
                  <Link href="/projects/loan-approval-bias-compliance">
                    Read the Case Study <ArrowRight className="h-3 w-3 ml-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="h-full flex flex-col border-slate-200 dark:border-jungle-800 hover:border-jungle-500 hover:shadow-lg transition-all dark:bg-jungle-800/30 overflow-hidden">
              <div className="h-36 w-full bg-gradient-to-br from-jungle-50 via-slate-100 to-jungle-100 dark:from-jungle-800 dark:via-jungle-900 dark:to-slate-800 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="h-12 w-12 text-jungle-400 dark:text-jungle-500 opacity-70" />
              </div>
              <CardHeader>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <Badge
                    variant="secondary"
                    className="bg-slate-100 dark:bg-slate-700/40 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600"
                  >
                    Learning Project — Not Shipped
                  </Badge>
                </div>
                <CardTitle className="text-lg text-slate-800 dark:text-white">Loan Policy Assistant</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <CardDescription className="text-slate-600 dark:text-slate-300 text-sm">
                  An agentic RAG assistant for loan officers — retrieval, tool use, guardrails, and evals, built to
                  pair with the Loan Approval bias audit project and demonstrate governed AI product design.
                </CardDescription>
                <div className="flex items-center gap-2 text-sm font-medium text-jungle-600 dark:text-jungle-400">
                  <ShieldCheck className="h-4 w-4 flex-shrink-0" />
                  <span>0 guardrail failures — 14/15 eval pass rate across policy, prediction, and refusal questions</span>
                </div>
              </CardContent>
              <CardFooter className="pt-2">
                <Button asChild size="sm" className="bg-jungle-500 hover:bg-jungle-600">
                  <Link href="/projects/loan-policy-assistant">
                    Read the Case Study <ArrowRight className="h-3 w-3 ml-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
