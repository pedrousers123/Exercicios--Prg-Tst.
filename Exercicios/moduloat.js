import { somar } from "./somar.js";
import { subtrair } from "./subtrair.js";
import { multiplicar } from "./multiplicar.js";
import { dividir } from "./dividir.js";
import { validar } from "./validar.js";

let a = 10;
let b = 5;

if (validar(a, b)) {

    console.log("Soma:", somar(a, b));
    console.log("Subtração:", subtrair(a, b));
    console.log("Multiplicação:", multiplicar(a, b));
    console.log("Divisão:", dividir(a, b));

} else {

    console.log("Digite apenas números.");

}