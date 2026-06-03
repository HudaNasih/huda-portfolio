'use client' // error.tsx must be a Client Component

import { useEffect } from 'react'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-5 bg-[#0a0a0a] px-6 text-center">
      <span className="rounded border border-red-500/20 bg-red-500/10 px-3 py-1 font-mono text-[11px] tracking-[0.2em] text-red-500">
        RUNTIME ERROR
      </span>
      <h1 className="font-mono text-3xl font-bold text-white">something broke.</h1>
      <p className="max-w-xs text-sm leading-relaxed text-neutral-600">
        an unexpected error occurred. it is not you — probably.
      </p>
      <button
        onClick={reset}
        className="rounded border border-pink-400/30 px-6 py-2.5 font-mono text-xs tracking-wider text-pink-400 transition-colors hover:bg-pink-400/10"
      >
        try again →
      </button>
    </div>
  )
}
