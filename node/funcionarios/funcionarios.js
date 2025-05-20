const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");

const mulheresChinesas = (f) => f.pais === "China" && f.genero === "F";
const menorSalario = (menor, atual) => {
  return menor.salario < atual.salario ? menor : atual;
};

axios.get(url).then((response) => {
  const funcionarios = response.data;

  const fSalarioMenor = funcionarios
    .filter(mulheresChinesas)
    .reduce(menorSalario);

  console.log(fSalarioMenor);
});
