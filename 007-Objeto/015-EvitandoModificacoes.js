// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Head7', preco: 99.99, tag: 'Promoção.'
});
console.log( "Extensivel:", Object.isExtensible(produto));

produto.nome = "Borracha";
produto.descricao = "Borracha escolar branca";
delete produto.tag;
console.log(produto);

// Object.seal
const pessoa = {nome: "Juliana", idade: 35};
Object.seal(pessoa);
console.log('Selado:', Object.isSealed(pessoa));

pessoa.sobrenome = "Silva";
delete pessoa.nome;
pessoa.idade = 29;
console.log(pessoa);

// Object.freeze = selado + valores constantes