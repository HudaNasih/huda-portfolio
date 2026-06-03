import { skills } from '@/lib/data/projects'

export default function SkillsSection() {
  return (
    <section id="skills" className="border-t border-white/[0.06] px-7 py-16">
      <div className="mx-auto max-w-4xl">
        <p className="font-syne mb-3 text-[10px] font-semibold tracking-[0.25em] text-pink-500">
          TOOLKIT
        </p>
        <h2 className="font-syne mb-10 text-3xl font-extrabold tracking-[-0.04em] text-white">
          Skills{' '}
          <span className="text-white/15">
            / {skills.reduce((acc, s) => acc + s.items.length, 0)}
          </span>
        </h2>

        <div className="grid grid-cols-2 divide-x divide-white/[0.06] overflow-hidden rounded-xl border border-white/[0.06] md:grid-cols-4">
          {skills.map((group) => (
            <div key={group.category} className="px-4 py-5">
              <p className="font-syne mb-4 text-[9px] font-bold tracking-[0.2em] text-white/20 uppercase">
                {group.category}
              </p>
              <ul className="space-y-0">
                {group.items.map((item, i) => (
                  <li
                    key={item}
                    className={`font-bricolage cursor-default border-b border-white/[0.04] py-[5px] text-[12px] transition-colors last:border-b-0 ${i < 2 ? 'text-white/75' : 'text-white/40 hover:text-white/80'} `}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
