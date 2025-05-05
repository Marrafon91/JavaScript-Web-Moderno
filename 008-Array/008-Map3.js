// Adiciona um método personalizado chamado 'map2' ao protótipo de Array
Array.prototype.map2 = function(callback) {
    const newArray = [] // Cria um novo array vazio que vai armazenar os resultados
    for (let i = 0; i < this.length; i++) {
        // Executa o callback para cada elemento, e adiciona o retorno no newArray
        newArray.push(callback(this[i], i, this))
    }
    return newArray // Retorna o novo array com os elementos transformados
}

// Array com strings em formato JSON, representando produtos
const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Função que transforma a string JSON em objeto JavaScript
const paraObjeto = json => JSON.parse(json)

// Função que extrai apenas o preço do objeto
const apenasPreco = produto => produto.preco

// Primeiro: transforma as strings em objetos com map2(paraObjeto)
// Depois: extrai apenas os preços com map2(apenasPreco)
const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)

// Exibe o array contendo apenas os preços
console.log(resultado)
