// Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
// multiplicação deles. Porém, não utilize o operador de mutiplicação.

multiplicar = (num1, num2) => {
  return Math.imul(num1, num2);
};

console.log(multiplicar(5, 5));
console.log(multiplicar(0, 7));
console.log('############')

function multiplicar1(numeroA, numeroB) {
  let resultado = 0;
  for (let i = 0; i < numeroB; i++) resultado += numeroA;
  return resultado;
}

console.log(multiplicar1(5, 5));
console.log(multiplicar1(0, 7));
