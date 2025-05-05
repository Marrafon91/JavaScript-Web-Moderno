// Adiciona um método personalizado 'filter2' ao protótipo de Array
Array.prototype.filter2 = function(callback) {
    const newArray = [] // Novo array para armazenar os itens que passam no filtro

    for (let i = 0; i < this.length; i++) {
        // Executa a função de callback. Se retornar true, o item é adicionado ao novo array
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }

    return newArray // Retorna o novo array com os itens filtrados
}

// Array de objetos, cada um representando um produto com nome, preço e se é frágil
const produtos = [
    {nome: "Notebook", preco: 2499, fragil: true},
    {nome: "iPad Pro", preco: 4199, fragil: true},
    {nome: "Copo de Vidro", preco: 12.49, fragil: true},
    {nome: "Copo de Plastico", preco: 18.99, fragil: false}
]

// Função que retorna true se o produto for caro (preço >= 2000)
const produtoCaro = produto => produto.preco >= 2000

// Função que retorna true se o produto for frágil
const produtoFragil = produto => produto.fragil

// Aplica os dois filtros: primeiro filtra os caros, depois entre os caros filtra os frágeis
console.log(produtos.filter2(produtoCaro).filter2(produtoFragil))
