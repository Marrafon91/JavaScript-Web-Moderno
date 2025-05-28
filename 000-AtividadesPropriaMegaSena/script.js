function megaSena(min, max, numerosProibidos) {
  if (min > max) [max, min] = [min, max];

  return new Promise((resolve, reject) => {
    const fator = max - min + 1;
    const aleatorio = Math.floor(Math.random() * fator) + min;

    if (numerosProibidos.includes(aleatorio)) {
      reject("Número repetido!");
    } else {
      resolve(aleatorio);
    }
  });
}

async function gerarMegaSena(qtdNumeros, tentativas = 1) {
  try {
    const numeros = [];

    while (numeros.length < qtdNumeros) {
      const novoNumero = await megaSena(1, 60, numeros);
      numeros.push(novoNumero);
    }

    return numeros.sort((a, b) => a - b);

  } catch (e) {
    if (tentativas > 100) {
      throw "Que chato, tente novamente!";
    } else {
      return gerarMegaSena(qtdNumeros, tentativas + 1);
    }
  }
}

// Função para exibir números um a um com atraso
async function exibirNumerosGradualmente(numeros) {
  const container = document.getElementById("numeros");
  container.innerHTML = "";

  for (const numero of numeros) {
    const div = document.createElement("div");
    div.className = "numero";
    div.textContent = numero;
    container.appendChild(div);
    await esperar(1000); // espera 1000ms antes de mostrar o próximo
  }
}

// Função utilitária para esperar alguns milissegundos
function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function sortearMegaSena() {
  const numeros = await gerarMegaSena(6);
  await exibirNumerosGradualmente(numeros);
}

sortearMegaSena();
