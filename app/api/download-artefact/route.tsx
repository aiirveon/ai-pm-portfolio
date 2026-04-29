import React from "react"
import { NextRequest, NextResponse } from "next/server"
import { renderToBuffer, Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)
const FROM = "hello@osaheniogbebor.com"
const OWNER_EMAIL = "osaheniogbebor.c@gmail.com"

const C = {
  text: "#111827", muted: "#6B7280", border: "#E5E7EB", bg: "#F9FAFB",
  green: "#16A34A", amber: "#D97706", red: "#DC2626", grey: "#6B7280", white: "#FFFFFF",
}
const PH = 44, PT = 44, PB = 72

const s = StyleSheet.create({
  page: { fontFamily: "Helvetica", paddingLeft: PH, paddingRight: PH, paddingTop: PT, paddingBottom: PB, backgroundColor: C.white, fontSize: 10, color: C.text, lineHeight: 1.6 },
  hdr: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: 1, borderBottomColor: C.border, paddingBottom: 8, marginBottom: 24 },
  hdrWm: { fontSize: 8, color: C.muted, fontFamily: "Helvetica-Bold", letterSpacing: 1 },
  hdrTi: { fontSize: 8, color: C.muted },
  ftr: { position: "absolute", bottom: 24, left: PH, right: PH, flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderTopWidth: 1, borderTopColor: C.border, paddingTop: 6 },
  ftrL: { fontSize: 7, color: C.muted },
  ftrR: { fontSize: 7, color: C.muted },
  sl: { fontSize: 7, fontFamily: "Helvetica-Bold", color: C.muted, letterSpacing: 1.5, marginBottom: 6, marginTop: 18 },
  body: { fontSize: 10, lineHeight: 1.6, color: C.text, marginBottom: 8 },
  h1: { fontSize: 18, fontFamily: "Helvetica-Bold", color: C.text, marginBottom: 4 },
  sub: { fontSize: 9, color: C.muted, marginBottom: 14 },
  ctrl: { backgroundColor: C.bg, borderWidth: 1, borderColor: C.border, borderRadius: 3, padding: 10, marginBottom: 14 },
  ctrlRow: { flexDirection: "row", marginBottom: 3 },
  ctrlLbl: { width: 110, fontSize: 7, fontFamily: "Helvetica-Bold", color: C.muted },
  ctrlVal: { flex: 1, fontSize: 7, color: C.text },
  tbl: { marginBottom: 10, borderWidth: 1, borderColor: C.border },
  tblHdr: { flexDirection: "row", backgroundColor: C.bg },
  tblRow: { flexDirection: "row", borderTopWidth: 1, borderTopColor: C.border },
  thC: { padding: 5, fontSize: 7, fontFamily: "Helvetica-Bold", color: C.muted },
  tdC: { padding: 5, fontSize: 9, color: C.text, lineHeight: 1.4 },
  tdG: { padding: 5, fontSize: 9, color: C.green, fontFamily: "Helvetica-Bold" },
  tdA: { padding: 5, fontSize: 9, color: C.amber, fontFamily: "Helvetica-Bold" },
  tdGr: { padding: 5, fontSize: 9, color: C.grey, fontFamily: "Helvetica-Bold" },
  adrBox: { borderWidth: 1, borderColor: C.border, borderRadius: 3, marginBottom: 10 },
  adrHd: { backgroundColor: C.bg, padding: 8, borderBottomWidth: 1, borderBottomColor: C.border },
  adrId: { fontSize: 7, fontFamily: "Helvetica-Bold", color: C.muted, letterSpacing: 1 },
  adrTi: { fontSize: 10, fontFamily: "Helvetica-Bold", color: C.text, marginTop: 2 },
  adrBd: { padding: 8 },
  adrFl: { marginBottom: 5 },
  adrLb: { fontSize: 7, fontFamily: "Helvetica-Bold", color: C.muted, letterSpacing: 1, marginBottom: 1 },
  adrVl: { fontSize: 9, color: C.text, lineHeight: 1.4 },
  phBox: { backgroundColor: C.bg, borderWidth: 1, borderColor: C.border, borderRadius: 3, padding: 20, marginTop: 20, alignItems: "center" },
  phTi: { fontSize: 12, fontFamily: "Helvetica-Bold", color: C.muted, marginBottom: 8, textAlign: "center" },
  phBd: { fontSize: 10, color: C.muted, textAlign: "center", lineHeight: 1.6 },
  li: { flexDirection: "row", marginBottom: 3 },
  liDot: { fontSize: 9, color: C.muted, marginRight: 6, width: 8 },
  liTx: { flex: 1, fontSize: 9, color: C.text, lineHeight: 1.4 },
})

function Hdr({ title }: { title: string }) {
  return (
    <View style={s.hdr} fixed>
      <Text style={s.hdrWm}>OGBEBOR OSAHENI</Text>
      <Text style={s.hdrTi}>{title}</Text>
    </View>
  )
}

function Ftr({ name }: { name: string }) {
  return (
    <View style={s.ftr} fixed>
      <Text style={s.ftrL}>{name}</Text>
      <Text style={s.ftrR} render={({ pageNumber, totalPages }: { pageNumber: number; totalPages: number }) => `${pageNumber} / ${totalPages}`} />
    </View>
  )
}

function Ctrl({ title, project, type, date }: { title: string; project: string; type: string; date: string }) {
  return (
    <View style={s.ctrl}>
      {([["Document", title], ["Project", project], ["Type", type], ["Author", "Ogbebor Osaheni"], ["Date", date], ["Version", "1.0"], ["Status", "Final"]] as [string, string][]).map(([l, v]) => (
        <View key={l} style={s.ctrlRow}>
          <Text style={s.ctrlLbl}>{l}</Text>
          <Text style={s.ctrlVal}>{v}</Text>
        </View>
      ))}
    </View>
  )
}

function SL({ t }: { t: string }) { return <Text style={s.sl}>{t.toUpperCase()}</Text> }
function Body({ t }: { t: string }) { return <Text style={s.body}>{t}</Text> }
function Li({ t }: { t: string }) {
  return <View style={s.li}><Text style={s.liDot}>•</Text><Text style={s.liTx}>{t}</Text></View>
}

function Adr({ id, title, decision, context, rationale, alternatives, status }: {
  id: string; title: string; decision: string; context: string; rationale: string; alternatives: string; status: string
}) {
  return (
    <View style={s.adrBox}>
      <View style={s.adrHd}>
        <Text style={s.adrId}>{id}</Text>
        <Text style={s.adrTi}>{title}</Text>
      </View>
      <View style={s.adrBd}>
        {([["Decision", decision], ["Context", context], ["Rationale", rationale], ["Alternatives", alternatives], ["Status", status]] as [string, string][]).map(([l, v]) => (
          <View key={l} style={s.adrFl}>
            <Text style={s.adrLb}>{l.toUpperCase()}</Text>
            <Text style={s.adrVl}>{v}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

function TblPriRow({ id, req, pri }: { id: string; req: string; pri: string }) {
  const priStyle = pri === "P0" ? s.tdG : pri === "P1" ? s.tdA : s.tdGr
  return (
    <View style={s.tblRow}>
      <Text style={[s.tdC, { width: 55, fontFamily: "Helvetica-Bold" }]}>{id}</Text>
      <Text style={[s.tdC, { flex: 1 }]}>{req}</Text>
      <Text style={[priStyle, { width: 36 }]}>{pri}</Text>
    </View>
  )
}

function KRRow({ kr, target, result, status }: { kr: string; target: string; result: string; status: string }) {
  const stStyle = status === "Achieved" ? s.tdG : s.tdA
  return (
    <View style={s.tblRow}>
      <Text style={[s.tdC, { flex: 2 }]}>{kr}</Text>
      <Text style={[s.tdC, { width: 80 }]}>{target}</Text>
      <Text style={[s.tdC, { width: 90 }]}>{result}</Text>
      <Text style={[stStyle, { width: 65 }]}>{status}</Text>
    </View>
  )
}

// ─── DYNAMIC PRICING ─────────────────────────────────────────────────────────

function DynamicPricingPrd({ date }: { date: string }) {
  const name = "PRD — AI Dynamic Ticket Pricing"
  return (
    <Document>
      <Page size="A4" style={s.page}>
        <Hdr title={name} />
        <Text style={s.h1}>Product Requirements Document</Text>
        <Text style={s.sub}>AI Dynamic Ticket Pricing — UK Live Events</Text>
        <Ctrl title={name} project="AI Dynamic Ticket Pricing" type="PRD" date={date} />

        <SL t="Executive Overview" />
        <Body t="An end-to-end AI pricing system for UK live events that integrates artist popularity, venue location premiums, demand urgency signals, and market conditions to generate explainable, ethical price recommendations. The model achieves R² = 0.79 on real demand signals — deliberately capturing genuine market unpredictability rather than overfitting — and is deployed as a production Streamlit dashboard." />
        <Body t="The project addresses the full product lifecycle: ML model design decisions, SHAP explainability, CMA-compliant ethics guardrails, and a shipped interactive demo — demonstrating how AI Product Managers bridge technical capability with business value and regulatory awareness." />

        <SL t="Problem Statement" />
        <Body t="UK live events venues lose significant revenue through static ticket pricing that ignores real-time demand signals. The same seat at the O2 Arena sells for the same price whether the artist has just gone viral on TikTok, whether there are 180 or 3 days to the show, and whether a competing event is drawing fans away that same evening." />
        <Body t="The barrier is product thinking: how do you build dynamic pricing without triggering the fan backlash that Ticketmaster faced with Oasis tour pricing in 2024? How do you make recommendations transparent enough that venue managers trust and act on them? How do you operate within CMA guidelines while still capturing genuine demand uplift?" />

        <SL t="Target Users" />
        <Li t="Dave Okonkwo — Independent Promoter, 100–2,000 capacity venues. Needs a simple tool that recaptures revenue from the secondary market without requiring technical expertise or data infrastructure." />
        <Li t="Marcus Webb — Head of Revenue, Mid-Tier Venue. Needs auditable pricing decisions with SHAP explanations he can share with artist management and use to justify decisions to his CFO." />
        <Li t="Priya Sharma — Ticketing PM, Major Festival Group. Needs API-first architecture, SHAP explainability, and real-time demand signal processing scalable to 40,000+ ticket events." />

        <SL t="Functional Requirements" />
        <View style={s.tbl}>
          <View style={s.tblHdr}>
            <Text style={[s.thC, { width: 55 }]}>ID</Text>
            <Text style={[s.thC, { flex: 1 }]}>Requirement</Text>
            <Text style={[s.thC, { width: 36 }]}>Pri</Text>
          </View>
          <TblPriRow id="FR-01" req="Multi-signal demand modelling: XGBoost regression trained on 16 features (artist_popularity, venue_location_premium, days_to_event, viral_shock, transport_disruption, genre, and 10 additional signals). Target variable: price adjustment percentage, not absolute price." pri="P0" />
          <TblPriRow id="FR-02" req="SHAP explainability: every recommendation includes a waterfall chart and plain English explanation showing which factors drove the suggestion and by how much — in percentage points, not just feature names." pri="P0" />
          <TblPriRow id="FR-03" req="CMA-compliant guardrails: hard-coded +22% maximum increase cap and -28% minimum floor enforced at inference via np.clip(). Zero violations across all scenarios including adversarial inputs." pri="P0" />
          <TblPriRow id="FR-04" req="Human-in-the-loop: all recommendations require venue manager approval. Viral moment events (viral_shock=1) trigger mandatory amber flag requiring manual approval before any price change." pri="P0" />
          <TblPriRow id="FR-05" req="Streamlit dashboard: real-time price recommendations, dynamic SHAP waterfall chart, CMA ethics compliance panel with three automated checks, plain English explanation per recommendation." pri="P1" />
          <TblPriRow id="FR-06" req="Optuna hyperparameter optimisation: 50 trials, 3-fold cross-validation. All decisions documented in MODEL_DECISIONS.md with rationale." pri="P1" />
        </View>

        <SL t="Success Metrics" />
        <View style={s.tbl}>
          <View style={s.tblHdr}>
            <Text style={[s.thC, { flex: 2 }]}>Key Result</Text>
            <Text style={[s.thC, { width: 80 }]}>Target</Text>
            <Text style={[s.thC, { width: 90 }]}>Result</Text>
            <Text style={[s.thC, { width: 65 }]}>Status</Text>
          </View>
          <KRRow kr="Model R² learning genuine demand signals (not ticket tier lookup)" target="R² > 0.75" result="R² = 0.7935" status="Achieved" />
          <KRRow kr="SHAP explainability with plain English output for all predictions" target="100% coverage" result="100% + plain English" status="Achieved" />
          <KRRow kr="CMA cap compliance across all test scenarios including adversarial" target="Zero violations" result="Zero violations" status="Achieved" />
          <KRRow kr="Live interactive dashboard with public URL" target="Live URL" result="ai-ticket-pricing.streamlit.app" status="Achieved" />
        </View>

        <SL t="Key Risks" />
        <Li t="RISK-001 (Critical, score 15): CMA investigation triggered by price surge event. Mitigated by +22% hard cap at inference time, SHAP audit trail for every recommendation, and viral shock human review requirement." />
        <Li t="RISK-002 (High, score 12): Fan backlash / social media boycott. Mitigated by price caps preventing extreme surge events and plain English SHAP explanations enabling public communication of pricing rationale." />
        <Li t="RISK-003 (High, score 12): Model drift as artist and genre popularity patterns shift. Mitigated by monthly model performance monitoring and quarterly retraining on latest 12 months of data." />

        <Ftr name={name} />
      </Page>
    </Document>
  )
}

function DynamicPricingModelDecisions({ date }: { date: string }) {
  const name = "Model Decisions — AI Dynamic Ticket Pricing"
  return (
    <Document>
      <Page size="A4" style={s.page}>
        <Hdr title={name} />
        <Text style={s.h1}>Model Decisions</Text>
        <Text style={s.sub}>AI Dynamic Ticket Pricing — UK Live Events</Text>
        <Ctrl title={name} project="AI Dynamic Ticket Pricing" type="Model Decisions" date={date} />

        <SL t="Introduction" />
        <Body t="This document records the key architectural and technical decisions made during development of the AI dynamic ticket pricing system. Each decision is documented in Architecture Decision Record (ADR) format — with the decision, its context, rationale, and alternatives considered. These decisions are the product thinking behind the model, not just the model itself." />

        <Adr
          id="ADR-001"
          title="Target variable: price adjustment percentage, not absolute price"
          decision="The model predicts price adjustment percentage relative to base price, not absolute ticket price."
          context="Initial model trained on absolute ticket price achieved R² = 0.997 — appearing excellent. However, SHAP analysis revealed ticket_tier absorbed 98.3% of feature importance. The model had learned to look up ticket prices by tier, not model demand signals."
          rationale="Targeting adjustment percentage forces the model to learn demand signals — the actual product goal. R² = 0.79 on adjustment percentage is more valuable than R² = 0.997 on absolute price, because it measures what actually matters. High accuracy on the wrong question is worse than honest accuracy on the right one."
          alternatives="Absolute price prediction (rejected — dominated by ticket tier), log-transformed price (rejected — same dominance problem), price percentile ranking (rejected — loses magnitude information)."
          status="Accepted — Final"
        />

        <Adr
          id="ADR-002"
          title="XGBoost with 16 demand signal features including explicit feature engineering"
          decision="XGBoost regression with 16 features: artist_popularity, venue_location_premium, days_to_event, venue, genre, viral_shock, transport_disruption, has_competing_event, is_peak_season, is_saturday, temperature_c, is_cold, is_rainy, is_weekend, month, day_of_week."
          context="Live events pricing is driven by continuous signals (artist popularity, venue premium, days to event) and categorical context (genre, venue, season). XGBoost handles mixed types natively. SHAP analysis required a tree-based model for reliable feature attribution."
          rationale="Top 2 features — artist_popularity (25.8%) and venue_location_premium (24.0%) — explain 49.8% of all price variation. This aligns with domain knowledge that who is performing and where they perform are the two biggest pricing signals. Feature importance validates domain alignment."
          alternatives="Linear regression (rejected — cannot capture non-linear demand interactions), neural network (rejected — no reliable SHAP waterfall, overkill for 16 features), random forest (tested — comparable R² but marginally worse on adversarial edge cases)."
          status="Accepted — Final"
        />

        <Adr
          id="ADR-003"
          title="Hard price cap via np.clip() at inference — not UI-level warning"
          decision="np.clip(prediction, -28.0, 22.0) applied at inference time. Cannot be bypassed by any input combination regardless of UI state."
          context="CMA investigation into Ticketmaster's Oasis tour pricing (2024) confirmed regulatory risk from uncapped surge pricing. The Oasis tickets moved from £135 to £355 — a 163% increase our system blocks absolutely. A UI-level warning can be dismissed or ignored; an inference-level clip cannot."
          rationale="Post-Oasis, uncapped dynamic pricing is not a viable product in the UK live events market. The cap is a regulatory and reputational necessity embedded at the model layer, not the presentation layer. Implementing at inference ensures it cannot be bypassed regardless of how the product is integrated."
          alternatives="UI-level warning only (rejected — can be dismissed), configurable cap per venue (rejected — creates liability if set too high), percentage warning flag (rejected — advisory, not enforceable)."
          status="Accepted — Final"
        />

        <Adr
          id="ADR-004"
          title="Optuna TPE hyperparameter search: 50 trials, 3-fold CV — baseline already well-calibrated"
          decision="Optuna TPE sampler with 50 trials and 3-fold cross-validation. Key finding: marginal improvement only (R² 0.7935 → 0.7962, +0.34%)."
          context="Hyperparameter tuning was conducted to validate whether the baseline had a significant performance ceiling. The marginal improvement confirms the performance ceiling is genuine market noise, not model weakness. The synthetic data was designed with 9.7% noise — representing real market unpredictability."
          rationale="The insight that optimisation produced minimal improvement is itself a product finding: the model is not underfitting, and the remaining 21% unexplained variance represents genuine unpredictability that no tuning will resolve. This is documented honestly in all public-facing materials rather than being hidden."
          alternatives="Grid search (rejected — computationally expensive without Bayesian guidance), random search (rejected — less efficient than TPE for this search space), no tuning (rejected — needed to validate baseline performance)."
          status="Accepted — Final"
        />

        <SL t="Performance Summary" />
        <View style={s.tbl}>
          <View style={s.tblHdr}>
            <Text style={[s.thC, { flex: 1 }]}>Metric</Text>
            <Text style={[s.thC, { width: 100 }]}>Baseline</Text>
            <Text style={[s.thC, { width: 100 }]}>Optimised</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 1 }]}>R² Score</Text>
            <Text style={[s.tdC, { width: 100 }]}>0.7935</Text>
            <Text style={[s.tdG, { width: 100 }]}>0.7962</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 1 }]}>MAE (percentage points)</Text>
            <Text style={[s.tdC, { width: 100 }]}>3.11 pp</Text>
            <Text style={[s.tdC, { width: 100 }]}>3.15 pp</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 1 }]}>RMSE (percentage points)</Text>
            <Text style={[s.tdC, { width: 100 }]}>4.38 pp</Text>
            <Text style={[s.tdG, { width: 100 }]}>4.35 pp</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 1 }]}>CMA cap violations (all scenarios)</Text>
            <Text style={[s.tdC, { width: 100 }]}>N/A</Text>
            <Text style={[s.tdG, { width: 100 }]}>Zero</Text>
          </View>
        </View>

        <Ftr name={name} />
      </Page>
    </Document>
  )
}

