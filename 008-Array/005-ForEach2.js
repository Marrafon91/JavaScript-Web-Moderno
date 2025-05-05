// Criando um novo método chamado 'forEach2' na propriedade prototype do Array
Array.prototype.forEach2 = function(callback) {
    // 'this' se refere ao array em que forEach2 está sendo chamado
    for (let i = 0; i < this.length; i++) {
      // Chama a função de callback passando:
      // this[i] => o valor atual do array
      // i => o índice atual
      // this => o array completo
      callback(this[i], i, this)
    }
  }
  
  // Criando um array chamado 'aprovados'
  const aprovados = ['Agtha', 'Aldo', 'Daniel', 'Raquel']
  
  // Chamando o método personalizado 'forEach2' e passando uma função como argumento
  aprovados.forEach2(function(nome, indice) {
    // Exibe no console a posição (começando do 1) e o nome
    console.log(`${indice + 1}) ${nome}`)
  })
  