// Desenvolva um algoritmo que receba a nota e o sexo do aluno, usando a estrutura WHILE,
// e pergunte ao usuario se ele deseja cadastrar outra nota. No final, exiba no console:
// - A média geral dos alunos
// - Quantos homens enviaram as notas
// - Quantas mulheres tiveram nota acima de 7
// - Qual a maior nota entre os homens

// *Obs.: para obter a média geral deve somar todas as notas e 
// dividir pelo número de alunos!

// NÃO CONSEGUI RESOLVER SOZINHO PRECISEI DE AJUDA VOU ESTUDAR MAIS

let mediaGeral = 0;
let qtdHomens = 0;
let mulheresAcima7 = 0;
let homensMaiorNota = 0;
let contador = 1;

while(contador <= 10) {
    nota = parseInt(prompt("Digite a maior nota do " + contador + " aluno"))
    sexo = prompt("Digite o sexo aluno (m/f)")

    if(sexo == "m") {
        if(nota > homensMaiorNota) {
            homensMaiorNota = nota
        }
        qtdHomens++
    }

    if(sexo == "f" && nota > 7) {
        mulheresAcima7++
    }

    mediaGeral += nota
    contador++
}

mediaGeral = mediaGeral / 10

console.log("A média geral dos alunos foi: " + mediaGeral)
console.log("A quantidade de homens cadastrados foi: " + qtdHomens)
console.log("A quantidade de mulheres que tiveram nota acima de 7 foi: " + mulheresAcima7)
console.log("A maior nota entre os homens foi: " + homensMaiorNota)