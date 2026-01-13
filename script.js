function toggle() {
  document.getElementById("signup").classList.toggle("hidden");
  document.getElementById("login").classList.toggle("hidden");
}

const passwordInput = document.getElementById("signupPassword");
const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");

if (passwordInput) {
  passwordInput.addEventListener("input", () => {
    const value = passwordInput.value;
    let strength = 0;

    if (value.length >= 6) strength++;
    if (/[A-Z]/.test(value)) strength++;
    if (/[0-9]/.test(value)) strength++;
    if (/[^A-Za-z0-9]/.test(value)) strength++;

    if (strength <= 1) {
      strengthBar.style.width = "33%";
      strengthBar.style.background = "red";
      strengthText.textContent = "Senha fraca";
      strengthText.style.color = "red";
    } else if (strength === 2 || strength === 3) {
      strengthBar.style.width = "66%";
      strengthBar.style.background = "orange";
      strengthText.textContent = "Senha média";
      strengthText.style.color = "orange";
    } else {
      strengthBar.style.width = "100%";
      strengthBar.style.background = "green";
      strengthText.textContent = "Senha forte";
      strengthText.style.color = "green";
    }
  });
}
