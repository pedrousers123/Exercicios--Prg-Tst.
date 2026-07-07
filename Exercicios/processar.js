let a = 10;
let b = 5;

function soma(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    if (b == 0) {
        throw new Error("Não pode dividir por zero.");
    }
    return a / b;
}

function processar(a, b, callback) {
    if (typeof a != "number" || typeof b != "number") {
        throw new Error("Digite apenas números.");
    }

    return callback(a, b);
}

try {
    console.log("Soma:", processar(a, b, soma));
    console.log("Subtração:", processar(a, b, sub));
    console.log("Multiplicação:", processar(a, b, mult));
    console.log("Divisão:", processar(a, b, div));
} catch (erro) {
    console.log(erro.message);
}