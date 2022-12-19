import {Router} from 'express'

const router = Router()
const cart=[]

router.get('/',(req,res)=>{  //Obtener productos
    //res.json({cart})
    res.send({cart:cart})
})


router.post('/',(req,res)=>{
   const cart = req.body
   pets.push(cart)
   res.send({status:'Se agrego un producto al carrito'})
     
})

export default router