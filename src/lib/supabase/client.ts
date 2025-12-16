import { createClient } from "@supabase/supabase-js"

/**
 * Creates a Supabase client for client-side operations
 * Use this in Client Components and client-side code
 * 
 * @example
 * ```ts
 * 'use client'
 * 
 * import { createBrowserClient } from "@/lib/supabase/client"
 * 
 * export function MyComponent() {
 *   const supabase = createBrowserClient()
 *   
 *   async function handleSubmit() {
 *     const { data, error } = await supabase.from('table').insert({...})
 *   }
 *   
 *   return <form onSubmit={handleSubmit}>...</form>
 * }
 * ```
 */
export function createBrowserClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Missing Supabase environment variables. Please check your .env.local file."
    )
  }

  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
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

