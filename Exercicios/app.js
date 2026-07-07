let saldo = 1000;
let saque = 900;
try {
    if (saque > saldo) {
        throw new Error("Erro: Saldo insuficiente para realizar o saque.");
    }
        saldo -= saque;
        console.log("Erro: Saque realizado com sucesso!");
        console.log("Erro: Seu saldo atual é: R$ " + saldo);
        
    } catch (error) {
        console.error(error.message);
    }


