"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function ContentSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    contentRefs.current.forEach((content, index) => {
      if (!content) return

      gsap.fromTo(
        content,
        {
          opacity: 0,
          y: 100,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: content,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
        },
      )
    })
  }, [])

  const content = [
    {
      title: "Push Beyond Boundaries",
      description:
        "Experience the power of limitless potential and unmatched innovation. Where technology meets artistry.",
      accent: "#7FFF7F",
    },
    {
      title: "Immersive Innovation",
      description: "A journey through cutting-edge design and seamless interactions that redefine digital experiences.",
      accent: "#7FFF7F",
    },
    {
      title: "Cinematic Excellence",
      description:
        "Every scroll reveals a new chapter in this immersive narrative, crafted with precision and passion.",
      accent: "#7FFF7F",
    },
  ]

  return (
    <section id="content" ref={sectionRef} className="relative py-32 px-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_#7FFF7F08_0%,transparent_50%)] animate-gradient-shift" />

      <div className="max-w-6xl mx-auto space-y-40 relative z-10">
        {content.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              contentRefs.current[index] = el
            }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                <span style={{ color: item.accent }}>{item.title.split(" ")[0]}</span>{" "}
                {item.title.split(" ").slice(1).join(" ")}
              </h2>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed">{item.description}</p>
            </div>
            <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"}>
              <div
                className="aspect-square rounded-2xl overflow-hidden relative"
                style={{
                  background: `radial-gradient(circle at center, ${item.accent}20, transparent 70%)`,
                }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div
                    className="w-32 h-32 rounded-full animate-pulse"
                    style={{
                      background: `radial-gradient(circle, ${item.accent}, transparent)`,
                      boxShadow: `0 0 60px ${item.accent}80`,
                    }}
                  />
                  <div
                    className="absolute w-48 h-48 rounded-full animate-spin-slow opacity-30"
                    style={{
                      background: `conic-gradient(from 0deg, ${item.accent}40, transparent, ${item.accent}40)`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
