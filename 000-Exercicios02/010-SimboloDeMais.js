// Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+"  na
// quantidade especificada no parâmetro.

simboloDeMais = (quantidade) => {
  let resultado = "";

  for (let i = 0; i < quantidade; i++) {
    resultado += "+";
  }
  return resultado;
};
console.log(simboloDeMais(5));
console.log(simboloDeMais(10));
console.log(simboloDeMais(20));
