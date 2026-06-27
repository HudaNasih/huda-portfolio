const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Delivered' },
  { value: '3+', label: 'Industries' },
]

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] overflow-hidden px-6 pt-16 pb-24 md:px-10 md:pt-28"
    >
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
      <div className="pointer-events-none absolute top-1/3 left-1/3 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-600/[0.07] blur-[100px] md:h-[480px] md:w-[480px] md:blur-[130px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/3 h-48 w-48 rounded-full bg-violet-600/[0.05] blur-[80px] md:h-72 md:w-72 md:blur-[100px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Role */}
        <p className="animate-fade-in mb-4 font-mono text-[10px] tracking-[0.25em] text-white/30 [animation-delay:80ms] md:text-[11px] md:tracking-[0.35em]">
          SENIOR FRONTEND DEVELOPER · SCRUM MASTER
        </p>

        {/* Name headline */}
        <h1 className="animate-fade-in-up mb-6 font-serif text-[clamp(3.5rem,13vw,10rem)] leading-[0.88] tracking-[-0.02em] text-white [animation-delay:140ms]">
          Huda
          <br />
          <span className="text-white/[0.16]">Sarkawt</span>
        </h1>

        {/* Tagline */}
        <p className="animate-fade-in-up mb-10 max-w-[540px] text-base leading-relaxed text-white/40 [animation-delay:240ms] md:text-lg">
          I build scalable frontend systems and lead the sprints that ship them. The code is clean,
          the standups are short. <span className="text-white/22">Based in Kurdistan, Iraq.</span>
        </p>

        {/* Stats */}
        <div className="animate-fade-in-up mb-12 flex flex-wrap gap-6 [animation-delay:340ms] md:gap-8">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col">
              <span className="font-serif text-3xl text-white md:text-4xl">{value}</span>
              <span className="mt-1.5 font-mono text-[9px] tracking-[0.2em] text-white/28 uppercase">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className="animate-fade-in-up flex flex-wrap items-center gap-3 [animation-delay:440ms] md:gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-pink-600 px-6 py-3 font-mono text-sm text-white transition-all hover:bg-pink-500 hover:shadow-[0_0_24px_rgba(219,39,119,0.3)] md:px-7 md:py-3.5"
          >
            View My Work →
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-white/[0.1] px-6 py-3 font-mono text-sm text-white/50 transition-all hover:border-white/[0.2] hover:text-white/80 md:px-7 md:py-3.5"
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

      {/* scroll hint — hide on very small screens */}
      <div className="animate-fade-in absolute bottom-8 left-6 hidden items-center gap-3 [animation-delay:900ms] sm:flex">
        <div className="h-10 w-px bg-white/[0.08]" />
        <p className="font-mono text-[9px] tracking-[0.35em] text-white/18 uppercase">scroll</p>
      </div>
    </section>
  )
}
