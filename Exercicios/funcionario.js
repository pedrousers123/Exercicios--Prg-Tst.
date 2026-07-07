class Funcionario {
    constructor(nome, cargo, salario, departamento) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
        this.departamento = departamento;
    }

    promover(novoCargo) {
        this.cargo = novoCargo;
    }

    aumentarSalario(valor) {
        this.salario = this.salario + valor;
    }

    apresentar() {
        console.log("Nome: " + this.nome);
        console.log("Cargo: " + this.cargo);
        console.log("Salário: " + this.salario);
        console.log("Departamento: " + this.departamento);
    }
}

const funcionario = new Funcionario(
    "Pedro",
    "Estagiário",
    1500,
    "TI"
);


funcionario.apresentar();

funcionario.promover("Programador");

funcionario.aumentarSalario(500);

console.log("Depois das alterações:");
funcionario.apresentar();