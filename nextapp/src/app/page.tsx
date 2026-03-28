'use client'

import { useState } from "react"
import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Experience from "@/components/Experience"
import Achievements from "@/components/Achievements"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import SplashScreen from "@/components/SplashScreen"
import LaserFlow from "@/components/LaserFlow"

export default function Home() {
  const [splashComplete, setSplashComplete] = useState(false)

  return (
    <main className="relative min-h-screen text-foreground">
      {/* Unified LaserFlow - Spans entire page */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-[1] mix-blend-screen">
        <LaserFlow
          className=""
          style={{ width: '100%', height: '100%' }}
          dpr={1}
          color="#9ef9ff"
          wispDensity={1}
          flowSpeed={0.35}
          verticalSizing={2}
          horizontalSizing={0.5}
          fogIntensity={0.45}
          fogScale={0.3}
          wispSpeed={15}
          wispIntensity={5}
          flowStrength={0.25}
          decay={1.1}
          horizontalBeamOffset={0}
          verticalBeamOffset={-0.5}
        />
      </div>

      {!splashComplete && <SplashScreen onComplete={() => setSplashComplete(true)} />}
      <Navigation />

      <section id="home">
        <Hero splashComplete={splashComplete} />
      </section>

      <About />
      <Experience />
      <Achievements />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}