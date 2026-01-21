import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = 'https://vkfuvijagxwkmuposbya.supabase.co'
const SUPABASE_ANON_KEY = 'grant select on table api.<your_table> to anon; grant select, insert, update, delete on table api.<your_table> to authenticated;'

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
)
