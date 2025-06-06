// ES8: Object.values/Objects.entries
const obj = {a:1, b:2, c:3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na Notação Literal
const nome = 'Guilherme'
const pessoa = {
    nome,
    ola() {
        return "Oi gente!"
    }
}

console.log(pessoa.nome, pessoa.ola());

//Class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au Au!'
    }
}

console.log(new Cachorro().falar())