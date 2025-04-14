function fazerLogin() {
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();
  const mensagemErro = document.getElementById("mensagem-erro");

  mensagemErro.textContent = "";

  if (email === "" || senha === "") {
    mensagemErro.textContent = "Preencha todos os campos.";
    return;
  }

  const usuarioFalso = {
    email: "marcell@email.com",
    senha: "123456"
  };

  if (email === usuarioFalso.email && senha === usuarioFalso.senha) {
    alert("Login bem-sucedido!");
  } else {
    mensagemErro.textContent = "E-mail ou senha inválidos.";
  }
}
