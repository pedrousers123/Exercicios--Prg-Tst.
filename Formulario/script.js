let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const data = document.getElementById("data").value;
    const area = document.getElementById("area").value;
    const mensagem = document.getElementById("mensagem").value;

    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Senha:", senha);
    console.log("Data:", data);
    console.log("Área:", area);
    console.log("Mensagem:", mensagem);

});
