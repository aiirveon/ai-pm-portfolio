// Shared design tokens for filmmaker case study pages.
// Accent colour is intentionally excluded — it is per-project.

export const bg = {
  base: "#0a0a0a",
  alt: "#111111",
  rowAlt: "#0d0d0d",
}

export const colors = {
  heading: "#f5f5f5",
  body: "#9ca3af",
  muted: "#6b7280",
}

export const borders = {
  border: "#1f1f1f",
  borderSoft: "#2a2a2a",
}

// Single source for palette swatch size — change here to update every page.
export const swatchClass = "w-6 h-6"

// Framer Motion fade-in — shared across all case study pages.
export const fi = {
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  transition: { duration: 0.6 },
  viewport: { once: true } as const,
}

export const spacing = {
  standard: "py-24",
  tools: "py-16",
  cta: "py-20",
  disclaimer: "py-12",
}

export const widths = {
  content: "max-w-4xl",
  wide: "max-w-5xl",
  cta: "max-w-2xl",
}
