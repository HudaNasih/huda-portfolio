import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Metadata } from 'next'
import { projects } from '@/lib'

interface Props {
  params: Promise<{ slug: string }>
}

// This tells Next.js all valid slugs at build time
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return { title: `${project.title} — Huda Sarkawt Nasih` }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  // triggers your not-found.tsx automatically
  if (!project) notFound()

  return (
    <div className="min-h-screen px-6 pt-32 pb-24">
      <div className="mx-auto max-w-2xl">
        {/* back */}
        <Link
          href="/projects"
          className="mb-12 inline-block font-mono text-xs text-white/30 transition-colors hover:text-white/60"
        >
          ← all projects
        </Link>

        {/* header */}
        <div className="mb-12">
          <div className="mb-4 flex items-center gap-4">
            <span className="font-mono text-xs tracking-[0.2em] text-pink-400">{project.year}</span>
          </div>
          <h1 className="mb-6 text-5xl font-light text-white">{project.title}</h1>
          <p className="text-base leading-relaxed text-white/50">{project.description}</p>
        </div>

        {/* tags */}
        <div className="mb-16 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-white/[0.08] px-3 py-1.5 font-mono text-[10px] tracking-wider text-white/30"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* placeholder for screenshots / case study content */}
        <div className="flex h-64 items-center justify-center rounded-lg border border-white/[0.06]">
          <p className="font-mono text-xs text-white/15">project screenshots coming soon</p>
        </div>

        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded border border-pink-400/30 px-6 py-3 font-mono text-sm text-pink-400 transition-colors hover:bg-pink-400/10"
          >
            visit project →
          </a>
        )}
      </div>
    </div>
  )
}
