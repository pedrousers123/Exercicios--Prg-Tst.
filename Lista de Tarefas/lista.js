function adicionarTarefa() {

    let input = document.getElementById("tarefa");
    let texto = input.value.trim();

    if (texto === "") {
        console.log("Digite uma tarefa.");
        return;
    }

    const lista = document.getElementById("lista");

    const li = document.createElement("li");
    li.textContent = texto;

    const botao = document.createElement("button");
    botao.textContent = "Excluir";

    botao.onclick = function () {
        lista.removeChild(li);
        console.log("Tarefa removida com sucesso.");
    };

    li.appendChild(botao);
    lista.appendChild(li);

    input.value = "";
    input.focus();

    console.log("Tarefa adicionada com sucesso.");
}