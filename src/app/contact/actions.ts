"use server"

import type { ContactMessageInsert } from "@/types"
import { sendContactEmail } from "@/lib/email"

interface SubmitContactFormResult {
  success: boolean
  error?: string
}

/**
 * Server action to submit contact form messages to Supabase
 * Validates input and inserts into contact_messages table
 */
export async function submitContactForm(
  formData: ContactMessageInsert
): Promise<SubmitContactFormResult> {
  try {
    // Validate inputs
    const { name, email, message } = formData

    if (!name?.trim()) {
      return { success: false, error: "Name is required" }
    }

    if (name.trim().length < 2) {
      return { success: false, error: "Name must be at least 2 characters" }
    }

    if (!email?.trim()) {
      return { success: false, error: "Email is required" }
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return { success: false, error: "Please enter a valid email address" }
    }

    if (!message?.trim()) {
      return { success: false, error: "Message is required" }
    }

    if (message.trim().length < 10) {
      return { success: false, error: "Message must be at least 10 characters" }
    }

    // Create Supabase client using dynamic import to avoid bundling issues
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    // Use service role key for server-side operations to bypass RLS
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseKey) {
      console.error("Missing Supabase configuration:", {
        hasUrl: !!supabaseUrl,
        hasKey: !!supabaseKey,
      })
      return {
        success: false,
        error: "Server configuration error. Please contact me directly via email at my.mohammad.zafari@gmail.com",
      }
    }

    // Dynamic import to prevent webpack from bundling Supabase for client
    const { createClient } = await import("@supabase/supabase-js")
    const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    })

    // Insert contact message
    const { data, error } = await supabase
      .from("contact_messages")
      .insert({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        message: message.trim(),
      })
      .select()
      .single()

    if (error) {
      console.error("Supabase error:", error)
      return {
        success: false,
        error: "Failed to send message. Please try again or contact me directly via email.",
      }
    }

    // Send email notification (don't fail if email fails - message is already saved)
    try {
      await sendContactEmail({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      })
    } catch (emailError) {
      // Log but don't fail - message is already saved to database
      console.error("Email notification failed:", emailError)
    }

    return { success: true }
  } catch (error) {
    console.error("Unexpected error:", error)
    return {
      success: false,
      error: "An unexpected error occurred. Please try again later.",
    }
  }
}