function DynamicPricingEthics({ date }: { date: string }) {
  const name = "Ethics Framework — AI Dynamic Ticket Pricing"
  return (
    <Document>
      <Page size="A4" style={s.page}>
        <Hdr title={name} />
        <Text style={s.h1}>Ethics Framework</Text>
        <Text style={s.sub}>AI Dynamic Ticket Pricing — UK Live Events</Text>
        <Ctrl title={name} project="AI Dynamic Ticket Pricing" type="Ethics Framework" date={date} />

        <SL t="Governing Principle" />
        <Body t="Transparent, capped, explainable dynamic pricing is not only ethical — it is the only defensible approach in the current UK regulatory environment. The Oasis/Ticketmaster controversy was a direct input to this framework design. Oasis tickets moved from £135 to £355 — a 163% increase. The CMA opened an investigation. Every guardrail in this system exists because a major industry player got it catastrophically wrong in public, and the regulatory and reputational consequences were immediate." />
        <Body t="This system is designed to be the opposite of that failure: capped at +22%, explainable by SHAP on every recommendation, human-approved on every decision, and CMA-compliant by architecture — not by policy statement." />

        <SL t="Core Principles" />

        <Text style={[s.body, { fontFamily: "Helvetica-Bold", marginTop: 8, marginBottom: 2 }]}>1 — Transparency</Text>
        <Body t="Every price recommendation includes a SHAP waterfall chart and a plain English explanation showing exactly which factors drove the suggestion and by how much — in percentage points, not just feature names. Venue managers, artists, and regulators can see exactly why a price was suggested." />

        <Text style={[s.body, { fontFamily: "Helvetica-Bold", marginTop: 8, marginBottom: 2 }]}>2 — Fairness</Text>
        <Body t="The +22% maximum increase cap prevents the kind of extreme surge pricing that triggered the CMA investigation of Ticketmaster in 2024. The cap is enforced via np.clip() at inference time — it cannot be bypassed by any input combination, configuration change, or UI state." />

        <Text style={[s.body, { fontFamily: "Helvetica-Bold", marginTop: 8, marginBottom: 2 }]}>3 — Accountability</Text>
        <Body t="Every pricing decision includes a full audit trail with SHAP values logged. If the CMA asks why a ticket cost £152 instead of £125, the answer is documented, explainable, and available within 24 hours." />

        <Text style={[s.body, { fontFamily: "Helvetica-Bold", marginTop: 8, marginBottom: 2 }]}>4 — Human Override</Text>
        <Body t="The AI recommends. Venue managers decide. No fully automated price changes. Human judgement remains in the loop for every single recommendation. Viral moment events — where viral_shock equals 1 — trigger an amber flag requiring mandatory human approval before any price change." />

        <Text style={[s.body, { fontFamily: "Helvetica-Bold", marginTop: 8, marginBottom: 2 }]}>5 — No Demographic Targeting</Text>
        <Body t="Pricing is event-based, not person-based. Customer age, gender, purchase history, and postcode are excluded entirely from all feature sets. The model knows about the event, not the buyer. customer_demographics was removed at design stage — before training began." />

        <SL t="Hard Constraints" />
        <Body t="These constraints cannot be overridden by a product decision, user request, or feature request." />

        <View style={s.tbl}>
          <View style={s.tblHdr}>
            <Text style={[s.thC, { flex: 1 }]}>Constraint</Text>
            <Text style={[s.thC, { width: 80 }]}>Threshold</Text>
            <Text style={[s.thC, { flex: 1 }]}>Implementation</Text>
            <Text style={[s.thC, { flex: 1 }]}>Rationale</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 1 }]}>Maximum price increase</Text>
            <Text style={[s.tdC, { width: 80 }]}>+22%</Text>
            <Text style={[s.tdC, { flex: 1 }]}>np.clip() at inference time — cannot be bypassed by any input or configuration.</Text>
            <Text style={[s.tdC, { flex: 1 }]}>CMA-aligned. Prevents 163% Oasis-style surge. Ticketmaster investigation targeted exactly this failure mode.</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 1 }]}>Maximum price decrease</Text>
            <Text style={[s.tdC, { width: 80 }]}>-28%</Text>
            <Text style={[s.tdC, { flex: 1 }]}>np.clip() at inference time.</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Prevents below-cost selling and revenue floor collapse.</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 1 }]}>Viral surge human review</Text>
            <Text style={[s.tdC, { width: 80 }]}>Amber flag</Text>
            <Text style={[s.tdC, { flex: 1 }]}>viral_shock=1 triggers mandatory approval flag on all inputs.</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Prevents automated pricing decisions during high-visibility moments that carry maximum reputational risk.</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 1 }]}>Human override requirement</Text>
            <Text style={[s.tdC, { width: 80 }]}>Every recommendation</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Dashboard requires venue manager approval before any price change takes effect.</Text>
            <Text style={[s.tdC, { flex: 1 }]}>No fully automated pricing. Human judgement in the loop on every decision.</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 1 }]}>No demographic features</Text>
            <Text style={[s.tdC, { width: 80 }]}>Always</Text>
            <Text style={[s.tdC, { flex: 1 }]}>customer_demographics excluded at design stage — not in training data, not in inference pipeline.</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Pricing must not target individuals based on personal characteristics.</Text>
          </View>
        </View>

        <SL t="CMA Compliance Review" />
        <Body t="Informed directly by the CMA's dynamic pricing investigation findings (2024) and the ICO AI Auditing Framework. The Ticketmaster investigation targeted opaque, uncapped, automated surge pricing. This system is designed to be none of those things." />

        <View style={s.tbl}>
          <View style={s.tblHdr}>
            <Text style={[s.thC, { flex: 1 }]}>CMA Requirement</Text>
            <Text style={[s.thC, { flex: 1 }]}>Our Response</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 1 }]}>Transparency about pricing methodology</Text>
            <Text style={[s.tdC, { flex: 1 }]}>SHAP waterfall chart on every recommendation. Plain English explanation of which factors drove the suggestion and by how much.</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 1 }]}>Prohibition on drip pricing — hidden charges</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Fixed price recommendations only. No staged reveals. No hidden uplift applied after the headline price is shown.</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 1 }]}>Consumer protection from exploitative surges</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Hard +22% cap enforced at inference time via np.clip(). Zero violations across 5,000 training scenarios and 500 adversarial edge cases.</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 1 }]}>Audit trail for regulatory investigation</Text>
            <Text style={[s.tdC, { flex: 1 }]}>SHAP values logged per recommendation. Full pricing decision history available within 24 hours of any regulatory request.</Text>
          </View>
        </View>

        <SL t="Bias Audit" />
        <Body t="Following the ICO AI Auditing Framework, a three-step review was conducted: identify potential protected characteristic proxies in all 16 features; validate each feature against fairness criteria; confirm price cap compliance across all scenarios including adversarial edge cases." />

        <View style={s.tbl}>
          <View style={s.tblHdr}>
            <Text style={[s.thC, { flex: 1 }]}>Feature</Text>
            <Text style={[s.thC, { width: 100 }]}>Risk</Text>
            <Text style={[s.thC, { width: 70 }]}>Status</Text>
            <Text style={[s.thC, { flex: 1 }]}>Action</Text>
          </View>
          {[
            ["artist_popularity", "None", "Safe", "Demand-based, not demographic."],
            ["venue_location_premium", "Potential socioeconomic proxy", "Monitored", "Cap at +22% prevents exploitation. London premium reflects genuine demand differences but could disproportionately price out lower-income fans — monitored in post-event audits."],
            ["days_to_event", "None", "Safe", "Universal urgency signal — applies equally regardless of buyer characteristics."],
            ["genre", "Potential cultural proxy", "Monitored", "Demand-based. All predictions within cap. Monitored for systematic patterns."],
            ["viral_shock", "None", "Safe", "Triggers mandatory human review — no auto-increase possible."],
            ["transport_disruption", "None", "Safe", "Suppresses prices during disruption — protects fans from surge during adverse conditions."],
            ["customer_demographics", "Multiple proxies", "Removed", "Excluded entirely at design stage — not present in training data or inference pipeline."],
          ].map(([feat, risk, status, action]) => (
            <View key={feat} style={s.tblRow}>
              <Text style={[s.tdC, { flex: 1 }]}>{feat}</Text>
              <Text style={[s.tdC, { width: 100 }]}>{risk}</Text>
              <Text style={[s.tdC, { width: 70 }]}>{status}</Text>
              <Text style={[s.tdC, { flex: 1 }]}>{action}</Text>
            </View>
          ))}
        </View>

        <Body t="CMA cap compliance test: 5,000 training transactions plus 500 adversarial examples with maximum popularity, minimum days to event, and all positive flags active simultaneously. Result: zero out-of-bounds predictions. np.clip() enforces the hard ceiling at inference time regardless of input combination." />

        <SL t="GDPR Compliance" />

        <View style={s.tbl}>
          <View style={s.tblHdr}>
            <Text style={[s.thC, { flex: 1 }]}>Requirement</Text>
            <Text style={[s.thC, { width: 80 }]}>Status</Text>
            <Text style={[s.thC, { flex: 1 }]}>Evidence</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 1 }]}>No PII in model</Text>
            <Text style={[s.tdC, { width: 80, color: "#16A34A", fontFamily: "Helvetica-Bold" }]}>Compliant</Text>
            <Text style={[s.tdC, { flex: 1 }]}>No customer names, emails, or individual identifiers in any feature. All 16 features are event-level signals.</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 1 }]}>Right to explanation — Article 22</Text>
            <Text style={[s.tdC, { width: 80, color: "#16A34A", fontFamily: "Helvetica-Bold" }]}>Compliant</Text>
            <Text style={[s.tdC, { flex: 1 }]}>SHAP provides itemised explanation of every automated recommendation. Plain English explanation generated alongside every output.</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 1 }]}>Human oversight</Text>
            <Text style={[s.tdC, { width: 80, color: "#16A34A", fontFamily: "Helvetica-Bold" }]}>Compliant</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Dashboard requires venue manager approval on every recommendation. No automated pricing.</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 1 }]}>Data minimisation</Text>
            <Text style={[s.tdC, { width: 80, color: "#16A34A", fontFamily: "Helvetica-Bold" }]}>Compliant</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Event-level signals only. No individual fan data collected or processed at any stage.</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 1 }]}>Audit trail</Text>
            <Text style={[s.tdC, { width: 80, color: "#16A34A", fontFamily: "Helvetica-Bold" }]}>Compliant</Text>
            <Text style={[s.tdC, { flex: 1 }]}>SHAP values logged per recommendation. Full decision history available for regulatory review.</Text>
          </View>
        </View>

        <SL t="Known Limitations" />

        <Text style={[s.body, { fontFamily: "Helvetica-Bold", marginTop: 8, marginBottom: 2 }]}>Limitation 1 — Venue location premium as socioeconomic proxy</Text>
        <Body t="The London venue premium reflects genuine demand differences but could disproportionately price out lower-income fans at London venues. The +22% cap limits the scale of this effect. The feature is monitored in post-event audits. A more granular venue segmentation approach — separating genuine capacity and demand signals from geographic premium — is a v2 consideration." />

        <Text style={[s.body, { fontFamily: "Helvetica-Bold", marginTop: 8, marginBottom: 2 }]}>Limitation 2 — Synthetic training data</Text>
        <Body t="The model was trained on synthetic data with stated distributional assumptions. Real-world performance requires validation against actual venue transaction data before any commercial deployment. The R² of 0.79 reflects genuine demand signal learning on synthetic data — it should not be presented as a guarantee of equivalent performance on live transaction data." />

        <Text style={[s.body, { fontFamily: "Helvetica-Bold", marginTop: 8, marginBottom: 2 }]}>Limitation 3 — Social listening gap</Text>
        <Body t="The viral_shock signal is manually flagged in the demo. A production system would require real-time social API integration with rate limiting and content moderation to automate this signal. Manual flagging introduces latency and human error risk that automated integration would reduce." />

        <Text style={[s.body, { fontFamily: "Helvetica-Bold", marginTop: 8, marginBottom: 2 }]}>Limitation 4 — Optuna optimisation produced marginal improvement only</Text>
        <Body t="50 Optuna trials with 3-fold cross-validation moved R² from 0.7935 to 0.7962 — a 0.34% improvement. This confirms the baseline was already near the performance ceiling for this feature set and synthetic dataset. The remaining unexplained variance represents genuine market unpredictability, not model weakness. This is documented honestly rather than hidden." />

        <SL t="Ongoing Responsibilities" />

        <View style={s.tbl}>
          <View style={s.tblHdr}>
            <Text style={[s.thC, { flex: 2 }]}>Responsibility</Text>
            <Text style={[s.thC, { width: 80 }]}>Frequency</Text>
            <Text style={[s.thC, { flex: 1 }]}>Out-of-cycle trigger</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 2 }]}>Verify np.clip() bounds remain unchanged in inference pipeline</Text>
            <Text style={[s.tdC, { width: 80 }]}>Every release</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Any change to the inference pipeline or model serving code</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 2 }]}>Run adversarial cap compliance test before redeployment</Text>
            <Text style={[s.tdC, { width: 80 }]}>Every retrain</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Any change to model or feature set</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 2 }]}>Review venue_location_premium and genre features for emerging bias patterns</Text>
            <Text style={[s.tdC, { width: 80 }]}>Quarterly</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Any CMA guidance update on dynamic pricing or socioeconomic targeting</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 2 }]}>Review this document for continued accuracy</Text>
            <Text style={[s.tdC, { width: 80 }]}>Every major version</Text>
            <Text style={[s.tdC, { flex: 1 }]}>CMA enforcement action, ICO AI guidance updates, Consumer Rights Act amendments</Text>
          </View>
        </View>

        <Ftr name={name} />
      </Page>
    </Document>
  )
}

