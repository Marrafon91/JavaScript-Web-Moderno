// Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor 
// e imprime a quantidade no console. 

const numeros = [10, 5, -7, 3, -1, 3, -11, -20, 6, 9];
let negativo = numeros.filter(num => num < 0);

console.log(`Os Números negativos são: ${negativo}`)
console.log("#################");

function numerosNegativos (vetor) {
    let qtdNegativos = 0
    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] < 0) {
            qtdNegativos++
        }
    }
    return qtdNegativos
}

vetor =  [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]

console.log(numerosNegativos(vetor))