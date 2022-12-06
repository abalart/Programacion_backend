const fs = require ('fs')
const express = require('express')


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

    addProduct = async (obj) => {   
        const id = await this.getNextID()  //Obtengo ultimo id
        obj.id = id
        const list = this.getProducts()
        list.push(obj)
        return fs.promises.writeFile(this.filename, JSON.stringify(list))
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



//Exporto mi modulo
module.exports = ProductManager
  
  