// ─── BIAS AUDIT DASHBOARD ────────────────────────────────────────────────────

function BiasAuditPrd({ date }: { date: string }) {
  const name = "PRD — Bias Audit Dashboard"
  return (
    <Document>
      <Page size="A4" style={s.page}>
        <Hdr title={name} />
        <Text style={s.h1}>Product Requirements Document</Text>
        <Text style={s.sub}>Bias Audit Dashboard — UK Media Trust and Safety</Text>
        <Ctrl title={name} project="Bias Audit Dashboard" type="PRD" date={date} />

        <SL t="Executive Overview" />
        <Body t="A B2B AI tool for trust and safety teams at UK media companies. Detects bias across 6 categories using a hybrid tiered routing architecture — inputs of 2 words or fewer are auto-approved at zero cost, 4–15 word inputs go to Claude API for semantic classification, and longer inputs run through a TF-IDF + XGBoost classifier with SHAP word-level highlights. The system achieves F1 0.90 across all 6 bias categories and includes a live comment moderation simulator demonstrating the full human-in-the-loop workflow." />
        <Body t="Built for Online Safety Act 2023, Ofcom Broadcasting Code, and BBC Editorial Guidelines compliance. Ofcom can fine companies up to £18 million or 10% of global annual turnover for failures. A trust and safety team that cannot demonstrate structured, auditable bias review is exposed regardless of how good their intentions are." />

        <SL t="Problem Statement" />
        <Body t="UK media companies produce and moderate thousands of pieces of content daily. Trust and safety teams are responsible for ensuring content does not systematically disadvantage groups based on age, gender, race, nationality, religion, sexuality, or geography. Today this work is done manually — inconsistently, at insufficient scale, and with blind spots that let systematic bias go undetected for months." />

        <SL t="Target Users" />
        <Li t="Content Moderation Analyst — needs a consistent, explainable verdict on every piece of flagged content with word-level evidence they can cite in removal decisions." />
        <Li t="Trust and Safety Manager — needs an audit log exportable for Ofcom compliance reporting and a fairness health indicator to prove systematic bias is being monitored." />
        <Li t="Editorial Director — needs to understand the system's known limitations and confidence levels before trusting automated classifications in editorial decisions." />

        <SL t="Functional Requirements" />
        <View style={s.tbl}>
          <View style={s.tblHdr}>
            <Text style={[s.thC, { width: 55 }]}>ID</Text>
            <Text style={[s.thC, { flex: 1 }]}>Requirement</Text>
            <Text style={[s.thC, { width: 36 }]}>Pri</Text>
          </View>
          <TblPriRow id="FR-01" req="6-category bias classification: demographic_bias, gender_stereotyping, racial_bias, religious_bias, geographic_bias, neutral. All 6 categories must achieve F1 > 0.78 on the test set." pri="P0" />
          <TblPriRow id="FR-02" req="Tiered routing architecture: Tier 1 (≤2 words) auto-approves at zero cost. Tier 2 (4–15 words) routes to Claude API for semantic classification. Tier 3 (>15 words) runs TF-IDF + XGBoost + SHAP pipeline." pri="P0" />
          <TblPriRow id="FR-03" req="Human reviewer action workflow: every classification requires explicit analyst action (Approve / Flag / Escalate). No auto-remove capability. The system never acts on content autonomously." pri="P0" />
          <TblPriRow id="FR-04" req="SHAP word-level highlights: every Tier 3 classification includes the specific words that triggered the verdict. Analyst must be able to read and agree or override with full understanding." pri="P0" />
          <TblPriRow id="FR-05" req="Plain English explanation endpoint: Claude API generates a one-paragraph human-readable explanation grounded in the original content (not hallucinated context)." pri="P1" />
          <TblPriRow id="FR-06" req="Audit log: all classification decisions written to Supabase with timestamp, content hash, verdict, confidence, and analyst action for Ofcom compliance export." pri="P1" />
        </View>

        <SL t="Success Metrics" />
        <View style={s.tbl}>
          <View style={s.tblHdr}>
            <Text style={[s.thC, { flex: 2 }]}>Key Result</Text>
            <Text style={[s.thC, { width: 80 }]}>Target</Text>
            <Text style={[s.thC, { width: 90 }]}>Result</Text>
            <Text style={[s.thC, { width: 65 }]}>Status</Text>
          </View>
          <KRRow kr="F1 score on all 6 bias categories" target="F1 > 0.78" result="0.90 overall, all above 0.78" status="Achieved" />
          <KRRow kr="Fairness disparity ratio across categories" target="< 2x" result="1.00x — perfect balance" status="Achieved" />
          <KRRow kr="Human-in-the-loop with no auto-remove" target="Human always decides" result="Approve/Flag/Escalate only" status="Achieved" />
          <KRRow kr="Live demo at public URL" target="Public URL" result="bias-audit-dashboard.vercel.app" status="Achieved" />
        </View>

        <SL t="Key Risks" />
        <Li t="Geographic bias misclassification: 'People from the north of England lack ambition' scores NEUTRAL because bias is carried by adjectives, not location nouns. Documented in MODEL_DECISIONS.md. Claude explanation layer identifies this and flags for manual review." />
        <Li t="Short text false positives: TF-IDF + XGBoost produces wrong high-confidence verdicts on short text (e.g. 'you are a christian' scored 99% HIGH RISK). Mitigated by Tier 2 routing to Claude API for all 4–15 word inputs." />
        <Li t="Reviewer trust collapse from wrong high-confidence verdicts: mitigated by confidence scores visible on every result and visually distinct low-confidence indicators." />

        <Ftr name={name} />
      </Page>
    </Document>
  )
}

function BiasAuditModelDecisions({ date }: { date: string }) {
  const name = "Model Decisions — Bias Audit Dashboard"
  return (
    <Document>
      <Page size="A4" style={s.page}>
        <Hdr title={name} />
        <Text style={s.h1}>Model Decisions</Text>
        <Text style={s.sub}>Bias Audit Dashboard — UK Media Trust and Safety</Text>
        <Ctrl title={name} project="Bias Audit Dashboard" type="Model Decisions" date={date} />

        <SL t="Introduction" />
        <Body t="This document records the key architectural and technical decisions in the Bias Audit Dashboard. The central finding: most critical improvements came from data and architecture decisions, not model tuning. The model learns exactly what the data shows — if the data conflates two categories, no amount of hyperparameter tuning will teach the model to tell them apart." />

        <Adr
          id="ADR-001"
          title="Hybrid tiered routing: Tier 1 (auto), Tier 2 (Claude API), Tier 3 (XGBoost)"
          decision="Three-tier routing: inputs ≤2 words are auto-approved at zero cost; 4–15 words route to Claude API; >15 words run TF-IDF + XGBoost + SHAP pipeline."
          context="TF-IDF + XGBoost produced high-confidence false positives on short text — 'you are a christian' scoring 99% HIGH RISK religious bias. Showing a wrong answer with 99% confidence destroys reviewer trust and creates compliance risk. A Claude API call costs £0.0003. The cost of a wrong high-confidence verdict is orders of magnitude higher."
          rationale="Cost and accuracy must be matched to input complexity. Short text is out-of-distribution for TF-IDF (which relies on term frequency across longer documents). The tiered architecture solves both a technical accuracy problem and an ethical transparency problem with the same decision."
          alternatives="Single XGBoost model for all inputs (rejected — false positive rate unacceptable on short text), Claude API for all inputs (rejected — cost and latency at scale), keyword blocklist for short text (rejected — brittle, no semantic understanding)."
          status="Accepted — Final"
        />

        <Adr
          id="ADR-002"
          title="Training data fix for F1 0.65 on demographic_bias and racial_bias: prompt redesign, not model tuning"
          decision="When demographic_bias and racial_bias both scored F1 0.65 on first attempt, the fix was redesigning the Claude API generation prompts to create sharper category boundaries — not tuning the XGBoost model."
          context="Both categories scored F1 0.65 on first attempt. Standard response would be to adjust hyperparameters or add training data. But the root cause was that generation prompts allowed overlapping examples — a content about racial stereotyping in news reporting could plausibly belong to either category."
          rationale="The model learns what the data shows. If the data conflates two categories, no tuning resolves it. Prompt redesign created sharper boundaries: demographic_bias focuses on age, disability, and socioeconomic status; racial_bias is constrained to explicitly racial framing in journalism. Post-redesign: demographic_bias F1 0.89, racial_bias F1 0.87."
          alternatives="Hyperparameter tuning (rejected — wrong diagnosis), additional training data without prompt redesign (rejected — more overlapping examples make it worse), merging the two categories (rejected — loss of specificity for analysts)."
          status="Accepted — Final"
        />

        <Adr
          id="ADR-003"
          title="Explanation endpoint passes original content to Claude — not just score and category"
          decision="The /api/explain endpoint passes the original content item alongside the score and category to Claude. Claude is instructed to ground its explanation in the content, not generate context."
          context="Initial implementation passed only score and category to the explanation endpoint. Claude hallucinated context — generating plausible-sounding but fabricated explanations not grounded in the actual content. Discovered in production when a reviewer flagged an explanation that mentioned facts not present in the original post."
          rationale="An explanation that hallucinates context is more dangerous than no explanation — it gives a reviewer false confidence in the wrong reasons. Passing original content adds ~200 tokens per request but eliminates the hallucination risk entirely. Content-grounded explanations pass manual validation."
          alternatives="Explanation generated from SHAP values only (rejected — SHAP values are feature names, not human-readable context), no explanation endpoint (rejected — reviewer trust requires human-readable reasoning)."
          status="Accepted — Final"
        />

        <Adr
          id="ADR-004"
          title="Synthetic training data: deliberate privacy choice, not shortcut"
          decision="All 3,000 training examples are synthetic, generated by Claude API (claude-haiku-4-5). No real user content is stored or processed at any stage."
          context="Training on real UK media content would require DPIA under UK GDPR Article 35, consent framework, anonymisation pipeline, and data processing agreements with multiple publishers. V1 timeline and resources make this unfeasible. Synthetic data enables immediate development while explicitly deferring the data governance question to v2."
          rationale="Documented in MODEL_DECISIONS.md as a deliberate product decision — not a shortcut. The 60/40 clear/subtle difficulty split in generation and the explicit design of neutral examples to reference the same groups as biased categories means the synthetic data tests the model's semantic understanding, not pattern matching on surface features."
          alternatives="Kaggle datasets (rejected — US framing, wrong regulatory context), public social media scrapes (rejected — GDPR risk without consent), crowdsourced annotation (rejected — timeline and cost)."
          status="Accepted — Final"
        />

        <SL t="Performance Summary" />
        <View style={s.tbl}>
          <View style={s.tblHdr}>
            <Text style={[s.thC, { flex: 1 }]}>Category</Text>
            <Text style={[s.thC, { width: 100 }]}>First Attempt F1</Text>
            <Text style={[s.thC, { width: 100 }]}>Final F1</Text>
          </View>
          {[["demographic_bias", "0.65", "0.89"], ["gender_stereotyping", "N/A", "0.91"], ["racial_bias", "0.65", "0.87"], ["religious_bias", "N/A", "0.93"], ["geographic_bias", "N/A", "0.92"], ["neutral", "N/A", "0.88"]].map(([cat, first, final]) => (
            <View key={cat} style={s.tblRow}>
              <Text style={[s.tdC, { flex: 1 }]}>{cat}</Text>
              <Text style={[s.tdC, { width: 100 }]}>{first}</Text>
              <Text style={[s.tdG, { width: 100 }]}>{final}</Text>
            </View>
          ))}
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 1, fontFamily: "Helvetica-Bold" }]}>Overall F1</Text>
            <Text style={[s.tdC, { width: 100 }]}>—</Text>
            <Text style={[s.tdG, { width: 100, fontFamily: "Helvetica-Bold" }]}>0.90</Text>
          </View>
        </View>

        <Ftr name={name} />
      </Page>
    </Document>
  )
}

