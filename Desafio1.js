class ProductManager{

    //Constructor
    constructor(){
        this.product = []
    
    }

    addProduct = (id,title,description,price,thubmail,code,stock) => {  //Metodo

    const product = {
        id, //Hacer autoincrementable
        title,
        description,
        price,
        thubmail,
        code, //Validar que no se repita cuando se cree un producto
        stock,
        }

        this.product.push(product)   
    }

    //Getter y setters

     getProduct = () => {return this.product}

    getProductById (id) {
          
        return product.find(this.product.id === id)   }

}


const gestionador = new ProductManager() //Crep una instancia

gestionador.addProduct(1,"notebook","Una notebook",100,"imagen",99,100)


console.log(gestionador.getProduct())

console.log(gestionador.getProductById(1))