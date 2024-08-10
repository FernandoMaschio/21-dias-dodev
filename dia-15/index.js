/* Crie dois arrays: arrayA e arrayB. Preencha os dois arrays com 10 números cada, 
pode declarar já com valores;

let arrayA = [13,20,10,22,24,20,27,17,19,14]

let arrayB = [24,22,23,11,15,17,29,14,16,]

Implemente uma função que receba dois arrays como parâmetro. Essa função deve retornar um array
que contenha apenas os números em comum nos dois arrays recebidos como parâmetro

Se um número se repetir apenas no mesmo array, ele NÃO deve ser adicionado como um número com

No array de saída NÃO deve ter números repetidos */


let arrayA = [13,20,10,22,24,20,27,17,19,14]
let arrayB = [24,22,23,11,15,17,29,14,16,21]

function arrayCombinado(arrayUm, arrayDois) {
    let resultado = []
    let contadorResultado = 0

    for(let i = 0; i < arrayUm.length; i++) {
        for(let j = 0; j < arrayDois.length; j++) {
            if(arrayUm[i] == arrayDois[j]) {
                resultado[contadorResultado] = arrayUm[i]
                contadorResultado++
                break
            }
        }
    }
    return resultado
}

console.log(arrayCombinado(arrayA,arrayB))



