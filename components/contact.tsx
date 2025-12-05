"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, FileText } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [consentChecked, setConsentChecked] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setSubmitted(true)
        setConsentChecked(false)
        e.currentTarget.reset()
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        setError("Something went wrong. Please try again.")
      }
    } catch (err) {
      setError("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Get In Touch</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss how I can help your business? Let's talk!
          </p>
          <div className="h-1 w-20 bg-emerald-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                      <p className="text-slate-800 dark:text-white font-medium">ogbeborosaheni.c@gmail.com</p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
                    <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Connect with me</h4>
                    <div className="flex gap-4">
                      <a
                        href="https://www.linkedin.com/in/osaheni-o-94565421a/"
                        className="bg-slate-100 dark:bg-slate-800 p-3 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                      </a>
                      <a
                        href="https://github.com/aiirveon"
                        className="bg-slate-100 dark:bg-slate-800 p-3 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                      </a>
                      <a
                        href="mailto:osaheniogbebor.c@gmail.com"
                        className="bg-slate-100 dark:bg-slate-800 p-3 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                        aria-label="Email"
                      >
                        <FileText className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Send a Message</h3>

                {submitted ? (
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900 rounded-lg p-6 text-center">
                    <h4 className="text-green-800 dark:text-green-400 font-medium text-xl mb-2">
                      ✅ Message Sent Successfully!
                    </h4>
                    <p className="text-green-700 dark:text-green-300 mb-4">
                      Thank you for reaching out. I'll respond within 24 hours.
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Web3Forms Access Key - REPLACE WITH YOUR KEY */}
                    <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />
                    <input type="hidden" name="subject" value="New Contact Form Submission from Portfolio" />
                    <input type="hidden" name="from_name" value="Portfolio Contact Form" />

                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                      >
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                      >
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                      >
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project..."
                        required
                        className="min-h-[150px] bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                      />
                    </div>

                    {/* GDPR CONSENT CHECKBOX */}
                    <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700">
                      <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        checked={consentChecked}
                        onChange={(e) => setConsentChecked(e.target.checked)}
                        required
                        className="mt-1 h-4 w-4 rounded border-slate-300 dark:border-slate-600 text-emerald-600 focus:ring-emerald-500"
                      />
                      <label htmlFor="consent" className="text-sm text-slate-600 dark:text-slate-300">
                        I agree to the{" "}
                        <Link
                          href="/privacy"
                          className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium"
                          target="_blank"
                        >
                          Privacy Policy
                        </Link>{" "}
                        and consent to my data being stored to respond to my inquiry. *
                      </label>
                    </div>

                    {error && (
                      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900 rounded-lg p-3">
                        <p className="text-red-800 dark:text-red-400 text-sm">{error}</p>
                      </div>
                    )}

                    <Button
                      type="submit"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                      disabled={isSubmitting || !consentChecked}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
