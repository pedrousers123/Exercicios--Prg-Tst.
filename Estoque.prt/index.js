const servico = require("./produtoService");


console.log(servico.listarProdutos());


servico.buscarProduto(1);


servico.cadastrarProduto({
    id: 3,
    nome: "Monitor",
    preco: 800,
    estoque: 10
});


servico.alterarProduto(3, {
    id: 3,
    nome: "Monitor Gamer",
    preco: 1200,
    estoque: 8
});


 servico.removerProduto(2);


console.log(servico.listarProdutos());