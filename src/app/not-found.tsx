import Link from "next/link"

export default function NotFound() {
  return (
    <div className="section-padding">
      <div className="container-tight flex min-h-[50vh] flex-col items-center justify-center text-center">
        <p className="text-primary mb-4 text-sm font-medium uppercase tracking-wider">404</p>
        <h1 className="mb-4 text-4xl font-bold">Page not found</h1>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-medium transition-colors"
        >
          Go home
        </Link>
      </div>
    </div>
  )
}
