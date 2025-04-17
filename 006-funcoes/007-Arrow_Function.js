let dobro = function (a) {
  return 2 * a;
};

dobro = (a) => 2 * a; // return implicito

console.log(dobro(Math.PI));

let ola = function () {
  return "Hello World";
};

ola = () => "Hello World";
console.log(ola());
