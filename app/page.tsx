"use client"

import { useEffect, useState } from "react"
import { LoadingScreen } from "@/components/loading-screen"
import { HeroSection } from "@/components/hero-section"
import { ContentSection } from "@/components/content-section"
import { ParallaxSection } from "@/components/parallax-section"
import { FinaleSection } from "@/components/finale-section"
import { CustomCursor } from "@/components/custom-cursor"
import { NavigationButtons } from "@/components/navigation-buttons"
import { AnimatedBackground } from "@/components/animated-background"
import { GeometricPatterns } from "@/components/geometric-patterns"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <main className="bg-[#0a0a0a] text-white">
      <AnimatedBackground />
      <GeometricPatterns />
      <CustomCursor />
      <NavigationButtons />
      <HeroSection />
      <ContentSection />
      <ParallaxSection />
      <FinaleSection />
    </main>
  )
}
