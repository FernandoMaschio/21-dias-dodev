/* Crie uma função que pergunte o nome e o salário de um colaborador;

Depois crie uma função que deve ser chamada dentro da função que solicita as informações,
essa função irá calcular o aumento de salário conforme a seguinte tabela:

- ATÉ R$1.500,00 : aumento de 20%
- R$1.501,00 até R$2.000,00 : aumento de 15%
- R$2.001,00 até R$3.000,00 : aumento de 10%
- R$3.001,00 em diante : aumento de 5%

Depois de calcular o aumento você deve exibir: o nome do colaborador, o salário, a % de aumento e o salário reajustado.

Crie uma função que  deve ser chamada no final da função que calcula o reajuste salarial, 
essa função deve perguntar se o usuário deseja calcular novamente com novas informações.

Para testar basta chamar a primeira função criada, e as outras serão chamadas na sequência conforme a execução do código */
   
// TENTEI RESOLVER SOZINHO MAS ACABEI NÃO CONSEGUINDO TENHO QUE ESTUDAR MAIS
// PEGUEI ALGUMAS COISAS DA RESPOSTA DO PROFESSOR, CONSEGUI ENTENDER COMO A LÓGICA IRIA FUNCIONAR
// MAS NÃO CONSEGUI EXECUTAR SOZINHO
// TENTEI FAZER DE NOVO MAS DESSA VEZ SEM CONSULTAR NADA E CONSEGUI EXECUTAR.

var nome;
var salario;

function colaborador() {
    nome = prompt("Qual o seu nome: ");
    salario = parseFloat(prompt("Qual o seu salário: "));
    solicitacao(nome, salario);
}

function solicitacao(nome, salario) {
    var aumento = 0;
    if (salario <= 1500) {
        aumento = 0.20;
    } else if (salario <= 2000) {
        aumento = 0.15;
    } else if (salario <= 3000) {
        aumento = 0.10;
    } else {
        aumento = 0.05;
    }

    var novoSalario = salario + (salario * aumento);

    console.log(`Colaborador: ${nome}`);
    console.log(`Salário: ${salario}`);
    console.log(`Aumento: ${aumento * 100}%`);
    console.log(`Reajuste de salario para: ${novoSalario}`);

    perguntaNovamente();

}

function perguntaNovamente() {
    var pergunta = prompt("Deseja calcular novamente? (s/n)");

    if(pergunta == "s") {
        colaborador();
    } else {
        console.log("Programa encerrado!");
    }
}

let resposta = colaborador();

