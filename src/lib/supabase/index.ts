/**
 * Supabase Client Exports
 * 
 * Import from this module for clean, organized access to Supabase clients
 */

export { createBrowserClient, isSupabaseConfigured } from "./client"
export { createServerClient, isSupabaseConfigured as isSupabaseConfiguredServer } from "./server"
export type { SupabaseClient } from "@supabase/supabase-js"

