const contador = document.querySelector("#contador");

const Aumentar = document.querySelector("#Aumentar");
const Diminuir = document.querySelector("#Diminuir");
const Resetar = document.querySelector("#Resetar");

let i = 0;

Aumentar.addEventListener("click", () => {
    i = i + 1;
    contador.innerHTML = i;
});

Diminuir.addEventListener("click", () => {
    i = i - 1;
    contador.innerHTML = i;
});

Resetar.addEventListener("click", () => {
    i = 0;
    contador.innerHTML = i;
});
