// RESOLUÇÃO DO PROFESSOR

let nome
let idade
let carta = false
let carro = false

nome = prompt("Qual o seu nome?")
idade = parseInt(prompt("Qual a sua idade?"))
let opcaoCarta = prompt("Você tem carta de motorista?")
if (opcaoCarta == "sim") {
    carta == true
}
let opcaoCarro = prompt("Você tem carro?")
if (opcaoCarro == "sim") {
    carro == true
}

if(idade < 18 || !carta) {
    console.log(nome + ", você não pode dirigir")
} else if (idade >= 18 && carta && !carro) {
    console.log(nome + ", você pode dirigir mas não tem um carro")
} else {
    console.log(nome + ", você será o motorista")
}

//======================================================================================

// MINHA RESOLUÇÃO

// let nome = prompt("Qual o seu nome?")
// let idade = Number(prompt("Qual a sua idade?"))
// let carteira = prompt("Possui carta de motorista?")
// let carro = prompt("Possui algum carro?")

// if (idade < 18 && carteira == "nao") {
//     console.log(nome + ", você não pode dirigir")
// } else if (idade >= 18 && carteira == "sim" && carro == "nao") {
//     console.log(nome + ", você pode dirigir mas não tem um carro")
// } else {
//     console.log(nome + ", você será o motorista!")
// }

//======================================================================================

// MINHA RESOLUÇÃO

// let fome = prompt("Está com fome?")
// let dinheiro = prompt("Você tem dinheiro?")
// let restaurante = ""

// if (fome == "nao" || dinheiro == "nao") {
//     console.log("Hoje a janta será em casa")
// } else if ((fome == "sim" && dinheiro == "sim") && prompt("O restaurante está aberto?") == "nao") {
//     console.log("Peça um delivery!")
// } else {
//     console.log("Hoje o jantar será no seu restaurante preferido!")
// }