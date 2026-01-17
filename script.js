let isLogin = true;

function toggleForm() {
  isLogin = !isLogin;

  document.getElementById("title").innerText =
    isLogin ? "Entrar na Atlaspay" : "Criar conta na Atlaspay";

  document.getElementById("extra-field").style.display =
    isLogin ? "none" : "block";

  document.getElementById("toggle-text").innerText =
    isLogin ? "Não tem conta?" : "Já tem conta?";
}
