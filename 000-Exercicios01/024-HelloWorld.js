// Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while.

function helloWorld1() {
  let contador = 0;
  while (contador <= 11) {
    console.log(`${contador}. Hello World!`);
    contador++;
  };
};
helloWorld1();

console.log("########");

function helloWorld() {
  let i = 0;
  while (i < 11) {
    console.log("Hello World");
    i++;
  };
};

helloWorld();
