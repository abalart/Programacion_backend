
class Counter{ //Defino la clase contador

    constructor(responsable){
        this.responsable = responsable
        this.countLocal = 0
    }

    static countGlobal = 0 /*
    Una variable estática (static) en Java es una variable que pertenece a la clase en que fue declarada y se inicializa 
    solo una vez al inicio de la ejecución del programa, la característica principal de este tipo de variables es que se puede acceder
     directamente con el nombre de la clase sin necesidad de crear un objeto

     Hay una sola copia de la variable, compartida por todas las instancias que se creen de esa clase.
    */

    

    getCountGlobal(){
        return this.getCountGlobal
    }

    getResponsable = () => { return this.responsable }


    getCountLocal = () => { return this.countLocal }


    count(){
        this.countLocal++ //aumento cuenta indivitual
        Counter.countGlobal++ //aumento cuenta global
    }

    speak(){

        console.log("Hola! soy: "+ this.getResponsable())
    }

}

//Uso los constructores

const Pablo = new Counter("Pablo")

const Juan = new Counter("Juan")

//Uso los metodos declarados en la clase 
Pablo.count()

Juan.count()

Pablo.speak()

Juan.speak()

console.log(`${Pablo.getResponsable()}: ${Pablo.getCountLocal()}`); //Muestro la info con string templates

console.log(`${Juan.getResponsable()}: ${Juan.getCountLocal()}`);

console.log(Counter.countGlobal);

