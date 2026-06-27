import { Project } from '@/types'

export default function ProjectCard({ project }: { project: Project; index: number }) {
  return (
    <div className="group flex h-full flex-col rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-6 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.015]">
      {/* Header */}
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <div className="mb-1 flex items-center gap-2">
            <span className="text-lg">{project.emoji}</span>
            <h3 className="text-[15px] leading-snug font-semibold text-white transition-colors group-hover:text-pink-300">
              {project.title}
            </h3>
          </div>
          <p className="font-mono text-[9px] tracking-[0.2em] text-white/25 uppercase">
            {project.role}
          </p>
        </div>
        <span className="shrink-0 font-mono text-[10px] text-white/20">{project.year}</span>
      </div>

      {/* Description */}
      <p className="mb-4 text-[13px] leading-relaxed text-white/45">{project.description}</p>

      {/* Features */}
      {project.features.length > 0 && (
        <ul className="mb-5 space-y-1.5">
          {project.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-[12px] text-white/35">
              <span className="mt-[5px] h-1 w-1 shrink-0 rounded-full bg-pink-500/50" />
              {f}
            </li>
          ))}
        </ul>
      )}

      {/* Tech tags */}
      <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-white/[0.07] px-2 py-1 font-mono text-[10px] text-white/30"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Live link */}
      {project.urlLabel && (
        <div className="mt-4 border-t border-white/[0.05] pt-4">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-[11px] text-pink-400/70 transition-colors hover:text-pink-400"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-pink-400/60" />
            {project.urlLabel} ↗
          </a>
        </div>
      )}
    </div>
  )
}
