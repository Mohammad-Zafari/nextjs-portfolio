import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { Project } from "@/data/projects-full"

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="bg-card hover:border-primary/50 hover:shadow-primary/5 group relative block overflow-hidden rounded-2xl border transition-all duration-300 hover:shadow-xl"
    >
      {/* Gradient overlay on hover */}
      <div className="from-primary/5 absolute inset-0 bg-gradient-to-br via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative p-6 md:p-8">
        {/* Header */}
        <div className="mb-6 flex items-start justify-between">
          <span className="text-muted-foreground text-sm font-medium">
            {String(index + 1).padStart(2, "0")}
          </span>
          {project.featured && (
            <span className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-medium">
              Featured
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="group-hover:text-primary mb-3 text-2xl font-bold transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground mb-6 leading-relaxed">{project.problem}</p>

        {/* Tech stack */}
        <div className="mb-6 flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="bg-secondary text-muted-foreground rounded-full px-3 py-1 text-xs font-medium">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* CTA */}
        <div className="text-primary flex items-center gap-2 text-sm font-medium">
          View case study
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  )
}
