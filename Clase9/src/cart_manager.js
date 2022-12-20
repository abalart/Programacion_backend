import fs from 'fs'
 
class CartManager{


    //Constructor, se crea con un array vacio
    constructor(path,fileName){
        this.carts = []
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
       
    create = async (newCart) => {   //crea un carrito

         const carts = await this.getProducts()
         const id = await this.getNextID()  //Obtengo ultimo id
         newCart.id = id
         newCart.products = (newCart.products)? newCart.producs : []  
         console.log('El NextID del carrito es: '+id)

        carts.push(newCart)  //Agrego al archio el objeto ingresado por request
        await fs.promises.writeFile(this.filename, JSON.stringify(carts))

        }


    getProductById = async (id) =>{ 

        const data = await this.getProducts() 
        const productToFind = data.find(product => product.id === id)
        return productToFind || console.log(`ERROR  404: EL PRODUCTO CON EL ID "${id}" NO EXISTE.`);
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

    updateProduct = async (id,obj) => {
        obj.id = id
        const data = await this.getProducts()
        
        for(let i=0;i<data.length;i++) {
            if(data[i].id==id){
                list[id] = obj
                break
            }
    }
        
        fs.promises.writeFile(this.patch,JSON.stringify(list))
        console.log('ACTUALIZANDO')
    }
    
  
    
}

 
export default CartManager
 
  