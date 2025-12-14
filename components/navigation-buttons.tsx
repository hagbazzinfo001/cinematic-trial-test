"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const SECTIONS = [
  { id: "hero", name: "Hero" },
  { id: "content", name: "Content" },
  { id: "parallax", name: "Parallax" },
  { id: "finale", name: "Finale" },
]

export function NavigationButtons() {
  const [currentSection, setCurrentSection] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show buttons after loading screen
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3500)

    return () => clearTimeout(timer)
  }, [])

  const handlePrev = () => {
    if (currentSection > 0) {
      const newSection = currentSection - 1
      setCurrentSection(newSection)
      scrollToSection(SECTIONS[newSection].id)
    }
  }

  const handleNext = () => {
    if (currentSection < SECTIONS.length - 1) {
      const newSection = currentSection + 1
      setCurrentSection(newSection)
      scrollToSection(SECTIONS[newSection].id)
    }
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  // Track scroll position to update current section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      SECTIONS.forEach((section, index) => {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(index)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Previous Button */}
      <button
        onClick={handlePrev}
        disabled={currentSection === 0}
        className="fixed left-8 top-1/2 -translate-y-1/2 z-50 group disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
        aria-label="Previous section"
      >
        <div className="relative">
          {/* Hexagonal background */}
          <div className="w-16 h-16 relative">
            <svg viewBox="0 0 100 100" className="w-full h-full transition-all duration-300 group-hover:scale-110">
              <defs>
                <filter id="glow-prev">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <polygon
                points="50,5 90,30 90,70 50,95 10,70 10,30"
                fill="rgba(0, 0, 0, 0.5)"
                stroke="#7FFF7F"
                strokeWidth="2"
                filter="url(#glow-prev)"
                className="transition-all duration-300 group-hover:fill-[rgba(127,255,127,0.1)]"
              />
            </svg>
          </div>
          {/* Arrow Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <ChevronLeft className="w-6 h-6 text-[#7FFF7F] transition-transform duration-300 group-hover:-translate-x-1" />
          </div>
        </div>
        <span className="block text-xs text-[#7FFF7F] text-center mt-2 tracking-widest">PREV</span>
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentSection === SECTIONS.length - 1}
        className="fixed right-8 top-1/2 -translate-y-1/2 z-50 group disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
        aria-label="Next section"
      >
        <div className="relative">
          {/* Hexagonal background */}
          <div className="w-16 h-16 relative">
            <svg viewBox="0 0 100 100" className="w-full h-full transition-all duration-300 group-hover:scale-110">
              <defs>
                <filter id="glow-next">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <polygon
                points="50,5 90,30 90,70 50,95 10,70 10,30"
                fill="rgba(0, 0, 0, 0.5)"
                stroke="#7FFF7F"
                strokeWidth="2"
                filter="url(#glow-next)"
                className="transition-all duration-300 group-hover:fill-[rgba(127,255,127,0.1)]"
              />
            </svg>
          </div>
          {/* Arrow Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <ChevronRight className="w-6 h-6 text-[#7FFF7F] transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
        <span className="block text-xs text-[#7FFF7F] text-center mt-2 tracking-widest">NEXT</span>
      </button>
    </>
  )
}
