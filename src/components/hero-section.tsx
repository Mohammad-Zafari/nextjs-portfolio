"use client"

import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/4 translate-y-1/4 rounded-full bg-purple-500/10 blur-[100px]" />
      </div>

      <div className="container-tight flex min-h-[calc(100vh-4rem)] flex-col justify-center py-20">
        <div className="max-w-3xl">
          {/* Status badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm animate-in">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            <span className="text-muted-foreground">Available for new projects</span>
          </div>

          {/* Main heading */}
          <h1 className="animate-in-delay-1 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            I craft <span className="gradient-text">digital experiences</span> that drive growth
          </h1>

          {/* Subheading */}
          <p className="animate-in-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Full-stack developer specializing in building production-ready SaaS applications with
            Next.js, TypeScript, and Supabase.
          </p>

          {/* CTA Buttons */}
          <div className="animate-in-delay-3 mt-10 flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="group h-12 gap-2 rounded-full px-6">
              <Link href="/projects">
                View my work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 rounded-full px-6">
              <Link href="/contact">Let&apos;s talk</Link>
            </Button>
          </div>

          {/* Social links */}
          <div className="animate-in-delay-4 mt-12 flex items-center gap-1">
            <span className="mr-4 text-sm text-muted-foreground">Find me on</span>
            <a
              href="https://github.com/Mohammad-Zafari"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammad-zafari-0b417b2b4"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:my.mohammad.zafari@gmail.com"
              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Tech stack - floating on side for large screens */}
        <div className="animate-in-delay-4 mt-16 lg:absolute lg:bottom-20 lg:right-8 lg:mt-0">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Tech I work with
          </p>
          <div className="flex flex-wrap gap-2 lg:flex-col lg:items-end">
            {["Next.js", "TypeScript", "React", "Supabase", "Tailwind"].map((tech) => (
              <span
                key={tech}
                className="rounded-full border bg-card px-3 py-1.5 text-sm font-medium transition-colors hover:border-primary/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
