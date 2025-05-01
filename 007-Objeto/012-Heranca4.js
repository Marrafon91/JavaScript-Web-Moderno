// Declaração de uma função construtora (usada para criar objetos)
function MeuObjeto() {}

// Todo objeto em JavaScript que é função tem uma propriedade chamada `prototype`
console.log(MeuObjeto.prototype); 
// Mostra o objeto que será o protótipo de todas as instâncias criadas com `new MeuObjeto()`


// Cria duas instâncias (objetos) usando a função construtora
const obj1 = new MeuObjeto();
const obj2 = new MeuObjeto();

// Verifica se os dois objetos compartilham o mesmo protótipo
console.log(obj1.__proto__ === obj2.__proto__); 
// true - ambos apontam para MeuObjeto.prototype

// Verifica se o __proto__ do obj1 é igual ao prototype da função
console.log(MeuObjeto.prototype === obj1.__proto__); 
// true - isso mostra que o protótipo das instâncias é exatamente o `prototype` da função construtora


// Adiciona uma propriedade ao protótipo da função
MeuObjeto.prototype.nome = "Anonimo";

// Adiciona um método ao protótipo
MeuObjeto.prototype.falar = function () {
  console.log(`Bom dia! Meu nome é ${this.nome}!`);
};


// obj1 ainda usa o nome padrão do protótipo: "Anonimo"
obj1.falar(); // Bom dia! Meu nome é Anonimo!

// Aqui obj2 recebe um novo valor para a propriedade `nome` (sombra o protótipo)
obj2.nome = "Guilherme";
obj2.falar(); // Bom dia! Meu nome é Guilherme!


// Cria um objeto "na mão", não usando new
const obj3 = {};
// Define manualmente o protótipo de obj3
obj3.__proto__ = MeuObjeto.prototype;

// Agora obj3 também tem acesso aos métodos do protótipo
obj3.nome = "Obj3";
obj3.falar(); // Bom dia! Meu nome é Obj3!


// Resumo da "loucura" da cadeia de protótipos:

// Uma instância criada com `new MeuObjeto` tem seu __proto__ igual ao prototype da função
console.log(new MeuObjeto().__proto__ === MeuObjeto.prototype); // true

// Uma função em JavaScript (como MeuObjeto) é um objeto especial, ela também tem um __proto__
// E esse __proto__ aponta para Function.prototype
console.log(MeuObjeto.__proto__ === Function.prototype); // true

// Function.prototype também é um objeto, e o seu __proto__ aponta para Object.prototype
console.log(Function.prototype.__proto__ === Object.prototype); // true

// Object.prototype é o topo da cadeia. Seu __proto__ é null (não aponta para mais nada)
console.log(Object.prototype.__proto__ === null); // true
