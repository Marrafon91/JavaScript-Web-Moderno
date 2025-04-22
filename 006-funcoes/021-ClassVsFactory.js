class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome e ${this.nome}`)
    }
}

const p1 = new Pessoa("Guilherme");
p1.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome e ${nome}`)
    }
}

const p2 = criarPessoa("Guilherme")
p2.falar()