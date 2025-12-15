// App configuration
export const siteConfig = {
  name: "Portfolio",
  description: "Production-ready developer portfolio",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  links: {
    nextjs: "https://nextjs.org",
    shadcn: "https://ui.shadcn.com",
    github: "https://github.com", // Add your GitHub
    linkedin: "https://linkedin.com", // Add your LinkedIn
    twitter: "https://twitter.com", // Add your Twitter
  },
} as const
