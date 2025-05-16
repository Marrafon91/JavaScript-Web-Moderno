// Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter 
// quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais. 
// Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e 
// mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console. 

const vetorInteiro1 = [10, 15, 18, 20];
const vetorString1 = ["Carro", "Moto", "Guilherme", "Fruta"];
const vetorDouble1 = [7.5, 6.8, 5.2, 4.7];

function uniao() {
    console.log(vetorInteiro1.concat(vetorDouble1, vetorString1));
}
uniao();
console.log("###############")

let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['Arthur', 'Christian', 'Yuri', 'Galdino']
let vetorDouble = [1.1, 2.2, 3.3, 4.4]

function concatenar (...args) {
    resultado = []
    for(let i = 0; i<arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado;
}

console.log(concatenar(vetorInteiro, vetorDouble))
console.log(concatenar(vetorDouble, vetorString))
