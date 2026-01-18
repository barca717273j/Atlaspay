const tabRegister = document.getElementById('tab-register');
const tabLogin = document.getElementById('tab-login');
const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');
const password = document.getElementById('password');
const strength = document.getElementById('strength');

tabRegister.onclick = () => {
  tabRegister.classList.add('active');
  tabLogin.classList.remove('active');
  registerForm.classList.add('active');
  loginForm.classList.remove('active');
};

tabLogin.onclick = () => {
  tabLogin.classList.add('active');
  tabRegister.classList.remove('active');
  loginForm.classList.add('active');
  registerForm.classList.remove('active');
};

password.oninput = () => {
  if (password.value.length < 6) {
    strength.innerText = 'Senha fraca';
  } else if (password.value.length < 10) {
    strength.innerText = 'Senha média';
  } else {
    strength.innerText = 'Senha forte';
  }
};
