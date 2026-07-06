const fs = require("fs");

const arquivo = "produtos.json";

function listarProdutos() {
    try {
        const dados = fs.readFileSync(arquivo, "utf8");
        return JSON.parse(dados);
    } catch (erro) {
        console.log("Erro ao ler o arquivo.");
        return [];
    }
}

function buscarProduto(id) {
    const produtos = listarProdutos();

    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].id == id) {
            console.log(produtos[i]);
            return;
        }
    }

    console.log("Produto não encontrado.");
}

function cadastrarProduto(produto) {
    try {
        let produtos = listarProdutos();

        for (let i = 0; i < produtos.length; i++) {
            if (produtos[i].id == produto.id) {
                console.log("ID já existe.");
                return;
            }
        }

        if (produto.preco < 0 || produto.estoque < 0) {
            console.log("Preço ou estoque inválido.");
            return;
        }

        produtos.push(produto);

        fs.writeFileSync(arquivo, JSON.stringify(produtos, null, 2));

        console.log("Produto cadastrado!");
    } catch (erro) {
        console.log("Erro ao cadastrar.");
    }
}

function alterarProduto(id, novoProduto) {
    try {
        let produtos = listarProdutos();
        let encontrou = false;

        for (let i = 0; i < produtos.length; i++) {
            if (produtos[i].id == id) {
                produtos[i] = novoProduto;
                encontrou = true;
            }
        }

        if (!encontrou) {
            console.log("Produto não encontrado.");
            return;
        }

        fs.writeFileSync(arquivo, JSON.stringify(produtos, null, 2));

        console.log("Produto alterado!");
    } catch (erro) {
        console.log("Erro ao alterar.");
    }
}


function removerProduto(id) {
    try {
        let produtos = listarProdutos();
        let novosProdutos = [];
        let encontrou = false;

        for (let i = 0; i < produtos.length; i++) {
            if (produtos[i].id == id) {
                encontrou = true;
            } else {
                novosProdutos.push(produtos[i]);
            }
        }

        if (!encontrou) {
            console.log("Produto não encontrado.");
            return;
        }

        fs.writeFileSync(arquivo, JSON.stringify(novosProdutos, null, 2));

        console.log("Produto removido!");
    } catch (erro) {
        console.log("Erro ao remover.");
    }
}

module.exports = {
    listarProdutos,
    buscarProduto,
    cadastrarProduto,
    alterarProduto,
    removerProduto
};