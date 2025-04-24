function jurosSimples(capital, taxa, tempo) {
    let rendimentos = capital + (capital * taxa * tempo);
  return rendimentos.toFixed(2);
}

function jurosComposto(capital, taxa, tempo) {
  let rendimentos = capital * Math.pow(1 + taxa, tempo);
  return rendimentos.toFixed(2);
}

function calcular() {
  let capital = parseFloat(document.getElementById("capital").value);
  let taxa = parseFloat(document.getElementById("taxa").value);
  let tempo = parseFloat(document.getElementById("tempo").value);

  if (isNaN(capital) || isNaN(taxa) || isNaN(tempo)) {
    alert("Digite números válidos!!!");
    return;
  };

  let simples = jurosSimples(capital, taxa, tempo);
  let composto = jurosComposto(capital, taxa, tempo);

  document.getElementById("resultadoSimples").textContent = `Juros Simples: R$ = ${simples}.`;
  document.getElementById("resultadoComposto").textContent = `Juros composto: R$ = ${composto}.`;
};
