interface CodedForestBackgroundProps {
  variant: "sunny" | "dark"
}

export default function CodedForestBackground({ variant }: CodedForestBackgroundProps) {
  const isSunny = variant === "sunny"

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg
        viewBox="0 0 1200 600"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        <defs>
          {isSunny ? (
            <>
              {/* Sky: warm cream at top → pale yellow-green at horizon */}
              <linearGradient id="sky-sunny" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#fdf6e3" />
                <stop offset="60%" stopColor="#eef5d0" />
                <stop offset="100%" stopColor="#d4edaa" />
              </linearGradient>
              {/* Sun glow — large soft radial bloom */}
              <radialGradient id="sun-glow" cx="72%" cy="22%" r="28%">
                <stop offset="0%"  stopColor="#fff8c0" stopOpacity="0.95" />
                <stop offset="30%" stopColor="#fde68a" stopOpacity="0.55" />
                <stop offset="70%" stopColor="#fde68a" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#fde68a" stopOpacity="0" />
              </radialGradient>
              {/* Ground gradient */}
              <linearGradient id="ground-sunny" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4a7c59" />
                <stop offset="100%" stopColor="#2d5a3d" />
              </linearGradient>
            </>
          ) : (
            <>
              {/* Sky: deep slate-jungle at top → rich dark green at horizon */}
              <linearGradient id="sky-dark" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"  stopColor="#0a1a12" />
                <stop offset="55%" stopColor="#112318" />
                <stop offset="100%" stopColor="#1a3326" />
              </linearGradient>
              {/* Moon glow */}
              <radialGradient id="moon-glow" cx="75%" cy="18%" r="18%">
                <stop offset="0%"  stopColor="#e8f4e8" stopOpacity="0.9" />
                <stop offset="20%" stopColor="#c8e8c8" stopOpacity="0.4" />
                <stop offset="60%" stopColor="#a0c8a0" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#a0c8a0" stopOpacity="0" />
              </radialGradient>
              {/* Ground gradient */}
              <linearGradient id="ground-dark" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0f2a1a" />
                <stop offset="100%" stopColor="#071410" />
              </linearGradient>
            </>
          )}
        </defs>

        {/* ── Sky ── */}
        <rect
          x="0" y="0" width="1200" height="600"
          fill={isSunny ? "url(#sky-sunny)" : "url(#sky-dark)"}
        />

        {/* ── Sun / Moon glow bloom ── */}
        <rect
          x="0" y="0" width="1200" height="600"
          fill={isSunny ? "url(#sun-glow)" : "url(#moon-glow)"}
        />

        {/* ── Sun disc ── */}
        {isSunny && (
          <circle cx="864" cy="132" r="38" fill="#fef08a" opacity="0.92" />
        )}

        {/* ── Moon disc ── */}
        {!isSunny && (
          <>
            <circle cx="900" cy="108" r="28" fill="#e2f0e2" opacity="0.88" />
            {/* Crescent shadow */}
            <circle cx="912" cy="102" r="24" fill="#0a1a12" opacity="0.75" />
          </>
        )}

        {/* ── Stars (dark only) ── */}
        {!isSunny && (
          <g opacity="0.7">
            {[
              [120,40],[200,28],[310,55],[440,20],[560,38],[660,18],[750,44],
              [820,30],[980,50],[1060,22],[1100,45],[1150,35],[80,70],[260,65],
              [390,75],[510,60],[700,72],[850,58],[1020,68],[1140,62],
            ].map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r={Math.random() > 0.5 ? 1.5 : 1} fill="#d1fae5" />
            ))}
          </g>
        )}

        {/* ── Background trees — far layer (lightest / most muted) ── */}
        {isSunny ? (
          <g fill="#6aab78" opacity="0.45">
            {/* Wide sweeping canopy silhouettes far away */}
            <ellipse cx="50"   cy="370" rx="90"  ry="120" />
            <ellipse cx="180"  cy="350" rx="100" ry="140" />
            <ellipse cx="340"  cy="365" rx="85"  ry="115" />
            <ellipse cx="500"  cy="355" rx="110" ry="135" />
            <ellipse cx="660"  cy="370" rx="90"  ry="120" />
            <ellipse cx="820"  cy="358" rx="105" ry="130" />
            <ellipse cx="980"  cy="365" rx="88"  ry="118" />
            <ellipse cx="1130" cy="355" rx="100" ry="138" />
            <ellipse cx="1220" cy="368" rx="80"  ry="112" />
          </g>
        ) : (
          <g fill="#0d2b1c" opacity="0.85">
            <ellipse cx="50"   cy="370" rx="90"  ry="120" />
            <ellipse cx="200"  cy="355" rx="105" ry="138" />
            <ellipse cx="370"  cy="368" rx="88"  ry="118" />
            <ellipse cx="530"  cy="358" rx="110" ry="132" />
            <ellipse cx="700"  cy="372" rx="90"  ry="120" />
            <ellipse cx="860"  cy="360" rx="105" ry="128" />
            <ellipse cx="1020" cy="366" rx="88"  ry="118" />
            <ellipse cx="1160" cy="358" rx="100" ry="135" />
          </g>
        )}

        {/* ── Mid trees — medium layer ── */}
        {isSunny ? (
          <g fill="#3d8b54" opacity="0.75">
            <ellipse cx="0"    cy="430" rx="70"  ry="170" />
            <ellipse cx="130"  cy="415" rx="80"  ry="185" />
            <ellipse cx="270"  cy="425" rx="75"  ry="175" />
            <ellipse cx="420"  cy="410" rx="85"  ry="190" />
            <ellipse cx="570"  cy="420" rx="78"  ry="180" />
            <ellipse cx="730"  cy="415" rx="82"  ry="185" />
            <ellipse cx="880"  cy="422" rx="76"  ry="178" />
            <ellipse cx="1030" cy="412" rx="84"  ry="188" />
            <ellipse cx="1180" cy="420" rx="72"  ry="180" />
          </g>
        ) : (
          <g fill="#0a2218" opacity="0.92">
            <ellipse cx="0"    cy="430" rx="70"  ry="170" />
            <ellipse cx="140"  cy="415" rx="82"  ry="185" />
            <ellipse cx="290"  cy="425" rx="76"  ry="175" />
            <ellipse cx="445"  cy="410" rx="86"  ry="192" />
            <ellipse cx="600"  cy="422" rx="78"  ry="180" />
            <ellipse cx="755"  cy="415" rx="82"  ry="185" />
            <ellipse cx="910"  cy="424" rx="76"  ry="178" />
            <ellipse cx="1060" cy="413" rx="84"  ry="188" />
            <ellipse cx="1200" cy="422" rx="72"  ry="180" />
          </g>
        )}

        {/* ── Foreground trees — close, darkest ── */}
        {isSunny ? (
          <g fill="#1f5c35" opacity="0.90">
            <ellipse cx="-20"  cy="520" rx="90"  ry="260" />
            <ellipse cx="160"  cy="505" rx="100" ry="275" />
            <ellipse cx="360"  cy="515" rx="88"  ry="265" />
            <ellipse cx="560"  cy="508" rx="95"  ry="272" />
            <ellipse cx="760"  cy="518" rx="90"  ry="262" />
            <ellipse cx="960"  cy="510" rx="96"  ry="270" />
            <ellipse cx="1160" cy="515" rx="88"  ry="265" />
            <ellipse cx="1240" cy="505" rx="82"  ry="255" />
          </g>
        ) : (
          <g fill="#061410" opacity="0.97">
            <ellipse cx="-20"  cy="520" rx="90"  ry="260" />
            <ellipse cx="170"  cy="505" rx="102" ry="278" />
            <ellipse cx="375"  cy="516" rx="88"  ry="265" />
            <ellipse cx="578"  cy="508" rx="96"  ry="272" />
            <ellipse cx="778"  cy="518" rx="90"  ry="262" />
            <ellipse cx="975"  cy="510" rx="97"  ry="270" />
            <ellipse cx="1170" cy="516" rx="88"  ry="265" />
            <ellipse cx="1250" cy="506" rx="82"  ry="255" />
          </g>
        )}

        {/* ── Ground fill ── */}
        <rect
          x="0" y="520" width="1200" height="80"
          fill={isSunny ? "url(#ground-sunny)" : "url(#ground-dark)"}
        />

        {/* ── Light shafts (sunny only) ── */}
        {isSunny && (
          <g opacity="0.07">
            <polygon points="864,100 820,600 908,600" fill="#fef9c3" />
            <polygon points="864,100 760,600 870,600" fill="#fef9c3" />
            <polygon points="864,100 900,600 980,600" fill="#fef9c3" />
          </g>
        )}
      </svg>
    </div>
  )
}
