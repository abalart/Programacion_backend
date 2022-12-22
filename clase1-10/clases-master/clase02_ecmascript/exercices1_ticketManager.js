class TicketManager {

    #precioBaseDeGanancia
    constructor() {
        this.events = []
        this.#precioBaseDeGanancia = 0.15
    }

    getEvents = () => { return this.events }
    getNextID = () => {
        const count = this.events.length

        if (count > 0) {
            const lastEvent = this.events[count-1]
            const id = lastEvent.id + 1
            
            return id
        } else {

            return 1
        }
    }

    addEvent = (name, place, price, capacity, date) => {
        const id = this.getNextID()
        const event = {
            id,
            name,
            place,
            price: price * (1 + this.#precioBaseDeGanancia),
            capacity: capacity ?? 50,
            date: date ?? new Date().toLocaleDateString(),
            participants: []
        }
        
        this.events.push(event)
    }


}

const ticketManager = new TicketManager()
ticketManager.addEvent("Bad Bunny", "Medellin", 120, 0, 0)
ticketManager.addEvent("AC DC", "Miami", 1000, 0, 0)


console.log(ticketManager.getEvents());
