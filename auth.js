import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// 🔑 COLE AQUI OS DADOS DO SEU SUPABASE
const supabaseUrl = 'https://vkfuvijagxwkmuposbya.supabase.co'
const supabaseAnonKey = 'let { data, error } = await supabase.auth.signUp({
  email: 'someone@email.com',
  password: 'NZhJDpVUycblxRxGfVEv'
})'

// ✅ CLIENTE CONECTADO
export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
)
