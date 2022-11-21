class ProductManager{

  

    //Constructor, se crea con un array vacio
    constructor(){
        this.product = []
    
    }

    getNextID = () => { //metodo

        const count = this.product.length  //cantidad de productos, elementos en el array
        if (count == 0) return 1 //Si no hay productos, entonces el id es 1

        const lastProduct = this.product[count-1]
        const lastID = lastProduct.id
        const nextID = lastID + 1
        return nextID

    }

    addProduct = (title,description,price,thubmail,code,stock) => {  //Metodo
    const id = this.getNextID()  //No espera id en el metodo


//Validar que no se repita el campo “code” y que todos los campos sean obligatorios


    const product = {
        id, //Hacer autoincrementable
        title,
        description,
        price,
        thubmail,
        code, //Validar que no se repita cuando se cree un producto
        stock,
        }

        this.product.push(product) //Agrego elemento al array
    }

    //Getter y setters

     getProduct = () => {return this.product}

    getProductById (id) {
    
    let element = this.product.filter(product => product.id == id)  //Filter devuelve los elementos que coinciden con la busqueda
    
    if(element.length === 0) {  
            console.log("Not found")
       } 
       else 
       {
             console.log("El elemento buscado es "+JSON.stringify(element))
             
       }
    }

}

const gestionador = new ProductManager() //Creo  una instancia


gestionador.addProduct("notebook","Una notebook",100,"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","N001",100) //Agrego un producto al array

gestionador.addProduct("Celular","Motorola 1023",50,"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","N002",6)  

gestionador.addProduct("Mouse","Motorola 1023",50,"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","N003",74)   

console.log(gestionador.getProduct())

 gestionador.getProductById(1)

 gestionador.getProductById(10) //Not found