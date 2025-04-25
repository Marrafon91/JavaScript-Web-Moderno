// Um funcionário irá receber um aumento de acordo com o seu plano de 
// trabalho, de acordo com a tabela abaixo:  
// Plano Aumento 
// A 10% 
// B 15% 
// C 20% 
// Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu 
// novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.

function aumentoDeSalario(plano, salario) {
    switch (plano) {
        case "A":
            return `Novo salário: R$ ${(salario * 1.10).toFixed(2)}`;;
        case "B":
            return `Novo salário: R$ ${(salario * 1.15).toFixed(2)}`;;
        case "C":
            return `Novo salário: R$ ${(salario * 1.20).toFixed(2)}`;;
        default:
            return "Plano é inválido";
    };
};

console.log(aumentoDeSalario("A", 2000.00));
console.log(aumentoDeSalario("B", 2000.00));
console.log(aumentoDeSalario("C", 2000.00));
console.log(aumentoDeSalario("D", 2000.00));
console.log("################");

function calcularReajuste(plano, salarioAtual) {
    switch (plano) {
        case 'A':
            return salarioAtual * 1.1
        case 'B':
            return salarioAtual * 1.15
        case 'C':
            return salarioAtual * 1.2
        default:
            return 'Plano inválido.'
    }
}

console.log(calcularReajuste('A', 1000));
console.log(calcularReajuste('B', 1000));
console.log(calcularReajuste('C', 1000));
console.log(calcularReajuste('D', 1000));
