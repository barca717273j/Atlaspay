const password = document.getElementById("password");
const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");
const terms = document.getElementById("terms");
const registerBtn = document.getElementById("registerBtn");

password.addEventListener("input", () => {
  const val = password.value;
  let strength = 0;

  if (val.length >= 6) strength++;
  if (/[A-Z]/.test(val)) strength++;
  if (/[0-9]/.test(val)) strength++;
  if (/[^A-Za-z0-9]/.test(val)) strength++;

  if (strength <= 1) {
    strengthBar.style.width = "33%";
    strengthBar.style.background = "#e53935";
    strengthText.textContent = "Senha fraca";
  } else if (strength === 2 || strength === 3) {
    strengthBar.style.width = "66%";
    strengthBar.style.background = "#f9a825";
    strengthText.textContent = "Senha média";
  } else {
    strengthBar.style.width = "100%";
    strengthBar.style.background = "#43a047";
    strengthText.textContent = "Senha forte";
  }

  validate();
});

terms.addEventListener("change", validate);

function validate() {
  registerBtn.disabled = !(password.value.length >= 6 && terms.checked);
}

function toggleForms() {
  document.getElementById("registerForm").classList.toggle("active");
  document.getElementById("loginForm").classList.toggle("active");
}
