//Los archivos routes contrendran la logica y lista de endpoints agrupados por funcionalidades
import {Router} from 'express'
import ProductManager from '../product_manager.js'
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));



const router = Router()
const fileName = 'productos.json'
const manager = new ProductManager(fileName)



//Get con limit
router.get('/products', async (req, res) => {
const products = await manager.getProducts()  

  const limit = req.query.limit   //Recibo el parametro limit por query param

  if(limit){
      res.json(products.slice(0,limit)) //Si es informado muestro de 0 a limit
  }
  else{
      res.json(products)
  }
 })

//getAll
router.get('/',async (req,res)=>{ 
    const prods = await manager.getProducts()
    res.json({prods})
     
})

//Add
router.post('/', async (req,res)=>{ 
   const products = req.body
   const productAdded = await manager.addProduct(products)
   if(productAdded == 0){
       res.send({status: 'Error,faltan campos obligatorios'})
   }
   else{res.send({status: 'OK', productAdded})}
   
     
})

//PutById
router.put('/:pid', async (req,res)=>{ 
   
   const pid = parseInt(req.params.pid)  //Guardo el parametro recibido
   const productToUpdate = req.body
   console.log(productToUpdate)
   console.log('ACTUALIZANDO')

   const products = await manager.getProductById(pid)  
  
   if(!products)  return res.status(404).send('Product not found')

   for(const key of Object.keys(productToUpdate)){
      product[key] = productToUpdate[key] //Piso el registro
   }
   await manager.updateProduct(pid,products)
   
   res.json({Status: "Producto actualizado",productToUpdate})
})

//DeleteById
router.delete('/:pid', async(req, res) => {   
   
   const pid = parseInt(req.params.pid)  //Guardo el parametro recibido
   const deleteProduct =  await manager.deleteProduct(pid)
   if(deleteProduct)
   res.send("Producto eliminado")
   else
   return res.status(404).send('Product to eliminate not found')
 })

//GetById
router.get('/:pid', async(req, res) => {   
   
   pid = req.params.pid  //Guardo el parametro recibido
   const products = await manager.getProducts()  
   const productToFind = products.find(product => product.id == pid)
   if(!res.json(productToFind))  return res.status(404).send('Product not found')

 })
 
router.get('/products/:pid', async (req, res) => {   
   
   pid = req.params.pid  //Guardo el parametro recibido
   const products = await manager.getProducts()  
   const productToFind = products.find(product => product.id == pid)
   res.json(productToFind)  || console.log(`ERROR: EL PRODUCTO CON EL ID NO EXISTE.`);

 })



 async function run() { //Englobo lo que es asincrono en  esta funcion

//Agrego productos para realizar pruebas
//await manager.addProduct('Mouse','Un Mouse',100,'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg','N295',100)

} 

run()

export default router