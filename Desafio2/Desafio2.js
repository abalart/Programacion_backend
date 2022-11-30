const fs = require ('fs') //De ahí en adelante todo el módulo de FileSystem 
//estará contenido en la variable fs. Sólo debemos utilizarlo llamando sus métodos como una clase. Esto podremos hacerlo de 3 formas: síncrono, con callbacks o con promesas.

 

class ProductManager{


    //Constructor, se crea con un array vacio
    constructor(path,fileName){
       
        this.patch = path
        this.filename = fileName
    }

    getNextID = async() => { //metodo asincronico
 
        const data = await this.getProducts()  //Recibo el contenido del archivo en formato de texto
        const count = data.length //Cantidad de registros

        if (count == 0) return 1; //Si no hay productos  el id es 1

        const lastProduct = data[count - 1] //Accedo al ultimo elemento
        const lastID = lastProduct.id //Obtengo su id
        const nextID = lastID + 1

        return nextID

    }



     getProducts = async() => {
       return  fs.promises.readFile(this.filename,'utf-8')
        .then(content => JSON.parse(content)) //Cuando se resuelve la promesa,convierto json a texto
     
        .catch(e => {
            console.log('ERROR',e)
              return []
        })
    
    }

    addProduct = async (title,description,price,thubmail,code,stock) => {   
        const id = await this.getNextID()  //Obtengo ultimo id

        return this.getProducts()
        .then(products =>{
            products.push({id,title,description,price,thubmail,code,stock})
               return products
        })
         .then(newProduct => fs.promises.writeFile(this.filename, JSON.stringify(newProduct)))
    }
     
    //Agregar titulo y stock por parametro
    updateProduct = async (id) => { 
        const data = await this.getProducts()  //Obtengo array en formato json de productos
        const toBeUpdated = data.find(product => product.id === id) //Obtengo elemnto que cumple con el id

        toBeUpdated["title"] = "PRODUCTO ACTUALIZADO"
        toBeUpdated["stock"] = 150
        
        fs.writeFileSync(this.fileName, JSON.stringify(data))
    }


    getProductById = async (id) =>{ 

        const data = await this.getProducts() 
        const productToFind = data.find(product => product.id === id)
        return productToFind || console.log(`ERROR: EL PRODUCTO CON EL ID "${id}" NO EXISTE.`);
    }

    
    deleteProduct = async (id) => {
        const data = await this.getProducts()
        const toBeDeleted = data.find(product => product.id === id)

        if(toBeDeleted){ //Si existe el buscado 
            const index = data.indexOf(toBeDeleted) //Me quedo con su posicion
            data.splice(index, 1);
            await fs.promises.writeFile(this.patch, JSON.stringify(data))
            console.log(`\n\nPRODUCTO ELIMINADO: ID "${id}".`);
        } else {
            console.log(`\n\nERROR AL ELIMINAR PRODUCTO: EL PRODUCTO CON EL ID "${id}" NO SE ENCUENTRA EN LA LISTA.`);
        }
    }

    updateProduct = async (id) => {
        const data = await this.getProducts()
        const toBeUpdated = data.find(product => product.id === id)

        toBeUpdated["title"] = "PRODUCTO ACTUALIZADO"
        toBeUpdated["stock"] = 999999
        
        fs.writeFileSync(this.patch, JSON.stringify(data))
    }

}

async function run() {
     
    const gestionador = new ProductManager('C:\Users\Agustin\Desktop\Carrera_fullstack de CoderHouse\Programacion_backend\Desafio2','desafio.json') //Creo  una instancia
    await gestionador.addProduct('notebook','Una notebook',100,'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg','N001',100)
    await gestionador.addProduct('Celular','Motorola 1023',50,'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg','N002',6)
    await gestionador.addProduct('TV','Televisor para ver como ganamos, VAMOS MESSIIII!!!!!',500,'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg','N003',6)
    let oneProduct = await gestionador.getProductById(2)
    let allProducts = await gestionador.getProducts()

    console.log('El contenido del archivo es: ')
    console.log(allProducts);
    console.log('El producto buscado es: ')
    console.log(oneProduct);

     await  gestionador.updateProduct(1)
     await  gestionador.deleteProduct(2)
   
}


run()



  
  