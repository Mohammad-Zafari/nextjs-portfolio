// App configuration
export const siteConfig = {
  name: "Portfolio",
  description: "Production-ready developer portfolio",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  links: {
    nextjs: "https://nextjs.org",
    shadcn: "https://ui.shadcn.com",
    github: "https://github.com/Mohammad-Zafari",
    linkedin: "https://www.linkedin.com/in/mohammad-zafari-0b417b2b4",
    email: "my.mohammad.zafari@gmail.com",
  },
} as const
