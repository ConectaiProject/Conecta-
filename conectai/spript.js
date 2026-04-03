const form = document.getElementById("form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Campos
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const mensagem = document.getElementById("mensagem");

  // Erros
  const erroNome = document.getElementById("erroNome");
  const erroEmail = document.getElementById("erroEmail");
  const erroMensagem = document.getElementById("erroMensagem");

  const sucesso = document.getElementById("sucesso");

  let valido = true;

  // Resetar mensagens
  erroNome.textContent = "";
  erroEmail.textContent = "";
  erroMensagem.textContent = "";
  sucesso.textContent = "";

  // Validação nome
  if (nome.value.trim() === "") {
    erroNome.textContent = "Nome é obrigatório";
    valido = false;
  }

  // Validação email
  if (email.value.trim() === "") {
    erroEmail.textContent = "Email é obrigatório";
    valido = false;
  } else if (!validarEmail(email.value)) {
    erroEmail.textContent = "Email inválido";
    valido = false;
  }

  // Validação mensagem
  if (mensagem.value.trim() === "") {
    erroMensagem.textContent = "Mensagem é obrigatória";
    valido = false;
  }

  // Se tudo estiver ok
  if (valido) {
    sucesso.textContent = "Mensagem enviada com sucesso! ✅";
    form.reset();
  }
});

// Função para validar e-mail
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}