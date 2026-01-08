'use client'

import LaserFlow from "@/components/LaserFlow"

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 w-full h-full opacity-30 mix-blend-screen pointer-events-none z-0">
      <LaserFlow
        className=""
        style={{ width: '100%', height: '100%' }}
        dpr={1}
        color="#ffffff"
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
  )
}
