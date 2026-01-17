let cadastro = true;

function toggle() {
  cadastro = !cadastro;

  document.getElementById("title").innerText =
    cadastro ? "Crie sua conta" : "Acesse sua conta";

  document.getElementById("subtitle").innerText =
    cadastro ? "Informe seus dados para continuar." : "Entre com seus dados.";

  document.getElementById("name").style.display =
    cadastro ? "block" : "none";
}
