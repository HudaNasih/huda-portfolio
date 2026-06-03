'use client'

import Link from 'next/link'
import { Project } from '@/types'

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block flex h-full cursor-pointer flex-col justify-between rounded-lg border border-white/[0.07] bg-[#0d0d0d] p-6 text-left transition-all duration-300 hover:border-white/[0.13] hover:bg-white/[0.02]"
    >
      <div>
        {/* Header: Title with Emoji */}
        <h3 className="mb-2 flex items-center gap-2 text-[17px] font-semibold text-white transition-colors group-hover:text-pink-400">
          <span>{project.emoji}</span>
          <span>{project.title}</span>
        </h3>

        {/* Live Link */}
        {project.urlLabel && (
          <button
            onClick={(e) => {
              e.stopPropagation()
              window.open(project.url, '_blank', 'noopener,noreferrer')
            }}
            className="relative z-10 mb-4 inline-block cursor-pointer border-none bg-transparent p-0 text-left text-sm font-medium text-blue-400 hover:underline"
          >
            {project.urlLabel}
          </button>
        )}

        {/* Description */}
        <p className="mb-4 text-sm leading-relaxed text-gray-300">{project.description}</p>

        {/* Tech Stack */}
        <p className="mb-2 text-sm font-medium text-gray-200">
          <span className="font-normal text-gray-400">Tech Stack:</span> {project.tags.join(', ')}
        </p>

        {/* Features List */}
        {project.features && project.features.length > 0 && (
          <div className="mb-4">
            <p className="mb-1 text-sm text-gray-400">Features:</p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-300">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Footer: Role and Index/Year metadata */}
      <div className="mt-6 flex flex-col gap-2 border-t border-white/[0.05] pt-4">
        <p className="text-sm text-gray-300">
          <span className="text-gray-400">Role:</span> {project.role}
        </p>
        <div className="flex items-center justify-between font-mono text-xs text-white/20">
          <span>#{String(index + 1).padStart(2, '0')}</span>
          <span className="transition-colors group-hover:text-pink-400/50">{project.year}</span>
        </div>
      </div>
    </Link>
  )
}
