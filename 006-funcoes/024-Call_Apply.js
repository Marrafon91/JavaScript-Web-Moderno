// Função que calcula o preço com desconto e imposto, usando "this" para acessar o objeto que chamar a função
function getPreco(imposto = 0, moeda = "R$") {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
  }
  
  // Objeto produto com nome, preço, desconto e a função getPreco como método
  const produto = {
    nome: "Notebook",
    preco: 4589,
    desc: 0.15,
    getPreco, // mesma coisa que getPreco: getPreco
  };
  
  // Define variáveis globais (no Node.js é o objeto global, no navegador seria window)
  global.preco = 20;
  global.desc = 0.1;
  
  // Chama a função getPreco sem contexto, então usa as variáveis globais (global.preco e global.desc)
  console.log(getPreco()); // R$ 18
  
  // Chama a função getPreco dentro do objeto produto, então usa produto.preco e produto.desc
  console.log(produto.getPreco()); // R$ 3900.65
  
  // Define outro objeto com preço e desconto
  const carro = { preco: 49990, desc: 0.20 };
  
  // Usa a função getPreco com o método call, passando o objeto carro como contexto (this)
  console.log(getPreco.call(carro)); // R$ 39992
  
  // Usa a função getPreco com o método apply, também com o objeto carro
  console.log(getPreco.apply(carro)); // R$ 39992
  
  // Usa call passando parâmetros: contexto (carro), imposto 17% e moeda "$"
  console.log(getPreco.call(carro, 0.17, "$")); // $ 46790.64
  
  // Usa apply passando os mesmos parâmetros, mas em forma de array
  console.log(getPreco.apply(carro, [0.17, "$"])); // $ 46790.64
 
  
//   Dicas:
// call e apply são usados para invocar funções com um determinado contexto (this).

// call passa os argumentos um a um, apply passa como array.

// Quando você usa this dentro de uma função, ele depende de quem chama a função.

// Se chamar uma função solta (sem objeto), ela usa o contexto global (como global no Node.js).