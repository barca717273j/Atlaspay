const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");
const switchBtn = document.getElementById("switchBtn");
const switchText = document.getElementById("switchText");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");

const password = document.getElementById("password");
const strength = document.getElementById("strength");
const terms = document.getElementById("terms");
const registerBtn = document.getElementById("registerBtn");

let isRegister = true;

switchBtn.onclick = () => {
  isRegister = !isRegister;
  registerForm.classList.toggle("active");
  loginForm.classList.toggle("active");

  title.innerText = isRegister ? "Crie sua conta" : "Acesse sua conta";
  subtitle.innerText = isRegister
    ? "Informe seus dados para continuar."
    : "Entre com seus dados.";

  switchText.innerText = isRegister
    ? "Já possui uma conta na AtlasPay?"
    : "Ainda não tem conta?";

  switchBtn.innerText = isRegister ? "Acessar" : "Criar conta";
};

password.oninput = () => {
  if (password.value.length < 6) {
    strength.innerText = "Senha fraca";
    strength.style.color = "#dc2626";
  } else if (password.value.length < 10) {
    strength.innerText = "Senha média";
    strength.style.color = "#f59e0b";
  } else {
    strength.innerText = "Senha forte";
    strength.style.color = "#16a34a";
  }
};

terms.onchange = () => {
  registerBtn.disabled = !terms.checked;
};
