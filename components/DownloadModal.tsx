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
  const [confirmedEmail, setConfirmedEmail] = useState("")

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
      if (!res.ok) {
        await res.json().catch(() => null)
        throw new Error("Request failed")
      }
      const blob = await res.blob()
      const disposition = res.headers.get("Content-Disposition") ?? ""
      const match = disposition.match(/filename="([^"]+)"/)
      const filename = match ? match[1] : `${artefactId}.pdf`
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = filename
      document.body.appendChild(a)
      a.click()
      a.remove()
      URL.revokeObjectURL(url)
      setConfirmedEmail(res.headers.get("X-Downloader-Email") ?? email)
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
        setConfirmedEmail("")
      }, 200)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md bg-white dark:bg-jungle-950 border-slate-200 dark:border-jungle-800">
        <DialogHeader>
          <DialogTitle className="text-slate-800 dark:text-white">{artefactName}</DialogTitle>
          <DialogDescription className="text-slate-600 dark:text-jungle-200">
            Enter your details and we&apos;ll send the document straight to your
            inbox.
          </DialogDescription>
        </DialogHeader>

        {status === "success" ? (
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900 rounded-lg p-6 text-center">
            <p className="text-green-800 dark:text-green-400 font-medium">
              Your download is starting. We&apos;ve also sent a copy to {confirmedEmail}.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label
                htmlFor="download-name"
                className="block text-sm font-medium text-slate-700 dark:text-jungle-200 mb-1"
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
                className="bg-slate-50 dark:bg-jungle-900 border-slate-200 dark:border-jungle-700 dark:text-white dark:placeholder-jungle-500"
              />
            </div>

            <div>
              <Label
                htmlFor="download-email"
                className="block text-sm font-medium text-slate-700 dark:text-jungle-200 mb-1"
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
                className="bg-slate-50 dark:bg-jungle-900 border-slate-200 dark:border-jungle-700 dark:text-white dark:placeholder-jungle-500"
              />
              <p className="text-xs text-slate-500 dark:text-jungle-400 mt-1.5">
                Your name and email are used only to send you this document and to notify me of downloads. I will not add you to any mailing list or share your details with anyone.{" "}
                <a href="/privacy" className="underline hover:text-slate-700 dark:hover:text-jungle-200">
                  Privacy notice
                </a>
              </p>
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
              {status === "loading" ? "Preparing your download…" : "Send me the document"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
