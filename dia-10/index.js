// NÃO CONSEGUI RESOLVER OS EXERCICIOS SOZINHO (ACHEI UM POUCO COMPLEXO PARA QUEM TA APRENDENDO AINDA)
// TENHO QUE CONTINUAR ESTUDANDO SOBRE ARRAYS E LÓGICA DE PROGRAMAÇÃO

/* Crie um algoritmo que receba um número inteiro positivo e um array. 
Popule o array e no final exiba os índices em que número inserido aparece nesse array. 
Para testes do exercício use até 10 elementos no array. */


const array = []
const indices = []
let contadorIndice = 0

const numeroProcurado = parseInt(prompt("Digite o número a ser procurado:"))

for(let i = 0; i < 10; i++) {
    const elemento = parseInt(prompt(`Digite o elemento ${i + 1}:`))
    array[i] = elemento
}

for (let i = 0; i < 10; i++) {
    if(array[i] === numeroProcurado) {
        indices[contadorIndice] = i
        contadorIndice++
    }
}

console.log(`O número ${numeroProcurado} foi encontrado nos indices: ${indices}`) 

/* Crie um algoritmo que peça 5 números ao usuário, coloque eles em um array, depois exiba esse array. 
Modifique os elementos do array de modo que a sequência de números fique ao contrário. */


let array = []
let arrayInvertido = []

for(let i = 0; i < 5; i++) {
    let numero = parseInt(prompt("Digite o " + (i + 1) + "º numero"))
    array[i] = numero
}

console.log("Array original: " + array)

let contador = 4
for (let i = 0; i < 5; i++) {
    arrayInvertido[i] = array[contador]
    contador--
}

console.log("Array invertido: " + arrayInvertido)

/* Refaça o script anterior, mas agora pergunte ao usuário quantos números ele deseja inserir no array. 
Depois, o usuário vai preenchendo elemento por elemento do vetor, ao final, exiba o array e o array ao contrário */


let array = []
let arrayInvertido = []
let quantidade = parseInt(prompt("Digite a quantidade de números para inseir no array"))

for (let i = 0; i < quantidade; i++) {
    let numero = parseInt(prompt("Digite o " + (i + 1) + "º numero"))
    array[i] = numero
}

console.log("Array original: " + array)

let contador = quantidade - 1
for (let i = 0; i < 5; i++) {
    arrayInvertido[i] = array[contador]
    contador--
}

console.log("Array invertido: " + arrayInvertido)

/* Crie um algoritmo que peça um número inteiro positivo para o usuário. 
Em seguida, popule um array com os números de Fibonacci (o próximo número da sequência é a soma dos 2 números anteriores).

Na hora de somar com os termos anteriores, some com elementos anteriores do array. 
Faça com que o array tenha no máximo 10 elementos
Para iniciar a sequência use o (número inserido - 1). */

let numero = parseInt(prompt("Digite um número inteiro e positivo"))
let fibonacci = []
fibonacci[0] = numero - 1
fibonacci[1] = numero

for(let i = 2; i < 10; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
}

console.log("Fibonacci: " + fibonacci)
