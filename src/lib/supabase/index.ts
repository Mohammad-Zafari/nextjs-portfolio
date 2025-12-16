/**
 * Supabase Client Exports
 * 
 * Import from this module for clean, organized access to Supabase clients
 * 
 * Note: Server functions should be imported directly from './server' to avoid bundling issues
 */

export { createBrowserClient, isSupabaseConfigured } from "./client"
export type { SupabaseClient } from "@supabase/supabase-js"

