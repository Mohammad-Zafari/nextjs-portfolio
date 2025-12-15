import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

// Create client with empty strings if env vars are not set (for development)
// This allows the app to run without Supabase configured initially
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Helper to check if Supabase is configured
export const isSupabaseConfigured = () => {
  return Boolean(supabaseUrl && supabaseAnonKey)
}
