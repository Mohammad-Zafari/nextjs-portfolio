export interface Project {
  id: string
  title: string
  description: string
  problem: string
  solution: string
  techStack: string[]
  slug: string
  featured?: boolean
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
    title: "E-Commerce Platform",
    description:
      "Built a full-stack e-commerce solution with real-time inventory management and payment processing.",
    problem:
      "Small businesses needed an affordable, scalable platform to sell online without complex setup. Existing solutions were either too expensive or lacked essential features like real-time inventory tracking.",
    solution:
      "Developed a modern, serverless e-commerce platform with automated inventory management, integrated payment processing, and an intuitive admin dashboard. The platform scales automatically and reduces operational costs by 60%.",
    techStack: ["Next.js", "Supabase", "Stripe", "TypeScript", "Tailwind CSS"],
    slug: "ecommerce-platform",
    featured: true,
    architecture: {
      overview:
        "Built on Next.js 14 with App Router for optimal performance and SEO. Supabase handles authentication, database, and real-time subscriptions. Stripe integration manages secure payment processing.",
      components: [
        "Next.js App Router for server-side rendering and API routes",
        "Supabase PostgreSQL for product catalog and order management",
        "Supabase Realtime for live inventory updates",
        "Stripe Checkout for secure payment processing",
        "Server Actions for form submissions and mutations",
        "React Server Components for improved performance",
      ],
    },
    challenges: [
      {
        title: "Real-time Inventory Synchronization",
        description:
          "Multiple users could purchase the same item simultaneously, leading to overselling.",
        solution:
          "Implemented optimistic locking with Supabase Realtime subscriptions. Used database triggers to prevent overselling and notify users of stock changes instantly.",
      },
      {
        title: "Payment Processing Security",
        description:
          "Needed to handle sensitive payment information securely while maintaining a smooth checkout experience.",
        solution:
          "Integrated Stripe Checkout with webhook verification. All payment data stays on Stripe's servers, and we only store payment intent IDs and order status.",
      },
      {
        title: "Performance at Scale",
        description:
          "Initial load times were slow with large product catalogs affecting conversion rates.",
        solution:
          "Implemented incremental static regeneration (ISR) for product pages, image optimization with Next.js Image, and database query optimization with proper indexing.",
      },
    ],
    results: [
      { metric: "Page Load Time", value: "1.2s" },
      { metric: "Conversion Rate", value: "+45%" },
      { metric: "Cost Reduction", value: "60%" },
    ],
    timeline: "3 months",
    role: "Full-stack Developer",
  },
  {
    id: "2",
    title: "SaaS Analytics Dashboard",
    description:
      "Developed a comprehensive analytics dashboard for tracking user behavior and business metrics.",
    problem:
      "Companies struggled to visualize complex data and make data-driven decisions quickly. Existing analytics tools were either too complex or lacked customization options.",
    solution:
      "Created a customizable analytics dashboard with real-time data visualization, custom report generation, and automated insights. The platform processes millions of events daily with sub-second query times.",
    techStack: ["Next.js", "PostgreSQL", "Recharts", "React Query", "shadcn/ui"],
    slug: "saas-analytics-dashboard",
    featured: true,
    architecture: {
      overview:
        "Leverages Next.js for the frontend with React Query for efficient data fetching and caching. PostgreSQL with materialized views handles complex aggregations. Recharts provides interactive visualizations.",
      components: [
        "Next.js App Router with streaming for progressive loading",
        "PostgreSQL with TimescaleDB for time-series data",
        "Materialized views for pre-computed analytics",
        "React Query for optimistic updates and cache management",
        "Recharts for interactive data visualization",
        "Web Workers for heavy computation offloading",
      ],
    },
    challenges: [
      {
        title: "Query Performance",
        description:
          "Complex analytics queries were taking 10+ seconds, making the dashboard unusable.",
        solution:
          "Implemented materialized views that refresh every 5 minutes, added proper database indexes, and used query result caching with React Query. Reduced query times to under 500ms.",
      },
      {
        title: "Real-time Updates",
        description: "Users needed to see live data without constant page refreshes.",
        solution:
          "Implemented polling with React Query's refetch intervals and WebSocket connections for critical metrics. Optimized to only update changed data points.",
      },
      {
        title: "Data Export at Scale",
        description: "Exporting large datasets was causing memory issues and timeouts.",
        solution:
          "Built a streaming CSV export using Next.js API routes with chunked responses. Large exports are processed in the background with email notification.",
      },
    ],
    results: [
      { metric: "Query Speed", value: "500ms avg" },
      { metric: "User Engagement", value: "+120%" },
      { metric: "Data Processing", value: "5M events/day" },
    ],
    timeline: "4 months",
    role: "Lead Developer",
  },
  {
    id: "3",
    title: "Team Collaboration Tool",
    description:
      "Created a real-time collaboration platform with chat, file sharing, and project management.",
    problem:
      "Remote teams needed a unified space to communicate and manage projects efficiently. Switching between multiple tools reduced productivity and caused information silos.",
    solution:
      "Built an all-in-one collaboration platform with real-time messaging, file sharing, task management, and video calls. Teams reported 40% improvement in project delivery times.",
    techStack: ["Next.js", "Supabase Realtime", "WebSockets", "TypeScript"],
    slug: "team-collaboration-tool",
    architecture: {
      overview:
        "Real-time architecture powered by Supabase Realtime for instant message delivery. File storage uses Supabase Storage with CDN distribution. WebRTC integration for video calls.",
      components: [
        "Supabase Realtime for instant message synchronization",
        "Supabase Storage for file uploads with automatic CDN",
        "WebRTC for peer-to-peer video calls",
        "Optimistic UI updates for instant feedback",
        "Service Workers for offline message queuing",
        "PostgreSQL full-text search for message history",
      ],
    },
    challenges: [
      {
        title: "Message Delivery Reliability",
        description: "Messages were occasionally lost during network interruptions.",
        solution:
          "Implemented a message queue with retry logic and optimistic updates. Messages are stored locally and synced when connection is restored.",
      },
      {
        title: "Scaling Real-time Connections",
        description: "Server struggled with 1000+ concurrent WebSocket connections.",
        solution:
          "Leveraged Supabase Realtime's connection pooling and implemented presence channels for efficient state management. Added connection health monitoring.",
      },
      {
        title: "File Upload Performance",
        description: "Large file uploads were blocking the UI and failing frequently.",
        solution:
          "Implemented chunked uploads with resumable capability, progress tracking, and background processing. Added client-side file compression.",
      },
    ],
    results: [
      { metric: "Message Delivery", value: "99.9%" },
      { metric: "Project Delivery", value: "+40%" },
      { metric: "Tool Consolidation", value: "5 to 1" },
    ],
    timeline: "5 months",
    role: "Full-stack Developer",
  },
]
