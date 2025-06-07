// Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
//  Exemplos:
// somarNumeros([10, 10, 10])  retornará 30
// somarNumeros([15, 15, 15, 15])  retornará 60

somarNumeros = (numeros) => {
  let soma = numeros.reduce(function (numero1, numero2) {
    return numero1 + numero2;
  }, 0);

  return soma;
};

console.log(somarNumeros([10, 10, 10]));
console.log(somarNumeros([15, 15, 15, 15]));
console.log(somarNumeros([30, 30, 30, 30]));
