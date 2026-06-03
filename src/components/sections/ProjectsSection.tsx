import ProjectCard from '@/components/ui/ProjectCard'
import { projects } from '@/lib'

export default function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <section id="skills" className="border-t border-white/[0.06] px-7 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center justify-center gap-6 bg-[#0a0a0a] px-6 py-12 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
