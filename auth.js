import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// 🔑 COLE AQUI OS DADOS DO SEU SUPABASE
const supabaseUrl = 'https://vkfuvijagxwkmuposbya.supabase.co'
const supabaseAnonKey = 'const supabaseKey = process.env.SUPABASE_KEY
  email: 'someone@email.com',
  password: 'NZhJDpVUycblxRxGfVEv'
})'

// ✅ CLIENTE CONECTADO
export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
)
