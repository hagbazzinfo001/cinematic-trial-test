"use client"

import { useEffect, useRef } from "react"

export function GeometricPatterns() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const shapes = container.querySelectorAll(".geometric-shape")
    shapes.forEach((shape, index) => {
      const element = shape as HTMLElement
      const rotationSpeed = (index % 2 === 0 ? 1 : -1) * (20 + index * 5)
      element.style.animation = `rotate ${rotationSpeed}s linear infinite`
    })
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="geometric-shape absolute top-10 left-10 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50 0, 93.3 25, 93.3 75, 50 100, 6.7 75, 6.7 25"
            fill="none"
            stroke="#7FFF7F"
            strokeWidth="2"
          />
          <polygon
            points="50 15, 80 30, 80 70, 50 85, 20 70, 20 30"
            fill="none"
            stroke="#7FFF7F"
            strokeWidth="1"
            opacity="0.6"
          />
        </svg>
      </div>

      <div className="geometric-shape absolute top-1/4 right-20 w-40 h-40 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50 0, 93.3 25, 93.3 75, 50 100, 6.7 75, 6.7 25"
            fill="none"
            stroke="#7FFF7F"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="geometric-shape absolute bottom-20 left-1/4 w-36 h-36 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#7FFF7F" strokeWidth="2" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="#7FFF7F" strokeWidth="1" opacity="0.6" />
        </svg>
      </div>

      <div className="geometric-shape absolute top-2/3 right-1/3 w-28 h-28 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon points="50 10, 90 50, 50 90, 10 50" fill="none" stroke="#7FFF7F" strokeWidth="2" />
          <polygon points="50 25, 75 50, 50 75, 25 50" fill="none" stroke="#7FFF7F" strokeWidth="1" opacity="0.6" />
        </svg>
      </div>

      <div className="absolute top-1/3 left-1/3 w-64 h-64 animate-float-slow">
        <div
          className="w-full h-full rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, #7FFF7F 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 animate-float-medium">
        <div
          className="w-full h-full rounded-full opacity-15 blur-3xl"
          style={{
            background: "radial-gradient(circle, #4FBF4F 0%, transparent 70%)",
          }}
        />
      </div>
    </div>
  )
}