function BiasAuditEthics({ date }: { date: string }) {
  const name = "Ethics Framework — Bias Audit Dashboard"
  return (
    <Document>
      <Page size="A4" style={s.page}>
        <Hdr title={name} />
        <Text style={s.h1}>Ethics Framework</Text>
        <Text style={s.sub}>Bias Audit Dashboard — UK Media Trust and Safety</Text>
        <Ctrl title={name} project="Bias Audit Dashboard" type="Ethics Framework" date={date} />

        <SL t="Governing Principle" />
        <Body t="A bias detection tool that misclassifies systematically, or whose explanations mislead reviewers, causes the same harm it was built to prevent. The Bias Audit Dashboard operates in a regulated context — UK media companies subject to the Online Safety Act 2023, Ofcom Broadcasting Code, and UK GDPR. Analysts who use this tool make decisions that affect what content reaches audiences. The system provides a signal. The reviewer makes the decision. Always." />

        <SL t="Core Principles" />

        <Text style={[s.body, { fontFamily: "Helvetica-Bold", marginTop: 8, marginBottom: 2 }]}>1 — Human Agency is Non-Negotiable</Text>
        <Body t="Every result requires an explicit reviewer action — Approve, Flag, or Escalate. There is no auto-approve and no auto-remove. The system cannot suppress or publish content autonomously. This is an architectural constraint enforced in the codebase, not a UX preference." />

        <Text style={[s.body, { fontFamily: "Helvetica-Bold", marginTop: 8, marginBottom: 2 }]}>2 — Explainability is a Right</Text>
        <Body t="A reviewer who cannot understand why content was flagged cannot make a defensible decision. Every Tier 3 result includes three layers: SHAP word-level highlights showing which words in the original content triggered the verdict, a plain English Claude API explanation grounded directly in the submitted content, and a confidence score. A reviewer must be able to read all three and either agree with the verdict or override it with full understanding." />

        <Text style={[s.body, { fontFamily: "Helvetica-Bold", marginTop: 8, marginBottom: 2 }]}>3 — The Model Must Not Discriminate in Its Detections</Text>
        <Body t="A bias detection tool that flags content about certain groups at systematically higher rates is itself producing biased outcomes. The fairness constraint is: no bias category may be flagged at more than 2x the rate of any other across the training dataset. Current disparity ratio: 1.00x — computed via pandas in the audit endpoint before every deployment." />

        <Text style={[s.body, { fontFamily: "Helvetica-Bold", marginTop: 8, marginBottom: 2 }]}>4 — Uncertainty Must Be Communicated Honestly</Text>
        <Body t="The model is not certain. Confidence scores reflect probabilistic estimates, not factual correctness. A model can be 95% confident and wrong. The system never presents a score as a verdict. Low-confidence results are visually distinct. The tiered routing architecture exists specifically because false high-confidence verdicts on short text are more harmful than acknowledged uncertain ones." />

        <Text style={[s.body, { fontFamily: "Helvetica-Bold", marginTop: 8, marginBottom: 2 }]}>5 — Synthetic Data is a Deliberate Privacy Choice</Text>
        <Body t="No real user content is stored or processed during training. The 3,000-item dataset was generated synthetically using Claude API and reviewed manually. The accepted trade-off: synthetic data may not capture the full distribution of real-world bias patterns. The constraint accepted in return: no personal data processed without consent. This is a product decision documented here, not a technical default." />

        <Text style={[s.body, { fontFamily: "Helvetica-Bold", marginTop: 8, marginBottom: 2 }]}>6 — No Claim of Neutrality</Text>
        <Body t="The model is not neutral. No model is. This system claims to be transparent about its reasoning, honest about its uncertainty, and subordinate to human judgement. That is the achievable standard." />

        <SL t="Hard Constraints" />
        <Body t="These constraints cannot be overridden by a product decision, user request, or feature request." />

        <View style={s.tbl}>
          <View style={s.tblHdr}>
            <Text style={[s.thC, { flex: 1 }]}>Constraint</Text>
            <Text style={[s.thC, { flex: 1 }]}>Implementation</Text>
            <Text style={[s.thC, { flex: 1 }]}>Rationale</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 1 }]}>No auto-approve or auto-remove</Text>
            <Text style={[s.tdC, { flex: 1 }]}>analyse.py returns score and category only. No autonomous content action anywhere in the codebase.</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Automated content removal without human review is censorship without accountability.</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 1 }]}>Explanation grounded in original content</Text>
            <Text style={[s.tdC, { flex: 1 }]}>explain.py system prompt: "Always refer directly to the actual content provided. Never invent context."</Text>
            <Text style={[s.tdC, { flex: 1 }]}>An explanation that hallucinates context is more harmful than no explanation — it gives reviewers false confidence in wrong reasons.</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 1 }]}>Confidence always visible</Text>
            <Text style={[s.tdC, { flex: 1 }]}>predict_proba score returned on every result. No result displayed without it.</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Reviewers must know certainty level before making a decision.</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 1 }]}>No real content stored</Text>
            <Text style={[s.tdC, { flex: 1 }]}>No database writes in analyse.py or explain.py. audit/history writes reviewer actions only, not content.</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Privacy by design — submitted content is not retained beyond the session.</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 1 }]}>Score is a signal, not a verdict</Text>
            <Text style={[s.tdC, { flex: 1 }]}>UI presents score alongside content and explanation. Reviewer action is always required.</Text>
            <Text style={[s.tdC, { flex: 1 }]}>The reviewer's action is the decision. The interface must never obscure this distinction.</Text>
          </View>
        </View>

        <SL t="Tiered Routing Architecture" />
        <Body t="Three classification tiers matched to input length. Tier 1: inputs of 2 words or fewer are auto-approved at zero cost — too short for reliable analysis. Tier 2: inputs of 3 to 15 words route to Claude API for semantic classification — TF-IDF produces wrong high-confidence results on short text. Tier 3: inputs over 15 words run the full XGBoost + SHAP pipeline. The tiered architecture solves a technical accuracy problem and an ethical transparency problem with the same decision." />

        <SL t="Bias Risks in This System" />

        <Text style={[s.body, { fontFamily: "Helvetica-Bold", marginTop: 8, marginBottom: 2 }]}>Training Data Bias</Text>
        <Body t="The dataset was generated using prompts designed by a single author. If those prompts over-represent certain writing styles or cultural references, the model learns spurious associations. Mitigation: prompts diversified across UK media formats, content registers, and cultural contexts. Approximately 500 examples per category. Category boundaries redesigned after the first run produced overlapping demographic and racial bias categories — the fix was prompt redesign, not model tuning." />

        <Text style={[s.body, { fontFamily: "Helvetica-Bold", marginTop: 8, marginBottom: 2 }]}>SHAP Explanation Bias</Text>
        <Body t="SHAP highlights words that influenced the prediction. If the model learned spurious correlations, SHAP points reviewers toward the wrong words. Mitigation: SHAP outputs validated manually on 50 test cases before deployment. Short inputs route to Claude API specifically because SHAP on short text produces low-signal highlights." />

        <Text style={[s.body, { fontFamily: "Helvetica-Bold", marginTop: 8, marginBottom: 2 }]}>Automation Bias</Text>
        <Body t="Reviewers who see a high-confidence verdict may stop reading the content critically and defer to the model. Mitigation: content is shown before the verdict score in the UI. The reviewer reads the content before seeing the model's opinion. Reviewer action is always required and there is no passive approval path." />

        <Text style={[s.body, { fontFamily: "Helvetica-Bold", marginTop: 8, marginBottom: 2 }]}>Confidence Miscalibration</Text>
        <Body t="XGBoost can be 95% confident in an incorrect classification. This is particularly consequential in trust and safety contexts. Mitigation: confidence displayed prominently on every result. Tier 2 routing handles short inputs where XGBoost produces high-confidence false positives." />

        <SL t="Fairness" />
        <Body t="The fairness constraint is: no bias category may be flagged at more than 2x the rate of any other. This is computed via pandas against the training dataset in the audit endpoint. Current disparity ratio: 1.00x." />
        <Body t="Formal Fairlearn evaluation — demographic parity, equal opportunity, predictive parity, and individual fairness — is deferred to v2. This is a known and accepted v1 limitation. Fairlearn evaluation is a requirement before any production deployment processing real content at scale." />

        <SL t="Regulatory Alignment" />

        <View style={s.tbl}>
          <View style={s.tblHdr}>
            <Text style={[s.thC, { width: 130 }]}>Regulation</Text>
            <Text style={[s.thC, { flex: 1 }]}>Requirement</Text>
            <Text style={[s.thC, { flex: 1 }]}>How this product addresses it</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { width: 130 }]}>Online Safety Act 2023</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Statutory duty of care. Ofcom fines up to £18m or 10% global revenue.</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Structured, auditable review process with exportable audit log. Does not constitute OSA compliance alone — supports a human compliance process.</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { width: 130 }]}>Ofcom Broadcasting Code</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Due accuracy, impartiality, harm and offence standards.</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Six bias categories surface content patterns that may engage Code standards on harm, discrimination, and accuracy.</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { width: 130 }]}>UK GDPR Article 22</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Right not to be subject to solely automated decisions.</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Human-in-the-loop architecture. No decision is solely automated. SHAP + Claude explanation satisfies meaningful explanation requirement.</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { width: 130 }]}>UK GDPR Article 35</Text>
            <Text style={[s.tdC, { flex: 1 }]}>DPIA required before processing personal data at scale.</Text>
            <Text style={[s.tdC, { flex: 1 }]}>v1 processes no real personal data. DPIA required before any v2 deployment processing real content.</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { width: 130 }]}>ICO AI Auditing Framework</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Bias and fairness assessment, transparency and accountability documentation.</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Disparity ratio computed before every deployment. This document is the accountability record the ICO framework recommends.</Text>
          </View>
        </View>

        <SL t="Known Limitations" />

        <Text style={[s.body, { fontFamily: "Helvetica-Bold", marginTop: 8, marginBottom: 2 }]}>Limitation 1 — Geographic bias on adjective-carried content</Text>
        <Body t="'People from the north of England lack ambition' classifies as neutral because the bias is carried by the adjective phrase, not by geographic tokens. TF-IDF cannot capture this semantic relationship. The Claude explanation layer identifies and flags these cases for manual review. A transformer model would likely catch this — deferred to v2." />

        <Text style={[s.body, { fontFamily: "Helvetica-Bold", marginTop: 8, marginBottom: 2 }]}>Limitation 2 — Fairlearn evaluation not completed in v1</Text>
        <Body t="Formal Fairlearn fairness metrics have not been computed for v1. The disparity ratio is measured via pandas against the training dataset. This is a known and accepted limitation. Fairlearn evaluation covering demographic parity, equal opportunity, predictive parity, and individual fairness is a v2 requirement before production deployment at scale." />

        <Text style={[s.body, { fontFamily: "Helvetica-Bold", marginTop: 8, marginBottom: 2 }]}>Limitation 3 — Synthetic training data distribution</Text>
        <Body t="The model was trained on synthetically generated content. Real-world bias patterns — particularly coded, subtle, or culturally specific bias — may not be fully represented. The model should be validated against real held-out examples before any production deployment." />

        <Text style={[s.body, { fontFamily: "Helvetica-Bold", marginTop: 8, marginBottom: 2 }]}>Limitation 4 — Single-word inputs</Text>
        <Body t="Inputs of 2 words or fewer are auto-approved at Tier 1. This is the correct behaviour for reliability, but it means very short content receives no bias analysis. The UI notes this on short-input results." />

        <SL t="Ongoing Responsibilities" />

        <View style={s.tbl}>
          <View style={s.tblHdr}>
            <Text style={[s.thC, { flex: 2 }]}>Responsibility</Text>
            <Text style={[s.thC, { width: 80 }]}>Frequency</Text>
            <Text style={[s.thC, { flex: 1 }]}>Out-of-cycle trigger</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 2 }]}>Re-evaluate disparity ratio against training dataset</Text>
            <Text style={[s.tdC, { width: 80 }]}>Every retrain</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Any change to training data or model architecture</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 2 }]}>Manual review of 50 test cases for explanation accuracy</Text>
            <Text style={[s.tdC, { width: 80 }]}>Every release</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Significant changes to explain endpoint prompt</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 2 }]}>Run Fairlearn evaluation before v2 deployment</Text>
            <Text style={[s.tdC, { width: 80 }]}>Before v2</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Any plan to process real user content</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 2 }]}>Complete DPIA before processing real content</Text>
            <Text style={[s.tdC, { width: 80 }]}>Before v2</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Any plan to use real content in training or inference</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 2 }]}>Review this document for continued accuracy</Text>
            <Text style={[s.tdC, { width: 80 }]}>Every major version</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Regulatory changes — OSA, UK GDPR, Ofcom Code updates</Text>
          </View>
        </View>

        <SL t="What Good Looks Like" />
        <Body t="A trust and safety analyst using this product should be able to say: 'I reviewed the content. I saw the bias risk score and category. I read the specific words the model flagged and the plain English explanation of why. I applied my own judgement and made a decision — approve, flag, or escalate. That decision is logged with my action, the AI verdict, the confidence score, and a timestamp. If Ofcom asks me to demonstrate a systematic bias review process, I can show them every step of every decision I made today. The AI helped me work faster and more consistently. I made every call.'" />

        <Ftr name={name} />
      </Page>
    </Document>
  )
}

// ─── PULSE ───────────────────────────────────────────────────────────────────

function PulsePrd({ date }: { date: string }) {
  const name = "PRD — Pulse"
  return (
    <Document>
      <Page size="A4" style={s.page}>
        <Hdr title={name} />
        <Text style={s.h1}>Product Requirements Document</Text>
        <Text style={s.sub}>Pulse — AI Audience Sentiment Monitor for UK Live Broadcast</Text>
        <Ctrl title={name} project="Pulse" type="PRD" date={date} />

        <SL t="Executive Overview" />
        <Body t="Real-time AI audience sentiment classification for live UK broadcast events. TF-IDF + XGBoost emotion classifier (Macro F1 0.830) with tiered routing, SHAP explainability, and an editorial guardrail built into the architecture — built for BBC, Channel 4, ITV, and Sky. The system classifies 5 emotions and 6 topics simultaneously and fires a negative sentiment alert when negative + angry exceeds 40% of the last 30 posts." />
        <Body t="The central design constraint: editorial sovereignty is non-negotiable. The system never makes an editorial decision. It surfaces signals. The producer always decides. This is not a UX choice — it is an ethical constraint embedded in the architecture and documented in the Ethics Framework." />

        <SL t="Problem Statement" />
        <Body t="Live broadcast producers at UK broadcasters make editorial decisions in real time with almost no structured audience intelligence. During high-stakes events — the BAFTAs, election nights, live finals — audience reaction exists in volume on social media but reaches the gallery too late, too unstructured, and too noisy to act on. A producer needs to read audience sentiment in under 5 seconds and make an editorial judgment. No existing tool is built for this workflow." />

        <SL t="Target Users" />
        <Li t="Live Broadcast Producer — needs to read audience sentiment in under 5 seconds and make editorial judgments during live events without interrupting the gallery workflow." />
        <Li t="Editorial Director — needs confidence that the system cannot make automated content decisions and that every classification is explainable and auditable." />
        <Li t="Trust and Safety Lead — needs a tool aligned to Ofcom Broadcasting Code and BBC Editorial Guidelines, with documented editorial guardrails and a known-limitations register." />

        <SL t="Functional Requirements" />
        <View style={s.tbl}>
          <View style={s.tblHdr}>
            <Text style={[s.thC, { width: 55 }]}>ID</Text>
            <Text style={[s.thC, { flex: 1 }]}>Requirement</Text>
            <Text style={[s.thC, { width: 36 }]}>Pri</Text>
          </View>
          <TblPriRow id="FR-01" req="Emotion classification: 5-class XGBoost (excited, positive, neutral, negative, angry). Macro F1 target > 0.78. No single category below 0.75." pri="P0" />
          <TblPriRow id="FR-02" req="Tiered routing: Tier 1 (≤3 words) auto-classifies as neutral at zero cost. Tier 2 (4–20 words) routes to Claude API. Tier 3 (>20 words) runs TF-IDF + XGBoost + SHAP pipeline." pri="P0" />
          <TblPriRow id="FR-03" req="Editorial guardrail: persistent, non-dismissible label on every screen reading 'Pulse surfaces audience signals. Editorial decisions remain with the producer.' This is an architectural constraint, not a UX element." pri="P0" />
          <TblPriRow id="FR-04" req="Alert system: fires when negative + angry exceeds 40% of last 30 posts. Alert names the dominant topic (e.g. 'Negative spike: Winner Reaction'). Alert describes signal, never recommends action." pri="P0" />
          <TblPriRow id="FR-05" req="Multi-label topic classification: 6 topics (winner_reaction, presenter_performance, ceremony_production, diversity_representation, fashion_red_carpet, general_audience_reaction). OneVsRest XGBoost." pri="P1" />
          <TblPriRow id="FR-06" req="Scripted BAFTA narrative arc simulator: 5 stages (Opening, Rising, Controversy, Recovery, Closing) demonstrating dominant emotion shifts for demo use." pri="P1" />
        </View>

        <SL t="Success Metrics" />
        <View style={s.tbl}>
          <View style={s.tblHdr}>
            <Text style={[s.thC, { flex: 2 }]}>Key Result</Text>
            <Text style={[s.thC, { width: 80 }]}>Target</Text>
            <Text style={[s.thC, { width: 90 }]}>Result</Text>
            <Text style={[s.thC, { width: 65 }]}>Status</Text>
          </View>
          <KRRow kr="Emotion classifier Macro F1" target="Macro F1 > 0.78" result="0.830" status="Achieved" />
          <KRRow kr="Tiered routing operational" target="3 tiers live" result="All 3 tiers operational" status="Achieved" />
          <KRRow kr="Editorial guardrail on every screen" target="Non-dismissible" result="Persistent footer, all screens" status="Achieved" />
          <KRRow kr="Live demo with scripted BAFTA arc" target="Public URL" result="pulse-pi-inky.vercel.app" status="Achieved" />
        </View>

        <SL t="Known Limitations" />
        <Li t="general_audience_reaction F1 0.304 — structural catch-all limitation. Defined by exclusion (applies when nothing else does). Low-confidence topic tags shown with distinct visual indicator in production." />
        <Li t="negative/angry boundary F1 0.750 — likely irreducible with synthetic data. In production, alert uses combined negative + angry score, not either emotion alone." />
        <Li t="Social media demographic gap: social audiences skew younger and more urban than linear broadcast audiences. Surfaced as a persistent caveat in the dashboard, not buried in documentation." />

        <Ftr name={name} />
      </Page>
    </Document>
  )
}

