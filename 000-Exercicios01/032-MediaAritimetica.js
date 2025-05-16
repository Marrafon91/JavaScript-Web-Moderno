// Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

function mediaAritimetica(vetor) {
  let soma = 0;

  for (let i = 0; i < vetor.length; i++) {
    soma += vetor[i];
  }

  let media = soma / vetor.length;

  console.log(`A média dos valores é: ${media}`);
}

const numeros = [10, 20, 30, 40, 50,];
mediaAritimetica(numeros);
console.log("######");

function mediaVetor (vetor) {
    let soma = 0
    for(let i=0; i<vetor.length; i++) {
        soma += vetor[i]
    }

    return soma/vetor.length
}

vetor = [1, 2, 3, 4, 5]

console.log(mediaVetor(vetor))