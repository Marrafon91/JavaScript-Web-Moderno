const prod1 = {};
prod1.nome = "Celular Ultra Mega";
prod1.preco = 4998.9;
prod1["Desconto legal"] = 0.4; // evitar atributos com espaco

console.log(prod1);

const prod2 = {
  nome: "Camisa Polo",
  preco: 79.9,
  obj: {
    blabla: 1,
    obj: {
      blabla: 2,
    },
  },
};

'{"nome": "Camisa Polo", "preco": 70.90}'

console.log(prod2);
