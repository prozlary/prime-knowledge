// Painéis
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

window.addEventListener('DOMContentLoaded', () => {

  const signInSubmit = document.getElementById('signInSubmit');
  signInSubmit?.addEventListener('click', function (e) {
    e.preventDefault();
    const email = document.querySelector('.sign-in-container input[type="email"]').value.trim();
    const password = document.querySelector('.sign-in-container input[type="password"]').value.trim();

    if (!email || !password) {
      alert("Por favor, preencha todos os campos para entrar.");
      return;
    }

    window.location.href = "index.html";
  });

  const signUpSubmit = document.getElementById('signUpSubmit');
  signUpSubmit?.addEventListener('click', function (e) {
    e.preventDefault();
    const name = document.querySelector('.sign-up-container input[placeholder="Name"]').value.trim();
    const email = document.querySelector('.sign-up-container input[type="email"]').value.trim();
    const password = document.querySelector('.sign-up-container input[type="password"]').value.trim();

    if (!name || !email || !password) {
      alert("Por favor, preencha todos os campos para se cadastrar.");
      return;
    }

    alert("Conta criada com sucesso! Você já pode fazer login.");
    container.classList.remove("right-panel-active");
  });
});
