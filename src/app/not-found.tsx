import Link from "next/link"

export default function NotFound() {
  return (
    <div className="section-padding">
      <div className="container-tight flex min-h-[50vh] flex-col items-center justify-center text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary">404</p>
        <h1 className="mb-4 text-4xl font-bold">Page not found</h1>
        <p className="mb-8 text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Go home
        </Link>
      </div>
    </div>
  )
}
