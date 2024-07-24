// Faça um algoritmo utilizando a estrutura de repetição FOR que receba 1 número
// e exiba na tela qual o resultado da sua tabuada e dos próximos 2 números.

// ESSA NÃO CONSEGUI RESOLVER SOZINHO E TIVE AJUDA DA RESOLUÇÃO DO PROFESSOR
// VOU ESTUDAR MAIS SOBRE LAÇO DE REPETIÇÃO FOR PARA FIXAR O CONHECIMENTO

let numero = parseInt(prompt("Digite um numero: "))

for(let contador = numero; contador <= numero + 2; contador++) {
    console.log("Tabuada do numero: " + contador)
    for(let contadorDois = 0; contadorDois <= 10; contadorDois++) {
        console.log(contador + " X " + contadorDois + " = " + (contador*contadorDois))
    }
}

//======================================================================================

// Agora faça com que o algoritmo do exercício anterior exiba a mesma contagem
// mas na ordem inversa.

// for(let contador = 50; contador >= 0; contador -= 5) {
//     console.log(contador);
// }

//======================================================================================

// Desenvolva um algoritmo que usando a estrutura FOR mostre no console uma contagem de 0 a 50,
// porém, essa contagem tem que ser feita de 5 em 5.
// Ex.: 0 5 10 15 20 25 … 45 50 Fim!

// for(let contador = 0; contador <= 50; contador += 5) {
//     console.log(contador);
// }

//======================================================================================

// Faça um algoritmo que receba um valor, inteiro e positivo, e usando a estrutura FOR, 
// mostre no console uma contagem de 0 até o número recebido

// let numero = parseInt(prompt("Digite um número: "));

// for(let contador = 0; contador <= numero; contador++) {
//     console.log(contador);
// }

