// Operador ...rest(juntar)/spread(espalhar)
// Usar rest com parametro de função

// Usar spread com objeto
const funcionario = {nome: 'Guilherme', salario: 12348.99}
const clone = {ativo: true, ...funcionario}

console.log(clone)

// Usar spread com array
const grupoA = ['Joao', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)