function PulseModelDecisions({ date }: { date: string }) {
  const name = "Model Decisions — Pulse"
  return (
    <Document>
      <Page size="A4" style={s.page}>
        <Hdr title={name} />
        <Text style={s.h1}>Model Decisions</Text>
        <Text style={s.sub}>Pulse — AI Audience Sentiment Monitor</Text>
        <Ctrl title={name} project="Pulse" type="Model Decisions" date={date} />

        <SL t="Introduction" />
        <Body t="This document records the key architectural and technical decisions in Pulse. Central principle: write the labelling guide before generating any data. Every emotion boundary definition is a decision about what the model learns. Every topic decision tree is a specification. The correct order is labelling guide first, then data generation, then model training." />

        <Adr
          id="ADR-001"
          title="Labelling guide written before data generation — not after first failed training run"
          decision="A detailed labelling guide with emotion decision trees, topic definitions, and pilot check protocol was written before any data generation. All 2,699 synthetic posts were generated against this guide."
          context="Previous projects iterated on category definitions after seeing model performance. This produced overlapping categories that required regeneration cycles. For Pulse, the decision was made to define all emotion boundaries explicitly before generating a single example."
          rationale="The labelling guide is not documentation — it is product design. Writing it first meant every generation prompt had unambiguous boundary conditions. The negative/angry boundary (the hardest classification pair) was explicitly defined with example posts for each side before generation began. This saved multiple regeneration cycles."
          alternatives="Generate first, define categories from data patterns (rejected — categories emerged from editorial needs, not data patterns), use existing sentiment taxonomy (rejected — broadcast context requires domain-specific emotion categories)."
          status="Accepted — Final"
        />

        <Adr
          id="ADR-002"
          title="Negative/angry F1 improvement via targeted augmentation — not hyperparameter tuning"
          decision="When negative F1 scored 0.742 after initial training, the fix was 300 additional targeted examples with sharper prompt definitions — not hyperparameter tuning."
          context="After initial training on 2,399 examples, the negative/angry boundary produced F1 0.742 — below the 0.78 PRD threshold. Standard response would be to adjust learning rate, estimators, or class weights. The actual root cause was boundary bleed — some negative examples used angry register."
          rationale="The model learns what the data shows. Sharper prompt definitions for the augmentation batch (negative = dissatisfied without hostility; angry = explicit frustration, hostility, or outrage) resolved the boundary bleed. Post-augmentation: negative F1 0.750. Remaining gap is documented as irreducible with synthetic data — requires real broadcast audience comments under proper consent framework."
          alternatives="Hyperparameter tuning (rejected — wrong diagnosis), merging negative and angry into a single negative category (rejected — editorial teams need the distinction), raising alert threshold to compensate (rejected — masks the limitation rather than addressing it)."
          status="Accepted — Final"
        />

        <Adr
          id="ADR-003"
          title="fashion_red_carpet F1 fix: test split rebalance from 15 to 30 examples"
          decision="When fashion_red_carpet F1 scored 0.696, the fix was rebalancing the test split from 15 to 30 examples — not model changes or additional training data."
          context="With 15 test examples, one wrong prediction moves F1 by 6.7 percentage points. F1 0.696 was a measurement problem, not a model problem. The model's internal representation of fashion content was sound — the test set was simply too small to measure it reliably."
          rationale="Increasing to 30 test examples moved F1 from 0.696 to 0.776 at zero additional training cost. This is a PM insight: when a metric looks wrong, diagnose the measurement before treating the model. Test sample size is a product decision that shapes how performance is reported."
          alternatives="Adding more training data (rejected — would not fix the measurement problem), lowering the threshold for this category (rejected — creates inconsistent quality standards), removing the category (rejected — fashion coverage is a core BAFTA topic)."
          status="Accepted — Final"
        />

        <Adr
          id="ADR-004"
          title="general_audience_reaction F1 0.304 accepted as structural limitation — documented, not hidden"
          decision="general_audience_reaction F1 0.304 is accepted as an irreducible structural limitation and documented in MODEL_DECISIONS.md. Low-confidence topic tags shown with distinct visual indicator in production UI."
          context="general_audience_reaction is defined by exclusion — it applies when no other topic applies. Models learn by positive examples. A category defined by the absence of other signals is structurally harder to learn than a category defined by its own positive signal patterns."
          rationale="Documenting the limitation honestly and surfacing it in the UI is more responsible than attempting to force the model to learn a structurally ambiguous category. In production, low-confidence results carry a visual uncertainty indicator — the system tells the producer when it is unsure, rather than projecting false certainty."
          alternatives="Removing the category (rejected — needed for posts that genuinely don't fit any specific topic), spending more training budget on this category (rejected — structural problem, not a data volume problem), using Claude API for all general category cases (rejected — cost and latency)."
          status="Accepted — Final"
        />

        <SL t="Performance Summary" />
        <View style={s.tbl}>
          <View style={s.tblHdr}>
            <Text style={[s.thC, { flex: 1 }]}>Emotion Category</Text>
            <Text style={[s.thC, { width: 100 }]}>F1 Score</Text>
            <Text style={[s.thC, { width: 100 }]}>Threshold</Text>
          </View>
          {[["excited", "0.851", "0.75"], ["positive", "0.882", "0.75"], ["neutral", "0.843", "0.75"], ["negative", "0.750", "0.75"], ["angry", "0.824", "0.75"]].map(([cat, f1, thr]) => (
            <View key={cat} style={s.tblRow}>
              <Text style={[s.tdC, { flex: 1 }]}>{cat}</Text>
              <Text style={[s.tdG, { width: 100 }]}>{f1}</Text>
              <Text style={[s.tdC, { width: 100 }]}>{thr}</Text>
            </View>
          ))}
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 1, fontFamily: "Helvetica-Bold" }]}>Macro F1</Text>
            <Text style={[s.tdG, { width: 100, fontFamily: "Helvetica-Bold" }]}>0.830</Text>
            <Text style={[s.tdC, { width: 100 }]}>0.78</Text>
          </View>
        </View>

        <Ftr name={name} />
      </Page>
    </Document>
  )
}

function PulseEthics({ date }: { date: string }) {
  const name = "Ethics Framework — Pulse"
  return (
    <Document>
      <Page size="A4" style={s.page}>
        <Hdr title={name} />
        <Text style={s.h1}>Ethics Framework</Text>
        <Text style={s.sub}>Pulse — AI Audience Sentiment Monitor for Live Broadcast</Text>
        <Ctrl title={name} project="Pulse" type="Ethics Framework" date={date} />

        <SL t="Governing Principle" />
        <Body t="The central risk in Pulse is not a technical one. If a live broadcast producer consistently responds to sentiment signals, the algorithm gradually shapes editorial decisions — and the broadcast stops reflecting editorial judgement and starts reflecting what generates audience reaction. Every architectural decision in this system was made to prevent that outcome. Editorial sovereignty is an ethical constraint embedded in the architecture, not a disclaimer in the documentation." />

        <SL t="Core Principles" />

        <Text style={[s.body, { fontFamily: "Helvetica-Bold", marginTop: 8, marginBottom: 2 }]}>1 — Editorial Sovereignty</Text>
        <Body t="The system never makes a content decision. Every result requires an explicit producer response. The editorial guardrail — 'Pulse surfaces audience signals. Editorial decisions remain with the producer.' — is persistent and non-dismissible on every screen. It is rendered as a static component with no dismiss mechanism and cannot be removed by any user action or configuration." />

        <Text style={[s.body, { fontFamily: "Helvetica-Bold", marginTop: 8, marginBottom: 2 }]}>2 — Transparency Over False Confidence</Text>
        <Body t="Every classification includes a confidence score. Low-confidence results are visually distinct. The tiered routing architecture exists specifically to prevent TF-IDF + XGBoost from producing wrong high-confidence results on short text. A wrong answer at 95% confidence is more harmful than an acknowledged uncertain one." />

        <Text style={[s.body, { fontFamily: "Helvetica-Bold", marginTop: 8, marginBottom: 2 }]}>3 — The Audience Is Not the Editorial Compass</Text>
        <Body t="A sentiment spike is a data point, not an editorial directive. High audience engagement with a topic is not evidence that the topic deserves more coverage. Pulse never frames its outputs as recommendations — alert language names the signal only. 'Negative spike: Winner Reaction' not 'Consider addressing Winner Reaction'." />

        <Text style={[s.body, { fontFamily: "Helvetica-Bold", marginTop: 8, marginBottom: 2 }]}>4 — Social Signal Demographic Caveat</Text>
        <Body t="Social media audiences skew younger and more urban than linear broadcast audiences. A negative spike on social media may not represent the full broadcast audience. This caveat is surfaced in the dashboard as a persistent note, not buried in documentation." />

        <Text style={[s.body, { fontFamily: "Helvetica-Bold", marginTop: 8, marginBottom: 2 }]}>5 — Privacy by Design</Text>
        <Body t="No real user data is stored or processed in v1. All classifications are held in memory for the duration of the session only and cleared on reset. The training dataset comprises 2,699 synthetic BAFTA social posts with no real personal data. This is a product decision, not a technical default." />

        <SL t="Hard Constraints" />
        <Body t="These constraints cannot be overridden by a product decision, user request, or feature request." />

        <View style={s.tbl}>
          <View style={s.tblHdr}>
            <Text style={[s.thC, { flex: 1 }]}>Constraint</Text>
            <Text style={[s.thC, { flex: 1 }]}>Implementation</Text>
            <Text style={[s.thC, { flex: 1 }]}>Rationale</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 1 }]}>No editorial recommendations</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Output is classification only. No recommendation language in any component.</Text>
            <Text style={[s.tdC, { flex: 1 }]}>The system must inform, not direct.</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 1 }]}>Confidence always visible</Text>
            <Text style={[s.tdC, { flex: 1 }]}>predict_proba score on every result via EmotionBadge in feed-post.tsx.</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Producers must know certainty level before acting.</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 1 }]}>Editorial guardrail persistent</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Static component, non-dismissible, rendered on every screen.</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Producer must never forget the signal is advisory.</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 1 }]}>Alert names signal not action</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Alert format: {'Negative sentiment spike: {topic}'}. No action language.</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Prevents the system from directing editorial decisions.</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 1 }]}>No real data stored</Text>
            <Text style={[s.tdC, { flex: 1 }]}>session_results is an in-memory list. No database writes anywhere in the codebase.</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Privacy by architecture.</Text>
          </View>
        </View>

        <SL t="Tiered Routing Architecture" />
        <Body t="Three classification tiers matched to input length. Tier 1: inputs of 3 words or fewer are auto-classified as neutral with a fixed confidence of 0.4 — too short to classify reliably. Tier 2: inputs of 4 to 20 words route to Claude API (claude-haiku) for semantic classification — TF-IDF produces unreliable results on short casual text. Tier 3: inputs over 20 words run the full XGBoost + SHAP pipeline." />

        <SL t="The Feedback Loop Risk" />
        <Body t="If Pulse is used consistently across multiple broadcasts and producers consistently respond to sentiment spikes by pivoting coverage, the signal degrades. Audiences learn that emotional reaction drives what gets covered. Engagement-maximising behaviour increases. The model begins measuring strategic audience behaviour rather than genuine sentiment. Editorial decisions shift toward the most vocal fraction of the audience rather than the full broadcast audience." />
        <Body t="Mitigations in v1: the tool is scoped to a single producer screen with no broadcast-wide integration; there is no historical comparison feature so producers cannot see what drove engagement in previous broadcasts; no engagement optimisation framing appears anywhere in the UI." />

        <SL t="Regulatory Alignment" />

        <View style={s.tbl}>
          <View style={s.tblHdr}>
            <Text style={[s.thC, { width: 140 }]}>Regulation</Text>
            <Text style={[s.thC, { flex: 1 }]}>Requirement</Text>
            <Text style={[s.thC, { flex: 1 }]}>How Pulse addresses it</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { width: 140 }]}>Ofcom Broadcasting Code — Section 5</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Due impartiality on matters of public policy</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Classification without recommendation. Editorial guardrail enforces producer sovereignty architecturally.</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { width: 140 }]}>Ofcom Broadcasting Code — Section 2</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Harm and offence standards</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Alert system gives earlier warning of negative sentiment spikes — supports Section 2 compliance.</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { width: 140 }]}>BBC Editorial Guidelines</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Coverage must not be driven by audience pressure</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Pulse informs producers. It does not direct them. Alert language is descriptive only.</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { width: 140 }]}>UK GDPR Article 22</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Right not to be subject to solely automated decisions</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Human-in-the-loop architecture. No decision is solely automated.</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { width: 140 }]}>UK GDPR Article 35</Text>
            <Text style={[s.tdC, { flex: 1 }]}>DPIA required before processing personal data at scale</Text>
            <Text style={[s.tdC, { flex: 1 }]}>v1 processes synthetic data only. DPIA is a v2 requirement before real data ingestion.</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { width: 140 }]}>Online Safety Act 2023</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Statutory duty of care</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Not directly applicable in v1 — no real UGC processed. Relevant in v2 if real social data is ingested.</Text>
          </View>
        </View>

        <SL t="Known Limitations" />

        <Text style={[s.body, { fontFamily: "Helvetica-Bold", marginTop: 8, marginBottom: 2 }]}>Limitation 1 — Negative emotion F1 0.750</Text>
        <Body t="The model correctly classifies negative posts 75% of the time on the test set. The primary failure mode is confusion with angry — posts near the boundary between calm disappointment and cold sarcasm sometimes misclassify. Two targeted augmentation runs moved the score from 0.742 to 0.750. The remaining gap is likely irreducible with synthetic data. In production the alert system uses combined negative + angry score, not either emotion alone." />

        <Text style={[s.body, { fontFamily: "Helvetica-Bold", marginTop: 8, marginBottom: 2 }]}>Limitation 2 — general_audience_reaction topic F1 0.304</Text>
        <Body t="The model correctly classifies general_audience_reaction posts 30% of the time. The category is defined by exclusion — it applies when no other topic fits — which makes it structurally harder to learn than categories with distinctive vocabulary. It is the least actionable signal for a live producer. Low-confidence topic tags are shown with a distinct visual indicator in the dashboard." />

        <Text style={[s.body, { fontFamily: "Helvetica-Bold", marginTop: 8, marginBottom: 2 }]}>Limitation 3 — Fairlearn evaluation not completed in v1</Text>
        <Body t="No formal Fairlearn fairness metrics have been computed for v1. The stated constraint — no emotion category flagged at more than 2x the rate of any other — has not been formally measured. The training data is balanced at approximately 480 rows per emotion class. Formal Fairlearn evaluation is a v2 requirement before any production deployment processing real broadcast data." />

        <Text style={[s.body, { fontFamily: "Helvetica-Bold", marginTop: 8, marginBottom: 2 }]}>Limitation 4 — Demographic caveat UI implementation</Text>
        <Body t="The requirement for a persistent demographic caveat in the dashboard is documented in the PRD and this framework. The caveat reads: 'Social signal audiences skew younger and more urban than linear broadcast audiences.' If not present in the current build, it is an outstanding v1.1 item." />

        <SL t="Ongoing Responsibilities" />

        <View style={s.tbl}>
          <View style={s.tblHdr}>
            <Text style={[s.thC, { flex: 2 }]}>Responsibility</Text>
            <Text style={[s.thC, { width: 80 }]}>Frequency</Text>
            <Text style={[s.thC, { flex: 1 }]}>Out-of-cycle trigger</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 2 }]}>Re-evaluate F1 scores against updated vocabulary</Text>
            <Text style={[s.tdC, { width: 80 }]}>Every retrain</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Sentiment language shifts over time</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 2 }]}>Verify demographic caveat remains accurate</Text>
            <Text style={[s.tdC, { width: 80 }]}>Every 6 months</Text>
            <Text style={[s.tdC, { flex: 1 }]}>New Ofcom audience demographic data published</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 2 }]}>Run Fairlearn evaluation before v2 deployment</Text>
            <Text style={[s.tdC, { width: 80 }]}>Before v2</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Any plan to process real social media data</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 2 }]}>Review this document for continued accuracy</Text>
            <Text style={[s.tdC, { width: 80 }]}>Every major version</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Regulatory changes — OSA, UK GDPR, Ofcom Code updates</Text>
          </View>
        </View>

        <Ftr name={name} />
      </Page>
    </Document>
  )
}

