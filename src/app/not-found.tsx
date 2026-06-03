import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center gap-5 overflow-hidden bg-[#0a0a0a] px-6 text-center">
      <span className="pointer-events-none absolute font-mono text-[200px] font-bold text-white/[0.02] select-none">
        404
      </span>
      <span className="rounded border border-pink-400/20 bg-pink-400/10 px-3 py-1 font-mono text-[11px] tracking-[0.2em] text-pink-400">
        404 NOT FOUND
      </span>
      <h1 className="font-mono text-3xl font-bold text-white">page lost in the void.</h1>
      <p className="max-w-xs text-sm leading-relaxed text-neutral-600">
        this page does not exist or was moved somewhere else.
      </p>
      <Link
        href="/"
        className="rounded bg-pink-500 px-6 py-2.5 font-mono text-xs tracking-wider text-white transition-colors hover:bg-pink-600"
      >
        back to home →
      </Link>
    </div>
  )
}
