let numerosArray = [2, 5, 8, 14, 9];

let somaArray = numerosArray.reduce((total, num) => total + num, 0);

console.log(somaArray);



let paresArray = numerosArray.filter( n => {
    return n % 2 == 0
});

console.log(paresArray);


let arrayQuadrado = numerosArray.map( n => {
    return n ** 2
});

console.log(arrayQuadrado);

//CLASSE PRODUTO

class Produto {
    nome
    preco
    quantidade

    constructor(nome, preco, quantidade){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }


    vender(quantidadeVendida){
        if (quantidadeVendida >= this.quantidade) {
            console.log("Estoque insuficiente");
        }
        this.quantidade -= quantidadeVendida;
    }

    repor(quantidadeReposta){
        this.quantidade += quantidadeReposta;
    }

    mostrarEstoque(){
        console.log("O produto " + this.nome + " possui " + this.quantidade + " unidades disponíveis.");
    }

    atualizarEstoque(novoValor){
        this.preco = novoValor;
    }

}

let produto1 = new Produto("manteiga", 3, 5);

console.log("Quantidade inicial: " + produto1.quantidade);

produto1.vender(3);
console.log("Depois de vender: " + produto1.quantidade);

produto1.repor(8);
console.log("Depois de repor: " + produto1.quantidade);

produto1.mostrarEstoque();


produto1.atualizarEstoque(8);
console.log("Novo valor: " + produto1.preco);



// Crie um método chamada de AtualizarPreco dentro da classe Produto.

// Este método deve receber como parâmetro o novo valor do produto e atualizar o preço atual.
