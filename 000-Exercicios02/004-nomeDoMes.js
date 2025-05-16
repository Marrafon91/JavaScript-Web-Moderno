//Crie uma função que recebe um numero (de 1 a 12) e retorne o mês correspondente com uma string. Por exemplos, se a entrada for 2, a funçao decera retornar "Fevereiro", pois este é o segundo mês.

nomeDoMes = (mes) => {
  switch (mes) {
    case 1:
      return "Janeiro!";
    case 2:
      return "Fevereiro!";
    case 3:
      return "Março!";
    case 4:
      return "Abril!";
    case 5:
      return "Maio!";
    case 6:
      return "Junho!";
    case 7:
      return "Julho!";
    case 8:
      return "Agosto!";
    case 9:
      return "Setembro!";
    case 10:
      return "Outubro!";
    case 11:
      return "Novembro!";
    case 12:
      return "Dezembro!";
    default:
      return "Mês inválido!";
  }
};
console.log(nomeDoMes(10));
console.log("##########");

const nomeDoMes1 = (mes) => {
  const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril",
    "Maio", "Junho", "Julho", "Agosto",
    "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  if (mes >= 1 && mes <= 12) {
    return `${meses[mes - 1]}!`;
  } else {
    return "Mês inválido!";
  }
};

console.log(nomeDoMes1(5)); 
