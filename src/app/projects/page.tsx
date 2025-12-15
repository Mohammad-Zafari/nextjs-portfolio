import { ProjectCard } from "@/components/project-card"
import { projects } from "@/data/projects-full"

export const metadata = {
  title: "Projects",
  description:
    "Browse my portfolio of production-ready SaaS applications, dashboards, and web projects built with Next.js and Supabase.",
}

export default function ProjectsPage() {
  return (
    <div className="section-padding">
      <div className="container-tight">
        {/* Header */}
        <div className="mb-16">
          <p className="text-primary mb-4 text-sm font-medium uppercase tracking-wider animate-in">
            Portfolio
          </p>
          <h1 className="animate-in-delay-1 text-4xl font-bold sm:text-5xl md:text-6xl">
            Selected work
          </h1>
          <p className="animate-in-delay-2 text-muted-foreground mt-4 max-w-xl text-lg">
            A curated collection of projects that showcase my expertise in building scalable,
            user-focused applications.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-2xl border border-dashed p-8 text-center md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">Have a project in mind?</h2>
          <p className="text-muted-foreground mt-2">
            Let's discuss how I can help bring your ideas to life.
          </p>
          <a
            href="/contact"
            className="bg-primary text-primary-foreground hover:bg-primary/90 mt-6 inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-medium transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </div>
  )
}
