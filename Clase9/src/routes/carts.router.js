import {Router} from 'express'
import CartManager from '../cart_manager.js'

const router = Router()



const fileName = 'carrito.json'
const cartManager = new CartManager(fileName);

router.post('/', async (req, res) => {
    const newCart = await cartManager.addCart()
    res.send({newCart})
})

router.get('/:cid', async (req, res) => {
    const cartId = req.params.cid
    const selCart = await cartManager.getCartById(cartId)
    res.send({selCart})
})

router.get('/', async (req, res) => {
    const carts = await cartManager.getCarts()
    res.send({carts})
})

router.post('/:cid/product/:pid', async (req, res) => {
    const cartId = req.params.cid
    console.log('CARTID '+cartId)

    const productId = parseInt(req.params.pid)
    console.log('PRODID '+productId)
    await cartManager.addProductById(cartId,productId,1)//Siempre incrementa en 1
    const selCart = await cartManager.getCartById(cartId)
    res.send({selCart})
})

export default router