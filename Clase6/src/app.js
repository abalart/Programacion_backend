const express = require('express')
const fs = require('fs')
const ProductManager = require('./product_manager') //importo desafio2
 
const app = express()

const manager = new ProductManager(__dirname,'productos.json')

async function run() { //Englobo lo que es asincrono

await manager.addProduct('Mouse','Un Mouse',100,'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg','N295',100)

prods = await manager.getProducts()

} 

run()
app.get('/products', async (req, res) => {
const products = await manager.getProducts()  

  const limit = req.query.limit   //Recibo el parametro limit por query param

  if(limit){
      res.json(products.slice(0,limit)) //Si es informado muestro de 0 a limit
  }
  else{
      res.json(products)
  }
 })

 //http://localhost:8080/add?title=prueba&description=prueba2
app.post('/add', async (req, res) => {  //Recibe un objeto, lo escribe en el archivo y lo muestra en formato json por pantalla
  const body = req.query
  const obj = await manager.addProduct(body)

  res.json(obj)
 })

app.get('/products/:pid', async (req, res) => {   
  /* ruta ‘/products/:pid’, la cual debe recibir por req.params el pid (product Id), y devolver sólo
   el producto solicitado, en lugar de todos los productos. 
    */
   
   pid = req.params.pid  //Guardo el parametro recibido
   
   const products = await manager.getProducts()  
   const productToFind = products.find(product => product.id == pid)
   res.json(productToFind)  || console.log(`ERROR: EL PRODUCTO CON EL ID NO EXISTE.`);


 })


app.listen(8080,() => console.log('Server is running ...'))
