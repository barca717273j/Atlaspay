import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = 'https://vkfuvijagxwkmuposbya.supabase.co'
const SUPABASE_ANON_KEY = 'vkfuvijagxwkmuposbya'

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
)
