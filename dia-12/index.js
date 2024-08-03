/* Crie 2 arrays: um para nomes e um para senhas

Solicite ao seu usuário o que ele deseja fazer: cadastrar, fazer login, excluir um cadastro ou encerrar o programa.

Faça o fluxo de funcionamento do código, considere que o usuário pode escolher quando encerrar o programa conforme as opções.

Se a opção escolhida for cadastro, solicite dois valores ao usuário, um nome e uma senha e guarde cada um no seu respectivo array.

Se a opção escolhida for login solicite ao usuário um nome e uma senha, depois procure o nome recebido no array de nomes e em caso positivo compare a senha no array de senhas. 

Se as duas comparações forem válidas exiba uma mensagem de sucesso

Se a opção escolhida for excluir um cadastro solicite um nome ao usuário, 
então procure pelo nome no array de nomes e exclua ele e a senha correspondente do outro array,

por fim organize o array para eliminar os espaços vazios. */


// TENTEI FAZER O MÁXIMO POSSIVEL SOZINHO E CONSEGUI BOA PARTE DO CÓDIGO
// TIVE ALGUNS BUGS E FIZ COISAS A MAIS DO QUE ESTAVA PEDINDO E TAMBÉM NÃO ESTAVA CONSEGUINDO FAZER COM QUE CADA INTERAÇÃO
// DO USUÁRIO O SISTEMA VOLTASSE PARA AS OPÇÕES INICIAIS NÃO ENTENDI SE ERA ESSE O PROPOSITO QUE O PROFESSOR QUERIA
// MAS ACABEI PEDINDO AJUDA DO CHATGPT ELE DEU ALGUMAS DICAS E TAMBEM ALTEROU COISAS NO MEU CÓDIGO COMO MUDAR DE CONSOLE.LOG PARA ALERT
// E A MAIOR PARTE DO CÓDIGO DE EXCLUSÃO FOI FEITA PELO CHATGPT
// VOU ESTUDAR MAIS PARA QUE DA PRÓXIMA EU CONSIGA CONSTRUIR A LÓGICA E A ESTRUTURA DO CÓDIGO SOZINHO.
// ESTOU SATISFEITO PORQUE FIZ GRANDE PARTE DO CÓDIGO SOZINHO. 


let nomes = []
let senhas = []

function menuPrincipal() {
    let mensagem

    do {
        mensagem = prompt("Escolha uma das opções: \n Cadastrar \n Fazer login \n Excluir \n Sair")

        switch (mensagem.toLowerCase()) {
            case "cadastrar":
                let nome = prompt("Qual o seu nome?")
                let senha = prompt("Digite uma senha:")
                nomes[nomes.length] = nome
                senhas[senhas.length] = senha
                alert("Cadastro realizado com sucesso!")
                break;

            case "fazer login":
                let perguntaNome = prompt("Digite seu nome de usuário:")
                let perguntaSenha = prompt("Digite sua senha:")
                let verificacao = false
                for (let i = 0; i < nomes.length; i++) {
                    if (nomes[i] === perguntaNome && senhas[i] === perguntaSenha) {
                        verificacao = true
                        break;
                    }
                }
                if (verificacao) {
                    alert("Login realizado com sucesso!")
                } else {
                    alert("Usuário ou senha incorretos!")
                }
                break;

            case "excluir":
                let excluirNome = prompt("Digite o usuário que deseja excluir:")
                let novosNomes = []
                let novasSenhas = []
                let encontradoExcluir = false

                for (let i = 0; i < nomes.length; i++) {
                    if (nomes[i] === excluirNome) {
                        encontradoExcluir = true
                    } else {
                        novosNomes[novosNomes.length] = nomes[i]
                        novasSenhas[novasSenhas.length] = senhas[i]
                    }
                }

                if (encontradoExcluir) {
                    nomes = novosNomes
                    senhas = novasSenhas
                    alert("Usuário excluído com sucesso!")
                } else {
                    alert("Usuário não encontrado!")
                }
                break;

            case "sair":
                alert("Saindo do sistema :( ")
                break;

            default:
                alert("Opção inválida!")
        }
    } while (mensagem.toLowerCase() !== "sair")
}

menuPrincipal()