// ─── OJUIT ────────────────────────────────────────────────────────────────────

function OjuitPrd({ date }: { date: string }) {
  const name = "PRD — Ojuit"
  return (
    <Document>
      <Page size="A4" style={s.page}>
        <Hdr title={name} />
        <Text style={s.h1}>Product Requirements Document</Text>
        <Text style={s.sub}>Ojuit — Two-Product AI Platform for Indie Filmmakers</Text>
        <Ctrl title={name} project="Ojuit" type="PRD" date={date} />

        <SL t="Executive Overview" />
        <Body t="Ojuit is a two-product AI platform for solo indie filmmakers. The Colour product uses OpenCV, XGBoost, and CIE Lab Delta E to solve colour drift across the full shoot pipeline — including scene-to-reference LUT generation for DaVinci Resolve and Premiere Pro. The Story product is a full-stack AI story engine guiding writers from a raw idea through interrogation, logline, character psychology, and a full beat board using structured prompt chains, real-time state persistence, and Claude as the AI backbone." />
        <Body t="Core product philosophy: AI that suggests, humans that decide. The Colour product predicts corrections — the filmmaker decides whether to apply them. The Story product generates suggestions — the writer commits answers in their own voice. Neither product generates finished output autonomously." />

        <SL t="Problem Statement" />
        <Body t="Solo indie filmmakers face two distinct but related problems. First: colour drift. Shooting run-and-gun means ISO rises in low light, white balance shifts between environments, and exposure floats with changing conditions. The result is footage where scene 1 and scene 12 look like different days — costing 5–8 hours of manual correction per project. Second: story structure opacity. Most filmmakers have ideas they never develop because the path from raw idea to structured screenplay requires either expensive development support or years of craft knowledge that most solo creators don't yet have." />

        <SL t="Target Users" />
        <Li t="Kofi — Solo Documentary Filmmaker, Manchester. Needs colour consistency across multi-location shoots without hiring a colorist. Shoots run-and-gun with a single camera. Post-production budget is zero beyond software." />
        <Li t="Priya — Content Creator Transitioning to Narrative Film, London. Understands basic camera operation but colour grading tutorials assume professional knowledge she does not have." />
        <Li t="Marcus — Micro-Budget Producer, Birmingham. Manages 3–5 person shoots across multiple days. Needs to catch colour drift on location before wrapping, not in post." />

        <SL t="Functional Requirements — Colour Product" />
        <View style={s.tbl}>
          <View style={s.tblHdr}>
            <Text style={[s.thC, { width: 55 }]}>ID</Text>
            <Text style={[s.thC, { flex: 1 }]}>Requirement</Text>
            <Text style={[s.thC, { width: 36 }]}>Pri</Text>
          </View>
          <TblPriRow id="COL-01" req="CIE Lab Delta E measurement: per-frame colour extraction via OpenCV, converted to Lab colour space. Delta E < 5 is the professional continuity threshold. Delta E displayed per scene comparison." pri="P0" />
          <TblPriRow id="COL-02" req="XGBoost correction prediction: trained on 8,000 synthetic scenes across 4 drift types (standard, mixed lighting, LOG profile, harsh clipping) with programmatically applied drift." pri="P0" />
          <TblPriRow id="COL-03" req="Scene-to-reference LUT generation: degree-2 polynomial mapping from scene Lab to reference Lab per channel, producing a 33x33x33 .cube file downloadable for DaVinci Resolve and Premiere Pro." pri="P0" />
        </View>

        <SL t="Functional Requirements — Story Product" />
        <View style={s.tbl}>
          <View style={s.tblHdr}>
            <Text style={[s.thC, { width: 55 }]}>ID</Text>
            <Text style={[s.thC, { flex: 1 }]}>Requirement</Text>
            <Text style={[s.thC, { width: 36 }]}>Pri</Text>
          </View>
          <TblPriRow id="STR-01" req="5-stage story pipeline: Cold Open (raw idea) → Interrogation (3 specificity questions) → Logline Forge (3 AI loglines + theme) → Character Forge (wound → Lie/Want/Need) → Beat Board (up to 18 beats). Theme embedded in Logline stage." pri="P0" />
          <TblPriRow id="STR-02" req="Real-time Supabase persistence: story record created at Cold Open on confirm. Every committed answer saved immediately. All fields restored atomically on resume — interrogation, wound, character, beats." pri="P0" />
          <TblPriRow id="STR-03" req="AVOID_LIST negative constraint injection: injected into every Claude prompt via central call_claude() to prevent AI output monoculture (absent parent wounds, chosen one structures, speech-at-end resolutions)." pri="P1" />
          <TblPriRow id="STR-04" req="4 structural frameworks: Save the Cat (15 beats), Truby (18 beats), Story Circle (8 beats), Short Story (5 beats). Framework picker at Cold Open. Beat Board renders the selected framework." pri="P1" />
        </View>

        <SL t="Success Metrics" />
        <View style={s.tbl}>
          <View style={s.tblHdr}>
            <Text style={[s.thC, { flex: 2 }]}>Key Result</Text>
            <Text style={[s.thC, { width: 80 }]}>Target</Text>
            <Text style={[s.thC, { width: 90 }]}>Result</Text>
            <Text style={[s.thC, { width: 65 }]}>Status</Text>
          </View>
          <KRRow kr="Story state fully resumable from Supabase" target="100% fidelity" result="All fields restored atomically" status="Achieved" />
          <KRRow kr="Colour LUT generation pipeline" target="Delta E < 5 target" result="Polynomial LUT .cube output" status="Achieved" />
          <KRRow kr="4 structural frameworks available" target="3+ frameworks" result="Save the Cat, Truby, Story Circle, Short Story" status="Achieved" />
          <KRRow kr="Live deployed platform" target="Public URL" result="chromasync-app.vercel.app" status="Achieved" />
        </View>

        <Ftr name={name} />
      </Page>
    </Document>
  )
}

function OjuitModelDecisions({ date }: { date: string }) {
  const name = "Model Decisions — Ojuit"
  return (
    <Document>
      <Page size="A4" style={s.page}>
        <Hdr title={name} />
        <Text style={s.h1}>Model Decisions</Text>
        <Text style={s.sub}>Ojuit — Two-Product AI Platform for Indie Filmmakers</Text>
        <Ctrl title={name} project="Ojuit" type="Model Decisions" date={date} />

        <SL t="Introduction" />
        <Body t="Ojuit involves two distinct technical domains with separate model decisions: the Colour product (computer vision + ML correction model) and the Story product (LLM prompt architecture + state management). This document records the key decisions in each domain." />

        <Adr
          id="ADR-001"
          title="CIE Lab colour space over RGB Euclidean distance for Delta E measurement"
          decision="All colour difference calculations use CIE Lab colour space, not RGB Euclidean distance."
          context="RGB Euclidean distance does not correspond to perceptual colour difference. A change of 10 units in RGB space may be visually imperceptible in one region of the colour gamut and dramatically visible in another. Professional colour grading uses Delta E (CIE76) as the standard metric — below 5 is the professional continuity threshold."
          rationale="CIE Lab is perceptually uniform — equal numerical differences correspond to equal perceived colour differences. Using the industry standard metric means the tool's measurements align with what a colorist would observe. Delta E < 5 as the continuity threshold is the published professional standard, not an arbitrary number."
          alternatives="RGB Euclidean distance (rejected — not perceptually uniform, misleading continuity claims), HSL difference (rejected — hue distance wraps non-linearly, unreliable for skin tones), SSIM (rejected — structural similarity metric, not colour difference metric)."
          status="Accepted — Final"
        />

        <Adr
          id="ADR-002"
          title="Synthetic training data with explicit 3% noise for XGBoost correction model"
          decision="XGBoost correction model trained on 8,000 synthetic scenes across 4 drift types with programmatically applied drift. 3% noise factor applied to simulate real camera sensor variation (confirmed in model_metadata.json)."
          context="Training on real filmmaker footage would require consent from filmmakers, rights clearance, and a consistent ground truth labelling process. Programmatically applied drift means ground truth corrections are always exactly known. 4 drift types (standard, mixed lighting, LOG, harsh clipping) cover the most common run-and-gun failure modes."
          rationale="Synthetic data with known ground truth is more defensible for a correction model than real footage with estimated ground truth. The 3% noise factor prevents the model from overfitting to perfectly clean synthetic examples and simulates the variability of real camera sensor readout."
          alternatives="Real filmmaker footage with colorist-corrected pairs (rejected — consent and rights complexity at V1 scale), pretrained colour correction model (rejected — no control over training domain or correction philosophy)."
          status="Accepted — Final"
        />

        <Adr
          id="ADR-003"
          title="AVOID_LIST negative constraint injection in all Story product Claude prompts"
          decision="A centralised AVOID_LIST of overused AI narrative defaults is injected into every prompt via the central call_claude() function — explicitly blocking absent parent wounds, chosen one structures, speech-at-the-end resolutions, and similar monoculture patterns."
          context="Without negative constraints, Claude defaults to a narrow repertoire of narrative structures when asked for story suggestions. Writers using the tool would receive structurally similar suggestions regardless of their input — defeating the purpose of a tool designed to serve the writer's specific creative vision."
          rationale="Negative constraint injection is a prompt engineering technique for preventing output monoculture. The AVOID_LIST is maintained centrally so it applies consistently across all endpoints. Known deviation: /theme-suggestions calls the API directly and includes AVOID_LIST manually but prompt caching is not applied — documented as a refactor target for V1.1."
          alternatives="Post-generation diversity filtering (rejected — wastes API calls on suggestions that will be discarded), user-configurable avoid list (rejected — most writers don't know what to avoid until they see it), random temperature variation (rejected — affects coherence, not diversity in problematic patterns)."
          status="Accepted — Final"
        />

        <Adr
          id="ADR-004"
          title="Progressive Supabase persistence: save at Cold Open, not at submission end"
          decision="The story record is created in Supabase at Cold Open when the user clicks 'Save and Begin' — before interrogation starts. Every subsequent committed answer is saved immediately on commit."
          context="Initial implementation saved story data at the end of each major stage. If a user navigated away mid-interrogation, all answers were lost. This created a significant UX and product trust problem — writers invest real creative effort in interrogation answers."
          rationale="Creating the record at Cold Open and saving every commit immediately means no work is ever lost. Resume fidelity is 100% — every field restored from Supabase matches the exact state when the user left. This required lifting character forge state to the dashboard component to prevent loss on back-navigation, but the user experience tradeoff is unambiguously correct."
          alternatives="SessionStorage persistence (rejected — lost on browser close), end-of-stage batch saves (rejected — mid-stage navigation loses work), local file export at each stage (rejected — requires user action, creates sync problems)."
          status="Accepted — Final"
        />

        <Ftr name={name} />
      </Page>
    </Document>
  )
}

function OjuitEthics({ date }: { date: string }) {
  const name = "Ethics Framework — Ojuit"
  return (
    <Document>
      <Page size="A4" style={s.page}>
        <Hdr title={name} />
        <Text style={s.h1}>Ethics Framework</Text>
        <Text style={s.sub}>Ojuit — Two-Product AI Platform for Indie Filmmakers</Text>
        <Ctrl title={name} project="Ojuit" type="Ethics Framework" date={date} />
        <View style={s.phBox}>
          <Text style={s.phTi}>Full ethics framework in development</Text>
          <Text style={s.phBd}>Content will be published here shortly. Available on request via the contact form at osaheniogbebor.com.</Text>
        </View>
        <Ftr name={name} />
      </Page>
    </Document>
  )
}

// ─── TRUECASE ─────────────────────────────────────────────────────────────────

