// Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas 
// crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em 
// quantos anos isso acontecerá. Utilize centímetros para as unidades de medida. 

function alturaCrianca(altura1, taxa1, altura2, taxa2) {
    if (altura1 === altura2 && taxa1 === taxa2) {
        return "As crianças têm a mesma altura e crescem na mesma taxa.";
    }

    let menorAltura, menorTaxa, maiorAltura, maiorTaxa;
    let anos = 0;

    if (altura1 < altura2) {
        menorAltura = altura1;
        menorTaxa = taxa1;
        maiorAltura = altura2;
        maiorTaxa = taxa2;
    } else {
        menorAltura = altura2;
        menorTaxa = taxa2;
        maiorAltura = altura1;
        maiorTaxa = taxa1;
    }

    if (menorTaxa <= maiorTaxa) {
        return "A criança menor nunca ultrapassará a maior.";
    }

    while (menorAltura <= maiorAltura) {
        menorAltura += menorTaxa;
        maiorAltura += maiorTaxa;
        anos++;
    }

    return `A criança menor ultrapassará a maior em ${anos} ano(s).`;
}


console.log(alturaCrianca(130, 6, 150, 3));
console.log(alturaCrianca(120, 2, 130, 2));
console.log(alturaCrianca(140, 4, 140, 4));
console.log("###########");

function calcularCrescimento(altura1, taxa1, altura2, taxa2) {
    if(altura1 == altura2){
        if (taxa1 > taxa2) {
            return 'A criança 1 ultrapassará a criança 2 em 1 ano.'
        } else if(taxa1 < taxa2) {
            return 'A criança 2 ultrapassará a criança 1 em 1 ano.'
        }else{
            return 'As crianças tem igual altura e crescimento.'
        }
    } else {
        if (altura1 > altura2) {
            if(taxa1 >= taxa2){
                return 'A criança menor não ultrapassará a maior.'
            }else{
               return `A criança menor ultrapassará a maior em ${calcularTempo(altura2, taxa2, altura1, taxa1)} anos` 
            }
        } else {
            if(taxa2 >= taxa1){
                return 'A criança menor não ultrapassará a maior.'
            }else{
               return `A criança menor ultrapassará a maior em ${calcularTempo(altura1, taxa1, altura2, taxa2)} anos` 
            }
        }
    }
}

function calcularTempo(alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior){
    let qtdAnos = 0
    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        qtdAnos++
    }
    //console.log(qtdAnos)
    return qtdAnos
}

console.log(calcularCrescimento(150, 2, 130, 4));
