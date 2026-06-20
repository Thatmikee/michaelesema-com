'use client'
import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

interface ParticlesProps {
  className?: string
  quantity?: number
  color?: string
  ease?: number
  refresh?: boolean
}

interface Circle {
  x: number; y: number; translateX: number; translateY: number
  size: number; alpha: number; targetAlpha: number
  dx: number; dy: number; magnetism: number
}

export default function Particles({
  className = '',
  quantity = 60,
  color = '#A01818',
  ease = 50,
  refresh = false,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const ctx = useRef<CanvasRenderingContext2D | null>(null)
  const circles = useRef<Circle[]>([])
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 })
  const dpr = typeof window !== 'undefined' ? window.devicePixelRatio : 1
  const reduce = useReducedMotion()
  const [ready, setReady] = useState(false)

  function hexToRgb(hex: string) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex.replace(/^#([a-f\d])([a-f\d])([a-f\d])$/i, '#$1$1$2$2$3$3'))
    return result ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) } : { r: 0, g: 0, b: 0 }
  }

  const rgb = hexToRgb(color)

  function circleParams(): Circle {
    const w = canvasSize.current.w, h = canvasSize.current.h
    return {
      x: Math.floor(Math.random() * w), y: Math.floor(Math.random() * h),
      translateX: 0, translateY: 0,
      size: Math.random() * 1.5 + 0.4,
      alpha: 0, targetAlpha: parseFloat((Math.random() * 0.5 + 0.08).toFixed(1)),
      dx: (Math.random() - 0.5) * 0.3, dy: (Math.random() - 0.5) * 0.3,
      magnetism: 0.1 + Math.random() * 3,
    }
  }

  function drawCircle(c: Circle, update = false) {
    if (!ctx.current) return
    const { x, y, translateX, translateY, size, alpha } = c
    ctx.current.translate(translateX, translateY)
    ctx.current.beginPath()
    ctx.current.arc(x, y, size, 0, 2 * Math.PI)
    ctx.current.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`
    ctx.current.fill()
    ctx.current.setTransform(dpr, 0, 0, dpr, 0, 0)
    if (!update) circles.current.push(c)
  }

  function initCanvas() {
    if (!canvasRef.current || !containerRef.current) return
    circles.current.length = 0
    canvasSize.current.w = containerRef.current.offsetWidth
    canvasSize.current.h = containerRef.current.offsetHeight
    canvasRef.current.width  = canvasSize.current.w * dpr
    canvasRef.current.height = canvasSize.current.h * dpr
    canvasRef.current.style.width  = `${canvasSize.current.w}px`
    canvasRef.current.style.height = `${canvasSize.current.h}px`
    ctx.current = canvasRef.current.getContext('2d')
    if (ctx.current) ctx.current.scale(dpr, dpr)
    for (let i = 0; i < quantity; i++) drawCircle(circleParams())
    setReady(true)
  }

  function animate() {
    if (!ctx.current || reduce) return
    ctx.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h)
    circles.current.forEach((c, i) => {
      const edge = [c.x + c.translateX - c.size, canvasSize.current.w - c.x - c.translateX - c.size, c.y + c.translateY - c.size, canvasSize.current.h - c.y - c.translateY - c.size]
      const closestEdge = edge.reduce((a, b) => Math.min(a, b))
      const remapClosestEdge = parseFloat((closestEdge / 20).toFixed(2))
      if (remapClosestEdge > 1) { c.alpha += 0.02; c.alpha = Math.min(c.alpha, c.targetAlpha) }
      else { c.alpha = c.targetAlpha * remapClosestEdge }
      c.x += c.dx; c.y += c.dy
      c.translateX += ((mouse.current.x / (ease / c.magnetism)) - c.translateX) / ease
      c.translateY += ((mouse.current.y / (ease / c.magnetism)) - c.translateY) / ease
      if (c.x < -c.size || c.x > canvasSize.current.w + c.size || c.y < -c.size || c.y > canvasSize.current.h + c.size) {
        circles.current.splice(i, 1)
        drawCircle(circleParams())
      } else {
        drawCircle(c, true)
      }
    })
    window.requestAnimationFrame(animate)
  }

  useEffect(() => {
    initCanvas()
    const onResize = () => initCanvas()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [color, quantity, refresh])

  useEffect(() => {
    if (ready && !reduce) animate()
  }, [ready])

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!canvasRef.current) return
      const rect = canvasRef.current.getBoundingClientRect()
      mouse.current.x = e.clientX - rect.left - canvasSize.current.w / 2
      mouse.current.y = e.clientY - rect.top - canvasSize.current.h / 2
    }
    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  return (
    <div ref={containerRef} className={className} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
      <canvas ref={canvasRef} style={{ display: 'block' }} />
    </div>
  )
}
