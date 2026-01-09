'use client'

import { useState } from "react"
import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import SplashScreen from "@/components/SplashScreen"

export default function Home() {
  const [splashComplete, setSplashComplete] = useState(false)

  return (
    <main className="min-h-screen text-foreground">
      {!splashComplete && <SplashScreen onComplete={() => setSplashComplete(true)} />}
      <Navigation />
      
      <section id="home">
        <Hero splashComplete={splashComplete} />
      </section>
      
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}