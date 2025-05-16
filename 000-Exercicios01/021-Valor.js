// Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado 
// considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos 
// de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com 
// idade acima de  30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130

function planoDeSaude(idade) {
    let valor = 100;
    let adicional = 0;
    if (idade < 10) {
        adicional = 80;
    } else if (idade < 30) {
        adicional = 50;
    } else if (idade < 60) {
        adicional = 95;
    } else {
        adicional = 130;
    }
    let total = valor + adicional;
    return `Seu plano com reajuste R$: ${total.toFixed(2).replace(".", ",")}.`;    
};

console.log(planoDeSaude(7));
console.log(planoDeSaude(25));
console.log(planoDeSaude(32));
console.log(planoDeSaude(67));
console.log("#############")

function calcularPreco (idade) {
    if(idade < 10){
        return 180
    } else if(idade < 30) {
        return 150
    } else if (idade < 60) {
        return 195
    } else {
        return 230
    }
}

console.log(calcularPreco(8));
console.log(calcularPreco(15));
console.log(calcularPreco(52));
console.log(calcularPreco(80));