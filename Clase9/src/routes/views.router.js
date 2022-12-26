//En ese archivo tendremos la logica de renderizado, de donde tomar CSS,etc
import express from 'express'
import ProductManager from '../product_manager.js'

const router = express.Router()

const fileName = 'productos.json'
const manager = new ProductManager(fileName)



//Listado de productos
router.get('/',async (req,res)=>{
   const list = await manager.getProducts()
  
    res.render('home',{
        list
    })

})



export default router