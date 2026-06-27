import Link from 'next/link'

export default function HeroSection() {
  return (
    <section id="hero" className="border-t border-white/[0.04] px-6 py-24">
      {/* subtle grid bg */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/4 h-96 w-96 rounded-full bg-pink-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <p className="animate-fade-in mb-6 font-mono text-xs tracking-[0.3em] text-pink-400">
          SENIOR FRONTEND DEVELOPER · SCRUM MASTER
        </p>

        <h1 className="animate-fade-in-up mb-8 font-serif text-6xl leading-[0.95] tracking-tight text-white md:text-8xl">
          Huda
          <br />
          <span className="text-white/20">Sarkawt</span>
        </h1>

        <p className="animate-fade-in-up mb-12 max-w-xl text-lg leading-relaxed text-white/40 [animation-delay:100ms]">
          I build precise, scalable frontend systems — from component libraries to payment flows.
          Based in Kurdistan. Occasionally drawing doodles.
        </p>

        <div className="animate-fade-in-up flex items-center gap-6 [animation-delay:200ms]">
          <Link
            href="/projects"
            className="rounded bg-pink-600 px-6 py-3 font-mono text-sm text-white transition-colors hover:bg-pink-500"
          >
            view work →
          </Link>
          <a
            href="#contact"
            className="font-mono text-sm text-white/50 transition-colors hover:text-white"
          >
            get in touch
          </a>
        </div>
      </div>

      {/* scroll hint */}
      <div className="animate-fade-in absolute bottom-10 left-6 flex items-center gap-3 [animation-delay:600ms]">
        <div className="h-12 w-px bg-white/10" />
        <p className="rotate-0 font-mono text-[10px] tracking-widest text-white/20">scroll</p>
      </div>
    </section>
  )
}
