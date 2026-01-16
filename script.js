const tabRegister = document.getElementById("tab-register");
const tabLogin = document.getElementById("tab-login");

const registerForm = document.getElementById("register-form");
const loginForm = document.getElementById("login-form");

tabRegister.onclick = () => {
  tabRegister.classList.add("active");
  tabLogin.classList.remove("active");
  registerForm.classList.add("active");
  loginForm.classList.remove("active");
};

tabLogin.onclick = () => {
  tabLogin.classList.add("active");
  tabRegister.classList.remove("active");
  loginForm.classList.add("active");
  registerForm.classList.remove("active");
};

// BARRA DE FORÇA DE SENHA
const password = document.getElementById("password");
const strength = document.getElementById("strength");

password.addEventListener("input", () => {
  let score = 0;
  const val = password.value;

  if (val.length >= 8) score++;
  if (/[A-Z]/.test(val)) score++;
  if (/[0-9]/.test(val)) score++;
  if (/[^A-Za-z0-9]/.test(val)) score++;

  strength.style.width = score * 25 + "%";
  strength.style.background =
    score <= 1 ? "red" :
    score == 2 ? "orange" :
    score == 3 ? "#4da3ff" :
    "lime";
});
