import FilmmakerHero from "@/components/filmmaker/hero"
import FilmmakerWork from "@/components/filmmaker/work"
import FilmmakerProcess from "@/components/filmmaker/process"
import FilmmakerResources from "@/components/filmmaker/resources"
import FilmmakerServices from "@/components/filmmaker/services"
import FilmmakerAbout from "@/components/filmmaker/about"
import FilmmakerContact from "@/components/filmmaker/contact"
import FilmmakerFooter from "@/components/filmmaker/footer"

export const metadata = {
  title: "Aiir — Filmmaker",
  description: "Filmmaker and director. Commercials, short films, and branded content built with AI production pipelines.",
}

export default function FilmmakerPage() {
  return (
    <main>
      <FilmmakerHero />
      <FilmmakerWork />
      <FilmmakerProcess />
      <FilmmakerResources />
      <FilmmakerServices />
      <FilmmakerAbout />
      <FilmmakerContact />
      <FilmmakerFooter />
    </main>
  )
}
