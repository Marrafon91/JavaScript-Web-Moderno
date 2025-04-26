// Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de 
// modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o 
// conceito B e de 9,0 a 10,0 o conceito A.
function atribuirConceitos(notas) {
    for (let i = 0; i < notas.length; i++) {
        let nota = notas[i];
        let conceito = '';

        if (nota >= 0 && nota <= 4.9) {
            conceito = 'D';
        } else if (nota >= 5.0 && nota <= 6.9) {
            conceito = 'C';
        } else if (nota >= 7.0 && nota <= 8.9) {
            conceito = 'B';
        } else if (nota >= 9.0 && nota <= 10.0) {
            conceito = 'A';
        } else {
            conceito = 'Nota inválida'; // Se a nota for fora do intervalo 0-10
        }

        console.log(`Nota: ${nota} - Conceito: ${conceito}`);
    }
}

let notasTeste = [3.5, 5.7, 7.8, 9.2, 11];
atribuirConceitos(notasTeste);
console.log("##########");

function conceituarNotas(notas) {
    let conceitos = []
    for(let i = 0; i < notas.length; i++) {
        if(notas[i]>=0 && notas[i]<=4.9){
            conceitos.push('D')
        } else if(notas[i]>=5 && notas[i]<=6.9) {
            conceitos.push('C')            
        } else if(notas[i]>=7 && notas[i]<=8.9) {
            conceitos.push('B')
        } else if(notas[i]>=9 && notas[i]<=10){
            conceitos.push('A')
        } else {
            conceitos.push('Nota inválida')       
       }
    }
    return conceitos
}

let notas = [10, 13, 9, 8.2, 2.5, 7.7, 6.8]
let vetorConceitos = conceituarNotas(notas)

console.log(vetorConceitos)
