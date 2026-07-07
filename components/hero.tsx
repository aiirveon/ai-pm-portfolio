"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Leaf } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMounted, setIsMounted] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 })

  useEffect(() => {
    setIsMounted(true)
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-jungle-gradient pb-16">
      {/* Jungle background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage: `url('/images/django-jungle.png')`,
          transform: isMounted
            ? `translateX(${mousePosition.x * -20}px) translateY(${mousePosition.y * -20}px)`
            : "none",
        }}
      />

      {/* Floating leaves - only rendered client-side */}
      {isMounted &&
        Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-jungle-300 opacity-30 z-10"
            initial={{
              x: Math.random() * dimensions.width,
              y: -20,
              rotate: Math.random() * 360,
              scale: 0.5 + Math.random() * 1.5,
            }}
            animate={{
              y: dimensions.height + 50,
              x: `calc(${Math.random() * 100}vw + ${Math.sin(i) * 100}px)`,
              rotate: Math.random() * 360 + 180,
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          >
            <Leaf size={20 + Math.random() * 15} />
          </motion.div>
        ))}

      <div className="container mx-auto px-4 z-10 relative pt-16 sm:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              className="relative h-28 w-28 sm:h-36 sm:w-36 md:h-48 md:w-48 lg:h-56 lg:w-56"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-jungle-400 shadow-2xl bg-white">
                <Image
                  src="/images/profile.png"
                  alt="Ogbebor Osaheni - AI Product Manager and Filmmaker"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center' }}
                  priority
                  sizes="(max-width: 640px) 112px, (max-width: 768px) 144px, (max-width: 1024px) 192px, 224px"
                />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-jungle-400 opacity-20 blur-xl -z-10"></div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg leading-tight">
              AI Product Manager.{" "}
              <span className="text-amber-400">Filmmaker.</span>
              <span className="text-jungle-300 block text-3xl md:text-5xl mt-2">
                Both, on purpose.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto mb-8 drop-shadow leading-relaxed">
              I build AI products from the model to the frontend, with explainability
              and ethics built in. I also direct AI commercials and short films using the
              same systems. Same craft. Different output.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="bg-jungle-600 hover:bg-jungle-700 text-white border-2 border-jungle-500"
              >
                See the AI PM Work
              </Button>
              <Button
                size="lg"
                onClick={() => (window.location.href = "/filmmaker")}
                className="bg-amber-600 hover:bg-amber-700 text-white border-2 border-amber-500"
              >
                See the Filmmaker Work
              </Button>
            </div>

            <p className="text-sm text-slate-300/80 mt-6 drop-shadow">
              Two paths. One person. Pick the one you came for.
            </p>

            <div className="flex justify-center mt-10">
              <motion.a
                href="#about"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Scroll down"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M5 12l7 7 7-7"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade to blend into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-jungle-950 to-transparent pointer-events-none z-10" />

      {/* Jungle vines */}
      <div className="absolute left-0 top-0 h-full w-24 opacity-40 pointer-events-none">
        <motion.div
          className="absolute top-0 left-4 w-4 h-full bg-contain bg-no-repeat bg-top"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 300"><path d="M12,0 Q16,50 8,100 Q0,150 12,200 Q24,250 12,300" stroke="%237d9538" fill="none" strokeWidth="2" /></svg>\')',
          }}
          animate={{ y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      <div className="absolute right-0 top-0 h-full w-24 opacity-40 pointer-events-none">
        <motion.div
          className="absolute top-0 right-4 w-4 h-full bg-contain bg-no-repeat bg-top"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 300"><path d="M12,0 Q8,50 16,100 Q24,150 12,200 Q0,250 12,300" stroke="%237d9538" fill="none" strokeWidth="2" /></svg>\')',
          }}
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>
    </section>
  )
}
