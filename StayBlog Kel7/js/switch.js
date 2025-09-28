const loginForm = document.querySelector(".right2");
const registerForm = document.querySelector(".right");
const toLogin = document.getElementById("toLogin");
const toRegister = document.getElementById("toRegister");

toLogin.addEventListener("click", () => {
  registerForm.classList.remove("active");
  loginForm.classList.add("active");
});

toRegister.addEventListener("click", () => {
  loginForm.classList.remove("active");
  registerForm.classList.add("active");
});