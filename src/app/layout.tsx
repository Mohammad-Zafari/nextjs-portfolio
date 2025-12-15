import type { Metadata } from "next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: "Portfolio | Full-Stack Developer",
    template: "%s | Portfolio",
  },
  description:
    "Full-stack developer specializing in production-ready SaaS applications with Next.js, TypeScript, and Supabase.",
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "Supabase",
    "Full-stack Developer",
    "SaaS",
    "Web Development",
  ],
  authors: [{ name: "Portfolio" }],
  creator: "Portfolio",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Portfolio",
    title: "Portfolio | Full-Stack Developer",
    description:
      "Full-stack developer specializing in production-ready SaaS applications with Next.js, TypeScript, and Supabase.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Full-Stack Developer",
    description:
      "Full-stack developer specializing in production-ready SaaS applications with Next.js, TypeScript, and Supabase.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main-content"
          className="focus:bg-primary focus:text-primary-foreground focus:ring-ring sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:px-4 focus:py-2 focus:outline-none focus:ring-2"
        >
          Skip to main content
        </a>
        <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
