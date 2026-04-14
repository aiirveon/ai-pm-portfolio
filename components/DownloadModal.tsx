"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface DownloadModalProps {
  isOpen: boolean
  onClose: () => void
  artefactId: string
  project: string
  artefactName: string
}

type Status = "idle" | "loading" | "success" | "error"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function DownloadModal({
  isOpen,
  onClose,
  artefactId,
  project,
  artefactName,
}: DownloadModalProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<Status>("idle")

  const isValid = name.trim().length > 0 && EMAIL_RE.test(email)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!isValid) return

    setStatus("loading")
    try {
      const res = await fetch("/api/download-artefact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email, artefactId, project }),
      })
      if (!res.ok) throw new Error("Request failed")
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onClose()
      // Reset after close animation completes
      setTimeout(() => {
        setName("")
        setEmail("")
        setStatus("idle")
      }, 200)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
        <DialogHeader>
          <DialogTitle className="text-slate-800 dark:text-white">{artefactName}</DialogTitle>
          <DialogDescription className="text-slate-600 dark:text-slate-300">
            Enter your details and we&apos;ll send the document straight to your
            inbox.
          </DialogDescription>
        </DialogHeader>

        {status === "success" ? (
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900 rounded-lg p-6 text-center">
            <p className="text-green-800 dark:text-green-400 font-medium">
              Check your inbox. Your document is on its way.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label
                htmlFor="download-name"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
              >
                Name
              </Label>
              <Input
                id="download-name"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={status === "loading"}
                className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
              />
            </div>

            <div>
              <Label
                htmlFor="download-email"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
              >
                Email
              </Label>
              <Input
                id="download-email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === "loading"}
                className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
              />
            </div>

            {status === "error" && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900 rounded-lg p-3">
                <p className="text-red-800 dark:text-red-400 text-sm">
                  Something went wrong. Please try again.
                </p>
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
              disabled={!isValid || status === "loading"}
            >
              {status === "loading" ? "Sending…" : "Send me the document"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
