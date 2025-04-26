// Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número 
// inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada 
// elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se 
// o valor do elemento for maior que 5. 

function multiplicarPorNumero(vetor, numero) {
    return vetor.map(elemento => elemento * numero);
    
}

function multiplicarSeMaiorQueCinco(vetor, numero) {
    return vetor.map(elemento => {
        if (elemento > 5) {
            return elemento * numero;
        } else {
            return elemento;
        }
    });
}

console.log(multiplicarPorNumero([1, 2, 3, 4, 5], 2)); 
console.log(multiplicarSeMaiorQueCinco([1, 2, 3, 4, 5, 6], 2));
console.log("###################")

let vetor = [1, 2, 3, 4, 5]

function multiplicaVetor(vetor, multiplicador){
    let vetorResultado1 = []
    vetor.forEach(elemento => {
        vetorResultado1.push(elemento * multiplicador) 
    });

    return vetorResultado1
}

function multiplicaVetorSeMaiorQue5(vetor, multiplicador){
    let vetorResultado2 = []
    if(multiplicador < 5) return
    vetor.forEach(elemento => {
        vetorResultado2.push(elemento * multiplicador) 
    });

    return vetorResultado2
}

console.log(multiplicaVetor(vetor, 3))
console.log(multiplicaVetorSeMaiorQue5(vetor, 11))