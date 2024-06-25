// let numerosArray = [2, 5, 8, 14, 9];

// let somaArray = numerosArray.reduce((total, num) => total + num, 0);

// console.log(somaArray);



// let paresArray = numerosArray.filter( n => {
//     return n % 2 == 0
// });

// console.log(paresArray);


// let arrayQuadrado = numerosArray.map( n => {
//     return n ** 2
// });

// console.log(arrayQuadrado);

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

}

let produto1 = new Produto("manteiga", 3, 5);
console.log(produto1.quantidade)

produto1.vender(3);

console.log(produto1.quantidade)




// Crie um método para a classe Produto chamado de Vender().

// Este método deve receber como parâmetro a quantidade vendida e deve reduzir (deduzir) da quantidade do produto. 
// Porém, para ser possível essa venda a quantidade vendida não pode ser maior que a quantidade disponível.

// Caso não haja quantidade suficiente, exiba uma mensagem de “Estoque insuficiente”.


