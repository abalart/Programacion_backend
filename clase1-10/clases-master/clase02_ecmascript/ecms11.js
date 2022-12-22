const varTest = 0

// No Pasan 0 y "", se asigna Sin Valor
const varAssignable = varTest || "Sin valor"
console.log(varAssignable);


// Pasa 0 y "", Se asigna el 0 o el ""
const varAssignable2 = varTest ?? "Sin Valor"
console.log(varAssignable2);
console.log("-------------------------------------------------");
class Persona {
    #age
    constructor(name, lastname, age){
        this.name = name
        this.lastname = lastname
        this.#age = age
    }
    // Getter
    getAge = () => { return this.#age }
}


const lucas = new Persona("Lucas", "Rueda", 30)
console.log(lucas.getAge());