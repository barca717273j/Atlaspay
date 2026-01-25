<script>
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const pass = document.getElementById('password')
const confirm = document.getElementById('confirm')
const fill = document.getElementById('strengthFill')
const text = document.getElementById('strengthText')
const btn = document.getElementById('createBtn')
const terms = document.getElementById('terms')

function showError(input, show){
  const error = input.nextElementSibling
  input.classList.toggle('error', show)
  if(error) error.style.display = show ? 'block' : 'none'
}

function validar(){
  const okName = nameInput.value.trim()
  const okEmail = emailInput.value.trim()
  const okPass = pass.value.length >= 6
  const okConfirm = confirm.value && pass.value === confirm.value

  showError(nameInput, !okName)
  showError(emailInput, !okEmail)
  showError(confirm, confirm.value && !okConfirm)

  btn.disabled = !(okName && okEmail && okPass && okConfirm && terms.checked)
}

[nameInput, emailInput, pass, confirm].forEach(el => {
  el.addEventListener('input', validar)
})

terms.addEventListener('change', validar)

pass.addEventListener('input', () => {
  const v = pass.value
  if(v.length < 6){
    fill.style.width = '33%'
    fill.style.background = 'var(--red)'
    text.textContent = 'Senha fraca'
    text.style.color = 'var(--red)'
  } else if(/[A-Z]/.test(v) && /\d/.test(v)){
    fill.style.width = '100%'
    fill.style.background = 'var(--green)'
    text.textContent = 'Senha forte'
    text.style.color = 'var(--green)'
  } else {
    fill.style.width = '66%'
    fill.style.background = 'var(--orange)'
    text.textContent = 'Senha média'
    text.style.color = 'var(--orange)'
  }
})
</script>
