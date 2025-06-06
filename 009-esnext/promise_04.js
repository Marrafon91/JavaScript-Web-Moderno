function rand(min, max, tempo) {
  if (min > max) {
    [max, min] = [min, max];
  }

  return new Promise((resolve) => {
    setTimeout(function() {    
    const fator = max - min + 1;
    const aleatorio = parseInt(Math.random() * fator) + min;
    resolve(aleatorio);
    }, tempo)
  });
}

gerarVariosNumeros = () => {
    return Promise.all([
        rand(1, 60, 4000),
        rand(1, 60, 1000),
        rand(1, 60, 500),
        rand(1, 60, 3000),
        rand(1, 60, 100),
        rand(1, 60, 1500)
    ])
}

console.time('promise')

gerarVariosNumeros()
.then(numeros => console.log(numeros))
.then(() => console.timeEnd('promise'))