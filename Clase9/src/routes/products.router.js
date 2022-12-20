//Los archivos routes contrendran la logica y lista de endpoints agrupados por funcionalidades
import {Router} from 'express'
import ProductManager from '../product_manager.js'
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));



const router = Router()
const products=[]
const fileName = 'productos.json'
const manager = new ProductManager(__dirname,fileName)

console.log(__dirname) //C:\Users\Agustin\Desktop\Carrera_fullstack de CoderHouse\Programacion_backend\Clase9\src\routes\

router.get('/',async (req,res)=>{ 
    const prods = await manager.getProducts()
    console.log(prods)
    res.json({prods})
     
})


router.post('/', async (req,res)=>{ 
   const products = req.body
   const productAdded = await manager.addProduct(products)
   res.send({productAdded})
   res.send({status: 'OK', productAdded})
     
})

router.put('/:pid', async (req,res)=>{ 
   
   const pid = parseInt(req.params.pid)  //Guardo el parametro recibido
   const productToUpdate = req.body
   console.log(productToUpdate)
   console.log('ACTUALIZANDO')

   const products = await manager.getProductById(pid)  
  
   if(!product)  return res.status(404).send('Product not found')

   for(const key of Object.keys(productToUpdate)){
      product[key] = productToUpdate[key] //Piso el registro
   }
   await manager.updateProduct(pid,products)
   
   res.json({Status: "Producto actualizado",productToUpdate})
})

router.delete('/:pid', async(req, res) => {   
   
   const pid = parseInt(req.params.pid)  //Guardo el parametro recibido
   const deleteProduct =  await manager.deleteProduct(pid)
   res.send(deleteProduct)
 })


router.get('/:pid', async(req, res) => {   
   
   pid = req.params.pid  //Guardo el parametro recibido
   const products = await manager.getProducts()  
   const productToFind = products.find(product => product.id == pid)
   if(!res.json(productToFind))  return res.status(404).send('Product not found')

 })

//Get con limit
router.get('/', async (req, res) => {
const products = await manager.getProducts()  

  const limit = req.query.limit   //Recibo el parametro limit por query param

  if(limit){
      res.json(products.slice(0,limit)) //Si es informado muestro de 0 a limit
  }
  else{
      res.json(products)
  }
 })

 //Add con query params

 //http://localhost:8080/add?title=prueba&description=prueba2
 router.post('/add', async (req, res) => {  //Recibe un objeto, lo escribe en el archivo y lo muestra en formato json por pantalla
  const body = req.query   //Con req.query no hay que especificar parametros esperados
  const obj = await manager.addProduct(body)

  res.json(obj)  //Send a JSON response
  res.send('Objeto creado') //Send a response
  return res.status(200).send({Status:'Todo ok'})
 })

router.get('/products/:pid', async (req, res) => {   
   
   pid = req.params.pid  //Guardo el parametro recibido
   const products = await manager.getProducts()  
   const productToFind = products.find(product => product.id == pid)
   res.json(productToFind)  || console.log(`ERROR: EL PRODUCTO CON EL ID NO EXISTE.`);

 })



 async function run() { //Englobo lo que es asincrono en  esta funcion

//Agrego productos para realizar pruebas
await manager.addProduct('Mouse','Un Mouse',100,'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg','N295',100)

} 

run()

export default router