const fs = require ('fs') //De ahí en adelante todo el módulo de FileSystem 
//estará contenido en la variable fs. Sólo debemos utilizarlo llamando sus métodos como una clase. Esto podremos hacerlo de 3 formas: síncrono, con callbacks o con promesas.

 

class ProductManager{

    //La clase debe contar con una variable this.path, el cual se inicializará desde el constructor
    //y debe recibir la ruta a trabajar desde el momento de generar su instancia.

    //Constructor, se crea con un array vacio
    constructor(path,fileName){
       
        this.patch = path
        this.filename = fileName
    }

    getNextID = () => { //metodo

         
        const count = this.product.length  //cantidad de productos, elementos en el array
        if (count == 0) return 1 //Si no hay productos, entonces el id es 1

        const lastProduct = this.product[count-1]
        const lastID = lastProduct.id
        const nextID = lastID + 1
        return nextID

    }

//Getter y setters
    /*Debe tener un método getProducts, el cual debe leer el archivo de productos y devolver todos los productos en formato de arreglo. */

     getProducts = async() => {
       return  fs.promises.readFile(this.filename,'utf-8')
        .then(content => JSON.parse(content)) //Cuando se resuelve la promesa,convierto json a texto
     
        .catch(e => {
            console.log('ERROR',e)
              return []
        })
    
    }

    addProduct = async (title,description,price,thubmail,code,stock) => {  //Metodo
        const id = getNextID() //Hacer autoincremental
        return this.getProducts()
        .then(products =>{
            products.push({id,title,description,price,thubmail,code,stock})
               return products
        })
         .then(newProduct => fs.promises.writeFile(this.filename, JSON.stringify(newProduct)))
    }
     
    

    
    //update product, recibe un id y el campo a actualiza o un id y el objeto entero a actualizar
    updateProduct = async (id) => {
        const data = await this.getProducts()
        const toBeUpdated = data.find(product => product.id === id)

        toBeUpdated["title"] = "PRODUCTO ACTUALIZADO"
        toBeUpdated["stock"] = 150
        
        fs.writeFileSync(this.fileName, JSON.stringify(data))
    }


    //delete product, recibe un id y borra el registro del archivo

    getProductById (id) { //Convertir para que busque por id dentro del archivo

    let element = this.product.filter(product => product.id == id)  //Filter devuelve los elementos que coinciden con la busqueda
    
    if(element.length === 0) {  
            console.log('Not found')
       } 
       else 
       {
             console.log('El elemento buscado es '+JSON.stringify(element))
             
       }
    }

}

async function run() {
     
    const gestionador = new ProductManager('C:\Users\Agustin\Desktop\Carrera_fullstack de CoderHouse\Programacion_backend\Desafio2','desafio.json') //Creo  una instancia
    await gestionador.addProduct('notebook','Una notebook',100,'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg','N001',100)
    await gestionador.addProduct('Celular','Motorola 1023',50,'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg','N002',6)
    let res = await gestionador.getProducts()
    console.log(res);
}


run()



  
  