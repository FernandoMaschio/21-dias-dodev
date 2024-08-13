/* Crie uma função que solicite ao seu usuário o que ele deseja fazer: cadastrar, fazer login, 
excluir um cadastro ou encerrar o programa. Essa função deve retornar a opção escolhida pelo usuário.

Crie uma função de cadastro que solicite dois valores ao usuário, um nome e uma senha
e guarde cada um no seu respectivo array.

Crie uma função de login que recebe dois valores como parâmetro, um nome e uma senha, 
depois procure o nome recebido no array de nomes e em caso positivo compare a senha no array de senhas.
Se as duas comparações forem válidas retorne true se uma delas não for válida retorne false.

Crie uma função de exclusão de cadastro que recebe um nome como parâmetro, 
então procure pelo nome no array de nomes e exclua ele e a senha correspondente do outro array.

Utilizando as funções criadas, faça o fluxo de funcionamento do código, considere que o usuário pode escolher
quando encerrar o programa conforme as opções e que no login caso seja bem sucedido retorna uma mensagem 
“Login feito com sucesso!” e em caso negativo “Nome ou senha incorretos!” */

// TENTE FAZER SOZINHO MAS ACHO QUE PRECISO ESTUDAR MAIS, FIQUEI UNS DIAS SEM ESTUDAR
// TIVE UM POUCO DE SINDROME DO IMPOSTOR E ACABEI ESQUECENDO MUITA COISA MAS VOU ME DEDICAR
// PARA APLICAR SOZINHO

let nomes = []
let senhas = []

function solicitaOpcao() {
    let opcao = prompt("ESCOLHA UMA DAS OPÇÕES: \n CADASTRAR (c) \n LOGIN (l) \n EXCLUIR (e)" +
        " \n SAIR (s)"
    )
    return opcao
}

function cadastro() {
    nomes.push(prompt("DIGITE SEU NOME: "))
    senhas.push(prompt("DIGITE SUA SENHA: "))
}

function login(nome, senha) {
    let indice = nomes.indexOf(nome)
    if (indice !== -1 && senhas[indice] == senha) {
        return true
    } else {
        return false
    }
}

function excluirCadastro(nome) {
    let indice = nomes.indexOf(nome)
    if (indice !== -1) {
        nomes.splice(indice, 1)
        senhas.splice(indice, 1)
        alert("Cadastro excluido com sucesso!")
    } else {
        alert("Usuario não encontrado!")
    }
}

let continuar = true
while (continuar) {
    let opcao = solicitaOpcao()
    let nome, senha

    switch (opcao) {
        case "c":
            cadastro()
            break
        case "l":
            nome = prompt("Digite seu nome: ")
            senha = prompt("Digite sua senha: ")
            let logar = login(nome, senha)
            if (logar) {
                alert("Login realizado com sucesso!")
            } else {
                alert("Nome ou senha incorretos!")
            }
            break
        case "e":
            nome = prompt("Digite seu nome: ")
            excluirCadastro(nome)
            break
        default:
            alert("Opção inválida. Tente novamente")
            break
    }
}