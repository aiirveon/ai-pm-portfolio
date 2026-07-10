import CodedForestBackground from "@/components/coded-forest-background"

export const metadata = {
  title: "Forest Background Preview — Internal",
  robots: { index: false, follow: false },
}

function PreviewPanel({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-3">
      <p className="text-sm font-mono font-semibold text-slate-500 uppercase tracking-widest px-6">
        {label}
      </p>
      <div className="relative w-full h-[420px] overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
        {children}
      </div>
    </div>
  )
}

function OverlayText() {
  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 pointer-events-none">
      <p className="text-4xl font-bold text-white drop-shadow-lg">Ogbebor Osaheni</p>
      <p className="text-lg text-white/80 drop-shadow">AI Product Manager</p>
    </div>
  )
}

export default function ForestPreviewPage() {
  return (
    <div className="min-h-screen bg-slate-100 py-16 px-6">
      <div className="max-w-5xl mx-auto space-y-4">

        {/* Header */}
        <div className="mb-10 space-y-1">
          <h1 className="text-2xl font-bold text-slate-800">Forest Background — Side-by-Side Preview</h1>
          <p className="text-sm text-slate-500">
            Internal comparison page · not linked from navigation · <code>/forest-preview</code>
          </p>
          <p className="text-xs text-slate-400 italic">
            Overlay text shown to simulate how hero copy sits on each background.
          </p>
        </div>

        {/* 1 — Current photo */}
        <PreviewPanel label="Current: Photo (django-jungle.png)">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
            style={{ backgroundImage: "url('/images/django-jungle.png')" }}
          />
          {/* Same dark overlay the hero uses via bg-jungle-gradient */}
          <div className="absolute inset-0 bg-jungle-950/30" />
          <OverlayText />
        </PreviewPanel>

        {/* 2 — Code-rendered sunny */}
        <PreviewPanel label="New: Code-rendered — Sunny / Light variant">
          <CodedForestBackground variant="sunny" />
          <div className="absolute inset-0 bg-jungle-900/10" />
          <OverlayText />
        </PreviewPanel>

        {/* 3 — Code-rendered dark */}
        <PreviewPanel label="New: Code-rendered — Dark variant">
          <CodedForestBackground variant="dark" />
          <OverlayText />
        </PreviewPanel>

        <p className="text-xs text-slate-400 pt-6 text-center">
          To adopt one: drop <code>&lt;CodedForestBackground variant="sunny|dark" /&gt;</code> into{" "}
          <code>components/hero.tsx</code> in place of the background-image div.
        </p>
      </div>
    </div>
  )
}
