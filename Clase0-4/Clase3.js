
class TicketManager{

    #precioBaseDeGanancia //La variable privada debe estar fuera del constructor, se identifica con #

    constructor() {
     this.evento = []
     this.#precioBaseDeGanancia=0.15; //variable privada, debe ir dentro del constructor

    }

    getEvents = () => { return this.evento }

    getNxtID = () => { 
        id=1

    }

    addEvent = (name,place,price,capacity,date) => { 

        const id = 1
       
        const evento = { //Defino un objeto
            id,
            name,
            place,
            price: price*(1 + this.#precioBaseDeGanancia),
            capacity: capacity ?? 50,
            date: date?? new Date().toLocaleDateString(),
            participants: []
        }

        this.evento.push(evento) //Inserto la info del objeto en el array de evento mediante el push
    }


}

const ticketManager = new TicketManager()

ticketManager.addEvent("Coldplay","Barcelona",120,0,0)

ticketManager.addEvent("Soda Estereo","Madrid",50,0,0)

console.log(ticketManager.getEvents())