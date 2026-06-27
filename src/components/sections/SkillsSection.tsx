import { skills } from '@/lib/data/projects'
import SkillBar from '@/components/ui/SkillBar'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

function proficiencyLabel(level: number) {
  if (level >= 90) return 'Expert'
  if (level >= 75) return 'Advanced'
  if (level >= 60) return 'Intermediate'
  return 'Learning'
}

export default function SkillsSection() {
  const totalSkills = skills.reduce((acc, s) => acc + s.items.length, 0)

  return (
    <section id="skills" className="border-t border-white/[0.06] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <AnimateOnScroll>
          <p className="mb-3 font-mono text-[10px] tracking-[0.3em] text-pink-400">TOOLKIT</p>
          <div className="mb-14 flex items-baseline gap-4">
            <h2 className="font-serif text-3xl font-light tracking-tight text-white sm:text-4xl">
              Skills
            </h2>
            <span className="font-mono text-sm text-white/20">/ {totalSkills} technologies</span>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, gi) => (
            <AnimateOnScroll key={group.category} delay={gi * 90}>
              <div className="flex h-full flex-col rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                <p className="mb-6 font-mono text-[9px] tracking-[0.25em] text-white/28 uppercase">
                  {group.category}
                </p>
                <div className="flex flex-col gap-4">
                  {group.items.map((item, i) => (
                    <div key={item.name}>
                      <div className="mb-2 flex items-center justify-between gap-2">
                        <span
                          className={`flex items-center gap-1.5 text-[13px] ${
                            item.learning
                              ? 'text-pink-400'
                              : i < 3
                                ? 'text-white/85'
                                : 'text-white/50'
                          }`}
                        >
                          {item.name}
                          {item.learning && (
                            <span className="rounded bg-pink-500/15 px-1.5 py-0.5 font-mono text-[8px] tracking-widest text-pink-400">
                              NEW
                            </span>
                          )}
                        </span>
                        <span className="shrink-0 font-mono text-[9px] text-white/22">
                          {proficiencyLabel(item.level)}
                        </span>
                      </div>
                      <SkillBar level={item.level} delay={gi * 90 + i * 50} />
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Next.js callout */}
        <AnimateOnScroll delay={400} className="mt-8">
          <div className="flex items-start gap-3 rounded-xl border border-pink-500/15 bg-pink-500/[0.04] px-5 py-4">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-pink-400" />
            <p className="text-sm leading-relaxed text-white/45">
              <span className="text-pink-300/80">Currently learning Next.js & React</span> — I built
              this entire portfolio as a hands-on project to explore the ecosystem. Always growing.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
