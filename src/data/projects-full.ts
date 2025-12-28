export interface Project {
  id: string
  title: string
  description: string
  problem: string
  solution: string
  techStack: string[]
  slug: string
  featured?: boolean
  websiteUrl?: string
  architecture: {
    overview: string
    components: string[]
  }
  challenges: {
    title: string
    description: string
    solution: string
  }[]
  results?: {
    metric: string
    value: string
  }[]
  timeline?: string
  role?: string
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Collaborative Whiteboard",
    description:
      "Built a real-time collaborative whiteboard with infinite canvas, drawing tools, and live cursor tracking for seamless team collaboration.",
    problem:
      "Remote teams needed an intuitive, real-time visual collaboration tool for brainstorming and design sessions. Existing solutions were either too complex, lacked real-time features, or had poor UX.",
    solution:
      "Developed a modern, real-time whiteboard with comprehensive drawing tools, infinite canvas, and live collaboration features. Implemented professional UI/UX with glass morphism, animations, and a complete design system. Teams can draw, share, and collaborate instantly with no learning curve.",
    techStack: ["Next.js", "Supabase Realtime", "TypeScript", "Tailwind CSS", "Zustand", "Canvas API"],
    slug: "collaborative-whiteboard",
    featured: true,
    websiteUrl: "https://collaborative-whiteboard-59mgjpuvc.vercel.app",
    architecture: {
      overview:
        "Built with Next.js 15 and Supabase Realtime for instant multi-user synchronization. Canvas API handles drawing operations, Zustand manages application state, and a custom design system ensures consistent UI/UX across all components.",
      components: [
        "Next.js App Router with real-time streaming",
        "Supabase Realtime for instant stroke synchronization",
        "Custom Canvas renderer with zoom and pan controls",
        "Zustand for efficient state management",
        "Resizable panels with glass morphism design",
        "Keyboard shortcuts system for power users",
        "Export functionality (PNG/SVG/JSON)",
        "Live cursor tracking with user presence",
      ],
    },
    challenges: [
      {
        title: "Real-time Stroke Synchronization",
        description:
          "Multiple users drawing simultaneously caused conflicts and lag, with strokes appearing out of order or overlapping incorrectly.",
        solution:
          "Implemented optimistic rendering with local state and server reconciliation. Used Supabase Realtime channels for instant stroke broadcasting with timestamp-based ordering. Added throttling for cursor movements to reduce bandwidth by 80%.",
      },
      {
        title: "Canvas Performance at Scale",
        description:
          "Canvas rendering became sluggish with 1000+ drawing elements, causing poor user experience and dropped frames.",
        solution:
          "Optimized rendering with viewport culling (only draw visible elements), implemented layer caching for static elements, and used requestAnimationFrame for smooth 60fps rendering. Added element chunking for large boards.",
      },
      {
        title: "Professional UI/UX Design",
        description:
          "Initial design looked basic and outdated, lacking the polish expected from modern SaaS products.",
        solution:
          "Implemented comprehensive redesign with custom design system, CSS variables for theming, glass morphism effects, micro-interactions, and consistent animation system. Created keyboard shortcuts panel and improved all component layouts.",
      },
      {
        title: "State Management Complexity",
        description:
          "Managing tool selection, drawing state, user presence, and canvas transforms across components was becoming unmaintainable.",
        solution:
          "Adopted Zustand for lightweight, performant state management. Created clear state slices for tools, strokes, shapes, text, and user presence. Implemented selective re-rendering to prevent unnecessary updates.",
      },
    ],
    results: [
      { metric: "Cursor Update Latency", value: "<50ms" },
      { metric: "Canvas Performance", value: "60fps" },
      { metric: "UI/UX Rating", value: "SaaS-level" },
      { metric: "Concurrent Users", value: "100+ per room" },
    ],
    timeline: "2 months",
    role: "Full-stack Developer & UI/UX Designer",
  },
  {
    id: "2",
    title: "Personal Portfolio Website",
    description:
      "Designed and developed a modern, responsive portfolio website with dynamic project showcase, contact form, and blog integration.",
    problem:
      "Needed a professional online presence to showcase projects and skills. Generic portfolio templates lacked personality and didn't effectively highlight technical capabilities or provide good user experience.",
    solution:
      "Built a custom portfolio from scratch with Next.js 15, featuring a dynamic project system, integrated contact form with email notifications, responsive design, dark mode, and optimized performance. Achieved 100/100 Lighthouse scores across all metrics.",
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Supabase", "shadcn/ui", "Resend"],
    slug: "personal-portfolio",
    featured: true,
    websiteUrl: "https://nextjs-portfolio-beta-red.vercel.app",
    architecture: {
      overview:
        "Modern Next.js application using App Router for optimal performance. Supabase handles data storage and authentication. Resend API manages contact form emails. shadcn/ui provides accessible, customizable components.",
      components: [
        "Next.js 15 App Router with Server Components",
        "TypeScript for type safety",
        "Tailwind CSS with custom design system",
        "Supabase for project data and analytics",
        "Resend API for email delivery",
        "shadcn/ui component library",
        "Dynamic sitemap and robots.txt generation",
        "SEO optimization with metadata API",
      ],
    },
    challenges: [
      {
        title: "Performance Optimization",
        description:
          "Initial builds were slow and bundle sizes were large, affecting load times and user experience.",
        solution:
          "Implemented code splitting, image optimization with Next.js Image, lazy loading for non-critical components, and font optimization. Achieved 100/100 Lighthouse performance score.",
      },
      {
        title: "Contact Form Reliability",
        description:
          "Needed reliable email delivery without exposing API keys or dealing with spam.",
        solution:
          "Integrated Resend API with server-side validation, rate limiting, and honeypot spam protection. Implemented proper error handling and user feedback with toast notifications.",
      },
      {
        title: "Dynamic Content Management",
        description:
          "Wanted to easily update projects and content without redeploying the entire site.",
        solution:
          "Created a structured data system with TypeScript interfaces for projects. Used Supabase for dynamic content that can be updated without code changes. Implemented ISR for automatic updates.",
      },
      {
        title: "Responsive Design Consistency",
        description:
          "Ensuring consistent design across all devices and screen sizes was challenging.",
        solution:
          "Adopted mobile-first approach with Tailwind CSS. Created reusable component patterns and tested across multiple devices. Implemented responsive navigation with mobile menu.",
      },
    ],
    results: [
      { metric: "Lighthouse Score", value: "100/100" },
      { metric: "First Contentful Paint", value: "<1s" },
      { metric: "Bundle Size", value: "Optimized" },
      { metric: "SEO Score", value: "100/100" },
    ],
    timeline: "1 month",
    role: "Full-stack Developer & Designer",
  },
]
