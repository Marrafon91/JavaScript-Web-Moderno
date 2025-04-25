// Fazer um programa para encontrar todos os pares entre 1 e 100.

function pares() {
    for(i = 0; i <= 100; i++) {
        if (i % 2 === 0) {
            console.log(`O Número ${i} é Par`)
            i++;
        };
    };
};

pares();
console.log("##########");

function acharPares () {
    for (let i = 1; i <= 100; i++){
        if (i%2==0) {
            console.log(i);
        };
    };
};

acharPares();