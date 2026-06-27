'use client'

import { useEffect, useRef, useState } from 'react'

export default function SkillBar({ level, delay = 0 }: { level: number; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [filled, setFilled] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setFilled(true), delay)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className="h-[3px] w-full rounded-full bg-white/[0.07]">
      <div
        className="h-full rounded-full bg-gradient-to-r from-pink-600 to-pink-400 transition-[width] duration-[900ms] ease-out"
        style={{ width: filled ? `${level}%` : '0%' }}
      />
    </div>
  )
}
