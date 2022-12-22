
class Counter {

    constructor(responsible) {
        this.responsible = responsible
        this.countLocal = 0
    }

    static countGlobal = 0

    getResponsible = () => { return this.responsible }
    getCountLocal = () => { return this.countLocal }
    getCountGlobal = () => { return this.countGlobal }

    count() {
        this.countLocal++
        Counter.countGlobal++
    }

}

const jhonatan = new Counter("jhonatan")
const maximo = new Counter("maximo")
const r2 = new Counter("R2")
const daniela = new Counter("daniela")

jhonatan.count()
jhonatan.count()
r2.count()
daniela.count()
daniela.count()
daniela.count()
r2.count()
daniela.count()
daniela.count()
maximo.count()

console.log(`${jhonatan.getResponsible()}: ${jhonatan.getCountLocal()}`);
console.log(`${maximo.getResponsible()}: ${maximo.getCountLocal()}`);
console.log(`${r2.getResponsible()}: ${r2.getCountLocal()}`);
console.log(`${daniela.getResponsible()}: ${daniela.getCountLocal()}`);

console.log(Counter.countGlobal);