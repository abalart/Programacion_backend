
class Persona {
    constructor(nombre) {
        console.log("Se ha creado una persona");

        this.name = nombre
        this.age = 30
    }

    static especie = "humano"

    speak() {
        console.log("My name is ", this.name, Persona.especie);
    }

    walk = () => {
        console.log("Like moon walk!!");
    }

}

const agustin = new Persona("Agustin")
const imanol = new Persona("Imanol")
const lucas = new Persona("Lucas") 

imanol.age = 35
Persona.especie = "Homo Sapiens"

agustin.speak()
imanol.speak()
lucas.speak()
