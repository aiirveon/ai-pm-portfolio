"use client"

import { useState, useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// ============================================================================
// TRAINED MODEL — real Logistic Regression coefficients (exported from notebook)
// ============================================================================
const FEATURE_ORDER = [
  "Pclass", "Sex", "Age", "SibSp", "Parch", "Fare", "Has_Cabin",
  "Embarked_Q", "Embarked_S", "Title_Miss", "Title_Mr", "Title_Mrs", "Title_Other",
]

const COEFFICIENTS = [
  -0.7515723, 0.78364579, -0.0422318, -0.36879771, -0.24403012, 0.00223725,
  0.94318975, 0.38495799, -0.26683422, -0.19436337, -1.89275639, 0.66052981,
  -0.98994567,
]

const INTERCEPT = 3.24917687

function predict(featureVector: number[]): number {
  const score = INTERCEPT + featureVector.reduce(
    (sum, val, i) => sum + val * COEFFICIENTS[i], 0
  )
  return 1 / (1 + Math.exp(-score)) // returns probability of survival, 0 to 1
}

type Title = "Mr" | "Mrs" | "Miss" | "Master" | "Other"
type Port = "S" | "C" | "Q"

export function TitanicPredictorWidget() {
  const [pclass, setPclass] = useState(3)
  const [sex, setSex] = useState(0) // 0 = male, 1 = female
  const [age, setAge] = useState(30)
  const [sibsp, setSibsp] = useState(0)
  const [parch, setParch] = useState(0)
  const [fare, setFare] = useState(32)
  const [title, setTitle] = useState<Title>("Mr")
  const [port, setPort] = useState<Port>("S")
  const [hasCabin, setHasCabin] = useState(false)

  const probability = useMemo(() => {
    // One-hot: Master is the dropped baseline (all Title_* = 0)
    const titleMiss = title === "Miss" ? 1 : 0
    const titleMr = title === "Mr" ? 1 : 0
    const titleMrs = title === "Mrs" ? 1 : 0
    const titleOther = title === "Other" ? 1 : 0

    // One-hot: Cherbourg (C) is the dropped baseline (both Embarked_* = 0)
    const embarkedQ = port === "Q" ? 1 : 0
    const embarkedS = port === "S" ? 1 : 0

    const featureVector = [
      pclass,
      sex,
      age,
      sibsp,
      parch,
      fare,
      hasCabin ? 1 : 0,
      embarkedQ,
      embarkedS,
      titleMiss,
      titleMr,
      titleMrs,
      titleOther,
    ]

    return predict(featureVector)
  }, [pclass, sex, age, sibsp, parch, fare, hasCabin, title, port])

  const pct = Math.round(probability * 100)
  const survives = probability > 0.5

  const numberField =
    "w-full rounded-md border border-slate-200 dark:border-jungle-700 bg-white dark:bg-jungle-800/50 px-3 py-2 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-jungle-500 focus:border-jungle-500"

  return (
    <Card className="max-w-3xl mx-auto border-slate-200 dark:border-jungle-800 dark:bg-jungle-800/30">
      <CardContent className="p-6 md:p-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Passenger Class */}
          <div className="space-y-2">
            <Label className="text-slate-700 dark:text-slate-200">Passenger Class</Label>
            <Select value={String(pclass)} onValueChange={(v) => setPclass(Number(v))}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1st Class</SelectItem>
                <SelectItem value="2">2nd Class</SelectItem>
                <SelectItem value="3">3rd Class</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Sex */}
          <div className="space-y-2">
            <Label className="text-slate-700 dark:text-slate-200">Sex</Label>
            <Select value={String(sex)} onValueChange={(v) => setSex(Number(v))}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="0">Male</SelectItem>
                <SelectItem value="1">Female</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Age */}
          <div className="space-y-2 md:col-span-2">
            <div className="flex items-center justify-between">
              <Label className="text-slate-700 dark:text-slate-200">Age</Label>
              <span className="text-sm font-medium text-jungle-600 dark:text-jungle-400">{age}</span>
            </div>
            <Slider
              value={[age]}
              min={0}
              max={80}
              step={1}
              onValueChange={(v) => setAge(v[0])}
            />
          </div>

          {/* Siblings/Spouses */}
          <div className="space-y-2">
            <Label className="text-slate-700 dark:text-slate-200">Siblings / Spouses aboard</Label>
            <input
              type="number"
              min={0}
              max={8}
              value={sibsp}
              onChange={(e) => setSibsp(Math.max(0, Math.min(8, Number(e.target.value) || 0)))}
              className={numberField}
            />
          </div>

          {/* Parents/Children */}
          <div className="space-y-2">
            <Label className="text-slate-700 dark:text-slate-200">Parents / Children aboard</Label>
            <input
              type="number"
              min={0}
              max={6}
              value={parch}
              onChange={(e) => setParch(Math.max(0, Math.min(6, Number(e.target.value) || 0)))}
              className={numberField}
            />
          </div>

          {/* Fare */}
          <div className="space-y-2">
            <Label className="text-slate-700 dark:text-slate-200">Fare paid (£)</Label>
            <input
              type="number"
              min={0}
              max={512}
              value={fare}
              onChange={(e) => setFare(Math.max(0, Math.min(512, Number(e.target.value) || 0)))}
              className={numberField}
            />
          </div>

          {/* Title */}
          <div className="space-y-2">
            <Label className="text-slate-700 dark:text-slate-200">Title</Label>
            <Select value={title} onValueChange={(v) => setTitle(v as Title)}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Mr">Mr</SelectItem>
                <SelectItem value="Mrs">Mrs</SelectItem>
                <SelectItem value="Miss">Miss</SelectItem>
                <SelectItem value="Master">Master</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Embarkation port */}
          <div className="space-y-2 md:col-span-2">
            <Label className="text-slate-700 dark:text-slate-200">Embarkation port</Label>
            <Select value={port} onValueChange={(v) => setPort(v as Port)}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="S">Southampton</SelectItem>
                <SelectItem value="C">Cherbourg</SelectItem>
                <SelectItem value="Q">Queenstown</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Cabin recorded */}
          <div className="space-y-2 md:col-span-2">
            <div className="flex items-center gap-3">
              <Switch
                id="has-cabin"
                checked={hasCabin}
                onCheckedChange={setHasCabin}
                className="data-[state=checked]:bg-jungle-500"
              />
              <Label htmlFor="has-cabin" className="text-slate-700 dark:text-slate-200">
                Cabin recorded on ticket?
              </Label>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              In the training data, this was largely a proxy for passenger class rather than an independent
              factor — see the Data section above.
            </p>
          </div>
        </div>

        {/* Result */}
        <div className="rounded-xl border border-slate-200 dark:border-jungle-700 bg-slate-50 dark:bg-jungle-900/40 p-6 space-y-3">
          <p className="text-2xl font-bold text-slate-800 dark:text-white">
            {pct}% predicted chance of survival
          </p>
          <div className="h-3 w-full rounded-full bg-slate-200 dark:bg-jungle-800 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-300 ${
                survives ? "bg-jungle-500" : "bg-red-400/70 dark:bg-red-500/60"
              }`}
              style={{ width: `${pct}%` }}
            />
          </div>
          <p className="text-xs italic text-slate-500 dark:text-slate-400">
            This runs your actual trained model&apos;s coefficients directly in your browser — no server involved.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
