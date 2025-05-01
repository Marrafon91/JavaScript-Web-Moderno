const pilotos = ["Vetel", "Alonso", "Raikkonen", "Massa"];
pilotos.pop(); // Massa quebrou o carro! // Remove o ultimo elemento
console.log(pilotos);

pilotos.push("Verstappen");
console.log(pilotos);

pilotos.shift(); // Remove o primeiro elemento
console.log(pilotos);

pilotos.unshift("Hamilton");
console.log(pilotos);

// splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, "Botas", "Massa");
console.log(pilotos);

// remover
pilotos.splice(3, 1); // Massa quebrou :(
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); // novo array
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2);

const algunsPilotos3 = pilotos.slice(1, -2);
console.log(algunsPilotos3);


// Método	O que faz
// pop()	Remove o último elemento
// push()	Adiciona no final
// shift()	Remove o primeiro elemento
// unshift()	Adiciona no início
// splice()	Adiciona ou remove elementos em qualquer posição
// slice()	Cria um novo array (não altera o original) com parte do original