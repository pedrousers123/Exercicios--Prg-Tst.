import readline from "node:readline/promises";
import { stdin, stdout } from "node:process";

const rl = readline.createInterface({
    input: stdin,
    output: stdout
});

try {

    let nome = await rl.question("Digite seu nome: ");

    let nota1 = Number(await rl.question("Digite a nota 1: "));
    let nota2 = Number(await rl.question("Digite a nota 2: "));
    let nota3 = Number(await rl.question("Digite a nota 3: "));

    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {

        console.log("Nota inválida!");

    } else {

        let maior = Math.max(nota1, nota2, nota3);
        let menor = Math.min(nota1, nota2, nota3);
        let media = (nota1 + nota2 + nota3) / 3;

        console.log("Nome:", nome);
        console.log("Maior nota:", maior);
        console.log("Menor nota:", menor);
        console.log("Média:", media);
    }

} catch {
    console.log("Erro!");
}

rl.close();