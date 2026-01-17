const password = document.getElementById("password");
const bars = document.querySelectorAll(".strength span");
const text = document.getElementById("strengthText");

password.addEventListener("input", () => {
  const val = password.value;
  bars.forEach(b => b.className = "");

  if (val.length === 0) {
    text.textContent = "";
    return;
  }

  if (val.length < 6) {
    bars[0].classList.add("active","red");
    text.textContent = "Senha fraca";
    text.style.color = "#ff3b3b";
  } else if (val.length < 10) {
    bars[0].classList.add("active","orange");
    bars[1].classList.add("active","orange");
    text.textContent = "Senha média";
    text.style.color = "#ff9800";
  } else {
    bars.forEach(b => b.classList.add("active","green"));
    text.textContent = "Senha forte";
    text.style.color = "#4caf50";
  }
});

const toggle = document.getElementById("toggle");
const btn = document.getElementById("submitBtn");
let login = false;

toggle.onclick = e => {
  e.preventDefault();
  login = !login;
  btn.textContent = login ? "Entrar" : "Criar conta";
  toggle.textContent = login
    ? "Não tem conta? Criar agora"
    : "Já tem conta? Entrar";
};
