"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Leaf, ArrowRight, TrendingUp, ShieldCheck, BarChart2, Scale } from "lucide-react"
import Link from "next/link"

export default function TechnicalFundamentals() {
  const [api, setApi] = useState<CarouselApi>()
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  useEffect(() => {
    if (!api) return
    const update = () => {
      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }
    api.on("select", update)
    api.on("reInit", update)
    update()
    return () => { api.off("select", update) }
  }, [api])

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

        {/* Carousel wrapper — position:relative needed for edge-fade overlays */}
        <div className="relative">
          {/* Left edge fade — appears once scrolled away from start */}
          <div
            className={`pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white dark:from-jungle-950 to-transparent transition-opacity duration-300 ${canScrollPrev ? "opacity-100" : "opacity-0"}`}
          />
          {/* Right edge fade — signals more content to the right */}
          <div
            className={`pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white dark:from-jungle-950 to-transparent transition-opacity duration-300 ${canScrollNext ? "opacity-100" : "opacity-0"}`}
          />

          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: false, containScroll: "keepSnaps" }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {/* Card 1 — Titanic */}
              <CarouselItem className="pl-4 basis-[80%] sm:basis-[52%] md:basis-[38%] lg:basis-[28%]">
                <Card className="h-full flex flex-col border-slate-200 dark:border-jungle-800 hover:border-jungle-500 hover:shadow-lg transition-all dark:bg-jungle-800/30 overflow-hidden">
                  <div className="h-36 w-full bg-gradient-to-br from-jungle-100 via-jungle-50 to-slate-100 dark:from-jungle-800 dark:via-jungle-900 dark:to-jungle-800 flex items-center justify-center flex-shrink-0">
                    <BarChart2 className="h-12 w-12 text-jungle-400 dark:text-jungle-500 opacity-70" />
                  </div>
                  <CardHeader>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-700/40 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
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
              </CarouselItem>

              {/* Card 2 — Loan Approval */}
              <CarouselItem className="pl-4 basis-[80%] sm:basis-[52%] md:basis-[38%] lg:basis-[28%]">
                <Card className="h-full flex flex-col border-slate-200 dark:border-jungle-800 hover:border-jungle-500 hover:shadow-lg transition-all dark:bg-jungle-800/30 overflow-hidden">
                  <div className="h-36 w-full bg-gradient-to-br from-slate-100 via-jungle-50 to-jungle-100 dark:from-jungle-900 dark:via-jungle-800 dark:to-jungle-700 flex items-center justify-center flex-shrink-0">
                    <Scale className="h-12 w-12 text-jungle-400 dark:text-jungle-500 opacity-70" />
                  </div>
                  <CardHeader>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-700/40 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
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
              </CarouselItem>

              {/* Card 3 — Loan Policy Assistant */}
              <CarouselItem className="pl-4 basis-[80%] sm:basis-[52%] md:basis-[38%] lg:basis-[28%]">
                <Card className="h-full flex flex-col border-slate-200 dark:border-jungle-800 hover:border-jungle-500 hover:shadow-lg transition-all dark:bg-jungle-800/30 overflow-hidden">
                  <div className="h-36 w-full bg-gradient-to-br from-jungle-50 via-slate-100 to-jungle-100 dark:from-jungle-800 dark:via-jungle-900 dark:to-slate-800 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="h-12 w-12 text-jungle-400 dark:text-jungle-500 opacity-70" />
                  </div>
                  <CardHeader>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-700/40 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
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
              </CarouselItem>
            </CarouselContent>

            <div className="flex justify-end gap-2 mt-4">
              <CarouselPrevious className="static translate-y-0 h-11 w-11 bg-white dark:bg-jungle-800 border-2 border-jungle-400 dark:border-jungle-500 text-jungle-700 dark:text-jungle-300 hover:bg-jungle-50 dark:hover:bg-jungle-700 shadow-md disabled:opacity-30" />
              <CarouselNext className="static translate-y-0 h-11 w-11 bg-white dark:bg-jungle-800 border-2 border-jungle-400 dark:border-jungle-500 text-jungle-700 dark:text-jungle-300 hover:bg-jungle-50 dark:hover:bg-jungle-700 shadow-md disabled:opacity-30" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
