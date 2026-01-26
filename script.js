<script type="module">
import { supabase } from './auth.js'

const btn = document.getElementById('createBtn')

btn.addEventListener('click', async () => {
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  const { data, error } = await supabase.auth.signUp({
    email,
    password
  })

  if(error){
  toast(error.message)
}else{
  toast('Conta criada com sucesso ✅')
  setTimeout(() => {
    window.location.href = './dashboard.html'
  }, 1200)
}

})
</script>
