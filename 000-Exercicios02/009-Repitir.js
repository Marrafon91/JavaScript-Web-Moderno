// Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que
// o segundo será o número de vezes que haverá repetição. Um array será retornado.

repitir = (elemento, quantidade) => {
  let resultado = [];

  for (let i = 0; i < quantidade; i++) {
    resultado.push(elemento);
  }
  return resultado;
};

console.log(repitir(1, 3));
console.log(repitir("Guilherme", 2));
console.log(repitir(7, 5));
