'use client'

import LaserFlow from "@/components/LaserFlow"
import { ShootingStars } from "@/components/ui/shooting-stars"
import { StarsBackground } from "@/components/ui/stars-background"

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      {/* Stars Background Layer */}
      <StarsBackground 
        className=""
        starDensity={0.0002}
      />
      
      {/* LaserFlow Layer */}
      <div className="absolute inset-0  mix-blend-screen">
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
      
      {/* Shooting Stars Layer */}
      <ShootingStars 
        starColor="#ffffff"
        trailColor="#888888"
        minSpeed={15}
        maxSpeed={35}
      />
    </div>
  )
}
