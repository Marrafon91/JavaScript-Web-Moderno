//Desenvolva uma função que recebe dois parâmetro, um é a quantidade de horas trabalhadas por um funcionario num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$ X", em que X é o quanto o funcionario ganhou no mês.

calcularSalario = (horasTrabalhadas, valorHoras, desconto = 0.3) => {
    const salarioBruto = horasTrabalhadas * valorHoras
    const salarioLiquido = salarioBruto - salarioBruto * desconto
    return `Salário igual a R$ ${salarioLiquido.toFixed(2)}!`
    
}

console.log(calcularSalario(180, 60)) // 30% desconto
console.log(calcularSalario(180, 60, 0.2)) // 20% desconto
console.log(calcularSalario(180, 60, 0.1)) // 10% desconto