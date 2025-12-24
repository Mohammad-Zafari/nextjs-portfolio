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
