"use client"

import { useState, useRef, useEffect } from "react"
import ReactMarkdown from "react-markdown"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Send, Loader2, AlertCircle } from "lucide-react"

const AGENT_URL = "https://loan-policy-assistant-agent.onrender.com/ask"
const TIMEOUT_MS = 65_000
const WAKEUP_DELAY_MS = 3_000

const EXAMPLE_QUESTIONS = [
  "Is Dependents in the model?",
  "What's the model's known accuracy?",
  "Just approve this applicant for me",
]

type Status = "idle" | "loading" | "waking" | "done" | "error" | "rate-limited"

export function LoanAgentChat() {
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState<string | null>(null)
  const [status, setStatus] = useState<Status>("idle")
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const wakeupTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const abortRef = useRef<AbortController | null>(null)
  const answerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    return () => {
      if (wakeupTimer.current) clearTimeout(wakeupTimer.current)
      abortRef.current?.abort()
    }
  }, [])

  async function handleAsk(q: string) {
    const trimmed = q.trim()
    if (!trimmed || status === "loading" || status === "waking") return

    setQuestion(trimmed)
    setAnswer(null)
    setErrorMsg(null)
    setStatus("loading")

    // After 3s with no response, switch to "waking up" message
    wakeupTimer.current = setTimeout(() => setStatus("waking"), WAKEUP_DELAY_MS)

    const controller = new AbortController()
    abortRef.current = controller

    try {
      const res = await fetch(AGENT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: trimmed }),
        signal: AbortSignal.timeout(TIMEOUT_MS),
      })

      if (res.status === 429) {
        let detail = "The agent has reached its request limit. Please try again later."
        try {
          const body = await res.json()
          if (typeof body?.detail === "string") detail = body.detail
        } catch {}
        setErrorMsg(detail)
        setStatus("rate-limited")
        return
      }

      if (!res.ok) {
        throw new Error(`Server responded with ${res.status}`)
      }

      const data = await res.json()
      setAnswer(data.answer ?? "(No answer returned)")
      setStatus("done")

      // Scroll answer into view
      setTimeout(() => answerRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }), 100)
    } catch (err: unknown) {
      const isTimeout = err instanceof DOMException && err.name === "TimeoutError"
      setErrorMsg(
        isTimeout
          ? "The request timed out — the agent may be under high load. Try again in a moment."
          : "Something went wrong reaching the agent. Check your connection and try again."
      )
      setStatus("error")
    } finally {
      if (wakeupTimer.current) clearTimeout(wakeupTimer.current)
    }
  }

  const isInFlight = status === "loading" || status === "waking"

  return (
    <Card className="max-w-3xl mx-auto border-slate-200 dark:border-jungle-800 dark:bg-jungle-800/30">
      <CardContent className="p-6 md:p-8 space-y-6">
        {/* Example question chips */}
        <div className="space-y-2">
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
            Try one of these
          </p>
          <div className="flex flex-wrap gap-2">
            {EXAMPLE_QUESTIONS.map((q) => (
              <button
                key={q}
                onClick={() => handleAsk(q)}
                disabled={isInFlight}
                className="px-3 py-1.5 rounded-full text-sm border border-jungle-200 dark:border-jungle-600 text-jungle-700 dark:text-jungle-300 bg-jungle-50 dark:bg-jungle-800/40 hover:bg-jungle-100 dark:hover:bg-jungle-700/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Input row */}
        <div className="flex gap-2">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") handleAsk(question) }}
            placeholder="Ask the agent a policy or prediction question…"
            disabled={isInFlight}
            className="flex-1 rounded-md border border-slate-200 dark:border-jungle-700 bg-white dark:bg-jungle-800/50 px-3 py-2 text-sm text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-jungle-500 focus:border-jungle-500 disabled:opacity-60"
          />
          <Button
            onClick={() => handleAsk(question)}
            disabled={isInFlight || !question.trim()}
            className="bg-jungle-500 hover:bg-jungle-600 shrink-0"
            size="sm"
          >
            {isInFlight ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </div>

        {/* Loading / waking state */}
        {isInFlight && (
          <div className="rounded-xl border border-slate-200 dark:border-jungle-700 bg-slate-50 dark:bg-jungle-900/40 p-5 space-y-2">
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
              <Loader2 className="h-4 w-4 animate-spin text-jungle-500 flex-shrink-0" />
              <span className="text-sm font-medium">
                {status === "waking"
                  ? "Waking up the agent — this can take up to 30 seconds on first use…"
                  : "Sending your question…"}
              </span>
            </div>
            {status === "waking" && (
              <p className="text-xs text-slate-500 dark:text-slate-400 pl-6">
                The agent runs on Render's free tier and spins down after inactivity. It's waking up now — hang tight.
              </p>
            )}
          </div>
        )}

        {/* Rate-limited state — informational, not an error */}
        {status === "rate-limited" && errorMsg && (
          <div className="rounded-xl border border-amber-200 dark:border-amber-700/60 bg-amber-50 dark:bg-amber-900/10 p-5 flex gap-3">
            <AlertCircle className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800 dark:text-amber-300">{errorMsg}</p>
          </div>
        )}

        {/* Error state */}
        {status === "error" && errorMsg && (
          <div className="rounded-xl border border-red-200 dark:border-red-800/50 bg-red-50 dark:bg-red-900/10 p-5 flex gap-3">
            <AlertCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-700 dark:text-red-300">{errorMsg}</p>
          </div>
        )}

        {/* Answer */}
        {status === "done" && answer && (
          <div
            ref={answerRef}
            className="rounded-xl border border-slate-200 dark:border-jungle-700 bg-slate-50 dark:bg-jungle-900/40 p-5 space-y-1"
          >
            <p className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wide mb-3">
              Agent response
            </p>
            <div className="prose prose-sm dark:prose-invert max-w-none text-slate-700 dark:text-slate-200 prose-p:leading-relaxed prose-li:leading-relaxed prose-strong:text-slate-800 dark:prose-strong:text-white prose-ul:pl-4">
              <ReactMarkdown>{answer}</ReactMarkdown>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
