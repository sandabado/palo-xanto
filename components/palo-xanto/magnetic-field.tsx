"use client"

import { useEffect, useRef } from "react"

type SignalParticle = {
  angle: number
  alpha: number
  band: number
  color: string
  radius: number
  size: number
  speed: number
}

const SIGNAL_COLORS = [
  "#f2c38f",
  "#8f5bff",
  "#e56b3d",
  "#5e7bc4",
  "#f0a47e",
] as const

export function MagneticField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext("2d")
    if (!context) return

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    )
    let animationFrame = 0
    let isVisible = true
    let width = 0
    let height = 0
    let deviceScale = 1
    let pointerX = 0.5
    let pointerY = 0.5
    let targetX = 0.5
    let targetY = 0.5
    let particles: SignalParticle[] = []

    const buildParticles = () => {
      const particleCount = Math.min(
        150,
        Math.max(72, Math.round(width / 9)),
      )

      particles = Array.from({ length: particleCount }, (_, index) => ({
        angle: (index / particleCount) * Math.PI * 2,
        alpha: 0.2 + ((index * 17) % 58) / 100,
        band: index % 7,
        color: SIGNAL_COLORS[index % SIGNAL_COLORS.length],
        radius: 0.13 + ((index * 29) % 74) / 100,
        size: 0.55 + ((index * 11) % 15) / 10,
        speed: 0.000025 + ((index * 7) % 9) * 0.000004,
      }))
    }

    const resize = () => {
      const bounds = canvas.getBoundingClientRect()
      width = bounds.width
      height = bounds.height
      deviceScale = Math.min(window.devicePixelRatio || 1, 1.75)
      canvas.width = Math.max(1, Math.floor(width * deviceScale))
      canvas.height = Math.max(1, Math.floor(height * deviceScale))
      context.setTransform(deviceScale, 0, 0, deviceScale, 0, 0)
      buildParticles()
    }

    const drawResonance = (
      centerX: number,
      centerY: number,
      time: number,
    ) => {
      const baseRadius = Math.min(width, height) * 0.12

      for (let ring = 0; ring < 7; ring += 1) {
        const phase = (time * 0.000035 + ring / 7) % 1
        const radius = baseRadius + phase * Math.min(width, height) * 0.36
        const fade = Math.sin(phase * Math.PI) * 0.16

        context.save()
        context.translate(centerX, centerY)
        context.rotate(Math.sin(time * 0.00015 + ring) * 0.08)
        context.scale(1, 0.43 + ring * 0.018)
        context.beginPath()
        context.ellipse(0, 0, radius, radius, 0, 0, Math.PI * 2)
        context.strokeStyle = ring % 2 === 0
          ? `rgba(242, 195, 143, ${fade})`
          : `rgba(143, 91, 255, ${fade * 0.82})`
        context.lineWidth = ring % 3 === 0 ? 1.25 : 0.7
        context.setLineDash([1.5, 7 + ring * 1.5])
        context.stroke()
        context.restore()
      }
    }

    const drawFieldLines = (
      centerX: number,
      centerY: number,
      time: number,
    ) => {
      const lineCount = 12

      for (let line = 0; line < lineCount; line += 1) {
        const side = line % 2 === 0 ? -1 : 1
        const lane = Math.floor(line / 2)
        const drift = Math.sin(time * 0.00018 + line * 0.9) * width * 0.025
        const startX = centerX + side * width * (0.025 + lane * 0.012)
        const startY = centerY + height * (0.02 + lane * 0.005)
        const endX = side < 0 ? -width * 0.08 : width * 1.08
        const endY =
          centerY +
          (lane - 2.5) * height * 0.09 +
          Math.sin(time * 0.00011 + lane) * height * 0.035

        const gradient = context.createLinearGradient(
          startX,
          startY,
          endX,
          endY,
        )
        gradient.addColorStop(0, "rgba(242, 195, 143, 0.42)")
        gradient.addColorStop(
          0.4,
          line % 3 === 0
            ? "rgba(143, 91, 255, 0.2)"
            : "rgba(229, 107, 61, 0.14)",
        )
        gradient.addColorStop(1, "rgba(94, 123, 196, 0)")

        context.beginPath()
        context.moveTo(startX, startY)
        context.bezierCurveTo(
          centerX + side * width * 0.11,
          centerY - height * (0.2 + lane * 0.015),
          centerX + side * width * (0.29 + lane * 0.026) + drift,
          endY + side * height * 0.08,
          endX,
          endY,
        )
        context.strokeStyle = gradient
        context.lineWidth = line % 4 === 0 ? 1.4 : 0.65
        context.stroke()
      }
    }

    const drawParticles = (
      centerX: number,
      centerY: number,
      time: number,
    ) => {
      const fieldRadius = Math.min(width, height) * 0.52
      const pointerPullX = (pointerX - 0.5) * width * 0.035
      const pointerPullY = (pointerY - 0.5) * height * 0.025

      for (const particle of particles) {
        const orbit =
          particle.angle +
          time * particle.speed * (particle.band % 2 === 0 ? 1 : -1)
        const radius = fieldRadius * particle.radius
        const wave = Math.sin(orbit * 2.7 + particle.band) * radius * 0.1
        const x =
          centerX +
          Math.cos(orbit) * (radius + wave) +
          pointerPullX * (1 - particle.radius)
        const y =
          centerY +
          Math.sin(orbit * 1.18) * radius * 0.48 +
          Math.cos(orbit * 2.1) * height * 0.018 +
          pointerPullY * (1 - particle.radius)
        const trailX = x - Math.cos(orbit) * (3 + particle.band)
        const trailY = y - Math.sin(orbit) * (2 + particle.band * 0.45)

        context.beginPath()
        context.moveTo(trailX, trailY)
        context.lineTo(x, y)
        context.strokeStyle = `${particle.color}${Math.round(
          particle.alpha * 105,
        )
          .toString(16)
          .padStart(2, "0")}`
        context.lineWidth = Math.max(0.45, particle.size * 0.6)
        context.stroke()

        context.beginPath()
        context.arc(x, y, particle.size, 0, Math.PI * 2)
        context.fillStyle = `${particle.color}${Math.round(
          particle.alpha * 210,
        )
          .toString(16)
          .padStart(2, "0")}`
        context.shadowColor = particle.color
        context.shadowBlur = 4 + particle.size * 4
        context.fill()
        context.shadowBlur = 0
      }
    }

    const render = (time: number) => {
      context.clearRect(0, 0, width, height)
      context.globalCompositeOperation = "screen"

      pointerX += (targetX - pointerX) * 0.035
      pointerY += (targetY - pointerY) * 0.035

      const centerX = width * 0.5 + (pointerX - 0.5) * width * 0.012
      const centerY = height * 0.42 + (pointerY - 0.5) * height * 0.008

      drawFieldLines(centerX, centerY, time)
      drawResonance(centerX, centerY, time)
      drawParticles(centerX, centerY, time)

      if (!reducedMotion.matches && isVisible) {
        animationFrame = window.requestAnimationFrame(render)
      }
    }

    const handlePointer = (event: PointerEvent) => {
      targetX = event.clientX / Math.max(window.innerWidth, 1)
      targetY = event.clientY / Math.max(window.innerHeight, 1)
    }

    const handlePointerLeave = () => {
      targetX = 0.5
      targetY = 0.5
    }

    const handleMotionPreference = () => {
      window.cancelAnimationFrame(animationFrame)
      render(0)
    }

    const observer = new IntersectionObserver(([entry]) => {
      const wasVisible = isVisible
      isVisible = entry.isIntersecting
      if (!wasVisible && isVisible && !reducedMotion.matches) {
        animationFrame = window.requestAnimationFrame(render)
      }
    })

    resize()
    observer.observe(canvas)
    window.addEventListener("resize", resize)
    window.addEventListener("pointermove", handlePointer, { passive: true })
    document.documentElement.addEventListener(
      "pointerleave",
      handlePointerLeave,
    )
    reducedMotion.addEventListener("change", handleMotionPreference)
    render(0)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      observer.disconnect()
      window.removeEventListener("resize", resize)
      window.removeEventListener("pointermove", handlePointer)
      document.documentElement.removeEventListener(
        "pointerleave",
        handlePointerLeave,
      )
      reducedMotion.removeEventListener("change", handleMotionPreference)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="palo-magnetic-field"
      aria-hidden="true"
    />
  )
}
