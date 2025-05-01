const sequeincia = {
    _valor: 1, //convenção
    get valor() { return this._valor++},
    set valor(valor) {
        if(valor > this._valor) {
            this._valor = valor
        };
    }
};

console.log(sequeincia.valor, sequeincia.valor)
sequeincia.valor = 1000
console.log(sequeincia.valor, sequeincia.valor)
sequeincia.valor = 900
console.log(sequeincia.valor, sequeincia.valor)