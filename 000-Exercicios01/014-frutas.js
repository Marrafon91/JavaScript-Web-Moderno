// Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três 
// casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com 
// escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie 
// também um default, que retornará uma mensagem de erro no console.  

function vendaDeFrutas(frutas) {
    switch(frutas) {
        case "Maçã":
            return  "Não vendemos esta fruta aqui.";
        case "Kiwi":
            return "Estamos com escassez de kiwis.";
        case "Melancia":
            return "Aqui está, são 3,00 reais o quilo."
        default:
            return "Erro, não temos está fruta.";
    };
};

console.log(vendaDeFrutas("Maçã",));
console.log(vendaDeFrutas("Kiwi"));
console.log(vendaDeFrutas("Melancia"));
console.log(vendaDeFrutas("Uva"));
console.log("#################");

function venderFruta (fruta) {
    switch (fruta) {
        case 'maçã':
            console.log('Não vendemos esta fruta aqui.');
            break;
        case 'kiwi':
            console.log('Estamos com escassez de kiwi.')
            break;
        case 'melancia':
            console.log('Aqui está, custa R$ 3,00 o quilo.');
            break;;
        default:
            console.log('Erro, fruta inválida.');
    };
};

venderFruta('maçã');
venderFruta('kiwi');
venderFruta('melancia');
venderFruta('alcatra');