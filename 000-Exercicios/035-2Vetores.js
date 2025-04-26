// Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá cinco elementos 
// inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilha 
// e mostrá-los no console. É importante lembrar que o método Push retorna somente o tamanho do Vetor. Ao 
// final das operações imprima os vetores no console.

const vetorPilha1 = [1, 2, 3, 4, 5];
const vetorAdiciona1 = [6, 7, 8, 9, 10];

for (let i = 0;i < vetorAdiciona1.length; i++) {
    vetorPilha1.push(vetorAdiciona1[i]);
};

console.log(`Vetor Pilha = ${vetorPilha1}`);
console.log(`Vetor Adiciona = ${vetorAdiciona1}`);
console.log("###############")

let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

function adicionaVetor(vetorInicial, vetorAdicionar) {
    for(let i = 0; i < vetorAdicionar.length; i++) {
        console.log(vetorAdicionar[i])
        vetorInicial.push(vetorAdicionar[i])
    }
    console.log('Vetor adicionado: ' + vetorAdicionar)
    console.log('Vetor resultado: ' + vetorInicial)
}

adicionaVetor(vetorPilha, vetorAdiciona)