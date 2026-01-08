import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen text-foreground">
      <Navigation />
      
      <section id="home">
        <Hero />
      </section>
      
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}