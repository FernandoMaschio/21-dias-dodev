class Hotel {
    constructor(Id, nome, categoria, endereco, telefone) {
        this.Id = Id;
        this.Nome = nome;
        this.Categoria = categoria;
        this.Endereco = endereco;
        this.Telefone = telefone;
    }
}

class Reserva {
    constructor(id, idHotel, responsavel, diaEntrada, diaSaida) {
        this.Id = id;
        this.IdHotel = idHotel;
        this.Responsavel = responsavel;
        this.DiaEntrada = diaEntrada;
        this.DiaSaida = diaSaida;
    }
}

let hoteis = [];
let reservas = [];
let idHotel = 1;
let idReserva = 1;

function CadastroHotel() {
    let nome = prompt("Digite o nome do hotel: ");
    let categoria = parseInt(prompt("Digite a categoria do hotel: "));
    let endereco = prompt("Digite o endereço do hotel: ");
    let telefone = prompt("Digite o telefone do hotel: ");
    let hotel = new Hotel(idHotel, nome, categoria, endereco, telefone);
    idHotel++;
    hoteis.push(hotel);
}

function CadastrarReserva() {
    let idHotel;
    let existe = false;
    do {
        idHotel = parseInt(prompt("Digite o id do hotel: "));
        for (let i = 0; i < hoteis.length; i++) {
            if (idHotel === hoteis[i].Id) {
                existe = true;
                break;
            } else if (i === hoteis.length - 1) {
                console.log("Id do hotel não encontrado!");
            }
        }
    } while (!existe);

    let nome = prompt("Digite o nome do responsável: ");
    let diaEntrada = parseInt(prompt("Digite o dia de entrada: "));
    let diaSaida;
    do {
        diaSaida = parseInt(prompt("Digite o dia de saída: "));
        if (diaSaida < diaEntrada) {
            console.log("O dia de saída deve ser maior que o dia de entrada!");
        }
    } while (diaSaida < diaEntrada);

    let reserva = new Reserva(idReserva, idHotel, nome, diaEntrada, diaSaida);
    idReserva++;
    reservas.push(reserva);
}

function ProcurarReservasPeloHotel(idHotel) {
    let hotelEncontrado = hoteis.find(hotel => hotel.Id === idHotel);
    if (!hotelEncontrado) {
        console.log("Hotel não encontrado!");
        return;
    }

    let reservasHotel = reservas.filter(reserva => reserva.IdHotel === idHotel);
    if (reservasHotel.length === 0) {
        console.log("Nenhuma reserva encontrada para o hotel:", hotelEncontrado.Nome);
        return;
    }

    reservasHotel.forEach(reserva => {
        console.log("Hotel:", hotelEncontrado.Nome);
        console.log("Responsável:", reserva.Responsavel);
        console.log("Dia de entrada:", reserva.DiaEntrada);
        console.log("Dia de saída:", reserva.DiaSaida);
    });
}

function ProcurarHotelPelaReserva(idReserva) {
    if (idReserva < 1 || idReserva > reservas.length) {
        console.log("Reserva não encontrada!");
        return;
    }

    let reserva = reservas[idReserva - 1];
    let hotel = hoteis.find(hotel => hotel.Id === reserva.IdHotel);

    if (!hotel) {
        console.log("Hotel não encontrado!");
        return;
    }

    console.log("Hotel:", hotel.Nome);
    console.log("Endereço:", hotel.Endereco);
    console.log("Dia de entrada:", reserva.DiaEntrada);
    console.log("Dia de saída:", reserva.DiaSaida);
}

function ProcurarReservasPeloNome(nome) {
    let reservasEncontradas = reservas.filter(reserva => reserva.Responsavel === nome);

    if (reservasEncontradas.length === 0) {
        console.log("Nenhuma reserva encontrada para o responsável:", nome);
        return;
    }

    reservasEncontradas.forEach(reserva => {
        console.log("ID da reserva:", reserva.Id);
        console.log("Hotel:", hoteis.find(hotel => hotel.Id === reserva.IdHotel).Nome);
    });
}

function ProcurarHotelPelaCategoria(categoria) {
    let hoteisProcurados = hoteis.filter(hotel => hotel.Categoria === categoria).map(hotel => hotel.Nome);

    if (hoteisProcurados.length === 0) {
        console.log("Nenhum hotel encontrado na categoria:", categoria);
        return;
    }

    console.log("Hotéis encontrados:", hoteisProcurados.join(", "));
}

function AtualizarTelefone(idHotel, telefone) {
    let hotel = hoteis.find(hotel => hotel.Id === idHotel);

    if (!hotel) {
        console.log("Hotel não encontrado!");
        return;
    }

    hotel.Telefone = telefone;
    console.log("Número de telefone atualizado!");
}

let continuar = true;
do {
    let opcao = prompt("Escolha uma opção: \n1- Cadastrar hotel \n2- Cadastrar reserva \n3- Procurar reserva pelo hotel" +
        "\n4- Procurar hotel pela reserva \n5- Procurar reserva pelo responsável \n6- Procurar hotel por categoria" +
        "\n7- Atualizar telefone do hotel \n8- Encerrar programa"
    );
    switch (opcao) {
        case "1":
            CadastroHotel();
            break;
        case "2":
            CadastrarReserva();
            break;
        case "3":
            ProcurarReservasPeloHotel(parseInt(prompt("Digite o id do hotel:")));
            break;
        case "4":
            ProcurarHotelPelaReserva(parseInt(prompt("Digite o id da reserva:")));
            break;
        case "5":
            ProcurarReservasPeloNome(prompt("Digite o nome do responsável pela reserva:"));
            break;
        case "6":
            ProcurarHotelPelaCategoria(parseInt(prompt("Digite a categoria que deseja procurar:")));
            break;
        case "7":
            let idHotelInput = parseInt(prompt("Digite o id do hotel que deseja atualizar:"));
            let telefone = prompt("Digite o novo telefone:");
            AtualizarTelefone(idHotelInput, telefone);
            break;
        case "8":
            console.log("Programa encerrado");
            continuar = false;
            break;
        default:
            console.log("Opção inválida");
            break;
    }
} while (continuar);
