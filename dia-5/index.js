// NÃO CONSEGUI RESOLVER ESSE, ENTÃO TIVE AJUDA DA RESOLUÇÃO DO PROFESSOR

let valor
let quantidade
let opcao = prompt("O que você deseja?" + "\n1 - Abastecer com gasolina; \n2 - Abastecer com alcool;" +
    " \n3 - Calibrar os pneus")

switch(opcao) {
    case "1" :
        valor = parseInt(prompt("Digite o valor desejado"))
        quantidade = valor / 5
        console.log("Foram abastecidos " + quantidade + "L de gasolina")
        break;
    case "2" :
        valor = parseInt(prompt("Digite o valor desejado"))
        quantidade = valor / 3
        console.log("Forama abastecidos " + quantidade + "L de álcool")
        break;
    default:
        console.log("Pneus calibrados com sucesso")
        break;
}


//======================================================================================

// MINHA RESOLUÇÃO DA ATIVIDADE

// let escolha1 = Number(prompt("Digite um numero: "))
// let escolha2 = Number(prompt("Digite outro numero: "))
// let operação = prompt("Escolha uma operação matemática: ")

// switch(operação) {
//     case "+" :
//         console.log(escolha1 + escolha2)
//         break;
//     case "-" :
//         console.log(escolha1 - escolha2)
//         break;
//     case "*" :
//         console.log(escolha1 * escolha2)
//         break;
//     case "/" :
//         console.log(escolha1 / escolha2)
//         break;
//     default :
//         console.log("Opção inválida")
//         break;
// }