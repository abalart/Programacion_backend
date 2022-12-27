//En ese archivo tendremos la logica de renderizado, de donde tomar CSS,etc
import express from 'express'
import ProductManager from '../product_manager.js'
import io from '../app.js'  //Para realTime

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

//realtimeproductst: Get,post,delete

router.get('/realtimeproducts', async (req, res) => {
    let products = await manager.getProducts()
    io.on('connection', socket => {
        console.log('New client connected')

        socket.on('addProduct', async data => {
            const productAdded = await manager.addProduct(data)
            products.push(productAdded)
            io.emit('showProducts', products)
        })
        
        socket.on('deleteProduct', async data => {
            let products = await manager.getProducts()
            await manager.deleteProduct(data.id)

            const filtered = products.filter(prod => prod.id != data.id)
            io.emit('showProducts', filtered)
        })
    })
    res.render('realTimeProducts', {products})
})

router.post('/realtimeproducts', async (req, res) => {
    let products = await manager.getProducts()

    const product = req.body
    const productAdded = await manager.addProduct(product)
    products.push(productAdded)

    res.json({ status: "success", productAdded })
    io.emit('showProducts', products)    
})

router.delete('/realtimeproducts/:pid', async (req, res) => {
    const pid = req.params.pid
    await manager.deleteProduct(pid)
    const products = await manager.getProducts()

    res.send({status: "success", msg: "Product deleted"})
    io.emit('showProducts', products)
})


export default router