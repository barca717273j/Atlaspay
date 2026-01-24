import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = 'https://vkfuvijagxwkmuposbya.supabase.co'
const SUPABASE_ANON_KEY = 'let { data, error } = await supabase.auth.signUp({
  email: 'someone@email.com',
  password: 'NZhJDpVUycblxRxGfVEv'
})'

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
)
