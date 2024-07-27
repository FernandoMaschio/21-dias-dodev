// AULA SOBRE FUNCTIONS
// BASICAMENTE FOI TEORIA MAS RESOLVI CODAR UM POUCO PRA VER SE ABSORVI BEM O CONHECIMENTO

function Verificador(idade, convite) {
    if(idade <= 18 && convite == "n") {
        console.log("Não pode entrar")
    } else if (idade <= 18 && convite == "s") {
        console.log("Não pode entrar")   
    } else {
        console.log("SEJA BEM VINDO!")
    }
}

let portadoria = Verificador(21, "n")


/*
function Soma(parametro1, parametro2) {
    let resultado = parametro1 + parametro2
    return resultado;
}

let res = Soma(2 , 3)
console.log(res)
*/