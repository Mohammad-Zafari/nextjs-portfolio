"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { navigationItems } from "@/config/navigation"
import { cn } from "@/lib/utils"

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <header className="glass sticky top-0 z-50 border-b">
      <nav className="container-tight flex h-16 items-center justify-between" aria-label="Main">
        {/* Logo */}
        <Link
          href="/"
          className="hover:text-primary text-xl font-bold tracking-tight transition-colors"
          aria-label="Home"
        >
          portfolio<span className="text-primary">.</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-1 md:flex">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.name}
                  {isActive && (
                    <span className="via-primary absolute inset-x-2 -bottom-px h-px bg-gradient-to-r from-transparent to-transparent" />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="glass absolute inset-x-0 top-16 border-b md:hidden">
          <nav className="container-tight py-4" aria-label="Mobile">
            <ul className="flex flex-col gap-1">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      {item.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
