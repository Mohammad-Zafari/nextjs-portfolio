// Global type definitions

/**
 * Database Types
 * These types match the Supabase database schema
 */

// Projects table
export interface Project {
  id: string
  title: string
  slug: string
  description: string
  tech_stack: string[]
  created_at: string
  updated_at: string
}

// Contact messages table
export interface ContactMessage {
  id: string
  name: string
  email: string
  message: string
  created_at: string
}

// Insert types (without auto-generated fields)
export type ProjectInsert = Omit<Project, "id" | "created_at" | "updated_at">

export type ContactMessageInsert = Omit<ContactMessage, "id" | "created_at">
