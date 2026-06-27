import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <p className="mb-3 font-mono text-[10px] tracking-[0.3em] text-pink-400">ABOUT ME</p>

        <h1 className="mb-10 font-serif text-4xl leading-tight font-light tracking-tight text-white sm:text-5xl">
          The person
          <br />
          <span className="text-white/[0.18]">behind the code.</span>
        </h1>

        <div className="space-y-5 text-[15px] leading-[1.8] text-white/50">
          <p>
            I&apos;m <span className="text-white/85">Huda Sarkawt Nasih</span>, a Senior Frontend
            Developer and Scrum Master based in Kurdistan, Iraq. With 5+ years of experience, I
            specialize in building scalable, maintainable frontend systems using Vue.js, Nuxt.js,
            and TypeScript.
          </p>

          <p>
            My work spans e-commerce platforms, payment gateways, POS systems, and SaaS dashboards —
            each built with meticulous attention to component architecture, performance, and
            developer experience.
          </p>

          <p>
            As a Scrum Master, I bridge the gap between technical execution and agile process —
            running sprints, facilitating ceremonies, unblocking teams, and keeping delivery on
            track.
          </p>

          <p className="text-pink-300/70">
            Currently exploring React and Next.js — I built this portfolio as a hands-on project to
            learn the ecosystem from scratch, and I&apos;m genuinely enjoying it. Always learning,
            always building.
          </p>

          <p>
            Outside of work, I&apos;m{' '}
            <a
              href="https://instagram.com/thedudadoodle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 underline underline-offset-2 transition-colors hover:text-white"
            >
              @thedudadoodle
            </a>{' '}
            — a hobbyist illustrator who occasionally posts doodles online.
          </p>
        </div>

        {/* Skills quick view */}
        <div className="mt-12 border-t border-white/[0.06] pt-10">
          <p className="mb-4 font-mono text-[10px] tracking-[0.3em] text-white/30">CORE STACK</p>
          <div className="flex flex-wrap gap-2">
            {['Vue.js', 'Nuxt.js', 'TypeScript', 'Tailwind CSS', 'Pinia', 'Scrum'].map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/[0.08] px-3 py-1.5 font-mono text-[11px] text-white/50"
              >
                {tech}
              </span>
            ))}
            <span className="rounded-md border border-pink-500/25 bg-pink-500/[0.07] px-3 py-1.5 font-mono text-[11px] text-pink-400">
              Next.js ✦ learning
            </span>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/#contact"
            className="rounded-lg bg-pink-600 px-6 py-3 text-center font-mono text-sm text-white transition-colors hover:bg-pink-500 sm:text-left"
          >
            Get in touch →
          </Link>
          <Link
            href="/"
            className="rounded-lg border border-white/[0.08] px-6 py-3 text-center font-mono text-sm text-white/45 transition-all hover:border-white/[0.15] hover:text-white/70 sm:text-left"
          >
            ← Back home
          </Link>
        </div>
      </div>
    </div>
  )
}
