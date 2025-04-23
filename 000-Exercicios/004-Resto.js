// Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
// e o resto da divisão destes dois valores.

const dividir = (dividendo, divisor) => {
  const divisao = dividendo / divisor;
  const resto = dividendo % divisor;

  console.log(`Divisão = ${divisao.toFixed(2)}`);
  console.log(`Resto = ${resto}`);
};

dividir(10, 3);
console.log("##########");

function divisao (dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo/divisor));
    console.log(`Resto: ${dividendo % divisor}`)
}

divisao(11, 4)
