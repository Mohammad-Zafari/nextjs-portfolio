import "server-only"

import { createClient } from "@supabase/supabase-js"

/**
 * Creates a Supabase client for server-side operations
 * Use this in Server Components, Server Actions, and Route Handlers
 * 
 * @example
 * ```ts
 * import { createServerClient } from "@/lib/supabase/server"
 * 
 * export async function GET() {
 *   const supabase = createServerClient()
 *   const { data, error } = await supabase.from('table').select()
 *   return Response.json({ data })
 * }
 * ```
 */
export function createServerClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Missing Supabase environment variables. Please check your .env.local file."
    )
  }

  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
    },
  })
}

/**
 * Helper to check if Supabase is properly configured
 */
export function isSupabaseConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )
}

