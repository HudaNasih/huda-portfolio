export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#0a0a0a]">
      <div className="h-12 w-12 animate-spin rounded-full border border-white/10 border-t-pink-400" />
      <p className="font-mono text-xs tracking-widest text-neutral-600">loading...</p>
    </div>
  )
}
