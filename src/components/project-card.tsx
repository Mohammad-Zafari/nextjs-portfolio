"use client"

import Link from "next/link"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import type { Project } from "@/data/projects-full"

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative block overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative p-6 md:p-8">
        {/* Header */}
        <div className="mb-6 flex items-start justify-between">
          <span className="text-sm font-medium text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
          {project.featured && (
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Featured
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="mb-3 text-2xl font-bold transition-colors group-hover:text-primary">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mb-6 leading-relaxed text-muted-foreground">{project.problem}</p>

        {/* Tech stack */}
        <div className="mb-6 flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Website URL */}
        {project.websiteUrl && (
          <a
            href={project.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="mb-4 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ExternalLink className="h-4 w-4" />
            <span className="truncate font-mono text-xs underline decoration-dotted underline-offset-2">
              {project.websiteUrl}
            </span>
          </a>
        )}

        {/* CTA */}
        <div className="flex items-center gap-2 text-sm font-medium text-primary">
          View case study
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  )
}