function TruecasePrd({ date }: { date: string }) {
  const name = "PRD — TrueCase"
  return (
    <Document>
      <Page size="A4" style={s.page}>
        <Hdr title={name} />
        <Text style={s.h1}>Product Requirements Document</Text>
        <Text style={s.sub}>TrueCase — AI-Powered Business Case Builder for AI Investments</Text>
        <Ctrl title={name} project="TrueCase" type="PRD" date={date} />

        <SL t="Executive Overview" />
        <Body t="TrueCase bridges the gap between financial optimism and regulatory reality in AI investment decisions. A four-stage guided flow — contextual questionnaire, governance assessment gate, financial projections, and AI narrative export — produces a business case built on two projections: the headline ROI and the governance-adjusted ROI. The gap between them is the product." />
        <Body t="Zero user data is retained. Every governance claim traces to a primary UK regulatory source. Every Claude-generated sentence is constrained to a verified knowledge base — not Claude's training data. The system is stateless by design: no database, localStorage, cookies, or logging." />

        <SL t="Problem Statement" />
        <Body t="Business cases for AI investments tend to be optimistic. Governance gaps — missing human oversight, undocumented training data, no audit trail — are treated as implementation details rather than financial risks. The result is a board deck that shows £2.4M annual gain while quietly ignoring that the system may trigger a GDPR enforcement action that erases that gain entirely." />
        <Body t="Finance teams want ROI projections. Compliance teams want governance verification. These conversations happen in separate rooms with different tooling. There is no shared instrument that lets both teams look at the same number and ask: 'How confident should we be in this?' The governance gap between headline ROI and governance-adjusted ROI is not a failure state — it is the most valuable thing TrueCase shows." />

        <SL t="Target Users" />
        <Li t="Internal AI PM — seeking budget approval at a UK enterprise. Needs a board-ready business case that finance and compliance will both sign off, with governance objections anticipated before the presentation." />
        <Li t="Startup Founder — pitching institutional investors or enterprise buyers. Needs to demonstrate regulatory awareness to enterprise buyers in financial services or healthcare without commissioning a formal governance audit." />
        <Li t="Enterprise Buyer (Tech Director / Procurement Lead) — stress-testing a vendor's ROI claim. Needs a neutral tool to run vendor numbers through an independent governance filter for procurement documentation." />

        <SL t="Functional Requirements" />
        <View style={s.tbl}>
          <View style={s.tblHdr}>
            <Text style={[s.thC, { width: 55 }]}>ID</Text>
            <Text style={[s.thC, { flex: 1 }]}>Requirement</Text>
            <Text style={[s.thC, { width: 36 }]}>Pri</Text>
          </View>
          <TblPriRow id="FR-01" req="4-question contextual questionnaire: decision type, data type, scale, sector. Each answer triggers contextual regulatory feedback. Q4 (sector) routes to sector-specific regulatory anchors (FCA, OSA, Ofcom, etc.)." pri="P0" />
          <TblPriRow id="FR-02" req="6-element governance assessment gate: each element from governance-kb.json with 3-state toggle (Confirmed / Partial / Missing), regulatory citations sorted by sector priority, and weighted reliability deductions composing the reliability score (0–100%)." pri="P0" />
          <TblPriRow id="FR-03" req="Reliability-adjusted financial projections: 6 cards (projected gain, reliability-adjusted gain, cost of inaction, net gain, ROI%, break-even). Headline and adjusted gain always rendered at identical size. Governance gap always visible." pri="P0" />
          <TblPriRow id="FR-04" req="Claude Sonnet narrative generation: 3 sections (Business Case Summary 200–250 words, Governance Assessment 150–200 words, Social Return Signal 100–150 words) constrained to KB sources only. Grounding disclosure always visible." pri="P0" />
          <TblPriRow id="FR-05" req="Stateless architecture: zero data retention. All inputs discarded immediately after PDF/HTML generation. No database, localStorage, cookies, analytics, or logging. DPIA not required." pri="P0" />
          <TblPriRow id="FR-06" req="PDF export via @react-pdf/renderer server-side and HTML export client-side. Both formats include full three-section narrative, governance assessment, and projection table." pri="P1" />
        </View>

        <SL t="Success Metrics" />
        <View style={s.tbl}>
          <View style={s.tblHdr}>
            <Text style={[s.thC, { flex: 2 }]}>Key Result</Text>
            <Text style={[s.thC, { width: 80 }]}>Target</Text>
            <Text style={[s.thC, { width: 90 }]}>Result</Text>
            <Text style={[s.thC, { width: 65 }]}>Status</Text>
          </View>
          <KRRow kr="Governance assessment covers 6 KB-backed elements with regulatory citations" target="6 elements" result="6 elements, all KB-backed" status="Achieved" />
          <KRRow kr="Claude narrative constrained to verified KB — no training data hallucination" target="100% KB-grounded" result="Strict system prompt, KB-only" status="Achieved" />
          <KRRow kr="Zero user data retained after generation" target="0 bytes" result="Stateless — no DB, no storage" status="Achieved" />
          <KRRow kr="Live demo with PDF and HTML export" target="Public URL" result="truecase-seven.vercel.app" status="Achieved" />
        </View>

        <Ftr name={name} />
      </Page>
    </Document>
  )
}

function TruecaseModelDecisions({ date }: { date: string }) {
  const name = "Model Decisions — TrueCase"
  return (
    <Document>
      <Page size="A4" style={s.page}>
        <Hdr title={name} />
        <Text style={s.h1}>Model Decisions</Text>
        <Text style={s.sub}>TrueCase — AI-Powered Business Case Builder</Text>
        <Ctrl title={name} project="TrueCase" type="Model Decisions" date={date} />

        <SL t="Introduction" />
        <Body t="TrueCase is not an ML model — it is an AI-orchestrated product. The key decisions are architectural: how to constrain Claude to verified sources, how to compose the reliability score from KB weights, how to make governance maturity visible as a financial variable, and how to operate with zero data retention. This document records those decisions." />

        <Adr
          id="ADR-001"
          title="Stateless architecture: zero data retention by design"
          decision="TrueCase stores nothing. No database, no localStorage, no cookies, no analytics, no server-side logging. All inputs are discarded immediately after PDF/HTML generation completes."
          context="Users input sensitive business financial projections — expected annual gain, implementation cost, current revenue — to generate their business case. Storing this data would require a DPIA under UK GDPR Article 35, consent management, data retention policies, and security controls. A stateless architecture eliminates all of these requirements at V1."
          rationale="Privacy by architecture is stronger than privacy by policy. A tool that never stores data cannot have a data breach, cannot be subject to a Subject Access Request for business intelligence data, and cannot create liability through data retention. Stateless is both the most responsible and the simplest architecture for a V1 tool in this category."
          alternatives="Supabase with RLS (rejected — DPIA required, complexity without clear V1 benefit), localStorage only (rejected — data persists on device, inconsistent across sessions), user-controlled local save (rejected — complexity for V1, users can export PDF/HTML)."
          status="Accepted — Final"
        />

        <Adr
          id="ADR-002"
          title="Claude narrative generation constrained to KB sources — not training data"
          decision="The POST /api/generate-narrative system prompt explicitly instructs Claude Sonnet 4 to ground all claims in the provided governance-kb.json, benchmarks.json, and sdg-kb.json content. Claude is instructed not to draw on training knowledge for regulatory claims."
          context="Claude's training data contains regulatory information that may be outdated, jurisdiction-mismatched, or hallucinated. A business case document citing incorrect regulatory thresholds (e.g. wrong GDPR fine caps) could cause significant harm to a user relying on it for board or investor presentations."
          rationale="Passing the relevant KB entries in the prompt context and explicitly constraining Claude to those sources eliminates the hallucination risk on regulatory claims. All three KBs were verified against primary UK regulatory sources in April 2026. The grounding disclosure and AI-generated label are always visible around narrative output — users are never misled about the generation method."
          alternatives="No Claude (ruled-based narrative template) — rejected: too formulaic, cannot handle the cross-sectional variation in user inputs. Claude with no constraint — rejected: regulatory hallucination risk unacceptable. RAG with vector database — rejected: overkill for a deterministic, 3-KB knowledge base."
          status="Accepted — Final"
        />

        <Adr
          id="ADR-003"
          title="Reliability score composed from KB-derived deductions — never hardcoded"
          decision="The reliability score (0–100%) is computed by summing deductions from governance-kb.json for each Missing or Partial element. Deduction values live in the KB, not in application code. A full-Missing assessment cannot be engineered to produce a misleading score."
          context="An alternative would be to hardcode the reliability score calculation in the application layer. This creates a maintenance problem (KB and code must be kept in sync) and a trust problem (the score could be modified without KB review)."
          rationale="KB-sourced deductions mean the reliability score is auditable: a user can inspect governance-kb.json and verify that the score they received is mathematically correct given their toggle states. This auditability is essential for a tool used in board-level investment decisions. Deduction values were calibrated against UK enforcement records and FCA guidance to reflect actual regulatory risk weighting."
          alternatives="Hardcoded deduction table in application code (rejected — sync problem, not auditable), equal weighting for all elements (rejected — does not reflect regulatory risk variation), user-configurable weights (rejected — undermines the tool's credibility as an independent assessment)."
          status="Accepted — Final"
        />

        <Adr
          id="ADR-004"
          title="Rule-based critical element identification — no API call for the summary stage"
          decision="The rule-based summary stage (between the questionnaire and governance gate) identifies the two most critical governance elements for the user's use case without an API call, using Q1 (decision type) and Q4 (sector) as routing keys."
          context="An initial design considered using Claude to generate the critical element summary. This adds latency (~2s), API cost, and hallucination risk to a stage where the answer is fully deterministic — the most critical elements for, say, a financial services automated decision are always the same regardless of who is asking."
          rationale="Deterministic logic produces deterministic, auditable results. The rule-based mapping (Q1 × Q4 → top 2 critical elements) is documented in the codebase and can be reviewed by compliance teams. Using Claude for a question with a known correct answer is both wasteful and less trustworthy than a transparent rule."
          alternatives="Claude-generated summary (rejected — adds cost and hallucination risk to a deterministic question), user self-identifies critical elements (rejected — users don't know what they don't know), show all 6 elements equally (rejected — decision fatigue, loses signal value)."
          status="Accepted — Final"
        />

        <Ftr name={name} />
      </Page>
    </Document>
  )
}

