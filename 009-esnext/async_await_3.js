// Função que retorna uma Promise para gerar um número aleatório entre min e max,
// verificando se o número já está presente na lista de números proibidos.
function megaSena(min, max, numerosProibidos) {
  // Troca os valores se min for maior que max
  if (min > max) [max, min] = [min, max];

  return new Promise((resolve, reject) => {
    const fator = max - min + 1; // quantidade de números possíveis
    const aleatorio = Math.floor(Math.random() * fator) + min; // número aleatório entre min e max

    if (numerosProibidos.includes(aleatorio)) {
      reject("Número repetido!"); // se o número já foi sorteado, rejeita
    } else {
      resolve(aleatorio); // se não, resolve com o número
    }
  });
}

// Função assíncrona para gerar os números da Mega-Sena sem repetições
async function gerarMegaSena(qtdNumeros, tentativas = 1) {
  try {
    const numeros = [];

    // Gera os números de forma assíncrona, aguardando cada um
    while (numeros.length < qtdNumeros) {
      const novoNumero = await megaSena(1, 60, numeros); // limite típico da Mega-Sena é 60
      numeros.push(novoNumero);
    }

    // Ordena os números antes de retornar (opcional, mas comum em jogos como Mega-Sena)
    return numeros.sort((a, b) => a - b);

  } catch (e) {
    // Se passar de 100 tentativas por causa de muitos conflitos, lança erro
    if (tentativas > 100) {
      throw "Que chato, tente novamente!!!";
    } else {
      // Recursivamente tenta novamente se houve erro por número repetido
      return gerarMegaSena(qtdNumeros, tentativas + 1);
    }
  }
}

// Executa a função e imprime o resultado no console
gerarMegaSena(8)
  .then(console.log)
  .catch(console.log);
