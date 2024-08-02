/* Crie um array para receber os nomes dos alunos e outro para receber as notas;
Para cada aluno inserido pergunte o nome e a nota da prova;
Seu usuário deve ter a opção de parar de inserir informações quando desejar;
No final exiba a nota de cada aluno, a soma das notas e a média geral da turma. 
Para calcular a média deve dividir a soma das notas pelo total de alunos. */

// NÃO ESTAVA CONSEGUINDO FAZER SOZINHO TENTEI PESQUISAR E VER COMO O PROFESSOR INICIOU
// PARA ENTENDER COMO SERIA O FUNCIONAMENTO DEPOIS DISSO CONSEGUI PROSSEGUIR

let nomes = []
let notas = []
let continuar = true
let contador = 0

while(continuar) {
    let perguntaNome = prompt("Insira o nome do " + (contador + 1) + "º aluno")
    let perguntaNota = parseInt(prompt("Insira a nota do aluno"))

    nomes[contador] = perguntaNome
    notas[contador] = perguntaNota
    contador++

    let resposta = prompt("Deseja inserir informações sobre outro aluno? (s/n)")
    if (resposta == "n") {
        continuar = false
    }

    console.log("Notas dos alunos: ")
    for (let i = 0; i < nomes.length; i++) {
        console.log(nomes[i] + " - " + notas[i])
    }

    let somaDasNotas = 0
    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i]
    }

    let mediaAlunos = somaDasNotas / nomes.length
    console.log("A soma das notas foi: " + somaDasNotas)
    console.log("A média das notas da turma foi de: " + mediaAlunos)

}

//======================================================================================

/* Crie três arrays, um para guardar os modelos, um para guardar os anos e um para guardar os valores do carro
Utilizando o WHILE, peça para o usuário cadastrar novos carros(modelo, ano e valor), 
popule os 3 arrays nas mesmas posições.
Seu usuário deve definir quando parar de inserir informações. */

// CONSEGUI FAZER SOMENTE A PRIMEIRA PARTE SOZINHO 
// MAS A PARTE LÓGICA AONDE FOI FEITA A ORDENAÇÃO POR PREÇO TIVE AJUDA DO PROFESSOR

let modelo = []
let ano = []
let valor = []
let contador = 0
let continuar = true

while(continuar) {
    let perguntaModelo = prompt("Qual o modelo do carro: ")
    let perguntaAno = parseInt(prompt("Qual o ano do carro: "))
    let perguntaValor = parseFloat(prompt("Qual o valor do carro: "))
    
    modelo[contador] = perguntaModelo
    ano[contador] = perguntaAno
    valor[contador] = perguntaValor
    contador++

    let pergunta = prompt("Deseja inserir informações sobre outro carro? (s/n)")
    if (pergunta != "s") {
    continuar = false
    }
}

for (let i = 0; i < valor.length - 1; i++) {
    for (let j = 0; j < valor.length - i - 1; j++) {
        if (valor[j] > valor[j + 1]) {
            
            let modeloMaiorValor = modelo[j]
            modelo[j] = modelo[j + 1]
            modelo[j + 1] = modeloMaiorValor
            
            let anoMaiorValor = ano[j]
            ano[j] = ano[j + 1]
            ano[j + 1] = anoMaiorValor

            let maiorValor = valor[j]
            valor[j] = valor[j + 1]
            valor[j + 1] = maiorValor
        }
    }
}

console.log("Carros ordenados pelo preço: ")
for (let i = 0; i < modelo.length; i++) {
    console.log(modelo[i] + " - " + ano[i] + " - " + valor[i])
}