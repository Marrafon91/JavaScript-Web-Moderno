//  Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
// possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você está
// desenvolvendo no momento é a de somar o total das despesas.
// Crie uma função que receba um array de produtos e retorne o total das despesas.
//  Exemplos:
despesasTotais = (produtos) => {
  let total = 0;

  for (let produto of produtos) {
    total += produto.preco;
  }

  return total;
};

// Primeira chamada:
console.log(
  despesasTotais([
    { nome: "Jornal online", categoria: "Informação", preco: 89.99 },
    { nome: "Cinema", categoria: "Entretenimento", preco: 150 },
  ])
); // retornará 239.99

// Segunda chamada:
console.log(
  despesasTotais([
    { nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99 },
    { nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.9 },
  ])
); // retornará 34599.89
