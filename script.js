//A validação do formulário com javascript é considerado um desafio extra, não é preciso fazer esta validação para realizar sua entrega
document.getElementById("contatoForm").addEventListener("submit", function(event) {
    // Impede o envio do formulário
    event.preventDefault();
    
    // Obtendo os valores dos campos
    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let assunto = document.getElementById("assunto").value.trim();
    let mensagem = document.getElementById("mensagem").value.trim();
    
    // Resetando a mensagem de erro
    let errorMessage = document.getElementById("formError");
    errorMessage.textContent = "";
    
    // Limpa os erros anteriores
    let campos = document.querySelectorAll("input, textarea");
    campos.forEach(campo => campo.classList.remove("error"));
    
    // Variável de controle
    let isValid = true;

    // Validação do nome (não pode ser vazio)
    if (nome === "") {
        errorMessage.textContent += "Por favor, preencha o campo nome.\n";
        document.getElementById("nome").classList.add("error");
        isValid = false;
    }

    // Validação do e-mail (precisa ser um e-mail válido)
    if (email === "" || !validateEmail(email)) {
        errorMessage.textContent += "Por favor, insira um e-mail válido.\n";
        document.getElementById("email").classList.add("error");
        isValid = false;
    }

    // Validação do assunto (não pode ser vazio)
    if (assunto === "") {
        errorMessage.textContent += "Por favor, preencha o campo assunto.\n";
        document.getElementById("assunto").classList.add("error");
        isValid = false;
    }

    // Validação da mensagem (não pode ser vazia)
    if (mensagem === "") {
        errorMessage.textContent += "Por favor, preencha o campo mensagem.\n";
        document.getElementById("mensagem").classList.add("error");
        isValid = false;
    }

    // Se todos os campos forem válidos, submeta o formulário
    if (isValid) {
        alert("Formulário enviado com sucesso!");
        // Aqui você pode proceder com o envio do formulário, por exemplo:
        // this.submit();
    }
});

// Função auxiliar para validar e-mails
function validateEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
