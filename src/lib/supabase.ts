/**
 * Supabase Client Configuration
 * 
 * This module provides centralized access to Supabase clients for both
 * client-side and server-side operations in Next.js App Router.
 * 
 * Usage Guidelines:
 * 
 * 1. Server Components & Server Actions:
 *    - Use `createServerClient()` from './supabase/server'
 *    - Does not persist sessions
 *    - Runs on the server only
 * 
 * 2. Client Components:
 *    - Use `createBrowserClient()` from './supabase/client'
 *    - Persists sessions in browser
 *    - Auto-refreshes tokens
 * 
 * Environment Variables Required:
 * - NEXT_PUBLIC_SUPABASE_URL: Your Supabase project URL
 * - NEXT_PUBLIC_SUPABASE_ANON_KEY: Your Supabase anonymous key
 * 
 * @see https://supabase.com/docs/guides/auth/server-side/nextjs
 */

// Re-export client functions only (server functions should be imported directly)
export { createBrowserClient, isSupabaseConfigured as isSupabaseConfiguredClient } from "./supabase/client"

// Type exports for convenience
export type { SupabaseClient } from "@supabase/supabase-js"
