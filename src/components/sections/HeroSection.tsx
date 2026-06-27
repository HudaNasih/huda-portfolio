const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Delivered' },
  { value: '3+', label: 'Industries' },
]

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[92vh] overflow-hidden px-6 pt-20 pb-28 md:pt-32">
      {/* subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* glow orbs */}
      <div className="pointer-events-none absolute top-1/3 left-1/3 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-600/[0.07] blur-[130px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/3 h-72 w-72 rounded-full bg-violet-600/[0.05] blur-[100px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Next.js learning badge */}
        <div className="animate-fade-in-down mb-8 inline-flex items-center gap-2.5 rounded-full border border-pink-500/20 bg-pink-500/[0.07] px-4 py-2 [animation-delay:0ms]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-pink-400" />
          <span className="font-mono text-[11px] tracking-widest text-pink-300/90">
            CURRENTLY LEARNING NEXT.JS · BUILT THIS PORTFOLIO WITH IT
          </span>
        </div>

        {/* Role */}
        <p className="animate-fade-in mb-5 font-mono text-[11px] tracking-[0.35em] text-white/30 [animation-delay:80ms]">
          SENIOR FRONTEND DEVELOPER · SCRUM MASTER
        </p>

        {/* Name headline */}
        <h1 className="animate-fade-in-up mb-7 font-serif text-[clamp(4rem,14vw,10rem)] leading-[0.88] tracking-[-0.02em] text-white [animation-delay:140ms]">
          Huda
          <br />
          <span className="text-white/[0.16]">Sarkawt</span>
        </h1>

        {/* Tagline */}
        <p className="animate-fade-in-up mb-12 max-w-[520px] text-lg leading-relaxed text-white/40 [animation-delay:240ms]">
          I build precise, scalable frontend systems — from e-commerce platforms to payment
          gateways. <span className="text-white/22">Based in Kurdistan, Iraq.</span>
        </p>

        {/* Stats */}
        <div className="animate-fade-in-up mb-14 flex flex-wrap gap-8 [animation-delay:340ms]">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col">
              <span className="font-serif text-4xl text-white">{value}</span>
              <span className="mt-1.5 font-mono text-[9px] tracking-[0.25em] text-white/28 uppercase">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className="animate-fade-in-up flex flex-wrap items-center gap-4 [animation-delay:440ms]">
          <a
            href="#projects"
            className="rounded-lg bg-pink-600 px-7 py-3.5 font-mono text-sm text-white transition-all hover:bg-pink-500 hover:shadow-[0_0_24px_rgba(219,39,119,0.3)]"
          >
            View My Work →
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-white/[0.1] px-7 py-3.5 font-mono text-sm text-white/50 transition-all hover:border-white/[0.2] hover:text-white/80"
          >
            Let&apos;s Talk
          </a>
          <a
            href="https://github.com/HudaNasih"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-white/22 transition-colors hover:text-white/50"
          >
            github ↗
          </a>
        </div>
      </div>

      {/* scroll hint */}
      <div className="animate-fade-in absolute bottom-10 left-6 flex items-center gap-3 [animation-delay:900ms]">
        <div className="h-10 w-px bg-white/[0.08]" />
        <p className="font-mono text-[9px] tracking-[0.35em] text-white/18 uppercase">scroll</p>
      </div>
    </section>
  )
}
