// Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
// deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
// deles estão fora do intervalo, escrevendo estas informações.

function analisarVetor(vetor) {
  let dentro = 0;
  let fora = 0;

  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] >= 10 && vetor[i] <= 20) {
      dentro++;
    } else {
      fora++;
    }
  }

  console.log(`Números dentro do intervalo [10, 20]: ${dentro}`);
  console.log(`Números fora do intervalo [10,20] ${fora}`);
}
const numeros = [10, 11, 12, 13, 14, 15, 20, 21, 32, 35, 50, 51, 55, 60];
analisarVetor(numeros);
console.log("###############");





function observarIntervalo(vetor) {
  qtdNumerosNoIntervalo = 0;
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] >= 10 && vetor[i] <= 20) {
      qtdNumerosNoIntervalo++;
    }
  }
  return `${qtdNumerosNoIntervalo} números dentro do intervalo.`;
}

vetor = [7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21];

console.log(observarIntervalo(vetor));
