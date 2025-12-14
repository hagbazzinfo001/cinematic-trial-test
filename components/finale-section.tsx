"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function FinaleSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const circleRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const section = sectionRef.current
    const title = titleRef.current
    if (!section || !title) return

    gsap.fromTo(
      title,
      {
        opacity: 0,
        scale: 0.5,
        rotationY: 180,
      },
      {
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top center",
          toggleActions: "play none none reverse",
        },
      },
    )

    circleRefs.current.forEach((circle, index) => {
      if (!circle) return

      gsap.fromTo(
        circle,
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
          delay: index * 0.1,
          scrollTrigger: {
            trigger: section,
            start: "top center",
            toggleActions: "play none none reverse",
          },
        },
      )
    })
  }, [])

  return (
    <section
      id="finale"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center py-32 px-4"
    >
      {/* Animated circles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              circleRefs.current[i] = el
            }}
            className="absolute rounded-full border border-[#7FFF7F]/20"
            style={{
              width: `${(i + 1) * 100}px`,
              height: `${(i + 1) * 100}px`,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h2 ref={titleRef} className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 text-balance">
          ZERO
          <br />
          <span className="text-[#7FFF7F]">LIMITS</span>
        </h2>

        <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto">
          {"The journey continues beyond imagination"}
        </p>

        <button className="px-8 py-4 bg-[#7FFF7F] text-[#0a0a0a] font-bold text-lg rounded-full hover:bg-[#6FEF6F] transition-colors hover:scale-105 transform duration-300 shadow-[0_0_30px_rgba(127,255,127,0.3)]">
          Explore More
        </button>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-0 right-0 text-center text-white/40 text-sm">
        <p>© 2025 Zero Limits Experience. All rights reserved.</p>
      </div>
    </section>
  )
}
