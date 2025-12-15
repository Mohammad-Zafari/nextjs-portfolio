import { Mail, MapPin, Clock, ArrowUpRight } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export const metadata = {
  title: "Contact",
  description:
    "Get in touch to discuss your project. Available for freelance work and SaaS development.",
}

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "my.mohammad.zafari@gmail.com",
    href: "mailto:my.mohammad.zafari@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Remote / Worldwide",
  },
  {
    icon: Clock,
    label: "Response time",
    value: "Within 24 hours",
  },
]

export default function ContactPage() {
  return (
    <div className="section-padding">
      <div className="container-tight">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary animate-in">
            Contact
          </p>
          <h1 className="animate-in-delay-1 text-4xl font-bold sm:text-5xl md:text-6xl">
            Let's build something <span className="gradient-text">great together</span>
          </h1>
          <p className="animate-in-delay-2 mt-6 text-lg text-muted-foreground">
            Have a project in mind? I'd love to hear about it. Send me a message and I'll get back
            to you as soon as possible.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact info */}
          <div className="space-y-8 lg:col-span-2">
            {/* Contact details */}
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="rounded-xl bg-primary/10 p-3 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-medium transition-colors hover:text-primary"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick links */}
            <div className="rounded-2xl border bg-card p-6">
              <h3 className="mb-4 font-semibold">Prefer another way?</h3>
              <div className="space-y-3">
                <a
                  href="https://www.linkedin.com/in/mohammad-zafari-0b417b2b4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-lg bg-muted/50 p-3 transition-colors hover:bg-muted"
                >
                  <span className="text-sm font-medium">LinkedIn</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </a>
                <a
                  href="https://github.com/Mohammad-Zafari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-lg bg-muted/50 p-3 transition-colors hover:bg-muted"
                >
                  <span className="text-sm font-medium">GitHub</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </a>
              </div>
            </div>

            {/* Tips */}
            <div className="rounded-2xl border border-dashed p-6">
              <h3 className="mb-3 font-semibold">What to include</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Brief project description</li>
                <li>• Timeline & budget (if available)</li>
                <li>• Any specific requirements</li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border bg-card p-6 md:p-8">
              <h2 className="mb-6 text-xl font-semibold">Send a message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
