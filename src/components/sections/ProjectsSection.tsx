import ProjectCard from '@/components/ui/ProjectCard'
import { projects } from '@/lib'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export default function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <section id="projects" className="border-t border-white/[0.06] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <AnimateOnScroll>
          <p className="mb-3 font-mono text-[10px] tracking-[0.3em] text-pink-400">SELECTED WORK</p>
          <div className="mb-14 flex items-baseline gap-4">
            <h2 className="font-serif text-3xl font-light tracking-tight text-white sm:text-4xl">
              Projects
            </h2>
            <span className="font-mono text-sm text-white/20">
              / {featuredProjects.length} featured
            </span>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <AnimateOnScroll key={project.slug} delay={index * 70}>
              <ProjectCard project={project} index={index} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
