import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, CheckCircle2, Clock, User } from "lucide-react"
import { projects } from "@/data/projects-full"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    return { title: "Project Not Found" }
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
    },
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="section-padding">
      <div className="container-tight">
        {/* Back link */}
        <Link
          href="/projects"
          className="mb-12 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>

        {/* Header */}
        <header className="mb-16">
          <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            {project.timeline && (
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {project.timeline}
              </div>
            )}
            {project.role && (
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {project.role}
              </div>
            )}
          </div>

          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">{project.title}</h1>
          <p className="mt-6 max-w-2xl text-xl text-muted-foreground">{project.description}</p>

          {/* Tech stack */}
          <div className="mt-8 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border bg-card px-4 py-2 text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </header>

        {/* Content */}
        <div className="space-y-16">
          {/* Problem & Solution */}
          <section className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-8">
              <h2 className="mb-4 text-lg font-semibold text-destructive">The Problem</h2>
              <p className="leading-relaxed text-foreground/80">{project.problem}</p>
            </div>
            <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-8">
              <h2 className="mb-4 text-lg font-semibold text-green-600 dark:text-green-500">
                The Solution
              </h2>
              <p className="leading-relaxed text-foreground/80">{project.solution}</p>
            </div>
          </section>

          {/* Architecture */}
          <section>
            <h2 className="mb-6 text-2xl font-bold">Architecture</h2>
            <div className="rounded-2xl border bg-card p-8">
              <p className="mb-8 leading-relaxed text-muted-foreground">
                {project.architecture.overview}
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.architecture.components.map((component, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-sm">{component}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Challenges */}
          <section>
            <h2 className="mb-6 text-2xl font-bold">Challenges Solved</h2>
            <div className="space-y-6">
              {project.challenges.map((challenge, index) => (
                <div key={index} className="rounded-2xl border bg-card p-8">
                  <h3 className="mb-4 text-lg font-semibold">{challenge.title}</h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        Challenge
                      </p>
                      <p className="text-sm leading-relaxed">{challenge.description}</p>
                    </div>
                    <div>
                      <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        Solution
                      </p>
                      <p className="text-sm leading-relaxed">{challenge.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Results */}
          {project.results && project.results.length > 0 && (
            <section>
              <h2 className="mb-6 text-2xl font-bold">Results</h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {project.results.map((result, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border bg-gradient-to-br from-primary/10 via-card to-card p-8 text-center"
                  >
                    <p className="gradient-text text-4xl font-bold">{result.value}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{result.metric}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="rounded-2xl border border-dashed p-8 text-center md:p-12">
            <h2 className="text-xl font-bold md:text-2xl">Interested in working together?</h2>
            <p className="mt-2 text-muted-foreground">
              Let&apos;s discuss how I can help with your next project.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Get in touch
              </Link>
              <Link
                href="/projects"
                className="inline-flex h-11 items-center gap-2 rounded-full border bg-background px-6 text-sm font-medium transition-colors hover:bg-muted"
              >
                View more projects
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
