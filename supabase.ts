import { createClient } from '@supabase/supabase-js'

// It's highly recommended to use environment variables for these
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://whxjskmopgipxzxfskbl.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_fW7xCqVd6yXV5GTT6ZO85A_n5Qr1jHf'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)