const numeros = [1, 5, 10, 15, 23, 35, 50];
let menor = Math.min(...numeros);
let maior = Math.max(...numeros);

console.log(`O menor número é ${menor}`);
console.log(`O maior número é ${maior}`);
console.log("##########");

function maiorMenor(vetor) {
  let maior;
  let menor;
  for (let i = 0; i < vetor.length; i++) {
    if (maior === undefined && menor === undefined) {
      maior = vetor[i];
      menor = vetor[i];
    } else {
      if (vetor[i] > maior) {
        maior = vetor[i];
      }
      if (vetor[i] < menor) {
        menor = vetor[i];
      }
    }
  }
  return [maior, menor];
}

vetor = [10, 5, 7, 3, 1, 3, 11, 20, 6, 9];

console.log(maiorMenor(vetor));
