function rand(min, max, numerosProibidos) {
  if (min > max) [max, min] = [min, max];
  return new Promise((resolve, reject) => {
    const fator = max - min + 1;
    const aleatorio = parseInt(Math.random() * fator) + min;
    if (numerosProibidos.includes(aleatorio)) {
      reject("Número repitido!");
    } else {
      resolve(aleatorio);
    }
  });
}

async function gerarMegaSena(qtdNumeros, tentativas = 1) {
  try {
    const numeros = [];
    for (let _ of Array(qtdNumeros).fill()) {
      numeros.push(await rand(1, 99, numeros));
    }
    return numeros;
  } catch (e) {
    if(tentativas > 100) {
        throw "Que chato tente novamente!!!"
    } else {
       return gerarMegaSena(qtdNumeros, tentativas + 1)
    }
    
  }
}

gerarMegaSena(8)
    .then(console.log)
    .catch(console.log);
