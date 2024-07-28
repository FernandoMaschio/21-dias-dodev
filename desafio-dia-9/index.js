/* Escreva um algoritmo onde seu usuário deve informar nome, idade, peso, altura e profissão,
a partir disso você deve exibir um texto com todas essas informações.
Ex: Usuário inseriu nome: Giovanni, idade: 21, peso: 74kg, profissão: Programador, altura: 1.83
Você exibe: Olá Giovanni, você tem 21 anos, é programador, tem 1.83M de altura e pesa 74kg.

Verifique se o usuário é maior ou menor de idade, se ele for maior exiba na tela 
“Está liberado para tomar umas geladas”, se ele for menor exiba “Sem gelada para você”.

Utilize a idade informada pelo usuário, e mostre sua idade em meses, semanas e dias.
Considere ano com 365 dias, mês com 30 dias e semana com 7 dias. */

let nome = prompt("Informe seu nome:")
let idade = parseInt(prompt("Informe sua idade:"))
let peso = parseFloat(prompt("Informe seu peso:"))
let altura = parseFloat(prompt("Informe sua altura:"))
let profissao = prompt("Informe sua profissão:")

console.log(`Olá, ${nome}, você tem ${idade} anos, é ${profissao}, tem ${altura}M de altura
    e pesa ${peso}Kg.`)

if(idade >= 18) {
    console.log("Liberado para tomar umas geladas")
} else {
    console.log("Sem gelada para você")
}

let meses = idade * 12
let semanas = idade * 52.179
let dias = idade * 365

console.log(`Sua idade em meses é: ${meses}`)
console.log(`Sua idade em semanas é: ${semanas}`)
console.log(`Sua idade em dias é: ${dias}`)

/* Calcule o IMC do seu usuário e informe a faixa dele.
*O IMC é a relação entre peso e altura e o cálculo é feito de acordo com a fórmula:
IMC = peso / (altura x altura)

O peso deve estar em kg e a altura em metros, e o resultado é dado em kg/m2.
Depois de obter o resultado, é possível verificar em que faixa o IMC se encontra, podendo indicar:

- Magreza, quando o resultado é menor que 18,5 kg/m2;
- Normal, quando o resultado está entre 18,5 e 24,9 kg/m2;   
- Sobrepeso, quando o resultado está entre 24,9 e 30 kg/m2;
- Obesidade, quando o resultado é maior que 30 kg/m2.

A partir da idade informada descubra o ano que o seu usuário nasceu
(Considere o ano atual como 2024, faça essa conta usando apenas o ano). */

let imc = peso / (altura * altura)
if(imc <= 18.5) {
    console.log("Resultado do seu IMC é: Magro")
} else if(imc <= 24.9) {
    console.log("Resultado do seu IMC é: Normal")
} else if(imc <= 30) {
    console.log("Resultado do seu IMC é: Sobrepeso")
} else {
    console.log("Resultado do seu IMC é: Obeso")
}

let nascimento = 2024 - idade
console.log(`Você nasceu em ${nascimento}`)

/* Agora você deve exibir todos os anos que o usuário já viveu até o ano atual 
e informar qual a idade dele no determinado ano.
   
*ATENÇÃO: Aqui você deve utilizar o loop FOR.

Ex: Nasceu em 2018 você deve exibir: 

2018 - 0 anos de idade
2019 - 1 anos de idade
2020 - 2 anos de idade
2021 - 3 anos de idade
2022 - 4 anos de idade */

let anos = nascimento
let idadeAtual = 0

for(let anos = nascimento; anos <= 2024; anos++) {
    console.log(`${anos} - ${idadeAtual} anos de idade`)
    idadeAtual++
}

do {
    console.log(`${anos} - ${idadeAtual} anos de idade`)
    idadeAtual++
    anos++
    continuar = prompt("Deseja inserir os dados novamente? (s/n)")
} while (continuar == "s")

/* Imagine que você trabalha num banco e sua missão é fazer um algoritmo para prever o aumento de salário de seus clientes.
Peça para seu cliente informar seu nome, idade e salário atual e exiba essas informações em tela.
Peça para que seu cliente confirme as informações, se ele informar que digitou errado, peça para colocar TODAS as informações novamente, 
repita as perguntas até o usuário informar que digitou as informações corretamente.
Faça a previsão do salário dele para os próximos 10 anos considerando que:

O cliente recebe anualmente aumento salarial. 
Sabe-se que: no primeiro ano, ele receberá um aumento de 1,5%, sobre o seu salário atual; 
A partir do segundo ano, os aumentos salariais sempre corresponderam ao dobro do percentual do ano anterior. 
Apresente todos os valores com o ano correspondente. Ex: 2024 - R$1600. */
    
// NÃO CONSEGUI RESOLVER ESSE EXERCICIO

/* RESOLUÇÃO DO PROFESSOR NÃO ESTAVA FUNCIONANDO

let confirmar = "n"
while(confirmar != "s") {
    let nome = prompt("Digite seu nome:")
    let idade = parseInt(prompt("Digite sua idade:"))
    let salarioAtual = parseFloat(prompt("Digite seu salário atual:"))
    console.log("Nome: " + nome + ", Idade: " + idade + ", Salario atual: " + salarioAtual) 
    confirmar = prompt("As informações estão corretas? (s/n)")
}

let aumento = 0.015
console.log("Previsão salarial para os próximos 10 anos:")

for (let ano = 1; ano <= 10; ano++) {
    salarioAtual += salarioAtual * aumento
    aumento *= 2
    console.log((2024 + ano) + " = R$ " + salarioAtual)
} */

// RESOLUÇÃO DO CHATGPT

let confirmar = "n";
let nome;
let idade;
let salarioAtual;
    
while (confirmar !== "s") {
    nome = prompt("Digite seu nome:");
    idade = parseInt(prompt("Digite sua idade:"));
    
    while (isNaN(idade) || idade <= 0) {
        idade = parseInt(prompt("Idade inválida. Digite sua idade novamente:"));
    }

    salarioAtual = parseFloat(prompt("Digite seu salário atual:"));

    while (isNaN(salarioAtual) || salarioAtual <= 0) {
        salarioAtual = parseFloat(prompt("Salário inválido. Digite seu salário atual novamente:"));
    }

    console.log("Nome: " + nome + ", Idade: " + idade + ", Salário atual: " + salarioAtual);
    confirmar = prompt("As informações estão corretas? (s/n)");
}
    
let aumento = 0.015;
console.log("Previsão salarial para os próximos 10 anos:");

for (let ano = 1; ano <= 10; ano++) {
    salarioAtual += salarioAtual * aumento;
    aumento *= 2;
    console.log((2024 + ano) + " = R$ " + salarioAtual.toFixed(2));
}
    
