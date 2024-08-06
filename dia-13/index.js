/* Crie uma classe Carro com as seguintes propriedades:

    Nome - qual a equipe do carro Ferrari, Mercedes, McLaren, etc;
    Potencia - número de cavalos de potência do carro;
    VelocidadeMaxima - qual a maior velocidade que o carro pode alcançar;
    Aceleracao - o tempo em segundos que o carro leva para ir de 0 a 100 km/h

Adicione na classe carro um método que recebe como parâmetro uma distância em metros e calcula o tempo em segundos para percorrer essa distância.
Use a seguinte fórmula para o cálculo: 

    resultado = distância / (VelocidadeMaxima / Aceleracao). 

A função deve retornar esse resultado; 

Crie uma classe Corrida com as seguintes propriedades:

    Nome - nome do local da corrida;
    Tipo - uma corrida pode ser Fórmula 1, Stock Car, Rally, etc;
    Distancia - o total em metros da corrida;
    Participantes - um array de objetos da classe Carro
    Vencedor - qual a equipe que ganhou a corrida;

Adicione na classe Corrida um método que verifica qual foi o carro que completou a corrida em menor tempo, 
para isso utilize o método criado na classe carro. Salve o nome do carro que fez o menor tempo na propriedade “Vencedor”.

Adicione na classe Corrida um método que exibe na tela quem é o vencedor da corrida.

Crie um objeto da classe Corrida e preencha a propriedade Participantes com alguns objetos da calsse Carro.

Chame o método para verificar quem fez o menor tempo e por fim o método que exibe o vencedor. */

// CONSEGUI FAZER A PRIMEIRA FASE DO EXERCICIO DE FORMA FÁCIL MAS QUANDO CHEGOU NA PARTE DA CORRIDA
// ACABEI ME PERDENDO UM POUCO E NÃO ENTENDI COMO IRIA FUNCIONAR MAS COM UM POUCO MAIS DE PRATICA E ESTUDOS
// CONSEGUIREI EXECUTAR DE FORMA CORRETA O EXERCICIO

class Carro {
    nome
    potencia
    velocidadeMaxima
    aceleracao
    constructor(nome, potencia, velocidadeMaxima, aceleracao) {
        this.nome = nome
        this.potencia = potencia
        this.velocidadeMaxima = velocidadeMaxima
        this.aceleracao = aceleracao
    }
    CalcularTempo(distancia) {
        let resultado = distancia / (this.velocidadeMaxima / this.aceleracao)
        return resultado
    }
}

class Corrida {
    nome
    tipo
    distancia
    participantes
    vencedor
    constructor(nome, tipo, distancia) {
        this.nome = nome
        this.tipo = tipo
        this.distancia = distancia
        this.vencedor = ""
        this.participantes = []
    }

    DefinirVencedor() {
        let menorTempo = this.participantes[0].CalcularTempo(this.distancia)
        let vencedor = this.participantes[0]

        for(let i = 1; i < this.participantes.length; i++) {
            let tempo = this.participantes[i].CalcularTempo(this.distancia)
            if(tempo < menorTempo) {
                menorTempo = tempo
                vencedor = this.participantes[i]
            }
        }
        return this.vencedor = vencedor
    }
    ExibirVencedor() {
        alert("O vencedor é: " + this.vencedor.nome)
    }
}

let corrida = new Corrida("Monza", "Formula 1", 6000)

corrida.participantes[0] = new Carro("Kicks", 120, 160, 5)
corrida.participantes[1] = new Carro("Mareza", 210, 200, 9)
corrida.participantes[2] = new Carro("Fusca", 200, 130, 10)

corrida.DefinirVencedor()
corrida.ExibirVencedor()


/* Crie uma classe para representar o seu computador:

    Tipo - desktop ou notebook;
    Processador - nome do seu processador, ex: Ryzen 5
    Video - Integrado ou Dedicado;
    Armazenamento - número em GB de memória, ex: 500 ou 1000;
    MemoriaRam - número em GB de memória, ex: 4, 8 ou 16;
    SSD - True ou False

Implemente um método nessa classe para exibir as informações no console */

// CONSEGUI ENTENDER E EXECUTAR O EXERCICIO PROPOSTO

class Computador {
    tipo
    processador
    video
    armazenamento
    ram
    ssd
    constructor(tipo, processador, video, armazenamento, ram) {
        this.tipo = tipo
        this.processador = processador
        this.video = video
        this.armazenamento = armazenamento
        this.ram = ram
    }
    ExibirInformacao() {
        console.log('Informações do computador:')
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Processador: ${this.processador}`)
        console.log(`Vídeo: ${this.video}`)
        console.log(`Armazenamento: ${this.armazenamento}`)
        console.log(`Ram: ${this.ram}`)
        console.log(`SSD: ${this.ssd}`)
    }
}

let meuComputador = new Computador('Notebook', 'Intel i5', 'integrado', 256, 8, true)
meuComputador.ExibirInformacao()