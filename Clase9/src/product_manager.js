import fs from 'fs'
 
class ProductManager{


    //Constructor, se crea con un array vacio
    constructor(fileName){


        this.products = []
        this.path = fileName
         
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
       return  fs.promises.readFile(this.path,'utf-8')
        .then(content => JSON.parse(content)) //Cuando se resuelve la promesa,convierto json a texto
     
        .catch(e => {
            console.log('ERROR',e)
              return []
        })
    
    }

       
    addProduct = async (obj) => { 
        
          
          obj.thumbnails=[]
          if(obj.status==null){
             obj.status = true 
          }
          if(obj.title==null || obj.description==null || obj.price==null || obj.code==null || obj.stock==null || obj.category==null){
             console.log('ERROR, faltan campos obligatorios') 
             return 0
          }
          else{
          const list = await this.getProducts() //Obtengo cuantos productos hay para calcular el id
          const nextId = await this.getNextID()  //Obtengo ultimo id
          let newProduct = { //Creo nuevo producto en base a lo recibido
            ...obj,
            id:nextId,
        }

       list.push(newProduct)  //Agrego al array el objeto ingresado por request
       await fs.promises.writeFile(this.path, JSON.stringify(list))
       return newProduct
            }
          
        }




    getProductById = async (id) =>{ 

        const data = await this.getProducts() 
        const productToFind = data.find(product => product.id === id)
        return productToFind || console.log(`ERROR  404: EL PRODUCTO CON EL ID "${id}" NO EXISTE.`);
    }

    
    deleteProduct = async (id) => {

        let flagDelete = true
        const data = await this.getProducts()
        const toBeDeleted = data.find(product => product.id === id)  //Obtengo el id del producto a eliminar

        if(toBeDeleted){ //Si existe el buscado 
            const index = data.indexOf(toBeDeleted) //Me quedo con su posicion
            data.splice(index, 1);
            await fs.promises.writeFile(this.path, JSON.stringify(data))
            console.log(`\n\nPRODUCTO ELIMINADO: ID "${id}".`);
            return flagDelete
        } else {
            console.log(`\n\nERROR AL ELIMINAR PRODUCTO: EL PRODUCTO CON EL ID "${id}" NO SE ENCUENTRA EN LA LISTA.`);
            return flagDelete=false
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
        
        fs.promises.writeFile(this.path,JSON.stringify(list))
        console.log('ACTUALIZANDO')
    }
    
    
    
}


//Exporto mi modulo
export default ProductManager
 
  