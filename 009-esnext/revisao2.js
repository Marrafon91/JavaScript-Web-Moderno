// Arrow Function
const soma = (a, b) => a + b;
console.log(soma(2, 3));

// Arrow function (this)
const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({});
lexico1();
lexico1();

// Parametro default
function log(texto = "Node") {
  console.log(texto);
}
log();
log("Sou mais Forte que o Valor padrao!!!");

// Operador rest

function total(...numeros) {
    let total = 0;
    numeros.forEach(n => total += n)
    return total;
}
console.log(total(2, 3, 4, 5))