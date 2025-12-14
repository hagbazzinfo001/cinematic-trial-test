"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function ParallaxSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const layer1Ref = useRef<HTMLDivElement>(null)
  const layer2Ref = useRef<HTMLDivElement>(null)
  const layer3Ref = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    // Parallax layers
    if (layer1Ref.current) {
      gsap.to(layer1Ref.current, {
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        y: -150,
      })
    }

    if (layer2Ref.current) {
      gsap.to(layer2Ref.current, {
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        y: -100,
      })
    }

    if (layer3Ref.current) {
      gsap.to(layer3Ref.current, {
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        y: -50,
      })
    }

    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "center center",
            scrub: 1,
          },
        },
      )
    }
  }, [])

  return (
    <section
      id="parallax"
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div ref={layer1Ref} className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-[#7FFF7F] blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-[#7FFF7F] blur-[120px] animate-pulse-slow" />
      </div>

      <div ref={layer2Ref} className="absolute inset-0 opacity-30">
        <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-[#4FBF4F] blur-[80px] animate-float-slow" />
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 rounded-full bg-[#7FFF7F] blur-[90px] animate-float-medium" />
      </div>

      <div ref={layer3Ref} className="absolute inset-0 opacity-40">
        <div className="absolute bottom-1/3 left-1/4 w-56 h-56 rounded-full bg-[#7FFF7F] blur-[90px] animate-float-fast" />
        <div className="absolute top-1/2 right-1/3 w-40 h-40 rounded-full bg-[#4FBF4F] blur-[70px] animate-float-medium" />
      </div>

      {/* Content */}
      <div ref={textRef} className="relative z-10 text-center px-4">
        <h2 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          Experience the
          <br />
          <span className="text-[#7FFF7F]">Impossible</span>
        </h2>
        <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto">
          {"Where innovation meets imagination in perfect harmony"}
        </p>
      </div>
    </section>
  )
}
