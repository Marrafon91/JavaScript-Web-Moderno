// Verifica os tipos das formas de criar arrays
console.log(typeof Array, typeof new Array(), typeof []);
// typeof Array => "function" (Array é uma função construtora)
// typeof new Array() => "object" (uma instância de Array é um objeto)
// typeof [] => "object" (um array literal também é um objeto)

// Criando um array usando a função construtora `new Array`
let aprovados = new Array('Bia', 'Carlos', 'Ana');
console.log(aprovados); // ['Bia', 'Carlos', 'Ana']

// Criando um array usando a forma literal (mais recomendada)
aprovados = ['Bia', 'Carlos', 'Ana'];
console.log(aprovados[0]); // Acessa o primeiro elemento: 'Bia'
console.log(aprovados[1]); // Segundo elemento: 'Carlos'
console.log(aprovados[2]); // Terceiro elemento: 'Ana'
console.log(aprovados[3]); // Quarto elemento: undefined (não existe ainda)

// Adiciona um novo elemento na posição 3 (substitui undefined)
aprovados[3] = "Paulo";

// Adiciona um novo elemento no final do array
aprovados.push('Abia');

// Mostra o tamanho atual do array
console.log(aprovados.length); // 5 elementos

// Adiciona um elemento na posição 9 (pula posições, criando espaços vazios)
aprovados[9] = "Rafael";

// Mostra o novo tamanho (10 elementos, mesmo com espaços vazios)
console.log(aprovados.length); // 10

// Verifica se a posição 8 está vazia
console.log(aprovados[8] === undefined); // true

// Exibe o array completo (com posições vazias como <empty>)
console.log(aprovados);

// Ordena o array em ordem alfabética
aprovados.sort();
console.log(aprovados); // reorganiza os elementos

// Remove o elemento na posição 1 sem reorganizar (fica undefined)
delete aprovados[1];
console.log(aprovados[1]); // undefined
console.log(aprovados[2]); // outro elemento do array

// Cria novamente o array original
aprovados = ['Bia', 'Carlos', 'Ana'];

// splice pode remover e/ou adicionar elementos
// Neste caso: remove 1 elemento a partir da posição 1, e adiciona dois novos
aprovados.splice(1, 1, 'Elemento1', 'Elemento2');
console.log(aprovados); // ['Bia', 'Elemento1', 'Elemento2', 'Ana']
