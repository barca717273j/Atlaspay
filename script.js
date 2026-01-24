<script type="module">
import { supabase } from './auth.js'

async function criarConta() {
  const email = document.getElementById('email').value
  const senha = document.getElementById('senha').value

  if (!email || !senha) {
    alert('Preencha todos os campos')
    return
  }

  const { error } = await supabase.auth.signUp({
    email: email,
    password: senha
  })

  if (error) {
    alert(error.message)
  } else {
    alert('Conta criada com sucesso!')
  }
}

window.criarConta = criarConta
</script>
