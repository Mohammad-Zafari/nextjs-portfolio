import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card/50 border-t">
      <div className="container-tight py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo and tagline */}
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="hover:text-primary text-xl font-bold tracking-tight transition-colors"
            >
              portfolio<span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground mt-2 text-sm">
              Building digital products that matter.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-1">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:bg-muted hover:text-foreground rounded-full p-2.5 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:bg-muted hover:text-foreground rounded-full p-2.5 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:hello@example.com"
              className="text-muted-foreground hover:bg-muted hover:text-foreground rounded-full p-2.5 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-muted-foreground text-sm">© {currentYear} All rights reserved.</p>
          <p className="text-muted-foreground text-sm">
            Built with{" "}
            <Link
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground underline-offset-4 transition-colors hover:underline"
            >
              Next.js
            </Link>{" "}
            &{" "}
            <Link
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground underline-offset-4 transition-colors hover:underline"
            >
              shadcn/ui
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
