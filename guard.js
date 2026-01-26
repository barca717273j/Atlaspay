import { supabase } from './auth.js'

const { data } = await supabase.auth.getSession()

if (!data.session) {
  window.location.href = './index.html'
}
