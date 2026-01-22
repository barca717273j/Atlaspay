import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = 'https://vkfuvijagxwkmuposbya.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_qCYTPLr0Aw4red76wgcYFg_lWOEP_3o'

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
)
