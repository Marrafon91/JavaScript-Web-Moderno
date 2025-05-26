// Não aceita repetição/não é indexada.
const times = new Set();
times.add('Corinthians');
times.add('Santos').add('Palmeiras').add('Flamengo');
times.add('São Paulo');
times.add('Corinthians');

console.log(times);
console.log(times.size);
console.log(times.has('corinthians'));
console.log(times.has('Corinthians'));
times.delete('São Paulo');
console.log(times.has('São Paulo'));

const nomes = ['Raquel', 'Guilherme', 'Julia', 'Guilherme'];
const nomesSet = new Set(nomes)
console.log(nomesSet)
