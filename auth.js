import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://vkfuvijagxwkmuposbya.supabase.co'
const supabaseAnonKey = 'sb_publishable_qCYTPLr0Aw4red76wgcYFg_lWOEP_3o'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