function TruecaseEthics({ date }: { date: string }) {
  const name = "Ethics Framework — TrueCase"
  return (
    <Document>
      <Page size="A4" style={s.page}>
        <Hdr title={name} />
        <Text style={s.h1}>Ethics Framework</Text>
        <Text style={s.sub}>TrueCase — AI-Powered Business Case Builder</Text>
        <Ctrl title={name} project="TrueCase" type="Ethics Framework" date={date} />

        <SL t="The Meta-Ethics Problem" />
        <Body t="TrueCase is a tool that assesses the governance of other AI systems. This creates a recursive obligation: a governance tool must itself be governed. TrueCase cannot argue that AI ROI projections are untrustworthy without governance while having no documented constraints on its own outputs, no stated limitations on what it claims, and no honest accounting of where it could mislead users." />
        <Body t="Every principle in this document exists to resolve that obligation. TrueCase must be the most honest tool in the market, not the most impressive one. If it produces a governance assessment that gives a user false confidence, it has done exactly the harm it was built to prevent." />

        <SL t="Core Principles" />

        <Text style={[s.body, { fontFamily: "Helvetica-Bold", marginTop: 8, marginBottom: 2 }]}>1 — TrueCase Never Claims More Than It Can Substantiate</Text>
        <Body t="Every output TrueCase produces has a stated basis. Financial projections come from user-supplied inputs and stated assumptions. Governance assessments come from user self-assessment against documented decision criteria. Claude-generated narrative is based on the inputs and knowledge base entries provided — nothing else. TrueCase produces structured assessments with visible assumptions, not authoritative verdicts." />

        <Text style={[s.body, { fontFamily: "Helvetica-Bold", marginTop: 8, marginBottom: 2 }]}>2 — Honest Uncertainty Over False Confidence</Text>
        <Body t="The reliability-adjusted projection is shown at equal visual weight to the headline projection. A user cannot see the impressive number without also seeing the honest number. Low reliability scores are shown with red visual treatment — there is no styling that makes a poor governance assessment look acceptable. The SROI layer is labelled as directional signal throughout the UI, not only in documentation." />

        <Text style={[s.body, { fontFamily: "Helvetica-Bold", marginTop: 8, marginBottom: 2 }]}>3 — The Self-Assessment Limitation is Always Disclosed</Text>
        <Body t="TrueCase's governance gate is a self-assessment tool. Users confirm or deny the presence of governance elements based on their own knowledge of their system. TrueCase cannot verify these assessments. A user who confirms all six elements without genuine compliance receives a 100% reliability score that is not warranted. This limitation is stated in the UI alongside the governance gate, in the PDF footer, and in this document." />

        <Text style={[s.body, { fontFamily: "Helvetica-Bold", marginTop: 8, marginBottom: 2 }]}>4 — No Data Stored, No Exceptions</Text>
        <Body t="TrueCase stores nothing. Not inputs, not outputs, not governance assessments, not Claude-generated narratives. The generate-pdf API route processes inputs server-side and immediately discards them after the buffer is returned — there are no database writes anywhere in the codebase. This is a trust decision, not only a compliance one. Users input commercially sensitive financial projections and governance gap disclosures. They should have no doubt that their inputs leave no trace." />

        <Text style={[s.body, { fontFamily: "Helvetica-Bold", marginTop: 8, marginBottom: 2 }]}>5 — Claude Is Constrained to the Knowledge Base</Text>
        <Body t="The generate-narrative system prompt contains five strict rules: all regulatory claims must come from the governance-kb.json provided, not from Claude's training data; financial figures must come from the user's inputs and must not be recalculated; no market context or industry benchmarks may be added beyond what is in the knowledge base; if uncertain about a claim, Claude must omit it rather than substitute inference; each governance element status must be stated exactly as provided. These rules are enforced in the system prompt and are not configurable." />

        <Text style={[s.body, { fontFamily: "Helvetica-Bold", marginTop: 8, marginBottom: 2 }]}>6 — The SROI Layer is Directional Signal Only</Text>
        <Body t="TrueCase's SDG mapping is not a Social Return on Investment assessment. The UK Cabinet Office SROI methodology requires stakeholder identification, outcome mapping, evidence collection, monetisation of outcomes, and sensitivity analysis. TrueCase does none of these. The PDF footer states the caveat in full and it cannot be abbreviated or removed: 'TrueCase SDG mapping is directional signal only. It is not an investment-grade SROI assessment.'" />

        <SL t="Hard Constraints" />
        <Body t="These constraints cannot be changed by user request, product iteration, or commercial pressure." />

        <View style={s.tbl}>
          <View style={s.tblHdr}>
            <Text style={[s.thC, { flex: 1 }]}>Constraint</Text>
            <Text style={[s.thC, { flex: 1 }]}>Implementation</Text>
            <Text style={[s.thC, { flex: 1 }]}>Rationale</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 1 }]}>No data stored</Text>
            <Text style={[s.tdC, { flex: 1 }]}>No database, no localStorage, no cookies. generate-pdf route discards inputs immediately after buffer is returned.</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Users input governance gap disclosures and pre-funding financials. Retention would be a betrayal of the trust that makes honest disclosure possible.</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 1 }]}>Reliability-adjusted projection always shown</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Both figures shown at equal visual weight in the UI and the PDF. Neither can be hidden or removed.</Text>
            <Text style={[s.tdC, { flex: 1 }]}>A tool that buried the adjusted projection or made it visually subordinate to the headline figure would be misleading by design.</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 1 }]}>Claude constrained to KB sources</Text>
            <Text style={[s.tdC, { flex: 1 }]}>System prompt in generate-narrative/route.ts contains five strict rules. Not configurable by users or developers without a documented ethics review.</Text>
            <Text style={[s.tdC, { flex: 1 }]}>TrueCase documents travel to board rooms and investor data rooms. An inaccurate regulatory claim can influence decisions affecting legal exposure.</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 1 }]}>Self-assessment limitation always disclosed</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Persistent UI note alongside governance gate. Reproduced in PDF footer and this document.</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Users aware of the limitation are less likely to game the assessment and more likely to use it honestly.</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 1 }]}>SROI caveat printed in full</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Hardcoded in PDF page 3. Cannot be abbreviated or removed.</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Prevents greenwashing — organisations presenting directional SDG signal as certified SROI in investor materials.</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 1 }]}>AI-generated label on narrative</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Grounding disclosure shown above the narrative in the UI and on PDF page 1. States model used and KB version.</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Users must never present a TrueCase narrative to a stakeholder without that stakeholder knowing it was AI-generated.</Text>
          </View>
        </View>

        <SL t="Governance Gate Design" />
        <Body t="The governance gate uses a soft warning rather than a hard gate. A hard gate — one that blocks the ROI output until all governance elements are confirmed — would pressure users to confirm elements they have not genuinely assessed, purely to unlock the number. That produces dishonest self-assessment." />
        <Body t="A soft warning — the ROI runs regardless, missing elements annotate and reduce the reliability score — produces honest behaviour. A user who sees their reliability score drop from 100% to 55% because three elements are missing has received a more useful signal than one who was blocked until they clicked through all the checkboxes. The soft warning respects user agency and produces honest self-assessment." />
        <Body t="The six governance elements have decision criteria written to minimise ambiguous interpretation. Each criterion asks about specific architectural facts, not general intentions. This is documented in the governance-kb.json alongside each element and is reproduced in the UI alongside each toggle." />

        <SL t="Reliability Score Weighting" />
        <Body t="The six governance elements and their reliability deductions are sourced from governance-kb.json — not hardcoded in application logic. A full-Missing assessment cannot be engineered to produce a misleading score. The weighting reflects relative regulatory risk as assessed against UK enforcement records and guidance as of April 2026." />

        <View style={s.tbl}>
          <View style={s.tblHdr}>
            <Text style={[s.thC, { flex: 2 }]}>Element</Text>
            <Text style={[s.thC, { width: 70 }]}>Missing</Text>
            <Text style={[s.thC, { width: 70 }]}>Partial</Text>
          </View>
          {[
            ["Output Limit Control", "-25", "-12"],
            ["Human Review Requirement", "-20", "-10"],
            ["Decision Audit Trail", "-15", "-7"],
            ["Regulatory Compliance Map", "-20", "-10"],
            ["AI System Performance Documentation", "-10", "-5"],
            ["Data Use Boundary", "-10", "-5"],
          ].map(([el, miss, part]) => (
            <View key={el} style={s.tblRow}>
              <Text style={[s.tdC, { flex: 2 }]}>{el}</Text>
              <Text style={[s.tdC, { width: 70 }]}>{miss}</Text>
              <Text style={[s.tdC, { width: 70 }]}>{part}</Text>
            </View>
          ))}
        </View>

        <SL t="Known Limitations" />

        <Text style={[s.body, { fontFamily: "Helvetica-Bold", marginTop: 8, marginBottom: 2 }]}>Limitation 1 — Self-assessment is gameable</Text>
        <Body t="A user who confirms all six elements without genuine compliance receives a 100% reliability score. TrueCase cannot prevent this. The mitigations are: the self-assessment disclosure in the UI, decision criteria specific enough that a false confirmation is an explicit false statement rather than an ambiguous click, and the grounding in governance-kb.json which makes the criteria transparent and auditable." />

        <Text style={[s.body, { fontFamily: "Helvetica-Bold", marginTop: 8, marginBottom: 2 }]}>Limitation 2 — Financial projections use a deterministic formula</Text>
        <Body t="The financial formula is: projectedGain = currentCost × (efficiencyGain / 100) + fineExposure × (errorReduction / 100) × 0.3. It does not model risk, discount cash flows, account for implementation costs beyond aiSystemCost, or incorporate sector-specific variables. TrueCase is not a financial modelling tool. The PDF footer states this explicitly." />

        <Text style={[s.body, { fontFamily: "Helvetica-Bold", marginTop: 8, marginBottom: 2 }]}>Limitation 3 — Knowledge base is current as of April 2026</Text>
        <Body t="The regulatory landscape for AI in the UK is changing. The knowledge base was verified in April 2026. Claims that were accurate at verification may become outdated. The knowledge base version and verification date are disclosed in the PDF footer of every output. Users relying on TrueCase for regulatory decisions should verify the currency of the knowledge base before proceeding." />

        <Text style={[s.body, { fontFamily: "Helvetica-Bold", marginTop: 8, marginBottom: 2 }]}>Limitation 4 — Claude model limitations</Text>
        <Body t="Despite the constraints imposed by the system prompt, Claude may produce outputs that are grammatically plausible but factually inaccurate in edge cases. The knowledge base constraint reduces but does not eliminate this risk. Every output carries an AI-generated label identifying the model used (claude-sonnet-4-20250514) and the knowledge base version." />

        <SL t="Regulatory Alignment" />

        <View style={s.tbl}>
          <View style={s.tblHdr}>
            <Text style={[s.thC, { width: 130 }]}>Regulation</Text>
            <Text style={[s.thC, { flex: 1 }]}>Requirement</Text>
            <Text style={[s.thC, { flex: 1 }]}>How TrueCase addresses it</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { width: 130 }]}>UK GDPR Article 35</Text>
            <Text style={[s.tdC, { flex: 1 }]}>DPIA required before processing personal data at scale.</Text>
            <Text style={[s.tdC, { flex: 1 }]}>TrueCase processes no personal data. Users input financial figures and governance assessments — not personal data as defined by GDPR Article 4(1).</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { width: 130 }]}>UK GDPR — Right to Erasure</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Individuals have the right to request deletion of their data.</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Trivially satisfied — TrueCase stores nothing. There is nothing to erase.</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { width: 130 }]}>Anthropic API Policy</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Inputs to the Claude API are not used for training by default on the API tier.</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Disclosed in the UI at the point of narrative generation. TrueCase does not make stronger claims than Anthropic's published policy.</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { width: 130 }]}>CMA — Consumer Protection</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Financial projections must not mislead consumers.</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Reliability-adjusted projection shown at equal visual weight. PDF footer states TrueCase is not a financial modelling tool. Directional framing throughout.</Text>
          </View>
        </View>

        <SL t="Ongoing Responsibilities" />

        <View style={s.tbl}>
          <View style={s.tblHdr}>
            <Text style={[s.thC, { flex: 2 }]}>Responsibility</Text>
            <Text style={[s.thC, { width: 80 }]}>Frequency</Text>
            <Text style={[s.thC, { flex: 1 }]}>Out-of-cycle trigger</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 2 }]}>Review knowledge base for regulatory currency</Text>
            <Text style={[s.tdC, { width: 80 }]}>Every major version</Text>
            <Text style={[s.tdC, { flex: 1 }]}>New ICO guidance, CMA enforcement action, Online Safety Act implementation milestones, EU AI Act compliance deadlines</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 2 }]}>Verify system prompt constraints remain intact</Text>
            <Text style={[s.tdC, { width: 80 }]}>Every release</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Any change to generate-narrative/route.ts</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 2 }]}>Update AI-generated label if Claude model changes</Text>
            <Text style={[s.tdC, { width: 80 }]}>Every model update</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Any change to the model string in generate-narrative/route.ts</Text>
          </View>
          <View style={s.tblRow}>
            <Text style={[s.tdC, { flex: 2 }]}>Review this document for continued accuracy</Text>
            <Text style={[s.tdC, { width: 80 }]}>Every major version</Text>
            <Text style={[s.tdC, { flex: 1 }]}>Regulatory changes affecting the six governance elements</Text>
          </View>
        </View>

        <Ftr name={name} />
      </Page>
    </Document>
  )
}

// ─── REGISTRY & HANDLER ───────────────────────────────────────────────────────

type ArtefactDef = { name: string; gen: (date: string) => React.ReactElement }

const ARTEFACTS: Record<string, ArtefactDef> = {
  "dynamic-pricing-prd": { name: "PRD — AI Dynamic Ticket Pricing", gen: (d) => <DynamicPricingPrd date={d} /> },
  "dynamic-pricing-model-decisions": { name: "Model Decisions — AI Dynamic Ticket Pricing", gen: (d) => <DynamicPricingModelDecisions date={d} /> },
  "dynamic-pricing-ethics": { name: "Ethics Framework — AI Dynamic Ticket Pricing", gen: (d) => <DynamicPricingEthics date={d} /> },
  "bias-audit-prd": { name: "PRD — Bias Audit Dashboard", gen: (d) => <BiasAuditPrd date={d} /> },
  "bias-audit-model-decisions": { name: "Model Decisions — Bias Audit Dashboard", gen: (d) => <BiasAuditModelDecisions date={d} /> },
  "bias-audit-ethics": { name: "Ethics Framework — Bias Audit Dashboard", gen: (d) => <BiasAuditEthics date={d} /> },
  "pulse-prd": { name: "PRD — Pulse", gen: (d) => <PulsePrd date={d} /> },
  "pulse-model-decisions": { name: "Model Decisions — Pulse", gen: (d) => <PulseModelDecisions date={d} /> },
  "pulse-ethics": { name: "Ethics Framework — Pulse", gen: (d) => <PulseEthics date={d} /> },
  "ojuit-prd": { name: "PRD — Ojuit", gen: (d) => <OjuitPrd date={d} /> },
  "ojuit-model-decisions": { name: "Model Decisions — Ojuit", gen: (d) => <OjuitModelDecisions date={d} /> },
  "ojuit-ethics": { name: "Ethics Framework — Ojuit", gen: (d) => <OjuitEthics date={d} /> },
  "truecase-prd": { name: "PRD — TrueCase", gen: (d) => <TruecasePrd date={d} /> },
  "truecase-model-decisions": { name: "Model Decisions — TrueCase", gen: (d) => <TruecaseModelDecisions date={d} /> },
  "truecase-ethics": { name: "Ethics Framework — TrueCase", gen: (d) => <TruecaseEthics date={d} /> },
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, artefactId, project } = await req.json()
    const artefact = ARTEFACTS[artefactId as string]
    if (!artefact) return NextResponse.json({ error: "Artefact not found" }, { status: 404 })

    const now = new Date()
    const dd = String(now.getDate()).padStart(2, "0")
    const mm = String(now.getMonth() + 1).padStart(2, "0")
    const yyyy = now.getFullYear()
    const dateStr = `${dd}-${mm}-${yyyy}`
    const dateLabel = `${dd} ${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][now.getMonth()]} ${yyyy}`
    const filename = `${artefactId}-${dateStr}.pdf`

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const buffer = await renderToBuffer(artefact.gen(dateLabel) as React.ReactElement<any>)

    resend.emails.send({
      from: FROM,
      to: OWNER_EMAIL,
      reply_to: OWNER_EMAIL,
      subject: `New artefact download — ${artefact.name}`,
      html: `
        <table width="100%" cellpadding="0" cellspacing="0" style="font-family:system-ui,-apple-system,sans-serif;font-size:14px;color:#111827;background:#f9fafb;padding:32px 0;">
          <tr><td align="center">
            <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;">
              <tr><td style="background:#7D9538;padding:12px 24px;">
                <span style="color:#ffffff;font-weight:700;font-size:13px;letter-spacing:0.05em;">PORTFOLIO DOWNLOAD NOTIFICATION</span>
              </td></tr>
              <tr><td style="padding:24px;">
                <p style="margin:0 0 16px;font-size:15px;font-weight:600;color:#111827;">New document downloaded</p>
                <table cellpadding="0" cellspacing="0" style="width:100%;border:1px solid #e5e7eb;border-radius:4px;overflow:hidden;">
                  <tr style="background:#f9fafb;"><td style="padding:8px 12px;font-size:11px;font-weight:700;color:#6b7280;width:120px;">DOCUMENT</td><td style="padding:8px 12px;font-size:13px;color:#111827;font-weight:600;">${artefact.name}</td></tr>
                  <tr style="border-top:1px solid #e5e7eb;"><td style="padding:8px 12px;font-size:11px;font-weight:700;color:#6b7280;">NAME</td><td style="padding:8px 12px;font-size:13px;color:#111827;">${name}</td></tr>
                  <tr style="background:#f9fafb;border-top:1px solid #e5e7eb;"><td style="padding:8px 12px;font-size:11px;font-weight:700;color:#6b7280;">EMAIL</td><td style="padding:8px 12px;font-size:13px;color:#111827;">${email}</td></tr>
                  <tr style="border-top:1px solid #e5e7eb;"><td style="padding:8px 12px;font-size:11px;font-weight:700;color:#6b7280;">PROJECT</td><td style="padding:8px 12px;font-size:13px;color:#111827;">${project}</td></tr>
                  <tr style="background:#f9fafb;border-top:1px solid #e5e7eb;"><td style="padding:8px 12px;font-size:11px;font-weight:700;color:#6b7280;">TIMESTAMP</td><td style="padding:8px 12px;font-size:13px;color:#111827;">${dateLabel}</td></tr>
                </table>
              </td></tr>
            </table>
          </td></tr>
        </table>
      `,
    }).catch(() => {})

    resend.emails.send({
      from: FROM,
      to: email,
      reply_to: OWNER_EMAIL,
      subject: `Your PM Artefact — ${artefact.name}`,
      html: `
        <table width="100%" cellpadding="0" cellspacing="0" style="font-family:system-ui,-apple-system,sans-serif;font-size:14px;color:#111827;background:#f9fafb;padding:32px 0;">
          <tr><td align="center">
            <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;">
              <tr><td style="background:#7D9538;padding:16px 28px;">
                <span style="color:#ffffff;font-weight:700;font-size:16px;letter-spacing:0.04em;">Ogbebor Osaheni</span>
              </td></tr>
              <tr><td style="padding:32px 28px 24px;">
                <p style="margin:0 0 16px;font-size:15px;color:#111827;">Hi ${name},</p>
                <p style="margin:0 0 16px;font-size:15px;color:#374151;line-height:1.6;">Thank you for your interest in my work. Your requested document <strong>${artefact.name}</strong> is attached to this email.</p>
                <p style="margin:0 0 0;font-size:15px;color:#374151;line-height:1.6;">Feel free to reach out if you have any questions about my projects or would like to discuss further.</p>
              </td></tr>
              <tr><td style="padding:20px 28px;border-top:1px solid #e5e7eb;background:#f9fafb;">
                <p style="margin:0;font-size:13px;color:#6b7280;">Ogbebor Osaheni &mdash; AI Product Manager &nbsp;&bull;&nbsp; <a href="https://osaheniogbebor.com" style="color:#7D9538;text-decoration:none;">osaheniogbebor.com</a></p>
              </td></tr>
            </table>
          </td></tr>
        </table>
      `,
      attachments: [{ filename, content: buffer }],
    }).catch(() => {})

    return new NextResponse(new Uint8Array(buffer), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-store",
        "X-Downloader-Email": email,
      },
    })
  } catch (err) {
    console.error("[download-artefact]", err)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
