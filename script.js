// Seleciona os elementos da tela
const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");
const ajudaBtn = document.getElementById("ajudaBtn");
const cadastroLink = document.getElementById("cadastroLink");
const mensagem = document.getElementById("mensagem");

// Função de login
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const senha = senhaInput.value;

    if (email === "" || senha === "") {
        mensagem.textContent = "Preencha todos os campos.";
        return;
    }

    mensagem.textContent =
        "Formulário preenchido! O login ainda precisa ser conectado ao sistema.";
});

// Botão de ajuda
ajudaBtn.addEventListener("click", function() {
    mensagem.textContent =
        "Olá! 💙 Como podemos ajudar você? Peça ajuda a alguém de confiança para acessar o sistema.";
});

// Link de cadastro
cadastroLink.addEventListener("click", function(event) {
    event.preventDefault();

    mensagem.textContent =
        "O cadastro estará disponível em breve!";
});