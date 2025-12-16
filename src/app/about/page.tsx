import { Code2, Zap, Users, Rocket, CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "About",
  description:
    "Full-stack developer specializing in production-ready SaaS applications with Next.js and Supabase.",
}

const techStack = {
  frontend: [
    { name: "Next.js 14", desc: "React framework" },
    { name: "TypeScript", desc: "Type safety" },
    { name: "Tailwind CSS", desc: "Styling" },
    { name: "shadcn/ui", desc: "Components" },
  ],
  backend: [
    { name: "Supabase", desc: "BaaS" },
    { name: "PostgreSQL", desc: "Database" },
    { name: "Stripe", desc: "Payments" },
    { name: "Vercel", desc: "Deployment" },
  ],
}

const values = [
  {
    icon: Rocket,
    title: "Speed to Market",
    desc: "Ship MVPs in weeks, not months. Fast iteration based on real feedback.",
  },
  {
    icon: Code2,
    title: "Clean Architecture",
    desc: "Scalable, maintainable code that grows with your business.",
  },
  {
    icon: Zap,
    title: "Performance First",
    desc: "Optimized for speed and user experience from day one.",
  },
  {
    icon: Users,
    title: "Clear Communication",
    desc: "Regular updates and transparent project management.",
  },
]

export default function AboutPage() {
  return (
    <div className="section-padding">
      <div className="container-tight">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary animate-in">
            About
          </p>
          <h1 className="animate-in-delay-1 text-4xl font-bold sm:text-5xl md:text-6xl">
            Building digital products that <span className="gradient-text">make a difference</span>
          </h1>
          <p className="animate-in-delay-2 mt-6 text-lg leading-relaxed text-muted-foreground">
            I&apos;m a full-stack developer focused on creating production-ready SaaS applications. I
            transform complex ideas into elegant, scalable solutions that drive business growth.
          </p>
        </div>

        {/* What I do */}
        <section className="mb-20">
          <h2 className="mb-8 text-2xl font-bold">What I build</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "SaaS Platforms",
              "Web Applications",
              "Dashboards & Analytics",
              "E-commerce Solutions",
              "MVP Development",
              "API Integrations",
              "Admin Panels",
              "Landing Pages",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border bg-card p-4 transition-colors hover:border-primary/50"
              >
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-20">
          <h2 className="mb-8 text-2xl font-bold">Tech stack</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border bg-card p-8">
              <h3 className="mb-6 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Frontend
              </h3>
              <div className="space-y-4">
                {techStack.frontend.map((tech) => (
                  <div key={tech.name} className="flex items-center justify-between">
                    <span className="font-medium">{tech.name}</span>
                    <span className="text-sm text-muted-foreground">{tech.desc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border bg-card p-8">
              <h3 className="mb-6 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Backend & Services
              </h3>
              <div className="space-y-4">
                {techStack.backend.map((tech) => (
                  <div key={tech.name} className="flex items-center justify-between">
                    <span className="font-medium">{tech.name}</span>
                    <span className="text-sm text-muted-foreground">{tech.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <h2 className="mb-8 text-2xl font-bold">How I work</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="group rounded-2xl border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl border border-dashed p-8 text-center md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">Ready to start your project?</h2>
          <p className="mt-2 text-muted-foreground">
            Let&apos;s discuss how I can help bring your vision to life.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get in touch
            </a>
            <a
              href="/projects"
              className="inline-flex h-11 items-center justify-center rounded-full border bg-background px-6 text-sm font-medium transition-colors hover:bg-muted"
            >
              View my work
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
