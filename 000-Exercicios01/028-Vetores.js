// Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares. 

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pares = 0;
let impares = 0;

 for (let i = 0;i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log(`O Número ${numeros[i]} é Par`);
        pares++;
    } else {
        console.log(`O Número ${numeros[i]} é Impar`);
        impares++;
    };
 };

 console.log(`Quantidade de números pares: ${pares}`);
 console.log(`Quantidade de números ímpares: ${impares}`);
 console.log("##############");

 function paresImpares(vetorNumeros) {
    let qtdPares = 0
    let qtdImpares = 0
    for (let i = 0; i < vetorNumeros.length; i++) {
        if (vetorNumeros[i] % 2 == 0) {
            qtdPares++
        } else {
            qtdImpares++
        }
    }
    console.log(`${qtdPares} números pares e ${qtdImpares} números ímpares.`)
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
paresImpares(vetor);