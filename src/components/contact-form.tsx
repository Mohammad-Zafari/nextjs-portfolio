"use client"

import * as React from "react"
import { Loader2, CheckCircle2, AlertCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

interface FormData {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

type FormStatus = "idle" | "loading" | "success" | "error"

export function ContactForm() {
  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = React.useState<FormErrors>({})
  const [status, setStatus] = React.useState<FormStatus>("idle")
  const [errorMessage, setErrorMessage] = React.useState("")

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})
    setErrorMessage("")

    if (!validateForm()) return

    setStatus("loading")

    try {
      // TODO: Replace with Supabase integration
      await new Promise((resolve) => setTimeout(resolve, 1500))

      if (Math.random() > 0.1) {
        setStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      setStatus("error")
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again."
      )
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="mb-4 rounded-full bg-green-500/10 p-4">
          <CheckCircle2 className="h-8 w-8 text-green-500" />
        </div>
        <h3 className="mb-2 text-xl font-semibold">Message sent!</h3>
        <p className="text-muted-foreground mb-6">
          Thanks for reaching out. I'll get back to you soon.
        </p>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
          disabled={status === "loading"}
          className={cn(
            "h-12 rounded-xl",
            errors.name && "border-destructive focus-visible:ring-destructive"
          )}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="text-destructive text-sm">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="john@example.com"
          value={formData.email}
          onChange={handleChange}
          disabled={status === "loading"}
          className={cn(
            "h-12 rounded-xl",
            errors.email && "border-destructive focus-visible:ring-destructive"
          )}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-destructive text-sm">
            {errors.email}
          </p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell me about your project..."
          value={formData.message}
          onChange={handleChange}
          disabled={status === "loading"}
          rows={5}
          className={cn(
            "resize-none rounded-xl",
            errors.message && "border-destructive focus-visible:ring-destructive"
          )}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-destructive text-sm">
            {errors.message}
          </p>
        )}
      </div>

      {/* Error message */}
      {status === "error" && (
        <div className="border-destructive/20 bg-destructive/5 flex items-start gap-3 rounded-xl border p-4">
          <AlertCircle className="text-destructive mt-0.5 h-5 w-5 flex-shrink-0" />
          <div>
            <p className="text-destructive font-medium">Failed to send</p>
            <p className="text-destructive/80 text-sm">{errorMessage}</p>
          </div>
        </div>
      )}

      {/* Submit */}
      <Button
        type="submit"
        size="lg"
        className="h-12 w-full gap-2 rounded-xl"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send message
            <Send className="h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  )
}
