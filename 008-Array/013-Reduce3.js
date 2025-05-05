// Adiciona um método personalizado 'reduce2' ao protótipo de Array
Array.prototype.reduce2 = function(callback, valorInicial) {
    // Se 'valorInicial' foi fornecido, começa do índice 0
    // Caso contrário, começa do índice 1 (porque o elemento 0 já será o acumulador inicial)
    const indiceInicial = valorInicial ? 0 : 1

    // Define o acumulador: usa 'valorInicial' se fornecido, ou o primeiro item do array
    let acumulador = valorInicial || this[0]

    // Percorre o array a partir do índice adequado
    for (let i = indiceInicial; i < this.length; i++) {
        // Atualiza o acumulador usando a função de callback
        acumulador = callback(acumulador, this[i], i, this)
    }

    // Retorna o valor final acumulado
    return acumulador
}

// Função que será usada como callback no reduce: soma dois valores
const soma = (total, valor) => total + valor

// Array de números
const nums = [1, 2, 3, 4, 5, 6]

// Usa a versão personalizada 'reduce2' para somar os valores do array,
// começando com o valor inicial 21
console.log(nums.reduce2(soma, 21))
