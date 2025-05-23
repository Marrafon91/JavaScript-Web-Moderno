// Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso 
// todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.

function stringsContidas(str1, str2) {
    let s1 = str1.toLowerCase().replace(/\s/g, '');
    let s2 = str2.toLowerCase().replace(/\s/g, '');

    for (let char of s1) {
        if (!s2.includes(char)) {
            return false;
        }
    }

    for (let char of s2) {
        if (!s1.includes(char)) {
            return false;
        }
    }

    return true;
}


console.log(stringsContidas("Rato Roeu a Roupa", "Roupa do Rei de Roma")); 
console.log(stringsContidas("Guilherme", "Guilherme")); 
console.log("############")

function verificacaoDeString(string1, string2) {
    let estaContido = true;
    for (let i = 0; i < string1.length; i++) {
        let caractereString1 = string1.charAt(i).toLowerCase()
        for (let j = 0; j < string2.length; j++) {
            let caractereString2 = string2.charAt(j).toLowerCase()
            if (caractereString1 == caractereString2) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        if (!estaContido) {
            return estaContido
        }
    }
    for (let i = 0; i < string2.length; i++) {
        let caractereString2 = string2.charAt(i).toLowerCase()

        for (let j = 0; j < string1.length; j++) {
            let caractereString1 = string1.charAt(j).toLowerCase()

            if (caractereString1 == caractereString2) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        if (!estaContido) {
            return estaContido
        }
    }
    return estaContido
}

console.log(verificacaoDeString('abcdf', 'dcba'))
console.log(verificacaoDeString('dcba', 'dcba'))
