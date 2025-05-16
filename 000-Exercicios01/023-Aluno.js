// Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
// aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
// aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
// "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.

function mediaNota(codigo, nota1, nota2, nota3) {
  let maior = Math.max(nota1, nota2, nota3);
  let somaPesos = 4 + 3 + 3;
  let media;
  
  if (maior === nota1) {
    media = (nota1 * 4 + nota2 * 3 + nota3 * 3) / somaPesos;
  } else if (maior === nota2) {
    media = (nota1 * 3 + nota2 * 4 + nota3 * 3) / somaPesos;
  } else {
    media = (nota1 * 3 + nota2 * 3 + nota3 * 4) / somaPesos;
  }

  return {
    codigo: codigo,
    media: media,
    status: media >= 5 ? "APROVADO" : "REPROVADO",
  };
}

console.log(mediaNota(18, 3, 6, 9));
console.log(mediaNota(13, 7, 5, 7));
console.log(mediaNota(23, 1, 3, 2));
console.log(mediaNota(30, 10, 9, 10));
console.log("###############")

function calcularNotaFinal(codAluno, nota1, nota2, nota3){
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a,b) => a < b ? 1 : -1)

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3)/10
    console.log(`Código do Aluno: ${codAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)
}

calcularNotaFinal(123, 2.8, 6, 3.5)
