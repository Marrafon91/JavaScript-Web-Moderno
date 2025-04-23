// Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A 
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda 
// retornará o valor da aplicação sob o regime de juros compostos. 

function jurosSimples(capital, taxa, tempo) {
    let rendimentos = capital * (1 + taxa * tempo);
     return rendimentos.toFixed(2);
};


function jurosComposto(capital, taxa, tempo) {
 let rendimentos = capital * Math.pow((1 + taxa), tempo)
    return rendimentos.toFixed(2);
};

console.log("Seu juros Simples = ",jurosSimples (100, 0.1, 12));
console.log("Seu juros Composto = ",jurosComposto (100, 0.1, 12));
console.log("###################")

function jurosSimples (capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos (capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}

console.log(jurosSimples(100, 10/100, 12));
console.log(jurosCompostos(100, 10/100, 12));