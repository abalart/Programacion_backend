//En ese archivo tendremos la logica de renderizado, de donde tomar CSS,etc
import express from 'express'

const router = express.Router()


//Listado de productos




router.get('/',(req,res)=>{
    let prueba = {
        name: 'efdgvdsfdv'
    }
    res.render('home',prueba)

})


export default router