import { supabase } from './auth.js'

const { data } = await supabase.auth.getUser()

if (data?.user) {
  document.getElementById('userEmail').textContent = data.user.email
}
