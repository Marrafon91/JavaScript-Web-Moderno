// Faça um algoritmo que calcule o fatorial de um número.
function fatorial(numero) {
  let resultado = 1;
  for (let i = 1; i <= numero; i++) {
    resultado *= i;
  }

  return resultado;
}

console.log(fatorial(5));
console.log(fatorial(3));
console.log(fatorial(7));
console.log("##########");

function fatorial(numero) {
  if (numero == 0) {
    return 1;
  } else {
    return numero * fatorial(numero - 1);
  }
}

console.log(fatorial(7));
