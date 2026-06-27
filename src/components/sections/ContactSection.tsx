import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import ContactForm from '@/components/ui/ContactForm'

export default function ContactSection() {
  return (
    <section id="contact" className="border-t border-white/[0.04] px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <AnimateOnScroll>
          <p className="mb-3 font-mono text-[10px] tracking-[0.3em] text-pink-400">GET IN TOUCH</p>

          <h2 className="mb-4 font-serif text-5xl leading-tight font-light tracking-tight text-white md:text-6xl">
            Let&apos;s build
            <br />
            <span className="text-white/[0.18]">something great.</span>
          </h2>

          <p className="mb-8 max-w-md text-sm leading-relaxed text-white/40">
            Open to freelance projects, full-time roles, and collaborations. Drop a message and
            I&apos;ll get back to you.
          </p>

          <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/[0.07] px-4 py-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
            <span className="font-mono text-[11px] text-green-300/80">
              Available for new projects
            </span>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <ContactForm />
        </AnimateOnScroll>

        {/* Social links */}
        <AnimateOnScroll delay={200}>
          <div className="mt-10 flex items-center gap-5 border-t border-white/[0.04] pt-8">
            <a
              href="https://github.com/HudaNasih"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] tracking-[0.1em] text-white/25 transition-colors hover:text-white/55"
            >
              github ↗
            </a>
            <a
              href="https://www.instagram.com/thedudadoodle"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] tracking-[0.1em] text-white/25 transition-colors hover:text-white/55"
            >
              @thedudadoodle ↗
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
