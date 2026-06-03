export default function ContactSection() {
  return (
    <section id="contact" className="border-t border-white/[0.04] px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 font-mono text-xs tracking-[0.3em] text-pink-400">GET IN TOUCH</p>

        <h2 className="mb-8 text-5xl leading-tight font-light text-white md:text-6xl">
          Let&apos;s work
          <br />
          <span className="text-white/20">together.</span>
        </h2>

        <p className="mb-12 max-w-md text-base leading-relaxed text-white/40">
          Open to freelance projects, collaborations, or just a good conversation about frontend
          architecture.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="mailto:huda@example.com"
            className="rounded bg-pink-600 px-8 py-4 text-center font-mono text-sm text-white transition-colors hover:bg-pink-500"
          >
            say hello →
          </a>
          <a
            href="https://github.com/HudaNasih"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-white/[0.08] px-8 py-4 text-center font-mono text-sm text-white/50 transition-colors hover:border-white/[0.15] hover:text-white/70"
          >
            github
          </a>
          <a
            href="https://www.instagram.com/thedudadoodle"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-white/[0.08] px-8 py-4 text-center font-mono text-sm text-white/50 transition-colors hover:border-white/[0.15] hover:text-white/70"
          >
            @thedudadoodle
          </a>
        </div>
      </div>
    </section>
  )
}
