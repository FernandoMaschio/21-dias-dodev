
let nome = ""
let idade = 0
let altura = 0
let peso = 0

nome = prompt("Digite seu nome: ")
idade = parseInt(prompt("Digite sua idade: "))
altura = parseFloat(prompt("Digite sua altura: "))
peso = parseInt(prompt("Digite seu peso: "))

let anoNascimento = 0
anoNascimento = 2024 - idade

let imc = 0
imc = peso / (altura * altura)

console.log("Olá " + nome + ", você tem " + idade + " anos, nasceu em " + anoNascimento +
            ", tem " + altura + " de altura, pesa " + peso + "kg e seu IMC é " + imc + "kg")