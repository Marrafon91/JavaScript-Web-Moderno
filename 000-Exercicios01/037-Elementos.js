// Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
// como parâmetros um número n (número de termo), a1​ (o primeiro termo) e r​ (a razão) e escreva os n​ termos ,
// bem como a soma dos elementos.

function progressaoAritimetica(n, a1, r) {
  let termos = [];
  let soma = 0;

  for (let i = 0; i < n; i++) {
    let termo = a1 + i * r;
    termos.push(termo);
    soma += termo;
  };

  console.log(`Progressão Aritmética: ${termos.join(", ")}`);
  console.log(`Soma dos termos: ${soma}`);
};

function progressaoGeometrica(n, a1, r) {
  let termos = [];
  let soma = 0;
  for (let i = 0; i < n; i++) {
    let termo = a1 * (r ** i);
    termos.push(termo);
    soma += termo;
  }
  console.log(`Progressão Geométrica: ${termos.join(", ")}`);
  console.log(`Soma dos termos: ${soma}`);
};

progressaoAritimetica(10, 10, 15);
progressaoGeometrica(10, 5, 3);
console.log("#############")

function pA (n, a1, r) {
    for (let i = 0; i < n; i++) {
        console.log(a1 + r*i)
    }
    console.log('Soma: ' + (n * (a1 + (a1 + ((n-1)*r))))/2)    
}

function pG (n, a1, r) {
    //console.log(a1)
    for(let i = 0; i < n; i++){
        console.log(a1*(r**i))
    }
    console.log('Soma: ' + (a1 * ((r**n)-1))/(r-1))
}

pA(10, 10, 15)
console.log('----------------');
pG(10, 5, 3)