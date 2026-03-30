import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
// import Testimonials from "@/components/testimonials" // Hidden for now - enable when you have testimonials
// import Blog from "@/components/blog" // Hidden for now - enable later when blog posts are ready
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      <About />
      <Projects />
      {/* <Testimonials /> */} {/* Hidden for now - add after coffee chats/recommendations */}
      {/* <Blog /> */} {/* Hidden for now - uncomment when blog posts are ready */}
      <Contact />
      <Footer />
    </main>
  )
}
