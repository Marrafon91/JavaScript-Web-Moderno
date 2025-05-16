// Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como 
// parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A 
// anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros 
// compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.

function anuidade(mes, valor) {
    if(mes < 1 || mes > 12) {
        return "Mês inválido!";
    }

    let mesAtrasado = mes - 1;
    let anuidadeFinal = valor * Math.pow(1.05, mesAtrasado);

    return `Valor a pagar no mês ${mes} R$: ${anuidadeFinal.toFixed(2).replace(".", ",")}`;
};

console.log(anuidade(0, 1000)); 
console.log(anuidade(1, 1000)); 
console.log(anuidade(2, 1000));  
console.log(anuidade(3, 1000));  
console.log(anuidade(4, 1000));
console.log(anuidade(5, 1000));
console.log(anuidade(6, 1000));
console.log(anuidade(7, 1000));
console.log(anuidade(8, 1000));
console.log(anuidade(9, 1000));
console.log(anuidade(10, 1000));
console.log(anuidade(11, 1000));
console.log(anuidade(12, 1000));
console.log(anuidade(13, 1000));
console.log("################");

function calcularValor(mes, valor){
    if(mes > 0 && mes < 13) {
        atraso = mes - 1
        return (valor * ((1 + (5/100))**atraso)).toFixed(2)
    } else {
        return 'Mês inválido.'
    }
}

console.log(calcularValor(4, 1000))
console.log(calcularValor(7, 1000))
console.log(calcularValor(10, 1000))
console.log(calcularValor(13, 1000))
