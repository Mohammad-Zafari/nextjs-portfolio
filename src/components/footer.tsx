import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-card/50">
      <div className="container-tight py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo and tagline */}
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight transition-colors hover:text-primary"
            >
              moe portfolio<span className="text-primary">.</span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Building digital products that matter.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-1">
            <a
              href="https://github.com/Mohammad-Zafari"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammad-zafari-0b417b2b4"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:my.mohammad.zafari@gmail.com"
              className="rounded-full p-2.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">© {currentYear} All rights reserved.</p>
          <p className="text-sm text-muted-foreground">
            Built with{" "}
            <Link
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              Next.js
            </Link>{" "}
            &{" "}
            <Link
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              shadcn/ui
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
