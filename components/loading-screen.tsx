"use client"

import { useEffect, useState } from "react"

export function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 30)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a]">
      {/* African-inspired geometric pattern background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-8 px-4">
        {/* Brand logos */}
        <div className="flex items-center gap-6">
          <div className="text-2xl font-bold tracking-wider">SPRITE</div>
          <div className="text-white/40">×</div>
          <div className="text-center">
            <div className="text-xs uppercase tracking-widest opacity-70">Marvel Studios</div>
            <div className="text-xl font-bold tracking-wide">BLACK PANTHER</div>
            <div className="text-xl font-bold tracking-wide">WAKANDA FOREVER</div>
            <div className="text-xs uppercase tracking-wider opacity-70 mt-1">Only in theaters</div>
          </div>
        </div>

        {/* Main title */}
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
            THE <span className="text-[#7FFF7F]">HALL</span>
            <br />
            <span className="text-[#7FFF7F]">OF ZERO LIMITS</span>
          </h1>
        </div>

        {/* Progress bar */}
        <div className="w-64 md:w-80">
          <div className="relative h-1 w-full overflow-hidden rounded-full bg-white/20">
            <div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#7FFF7F] to-[#4FBF4F] shadow-[0_0_20px_rgba(127,255,127,0.5)] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-3 text-center text-sm font-medium tracking-wider">{progress}%</div>
        </div>
      </div>
    </div>
  )
}
