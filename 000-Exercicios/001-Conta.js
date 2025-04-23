// Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
// multiplicação e divisão desses valores.

const soma = (x, y) => x + y;
const subtracao = (x, y) => x - y;
const multi = (x, y) => x * y;
const divisao = (x, y) => x / y;

console.log(soma(1, 2));
console.log(subtracao(1, 2));
console.log(multi(1, 2));
console.log(divisao(1, 2));
console.log("###############");

function calcularOperacoes(x, y) {
  console.log(x + y, x - y, x * y, x / y);
}

calcularOperacoes(1, 2);
