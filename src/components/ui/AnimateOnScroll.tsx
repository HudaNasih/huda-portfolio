'use client'

import { useLayoutEffect, useRef, ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'fade'
}

const dirClass = {
  up: 'anim-slide-up',
  left: 'anim-slide-left',
  fade: 'anim-fade',
} as const

export default function AnimateOnScroll({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    // Apply hidden state synchronously before first paint
    el.classList.add(dirClass[direction])

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`
          el.classList.add('animate-in')
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, direction])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
