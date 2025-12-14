"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorInnerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const cursorInner = cursorInnerRef.current
    if (!cursor || !cursorInner) return

    const moveCursor = (e: MouseEvent) => {
      // Smooth follow effect with slight delay
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power2.out",
      })

      // Inner cursor follows faster for layered effect
      gsap.to(cursorInner, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out",
      })
    }

    const handleMouseEnter = () => {
      gsap.to([cursor, cursorInner], {
        opacity: 1,
        duration: 0.3,
      })
    }

    const handleMouseLeave = () => {
      gsap.to([cursor, cursorInner], {
        opacity: 0,
        duration: 0.3,
      })
    }

    // Handle hover interactions
    const handleElementHover = (isHovering: boolean) => {
      if (isHovering) {
        gsap.to(cursor, {
          scale: 1.5,
          duration: 0.3,
          ease: "power2.out",
        })
      } else {
        gsap.to(cursor, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        })
      }
    }

    document.addEventListener("mousemove", moveCursor)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll("a, button, [role='button']")
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => handleElementHover(true))
      el.addEventListener("mouseleave", () => handleElementHover(false))
    })

    return () => {
      document.removeEventListener("mousemove", moveCursor)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", () => handleElementHover(true))
        el.removeEventListener("mouseleave", () => handleElementHover(false))
      })
    }
  }, [])

  return (
    <>
      {/* Outer cursor - hexagonal shape with glow */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] opacity-0"
        style={{
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="relative h-8 w-8">
          {/* Hexagon shape */}
          <div className="absolute inset-0 rotate-0">
        
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#7FFF7F" viewBox="0 0 16 16" >
  <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3m4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5"/>
</svg>
          </div>
          {/* Glow effect */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(127, 255, 127, 0.3) 0%, transparent 70%)",
              filter: "blur(4px)",
            }}
          />
        </div>
      </div>

      {/* Inner cursor - small dot */}
      <div
        ref={cursorInnerRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] opacity-0"
        style={{
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className="h-1.5 w-1.5 rounded-full bg-[#7FFF7F]"
          style={{
            boxShadow: "0 0 8px rgba(127, 255, 127, 0.8)",
          }}
        />
      </div>
    </>
  )
}
