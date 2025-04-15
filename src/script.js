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

const botaoNovaTransacao = document.getElementById("abrirFormulario");
const formulario = document.getElementById("formularioTransacao");

botaoNovaTransacao.addEventListener("click", () => {
  if (formulario.style.display === "none") {
    formulario.style.display = "flex";
  } else {
    formulario.style.display = "none";
  }
});

const botaoCancelar = document.getElementById("cancelarFormulario");

botaoCancelar.addEventListener("click", () => {
  formulario.style.display = "none";
});

const botaoSalvar = document.getElementById("salvarTransacao");
const tabela = document.querySelector(".tabela-transacoes");

botaoSalvar.addEventListener("click", () => {
  const data = document.getElementById("data").value;
  const descricao = document.getElementById("descricao").value.trim();
  const categoria = document.getElementById("categoria").value;
  const valor = document.getElementById("valor").value;
  const tipo = document.querySelector(".botao-tipo.ativo").dataset.tipo;

  if (!data || !descricao || !valor) {
    alert("Preencha todos os campos.");
    return;
  }

  const novaLinha = document.createElement("div");
  novaLinha.classList.add("tabela-linha");

  novaLinha.innerHTML = `
    <span>${data}</span>
    <span>${descricao}</span>
    <span>${categoria}</span>
    <span class="${tipo}">${tipo.charAt(0).toUpperCase() + tipo.slice(1)}</span>
    <span>R$ ${parseFloat(valor).toFixed(2)}</span>
  `;

  tabela.appendChild(novaLinha);

  formulario.style.display = "none";

  // limpa o formulário
  document.getElementById("data").value = "";
  document.getElementById("descricao").value = "";
  document.getElementById("categoria").selectedIndex = 0;
  document.getElementById("valor").value = "";
});

const botoesTipo = document.querySelectorAll(".botao-tipo");

botoesTipo.forEach(botao => {
  botao.addEventListener("click", () => {
    // Remove classe 'ativo' de todos
    botoesTipo.forEach(b => b.classList.remove("ativo"));
    // Adiciona ao botão clicado
    botao.classList.add("ativo");
  });
});


