let a = 10;
let b = 5;

function soma(a, b) {
    if (typeof(a) != "number" || typeof(b) != "number") {
        throw new Error("Digite apenas numeros");
    }
    return a + b;
}

function sub(a, b) {
    if (typeof(a) != "number" || typeof(b) != "number") {
        throw new Error("Digite apenas numeros");
    }
    return a - b;
}

function mult(a, b) {
    if (typeof(a) != "number" || typeof(b) != "number") {
        throw new Error("Digite apenas numeros");
    }
    return a * b;
}

function div(a, b) {
    if (typeof(a) != "number" || typeof(b) != "number") {
        throw new Error("Digite apenas numeros");
    }

    if (b == 0) {
        throw new Error("Erro não pode dividir por zero.");
    }
    return a / b;
}

try {
    console.log("Soma:", soma(a, b));
    console.log("Subtração:", sub(a, b));
    console.log("Multiplicação:", mult(a, b));
    console.log("Divisão:", div(a, b));
} catch (erro) {
    console.log(erro.message);
}
