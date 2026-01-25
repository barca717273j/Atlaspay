import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// 🔑 COLE AQUI OS DADOS DO SEU SUPABASE
const supabaseUrl = 'https://SUA_URL.supabase.co'
const supabaseAnonKey = 'SUA_ANON_KEY_AQUI'

// ✅ CLIENTE CONECTADO
export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
)
