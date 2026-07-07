function estatisticas(...numeros) {

    let soma = 0;
    let maior = numeros[0];
    let menor = numeros[0];

    for (let i = 0; i < numeros.length; i++) {

        soma = soma + numeros[i];

        if (numeros[i] > maior) {
            maior = numeros[i];
        }

        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }

    let media = soma / numeros.length;

    console.log("Maior valor:", maior);
    console.log("Menor valor:", menor);
    console.log("Média:", media);
    console.log("Soma total:", soma);
}

estatisticas(5, 8, 10, 3, 7);
