// Cria um objeto com chaves numéricas, parecido com um array
const quaseArray = {0: 'Rafael', 1: 'Ana', 2: 'Bia'};
console.log(quaseArray);
// Saída: {0: 'Rafael', 1: 'Ana', 2: 'Bia'}
// Apesar de parecer um array, é um objeto comum

// Define manualmente um método `toString` para o objeto
Object.defineProperty(quaseArray, 'toString', {
    value: function() {
        return Object.values(this); // retorna os valores como array
    },
    enumerable: false // não será mostrado em loops tipo for...in ou Object.keys
});


console.log(quaseArray[0]);
// Acessa o valor da chave 0 do objeto: 'Rafael'
// Funciona como em arrays, mas é só porque a chave é numérica


const meuArray = ['Rafael', 'Ana', 'Bia'];
// Um array verdadeiro, com todos os métodos de array

console.log(quaseArray.toString(), meuArray);
// Imprime: [ 'Rafael', 'Ana', 'Bia' ] [ 'Rafael', 'Ana', 'Bia' ]
// O primeiro vem do método `toString` personalizado do objeto


// quaseArray	É um objeto que imita um array (com chaves numéricas).
// Object.defineProperty	Permite definir uma propriedade com controle sobre enumerable, writable, etc.
// toString()	Aqui foi sobrescrito para retornar apenas os valores do objeto.
// Object.values(this)	Retorna os valores de um objeto como array.
// enumerable: false	Faz com que a propriedade não apareça em for...in, Object.keys, etc.