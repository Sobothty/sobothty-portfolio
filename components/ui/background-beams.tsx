"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

export function BackgroundBeams({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let beams: Array<{
      x: number
      y: number
      length: number
      speed: number
      opacity: number
    }> = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createBeam = () => {
      return {
        x: Math.random() * canvas.width,
        y: -100,
        length: Math.random() * 200 + 100,
        speed: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3,
      }
    }

    const initBeams = () => {
      beams = Array.from({ length: 8 }, createBeam)
    }

    const animate = () => {
      ctx.fillStyle = "rgba(8, 8, 12, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      beams.forEach((beam, index) => {
        const gradient = ctx.createLinearGradient(beam.x, beam.y, beam.x, beam.y + beam.length)
        gradient.addColorStop(0, `rgba(99, 102, 241, 0)`)
        gradient.addColorStop(0.5, `rgba(99, 102, 241, ${beam.opacity})`)
        gradient.addColorStop(1, `rgba(139, 92, 246, 0)`)

        ctx.fillStyle = gradient
        ctx.fillRect(beam.x - 1, beam.y, 2, beam.length)

        beam.y += beam.speed

        if (beam.y > canvas.height + 100) {
          beams[index] = createBeam()
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    initBeams()
    animate()

    window.addEventListener("resize", resizeCanvas)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className={cn("fixed inset-0 z-0 pointer-events-none", className)} />
}
