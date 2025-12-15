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
    value: "hello@example.com",
    href: "mailto:hello@example.com",
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
          <p className="text-primary mb-4 text-sm font-medium uppercase tracking-wider animate-in">
            Contact
          </p>
          <h1 className="animate-in-delay-1 text-4xl font-bold sm:text-5xl md:text-6xl">
            Let's build something <span className="gradient-text">great together</span>
          </h1>
          <p className="animate-in-delay-2 text-muted-foreground mt-6 text-lg">
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
                  <div className="bg-primary/10 text-primary rounded-xl p-3">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="hover:text-primary font-medium transition-colors"
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
            <div className="bg-card rounded-2xl border p-6">
              <h3 className="mb-4 font-semibold">Prefer another way?</h3>
              <div className="space-y-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-muted/50 hover:bg-muted flex items-center justify-between rounded-lg p-3 transition-colors"
                >
                  <span className="text-sm font-medium">LinkedIn</span>
                  <ArrowUpRight className="text-muted-foreground h-4 w-4" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-muted/50 hover:bg-muted flex items-center justify-between rounded-lg p-3 transition-colors"
                >
                  <span className="text-sm font-medium">GitHub</span>
                  <ArrowUpRight className="text-muted-foreground h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Tips */}
            <div className="rounded-2xl border border-dashed p-6">
              <h3 className="mb-3 font-semibold">What to include</h3>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>• Brief project description</li>
                <li>• Timeline & budget (if available)</li>
                <li>• Any specific requirements</li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-card rounded-2xl border p-6 md:p-8">
              <h2 className="mb-6 text-xl font-semibold">Send a message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
