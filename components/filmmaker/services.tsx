import { Film, Clapperboard, MessageSquare, FileText } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface Service {
  icon: LucideIcon
  title: string
  description: string
}

const SERVICES: Service[] = [
  {
    icon: Film,
    title: "AI Commercial Production",
    description:
      "Spec ads, branded content, and product films built with AI production pipelines. From concept to delivery.",
  },
  {
    icon: Clapperboard,
    title: "AI Short Film Production",
    description:
      "Narrative short films using a full AI production pipeline. Character consistency. Location design. Cinematic grading.",
  },
  {
    icon: MessageSquare,
    title: "Prompt Consultation",
    description:
      "I help filmmakers and brands build structured AI video workflows. Character sheets, location references, category-based prompting, and generation strategy.",
  },
  {
    icon: FileText,
    title: "Production Documentation",
    description:
      "Case studies, workflow guides, and process breakdowns. For brands who want to understand what AI production actually involves.",
  },
]

export default function FilmmakerServices() {
  return (
    <section id="services" className="py-24" style={{ backgroundColor: "#0a0a0a" }}>
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl md:text-5xl font-bold mb-16"
          style={{ color: "#f5f5f5" }}
        >
          Work With Me
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon

  return (
    <div
      className="group relative border p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-0.5"
      style={{ borderColor: "#1f1f1f", backgroundColor: "#0d0d0d" }}
    >
      <Icon
        className="h-6 w-6 transition-opacity"
        style={{ color: "#D97706" }}
      />

      <h3
        className="text-base font-semibold"
        style={{ color: "#f5f5f5" }}
      >
        {service.title}
      </h3>

      <p
        className="text-sm leading-relaxed flex-1"
        style={{ color: "#9ca3af" }}
      >
        {service.description}
      </p>

      <a
        href="#contact"
        className="text-sm font-medium transition-opacity hover:opacity-70 self-start"
        style={{ color: "#D97706" }}
      >
        Enquire →
      </a>

      {/* Hover border overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ border: "1px solid #D97706" }}
      />
    </div>
  )
}
