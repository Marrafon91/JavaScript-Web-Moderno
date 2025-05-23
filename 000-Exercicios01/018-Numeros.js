// Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
// switch. Crie um case default que escreva ‘Número fora do intervalo.’

function numeros(num) {
  switch (num) {
    case 0:
      return "Zero";
    case 1:
      return "Um";
    case 2:
      return "Dois";
    case 3:
      return "Três";
    case 4:
      return "Quatro";
    case 5:
      return "Cinco";
    case 6:
      return "Seis";
    case 7:
      return "Sete";
    case 8:
      return "Oito";
    case 9:
      return "Nove";
    case 10:
      return "Dez";
    default:
      return "Número fora do intervalo.";
  }
}

console.log(numeros(0));
console.log(numeros(1));
console.log(numeros(2));
console.log(numeros(3));
console.log(numeros(4));
console.log(numeros(5));
console.log(numeros(6));
console.log(numeros(7));
console.log(numeros(8));
console.log(numeros(9));
console.log(numeros(10));
console.log(numeros(11));
console.log("###########");

function numeroPorExtenso(numero) {
  switch (numero) {
    case 0:
      console.log("Zero");
      break;
    case 1:
      console.log("Um");
      break;
    case 2:
      console.log("Dois");
      break;
    case 3:
      console.log("Três");
      break;
    case 4:
      console.log("Quatro");
      break;
    case 5:
      console.log("Cinco");
      break;
    case 6:
      console.log("Seis");
      break;
    case 7:
      console.log("Sete");
      break;
    case 8:
      console.log("Oito");
      break;
    case 9:
      console.log("Nove");
      break;
    case 10:
      console.log("Dez");
      break;
    default:
      console.log("Numero fora do intervalo.");
  }
}

numeroPorExtenso(0);
numeroPorExtenso(1);
numeroPorExtenso(2);
numeroPorExtenso(3);
numeroPorExtenso(4);
numeroPorExtenso(5);
numeroPorExtenso(6);
numeroPorExtenso(7);
numeroPorExtenso(8);
numeroPorExtenso(9);
numeroPorExtenso(10);
numeroPorExtenso(11);
