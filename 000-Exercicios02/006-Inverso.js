// Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for boolean, o retorno da função decerá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for numérico, o retorno será o número inverso. Por exemplo se for fornecido 1, o retorno será -1 se o parâmetro de entrada não for nenhum dos tipos acima, retorne "booleano ou númerico esperado, mas o parâmetro é do tipo..."

inverso = (valor) => {
    const tipo = typeof valor

    if(tipo == "boolean") return !valor;
    else if(tipo == 'number') return -valor
    else
    return `booleano ou númerico esperados, mas o parâmetro é do tipo ${tipo}.`
}

console.log(inverso(true));
console.log(inverso("6"));
console.log(inverso(-2000));
console.log(inverso("programação"));