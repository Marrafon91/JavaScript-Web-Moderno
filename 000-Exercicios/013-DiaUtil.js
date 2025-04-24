// Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
// dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.

let dias = [1, 2, 3, 4, 5, 6, 7, 8,];
let resultado;

for (let i = 0; i < dias.length; i++) {
  let dia = dias[i];

  switch (dia) {
    case 1:
    case 7:
      resultado = "Fim de semana";
      break;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      resultado = "Dia útil";
      break;
    default:
      resultado = "Dia inválido";
  };

  console.log(`Dia ${dia}: ${resultado}`);
};
console.log("#############")

function classificaDia(numero) {
    switch (numero) {
        case 1:
            return "Fim de semana"
        case 2:
        case 3:
        case 4:
        case 5:
        case 6: 
            return "Dia útil"
        case 7:
            return "Fim de semana"
        default: 
            return "Dia inválido"
    }
}

console.log(classificaDia(1));
console.log(classificaDia(2));
console.log(classificaDia(3));
console.log(classificaDia(4));
console.log(classificaDia(5));
console.log(classificaDia(6));
console.log(classificaDia(7));
console.log(classificaDia('a'));


