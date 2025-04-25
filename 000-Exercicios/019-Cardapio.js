// O cardápio de uma lanchonete é o seguinte: 
//  //--------------------------------------------------------------------------------//
//  |  | Código |              | Descrição do Produto |             |  Preço  |       |
//  |  |  100   |              | Cachorro Quente      |             | R$ 3,00 |       |
//  |  |  200   |              | Hambúrguer Simples   |             | R$ 4,00 |       |
//  |  |  300   |              | Cheeseburguer        |             | R$ 5,50 |       |
//  |  |  400   |              | Bauru                |             | R$ 7,50 |       |
//  |  |  500   |              | Refrigerante         |             | R$ 3,50 |       |
//  |  |  600   |              | Suco                 |             | R$ 2,80 |       |  
//  //--------------------------------------------------------------------------------//

// Implemente uma  função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor 
// a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o 
// comando switch. Crie um caso default para produto não existente.

function cardapioRestaurante(codigo, quantidade) {
    let preco;
    switch(codigo) {
        case 100:
            preco = 3.00;
            break;
        case 200:
            preco = 4.00;
            break;
        case 300:
            preco = 5.50;
            break;
        case 400:
            preco = 7.50;
            break;
        case 500:
            preco = 3.50;
            break;
        case 600:
            preco = 2.80;
            break;
        default:
            return "Produto não existente.";

    };

    let total = preco * quantidade;
    return `Total a pagar R$ ${total.toFixed(2).replace(".", ",")}.`;
};

console.log(cardapioRestaurante(100, 2));
console.log(cardapioRestaurante(200, 2));
console.log(cardapioRestaurante(300, 2));
console.log(cardapioRestaurante(400, 2));
console.log(cardapioRestaurante(500, 2));
console.log(cardapioRestaurante(600, 2));
console.log(cardapioRestaurante(700, 2));
console.log("###################")

function calcularVenda(codigoProduto, qtd) {
    switch (codigoProduto) {
        case 100:
            return qtd * 3
        case 200:
            return qtd * 4
        case 300:
            return qtd * 5.5
        case 400:
            return qtd * 7.5
        case 500:
            return qtd * 3.5
        case 600:
            return qtd * 2.8
        default:
            return 'Produto não existente.'
    }
}

console.log(calcularVenda(100, 2));
console.log(calcularVenda(200, 2));
console.log(calcularVenda(300, 2));
console.log(calcularVenda(400, 2));
console.log(calcularVenda(500, 2));
console.log(calcularVenda(600, 2));
console.log(calcularVenda(700, 2));
